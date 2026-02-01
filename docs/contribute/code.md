# Contributing Code to Jupyter Book

This guide covers the technical setup and architecture for code contributors.

**Most technical changes to Jupyter Book happen in one of these places**:

- [jupyter-book/mystmd](https://github.com/jupyter-book/mystmd) - the Document engine that powers Jupyter Book
- [jupyter-book/myst-theme](https://github.com/jupyter-book/myst-theme) - the React theme infrastructure for the book theme
- One of the extension and plugin repositories in the [jupyter-book organization](https://github.com/jupyter-book).

## Application Design

The Jupyter Book application is a Python package containing a [Node.js](https://nodejs.org/en) application.
It's functionally equivalent to a configured version of the [mystmd engine](https://github.com/jupyter-book/mystmd).

In the future, `mystmd` may become smaller and less-opinionated, and Jupyter Book will become a distribution of mystmd functionality.


### Code that Jupyter Book adds

**A Python shim**. The Python package ensures users have Node.js to run the underlying application. For users without Node.js, it uses [`nodeenv`](https://github.com/ekalinin/nodeenv) to download a local copy.


**CLI functionality for Jupyter Book 1 users**. Jupyter Book 2's CLI adds some extra functionality (like a way to upgrade from Jupyter Book 1), but is intentionally as lightweight as possible.


## Building the Python Package

Jupyter Book uses [`hatch`](https://hatch.pypa.io/) to build the Python package. Configuration is in `pyproject.toml`, using plugins:
- `hatch-jupyter-builder` - builds the Node.js application
- `hatch-deps-selector` - manages dependencies for conda-forge vs PyPI
- `hatch-nodejs-version` - provides metadata from the JS package

Build the application:

```shell
hatch build
```
