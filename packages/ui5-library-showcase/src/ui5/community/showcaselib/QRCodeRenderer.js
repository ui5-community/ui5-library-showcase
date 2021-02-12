/*!
 * ${copyright}
 */

sap.ui.loader.config({
    shim: {
        'ui5/community/showcaselib/lib/zxing/index': {
            amd: true, // important: disable amd loaders if present to access the dep via the global export
            exports: "ZXing"
        }
    }
});

sap.ui.define(["sap/ui/core/Core", './lib/zxing/index'], (Core, ZXing) => {
    "use strict";

    const CodeWriter = new ZXing.BrowserQRCodeSvgWriter();

    const QRCodeRenderer = {
        apiVersion: 2
    };

    /**
     * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
     *
     * @param {sap.ui.core.RenderManager} rm the RenderManager that can be used for writing to the Render-Output-Buffer
     * @param {ui5.community.showcaselib.QRCode} control an object representation of the control that should be rendered
     */
    QRCodeRenderer.render = (rm, control) => {
        const i18n = Core.getLibraryResourceBundle("ui5.community.showcaselib");
        rm.openStart("div", control);
        rm.class("ui5ComScQRCode");
        rm.openEnd();
        rm.openStart("div", `${control.getId()}-qrcode`);
        rm.class("ui5ComScQRCodeSpot");
        rm.openEnd();
        rm.unsafeHtml((new XMLSerializer()).serializeToString(CodeWriter.write(control.getData(), 300, 300)));
        rm.close("div");
        rm.openStart("div");
        rm.openEnd();
        rm.text(`${i18n.getText("ANY_TEXT")}: ${control.getText()}`);
        rm.close("div");
        rm.close("div");
    };

    return QRCodeRenderer;
});
