define("bundles/scribe-plugins/scribe-plugin-asset-command",["require","exports","module","react-with-addons","react-dom","js/lib/AssetManager","./scribe-plugin-asset-command/AssetUtils","bundles/asset-admin/components/AssetAdminModal"],function(require,exports,module){"use strict";var t=require("react-with-addons"),n=require("react-dom"),o=require("js/lib/AssetManager"),e=require("./scribe-plugin-asset-command/AssetUtils"),i=require("bundles/asset-admin/components/AssetAdminModal");module.exports=function(a){var s=null;return function(r){function findBlockContainer(e){for(;e&&!r.element.isBlockElement(e);)e=e.parentNode;return e}function isEmpty(e){var n=e.innerText||e.textContent;return""===n.trim()}function onSelect(t){r.transactionManager.run(function(){e.insertAsset(r,l,d,t)}),n.unmountComponentAtNode(s)}function onCancel(){n.unmountComponentAtNode(s)}function findSelectedElement(){var e=new r.api.Selection,n=e.range;return findBlockContainer(n.endContainer)}function handleBackspace(n){r.transactionManager.run(function(){var s=new r.api.Selection,a=s.range,t=findBlockContainer(a.endContainer),o=t.previousSibling,i=t.nextSibling;isEmpty(t)&&(!o&&e.isAssetBlock(i)?(n.preventDefault(),r.el.removeChild(t)):e.isAssetBlock(o)&&(n.preventDefault(),e.isAssetBlock(i)?r.el.removeChild(t):r.el.removeChild(o)))})}function handleKeydown(e){8===e.keyCode&&handleBackspace(e)}function handleMousedown(n){r.transactionManager.run(function(){var t=n.target;if(e.isDeleteAction(t)){var o=findBlockContainer(t);n.preventDefault(),r.el.removeChild(o)}})}function handleContentChange(){e.initializeAssetBlocks(r.el),e.isAssetBlock(r.el.lastChild)&&r.el.appendChild(document.createElement("p"))}var c=new r.api.Command("asset"),d=new o,l=null;c.execute=function(){l=findSelectedElement(),s=document.createElement("div"),document.body.appendChild(s),n.render(t.createElement(i,{courseId:a.context.courseId,onSelect:onSelect,onCancel:onCancel}),s)},c.queryEnabled=function(){return!0},r.el.addEventListener("keydown",handleKeydown),r.el.addEventListener("mousedown",handleMousedown),r.on("content-changed",handleContentChange),r.commands.asset=c}}});