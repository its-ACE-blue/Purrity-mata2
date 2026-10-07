/* Small, dependency-free TeX-to-MathML renderer for this project's expressions.
   It supports the project's finite notation set; it is not a general TeX engine. */
function mathMarkup(source, display=false) {
  let i=0;
  const symbols={pi:'π',alpha:'α',beta:'β',gamma:'γ',theta:'θ',sigma:'σ',mu:'μ',Omega:'Ω',infty:'∞',cdot:'·',times:'×',pm:'±',approx:'≈',ne:'≠',neq:'≠',ge:'≥',geq:'≥',le:'≤',leq:'≤',cap:'∩',cup:'∪',Rightarrow:'⇒',Leftrightarrow:'⇔',to:'→',prime:'′',circ:'°',cdots:'⋯',ldots:'…',int:'∫',sum:'∑'};
  function group(){while(source[i]===' ')i++;if(source[i]==='{'){i++;return seq('}')}if(/[0-9]/.test(source[i]||''))return '<mn>'+source[i++]+'</mn>';return atom()}
  function atom(){
    while(source[i]===' ')i++;
    if(i>=source.length)return '<mrow></mrow>';
    const ch=source[i++];
    if(ch==='{')return seq('}');
    if(ch==='\\'){
      const m=source.slice(i).match(/^[A-Za-z]+/);const cmd=m?m[0]:source[i++];if(m)i+=cmd.length;
      if(['left','right','bigl','bigr','displaystyle'].includes(cmd))return atom();
      if(cmd==='frac')return '<mfrac>'+group()+group()+'</mfrac>';
      if(cmd==='sqrt'){if(source[i]==='['){i++;const start=i;while(i<source.length&&source[i]!==']')i++;const n=source.slice(start,i++);return '<mroot>'+group()+'<mn>'+esc(n)+'</mn></mroot>'}return '<msqrt>'+group()+'</msqrt>'}
      if(cmd==='binom')return '<mrow><mo>(</mo><mfrac linethickness="0">'+group()+group()+'</mfrac><mo>)</mo></mrow>';
      if(cmd==='text'||cmd==='operatorname'){while(source[i]===' ')i++;if(source[i]==='{'){let depth=1,start=++i;while(i<source.length&&depth){if(source[i]==='{')depth++;if(source[i]==='}')depth--;if(depth)i++}const txt=source.slice(start,i);i++;return '<mtext>'+esc(txt)+'</mtext>'}}
      if(cmd==='vec'||cmd==='overline'||cmd==='bar')return '<mover accent="true">'+group()+'<mo>'+(cmd==='vec'?'→':'¯')+'</mo></mover>';
      if(['quad','qquad',',',';','!',' '].includes(cmd))return '<mspace width="'+(cmd==='qquad'?'2em':cmd==='quad'?'1em':'.2em')+'"></mspace>';
      if(['sin','cos','tan','ln','log','lim','min','max'].includes(cmd))return '<mi mathvariant="normal">'+cmd+'</mi>';
      if(symbols[cmd])return '<'+(/[αβγθσμπΩ]/.test(symbols[cmd])?'mi':'mo')+'>'+symbols[cmd]+'</'+(/[αβγθσμπΩ]/.test(symbols[cmd])?'mi':'mo')+'>';
      return '<mtext>'+esc(m?'\\'+cmd:cmd||'')+'</mtext>';
    }
    if(/[0-9]/.test(ch)){let number=ch;while(i<source.length&&/[0-9.]/.test(source[i]))number+=source[i++];return '<mn>'+number+'</mn>'}
    if(/[a-zA-Z]/.test(ch))return '<mi>'+ch+'</mi>';
    return '<mo>'+esc(ch)+'</mo>';
  }
  function seq(end){let result='';while(i<source.length&&source[i]!==end){if(/\s/.test(source[i])){i++;continue}let a=atom(),sub=null,sup=null;while(source[i]==='_'||source[i]==='^'){const c=source[i++],b=group();if(c==='_')sub=b;else sup=b}if(sub&&sup)a='<msubsup>'+a+sub+sup+'</msubsup>';else if(sub)a='<msub>'+a+sub+'</msub>';else if(sup)a='<msup>'+a+sup+'</msup>';result+=a}if(source[i]===end)i++;return '<mrow>'+result+'</mrow>'}
  return '<math xmlns="http://www.w3.org/1998/Math/MathML" display="'+(display?'block':'inline')+'"><semantics>'+seq(null)+'<annotation encoding="application/x-tex">'+esc(source)+'</annotation></semantics></math>';
}
function nativeTypeset(){
  const nodes=[];const walker=document.createTreeWalker(content,NodeFilter.SHOW_TEXT,{acceptNode(n){return n.parentElement.closest('math,script,style,textarea,pre,code')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});
  while(walker.nextNode())if(/\\[([]/.test(walker.currentNode.nodeValue))nodes.push(walker.currentNode);
  for(const n of nodes){const value=n.nodeValue;const re=/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;let match,last=0;const fragment=document.createDocumentFragment();while((match=re.exec(value))){fragment.append(document.createTextNode(value.slice(last,match.index)));const holder=document.createElement('span');holder.innerHTML=mathMarkup(match[1]??match[2],match[2]!==undefined);while(holder.firstChild)fragment.append(holder.firstChild);last=re.lastIndex}fragment.append(document.createTextNode(value.slice(last)));n.replaceWith(fragment)}
}

// Queue rendering so rapid navigation cannot race MathJax. The fallback also
// keeps notation readable when the bundled engine cannot load.
let mathQueue=Promise.resolve();
function typeset(){
  if(window.pmMathFailed){nativeTypeset();return}
  const engine=window.MathJax;
  if(engine?.startup?.promise){mathQueue=mathQueue.catch(()=>{}).then(()=>engine.startup.promise).then(()=>{engine.typesetClear?.([content]);return engine.typesetPromise([content])}).catch(()=>nativeTypeset())}
  else nativeTypeset();
}
