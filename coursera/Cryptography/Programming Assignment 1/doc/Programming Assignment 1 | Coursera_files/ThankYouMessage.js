define("bundles/ondemand/components/ThankYouMessage",["require","exports","module","react-with-addons","bundles/ondemand/components/DeadlineMessage","bundles/ondemand/components/InstructorMessage","bundles/ondemand/constants/InstructorMessageTypes","pages/open-course/common/models/course","bundles/phoenix/lib/waitForStores","css!./__styles__/ThankYouMessage.css"],function(require,exports,module){"use strict";function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),t=0;t<s.length;t++){var n=s[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n=function(){function defineProperties(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(s,c,i){var n=!0;e:for(;n;){var t=s,a=c,u=i;n=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;s=o,c=a,i=u,n=!0,e=o=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(u)}},e=require("react-with-addons"),i=require("bundles/ondemand/components/DeadlineMessage"),r=i.CongratulationMessage,s=require("bundles/ondemand/components/InstructorMessage"),a=require("bundles/ondemand/constants/InstructorMessageTypes"),u=require("pages/open-course/common/models/course"),c=require("bundles/phoenix/lib/waitForStores");require("css!./__styles__/ThankYouMessage.css");var t=function(t){function ThankYouMessage(){_classCallCheck(this,ThankYouMessage),o(Object.getPrototypeOf(ThankYouMessage.prototype),"constructor",this).apply(this,arguments)}return _inherits(ThankYouMessage,t),n(ThankYouMessage,[{key:"render",value:function render(){return e.createElement("div",{className:"rc-ThankYouMessage vertical-box align-items-absolute-center styleguide"},e.createElement(s,{type:a.THANK_YOU},e.createElement(r,{hasCourseGradeLoaded:!0,hasPassedCourse:!0})))}}],[{key:"propTypes",value:{course:e.PropTypes.instanceOf(u).isRequired},enumerable:!0}]),ThankYouMessage}(e.Component);module.exports=c(t,["CourseStore"],function(e,n){var t=e.CourseStore;return{course:t.getMetadata()}}),module.exports.BaseComp=t});