# Serein — Aesthetic Studio

Demo website for a beauty studio, built as offline presentation material.

This branch holds one complete site at the repository root, so it deploys
like a standalone repo. The other site lives on its own branch with the
same layout.

## Design

Monochrome — near-black, bone, and the Bio Rajeu logo gold as the only
accent. Heavy uppercase display type and full-width black bands carry the
page in place of photography, which is deliberate: the reference look
depends on a photo library this site does not have yet. Drop real studio
photography in and the hero, service grid and studio section all have
room for it.

Structurally distinct from the Lumière site on the other branch: dark
sticky nav, full-bleed black hero with an outlined word, a scrolling
marquee band, a four-column service grid, a named three-stage method, a
gold email-signup band, and a footer service menu. No price list —
pricing runs through a free consultation, so the page is a booking funnel
rather than a menu.

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
style.css     monochrome palette, uppercase display type
script.js     mobile menu, FAQ accordion
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
| `#A8A29A` body | `#0E0E0E` | 7.6 |
| `#DFC27F` gold | `#0E0E0E` | 11.2 |
| `#6B665E` body | white / bone | 5.1 |
| `#0E0E0E` on gold band | `#DFC27F` | 11.2 |

## Content notice

The business name, address, staff and reviews are fictional, and the
footer says so. Bio Rajeu product information and photography are
genuine. The page is marked `noindex, nofollow`.
