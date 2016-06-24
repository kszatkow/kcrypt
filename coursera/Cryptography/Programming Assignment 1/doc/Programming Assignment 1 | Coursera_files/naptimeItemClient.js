define("pages/open-course/common/naptimeItemClient",["require","exports","module","q","underscore","js/lib/path","js/lib/stringKeyTuple","jsuri","bundles/phoenix/template/models/userIdentity","pages/open-course/common/naptimeApi","memoize!pages/open-course/common/promises/courseGrade","memoize!pages/open-course/common/promises/courseViewGrade","memoize!pages/open-course/common/promises/courseProgress"],function(require,exports,module){"use strict";function jqXHRToPromiseWithId(e){return t(e).then(function(t){return{body:t,createdId:e.getResponseHeader("X-Coursera-Id")}})}function makeUri(r,e){var t=new n(r);return e&&_(e).each(function(e,r){t.addQueryParam(r,e)}),t}var t=require("q"),_=require("underscore"),p=require("js/lib/path"),i=require("js/lib/stringKeyTuple"),n=require("jsuri"),s=require("bundles/phoenix/template/models/userIdentity"),r=require("pages/open-course/common/naptimeApi"),a=require("memoize!pages/open-course/common/promises/courseGrade"),u=require("memoize!pages/open-course/common/promises/courseViewGrade"),o=require("memoize!pages/open-course/common/promises/courseProgress"),e=function NaptimeItemClient(e){this.itemMetadata=e};e.prototype.create=function(i,n,p,e){var m=makeUri(i,p);void 0===e&&(e=!0);var g={data:n};return t.all([a(this.itemMetadata.get("course").get("id")),u(s.get("id")+"~"+this.itemMetadata.get("course").get("id")),o(this.itemMetadata.get("course").get("slug")),jqXHRToPromiseWithId(r.post(m.toString(),g))]).spread(function(t,r,o,s){return e&&(t.refresh(),r.refresh(),o.trigger("refresh")),s})},e.prototype.get=function(e,s,i,n){var a=makeUri(p.join(e,s),i);return t.all([r.get(a.toString()),o(this.itemMetadata.get("course").get("slug"))]).spread(function(e,t){return n&&t.trigger("refresh"),e})},e.prototype.getWithCourseItemId=function(e,t,r){var o=this.itemMetadata.get("course").get("id"),s=this.itemMetadata.get("id"),n=i.tupleToStringKey([o,s]);return this.get(e,n,t,r)},e.prototype.getWithUserCourseItemId=function(e,t,r){var o=s.get("id"),n=this.itemMetadata.get("course").get("id"),a=this.itemMetadata.get("id"),u=i.tupleToStringKey([o.toString(),n,a]);return this.get(e,u,t,r)},e.prototype.finder=function(e,s,i,n){var a=makeUri(e,_({q:s}).extend(i||{}));return t.all([r.get(a.toString()),o(this.itemMetadata.get("course").get("slug"))]).spread(function(e,t){return n&&t.trigger("refresh"),e})},e.prototype.action=function(e,t,o){var s=makeUri(e,_({action:t}).extend(o||{}));return r.post(s.toString())},module.exports=e});