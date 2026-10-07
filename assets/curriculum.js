// Original revision content; official sources and verification limits are in CURRICULUM.
DB.modules.review={"code": "RE+", "title": {"et": "Laiem kordamine", "en": "Broader revision"}, "icon": "🧭", "desc": {"et": "Alustunnid varem puudunud teemadel. Riikliku õppekava kaart on eraldi.", "en": "Starter lessons for previously missing topics. The national curriculum map is separate."}, "topics": {"algebra": {"title": {"et": "Arvuhulgad ja avaldised", "en": "Number sets & algebra"}, "icon": "🔢", "desc": {"et": "Hulgad, astmed, juured, tegurdamine ja protsendid.", "en": "Sets, powers, roots, factoring and percentages."}, "formulas": [{"name": {"et": "Astmete reeglid", "en": "Power rules"}, "tex": "a^m a^n=a^{m+n},\\quad (a^m)^n=a^{mn}", "note": {"et": "Jagamisel lahuta astendajad; nimetaja ei tohi olla null.", "en": "Subtract exponents when dividing; the denominator must be nonzero."}, "e1": {"q": {"et": "Lihtsusta 2³ · 2⁴.", "en": "Simplify 2³ · 2⁴."}, "a": {"et": "2⁷ = 128.", "en": "2⁷ = 128."}}, "e2": {"q": {"et": "Lihtsusta (x²)³.", "en": "Simplify (x²)³."}, "a": {"et": "x⁶.", "en": "x⁶."}}}, {"name": {"et": "Ruutude vahe", "en": "Difference of squares"}, "tex": "a^2-b^2=(a-b)(a+b)", "note": {"et": "Tegurda enne taandamist. Säilita algsed määramispiirkonna piirangud.", "en": "Factor before cancelling. Preserve restrictions from the original expression."}, "e1": {"q": {"et": "Tegurda x² − 9.", "en": "Factor x² − 9."}, "a": {"et": "(x − 3)(x + 3).", "en": "(x − 3)(x + 3)."}}, "e2": {"q": {"et": "Lihtsusta (x² − 9)/(x − 3).", "en": "Simplify (x² − 9)/(x − 3)."}, "a": {"et": "x + 3, aga x ≠ 3.", "en": "x + 3, with x ≠ 3."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Leia {1,2,3} ja {3,4} ühisosa ja ühend.", "en": "Find the intersection and union of {1,2,3} and {3,4}."}, "a": {"et": "Ühisosa: {3}. Ühend: {1,2,3,4}.", "en": "Intersection: {3}. Union: {1,2,3,4}."}, "hint": {"et": "Ühisosa sisaldab mõlemas hulgas olevaid elemente.", "en": "The intersection contains elements in both sets."}}, {"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Arvuta 27^(2/3).", "en": "Calculate 27^(2/3)."}, "a": {"et": "Kuupjuur 27-st on 3. Seejärel 3² = 9.", "en": "The cube root of 27 is 3; then square it: 9."}, "hint": {"et": "Võta esmalt kuupjuur.", "en": "Take the cube root first."}, "numeric": 9}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "80 € hind kasvab 15% ja seejärel langeb 15%. Leia lõpphind.", "en": "An €80 price rises 15%, then falls 15%. Find the final price."}, "a": {"et": "80 · 1,15 · 0,85 = 78,20 €. Protsentide alused on erinevad.", "en": "80 × 1.15 × 0.85 = €78.20. The percentages have different bases."}, "hint": {"et": "Kasuta järjest kasvukordajaid.", "en": "Multiply the successive growth factors."}, "numeric": 78.2}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Lihtsusta √50 − √8.", "en": "Simplify √50 − √8."}, "a": {"et": "√50 = 5√2 ja √8 = 2√2. Vahe on 3√2.", "en": "√50 = 5√2 and √8 = 2√2, so the difference is 3√2."}, "hint": {"et": "Too ruutjuure alt täisruut välja.", "en": "Factor a perfect square out of each radical."}}], "tags": ["algebra"], "prereq": [], "trap": {"et": "Ära taanda summast üksikuid liidetavaid.", "en": "You can cancel factors, not individual terms in a sum."}}, "equations": {"title": {"et": "Võrrandid ja süsteemid", "en": "Equations & systems"}, "icon": "⚖️", "desc": {"et": "Lineaar-, ruut-, murd-, juur- ja absoluutväärtusvõrrandid.", "en": "Linear, quadratic, rational, radical and absolute-value equations."}, "formulas": [{"name": {"et": "Ruutvõrrandi lahendid", "en": "Quadratic formula"}, "tex": "x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}", "note": {"et": "a ≠ 0. Diskriminant näitab reaallahendite arvu.", "en": "a ≠ 0. The discriminant determines the number of real roots."}, "e1": {"q": {"et": "Lahenda x² − 5x + 6 = 0.", "en": "Solve x² − 5x + 6 = 0."}, "a": {"et": "(x − 2)(x − 3) = 0; x = 2 või 3.", "en": "(x − 2)(x − 3) = 0; x = 2 or 3."}}, "e2": {"q": {"et": "Lahenda x² + 4x + 4 = 0.", "en": "Solve x² + 4x + 4 = 0."}, "a": {"et": "D = 0, seega x = −2 (kahekordne juur).", "en": "D = 0, so x = −2 (double root)."}}}, {"name": {"et": "Asendusmeetod", "en": "Substitution"}, "tex": "x+y=s,\\quad x-y=d\\quad\\Rightarrow\\quad x=\\frac{s+d}{2}", "note": {"et": "Avalda üks tundmatu ja asenda teise võrrandisse.", "en": "Isolate one variable and substitute into the other equation."}, "e1": {"q": {"et": "x + y = 9, x − y = 3.", "en": "x + y = 9, x − y = 3."}, "a": {"et": "2x = 12; x = 6 ja y = 3.", "en": "2x = 12; x = 6 and y = 3."}}, "e2": {"q": {"et": "Kaks piletit maksavad 14 €, hinnavahe on 4 €.", "en": "Two tickets total €14 and differ by €4."}, "a": {"et": "x = (14 + 4)/2 = 9 €, y = 5 €.", "en": "x = (14 + 4)/2 = €9, y = €5."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda 3x − 7 = 11.", "en": "Solve 3x − 7 = 11."}, "a": {"et": "Lisa 7: 3x = 18. Jaga 3-ga: x = 6.", "en": "Add 7: 3x = 18. Divide by 3: x = 6."}, "hint": {"et": "Isoleeri x.", "en": "Isolate x."}, "numeric": 6}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda |2x − 1| = 5.", "en": "Solve |2x − 1| = 5."}, "a": {"et": "2x − 1 = 5 või −5. Lahendid: x = 3 või −2.", "en": "2x − 1 = 5 or −5. Solutions: x = 3 or −2."}, "hint": {"et": "Vaata nii positiivset kui negatiivset juhtu.", "en": "Consider both the positive and negative cases."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda √(x + 2) = x.", "en": "Solve √(x + 2) = x."}, "a": {"et": "Vaja on x ≥ 0. Ruutu tõstes: x² − x − 2 = 0; kandidaadid 2 ja −1. Kontroll jättes x = 2.", "en": "Require x ≥ 0. Squaring gives x² − x − 2 = 0, candidates 2 and −1. Checking leaves x = 2."}, "hint": {"et": "Parempoolne väärtus peab olema mittenegatiivne. Kontrolli pärast ruutu tõstmist.", "en": "The right side must be nonnegative. Check after squaring."}, "numeric": 2}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda 1/(x − 1) = 2/(x + 1).", "en": "Solve 1/(x − 1) = 2/(x + 1)."}, "a": {"et": "x ≠ ±1. x + 1 = 2x − 2; seega x = 3. Kontroll: 1/2 = 2/4.", "en": "x ≠ ±1. x + 1 = 2x − 2, hence x = 3. Check: 1/2 = 2/4."}, "hint": {"et": "Määra esmalt keelatud nimetajad.", "en": "State the forbidden denominator values first."}, "numeric": 3}], "tags": ["equations"], "prereq": ["review/algebra"], "trap": {"et": "Ruutu tõstmine võib lisada võõrlahendeid.", "en": "Squaring can introduce extraneous roots."}}, "inequalities": {"title": {"et": "Võrratused", "en": "Inequalities"}, "icon": "↔️", "desc": {"et": "Märgivahemikud, ratsionaalvõrratused ja süsteemid.", "en": "Sign intervals, rational inequalities and systems."}, "formulas": [{"name": {"et": "Negatiivse arvuga korrutamine", "en": "Multiplying by a negative"}, "tex": "a<b,\\quad c<0\\quad\\Rightarrow\\quad ac>bc", "note": {"et": "Negatiivse arvuga korrutades või jagades pöörduvad võrratuse märgid.", "en": "Multiplying or dividing by a negative reverses the inequality."}, "e1": {"q": {"et": "Lahenda −2x > 6.", "en": "Solve −2x > 6."}, "a": {"et": "Jaga −2-ga: x < −3.", "en": "Divide by −2: x < −3."}}, "e2": {"q": {"et": "Lahenda 5 − 3x ≤ 11.", "en": "Solve 5 − 3x ≤ 11."}, "a": {"et": "−3x ≤ 6, seega x ≥ −2.", "en": "−3x ≤ 6, hence x ≥ −2."}}}], "questions": [{"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda x² − 5x + 6 ≤ 0.", "en": "Solve x² − 5x + 6 ≤ 0."}, "a": {"et": "(x − 2)(x − 3) ≤ 0. Korrutis on mittepositiivne juurte vahel: [2,3].", "en": "(x − 2)(x − 3) ≤ 0. The product is nonpositive between the roots: [2,3]."}, "hint": {"et": "Leia nullkohad ja kontrolli iga vahemiku märki.", "en": "Find the zeros and check the sign in each interval."}}, {"difficulty": "hard", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda (x − 1)/(x + 2) > 0.", "en": "Solve (x − 1)/(x + 2) > 0."}, "a": {"et": "Kriitilised punktid −2 ja 1. Mõlemad tegurid on sama märgiga vahemikes (−∞,−2) ja (1,∞).", "en": "Critical points are −2 and 1. Both factors have the same sign on (−∞,−2) and (1,∞)."}, "hint": {"et": "Ära korruta tundmatu märgiga nimetajaga.", "en": "Do not multiply by a denominator of unknown sign."}}, {"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Leia x > −1 ja x ≤ 4 ühine lahend.", "en": "Find the common solution of x > −1 and x ≤ 4."}, "a": {"et": "Ühisosa on (−1,4].", "en": "The intersection is (−1,4]."}, "hint": {"et": "Mõlemad tingimused peavad kehtima.", "en": "Both conditions must hold."}}], "tags": ["inequalities"], "prereq": ["review/equations"], "trap": {"et": "Nimetaja nullkoht on alati lahendihulgast väljas.", "en": "A zero of the denominator is always excluded."}}, "trigonometry": {"title": {"et": "Trigonomeetria", "en": "Trigonometry"}, "icon": "📐", "desc": {"et": "Radiaanid, ühikring, seosed ja kolmnurga lahendamine.", "en": "Radians, the unit circle, identities and solving triangles."}, "formulas": [{"name": {"et": "Radiaanid ja kaar", "en": "Radians & arcs"}, "tex": "\\theta_{rad}=\\theta_{deg}\\frac{\\pi}{180},\\quad l=r\\theta_{rad}", "note": {"et": "Kaare pikkuse valemis peab nurk olema radiaanides.", "en": "The angle must be in radians in the arc-length formula."}, "e1": {"q": {"et": "Teisenda 60° radiaanideks.", "en": "Convert 60° to radians."}, "a": {"et": "60π/180 = π/3.", "en": "60π/180 = π/3."}}, "e2": {"q": {"et": "Raadius 6; kesknurk π/3. Leia kaare pikkus.", "en": "Radius 6; central angle π/3. Find arc length."}, "a": {"et": "l = 6 · π/3 = 2π.", "en": "l = 6 × π/3 = 2π."}}}, {"name": {"et": "Põhiseos ja kahekordne nurk", "en": "Identity & double angle"}, "tex": "\\sin^2 x+\\cos^2 x=1,\\quad\\sin 2x=2\\sin x\\cos x", "note": {"et": "Märgid sõltuvad nurga veerandist.", "en": "Signs depend on the quadrant."}, "e1": {"q": {"et": "sin x = 3/5, x on teravnurk. Leia cos x.", "en": "sin x = 3/5, x is acute. Find cos x."}, "a": {"et": "cos x = √(1 − 9/25) = 4/5.", "en": "cos x = √(1 − 9/25) = 4/5."}}, "e2": {"q": {"et": "Leia samal juhul sin 2x.", "en": "Find sin 2x for the same angle."}, "a": {"et": "2 · 3/5 · 4/5 = 24/25.", "en": "2 × 3/5 × 4/5 = 24/25."}}}, {"name": {"et": "Siinusteoreem", "en": "Sine rule"}, "tex": "\\frac{a}{\\sin\\alpha}=\\frac{b}{\\sin\\beta}=\\frac{c}{\\sin\\gamma}", "note": {"et": "Külg ja vastasnurk peavad olema õiges paaris. SSA korral võib lahendeid olla kaks.", "en": "Pair each side with its opposite angle. The SSA case can have two solutions."}, "e1": {"q": {"et": "a = 5, α = 30°, β = 90°. Leia b.", "en": "a = 5, α = 30°, β = 90°. Find b."}, "a": {"et": "b = 5 · 1/(1/2) = 10.", "en": "b = 5 × 1/(1/2) = 10."}}, "e2": {"q": {"et": "a = 8, α = 30°, β = 60°. Leia b.", "en": "a = 8, α = 30°, β = 60°. Find b."}, "a": {"et": "b = 8√3.", "en": "b = 8√3."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Leia sin 150°.", "en": "Find sin 150°."}, "a": {"et": "150° = 180° − 30°; sin 150° = sin 30° = 1/2.", "en": "150° = 180° − 30°; sin 150° = sin 30° = 1/2."}, "hint": {"et": "Kasuta ühikringi teist veerandit.", "en": "Use the second quadrant of the unit circle."}, "numeric": 0.5}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Küljed 5 ja 7, nende vaheline nurk 60°. Leia kolmas külg.", "en": "Sides 5 and 7 enclose a 60° angle. Find the third side."}, "a": {"et": "c² = 25 + 49 − 2 · 5 · 7 · 1/2 = 39; c = √39.", "en": "c² = 25 + 49 − 2 × 5 × 7 × 1/2 = 39, so c = √39."}, "hint": {"et": "Kasuta koosinusteoreemi.", "en": "Use the cosine rule."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda sin x = 1/2 vahemikus [0,2π].", "en": "Solve sin x = 1/2 on [0,2π]."}, "a": {"et": "Lahendid on π/6 ja 5π/6. Siinus on positiivne I ja II veerandis.", "en": "Solutions are π/6 and 5π/6. Sine is positive in quadrants I and II."}, "hint": {"et": "Ühikringil on kaks sobivat nurka.", "en": "There are two matching angles on the unit circle."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Funktsioon y = 3sin(2x) − 1: amplituud, periood ja väärtuste hulk?", "en": "For y = 3sin(2x) − 1, find amplitude, period and range."}, "a": {"et": "Amplituud 3; periood 2π/2 = π; väärtuste hulk [−4,2].", "en": "Amplitude 3; period 2π/2 = π; range [−4,2]."}, "hint": {"et": "Siinuse väärtused on [−1,1].", "en": "Sine takes values in [−1,1]."}}], "tags": ["trigonometry"], "prereq": ["review/algebra"], "trap": {"et": "Kontrolli kalkulaatori DEG/RAD režiimi.", "en": "Check the calculator’s DEG/RAD setting."}}, "functions": {"title": {"et": "Funktsioonid ja graafikud", "en": "Functions & graphs"}, "icon": "〰️", "desc": {"et": "Määramispiirkond, nullkohad, sümmeetria ja teisendused.", "en": "Domain, zeros, symmetry and transformations."}, "formulas": [{"name": {"et": "Graafiku nihutamine", "en": "Graph translations"}, "tex": "y=f(x-h)+k", "note": {"et": "h nihutab paremale, k üles. Sulgudes olev märk võib eksitada.", "en": "h shifts right; k shifts up. The sign inside the brackets can be deceptive."}, "e1": {"q": {"et": "Kuidas nihkub y = (x − 2)² + 3?", "en": "How does y = (x − 2)² + 3 shift?"}, "a": {"et": "y = x² graafik 2 paremale ja 3 üles; tipp (2,3).", "en": "The graph of y = x² moves 2 right and 3 up; vertex (2,3)."}}, "e2": {"q": {"et": "Leia y = (x + 1)² − 4 nullkohad.", "en": "Find the zeros of y = (x + 1)² − 4."}, "a": {"et": "(x + 1)² = 4; x = 1 või −3.", "en": "(x + 1)² = 4; x = 1 or −3."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Leia f(x) = √(5 − x) määramispiirkond.", "en": "Find the domain of f(x) = √(5 − x)."}, "a": {"et": "5 − x ≥ 0, seega x ≤ 5. Määramispiirkond (−∞,5].", "en": "5 − x ≥ 0, so x ≤ 5. Domain (−∞,5]."}, "hint": {"et": "Reaalne ruutjuur vajab mittenegatiivset juurealust.", "en": "A real square root needs a nonnegative radicand."}}, {"difficulty": "hard", "kind": "practice", "confidence": "original", "q": {"et": "Leia f(x) = (x² − 4)/(x − 2) määramispiirkond ja nullkohad.", "en": "Find the domain and zeros of f(x) = (x² − 4)/(x − 2)."}, "a": {"et": "x ≠ 2. f(x) = x + 2 sellel määramispiirkonnal; ainus nullkoht x = −2. Punkt (2,4) puudub.", "en": "x ≠ 2. f(x) = x + 2 on that domain; the only zero is −2. There is a hole at (2,4)."}, "hint": {"et": "Taandamine ei taasta keelatud x väärtust.", "en": "Cancelling does not restore the forbidden x value."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Kas f(x) = x³ − x on paaris või paaritu?", "en": "Is f(x) = x³ − x even or odd?"}, "a": {"et": "f(−x) = −x³ + x = −f(x). Funktsioon on paaritu.", "en": "f(−x) = −x³ + x = −f(x), so it is odd."}, "hint": {"et": "Asenda x väärtusega −x.", "en": "Substitute −x for x."}}], "tags": ["functions"], "prereq": ["review/algebra"], "trap": {"et": "Määramispiirkond tuleb algsest avaldisest.", "en": "The domain comes from the original expression."}}, "sequences": {"title": {"et": "Arvjadad", "en": "Sequences"}, "icon": "🪜", "desc": {"et": "Aritmeetiline, geomeetriline ja hääbuv geomeetriline jada.", "en": "Arithmetic, geometric and convergent geometric sequences."}, "formulas": [{"name": {"et": "Aritmeetiline jada", "en": "Arithmetic sequence"}, "tex": "a_n=a_1+(n-1)d,\\quad S_n=\\frac{n(a_1+a_n)}{2}", "note": {"et": "d on järjestikuste liikmete vahe.", "en": "d is the difference between successive terms."}, "e1": {"q": {"et": "a₁ = 3, d = 4. Leia a₆.", "en": "a₁ = 3, d = 4. Find a₆."}, "a": {"et": "3 + 5 · 4 = 23.", "en": "3 + 5 × 4 = 23."}}, "e2": {"q": {"et": "Leia esimese kuue liikme summa.", "en": "Find the sum of the first six terms."}, "a": {"et": "6(3 + 23)/2 = 78.", "en": "6(3 + 23)/2 = 78."}}}, {"name": {"et": "Geomeetriline jada", "en": "Geometric sequence"}, "tex": "a_n=a_1q^{n-1},\\quad S_n=a_1\\frac{q^n-1}{q-1}", "note": {"et": "q ≠ 1. Kui q = 1, siis Sₙ = na₁. Lõpmatu summa on a₁/(1 − q), kui |q| < 1.", "en": "q ≠ 1. If q = 1, Sₙ = na₁. The infinite sum is a₁/(1 − q) when |q| < 1."}, "e1": {"q": {"et": "a₁ = 2, q = 3. Leia a₄.", "en": "a₁ = 2, q = 3. Find a₄."}, "a": {"et": "2 · 3³ = 54.", "en": "2 × 3³ = 54."}}, "e2": {"q": {"et": "Leia 1 + 1/2 + 1/4 + … summa.", "en": "Find the sum 1 + 1/2 + 1/4 + … ."}, "a": {"et": "|q| = 1/2 < 1, S = 1/(1 − 1/2) = 2.", "en": "|q| = 1/2 < 1, S = 1/(1 − 1/2) = 2."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Jada 7, 10, 13, … Leia 20. liige.", "en": "Sequence 7, 10, 13, … Find the 20th term."}, "a": {"et": "d = 3. a₂₀ = 7 + 19 · 3 = 64.", "en": "d = 3. a₂₀ = 7 + 19 × 3 = 64."}, "hint": {"et": "20. liikmeni on 19 sammu.", "en": "There are 19 steps to the 20th term."}, "numeric": 64}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Leia 5 + 10 + 20 + 40 + 80 summa.", "en": "Find the sum 5 + 10 + 20 + 40 + 80."}, "a": {"et": "Viis liiget, q = 2: S₅ = 5(2⁵ − 1)/(2 − 1) = 155.", "en": "Five terms, q = 2: S₅ = 5(2⁵ − 1)/(2 − 1) = 155."}, "hint": {"et": "Kasuta geomeetrilise jada summa valemit.", "en": "Use the geometric sum formula."}, "numeric": 155}, {"difficulty": "hard", "kind": "practice", "confidence": "original", "q": {"et": "Pall langeb 4 m ja iga põrge saavutab poole eelmisest kõrgusest. Leia kogu teepikkus.", "en": "A ball drops 4 m and each bounce reaches half the previous height. Find its total travel."}, "a": {"et": "Esimene langus 4 m; põrgete kõrgused 2 + 1 + … = 4 m. Need läbitakse üles ja alla: 4 + 2 · 4 = 12 m.", "en": "Initial drop 4 m; bounce heights sum to 2 + 1 + … = 4 m. Each is travelled up and down: 4 + 2 × 4 = 12 m."}, "hint": {"et": "Esimene langus on ühekordne, põrked kahekordsed.", "en": "Count the initial drop once and each bounce twice."}, "numeric": 12}], "tags": ["sequences"], "prereq": ["review/algebra"], "trap": {"et": "n-nda liikme valemis on n − 1 sammu.", "en": "The nth-term formula has n − 1 steps."}}, "logs": {"title": {"et": "Eksponendid ja logaritmid", "en": "Exponentials & logarithms"}, "icon": "🌱", "desc": {"et": "Logaritmid, pöördfunktsioonid ja liitprotsent.", "en": "Logarithms, inverse functions and compound growth."}, "formulas": [{"name": {"et": "Logaritmi definitsioon ja reeglid", "en": "Log definition & rules"}, "tex": "\\log_a b=c\\quad\\Leftrightarrow\\quad a^c=b", "note": {"et": "a > 0, a ≠ 1, b > 0. log(xy) = log x + log y; summa logaritmil sellist reeglit ei ole.", "en": "a > 0, a ≠ 1, b > 0. log(xy) = log x + log y; there is no matching rule for log of a sum."}, "e1": {"q": {"et": "Leia log₂ 32.", "en": "Find log₂ 32."}, "a": {"et": "2⁵ = 32; seega 5.", "en": "2⁵ = 32, so 5."}}, "e2": {"q": {"et": "Lahenda log₃(x − 1) = 2.", "en": "Solve log₃(x − 1) = 2."}, "a": {"et": "x − 1 = 9, x = 10; tingimus x > 1 on täidetud.", "en": "x − 1 = 9, x = 10; the domain x > 1 is satisfied."}}}, {"name": {"et": "Liitprotsent", "en": "Compound growth"}, "tex": "A=A_0(1+r)^n", "note": {"et": "r on perioodi määr kümnendmurruna; languse korral on r negatiivne.", "en": "r is the rate per period as a decimal; r is negative for decay."}, "e1": {"q": {"et": "100 € kasvab 10% aastas kaks aastat.", "en": "€100 grows 10% annually for two years."}, "a": {"et": "100 · 1,1² = 121 €.", "en": "100 × 1.1² = €121."}}, "e2": {"q": {"et": "500 g väheneb igal tunnil 20%. Leia mass 3 tunni pärast.", "en": "500 g decreases by 20% each hour. Find the mass after 3 hours."}, "a": {"et": "500 · 0,8³ = 256 g.", "en": "500 × 0.8³ = 256 g."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda 2^(x+1) = 16.", "en": "Solve 2^(x+1) = 16."}, "a": {"et": "16 = 2⁴; x + 1 = 4, seega x = 3.", "en": "16 = 2⁴; x + 1 = 4, hence x = 3."}, "hint": {"et": "Kirjuta mõlemad pooled sama alusega astmetena.", "en": "Write both sides with the same base."}, "numeric": 3}, {"difficulty": "hard", "kind": "practice", "confidence": "original", "q": {"et": "Lahenda log₂ x + log₂(x − 2) = 3.", "en": "Solve log₂ x + log₂(x − 2) = 3."}, "a": {"et": "Määramispiirkond x > 2. log₂[x(x − 2)] = 3; x² − 2x = 8. Kandidaadid 4 ja −2; sobib x = 4.", "en": "Domain x > 2. log₂[x(x − 2)] = 3; x² − 2x = 8. Candidates 4 and −2; only x = 4 is valid."}, "hint": {"et": "Ühenda logaritmid ja kontrolli määramispiirkonda.", "en": "Combine the logs, then check the domain."}, "numeric": 4}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "1000 € teenib 5% aastas. Leia väärtus kahe aasta pärast.", "en": "€1000 earns 5% per year. Find its value after two years."}, "a": {"et": "1000 · 1,05² = 1102,50 €.", "en": "1000 × 1.05² = €1102.50."}, "hint": {"et": "Teisel aastal kasvab ka esimese aasta intress.", "en": "The first year’s interest also grows in the second year."}, "numeric": 1102.5}], "tags": ["logs"], "prereq": ["review/equations", "review/functions"], "trap": {"et": "Logaritmi argument peab olema rangelt positiivne.", "en": "A logarithm’s argument must be strictly positive."}}, "derivatives": {"title": {"et": "Piirväärtus ja tuletis", "en": "Limits & derivatives"}, "icon": "⚡", "desc": {"et": "Muutumiskiirus, tuletisreeglid ja liitfunktsioonid.", "en": "Rate of change, derivative rules and composite functions."}, "formulas": [{"name": {"et": "Astmefunktsiooni tuletis", "en": "Power rule"}, "tex": "\\frac{d}{dx}x^n=nx^{n-1}", "note": {"et": "Konstandi tuletis on null; summa tuletis on tuletiste summa.", "en": "A constant has derivative zero; differentiate a sum term by term."}, "e1": {"q": {"et": "Leia (x³ − 4x + 7) tuletis.", "en": "Differentiate x³ − 4x + 7."}, "a": {"et": "3x² − 4.", "en": "3x² − 4."}}, "e2": {"q": {"et": "Teepikkus s(t) = t² + 2t. Leia kiirus hetkel t = 3.", "en": "Distance s(t) = t² + 2t. Find velocity at t = 3."}, "a": {"et": "v(t) = 2t + 2, seega v(3) = 8.", "en": "v(t) = 2t + 2, so v(3) = 8."}}}, {"name": {"et": "Liitfunktsiooni tuletis", "en": "Chain rule"}, "tex": "(f(g(x)))^{\\prime}=f^{\\prime}(g(x))g^{\\prime}(x)", "note": {"et": "Diferentseeri välisfunktsioon ja korruta sisefunktsiooni tuletisega.", "en": "Differentiate the outside, then multiply by the inside derivative."}, "e1": {"q": {"et": "Leia (3x + 1)² tuletis.", "en": "Differentiate (3x + 1)²."}, "a": {"et": "2(3x + 1) · 3 = 6(3x + 1).", "en": "2(3x + 1) × 3 = 6(3x + 1)."}}, "e2": {"q": {"et": "Leia sin(2x) tuletis.", "en": "Differentiate sin(2x)."}, "a": {"et": "2cos(2x); nurk on radiaanides.", "en": "2cos(2x); angles are in radians."}}}, {"name": {"et": "Korrutise ja jagatise tuletis", "en": "Product & quotient rules"}, "tex": "(uv)^{\\prime}=u^{\\prime}v+uv^{\\prime},\\quad (u/v)^{\\prime}=\\frac{u^{\\prime}v-uv^{\\prime}}{v^2}", "note": {"et": "Jagatise korral v ≠ 0.", "en": "For the quotient, v ≠ 0."}, "e1": {"q": {"et": "Leia x²sin x tuletis.", "en": "Differentiate x²sin x."}, "a": {"et": "2x sin x + x²cos x.", "en": "2x sin x + x²cos x."}}, "e2": {"q": {"et": "Leia (x + 1)/x tuletis.", "en": "Differentiate (x + 1)/x."}, "a": {"et": "(x − x − 1)/x² = −1/x².", "en": "(x − x − 1)/x² = −1/x²."}}}], "questions": [{"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Leia f(x) = x⁴ − 3x² + 2 tuletis ja f′(2).", "en": "Find the derivative of f(x) = x⁴ − 3x² + 2 and f′(2)."}, "a": {"et": "f′(x) = 4x³ − 6x. f′(2) = 32 − 12 = 20.", "en": "f′(x) = 4x³ − 6x. f′(2) = 32 − 12 = 20."}, "hint": {"et": "Leia esmalt tuletis, seejärel asenda x = 2.", "en": "Differentiate first, then substitute x = 2."}, "numeric": 20}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Leia (2x − 5)³ tuletis.", "en": "Differentiate (2x − 5)³."}, "a": {"et": "3(2x − 5)² · 2 = 6(2x − 5)².", "en": "3(2x − 5)² × 2 = 6(2x − 5)²."}, "hint": {"et": "Ära unusta sisefunktsiooni tuletist.", "en": "Do not forget the inside derivative."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Leia lim(x→2) (x² − 4)/(x − 2).", "en": "Find lim(x→2) (x² − 4)/(x − 2)."}, "a": {"et": "x ≠ 2 korral avaldis on x + 2. Piirväärtus on 4, kuigi algne avaldis pole x = 2 korral määratud.", "en": "For x ≠ 2 the expression equals x + 2. Its limit is 4, although the original expression is undefined at 2."}, "hint": {"et": "Tegurda lugeja.", "en": "Factor the numerator."}, "numeric": 4}], "tags": ["derivatives"], "prereq": ["review/functions"], "trap": {"et": "Tuletis ei ole sama mis funktsiooni väärtus.", "en": "A derivative is different from the function’s value."}}, "optimization": {"title": {"et": "Tuletise rakendused", "en": "Derivative applications"}, "icon": "🏔️", "desc": {"et": "Puutuja, ekstreemumid, käänupunkt ja optimeerimine.", "en": "Tangents, extrema, inflection and optimization."}, "formulas": [{"name": {"et": "Puutuja võrrand", "en": "Tangent equation"}, "tex": "y=f(a)+f^{\\prime}(a)(x-a)", "note": {"et": "f(a) annab punkti kõrguse, f′(a) puutuja tõusu.", "en": "f(a) gives the point’s height; f′(a) gives the tangent’s slope."}, "e1": {"q": {"et": "Leia y = x² puutuja kohal x = 2.", "en": "Find the tangent to y = x² at x = 2."}, "a": {"et": "f(2) = 4, f′(2) = 4; y = 4 + 4(x − 2) = 4x − 4.", "en": "f(2) = 4, f′(2) = 4; y = 4 + 4(x − 2) = 4x − 4."}}, "e2": {"q": {"et": "Leia y = x³ puutuja kohal x = 1.", "en": "Find the tangent to y = x³ at x = 1."}, "a": {"et": "f(1) = 1, f′(1) = 3; y = 3x − 2.", "en": "f(1) = 1, f′(1) = 3; y = 3x − 2."}}}, {"name": {"et": "Statsionaarsed punktid", "en": "Stationary points"}, "tex": "f^{\\prime}(x)=0", "note": {"et": "Kontrolli tuletise märgi muutust. Kinnisel lõigul kontrolli ka otspunkte.", "en": "Check the derivative’s sign change. On a closed interval, also check the endpoints."}, "e1": {"q": {"et": "Leia f(x) = x² − 4x + 1 miinimum.", "en": "Find the minimum of f(x) = x² − 4x + 1."}, "a": {"et": "f′ = 2x − 4 = 0 annab x = 2; f(2) = −3. Tuletis muutub negatiivsest positiivseks.", "en": "f′ = 2x − 4 = 0 gives x = 2; f(2) = −3. The derivative changes from negative to positive."}}, "e2": {"q": {"et": "Ristküliku ümbermõõt 20. Leia suurim pindala.", "en": "A rectangle has perimeter 20. Find the largest area."}, "a": {"et": "Küljed x ja 10 − x: A = 10x − x². A′ = 10 − 2x = 0, x = 5. A = 25.", "en": "Sides x and 10 − x: A = 10x − x². A′ = 10 − 2x = 0 gives x = 5. A = 25."}}}], "questions": [{"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Leia x³ − 3x kasvamis- ja kahanemisvahemikud.", "en": "Find where x³ − 3x increases and decreases."}, "a": {"et": "f′ = 3(x − 1)(x + 1). Kasvab (−∞,−1) ja (1,∞); kahaneb (−1,1).", "en": "f′ = 3(x − 1)(x + 1). Increasing on (−∞,−1) and (1,∞); decreasing on (−1,1)."}, "hint": {"et": "Koosta tuletise märgitabel.", "en": "Make a sign table for the derivative."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Leia f(x) = x² suurim ja vähim väärtus lõigul [−1,2].", "en": "Find the maximum and minimum of f(x) = x² on [−1,2]."}, "a": {"et": "Kandidaadid: x = −1, 0, 2. Väärtused 1, 0, 4. Miinimum 0; maksimum 4.", "en": "Candidates: x = −1, 0, 2. Values: 1, 0, 4. Minimum 0; maximum 4."}, "hint": {"et": "Kontrolli otspunkte ja sisemisi kriitilisi punkte.", "en": "Check endpoints and interior critical points."}}, {"difficulty": "hard", "kind": "practice", "confidence": "original", "q": {"et": "Leia y = x³ käänupunkt. Kas see on ekstreemum?", "en": "Find the inflection point of y = x³. Is it an extremum?"}, "a": {"et": "f″ = 6x muudab märki kohal x = 0. Käänupunkt (0,0); mitte ekstreemum, sest f′ = 3x² ei muuda märki.", "en": "f″ = 6x changes sign at 0. Inflection point (0,0); not an extremum because f′ = 3x² does not change sign."}, "hint": {"et": "Erista esimese ja teise tuletise märgimuutust.", "en": "Distinguish sign changes of the first and second derivatives."}}], "tags": ["optimization"], "prereq": ["review/derivatives"], "trap": {"et": "f′(x) = 0 ei taga ekstreemumit.", "en": "f′(x) = 0 does not guarantee an extremum."}}, "statistics": {"title": {"et": "Statistika ja jaotused", "en": "Statistics & distributions"}, "icon": "📊", "desc": {"et": "Keskmine, hajuvus, jaotused, valim ja korrelatsioon.", "en": "Mean, spread, distributions, sampling and correlation."}, "formulas": [{"name": {"et": "Keskmine ja standardhälve", "en": "Mean & standard deviation"}, "tex": "\\bar{x}=\\frac{\\sum x_i}{n},\\quad\\sigma=\\sqrt{\\frac{\\sum(x_i-\\bar{x})^2}{n}}", "note": {"et": "See on üldkogumi standardhälve; valimi hinnangu korral kasutatakse nimetajat n − 1.", "en": "This is population standard deviation; sample estimation uses n − 1 in the denominator."}, "e1": {"q": {"et": "Leia 2, 4, 6 keskmine.", "en": "Find the mean of 2, 4, 6."}, "a": {"et": "(2 + 4 + 6)/3 = 4.", "en": "(2 + 4 + 6)/3 = 4."}}, "e2": {"q": {"et": "Leia samade väärtuste üldkogumi standardhälve.", "en": "Find the population standard deviation of those values."}, "a": {"et": "√[(4 + 0 + 4)/3] = √(8/3) ≈ 1,633.", "en": "√[(4 + 0 + 4)/3] = √(8/3) ≈ 1.633."}}}, {"name": {"et": "Binoomjaotuse keskväärtus", "en": "Binomial expectation"}, "tex": "E(X)=np,\\quad\\sigma=\\sqrt{np(1-p)}", "note": {"et": "n sõltumatut katset, igas sama õnnestumise tõenäosus p.", "en": "n independent trials with the same success probability p."}, "e1": {"q": {"et": "n = 20, p = 0,3. Leia keskväärtus.", "en": "n = 20, p = 0.3. Find the expected value."}, "a": {"et": "20 · 0,3 = 6.", "en": "20 × 0.3 = 6."}}, "e2": {"q": {"et": "Leia standardhälve.", "en": "Find standard deviation."}, "a": {"et": "√(20 · 0,3 · 0,7) = √4,2 ≈ 2,049.", "en": "√(20 × 0.3 × 0.7) = √4.2 ≈ 2.049."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Andmed 1, 2, 2, 3, 12. Leia mediaan, mood ja keskmine.", "en": "Data: 1, 2, 2, 3, 12. Find the median, mode and mean."}, "a": {"et": "Mediaan 2; mood 2; keskmine 20/5 = 4. Erind 12 suurendab keskmist.", "en": "Median 2; mode 2; mean 20/5 = 4. The outlier 12 pulls the mean up."}, "hint": {"et": "Sorteeri andmed ning erista kolme mõõdikut.", "en": "Sort the values and distinguish the three measures."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "X väärtused on 0 ja 10 tõenäosustega 0,8 ja 0,2. Leia E(X).", "en": "X takes values 0 and 10 with probabilities 0.8 and 0.2. Find E(X)."}, "a": {"et": "E(X) = 0 · 0,8 + 10 · 0,2 = 2.", "en": "E(X) = 0 × 0.8 + 10 × 0.2 = 2."}, "hint": {"et": "Kaalutud keskmine: väärtus korda tõenäosus.", "en": "Use a weighted mean: value times probability."}, "numeric": 2}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Jäätisemüük ja uppumiste arv on korrelatsioonis. Kas jäätis põhjustab uppumisi?", "en": "Ice-cream sales correlate with drownings. Does ice cream cause drownings?"}, "a": {"et": "Ei saa järeldada. Kuum ilm võib suurendada nii jäätisemüüki kui ujumist. Korrelatsioon ei tõesta põhjuslikkust.", "en": "You cannot conclude that. Hot weather may increase both ice-cream sales and swimming. Correlation does not establish causation."}, "hint": {"et": "Otsi kolmandat muutujat.", "en": "Look for a confounding variable."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Normaaljaotus: μ = 50, σ = 5. Standardiseeri väärtus 60.", "en": "For a normal distribution with μ = 50 and σ = 5, standardize 60."}, "a": {"et": "z = (60 − 50)/5 = 2. Väärtus on kaks standardhälvet üle keskmise.", "en": "z = (60 − 50)/5 = 2. The value is two standard deviations above the mean."}, "hint": {"et": "Lahuta keskmine ja jaga standardhälbega.", "en": "Subtract the mean and divide by standard deviation."}, "numeric": 2}], "tags": ["statistics"], "prereq": ["ma11/probability"], "trap": {"et": "Valimi esinduslikkus on tähtsam kui ainult suur valim.", "en": "A representative sample matters more than sample size alone."}}, "space": {"title": {"et": "Sirge ja tasand ruumis", "en": "Lines & planes in space"}, "icon": "🧊", "desc": {"et": "3D koordinaadid, vektorid, asendid ja nurgad.", "en": "3D coordinates, vectors, positions and angles."}, "formulas": [{"name": {"et": "Kaugus ruumis", "en": "Distance in space"}, "tex": "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}", "note": {"et": "Kolmemõõtmeline Pythagorase teoreem.", "en": "The three-dimensional Pythagorean theorem."}, "e1": {"q": {"et": "Leia (0,0,0) ja (1,2,2) vaheline kaugus.", "en": "Find the distance between (0,0,0) and (1,2,2)."}, "a": {"et": "√(1 + 4 + 4) = 3.", "en": "√(1 + 4 + 4) = 3."}}, "e2": {"q": {"et": "Risttahuka servad 3, 4, 12. Leia ruumidiagonaal.", "en": "A cuboid has edges 3, 4, 12. Find its space diagonal."}, "a": {"et": "√(9 + 16 + 144) = 13.", "en": "√(9 + 16 + 144) = 13."}}}, {"name": {"et": "Ruumivektori skalaarkorrutis", "en": "3D dot product"}, "tex": "\\vec a\\cdot\\vec b=a_xb_x+a_yb_y+a_zb_z", "note": {"et": "Nullist erinevad vektorid on risti, kui skalaarkorrutis on null.", "en": "Nonzero vectors are perpendicular when their dot product is zero."}, "e1": {"q": {"et": "a = (1,2,−1), b = (2,0,2). Kas on risti?", "en": "a = (1,2,−1), b = (2,0,2). Are they perpendicular?"}, "a": {"et": "1 · 2 + 2 · 0 − 1 · 2 = 0; jah.", "en": "1 × 2 + 2 × 0 − 1 × 2 = 0; yes."}}, "e2": {"q": {"et": "a = (1,0,0), b = (1,1,0). Leia nurk.", "en": "a = (1,0,0), b = (1,1,0). Find the angle."}, "a": {"et": "cos θ = 1/√2; θ = 45°.", "en": "cos θ = 1/√2; θ = 45°."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Leia A(1,2,3) ja B(4,6,3) vaheline kaugus.", "en": "Find the distance from A(1,2,3) to B(4,6,3)."}, "a": {"et": "AB = (3,4,0); |AB| = √(9 + 16) = 5.", "en": "AB = (3,4,0); |AB| = √(9 + 16) = 5."}, "hint": {"et": "Lahuta vastavad koordinaadid.", "en": "Subtract corresponding coordinates."}, "numeric": 5}, {"difficulty": "hard", "kind": "practice", "confidence": "original", "q": {"et": "Kuubi serv on 2. Leia ruumidiagonaali nurk põhjatasandiga.", "en": "A cube has edge 2. Find the angle of its space diagonal with the base plane."}, "a": {"et": "Projektsioon põhjale on diagonaal 2√2; kõrgus 2. tan θ = 1/√2; θ ≈ 35,264°.", "en": "Its projection onto the base is the diagonal 2√2; height 2. tan θ = 1/√2, so θ ≈ 35.264°."}, "hint": {"et": "Nurk tasandiga on nurk sirge ja selle projektsiooni vahel.", "en": "The angle with a plane is the angle with the line’s projection."}}, {"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Kas ruumis kaks mittelõikuvat sirget on alati paralleelsed?", "en": "Are two nonintersecting lines in space always parallel?"}, "a": {"et": "Ei. Nad võivad olla kiivsirged: nad ei lõiku ega ole ühes tasandis.", "en": "No. They can be skew: they do not intersect and are not coplanar."}, "hint": {"et": "Tasandi ja ruumi geomeetria erinevad.", "en": "Plane and space geometry differ."}}], "tags": ["space"], "prereq": ["ma13/vectors", "ma12/prism"], "trap": {"et": "Ruumidiagonaal ei ole sama mis tahudiagonaal.", "en": "A space diagonal is different from a face diagonal."}}, "modelling": {"title": {"et": "Matemaatilised mudelid", "en": "Mathematical modelling"}, "icon": "🛠️", "desc": {"et": "Tekstist mudelini, ühikud, tõestamine ja tulemuse kontroll.", "en": "From words to models, units, proof and interpreting results."}, "formulas": [{"name": {"et": "Ühtlane liikumine", "en": "Constant speed"}, "tex": "s=vt", "note": {"et": "Kasuta kooskõlalisi ühikuid ja põhjenda eeldusi.", "en": "Use consistent units and state your assumptions."}, "e1": {"q": {"et": "Kiirus 60 km/h, aeg 1,5 h. Leia teepikkus.", "en": "Speed 60 km/h for 1.5 h. Find distance."}, "a": {"et": "60 · 1,5 = 90 km.", "en": "60 × 1.5 = 90 km."}}, "e2": {"q": {"et": "Jalgrattur sõidab 12 km kiirusega 18 km/h. Leia aeg minutites.", "en": "A cyclist rides 12 km at 18 km/h. Find the time in minutes."}, "a": {"et": "t = 12/18 h = 2/3 h = 40 min.", "en": "t = 12/18 h = 2/3 h = 40 min."}}}], "questions": [{"difficulty": "easy", "kind": "practice", "confidence": "original", "q": {"et": "Takso hind on 3 € + 1,20 € iga km eest. Eelarve 15 €. Kui kaugele saad sõita?", "en": "A taxi costs €3 plus €1.20 per km. Your budget is €15. How far can you ride?"}, "a": {"et": "3 + 1,2x ≤ 15; x ≤ 10. Maksimum 10 km, kui lisatasusid pole.", "en": "3 + 1.2x ≤ 15; x ≤ 10. Maximum 10 km, assuming no other charges."}, "hint": {"et": "Kirjuta eelarvest võrratus.", "en": "Translate the budget into an inequality."}, "numeric": 10}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Tõesta, et kahe paaritu täisarvu summa on paaris.", "en": "Prove that the sum of two odd integers is even."}, "a": {"et": "Kirjuta 2m + 1 ja 2n + 1. Summa = 2(m + n + 1), mis jagub 2-ga.", "en": "Write them as 2m + 1 and 2n + 1. Their sum is 2(m + n + 1), divisible by 2."}, "hint": {"et": "Kasuta paaritu arvu üldkuju.", "en": "Use the general form of an odd integer."}}, {"difficulty": "medium", "kind": "practice", "confidence": "original", "q": {"et": "Mudeli järgi kasvab 100 bakterit iga tund kaks korda. Millal jõuab arv vähemalt 800-ni?", "en": "A model says 100 bacteria double each hour. When does the count first reach at least 800?"}, "a": {"et": "100 · 2ⁿ ≥ 800 annab 2ⁿ ≥ 8; esimest korda 3 tunni pärast. Tegelik kasv võib ressursside tõttu aeglustuda.", "en": "100 × 2ⁿ ≥ 800 gives 2ⁿ ≥ 8: first after 3 hours. Real growth may slow because resources are limited."}, "hint": {"et": "Erista mudeli ennustus selle eeldustest.", "en": "Distinguish the prediction from the model’s assumptions."}, "numeric": 3}], "tags": ["modelling"], "prereq": ["review/equations"], "trap": {"et": "Vastus peab sobima tekstülesande ühikute ja tingimustega.", "en": "The answer must fit the units and conditions of the problem."}}}};
const CURRICULUM={
  "checked": "2026-10-07",
  "rows": [
    {
      "id": "I",
      "title": {
        "et": "Avaldised ja arvuhulgad",
        "en": "Expressions & number sets"
      },
      "paths": [
        "review/algebra"
      ]
    },
    {
      "id": "II",
      "title": {
        "et": "Võrrandid ja võrrandisüsteemid",
        "en": "Equations & systems"
      },
      "paths": [
        "review/equations"
      ]
    },
    {
      "id": "III",
      "title": {
        "et": "Võrratused. Trigonomeetria I",
        "en": "Inequalities & trigonometry I"
      },
      "paths": [
        "review/inequalities",
        "review/trigonometry"
      ]
    },
    {
      "id": "IV",
      "title": {
        "et": "Trigonomeetria II",
        "en": "Trigonometry II"
      },
      "paths": [
        "review/trigonometry"
      ]
    },
    {
      "id": "V",
      "title": {
        "et": "Vektor tasandil. Joone võrrand",
        "en": "Plane vectors & equations of curves"
      },
      "paths": [
        "ma13/analytic",
        "ma13/vectors",
        "ma13/lines"
      ]
    },
    {
      "id": "VI",
      "title": {
        "et": "Tõenäosus, statistika",
        "en": "Probability & statistics"
      },
      "paths": [
        "ma11/combinatorics",
        "ma11/probability",
        "ma11/bernoulli",
        "review/statistics"
      ]
    },
    {
      "id": "VII",
      "title": {
        "et": "Funktsioonid. Arvjadad",
        "en": "Functions & sequences"
      },
      "paths": [
        "review/functions",
        "review/sequences"
      ]
    },
    {
      "id": "VIII",
      "title": {
        "et": "Eksponent- ja logaritmfunktsioon",
        "en": "Exponentials & logarithms"
      },
      "paths": [
        "review/logs"
      ]
    },
    {
      "id": "IX",
      "title": {
        "et": "Trigonomeetrilised funktsioonid. Funktsiooni piirväärtus ja tuletis",
        "en": "Trig functions, limits & derivatives"
      },
      "paths": [
        "review/trigonometry",
        "review/derivatives"
      ]
    },
    {
      "id": "X",
      "title": {
        "et": "Tuletise rakendused",
        "en": "Derivative applications"
      },
      "paths": [
        "review/optimization"
      ]
    },
    {
      "id": "XI",
      "title": {
        "et": "Integraal. Planimeetria",
        "en": "Integrals & plane geometry"
      },
      "paths": [
        "ma13/integrals",
        "ma11/plane"
      ]
    },
    {
      "id": "XII",
      "title": {
        "et": "Sirge ja tasand ruumis",
        "en": "Lines & planes in space"
      },
      "paths": [
        "review/space"
      ]
    },
    {
      "id": "XIII",
      "title": {
        "et": "Stereomeetria",
        "en": "Solid geometry"
      },
      "paths": [
        "ma12/prism",
        "ma12/pyramid",
        "ma12/cylinder",
        "ma12/cone",
        "ma12/sphere"
      ]
    },
    {
      "id": "XIV",
      "title": {
        "et": "Matemaatika rakendused, reaalsete protsesside uurimine",
        "en": "Applications & real processes"
      },
      "paths": [
        "review/modelling"
      ]
    }
  ],
  "gaps": {
    "et": "Need on alustunnid, mitte kogu õpik. Süvendamist vajavad muu hulgas usalduspiirkonnad, normaaljaotuse arvutused, keerukamad trigonometrilised teisendused, ruumivektorite komplanaarsus, integraaliga pöördkehade ruumala ja pikemad tõestused.",
    "en": "These are starter lessons, not a complete textbook. Further study is needed for confidence intervals, normal-distribution calculations, advanced trig identities, coplanarity of spatial vectors, volumes of revolution using integration, and extended proofs."
  },
  "sources": [
    {
      "title": {
        "et": "Poska õppekava (leht 31.08.2026)",
        "en": "Poska curriculum (page updated 31 Aug 2026)"
      },
      "url": "https://jpg.tartu.ee/dokumendid/oppekavad/",
      "status": {
        "et": "Kontrollitud: avalik viiteleht.",
        "en": "Verified: public reference page."
      }
    },
    {
      "title": {
        "et": "Poska matemaatika ainekava (2024 PDF)",
        "en": "Poska maths syllabus (2024 PDF)"
      },
      "url": "https://drive.google.com/file/d/1lZLTiBE3KrWEpVc1qQNLyat5f3uWmKZr/view",
      "status": {
        "et": "Kontrollitud: 16-leheküljeline, kooli praeguse õppekavalehe viidatud 2024 ainekava. Ma1–Ma15.",
        "en": "Verified: the 16-page 2024 syllabus linked by the school’s current curriculum page. Ma1–Ma15."
      }
    },
    {
      "title": {
        "et": "Riiklik matemaatika ainekava, 2023",
        "en": "National maths curriculum, 2023"
      },
      "url": "https://www.riigiteataja.ee/aktilisa/1080/3202/3006/18m_gym_lisa5.pdf",
      "status": {
        "et": "Kontrollitud: laia matemaatika 14 kursust, § 2.3.2.",
        "en": "Verified: 14 broad-maths courses, section 2.3.2."
      }
    },
    {
      "title": {
        "et": "Harno riigieksamid",
        "en": "Harno state exams"
      },
      "url": "https://harno.ee/riigieksamid",
      "status": {
        "et": "Kontrollitud: matemaatika eksam 19.05.2027. Õpilane valib kitsa või laia eksami.",
        "en": "Verified: maths exam 19 May 2027. Students choose narrow or broad exam."
      }
    },
    {
      "title": {
        "et": "2027 eksamimaterjalid",
        "en": "2027 exam materials"
      },
      "url": "https://projektid.edu.ee/spaces/THO/pages/390178947/Riigieksamite+materjalid+2027",
      "status": {
        "et": "Harno viidatud leht; eristuskirja sisu jäi kontrollimata.",
        "en": "Linked by Harno; the specification content remains unverified."
      }
    }
  ],
  "schoolRows": [
    {
      "id": "1",
      "title": {
        "et": "Avaldised ja arvuhulgad",
        "en": "Expressions & number sets"
      },
      "paths": [
        "review/algebra"
      ]
    },
    {
      "id": "2",
      "title": {
        "et": "Võrrandid ja võrrandisüsteemid",
        "en": "Equations & systems"
      },
      "paths": [
        "review/equations"
      ]
    },
    {
      "id": "3",
      "title": {
        "et": "Võrratused. Trigonomeetria I",
        "en": "Inequalities & trigonometry I"
      },
      "paths": [
        "review/inequalities",
        "review/trigonometry"
      ]
    },
    {
      "id": "4",
      "title": {
        "et": "Trigonomeetria II",
        "en": "Trigonometry II"
      },
      "paths": [
        "review/trigonometry"
      ]
    },
    {
      "id": "5",
      "title": {
        "et": "Vektor tasandil. Joone võrrand",
        "en": "Plane vectors & curve equations"
      },
      "paths": [
        "ma13/analytic",
        "ma13/vectors",
        "ma13/lines"
      ]
    },
    {
      "id": "6",
      "title": {
        "et": "Statistika. Jadad",
        "en": "Statistics & sequences"
      },
      "paths": [
        "review/statistics",
        "review/sequences"
      ]
    },
    {
      "id": "7",
      "title": {
        "et": "Funktsioonid I, trigonomeetrilised funktsioonid",
        "en": "Functions I & trigonometric functions"
      },
      "paths": [
        "review/functions",
        "review/trigonometry"
      ]
    },
    {
      "id": "8",
      "title": {
        "et": "Logaritm- ja eksponentfunktsioon",
        "en": "Logarithmic & exponential functions"
      },
      "paths": [
        "review/logs"
      ]
    },
    {
      "id": "9",
      "title": {
        "et": "Funktsiooni piirväärtus ja tuletis",
        "en": "Limits & derivatives"
      },
      "paths": [
        "review/derivatives",
        "review/optimization"
      ]
    },
    {
      "id": "10",
      "title": {
        "et": "Tuletise rakendused ja integraal",
        "en": "Derivative applications & integrals"
      },
      "paths": [
        "review/optimization",
        "ma13/integrals"
      ]
    },
    {
      "id": "11",
      "title": {
        "et": "Tõenäosus ja planimeetria",
        "en": "Probability & plane geometry"
      },
      "paths": [
        "ma11/combinatorics",
        "ma11/probability",
        "ma11/plane"
      ]
    },
    {
      "id": "12",
      "title": {
        "et": "Stereomeetria",
        "en": "Solid geometry"
      },
      "paths": [
        "ma12/prism",
        "ma12/pyramid",
        "ma12/cylinder",
        "ma12/cone",
        "ma12/sphere"
      ]
    },
    {
      "id": "13",
      "title": {
        "et": "Vektor ja sirged ruumis",
        "en": "Spatial vectors & lines"
      },
      "paths": [
        "review/space"
      ]
    },
    {
      "id": "14",
      "title": {
        "et": "Matemaatika rakendused, reaalsete probleemide uurimine",
        "en": "Applications & real problems"
      },
      "paths": [
        "review/modelling"
      ]
    },
    {
      "id": "15",
      "title": {
        "et": "Riigieksamiks ettevalmistav kursus",
        "en": "State-exam preparation"
      },
      "paths": [
        "review"
      ]
    }
  ],
  "schoolNote": {
    "et": "Kooli 2024 ainekava nimetab Ma13 kursuseks „Vektor ja sirged ruumis“ ning paigutab integraalid Ma10 kursusse. Üles laaditud veebilehe MA13 jaotus on teistsugune; selle materjalid on säilitatud viitekoguna. Õpetaja värske kursuseplaan võib avalikust dokumendist erineda.",
    "en": "The school’s 2024 syllabus calls Ma13 “Spatial vectors & lines” and places integrals in Ma10. The uploaded website groups MA13 differently; its materials are preserved as a reference collection. A teacher’s current course plan may differ from the public document."
  }
};
DB.modules.ma11.topics.probability.formulas[1].e2.q.en='In two independent trials the failure probability per trial is 0.2. Find the probability at least one succeeds.';
DB.modules.ma11.topics.probability.formulas[1].e2.q.et='Kahes sõltumatus katses on ebaõnnestumise tõenäosus kummaski 0,2. Leia tõenäosus, et vähemalt üks õnnestub.';
