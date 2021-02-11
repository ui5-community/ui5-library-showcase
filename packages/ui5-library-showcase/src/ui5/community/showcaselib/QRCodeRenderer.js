/*!
 * ${copyright}
 */

// Provides default renderer for ui5.community.showcaselib.BarcodeScanner
sap.ui.define([], () => {
    "use strict";

    const BarcodeScannerRenderer = {
        apiVersion: 2
    };

    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     *
     * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
     * @param {ui5.community.showcaselib.BarcodeScanner} oBarcodeScanner an object representation of the control that should be rendered
     */
    BarcodeScannerRenderer.render = (oRm, oQRCode) => {
        const oMsgBndl = sap.ui.getCore().getLibraryResourceBundle("ui5.community.showcaselib");
        const codeWriter = new ZXing.BrowserQRCodeSvgWriter();
        oRm.openStart("div", oQRCode);
        oRm.class("ui5ComScQRCode");
        oRm.openEnd();
        oRm.openStart("div", `${oQRCode.getId()}-qrcode`);
        oRm.class("ui5ComScQRCodeSpot");
        oRm.openEnd();
        oRm.unsafeHtml((new XMLSerializer()).serializeToString(codeWriter.write(oQRCode.getData(), 300, 300)));
        oRm.close("div");
        oRm.openStart("div");
        oRm.openEnd();
        oRm.text(`${oMsgBndl.getText("ANY_TEXT")}: ${oQRCode.getText()}`);
        oRm.close("div");
        oRm.close("div");
    };

    return BarcodeScannerRenderer;
});
