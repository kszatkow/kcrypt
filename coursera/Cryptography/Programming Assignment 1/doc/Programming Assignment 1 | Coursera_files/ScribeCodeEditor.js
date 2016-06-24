define("bundles/scribe-plugins/scribe-plugin-code-command/components/ScribeCodeEditor",["require","exports","module","underscore","react-with-addons","bundles/scribe-plugins/scribe-plugin-code-command/components/ScribeCodeEditorToolbar","bundles/scribe-plugins/scribe-plugin-code-command/components/ScribeCodeEditorRemoveButton","bundles/CMLConverter/constants/codeLanguages"],function(require,exports,module){"use strict";function _defaults(e,t){for(var c=Object.getOwnPropertyNames(t),n=0;n<c.length;n++){var o=c[n],r=Object.getOwnPropertyDescriptor(t,o);r&&r.configurable&&void 0===e[o]&&Object.defineProperty(e,o,r)}return e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):_defaults(n,e))}var n=function(){function defineProperties(r,o){for(var n=0;n<o.length;n++){var e=o[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(e,n,o){return n&&defineProperties(e.prototype,n),o&&defineProperties(e,o),e}}(),o=function get(c,a,s){var o=!0;e:for(;o;){var n=c,i=a,u=s;o=!1,null===n&&(n=Function.prototype);var e=Object.getOwnPropertyDescriptor(n,i);if(void 0===e){var r=Object.getPrototypeOf(n);if(null===r)return void 0;c=r,a=i,s=u,o=!0,e=r=void 0;continue e}if("value"in e)return e.value;var t=e.get;if(void 0===t)return void 0;return t.call(u)}},_=require("underscore"),e=require("react-with-addons"),r=require("bundles/scribe-plugins/scribe-plugin-code-command/components/ScribeCodeEditorToolbar"),t=require("bundles/scribe-plugins/scribe-plugin-code-command/components/ScribeCodeEditorRemoveButton"),c=require("bundles/CMLConverter/constants/codeLanguages"),i=function(i){function ScribeCodeEditor(){_classCallCheck(this,ScribeCodeEditor),o(Object.getPrototypeOf(ScribeCodeEditor.prototype),"constructor",this).apply(this,arguments)}return _inherits(ScribeCodeEditor,i),n(ScribeCodeEditor,[{key:"render",value:function render(){var n=this.props,o=n.languageValue,c=n.onRemove,i=n.onLanguageChange;return e.createElement("div",{className:"rc-ScribeCodeEditor"},e.createElement(t,{onClick:c}),e.createElement(r,{languageValue:o,onLanguageChange:i}))}}],[{key:"propTypes",value:{languageValue:e.PropTypes.oneOf(_(c).pluck("value")),onRemove:e.PropTypes.func.isRequired,onLanguageChange:e.PropTypes.func.isRequired},enumerable:!0}]),ScribeCodeEditor}(e.Component);module.exports=i});