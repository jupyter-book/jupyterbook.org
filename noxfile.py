"""Nox sessions for the jupyterbook.org docs site."""

import nox

# Use uv for faster installs when available
nox.options.default_venv_backend = "uv|virtualenv"


@nox.session(name="docs")
def docs(session):
    """Build the documentation as static HTML."""
    session.install("pyyaml")
    session.chdir("docs")
    session.run("npm", "install", external=True)
    session.run("python", "src/create_gallery.py")
    session.run("npx", "myst", "build", *session.posargs, external=True)


@nox.session(name="docs-live")
def docs_live(session):
    """Start a live development server for the documentation."""
    session.install("pyyaml")
    session.chdir("docs")
    session.run("npm", "install", external=True)
    session.run("python", "src/create_gallery.py")
    session.run("npx", "myst", "start", *session.posargs, external=True)


@nox.session
def gallery(session):
    """Generate the gallery from gallery.yml."""
    session.install("pyyaml")
    session.chdir("docs")
    session.run("python", "src/create_gallery.py")


@nox.session
def clean(session):
    """Clean the documentation build artifacts."""
    session.chdir("docs")
    session.run("npx", "myst", "clean", "-y", external=True)
