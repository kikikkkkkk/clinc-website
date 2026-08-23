# BOUNCE — Beauty Bar

Demo website for a beauty bar, built as offline presentation material.

This branch holds one complete site at the repository root, so it deploys
like a standalone repo. The other site lives on its own branch with the
same layout.

> The branch is still named `02-serein` from an earlier draft so any
> Cloudflare project already pointed at it keeps working. Say the word and
> it can be renamed.

## Design

Morandi palette — every hue greyed down, on a greige ground. The chunky
treatment is unchanged: thick ink outlines, hard offset shadows, pill
buttons, big rounded colour blocks and heavy type. Dropping the
saturation without touching the structure is the whole idea; the layout
reads the same, the volume comes down.

The outline colour is a warm charcoal `#38332F` rather than black —
against muted blocks, true black reads as a harsh edge.

Text colour on each block is measured, not guessed:

| Block | Text | Ratio |
| --- | --- | --- |
| rose `#DEC4BD` | ink | 7.6 |
| sage `#BEC7B5` | ink | 7.2 |
| clay `#DEBAA1` | ink | 6.9 |
| mist `#C2CDD6` | ink | 7.7 |
| sand `#E2D8C0` | ink | 8.8 |
| slate `#9DAAB4` | ink | 5.3 |
| greige ground `#F6F3EE` | ink | 11.3 |

Muted palettes are where contrast quietly fails, because everything
drifts toward the middle. The slate band has a genuine dead zone: between
`#717D86` and `#8E9BA6` neither white nor ink clears AA at any value, so
it has to sit clear of that band on one side or the other. It is above
it, on ink, which is why every block on the page takes the same text
colour.

Watch the opacities when a background is lightened. Several rules inside
that band were set at `opacity:.8`–`.9` back when the text was white on a
dark slate; on the lifted colour those same values dropped ink text to
3.7–4.4. They were raised or removed.

The Bio Rajeu gold sits comfortably here: `#DFC27F` is already a greyed
warm gold rather than a bright metallic.

## The Bio Rajeu section

Written for this site, not shared with the other branch. Lumière presents
the product as a line it standardised on, with a spec table. Here it is a
**no / yes list** — four things the course isn't, four things it is —
followed by one plain paragraph and the price. Checked: zero shared
sentences and zero shared eight-word phrases between the two sites.

The logo sits on a white tile rather than directly on violet; the
packaging is white with gold foil, and gold on violet would be unreadable
anyway.

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
style.css     high-saturation palette, chunky outlines
script.js     mobile menu, FAQ accordion
img/          product photography and logo
```

No dependencies, no external requests — system fonts and local assets
only, so the page renders correctly with the network unplugged. Every
asset path is relative.

## Photography

There is none of the salon, so the design deliberately does not need any.
If studio photos arrive, the hero shape group and the review cards are
where they go.

## Content notice

The business name, address, staff and reviews are fictional, and the
footer says so. Bio Rajeu product information and photography are
genuine. The page is marked `noindex, nofollow`.
