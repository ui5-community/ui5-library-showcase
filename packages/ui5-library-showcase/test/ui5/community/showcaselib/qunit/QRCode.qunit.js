/*global QUnit */
sap.ui.define([
    "sap/ui/qunit/QUnitUtils",
    "sap/ui/qunit/utils/createAndAppendDiv",
    "ui5/community/showcaselib/QRCode"
], function (qutils, createAndAppendDiv, QRCode) {
    "use strict";

    // prepare DOM
    createAndAppendDiv("uiArea1");

    // module for basic checks
    QUnit.module("Basic QRCode Checks");

    // some basic control checks
    QUnit.test("Test properties", (assert) => {
        assert.expect(2);
        const oQRCode = new QRCode({
            text: "MyQRCode",
            data: "MyData"
        });
        assert.equal(oQRCode.getText(), "MyQRCode", "Check text equals 'MyQRCode'");
        assert.equal(oQRCode.getData(), "MyData", "Check data equals 'MyData'");
    });

    // some basic rendering check
    QUnit.test("Test rendering", async function (assert) {
        assert.expect(1);
        var oQRCode = new QRCode("qrCode", {
            text: "MyQRCode",
            data: "MyData"
        }).placeAt("uiArea1");
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                assert.ok(document.getElementById("qrCode"), "QRCode found");
                resolve();
            }, 100);
        });
    });

});
