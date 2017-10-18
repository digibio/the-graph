# react graph test for webpack

this is a test to integrate my modified the-graph module into a webpack environment.

notes:
- somehow npm and yarn don't seem to respect .npmignore, and simply keep adding circular dependencies in this project. I have not found a way to prevent that yet. Everytime I do `yarn upgrade`, yarn installs around 20k of linked packages
- the webpack configuration needs a css loader to use the css exports i added to the-graph
