define("bundles/ondemand/components/InstructorMessage",["require","exports","module","react-with-addons","underscore","react-bootstrap","vendor/cnpm/fluxible.v0-4/addons/connectToStores","bundles/ondemand/constants/InstructorMessageTypes","bundles/ondemand/actions/InstructorMessageActions","bundles/phoenix/components/ProfileImage","bundles/ondemand/shapes/InstructorMessageProfile","bundles/ui/components/CollapsibleMessage","bundles/ondemand/utils/onDemandTutorialViewsApi","bundles/iconfont/Icon","js/lib/coursera.store","pages/open-course/common/constants","css!bundles/ondemand/components/__styles__/InstructorMessage"],function(require,exports,module){"use strict";function _defaults(e,s){for(var r=Object.getOwnPropertyNames(s),t=0;t<r.length;t++){var n=r[t],o=Object.getOwnPropertyDescriptor(s,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n=function(){function defineProperties(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=function get(r,l,u){var n=!0;e:for(;n;){var t=r,a=l,i=u;n=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,a);if(void 0===e){var o=Object.getPrototypeOf(t);if(null===o)return void 0;r=o,l=a,u=i,n=!0,e=o=void 0;continue e}if("value"in e)return e.value;var s=e.get;if(void 0===s)return void 0;return s.call(i)}},e=require("react-with-addons"),_=require("underscore"),i=require("react-bootstrap"),h=i.OverlayTrigger,O=i.Tooltip,g=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),t=require("bundles/ondemand/constants/InstructorMessageTypes"),s=require("bundles/ondemand/actions/InstructorMessageActions"),b=s.getModuleMessage,p=s.getWelcomeMessage,d=s.getThankYouMessage,m=require("bundles/phoenix/components/ProfileImage"),a=require("bundles/ondemand/shapes/InstructorMessageProfile"),y=require("bundles/ui/components/CollapsibleMessage"),l=require("bundles/ondemand/utils/onDemandTutorialViewsApi"),f=require("bundles/iconfont/Icon"),o=require("js/lib/coursera.store"),v=require("pages/open-course/common/constants");require("css!bundles/ondemand/components/__styles__/InstructorMessage");var c=function getTutorialViewsKey(){var e=v.courseId;return"dismissedWelcomeMessage."+e},u=function(t){function InstructorImage(){_classCallCheck(this,InstructorImage),r(Object.getPrototypeOf(InstructorImage.prototype),"constructor",this).apply(this,arguments)}return _inherits(InstructorImage,t),n(InstructorImage,[{key:"render",value:function render(){var t=this.props.instructor;return e.createElement(m,{profileImageUrl:t.photo,fullName:t.fullName,width:40,height:40,imgParams:{auto:"fit",fit:"crop"},alt:this.props.alt})}}],[{key:"propTypes",value:{instructor:a.isRequired,alt:e.PropTypes.string},enumerable:!0}]),InstructorImage}(e.Component),M=function(t){function TooltipInstructorImage(){_classCallCheck(this,TooltipInstructorImage),r(Object.getPrototypeOf(TooltipInstructorImage.prototype),"constructor",this).apply(this,arguments)}return _inherits(TooltipInstructorImage,t),n(TooltipInstructorImage,[{key:"render",value:function render(){var t=this.props.instructor,n=e.createElement(O,null,t.fullName);return e.createElement(h,{placement:"top",overlay:n,key:t.id},e.createElement("div",{className:"instructor-image-container"},e.createElement(u,{instructor:t,alt:t.fullName})))}}],[{key:"propTypes",value:{instructor:a.isRequired},enumerable:!0}]),TooltipInstructorImage}(e.Component),I=function(s){function InstructorMessage(n,s){var e=this;_classCallCheck(this,InstructorMessage),r(Object.getPrototypeOf(InstructorMessage.prototype),"constructor",this).call(this,n,s),this.onToggleClick=function(){var t=o.get(e.getLocalStorageKey());o.set(e.getLocalStorageKey(),!t)},this.onCloseMessage=function(){e.props.type!==t.MODULE&&(e.setState({shouldDisplay:!1}),l.storeKey(c()))},this.state={shouldDisplay:this.props.type===t.MODULE}}return _inherits(InstructorMessage,s),n(InstructorMessage,null,[{key:"propTypes",value:{type:e.PropTypes.oneOf([t.WELCOME,t.MODULE,t.THANK_YOU]).isRequired,moduleId:e.PropTypes.string,message:e.PropTypes.string,instructors:e.PropTypes.arrayOf(a)},enumerable:!0},{key:"contextTypes",value:{executeAction:e.PropTypes.func.isRequired,week:e.PropTypes.number},enumerable:!0},{key:"defaultProps",value:{message:"",instructors:[]},enumerable:!0}]),n(InstructorMessage,[{key:"componentWillMount",value:function componentWillMount(){var e=this;this.props.moduleId?this.context.executeAction(b,{moduleId:this.props.moduleId}):this.props.type===t.WELCOME?this.context.executeAction(p):this.context.executeAction(d),this.props.type!==t.MODULE&&l.hasKey(c()).then(function(t){e.setState({shouldDisplay:!t})}).done()}},{key:"componentWillUnmount",value:function componentWillUnmount(){o.set(this.getLocalStorageKey(),!0)}},{key:"getLocalStorageKey",value:function getLocalStorageKey(){var t=this.props.type,e=this.props.moduleId;return e||(e=t),"messageHide"+e}},{key:"renderInstructors",value:function renderInstructors(){var t=this.props.instructors;if(1===t.length)return e.createElement("div",{className:"horizontal-box align-items-left align-items-vertical-center instructor-profile"},e.createElement(u,{instructor:t[0]}),e.createElement("p",{className:"headline-1-text instructor-name"},t[0].fullName));return e.createElement("div",{className:"horizontal-box align-items-left align-items-vertical-center instructor-profile"},t.map(function(t){return e.createElement(M,{instructor:t,key:t.id})}))}},{key:"render",value:function render(){var n=this.props,s=n.type,r=n.message,a=n.instructors;if(!this.state.shouldDisplay)return null;if((s===t.WELCOME||s===t.MODULE)&&!r)return null;var i=this.props.message.length>250;return e.createElement(y,{className:"rc-InstructorMessage",showToggle:i,onToggleClick:this.onToggleClick,cardSpacing:"cozy",isInitiallyCollapsed:o.get(this.getLocalStorageKey())},this.props.type!==t.MODULE&&e.createElement("button",{className:"nostyle dismiss",onClick:this.onCloseMessage},e.createElement(f,{name:"close",className:"color-secondary-text"})),a.length>0&&this.renderInstructors(),this.props.message.length>0&&e.createElement("div",{key:_("message_").uniqueId(),dangerouslySetInnerHTML:{__html:this.props.message}}))}}]),InstructorMessage}(e.Component);module.exports=g(I,["InstructorMessageStore"],function(n,e){var o=n.InstructorMessageStore,s=e.moduleId,r=e.type,a=r===t.THANK_YOU?"end":"start";return o.getMessage(a,s)})});