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
img/          brand mark, product photography, Bio Rajeu logo
```

No dependencies, no external requests — system fonts and local assets
only, so the page renders correctly with the network unplugged. Every
asset path is relative.

`img/leftClogo.png` is the full-resolution logo master;
`img/br-logo.png` is the 420px copy the page actually loads.

## Brand mark

`img/logo.svg` — Lumière means light, so the mark is a flame held in a
thin ring, drawn in the studio's own gold and brown. It sits in the nav
and the footer and is wired up as the favicon.

## Links

No outbound links. The Bio Rajeu credit in the signature section is plain
text rather than a link to biorajeu.com, so the page makes no external
requests at all. The contact address is still a working `mailto:` — the
sister site keeps its address as plain text, so they differ on that
point.

Contact address is `hello@lumierebeautystudio.fyi`.

## Content notice

The business, address, staff and reviews are invented. The on-page
labelling that said so has been removed at the owner's request, so
nothing on the page itself now marks it as a mockup — worth knowing,
since the branch deploys to a public Cloudflare Pages URL. The page is
still marked `noindex, nofollow`.

Bio Rajeu product information and photography are genuine.
