define("bundles/ondemand/components/banners/OverrideBanner",["require","exports","module","react-with-addons","bundles/ondemand/utils/courseModeOverrideUtils","bundles/phoenix/template/models/userIdentity","vendor/cnpm/fluxible.v0-4/addons/connectToStores","css!./__styles__/OverrideBanner"],function(require,exports,module){"use strict";function _defaults(e,t){for(var s=Object.getOwnPropertyNames(t),r=0;r<s.length;r++){var o=s[r],n=Object.getOwnPropertyDescriptor(t,o);n&&n.configurable&&void 0===e[o]&&Object.defineProperty(e,o,n)}return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):_defaults(r,e))}var n=function(){function defineProperties(n,o){for(var r=0;r<o.length;r++){var e=o[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,r,o){return r&&defineProperties(e.prototype,r),o&&defineProperties(e,o),e}}(),t=function get(s,l,u){var o=!0;e:for(;o;){var r=s,i=l,a=u;o=!1,null===r&&(r=Function.prototype);var e=Object.getOwnPropertyDescriptor(r,i);if(void 0===e){var n=Object.getPrototypeOf(r);if(null===n)return void 0;s=n,l=i,u=a,o=!0,e=n=void 0;continue e}if("value"in e)return e.value;var t=e.get;if(void 0===t)return void 0;return t.call(a)}},e=require("react-with-addons"),r=require("bundles/ondemand/utils/courseModeOverrideUtils"),s=r.getCourseModeOverride,i=r.courseModes,o=require("bundles/phoenix/template/models/userIdentity"),a=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores");require("css!./__styles__/OverrideBanner");var l=function(r){function OverrideBanner(){_classCallCheck(this,OverrideBanner),t(Object.getPrototypeOf(OverrideBanner.prototype),"constructor",this).apply(this,arguments)}return _inherits(OverrideBanner,r),n(OverrideBanner,[{key:"render",value:function render(){var r=o.get("authenticated")&&(o.get("is_superuser")||this.props.hasTeachingRole);if(!r||!this.props.isPreEnrollEnabledForCourse)return null;if(s()===i.PRE_ENROLL)return e.createElement("div",{className:"rc-OverrideBanner"},e.createElement("span",{className:"body-2-text"},"This course is in Pre-Enroll mode.")," To preview course content, switch to On-Demand mode using the Course Mode tool.");var n=this.props.isSessionsEnabled?"Sessions":"On-Demand";return e.createElement("div",{className:"rc-OverrideBanner"},e.createElement("span",{className:"body-2-text"},"You are viewing ",n," mode.")," You are able to enroll and preview course content due to your admin privileges. Learners are in pre-enroll mode and do not yet have access.")}}],[{key:"propTypes",value:{isPreEnrollEnabledForCourse:e.PropTypes.bool.isRequired,hasTeachingRole:e.PropTypes.bool,isSessionsEnabled:e.PropTypes.bool},enumerable:!0}]),OverrideBanner}(e.Component);module.exports=a(l,["CourseStore","CourseMembershipStore","SessionStore"],function(e){var r=e.CourseStore,o=e.CourseMembershipStore,n=e.SessionStore;return{isPreEnrollEnabledForCourse:r.isPreEnrollEnabledForCourse(),hasTeachingRole:o.hasTeachingRole(),isSessionsEnabled:n.isSessionsEnabled()}})});