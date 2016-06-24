define("bundles/asset-admin/components/AssetsFooter",["require","exports","module","react-with-addons","underscore","i18n!nls/asset-admin","classnames","css!./__styles__/AssetsFooter"],function(require,exports,module){"use strict";function _defaults(e,s){for(var n=Object.getOwnPropertyNames(s),t=0;t<n.length;t++){var r=n[t],o=Object.getOwnPropertyDescriptor(s,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var r=function(){function defineProperties(o,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=function get(n,i,l){var r=!0;e:for(;r;){var t=n,a=i,c=l;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;n=o,i=a,l=c,r=!0,e=o=void 0;continue e}if("value"in e)return e.value;var s=e.get;if(void 0===s)return void 0;return s.call(c)}},e=require("react-with-addons"),_=require("underscore"),t=require("i18n!nls/asset-admin"),s=require("classnames");require("css!./__styles__/AssetsFooter");var n=function(n){function AssetsFooter(){var e=this;_classCallCheck(this,AssetsFooter),o(Object.getPrototypeOf(AssetsFooter.prototype),"constructor",this).apply(this,arguments),this.addSelectedAssets=function(){e.props.onSelect(e.props.selectedAssets)}}return _inherits(AssetsFooter,n),r(AssetsFooter,[{key:"renderUploadStatus",value:function renderUploadStatus(){if(!_(this.props.uploadedAssets).isEmpty())return e.createElement("span",{className:"upload-complete-message"},t("Upload complete! Next, select a file to use."))}},{key:"render",value:function render(){var r=this.props,n=r.selectedAssets,a=r.hideSelectButton,c=r.onCancel,o=!_(n).isEmpty(),i=s({active:o});return e.createElement("footer",{className:"asset-browser-footer"},this.renderUploadStatus(),e.createElement("button",{onClick:c},t("Cancel")),!a&&e.createElement("button",{className:i,onClick:this.addSelectedAssets,disabled:!o},t("Select")))}}],[{key:"propTypes",value:{selectedAssets:e.PropTypes.array,uploadedAssets:e.PropTypes.array,hideSelectButton:e.PropTypes.bool,onSelect:e.PropTypes.func.isRequired,onCancel:e.PropTypes.func.isRequired},enumerable:!0}]),AssetsFooter}(e.Component);module.exports=n});