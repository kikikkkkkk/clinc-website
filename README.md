# BOUNCE — Beauty Bar

Demo website for a beauty bar, built as offline presentation material.

This branch holds one complete site at the repository root, so it deploys
like a standalone repo. The other site lives on its own branch with the
same layout.

> The branch is still named `02-serein` from an earlier draft so any
> Cloudflare project already pointed at it keeps working. Say the word and
> it can be renamed.

## Design

Pale, low-saturation palette on a near-white ground — powder tones
rather than the greyed mid-tones this started as. The chunky treatment is
unchanged: thick ink outlines, hard offset shadows, pill buttons, big
rounded blocks and heavy type.

At this lightness the outlines are structural, not decorative. Block and
ground sit only 1.1–1.3 apart, so without the 2px ink edge the blocks
would not separate from the page at all.

Every block takes ink text:

| Block | Ratio |
| --- | --- |
| peach `#F4E0D4` | 9.8 |
| mint `#DAE7DC` | 9.8 |
| sky `#D5E5EF` | 9.7 |
| butter `#F3EBD4` | 10.5 |
| lilac `#E3DCEC` (Bio Rajeu band) | 9.3 |
| blush `#F6DCDC` (accent) | 9.6 |
| ground `#FBF9F6` | 11.9 |

The booking section and footer were solid charcoal, which read as a slab
once the rest of the page went pale; both are now light.

Pale grounds raise base contrast but expose anything set at low opacity.
Four rules — the card numbers, review citations, the logo subtitle and
the footer notice — were sitting at `opacity:.55`–`.65` and landed at
3.2–3.8. All raised to `.8`.

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

## Brand mark

`img/logo.svg` — a bounce: the squash on the floor, the arc, the ball at
the top of it, inside a badge with the same pale fill and thick ink edge
the rest of the page uses. It appears in the nav and the footer, and is
also wired up as the favicon.

## Links

The page makes no outbound requests of any kind. There are no external
links — the Bio Rajeu credit is plain text, not a link — and every asset
is local, so the site behaves identically with the network unplugged.

Contact address is `hello@bouncebeautybar.fyi`, shown as text rather than
a `mailto:` link.

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
img/          brand mark, product photography, Bio Rajeu logo
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
