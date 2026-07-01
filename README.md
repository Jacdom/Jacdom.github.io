# DTDT Studio Jekyll Site

This repository is a customized Jekyll site based on the Lone Wolf Theme. The
current website no longer follows the original theme demo exactly, so the real
rendered pages in the repository root should be treated as the source of truth.

## Current Site Structure

The active home page is `index.html`.

```text
index.html
  -> _layouts/default.html
      -> _includes/head.html
          -> _includes/head/styles.html
      -> _includes/header.html
      -> page content
      -> _includes/footer.html
      -> _includes/scripts.html
```

`_layouts/home.html` is part of the inherited theme, but it is not used by the
current home page.

## Home Page

The home page is a visual showcase. Its content is defined in the
`home_showcase` list at the top of `index.html`.

Each item can define:

- `href`: optional target link.
- `image`: image path.
- `alt`: accessible image description.
- `gap`: spacing after the image, using `none`, `sm`, `md`, or `xl`.
- `modifier`: optional display modifier, currently used for the logo item.
- `priority`: marks the first visible image as high priority.

To change the first screen or KV image, edit the first item in `index.html`.

## Layouts

- `_layouts/default.html`: global page shell used by the current home page and
  most content pages.
- `_layouts/page.html`: simple content page layout.
- `_layouts/post.html`: blog post layout.
- `_layouts/list.html`: archive/list layout.
- `_layouts/home.html`: inherited theme layout, currently unused.

## Styles

The Sass entry file is `assets/css/main.scss`. It imports Bootstrap,
Bootswatch, the inherited theme styles, and then the site-specific styles.

Custom project styles belong in `_sass/custom.scss`.

Current custom style areas:

- Navigation shell.
- Home showcase layout and responsive spacing.
- Case page layout, media blocks, typography, and responsive behavior.

## Pages And Data

- `_data/nav.yml`: header and footer navigation data.
- `_pages/price.md`: price page.
- `_pages/case.md`: case page.
- `_pages/connect.md`: contact/connect page.
- `_pages/about.md`: about page.
- `_config.yml`: site-wide Jekyll configuration, logo, theme name, plugins, and
  Sass settings.

The `docs/` directory is excluded in `_config.yml` and should be treated as
inherited theme documentation or demo content, not as the live site source.

## Safe Editing Guide

For home page visual changes, edit:

- `index.html`
- `_sass/custom.scss`
- `assets/images/`

For navigation or footer labels, edit:

- `_data/nav.yml`

For global metadata, logo path, Bootswatch theme, or Jekyll settings, edit:

- `_config.yml`

Avoid changing these unless you are intentionally modifying the theme or build
system:

- `_sass/bootstrap/`
- `_sass/bootswatch/`
- `_sass/lone-wolf-theme/`
- `docs/`
- `assets/js/main.min.js`
- `Gemfile`
- `package.json`
- `lone-wolf-theme.gemspec`
