# Serein — Aesthetic Studio

Demo website for a beauty studio, built as offline presentation material.

This branch holds one complete site at the repository root, so it deploys
like a standalone repo. The other site lives on its own branch with the
same layout.

## Design

Cool neutral, no accent colour anywhere. Light weights, small type, wide
leading, hairlines only — nothing is boxed, filled, rounded or shadowed.
Section numbers sit in the left margin and do the wayfinding so headings
can stay quiet.

Deliberately unlike the Lumière site on the other branch, in structure as
well as palette: no card grids, no accordion, no filled buttons, no
section header blocks. Treatments are a plain aligned list, practical
information is a definition list, and the form is underlined fields.

## The Bio Rajeu section

Written from scratch for this site rather than shared with the other
branch. Lumière presents the product as a brand it standardised on, with
a spec table and a range list. Here it is a **week-by-week protocol** —
six numbered weeks describing what happens and when, with the price as a
plain line rather than an offer panel.

Checked: zero sentences and zero eight-word phrases in common between the
two sites' Bio Rajeu sections.

The section sits on a slightly lighter band rather than a dark plate, and
the logo sits on white — the packaging is white with gold foil, so this
matches the product rather than fighting it.

## Illustration

There is no salon photography, so the page is carried by drawn SVG line
art rather than stock images or empty space:

| File | What it is |
| --- | --- |
| `img/room.svg` | Line drawing of treatment room two — opening spread |
| `img/carrier.svg` | Diagram comparing free actives against vesicle-carried actives across the skin layers |
| *(inline)* | Four category marks — skin, body, brows, hair removal |

The carrier diagram is explanatory rather than decorative: it is the
answer to why the serum needs a carrier at all. Both files are a few
kilobytes, scale without blurring and need no network.

Drop real studio photography in and the opening spread and the two
product figures are the places it goes.

## Deploying to Cloudflare Pages

| Setting | Value |
| --- | --- |
| Production branch | `02-serein` |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |

In **Settings → Builds & deployments → Branch control**, set **Preview
branches** to **None**. Both Pages projects watch the same repository, so
without this each one also builds previews of the other's branch.

## Files

```
index.html    single page, no build step
style.css     cool neutral palette, no accent
script.js     mobile nav, current-section marking
img/          line illustrations, product photography, logo
```

No dependencies, no external requests — system fonts and local assets
only, so the page renders correctly with the network unplugged. Every
asset path is relative.

## Colour contrast

The muted greys this style wants are easy to take below AA. The body grey
was pulled from `#737572` (4.1 on the page) to `#666862`:

| Colour | On | Ratio |
| --- | --- | --- |
| `#222422` ink | `#F1F1EF` page | 13.8 |
| `#666862` body | `#F1F1EF` page | 5.0 |
| `#666862` body | `#E9E9E6` band | 4.6 |

`#8E908B` is 2.9 on the page — section numbers, labels and rules only,
never body text.

## Content notice

The business name, address, staff and reviews are fictional, and the
footer says so. Bio Rajeu product information and photography are
genuine. The page is marked `noindex, nofollow`.
