# Documentation strategy and structure

This document is a high-level guide for maintainers and core contributors. It defines the structure, audience, and style for the Jupyter Book documentation.

## Documentation Structure

The `jupyterbook.org` website is a **unified site that aggregates content from multiple sources**. This repository ([`jupyterbook.org`](https://github.com/jupyter-book/jupyterbook.org)) hosts the landing page and community content, while other sections are proxied from external sites via Netlify rewrites.
Many top-level folders in our domain are hosted in *other repositories*, and proxied to `jupyterbook.org` with [Netlify re-write rules](https://github.com/jupyter-book/jupyterbook.org/blob/main/netlify.toml).

Here are major sections and where to find them:

* **Landing Page (`index.md`)**  
  * **Audience:** Newcomers and all users.  
  * **Content:** The file `docs/index.md` becomes the `jupyterbook.org/` landing page. It should demonstrate the core value proposition of the Jupyter Book tool, and give all the information needed to orient a new user and know where to look for more information. It should be easy to read, simple, and visually attractive.
* **User Docs (`/stable`, `/latest`)**
  * **Audience:** Users of Jupyter Book.
  * **Content:** These are hosted in [the `docs` folder of jupyter-book](https://github.com/jupyter-book/jupyter-book/tree/main/docs) and served via ReadTheDocs. `/stable` is the latest release, `/latest` is the `main` branch. See [Site Architecture](#site-architecture) for details.
* **Topic-Area Landing Pages (e.g., `/stable/authoring`, `/stable/build`)**
  * **Audience:** Users who want an overview of what a section covers.
  * **Content:** Each topic area should have a landing page that provides the same function as the main landing page, but focused on that topic. The landing page should be simple, visually attractive, and guide users to content organized by Diataxis categories (Tutorials, How-To, Reference, Discussion). These pages live in the [jupyter-book docs](https://github.com/jupyter-book/jupyter-book/tree/main/docs).
* **Contributor Docs (`contribute/`)**
  * **Audience:** Contributors to Jupyter Book.
  * **Content:** How to navigate the project's repositories, know where to make a contribution, project-wide contributing guidelines and styles, and how to set up the project for development.
* **Community and Project Docs (`community/`)**
  * **Audience:** People who want to learn *about* the project (not use the product).
  * **Content:** Team compass, organizational structure, and project history.
* **Blog (`/blog`)**
  * **Audience:** Anyone who is interested in keeping up with what Jupyter Book's community has been doing.
  * **Content:** Blog posts from team members and contributors. Hosted in a [separate repository](https://github.com/jupyter-book/blog) and proxied here. See [Site Architecture](#site-architecture).
* **Team Compass (`/compass`)**
  * **Audience:** The Jupyter Book core team and contributors.
  * **Content:** Team-wide practices, policy, and high-level information. Hosted at [compass.jupyterbook.org](https://compass.jupyterbook.org) and proxied here. See [Site Architecture](#site-architecture).

:::{note} Don't use `[folder]/index.md` - Use `[folder].md` instead
Instead of creating `authoring/index.md`, create `authoring.md` at the top level. This file becomes the `/authoring` URL and serves as the landing page for that topic area. MyST doesn't currently support `folder/index.md` resulting in a `/folder` URL—it creates `/folder/index` instead. See [this issue](https://github.com/jupyter-book/mystmd/issues/2372) for details.
:::

## Topic Organization

Each topic-area (like `authoring/` or `execution/`) should be categorized by the [Diataxis framework](https://diataxis.fr/). You can intermingle different categories of content on the same page, but don't intermingle them in the same section within a page.

* **`tutorials`**: Goal-oriented guides to lead a user through a complete process (e.g., "Build your first book"). These are usually standalone pages, and come first.
* **`how-to`**: Short, focused guides to answer a specific question (e.g., "How do I add citations?"). This usually come just after tutorials.
* **`reference`**: Technical descriptions and factual information (e.g., "Configuration options"). This usually goes at the bottom of a page or section.
* **`discussion`**: Explanations of key concepts and high-level discussions (e.g., "Why we use MyST"). This usually goes at the bottom of a page or section.

Pages are organized in a _flat hierarchy_ within each topic folder, try not to nest them inside sub-folders unless really needed.

### When to create topic-area landing pages

Create a `[topic].md` landing page when:
- The topic is a major user journey (authoring, building, execution, etc.)
- The topic has 4+ pages that need organization by Diataxis categories
- Users would benefit from navigation guidance within the topic

**Don't create** landing pages for:
- Simple collections of related pages (like `community/` with 5 pages)
- Single-page topics
- Sections with a clear linear flow where direct links work better

### Example structure

**Good structure** following this guide:
```
docs/
├── index.md              # Main landing page
├── authoring.md          # Topic landing page
└── authoring/
    ├── mystmd.md         # Tutorial
    ├── create-content.md # How-to
    └── roles-and-directives.md # Reference
```

### How can I tell what type of content I'm adding?

Use the [Diataxis compass](https://diataxis.fr/compass/) to decide what type of content you're adding. Here's the key table they recommend:

| If the content… | …and serves the user’s… | …then it must belong to… |
| ----- | ----- | ----- |
| informs action | acquisition of skill | a tutorial |
| informs action | application of skill | a how-to guide |
| informs cognition | application of skill | reference |
| informs cognition | acquisition of skill | explanation |


## Development Workflow

### Building the documentation

The Jupyter Book repository includes a `noxfile.py` with commands for building and previewing the documentation:

**Build static HTML:**
```bash
nox -s docs
```

**Start live development server:**
```bash
nox -s docs-live
```

The live server will automatically rebuild pages as you edit them, making it easy to preview your changes.

:::{note}
The docs build has a read-only `GITHUB_TOKEN` scoped to the `jupyter-book` org that expires on **Dec 1, 2026**. This is what allows the `{issue-table}` directive to query the GitHub API during builds.
:::

## Style

* Use active and short language instead of passive language (e.g., `Get started` rather than `Getting started`)
* Be direct and to-the-point. Avoid overly wordy sections.
* Make documentation scannable. Provide high-information headers and titles.
* Cross-reference heavily. Rather than re-writing content, link back to a section as a source of truth.
