define("bundles/ondemand/components/PurchaseVCButton",["require","exports","module","jsuri","react-with-addons","js/lib/coursera.redirect","js/lib/coursera.react-intl","bundles/payments-common/components/ReactPriceDisplay","i18n!nls/ondemand","pages/open-course/common/constants","bundles/phoenix/template/models/userAuthorization","bundles/payments/promises/createVCCart","bundles/payments/promises/productPrices"],function(require,exports,module){"use strict";function _defaults(e,o){for(var c=Object.getOwnPropertyNames(o),t=0;t<c.length;t++){var r=c[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var u=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),l=function get(c,a,u){var r=!0;e:for(;r;){var t=c,s=a,i=u;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,s);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;c=n,a=s,u=i,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(i)}},c=require("jsuri"),e=require("react-with-addons"),s=require("js/lib/coursera.redirect"),o=require("js/lib/coursera.react-intl"),i=o.FormattedMessage,a=require("bundles/payments-common/components/ReactPriceDisplay"),t=require("i18n!nls/ondemand"),r=require("pages/open-course/common/constants"),n=require("bundles/phoenix/template/models/userAuthorization"),p=require("bundles/payments/promises/createVCCart"),d=require("bundles/payments/promises/productPrices"),m=function(o){function PurchaseVCButton(){_classCallCheck(this,PurchaseVCButton),l(Object.getPrototypeOf(PurchaseVCButton.prototype),"constructor",this).apply(this,arguments),this.state={price:null},this.handlePurchaseClick=function(){n.get("authenticated")?p(r.courseId).then(function(e){var t=(new c).setPath("/payments/checkout").addQueryParam("cartId",e.get("id"));s.setLocation(t)}).fail(function(e){if(!e.responseJSON)throw e}).done():n.ensureAuthenticated()}}return _inherits(PurchaseVCButton,o),u(PurchaseVCButton,[{key:"componentDidMount",value:function componentDidMount(){this.getProductPrices()}},{key:"getProductPrices",value:function getProductPrices(){var e=this;d.getPriceForVC({courseId:r.courseId}).then(function(t){return e.setState({price:t})}).fail(function(e){if(!e.responseJSON)throw e}).done()}},{key:"render",value:function render(){return e.createElement("div",{className:"rc-PurchaseButton"},e.createElement("button",{className:"primary cozy",onClick:this.handlePurchaseClick},this.state.price?e.createElement(i,{message:t("Purchase for {vcPrice}"),vcPrice:e.createElement(a,{value:this.state.price.getDisplayAmount(),currency:this.state.price.getDisplayCurrencyCode()})}):t("Purchase now")))}}]),PurchaseVCButton}(e.Component);module.exports=m});