define("bundles/CMLConverter/HTMLToCMLConverter/Heading",["require","exports","module","underscore","./Element","./InlineElement","bundles/CMLConverter/CMLParser"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var r=i[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var e=function get(i,l,a){var r=!0;e:for(;r;){var t=i,c=l,u=a;r=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,c);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;i=n,l=c,a=u,r=!0,e=n=void 0;continue e}if("value"in e)return e.value;var o=e.get;if(void 0===o)return void 0;return o.call(u)}},_=require("underscore"),t=require("./Element"),r=require("./InlineElement"),n=require("bundles/CMLConverter/CMLParser"),o=function(t){function Heading(i,c,t){var o=this;_classCallCheck(this,Heading),e(Object.getPrototypeOf(Heading.prototype),"constructor",this).call(this,i,c,"h"+t,"heading",{level:t}),_(this.childNodes).each(function(e){var t=new r(o.doc,e);o.block.appendChild(t.block)}),n.hasMath(this.block)&&this.setBlockAttribute("hasMath",!0)}return _inherits(Heading,t),Heading}(t);module.exports=o});