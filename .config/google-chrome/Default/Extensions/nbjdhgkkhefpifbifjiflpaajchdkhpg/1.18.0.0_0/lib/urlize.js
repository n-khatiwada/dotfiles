var urlize=function(){function e(e,t){return e.substr(0,t.length)==t}function t(e,t){return e.substr(e.length-t.length,t.length)==t}function n(e,t){for(var n=0,r=0;;){if(r=e.indexOf(t,r),-1==r)break;n++,r+=t.length}return n}function r(e){console.log(e),e=e.replace(/<div>[^<]*<\/div>/gi,""),e=e.replace(/<[^>]*>/gi,"");var t=e.indexOf(":");return e=e.substring(0,t).toLowerCase()+e.substring(t),-1==e.indexOf("%")||e.match(c)?encodeURI(e):e}function l(e,t){var n=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");return t&&!t.django_compatible&&(n=n.replace(/\//g,"&#47;")),n}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function a(e){var t;return t=2==e.length&&"object"==typeof e[1]?e[1]:{nofollow:e[1],autoescape:e[2],trim_url_limit:e[3],target:e[4]},"django_compatible"in t||(t.django_compatible=!0),t}function o(o,c){function x(e,t){return("http"===c.trim||"www"===c.trim)&&(e=e.replace(/^https?:\/\//i,"")),"www"===c.trim&&(e=e.replace(/^www\./i,"")),void 0===t&&(t=c.trim_url_limit),t&&e.length>t?e.substr(0,t-3)+"...":e}c=a(arguments);for(var b=!1,_=(c.django_compatible?h:d,c.django_compatible?u:s),j=c.django_compatible?p:f,y=new RegExp("^www\\.|^http\\w[^@]+\\.("+(c.top_level_domains||v).join("|")+")$","i"),O=g(o,d).filter(function(e){return void 0!=e}),R=0;R<O.length;R++){var S=O[R];if(-1!=S.indexOf(".")||-1!=S.indexOf("@")||-1!=S.indexOf(":")){for(var E="",I=S,$="",k=0;k<_.length;k++){var q=_[k];t(I,q)&&(I=I.substr(0,I.length-q.length),$=q+$)}for(var k=0;k<j.length;k++){var A=j[k][0],C=j[k][1];e(I,A)&&(I=I.substr(A.length),E+=A),t(I,C)&&n(I,C)==n(I,A)+1&&(I=I.substr(0,I.length-C.length),$=C+$)}var z=void 0,F=c.nofollow?' rel="nofollow"':"",L=c.target?' target="'+c.target+'"':"";if(I=I.replace(/^div>/i,""),I.match(m)?z=r(I):I.match(y)?z=r("http://"+I):-1==I.indexOf(":")&&I.match(w)&&(z="mailto:"+I,F=""),z){var U=x(I);c.autoescape&&(E=l(E,c),$=l($,c),z=i(z),U=l(U,c)),I='<a href="'+z+'"'+F+L+">"+U+"</a>",O[R]=E+I+$}else b||c.autoescape&&(O[R]=l(S,c))}else b||c.autoescape&&(O[R]=l(S,c))}return O.join("")}var g;g=g||function(e){var t,n=String.prototype.split,r=/()??/.exec("")[1]===e;return t=function(t,l,i){if("[object RegExp]"!==Object.prototype.toString.call(l))return n.call(t,l,i);var a,o,g,c,u=[],s=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.extended?"x":"")+(l.sticky?"y":""),p=0,l=new RegExp(l.source,s+"g");for(t+="",r||(a=new RegExp("^"+l.source+"$(?!\\s)",s)),i=i===e?-1>>>0:i>>>0;(o=l.exec(t))&&(g=o.index+o[0].length,!(g>p&&(u.push(t.slice(p,o.index)),!r&&o.length>1&&o[0].replace(a,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(o[t]=e)}),o.length>1&&o.index<t.length&&Array.prototype.push.apply(u,o.slice(1)),c=o[0].length,p=g,u.length>=i)));)l.lastIndex===o.index&&l.lastIndex++;return p===t.length?(c||!l.test(""))&&u.push(""):u.push(t.slice(p)),u.length>i?u.slice(0,i):u}}();var c=/%(?![0-9A-Fa-f]{2})/,u=[".",",",":",";"],s=[".",",",":",";",".)"],p=[["(",")"],["<",">"],["&lt;","&gt;"]],f=[["(",")"],["<",">"],["&lt;","&gt;"],["“","”"],["‘","’"]],h=/(\s+)/,d=/(\s+)|(<\/div><div>)/,m=/^https?:\/\/\w/i,v=["com","edu","gov","int","mil","net","org"],w=/^\S+@\S+\.\S+$/;return o.test={},o.test.split=g,o.test.convert_arguments=a,o}();