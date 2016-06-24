define("bundles/ondemand/components/ItemLayoutHandler",["require","exports","module","underscore","js/lib/timing","react-with-addons","./ItemLayout","bundles/phoenix/lib/waitForStores"],function(require,exports,module){"use strict";function _defaults(e,n){for(var i=Object.getOwnPropertyNames(n),t=0;t<i.length;t++){var r=i[t],o=Object.getOwnPropertyDescriptor(n,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var r=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},o=function(){function defineProperties(o,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),s=function get(i,a,c){var r=!0;e:for(;r;){var t=i,u=a,s=c;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,u);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;i=o,a=u,c=s,r=!0,e=o=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(s)}},_=require("underscore"),n=require("js/lib/timing"),e=require("react-with-addons"),i=require("./ItemLayout"),u=require("bundles/phoenix/lib/waitForStores"),t=function(t){function ItemLayoutHandler(){_classCallCheck(this,ItemLayoutHandler),s(Object.getPrototypeOf(ItemLayoutHandler.prototype),"constructor",this).apply(this,arguments)}return _inherits(ItemLayoutHandler,t),o(ItemLayoutHandler,[{key:"componentDidMount",value:function componentDidMount(){n.setMarkOnce("itemLayoutHandlerMounted",!0)}},{key:"render",value:function render(){var o=this.props.courseMaterials,t=o.getItemMetadata(this.context.router.params.item_id);return e.createElement(i,null,this.props.children&&e.cloneElement(this.props.children,r({},_(this.props).omit("children"),{itemMetadata:t,key:t.getId()})))}}],[{key:"propTypes",value:{courseMaterials:e.PropTypes.object.isRequired,course:e.PropTypes.object.isRequired,courseProgress:e.PropTypes.object.isRequired,children:e.PropTypes.element},enumerable:!0},{key:"contextTypes",value:{router:e.PropTypes.object.isRequired},enumerable:!0}]),ItemLayoutHandler}(e.Component);module.exports=u(t,["CourseStore","ProgressStore"],function(e){var t=e.CourseStore,r=e.ProgressStore;return{courseMaterials:t.getMaterials(),course:t.getMetadata(),courseProgress:r.courseProgress}}),module.exports.BaseComp=t});