Hvad er fordelene ved global CSS?
- Giver overordnet struktur over et site --> sammenhængende UI
- Kan kontrollerer CSS variable

Hvad er fordelene ved CSS Modules?
- Scopet CSS
- Ungår overlap i CSS-classes

Hvornår ville du bruge det ene frem for det andet?
- Global til darkmode/farvetema, typografier for hele sitet + link style
- Module til komponent-/pagespecifikke styles

Hvordan undgår projektet CSS konflikter?
- Ved brug af CSS modules. CSS-klasser overskriver ikke hinanden
- Også en fordel ved samarbejde omkring kode (man overskriver ikke hinandens CSS)

Hvad er fordelen ved at bruge CSS variabler?
- De skal kun ændres ét sted i koden (:root), for at ændre appens style (let vedligeholdelse)
