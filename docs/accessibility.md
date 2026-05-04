---
title: Accessibility
description: Jupyter Book's accessibility commitment, what you get out of the box, and where to go for details.
---

Jupyter Book is a distribution of the [MyST Document Engine](xref:guide), and uses the [MyST Book Theme](xref:guide/website-templates) for web exports.
These come with a number of accessibility features out of the box.
See the [accessibility documentation in the MyST guide](xref:guide/accessibility-and-performance).[^jb]

[^jb]: **This only covers the `myst-theme` in Jupyter Book**

     See the [Jupyter Accessibility Working Group](https://jupyter-accessibility.readthedocs.io) for broader project-wide resources about accessibility.

## Our goals

Jupyter Book aims to produce websites that meet [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/).
Accessibility bugs are treated like any other bug, and accessibility contributions follow the [normal contribution process](./contribute/index.md).

If you find a barrier on a site built with Jupyter Book, please [open an issue in `myst-theme`](https://github.com/jupyter-book/myst-theme/issues/new).

## Get involved

::::{grid} 1 1 2 2

:::{card} Technical details »
:link: xref:guide/accessibility-and-performance

What MyST themes do today, how to audit your own site, and which tools and standards we use.
:::

:::{card} Track open work »
:link: https://github.com/jupyter-book/myst-theme/labels/a11y

Open accessibility issues are tracked under the `a11y` label in `myst-theme`.
:::

:::{card} Report an a11y barrier »
:link: https://github.com/jupyter-book/myst-theme/issues/new?labels=a11y

A clear reproduction is enormously helpful, even if you can't propose a fix.
:::

:::{card} Contribute »
:link: ./contribute/index.md

Accessibility contributions follow the same workflow as any other contribution.
:::

::::
