define("bundles/ondemand/components/item/SectionButtons",["require","exports","module","react-with-addons","classnames","bundles/page/components/TrackedLink2","bundles/ondemand/utils/url","i18n!nls/ondemand","pages/open-course/common/models/lesson"],function(require,exports,module){"use strict";function _defaults(e,s){for(var o=Object.getOwnPropertyNames(s),t=0;t<o.length;t++){var r=o[t],n=Object.getOwnPropertyDescriptor(s,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var u=function(){function defineProperties(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),p=function get(o,u,p){var r=!0;e:for(;r;){var t=o,i=u,a=p;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,i);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;o=n,u=i,p=a,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var s=e.get;if(void 0===s)return void 0;return s.call(a)}},e=require("react-with-addons"),c=require("classnames"),l=require("bundles/page/components/TrackedLink2"),a=l.TrackedReactLink,s=require("bundles/ondemand/utils/url"),n=s.getWeekUrl,o=s.getHomeUrl,r=require("i18n!nls/ondemand"),i=require("pages/open-course/common/models/lesson"),t=function(t){function SectionButton(){_classCallCheck(this,SectionButton),p(Object.getPrototypeOf(SectionButton.prototype),"constructor",this).apply(this,arguments)}return _inherits(SectionButton,t),u(SectionButton,[{key:"render",value:function render(){return e.createElement(a,{className:c("rc-SectionButton","nostyle","flex-1",{"is-previous":this.props.isPrevious}),href:this.props.url,onClick:this.props.eventHandler,trackingName:this.props.trackingName,data:this.props.data},e.createElement("span",{className:"caption-text color-secondary-text"},this.props.text))}}],[{key:"propTypes",value:{isPrevious:e.PropTypes.bool.isRequired,url:e.PropTypes.string.isRequired,text:e.PropTypes.string.isRequired,eventHandler:e.PropTypes.func,trackingName:e.PropTypes.string.isRequired,data:e.PropTypes.object},enumerable:!0},{key:"defaultProps",value:{onLinkClick:function onLinkClick(){}},enumerable:!0}]),SectionButton}(e.Component);exports.PrevSectionButton=e.createClass({displayName:"PrevSectionButton",propTypes:{lessonNumber:e.PropTypes.number.isRequired,lessons:e.PropTypes.arrayOf(e.PropTypes.instanceOf(i)).isRequired,weekNumber:e.PropTypes.number.isRequired,numWeeks:e.PropTypes.number.isRequired},render:function render(){var i=this.props,a=i.lessonNumber,u=i.weekNumber,m=i.lessons;if(a>1){var s=m[a-2],p=s.isItemGroupLesson()&&s.getItemGroups().at(0),c=s.getItemMetadatas().last(),d=p&&p.getLink()||c&&c.getLink()||n(this.props.weekNumber);return e.createElement(t,{isPrevious:!0,url:d,text:r("Previous Lesson"),trackingName:"item_side_nav_prev_lession",data:{prevLessonId:s.get("id")}})}if(u>1){var l=u-1;return e.createElement(t,{isPrevious:!0,url:n(l),text:r("Previous Week"),trackingName:"item_side_nav_prev_week",data:{prevWeek:l}})}return e.createElement(t,{isPrevious:!0,url:o(),text:r("Course Home"),trackingName:"item_side_nav_back_to_home"})}}),exports.NextSectionButton=e.createClass({displayName:"NextSectionButton",propTypes:{lessonNumber:e.PropTypes.number.isRequired,lessons:e.PropTypes.arrayOf(e.PropTypes.instanceOf(i)).isRequired,weekNumber:e.PropTypes.number.isRequired,numWeeks:e.PropTypes.number.isRequired},render:function render(){var s=this.props,u=s.lessonNumber,p=s.weekNumber,c=s.lessons,d=s.numWeeks;if(u<c.length){var i=c[u],l=i.isItemGroupLesson()&&i.getItemGroups().at(0),m=i.getItemMetadatas().first(),v=l&&l.getLink()||m&&m.getLink()||n(this.props.weekNumber);return e.createElement(t,{isPrevious:!1,url:v,text:r("Next Lesson"),trackingName:"item_side_nav_next_lession",data:{nextLessonId:i.get("id")}})}if(d>p){var a=p+1;return e.createElement(t,{isPrevious:!1,url:n(a),text:r("Next Week"),trackingName:"item_side_nav_next_week",data:{nextWeek:a}})}return e.createElement(t,{isPrevious:!1,url:o(),text:r("Course Home"),trackingName:"item_side_nav_back_to_home"})}})});