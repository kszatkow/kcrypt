define("bundles/programming/models/submissionPartEvaluation",["require","exports","module","underscore","pages/open-course/assessment/models/exam/evaluation"],function(require,exports,module){"use strict";var _=require("underscore"),e=require("pages/open-course/assessment/models/exam/evaluation"),s=e.extend({defaults:_({}).extend(e.prototype.defaults,{partId:null})});module.exports=s});