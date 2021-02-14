# ui5-library-showcase

This repository showcases the creation of UI5 libraries for custom control development.

**Attention: This library uses already ES6 syntax!**

## Getting Started

The project is a mono repo with the following structure:

```text
packages
├── ui5-app               // test application
└── ui5-library-showcase  // showcase library
```

The library contains one control the `QRCode`.

### Running the application

To run the application execute the following CLI:

```sh
# optional: prepare the repository with yarn
yarn

# run the application
yarn start:app
```

### Running the QRCode test page in the library

To run the `QRCode` testpage execute the following CLI:

```sh
# optional: prepare the repository with yarn
yarn

# run the QRCode test page
yarn start
```

### Running the QUnit testsuite of the library

To run the QUnit testsuite of the library execute the following CLI:

```sh
# optional: prepare the repository with yarn
yarn

# run the QUnit testsuite
yarn testsuite
```

### Running the Karma to execute the QUnit testsuite of the library

To run Karma to execute the QUnit testsuite execute the following CLI:

```sh
# optional: prepare the repository with yarn
yarn

# run Karma
yarn test
```
