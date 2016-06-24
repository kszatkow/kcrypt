define("bundles/ondemand/components/DeadlineMessage",["require","exports","module","react-bootstrap","classnames","moment","react-with-addons","underscore","bundles/iconfont/Icon","bundles/ondemand/components/CongratulationBanner","bundles/ondemand/components/CourseCompleteMessage","bundles/ondemand/components/DeadlinesResetButton","bundles/ondemand/components/enrollBox/SessionSwitchButton","bundles/page/components/TrackedDiv","bundles/ondemand/actions/SessionActions","js/lib/coursera.react-intl","js/lib/moment.validator","i18n!nls/ondemand","css!bundles/ondemand/components/__styles__/DeadlineMessage","vendor/cnpm/fluxible.v0-4/addons/connectToStores","bundles/ondemand/constants/PeerReview"],function(require,exports,module){"use strict";function _defaults(e,r){for(var o=Object.getOwnPropertyNames(r),s=0;s<o.length;s++){var n=o[s],t=Object.getOwnPropertyDescriptor(r,n);t&&t.configurable&&void 0===e[n]&&Object.defineProperty(e,n,t)}return e}function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function _inherits(s,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):_defaults(s,e))}var c=function(){function defineProperties(t,n){for(var s=0;s<n.length;s++){var e=n[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(e,s,n){return s&&defineProperties(e.prototype,s),n&&defineProperties(e,n),e}}(),u=function get(o,l,p){var n=!0;e:for(;n;){var s=o,a=l,i=p;n=!1,null===s&&(s=Function.prototype);var e=Object.getOwnPropertyDescriptor(s,a);if(void 0===e){var t=Object.getPrototypeOf(s);if(null===t)return void 0;o=t,l=a,p=i,n=!0,e=t=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(i)}},l=require("react-bootstrap"),o=l.OverlayTrigger,a=l.Tooltip,k=require("classnames"),i=require("moment"),e=require("react-with-addons"),_=require("underscore"),n=require("bundles/iconfont/Icon"),f=require("bundles/ondemand/components/CongratulationBanner"),w=require("bundles/ondemand/components/CourseCompleteMessage"),P=require("bundles/ondemand/components/DeadlinesResetButton"),z=require("bundles/ondemand/components/enrollBox/SessionSwitchButton"),b=require("bundles/page/components/TrackedDiv"),g=require("bundles/ondemand/actions/SessionActions"),h=g.updateEnrollableAndFollowingSessions,y=require("js/lib/coursera.react-intl"),r=y.FormattedHTMLMessage,m=require("js/lib/moment.validator"),s=require("i18n!nls/ondemand");require("css!bundles/ondemand/components/__styles__/DeadlineMessage");var v=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),E=require("bundles/ondemand/constants/PeerReview"),T=E.PEER_REVIEW_SUGGEST_NEXT_SESSION_AFTER_DAYS,t=function(s){function MessageContainer(){_classCallCheck(this,MessageContainer),u(Object.getPrototypeOf(MessageContainer.prototype),"constructor",this).apply(this,arguments)}return _inherits(MessageContainer,s),c(MessageContainer,[{key:"render",value:function render(){return e.createElement(b,{className:k("rc-DeadlineMessage","od-section",this.props.className),trackingName:"instructor_message_quiz_reminder",data:{week:this.props.week}},e.createElement("div",{className:"horizontal-box align-items-vertical-center deadline-container"},this.props.children))}}],[{key:"propTypes",value:{week:e.PropTypes.number,className:e.PropTypes.string,children:e.PropTypes.node},enumerable:!0}]),MessageContainer}(e.Component),d=function areAllPeerAssessSubmitted(e){return!_(e).findWhere({submitted:!1})};exports.SessionDeadlineMessage=e.createClass({displayName:"SessionDeadlineMessage",propTypes:{date:e.PropTypes.string.isRequired,time:e.PropTypes.string.isRequired,timezone:e.PropTypes.string.isRequired,week:e.PropTypes.number.isRequired,peerReviewsInfo:e.PropTypes.array},render:function render(){var i=e.createElement(a,null,e.createElement("span",null,s("Complete each week's assignments by the deadline."))),n=s("You must submit this week's assignments by\n      <span class='od-text-bold'>{date}, {time} {timezone}</span>.");return this.props.peerReviewsInfo.length&&!d(this.props.peerReviewsInfo)&&(n=s("This week has assignments that will be reviewed by your peers. If you submit late,\n        you might not get a grade. The deadline is\n        <span class='od-text-bold'>{date}, {time} {timezone}</span>")),e.createElement(t,{week:this.props.week},e.createElement("span",{className:"flex-1"},e.createElement("span",{className:"od-text-bold"},s("Deadline:")," "),e.createElement(r,{message:n,date:this.props.date,time:this.props.time,timezone:this.props.timezone})),e.createElement(o,{placement:"left",overlay:i},e.createElement("i",{className:"cif-question-circle"})))}});var R=function(l){function SessionDeadlineOverdueMessage(){_classCallCheck(this,SessionDeadlineOverdueMessage),u(Object.getPrototypeOf(SessionDeadlineOverdueMessage.prototype),"constructor",this).apply(this,arguments)}return _inherits(SessionDeadlineOverdueMessage,l),c(SessionDeadlineOverdueMessage,[{key:"componentDidMount",value:function componentDidMount(){this.props.enrollableSession||this.context.executeAction(h,this.props.sessionId)}},{key:"render",value:function render(){var p=!1,m=e.createElement(a,null,e.createElement("span",null,s("\nYou can still pass an assignment after the deadline.\nYou may no longer submit assignments after the course ends."))),l=s("You can still pass! Remember, you need to pass these assignments\n      before the course ends on {sessionEndDate}, {sessionEndTime} {timezone}.");return this.props.peerReviewsInfo.length&&!d(this.props.peerReviewsInfo)&&(i.duration(i().diff(i(this.props.date))).asDays()>T?this.props.enrollableSession?(l=s("This week has assignments that require peer reviews,\n            but the class has continued to later weeks.\n            Switch sessions to submit before the new deadline and receive reviews from classmates.\n            Don't worry, your progress will be saved!"),p=!0):l=s("This week has assignments that require peer reviews,\n            but the class has continued to later weeks.\n            Please check back for an upcoming session of the course to continue\n            with the assignment and get grades on time."):l=s("This week has assignments that must be reviewed by peers.\n          Please submit as soon as possible or there may not be classmates who can review your work.")),e.createElement(t,{week:this.props.week},e.createElement(n,{name:"warning"}),e.createElement("span",{className:"flex-1"},e.createElement("span",{className:"od-text-bold"},s("Assignments Overdue:")," "),e.createElement(r,{message:l,sessionEndDate:this.props.sessionEndDate,sessionEndTime:this.props.sessionEndTime,timezone:this.props.timezone})),p&&e.createElement(z,null),!this.props.peerReviewsInfo.length&&e.createElement(o,{placement:"left",overlay:m},e.createElement("i",{className:"cif-question-circle"})))}}],[{key:"propTypes",value:{date:e.PropTypes.string.isRequired,time:e.PropTypes.string.isRequired,timezone:e.PropTypes.string.isRequired,week:e.PropTypes.number.isRequired,peerReviewsInfo:e.PropTypes.array,sessionEndDate:e.PropTypes.string.isRequired,sessionEndTime:e.PropTypes.string.isRequired,enrollableSession:e.PropTypes.object,sessionId:e.PropTypes.string},enumerable:!0},{key:"contextTypes",value:{executeAction:e.PropTypes.func.isRequired},enumerable:!0}]),SessionDeadlineOverdueMessage}(e.Component);exports.SessionDeadlineOverdueMessage=_.compose(v(["SessionStore"],function(s,n){var e=s.SessionStore;return{enrollableSession:e.getEnrollableSession(),sessionId:e.getSessionId()}}))(R),exports.ReminderMessage=e.createClass({displayName:"ReminderMessage",propTypes:{date:m.isRequired,numberOfQuizzes:e.PropTypes.number.isRequired,time:m.isRequired,timezone:e.PropTypes.string.isRequired,week:e.PropTypes.number.isRequired},render:function render(){return e.createElement(t,{week:this.props.week},e.createElement(n,{name:"warning"}),e.createElement(r,{message:s("\n  Remember, your {numQuizzes, plural, =1 {assignment } other {assignments }}\n  {numQuizzes, plural, =1 {is} other {are}} <span class='od-text-bold'> due on {date} at {time} {timezone}.</span>"),numQuizzes:this.props.numberOfQuizzes,date:this.props.date,time:this.props.time,timezone:this.props.timezone}))}}),exports.OverdueMessage=e.createClass({displayName:"OverdueMessage",propTypes:{date:e.PropTypes.string.isRequired,time:e.PropTypes.string.isRequired,timezone:e.PropTypes.string.isRequired,week:e.PropTypes.number.isRequired},render:function render(){return e.createElement(t,{week:this.props.week},e.createElement(n,{name:"warning"}),e.createElement("span",{className:"flex-1"},e.createElement(r,{message:s("\n<span class='od-text-bold'>Assignments Overdue:&nbsp;</span>\nLooks like you're a bit behind schedule, but you can still get caught up!"),date:this.props.date,time:this.props.time,timezone:this.props.timezone})),e.createElement(P,null))}}),exports.CongratulationMessage=e.createClass({displayName:"CongratulationMessage",propTypes:{week:e.PropTypes.number,hasPassedCourse:e.PropTypes.bool.isRequired},render:function render(){return this.props.hasPassedCourse?e.createElement(t,null,e.createElement(n,{name:"info"}),e.createElement(w,{hasPassedCourse:this.props.hasPassedCourse})):e.createElement(t,{week:this.props.week},e.createElement(n,{name:"info"}),e.createElement(f,{week:this.props.week}))}});var p=function DeferredDeadlineMessage(i){var l=i.date,p=i.time,m=i.timezone,c=i.name,u=i.link,d=i.isAlert,b=e.createElement(a,null,e.createElement("span",null,s("Complete each week's assignments by the deadline."))),g=s("You must submit <a href={link} target=\"_blank\">{name}</a> by\n    <span class='od-text-bold'>{date}, {time} {timezone}</span>.");return e.createElement(t,{week:1},d?e.createElement(n,{name:"warning"}):e.createElement(n,{name:"info"}),e.createElement("span",{className:"flex-1"},e.createElement(r,{message:g,date:l,time:p,timezone:m,name:c,link:u})),e.createElement(o,{placement:"left",overlay:b},e.createElement("i",{className:"cif-question-circle"})))};p.propTypes={date:e.PropTypes.string,time:e.PropTypes.string,timezone:e.PropTypes.string,name:e.PropTypes.string,link:e.PropTypes.string,isAlert:e.PropTypes.bool},exports.DeferredDeadlineMessage=p});