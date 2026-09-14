# A2PRO

Padel academy site and player app for A2PRO, Willemstad, Curaçao.

Live at https://a3dprintingcw-cyber.github.io/a2pro/

## What this is

One academy, one club. Players sign in, see their training history, the skill scores their coaches give them, drills to do at home, and a points balance they spend at the kantine. Coaches check the squad in from the court, score skills and publish drills. Kantine staff scan the player's code and hand over the drink.

This is a fork of [r2pro](https://github.com/a3dprintingcw-cyber/r2pro), which is the multi-tenant version other academies sign up to. A2PRO has the club switching, the licence plans and the "run your academy here" pitch stripped out, and a real price list for players in its place.

## Status

Front end only. No backend, no accounts, no keys. All content is sample data in `assets/data.js`, and everything a user changes is kept in `localStorage` under the `a2pro.v1` key. The Google button opens the app rather than authenticating.

**Placeholder content to replace before launch:** coach names and bios, the schedule, the kantine menu, the price list in `pricing.html`, the stats strip on the home page, and the contact email in the structured data.

## Pages

| Page | Contents |
|---|---|
| `index.html` | Hero, sample player card, what the app does |
| `programs.html` | Kids Academy, privates, squad, camps, and the points loop |
| `coaches.html` | Coach profiles |
| `pricing.html` | Training prices in XCG / USD / EUR, per cycle or per season, plus camps and court hire |
| `app.html` | The logged-in app, hash-routed, three demo roles |

## App

Player, coach and kantine roles from one switcher. Nav is built per role, and anything past four items moves behind a More sheet so nothing is stranded off a phone's tab bar.

Redeeming at the kantine generates a QR encoding `app.html#verify-CODE` plus a five character code, good for ten minutes. Kantine staff scan it with the camera where the browser supports `BarcodeDetector`, or read it from the pending queue, or type it. A live-code banner and tappable history keep the code reachable after the dialog closes.

Four languages: English, Papiamentu, Dutch, Spanish, with dates and numbers following the language. Installable, works offline.

## Running it

Static, no build step, no dependencies.

```
python3 -m http.server 8000
```

## Deploying

GitHub Pages from `main`. Asset URLs carry `?v=` so a cached app shell cannot serve an old build: **bump that number in every HTML file and in `sw.js` whenever you change a file under `assets/`**, or returning visitors keep the old scripts.

## Keeping in step with r2pro

Same codebase, so a fix in one usually applies to the other. What differs on purpose:

- no `academies.html`, no club switcher in the app bar
- `pricing.html` sells training to players, not licences to clubs
- `localStorage` key and service worker cache name are A2PRO's own, because both sites share the `a3dprintingcw-cyber.github.io` origin
- home page and CTAs address a player looking for a club, not a club owner looking for software
