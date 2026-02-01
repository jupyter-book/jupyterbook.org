#!/usr/bin/env bash
set -euo pipefail

# Install GitHub CLI (required by MyST plugins)
curl -sL https://github.com/cli/cli/releases/download/v2.86.0/gh_2.86.0_linux_amd64.tar.gz | tar xz
export PATH="$PWD/gh_2.86.0_linux_amd64/bin:$PATH"

# Install Python dependencies for gallery generation
pip install pyyaml

# Build the docs
cd docs
npm install
python src/create_gallery.py
npx myst build --html --execute
