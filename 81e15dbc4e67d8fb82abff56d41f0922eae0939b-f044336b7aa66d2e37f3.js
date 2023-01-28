/*! For license information please see 81e15dbc4e67d8fb82abff56d41f0922eae0939b-f044336b7aa66d2e37f3.js.LICENSE.txt */
(self.webpackChunkscaleph_docs=self.webpackChunkscaleph_docs||[]).push([[798],{2814:function(t,e,n){"use strict";var r=n(1480),a={};function o(t){return"/"===t.charAt(0)?t.slice(1):t}t.exports=function(t){return a[t]||(a[t]=function(t){if("string"!=typeof t||!t.length)return null;if(-1!==t.indexOf("git@gist")||-1!==t.indexOf("//gist"))return null;var e=r.parse(t);if("string"!=typeof e.path||!e.path.length||"string"!=typeof e.pathname||!e.pathname.length)return null;e.host||!0!==/^git@/.test(t)||(e.host=r.parse("http://"+t).host);e.path=o(e.path),e.pathname=o(e.pathname),e.filepath=null,0===e.path.indexOf("repos")&&(e.path=e.path.slice(6));var n=e.path.split("/").filter(Boolean);"blob"!==n[2]||function(t){return/^[a-f0-9]{40}$/i.test(t)}(n[3])||(e.branch=n[3],n.length>4&&(e.filepath=n.slice(4).join("/")));var a=t.indexOf("blob");-1!==a&&(e.blob=t.slice(a+5));var s=t.indexOf("tree");if(-1!==s){var i=s+5,h=t.slice(i),l=h.indexOf("/");-1!==l&&(h=h.slice(0,l)),e.branch=h}if(e.owner=function(t){if(!t)return null;var e=t.indexOf(":");if(e>-1)return t.slice(e+1);return t}(n[0]),e.name=function(t){return t?t.replace(/^\W+|\.git$/g,""):null}(n[1]),n.length>1&&e.owner&&e.name)e.repo=e.owner+"/"+e.name;else{var u=e.href.split(":");if(2===u.length&&-1===e.href.indexOf("//")){e.repo=e.repo||u[u.length-1];var c=e.repo.split("/");e.owner=c[0],e.name=c[1]}else{var p=e.href.match(/\/([^\/]*)$/);e.owner=p?p[1]:null,e.repo=null}if(e.repo&&(!e.owner||!e.name)){var f=e.repo.split("/");2===f.length&&(e.owner=f[0],e.name=f[1])}}e.branch||(e.branch=n[2]||function(t,e){var n,r=t.split("#");r.length>1&&(n=r[r.length-1]);!n&&e.hash&&"#"===e.hash.charAt(0)&&(n=e.hash.slice(1));return n||"master"}(e.path,e),n.length>3&&(e.filepath=n.slice(3).join("/")));return e.host=e.host||"github.com",e.owner=e.owner||null,e.name=e.name||null,e.repository=e.repo,e}(t))}},5497:function(t){"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,n,r,a){n=n||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var s=/\+/g;t=t.split(n);var i=1e3;a&&"number"==typeof a.maxKeys&&(i=a.maxKeys);var h=t.length;i>0&&h>i&&(h=i);for(var l=0;l<h;++l){var u,c,p,f,m=t[l].replace(s,"%20"),d=m.indexOf(r);d>=0?(u=m.substr(0,d),c=m.substr(d+1)):(u=m,c=""),p=decodeURIComponent(u),f=decodeURIComponent(c),e(o,p)?Array.isArray(o[p])?o[p].push(f):o[p]=[o[p],f]:o[p]=f}return o}},455:function(t){"use strict";var e=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,n,r,a){return n=n||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map((function(a){var o=encodeURIComponent(e(a))+r;return Array.isArray(t[a])?t[a].map((function(t){return o+encodeURIComponent(e(t))})).join(n):o+encodeURIComponent(e(t[a]))})).join(n):a?encodeURIComponent(e(a))+r+encodeURIComponent(e(t)):""}},8561:function(t,e,n){"use strict";e.decode=e.parse=n(5497),e.encode=e.stringify=n(455)},1182:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if("undefined"!=typeof XDomainRequest)return e(null),null;var n=new XMLHttpRequest;return n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status&&e(JSON.parse(n.responseText))},n.open("GET",t,!0),n.send(),n},t.exports=e.default},5702:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=h(n(7294)),o=h(n(5697)),s=h(n(1182)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(5452));function h(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):function(t,e){for(var n=Object.getOwnPropertyNames(e),r=0;r<n.length;r++){var a=n[r],o=Object.getOwnPropertyDescriptor(e,a);o&&o.configurable&&void 0===t[a]&&Object.defineProperty(t,a,o)}}(t,e))}var p={stargazers:"Star",watchers:"Watch",forks:"Fork"},f={forks:"network"},m=function(t){function e(){var n,r;l(this,e);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r=u(this,t.call.apply(t,[this].concat(o))),r.state={count:null},u(r,n)}return c(e,t),e.prototype.componentDidMount=function(){var t=this;this.xhr=(0,s.default)(this.getRequestUrl(),(function(e){t.setCount(e)}))},e.prototype.componentWillUnmount=function(){this.xhr&&this.xhr.abort()},e.prototype.setCount=function(t){if(t){var e=t[this.props.type+"_count"];this.setState({count:e})}},e.prototype.getRequestUrl=function(){var t=this.props;return"//api.github.com/repos/"+t.namespace+"/"+t.repo},e.prototype.getRepoUrl=function(){var t=this.props;return"//github.com/"+t.namespace+"/"+t.repo+"/"},e.prototype.getCountUrl=function(){var t=this.props,e=t.namespace,n=t.repo,r=t.type;return"//github.com/"+e+"/"+n+"/"+(f[r]||r)+"/"},e.prototype.getCountStyle=function(){return null!==this.state.count?{display:"block"}:null},e.prototype.render=function(){var t=this.props,e=t.className,n=t.type,o=t.size,s=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["className","type","size"]);delete s.namespace,delete s.repo;var h,l,u,c=this.state.count,f=i.classNames((u=e,(l=e)in(h={"github-btn":!0,"github-btn-large":"large"===o})?Object.defineProperty(h,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):h[l]=u,h));return a.default.createElement("span",r({},s,{className:f}),a.default.createElement("a",{className:"gh-btn",href:this.getRepoUrl(),target:"_blank"},a.default.createElement("span",{className:"gh-ico","aria-hidden":"true"}),a.default.createElement("span",{className:"gh-text"},p[n])),a.default.createElement("a",{className:"gh-count",target:"_blank",href:this.getCountUrl(),style:this.getCountStyle()},c))},e}(a.default.Component);m.displayName="GitHubButton",m.propTypes={className:o.default.string,type:o.default.oneOf(["stargazers","watchers","forks"]).isRequired,namespace:o.default.string.isRequired,repo:o.default.string.isRequired,size:o.default.oneOf(["large"])},e.default=m,t.exports=e.default},5452:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.classNames=function(t){return Object.keys(t).filter((function(e){return t[e]})).join(" ")}},1288:function(t,e,n){var r;t=n.nmd(t),function(a){e&&e.nodeType,t&&t.nodeType;var o="object"==typeof n.g&&n.g;o.global!==o&&o.window!==o&&o.self;var s,i=2147483647,h=36,l=/^xn--/,u=/[^\x20-\x7E]/,c=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=Math.floor,m=String.fromCharCode;function d(t){throw RangeError(p[t])}function g(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function v(t,e){var n=t.split("@"),r="";return n.length>1&&(r=n[0]+"@",t=n[1]),r+g((t=t.replace(c,".")).split("."),e).join(".")}function b(t){for(var e,n,r=[],a=0,o=t.length;a<o;)(e=t.charCodeAt(a++))>=55296&&e<=56319&&a<o?56320==(64512&(n=t.charCodeAt(a++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),a--):r.push(e);return r}function y(t){return g(t,(function(t){var e="";return t>65535&&(e+=m((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=m(t)})).join("")}function O(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function j(t,e,n){var r=0;for(t=n?f(t/700):t>>1,t+=f(t/e);t>455;r+=h)t=f(t/35);return f(r+36*t/(t+38))}function w(t){var e,n,r,a,o,s,l,u,c,p,m,g=[],v=t.length,b=0,O=128,w=72;for((n=t.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)t.charCodeAt(r)>=128&&d("not-basic"),g.push(t.charCodeAt(r));for(a=n>0?n+1:0;a<v;){for(o=b,s=1,l=h;a>=v&&d("invalid-input"),((u=(m=t.charCodeAt(a++))-48<10?m-22:m-65<26?m-65:m-97<26?m-97:h)>=h||u>f((i-b)/s))&&d("overflow"),b+=u*s,!(u<(c=l<=w?1:l>=w+26?26:l-w));l+=h)s>f(i/(p=h-c))&&d("overflow"),s*=p;w=j(b-o,e=g.length+1,0==o),f(b/e)>i-O&&d("overflow"),O+=f(b/e),b%=e,g.splice(b++,0,O)}return y(g)}function x(t){var e,n,r,a,o,s,l,u,c,p,g,v,y,w,x,N=[];for(v=(t=b(t)).length,e=128,n=0,o=72,s=0;s<v;++s)(g=t[s])<128&&N.push(m(g));for(r=a=N.length,a&&N.push("-");r<v;){for(l=i,s=0;s<v;++s)(g=t[s])>=e&&g<l&&(l=g);for(l-e>f((i-n)/(y=r+1))&&d("overflow"),n+=(l-e)*y,e=l,s=0;s<v;++s)if((g=t[s])<e&&++n>i&&d("overflow"),g==e){for(u=n,c=h;!(u<(p=c<=o?1:c>=o+26?26:c-o));c+=h)x=u-p,w=h-p,N.push(m(O(p+x%w,0))),u=f(x/w);N.push(m(O(u,0))),o=j(n,y,r==a),n=0,++r}++n,++e}return N.join("")}s={version:"1.3.2",ucs2:{decode:b,encode:y},decode:w,encode:x,toASCII:function(t){return v(t,(function(t){return u.test(t)?"xn--"+x(t):t}))},toUnicode:function(t){return v(t,(function(t){return l.test(t)?w(t.slice(4).toLowerCase()):t}))}},void 0===(r=function(){return s}.call(e,n,e,t))||(t.exports=r)}()},1480:function(t,e,n){"use strict";var r=n(1288),a=n(1424);function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=y,e.resolve=function(t,e){return y(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?y(t,!1,!0).resolveObject(e):e},e.format=function(t){a.isString(t)&&(t=y(t));return t instanceof o?t.format():o.prototype.format.call(t)},e.Url=o;var s=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(l),c=["%","/","?",";","#"].concat(u),p=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=n(8561);function y(t,e,n){if(t&&a.isObject(t)&&t instanceof o)return t;var r=new o;return r.parse(t,e,n),r}o.prototype.parse=function(t,e,n){if(!a.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var o=t.indexOf("?"),i=-1!==o&&o<t.indexOf("#")?"?":"#",l=t.split(i);l[0]=l[0].replace(/\\/g,"/");var y=t=l.join(i);if(y=y.trim(),!n&&1===t.split("#").length){var O=h.exec(y);if(O)return this.path=y,this.href=y,this.pathname=O[1],O[2]?(this.search=O[2],this.query=e?b.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var j=s.exec(y);if(j){var w=(j=j[0]).toLowerCase();this.protocol=w,y=y.substr(j.length)}if(n||j||y.match(/^\/\/[^@\/]+@[^@\/]+/)){var x="//"===y.substr(0,2);!x||j&&g[j]||(y=y.substr(2),this.slashes=!0)}if(!g[j]&&(x||j&&!v[j])){for(var N,E,k=-1,C=0;C<p.length;C++){-1!==(q=y.indexOf(p[C]))&&(-1===k||q<k)&&(k=q)}-1!==(E=-1===k?y.lastIndexOf("@"):y.lastIndexOf("@",k))&&(N=y.slice(0,E),y=y.slice(E+1),this.auth=decodeURIComponent(N)),k=-1;for(C=0;C<c.length;C++){var q;-1!==(q=y.indexOf(c[C]))&&(-1===k||q<k)&&(k=q)}-1===k&&(k=y.length),this.host=y.slice(0,k),y=y.slice(k),this.parseHost(),this.hostname=this.hostname||"";var I="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!I)for(var A=this.hostname.split(/\./),B=(C=0,A.length);C<B;C++){var S=A[C];if(S&&!S.match(f)){for(var U="",R=0,_=S.length;R<_;R++)S.charCodeAt(R)>127?U+="x":U+=S[R];if(!U.match(f)){var z=A.slice(0,C),M=A.slice(C+1),P=S.match(m);P&&(z.push(P[1]),M.unshift(P[2])),M.length&&(y="/"+M.join(".")+y),this.hostname=z.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),I||(this.hostname=r.toASCII(this.hostname));var W=this.port?":"+this.port:"",L=this.hostname||"";this.host=L+W,this.href+=this.host,I&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==y[0]&&(y="/"+y))}if(!d[w])for(C=0,B=u.length;C<B;C++){var F=u[C];if(-1!==y.indexOf(F)){var T=encodeURIComponent(F);T===F&&(T=escape(F)),y=y.split(F).join(T)}}var $=y.indexOf("#");-1!==$&&(this.hash=y.substr($),y=y.slice(0,$));var D=y.indexOf("?");if(-1!==D?(this.search=y.substr(D),this.query=y.substr(D+1),e&&(this.query=b.parse(this.query)),y=y.slice(0,D)):e&&(this.search="",this.query={}),y&&(this.pathname=y),v[w]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){W=this.pathname||"";var G=this.search||"";this.path=W+G}return this.href=this.format(),this},o.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",o=!1,s="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(s=b.stringify(this.query));var i=this.search||s&&"?"+s||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||v[e])&&!1!==o?(o="//"+(o||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):o||(o=""),r&&"#"!==r.charAt(0)&&(r="#"+r),i&&"?"!==i.charAt(0)&&(i="?"+i),e+o+(n=n.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(i=i.replace("#","%23"))+r},o.prototype.resolve=function(t){return this.resolveObject(y(t,!1,!0)).format()},o.prototype.resolveObject=function(t){if(a.isString(t)){var e=new o;e.parse(t,!1,!0),t=e}for(var n=new o,r=Object.keys(this),s=0;s<r.length;s++){var i=r[s];n[i]=this[i]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var h=Object.keys(t),l=0;l<h.length;l++){var u=h[l];"protocol"!==u&&(n[u]=t[u])}return v[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!v[t.protocol]){for(var c=Object.keys(t),p=0;p<c.length;p++){var f=c[p];n[f]=t[f]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||g[t.protocol])n.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),n.pathname=m.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var d=n.pathname||"",b=n.search||"";n.path=d+b}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var y=n.pathname&&"/"===n.pathname.charAt(0),O=t.host||t.pathname&&"/"===t.pathname.charAt(0),j=O||y||n.host&&t.pathname,w=j,x=n.pathname&&n.pathname.split("/")||[],N=(m=t.pathname&&t.pathname.split("/")||[],n.protocol&&!v[n.protocol]);if(N&&(n.hostname="",n.port=null,n.host&&(""===x[0]?x[0]=n.host:x.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),j=j&&(""===m[0]||""===x[0])),O)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,x=m;else if(m.length)x||(x=[]),x.pop(),x=x.concat(m),n.search=t.search,n.query=t.query;else if(!a.isNullOrUndefined(t.search)){if(N)n.hostname=n.host=x.shift(),(I=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=I.shift(),n.host=n.hostname=I.shift());return n.search=t.search,n.query=t.query,a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!x.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var E=x.slice(-1)[0],k=(n.host||t.host||x.length>1)&&("."===E||".."===E)||""===E,C=0,q=x.length;q>=0;q--)"."===(E=x[q])?x.splice(q,1):".."===E?(x.splice(q,1),C++):C&&(x.splice(q,1),C--);if(!j&&!w)for(;C--;C)x.unshift("..");!j||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),k&&"/"!==x.join("/").substr(-1)&&x.push("");var I,A=""===x[0]||x[0]&&"/"===x[0].charAt(0);N&&(n.hostname=n.host=A?"":x.length?x.shift():"",(I=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=I.shift(),n.host=n.hostname=I.shift()));return(j=j||n.host&&x.length)&&!A&&x.unshift(""),x.length?n.pathname=x.join("/"):(n.pathname=null,n.path=null),a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},o.prototype.parseHost=function(){var t=this.host,e=i.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},1424:function(t){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},9030:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var r={};n.r(r),n.d(r,{backLeftBottom:function(){return m},buttonLink:function(){return d},buttons:function(){return g},content:function(){return v},description:function(){return b},githubIframe:function(){return y},githubWrapper:function(){return O},label:function(){return j},logo:function(){return w},more:function(){return x},notifications:function(){return N},primary:function(){return E},teaser:function(){return k},teaserimg:function(){return C},text:function(){return q},title:function(){return I},videoButtonWrapper:function(){return A},videoModal:function(){return B},wrapper:function(){return S}});var a=n(7294),o=n(900),s=n(1082),i=n(5702),h=n.n(i),l=n(2814),u=n.n(l),c=n(9931),p=n.n(c),f=n(8900),m="Banner-module--backLeftBottom--4874d",d="Banner-module--buttonLink--bcfcf",g="Banner-module--buttons--99ed8",v="Banner-module--content--69347",b="Banner-module--description--cef01",y="Banner-module--githubIframe--ae586",O="Banner-module--githubWrapper--dd7b1",j="Banner-module--label--f6e19",w="Banner-module--logo--a9c1b",x="Banner-module--more--4bcaf",N="Banner-module--notifications--87beb",E="Banner-module--primary--4a510",k="Banner-module--teaser--eaa8a",C="Banner-module--teaserimg--6a8c1",q="Banner-module--text--44ef7",I="Banner-module--title--4fc9b",A="Banner-module--videoButtonWrapper--969bd",B="Banner-module--videoModal--8931f",S="Banner-module--wrapper--96e92",U="Notification-module--notification--66370",R=["https://gw.alipayobjects.com/zos/antfincdn/IqREAm36K7/1.png","https://gw.alipayobjects.com/zos/antfincdn/3fG1Iqjfnz/2.png"],_=function(t){var e=t.index,n=void 0===e?0:e,r=t.type,o=t.title,i=t.date,h=t.link,l=void 0===h?"":h,u=a.createElement("div",{className:"Notification-module--container--f0cce"},a.createElement("img",{className:"Notification-module--number--9bcce",src:R[n],alt:n.toString()}),a.createElement("div",{className:"Notification-module--content--fe939"},a.createElement("p",{className:"Notification-module--description--e3b1b"},r," ‧ ",o),a.createElement("p",{className:"Notification-module--date--b473a"},i)));return l.startsWith("http")?a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:U},u):a.createElement(s.Link,{to:l,className:U},u)},z=function(t){var e=t.coverImage,n=t.logoUrl,o=t.title,i=t.description,l=t.notifications,c=t.style,y=void 0===c?{}:c,x=t.className,E=t.showGithubStars,A=void 0===E||E,B=t.buttons,U=void 0===B?[]:B,R=(0,f.$)(),z=(R.t,"https://my-json-server.typicode.com/opensumi/website-data/notifications?lang="+(R.i18n.language.includes("zh")?"zh":"en")),M=(0,s.useStaticQuery)("3927379890").site.siteMetadata.githubUrl,P=(0,a.useState)([]),W=P[0],L=P[1];(0,a.useEffect)((function(){fetch(z).then((function(t){return t.json()})).then((function(t){L(t)}))}),[z]);var F=(l||W).slice(0,2).map((function(t,e){return a.createElement(_,Object.assign({index:e,key:e},t))})),T=U.map((function(t,e){var n=t.link.startsWith("http")||t.link.startsWith("#")?"a":s.Link,o={};t.link.startsWith("http")&&(o.target="_blank",o.rel="noopener noreferrer"),"a"===n?o.href=t.link:o.to=t.link;var i=t.shape,h=void 0===i?"round":i;return a.createElement(n,Object.assign({},o,{className:p()(d,r[t.type||""],"primary"===t.type?"primary-button":"common-button"),key:e,style:Object.assign({borderRadius:"round"===h?"1000px":"4px"},t.style)}),a.createElement("span",null,t.text))}));if(A){var $=u()(M);$&&$.owner&&$.name&&T.push(a.createElement("div",{key:"github",className:O},a.createElement(h(),{type:"stargazers",size:"large",namespace:$.owner,repo:$.name})))}return a.createElement("section",{className:p()(S,x),style:y},a.createElement("div",{className:v},a.createElement("div",{className:q},a.createElement("div",{className:p()(I,"banner-title")},a.createElement("img",{className:w,src:n,alt:"opensumi"}),a.createElement("div",{className:j},o)),a.createElement("p",{className:p()(b,"banner-description")},i),a.createElement("div",{className:p()(g,"banner-buttons")},T)),a.createElement("div",{className:p()(N,"notifications")},F),a.createElement("div",{className:p()(k,"teaser")},a.createElement("div",{className:p()(C,"teaser-img")},e)),a.createElement("img",{className:m,src:"https://gw.alipayobjects.com/zos/basement_prod/441d5eaf-e623-47cd-b9b9-2a581d9ce1e3.svg",alt:"back"})))},M=a.memo((function(){return a.createElement("img",{className:"BannerSVG-module--wrapper--85132",alt:"",src:"https://img.alicdn.com/imgextra/i3/O1CN01ZhXnrB1EJdqMYA76v_!!6000000000331-1-tps-776-666.gif"})})),P=function(){var t=(0,f.$)(),e=t.t,n=t.i18n,r=(0,s.useStaticQuery)("8584487").site.siteMetadata.logoUrl,i=(e("轻松集成"),e("提供面向容器场景、Electron 场景和纯前端场景的快速集成解决方案，助力业务快速落地"),e("高拓展性"),e("提供从 VS Code 插件、OpenSumi 插件到 OpenSumi 模块三层业务解决方案，完美支持业务定制需求"),e("UI 自定义"),e("提供可任意定制的布局系统，支持从简单的视图配置到布局模板研发的各类场景，支持从插件注入自定义视图"),e("支付宝小程序开发工具"),e("小程序开发者工具是支付宝开放平台打造的一站式小程序研发工具，提供了编码、调试、测试、上传、项目管理等功能。不仅支持开发支付宝小程序，相同代码还通用于蚂蚁开放生态，可直接发布至钉钉、高德等应用平台。"),e("淘宝开发者工具"),e("开发者工具 IDE 是辅助淘宝开发者开发商家应用的本地开发工具，包含本地调试、代码编辑、真机预览、发布等功能，覆盖了应用开发的完整流程。"),e("Gitlink 开源代码托管平台"),e("CCF Gitlink 开源代码托管平台使用基于 OpenSumi 的极速版 IDE 框架，将代码阅读、代码评审、WebIDE 浏览等交互进行升级，极大的提高了用户的使用效率。"),[{text:e("快速开始"),link:"./docs/guide/quick-start/initialize",type:"primary"},{text:e("概览"),link:"/"+n.language+"/docs/guide/overview"}]);return a.createElement(a.Fragment,null,a.createElement(o.Z,{title:e("Scaleph"),lang:n.language}),a.createElement(z,{coverImage:a.createElement(M,null),logoUrl:r,title:e("Scaleph"),description:e("基于 Flink 和 Kubernetes 打造的开放数据平台，具备 Flink 和 SeaTunnel 任务管理能力。"),className:"banner",buttons:i}))}}}]);