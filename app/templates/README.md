# {{ projectName }}

> {{ projectDescription }}

## Getting Started

Yeoman should have installed all the dependencies for you, as long as that went well then you should now be able to run a few builds

Develop builds:

```
npm run build
```

Production-ready build:

```
npm run make
```

For hacking:

```
npm run watch
```

## Project Structure

The project is set up to be component based wherever possible and splits assets into bundles. These bundles are factored-out to create a common base, this means that you don’t have to carry around 100s of kb of dependency for pages that don’t require it.

A general rule of thumb is to create a bundle per page, but, you could split this up in true component style to have bundles refer to specific units of functionality. Any common code (components) you can throw into `common` and have each bundle use those common bits only when they want them.

If you have functionality that should live in all pages then use a `core` module (call it what you like) and include it in every page.

### Example Project

```
.
└── src
    ├── bundles
    │   ├── bundleA
    │   │   ├── gui.js
    │   │   └── main.js
    │   └── bundleB
    │       └── main.jsx
    └── common
        ├── components
        │   └── loadButton
        │       ├── loadButton.less
        │       └── loadButton.jsx
        ├── utils.js
        └── menu.js
```

A common file structure might end up looking something like this.

```
// bundleA/main.js

console.log( 'No react in here, just lovely vanilla JS' )
```

```
// bundleB/main.jsx

import LoadButton from 'components/loadButton/loadButton'
```

In this example only `bundleB` requires a common component so only that bundle will contain the dependency, `bundleA` will be lean and mean. The main benefit here is that `bundleA` won’t have to drag `react` around with it when it doesn’t need it.

### Automatic pathing

Several module search paths are included by default which is why `require( 'components/loadButton/loadButton' )` works from anywhere in the file tree.

### Less

The functionality for CSS works the exact same way—add component specific styling in with the component and link to it from `src/styles.less`. Any common stuff should end up in `common/styles`.

A good rule is to keep any files that *don’t* output CSS in `common/styles/modules` and follow a [styleguide](https://github.com/hocss/ho-code-style).
