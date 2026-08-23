# Salon demo sites

Two standalone beauty salon websites, built as offline presentation
material. Each lives at the root of its own branch, so the two deploy as
separate Cloudflare Pages projects from this one repository.

`main` holds nothing but this index.

| Branch | Site | Style |
| --- | --- | --- |
| [`01-lumiere`](../../tree/01-lumiere) | Lumière Beauty Studio, Portland OR | Warm white and gold, sans-serif |
| [`02-serein`](../../tree/02-serein) | Serein Day Spa, Asheville NC | Sage and stone, serif headings |

Both are single static pages with no build step and no external requests
— system fonts and local assets only, so they render correctly with the
network unplugged.

## Cloudflare Pages

One project per branch:

| Setting | Value |
| --- | --- |
| Production branch | `01-lumiere` *or* `02-serein` |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |

In each project, **Settings → Builds & deployments → Branch control**,
set **Preview branches** to **None**. Both projects watch this same
repository, so otherwise each one also builds previews of the other's
branch.

## Content notice

Business names, addresses, staff and reviews on both sites are
fictional, and each footer says so. Bio Rajeu product information and
photography are genuine. Both pages are marked `noindex, nofollow`.
