/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5.community.showcaselib
 */
sap.ui.define([
    'sap/ui/core/library' // library dependency
], () => {
    "use strict";

    /**
     * The Community Showcase library.
     *
     * @namespace
     * @name ui5.community.showcaselib
     * @author OpenUI5 Community
     * @version ${version}
     * @public
     */

    // delegate further initialization of this library to the Core
    // note the full api reference notation due to the Core not being booted yet!
    return sap.ui.getCore().initLibrary({
        name: "ui5.community.showcaselib",
        version: "${version}",
        dependencies: ["sap.ui.core"],
        types: [],
        interfaces: [],
        controls: [
            "ui5.community.showcaselib.QRCode"
        ],
        elements: [],
        noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
    });
});
