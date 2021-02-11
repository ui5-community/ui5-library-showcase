sap.ui.define(["ui5/community/showcaselib/QRCode"], (
    QRCode
) => {

    new QRCode({
        text: "OpenUI5",
        data: "https://openui5.org"
    }).placeAt("content");

});
