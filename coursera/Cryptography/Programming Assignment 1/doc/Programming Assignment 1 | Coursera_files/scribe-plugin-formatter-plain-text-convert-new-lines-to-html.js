define("bundles/vendor/scribe-plugins/scribe-plugin-formatter-plain-text-convert-new-lines-to-html",[],function(){return function(){return function(n){n.registerPlainTextFormatter(function(n){return n.replace(/\n([ \t]*\n)+/g,"</p><p>").replace(/\n/g,"<br>")})}}});