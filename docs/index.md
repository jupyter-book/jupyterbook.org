---
title: Jupyter Book
site:
  hide_outline: true
  hide_toc: true
  hide_title_block: true
---

+++ {"class": "col-page-inset"}

:::{attention} Jupyter Book 2 is here!
Built on the [MyST Document Engine](https://mystmd.org) with faster builds, modern features, and improved workflows.
Jupyter Book 2 still has many improvements to be made.
Please join us and [contribute to Jupyter Book](./contribute.md) so we can make it better!

[Upgrade from 1.0](/docs/resources/upgrade#upgrade-tldr) • [Known limitations](/docs/resources/faq#known-limitations) • [Frequently Asked Questions](/docs/resources/faq#faq-general) • [Looking for 1.0 documentation?](https://jupyterbook.org/v1)
:::

+++ {"class": "col-page-inset"}


:::{hero}
Jupyter {orange}`Book`
:::

::::::{grid} 1 2 2 2
:::::{grid-item}
{large}`Create computational narratives that are reusable, reproducible, and interactive.`

_Write in Notebooks or Markdown, execute code, cross-reference content, and publish to the web - built for and by researchers, educators, and data scientists._

:::::
:::::{grid-item}
```{code-block} bash
:filename: install
pip install jupyter-book
jupyter book start
```

{button}`Get started → </docs/get-started>` {button}`Upgrade from JB1 → </docs/resources/upgrade>`
::::::

+++

```{warning}
With the recent release of Jupyer Book 2, you will explicitly need to add `jupyter-book<2` to your install to keep using the Sphinx-based [Jupyter Book 1](https://jupyterbook.org/v1).
```

## See It in Action

::::{tab-set}
:::{tab-item} Reusable

```{figure} media/videos/reusable.mp4
:class: sd-mb-0

**Reusable Knowledge** - Cross-reference pages, sections, figures, and equations. Link to other MyST sites for a connected reading experience.
```

:::
:::{tab-item} Reproducible

```{figure} media/videos/reproducible.mp4
:class: sd-mb-0

**Reproducible Results** - Execute Python, R, Julia, and more at build time. Include computational results directly in your documentation.
```

:::
:::{tab-item} Interactive

```{figure} media/videos/interactive.mp4
:class: sd-mb-0

**Interactive Exploration** - Publish websites with live widgets. Connect to JupyterHub, Binder, or run Python in the browser.
```

:::
::::



+++ {"kind": "justified"}

## Get started

### What do you want to do

:::::{grid} 1 2 3 3
::::{card} 📘 Get Started
:link: /docs/get-started
Build your first book in minutes
+++
[Quick start →](/docs/get-started)
::::
::::{card} 📝 Author Content
:link: /docs/authoring
Write with MyST Markdown
+++
[Learn authoring →](/docs/authoring)
::::
::::{card} 🚀 Build & Publish
:link: /docs/build-and-publish
Deploy to the web
+++
[Publish guide →](/docs/build-and-publish)
::::
::::{card} ⚙️ Extend with Plugins
:link: /docs/plugins
Customize your workflow
+++
[Explore plugins →](/docs/plugins)
::::
::::{card} 💬 Community
:link: ./community.md
Get help and contribute
+++
[Join us →](./community.md)
::::
::::{card} 📚 Gallery
:link: ./gallery.md
Explore existing books and projects
+++
[Explore gallery →](./gallery.md)
::::

:::::

+++ {"kind": "justified"}

### Important Information

::::{grid} 1 1 2 2
:::{card} Upgrade guide
:link: /docs/resources/upgrade
Upgrade from Jupyter Book 1 to 2
+++
Includes an FAQ about known limitations and gotchas
:::

:::{card} Get Help
:link: ./community/help.md
Questions or issues?
+++
Visit our [FAQ](/docs/resources/faq) for common questions, or reach out via [Discord](https://discord.mystmd.org), [Discussions](https://github.com/orgs/jupyter-book/discussions), or [Vote on features](./community/vote.md)
:::

:::{card} Cite Jupyter Book
:link: ./cite.md
Using in research?
+++
See our citation guide for proper attribution
:::

:::{card} Ecosystem
:link: ./community/ecosystem.md
Learn about the MyST ecosystem
+++
Understand how Jupyter Book fits into the broader MyST ecosystem
:::
::::
