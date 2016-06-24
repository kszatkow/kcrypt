define("bundles/phoenix/models/AceEditor",["require","exports","module","jquery","brace"],function(require,exports,module){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function defineProperties(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),$=require("jquery"),n=require("brace"),e=3,t=16,r=1/0,o="ace/theme/tomorrow",s={wrap:80,tabSize:2,useWorker:!1,useSoftTabs:!0,minLines:e,maxLines:r,scrollPastEnd:!1,showInvisibles:!1,displayIndentGuides:!1},a=function(){function AceEditor(e){var u=this,t=e.el,h=e.value,i=e.language,l=e.readOnly,r=e.onChange,a=e.onFocus;_classCallCheck(this,AceEditor),this.el=t,this.editor=n.edit(t),this.editor.$blockScrolling=1,this.editor.setValue(h),this.editor.setTheme(o),this.editor.setOptions(s),this.editor.selection.clearSelection(),this.editor.setHighlightActiveLine(!1),i&&this.setLanguage(i),l&&this.editor.setReadOnly(!0),r&&this.editor.getSession().on("change",function(e){return r(u.value)}),a&&this.editor.on("focus",a)}return i(AceEditor,[{key:"setLanguage",value:function setLanguage(e){this.editor.getSession().setMode("ace/mode/"+e)}},{key:"resizeHeight",value:function resizeHeight(){var n=this.editor.getSession().getScreenLength(),r=this.editor.renderer.scrollBar.getWidth(),o=Math.max(this.editor.renderer.lineHeight,t),i=Math.max(n*o+r,t*e);return $(this.el).height(i),this.editor.resize(),i}},{key:"value",get:function get(){return this.editor.getValue()}}]),AceEditor}();module.exports=a});