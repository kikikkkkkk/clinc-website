# BOUNCE — Beauty Bar

Demo website for a beauty bar, built as offline presentation material.

This branch holds one complete site at the repository root, so it deploys
like a standalone repo. The other site lives on its own branch with the
same layout.

> The branch is still named `02-serein` from an earlier draft so any
> Cloudflare project already pointed at it keeps working. Say the word and
> it can be renamed.

## Design

High-saturation and chunky: thick ink outlines, hard offset shadows,
pill buttons, big rounded colour blocks and heavy type. Aimed at a
younger client than the Lumière site on the other branch, and built the
opposite way round — colour blocks carry the page, so the only two
photographs on it are the product shots.

Text colour on each block is set by measured contrast, not by eye:

| Block | Text | Ratio |
| --- | --- | --- |
| violet `#5B3DF5` | white | 6.1 |
| pink `#FF3E8A` | ink | 5.5 |
| tangerine `#FF7A3D` | ink | 7.1 |
| sky `#3DC9F5` | ink | 9.5 |
| lime `#D4F04A` | ink | 14.3 |

Violet is the only one of the five that takes white text — white on pink
is 3.3 and fails, which is the usual way a palette this loud goes wrong.

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
