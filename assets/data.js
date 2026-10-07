const DB={
  "modules": {
    "ma11": {
      "code": "MA11",
      "title": {
        "et": "Tõenäosus ja planimeetria",
        "en": "Probability & Plane Geometry"
      },
      "icon": "🎲",
      "desc": {
        "et": "Kombinatoorika, tõenäosus ja tasandigeomeetria.",
        "en": "Combinatorics, probability and plane geometry."
      },
      "topics": {
        "combinatorics": {
          "title": {
            "et": "Kombinatoorika: permutatsioonid ja kombinatsioonid",
            "en": "Combinatorics: Permutations & Combinations"
          },
          "icon": "🧩",
          "desc": {
            "et": "Faktoriaal, järjestused, variatsioonid ja kombinatsioonid.",
            "en": "Factorials, arrangements, permutations and combinations."
          },
          "formulas": [
            {
              "name": {
                "et": "Faktoriaal",
                "en": "Factorial"
              },
              "tex": "n! = n\\cdot(n-1)\\cdot(n-2)\\cdots2\\cdot1",
              "note": {
                "et": "Kasuta kõigi n erineva objekti järjestuste loendamiseks.",
                "en": "Use for counting arrangements of all n distinct objects."
              },
              "e1": {
                "q": {
                  "et": "Mitu erinevat järjestust saab teha 5 erinevast raamatust?",
                  "en": "How many arrangements can be made from 5 different books?"
                },
                "a": {
                  "et": "\\(5!=120\\).",
                  "en": "\\(5!=120\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Kuus õpilast seisavad foto jaoks reas. Mitu erinevat rivi on võimalik?",
                  "en": "Six students stand in a line for a photo. How many different line-ups are possible?"
                },
                "a": {
                  "et": "\\(6!=720\\) rivi.",
                  "en": "\\(6!=720\\) line-ups."
                }
              },
              "vars": [
                {
                  "s": "n!",
                  "et": "n faktoriaal: kõigi täisarvude 1-st n-ni korrutis",
                  "en": "n factorial: the product of all integers from 1 to n"
                },
                {
                  "s": "n",
                  "et": "objektide arv (naturaalarv)",
                  "en": "number of objects (a natural number)"
                }
              ]
            },
            {
              "name": {
                "et": "Variatsioon ilma kordusteta",
                "en": "Permutation of r from n"
              },
              "tex": "P(n,r)=\\frac{n!}{(n-r)!}",
              "note": {
                "et": "Kasuta siis, kui valid n hulgast r elementi ja järjekord loeb.",
                "en": "Use when choosing r from n and order matters."
              },
              "e1": {
                "q": {
                  "et": "Vali 8 õpilase seast president, asepresident ja sekretär.",
                  "en": "Choose president, vice-president and secretary from 8 students."
                },
                "a": {
                  "et": "\\(P(8,3)=\\frac{8!}{5!}=8\\cdot7\\cdot6=336\\).",
                  "en": "\\(P(8,3)=\\frac{8!}{5!}=8\\cdot7\\cdot6=336\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "10 erinevast sümbolist tehakse 4-kohaline kood ilma kordusteta.",
                  "en": "A 4-symbol code is made from 10 distinct symbols without repetition."
                },
                "a": {
                  "et": "\\(P(10,4)=10\\cdot9\\cdot8\\cdot7=5040\\).",
                  "en": "\\(P(10,4)=10\\cdot9\\cdot8\\cdot7=5040\\)."
                }
              },
              "vars": [
                {
                  "s": "P(n,r)",
                  "et": "järjestatud valikute arv (järjekord loeb)",
                  "en": "number of ordered selections (order matters)"
                },
                {
                  "s": "n",
                  "et": "kõigi elementide arv",
                  "en": "total number of elements"
                },
                {
                  "s": "r",
                  "et": "valitavate elementide arv",
                  "en": "number of elements chosen"
                },
                {
                  "s": "n!",
                  "et": "n faktoriaal",
                  "en": "n factorial"
                }
              ]
            },
            {
              "name": {
                "et": "Kombinatsioon",
                "en": "Combination"
              },
              "tex": "\\binom{n}{r}=\\frac{n!}{r!(n-r)!}",
              "note": {
                "et": "Kasuta siis, kui valid r elementi ja järjekord ei loe.",
                "en": "Use when choosing r items and order does not matter."
              },
              "e1": {
                "q": {
                  "et": "Mitu 3-liikmelist rühma saab valida 8 õpilasest?",
                  "en": "How many 3-person groups can be chosen from 8 students?"
                },
                "a": {
                  "et": "\\(\\binom83=56\\).",
                  "en": "\\(\\binom83=56\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "12 kandidaadist valitakse 5-liikmeline komisjon. Mitu komisjoni on võimalik?",
                  "en": "A 5-person committee is chosen from 12 candidates. How many committees are possible?"
                },
                "a": {
                  "et": "\\(\\binom{12}{5}=792\\).",
                  "en": "\\(\\binom{12}{5}=792\\)."
                }
              },
              "vars": [
                {
                  "s": "\\binom{n}{r}",
                  "et": "kombinatsioonide arv (järjekord ei loe)",
                  "en": "number of combinations (order does not matter)"
                },
                {
                  "s": "n",
                  "et": "kõigi elementide arv",
                  "en": "total number of elements"
                },
                {
                  "s": "r",
                  "et": "valitavate elementide arv",
                  "en": "number of elements chosen"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Arvuta \\(7!\\).",
                "en": "Calculate \\(7!\\)."
              },
              "a": {
                "et": "\\(5040\\).",
                "en": "\\(5040\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Kas järjekord loeb? Kas kordused on lubatud?",
                "en": "Does order matter? Are repetitions allowed?"
              },
              "numeric": 5040
            },
            {
              "difficulty": "medium",
              "q": {
                "et": "Mitmel viisil saab 9 inimesest valida esimehe ja aseesimehe?",
                "en": "In how many ways can a chair and vice-chair be chosen from 9 people?"
              },
              "a": {
                "et": "\\(P(9,2)=72\\).",
                "en": "\\(P(9,2)=72\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Kas järjekord loeb? Kas kordused on lubatud?",
                "en": "Does order matter? Are repetitions allowed?"
              },
              "numeric": 72
            },
            {
              "difficulty": "medium",
              "q": {
                "et": "Mitmel viisil saab 10 õpilasest valida 4-liikmelise tiimi?",
                "en": "How many 4-person teams can be chosen from 10 students?"
              },
              "a": {
                "et": "\\(\\binom{10}{4}=210\\).",
                "en": "\\(\\binom{10}{4}=210\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Kas järjekord loeb? Kas kordused on lubatud?",
                "en": "Does order matter? Are repetitions allowed?"
              },
              "numeric": 210
            },
            {
              "difficulty": "hard",
              "q": {
                "et": "Komisjoni 4 liiget valitakse 6 mehe ja 5 naise hulgast. Leia tõenäosus, et komisjonis on vähemalt 2 naist.",
                "en": "A 4-person committee is chosen from 6 men and 5 women. Find the probability that it has at least 2 women."
              },
              "a": {
                "et": "\\(\\binom{11}{4}=330\\) kõiki valikuid.<br>0 naist: \\(\\binom64=15\\); 1 naine: \\(5\\cdot\\binom63=100\\).<br>\\(P=1-\\frac{15+100}{330}=\\frac{215}{330}=\\frac{43}{66}\\).",
                "en": "\\(\\binom{11}{4}=330\\) possible choices.<br>0 women: \\(\\binom64=15\\); 1 woman: \\(5\\cdot\\binom63=100\\).<br>\\(P=1-\\frac{15+100}{330}=\\frac{215}{330}=\\frac{43}{66}\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "original",
              "hint": {
                "et": "Kas järjekord loeb? Kas kordused on lubatud?",
                "en": "Does order matter? Are repetitions allowed?"
              }
            }
          ],
          "tags": [
            "combinatorics"
          ],
          "trap": {
            "et": "Ära kasuta kombinatsioone järjestatud rollide loendamiseks.",
            "en": "Do not use combinations to count ordered roles."
          },
          "prereq": [
            "review/algebra"
          ]
        },
        "probability": {
          "title": {
            "et": "Tõenäosus ja sündmused",
            "en": "Probability & Events"
          },
          "icon": "🎯",
          "desc": {
            "et": "Klassikaline tõenäosus, vastandsündmus, liit- ja korrutamisreegel.",
            "en": "Classical probability, complement, addition and multiplication rules."
          },
          "formulas": [
            {
              "name": {
                "et": "Klassikaline tõenäosus",
                "en": "Classical probability"
              },
              "tex": "P(A)=\\frac{m}{n}",
              "note": {
                "et": "m = soodsate võrdvõimalike tulemuste arv, n = kõigi tulemuste arv.",
                "en": "m = favourable equally likely outcomes, n = all outcomes."
              },
              "e1": {
                "q": {
                  "et": "Täringul on 6 tulemust. Mis on tõenäosus saada paarisarv?",
                  "en": "A die has 6 outcomes. What is the probability of rolling an even number?"
                },
                "a": {
                  "et": "\\(P=\\frac36=\\frac12\\).",
                  "en": "\\(P=\\frac36=\\frac12\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "20 loosist 4 võidavad. Mis on ühe juhusliku loosi võidutõenäosus?",
                  "en": "4 out of 20 tickets win. What is the chance a random ticket wins?"
                },
                "a": {
                  "et": "\\(P=\\frac4{20}=0.2=20\\%\\).",
                  "en": "\\(P=\\frac4{20}=0.2=20\\%\\)."
                }
              },
              "vars": [
                {
                  "s": "P(A)",
                  "et": "sündmuse A tõenäosus",
                  "en": "probability of event A"
                },
                {
                  "s": "m",
                  "et": "soodsate tulemuste arv",
                  "en": "number of favourable outcomes"
                },
                {
                  "s": "n",
                  "et": "kõigi võrdvõimalike tulemuste arv",
                  "en": "number of all equally likely outcomes"
                }
              ]
            },
            {
              "name": {
                "et": "Vastandsündmus",
                "en": "Complement rule"
              },
              "tex": "P(\\overline A)=1-P(A)",
              "note": {
                "et": "Kasulik “vähemalt ühe” tüüpi ülesannetes.",
                "en": "Useful for “at least one” questions."
              },
              "e1": {
                "q": {
                  "et": "Kui \\(P(A)=0.35\\), leia \\(P(\\overline A)\\).",
                  "en": "If \\(P(A)=0.35\\), find \\(P(\\overline A)\\)."
                },
                "a": {
                  "et": "\\(0.65\\).",
                  "en": "\\(0.65\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Kahe viskega on ühe viske ebaõnnestumise tõenäosus 0.2. Leia tõenäosus, et vähemalt üks õnnestub.",
                  "en": "In two trials the failure probability per trial is 0.2. Find the probability at least one succeeds."
                },
                "a": {
                  "et": "\\(1-0.2^2=0.96\\).",
                  "en": "\\(1-0.2^2=0.96\\)."
                }
              },
              "vars": [
                {
                  "s": "P(\\overline A)",
                  "et": "vastandsündmuse tõenäosus (A ei toimu)",
                  "en": "probability of the complement (A does not occur)"
                },
                {
                  "s": "P(A)",
                  "et": "sündmuse A tõenäosus",
                  "en": "probability of event A"
                }
              ]
            },
            {
              "name": {
                "et": "Sõltumatute sündmuste korrutamisreegel",
                "en": "Multiplication rule for independent events"
              },
              "tex": "P(A\\cap B)=P(A)P(B)",
              "note": {
                "et": "Kui sündmused on sõltumatud.",
                "en": "When events are independent."
              },
              "e1": {
                "q": {
                  "et": "Mündi kull ja täringul 6.",
                  "en": "Heads on a coin and 6 on a die."
                },
                "a": {
                  "et": "\\(\\frac12\\cdot\\frac16=\\frac1{12}\\).",
                  "en": "\\(\\frac12\\cdot\\frac16=\\frac1{12}\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Seade töötab päeval veatult tõenäosusega 0.98. Leia 3 sõltumatu päeva veatu töö tõenäosus.",
                  "en": "A device works faultlessly on a day with probability 0.98. Find the probability of 3 independent faultless days."
                },
                "a": {
                  "et": "\\(0.98^3\\approx0.9412\\).",
                  "en": "\\(0.98^3\\approx0.9412\\)."
                }
              },
              "vars": [
                {
                  "s": "P(A\\cap B)",
                  "et": "tõenäosus, et A ja B toimuvad mõlemad",
                  "en": "probability that both A and B occur"
                },
                {
                  "s": "A,\\,B",
                  "et": "sõltumatud sündmused",
                  "en": "independent events"
                },
                {
                  "s": "P(A),\\,P(B)",
                  "et": "sündmuste A ja B tõenäosused",
                  "en": "probabilities of A and B"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Ausast täringust visatakse üks kord. Leia \\(P(X>4)\\).",
                "en": "Roll a fair die once. Find \\(P(X>4)\\)."
              },
              "a": {
                "et": "\\(\\frac26=\\frac13\\).",
                "en": "\\(\\frac26=\\frac13\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Loenda võrdselt tõenäolised tulemused ja soodsad tulemused.",
                "en": "Count the equally likely outcomes and the favourable ones."
              },
              "numeric": 0.3333333333333333
            },
            {
              "difficulty": "medium",
              "q": {
                "et": "Kaks ausat münti visatakse sõltumatult. Leia tõenäosus saada täpselt üks kull.",
                "en": "Two fair coins are tossed independently. Find the probability of exactly one head."
              },
              "a": {
                "et": "\\(\\frac24=\\frac12\\).",
                "en": "\\(\\frac24=\\frac12\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Loenda võrdselt tõenäolised tulemused ja soodsad tulemused.",
                "en": "Count the equally likely outcomes and the favourable ones."
              },
              "numeric": 0.5
            }
          ],
          "tags": [
            "probability"
          ],
          "trap": {
            "et": "Sõltumatus ja teineteist välistamine on erinevad mõisted.",
            "en": "Independence and mutual exclusivity are different concepts."
          },
          "prereq": [
            "ma11/combinatorics"
          ]
        },
        "bernoulli": {
          "title": {
            "et": "Bernoulli valem",
            "en": "Bernoulli Formula"
          },
          "icon": "🪙",
          "desc": {
            "et": "Täpselt k õnnestumist n sõltumatus katses.",
            "en": "Exactly k successes in n independent trials."
          },
          "formulas": [
            {
              "name": {
                "et": "Bernoulli valem",
                "en": "Bernoulli formula"
              },
              "tex": "P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}",
              "note": {
                "et": "n katset, k õnnestumist, ühe katse õnnestumise tõenäosus p.",
                "en": "n trials, k successes, success probability p."
              },
              "e1": {
                "q": {
                  "et": "Münti visatakse 4 korda. Tõenäosus täpselt 2 kulli?",
                  "en": "A coin is tossed 4 times. Probability of exactly 2 heads?"
                },
                "a": {
                  "et": "\\(\\binom42(0.5)^2(0.5)^2=\\frac{6}{16}=0.375\\).",
                  "en": "\\(\\binom42(0.5)^2(0.5)^2=\\frac{6}{16}=0.375\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Toote defekti tõenäosus on 0.1. 5 tootest täpselt 1 defektne?",
                  "en": "Defect probability is 0.1. Exactly 1 defective out of 5?"
                },
                "a": {
                  "et": "\\(\\binom51(0.1)(0.9)^4\\approx0.3281\\).",
                  "en": "\\(\\binom51(0.1)(0.9)^4\\approx0.3281\\)."
                }
              },
              "vars": [
                {
                  "s": "P(X=k)",
                  "et": "täpselt k õnnestumise tõenäosus",
                  "en": "probability of exactly k successes"
                },
                {
                  "s": "n",
                  "et": "katsete arv",
                  "en": "number of trials"
                },
                {
                  "s": "k",
                  "et": "õnnestumiste arv (0 ≤ k ≤ n)",
                  "en": "number of successes (0 ≤ k ≤ n)"
                },
                {
                  "s": "p",
                  "et": "õnnestumise tõenäosus ühes katses",
                  "en": "probability of success in one trial"
                },
                {
                  "s": "1-p",
                  "et": "ebaõnnestumise tõenäosus ühes katses",
                  "en": "probability of failure in one trial"
                },
                {
                  "s": "\\binom{n}{k}",
                  "et": "viiside arv, kuidas valida, millised k katset õnnestuvad",
                  "en": "number of ways to choose which k trials succeed"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "medium",
              "q": {
                "et": "Korvpalluri tabamuse tõenäosus on 0.7. Leia tõenäosus tabada täpselt 3 korda 5 viskest. Eelda, et visked on sõltumatud ja tabamistõenäosus on püsiv.",
                "en": "A basketball player scores with probability 0.7. Find the probability of exactly 3 hits in 5 shots. Assume the shots are independent and the hit probability stays constant."
              },
              "a": {
                "et": "\\(\\binom53(0.7)^3(0.3)^2\\approx0.3087\\).",
                "en": "\\(\\binom53(0.7)^3(0.3)^2\\approx0.3087\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Leia n, k ja p. Õnnestumised peavad olema sõltumatud ja p püsiv.",
                "en": "Identify n, k and p. Trials must be independent with constant p."
              },
              "numeric": 0.3087
            },
            {
              "difficulty": "hard",
              "q": {
                "et": "Korvpallur tabab tõenäosusega 0,8. Leia tõenäosus, et 5 viskest tabab vähemalt 4. Eelda, et visked on sõltumatud ja tabamistõenäosus on püsiv.",
                "en": "A player hits with probability 0.8. Find the probability of at least 4 hits in 5 shots. Assume the shots are independent and the hit probability stays constant."
              },
              "a": {
                "et": "\\(P(4)=\\binom54(0.8)^4(0.2)=0.4096\\)<br>\\(P(5)=(0.8)^5=0.32768\\)<br>\\(P(X\\ge4)=0.73728\\approx0.7373\\).",
                "en": "\\(P(4)=\\binom54(0.8)^4(0.2)=0.4096\\)<br>\\(P(5)=(0.8)^5=0.32768\\)<br>\\(P(X\\ge4)=0.73728\\approx0.7373\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "original",
              "hint": {
                "et": "Leia n, k ja p. Õnnestumised peavad olema sõltumatud ja p püsiv.",
                "en": "Identify n, k and p. Trials must be independent with constant p."
              },
              "numeric": 0.73728,
              "numericTolerance": 5e-05
            }
          ],
          "tags": [
            "bernoulli"
          ],
          "trap": {
            "et": "„Vähemalt“ tähendab mitme võimaliku k tõenäosuste summat.",
            "en": "“At least” means adding probabilities for several possible k values."
          },
          "prereq": [
            "ma11/probability",
            "ma11/combinatorics"
          ]
        },
        "geometric_probability": {
          "title": {
            "et": "Geomeetriline tõenäosus",
            "en": "Geometric Probability"
          },
          "icon": "📐",
          "desc": {
            "et": "Tõenäosus pikkuste, pindalade või ruumalade suhtena.",
            "en": "Probability as a ratio of lengths, areas or volumes."
          },
          "formulas": [
            {
              "name": {
                "et": "Geomeetriline tõenäosus",
                "en": "Geometric probability"
              },
              "tex": "P(A)=\\frac{\\mu(A)}{\\mu(\\Omega)}",
              "note": {
                "et": "μ(A) = soodsa piirkonna mõõt (pikkus, pindala või ruumala), μ(Ω) = kogu piirkonna mõõt.",
                "en": "μ(A) = measure (length, area or volume) of the favourable region, μ(Ω) = measure of the whole region."
              },
              "e1": {
                "q": {
                  "et": "Punkt valitakse lõigult [0,10]. Tõenäosus sattuda [2,5]?",
                  "en": "A point is chosen from [0,10]. Probability it lies in [2,5]?"
                },
                "a": {
                  "et": "\\(P=\\frac{5-2}{10}=\\frac3{10}\\).",
                  "en": "\\(P=\\frac{5-2}{10}=\\frac3{10}\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Punkt valitakse juhuslikult 10×8 ristkülikust. Soodne ala on 20.",
                  "en": "A point is chosen uniformly from a 10×8 rectangle. Favourable area is 20."
                },
                "a": {
                  "et": "\\(P=\\frac{20}{80}=\\frac14\\).",
                  "en": "\\(P=\\frac{20}{80}=\\frac14\\)."
                }
              },
              "vars": [
                {
                  "s": "P(A)",
                  "et": "sündmuse A tõenäosus",
                  "en": "probability of event A"
                },
                {
                  "s": "\\mu(A)",
                  "et": "soodsa piirkonna mõõt (pikkus, pindala või ruumala)",
                  "en": "measure of the favourable region (length, area or volume)"
                },
                {
                  "s": "\\mu(\\Omega)",
                  "et": "kogu piirkonna mõõt",
                  "en": "measure of the whole region"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "medium",
              "q": {
                "et": "Punkt valitakse ruudust küljega 6. Soodne piirkond on ring raadiusega 2 ruudu sees. Leia tõenäosus. Punkt valitakse ühtlaselt.",
                "en": "A point is chosen uniformly in a square of side 6. The favourable region is a circle of radius 2 inside it. Find the probability."
              },
              "a": {
                "et": "\\(P=\\frac{4\\pi}{36}=\\frac{\\pi}{9}\\).",
                "en": "\\(P=\\frac{4\\pi}{36}=\\frac{\\pi}{9}\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Juhuslik valik peab olema ühtlane: jaga soodne mõõt kogu mõõduga.",
                "en": "The choice must be uniform: divide the favourable measure by the total."
              }
            }
          ],
          "tags": [
            "geometric-probability"
          ],
          "trap": {
            "et": "Pindala suhe toimib ainult ühtlase valiku korral.",
            "en": "The area ratio works only for a uniform choice."
          },
          "prereq": [
            "ma11/plane"
          ]
        },
        "plane": {
          "title": {
            "et": "Planimeetria",
            "en": "Plane Geometry"
          },
          "icon": "📏",
          "desc": {
            "et": "Kolmnurgad, ringid, pindalad ning peamised seosed.",
            "en": "Triangles, circles, areas and core geometric relations."
          },
          "formulas": [
            {
              "name": {
                "et": "Pythagorase teoreem",
                "en": "Pythagorean theorem"
              },
              "tex": "a^2+b^2=c^2",
              "note": {
                "et": "Täisnurkse kolmnurga hüpotenuus c.",
                "en": "For a right triangle with hypotenuse c."
              },
              "e1": {
                "q": {
                  "et": "Kaatetid 6 ja 8. Leia hüpotenuus.",
                  "en": "Legs 6 and 8. Find the hypotenuse."
                },
                "a": {
                  "et": "\\(c=10\\).",
                  "en": "\\(c=10\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Redel on seinast 5 m kaugusel ja ulatub 12 m kõrgusele. Kui pikk on redel?",
                  "en": "A ladder stands 5 m from a wall and reaches 12 m high. How long is it?"
                },
                "a": {
                  "et": "\\(c=\\sqrt{5^2+12^2}=13\\text{ m}\\).",
                  "en": "\\(c=\\sqrt{5^2+12^2}=13\\text{ m}\\)."
                }
              },
              "vars": [
                {
                  "s": "a,\\,b",
                  "et": "täisnurkse kolmnurga kaatetid",
                  "en": "legs of the right triangle"
                },
                {
                  "s": "c",
                  "et": "hüpotenuus (täisnurga vastas olev külg)",
                  "en": "hypotenuse (the side opposite the right angle)"
                }
              ]
            },
            {
              "name": {
                "et": "Kolmnurga pindala",
                "en": "Triangle area"
              },
              "tex": "S=\\frac12 ah",
              "note": {
                "et": "a = alus, h = sellele vastav kõrgus.",
                "en": "a = base, h = corresponding height."
              },
              "e1": {
                "q": {
                  "et": "Alus 10, kõrgus 7.",
                  "en": "Base 10, height 7."
                },
                "a": {
                  "et": "\\(S=35\\).",
                  "en": "\\(S=35\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Kolmnurkse maatüki alus on 18 m ja kõrgus 11 m.",
                  "en": "A triangular plot has base 18 m and height 11 m."
                },
                "a": {
                  "et": "\\(S=99\\text{ m}^2\\).",
                  "en": "\\(S=99\\text{ m}^2\\)."
                }
              },
              "vars": [
                {
                  "s": "S",
                  "et": "kolmnurga pindala",
                  "en": "area of the triangle"
                },
                {
                  "s": "a",
                  "et": "kolmnurga külg (alus)",
                  "en": "a side of the triangle (the base)"
                },
                {
                  "s": "h",
                  "et": "sellele küljele tõmmatud kõrgus",
                  "en": "height drawn to that side"
                }
              ]
            },
            {
              "name": {
                "et": "Koosinusteoreem",
                "en": "Cosine rule"
              },
              "tex": "c^2=a^2+b^2-2ab\\cos\\gamma",
              "note": {
                "et": "Kui tead kahte külge ja nende vahelist nurka või kolme külge.",
                "en": "Use with two sides and included angle, or three sides."
              },
              "e1": {
                "q": {
                  "et": "a=5, b=7, \\(\\gamma=60^\\circ\\). Leia c.",
                  "en": "a=5, b=7, \\(\\gamma=60^\\circ\\). Find c."
                },
                "a": {
                  "et": "\\(c^2=25+49-35=39\\Rightarrow c=\\sqrt{39}\\).",
                  "en": "\\(c^2=25+49-35=39\\Rightarrow c=\\sqrt{39}\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Kaks teed pikkusega 8 km ja 11 km moodustavad 45° nurga. Leia otsetee pikkus lõpp-punktide vahel.",
                  "en": "Two roads of lengths 8 km and 11 km form a 45° angle. Find the direct distance between endpoints."
                },
                "a": {
                  "et": "\\(d=\\sqrt{8^2+11^2-2\\cdot8\\cdot11\\cos45^\\circ}\\approx7.78\\text{ km}\\).",
                  "en": "\\(d=\\sqrt{8^2+11^2-2\\cdot8\\cdot11\\cos45^\\circ}\\approx7.78\\text{ km}\\)."
                }
              },
              "vars": [
                {
                  "s": "a,\\,b",
                  "et": "kolmnurga kaks külge",
                  "en": "two sides of the triangle"
                },
                {
                  "s": "\\gamma",
                  "et": "nende külgede vaheline nurk",
                  "en": "angle between those two sides"
                },
                {
                  "s": "c",
                  "et": "nurga γ vastas olev külg",
                  "en": "side opposite angle γ"
                }
              ]
            },
            {
              "name": {
                "et": "Ringi pindala ja ümbermõõt",
                "en": "Circle area and circumference"
              },
              "tex": "S=\\pi r^2,\\qquad L=2\\pi r",
              "note": {
                "et": "r on raadius; diameetri korral r = d/2.",
                "en": "r is the radius; if given the diameter, r = d/2."
              },
              "e1": {
                "q": {
                  "et": "r = 7. Leia pindala ja ümbermõõt.",
                  "en": "r = 7. Find area and circumference."
                },
                "a": {
                  "et": "\\(S=49\\pi\\), \\(L=14\\pi\\).",
                  "en": "\\(S=49\\pi\\), \\(L=14\\pi\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Ümmarguse laua diameeter on 1,2 m. Leia pealispinna pindala.",
                  "en": "A round table has diameter 1.2 m. Find its top area."
                },
                "a": {
                  "et": "\\(r=0.6\\), \\(S=0.36\\pi\\approx1.13\\text{ m}^2\\).",
                  "en": "\\(r=0.6\\), \\(S=0.36\\pi\\approx1.13\\text{ m}^2\\)."
                }
              },
              "vars": [
                {
                  "s": "S",
                  "et": "ringi pindala",
                  "en": "area of the circle"
                },
                {
                  "s": "L",
                  "et": "ringjoone pikkus (ümbermõõt)",
                  "en": "circumference of the circle"
                },
                {
                  "s": "r",
                  "et": "ringi raadius",
                  "en": "radius of the circle"
                },
                {
                  "s": "\\pi",
                  "et": "konstant, ≈ 3,1416",
                  "en": "constant, ≈ 3.1416"
                }
              ]
            },
            {
              "name": {
                "et": "Sektori pindala",
                "en": "Sector area"
              },
              "tex": "S=\\frac{\\alpha}{360^\\circ}\\,\\pi r^2",
              "note": {
                "et": "α on keskpunktinurk kraadides.",
                "en": "α is the central angle in degrees."
              },
              "e1": {
                "q": {
                  "et": "r = 6, α = 90°.",
                  "en": "r = 6, α = 90°."
                },
                "a": {
                  "et": "\\(S=\\frac{90}{360}\\pi\\cdot36=9\\pi\\).",
                  "en": "\\(S=\\frac{90}{360}\\pi\\cdot36=9\\pi\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Pitsalõigu raadius on 15 cm ja nurk 45°. Leia lõigu pindala.",
                  "en": "A pizza slice has radius 15 cm and angle 45°. Find its area."
                },
                "a": {
                  "et": "\\(S=\\frac{45}{360}\\pi\\cdot225=28.125\\pi\\approx88.4\\text{ cm}^2\\).",
                  "en": "\\(S=\\frac{45}{360}\\pi\\cdot225=28.125\\pi\\approx88.4\\text{ cm}^2\\)."
                }
              },
              "vars": [
                {
                  "s": "S",
                  "et": "sektori pindala",
                  "en": "area of the sector"
                },
                {
                  "s": "\\alpha",
                  "et": "sektori keskpunktinurk kraadides",
                  "en": "central angle of the sector in degrees"
                },
                {
                  "s": "r",
                  "et": "ringi raadius",
                  "en": "radius of the circle"
                },
                {
                  "s": "\\pi",
                  "et": "konstant, ≈ 3,1416",
                  "en": "constant, ≈ 3.1416"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Täisnurkse kolmnurga kaatetid on 8 ja 15. Leia hüpotenuus.",
                "en": "A right triangle has legs 8 and 15. Find the hypotenuse."
              },
              "a": {
                "et": "17.",
                "en": "17."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Joonista kujund ja märgi teadaolevad küljed ning nurgad.",
                "en": "Draw the figure and label known sides and angles."
              },
              "numeric": 17
            },
            {
              "difficulty": "medium",
              "q": {
                "et": "Ringi raadius on 5 cm. Leia pindala.",
                "en": "A circle has radius 5 cm. Find its area."
              },
              "a": {
                "et": "\\(25\\pi\\text{ cm}^2\\).",
                "en": "\\(25\\pi\\text{ cm}^2\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Joonista kujund ja märgi teadaolevad küljed ning nurgad.",
                "en": "Draw the figure and label known sides and angles."
              }
            },
            {
              "difficulty": "hard",
              "q": {
                "et": "Kolmnurga küljed on 7, 8 ja 9. Leia nurk külje 9 vastas ja kolmnurga pindala.",
                "en": "A triangle has sides 7, 8 and 9. Find the angle opposite side 9 and the triangle area."
              },
              "a": {
                "et": "\\(\\cos\\gamma=\\frac{7^2+8^2-9^2}{2\\cdot7\\cdot8}=\\frac{2}{7}\\Rightarrow\\gamma\\approx73.4^\\circ\\)<br>\\(\\sin\\gamma=\\frac{3\\sqrt5}{7}\\), \\(S=\\frac12\\cdot7\\cdot8\\cdot\\sin\\gamma=12\\sqrt5\\approx26.8\\).",
                "en": "\\(\\cos\\gamma=\\frac{7^2+8^2-9^2}{2\\cdot7\\cdot8}=\\frac{2}{7}\\Rightarrow\\gamma\\approx73.4^\\circ\\)<br>\\(\\sin\\gamma=\\frac{3\\sqrt5}{7}\\), \\(S=\\frac12\\cdot7\\cdot8\\cdot\\sin\\gamma=12\\sqrt5\\approx26.8\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "original",
              "hint": {
                "et": "Joonista kujund ja märgi teadaolevad küljed ning nurgad.",
                "en": "Draw the figure and label known sides and angles."
              }
            }
          ],
          "tags": [
            "plane"
          ],
          "trap": {
            "et": "Kõrgus on alusega risti; see ei pruugi olla kaldkülg.",
            "en": "A height is perpendicular to the base; it need not be a sloping side."
          },
          "prereq": [
            "review/trigonometry"
          ]
        }
      }
    },
    "ma12": {
      "code": "MA12",
      "title": {
        "et": "Stereomeetria",
        "en": "Solid Geometry / Stereometry"
      },
      "icon": "🧊",
      "desc": {
        "et": "Prisma, püramiid, silinder, koonus ja kera.",
        "en": "Prism, pyramid, cylinder, cone and sphere."
      },
      "topics": {
        "prism": {
          "title": {
            "et": "Prisma",
            "en": "Prism"
          },
          "icon": "📦",
          "desc": {
            "et": "Prisma ruumala ja pindala.",
            "en": "Prism volume and surface area."
          },
          "formulas": [
            {
              "name": {
                "et": "Prisma ruumala",
                "en": "Prism volume"
              },
              "tex": "V=S_{p}\\,h",
              "note": {
                "et": "\\(S_p\\) on põhja pindala.",
                "en": "\\(S_p\\) is base area."
              },
              "e1": {
                "q": {
                  "et": "Põhja pindala 12 cm², kõrgus 7 cm.",
                  "en": "Base area 12 cm², height 7 cm."
                },
                "a": {
                  "et": "\\(V=84\\text{ cm}^3\\).",
                  "en": "\\(V=84\\text{ cm}^3\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Kolmnurkse prisma põhja pindala on 15 cm² ja pikkus 9 cm.",
                  "en": "A triangular prism has base area 15 cm² and length 9 cm."
                },
                "a": {
                  "et": "\\(V=135\\text{ cm}^3\\).",
                  "en": "\\(V=135\\text{ cm}^3\\)."
                }
              },
              "vars": [
                {
                  "s": "V",
                  "et": "prisma ruumala",
                  "en": "volume of the prism"
                },
                {
                  "s": "S_{p}",
                  "et": "aluse pindala",
                  "en": "area of the base"
                },
                {
                  "s": "h",
                  "et": "prisma kõrgus (aluste vaheline kaugus)",
                  "en": "height of the prism (distance between the bases)"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Risttahuka mõõtmed on 3×4×10. Leia ruumala.",
                "en": "A rectangular prism is 3×4×10. Find volume."
              },
              "a": {
                "et": "120.",
                "en": "120."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Leia põhja pindala ja põhjaga risti olev kõrgus.",
                "en": "Find the base area and the height perpendicular to it."
              },
              "numeric": 120
            }
          ],
          "tags": [
            "prism"
          ],
          "trap": {
            "et": "Pindala ühik on ruutühik, ruumala ühik kuupühik.",
            "en": "Area uses square units; volume uses cubic units."
          },
          "prereq": [
            "ma11/plane"
          ]
        },
        "pyramid": {
          "title": {
            "et": "Püramiid",
            "en": "Pyramid"
          },
          "icon": "🔺",
          "desc": {
            "et": "Püramiidi ruumala ja põhilised pindalaülesanded.",
            "en": "Pyramid volume and core surface-area problems."
          },
          "formulas": [
            {
              "name": {
                "et": "Püramiidi ruumala",
                "en": "Pyramid volume"
              },
              "tex": "V=\\frac13 S_{p}h",
              "note": {
                "et": "Püramiidi ruumala on kolmandik sama põhja ja kõrgusega prisma ruumalast.",
                "en": "A pyramid has one third the volume of a prism with the same base and height."
              },
              "e1": {
                "q": {
                  "et": "Põhja pindala 30, kõrgus 12.",
                  "en": "Base area 30, height 12."
                },
                "a": {
                  "et": "\\(V=120\\).",
                  "en": "\\(V=120\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Ruutpüramiidi põhja külg 6 cm ja kõrgus 10 cm.",
                  "en": "A square pyramid has base side 6 cm and height 10 cm."
                },
                "a": {
                  "et": "\\(V=\\frac13\\cdot36\\cdot10=120\\text{ cm}^3\\).",
                  "en": "\\(V=\\frac13\\cdot36\\cdot10=120\\text{ cm}^3\\)."
                }
              },
              "vars": [
                {
                  "s": "V",
                  "et": "püramiidi ruumala",
                  "en": "volume of the pyramid"
                },
                {
                  "s": "S_{p}",
                  "et": "aluse pindala",
                  "en": "area of the base"
                },
                {
                  "s": "h",
                  "et": "püramiidi kõrgus (tipust aluse tasandini)",
                  "en": "height of the pyramid (from the apex to the base plane)"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "medium",
              "q": {
                "et": "Püramiidi ruumala on 80 cm³ ja põhja pindala 24 cm². Leia kõrgus.",
                "en": "A pyramid has volume 80 cm³ and base area 24 cm². Find height."
              },
              "a": {
                "et": "\\(80=\\frac13\\cdot24h\\Rightarrow h=10\\text{ cm}\\).",
                "en": "\\(80=\\frac13\\cdot24h\\Rightarrow h=10\\text{ cm}\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Leia põhja pindala; vajadusel leia kõrgus täisnurksest kolmnurgast.",
                "en": "Find the base area; if needed find the height using a right triangle."
              },
              "numeric": 10
            },
            {
              "difficulty": "hard",
              "q": {
                "et": "Korrapärase nelinurkse püramiidi alusserv on 6 cm ja külgserv 5 cm. Leia ruumala.",
                "en": "A regular square pyramid has base side 6 cm and lateral edge 5 cm. Find its volume."
              },
              "a": {
                "et": "Aluse diagonaali pool: \\(3\\sqrt2\\).<br>\\(h^2=5^2-(3\\sqrt2)^2=7\\Rightarrow h=\\sqrt7\\).<br>\\(V=\\frac13\\cdot36\\cdot\\sqrt7=12\\sqrt7\\approx31.7\\text{ cm}^3\\).",
                "en": "Half of the base diagonal: \\(3\\sqrt2\\).<br>\\(h^2=5^2-(3\\sqrt2)^2=7\\Rightarrow h=\\sqrt7\\).<br>\\(V=\\frac13\\cdot36\\cdot\\sqrt7=12\\sqrt7\\approx31.7\\text{ cm}^3\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "original",
              "hint": {
                "et": "Leia põhja pindala; vajadusel leia kõrgus täisnurksest kolmnurgast.",
                "en": "Find the base area; if needed find the height using a right triangle."
              }
            }
          ],
          "tags": [
            "pyramid"
          ],
          "trap": {
            "et": "Külgserv, apoteem ja püramiidi kõrgus on erinevad.",
            "en": "The lateral edge, slant height and perpendicular height are different."
          },
          "prereq": [
            "ma11/plane",
            "ma12/prism"
          ]
        },
        "cylinder": {
          "title": {
            "et": "Silinder",
            "en": "Cylinder"
          },
          "icon": "🥫",
          "desc": {
            "et": "Silindri ruumala ja pindala.",
            "en": "Cylinder volume and surface area."
          },
          "formulas": [
            {
              "name": {
                "et": "Silindri ruumala",
                "en": "Cylinder volume"
              },
              "tex": "V=\\pi r^2h",
              "note": {
                "et": "Põhi on ring.",
                "en": "The base is a circle."
              },
              "e1": {
                "q": {
                  "et": "r=3, h=8.",
                  "en": "r=3, h=8."
                },
                "a": {
                  "et": "\\(V=72\\pi\\).",
                  "en": "\\(V=72\\pi\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Veepaagi raadius on 1.5 m ja kõrgus 4 m.",
                  "en": "A water tank has radius 1.5 m and height 4 m."
                },
                "a": {
                  "et": "\\(V=9\\pi\\text{ m}^3\\approx28.27\\text{ m}^3\\).",
                  "en": "\\(V=9\\pi\\text{ m}^3\\approx28.27\\text{ m}^3\\)."
                }
              },
              "vars": [
                {
                  "s": "V",
                  "et": "silindri ruumala",
                  "en": "volume of the cylinder"
                },
                {
                  "s": "r",
                  "et": "aluse raadius",
                  "en": "radius of the base"
                },
                {
                  "s": "h",
                  "et": "silindri kõrgus",
                  "en": "height of the cylinder"
                },
                {
                  "s": "\\pi",
                  "et": "konstant, ≈ 3,1416",
                  "en": "constant, ≈ 3.1416"
                }
              ]
            },
            {
              "name": {
                "et": "Silindri täispindala",
                "en": "Cylinder total surface area"
              },
              "tex": "S=2\\pi r^2+2\\pi rh",
              "note": {
                "et": "Kaks ringikujulist põhja + külgpind.",
                "en": "Two circular bases + lateral area."
              },
              "e1": {
                "q": {
                  "et": "r=2, h=5.",
                  "en": "r=2, h=5."
                },
                "a": {
                  "et": "\\(S=8\\pi+20\\pi=28\\pi\\).",
                  "en": "\\(S=8\\pi+20\\pi=28\\pi\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Suletud silindrilise purgi r=4 cm, h=12 cm.",
                  "en": "A closed cylindrical can has r=4 cm, h=12 cm."
                },
                "a": {
                  "et": "\\(S=32\\pi+96\\pi=128\\pi\\text{ cm}^2\\).",
                  "en": "\\(S=32\\pi+96\\pi=128\\pi\\text{ cm}^2\\)."
                }
              },
              "vars": [
                {
                  "s": "S",
                  "et": "silindri täispindala",
                  "en": "total surface area of the cylinder"
                },
                {
                  "s": "2\\pi r^2",
                  "et": "kahe aluse pindala",
                  "en": "area of the two bases"
                },
                {
                  "s": "2\\pi rh",
                  "et": "külgpindala",
                  "en": "lateral surface area"
                },
                {
                  "s": "r",
                  "et": "aluse raadius",
                  "en": "radius of the base"
                },
                {
                  "s": "h",
                  "et": "silindri kõrgus",
                  "en": "height of the cylinder"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "medium",
              "q": {
                "et": "Silindri diameeter on 10 cm ja kõrgus 7 cm. Leia ruumala.",
                "en": "A cylinder has diameter 10 cm and height 7 cm. Find volume."
              },
              "a": {
                "et": "\\(r=5\\), seega \\(V=175\\pi\\text{ cm}^3\\).",
                "en": "\\(r=5\\), so \\(V=175\\pi\\text{ cm}^3\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Kui antud on läbimõõt, jaga see enne valemisse asendamist kahega.",
                "en": "If given a diameter, divide it by two before substitution."
              }
            }
          ],
          "tags": [
            "cylinder"
          ],
          "trap": {
            "et": "Ära asenda raadiuse asemel läbimõõtu.",
            "en": "Do not substitute a diameter for the radius."
          },
          "prereq": [
            "ma11/plane"
          ]
        },
        "cone": {
          "title": {
            "et": "Koonus",
            "en": "Cone"
          },
          "icon": "🍦",
          "desc": {
            "et": "Koonuse ruumala ning külg- ja täispindala.",
            "en": "Cone volume, lateral and total surface area."
          },
          "formulas": [
            {
              "name": {
                "et": "Koonuse ruumala",
                "en": "Cone volume"
              },
              "tex": "V=\\frac13\\pi r^2h",
              "note": {
                "et": "Kolmandik sama põhja ja kõrgusega silindri ruumalast.",
                "en": "One third of the cylinder with same base and height."
              },
              "e1": {
                "q": {
                  "et": "r=3, h=9.",
                  "en": "r=3, h=9."
                },
                "a": {
                  "et": "\\(V=27\\pi\\).",
                  "en": "\\(V=27\\pi\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Koonusekujuline anum: r=5 cm, h=12 cm.",
                  "en": "A cone-shaped container has r=5 cm, h=12 cm."
                },
                "a": {
                  "et": "\\(V=100\\pi\\text{ cm}^3\\).",
                  "en": "\\(V=100\\pi\\text{ cm}^3\\)."
                }
              },
              "vars": [
                {
                  "s": "V",
                  "et": "koonuse ruumala",
                  "en": "volume of the cone"
                },
                {
                  "s": "r",
                  "et": "aluse raadius",
                  "en": "radius of the base"
                },
                {
                  "s": "h",
                  "et": "koonuse kõrgus (tipust aluseni)",
                  "en": "height of the cone (from the apex to the base)"
                },
                {
                  "s": "\\pi",
                  "et": "konstant, ≈ 3,1416",
                  "en": "constant, ≈ 3.1416"
                }
              ]
            },
            {
              "name": {
                "et": "Koonuse külgpindala",
                "en": "Cone lateral area"
              },
              "tex": "S_k=\\pi rl",
              "note": {
                "et": "l on moodustaja.",
                "en": "l is the slant height."
              },
              "e1": {
                "q": {
                  "et": "r=4, l=7.",
                  "en": "r=4, l=7."
                },
                "a": {
                  "et": "\\(S_k=28\\pi\\).",
                  "en": "\\(S_k=28\\pi\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Peomüts on koonus r=6 cm ja l=20 cm. Kui palju materjali kulub külgpinnale?",
                  "en": "A party hat is a cone with r=6 cm and l=20 cm. How much material is needed for its side?"
                },
                "a": {
                  "et": "\\(120\\pi\\text{ cm}^2\\).",
                  "en": "\\(120\\pi\\text{ cm}^2\\)."
                }
              },
              "vars": [
                {
                  "s": "S_k",
                  "et": "koonuse külgpindala",
                  "en": "lateral surface area of the cone"
                },
                {
                  "s": "r",
                  "et": "aluse raadius",
                  "en": "radius of the base"
                },
                {
                  "s": "l",
                  "et": "moodustaja (tipust aluse serva)",
                  "en": "slant height (from the apex to the edge of the base)"
                },
                {
                  "s": "\\pi",
                  "et": "konstant, ≈ 3,1416",
                  "en": "constant, ≈ 3.1416"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "medium",
              "q": {
                "et": "Koonuse r=6 cm ja h=8 cm. Leia ruumala.",
                "en": "A cone has r=6 cm and h=8 cm. Find volume."
              },
              "a": {
                "et": "\\(96\\pi\\text{ cm}^3\\).",
                "en": "\\(96\\pi\\text{ cm}^3\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Raadius, kõrgus ja moodustaja moodustavad täisnurkse kolmnurga.",
                "en": "Radius, perpendicular height and slant height form a right triangle."
              }
            },
            {
              "difficulty": "hard",
              "q": {
                "et": "Koonuse alusraadius on 6 cm ja moodustaja 10 cm. Leia ruumala ja täispindala.",
                "en": "A cone has base radius 6 cm and slant height 10 cm. Find volume and total surface area."
              },
              "a": {
                "et": "\\(h=\\sqrt{10^2-6^2}=8\\)<br>\\(V=\\frac13\\pi\\cdot36\\cdot8=96\\pi\\text{ cm}^3\\)<br>\\(S=\\pi rl+\\pi r^2=60\\pi+36\\pi=96\\pi\\text{ cm}^2\\).",
                "en": "\\(h=\\sqrt{10^2-6^2}=8\\)<br>\\(V=\\frac13\\pi\\cdot36\\cdot8=96\\pi\\text{ cm}^3\\)<br>\\(S=\\pi rl+\\pi r^2=60\\pi+36\\pi=96\\pi\\text{ cm}^2\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "original",
              "hint": {
                "et": "Raadius, kõrgus ja moodustaja moodustavad täisnurkse kolmnurga.",
                "en": "Radius, perpendicular height and slant height form a right triangle."
              }
            }
          ],
          "tags": [
            "cone"
          ],
          "trap": {
            "et": "Kogupindala sisaldab ka põhja.",
            "en": "Total surface area includes the base."
          },
          "prereq": [
            "ma11/plane",
            "ma12/cylinder"
          ]
        },
        "sphere": {
          "title": {
            "et": "Kera",
            "en": "Sphere"
          },
          "icon": "⚪",
          "desc": {
            "et": "Kera pindala ja ruumala.",
            "en": "Sphere surface area and volume."
          },
          "formulas": [
            {
              "name": {
                "et": "Kera ruumala",
                "en": "Sphere volume"
              },
              "tex": "V=\\frac43\\pi r^3",
              "note": {
                "et": "Kasuta raadiust, mitte diameetrit.",
                "en": "Use radius, not diameter."
              },
              "e1": {
                "q": {
                  "et": "r=3.",
                  "en": "r=3."
                },
                "a": {
                  "et": "\\(V=36\\pi\\).",
                  "en": "\\(V=36\\pi\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Palli diameeter on 20 cm.",
                  "en": "A ball has diameter 20 cm."
                },
                "a": {
                  "et": "\\(r=10\\), \\(V=\\frac{4000}{3}\\pi\\text{ cm}^3\\).",
                  "en": "\\(r=10\\), \\(V=\\frac{4000}{3}\\pi\\text{ cm}^3\\)."
                }
              },
              "vars": [
                {
                  "s": "V",
                  "et": "kera ruumala",
                  "en": "volume of the sphere"
                },
                {
                  "s": "r",
                  "et": "kera raadius",
                  "en": "radius of the sphere"
                },
                {
                  "s": "\\pi",
                  "et": "konstant, ≈ 3,1416",
                  "en": "constant, ≈ 3.1416"
                }
              ]
            },
            {
              "name": {
                "et": "Kera pindala",
                "en": "Sphere surface area"
              },
              "tex": "S=4\\pi r^2",
              "note": {
                "et": "Kogu kerapind.",
                "en": "Total surface area."
              },
              "e1": {
                "q": {
                  "et": "r=5.",
                  "en": "r=5."
                },
                "a": {
                  "et": "\\(S=100\\pi\\).",
                  "en": "\\(S=100\\pi\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Õhupalli raadius kasvab 4 cm-lt 8 cm-ni. Mitu korda pindala kasvab?",
                  "en": "A balloon radius grows from 4 cm to 8 cm. By what factor does surface area increase?"
                },
                "a": {
                  "et": "Raadius kahekordistub, pindala kasvab \\(2^2=4\\) korda.",
                  "en": "Radius doubles, so area grows by \\(2^2=4\\) times."
                }
              },
              "vars": [
                {
                  "s": "S",
                  "et": "kera pindala",
                  "en": "surface area of the sphere"
                },
                {
                  "s": "r",
                  "et": "kera raadius",
                  "en": "radius of the sphere"
                },
                {
                  "s": "\\pi",
                  "et": "konstant, ≈ 3,1416",
                  "en": "constant, ≈ 3.1416"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Kera raadius on 2 cm. Leia pindala.",
                "en": "A sphere has radius 2 cm. Find surface area."
              },
              "a": {
                "et": "\\(16\\pi\\text{ cm}^2\\).",
                "en": "\\(16\\pi\\text{ cm}^2\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Määra, kas otsitakse pindala või ruumala. Kasuta raadiust.",
                "en": "Decide whether you need area or volume. Use the radius."
              }
            }
          ],
          "tags": [
            "sphere"
          ],
          "trap": {
            "et": "Kera pindala on 4πr², mitte ringi pindala πr².",
            "en": "Sphere surface area is 4πr², not circle area πr²."
          },
          "prereq": [
            "ma11/plane"
          ]
        }
      }
    },
    "ma13": {
      "code": "MA13",
      "title": {
        "et": "Analüütiline geomeetria ja integraal",
        "en": "Analytical Geometry & Integrals"
      },
      "icon": "📈",
      "desc": {
        "et": "Koordinaadid, vektorid, sirge võrrand ning integraal.",
        "en": "Coordinates, vectors, line equations and integrals."
      },
      "topics": {
        "analytic": {
          "title": {
            "et": "Analüütiline geomeetria",
            "en": "Analytical Geometry"
          },
          "icon": "🧭",
          "desc": {
            "et": "Punktide kaugus, keskpunkt ning koordinaatmeetod.",
            "en": "Distance, midpoint and coordinate methods."
          },
          "formulas": [
            {
              "name": {
                "et": "Kahe punkti kaugus",
                "en": "Distance between two points"
              },
              "tex": "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
              "note": {
                "et": "Pythagorase teoreem koordinaattasandil.",
                "en": "Pythagorean theorem on the coordinate plane."
              },
              "e1": {
                "q": {
                  "et": "A(1,2), B(4,6).",
                  "en": "A(1,2), B(4,6)."
                },
                "a": {
                  "et": "\\(d=\\sqrt{3^2+4^2}=5\\).",
                  "en": "\\(d=\\sqrt{3^2+4^2}=5\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Kaardil A(−2,3), B(6,−3). Leia vahemaa.",
                  "en": "On a map A(−2,3), B(6,−3). Find distance."
                },
                "a": {
                  "et": "\\(d=\\sqrt{8^2+(-6)^2}=10\\).",
                  "en": "\\(d=\\sqrt{8^2+(-6)^2}=10\\)."
                }
              },
              "vars": [
                {
                  "s": "d",
                  "et": "punktide vaheline kaugus",
                  "en": "distance between the points"
                },
                {
                  "s": "(x_1,y_1)",
                  "et": "punkti A koordinaadid",
                  "en": "coordinates of point A"
                },
                {
                  "s": "(x_2,y_2)",
                  "et": "punkti B koordinaadid",
                  "en": "coordinates of point B"
                }
              ]
            },
            {
              "name": {
                "et": "Lõigu keskpunkt",
                "en": "Midpoint"
              },
              "tex": "M\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)",
              "note": {
                "et": "Koordinaatide aritmeetiline keskmine.",
                "en": "Average the coordinates."
              },
              "e1": {
                "q": {
                  "et": "A(2,4), B(8,10).",
                  "en": "A(2,4), B(8,10)."
                },
                "a": {
                  "et": "\\(M(5,7)\\).",
                  "en": "\\(M(5,7)\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Kahe punkti A(−5,2) ja B(7,8) vahele paigaldatakse keskpunkt.",
                  "en": "Place a midpoint between A(−5,2) and B(7,8)."
                },
                "a": {
                  "et": "\\(M(1,5)\\).",
                  "en": "\\(M(1,5)\\)."
                }
              },
              "vars": [
                {
                  "s": "M",
                  "et": "lõigu keskpunkt",
                  "en": "midpoint of the segment"
                },
                {
                  "s": "(x_1,y_1)",
                  "et": "lõigu esimese otspunkti koordinaadid",
                  "en": "coordinates of the first endpoint"
                },
                {
                  "s": "(x_2,y_2)",
                  "et": "lõigu teise otspunkti koordinaadid",
                  "en": "coordinates of the second endpoint"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Leia A(−1,2) ja B(5,10) vahemaa.",
                "en": "Find the distance between A(−1,2) and B(5,10)."
              },
              "a": {
                "et": "10.",
                "en": "10."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Lahuta vastavad koordinaadid ja kasuta Pythagorase teoreemi.",
                "en": "Subtract corresponding coordinates and use Pythagoras."
              },
              "numeric": 10
            }
          ],
          "tags": [
            "analytic"
          ],
          "trap": {
            "et": "Negatiivse arvu lahutamisel kontrolli märki.",
            "en": "Watch the sign when subtracting a negative coordinate."
          },
          "prereq": [
            "review/algebra"
          ]
        },
        "vectors": {
          "title": {
            "et": "Vektorid",
            "en": "Vectors"
          },
          "icon": "➡️",
          "desc": {
            "et": "Vektori koordinaadid, pikkus ja skalaarkorrutis.",
            "en": "Vector coordinates, magnitude and dot product."
          },
          "formulas": [
            {
              "name": {
                "et": "Vektor punktist A punkti B",
                "en": "Vector from A to B"
              },
              "tex": "\\vec{AB}=(x_2-x_1,\\,y_2-y_1)",
              "note": {
                "et": "Lõpp-punkt miinus alguspunkt.",
                "en": "End coordinates minus start coordinates."
              },
              "e1": {
                "q": {
                  "et": "A(1,3), B(5,8).",
                  "en": "A(1,3), B(5,8)."
                },
                "a": {
                  "et": "\\(\\vec{AB}=(4,5)\\).",
                  "en": "\\(\\vec{AB}=(4,5)\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "A(−2,4), B(7,−1).",
                  "en": "A(−2,4), B(7,−1)."
                },
                "a": {
                  "et": "\\(\\vec{AB}=(9,-5)\\).",
                  "en": "\\(\\vec{AB}=(9,-5)\\)."
                }
              },
              "vars": [
                {
                  "s": "\\vec{AB}",
                  "et": "vektor punktist A punkti B",
                  "en": "vector from A to B"
                },
                {
                  "s": "(x_1,y_1)",
                  "et": "alguspunkti A koordinaadid",
                  "en": "coordinates of the starting point A"
                },
                {
                  "s": "(x_2,y_2)",
                  "et": "lõpp-punkti B koordinaadid",
                  "en": "coordinates of the end point B"
                }
              ]
            },
            {
              "name": {
                "et": "Vektori pikkus",
                "en": "Vector magnitude"
              },
              "tex": "|\\vec v|=\\sqrt{x^2+y^2}",
              "note": {
                "et": "Vektori (x,y) pikkus.",
                "en": "Length of vector (x,y)."
              },
              "e1": {
                "q": {
                  "et": "\\(\\vec v=(3,4)\\).",
                  "en": "\\(\\vec v=(3,4)\\)."
                },
                "a": {
                  "et": "\\(|\\vec v|=5\\).",
                  "en": "\\(|\\vec v|=5\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Nihe on (−6,8) km. Leia pikkus.",
                  "en": "A displacement is (−6,8) km. Find its magnitude."
                },
                "a": {
                  "et": "10 km.",
                  "en": "10 km."
                }
              },
              "vars": [
                {
                  "s": "|\\vec v|",
                  "et": "vektori pikkus",
                  "en": "length (magnitude) of the vector"
                },
                {
                  "s": "x,\\,y",
                  "et": "vektori koordinaadid",
                  "en": "coordinates (components) of the vector"
                }
              ]
            },
            {
              "name": {
                "et": "Skalaarkorrutis",
                "en": "Dot product"
              },
              "tex": "\\vec a\\cdot\\vec b=a_xb_x+a_yb_y",
              "note": {
                "et": "Kasulik ristseisu ja nurga kontrollimisel.",
                "en": "Useful for perpendicularity and angles."
              },
              "e1": {
                "q": {
                  "et": "a=(2,3), b=(4,−1).",
                  "en": "a=(2,3), b=(4,−1)."
                },
                "a": {
                  "et": "\\(8-3=5\\).",
                  "en": "\\(8-3=5\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "a=(3,2), b=(2,−3). Kas nad on risti?",
                  "en": "a=(3,2), b=(2,−3). Are they perpendicular?"
                },
                "a": {
                  "et": "\\(6-6=0\\), seega jah.",
                  "en": "\\(6-6=0\\), so yes."
                }
              },
              "vars": [
                {
                  "s": "\\vec a\\cdot\\vec b",
                  "et": "vektorite skalaarkorrutis (arv)",
                  "en": "dot (scalar) product of the vectors (a number)"
                },
                {
                  "s": "a_x,\\,a_y",
                  "et": "vektori a koordinaadid",
                  "en": "coordinates of vector a"
                },
                {
                  "s": "b_x,\\,b_y",
                  "et": "vektori b koordinaadid",
                  "en": "coordinates of vector b"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Leia \\(\\vec v=(5,12)\\) pikkus.",
                "en": "Find the magnitude of \\(\\vec v=(5,12)\\)."
              },
              "a": {
                "et": "13.",
                "en": "13."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Pikkuseks kasuta koordinaatide ruutude summat; ristseisuks skalaarkorrutist.",
                "en": "For magnitude use the sum of squared coordinates; for perpendicularity use the dot product."
              },
              "numeric": 13
            },
            {
              "difficulty": "medium",
              "q": {
                "et": "Näita, et a=(4,2) ja b=(1,−2) on risti.",
                "en": "Show that a=(4,2) and b=(1,−2) are perpendicular."
              },
              "a": {
                "et": "\\(a\\cdot b=4-4=0\\).",
                "en": "\\(a\\cdot b=4-4=0\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Pikkuseks kasuta koordinaatide ruutude summat; ristseisuks skalaarkorrutist.",
                "en": "For magnitude use the sum of squared coordinates; for perpendicularity use the dot product."
              }
            }
          ],
          "tags": [
            "vectors"
          ],
          "trap": {
            "et": "Nullvektoriga ei saa määrata kahe vektori vahelist nurka.",
            "en": "A zero vector cannot define an angle between vectors."
          },
          "prereq": [
            "ma13/analytic"
          ]
        },
        "lines": {
          "title": {
            "et": "Sirge võrrand",
            "en": "Equation of a Line"
          },
          "icon": "📉",
          "desc": {
            "et": "Tõus ja sirge võrrandi erinevad kujud.",
            "en": "Slope and equations of straight lines."
          },
          "formulas": [
            {
              "name": {
                "et": "Sirge tõus",
                "en": "Slope"
              },
              "tex": "m=\\frac{y_2-y_1}{x_2-x_1}",
              "note": {
                "et": "y muut / x muut.",
                "en": "Change in y divided by change in x."
              },
              "e1": {
                "q": {
                  "et": "Punktid (1,2) ja (5,10).",
                  "en": "Points (1,2) and (5,10)."
                },
                "a": {
                  "et": "\\(m=\\frac84=2\\).",
                  "en": "\\(m=\\frac84=2\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Teeprofiil läbib (−2,5) ja (4,−1).",
                  "en": "A road profile passes through (−2,5) and (4,−1)."
                },
                "a": {
                  "et": "\\(m=\\frac{-6}{6}=-1\\).",
                  "en": "\\(m=\\frac{-6}{6}=-1\\)."
                }
              },
              "vars": [
                {
                  "s": "m",
                  "et": "sirge tõus",
                  "en": "slope of the line"
                },
                {
                  "s": "(x_1,y_1)",
                  "et": "sirge esimese punkti koordinaadid",
                  "en": "coordinates of the first point on the line"
                },
                {
                  "s": "(x_2,y_2)",
                  "et": "sirge teise punkti koordinaadid",
                  "en": "coordinates of the second point on the line"
                }
              ]
            },
            {
              "name": {
                "et": "Punkt-tõusu kuju",
                "en": "Point-slope form"
              },
              "tex": "y-y_1=m(x-x_1)",
              "note": {
                "et": "Kui tead üht punkti ja tõusu.",
                "en": "Use a known point and slope."
              },
              "e1": {
                "q": {
                  "et": "m=3, punkt (2,1).",
                  "en": "m=3 through (2,1)."
                },
                "a": {
                  "et": "\\(y-1=3(x-2)\\Rightarrow y=3x-5\\).",
                  "en": "\\(y-1=3(x-2)\\Rightarrow y=3x-5\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Sirge tõus on −2 ja see läbib (4,7).",
                  "en": "A line has slope −2 and passes through (4,7)."
                },
                "a": {
                  "et": "\\(y-7=-2(x-4)\\Rightarrow y=-2x+15\\).",
                  "en": "\\(y-7=-2(x-4)\\Rightarrow y=-2x+15\\)."
                }
              },
              "vars": [
                {
                  "s": "m",
                  "et": "sirge tõus",
                  "en": "slope of the line"
                },
                {
                  "s": "(x_1,y_1)",
                  "et": "sirge etteantud punkt",
                  "en": "a given point on the line"
                },
                {
                  "s": "x,\\,y",
                  "et": "sirge suvalise punkti koordinaadid",
                  "en": "coordinates of any point on the line"
                }
              ]
            },
            {
              "name": {
                "et": "Sirge läbi kahe punkti",
                "en": "Line through two points"
              },
              "tex": "\\frac{y-y_1}{y_2-y_1}=\\frac{x-x_1}{x_2-x_1}",
              "note": {
                "et": "Kasuta siis, kui on antud kaks sirge punkti.",
                "en": "Use when two points of the line are given."
              },
              "e1": {
                "q": {
                  "et": "A(1, 2), B(3, 6).",
                  "en": "A(1, 2), B(3, 6)."
                },
                "a": {
                  "et": "\\(\\frac{y-2}{4}=\\frac{x-1}{2}\\Rightarrow y=2x\\).",
                  "en": "\\(\\frac{y-2}{4}=\\frac{x-1}{2}\\Rightarrow y=2x\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "A(0, 5), B(4, 1).",
                  "en": "A(0, 5), B(4, 1)."
                },
                "a": {
                  "et": "\\(\\frac{y-5}{-4}=\\frac{x}{4}\\Rightarrow y=-x+5\\).",
                  "en": "\\(\\frac{y-5}{-4}=\\frac{x}{4}\\Rightarrow y=-x+5\\)."
                }
              },
              "vars": [
                {
                  "s": "(x_1,y_1)",
                  "et": "sirge esimene punkt",
                  "en": "first point on the line"
                },
                {
                  "s": "(x_2,y_2)",
                  "et": "sirge teine punkt",
                  "en": "second point on the line"
                },
                {
                  "s": "x,\\,y",
                  "et": "sirge suvalise punkti koordinaadid",
                  "en": "coordinates of any point on the line"
                }
              ]
            },
            {
              "name": {
                "et": "Sirge üldvõrrand",
                "en": "General form of a line"
              },
              "tex": "Ax+By+C=0\\;\\Rightarrow\\;y=-\\frac{A}{B}x-\\frac{C}{B}",
              "note": {
                "et": "Tõus on m = −A/B, y-telje lõikepunkt on −C/B.",
                "en": "The slope is m = −A/B and the y-intercept is −C/B."
              },
              "e1": {
                "q": {
                  "et": "Leia tõus: 2x + y − 6 = 0.",
                  "en": "Find the slope of 2x + y − 6 = 0."
                },
                "a": {
                  "et": "\\(y=-2x+6\\), \\(m=-2\\).",
                  "en": "\\(y=-2x+6\\), \\(m=-2\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Leia tõus ja y-telje lõikepunkt: 4x − 2y + 10 = 0.",
                  "en": "Find slope and y-intercept of 4x − 2y + 10 = 0."
                },
                "a": {
                  "et": "\\(y=2x+5\\), \\(m=2\\), y-telje lõikepunkt \\((0,5)\\).",
                  "en": "\\(y=2x+5\\), \\(m=2\\), y-intercept \\((0,5)\\)."
                }
              },
              "vars": [
                {
                  "s": "A,\\,B,\\,C",
                  "et": "võrrandi kordajad (tõusu jaoks B ≠ 0)",
                  "en": "coefficients of the equation (B ≠ 0 for the slope form)"
                },
                {
                  "s": "x,\\,y",
                  "et": "sirge punkti koordinaadid",
                  "en": "coordinates of a point on the line"
                },
                {
                  "s": "-\\frac{A}{B}",
                  "et": "sirge tõus m",
                  "en": "slope m of the line"
                },
                {
                  "s": "-\\frac{C}{B}",
                  "et": "sirge lõikepunkti y-teljega ordinaat",
                  "en": "y-coordinate where the line crosses the y-axis"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Leia sirge võrrand tõusuga 4 läbi punkti (1,−2).",
                "en": "Find the equation of a line with slope 4 through (1,−2)."
              },
              "a": {
                "et": "\\(y=4x-6\\).",
                "en": "\\(y=4x-6\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Kirjuta y − y₁ = k(x − x₁), seejärel kontrolli antud punkti.",
                "en": "Write y − y₁ = k(x − x₁), then check the given point."
              }
            }
          ],
          "tags": [
            "lines"
          ],
          "trap": {
            "et": "Vertikaalsel sirgel pole lõplikku tõusu; selle võrrand on x = a.",
            "en": "A vertical line has no finite slope; its equation is x = a."
          },
          "prereq": [
            "ma13/analytic",
            "review/equations"
          ]
        },
        "integrals": {
          "title": {
            "et": "Integraal",
            "en": "Integrals"
          },
          "icon": "∫",
          "desc": {
            "et": "Algfunktsioon ja määratud integraal.",
            "en": "Antiderivatives and definite integrals."
          },
          "formulas": [
            {
              "name": {
                "et": "Astmefunktsiooni algfunktsioon",
                "en": "Power rule for antiderivatives"
              },
              "tex": "\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C,\\qquad n\\ne-1",
              "note": {
                "et": "Suurenda astet ühe võrra ja jaga uue astmega.",
                "en": "Increase the power by 1 and divide by the new power."
              },
              "e1": {
                "q": {
                  "et": "\\(\\int x^2 dx\\).",
                  "en": "\\(\\int x^2 dx\\)."
                },
                "a": {
                  "et": "\\(\\frac{x^3}{3}+C\\).",
                  "en": "\\(\\frac{x^3}{3}+C\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Kiirus \\(v(t)=6t^2\\). Leia asukohafunktsioon.",
                  "en": "Velocity is \\(v(t)=6t^2\\). Find a position function."
                },
                "a": {
                  "et": "\\(s(t)=2t^3+C\\).",
                  "en": "\\(s(t)=2t^3+C\\)."
                }
              },
              "vars": [
                {
                  "s": "\\int\\ldots dx",
                  "et": "määramata integraal x järgi",
                  "en": "indefinite integral with respect to x"
                },
                {
                  "s": "x",
                  "et": "muutuja",
                  "en": "variable"
                },
                {
                  "s": "n",
                  "et": "astendaja (n ≠ −1)",
                  "en": "exponent (n ≠ −1)"
                },
                {
                  "s": "C",
                  "et": "integreerimiskonstant",
                  "en": "constant of integration"
                }
              ]
            },
            {
              "name": {
                "et": "Määratud integraal",
                "en": "Definite integral"
              },
              "tex": "\\int_a^b f(x)\\,dx=F(b)-F(a)",
              "note": {
                "et": "F on f-i algfunktsioon.",
                "en": "F is an antiderivative of f."
              },
              "e1": {
                "q": {
                  "et": "\\(\\int_0^2 x dx\\).",
                  "en": "\\(\\int_0^2 x dx\\)."
                },
                "a": {
                  "et": "\\(\\left[\\frac{x^2}{2}\\right]_0^2=2\\).",
                  "en": "\\(\\left[\\frac{x^2}{2}\\right]_0^2=2\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Voolukiirus \\(q(t)=3t^2\\) l/min. Kui palju voolab 0–2 min jooksul?",
                  "en": "Flow rate is \\(q(t)=3t^2\\) L/min. How much flows during 0–2 min?"
                },
                "a": {
                  "et": "\\(\\int_0^2 3t^2dt=\\left[t^3\\right]_0^2=8\\) l.",
                  "en": "\\(\\int_0^2 3t^2dt=\\left[t^3\\right]_0^2=8\\) L."
                }
              },
              "vars": [
                {
                  "s": "\\int_a^b f(x)\\,dx",
                  "et": "määratud integraal lõigul [a; b]",
                  "en": "definite integral over [a, b]"
                },
                {
                  "s": "a,\\,b",
                  "et": "alumine ja ülemine raja",
                  "en": "lower and upper limits"
                },
                {
                  "s": "f(x)",
                  "et": "integreeritav funktsioon",
                  "en": "the function being integrated"
                },
                {
                  "s": "F(x)",
                  "et": "funktsiooni f algfunktsioon (F′ = f)",
                  "en": "an antiderivative of f (F′ = f)"
                }
              ]
            },
            {
              "name": {
                "et": "Pindala kõvertrapets",
                "en": "Area under a curve"
              },
              "tex": "S=\\int_a^b f(x)\\,dx\\qquad (f(x)\\ge0)",
              "note": {
                "et": "Kehtib, kui graafik on lõigul [a; b] x-teljest kõrgemal.",
                "en": "Valid when the graph lies above the x-axis on [a, b]."
              },
              "e1": {
                "q": {
                  "et": "Leia y = x² ja x-telje vaheline pindala lõigul [0; 3].",
                  "en": "Find the area between y = x² and the x-axis on [0, 3]."
                },
                "a": {
                  "et": "\\(S=\\left[\\frac{x^3}{3}\\right]_0^3=9\\).",
                  "en": "\\(S=\\left[\\frac{x^3}{3}\\right]_0^3=9\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "Leia y = x + 1 ja x-telje vaheline pindala lõigul [0; 4].",
                  "en": "Find the area between y = x + 1 and the x-axis on [0, 4]."
                },
                "a": {
                  "et": "\\(S=\\left[\\frac{x^2}{2}+x\\right]_0^4=8+4=12\\).",
                  "en": "\\(S=\\left[\\frac{x^2}{2}+x\\right]_0^4=8+4=12\\)."
                }
              },
              "vars": [
                {
                  "s": "S",
                  "et": "kõvertrapetsi pindala",
                  "en": "area under the curve"
                },
                {
                  "s": "f(x)",
                  "et": "funktsioon, mille graafik on x-teljest kõrgemal",
                  "en": "function whose graph lies above the x-axis"
                },
                {
                  "s": "a,\\,b",
                  "et": "lõigu otspunktid",
                  "en": "endpoints of the interval"
                }
              ]
            },
            {
              "name": {
                "et": "Kahe joone vaheline pindala",
                "en": "Area between two curves"
              },
              "tex": "S=\\int_a^b\\bigl(f(x)-g(x)\\bigr)dx\\qquad (f\\ge g)",
              "note": {
                "et": "f on ülemine ja g alumine joon; a ja b leia lõikepunktidest.",
                "en": "f is the upper and g the lower curve; find a and b from the intersection points."
              },
              "e1": {
                "q": {
                  "et": "y = x ja y = x² vahel lõigul [0; 1].",
                  "en": "Between y = x and y = x² on [0, 1]."
                },
                "a": {
                  "et": "\\(S=\\int_0^1(x-x^2)dx=\\frac12-\\frac13=\\frac16\\).",
                  "en": "\\(S=\\int_0^1(x-x^2)dx=\\frac12-\\frac13=\\frac16\\)."
                }
              },
              "e2": {
                "q": {
                  "et": "y = x + 2 ja y = x² piiratud ala.",
                  "en": "Region bounded by y = x + 2 and y = x²."
                },
                "a": {
                  "et": "\\(x^2=x+2\\Rightarrow x=-1,\\,2\\)<br>\\(S=\\left[\\frac{x^2}{2}+2x-\\frac{x^3}{3}\\right]_{-1}^{2}=\\frac{10}{3}+\\frac76=\\frac92\\).",
                  "en": "\\(x^2=x+2\\Rightarrow x=-1,\\,2\\)<br>\\(S=\\left[\\frac{x^2}{2}+2x-\\frac{x^3}{3}\\right]_{-1}^{2}=\\frac{10}{3}+\\frac76=\\frac92\\)."
                }
              },
              "vars": [
                {
                  "s": "S",
                  "et": "joonte vahele jääva ala pindala",
                  "en": "area between the curves"
                },
                {
                  "s": "f(x)",
                  "et": "ülemine funktsioon",
                  "en": "upper function"
                },
                {
                  "s": "g(x)",
                  "et": "alumine funktsioon",
                  "en": "lower function"
                },
                {
                  "s": "a,\\,b",
                  "et": "lõikepunktide x-koordinaadid (või lõigu otsad)",
                  "en": "x-coordinates of the intersection points (or ends of the interval)"
                }
              ]
            }
          ],
          "questions": [
            {
              "difficulty": "easy",
              "q": {
                "et": "Leia \\(\\int 4x^3dx\\).",
                "en": "Find \\(\\int 4x^3dx\\)."
              },
              "a": {
                "et": "\\(x^4+C\\).",
                "en": "\\(x^4+C\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Leia algfunktsioon. Määratud integraalis lahuta alumise raja väärtus ülemise omast.",
                "en": "Find an antiderivative. For a definite integral subtract the lower-bound value from the upper-bound value."
              }
            },
            {
              "difficulty": "medium",
              "q": {
                "et": "Arvuta \\(\\int_1^3 2x dx\\).",
                "en": "Evaluate \\(\\int_1^3 2x dx\\)."
              },
              "a": {
                "et": "8.",
                "en": "8."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "verified",
              "hint": {
                "et": "Leia algfunktsioon. Määratud integraalis lahuta alumise raja väärtus ülemise omast.",
                "en": "Find an antiderivative. For a definite integral subtract the lower-bound value from the upper-bound value."
              },
              "numeric": 8
            },
            {
              "difficulty": "hard",
              "q": {
                "et": "Leia y = x² ja y = 2x vahele jääva ala pindala.",
                "en": "Find the area of the region between y = x² and y = 2x."
              },
              "a": {
                "et": "\\(x^2=2x\\Rightarrow x=0,\\,2\\)<br>\\(S=\\int_0^2(2x-x^2)dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=4-\\frac83=\\frac43\\).",
                "en": "\\(x^2=2x\\Rightarrow x=0,\\,2\\)<br>\\(S=\\int_0^2(2x-x^2)dx=\\left[x^2-\\frac{x^3}{3}\\right]_0^2=4-\\frac83=\\frac43\\)."
              },
              "year": null,
              "task": null,
              "kind": "practice",
              "source": null,
              "confidence": "original",
              "hint": {
                "et": "Leia algfunktsioon. Määratud integraalis lahuta alumise raja väärtus ülemise omast.",
                "en": "Find an antiderivative. For a definite integral subtract the lower-bound value from the upper-bound value."
              },
              "numeric": 1.3333333333333333
            }
          ],
          "tags": [
            "integrals"
          ],
          "trap": {
            "et": "Geomeetriline pindala on mittenegatiivne; märki muutva funktsiooni korral jaga piirkond osadeks.",
            "en": "Geometric area is nonnegative; split the region if the integrand changes sign."
          },
          "prereq": [
            "review/derivatives",
            "ma11/plane"
          ]
        }
      }
    }
  },
  "past": {
    "probability": [
      {
        "difficulty": "medium",
        "q": {
          "et": "2025. a laia matemaatika riigieksami 3. ülesanne oli tõenäosuse teemal. Harjuta sama tüüpi mõtlemist: kotis on 5 sinist ja 3 roosat kuuli. Tõmmatakse juhuslikult 2 kuuli ilma tagasipanekuta. Leia tõenäosus, et mõlemad on sinised.",
          "en": "The 2025 broad-math state exam task 3 was a probability task. Practise the same kind of reasoning: a bag has 5 blue and 3 pink balls. Two are drawn without replacement. Find the probability both are blue."
        },
        "a": {
          "et": "\\(P=\\frac{5}{8}\\cdot\\frac{4}{7}=\\frac{5}{14}\\).",
          "en": "\\(P=\\frac{5}{8}\\cdot\\frac{4}{7}=\\frac{5}{14}\\)."
        },
        "year": 2025,
        "task": "3",
        "kind": "past",
        "source": "https://www.youtube.com/watch?v=4_ckfQb4Gbg",
        "confidence": "topic",
        "tags": [
          "probability",
          "combinatorics"
        ]
      },
      {
        "difficulty": "medium",
        "q": {
          "et": "2023. a laia eksami 3. ülesanne kontrollis tõenäosust. Harjutus: ausat täringut visatakse kaks korda. Leia tõenäosus, et summa on 9.",
          "en": "The 2023 broad exam task 3 tested probability. Practice: a fair die is rolled twice. Find the probability that the sum is 9."
        },
        "a": {
          "et": "Soodsad paarid: (3,6), (4,5), (5,4), (6,3). Seega \\(P=\\frac{4}{36}=\\frac{1}{9}\\).",
          "en": "Favourable pairs: (3,6), (4,5), (5,4), (6,3). Thus \\(P=\\frac{4}{36}=\\frac{1}{9}\\)."
        },
        "year": 2023,
        "task": "3",
        "kind": "past",
        "source": "https://matemaatika.eu/wp-content/uploads/2024/02/2023.-a-matemaatika-eksamitest.pdf",
        "confidence": "topic",
        "tags": [
          "probability"
        ]
      },
      {
        "difficulty": "medium",
        "q": {
          "et": "2021. a laia eksami ülesanne 1.5 kuulus tõenäosusteooria valdkonda. Harjutus: kaardi valitakse juhuslikult arvudest 1…20. Leia tõenäosus, et arv jagub 3 või 5-ga.",
          "en": "The 2021 broad exam task 1.5 belonged to probability theory. Practice: choose a number uniformly from 1…20. Find the probability it is divisible by 3 or 5."
        },
        "a": {
          "et": "3 kordseid on 6, 5 kordseid 4, mõlemat 1. \\(P=\\frac{6+4-1}{20}=\\frac{9}{20}\\).",
          "en": "There are 6 multiples of 3, 4 multiples of 5, and 1 overlap. \\(P=\\frac{6+4-1}{20}=\\frac{9}{20}\\)."
        },
        "year": 2021,
        "task": "1.5",
        "kind": "past",
        "source": "https://harno.ee/sites/default/files/documents/2021-11/G%C3%BCmnaasiumi%20matemaatika%20laia%20kursuse%20riigieksamite%20v%C3%B5rdlev%20anal%C3%BC%C3%BCs%20(aastad%202019,%202020%20ja%202021).pdf",
        "confidence": "topic",
        "tags": [
          "probability"
        ]
      }
    ],
    "plane": [
      {
        "difficulty": "medium",
        "q": {
          "et": "2024. aasta laia eksami järel kirjeldati I osa kolmnurgaülesannet. Harjutus: kolmnurga kaks külge on 7 cm ja 10 cm ning nende vaheline nurk 60°. Leia kolmanda külje pikkus.",
          "en": "After the 2024 broad exam, students described a triangle problem in Part I. Practice: two sides of a triangle are 7 cm and 10 cm with included angle 60°. Find the third side."
        },
        "a": {
          "et": "Koosinusteoreem: \\(c^2=7^2+10^2-2\\cdot7\\cdot10\\cos60^\\circ=79\\), seega \\(c=\\sqrt{79}\\approx8.89\\).",
          "en": "Cosine rule: \\(c^2=7^2+10^2-2\\cdot7\\cdot10\\cos60^\\circ=79\\), so \\(c=\\sqrt{79}\\approx8.89\\)."
        },
        "year": 2024,
        "task": null,
        "kind": "past",
        "source": "https://www.youtube.com/watch?v=kopiftfbPzU",
        "confidence": "community",
        "tags": [
          "plane"
        ]
      },
      {
        "difficulty": "medium",
        "q": {
          "et": "2023. a laia eksami 7. ülesanne oli planimeetria. Harjutus: täisnurkse kolmnurga kaatetid on 9 cm ja 12 cm. Leia hüpotenuus ja pindala.",
          "en": "The 2023 broad exam task 7 was plane geometry. Practice: a right triangle has legs 9 cm and 12 cm. Find the hypotenuse and area."
        },
        "a": {
          "et": "\\(c=\\sqrt{9^2+12^2}=15\\) cm; \\(S=\\frac{9\\cdot12}{2}=54\\text{ cm}^2\\).",
          "en": "\\(c=\\sqrt{9^2+12^2}=15\\) cm; \\(S=\\frac{9\\cdot12}{2}=54\\text{ cm}^2\\)."
        },
        "year": 2023,
        "task": "7",
        "kind": "past",
        "source": "https://matemaatika.eu/wp-content/uploads/2024/02/2023.-a-matemaatika-eksamitest.pdf",
        "confidence": "topic",
        "tags": [
          "plane"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2021. a laia eksamil esines tasandigeomeetria nii ülesandes 1.2 kui ka 2.4. Harjutus: ringjoone raadius on 6 cm ja kesknurk 120°. Leia sektori pindala.",
          "en": "In the 2021 broad exam, plane geometry appeared in tasks 1.2 and 2.4. Practice: a circle has radius 6 cm and central angle 120°. Find the sector area."
        },
        "a": {
          "et": "\\(S=\\frac{120^\\circ}{360^\\circ}\\pi 6^2=12\\pi\\text{ cm}^2\\).",
          "en": "\\(S=\\frac{120^\\circ}{360^\\circ}\\pi 6^2=12\\pi\\text{ cm}^2\\)."
        },
        "year": 2021,
        "task": "1.2 / 2.4",
        "kind": "past",
        "source": "https://harno.ee/sites/default/files/documents/2021-11/G%C3%BCmnaasiumi%20matemaatika%20laia%20kursuse%20riigieksamite%20v%C3%B5rdlev%20anal%C3%BC%C3%BCs%20(aastad%202019,%202020%20ja%202021).pdf",
        "confidence": "topic",
        "tags": [
          "plane"
        ]
      }
    ],
    "stereo": [
      {
        "difficulty": "hard",
        "q": {
          "et": "2025. a laia matemaatika riigieksami 10. ülesandes tuli leida püramiidi põhja pindala ja ruumala. Harjutus: korrapärase ruutpüramiidi põhja külg on 6 cm ja kõrgus 8 cm. Leia ruumala.",
          "en": "The 2025 broad-math state exam task 10 involved finding a pyramid base area and volume. Practice: a regular square pyramid has base side 6 cm and height 8 cm. Find its volume."
        },
        "a": {
          "et": "\\(S_p=6^2=36\\), seega \\(V=\\frac13\\cdot36\\cdot8=96\\text{ cm}^3\\).",
          "en": "\\(S_p=6^2=36\\), so \\(V=\\frac13\\cdot36\\cdot8=96\\text{ cm}^3\\)."
        },
        "year": 2025,
        "task": "10",
        "kind": "past",
        "source": "https://www.youtube.com/watch?v=JP5FlVzJH4Q",
        "confidence": "topic",
        "tags": [
          "pyramid"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2024. aasta laia eksami järel mainiti püramiidiülesannet. Harjutus: ruutpüramiidi põhja külg on 8 cm ja kõrgus 9 cm. Leia ruumala.",
          "en": "After the 2024 broad exam, students reported a pyramid problem. Practice: a square pyramid has base side 8 cm and height 9 cm. Find the volume."
        },
        "a": {
          "et": "\\(V=\\frac13\\cdot8^2\\cdot9=192\\text{ cm}^3\\).",
          "en": "\\(V=\\frac13\\cdot8^2\\cdot9=192\\text{ cm}^3\\)."
        },
        "year": 2024,
        "task": null,
        "kind": "past",
        "source": "https://www.youtube.com/watch?v=feeNn5NOHkc",
        "confidence": "community",
        "tags": [
          "pyramid"
        ]
      },
      {
        "difficulty": "medium",
        "q": {
          "et": "2023. a laia eksami 10. ülesanne oli püramiid. Harjutus: püramiidi põhja pindala on 45 cm² ja kõrgus 12 cm. Leia ruumala.",
          "en": "The 2023 broad exam task 10 was a pyramid problem. Practice: a pyramid has base area 45 cm² and height 12 cm. Find its volume."
        },
        "a": {
          "et": "\\(V=\\frac13\\cdot45\\cdot12=180\\text{ cm}^3\\).",
          "en": "\\(V=\\frac13\\cdot45\\cdot12=180\\text{ cm}^3\\)."
        },
        "year": 2023,
        "task": "10",
        "kind": "past",
        "source": "https://matemaatika.eu/wp-content/uploads/2024/02/2023.-a-matemaatika-eksamitest.pdf",
        "confidence": "topic",
        "tags": [
          "pyramid"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2021. a laia eksami ülesanne 2.5 oli ruumigeomeetria. Harjutus: silindri raadius on 4 cm ja kõrgus 10 cm. Leia ruumala ja täispindala.",
          "en": "The 2021 broad exam task 2.5 was solid geometry. Practice: a cylinder has radius 4 cm and height 10 cm. Find volume and total surface area."
        },
        "a": {
          "et": "\\(V=\\pi r^2h=160\\pi\\text{ cm}^3\\); \\(S=2\\pi r^2+2\\pi rh=112\\pi\\text{ cm}^2\\).",
          "en": "\\(V=\\pi r^2h=160\\pi\\text{ cm}^3\\); \\(S=2\\pi r^2+2\\pi rh=112\\pi\\text{ cm}^2\\)."
        },
        "year": 2021,
        "task": "2.5",
        "kind": "past",
        "source": "https://harno.ee/sites/default/files/documents/2021-11/G%C3%BCmnaasiumi%20matemaatika%20laia%20kursuse%20riigieksamite%20v%C3%B5rdlev%20anal%C3%BC%C3%BCs%20(aastad%202019,%202020%20ja%202021).pdf",
        "confidence": "topic",
        "tags": [
          "cylinder"
        ]
      }
    ],
    "analytic": [
      {
        "difficulty": "hard",
        "q": {
          "et": "2025. a laia matemaatika riigieksami 5. ülesanne kasutas sirgeid ja vektoreid. Harjutus: punktid A(1,2) ja B(7,5) määravad sirge. Leia vektor AB ja sirge tõus.",
          "en": "The 2025 broad-math state exam task 5 used lines and vectors. Practice: points A(1,2) and B(7,5) determine a line. Find vector AB and the slope."
        },
        "a": {
          "et": "\\(\\vec{AB}=(6,3)\\) ja \\(m=\\frac{5-2}{7-1}=\\frac12\\).",
          "en": "\\(\\vec{AB}=(6,3)\\) and \\(m=\\frac{5-2}{7-1}=\\frac12\\)."
        },
        "year": 2025,
        "task": "5",
        "kind": "past",
        "source": "https://www.youtube.com/watch?v=K6FAM9ISYwE",
        "confidence": "topic",
        "tags": [
          "vectors",
          "lines"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2023. a laia eksami 12. ülesanne oli analüütiline geomeetria. Harjutus: leia sirge võrrand, mis läbib punkte A(2, −1) ja B(6, 7).",
          "en": "The 2023 broad exam task 12 was analytical geometry. Practice: find the equation of the line through A(2, −1) and B(6, 7)."
        },
        "a": {
          "et": "\\(m=\\frac{7-(-1)}{6-2}=2\\). Seega \\(y+1=2(x-2)\\Rightarrow y=2x-5\\).",
          "en": "\\(m=\\frac{7-(-1)}{6-2}=2\\). Thus \\(y+1=2(x-2)\\Rightarrow y=2x-5\\)."
        },
        "year": 2023,
        "task": "12",
        "kind": "past",
        "source": "https://matemaatika.eu/wp-content/uploads/2024/02/2023.-a-matemaatika-eksamitest.pdf",
        "confidence": "topic",
        "tags": [
          "lines"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2022. a laia eksami 8. ülesande analüüsis käsitleti vektoreid ja ringjoone võrrandit. Harjutus: leia vektor AB, kui A(−3,2) ja B(5,−4), ning selle pikkus.",
          "en": "The analysis of the 2022 broad exam task 8 mentions vectors and the equation of a circle. Practice: find vector AB for A(−3,2), B(5,−4), and its length."
        },
        "a": {
          "et": "\\(\\vec{AB}=(8,-6)\\), \\(|\\vec{AB}|=\\sqrt{8^2+(-6)^2}=10\\).",
          "en": "\\(\\vec{AB}=(8,-6)\\), \\(|\\vec{AB}|=\\sqrt{8^2+(-6)^2}=10\\)."
        },
        "year": 2022,
        "task": "8",
        "kind": "past",
        "source": "https://matemaatika.eu/wp-content/uploads/2023/01/Infopaev-2023-jaan62-Read-Only.pdf",
        "confidence": "topic",
        "tags": [
          "vectors"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2021. a laia eksami ülesanne 2.2 oli analüütiline geomeetria. Harjutus: leia sirge \\(3x-2y+8=0\\) tõus ja y-telje lõikepunkt.",
          "en": "The 2021 broad exam task 2.2 was analytical geometry. Practice: find the slope and y-intercept of \\(3x-2y+8=0\\)."
        },
        "a": {
          "et": "\\(y=\\frac32x+4\\), seega tõus \\(m=\\frac32\\) ja lõikepunkt \\((0,4)\\).",
          "en": "\\(y=\\frac32x+4\\), so slope \\(m=\\frac32\\) and intercept \\((0,4)\\)."
        },
        "year": 2021,
        "task": "2.2",
        "kind": "past",
        "source": "https://harno.ee/sites/default/files/documents/2021-11/G%C3%BCmnaasiumi%20matemaatika%20laia%20kursuse%20riigieksamite%20v%C3%B5rdlev%20anal%C3%BC%C3%BCs%20(aastad%202019,%202020%20ja%202021).pdf",
        "confidence": "topic",
        "tags": [
          "lines"
        ]
      }
    ],
    "integrals": [
      {
        "difficulty": "hard",
        "q": {
          "et": "2025. a laia matemaatika riigieksami 8. ülesanne käsitles puutujat, integraali ja kõvertrapetsi pindala. Harjutus: leia funktsiooni \\(y=2x\\) ja x-telje vaheline pindala vahemikus [0,3].",
          "en": "The 2025 broad-math state exam task 8 covered a tangent, an integral and the area of a curvilinear trapezoid. Practice: find the area between \\(y=2x\\) and the x-axis on [0,3]."
        },
        "a": {
          "et": "\\(S=\\int_0^3 2x\\,dx=\\left[x^2\\right]_0^3=9\\).",
          "en": "\\(S=\\int_0^3 2x\\,dx=\\left[x^2\\right]_0^3=9\\)."
        },
        "year": 2025,
        "task": "8",
        "kind": "past",
        "source": "https://www.youtube.com/watch?v=o4-MtDgZe5U",
        "confidence": "topic",
        "tags": [
          "integrals"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2024. aasta laia eksami järel mainiti määratud integraaliga pindala leidmist. Harjutus: leia funktsiooni \\(y=x^2\\) ja x-telje vaheline pindala vahemikus [0,2].",
          "en": "After the 2024 broad exam, students reported an area-by-definite-integral problem. Practice: find the area between \\(y=x^2\\) and the x-axis on [0,2]."
        },
        "a": {
          "et": "\\(S=\\int_0^2x^2dx=\\left[\\frac{x^3}{3}\\right]_0^2=\\frac83\\).",
          "en": "\\(S=\\int_0^2x^2dx=\\left[\\frac{x^3}{3}\\right]_0^2=\\frac83\\)."
        },
        "year": 2024,
        "task": null,
        "kind": "past",
        "source": "https://www.youtube.com/watch?v=feeNn5NOHkc",
        "confidence": "community",
        "tags": [
          "integrals"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2023. a laia eksami 8. ülesanne oli integraal. Harjutus: arvuta \\(\\int_1^3(2x+1)\\,dx\\).",
          "en": "The 2023 broad exam task 8 was an integral problem. Practice: evaluate \\(\\int_1^3(2x+1)\\,dx\\)."
        },
        "a": {
          "et": "\\(\\left[x^2+x\\right]_1^3=(9+3)-(1+1)=10\\).",
          "en": "\\(\\left[x^2+x\\right]_1^3=(9+3)-(1+1)=10\\)."
        },
        "year": 2023,
        "task": "8",
        "kind": "past",
        "source": "https://matemaatika.eu/wp-content/uploads/2024/02/2023.-a-matemaatika-eksamitest.pdf",
        "confidence": "topic",
        "tags": [
          "integrals"
        ]
      },
      {
        "difficulty": "hard",
        "q": {
          "et": "2022. a laia eksami 12. ülesande analüüsis oli määratud integraaliga pindala leidmine. Harjutus: leia pindala \\(y=4-x^2\\) ja x-telje vahel vahemikus [−2,2].",
          "en": "The analysis of the 2022 broad exam task 12 mentions finding area using a definite integral. Practice: find the area between \\(y=4-x^2\\) and the x-axis on [−2,2]."
        },
        "a": {
          "et": "\\(S=\\int_{-2}^{2}(4-x^2)dx=\\frac{32}{3}\\).",
          "en": "\\(S=\\int_{-2}^{2}(4-x^2)dx=\\frac{32}{3}\\)."
        },
        "year": 2022,
        "task": "12",
        "kind": "past",
        "source": "https://matemaatika.eu/wp-content/uploads/2023/01/Infopaev-2023-jaan62-Read-Only.pdf",
        "confidence": "topic",
        "tags": [
          "integrals"
        ]
      }
    ]
  },
  "archive": [
    {
      "year": 2025,
      "title": {
        "et": "Laia matemaatika RE 2025",
        "en": "Broad Mathematics RE 2025"
      },
      "status": {
        "et": "Teemad võrreldud avalike lahendusvideotega",
        "en": "Topics compared with public solution videos"
      },
      "items": [
        {
          "et": "3 — tõenäosus ja kombinatoorika",
          "en": "3 — probability and combinatorics"
        },
        {
          "et": "5 — sirged ja vektorid",
          "en": "5 — lines and vectors"
        },
        {
          "et": "8 — puutuja, integraal ja pindala",
          "en": "8 — tangent, integral and area"
        },
        {
          "et": "10 — püramiidi pindala ja ruumala",
          "en": "10 — pyramid area and volume"
        }
      ],
      "source": "https://www.youtube.com/watch?v=4_ckfQb4Gbg",
      "source2": "https://www.youtube.com/watch?v=K6FAM9ISYwE",
      "note": {
        "et": "Need neli ülesannet langevad otse Purrity Mata praegu kinnitatud MA11–MA13 teemadesse. 8. ja 10. ülesande allikad on lisatud vastavate teemade küsimuskaartidele.",
        "en": "These four tasks fall directly inside the currently confirmed MA11–MA13 Purrity Mata scope. Sources for tasks 8 and 10 are linked on their relevant question cards."
      }
    },
    {
      "year": 2024,
      "title": {
        "et": "Laia matemaatika RE 2024",
        "en": "Broad Mathematics RE 2024"
      },
      "status": {
        "et": "Lahendusvideod + kogukonna kirjeldused",
        "en": "Solution videos + community reports"
      },
      "items": [
        {
          "et": "Planimeetria: kolmnurgaülesanne",
          "en": "Plane geometry: triangle problem"
        },
        {
          "et": "Ruumigeomeetria: püramiid",
          "en": "Solid geometry: pyramid"
        },
        {
          "et": "Integraal: pindala leidmine",
          "en": "Integral: area calculation"
        }
      ],
      "source": "https://www.youtube.com/watch?v=kopiftfbPzU",
      "source2": "https://www.youtube.com/watch?v=feeNn5NOHkc",
      "note": {
        "et": "Teemad on ristkontrollitud avalike lahendusvideote ja eksamijärgsete kirjeldustega; täpset ülesande sõnastust sait ei kopeeri.",
        "en": "Topics are cross-checked using public solution videos and post-exam reports; the site does not copy exact task wording."
      }
    },
    {
      "year": 2023,
      "title": {
        "et": "Laia matemaatika RE 2023",
        "en": "Broad Mathematics RE 2023"
      },
      "status": {
        "et": "HARNO analüüsiga kontrollitud",
        "en": "Verified with HARNO analysis"
      },
      "items": [
        {
          "et": "1 — kiirus/protsent",
          "en": "1 — speed/percent"
        },
        {
          "et": "2 — lihtsustamine",
          "en": "2 — simplification"
        },
        {
          "et": "3 — tõenäosus",
          "en": "3 — probability"
        },
        {
          "et": "4 — jada",
          "en": "4 — sequence"
        },
        {
          "et": "5 — eksponent/logaritm",
          "en": "5 — exponential/logarithm"
        },
        {
          "et": "6 — funktsiooni uurimine",
          "en": "6 — function analysis"
        },
        {
          "et": "7 — planimeetria",
          "en": "7 — plane geometry"
        },
        {
          "et": "8 — integraal",
          "en": "8 — integral"
        },
        {
          "et": "9 — tekstülesanne",
          "en": "9 — word problem"
        },
        {
          "et": "10 — püramiid",
          "en": "10 — pyramid"
        },
        {
          "et": "11 — trigonomeetria",
          "en": "11 — trigonometry"
        },
        {
          "et": "12 — analüütiline geomeetria",
          "en": "12 — analytical geometry"
        }
      ],
      "source": "https://matemaatika.eu/wp-content/uploads/2024/02/2023.-a-matemaatika-eksamitest.pdf",
      "note": {
        "et": "2023 ülesannete teemajaotus on HARNO matemaatika peaspetsialisti analüüsist.",
        "en": "The 2023 task-topic map comes from an analysis by HARNO’s mathematics chief specialist."
      }
    },
    {
      "year": 2022,
      "title": {
        "et": "Laia matemaatika RE 2022",
        "en": "Broad Mathematics RE 2022"
      },
      "status": {
        "et": "HARNO/KMÜ analüüsist osaliselt kontrollitud",
        "en": "Partly verified from HARNO/KMÜ analysis"
      },
      "items": [
        {
          "et": "8 — vektorid, ringjoone võrrand ja kaar",
          "en": "8 — vectors, circle equation and arc"
        },
        {
          "et": "12 — määratud integraal ja pindala",
          "en": "12 — definite integral and area"
        }
      ],
      "source": "https://matemaatika.eu/wp-content/uploads/2023/01/Infopaev-2023-jaan62-Read-Only.pdf",
      "note": {
        "et": "Analüüs kirjeldab nende ülesannete tüüpilisi vigu, mistõttu teema on kindlalt tuvastatav.",
        "en": "The analysis describes common errors in these tasks, making the topic identifiable."
      }
    },
    {
      "year": 2021,
      "title": {
        "et": "Laia matemaatika RE 2021",
        "en": "Broad Mathematics RE 2021"
      },
      "status": {
        "et": "HARNO võrdleva analüüsiga kontrollitud",
        "en": "Verified with HARNO comparative analysis"
      },
      "items": [
        {
          "et": "1.2 ja 2.4 — tasandigeomeetria",
          "en": "1.2 and 2.4 — plane geometry"
        },
        {
          "et": "1.5 — tõenäosusteooria",
          "en": "1.5 — probability theory"
        },
        {
          "et": "2.2 — analüütiline geomeetria",
          "en": "2.2 — analytical geometry"
        },
        {
          "et": "2.5 — ruumigeomeetria",
          "en": "2.5 — solid geometry"
        }
      ],
      "source": "https://harno.ee/sites/default/files/documents/2021-11/G%C3%BCmnaasiumi%20matemaatika%20laia%20kursuse%20riigieksamite%20v%C3%B5rdlev%20anal%C3%BC%C3%BCs%20(aastad%202019,%202020%20ja%202021).pdf",
      "note": {
        "et": "HARNO analüüsi tabel seob need ülesandenumbrid otse teemavaldkondadega.",
        "en": "A HARNO analysis table directly maps these task numbers to topic areas."
      }
    }
  ],
  "sources": {
    "harno": "https://www.harno.ee/eksamid-testid-ja-uuringud/eksamid-testid-ja-lopudokumendid/riigieksamid",
    "analysis2023": "https://matemaatika.eu/wp-content/uploads/2024/02/2023.-a-matemaatika-eksamitest.pdf",
    "analysis2022": "https://matemaatika.eu/wp-content/uploads/2023/01/Infopaev-2023-jaan62-Read-Only.pdf",
    "analysis2021": "https://harno.ee/sites/default/files/documents/2021-11/G%C3%BCmnaasiumi%20matemaatika%20laia%20kursuse%20riigieksamite%20v%C3%B5rdlev%20anal%C3%BC%C3%BCs%20(aastad%202019,%202020%20ja%202021).pdf",
    "mata2024a": "https://www.youtube.com/watch?v=kopiftfbPzU",
    "mata2024b": "https://www.youtube.com/watch?v=feeNn5NOHkc",
    "mata2021": "https://www.youtube.com/watch?v=OMTSV_ZJnXA",
    "patreon2025": "https://www.patreon.com/cw/k6ikselgeks/sitemap",
    "yt2025_3": "https://www.youtube.com/watch?v=4_ckfQb4Gbg",
    "yt2025_5": "https://www.youtube.com/watch?v=K6FAM9ISYwE",
    "yt2025_8": "https://www.youtube.com/watch?v=o4-MtDgZe5U",
    "yt2025_10": "https://www.youtube.com/watch?v=JP5FlVzJH4Q"
  }
};
