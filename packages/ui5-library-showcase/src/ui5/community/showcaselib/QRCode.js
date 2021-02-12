/*!
 * ${copyright}
 */

sap.ui.define([
    './library',
    'sap/ui/core/Control',
    './QRCodeRenderer'
], (library, Control, QRCodeRenderer) => {

    /**
     * Constructor for a new QRCode.
     *
     * @param {string} [sId] ID for the new control, generated automatically if no ID is given
     * @param {object} [mSettings] Initial settings for the new control
     *
     * @class
     * The <code>ui5.community.showcaselib.QRCode</code> control can be used to render QRCodes.
     * @extends sap.ui.core.Control
     *
     * @author OpenUI5 Community
     * @version ${version}
     *
     * @constructor
     * @public
     * @alias ui5.community.showcaselib.QRCode
     */
    const QRCode = Control.extend("ui5.community.showcaselib.QRCode", /** @lends ui5.community.showcaselib.QRCode.prototype */ {
        metadata: {
            library: "ui5.community.showcaselib", // can be omitted when control is in same namespace as library
            properties: {
                /**
                 * The text to display.
                 */
                text: {
                    type: "string",
                    group: "Misc",
                    defaultValue: null
                },
                /**
                 * The data to encode in the QRCode.
                 */
                data: {
                    type: "string",
                    group: "Misc",
                    defaultValue: null
                }
            }
        },
        renderer: QRCodeRenderer
    });

    return QRCode;

});
