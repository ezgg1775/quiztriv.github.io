exports.id=139,exports.ids=[139],exports.modules={7498:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return f}});let n="refresh",o="navigate",l="restore",u="server-patch",a="prefetch",i="fast-refresh",f="server-action";(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:(e,t,r)=>{"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(167),o=n._(r(6689)),l=r(4450),u=r(2227),a=r(4364),i=r(109),f=r(3607),c=r(5469),s=r(7443),d=r(920),p=r(30),v=r(7192),g=r(7498);function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:y,children:b,prefetch:h=null,passHref:C,replace:_,shallow:m,scroll:O,locale:A,onClick:E,onMouseEnter:M,onTouchStart:I,legacyBehavior:T=!1,...j}=e;r=b,T&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let R=o.default.useContext(c.RouterContext),P=o.default.useContext(s.AppRouterContext),x=null!=R?R:P,L=!R,S=!1!==h,F=null===h?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:k,as:N}=o.default.useMemo(()=>{if(!R){let e=formatStringOrUrl(a);return{href:e,as:y?formatStringOrUrl(y):e}}let[e,t]=(0,l.resolveHref)(R,a,!0);return{href:e,as:y?(0,l.resolveHref)(R,y):t||e}},[R,a,y]),U=o.default.useRef(k),w=o.default.useRef(N);T&&(n=o.default.Children.only(r));let z=T?n&&"object"==typeof n&&n.ref:t,[H,K,D]=(0,d.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(w.current!==N||U.current!==k)&&(D(),w.current=N,U.current=k),H(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[N,z,k,D,H]);o.default.useEffect(()=>{},[N,k,K,A,S,null==R?void 0:R.locale,x,L,F]);let B={ref:V,onClick(e){T||"function"!=typeof E||E(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),x&&!e.defaultPrevented&&function(e,t,r,n,l,a,i,f,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:f,scroll:e}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,x,k,N,_,m,O,A,L,S)},onMouseEnter(e){T||"function"!=typeof M||M(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart(e){T||"function"!=typeof I||I(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,i.isAbsoluteUrl)(N))B.href=N;else if(!T||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==A?A:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,p.getDomainLocale)(N,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);B.href=t||(0,v.addBasePath)((0,f.addLocale)(N,e,null==R?void 0:R.defaultLocale))}return T?o.default.cloneElement(n,B):o.default.createElement("a",{...j,...B},r)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(6689),o=r(3436),l="function"==typeof IntersectionObserver,u=new Map,a=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:i}=e,f=i||!l,[c,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(l){if(f||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,r,t,c,d.current]);let v=(0,n.useCallback)(()=>{s(!1)},[]);return[p,c,v]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7443:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AppRouterContext},1664:(e,t,r)=>{e.exports=r(5170)},8193:(e,t,r)=>{"use strict";r.d(t,{LHV:()=>AiFillCloseCircle,kA6:()=>AiFillInfoCircle,mny:()=>AiFillCheckCircle});var n=r(9127);function AiFillCheckCircle(e){return(0,n.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]})(e)}function AiFillCloseCircle(e){return(0,n.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]})(e)}function AiFillInfoCircle(e){return(0,n.GenIcon)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}}};