This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Oppgave krav: 
Avhengigheter er:
 next: vanligvis ville jeg opprettet et react-prosjekt, men i og med at linken i arbeidskrav 3 tilsier at vi skal bruke denne måten. 
 react: react er inkludert og npm install er fulgt
 react-dom:
 react-router-dom: har satt opp routing til sidene som beskrives. 
 sass: En kraftig css prosessor. Jeg har valgt å skrive "kode" med egen sass, og har kompilemert. Men siden jeg også kjører next.js som støtter rammevarket automatisk sass-en, uten ekstra konfigurasjon. 

 Jeg vet at alle filtypene er lagt inn i respositoriet innen kort tid, men det er kun fordi jeg har laget mange prosjekter og respositories fordi jeg klarer ikke jobbe med flere prosjekter i en mappe- mange har jeg som "privat" men i og med dere ønsker å se at vi har lagt inn via GitHub desktop, så kommer jeg til å gjøre om de fleste som er relevante til offentlig- så dere kan se at jeg har holdt på med dette mye selvom mitt arbeidskrav "startet" og var "ferdig" under noen timer før fristen. 

 I og med jeg ikke gjenbruker html-koden, så er jeg litt usikker på måten jeg skal gjøre det. HTML-fil er ikke nødvendig i prosjekter som dette, for det styres av js, jsx. Alt
 skal skrives inn der. Og i ressurser.js for arbeidskrav 2 har tekst som vises, men som oppgaven forteller, så skal vi bruke ressurser.js for arbeidskrav 3 og der inneholder ikke text. Her skal vi ta hensyn til title, url og category. Så jeg kan godt legge ved html-filen, som man skal gjenbruke (men jeg kan ikke gjenbruke det når ressurs.js filene er ulike)- men den vil se lik ut. Siden ressurser.js for arbeidskrav 3 er listet opp på en annen måte- så er sikkert det en av oppgavene, å se om vi klarer å få riktige elementer selvom rekkefølgen er blandet. 

 Jeg har vært usikker på flere ting, siden det skal være routing så tolker jeg det som at at du kommer på side når du klikker på knappen. Arbeidskrav 2 var å lage et ressursarkiv med html, css og js for en hjemmeside. Routing kan innebære flere ting; veilede til en bestemt side, sett data eller endre på ting uten at siden må lastes ned på nytt. 
 Derfor er jeg usikker på om hvordan det er ønsket at siden skal se ut når den router til html, css, react, javascript og headless CMS- for arbeidskrav 2 vil ha samme design uansett hvem som trykkes på- det er kanskje det som også vil her, at menyen fortsatt skal være som på "hjem". Så det er vel kanskje SPA jeg skal gå etter? Nå har ikke jeg vært på særlig mange forelsninger, så hvis det har vært mer forklaringer rundt arbeidskravet så har ikke jeg fått med meg det. 

 Jeg har testet appen i nettleser, som mobilversjon og den vil route deg videre til de ulike ressursene. 