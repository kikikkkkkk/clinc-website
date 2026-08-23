# Serein — Aesthetic Studio

Demo website for a beauty studio, built as offline presentation material.

This branch holds one complete site at the repository root, so it deploys
like a standalone repo. The other site lives on its own branch with the
same layout.

## Design

An editorial page, not a stack of sections. The geometry is a **fixed
sidebar and one scrolling document column** rather than the centred
container of full-width bands used on the Lumière branch — which is the
point: the two sites differ in page architecture, not palette.

What replaces the usual furniture:

| Usual pattern | Here |
| --- | --- |
| Section header blocks | Numbered running heads with a hairline |
| Card grids | A numbered index with rules, like a printed menu |
| Accordion FAQ | A definition list of practical facts |
| Boxed testimonials | Pull quotes set into the text flow |
| Boxed form fields | Underlined fields, inline in the page |
| Sans body text | Serif body, two-column with a drop cap |

Paper and ink with oxblood as the accent. The one Bio Rajeu section is
the single visual break: a dark plate that runs to the edges of the
document column, carrying the product photography.

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
style.css     editorial layout, paper/ink/oxblood
script.js     sidebar drawer, current-section highlighting
img/          product photography and logo
```

No dependencies, no external requests — system fonts and local assets
only, so the page renders correctly with the network unplugged. Every
asset path is relative.

`img/leftClogo.png` is the full-resolution logo master;
`img/br-logo.png` is the 420px copy the page actually loads.

## Colour contrast

All body text meets WCAG AA on its background:

| Colour | On | Ratio |
| --- | --- | --- |
| `#17150F` ink | paper `#FBF9F5` | 17.4 |
| `#5E594E` grey | paper | 6.6 |
| `#8C2F26` oxblood | paper | 7.8 |
| `#DFC27F` gold | ink plate | 10.6 |
| `#A9A296` grey | ink plate | 7.2 |

## Content notice

The business name, address, staff and reviews are fictional, and the
footer says so. Bio Rajeu product information and photography are
genuine. The page is marked `noindex, nofollow`.
