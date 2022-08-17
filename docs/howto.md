# Creating Control Libraries

Creating control libraries in OpenUI5 docu: https://github.com/SAP/openui5/blob/master/docs/controllibraries.md

## Initial Steps

Decide for a namespace.

Decide for package name:

* Naming convention: `ui5-lib-[LIB NAMESPACE]`
  * [LIB NAMESPACE] => hierachical namespace (dot separated, e.g. ui5.community.showcaselib)
* Allows easy search on NPM registry (we can also use keywords)

## Project Setup

```bash
$> npm init -y
$> mkdir -p src # let ui5 tooling know that we're creating a custom lib
$> ui5 init
$> cd src; mkdir -p ui5/community/showcaselib # sync namespaces and folder structure
$> touch ui5/community/showcaselib/manifest.json
```

Example [`manifest.json`](https://ui5.sap.com/resources/sap/ui/table/manifest.json)

```bash
$> touch ui5/community/showcaselib/library.js
```

Copy & Paste the content from the control libraries documentation.

Steps:

* Adopt imports (remove jQuery!)
* Adopt namespace
* Cleanup of code (...)

```bash
$> touch src/ui5/community/showcaselib/QRCode.js
$> touch src/ui5/community/showcaselib/QRCodeRenderer.js
```

Fill QRCode.js and QRCodeRenderer.js with code!

Next step test page:

```bash
$> mkdir -p test/ui5/community/showcaselib/
$> touch test/ui5/community/showcaselib/QRCode.html
```

Add dependencies

```bash
$> ui5 use openui5@latest
$> ui5 add sap.ui.core
```

Start the test server:

```bash
$> ui5 serve -o test-resources/ui5/community/showcaselib/QRCode.html
```

Add live reload!

Add support for theming:
here's an overview of all theme parameters:
https://ui5.sap.com/test-resources/sap/m/demokit/theming/webapp/index.html

```bash
# (in / of lib)
$> ui5 add themelib_sap_fiori_3
$> mkdir -p src/themes/base
$> touch src/themes/base/QRCode.less
$> touch src/themes/base/library.source.less
# ... import base global.less'es
# @import "QRCode.less";
```

Check for "sap.ui5".library.css = true

Add support for specific theme

```bash
# (in / of lib)
$> mkdir -p src/themes/base
$> touch src/themes/sap_fiori_3_dark/library.source.less
# ... import sap_fiori_3_dark global.less'es
# @import "../base/library.source.less";
```

Add 3rd party libs used in library controls

Options:

1. Include OSS in library namespace + lib (classic libs)
1. NPM packages providing browserified OSS can be embedded via shimming
1. NPM packages which are not browserified can be repackaged via rollup or other tools (e.g. [Apollo Lib](https://github.com/petermuessig/ui5-sample-apollo/tree/master/packages/ui5-apollo-lib))

Runtime shim of modules: see [OpenUI5 CodeEditor](https://github.com/SAP/openui5/blob/master/src/sap.ui.codeeditor/src/sap/ui/codeeditor/CodeEditor.js#L5-L23) - module shim for packaged OSS.

Tooling shim: see [UI5con 2020 demo lib](https://github.com/matz3/ui5con20-ui5-tooling/blob/master/demo-project/packages/library/ui5.yaml#L13-L28)

```bash
$> yarn add @zxing/library
# also add to package.json ui5.dependencies!
```

add shim config to `ui5.yaml`
-> `ui5 build --all` will then include `@zxing/library`, but also all other defined libraries in `ui5.yaml` 

use `sap.ui.loader.config()` for loading the 3rd party lib at dev-time for using inside control
(in order to not pollute the global scope)

* `amd: true`
* `exports: "ZXing"`

when used in app, the test-page of the library is available at
note: http://localhost:1081/test-resources/ui5/community/showcaselib/QRCode.html
at dev-time (via `ui5 serve`)
