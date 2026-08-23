# Serein Day Spa

Demo website for a day spa, built as offline presentation material.

This branch holds one complete site at the repository root, so it deploys
like a standalone repo. The other site lives on its own branch with the
same layout.

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
style.css     sage palette, serif headings
script.js     mobile drawer, FAQ accordion
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
| `#5F665B` body | white | 5.9 |
| `#46553F` accent | white | 8.0 |
| `#DFC27F` gold | `#333D2D` | 6.6 |
| `#A0A99A` small print | `#333D2D` | 4.7 |

`#7C8F73` sage is 3.5 on white — borders and icons only, never body text.

## Content notice

The business name, address, staff and reviews are fictional, and the
footer says so. Bio Rajeu product information and photography are
genuine. The page is marked `noindex, nofollow`.
