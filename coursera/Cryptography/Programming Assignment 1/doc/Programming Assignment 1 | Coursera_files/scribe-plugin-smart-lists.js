define("bundles/vendor/scribe-plugins/scribe-plugin-smart-lists",[],function(){return function(){function isUnorderedListChar(e){return"*"===e||"-"===e||"•"===e}var e={32:"Space",42:"*",45:"-",46:".",49:"1",8226:"•"};return function(n){function removeSelectedTextNode(){var i=new n.api.Selection,t=i.selection.anchorNode,e;if(t.nodeType===Node.TEXT_NODE?e=t:t.firstChild.nodeType===Node.TEXT_NODE&&(e=t.firstChild),!e)throw new Error("Cannot empty non-text node!");var r=e.parentNode;e.previousSibling&&r.removeChild(e.previousSibling),r.removeChild(e)}function input(s){var a;i=t,t=r,r=e[s.charCode];var c=new n.api.Selection,o=c.range.commonAncestorContainer,d=findBlockContainer(o);if(d&&"P"===d.tagName){var u=isUnorderedListChar(o.textContent[0]),l=1===c.range.endOffset;isUnorderedListChar(t)&&"Space"===r&&u&&l&&(a="insertUnorderedList");var p="1."===[o.previousSibling&&o.previousSibling.textContent,o.textContent].join("").slice(0,2);"1"===i&&"."===t&&"Space"===r&&p&&(a="insertOrderedList")}a&&(s.preventDefault(),n.transactionManager.run(function(){n.getCommand(a).execute(),removeSelectedTextNode()}))}function findBlockContainer(e){for(;e&&!n.element.isBlockElement(e);)e=e.parentNode;return e}var i,t,r;n.el.addEventListener("keypress",input)}}});