define("bundles/ondemand/components/reportCard/CurrentWeekCard",["require","exports","module","react-with-addons","bundles/ondemand/components/reportCard/WeekRow","vendor/cnpm/fluxible.v0-4/addons/connectToStores"],function(require,exports,module){"use strict";function _defaults(e,n){for(var u=Object.getOwnPropertyNames(n),r=0;r<u.length;r++){var t=u[r],o=Object.getOwnPropertyDescriptor(n,t);o&&o.configurable&&void 0===e[t]&&Object.defineProperty(e,t,o)}return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):_defaults(r,e))}var r=function(){function defineProperties(o,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,r,t){return r&&defineProperties(e.prototype,r),t&&defineProperties(e,t),e}}(),t=function get(u,c,p){var t=!0;e:for(;t;){var r=u,i=c,a=p;t=!1,null===r&&(r=Function.prototype);var e=Object.getOwnPropertyDescriptor(r,i);if(void 0===e){var o=Object.getPrototypeOf(r);if(null===o)return void 0;u=o,c=i,p=a,t=!0,e=o=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(a)}},e=require("react-with-addons"),o=require("bundles/ondemand/components/reportCard/WeekRow"),n=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),u=function(n){function CurrentWeekCard(){_classCallCheck(this,CurrentWeekCard),t(Object.getPrototypeOf(CurrentWeekCard.prototype),"constructor",this).apply(this,arguments)}return _inherits(CurrentWeekCard,n),r(CurrentWeekCard,[{key:"render",value:function render(){var r=this.props,t=r.currentWeek,n=r.moduleIds;return e.createElement(o,{isCurrentWeek:!0,week:t,moduleIds:n})}}],[{key:"propTypes",value:{currentWeek:e.PropTypes.number.isRequired,moduleIds:e.PropTypes.arrayOf(e.PropTypes.string).isRequired},enumerable:!0},{key:"defaultProps",value:{periods:[]},enumerable:!0}]),CurrentWeekCard}(e.Component);module.exports=n(u,["CourseScheduleStore"],function(t,o){var e=t.CourseScheduleStore,r=e.getCurrentWeek();return{currentWeek:r,moduleIds:e.getModuleIdsForWeek(r)}})});