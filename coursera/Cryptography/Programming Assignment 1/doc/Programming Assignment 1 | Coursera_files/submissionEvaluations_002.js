define("bundles/programming/api/submissionEvaluations",["require","exports","module","pages/open-course/common/naptimeItemClient"],function(require,exports,module){"use strict";var e=require("pages/open-course/common/naptimeItemClient"),n="onDemandProgrammingSubmissionEvaluations.v1";exports.get=function(i){var o=i.itemMetadata,t=i.submissionId,s=new e(o),m={fields:["definition"]};return s.get(n,t,m)}});