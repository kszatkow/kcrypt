define("bundles/ondemand/components/item/EndOfCourseNpsModal",["require","exports","module","react-with-addons","bundles/phoenix/lib/waitForStores","bundles/ondemand/components/common/NpsModal"],function(require,exports,module){"use strict";function _defaults(e,n){for(var u=Object.getOwnPropertyNames(n),t=0;t<u.length;t++){var o=u[t],r=Object.getOwnPropertyDescriptor(n,o);r&&r.configurable&&void 0===e[o]&&Object.defineProperty(e,o,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=function(){function defineProperties(r,o){for(var t=0;t<o.length;t++){var e=o[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),o=function get(u,i,c){var o=!0;e:for(;o;){var t=u,a=i,s=c;o=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var r=Object.getPrototypeOf(t);if(null===r)return void 0;u=r,i=a,c=s,o=!0,e=r=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(s)}},e=require("react-with-addons"),r=require("bundles/phoenix/lib/waitForStores"),n=require("bundles/ondemand/components/common/NpsModal"),u=function(r){function EndOfCourseNpsModal(){_classCallCheck(this,EndOfCourseNpsModal),o(Object.getPrototypeOf(EndOfCourseNpsModal.prototype),"constructor",this).apply(this,arguments)}return _inherits(EndOfCourseNpsModal,r),t(EndOfCourseNpsModal,[{key:"render",value:function render(){return this.props.hasPassedCourse?e.createElement(n,{feedbackSystem:"NPS_END_OF_COURSE",followupSurveyLink:"https://www.surveymonkey.com/r/FCPMXC2"}):null}}],[{key:"propTypes",value:{hasPassedCourse:e.PropTypes.bool},enumerable:!0}]),EndOfCourseNpsModal}(e.Component);module.exports=r(u,["CourseViewGradeStore"],function(e){var t=e.CourseViewGradeStore;return{hasPassedCourse:t.hasPassedCourse()}})});