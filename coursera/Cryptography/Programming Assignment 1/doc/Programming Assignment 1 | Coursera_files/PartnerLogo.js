define("bundles/ondemand/components/PartnerLogo",["require","exports","module","react-with-addons","bundles/page/components/TrackedLink2","js/components/Imgix","i18n!nls/account-settings","css!./__styles__/PartnerLogo"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var r=i[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var r=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=function get(i,c,u){var r=!0;e:for(;r;){var t=i,s=c,a=u;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,s);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;i=n,c=s,u=a,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(a)}},e=require("react-with-addons"),o=require("bundles/page/components/TrackedLink2"),i=o.TrackedA,t=require("js/components/Imgix"),s=require("i18n!nls/account-settings");require("css!./__styles__/PartnerLogo");var a=function(o){function PartnerLogo(){_classCallCheck(this,PartnerLogo),n(Object.getPrototypeOf(PartnerLogo.prototype),"constructor",this).apply(this,arguments)}return _inherits(PartnerLogo,o),r(PartnerLogo,[{key:"render",value:function render(){return this.props.universityLink?e.createElement(i,{className:"nostyle",href:this.props.universityLink,target:"_blank",trackingName:"univ_logo"},e.createElement(t,{className:"rc-PartnerLogo bgcolor-white",src:this.props.thumbnail,alt:s("University Link")})):e.createElement(t,{className:"rc-PartnerLogo bgcolor-white bt3-hidden-xs",src:this.props.thumbnail,alt:t.DECORATIVE})}}],[{key:"propTypes",value:{thumbnail:e.PropTypes.string.isRequired,universityLink:e.PropTypes.string},enumerable:!0}]),PartnerLogo}(e.Component);module.exports=a});