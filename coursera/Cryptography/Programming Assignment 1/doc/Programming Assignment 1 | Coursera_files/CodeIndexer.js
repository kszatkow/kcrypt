define("bundles/scribe-plugins/scribe-plugin-code-command/models/CodeIndexer",["require","exports","module","jquery"],function(require,exports,module){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var e=function(){function defineProperties(r,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),$=require("jquery"),t=function(){function CodeIndexer(e){_classCallCheck(this,CodeIndexer),this.scribe=e,this.aceEditors={},this.focusedCodeElement=null}return e(CodeIndexer,[{key:"getAllCodeElements",value:function getAllCodeElements(){return $(this.scribe.el).find("pre")}},{key:"getCodeElementAtIndex",value:function getCodeElementAtIndex(e){return this.getAllCodeElements().get(e)}},{key:"setFocusOnCodeElement",value:function setFocusOnCodeElement(e){this.focusedCodeElement=e}},{key:"getAceEditorAtIndex",value:function getAceEditorAtIndex(e){return this.aceEditors[e]}},{key:"setAceEditorAtIndex",value:function setAceEditorAtIndex(e,t){this.aceEditors[t]=e}},{key:"clearAceEditorCache",value:function clearAceEditorCache(){this.aceEditors={}}}]),CodeIndexer}();module.exports=t});