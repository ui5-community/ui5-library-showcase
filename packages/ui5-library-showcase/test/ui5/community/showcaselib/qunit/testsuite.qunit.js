sap.ui.define(function () {
    "use strict";

    return {
        name: "QUnit TestSuite for ui5.community.showcaselib",
        defaults: {
            bootCore: true,
            ui5: {
                libs: "sap.ui.core,ui5.community.showcaselib",
                theme: "sap_fiori_3",
                noConflict: true,
                preload: "auto"
            },
            qunit: {
                version: 2,
                reorder: false
            },
            sinon: {
                version: 4,
                qunitBridge: true,
                useFakeTimers: false
            },
            module: "./{name}.qunit"
        },
        tests: {
            // test file for the QRCode control
            QRCode: {
                title: "QUnit Test for QRCode",
                _alternativeTitle: "QUnit tests: ui5.community.showcaselib.QRCode"
            }
        }
    };

});
