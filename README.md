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

## License

This work is [dual-licensed](./LICENSE) under Apache 2.0 and the Derived Beer-ware License. The official license will be Apache 2.0, but ultimately you can choose between one of them if you use this work.

When you like this stuff, buy [@vobu](https://twitter.com/vobu), [@matz3](https://twitter.com/matthiaso), [@wridgeu](https://twitter.com/wridgeu) a beer or buy [@pmuessig](https://twitter.com/pmuessig) a coke when you see them.
