# Purrity Mata 2

A bilingual Estonian / English maths study desk that keeps the original cat theme and adds an attempt–compare–review workflow.

## Open it

Extract the entire folder and open `index.html` in a modern browser. Keep `assets`, `fonts` and `vendor` beside it. There is no production install step or build step.

The extracted folder includes its fonts and MathJax engine, so the learning content works without an internet connection. Official source links require internet. A hosted copy does not have a service worker or an offline page cache.

To host on GitHub Pages or another static host, publish this folder's contents. All links and assets are relative. Do not publish `node_modules` or your personal JSON progress backup.

## What changed

- A study dashboard with small daily goals and suggestions based on the student's own assessments.
- One-question-at-a-time practice, resumable sessions, and a short 25-minute quiet practice option. Quiet practice hides solutions and hints until the session ends; it is not an official exam simulation.
- Saved attempts, optional hints, answer comparison, and a mistake notebook. Work is self-assessed; the site does not grade mathematical proofs or symbolic answers.
- Numeric checks on selected questions accept decimal commas and fractions. They assess only the numeric component, not the complete solution.
- 57 formula cards, including spaced review based on recall ratings; 66 practice questions across 26 topics, including 40 new original questions in 12 revision topics.
- Topic notes, confidence labels, prerequisite links and common pitfalls.
- A graph lab connects a parabola, its derivative, and a movable tangent.
- An ET / EN maths glossary and keyboard search navigation.
- Bookmarks, JSON backup export and safe backup merging across devices.
- Bundled maths rendering and fonts; stronger text contrast, focus indicators, reduced-motion handling, a focus view and print styles.
- Fixed unrelated no-match search results, formula HTML escaping, unstated probability assumptions, and MathJax cleanup during repeated navigation.
- Content and application code are now separated into files that can be edited independently.

## Curriculum: what is verified

Checked on **7 October 2026**:

1. [Poska's current curriculum page](https://jpg.tartu.ee/dokumendid/oppekavad/) links a **16-page mathematics syllabus titled “Matemaatika ainekava (2024)”**. The PDF was retrieved and its Ma1–Ma15 outline read. The website maps all 15 course titles and links the [complete official document](https://drive.google.com/file/d/1lZLTiBE3KrWEpVc1qQNLyat5f3uWmKZr/view).
2. The **14 national broad-mathematics courses**, read from section 2.3.2 of the [2023 national mathematics curriculum](https://www.riigiteataja.ee/aktilisa/1080/3202/3006/18m_gym_lisa5.pdf), have their own map. Their numbering differs from Poska's course numbers.
3. [Harno's state-exam page](https://harno.ee/riigieksamid) lists the mathematics exam on **19 May 2027** and states that a student chooses a narrow or broad exam paper. [Tartu city information](https://tartu.ee/et/parast-pohikooli) states that Poska teaches broad mathematics. Teaching track alone does not confirm an individual's registered exam choice.

**Important mismatch:** the uploaded site's MA13 collection covers plane analytic geometry and integrals. Poska's linked 2024 document calls **Ma13 spatial vectors and lines** and places **integrals in Ma10**. Existing material is retained, its original URLs remain stable, and this mismatch is explicitly flagged. A teacher's current course plan may differ from the published document.

The **2027 mathematics exam specification could not be retrieved and verified**. Its official landing-page link is supplied. Neither the school course list nor a past paper guarantees the exact topics or questions appearing in the next exam.

The map is a complete **course-title outline**, with links to the complete official syllabus. The site's lessons are **partial teaching coverage**, not a complete textbook. Additional instruction is still needed for subjects such as confidence intervals, normal-distribution calculations, advanced trigonometric identities, spatial coplanarity, volumes of revolution, and longer proofs.

The 2021–2025 archive and topic-linked exercises are inherited from the uploaded project. Their original source claims were not independently reverified in this update, and the interface says so. Exercises are not reproduced official exam papers.

## Progress and backups

Progress is stored in this browser under `pm_study_v2`; the original `pm_lang` language preference is retained. Clearing browser data removes the study record. It does not automatically sync to another device.

Open **Settings & backup → Export backup** before changing devices or clearing browser data. Import adds bookmarks and notes, keeps the newer rating for an item, and preserves an existing session. When there is no local session, a valid imported session can resume. Conflicting notes are kept together rather than silently discarded. Invalid backup versions and unknown question IDs are rejected or filtered.

Private browsing, storage quotas or some `file://` browser policies can prevent persistence. A visible warning indicates this; export a backup before closing. No account, student name or server database is used.

## Developer files

| File | Purpose |
|---|---|
| `index.html` | App shell and bundled asset loading |
| `assets/data.js` | Original learning material, with explicit probability assumptions and topic guidance |
| `assets/curriculum.js` | New original revision material, verified course maps and source status |
| `assets/base.js` | Retained original search, archive and navigation utilities |
| `assets/study.js` | Dashboard, lessons, sessions, notebook, backups and graph lab |
| `assets/math.js` | Queued MathJax rendering and a limited MathML fallback |
| `assets/study.css` | Responsive study interface and print styles |
| `tests/` | DOM-based functional checks and offline maths-rendering checks |

Keep question and formula IDs stable: saved records use the module/topic path and array index. If content must be reordered, supply a migration for the existing saved IDs first.

For development checks, install the declared development dependency with `npm install`, then run `npm test`. The production website needs neither Node nor that dependency.

## Verification

The supplied checks cover both languages and all 26 topic, formula and practice routes, curriculum maps, search, notes and bookmarks, numeric input, sessions and timer expiry, persistence after reloading, backup merging and invalid-file rejection, the graph lab, glossary, and escaping of imported text. An additional check loads the actual HTML and bundled MathJax with only local resources and typesets all formula pages.

**Verification limit:** these are DOM and rendering-engine checks. A visual browser pass at phone/desktop sizes, touch interactions, and printing on a real device was not available in this environment. The responsive and print rules are implemented but that visual pass remains outstanding. Estonian explanations should also receive a native-speaker teaching review before broad classroom use.

## Third-party assets

MathJax **3.2.2** is distributed under Apache 2.0; see `vendor/mathjax/LICENSE.txt` and `NOTICE.txt`. Mali is distributed under the SIL Open Font License; see `fonts/OFL.txt`. The tests use jsdom **26.1.0** as a development-only dependency.
