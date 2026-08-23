# Lumière Beauty Studio

Demo website for a beauty salon, built as offline presentation material.

This branch holds one complete site at the repository root, so it deploys
like a standalone repo. The other site lives on its own branch with the
same layout.

## Deploying to Cloudflare Pages

| Setting | Value |
| --- | --- |
| Production branch | `01-lumiere` |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |

In **Settings → Builds & deployments → Branch control**, set **Preview
branches** to **None**. Both Pages projects watch the same repository, so
without this each one also builds previews of the other's branch.

## Files

```
index.html    single page, no build step
style.css     palette taken from the Bio Rajeu logo
script.js     sticky nav, mobile menu, FAQ accordion
img/          product photography and logo
```

No dependencies, no external requests — system fonts and local assets
only, so the page renders correctly with the network unplugged. Every
asset path is relative.

`img/leftClogo.png` is the full-resolution logo master;
`img/br-logo.png` is the 420px copy the page actually loads.

## Content notice

The business name, address, staff and reviews are fictional, and the
footer says so. Bio Rajeu product information and photography are
genuine. The page is marked `noindex, nofollow`.
