define("bundles/ondemand/components/reading/Reading",["require","exports","module","react-with-addons","bundles/phoenix/components/CML","bundles/CMLConverter/CMLVariableNames","bundles/ondemand/components/reading/ReadingCompleteButton","bundles/phoenix/lib/waitForStores","bundles/phoenix/template/models/userIdentity","pages/open-course/common/models/itemMetadata","pages/open-course/supplement/utils/supplementProgressApi"],function(require,exports,module){"use strict";function _defaults(e,n){for(var i=Object.getOwnPropertyNames(n),t=0;t<i.length;t++){var r=i[t],o=Object.getOwnPropertyDescriptor(n,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var s=function(){function defineProperties(o,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),n=function get(i,u,p){var r=!0;e:for(;r;){var t=i,a=u,s=p;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;i=o,u=a,p=s,r=!0,e=o=void 0;continue e}if("value"in e)return e.value;var n=e.get;if(void 0===n)return void 0;return n.call(s)}},e=require("react-with-addons"),o=require("bundles/phoenix/components/CML"),t=require("bundles/CMLConverter/CMLVariableNames"),i=require("bundles/ondemand/components/reading/ReadingCompleteButton"),a=require("bundles/phoenix/lib/waitForStores"),r=require("bundles/phoenix/template/models/userIdentity"),u=require("pages/open-course/common/models/itemMetadata"),p=require("pages/open-course/supplement/utils/supplementProgressApi"),l=function(a){function Reading(){_classCallCheck(this,Reading),n(Object.getPrototypeOf(Reading.prototype),"constructor",this).apply(this,arguments)}return _inherits(Reading,a),s(Reading,[{key:"componentDidMount",value:function componentDidMount(){p.markStarted(this.props.itemMetadata.getId())}},{key:"getVariableData",value:function getVariableData(){var e;return e={},_defineProperty(e,t.NAME,r.get("full_name")),_defineProperty(e,t.USER_ID,r.get("id")),e}},{key:"render",value:function render(){return e.createElement("div",null,e.createElement(o,{className:"rc-Reading",shouldApplyTracking:!0,cml:this.props.readingCml,variableData:this.getVariableData()}),e.createElement(i,{itemMetadata:this.props.itemMetadata,courseProgress:this.props.courseProgress,isComplete:this.props.isComplete,itemId:this.props.itemMetadata.getId()}))}}],[{key:"propTypes",value:{itemMetadata:e.PropTypes.instanceOf(u).isRequired,isComplete:e.PropTypes.bool.isRequired,readingCml:e.PropTypes.object.isRequired,courseProgress:e.PropTypes.object.isRequired},enumerable:!0},{key:"contextTypes",value:{executeAction:e.PropTypes.func.isRequired},enumerable:!0}]),Reading}(e.Component);module.exports=a(l,["ProgressStore"],function(t,r){var e=t.ProgressStore;return{courseProgress:e.courseProgress,isComplete:e.isItemComplete(r.itemMetadata)}})});