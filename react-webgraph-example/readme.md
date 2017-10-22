# react graph test for webpack

this is a test to integrate my modified the-graph module into a webpack environment.

notes:
- somehow npm and yarn don't seem to respect .npmignore, and simply keep adding circular dependencies in this project. I have not found a way to prevent that yet. Everytime I do `yarn upgrade`, yarn installs around 20k of linked packages
- preferred is to `npm link` or `yarn link` to the parent directory, when working on the the-graph project, so that updates are integrated directly into this test project

