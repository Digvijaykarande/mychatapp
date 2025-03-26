(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var cm={exports:{}},jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function ob(){if(mv)return jl;mv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:f,ref:o!==void 0?o:null,props:u}}return jl.Fragment=e,jl.jsx=n,jl.jsxs=n,jl}var pv;function lb(){return pv||(pv=1,cm.exports=ob()),cm.exports}var W=lb(),hm={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function ub(){if(gv)return Re;gv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function b(N){return N===null||typeof N!="object"?null:(N=w&&N[w]||N["@@iterator"],typeof N=="function"?N:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,G={};function B(N,te,fe){this.props=N,this.context=te,this.refs=G,this.updater=fe||O}B.prototype.isReactComponent={},B.prototype.setState=function(N,te){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,te,"setState")},B.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function K(){}K.prototype=B.prototype;function ne(N,te,fe){this.props=N,this.context=te,this.refs=G,this.updater=fe||O}var J=ne.prototype=new K;J.constructor=ne,P(J,B.prototype),J.isPureReactComponent=!0;var le=Array.isArray,ue={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function M(N,te,fe,se,ae,Ie){return fe=Ie.ref,{$$typeof:i,type:N,key:te,ref:fe!==void 0?fe:null,props:Ie}}function R(N,te){return M(N.type,te,void 0,void 0,void 0,N.props)}function S(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function C(N){var te={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(fe){return te[fe]})}var V=/\/+/g;function z(N,te){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):te.toString(36)}function D(){}function Et(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(D,D):(N.status="pending",N.then(function(te){N.status==="pending"&&(N.status="fulfilled",N.value=te)},function(te){N.status==="pending"&&(N.status="rejected",N.reason=te)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function mt(N,te,fe,se,ae){var Ie=typeof N;(Ie==="undefined"||Ie==="boolean")&&(N=null);var be=!1;if(N===null)be=!0;else switch(Ie){case"bigint":case"string":case"number":be=!0;break;case"object":switch(N.$$typeof){case i:case e:be=!0;break;case E:return be=N._init,mt(be(N._payload),te,fe,se,ae)}}if(be)return ae=ae(N),be=se===""?"."+z(N,0):se,le(ae)?(fe="",be!=null&&(fe=be.replace(V,"$&/")+"/"),mt(ae,te,fe,"",function(rt){return rt})):ae!=null&&(S(ae)&&(ae=R(ae,fe+(ae.key==null||N&&N.key===ae.key?"":(""+ae.key).replace(V,"$&/")+"/")+be)),te.push(ae)),1;be=0;var pt=se===""?".":se+":";if(le(N))for(var ze=0;ze<N.length;ze++)se=N[ze],Ie=pt+z(se,ze),be+=mt(se,te,fe,Ie,ae);else if(ze=b(N),typeof ze=="function")for(N=ze.call(N),ze=0;!(se=N.next()).done;)se=se.value,Ie=pt+z(se,ze++),be+=mt(se,te,fe,Ie,ae);else if(Ie==="object"){if(typeof N.then=="function")return mt(Et(N),te,fe,se,ae);throw te=String(N),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return be}function re(N,te,fe){if(N==null)return N;var se=[],ae=0;return mt(N,se,"","",function(Ie){return te.call(fe,Ie,ae++)}),se}function ve(N){if(N._status===-1){var te=N._result;te=te(),te.then(function(fe){(N._status===0||N._status===-1)&&(N._status=1,N._result=fe)},function(fe){(N._status===0||N._status===-1)&&(N._status=2,N._result=fe)}),N._status===-1&&(N._status=0,N._result=te)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function qe(){}return Re.Children={map:re,forEach:function(N,te,fe){re(N,function(){te.apply(this,arguments)},fe)},count:function(N){var te=0;return re(N,function(){te++}),te},toArray:function(N){return re(N,function(te){return te})||[]},only:function(N){if(!S(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Re.Component=B,Re.Fragment=n,Re.Profiler=o,Re.PureComponent=ne,Re.StrictMode=s,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,Re.act=function(){throw Error("act(...) is not supported in production builds of React.")},Re.cache=function(N){return function(){return N.apply(null,arguments)}},Re.cloneElement=function(N,te,fe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var se=P({},N.props),ae=N.key,Ie=void 0;if(te!=null)for(be in te.ref!==void 0&&(Ie=void 0),te.key!==void 0&&(ae=""+te.key),te)!Te.call(te,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&te.ref===void 0||(se[be]=te[be]);var be=arguments.length-2;if(be===1)se.children=fe;else if(1<be){for(var pt=Array(be),ze=0;ze<be;ze++)pt[ze]=arguments[ze+2];se.children=pt}return M(N.type,ae,void 0,void 0,Ie,se)},Re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},Re.createElement=function(N,te,fe){var se,ae={},Ie=null;if(te!=null)for(se in te.key!==void 0&&(Ie=""+te.key),te)Te.call(te,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ae[se]=te[se]);var be=arguments.length-2;if(be===1)ae.children=fe;else if(1<be){for(var pt=Array(be),ze=0;ze<be;ze++)pt[ze]=arguments[ze+2];ae.children=pt}if(N&&N.defaultProps)for(se in be=N.defaultProps,be)ae[se]===void 0&&(ae[se]=be[se]);return M(N,Ie,void 0,void 0,null,ae)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(N){return{$$typeof:m,render:N}},Re.isValidElement=S,Re.lazy=function(N){return{$$typeof:E,_payload:{_status:-1,_result:N},_init:ve}},Re.memo=function(N,te){return{$$typeof:g,type:N,compare:te===void 0?null:te}},Re.startTransition=function(N){var te=ue.T,fe={};ue.T=fe;try{var se=N(),ae=ue.S;ae!==null&&ae(fe,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(qe,pe)}catch(Ie){pe(Ie)}finally{ue.T=te}},Re.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},Re.use=function(N){return ue.H.use(N)},Re.useActionState=function(N,te,fe){return ue.H.useActionState(N,te,fe)},Re.useCallback=function(N,te){return ue.H.useCallback(N,te)},Re.useContext=function(N){return ue.H.useContext(N)},Re.useDebugValue=function(){},Re.useDeferredValue=function(N,te){return ue.H.useDeferredValue(N,te)},Re.useEffect=function(N,te){return ue.H.useEffect(N,te)},Re.useId=function(){return ue.H.useId()},Re.useImperativeHandle=function(N,te,fe){return ue.H.useImperativeHandle(N,te,fe)},Re.useInsertionEffect=function(N,te){return ue.H.useInsertionEffect(N,te)},Re.useLayoutEffect=function(N,te){return ue.H.useLayoutEffect(N,te)},Re.useMemo=function(N,te){return ue.H.useMemo(N,te)},Re.useOptimistic=function(N,te){return ue.H.useOptimistic(N,te)},Re.useReducer=function(N,te,fe){return ue.H.useReducer(N,te,fe)},Re.useRef=function(N){return ue.H.useRef(N)},Re.useState=function(N){return ue.H.useState(N)},Re.useSyncExternalStore=function(N,te,fe){return ue.H.useSyncExternalStore(N,te,fe)},Re.useTransition=function(){return ue.H.useTransition()},Re.version="19.0.0",Re}var yv;function hp(){return yv||(yv=1,hm.exports=ub()),hm.exports}var q=hp(),fm={exports:{}},Hl={},dm={exports:{}},mm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function cb(){return _v||(_v=1,function(i){function e(re,ve){var pe=re.length;re.push(ve);e:for(;0<pe;){var qe=pe-1>>>1,N=re[qe];if(0<o(N,ve))re[qe]=ve,re[pe]=N,pe=qe;else break e}}function n(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var ve=re[0],pe=re.pop();if(pe!==ve){re[0]=pe;e:for(var qe=0,N=re.length,te=N>>>1;qe<te;){var fe=2*(qe+1)-1,se=re[fe],ae=fe+1,Ie=re[ae];if(0>o(se,pe))ae<N&&0>o(Ie,se)?(re[qe]=Ie,re[ae]=pe,qe=ae):(re[qe]=se,re[fe]=pe,qe=fe);else if(ae<N&&0>o(Ie,pe))re[qe]=Ie,re[ae]=pe,qe=ae;else break e}}return ve}function o(re,ve){var pe=re.sortIndex-ve.sortIndex;return pe!==0?pe:re.id-ve.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var p=[],g=[],E=1,w=null,b=3,O=!1,P=!1,G=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function J(re){for(var ve=n(g);ve!==null;){if(ve.callback===null)s(g);else if(ve.startTime<=re)s(g),ve.sortIndex=ve.expirationTime,e(p,ve);else break;ve=n(g)}}function le(re){if(G=!1,J(re),!P)if(n(p)!==null)P=!0,Et();else{var ve=n(g);ve!==null&&mt(le,ve.startTime-re)}}var ue=!1,Te=-1,M=5,R=-1;function S(){return!(i.unstable_now()-R<M)}function C(){if(ue){var re=i.unstable_now();R=re;var ve=!0;try{e:{P=!1,G&&(G=!1,K(Te),Te=-1),O=!0;var pe=b;try{t:{for(J(re),w=n(p);w!==null&&!(w.expirationTime>re&&S());){var qe=w.callback;if(typeof qe=="function"){w.callback=null,b=w.priorityLevel;var N=qe(w.expirationTime<=re);if(re=i.unstable_now(),typeof N=="function"){w.callback=N,J(re),ve=!0;break t}w===n(p)&&s(p),J(re)}else s(p);w=n(p)}if(w!==null)ve=!0;else{var te=n(g);te!==null&&mt(le,te.startTime-re),ve=!1}}break e}finally{w=null,b=pe,O=!1}ve=void 0}}finally{ve?V():ue=!1}}}var V;if(typeof ne=="function")V=function(){ne(C)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,D=z.port2;z.port1.onmessage=C,V=function(){D.postMessage(null)}}else V=function(){B(C,0)};function Et(){ue||(ue=!0,V())}function mt(re,ve){Te=B(function(){re(i.unstable_now())},ve)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(re){re.callback=null},i.unstable_continueExecution=function(){P||O||(P=!0,Et())},i.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<re?Math.floor(1e3/re):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(re){switch(b){case 1:case 2:case 3:var ve=3;break;default:ve=b}var pe=b;b=ve;try{return re()}finally{b=pe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(re,ve){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var pe=b;b=re;try{return ve()}finally{b=pe}},i.unstable_scheduleCallback=function(re,ve,pe){var qe=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?qe+pe:qe):pe=qe,re){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=pe+N,re={id:E++,callback:ve,priorityLevel:re,startTime:pe,expirationTime:N,sortIndex:-1},pe>qe?(re.sortIndex=pe,e(g,re),n(p)===null&&re===n(g)&&(G?(K(Te),Te=-1):G=!0,mt(le,pe-qe))):(re.sortIndex=N,e(p,re),P||O||(P=!0,Et())),re},i.unstable_shouldYield=S,i.unstable_wrapCallback=function(re){var ve=b;return function(){var pe=b;b=ve;try{return re.apply(this,arguments)}finally{b=pe}}}}(mm)),mm}var vv;function hb(){return vv||(vv=1,dm.exports=cb()),dm.exports}var pm={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function fb(){if(Ev)return $t;Ev=1;var i=hp();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:g,implementation:E}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$t.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(p,g,null,E)},$t.flushSync=function(p){var g=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=g,s.p=E,s.d.f()}},$t.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},$t.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},$t.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,w=m(E,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:b,fetchPriority:O}):E==="script"&&s.d.X(p,{crossOrigin:w,integrity:b,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},$t.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=m(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},$t.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,w=m(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},$t.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=m(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},$t.requestFormReset=function(p){s.d.r(p)},$t.unstable_batchedUpdates=function(p,g){return p(g)},$t.useFormState=function(p,g,E){return f.H.useFormState(p,g,E)},$t.useFormStatus=function(){return f.H.useHostTransitionStatus()},$t.version="19.0.0",$t}var Tv;function db(){if(Tv)return pm.exports;Tv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),pm.exports=fb(),pm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function mb(){if(Av)return Hl;Av=1;var i=hb(),e=hp(),n=db();function s(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),O=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),le=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function Te(t){return t===null||typeof t!="object"?null:(t=ue&&t[ue]||t["@@iterator"],typeof t=="function"?t:null)}var M=Symbol.for("react.client.reference");function R(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===M?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case m:return"Portal";case E:return"Profiler";case g:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Provider";case b:return(t._context.displayName||"Context")+".Consumer";case P:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return r=t.displayName||null,r!==null?r:R(t.type)||"Memo";case ne:r=t._payload,t=t._init;try{return R(t(r))}catch{}}return null}var S=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,V,z;function D(t){if(V===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);V=r&&r[1]||"",z=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+t+z}var Et=!1;function mt(t,r){if(!t||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch($){var H=$}Reflect.construct(t,[],Z)}else{try{Z.call()}catch($){H=$}t.call(Z.prototype)}}else{try{throw Error()}catch($){H=$}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch($){if($&&H&&typeof $.stack=="string")return[$.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var I=v.split(`
`),x=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<x.length&&!x[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===x.length)for(l=I.length-1,h=x.length-1;1<=l&&0<=h&&I[l]!==x[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==x[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==x[h]){var Q=`
`+I[l].replace(" at new "," at ");return t.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",t.displayName)),Q}while(1<=l&&0<=h);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?D(a):""}function re(t){switch(t.tag){case 26:case 27:case 5:return D(t.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return t=mt(t.type,!1),t;case 11:return t=mt(t.type.render,!1),t;case 1:return t=mt(t.type,!0),t;default:return""}}function ve(t){try{var r="";do r+=re(t),t=t.return;while(t);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function qe(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function N(t){if(pe(t)!==t)throw Error(s(188))}function te(t){var r=t.alternate;if(!r){if(r=pe(t),r===null)throw Error(s(188));return r!==t?null:t}for(var a=t,l=r;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return N(h),t;if(d===l)return N(h),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:r}function fe(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=fe(t),r!==null)return r;t=t.sibling}return null}var se=Array.isArray,ae=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ie={pending:!1,data:null,method:null,action:null},be=[],pt=-1;function ze(t){return{current:t}}function rt(t){0>pt||(t.current=be[pt],be[pt]=null,pt--)}function Ke(t,r){pt++,be[pt]=t.current,t.current=r}var Zt=ze(null),Di=ze(null),bn=ze(null),gr=ze(null);function yr(t,r){switch(Ke(bn,r),Ke(Di,t),Ke(Zt,null),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?q_(r):0;break;default:if(t=t===8?r.parentNode:r,r=t.tagName,t=t.namespaceURI)t=q_(t),r=F_(t,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}rt(Zt),Ke(Zt,r)}function Oi(){rt(Zt),rt(Di),rt(bn)}function xo(t){t.memoizedState!==null&&Ke(gr,t);var r=Zt.current,a=F_(r,t.type);r!==a&&(Ke(Di,t),Ke(Zt,a))}function ma(t){Di.current===t&&(rt(Zt),rt(Di)),gr.current===t&&(rt(gr),xl._currentValue=Ie)}var pa=Object.prototype.hasOwnProperty,Es=i.unstable_scheduleCallback,ga=i.unstable_cancelCallback,ff=i.unstable_shouldYield,Uo=i.unstable_requestPaint,an=i.unstable_now,bu=i.unstable_getCurrentPriorityLevel,Tt=i.unstable_ImmediatePriority,Dt=i.unstable_UserBlockingPriority,Ni=i.unstable_NormalPriority,Ru=i.unstable_LowPriority,Lo=i.unstable_IdlePriority,df=i.log,Ts=i.unstable_setDisableYieldValue,_r=null,Gt=null;function zo(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(_r,t,void 0,(t.current.flags&128)===128)}catch{}}function ni(t){if(typeof df=="function"&&Ts(t),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(_r,t)}catch{}}var Jt=Math.clz32?Math.clz32:Cu,Bo=Math.log,Iu=Math.LN2;function Cu(t){return t>>>=0,t===0?32:31-(Bo(t)/Iu|0)|0}var ii=128,vr=4194304;function Gn(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Rn(t,r){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,d=t.pingedLanes,v=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~h,a!==0?l=Gn(a):(d&=T,d!==0?l=Gn(d):t||(v=T&~v,v!==0&&(l=Gn(v))))):(T=a&~h,T!==0?l=Gn(T):d!==0?l=Gn(d):t||(v=a&~v,v!==0&&(l=Gn(v)))),l===0?0:r!==0&&r!==l&&(r&h)===0&&(h=l&-l,v=r&-r,h>=v||h===32&&(v&4194176)!==0)?r:l}function Er(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function ya(t,r){switch(t){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jo(){var t=ii;return ii<<=1,(ii&4194176)===0&&(ii=128),t}function Tr(){var t=vr;return vr<<=1,(vr&62914560)===0&&(vr=4194304),t}function _a(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function ct(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Du(t,r,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,x=t.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-Jt(a),Z=1<<Q;T[Q]=0,I[Q]=-1;var H=x[Q];if(H!==null)for(x[Q]=null,Q=0;Q<H.length;Q++){var $=H[Q];$!==null&&($.lane&=-536870913)}a&=~Z}l!==0&&Ar(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~r))}function Ar(t,r,a){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-Jt(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194218}function wr(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-Jt(a),h=1<<l;h&r|t[l]&r&&(t[l]|=r),a&=~h}}function Ou(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nu(){var t=ae.p;return t!==0?t:(t=window.event,t===void 0?32:lv(t.type))}function Sr(t,r){var a=ae.p;try{return ae.p=t,r()}finally{ae.p=a}}var ri=Math.random().toString(36).slice(2),Ot="__reactFiber$"+ri,At="__reactProps$"+ri,Mi="__reactContainer$"+ri,As="__reactEvents$"+ri,va="__reactListeners$"+ri,si="__reactHandles$"+ri,Ho="__reactResources$"+ri,br="__reactMarker$"+ri;function ws(t){delete t[Ot],delete t[At],delete t[As],delete t[va],delete t[si]}function Kn(t){var r=t[Ot];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Mi]||a[Ot]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=$_(t);t!==null;){if(a=t[Ot])return a;t=$_(t)}return r}t=a,a=t.parentNode}return null}function ki(t){if(t=t[Ot]||t[Mi]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function Rr(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(s(33))}function Ir(t){var r=t[Ho];return r||(r=t[Ho]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function et(t){t[br]=!0}var qo=new Set,Ea={};function pn(t,r){on(t,r),on(t+"Capture",r)}function on(t,r){for(Ea[t]=r,t=0;t<r.length;t++)qo.add(r[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fo={},Go={};function Mu(t){return pa.call(Go,t)?!0:pa.call(Fo,t)?!1:mf.test(t)?Go[t]=!0:(Fo[t]=!0,!1)}function Cr(t,r,a){if(Mu(r))if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+a)}}function Dr(t,r,a){if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+a)}}function In(t,r,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(r,a,""+l)}}function en(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ku(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pf(t){var r=ku(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ss(t){t._valueTracker||(t._valueTracker=pf(t))}function Ko(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=ku(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function Ta(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vi=/[\n"\\]/g;function st(t){return t.replace(Vi,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Or(t,r,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),r!=null?v==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+en(r)):t.value!==""+en(r)&&(t.value=""+en(r)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),r!=null?Aa(t,v,en(r)):a!=null?Aa(t,v,en(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+en(T):t.removeAttribute("name")}function bs(t,r,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+en(a):"",r=r!=null?""+en(r):a,T||r===t.value||(t.value=r),t.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function Aa(t,r,a){r==="number"&&Ta(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Be(t,r,a,l){if(t=t.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=r.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+en(a),r=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function Rs(t,r,a){if(r!=null&&(r=""+en(r),r!==t.value&&(t.value=r),a==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=a!=null?""+en(a):""}function Nr(t,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(se(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=en(r),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Cn(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var gf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $o(t,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,a):typeof a!="number"||a===0||gf.has(r)?r==="float"?t.cssFloat=a:t[r]=(""+a).trim():t[r]=a+"px"}function Vu(t,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&$o(t,h,l)}else for(var d in r)r.hasOwnProperty(d)&&$o(t,d,r[d])}function Qo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_f=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(t){return _f.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Dn=null;function wa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pi=null,xi=null;function Ui(t){var r=ki(t);if(r&&(t=r.stateNode)){var a=t[At]||null;e:switch(t=r.stateNode,r.type){case"input":if(Or(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var h=l[At]||null;if(!h)throw Error(s(90));Or(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===t.form&&Ko(l)}break e;case"textarea":Rs(t,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Be(t,!!a.multiple,r,!1)}}}var Yo=!1;function Pu(t,r,a){if(Yo)return t(r,a);Yo=!0;try{var l=t(r);return l}finally{if(Yo=!1,(Pi!==null||xi!==null)&&(Rc(),Pi&&(r=Pi,t=xi,xi=Pi=null,Ui(r),t)))for(r=0;r<t.length;r++)Ui(t[r])}}function Is(t,r){var a=t.stateNode;if(a===null)return null;var l=a[At]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var On=!1;if(gn)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){On=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{On=!1}var oi=null,Mr=null,Li=null;function Xo(){if(Li)return Li;var t,r=Mr,a=r.length,l,h="value"in oi?oi.value:oi.textContent,d=h.length;for(t=0;t<a&&r[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&r[a-l]===h[d-l];l++);return Li=h.slice(t,1<l?1-l:void 0)}function li(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ui(){return!0}function Wo(){return!1}function Nt(t){function r(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ui:Wo,this.isPropagationStopped=Wo,this}return C(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),r}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=Nt(Fe),Ds=C({},Fe,{view:0,detail:0}),xu=Nt(Ds),ba,Ra,ci,Os=C({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ks,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ci&&(ci&&t.type==="mousemove"?(ba=t.screenX-ci.screenX,Ra=t.screenY-ci.screenY):Ra=ba=0,ci=t),ba)},movementY:function(t){return"movementY"in t?t.movementY:Ra}}),Nn=Nt(Os),Uu=C({},Os,{dataTransfer:0}),vf=Nt(Uu),Ns=C({},Ds,{relatedTarget:0}),Ia=Nt(Ns),Zo=C({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),Ca=Nt(Zo),Lu=C({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Da=Nt(Lu),Ef=C({},Fe,{data:0}),Jo=Nt(Ef),Ms={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function el(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Bu[t])?!!r[t]:!1}function ks(){return el}var ju=C({},Ds,{key:function(t){if(t.key){var r=Ms[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=li(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ks,charCode:function(t){return t.type==="keypress"?li(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?li(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oa=Nt(ju),Hu=C({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tl=Nt(Hu),zi=C({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ks}),qu=Nt(zi),Fu=C({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gu=Nt(Fu),Ku=C({},Os,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Na=Nt(Ku),tn=C({},Fe,{newState:0,oldState:0}),$u=Nt(tn),Qu=[9,13,27,32],hi=gn&&"CompositionEvent"in window,c=null;gn&&"documentMode"in document&&(c=document.documentMode);var y=gn&&"TextEvent"in window&&!c,_=gn&&(!hi||c&&8<c&&11>=c),A=" ",L=!1;function F(t,r){switch(t){case"keyup":return Qu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pe=!1;function wt(t,r){switch(t){case"compositionend":return ie(r);case"keypress":return r.which!==32?null:(L=!0,A);case"textInput":return t=r.data,t===A&&L?null:t;default:return null}}function xe(t,r){if(Pe)return t==="compositionend"||!hi&&F(t,r)?(t=Xo(),Li=Mr=oi=null,Pe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _&&r.locale!=="ko"?null:r.data;default:return null}}var Mt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function St(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Mt[t.type]:r==="textarea"}function Bi(t,r,a,l){Pi?xi?xi.push(l):xi=[l]:Pi=l,r=Nc(r,"onChange"),0<r.length&&(a=new Sa("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var Ut=null,fi=null;function nl(t){L_(t,0)}function Yu(t){var r=Rr(t);if(Ko(r))return t}function dg(t,r){if(t==="change")return r}var mg=!1;if(gn){var Tf;if(gn){var Af="oninput"in document;if(!Af){var pg=document.createElement("div");pg.setAttribute("oninput","return;"),Af=typeof pg.oninput=="function"}Tf=Af}else Tf=!1;mg=Tf&&(!document.documentMode||9<document.documentMode)}function gg(){Ut&&(Ut.detachEvent("onpropertychange",yg),fi=Ut=null)}function yg(t){if(t.propertyName==="value"&&Yu(fi)){var r=[];Bi(r,fi,t,wa(t)),Pu(nl,r)}}function Uw(t,r,a){t==="focusin"?(gg(),Ut=r,fi=a,Ut.attachEvent("onpropertychange",yg)):t==="focusout"&&gg()}function Lw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu(fi)}function zw(t,r){if(t==="click")return Yu(r)}function Bw(t,r){if(t==="input"||t==="change")return Yu(r)}function jw(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var yn=typeof Object.is=="function"?Object.is:jw;function il(t,r){if(yn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!pa.call(r,h)||!yn(t[h],r[h]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vg(t,r){var a=_g(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_g(a)}}function Eg(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Eg(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Tg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=Ta(t.document);r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Ta(t.document)}return r}function wf(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Hw(t,r){var a=Tg(r);r=t.focusedElem;var l=t.selectionRange;if(a!==r&&r&&r.ownerDocument&&Eg(r.ownerDocument.documentElement,r)){if(l!==null&&wf(r)){if(t=l.start,a=l.end,a===void 0&&(a=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(a,r.value.length);else if(a=(t=r.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var h=r.textContent.length,d=Math.min(l.start,h);l=l.end===void 0?d:Math.min(l.end,h),!a.extend&&d>l&&(h=l,l=d,d=h),h=vg(r,d);var v=vg(r,l);h&&v&&(a.rangeCount!==1||a.anchorNode!==h.node||a.anchorOffset!==h.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(h.node,h.offset),a.removeAllRanges(),d>l?(a.addRange(t),a.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),a.addRange(t)))}}for(t=[],a=r;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)a=t[r],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var qw=gn&&"documentMode"in document&&11>=document.documentMode,Ma=null,Sf=null,rl=null,bf=!1;function Ag(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bf||Ma==null||Ma!==Ta(l)||(l=Ma,"selectionStart"in l&&wf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),rl&&il(rl,l)||(rl=l,l=Nc(Sf,"onSelect"),0<l.length&&(r=new Sa("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=Ma)))}function Vs(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var ka={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionrun:Vs("Transition","TransitionRun"),transitionstart:Vs("Transition","TransitionStart"),transitioncancel:Vs("Transition","TransitionCancel"),transitionend:Vs("Transition","TransitionEnd")},Rf={},wg={};gn&&(wg=document.createElement("div").style,"AnimationEvent"in window||(delete ka.animationend.animation,delete ka.animationiteration.animation,delete ka.animationstart.animation),"TransitionEvent"in window||delete ka.transitionend.transition);function Ps(t){if(Rf[t])return Rf[t];if(!ka[t])return t;var r=ka[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in wg)return Rf[t]=r[a];return t}var Sg=Ps("animationend"),bg=Ps("animationiteration"),Rg=Ps("animationstart"),Fw=Ps("transitionrun"),Gw=Ps("transitionstart"),Kw=Ps("transitioncancel"),Ig=Ps("transitionend"),Cg=new Map,Dg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function $n(t,r){Cg.set(t,r),pn(r,[t])}var Mn=[],Va=0,If=0;function Xu(){for(var t=Va,r=If=Va=0;r<t;){var a=Mn[r];Mn[r++]=null;var l=Mn[r];Mn[r++]=null;var h=Mn[r];Mn[r++]=null;var d=Mn[r];if(Mn[r++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Og(a,h,d)}}function Wu(t,r,a,l){Mn[Va++]=t,Mn[Va++]=r,Mn[Va++]=a,Mn[Va++]=l,If|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Cf(t,r,a,l){return Wu(t,r,a,l),Zu(t)}function kr(t,r){return Wu(t,null,null,r),Zu(t)}function Og(t,r,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;h&&r!==null&&t.tag===3&&(d=t.stateNode,h=31-Jt(a),d=d.hiddenUpdates,t=d[h],t===null?d[h]=[r]:t.push(r),r.lane=a|536870912)}function Zu(t){if(50<Dl)throw Dl=0,Vd=null,Error(s(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var Pa={},Ng=new WeakMap;function kn(t,r){if(typeof t=="object"&&t!==null){var a=Ng.get(t);return a!==void 0?a:(r={value:t,source:r,stack:ve(r)},Ng.set(t,r),r)}return{value:t,source:r,stack:ve(r)}}var xa=[],Ua=0,Ju=null,ec=0,Vn=[],Pn=0,xs=null,ji=1,Hi="";function Us(t,r){xa[Ua++]=ec,xa[Ua++]=Ju,Ju=t,ec=r}function Mg(t,r,a){Vn[Pn++]=ji,Vn[Pn++]=Hi,Vn[Pn++]=xs,xs=t;var l=ji;t=Hi;var h=32-Jt(l)-1;l&=~(1<<h),a+=1;var d=32-Jt(r)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,ji=1<<32-Jt(r)+h|a<<h|l,Hi=d+t}else ji=1<<d|a<<h|l,Hi=t}function Df(t){t.return!==null&&(Us(t,1),Mg(t,1,0))}function Of(t){for(;t===Ju;)Ju=xa[--Ua],xa[Ua]=null,ec=xa[--Ua],xa[Ua]=null;for(;t===xs;)xs=Vn[--Pn],Vn[Pn]=null,Hi=Vn[--Pn],Vn[Pn]=null,ji=Vn[--Pn],Vn[Pn]=null}var nn=null,Lt=null,je=!1,Qn=null,di=!1,Nf=Error(s(519));function Ls(t){var r=Error(s(418,""));throw ol(kn(r,t)),Nf}function kg(t){var r=t.stateNode,a=t.type,l=t.memoizedProps;switch(r[Ot]=t,r[At]=l,a){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(a=0;a<Nl.length;a++)Ve(Nl[a],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Ve("invalid",r),bs(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ss(r);break;case"select":Ve("invalid",r);break;case"textarea":Ve("invalid",r),Nr(r,l.value,l.defaultValue,l.children),Ss(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||H_(r.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",r),Ve("toggle",r)),l.onScroll!=null&&Ve("scroll",r),l.onScrollEnd!=null&&Ve("scrollend",r),l.onClick!=null&&(r.onclick=Mc),r=!0):r=!1,r||Ls(t)}function Vg(t){for(nn=t.return;nn;)switch(nn.tag){case 3:case 27:di=!0;return;case 5:case 13:di=!1;return;default:nn=nn.return}}function sl(t){if(t!==nn)return!1;if(!je)return Vg(t),je=!0,!1;var r=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wd(t.type,t.memoizedProps)),a=!a),a&&(r=!0),r&&Lt&&Ls(t),Vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(r===0){Lt=Xn(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;t=t.nextSibling}Lt=null}}else Lt=nn?Xn(t.stateNode.nextSibling):null;return!0}function al(){Lt=nn=null,je=!1}function ol(t){Qn===null?Qn=[t]:Qn.push(t)}var ll=Error(s(460)),Pg=Error(s(474)),Mf={then:function(){}};function xg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tc(){}function Ug(t,r,a){switch(a=t[a],a===void 0?t.push(r):a!==r&&(r.then(tc,tc),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,t===ll?Error(s(483)):t;default:if(typeof r.status=="string")r.then(tc,tc);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,t===ll?Error(s(483)):t}throw ul=r,ll}}var ul=null;function Lg(){if(ul===null)throw Error(s(459));var t=ul;return ul=null,t}var La=null,cl=0;function nc(t){var r=cl;return cl+=1,La===null&&(La=[]),Ug(La,t,r)}function hl(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function ic(t,r){throw r.$$typeof===u?Error(s(525)):(t=Object.prototype.toString.call(r),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function zg(t){var r=t._init;return r(t._payload)}function Bg(t){function r(U,k){if(t){var j=U.deletions;j===null?(U.deletions=[k],U.flags|=16):j.push(k)}}function a(U,k){if(!t)return null;for(;k!==null;)r(U,k),k=k.sibling;return null}function l(U){for(var k=new Map;U!==null;)U.key!==null?k.set(U.key,U):k.set(U.index,U),U=U.sibling;return k}function h(U,k){return U=Gr(U,k),U.index=0,U.sibling=null,U}function d(U,k,j){return U.index=j,t?(j=U.alternate,j!==null?(j=j.index,j<k?(U.flags|=33554434,k):j):(U.flags|=33554434,k)):(U.flags|=1048576,k)}function v(U){return t&&U.alternate===null&&(U.flags|=33554434),U}function T(U,k,j,Y){return k===null||k.tag!==6?(k=Rd(j,U.mode,Y),k.return=U,k):(k=h(k,j),k.return=U,k)}function I(U,k,j,Y){var ce=j.type;return ce===p?Q(U,k,j.props.children,Y,j.key):k!==null&&(k.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ne&&zg(ce)===k.type)?(k=h(k,j.props),hl(k,j),k.return=U,k):(k=Tc(j.type,j.key,j.props,null,U.mode,Y),hl(k,j),k.return=U,k)}function x(U,k,j,Y){return k===null||k.tag!==4||k.stateNode.containerInfo!==j.containerInfo||k.stateNode.implementation!==j.implementation?(k=Id(j,U.mode,Y),k.return=U,k):(k=h(k,j.children||[]),k.return=U,k)}function Q(U,k,j,Y,ce){return k===null||k.tag!==7?(k=Qs(j,U.mode,Y,ce),k.return=U,k):(k=h(k,j),k.return=U,k)}function Z(U,k,j){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Rd(""+k,U.mode,j),k.return=U,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case f:return j=Tc(k.type,k.key,k.props,null,U.mode,j),hl(j,k),j.return=U,j;case m:return k=Id(k,U.mode,j),k.return=U,k;case ne:var Y=k._init;return k=Y(k._payload),Z(U,k,j)}if(se(k)||Te(k))return k=Qs(k,U.mode,j,null),k.return=U,k;if(typeof k.then=="function")return Z(U,nc(k),j);if(k.$$typeof===O)return Z(U,_c(U,k),j);ic(U,k)}return null}function H(U,k,j,Y){var ce=k!==null?k.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ce!==null?null:T(U,k,""+j,Y);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case f:return j.key===ce?I(U,k,j,Y):null;case m:return j.key===ce?x(U,k,j,Y):null;case ne:return ce=j._init,j=ce(j._payload),H(U,k,j,Y)}if(se(j)||Te(j))return ce!==null?null:Q(U,k,j,Y,null);if(typeof j.then=="function")return H(U,k,nc(j),Y);if(j.$$typeof===O)return H(U,k,_c(U,j),Y);ic(U,j)}return null}function $(U,k,j,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return U=U.get(j)||null,T(k,U,""+Y,ce);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case f:return U=U.get(Y.key===null?j:Y.key)||null,I(k,U,Y,ce);case m:return U=U.get(Y.key===null?j:Y.key)||null,x(k,U,Y,ce);case ne:var Oe=Y._init;return Y=Oe(Y._payload),$(U,k,j,Y,ce)}if(se(Y)||Te(Y))return U=U.get(j)||null,Q(k,U,Y,ce,null);if(typeof Y.then=="function")return $(U,k,j,nc(Y),ce);if(Y.$$typeof===O)return $(U,k,j,_c(k,Y),ce);ic(k,Y)}return null}function he(U,k,j,Y){for(var ce=null,Oe=null,de=k,ye=k=0,Pt=null;de!==null&&ye<j.length;ye++){de.index>ye?(Pt=de,de=null):Pt=de.sibling;var He=H(U,de,j[ye],Y);if(He===null){de===null&&(de=Pt);break}t&&de&&He.alternate===null&&r(U,de),k=d(He,k,ye),Oe===null?ce=He:Oe.sibling=He,Oe=He,de=Pt}if(ye===j.length)return a(U,de),je&&Us(U,ye),ce;if(de===null){for(;ye<j.length;ye++)de=Z(U,j[ye],Y),de!==null&&(k=d(de,k,ye),Oe===null?ce=de:Oe.sibling=de,Oe=de);return je&&Us(U,ye),ce}for(de=l(de);ye<j.length;ye++)Pt=$(de,U,ye,j[ye],Y),Pt!==null&&(t&&Pt.alternate!==null&&de.delete(Pt.key===null?ye:Pt.key),k=d(Pt,k,ye),Oe===null?ce=Pt:Oe.sibling=Pt,Oe=Pt);return t&&de.forEach(function(Zr){return r(U,Zr)}),je&&Us(U,ye),ce}function we(U,k,j,Y){if(j==null)throw Error(s(151));for(var ce=null,Oe=null,de=k,ye=k=0,Pt=null,He=j.next();de!==null&&!He.done;ye++,He=j.next()){de.index>ye?(Pt=de,de=null):Pt=de.sibling;var Zr=H(U,de,He.value,Y);if(Zr===null){de===null&&(de=Pt);break}t&&de&&Zr.alternate===null&&r(U,de),k=d(Zr,k,ye),Oe===null?ce=Zr:Oe.sibling=Zr,Oe=Zr,de=Pt}if(He.done)return a(U,de),je&&Us(U,ye),ce;if(de===null){for(;!He.done;ye++,He=j.next())He=Z(U,He.value,Y),He!==null&&(k=d(He,k,ye),Oe===null?ce=He:Oe.sibling=He,Oe=He);return je&&Us(U,ye),ce}for(de=l(de);!He.done;ye++,He=j.next())He=$(de,U,ye,He.value,Y),He!==null&&(t&&He.alternate!==null&&de.delete(He.key===null?ye:He.key),k=d(He,k,ye),Oe===null?ce=He:Oe.sibling=He,Oe=He);return t&&de.forEach(function(ab){return r(U,ab)}),je&&Us(U,ye),ce}function lt(U,k,j,Y){if(typeof j=="object"&&j!==null&&j.type===p&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case f:e:{for(var ce=j.key;k!==null;){if(k.key===ce){if(ce=j.type,ce===p){if(k.tag===7){a(U,k.sibling),Y=h(k,j.props.children),Y.return=U,U=Y;break e}}else if(k.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ne&&zg(ce)===k.type){a(U,k.sibling),Y=h(k,j.props),hl(Y,j),Y.return=U,U=Y;break e}a(U,k);break}else r(U,k);k=k.sibling}j.type===p?(Y=Qs(j.props.children,U.mode,Y,j.key),Y.return=U,U=Y):(Y=Tc(j.type,j.key,j.props,null,U.mode,Y),hl(Y,j),Y.return=U,U=Y)}return v(U);case m:e:{for(ce=j.key;k!==null;){if(k.key===ce)if(k.tag===4&&k.stateNode.containerInfo===j.containerInfo&&k.stateNode.implementation===j.implementation){a(U,k.sibling),Y=h(k,j.children||[]),Y.return=U,U=Y;break e}else{a(U,k);break}else r(U,k);k=k.sibling}Y=Id(j,U.mode,Y),Y.return=U,U=Y}return v(U);case ne:return ce=j._init,j=ce(j._payload),lt(U,k,j,Y)}if(se(j))return he(U,k,j,Y);if(Te(j)){if(ce=Te(j),typeof ce!="function")throw Error(s(150));return j=ce.call(j),we(U,k,j,Y)}if(typeof j.then=="function")return lt(U,k,nc(j),Y);if(j.$$typeof===O)return lt(U,k,_c(U,j),Y);ic(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,k!==null&&k.tag===6?(a(U,k.sibling),Y=h(k,j),Y.return=U,U=Y):(a(U,k),Y=Rd(j,U.mode,Y),Y.return=U,U=Y),v(U)):a(U,k)}return function(U,k,j,Y){try{cl=0;var ce=lt(U,k,j,Y);return La=null,ce}catch(de){if(de===ll)throw de;var Oe=zn(29,de,null,U.mode);return Oe.lanes=Y,Oe.return=U,Oe}finally{}}}var zs=Bg(!0),jg=Bg(!1),za=ze(null),rc=ze(0);function Hg(t,r){t=Ji,Ke(rc,t),Ke(za,r),Ji=t|r.baseLanes}function kf(){Ke(rc,Ji),Ke(za,za.current)}function Vf(){Ji=rc.current,rt(za),rt(rc)}var xn=ze(null),mi=null;function Vr(t){var r=t.alternate;Ke(bt,bt.current&1),Ke(xn,t),mi===null&&(r===null||za.current!==null||r.memoizedState!==null)&&(mi=t)}function qg(t){if(t.tag===22){if(Ke(bt,bt.current),Ke(xn,t),mi===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(mi=t)}}else Pr()}function Pr(){Ke(bt,bt.current),Ke(xn,xn.current)}function qi(t){rt(xn),mi===t&&(mi=null),rt(bt)}var bt=ze(0);function sc(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $w=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(a){return a()})}},Qw=i.unstable_scheduleCallback,Yw=i.unstable_NormalPriority,Rt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pf(){return{controller:new $w,data:new Map,refCount:0}}function fl(t){t.refCount--,t.refCount===0&&Qw(Yw,function(){t.controller.abort()})}var dl=null,xf=0,Ba=0,ja=null;function Xw(t,r){if(dl===null){var a=dl=[];xf=0,Ba=Hd(),ja={status:"pending",value:void 0,then:function(l){a.push(l)}}}return xf++,r.then(Fg,Fg),r}function Fg(){if(--xf===0&&dl!==null){ja!==null&&(ja.status="fulfilled");var t=dl;dl=null,Ba=0,ja=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function Ww(t,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Gg=S.S;S.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Xw(t,r),Gg!==null&&Gg(t,r)};var Bs=ze(null);function Uf(){var t=Bs.current;return t!==null?t:Xe.pooledCache}function ac(t,r){r===null?Ke(Bs,Bs.current):Ke(Bs,r.pool)}function Kg(){var t=Uf();return t===null?null:{parent:Rt._currentValue,pool:t}}var xr=0,Ce=null,$e=null,gt=null,oc=!1,Ha=!1,js=!1,lc=0,ml=0,qa=null,Zw=0;function ht(){throw Error(s(321))}function Lf(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!yn(t[a],r[a]))return!1;return!0}function zf(t,r,a,l,h,d){return xr=d,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,S.H=t===null||t.memoizedState===null?Hs:Ur,js=!1,d=a(l,h),js=!1,Ha&&(d=Qg(r,a,l,h)),$g(t),d}function $g(t){S.H=pi;var r=$e!==null&&$e.next!==null;if(xr=0,gt=$e=Ce=null,oc=!1,ml=0,qa=null,r)throw Error(s(300));t===null||kt||(t=t.dependencies,t!==null&&yc(t)&&(kt=!0))}function Qg(t,r,a,l){Ce=t;var h=0;do{if(Ha&&(qa=null),ml=0,Ha=!1,25<=h)throw Error(s(301));if(h+=1,gt=$e=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=qs,d=r(a,l)}while(Ha);return d}function Jw(){var t=S.H,r=t.useState()[0];return r=typeof r.then=="function"?pl(r):r,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(Ce.flags|=1024),r}function Bf(){var t=lc!==0;return lc=0,t}function jf(t,r,a){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~a}function Hf(t){if(oc){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}oc=!1}xr=0,gt=$e=Ce=null,Ha=!1,ml=lc=0,qa=null}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ce.memoizedState=gt=t:gt=gt.next=t,gt}function yt(){if($e===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var r=gt===null?Ce.memoizedState:gt.next;if(r!==null)gt=r,$e=t;else{if(t===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},gt===null?Ce.memoizedState=gt=t:gt=gt.next=t}return gt}var uc;uc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function pl(t){var r=ml;return ml+=1,qa===null&&(qa=[]),t=Ug(qa,t,r),r=Ce,(gt===null?r.memoizedState:gt.next)===null&&(r=r.alternate,S.H=r===null||r.memoizedState===null?Hs:Ur),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return pl(t);if(t.$$typeof===O)return Kt(t)}throw Error(s(438,String(t)))}function qf(t){var r=null,a=Ce.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=uc(),Ce.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(t),l=0;l<t;l++)a[l]=le;return r.index++,a}function Fi(t,r){return typeof r=="function"?r(t):r}function hc(t){var r=yt();return Ff(r,$e,t)}function Ff(t,r,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}r.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{r=h.next;var T=v=null,I=null,x=r,Q=!1;do{var Z=x.lane&-536870913;if(Z!==x.lane?(Ue&Z)===Z:(xr&Z)===Z){var H=x.revertLane;if(H===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),Z===Ba&&(Q=!0);else if((xr&H)===H){x=x.next,H===Ba&&(Q=!0);continue}else Z={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},I===null?(T=I=Z,v=d):I=I.next=Z,Ce.lanes|=H,Kr|=H;Z=x.action,js&&a(d,Z),d=x.hasEagerState?x.eagerState:a(d,Z)}else H={lane:Z,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},I===null?(T=I=H,v=d):I=I.next=H,Ce.lanes|=Z,Kr|=Z;x=x.next}while(x!==null&&x!==r);if(I===null?v=d:I.next=T,!yn(d,t.memoizedState)&&(kt=!0,Q&&(a=ja,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Gf(t){var r=yt(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=r.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);yn(d,r.memoizedState)||(kt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function Yg(t,r,a){var l=Ce,h=yt(),d=je;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var v=!yn(($e||h).memoizedState,a);if(v&&(h.memoizedState=a,kt=!0),h=h.queue,Qf(Zg.bind(null,l,h,t),[t]),h.getSnapshot!==r||v||gt!==null&&gt.memoizedState.tag&1){if(l.flags|=2048,Fa(9,Wg.bind(null,l,h,a,r),{destroy:void 0},null),Xe===null)throw Error(s(349));d||(xr&60)!==0||Xg(l,r,a)}return a}function Xg(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Ce.updateQueue,r===null?(r=uc(),Ce.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Wg(t,r,a,l){r.value=a,r.getSnapshot=l,Jg(r)&&ey(t)}function Zg(t,r,a){return a(function(){Jg(r)&&ey(t)})}function Jg(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!yn(t,a)}catch{return!0}}function ey(t){var r=kr(t,2);r!==null&&rn(r,t,2)}function Kf(t){var r=ln();if(typeof t=="function"){var a=t;if(t=a(),js){ni(!0);try{a()}finally{ni(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},r}function ty(t,r,a,l){return t.baseState=a,Ff(t,$e,typeof l=="function"?l:Fi)}function eS(t,r,a,l,h){if(mc(t))throw Error(s(485));if(t=r.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};S.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,ny(r,d)):(d.next=a.next,r.pending=a.next=d)}}function ny(t,r){var a=r.action,l=r.payload,h=t.state;if(r.isTransition){var d=S.T,v={};S.T=v;try{var T=a(h,l),I=S.S;I!==null&&I(v,T),iy(t,r,T)}catch(x){$f(t,r,x)}finally{S.T=d}}else try{d=a(h,l),iy(t,r,d)}catch(x){$f(t,r,x)}}function iy(t,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ry(t,r,l)},function(l){return $f(t,r,l)}):ry(t,r,a)}function ry(t,r,a){r.status="fulfilled",r.value=a,sy(r),t.state=a,r=t.pending,r!==null&&(a=r.next,a===r?t.pending=null:(a=a.next,r.next=a,ny(t,a)))}function $f(t,r,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,sy(r),r=r.next;while(r!==l)}t.action=null}function sy(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function ay(t,r){return r}function oy(t,r){if(je){var a=Xe.formState;if(a!==null){e:{var l=Ce;if(je){if(Lt){t:{for(var h=Lt,d=di;h.nodeType!==8;){if(!d){h=null;break t}if(h=Xn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){Lt=Xn(h.nextSibling),l=h.data==="F!";break e}}Ls(l)}l=!1}l&&(r=a[0])}}return a=ln(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ay,lastRenderedState:r},a.queue=l,a=by.bind(null,Ce,l),l.dispatch=a,l=Kf(!1),d=Jf.bind(null,Ce,!1,l.queue),l=ln(),h={state:r,dispatch:null,action:t,pending:null},l.queue=h,a=eS.bind(null,Ce,h,d,a),h.dispatch=a,l.memoizedState=t,[r,a,!1]}function ly(t){var r=yt();return uy(r,$e,t)}function uy(t,r,a){r=Ff(t,r,ay)[0],t=hc(Fi)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?pl(r):r;var l=yt(),h=l.queue,d=h.dispatch;return a!==l.memoizedState&&(Ce.flags|=2048,Fa(9,tS.bind(null,h,a),{destroy:void 0},null)),[r,d,t]}function tS(t,r){t.action=r}function cy(t){var r=yt(),a=$e;if(a!==null)return uy(r,a,t);yt(),r=r.memoizedState,a=yt();var l=a.queue.dispatch;return a.memoizedState=t,[r,l,!1]}function Fa(t,r,a,l){return t={tag:t,create:r,inst:a,deps:l,next:null},r=Ce.updateQueue,r===null&&(r=uc(),Ce.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t),t}function hy(){return yt().memoizedState}function fc(t,r,a,l){var h=ln();Ce.flags|=t,h.memoizedState=Fa(1|r,a,{destroy:void 0},l===void 0?null:l)}function dc(t,r,a,l){var h=yt();l=l===void 0?null:l;var d=h.memoizedState.inst;$e!==null&&l!==null&&Lf(l,$e.memoizedState.deps)?h.memoizedState=Fa(r,a,d,l):(Ce.flags|=t,h.memoizedState=Fa(1|r,a,d,l))}function fy(t,r){fc(8390656,8,t,r)}function Qf(t,r){dc(2048,8,t,r)}function dy(t,r){return dc(4,2,t,r)}function my(t,r){return dc(4,4,t,r)}function py(t,r){if(typeof r=="function"){t=t();var a=r(t);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function gy(t,r,a){a=a!=null?a.concat([t]):null,dc(4,4,py.bind(null,r,t),a)}function Yf(){}function yy(t,r){var a=yt();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Lf(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function _y(t,r){var a=yt();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Lf(r,l[1]))return l[0];if(l=t(),js){ni(!0);try{t()}finally{ni(!1)}}return a.memoizedState=[l,r],l}function Xf(t,r,a){return a===void 0||(xr&1073741824)!==0?t.memoizedState=r:(t.memoizedState=a,t=E_(),Ce.lanes|=t,Kr|=t,a)}function vy(t,r,a,l){return yn(a,r)?a:za.current!==null?(t=Xf(t,a,l),yn(t,r)||(kt=!0),t):(xr&42)===0?(kt=!0,t.memoizedState=a):(t=E_(),Ce.lanes|=t,Kr|=t,r)}function Ey(t,r,a,l,h){var d=ae.p;ae.p=d!==0&&8>d?d:8;var v=S.T,T={};S.T=T,Jf(t,!1,r,a);try{var I=h(),x=S.S;if(x!==null&&x(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Q=Ww(I,l);gl(t,r,Q,Tn(t))}else gl(t,r,l,Tn(t))}catch(Z){gl(t,r,{then:function(){},status:"rejected",reason:Z},Tn())}finally{ae.p=d,S.T=v}}function nS(){}function Wf(t,r,a,l){if(t.tag!==5)throw Error(s(476));var h=Ty(t).queue;Ey(t,h,r,Ie,a===null?nS:function(){return Ay(t),a(l)})}function Ty(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:Ie,baseState:Ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:Ie},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function Ay(t){var r=Ty(t).next.queue;gl(t,r,{},Tn())}function Zf(){return Kt(xl)}function wy(){return yt().memoizedState}function Sy(){return yt().memoizedState}function iS(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var a=Tn();t=Br(a);var l=jr(r,t,a);l!==null&&(rn(l,r,a),vl(l,r,a)),r={cache:Pf()},t.payload=r;return}r=r.return}}function rS(t,r,a){var l=Tn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},mc(t)?Ry(r,a):(a=Cf(t,r,a,l),a!==null&&(rn(a,t,l),Iy(a,r,l)))}function by(t,r,a){var l=Tn();gl(t,r,a,l)}function gl(t,r,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(mc(t))Ry(r,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,yn(T,v))return Wu(t,r,h,0),Xe===null&&Xu(),!1}catch{}finally{}if(a=Cf(t,r,h,l),a!==null)return rn(a,t,l),Iy(a,r,l),!0}return!1}function Jf(t,r,a,l){if(l={lane:2,revertLane:Hd(),action:l,hasEagerState:!1,eagerState:null,next:null},mc(t)){if(r)throw Error(s(479))}else r=Cf(t,a,l,2),r!==null&&rn(r,t,2)}function mc(t){var r=t.alternate;return t===Ce||r!==null&&r===Ce}function Ry(t,r){Ha=oc=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Iy(t,r,a){if((a&4194176)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,wr(t,a)}}var pi={readContext:Kt,use:cc,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht};pi.useCacheRefresh=ht,pi.useMemoCache=ht,pi.useHostTransitionStatus=ht,pi.useFormState=ht,pi.useActionState=ht,pi.useOptimistic=ht;var Hs={readContext:Kt,use:cc,useCallback:function(t,r){return ln().memoizedState=[t,r===void 0?null:r],t},useContext:Kt,useEffect:fy,useImperativeHandle:function(t,r,a){a=a!=null?a.concat([t]):null,fc(4194308,4,py.bind(null,r,t),a)},useLayoutEffect:function(t,r){return fc(4194308,4,t,r)},useInsertionEffect:function(t,r){fc(4,2,t,r)},useMemo:function(t,r){var a=ln();r=r===void 0?null:r;var l=t();if(js){ni(!0);try{t()}finally{ni(!1)}}return a.memoizedState=[l,r],l},useReducer:function(t,r,a){var l=ln();if(a!==void 0){var h=a(r);if(js){ni(!0);try{a(r)}finally{ni(!1)}}}else h=r;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=rS.bind(null,Ce,t),[l.memoizedState,t]},useRef:function(t){var r=ln();return t={current:t},r.memoizedState=t},useState:function(t){t=Kf(t);var r=t.queue,a=by.bind(null,Ce,r);return r.dispatch=a,[t.memoizedState,a]},useDebugValue:Yf,useDeferredValue:function(t,r){var a=ln();return Xf(a,t,r)},useTransition:function(){var t=Kf(!1);return t=Ey.bind(null,Ce,t.queue,!0,!1),ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,a){var l=Ce,h=ln();if(je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),Xe===null)throw Error(s(349));(Ue&60)!==0||Xg(l,r,a)}h.memoizedState=a;var d={value:a,getSnapshot:r};return h.queue=d,fy(Zg.bind(null,l,d,t),[t]),l.flags|=2048,Fa(9,Wg.bind(null,l,d,a,r),{destroy:void 0},null),a},useId:function(){var t=ln(),r=Xe.identifierPrefix;if(je){var a=Hi,l=ji;a=(l&~(1<<32-Jt(l)-1)).toString(32)+a,r=":"+r+"R"+a,a=lc++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Zw++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},useCacheRefresh:function(){return ln().memoizedState=iS.bind(null,Ce)}};Hs.useMemoCache=qf,Hs.useHostTransitionStatus=Zf,Hs.useFormState=oy,Hs.useActionState=oy,Hs.useOptimistic=function(t){var r=ln();r.memoizedState=r.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=Jf.bind(null,Ce,!0,a),a.dispatch=r,[t,r]};var Ur={readContext:Kt,use:cc,useCallback:yy,useContext:Kt,useEffect:Qf,useImperativeHandle:gy,useInsertionEffect:dy,useLayoutEffect:my,useMemo:_y,useReducer:hc,useRef:hy,useState:function(){return hc(Fi)},useDebugValue:Yf,useDeferredValue:function(t,r){var a=yt();return vy(a,$e.memoizedState,t,r)},useTransition:function(){var t=hc(Fi)[0],r=yt().memoizedState;return[typeof t=="boolean"?t:pl(t),r]},useSyncExternalStore:Yg,useId:wy};Ur.useCacheRefresh=Sy,Ur.useMemoCache=qf,Ur.useHostTransitionStatus=Zf,Ur.useFormState=ly,Ur.useActionState=ly,Ur.useOptimistic=function(t,r){var a=yt();return ty(a,$e,t,r)};var qs={readContext:Kt,use:cc,useCallback:yy,useContext:Kt,useEffect:Qf,useImperativeHandle:gy,useInsertionEffect:dy,useLayoutEffect:my,useMemo:_y,useReducer:Gf,useRef:hy,useState:function(){return Gf(Fi)},useDebugValue:Yf,useDeferredValue:function(t,r){var a=yt();return $e===null?Xf(a,t,r):vy(a,$e.memoizedState,t,r)},useTransition:function(){var t=Gf(Fi)[0],r=yt().memoizedState;return[typeof t=="boolean"?t:pl(t),r]},useSyncExternalStore:Yg,useId:wy};qs.useCacheRefresh=Sy,qs.useMemoCache=qf,qs.useHostTransitionStatus=Zf,qs.useFormState=cy,qs.useActionState=cy,qs.useOptimistic=function(t,r){var a=yt();return $e!==null?ty(a,$e,t,r):(a.baseState=t,[t,a.queue.dispatch])};function ed(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:C({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var td={isMounted:function(t){return(t=t._reactInternals)?pe(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var l=Tn(),h=Br(l);h.payload=r,a!=null&&(h.callback=a),r=jr(t,h,l),r!==null&&(rn(r,t,l),vl(r,t,l))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=Tn(),h=Br(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=jr(t,h,l),r!==null&&(rn(r,t,l),vl(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Tn(),l=Br(a);l.tag=2,r!=null&&(l.callback=r),r=jr(t,l,a),r!==null&&(rn(r,t,a),vl(r,t,a))}};function Cy(t,r,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):r.prototype&&r.prototype.isPureReactComponent?!il(a,l)||!il(h,d):!0}function Dy(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&td.enqueueReplaceState(r,r.state,null)}function Fs(t,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(t=t.defaultProps){a===r&&(a=C({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var pc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Oy(t){pc(t)}function Ny(t){console.error(t)}function My(t){pc(t)}function gc(t,r){try{var a=t.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function ky(t,r,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function nd(t,r,a){return a=Br(a),a.tag=3,a.payload={element:null},a.callback=function(){gc(t,r)},a}function Vy(t){return t=Br(t),t.tag=3,t}function Py(t,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){ky(r,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){ky(r,a,l),typeof h!="function"&&($r===null?$r=new Set([this]):$r.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function sS(t,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&_l(r,a,h,!0),a=xn.current,a!==null){switch(a.tag){case 13:return mi===null?Ud():a.alternate===null&&ot===0&&(ot=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Mf?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),zd(t,l,h)),!1;case 22:return a.flags|=65536,l===Mf?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),zd(t,l,h)),!1}throw Error(s(435,a.tag))}return zd(t,l,h),Ud(),!1}if(je)return r=xn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Nf&&(t=Error(s(422),{cause:l}),ol(kn(t,a)))):(l!==Nf&&(r=Error(s(423),{cause:l}),ol(kn(r,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=kn(l,a),h=nd(t.stateNode,l,h),yd(t,h),ot!==4&&(ot=2)),!1;var d=Error(s(520),{cause:l});if(d=kn(d,a),Il===null?Il=[d]:Il.push(d),ot!==4&&(ot=2),r===null)return!0;l=kn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=nd(a.stateNode,l,t),yd(a,t),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&($r===null||!$r.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Vy(h),Py(h,t,a,l),yd(a,h),!1}a=a.return}while(a!==null);return!1}var xy=Error(s(461)),kt=!1;function zt(t,r,a,l){r.child=t===null?jg(r,null,a,l):zs(r,t.child,a,l)}function Uy(t,r,a,l,h){a=a.render;var d=r.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ks(r),l=zf(t,r,a,v,d,h),T=Bf(),t!==null&&!kt?(jf(t,r,h),Gi(t,r,h)):(je&&T&&Df(r),r.flags|=1,zt(t,r,l,h),r.child)}function Ly(t,r,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!bd(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,zy(t,r,d,l,h)):(t=Tc(a.type,null,l,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(d=t.child,!hd(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:il,a(v,l)&&t.ref===r.ref)return Gi(t,r,h)}return r.flags|=1,t=Gr(d,l),t.ref=r.ref,t.return=r,r.child=t}function zy(t,r,a,l,h){if(t!==null){var d=t.memoizedProps;if(il(d,l)&&t.ref===r.ref)if(kt=!1,r.pendingProps=l=d,hd(t,h))(t.flags&131072)!==0&&(kt=!0);else return r.lanes=t.lanes,Gi(t,r,h)}return id(t,r,a,l,h)}function By(t,r,a){var l=r.pendingProps,h=l.children,d=(r.stateNode._pendingVisibility&2)!==0,v=t!==null?t.memoizedState:null;if(yl(t,r),l.mode==="hidden"||d){if((r.flags&128)!==0){if(l=v!==null?v.baseLanes|a:a,t!==null){for(h=r.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return jy(t,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&ac(r,v!==null?v.cachePool:null),v!==null?Hg(r,v):kf(),qg(r);else return r.lanes=r.childLanes=536870912,jy(t,r,v!==null?v.baseLanes|a:a,a)}else v!==null?(ac(r,v.cachePool),Hg(r,v),Pr(),r.memoizedState=null):(t!==null&&ac(r,null),kf(),Pr());return zt(t,r,h,a),r.child}function jy(t,r,a,l){var h=Uf();return h=h===null?null:{parent:Rt._currentValue,pool:h},r.memoizedState={baseLanes:a,cachePool:h},t!==null&&ac(r,null),kf(),qg(r),t!==null&&_l(t,r,l,!0),null}function yl(t,r){var a=r.ref;if(a===null)t!==null&&t.ref!==null&&(r.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(r.flags|=2097664)}}function id(t,r,a,l,h){return Ks(r),a=zf(t,r,a,l,void 0,h),l=Bf(),t!==null&&!kt?(jf(t,r,h),Gi(t,r,h)):(je&&l&&Df(r),r.flags|=1,zt(t,r,a,h),r.child)}function Hy(t,r,a,l,h,d){return Ks(r),r.updateQueue=null,a=Qg(r,l,a,h),$g(t),l=Bf(),t!==null&&!kt?(jf(t,r,d),Gi(t,r,d)):(je&&l&&Df(r),r.flags|=1,zt(t,r,a,d),r.child)}function qy(t,r,a,l,h){if(Ks(r),r.stateNode===null){var d=Pa,v=a.contextType;typeof v=="object"&&v!==null&&(d=Kt(v)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=td,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},pd(r),v=a.contextType,d.context=typeof v=="object"&&v!==null?Kt(v):Pa,d.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ed(r,a,v,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&td.enqueueReplaceState(d,d.state,null),Tl(r,l,d,h),El(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){d=r.stateNode;var T=r.memoizedProps,I=Fs(a,T);d.props=I;var x=d.context,Q=a.contextType;v=Pa,typeof Q=="object"&&Q!==null&&(v=Kt(Q));var Z=a.getDerivedStateFromProps;Q=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||x!==v)&&Dy(r,d,l,v),zr=!1;var H=r.memoizedState;d.state=H,Tl(r,l,d,h),El(),x=r.memoizedState,T||H!==x||zr?(typeof Z=="function"&&(ed(r,a,Z,l),x=r.memoizedState),(I=zr||Cy(r,a,I,l,H,x,v))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=x),d.props=l,d.state=x,d.context=v,l=I):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,gd(t,r),v=r.memoizedProps,Q=Fs(a,v),d.props=Q,Z=r.pendingProps,H=d.context,x=a.contextType,I=Pa,typeof x=="object"&&x!==null&&(I=Kt(x)),T=a.getDerivedStateFromProps,(x=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Z||H!==I)&&Dy(r,d,l,I),zr=!1,H=r.memoizedState,d.state=H,Tl(r,l,d,h),El();var $=r.memoizedState;v!==Z||H!==$||zr||t!==null&&t.dependencies!==null&&yc(t.dependencies)?(typeof T=="function"&&(ed(r,a,T,l),$=r.memoizedState),(Q=zr||Cy(r,a,Q,l,H,$,I)||t!==null&&t.dependencies!==null&&yc(t.dependencies))?(x||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,$,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,$,I)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=$),d.props=l,d.state=$,d.context=I,l=Q):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(r.flags|=1024),l=!1)}return d=l,yl(t,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,t!==null&&l?(r.child=zs(r,t.child,null,h),r.child=zs(r,null,a,h)):zt(t,r,a,h),r.memoizedState=d.state,t=r.child):t=Gi(t,r,h),t}function Fy(t,r,a,l){return al(),r.flags|=256,zt(t,r,a,l),r.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:Kg()}}function ad(t,r,a){return t=t!==null?t.childLanes&~a:0,r&&(t|=Bn),t}function Gy(t,r,a){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(bt.current&2)!==0),v&&(h=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,t===null){if(je){if(h?Vr(r):Pr(),je){var T=Lt,I;if(I=T){e:{for(I=T,T=di;I.nodeType!==8;){if(!T){T=null;break e}if(I=Xn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(r.memoizedState={dehydrated:T,treeContext:xs!==null?{id:ji,overflow:Hi}:null,retryLane:536870912},I=zn(18,null,null,0),I.stateNode=T,I.return=r,r.child=I,nn=r,Lt=null,I=!0):I=!1}I||Ls(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?r.lanes=16:r.lanes=536870912,null;qi(r)}return T=l.children,l=l.fallback,h?(Pr(),h=r.mode,T=ld({mode:"hidden",children:T},h),l=Qs(l,h,a,null),T.return=r,l.return=r,T.sibling=l,r.child=T,h=r.child,h.memoizedState=sd(a),h.childLanes=ad(t,v,a),r.memoizedState=rd,l):(Vr(r),od(r,T))}if(I=t.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)r.flags&256?(Vr(r),r.flags&=-257,r=ud(t,r,a)):r.memoizedState!==null?(Pr(),r.child=t.child,r.flags|=128,r=null):(Pr(),h=l.fallback,T=r.mode,l=ld({mode:"visible",children:l.children},T),h=Qs(h,T,a,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,zs(r,t.child,null,a),l=r.child,l.memoizedState=sd(a),l.childLanes=ad(t,v,a),r.memoizedState=rd,r=h);else if(Vr(r),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var x=v.dgst;v=x,l=Error(s(419)),l.stack="",l.digest=v,ol({value:l,source:null,stack:null}),r=ud(t,r,a)}else if(kt||_l(t,r,a,!1),v=(a&t.childLanes)!==0,kt||v){if(v=Xe,v!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane)throw I.retryLane=l,kr(t,l),rn(v,t,l),xy}T.data==="$?"||Ud(),r=ud(t,r,a)}else T.data==="$?"?(r.flags|=128,r.child=t.child,r=ES.bind(null,t),T._reactRetry=r,r=null):(t=I.treeContext,Lt=Xn(T.nextSibling),nn=r,je=!0,Qn=null,di=!1,t!==null&&(Vn[Pn++]=ji,Vn[Pn++]=Hi,Vn[Pn++]=xs,ji=t.id,Hi=t.overflow,xs=r),r=od(r,l.children),r.flags|=4096);return r}return h?(Pr(),h=l.fallback,T=r.mode,I=t.child,x=I.sibling,l=Gr(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&31457280,x!==null?h=Gr(x,h):(h=Qs(h,T,a,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,T=t.child.memoizedState,T===null?T=sd(a):(I=T.cachePool,I!==null?(x=Rt._currentValue,I=I.parent!==x?{parent:x,pool:x}:I):I=Kg(),T={baseLanes:T.baseLanes|a,cachePool:I}),h.memoizedState=T,h.childLanes=ad(t,v,a),r.memoizedState=rd,l):(Vr(r),a=t.child,t=a.sibling,a=Gr(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,t!==null&&(v=r.deletions,v===null?(r.deletions=[t],r.flags|=16):v.push(t)),r.child=a,r.memoizedState=null,a)}function od(t,r){return r=ld({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function ld(t,r){return y_(t,r,0,null)}function ud(t,r,a){return zs(r,t.child,null,a),t=od(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Ky(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),dd(t.return,r,a)}function cd(t,r,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function $y(t,r,a){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(zt(t,r,l.children,a),l=bt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ky(t,a,r);else if(t.tag===19)Ky(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(Ke(bt,l),h){case"forwards":for(a=r.child,h=null;a!==null;)t=a.alternate,t!==null&&sc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),cd(r,!1,h,a,d);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&sc(t)===null){r.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}cd(r,!0,a,null,d);break;case"together":cd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Gi(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Kr|=r.lanes,(a&r.childLanes)===0)if(t!==null){if(_l(t,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(s(153));if(r.child!==null){for(t=r.child,a=Gr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Gr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function hd(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&yc(t)))}function aS(t,r,a){switch(r.tag){case 3:yr(r,r.stateNode.containerInfo),Lr(r,Rt,t.memoizedState.cache),al();break;case 27:case 5:xo(r);break;case 4:yr(r,r.stateNode.containerInfo);break;case 10:Lr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Vr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?Gy(t,r,a):(Vr(r),t=Gi(t,r,a),t!==null?t.sibling:null);Vr(r);break;case 19:var h=(t.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(_l(t,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return $y(t,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ke(bt,bt.current),l)break;return null;case 22:case 23:return r.lanes=0,By(t,r,a);case 24:Lr(r,Rt,t.memoizedState.cache)}return Gi(t,r,a)}function Qy(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps)kt=!0;else{if(!hd(t,a)&&(r.flags&128)===0)return kt=!1,aS(t,r,a);kt=(t.flags&131072)!==0}else kt=!1,je&&(r.flags&1048576)!==0&&Mg(r,ec,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")bd(l)?(t=Fs(l,t),r.tag=1,r=qy(null,r,l,t,a)):(r.tag=0,r=id(null,r,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===P){r.tag=11,r=Uy(null,r,l,t,a);break e}else if(h===K){r.tag=14,r=Ly(null,r,l,t,a);break e}}throw r=R(l)||l,Error(s(306,r,""))}}return r;case 0:return id(t,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=Fs(l,r.pendingProps),qy(t,r,l,h,a);case 3:e:{if(yr(r,r.stateNode.containerInfo),t===null)throw Error(s(387));var d=r.pendingProps;h=r.memoizedState,l=h.element,gd(t,r),Tl(r,d,null,a);var v=r.memoizedState;if(d=v.cache,Lr(r,Rt,d),d!==h.cache&&md(r,[Rt],a,!0),El(),d=v.element,h.isDehydrated)if(h={element:d,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){r=Fy(t,r,d,a);break e}else if(d!==l){l=kn(Error(s(424)),r),ol(l),r=Fy(t,r,d,a);break e}else for(Lt=Xn(r.stateNode.containerInfo.firstChild),nn=r,je=!0,Qn=null,di=!0,a=jg(r,null,d,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(al(),d===l){r=Gi(t,r,a);break e}zt(t,r,d,a)}r=r.child}return r;case 26:return yl(t,r),t===null?(a=W_(r.type,null,r.pendingProps,null))?r.memoizedState=a:je||(a=r.type,t=r.pendingProps,l=kc(bn.current).createElement(a),l[Ot]=r,l[At]=t,Bt(l,a,t),et(l),r.stateNode=l):r.memoizedState=W_(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return xo(r),t===null&&je&&(l=r.stateNode=Q_(r.type,r.pendingProps,bn.current),nn=r,di=!0,Lt=Xn(l.firstChild)),l=r.pendingProps.children,t!==null||je?zt(t,r,l,a):r.child=zs(r,null,l,a),yl(t,r),r.child;case 5:return t===null&&je&&((h=l=Lt)&&(l=xS(l,r.type,r.pendingProps,di),l!==null?(r.stateNode=l,nn=r,Lt=Xn(l.firstChild),di=!1,h=!0):h=!1),h||Ls(r)),xo(r),h=r.type,d=r.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,Wd(h,d)?l=null:v!==null&&Wd(h,v)&&(r.flags|=32),r.memoizedState!==null&&(h=zf(t,r,Jw,null,null,a),xl._currentValue=h),yl(t,r),zt(t,r,l,a),r.child;case 6:return t===null&&je&&((t=a=Lt)&&(a=US(a,r.pendingProps,di),a!==null?(r.stateNode=a,nn=r,Lt=null,t=!0):t=!1),t||Ls(r)),null;case 13:return Gy(t,r,a);case 4:return yr(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=zs(r,null,l,a):zt(t,r,l,a),r.child;case 11:return Uy(t,r,r.type,r.pendingProps,a);case 7:return zt(t,r,r.pendingProps,a),r.child;case 8:return zt(t,r,r.pendingProps.children,a),r.child;case 12:return zt(t,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Lr(r,r.type,l.value),zt(t,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Ks(r),h=Kt(h),l=l(h),r.flags|=1,zt(t,r,l,a),r.child;case 14:return Ly(t,r,r.type,r.pendingProps,a);case 15:return zy(t,r,r.type,r.pendingProps,a);case 19:return $y(t,r,a);case 22:return By(t,r,a);case 24:return Ks(r),l=Kt(Rt),t===null?(h=Uf(),h===null&&(h=Xe,d=Pf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),r.memoizedState={parent:l,cache:h},pd(r),Lr(r,Rt,h)):((t.lanes&a)!==0&&(gd(t,r),Tl(r,null,null,a),El()),h=t.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Lr(r,Rt,l)):(l=d.cache,Lr(r,Rt,l),l!==h.cache&&md(r,[Rt],a,!0))),zt(t,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}var fd=ze(null),Gs=null,Ki=null;function Lr(t,r,a){Ke(fd,r._currentValue),r._currentValue=a}function $i(t){t._currentValue=fd.current,rt(fd)}function dd(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function md(t,r,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<r.length;I++)if(T.context===r[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),dd(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),dd(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function _l(t,r,a,l){t=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;yn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===gr.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(xl):t=[xl])}h=h.return}t!==null&&md(r,t,a,l),r.flags|=262144}function yc(t){for(t=t.firstContext;t!==null;){if(!yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ks(t){Gs=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kt(t){return Yy(Gs,t)}function _c(t,r){return Gs===null&&Ks(t),Yy(t,r)}function Yy(t,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(s(308));Ki=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Ki=Ki.next=r;return a}var zr=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gd(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Br(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function jr(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(nt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Zu(t),Og(t,null,a),r}return Wu(t,l,r,a),Zu(t)}function vl(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194176)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,wr(t,a)}}function yd(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=r:d=d.next=r}else h=d=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}var _d=!1;function El(){if(_d){var t=ja;if(t!==null)throw t}}function Tl(t,r,a,l){_d=!1;var h=t.updateQueue;zr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,x=I.next;I.next=null,v===null?d=x:v.next=x,v=I;var Q=t.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=x:T.next=x,Q.lastBaseUpdate=I))}if(d!==null){var Z=h.baseState;v=0,Q=x=I=null,T=d;do{var H=T.lane&-536870913,$=H!==T.lane;if($?(Ue&H)===H:(l&H)===H){H!==0&&H===Ba&&(_d=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var he=t,we=T;H=r;var lt=a;switch(we.tag){case 1:if(he=we.payload,typeof he=="function"){Z=he.call(lt,Z,H);break e}Z=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=we.payload,H=typeof he=="function"?he.call(lt,Z,H):he,H==null)break e;Z=C({},Z,H);break e;case 2:zr=!0}}H=T.callback,H!==null&&(t.flags|=64,$&&(t.flags|=8192),$=h.callbacks,$===null?h.callbacks=[H]:$.push(H))}else $={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(x=Q=$,I=Z):Q=Q.next=$,v|=H;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;$=T,T=$.next,$.next=null,h.lastBaseUpdate=$,h.shared.pending=null}}while(!0);Q===null&&(I=Z),h.baseState=I,h.firstBaseUpdate=x,h.lastBaseUpdate=Q,d===null&&(h.shared.lanes=0),Kr|=v,t.lanes=v,t.memoizedState=Z}}function Xy(t,r){if(typeof t!="function")throw Error(s(191,t));t.call(r)}function Wy(t,r){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Xy(a[t],r)}function Al(t,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Ye(r,r.return,T)}}function Hr(t,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=r;var I=a;try{T()}catch(x){Ye(h,I,x)}}}l=l.next}while(l!==d)}}catch(x){Ye(r,r.return,x)}}function Zy(t){var r=t.updateQueue;if(r!==null){var a=t.stateNode;try{Wy(r,a)}catch(l){Ye(t,t.return,l)}}}function Jy(t,r,a){a.props=Fs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ye(t,r,l)}}function $s(t,r){try{var a=t.ref;if(a!==null){var l=t.stateNode;switch(t.tag){case 26:case 27:case 5:var h=l;break;default:h=l}typeof a=="function"?t.refCleanup=a(h):a.current=h}}catch(d){Ye(t,r,d)}}function _n(t,r){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ye(t,r,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ye(t,r,h)}else a.current=null}function e_(t){var r=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ye(t,t.return,h)}}function t_(t,r,a){try{var l=t.stateNode;NS(l,t.type,a,r),l[At]=r}catch(h){Ye(t,t.return,h)}}function n_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function vd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Mc));else if(l!==4&&l!==27&&(t=t.child,t!==null))for(Ed(t,r,a),t=t.sibling;t!==null;)Ed(t,r,a),t=t.sibling}function vc(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&l!==27&&(t=t.child,t!==null))for(vc(t,r,a),t=t.sibling;t!==null;)vc(t,r,a),t=t.sibling}var Qi=!1,at=!1,Td=!1,i_=typeof WeakSet=="function"?WeakSet:Set,Vt=null,r_=!1;function oS(t,r){if(t=t.containerInfo,Yd=zc,t=Tg(t),wf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,x=0,Q=0,Z=t,H=null;t:for(;;){for(var $;Z!==a||h!==0&&Z.nodeType!==3||(T=v+h),Z!==d||l!==0&&Z.nodeType!==3||(I=v+l),Z.nodeType===3&&(v+=Z.nodeValue.length),($=Z.firstChild)!==null;)H=Z,Z=$;for(;;){if(Z===t)break t;if(H===a&&++x===h&&(T=v),H===d&&++Q===l&&(I=v),($=Z.nextSibling)!==null)break;Z=H,H=Z.parentNode}Z=$}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xd={focusedElem:t,selectionRange:a},zc=!1,Vt=r;Vt!==null;)if(r=Vt,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Vt=t;else for(;Vt!==null;){switch(r=Vt,d=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=r,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var he=Fs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(he,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(we){Ye(a,a.return,we)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,a=t.nodeType,a===9)em(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":em(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=r.sibling,t!==null){t.return=r.return,Vt=t;break}Vt=r.return}return he=r_,r_=!1,he}function s_(t,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Xi(t,a),l&4&&Al(5,a);break;case 1:if(Xi(t,a),l&4)if(t=a.stateNode,r===null)try{t.componentDidMount()}catch(T){Ye(a,a.return,T)}else{var h=Fs(a.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(h,r,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Ye(a,a.return,T)}}l&64&&Zy(a),l&512&&$s(a,a.return);break;case 3:if(Xi(t,a),l&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wy(l,t)}catch(T){Ye(a,a.return,T)}}break;case 26:Xi(t,a),l&512&&$s(a,a.return);break;case 27:case 5:Xi(t,a),r===null&&l&4&&e_(a),l&512&&$s(a,a.return);break;case 12:Xi(t,a);break;case 13:Xi(t,a),l&4&&l_(t,a);break;case 22:if(h=a.memoizedState!==null||Qi,!h){r=r!==null&&r.memoizedState!==null||at;var d=Qi,v=at;Qi=h,(at=r)&&!v?qr(t,a,(a.subtreeFlags&8772)!==0):Xi(t,a),Qi=d,at=v}l&512&&(a.memoizedProps.mode==="manual"?$s(a,a.return):_n(a,a.return));break;default:Xi(t,a)}}function a_(t){var r=t.alternate;r!==null&&(t.alternate=null,a_(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&ws(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _t=null,vn=!1;function Yi(t,r,a){for(a=a.child;a!==null;)o_(t,r,a),a=a.sibling}function o_(t,r,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(_r,a)}catch{}switch(a.tag){case 26:at||_n(a,r),Yi(t,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:at||_n(a,r);var l=_t,h=vn;for(_t=a.stateNode,Yi(t,r,a),a=a.stateNode,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);ws(a),_t=l,vn=h;break;case 5:at||_n(a,r);case 6:h=_t;var d=vn;if(_t=null,Yi(t,r,a),_t=h,vn=d,_t!==null)if(vn)try{t=_t,l=a.stateNode,t.nodeType===8?t.parentNode.removeChild(l):t.removeChild(l)}catch(v){Ye(a,r,v)}else try{_t.removeChild(a.stateNode)}catch(v){Ye(a,r,v)}break;case 18:_t!==null&&(vn?(r=_t,a=a.stateNode,r.nodeType===8?Jd(r.parentNode,a):r.nodeType===1&&Jd(r,a),Bl(r)):Jd(_t,a.stateNode));break;case 4:l=_t,h=vn,_t=a.stateNode.containerInfo,vn=!0,Yi(t,r,a),_t=l,vn=h;break;case 0:case 11:case 14:case 15:at||Hr(2,a,r),at||Hr(4,a,r),Yi(t,r,a);break;case 1:at||(_n(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Jy(a,r,l)),Yi(t,r,a);break;case 21:Yi(t,r,a);break;case 22:at||_n(a,r),at=(l=at)||a.memoizedState!==null,Yi(t,r,a),at=l;break;default:Yi(t,r,a)}}function l_(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bl(t)}catch(a){Ye(r,r.return,a)}}function lS(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new i_),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new i_),r;default:throw Error(s(435,t.tag))}}function Ad(t,r){var a=lS(t);r.forEach(function(l){var h=TS.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Un(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 27:case 5:_t=T.stateNode,vn=!1;break e;case 3:_t=T.stateNode.containerInfo,vn=!0;break e;case 4:_t=T.stateNode.containerInfo,vn=!0;break e}T=T.return}if(_t===null)throw Error(s(160));o_(d,v,h),_t=null,vn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)u_(r,t),r=r.sibling}var Yn=null;function u_(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Un(r,t),Ln(t),l&4&&(Hr(3,t,t.return),Al(3,t),Hr(5,t,t.return));break;case 1:Un(r,t),Ln(t),l&512&&(at||a===null||_n(a,a.return)),l&64&&Qi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Yn;if(Un(r,t),Ln(t),l&512&&(at||a===null||_n(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[br]||d[Ot]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Bt(d,l,a),d[Ot]=t,et(d),l=d;break e;case"link":var v=ev("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),Bt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=ev("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),Bt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ot]=t,et(d),l=d}t.stateNode=l}else tv(h,t.type,t.stateNode);else t.stateNode=J_(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?tv(h,t.type,t.stateNode):J_(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&t_(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&t.alternate===null){h=t.stateNode,d=t.memoizedProps;try{for(var I=h.firstChild;I;){var x=I.nextSibling,Q=I.nodeName;I[br]||Q==="HEAD"||Q==="BODY"||Q==="SCRIPT"||Q==="STYLE"||Q==="LINK"&&I.rel.toLowerCase()==="stylesheet"||h.removeChild(I),I=x}for(var Z=t.type,H=h.attributes;H.length;)h.removeAttributeNode(H[0]);Bt(h,Z,d),h[Ot]=t,h[At]=d}catch(he){Ye(t,t.return,he)}}case 5:if(Un(r,t),Ln(t),l&512&&(at||a===null||_n(a,a.return)),t.flags&32){h=t.stateNode;try{Cn(h,"")}catch(he){Ye(t,t.return,he)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,t_(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Td=!0);break;case 6:if(Un(r,t),Ln(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(he){Ye(t,t.return,he)}}break;case 3:if(xc=null,h=Yn,Yn=Vc(r.containerInfo),Un(r,t),Yn=h,Ln(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Bl(r.containerInfo)}catch(he){Ye(t,t.return,he)}Td&&(Td=!1,c_(t));break;case 4:l=Yn,Yn=Vc(t.stateNode.containerInfo),Un(r,t),Ln(t),Yn=l;break;case 12:Un(r,t),Ln(t);break;case 13:Un(r,t),Ln(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nd=an()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ad(t,l)));break;case 22:if(l&512&&(at||a===null||_n(a,a.return)),I=t.memoizedState!==null,x=a!==null&&a.memoizedState!==null,Q=Qi,Z=at,Qi=Q||I,at=Z||x,Un(r,t),at=Z,Qi=Q,Ln(t),r=t.stateNode,r._current=t,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,l&8192&&(r._visibility=I?r._visibility&-2:r._visibility|1,I&&(r=Qi||at,a===null||x||r||Ga(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,r=t;;){if(r.tag===5||r.tag===26||r.tag===27){if(a===null){x=a=r;try{if(h=x.stateNode,I)d=h.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=x.stateNode,T=x.memoizedProps.style;var $=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(he){Ye(x,x.return,he)}}}else if(r.tag===6){if(a===null){x=r;try{x.stateNode.nodeValue=I?"":x.memoizedProps}catch(he){Ye(x,x.return,he)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ad(t,a))));break;case 19:Un(r,t),Ln(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ad(t,l)));break;case 21:break;default:Un(r,t),Ln(t)}}function Ln(t){var r=t.flags;if(r&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(n_(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var h=l.stateNode,d=vd(t);vc(t,d,h);break;case 5:var v=l.stateNode;l.flags&32&&(Cn(v,""),l.flags&=-33);var T=vd(t);vc(t,T,v);break;case 3:case 4:var I=l.stateNode.containerInfo,x=vd(t);Ed(t,x,I);break;default:throw Error(s(161))}}}catch(Q){Ye(t,t.return,Q)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function c_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;c_(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Xi(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)s_(t,r.alternate,r),r=r.sibling}function Ga(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Hr(4,r,r.return),Ga(r);break;case 1:_n(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Jy(r,r.return,a),Ga(r);break;case 26:case 27:case 5:_n(r,r.return),Ga(r);break;case 22:_n(r,r.return),r.memoizedState===null&&Ga(r);break;default:Ga(r)}t=t.sibling}}function qr(t,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=t,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:qr(h,d,a),Al(4,d);break;case 1:if(qr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(x){Ye(l,l.return,x)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Xy(I[h],T)}catch(x){Ye(l,l.return,x)}}a&&v&64&&Zy(d),$s(d,d.return);break;case 26:case 27:case 5:qr(h,d,a),a&&l===null&&v&4&&e_(d),$s(d,d.return);break;case 12:qr(h,d,a);break;case 13:qr(h,d,a),a&&v&4&&l_(h,d);break;case 22:d.memoizedState===null&&qr(h,d,a),$s(d,d.return);break;default:qr(h,d,a)}r=r.sibling}}function wd(t,r){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fl(a))}function Sd(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&fl(t))}function Fr(t,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)h_(t,r,a,l),r=r.sibling}function h_(t,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Fr(t,r,a,l),h&2048&&Al(9,r);break;case 3:Fr(t,r,a,l),h&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&fl(t)));break;case 12:if(h&2048){Fr(t,r,a,l),t=r.stateNode;try{var d=r.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ye(r,r.return,I)}}else Fr(t,r,a,l);break;case 23:break;case 22:d=r.stateNode,r.memoizedState!==null?d._visibility&4?Fr(t,r,a,l):wl(t,r):d._visibility&4?Fr(t,r,a,l):(d._visibility|=4,Ka(t,r,a,l,(r.subtreeFlags&10256)!==0)),h&2048&&wd(r.alternate,r);break;case 24:Fr(t,r,a,l),h&2048&&Sd(r.alternate,r);break;default:Fr(t,r,a,l)}}function Ka(t,r,a,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=t,v=r,T=a,I=l,x=v.flags;switch(v.tag){case 0:case 11:case 15:Ka(d,v,T,I,h),Al(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&4?Ka(d,v,T,I,h):wl(d,v):(Q._visibility|=4,Ka(d,v,T,I,h)),h&&x&2048&&wd(v.alternate,v);break;case 24:Ka(d,v,T,I,h),h&&x&2048&&Sd(v.alternate,v);break;default:Ka(d,v,T,I,h)}r=r.sibling}}function wl(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=t,l=r,h=l.flags;switch(l.tag){case 22:wl(a,l),h&2048&&wd(l.alternate,l);break;case 24:wl(a,l),h&2048&&Sd(l.alternate,l);break;default:wl(a,l)}r=r.sibling}}var Sl=8192;function $a(t){if(t.subtreeFlags&Sl)for(t=t.child;t!==null;)f_(t),t=t.sibling}function f_(t){switch(t.tag){case 26:$a(t),t.flags&Sl&&t.memoizedState!==null&&XS(Yn,t.memoizedState,t.memoizedProps);break;case 5:$a(t);break;case 3:case 4:var r=Yn;Yn=Vc(t.stateNode.containerInfo),$a(t),Yn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Sl,Sl=16777216,$a(t),Sl=r):$a(t));break;default:$a(t)}}function d_(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function bl(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Vt=l,p_(l,t)}d_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)m_(t),t=t.sibling}function m_(t){switch(t.tag){case 0:case 11:case 15:bl(t),t.flags&2048&&Hr(9,t,t.return);break;case 3:bl(t);break;case 12:bl(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&4&&(t.return===null||t.return.tag!==13)?(r._visibility&=-5,Ec(t)):bl(t);break;default:bl(t)}}function Ec(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Vt=l,p_(l,t)}d_(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Hr(8,r,r.return),Ec(r);break;case 22:a=r.stateNode,a._visibility&4&&(a._visibility&=-5,Ec(r));break;default:Ec(r)}t=t.sibling}}function p_(t,r){for(;Vt!==null;){var a=Vt;switch(a.tag){case 0:case 11:case 15:Hr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Vt=l;else e:for(a=t;Vt!==null;){l=Vt;var h=l.sibling,d=l.return;if(a_(l),l===a){Vt=null;break e}if(h!==null){h.return=d,Vt=h;break e}Vt=d}}}function uS(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,r,a,l){return new uS(t,r,a,l)}function bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gr(t,r){var a=t.alternate;return a===null?(a=zn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function g_(t,r){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,r=a.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Tc(t,r,a,l,h,d){var v=0;if(l=t,typeof t=="function")bd(t)&&(v=1);else if(typeof t=="string")v=QS(t,a,Zt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return Qs(a.children,h,d,r);case g:v=8,h|=24;break;case E:return t=zn(12,a,r,h|2),t.elementType=E,t.lanes=d,t;case G:return t=zn(13,a,r,h),t.elementType=G,t.lanes=d,t;case B:return t=zn(19,a,r,h),t.elementType=B,t.lanes=d,t;case J:return y_(a,h,d,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:case O:v=10;break e;case b:v=9;break e;case P:v=11;break e;case K:v=14;break e;case ne:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return r=zn(v,a,r,h),r.elementType=t,r.type=l,r.lanes=d,r}function Qs(t,r,a,l){return t=zn(7,t,l,r),t.lanes=a,t}function y_(t,r,a,l){t=zn(22,t,l,r),t.elementType=J,t.lanes=a;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)===0){var v=kr(d,2);v!==null&&(h._pendingVisibility|=2,rn(v,d,2))}},attach:function(){var d=h._current;if(d===null)throw Error(s(456));if((h._pendingVisibility&2)!==0){var v=kr(d,2);v!==null&&(h._pendingVisibility&=-3,rn(v,d,2))}}};return t.stateNode=h,t}function Rd(t,r,a){return t=zn(6,t,null,r),t.lanes=a,t}function Id(t,r,a){return r=zn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Wi(t){t.flags|=4}function __(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nv(r)){if(r=xn.current,r!==null&&((Ue&4194176)===Ue?mi!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||r!==mi))throw ul=Mf,Pg;t.flags|=8192}}function Ac(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Tr():536870912,t.lanes|=r,Ya|=r)}function Rl(t,r){if(!je)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function tt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&31457280,l|=h.flags&31457280,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function cS(t,r,a){var l=r.pendingProps;switch(Of(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(r),null;case 1:return tt(r),null;case 3:return a=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),$i(Rt),Oi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(sl(r)?Wi(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Qn!==null&&(Pd(Qn),Qn=null))),tt(r),null;case 26:return a=r.memoizedState,t===null?(Wi(r),a!==null?(tt(r),__(r,a)):(tt(r),r.flags&=-16777217)):a?a!==t.memoizedState?(Wi(r),tt(r),__(r,a)):(tt(r),r.flags&=-16777217):(t.memoizedProps!==l&&Wi(r),tt(r),r.flags&=-16777217),null;case 27:ma(r),a=bn.current;var h=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Wi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return tt(r),null}t=Zt.current,sl(r)?kg(r):(t=Q_(h,l,a),r.stateNode=t,Wi(r))}return tt(r),null;case 5:if(ma(r),a=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Wi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return tt(r),null}if(t=Zt.current,sl(r))kg(r);else{switch(h=kc(bn.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Ot]=r,t[At]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=t;e:switch(Bt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Wi(r)}}return tt(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&Wi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(t=bn.current,sl(r)){if(t=r.stateNode,a=r.memoizedProps,l=null,h=nn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Ot]=r,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||H_(t.nodeValue,a)),t||Ls(r)}else t=kc(t).createTextNode(l),t[Ot]=r,r.stateNode=t}return tt(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=sl(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ot]=r}else al(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;tt(r),h=!1}else Qn!==null&&(Pd(Qn),Qn=null),h=!0;if(!h)return r.flags&256?(qi(r),r):(qi(r),null)}if(qi(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(r.child.flags|=8192),Ac(r,r.updateQueue),tt(r),null;case 4:return Oi(),t===null&&Kd(r.stateNode.containerInfo),tt(r),null;case 10:return $i(r.type),tt(r),null;case 19:if(rt(bt),h=r.memoizedState,h===null)return tt(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)Rl(h,!1);else{if(ot!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(d=sc(t),d!==null){for(r.flags|=128,Rl(h,!1),t=d.updateQueue,r.updateQueue=t,Ac(r,t),r.subtreeFlags=0,t=a,a=r.child;a!==null;)g_(a,t),a=a.sibling;return Ke(bt,bt.current&1|2),r.child}t=t.sibling}h.tail!==null&&an()>wc&&(r.flags|=128,l=!0,Rl(h,!1),r.lanes=4194304)}else{if(!l)if(t=sc(d),t!==null){if(r.flags|=128,l=!0,t=t.updateQueue,r.updateQueue=t,Ac(r,t),Rl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!je)return tt(r),null}else 2*an()-h.renderingStartTime>wc&&a!==536870912&&(r.flags|=128,l=!0,Rl(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(t=h.last,t!==null?t.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=an(),r.sibling=null,t=bt.current,Ke(bt,l?t&1|2:t&1),r):(tt(r),null);case 22:case 23:return qi(r),Vf(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(tt(r),r.subtreeFlags&6&&(r.flags|=8192)):tt(r),a=r.updateQueue,a!==null&&Ac(r,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),t!==null&&rt(Bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),$i(Rt),tt(r),null;case 25:return null}throw Error(s(156,r.tag))}function hS(t,r){switch(Of(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return $i(Rt),Oi(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return ma(r),null;case 13:if(qi(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(s(340));al()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return rt(bt),null;case 4:return Oi(),null;case 10:return $i(r.type),null;case 22:case 23:return qi(r),Vf(),t!==null&&rt(Bs),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return $i(Rt),null;case 25:return null;default:return null}}function v_(t,r){switch(Of(r),r.tag){case 3:$i(Rt),Oi();break;case 26:case 27:case 5:ma(r);break;case 4:Oi();break;case 13:qi(r);break;case 19:rt(bt);break;case 10:$i(r.type);break;case 22:case 23:qi(r),Vf(),t!==null&&rt(Bs);break;case 24:$i(Rt)}}var fS={getCacheForType:function(t){var r=Kt(Rt),a=r.data.get(t);return a===void 0&&(a=t(),r.data.set(t,a)),a}},dS=typeof WeakMap=="function"?WeakMap:Map,nt=0,Xe=null,Ne=null,Ue=0,We=0,En=null,Zi=!1,Qa=!1,Cd=!1,Ji=0,ot=0,Kr=0,Ys=0,Dd=0,Bn=0,Ya=0,Il=null,gi=null,Od=!1,Nd=0,wc=1/0,Sc=null,$r=null,bc=!1,Xs=null,Cl=0,Md=0,kd=null,Dl=0,Vd=null;function Tn(){if((nt&2)!==0&&Ue!==0)return Ue&-Ue;if(S.T!==null){var t=Ba;return t!==0?t:Hd()}return Nu()}function E_(){Bn===0&&(Bn=(Ue&536870912)===0||je?jo():536870912);var t=xn.current;return t!==null&&(t.flags|=32),Bn}function rn(t,r,a){(t===Xe&&We===2||t.cancelPendingCommit!==null)&&(Xa(t,0),er(t,Ue,Bn,!1)),ct(t,a),((nt&2)===0||t!==Xe)&&(t===Xe&&((nt&2)===0&&(Ys|=a),ot===4&&er(t,Ue,Bn,!1)),yi(t))}function T_(t,r,a){if((nt&6)!==0)throw Error(s(327));var l=!a&&(r&60)===0&&(r&t.expiredLanes)===0||Er(t,r),h=l?gS(t,r):Ld(t,r,!0),d=l;do{if(h===0){Qa&&!l&&er(t,r,0,!1);break}else if(h===6)er(t,r,0,!Zi);else{if(a=t.current.alternate,d&&!mS(a)){h=Ld(t,r,!1),d=!1;continue}if(h===2){if(d=r,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var T=t;h=Il;var I=T.current.memoizedState.isDehydrated;if(I&&(Xa(T,v).flags|=256),v=Ld(T,v,!1),v!==2){if(Cd&&!I){T.errorRecoveryDisabledLanes|=d,Ys|=d,h=4;break e}d=gi,gi=h,d!==null&&Pd(d)}h=v}if(d=!1,h!==2)continue}}if(h===1){Xa(t,0),er(t,r,0,!0);break}e:{switch(l=t,h){case 0:case 1:throw Error(s(345));case 4:if((r&4194176)===r){er(l,r,Bn,!Zi);break e}break;case 2:gi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=r,(r&62914560)===r&&(d=Nd+300-an(),10<d)){if(er(l,r,Bn,!Zi),Rn(l,0)!==0)break e;l.timeoutHandle=G_(A_.bind(null,l,a,gi,Sc,Od,r,Bn,Ys,Ya,Zi,2,-0,0),d);break e}A_(l,a,gi,Sc,Od,r,Bn,Ys,Ya,Zi,0,-0,0)}}break}while(!0);yi(t)}function Pd(t){gi===null?gi=t:gi.push.apply(gi,t)}function A_(t,r,a,l,h,d,v,T,I,x,Q,Z,H){var $=r.subtreeFlags;if(($&8192||($&16785408)===16785408)&&(Pl={stylesheets:null,count:0,unsuspend:YS},f_(r),r=WS(),r!==null)){t.cancelPendingCommit=r(D_.bind(null,t,a,l,h,v,T,I,1,Z,H)),er(t,d,v,!x);return}D_(t,a,l,h,v,T,I,Q,Z,H)}function mS(t){for(var r=t;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!yn(d(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function er(t,r,a,l){r&=~Dd,r&=~Ys,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var h=r;0<h;){var d=31-Jt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Ar(t,a,r)}function Rc(){return(nt&6)===0?(Ol(0),!1):!0}function xd(){if(Ne!==null){if(We===0)var t=Ne.return;else t=Ne,Ki=Gs=null,Hf(t),La=null,cl=0,t=Ne;for(;t!==null;)v_(t.alternate,t),t=t.return;Ne=null}}function Xa(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),xd(),Xe=t,Ne=a=Gr(t.current,null),Ue=r,We=0,En=null,Zi=!1,Qa=Er(t,r),Cd=!1,Ya=Bn=Dd=Ys=Kr=ot=0,gi=Il=null,Od=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var h=31-Jt(l),d=1<<h;r|=t[h],l&=~d}return Ji=r,Xu(),a}function w_(t,r){Ce=null,S.H=pi,r===ll?(r=Lg(),We=3):r===Pg?(r=Lg(),We=4):We=r===xy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,En=r,Ne===null&&(ot=1,gc(t,kn(r,t.current)))}function S_(){var t=S.H;return S.H=pi,t===null?pi:t}function b_(){var t=S.A;return S.A=fS,t}function Ud(){ot=4,Zi||(Ue&4194176)!==Ue&&xn.current!==null||(Qa=!0),(Kr&134217727)===0&&(Ys&134217727)===0||Xe===null||er(Xe,Ue,Bn,!1)}function Ld(t,r,a){var l=nt;nt|=2;var h=S_(),d=b_();(Xe!==t||Ue!==r)&&(Sc=null,Xa(t,r)),r=!1;var v=ot;e:do try{if(We!==0&&Ne!==null){var T=Ne,I=En;switch(We){case 8:xd(),v=6;break e;case 3:case 2:case 6:xn.current===null&&(r=!0);var x=We;if(We=0,En=null,Wa(t,T,I,x),a&&Qa){v=0;break e}break;default:x=We,We=0,En=null,Wa(t,T,I,x)}}pS(),v=ot;break}catch(Q){w_(t,Q)}while(!0);return r&&t.shellSuspendCounter++,Ki=Gs=null,nt=l,S.H=h,S.A=d,Ne===null&&(Xe=null,Ue=0,Xu()),v}function pS(){for(;Ne!==null;)R_(Ne)}function gS(t,r){var a=nt;nt|=2;var l=S_(),h=b_();Xe!==t||Ue!==r?(Sc=null,wc=an()+500,Xa(t,r)):Qa=Er(t,r);e:do try{if(We!==0&&Ne!==null){r=Ne;var d=En;t:switch(We){case 1:We=0,En=null,Wa(t,r,d,1);break;case 2:if(xg(d)){We=0,En=null,I_(r);break}r=function(){We===2&&Xe===t&&(We=7),yi(t)},d.then(r,r);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:xg(d)?(We=0,En=null,I_(r)):(We=0,En=null,Wa(t,r,d,7));break;case 5:var v=null;switch(Ne.tag){case 26:v=Ne.memoizedState;case 5:case 27:var T=Ne;if(!v||nv(v)){We=0,En=null;var I=T.sibling;if(I!==null)Ne=I;else{var x=T.return;x!==null?(Ne=x,Ic(x)):Ne=null}break t}}We=0,En=null,Wa(t,r,d,5);break;case 6:We=0,En=null,Wa(t,r,d,6);break;case 8:xd(),ot=6;break e;default:throw Error(s(462))}}yS();break}catch(Q){w_(t,Q)}while(!0);return Ki=Gs=null,S.H=l,S.A=h,nt=a,Ne!==null?0:(Xe=null,Ue=0,Xu(),ot)}function yS(){for(;Ne!==null&&!ff();)R_(Ne)}function R_(t){var r=Qy(t.alternate,t,Ji);t.memoizedProps=t.pendingProps,r===null?Ic(t):Ne=r}function I_(t){var r=t,a=r.alternate;switch(r.tag){case 15:case 0:r=Hy(a,r,r.pendingProps,r.type,void 0,Ue);break;case 11:r=Hy(a,r,r.pendingProps,r.type.render,r.ref,Ue);break;case 5:Hf(r);default:v_(a,r),r=Ne=g_(r,Ji),r=Qy(a,r,Ji)}t.memoizedProps=t.pendingProps,r===null?Ic(t):Ne=r}function Wa(t,r,a,l){Ki=Gs=null,Hf(r),La=null,cl=0;var h=r.return;try{if(sS(t,h,r,a,Ue)){ot=1,gc(t,kn(a,t.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;ot=1,gc(t,kn(a,t.current)),Ne=null;return}r.flags&32768?(je||l===1?t=!0:Qa||(Ue&536870912)!==0?t=!1:(Zi=t=!0,(l===2||l===3||l===6)&&(l=xn.current,l!==null&&l.tag===13&&(l.flags|=16384))),C_(r,t)):Ic(r)}function Ic(t){var r=t;do{if((r.flags&32768)!==0){C_(r,Zi);return}t=r.return;var a=cS(r.alternate,r,Ji);if(a!==null){Ne=a;return}if(r=r.sibling,r!==null){Ne=r;return}Ne=r=t}while(r!==null);ot===0&&(ot=5)}function C_(t,r){do{var a=hS(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);ot=6,Ne=null}function D_(t,r,a,l,h,d,v,T,I,x){var Q=S.T,Z=ae.p;try{ae.p=2,S.T=null,_S(t,r,a,l,Z,h,d,v,T,I,x)}finally{S.T=Q,ae.p=Z}}function _S(t,r,a,l,h,d,v,T){do Za();while(Xs!==null);if((nt&6)!==0)throw Error(s(327));var I=t.finishedWork;if(l=t.finishedLanes,I===null)return null;if(t.finishedWork=null,t.finishedLanes=0,I===t.current)throw Error(s(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var x=I.lanes|I.childLanes;if(x|=If,Du(t,l,x,d,v,T),t===Xe&&(Ne=Xe=null,Ue=0),(I.subtreeFlags&10256)===0&&(I.flags&10256)===0||bc||(bc=!0,Md=x,kd=a,AS(Ni,function(){return Za(),null})),a=(I.flags&15990)!==0,(I.subtreeFlags&15990)!==0||a?(a=S.T,S.T=null,d=ae.p,ae.p=2,v=nt,nt|=4,oS(t,I),u_(I,t),Hw(Xd,t.containerInfo),zc=!!Yd,Xd=Yd=null,t.current=I,s_(t,I.alternate,I),Uo(),nt=v,ae.p=d,S.T=a):t.current=I,bc?(bc=!1,Xs=t,Cl=l):O_(t,x),x=t.pendingLanes,x===0&&($r=null),zo(I.stateNode),yi(t),r!==null)for(h=t.onRecoverableError,I=0;I<r.length;I++)x=r[I],h(x.value,{componentStack:x.stack});return(Cl&3)!==0&&Za(),x=t.pendingLanes,(l&4194218)!==0&&(x&42)!==0?t===Vd?Dl++:(Dl=0,Vd=t):Dl=0,Ol(0),null}function O_(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,fl(r)))}function Za(){if(Xs!==null){var t=Xs,r=Md;Md=0;var a=Ou(Cl),l=S.T,h=ae.p;try{if(ae.p=32>a?32:a,S.T=null,Xs===null)var d=!1;else{a=kd,kd=null;var v=Xs,T=Cl;if(Xs=null,Cl=0,(nt&6)!==0)throw Error(s(331));var I=nt;if(nt|=4,m_(v.current),h_(v,v.current,T,a),nt=I,Ol(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(_r,v)}catch{}d=!0}return d}finally{ae.p=h,S.T=l,O_(t,r)}}return!1}function N_(t,r,a){r=kn(a,r),r=nd(t.stateNode,r,2),t=jr(t,r,2),t!==null&&(ct(t,2),yi(t))}function Ye(t,r,a){if(t.tag===3)N_(t,t,a);else for(;r!==null;){if(r.tag===3){N_(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($r===null||!$r.has(l))){t=kn(a,t),a=Vy(2),l=jr(r,a,2),l!==null&&(Py(a,l,r,t),ct(l,2),yi(l));break}}r=r.return}}function zd(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new dS;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(Cd=!0,h.add(a),t=vS.bind(null,t,r,a),r.then(t,t))}function vS(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(Ue&a)===a&&(ot===4||ot===3&&(Ue&62914560)===Ue&&300>an()-Nd?(nt&2)===0&&Xa(t,0):Dd|=a,Ya===Ue&&(Ya=0)),yi(t)}function M_(t,r){r===0&&(r=Tr()),t=kr(t,r),t!==null&&(ct(t,r),yi(t))}function ES(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),M_(t,a)}function TS(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),M_(t,a)}function AS(t,r){return Es(t,r)}var Cc=null,Ja=null,Bd=!1,Dc=!1,jd=!1,Ws=0;function yi(t){t!==Ja&&t.next===null&&(Ja===null?Cc=Ja=t:Ja=Ja.next=t),Dc=!0,Bd||(Bd=!0,SS(wS))}function Ol(t,r){if(!jd&&Dc){jd=!0;do for(var a=!1,l=Cc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Jt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,P_(l,d))}else d=Ue,d=Rn(l,l===Xe?d:0),(d&3)===0||Er(l,d)||(a=!0,P_(l,d));l=l.next}while(a);jd=!1}}function wS(){Dc=Bd=!1;var t=0;Ws!==0&&(MS()&&(t=Ws),Ws=0);for(var r=an(),a=null,l=Cc;l!==null;){var h=l.next,d=k_(l,r);d===0?(l.next=null,a===null?Cc=h:a.next=h,h===null&&(Ja=a)):(a=l,(t!==0||(d&3)!==0)&&(Dc=!0)),l=h}Ol(t)}function k_(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Jt(d),T=1<<v,I=h[v];I===-1?((T&a)===0||(T&l)!==0)&&(h[v]=ya(T,r)):I<=r&&(t.expiredLanes|=T),d&=~T}if(r=Xe,a=Ue,a=Rn(t,t===r?a:0),l=t.callbackNode,a===0||t===r&&We===2||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ga(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Er(t,a)){if(r=a&-a,r===t.callbackPriority)return r;switch(l!==null&&ga(l),Ou(a)){case 2:case 8:a=Dt;break;case 32:a=Ni;break;case 268435456:a=Lo;break;default:a=Ni}return l=V_.bind(null,t),a=Es(a,l),t.callbackPriority=r,t.callbackNode=a,r}return l!==null&&l!==null&&ga(l),t.callbackPriority=2,t.callbackNode=null,2}function V_(t,r){var a=t.callbackNode;if(Za()&&t.callbackNode!==a)return null;var l=Ue;return l=Rn(t,t===Xe?l:0),l===0?null:(T_(t,l,r),k_(t,an()),t.callbackNode!=null&&t.callbackNode===a?V_.bind(null,t):null)}function P_(t,r){if(Za())return null;T_(t,r,!0)}function SS(t){VS(function(){(nt&6)!==0?Es(Tt,t):t()})}function Hd(){return Ws===0&&(Ws=jo()),Ws}function x_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ai(""+t)}function U_(t,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,t.id&&a.setAttribute("form",t.id),r.parentNode.insertBefore(a,r),t=new FormData(t),a.parentNode.removeChild(a),t}function bS(t,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var d=x_((h[At]||null).action),v=l.submitter;v&&(r=(r=v[At]||null)?x_(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var T=new Sa("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ws!==0){var I=v?U_(h,v):new FormData(h);Wf(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=v?U_(h,v):new FormData(h),Wf(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var qd=0;qd<Dg.length;qd++){var Fd=Dg[qd],RS=Fd.toLowerCase(),IS=Fd[0].toUpperCase()+Fd.slice(1);$n(RS,"on"+IS)}$n(Sg,"onAnimationEnd"),$n(bg,"onAnimationIteration"),$n(Rg,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(Fw,"onTransitionRun"),$n(Gw,"onTransitionStart"),$n(Kw,"onTransitionCancel"),$n(Ig,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nl));function L_(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,x=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=x;try{d(h)}catch(Q){pc(Q)}h.currentTarget=null,d=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,x=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=x;try{d(h)}catch(Q){pc(Q)}h.currentTarget=null,d=I}}}}function Ve(t,r){var a=r[As];a===void 0&&(a=r[As]=new Set);var l=t+"__bubble";a.has(l)||(z_(r,t,2,!1),a.add(l))}function Gd(t,r,a){var l=0;r&&(l|=4),z_(a,t,l,r)}var Oc="_reactListening"+Math.random().toString(36).slice(2);function Kd(t){if(!t[Oc]){t[Oc]=!0,qo.forEach(function(a){a!=="selectionchange"&&(CS.has(a)||Gd(a,!1,t),Gd(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Oc]||(r[Oc]=!0,Gd("selectionchange",!1,r))}}function z_(t,r,a,l){switch(lv(r)){case 2:var h=eb;break;case 8:h=tb;break;default:h=sm}a=h.bind(null,r,a,t),h=void 0,!On||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(r,a,{capture:!0,passive:h}):t.addEventListener(r,a,!0):h!==void 0?t.addEventListener(r,a,{passive:h}):t.addEventListener(r,a,!1)}function $d(t,r,a,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h||T.nodeType===8&&T.parentNode===h)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&(I=v.stateNode.containerInfo,I===h||I.nodeType===8&&I.parentNode===h))return;v=v.return}for(;T!==null;){if(v=Kn(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=d=v;continue e}T=T.parentNode}}l=l.return}Pu(function(){var x=d,Q=wa(a),Z=[];e:{var H=Cg.get(t);if(H!==void 0){var $=Sa,he=t;switch(t){case"keypress":if(li(a)===0)break e;case"keydown":case"keyup":$=Oa;break;case"focusin":he="focus",$=Ia;break;case"focusout":he="blur",$=Ia;break;case"beforeblur":case"afterblur":$=Ia;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=qu;break;case Sg:case bg:case Rg:$=Ca;break;case Ig:$=Gu;break;case"scroll":case"scrollend":$=xu;break;case"wheel":$=Na;break;case"copy":case"cut":case"paste":$=Da;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=tl;break;case"toggle":case"beforetoggle":$=$u}var we=(r&4)!==0,lt=!we&&(t==="scroll"||t==="scrollend"),U=we?H!==null?H+"Capture":null:H;we=[];for(var k=x,j;k!==null;){var Y=k;if(j=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||j===null||U===null||(Y=Is(k,U),Y!=null&&we.push(Ml(k,Y,j))),lt)break;k=k.return}0<we.length&&(H=new $(H,he,null,a,Q),Z.push({event:H,listeners:we}))}}if((r&7)===0){e:{if(H=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",H&&a!==Dn&&(he=a.relatedTarget||a.fromElement)&&(Kn(he)||he[Mi]))break e;if(($||H)&&(H=Q.window===Q?Q:(H=Q.ownerDocument)?H.defaultView||H.parentWindow:window,$?(he=a.relatedTarget||a.toElement,$=x,he=he?Kn(he):null,he!==null&&(lt=pe(he),we=he.tag,he!==lt||we!==5&&we!==27&&we!==6)&&(he=null)):($=null,he=x),$!==he)){if(we=Nn,Y="onMouseLeave",U="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(we=tl,Y="onPointerLeave",U="onPointerEnter",k="pointer"),lt=$==null?H:Rr($),j=he==null?H:Rr(he),H=new we(Y,k+"leave",$,a,Q),H.target=lt,H.relatedTarget=j,Y=null,Kn(Q)===x&&(we=new we(U,k+"enter",he,a,Q),we.target=j,we.relatedTarget=lt,Y=we),lt=Y,$&&he)t:{for(we=$,U=he,k=0,j=we;j;j=eo(j))k++;for(j=0,Y=U;Y;Y=eo(Y))j++;for(;0<k-j;)we=eo(we),k--;for(;0<j-k;)U=eo(U),j--;for(;k--;){if(we===U||U!==null&&we===U.alternate)break t;we=eo(we),U=eo(U)}we=null}else we=null;$!==null&&B_(Z,H,$,we,!1),he!==null&&lt!==null&&B_(Z,lt,he,we,!0)}}e:{if(H=x?Rr(x):window,$=H.nodeName&&H.nodeName.toLowerCase(),$==="select"||$==="input"&&H.type==="file")var ce=dg;else if(St(H))if(mg)ce=Bw;else{ce=Lw;var Oe=Uw}else $=H.nodeName,!$||$.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?x&&Qo(x.elementType)&&(ce=dg):ce=zw;if(ce&&(ce=ce(t,x))){Bi(Z,ce,a,Q);break e}Oe&&Oe(t,H,x),t==="focusout"&&x&&H.type==="number"&&x.memoizedProps.value!=null&&Aa(H,"number",H.value)}switch(Oe=x?Rr(x):window,t){case"focusin":(St(Oe)||Oe.contentEditable==="true")&&(Ma=Oe,Sf=x,rl=null);break;case"focusout":rl=Sf=Ma=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Ag(Z,a,Q);break;case"selectionchange":if(qw)break;case"keydown":case"keyup":Ag(Z,a,Q)}var de;if(hi)e:{switch(t){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Pe?F(t,a)&&(ye="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(_&&a.locale!=="ko"&&(Pe||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Pe&&(de=Xo()):(oi=Q,Mr="value"in oi?oi.value:oi.textContent,Pe=!0)),Oe=Nc(x,ye),0<Oe.length&&(ye=new Jo(ye,t,null,a,Q),Z.push({event:ye,listeners:Oe}),de?ye.data=de:(de=ie(a),de!==null&&(ye.data=de)))),(de=y?wt(t,a):xe(t,a))&&(ye=Nc(x,"onBeforeInput"),0<ye.length&&(Oe=new Jo("onBeforeInput","beforeinput",null,a,Q),Z.push({event:Oe,listeners:ye}),Oe.data=de)),bS(Z,t,x,a,Q)}L_(Z,r)})}function Ml(t,r,a){return{instance:t,listener:r,currentTarget:a}}function Nc(t,r){for(var a=r+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Is(t,a),h!=null&&l.unshift(Ml(t,h,d)),h=Is(t,r),h!=null&&l.push(Ml(t,h,d))),t=t.return}return l}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function B_(t,r,a,l,h){for(var d=r._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,x=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||x===null||(I=x,h?(x=Is(a,d),x!=null&&v.unshift(Ml(a,x,I))):h||(x=Is(a,d),x!=null&&v.push(Ml(a,x,I)))),a=a.return}v.length!==0&&t.push({event:r,listeners:v})}var DS=/\r\n?/g,OS=/\u0000|\uFFFD/g;function j_(t){return(typeof t=="string"?t:""+t).replace(DS,`
`).replace(OS,"")}function H_(t,r){return r=j_(r),j_(t)===r}function Mc(){}function Qe(t,r,a,l,h,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Cn(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Cn(t,""+l);break;case"className":Dr(t,"class",l);break;case"tabIndex":Dr(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Dr(t,a,l);break;case"style":Vu(t,l,d);break;case"data":if(r!=="object"){Dr(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ai(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&Qe(t,r,"name",h.name,h,null),Qe(t,r,"formEncType",h.formEncType,h,null),Qe(t,r,"formMethod",h.formMethod,h,null),Qe(t,r,"formTarget",h.formTarget,h,null)):(Qe(t,r,"encType",h.encType,h,null),Qe(t,r,"method",h.method,h,null),Qe(t,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ai(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Mc);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ai(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ve("beforetoggle",t),Ve("toggle",t),Cr(t,"popover",l);break;case"xlinkActuate":In(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":In(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":In(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":In(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":In(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":In(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":In(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":In(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":In(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Cr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yf.get(a)||a,Cr(t,a,l))}}function Qd(t,r,a,l,h,d){switch(a){case"style":Vu(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Cn(t,l):(typeof l=="number"||typeof l=="bigint")&&Cn(t,""+l);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Mc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ea.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),d=t[At]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Cr(t,a,l)}}}function Bt(t,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",t),Ve("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Qe(t,r,d,v,a,null)}}h&&Qe(t,r,"srcSet",a.srcSet,a,null),l&&Qe(t,r,"src",a.src,a,null);return;case"input":Ve("invalid",t);var T=d=v=h=null,I=null,x=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":h=Q;break;case"type":v=Q;break;case"checked":I=Q;break;case"defaultChecked":x=Q;break;case"value":d=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:Qe(t,r,l,Q,a,null)}}bs(t,d,T,I,x,v,h,!1),Ss(t);return;case"select":Ve("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Qe(t,r,h,T,a,null)}r=d,a=v,t.multiple=!!l,r!=null?Be(t,!!l,r,!1):a!=null&&Be(t,!!l,a,!0);return;case"textarea":Ve("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Qe(t,r,v,T,a,null)}Nr(t,l,h,d),Ss(t);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qe(t,r,I,l,a,null)}return;case"dialog":Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":Ve("load",t);break;case"video":case"audio":for(l=0;l<Nl.length;l++)Ve(Nl[l],t);break;case"image":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"embed":case"source":case"link":Ve("error",t),Ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Qe(t,r,x,l,a,null)}return;default:if(Qo(r)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&Qd(t,r,Q,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Qe(t,r,T,l,a,null))}function NS(t,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,I=null,x=null,Q=null;for($ in a){var Z=a[$];if(a.hasOwnProperty($)&&Z!=null)switch($){case"checked":break;case"value":break;case"defaultValue":I=Z;default:l.hasOwnProperty($)||Qe(t,r,$,null,l,Z)}}for(var H in l){var $=l[H];if(Z=a[H],l.hasOwnProperty(H)&&($!=null||Z!=null))switch(H){case"type":d=$;break;case"name":h=$;break;case"checked":x=$;break;case"defaultChecked":Q=$;break;case"value":v=$;break;case"defaultValue":T=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,r));break;default:$!==Z&&Qe(t,r,H,$,l,Z)}}Or(t,v,T,I,x,Q,d,h);return;case"select":$=v=T=H=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":$=I;default:l.hasOwnProperty(d)||Qe(t,r,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==I&&Qe(t,r,h,d,l,I)}r=T,a=v,l=$,H!=null?Be(t,!!a,H,!1):!!l!=!!a&&(r!=null?Be(t,!!a,r,!0):Be(t,!!a,a?[]:"",!1));return;case"textarea":$=H=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Qe(t,r,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":H=h;break;case"defaultValue":$=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Qe(t,r,v,h,l,d)}Rs(t,H,$);return;case"option":for(var he in a)if(H=a[he],a.hasOwnProperty(he)&&H!=null&&!l.hasOwnProperty(he))switch(he){case"selected":t.selected=!1;break;default:Qe(t,r,he,null,l,H)}for(I in l)if(H=l[I],$=a[I],l.hasOwnProperty(I)&&H!==$&&(H!=null||$!=null))switch(I){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Qe(t,r,I,H,l,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in a)H=a[we],a.hasOwnProperty(we)&&H!=null&&!l.hasOwnProperty(we)&&Qe(t,r,we,null,l,H);for(x in l)if(H=l[x],$=a[x],l.hasOwnProperty(x)&&H!==$&&(H!=null||$!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:Qe(t,r,x,H,l,$)}return;default:if(Qo(r)){for(var lt in a)H=a[lt],a.hasOwnProperty(lt)&&H!==void 0&&!l.hasOwnProperty(lt)&&Qd(t,r,lt,void 0,l,H);for(Q in l)H=l[Q],$=a[Q],!l.hasOwnProperty(Q)||H===$||H===void 0&&$===void 0||Qd(t,r,Q,H,l,$);return}}for(var U in a)H=a[U],a.hasOwnProperty(U)&&H!=null&&!l.hasOwnProperty(U)&&Qe(t,r,U,null,l,H);for(Z in l)H=l[Z],$=a[Z],!l.hasOwnProperty(Z)||H===$||H==null&&$==null||Qe(t,r,Z,H,l,$)}var Yd=null,Xd=null;function kc(t){return t.nodeType===9?t:t.ownerDocument}function q_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F_(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function Wd(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zd=null;function MS(){var t=window.event;return t&&t.type==="popstate"?t===Zd?!1:(Zd=t,!0):(Zd=null,!1)}var G_=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,K_=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof K_<"u"?function(t){return K_.resolve(null).then(t).catch(PS)}:G_;function PS(t){setTimeout(function(){throw t})}function Jd(t,r){var a=r,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),Bl(r);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);Bl(r)}function em(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":em(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xS(t,r,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[br])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Xn(t.nextSibling),t===null)break}return null}function US(t,r,a){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Xn(t.nextSibling),t===null))return null;return t}function Xn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}function $_(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}function Q_(t,r,a){switch(r=kc(a),t){case"html":if(t=r.documentElement,!t)throw Error(s(452));return t;case"head":if(t=r.head,!t)throw Error(s(453));return t;case"body":if(t=r.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}var jn=new Map,Y_=new Set;function Vc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var tr=ae.d;ae.d={f:LS,r:zS,D:BS,C:jS,L:HS,m:qS,X:GS,S:FS,M:KS};function LS(){var t=tr.f(),r=Rc();return t||r}function zS(t){var r=ki(t);r!==null&&r.tag===5&&r.type==="form"?Ay(r):tr.r(t)}var to=typeof document>"u"?null:document;function X_(t,r,a){var l=to;if(l&&typeof r=="string"&&r){var h=st(r);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Y_.has(h)||(Y_.add(h),t={rel:t,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Bt(r,"link",t),et(r),l.head.appendChild(r)))}}function BS(t){tr.D(t),X_("dns-prefetch",t,null)}function jS(t,r){tr.C(t,r),X_("preconnect",t,r)}function HS(t,r,a){tr.L(t,r,a);var l=to;if(l&&t&&r){var h='link[rel="preload"][as="'+st(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+st(a.imageSizes)+'"]')):h+='[href="'+st(t)+'"]';var d=h;switch(r){case"style":d=no(t);break;case"script":d=io(t)}jn.has(d)||(t=C({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:t,as:r},a),jn.set(d,t),l.querySelector(h)!==null||r==="style"&&l.querySelector(kl(d))||r==="script"&&l.querySelector(Vl(d))||(r=l.createElement("link"),Bt(r,"link",t),et(r),l.head.appendChild(r)))}}function qS(t,r){tr.m(t,r);var a=to;if(a&&t){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=io(t)}if(!jn.has(d)&&(t=C({rel:"modulepreload",href:t},r),jn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vl(d)))return}l=a.createElement("link"),Bt(l,"link",t),et(l),a.head.appendChild(l)}}}function FS(t,r,a){tr.S(t,r,a);var l=to;if(l&&t){var h=Ir(l).hoistableStyles,d=no(t);r=r||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(kl(d)))T.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":r},a),(a=jn.get(d))&&tm(t,a);var I=v=l.createElement("link");et(I),Bt(I,"link",t),I._p=new Promise(function(x,Q){I.onload=x,I.onerror=Q}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Pc(v,r,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function GS(t,r){tr.X(t,r);var a=to;if(a&&t){var l=Ir(a).hoistableScripts,h=io(t),d=l.get(h);d||(d=a.querySelector(Vl(h)),d||(t=C({src:t,async:!0},r),(r=jn.get(h))&&nm(t,r),d=a.createElement("script"),et(d),Bt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function KS(t,r){tr.M(t,r);var a=to;if(a&&t){var l=Ir(a).hoistableScripts,h=io(t),d=l.get(h);d||(d=a.querySelector(Vl(h)),d||(t=C({src:t,async:!0,type:"module"},r),(r=jn.get(h))&&nm(t,r),d=a.createElement("script"),et(d),Bt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function W_(t,r,a,l){var h=(h=bn.current)?Vc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=no(a.href),a=Ir(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=no(a.href);var d=Ir(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(kl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),jn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jn.set(t,a),d||$S(h,t,a,v.state))),r&&l===null)throw Error(s(528,""));return v}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=io(a),a=Ir(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function no(t){return'href="'+st(t)+'"'}function kl(t){return'link[rel="stylesheet"]['+t+"]"}function Z_(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function $S(t,r,a,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Bt(r,"link",a),et(r),t.head.appendChild(r))}function io(t){return'[src="'+st(t)+'"]'}function Vl(t){return"script[async]"+t}function J_(t,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return r.instance=l,et(l),l;var h=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),et(l),Bt(l,"style",h),Pc(l,a.precedence,t),r.instance=l;case"stylesheet":h=no(a.href);var d=t.querySelector(kl(h));if(d)return r.state.loading|=4,r.instance=d,et(d),d;l=Z_(a),(h=jn.get(h))&&tm(l,h),d=(t.ownerDocument||t).createElement("link"),et(d);var v=d;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Bt(d,"link",l),r.state.loading|=4,Pc(d,a.precedence,t),r.instance=d;case"script":return d=io(a.src),(h=t.querySelector(Vl(d)))?(r.instance=h,et(h),h):(l=a,(h=jn.get(d))&&(l=C({},a),nm(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),et(h),Bt(h,"link",l),t.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Pc(l,a.precedence,t));return r.instance}function Pc(t,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===r)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(t,r.firstChild))}function tm(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function nm(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var xc=null;function ev(t,r,a){if(xc===null){var l=new Map,h=xc=new Map;h.set(a,l)}else h=xc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[br]||d[Ot]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function tv(t,r,a){t=t.ownerDocument||t,t.head.insertBefore(a,r==="title"?t.querySelector("head > title"):null)}function QS(t,r,a){if(a===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function nv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Pl=null;function YS(){}function XS(t,r,a){if(Pl===null)throw Error(s(475));var l=Pl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=no(a.href),d=t.querySelector(kl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Uc.bind(l),t.then(l,l)),r.state.loading|=4,r.instance=d,et(d);return}d=t.ownerDocument||t,a=Z_(a),(h=jn.get(h))&&tm(a,h),d=d.createElement("link"),et(d);var v=d;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Bt(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Uc.bind(l),t.addEventListener("load",r),t.addEventListener("error",r))}}function WS(){if(Pl===null)throw Error(s(475));var t=Pl;return t.stylesheets&&t.count===0&&im(t,t.stylesheets),0<t.count?function(r){var a=setTimeout(function(){if(t.stylesheets&&im(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Uc(){if(this.count--,this.count===0){if(this.stylesheets)im(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lc=null;function im(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lc=new Map,r.forEach(ZS,t),Lc=null,Uc.call(t))}function ZS(t,r){if(!(r.state.loading&4)){var a=Lc.get(t);if(a)var l=a.get(null);else{a=new Map,Lc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=r.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Uc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),r.state.loading|=4}}var xl={$$typeof:O,Provider:null,Consumer:null,_currentValue:Ie,_currentValue2:Ie,_threadCount:0};function JS(t,r,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_a(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.hiddenUpdates=_a(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function iv(t,r,a,l,h,d,v,T,I,x,Q,Z){return t=new JS(t,r,a,v,T,I,x,Z),r=1,d===!0&&(r|=24),d=zn(3,null,null,r),t.current=d,d.stateNode=t,r=Pf(),r.refCount++,t.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},pd(d),t}function rv(t){return t?(t=Pa,t):Pa}function sv(t,r,a,l,h,d){h=rv(h),l.context===null?l.context=h:l.pendingContext=h,l=Br(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=jr(t,l,r),a!==null&&(rn(a,t,r),vl(a,t,r))}function av(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function rm(t,r){av(t,r),(t=t.alternate)&&av(t,r)}function ov(t){if(t.tag===13){var r=kr(t,67108864);r!==null&&rn(r,t,67108864),rm(t,67108864)}}var zc=!0;function eb(t,r,a,l){var h=S.T;S.T=null;var d=ae.p;try{ae.p=2,sm(t,r,a,l)}finally{ae.p=d,S.T=h}}function tb(t,r,a,l){var h=S.T;S.T=null;var d=ae.p;try{ae.p=8,sm(t,r,a,l)}finally{ae.p=d,S.T=h}}function sm(t,r,a,l){if(zc){var h=am(l);if(h===null)$d(t,r,l,Bc,a),uv(t,l);else if(ib(h,t,r,a,l))l.stopPropagation();else if(uv(t,l),r&4&&-1<nb.indexOf(t)){for(;h!==null;){var d=ki(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Gn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Jt(v);T.entanglements[1]|=I,v&=~I}yi(d),(nt&6)===0&&(wc=an()+500,Ol(0))}}break;case 13:T=kr(d,2),T!==null&&rn(T,d,2),Rc(),rm(d,2)}if(d=am(l),d===null&&$d(t,r,l,Bc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else $d(t,r,l,null,a)}}function am(t){return t=wa(t),om(t)}var Bc=null;function om(t){if(Bc=null,t=Kn(t),t!==null){var r=pe(t);if(r===null)t=null;else{var a=r.tag;if(a===13){if(t=qe(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Bc=t,null}function lv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bu()){case Tt:return 2;case Dt:return 8;case Ni:case Ru:return 32;case Lo:return 268435456;default:return 32}default:return 32}}var lm=!1,Qr=null,Yr=null,Xr=null,Ul=new Map,Ll=new Map,Wr=[],nb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(t,r){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":Ul.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(r.pointerId)}}function zl(t,r,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=ki(r),r!==null&&ov(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function ib(t,r,a,l,h){switch(r){case"focusin":return Qr=zl(Qr,t,r,a,l,h),!0;case"dragenter":return Yr=zl(Yr,t,r,a,l,h),!0;case"mouseover":return Xr=zl(Xr,t,r,a,l,h),!0;case"pointerover":var d=h.pointerId;return Ul.set(d,zl(Ul.get(d)||null,t,r,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Ll.set(d,zl(Ll.get(d)||null,t,r,a,l,h)),!0}return!1}function cv(t){var r=Kn(t.target);if(r!==null){var a=pe(r);if(a!==null){if(r=a.tag,r===13){if(r=qe(a),r!==null){t.blockedOn=r,Sr(t.priority,function(){if(a.tag===13){var l=Tn(),h=kr(a,l);h!==null&&rn(h,a,l),rm(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=am(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Dn=l,a.target.dispatchEvent(l),Dn=null}else return r=ki(a),r!==null&&ov(r),t.blockedOn=a,!1;r.shift()}return!0}function hv(t,r,a){jc(t)&&a.delete(r)}function rb(){lm=!1,Qr!==null&&jc(Qr)&&(Qr=null),Yr!==null&&jc(Yr)&&(Yr=null),Xr!==null&&jc(Xr)&&(Xr=null),Ul.forEach(hv),Ll.forEach(hv)}function Hc(t,r){t.blockedOn===r&&(t.blockedOn=null,lm||(lm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,rb)))}var qc=null;function fv(t){qc!==t&&(qc=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){qc===t&&(qc=null);for(var r=0;r<t.length;r+=3){var a=t[r],l=t[r+1],h=t[r+2];if(typeof l!="function"){if(om(l||a)===null)continue;break}var d=ki(a);d!==null&&(t.splice(r,3),r-=3,Wf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Bl(t){function r(I){return Hc(I,t)}Qr!==null&&Hc(Qr,t),Yr!==null&&Hc(Yr,t),Xr!==null&&Hc(Xr,t),Ul.forEach(r),Ll.forEach(r);for(var a=0;a<Wr.length;a++){var l=Wr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Wr.length&&(a=Wr[0],a.blockedOn===null);)cv(a),a.blockedOn===null&&Wr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[At]||null;if(typeof d=="function")v||fv(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[At]||null)T=v.formAction;else if(om(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),fv(a)}}}function um(t){this._internalRoot=t}Fc.prototype.render=um.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Tn();sv(a,l,t,r,null,null)},Fc.prototype.unmount=um.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;t.tag===0&&Za(),sv(t.current,2,null,t,null,null),Rc(),r[Mi]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var r=Nu();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Wr.length&&r!==0&&r<Wr[a].priority;a++);Wr.splice(a,0,t),a===0&&cv(t)}};var dv=e.version;if(dv!=="19.0.0")throw Error(s(527,dv,"19.0.0"));ae.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=te(r),t=t!==null?fe(t):null,t=t===null?null:t.stateNode,t};var sb={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Kn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{_r=Gc.inject(sb),Gt=Gc}catch{}}return Hl.createRoot=function(t,r){if(!o(t))throw Error(s(299));var a=!1,l="",h=Oy,d=Ny,v=My,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=iv(t,1,!1,null,null,a,l,h,d,v,T,null),t[Mi]=r.current,Kd(t.nodeType===8?t.parentNode:t),new um(r)},Hl.hydrateRoot=function(t,r,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Oy,v=Ny,T=My,I=null,x=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(x=a.formState)),r=iv(t,1,!0,r,a??null,l,h,d,v,T,I,x),r.context=rv(null),a=r.current,l=Tn(),h=Br(l),h.callback=null,jr(a,h,l),r.current.lanes=l,ct(r,l),yi(r),t[Mi]=r.current,Kd(t),new Fc(r)},Hl.version="19.0.0",Hl}var wv;function pb(){if(wv)return fm.exports;wv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),fm.exports=mb(),fm.exports}var gb=pb();const yb=()=>{};var Sv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},_b=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],f=i[n++],m=i[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],f=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},vT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,E=u>>2,w=(u&3)<<4|m>>4;let b=(m&15)<<2|g>>6,O=g&63;p||(O=64,f||(b=64)),s.push(n[E],n[w],n[b],n[O])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(_T(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):_b(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],m=o<i.length?n[i.charAt(o)]:0;++o;const g=o<i.length?n[i.charAt(o)]:64;++o;const w=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||m==null||g==null||w==null)throw new vb;const b=u<<2|m>>4;if(s.push(b),g!==64){const O=m<<4&240|g>>2;if(s.push(O),w!==64){const P=g<<6&192|w;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class vb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eb=function(i){const e=_T(i);return vT.encodeByteArray(e,!0)},dh=function(i){return Eb(i).replace(/\./g,"")},ET=function(i){try{return vT.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=()=>Tb().__FIREBASE_DEFAULTS__,wb=()=>{if(typeof process>"u"||typeof Sv>"u")return;const i=Sv.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Sb=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ET(i[1]);return e&&JSON.parse(e)},xh=()=>{try{return yb()||Ab()||wb()||Sb()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},TT=i=>{var e,n;return(n=(e=xh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},AT=i=>{const e=TT(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},wT=()=>{var i;return(i=xh())===null||i===void 0?void 0:i.config},ST=i=>{var e;return(e=xh())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[dh(JSON.stringify(n)),dh(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function Ib(){var i;const e=(i=xh())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RT(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Db(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ob(){const i=Wt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Nb(){return!Ib()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IT(){try{return typeof indexedDB=="object"}catch{return!1}}function CT(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function Mb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="FirebaseError";class Fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=kb,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?Vb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Fn(o,m,s)}}function Vb(i,e){return i.replace(Pb,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Pb=/\{\$([^}]+)}/g;function xb(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function lr(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=i[o],f=e[o];if(bv(u)&&bv(f)){if(!lr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function bv(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Kl(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function Ub(i,e){const n=new Lb(i,e);return n.subscribe.bind(n)}class Lb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zb(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=gm),o.error===void 0&&(o.error=gm),o.complete===void 0&&(o.complete=gm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zb(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function gm(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=1e3,jb=2,Hb=4*60*60*1e3,qb=.5;function Rv(i,e=Bb,n=jb){const s=e*Math.pow(n,i),o=Math.round(qb*s*(Math.random()-.5)*2);return Math.min(Hb,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(i){return i&&i._delegate?i._delegate:i}class Hn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kb(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&e(f,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gb(i){return i===Zs?void 0:i}function Kb(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Me||(Me={}));const Qb={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},Yb=Me.INFO,Xb={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},Wb=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Xb[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uh{constructor(e){this.name=e,this._logLevel=Yb,this._logHandler=Wb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const Zb=(i,e)=>e.some(n=>i instanceof n);let Iv,Cv;function Jb(){return Iv||(Iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eR(){return Cv||(Cv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DT=new WeakMap,Vm=new WeakMap,OT=new WeakMap,ym=new WeakMap,fp=new WeakMap;function tR(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{n(rs(i.result)),o()},f=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&DT.set(n,i)}).catch(()=>{}),fp.set(e,i),e}function nR(i){if(Vm.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});Vm.set(i,e)}let Pm={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Vm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||OT.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rs(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function iR(i){Pm=i(Pm)}function rR(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(_m(this),e,...n);return OT.set(s,e.sort?e.sort():[e]),rs(s)}:eR().includes(i)?function(...e){return i.apply(_m(this),e),rs(DT.get(this))}:function(...e){return rs(i.apply(_m(this),e))}}function sR(i){return typeof i=="function"?rR(i):(i instanceof IDBTransaction&&nR(i),Zb(i,Jb())?new Proxy(i,Pm):i)}function rs(i){if(i instanceof IDBRequest)return tR(i);if(ym.has(i))return ym.get(i);const e=sR(i);return e!==i&&(ym.set(i,e),fp.set(e,i)),e}const _m=i=>fp.get(i);function NT(i,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(i,e),m=rs(f);return s&&f.addEventListener("upgradeneeded",p=>{s(rs(f.result),p.oldVersion,p.newVersion,rs(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}const aR=["get","getKey","getAll","getAllKeys","count"],oR=["put","add","delete","clear"],vm=new Map;function Dv(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(vm.get(e))return vm.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=oR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||aR.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(m.shift())),(await Promise.all([g[n](...m),o&&p.done]))[0]};return vm.set(e,u),u}iR(i=>({...i,get:(e,n,s)=>Dv(e,n)||i.get(e,n,s),has:(e,n)=>!!Dv(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function uR(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xm="@firebase/app",Ov="0.11.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Uh("@firebase/app"),cR="@firebase/app-compat",hR="@firebase/analytics-compat",fR="@firebase/analytics",dR="@firebase/app-check-compat",mR="@firebase/app-check",pR="@firebase/auth",gR="@firebase/auth-compat",yR="@firebase/database",_R="@firebase/data-connect",vR="@firebase/database-compat",ER="@firebase/functions",TR="@firebase/functions-compat",AR="@firebase/installations",wR="@firebase/installations-compat",SR="@firebase/messaging",bR="@firebase/messaging-compat",RR="@firebase/performance",IR="@firebase/performance-compat",CR="@firebase/remote-config",DR="@firebase/remote-config-compat",OR="@firebase/storage",NR="@firebase/storage-compat",MR="@firebase/firestore",kR="@firebase/vertexai",VR="@firebase/firestore-compat",PR="firebase",xR="11.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="[DEFAULT]",UR={[xm]:"fire-core",[cR]:"fire-core-compat",[fR]:"fire-analytics",[hR]:"fire-analytics-compat",[mR]:"fire-app-check",[dR]:"fire-app-check-compat",[pR]:"fire-auth",[gR]:"fire-auth-compat",[yR]:"fire-rtdb",[_R]:"fire-data-connect",[vR]:"fire-rtdb-compat",[ER]:"fire-fn",[TR]:"fire-fn-compat",[AR]:"fire-iid",[wR]:"fire-iid-compat",[SR]:"fire-fcm",[bR]:"fire-fcm-compat",[RR]:"fire-perf",[IR]:"fire-perf-compat",[CR]:"fire-rc",[DR]:"fire-rc-compat",[OR]:"fire-gcs",[NR]:"fire-gcs-compat",[MR]:"fire-fst",[VR]:"fire-fst-compat",[kR]:"fire-vertex","fire-js":"fire-js",[PR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new Map,LR=new Map,Lm=new Map;function Nv(i,e){try{i.container.addComponent(e)}catch(n){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Jn(i){const e=i.name;if(Lm.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;Lm.set(e,i);for(const n of mh.values())Nv(n,i);for(const n of LR.values())Nv(n,i);return!0}function ps(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function hn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ss=new ua("app","Firebase",zR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ss.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=xR;function MT(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Um,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ss.create("bad-app-name",{appName:String(o)});if(n||(n=wT()),!n)throw ss.create("no-options");const u=mh.get(o);if(u){if(lr(n,u.options)&&lr(s,u.config))return u;throw ss.create("duplicate-app",{appName:o})}const f=new $b(o);for(const p of Lm.values())f.addComponent(p);const m=new BR(n,s,f);return mh.set(o,m),m}function Lh(i=Um){const e=mh.get(i);if(!e&&i===Um&&wT())return MT();if(!e)throw ss.create("no-app",{appName:i});return e}function dn(i,e,n){var s;let o=(s=UR[i])!==null&&s!==void 0?s:i;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=e.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(m.join(" "));return}Jn(new Hn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="firebase-heartbeat-database",HR=1,iu="firebase-heartbeat-store";let Em=null;function kT(){return Em||(Em=NT(jR,HR,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(iu)}catch(n){console.warn(n)}}}}).catch(i=>{throw ss.create("idb-open",{originalErrorMessage:i.message})})),Em}async function qR(i){try{const n=(await kT()).transaction(iu),s=await n.objectStore(iu).get(VT(i));return await n.done,s}catch(e){if(e instanceof Fn)ur.warn(e.message);else{const n=ss.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(n.message)}}}async function Mv(i,e){try{const s=(await kT()).transaction(iu,"readwrite");await s.objectStore(iu).put(e,VT(i)),await s.done}catch(n){if(n instanceof Fn)ur.warn(n.message);else{const s=ss.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(s.message)}}}function VT(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=1024,GR=30;class KR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=kv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>GR){const f=YR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ur.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kv(),{heartbeatsToSend:s,unsentEntries:o}=$R(this._heartbeatsCache.heartbeats),u=dh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return ur.warn(n),""}}}function kv(){return new Date().toISOString().substring(0,10)}function $R(i,e=FR){const n=[];let s=i.slice();for(const o of i){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Vv(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Vv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class QR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IT()?CT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Vv(i){return dh(JSON.stringify({version:2,heartbeats:i})).length}function YR(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(i){Jn(new Hn("platform-logger",e=>new lR(e),"PRIVATE")),Jn(new Hn("heartbeat",e=>new KR(e),"PRIVATE")),dn(xm,Ov,i),dn(xm,Ov,"esm2017"),dn("fire-js","")}XR("");var WR="firebase",ZR="11.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(WR,ZR,"app");const PT="@firebase/installations",dp="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=1e4,UT=`w:${dp}`,LT="FIS_v2",JR="https://firebaseinstallations.googleapis.com/v1",eI=60*60*1e3,tI="installations",nI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},na=new ua(tI,nI,iI);function zT(i){return i instanceof Fn&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT({projectId:i}){return`${JR}/projects/${i}/installations`}function jT(i){return{token:i.token,requestStatus:2,expiresIn:sI(i.expiresIn),creationTime:Date.now()}}async function HT(i,e){const s=(await e.json()).error;return na.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function qT({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function rI(i,{refreshToken:e}){const n=qT(i);return n.append("Authorization",aI(e)),n}async function FT(i){const e=await i();return e.status>=500&&e.status<600?i():e}function sI(i){return Number(i.replace("s","000"))}function aI(i){return`${LT} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI({appConfig:i,heartbeatServiceProvider:e},{fid:n}){const s=BT(i),o=qT(i),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const f={fid:n,authVersion:LT,appId:i.appId,sdkVersion:UT},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await FT(()=>fetch(s,m));if(p.ok){const g=await p.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:jT(g.authToken)}}else throw await HT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(i){return new Promise(e=>{setTimeout(e,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=/^[cdef][\w-]{21}$/,zm="";function cI(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=hI(i);return uI.test(n)?n:zm}catch{return zm}}function hI(i){return lI(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=new Map;function $T(i,e){const n=zh(i);QT(n,e),fI(n,e)}function QT(i,e){const n=KT.get(i);if(n)for(const s of n)s(e)}function fI(i,e){const n=dI();n&&n.postMessage({key:i,fid:e}),mI()}let Js=null;function dI(){return!Js&&"BroadcastChannel"in self&&(Js=new BroadcastChannel("[Firebase] FID Change"),Js.onmessage=i=>{QT(i.data.key,i.data.fid)}),Js}function mI(){KT.size===0&&Js&&(Js.close(),Js=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="firebase-installations-database",gI=1,ia="firebase-installations-store";let Tm=null;function mp(){return Tm||(Tm=NT(pI,gI,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(ia)}}})),Tm}async function ph(i,e){const n=zh(i),o=(await mp()).transaction(ia,"readwrite"),u=o.objectStore(ia),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&$T(i,e.fid),e}async function YT(i){const e=zh(i),s=(await mp()).transaction(ia,"readwrite");await s.objectStore(ia).delete(e),await s.done}async function Bh(i,e){const n=zh(i),o=(await mp()).transaction(ia,"readwrite"),u=o.objectStore(ia),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&$T(i,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(i){let e;const n=await Bh(i.appConfig,s=>{const o=yI(s),u=_I(i,o);return e=u.registrationPromise,u.installationEntry});return n.fid===zm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yI(i){const e=i||{fid:cI(),registrationStatus:0};return XT(e)}function _I(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(na.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=vI(i,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:EI(i)}:{installationEntry:e}}async function vI(i,e){try{const n=await oI(i,e);return ph(i.appConfig,n)}catch(n){throw zT(n)&&n.customData.serverCode===409?await YT(i.appConfig):await ph(i.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function EI(i){let e=await Pv(i.appConfig);for(;e.registrationStatus===1;)await GT(100),e=await Pv(i.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await pp(i);return s||n}return e}function Pv(i){return Bh(i,e=>{if(!e)throw na.create("installation-not-found");return XT(e)})}function XT(i){return TI(i)?{fid:i.fid,registrationStatus:0}:i}function TI(i){return i.registrationStatus===1&&i.registrationTime+xT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI({appConfig:i,heartbeatServiceProvider:e},n){const s=wI(i,n),o=rI(i,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const f={installation:{sdkVersion:UT,appId:i.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await FT(()=>fetch(s,m));if(p.ok){const g=await p.json();return jT(g)}else throw await HT("Generate Auth Token",p)}function wI(i,{fid:e}){return`${BT(i)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gp(i,e=!1){let n;const s=await Bh(i.appConfig,u=>{if(!WT(u))throw na.create("not-registered");const f=u.authToken;if(!e&&RI(f))return u;if(f.requestStatus===1)return n=SI(i,e),u;{if(!navigator.onLine)throw na.create("app-offline");const m=CI(u);return n=bI(i,m),m}});return n?await n:s.authToken}async function SI(i,e){let n=await xv(i.appConfig);for(;n.authToken.requestStatus===1;)await GT(100),n=await xv(i.appConfig);const s=n.authToken;return s.requestStatus===0?gp(i,e):s}function xv(i){return Bh(i,e=>{if(!WT(e))throw na.create("not-registered");const n=e.authToken;return DI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bI(i,e){try{const n=await AI(i,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ph(i.appConfig,s),n}catch(n){if(zT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await YT(i.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ph(i.appConfig,s)}throw n}}function WT(i){return i!==void 0&&i.registrationStatus===2}function RI(i){return i.requestStatus===2&&!II(i)}function II(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+eI}function CI(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function DI(i){return i.requestStatus===1&&i.requestTime+xT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(i){const e=i,{installationEntry:n,registrationPromise:s}=await pp(e);return s?s.catch(console.error):gp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(i,e=!1){const n=i;return await MI(n),(await gp(n,e)).token}async function MI(i){const{registrationPromise:e}=await pp(i);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(i){if(!i||!i.options)throw Am("App Configuration");if(!i.name)throw Am("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!i.options[n])throw Am(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Am(i){return na.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="installations",VI="installations-internal",PI=i=>{const e=i.getProvider("app").getImmediate(),n=kI(e),s=ps(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xI=i=>{const e=i.getProvider("app").getImmediate(),n=ps(e,ZT).getImmediate();return{getId:()=>OI(n),getToken:o=>NI(n,o)}};function UI(){Jn(new Hn(ZT,PI,"PUBLIC")),Jn(new Hn(VI,xI,"PRIVATE"))}UI();dn(PT,dp);dn(PT,dp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="analytics",LI="firebase_id",zI="origin",BI=60*1e3,jI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Uh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Sn=new ua("analytics","Analytics",HI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(i){if(!i.startsWith(yp)){const e=Sn.create("invalid-gtag-resource",{gtagURL:i});return mn.warn(e.message),""}return i}function JT(i){return Promise.all(i.map(e=>e.catch(n=>n)))}function FI(i,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(i,e)),n}function GI(i,e){const n=FI("firebase-js-sdk-policy",{createScriptURL:qI}),s=document.createElement("script"),o=`${yp}?l=${i}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function KI(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function $I(i,e,n,s,o,u){const f=s[o];try{if(f)await e[f];else{const p=(await JT(n)).find(g=>g.measurementId===o);p&&await e[p.appId]}}catch(m){mn.error(m)}i("config",o,u)}async function QI(i,e,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await JT(n);for(const p of f){const g=m.find(w=>w.measurementId===p),E=g&&e[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),i("event",s,o||{})}catch(u){mn.error(u)}}function YI(i,e,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await QI(i,e,n,m,p)}else if(u==="config"){const[m,p]=f;await $I(i,e,n,s,m,p)}else if(u==="consent"){const[m,p]=f;i("consent",m,p)}else if(u==="get"){const[m,p,g]=f;i("get",m,p,g)}else if(u==="set"){const[m]=f;i("set",m)}else i(u,...f)}catch(m){mn.error(m)}}return o}function XI(i,e,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=YI(u,i,e,n),{gtagCore:u,wrappedGtag:window[o]}}function WI(i){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yp)&&n.src.includes(i))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=30,JI=1e3;class eC{constructor(e={},n=JI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const e0=new eC;function tC(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function nC(i){var e;const{appId:n,apiKey:s}=i,o={method:"GET",headers:tC(s)},u=jI.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((e=p.error)===null||e===void 0)&&e.message&&(m=p.error.message)}catch{}throw Sn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function iC(i,e=e0,n){const{appId:s,apiKey:o,measurementId:u}=i.options;if(!s)throw Sn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Sn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new aC;return setTimeout(async()=>{m.abort()},BI),t0({appId:s,apiKey:o,measurementId:u},f,m,e)}async function t0(i,{throttleEndTimeMillis:e,backoffCount:n},s,o=e0){var u;const{appId:f,measurementId:m}=i;try{await rC(s,e)}catch(p){if(m)return mn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await nC(i);return o.deleteThrottleMetadata(f),p}catch(p){const g=p;if(!sC(g)){if(o.deleteThrottleMetadata(f),m)return mn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?Rv(n,o.intervalMillis,ZI):Rv(n,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,w),mn.debug(`Calling attemptFetch again in ${E} millis`),t0(i,w,s,o)}}function rC(i,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(n,o);i.addEventListener(()=>{clearTimeout(u),s(Sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sC(i){if(!(i instanceof Fn)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class aC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function oC(i,e,n,s,o){if(o&&o.global){i("event",n,s);return}else{const u=await e,f=Object.assign(Object.assign({},s),{send_to:u});i("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(){if(IT())try{await CT()}catch(i){return mn.warn(Sn.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return mn.warn(Sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uC(i,e,n,s,o,u,f){var m;const p=iC(i);p.then(O=>{n[O.measurementId]=O.appId,i.options.measurementId&&O.measurementId!==i.options.measurementId&&mn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>mn.error(O)),e.push(p);const g=lC().then(O=>{if(O)return s.getId()}),[E,w]=await Promise.all([p,g]);WI(u)||GI(u,E.measurementId),o("js",new Date);const b=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return b[zI]="firebase",b.update=!0,w!=null&&(b[LI]=w),o("config",E.measurementId,b),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.app=e}_delete(){return delete Wl[this.app.options.appId],Promise.resolve()}}let Wl={},Uv=[];const Lv={};let wm="dataLayer",hC="gtag",zv,n0,Bv=!1;function fC(){const i=[];if(RT()&&i.push("This is a browser extension environment."),Mb()||i.push("Cookies are not available."),i.length>0){const e=i.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Sn.create("invalid-analytics-context",{errorInfo:e});mn.warn(n.message)}}function dC(i,e,n){fC();const s=i.options.appId;if(!s)throw Sn.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)mn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Sn.create("no-api-key");if(Wl[s]!=null)throw Sn.create("already-exists",{id:s});if(!Bv){KI(wm);const{wrappedGtag:u,gtagCore:f}=XI(Wl,Uv,Lv,wm,hC);n0=u,zv=f,Bv=!0}return Wl[s]=uC(i,Uv,Lv,e,zv,wm,n),new cC(i)}function mC(i=Lh()){i=ut(i);const e=ps(i,gh);return e.isInitialized()?e.getImmediate():pC(i)}function pC(i,e={}){const n=ps(i,gh);if(n.isInitialized()){const o=n.getImmediate();if(lr(e,n.getOptions()))return o;throw Sn.create("already-initialized")}return n.initialize({options:e})}function gC(i,e,n,s){i=ut(i),oC(n0,Wl[i.app.options.appId],e,n,s).catch(o=>mn.error(o))}const jv="@firebase/analytics",Hv="0.10.12";function yC(){Jn(new Hn(gh,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return dC(s,o,n)},"PUBLIC")),Jn(new Hn("analytics-internal",i,"PRIVATE")),dn(jv,Hv),dn(jv,Hv,"esm2017");function i(e){try{const n=e.getProvider(gh).getImmediate();return{logEvent:(s,o,u)=>gC(n,s,o,u)}}catch(n){throw Sn.create("interop-component-reg-failed",{reason:n})}}}yC();function _p(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(n[s[o]]=i[s[o]]);return n}function i0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _C=i0,r0=new ua("auth","Firebase",i0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new Uh("@firebase/auth");function vC(i,...e){yh.logLevel<=Me.WARN&&yh.warn(`Auth (${ca}): ${i}`,...e)}function th(i,...e){yh.logLevel<=Me.ERROR&&yh.error(`Auth (${ca}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(i,...e){throw Ep(i,...e)}function Zn(i,...e){return Ep(i,...e)}function vp(i,e,n){const s=Object.assign(Object.assign({},_C()),{[e]:n});return new ua("auth","Firebase",s).create(e,{appName:i.name})}function ar(i){return vp(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function EC(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&qn(i,"argument-error"),vp(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ep(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return r0.create(i,...e)}function _e(i,e,...n){if(!i)throw Ep(e,...n)}function ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw th(e),new Error(e)}function cr(i,e){i||ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function TC(){return qv()==="http:"||qv()==="https:"}function qv(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TC()||RT()||"connection"in navigator)?navigator.onLine:!0}function wC(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=Rb()||Db()}get(){return AC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(i,e){cr(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new du(3e4,6e4);function gs(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function mr(i,e,n,s,o={}){return a0(i,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=fu(Object.assign({key:i.config.apiKey},f)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return Cb()||(g.referrerPolicy="no-referrer"),s0.fetch()(o0(i,i.config.apiHost,n,m),g)})}async function a0(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},SC),e);try{const o=new IC(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Kc(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,g]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kc(i,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Kc(i,"email-already-in-use",f);if(p==="USER_DISABLED")throw Kc(i,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw vp(i,E,g);qn(i,E)}}catch(o){if(o instanceof Fn)throw o;qn(i,"network-request-failed",{message:String(o)})}}async function mu(i,e,n,s,o={}){const u=await mr(i,e,n,s,o);return"mfaPendingCredential"in u&&qn(i,"multi-factor-auth-required",{_serverResponse:u}),u}function o0(i,e,n,s){const o=`${e}${n}?${s}`;return i.config.emulator?Tp(i.config,o):`${i.config.apiScheme}://${o}`}function RC(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),bC.get())})}}function Kc(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Zn(i,e,s);return o.customData._tokenResponse=n,o}function Fv(i){return i!==void 0&&i.enterprise!==void 0}class CC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DC(i,e){return mr(i,"GET","/v2/recaptchaConfig",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(i,e){return mr(i,"POST","/v1/accounts:delete",e)}async function l0(i,e){return mr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NC(i,e=!1){const n=ut(i),s=await n.getIdToken(e),o=Ap(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Zl(Sm(o.auth_time)),issuedAtTime:Zl(Sm(o.iat)),expirationTime:Zl(Sm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Sm(i){return Number(i)*1e3}function Ap(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return th("JWT malformed, contained fewer than 3 sections"),null;try{const o=ET(n);return o?JSON.parse(o):(th("Failed to decode base64 JWT payload"),null)}catch(o){return th("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Gv(i){const e=Ap(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Fn&&MC(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function MC({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zl(this.lastLoginAt),this.creationTime=Zl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(i){var e;const n=i.auth,s=await i.getIdToken(),o=await go(i,l0(n,{idToken:s}));_e(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const f=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?u0(u.providerUserInfo):[],m=PC(i.providerData,f),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?g:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new jm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,w)}async function VC(i){const e=ut(i);await _h(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PC(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function u0(i){return i.map(e=>{var{providerId:n}=e,s=_p(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(i,e){const n=await a0(i,{},async()=>{const s=fu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=o0(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",s0.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UC(i,e){return mr(i,"POST","/v2/accounts:revokeToken",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Gv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await xC(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new co;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=_p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new jm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await go(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NC(this,e)}reload(){return VC(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _h(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await go(this,OC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,f,m,p,g,E;const w=(s=n.displayName)!==null&&s!==void 0?s:void 0,b=(o=n.email)!==null&&o!==void 0?o:void 0,O=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,P=(f=n.photoURL)!==null&&f!==void 0?f:void 0,G=(m=n.tenantId)!==null&&m!==void 0?m:void 0,B=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,K=(g=n.createdAt)!==null&&g!==void 0?g:void 0,ne=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:J,emailVerified:le,isAnonymous:ue,providerData:Te,stsTokenManager:M}=n;_e(J&&M,e,"internal-error");const R=co.fromJSON(this.name,M);_e(typeof J=="string",e,"internal-error"),Jr(w,e.name),Jr(b,e.name),_e(typeof le=="boolean",e,"internal-error"),_e(typeof ue=="boolean",e,"internal-error"),Jr(O,e.name),Jr(P,e.name),Jr(G,e.name),Jr(B,e.name),Jr(K,e.name),Jr(ne,e.name);const S=new rr({uid:J,auth:e,email:b,emailVerified:le,displayName:w,isAnonymous:ue,photoURL:P,phoneNumber:O,tenantId:G,stsTokenManager:R,createdAt:K,lastLoginAt:ne});return Te&&Array.isArray(Te)&&(S.providerData=Te.map(C=>Object.assign({},C))),B&&(S._redirectEventId=B),S}static async _fromIdTokenResponse(e,n,s=!1){const o=new co;o.updateFromServerResponse(n);const u=new rr({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await _h(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?u0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new co;m.updateFromIdToken(s);const p=new rr({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new jm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=new Map;function sr(i){cr(i instanceof Function,"Expected a class definition");let e=Kv.get(i);return e?(cr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Kv.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c0.type="NONE";const $v=c0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(i,e,n){return`firebase:${i}:${e}:${n}`}class ho{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=nh(this.userKey,o.apiKey,u),this.fullPersistenceKey=nh("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ho(sr($v),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||sr($v);const f=nh(s,e.config.apiKey,e.name);let m=null;for(const g of n)try{const E=await g._get(f);if(E){const w=rr._fromJSON(e,E);g!==u&&(m=w),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ho(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new ho(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g0(e))return"Blackberry";if(y0(e))return"Webos";if(f0(e))return"Safari";if((e.includes("chrome/")||d0(e))&&!e.includes("edge/"))return"Chrome";if(p0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function h0(i=Wt()){return/firefox\//i.test(i)}function f0(i=Wt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d0(i=Wt()){return/crios\//i.test(i)}function m0(i=Wt()){return/iemobile/i.test(i)}function p0(i=Wt()){return/android/i.test(i)}function g0(i=Wt()){return/blackberry/i.test(i)}function y0(i=Wt()){return/webos/i.test(i)}function wp(i=Wt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function LC(i=Wt()){var e;return wp(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zC(){return Ob()&&document.documentMode===10}function _0(i=Wt()){return wp(i)||p0(i)||y0(i)||g0(i)||/windows phone/i.test(i)||m0(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(i,e=[]){let n;switch(i){case"Browser":n=Qv(Wt());break;case"Worker":n=`${Qv(Wt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ca}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(i,e={}){return mr(i,"GET","/v2/passwordPolicy",gs(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=6;class qC{constructor(e){var n,s,o,u;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:HC,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yv(this),this.idTokenSubscription=new Yv(this),this.beforeStateQueue=new BC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await l0(this,{idToken:e}),s=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _h(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(ar(this));const n=e?ut(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jC(this),n=new qC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ua("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await UC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ys(i){return ut(i)}class Yv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ub(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GC(i){jh=i}function E0(i){return jh.loadJS(i)}function KC(){return jh.recaptchaEnterpriseScript}function $C(){return jh.gapiScript}function QC(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class YC{constructor(){this.enterprise=new XC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const WC="recaptcha-enterprise",T0="NO_RECAPTCHA";class ZC{constructor(e){this.type=WC,this.auth=ys(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{DC(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const g=new CC(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,f(g.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;Fv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{f(g)}).catch(()=>{f(T0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YC().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&Fv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=KC();p.length!==0&&(p+=m),E0(p).then(()=>{o(m,u,f)}).catch(g=>{f(g)})}}).catch(m=>{f(m)})})}}async function Xv(i,e,n,s=!1,o=!1){const u=new ZC(i);let f;if(o)f=T0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,g=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Hm(i,e,n,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Xv(i,e,n,n==="getOobCode");return s(i,f)}else return s(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Xv(i,e,n,n==="getOobCode");return s(i,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(i,e){const n=ps(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(lr(u,e??{}))return o;qn(o,"already-initialized")}return n.initialize({options:e})}function e1(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function t1(i,e,n){const s=ys(i);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=A0(e),{host:f,port:m}=n1(e),p=m===null?"":`:${m}`,g={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(lr(g,s.config.emulator)&&lr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,i1()}function A0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function n1(i){const e=A0(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Wv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Wv(f)}}}function Wv(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function i1(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}async function r1(i,e){return mr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(i,e){return mu(i,"POST","/v1/accounts:signInWithPassword",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(i,e){return mu(i,"POST","/v1/accounts:signInWithEmailLink",gs(i,e))}async function o1(i,e){return mu(i,"POST","/v1/accounts:signInWithEmailLink",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends Sp{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new ru(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ru(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hm(e,n,"signInWithPassword",s1);case"emailLink":return a1(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hm(e,s,"signUpPassword",r1);case"emailLink":return o1(e,{idToken:n,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(i,e){return mu(i,"POST","/v1/accounts:signInWithIdp",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="http://localhost";class ra extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ra(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=_p(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new ra(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return fo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fo(e,n)}buildRequest(){const e={requestUri:l1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function c1(i){const e=Gl(Kl(i)).link,n=e?Gl(Kl(e)).deep_link_id:null,s=Gl(Kl(i)).deep_link_id;return(s?Gl(Kl(s)).link:null)||s||n||e||i}class bp{constructor(e){var n,s,o,u,f,m;const p=Gl(Kl(e)),g=(n=p.apiKey)!==null&&n!==void 0?n:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,w=u1((o=p.mode)!==null&&o!==void 0?o:null);_e(g&&E&&w,"argument-error"),this.apiKey=g,this.operation=w,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const n=c1(e);try{return new bp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,n){return ru._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=bp.parseLink(n);return _e(s,"argument-error"),ru._fromEmailAndCode(e,s.code,s.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu extends Rp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends pu{constructor(){super("facebook.com")}static credential(e){return ra._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends pu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ra._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nr.credential(n,s)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends pu{constructor(){super("github.com")}static credential(e){return ra._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.GITHUB_SIGN_IN_METHOD="github.com";ts.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends pu{constructor(){super("twitter.com")}static credential(e,n){return ra._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ns.credential(n,s)}catch{return null}}}ns.TWITTER_SIGN_IN_METHOD="twitter.com";ns.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(i,e){return mu(i,"POST","/v1/accounts:signUp",gs(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await rr._fromIdTokenResponse(e,s,o),f=Zv(s);return new sa({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Zv(s);return new sa({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Zv(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends Fn{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,vh.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new vh(e,n,s,o)}}function w0(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?vh._fromErrorAndOperation(i,u,e,s):u})}async function f1(i,e,n=!1){const s=await go(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return sa._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(i,e,n=!1){const{auth:s}=i;if(hn(s.app))return Promise.reject(ar(s));const o="reauthenticate";try{const u=await go(i,w0(s,o,e,i),n);_e(u.idToken,s,"internal-error");const f=Ap(u.idToken);_e(f,s,"internal-error");const{sub:m}=f;return _e(i.uid===m,s,"user-mismatch"),sa._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&qn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(i,e,n=!1){if(hn(i.app))return Promise.reject(ar(i));const s="signIn",o=await w0(i,s,e),u=await sa._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(u.user),u}async function m1(i,e){return S0(ys(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(i){const e=ys(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function p1(i,e,n){if(hn(i.app))return Promise.reject(ar(i));const s=ys(i),f=await Hm(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",h1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&b0(i),p}),m=await sa._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function g1(i,e,n){return hn(i.app)?Promise.reject(ar(i)):m1(ut(i),Ro.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&b0(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(i,e){return mr(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=ut(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},f=await go(s,y1(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function v1(i,e,n,s){return ut(i).onIdTokenChanged(e,n,s)}function E1(i,e,n){return ut(i).beforeAuthStateChanged(e,n)}function T1(i,e,n,s){return ut(i).onAuthStateChanged(e,n,s)}function A1(i){return ut(i).signOut()}const Eh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eh,"1"),this.storage.removeItem(Eh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=1e3,S1=10;class I0 extends R0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);zC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,S1):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},w1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I0.type="LOCAL";const b1=I0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends R0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C0.type="SESSION";const D0=C0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Hh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async g=>g(n.origin,u)),p=await R1(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const g=Ip("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(w){const b=w;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(b.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){return window}function C1(i){vi().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function D1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O1(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function N1(){return O0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="firebaseLocalStorageDb",M1=1,Th="firebaseLocalStorage",M0="fbase_key";class gu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qh(i,e){return i.transaction([Th],e?"readwrite":"readonly").objectStore(Th)}function k1(){const i=indexedDB.deleteDatabase(N0);return new gu(i).toPromise()}function qm(){const i=indexedDB.open(N0,M1);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Th,{keyPath:M0})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Th)?e(s):(s.close(),await k1(),e(await qm()))})})}async function Jv(i,e,n){const s=qh(i,!0).put({[M0]:e,value:n});return new gu(s).toPromise()}async function V1(i,e){const n=qh(i,!1).get(e),s=await new gu(n).toPromise();return s===void 0?null:s.value}function eE(i,e){const n=qh(i,!0).delete(e);return new gu(n).toPromise()}const P1=800,x1=3;class k0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>x1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return O0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hh._getInstance(N1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await D1(),!this.activeServiceWorker)return;this.sender=new I1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qm();return await Jv(e,Eh,"1"),await eE(e,Eh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Jv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>V1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=qh(o,!1).getAll();return new gu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k0.type="LOCAL";const U1=k0;new du(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(i,e){return e?sr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function L1(i){return S0(i.auth,new Cp(i),i.bypassAuthState)}function z1(i){const{auth:e,user:n}=i;return _e(n,e,"internal-error"),d1(n,new Cp(i),i.bypassAuthState)}async function B1(i){const{auth:e,user:n}=i;return _e(n,e,"internal-error"),f1(n,new Cp(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L1;case"linkViaPopup":case"linkViaRedirect":return B1;case"reauthViaPopup":case"reauthViaRedirect":return z1;default:qn(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new du(2e3,1e4);async function H1(i,e,n){if(hn(i.app))return Promise.reject(Zn(i,"operation-not-supported-in-this-environment"));const s=ys(i);EC(i,e,Rp);const o=V0(s,n);return new ea(s,"signInViaPopup",e,o).executeNotNull()}class ea extends P0{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ea.currentPopupAction&&ea.currentPopupAction.cancel(),ea.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ea.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j1.get())};e()}}ea.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="pendingRedirect",ih=new Map;class F1 extends P0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ih.get(this.auth._key());if(!e){try{const s=await G1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ih.set(this.auth._key(),e)}return this.bypassAuthState||ih.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G1(i,e){const n=Q1(e),s=$1(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function K1(i,e){ih.set(i._key(),e)}function $1(i){return sr(i._redirectPersistence)}function Q1(i){return nh(q1,i.config.apiKey,i.name)}async function Y1(i,e,n=!1){if(hn(i.app))return Promise.reject(ar(i));const s=ys(i),o=V0(s,e),f=await new F1(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=10*60*1e3;class W1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Z1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!x0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=X1&&this.cachedEventUids.clear(),this.cachedEventUids.has(tE(e))}saveEventToCache(e){this.cachedEventUids.add(tE(e)),this.lastProcessedEventTime=Date.now()}}function tE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function x0({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Z1(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x0(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(i,e={}){return mr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tD=/^https?/;async function nD(i){if(i.config.emulator)return;const{authorizedDomains:e}=await J1(i);for(const n of e)try{if(iD(n))return}catch{}qn(i,"unauthorized-domain")}function iD(i){const e=Bm(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!tD.test(n))return!1;if(eD.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=new du(3e4,6e4);function nE(){const i=vi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function sD(i){return new Promise((e,n)=>{var s,o,u;function f(){nE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nE(),n(Zn(i,"network-request-failed"))},timeout:rD.get()})}if(!((o=(s=vi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=vi().gapi)===null||u===void 0)&&u.load)f();else{const m=QC("iframefcb");return vi()[m]=()=>{gapi.load?f():n(Zn(i,"network-request-failed"))},E0(`${$C()}?onload=${m}`).catch(p=>n(p))}}).catch(e=>{throw rh=null,e})}let rh=null;function aD(i){return rh=rh||sD(i),rh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=new du(5e3,15e3),lD="__/auth/iframe",uD="emulator/auth/iframe",cD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fD(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Tp(e,uD):`https://${i.config.authDomain}/${lD}`,s={apiKey:e.apiKey,appName:i.name,v:ca},o=hD.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${fu(s).slice(1)}`}async function dD(i){const e=await aD(i),n=vi().gapi;return _e(n,i,"internal-error"),e.open({where:document.body,url:fD(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Zn(i,"network-request-failed"),m=vi().setTimeout(()=>{u(f)},oD.get());function p(){vi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pD=500,gD=600,yD="_blank",_D="http://localhost";class iE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vD(i,e,n,s=pD,o=gD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},mD),{width:s.toString(),height:o.toString(),top:u,left:f}),g=Wt().toLowerCase();n&&(m=d0(g)?yD:n),h0(g)&&(e=e||_D,p.scrollbars="yes");const E=Object.entries(p).reduce((b,[O,P])=>`${b}${O}=${P},`,"");if(LC(g)&&m!=="_self")return ED(e||"",m),new iE(null);const w=window.open(e||"",m,E);_e(w,i,"popup-blocked");try{w.focus()}catch{}return new iE(w)}function ED(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD="__/auth/handler",AD="emulator/auth/handler",wD=encodeURIComponent("fac");async function rE(i,e,n,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:ca,eventId:o};if(e instanceof Rp){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",xb(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))f[E]=w}if(e instanceof pu){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(f.scopes=E.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await i._getAppCheckToken(),g=p?`#${wD}=${encodeURIComponent(p)}`:"";return`${SD(i)}?${fu(m).slice(1)}${g}`}function SD({config:i}){return i.emulator?Tp(i,AD):`https://${i.authDomain}/${TD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="webStorageSupport";class bD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D0,this._completeRedirectFn=Y1,this._overrideRedirectResult=K1}async _openPopup(e,n,s,o){var u;cr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await rE(e,n,s,Bm(),o);return vD(e,f,Ip())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await rE(e,n,s,Bm(),o);return C1(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(cr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await dD(e),s=new W1(e);return n.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bm,{type:bm},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[bm];f!==void 0&&n(!!f),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _0()||f0()||wp()}}const RD=bD;var sE="@firebase/auth",aE="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DD(i){Jn(new Hn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v0(i)},g=new FC(s,o,u,p);return e1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Jn(new Hn("auth-internal",e=>{const n=ys(e.getProvider("auth").getImmediate());return(s=>new ID(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(sE,aE,CD(i)),dn(sE,aE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=5*60,ND=ST("authIdTokenMaxAge")||OD;let oE=null;const MD=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ND)return;const o=n==null?void 0:n.token;oE!==o&&(oE=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function kD(i=Lh()){const e=ps(i,"auth");if(e.isInitialized())return e.getImmediate();const n=JC(i,{popupRedirectResolver:RD,persistence:[U1,b1,D0]}),s=ST("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=MD(u.toString());E1(n,f,()=>f(n.currentUser)),v1(n,m=>f(m))}}const o=TT("auth");return o&&t1(n,`http://${o}`),n}function VD(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}GC({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Zn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",VD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DD("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="firebasestorage.googleapis.com",PD="storageBucket",xD=2*60*1e3,UD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Fn{constructor(e,n,s=0){super(Rm(e),`Firebase Storage: ${n} (${Rm(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ii.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Rm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Si;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Si||(Si={}));function Rm(i){return"storage/"+i}function LD(){const i="An unknown error occurred, please check the error payload for server response.";return new Ii(Si.UNKNOWN,i)}function zD(){return new Ii(Si.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BD(){return new Ii(Si.CANCELED,"User canceled the upload/download.")}function jD(i){return new Ii(Si.INVALID_URL,"Invalid URL '"+i+"'.")}function HD(i){return new Ii(Si.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function lE(i){return new Ii(Si.INVALID_ARGUMENT,i)}function L0(){return new Ii(Si.APP_DELETED,"The Firebase app was deleted.")}function qD(i){return new Ii(Si.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Wn.makeFromUrl(e,n)}catch{return new Wn(e,"")}if(s.path==="")return s;throw HD(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(le){le.path.charAt(le.path.length-1)==="/"&&(le.path_=le.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function g(le){le.path_=decodeURIComponent(le.path)}const E="v[A-Za-z0-9_]+",w=n.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",O=new RegExp(`^https?://${w}/${E}/b/${o}/o${b}`,"i"),P={bucket:1,path:3},G=n===U0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,B="([^?#]*)",K=new RegExp(`^https?://${G}/${o}/${B}`,"i"),J=[{regex:m,indices:p,postModify:u},{regex:O,indices:P,postModify:g},{regex:K,indices:{bucket:1,path:2},postModify:g}];for(let le=0;le<J.length;le++){const ue=J[le],Te=ue.regex.exec(e);if(Te){const M=Te[ue.indices.bucket];let R=Te[ue.indices.path];R||(R=""),s=new Wn(M,R),ue.postModify(s);break}}if(s==null)throw jD(e);return s}}class FD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(i,e,n){let s=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let g=!1;function E(...B){g||(g=!0,e.apply(null,B))}function w(B){o=setTimeout(()=>{o=null,i(O,p())},B)}function b(){u&&clearTimeout(u)}function O(B,...K){if(g){b();return}if(B){b(),E.call(null,B,...K);return}if(p()||f){b(),E.call(null,B,...K);return}s<64&&(s*=2);let J;m===1?(m=2,J=0):J=(s+Math.random())*1e3,w(J)}let P=!1;function G(B){P||(P=!0,b(),!g&&(o!==null?(B||(m=2),clearTimeout(o),w(0)):B||(m=1)))}return w(0),u=setTimeout(()=>{f=!0,G(!0)},n),G}function KD(i){i(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(i){return i!==void 0}function uE(i,e,n,s){if(s<e)throw lE(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>n)throw lE(`Invalid value for '${i}'. Expected ${n} or less.`)}function QD(i){const e=encodeURIComponent;let n="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);n=n+o+"&"}return n=n.slice(0,-1),n}var Ah;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(Ah||(Ah={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(i,e){const n=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,u=e.indexOf(i)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,s,o,u,f,m,p,g,E,w,b=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=w,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,P)=>{this.resolve_=O,this.reject_=P,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new $c(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,g=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===Ah.NO_ERROR,p=u.getStatus();if(!m||YD(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===Ah.ABORT;s(!1,new $c(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new $c(g,u))})},n=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());$D(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=LD();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?L0():BD();f(p)}else{const p=zD();f(p)}};this.canceled_?n(!1,new $c(!1,null,!0)):this.backoffId_=GD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $c{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function WD(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function ZD(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function JD(i,e){e&&(i["X-Firebase-GMPID"]=e)}function eO(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function tO(i,e,n,s,o,u,f=!0){const m=QD(i.urlParams),p=i.url+m,g=Object.assign({},i.headers);return JD(g,e),WD(g,n),ZD(g,u),eO(g,s),new XD(p,i.method,g,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function iO(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this._service=e,n instanceof Wn?this._location=n:this._location=Wn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new wh(e,n)}get root(){const e=new Wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iO(this._location.path)}get storage(){return this._service}get parent(){const e=nO(this._location.path);if(e===null)return null;const n=new Wn(this._location.bucket,e);return new wh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qD(e)}}function cE(i,e){const n=e==null?void 0:e[PD];return n==null?null:Wn.makeFromBucketSpec(n,i)}function rO(i,e,n,s={}){i.host=`${e}:${n}`,i._protocol="http";const{mockUserToken:o}=s;o&&(i._overrideAuthToken=typeof o=="string"?o:bT(o,i.app.options.projectId))}class sO{constructor(e,n,s,o,u){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=U0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xD,this._maxUploadRetryTime=UD,this._requests=new Set,o!=null?this._bucket=Wn.makeFromBucketSpec(o,this._host):this._bucket=cE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wn.makeFromBucketSpec(this._url,e):this._bucket=cE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){uE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){uE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(hn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wh(this,e)}_makeRequest(e,n,s,o,u=!0){if(this._deleted)return new FD(L0());{const f=tO(e,this._appId,s,o,n,this._firebaseVersion,u);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const hE="@firebase/storage",fE="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="storage";function aO(i=Lh(),e){i=ut(i);const s=ps(i,z0).getImmediate({identifier:e}),o=AT("storage");return o&&oO(s,...o),s}function oO(i,e,n,s={}){rO(i,e,n,s)}function lO(i,{instanceIdentifier:e}){const n=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new sO(n,s,o,e,ca)}function uO(){Jn(new Hn(z0,lO,"PUBLIC").setMultipleInstances(!0)),dn(hE,fE,""),dn(hE,fE,"esm2017")}uO();var dE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,B0;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,R){function S(){}S.prototype=R.prototype,M.D=R.prototype,M.prototype=new S,M.prototype.constructor=M,M.C=function(C,V,z){for(var D=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)D[Et-2]=arguments[Et];return R.prototype[V].apply(C,D)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,R,S){S||(S=0);var C=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)C[V]=R.charCodeAt(S++)|R.charCodeAt(S++)<<8|R.charCodeAt(S++)<<16|R.charCodeAt(S++)<<24;else for(V=0;16>V;++V)C[V]=R[S++]|R[S++]<<8|R[S++]<<16|R[S++]<<24;R=M.g[0],S=M.g[1],V=M.g[2];var z=M.g[3],D=R+(z^S&(V^z))+C[0]+3614090360&4294967295;R=S+(D<<7&4294967295|D>>>25),D=z+(V^R&(S^V))+C[1]+3905402710&4294967295,z=R+(D<<12&4294967295|D>>>20),D=V+(S^z&(R^S))+C[2]+606105819&4294967295,V=z+(D<<17&4294967295|D>>>15),D=S+(R^V&(z^R))+C[3]+3250441966&4294967295,S=V+(D<<22&4294967295|D>>>10),D=R+(z^S&(V^z))+C[4]+4118548399&4294967295,R=S+(D<<7&4294967295|D>>>25),D=z+(V^R&(S^V))+C[5]+1200080426&4294967295,z=R+(D<<12&4294967295|D>>>20),D=V+(S^z&(R^S))+C[6]+2821735955&4294967295,V=z+(D<<17&4294967295|D>>>15),D=S+(R^V&(z^R))+C[7]+4249261313&4294967295,S=V+(D<<22&4294967295|D>>>10),D=R+(z^S&(V^z))+C[8]+1770035416&4294967295,R=S+(D<<7&4294967295|D>>>25),D=z+(V^R&(S^V))+C[9]+2336552879&4294967295,z=R+(D<<12&4294967295|D>>>20),D=V+(S^z&(R^S))+C[10]+4294925233&4294967295,V=z+(D<<17&4294967295|D>>>15),D=S+(R^V&(z^R))+C[11]+2304563134&4294967295,S=V+(D<<22&4294967295|D>>>10),D=R+(z^S&(V^z))+C[12]+1804603682&4294967295,R=S+(D<<7&4294967295|D>>>25),D=z+(V^R&(S^V))+C[13]+4254626195&4294967295,z=R+(D<<12&4294967295|D>>>20),D=V+(S^z&(R^S))+C[14]+2792965006&4294967295,V=z+(D<<17&4294967295|D>>>15),D=S+(R^V&(z^R))+C[15]+1236535329&4294967295,S=V+(D<<22&4294967295|D>>>10),D=R+(V^z&(S^V))+C[1]+4129170786&4294967295,R=S+(D<<5&4294967295|D>>>27),D=z+(S^V&(R^S))+C[6]+3225465664&4294967295,z=R+(D<<9&4294967295|D>>>23),D=V+(R^S&(z^R))+C[11]+643717713&4294967295,V=z+(D<<14&4294967295|D>>>18),D=S+(z^R&(V^z))+C[0]+3921069994&4294967295,S=V+(D<<20&4294967295|D>>>12),D=R+(V^z&(S^V))+C[5]+3593408605&4294967295,R=S+(D<<5&4294967295|D>>>27),D=z+(S^V&(R^S))+C[10]+38016083&4294967295,z=R+(D<<9&4294967295|D>>>23),D=V+(R^S&(z^R))+C[15]+3634488961&4294967295,V=z+(D<<14&4294967295|D>>>18),D=S+(z^R&(V^z))+C[4]+3889429448&4294967295,S=V+(D<<20&4294967295|D>>>12),D=R+(V^z&(S^V))+C[9]+568446438&4294967295,R=S+(D<<5&4294967295|D>>>27),D=z+(S^V&(R^S))+C[14]+3275163606&4294967295,z=R+(D<<9&4294967295|D>>>23),D=V+(R^S&(z^R))+C[3]+4107603335&4294967295,V=z+(D<<14&4294967295|D>>>18),D=S+(z^R&(V^z))+C[8]+1163531501&4294967295,S=V+(D<<20&4294967295|D>>>12),D=R+(V^z&(S^V))+C[13]+2850285829&4294967295,R=S+(D<<5&4294967295|D>>>27),D=z+(S^V&(R^S))+C[2]+4243563512&4294967295,z=R+(D<<9&4294967295|D>>>23),D=V+(R^S&(z^R))+C[7]+1735328473&4294967295,V=z+(D<<14&4294967295|D>>>18),D=S+(z^R&(V^z))+C[12]+2368359562&4294967295,S=V+(D<<20&4294967295|D>>>12),D=R+(S^V^z)+C[5]+4294588738&4294967295,R=S+(D<<4&4294967295|D>>>28),D=z+(R^S^V)+C[8]+2272392833&4294967295,z=R+(D<<11&4294967295|D>>>21),D=V+(z^R^S)+C[11]+1839030562&4294967295,V=z+(D<<16&4294967295|D>>>16),D=S+(V^z^R)+C[14]+4259657740&4294967295,S=V+(D<<23&4294967295|D>>>9),D=R+(S^V^z)+C[1]+2763975236&4294967295,R=S+(D<<4&4294967295|D>>>28),D=z+(R^S^V)+C[4]+1272893353&4294967295,z=R+(D<<11&4294967295|D>>>21),D=V+(z^R^S)+C[7]+4139469664&4294967295,V=z+(D<<16&4294967295|D>>>16),D=S+(V^z^R)+C[10]+3200236656&4294967295,S=V+(D<<23&4294967295|D>>>9),D=R+(S^V^z)+C[13]+681279174&4294967295,R=S+(D<<4&4294967295|D>>>28),D=z+(R^S^V)+C[0]+3936430074&4294967295,z=R+(D<<11&4294967295|D>>>21),D=V+(z^R^S)+C[3]+3572445317&4294967295,V=z+(D<<16&4294967295|D>>>16),D=S+(V^z^R)+C[6]+76029189&4294967295,S=V+(D<<23&4294967295|D>>>9),D=R+(S^V^z)+C[9]+3654602809&4294967295,R=S+(D<<4&4294967295|D>>>28),D=z+(R^S^V)+C[12]+3873151461&4294967295,z=R+(D<<11&4294967295|D>>>21),D=V+(z^R^S)+C[15]+530742520&4294967295,V=z+(D<<16&4294967295|D>>>16),D=S+(V^z^R)+C[2]+3299628645&4294967295,S=V+(D<<23&4294967295|D>>>9),D=R+(V^(S|~z))+C[0]+4096336452&4294967295,R=S+(D<<6&4294967295|D>>>26),D=z+(S^(R|~V))+C[7]+1126891415&4294967295,z=R+(D<<10&4294967295|D>>>22),D=V+(R^(z|~S))+C[14]+2878612391&4294967295,V=z+(D<<15&4294967295|D>>>17),D=S+(z^(V|~R))+C[5]+4237533241&4294967295,S=V+(D<<21&4294967295|D>>>11),D=R+(V^(S|~z))+C[12]+1700485571&4294967295,R=S+(D<<6&4294967295|D>>>26),D=z+(S^(R|~V))+C[3]+2399980690&4294967295,z=R+(D<<10&4294967295|D>>>22),D=V+(R^(z|~S))+C[10]+4293915773&4294967295,V=z+(D<<15&4294967295|D>>>17),D=S+(z^(V|~R))+C[1]+2240044497&4294967295,S=V+(D<<21&4294967295|D>>>11),D=R+(V^(S|~z))+C[8]+1873313359&4294967295,R=S+(D<<6&4294967295|D>>>26),D=z+(S^(R|~V))+C[15]+4264355552&4294967295,z=R+(D<<10&4294967295|D>>>22),D=V+(R^(z|~S))+C[6]+2734768916&4294967295,V=z+(D<<15&4294967295|D>>>17),D=S+(z^(V|~R))+C[13]+1309151649&4294967295,S=V+(D<<21&4294967295|D>>>11),D=R+(V^(S|~z))+C[4]+4149444226&4294967295,R=S+(D<<6&4294967295|D>>>26),D=z+(S^(R|~V))+C[11]+3174756917&4294967295,z=R+(D<<10&4294967295|D>>>22),D=V+(R^(z|~S))+C[2]+718787259&4294967295,V=z+(D<<15&4294967295|D>>>17),D=S+(z^(V|~R))+C[9]+3951481745&4294967295,M.g[0]=M.g[0]+R&4294967295,M.g[1]=M.g[1]+(V+(D<<21&4294967295|D>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+z&4294967295}s.prototype.u=function(M,R){R===void 0&&(R=M.length);for(var S=R-this.blockSize,C=this.B,V=this.h,z=0;z<R;){if(V==0)for(;z<=S;)o(this,M,z),z+=this.blockSize;if(typeof M=="string"){for(;z<R;)if(C[V++]=M.charCodeAt(z++),V==this.blockSize){o(this,C),V=0;break}}else for(;z<R;)if(C[V++]=M[z++],V==this.blockSize){o(this,C),V=0;break}}this.h=V,this.o+=R},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var R=1;R<M.length-8;++R)M[R]=0;var S=8*this.o;for(R=M.length-8;R<M.length;++R)M[R]=S&255,S/=256;for(this.u(M),M=Array(16),R=S=0;4>R;++R)for(var C=0;32>C;C+=8)M[S++]=this.g[R]>>>C&255;return M};function u(M,R){var S=m;return Object.prototype.hasOwnProperty.call(S,M)?S[M]:S[M]=R(M)}function f(M,R){this.h=R;for(var S=[],C=!0,V=M.length-1;0<=V;V--){var z=M[V]|0;C&&z==R||(S[V]=z,C=!1)}this.g=S}var m={};function p(M){return-128<=M&&128>M?u(M,function(R){return new f([R|0],0>R?-1:0)}):new f([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return w;if(0>M)return B(g(-M));for(var R=[],S=1,C=0;M>=S;C++)R[C]=M/S|0,S*=4294967296;return new f(R,0)}function E(M,R){if(M.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(M.charAt(0)=="-")return B(E(M.substring(1),R));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=g(Math.pow(R,8)),C=w,V=0;V<M.length;V+=8){var z=Math.min(8,M.length-V),D=parseInt(M.substring(V,V+z),R);8>z?(z=g(Math.pow(R,z)),C=C.j(z).add(g(D))):(C=C.j(S),C=C.add(g(D)))}return C}var w=p(0),b=p(1),O=p(16777216);i=f.prototype,i.m=function(){if(G(this))return-B(this).m();for(var M=0,R=1,S=0;S<this.g.length;S++){var C=this.i(S);M+=(0<=C?C:4294967296+C)*R,R*=4294967296}return M},i.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(P(this))return"0";if(G(this))return"-"+B(this).toString(M);for(var R=g(Math.pow(M,6)),S=this,C="";;){var V=le(S,R).g;S=K(S,V.j(R));var z=((0<S.g.length?S.g[0]:S.h)>>>0).toString(M);if(S=V,P(S))return z+C;for(;6>z.length;)z="0"+z;C=z+C}},i.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function P(M){if(M.h!=0)return!1;for(var R=0;R<M.g.length;R++)if(M.g[R]!=0)return!1;return!0}function G(M){return M.h==-1}i.l=function(M){return M=K(this,M),G(M)?-1:P(M)?0:1};function B(M){for(var R=M.g.length,S=[],C=0;C<R;C++)S[C]=~M.g[C];return new f(S,~M.h).add(b)}i.abs=function(){return G(this)?B(this):this},i.add=function(M){for(var R=Math.max(this.g.length,M.g.length),S=[],C=0,V=0;V<=R;V++){var z=C+(this.i(V)&65535)+(M.i(V)&65535),D=(z>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);C=D>>>16,z&=65535,D&=65535,S[V]=D<<16|z}return new f(S,S[S.length-1]&-2147483648?-1:0)};function K(M,R){return M.add(B(R))}i.j=function(M){if(P(this)||P(M))return w;if(G(this))return G(M)?B(this).j(B(M)):B(B(this).j(M));if(G(M))return B(this.j(B(M)));if(0>this.l(O)&&0>M.l(O))return g(this.m()*M.m());for(var R=this.g.length+M.g.length,S=[],C=0;C<2*R;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var V=0;V<M.g.length;V++){var z=this.i(C)>>>16,D=this.i(C)&65535,Et=M.i(V)>>>16,mt=M.i(V)&65535;S[2*C+2*V]+=D*mt,ne(S,2*C+2*V),S[2*C+2*V+1]+=z*mt,ne(S,2*C+2*V+1),S[2*C+2*V+1]+=D*Et,ne(S,2*C+2*V+1),S[2*C+2*V+2]+=z*Et,ne(S,2*C+2*V+2)}for(C=0;C<R;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=R;C<2*R;C++)S[C]=0;return new f(S,0)};function ne(M,R){for(;(M[R]&65535)!=M[R];)M[R+1]+=M[R]>>>16,M[R]&=65535,R++}function J(M,R){this.g=M,this.h=R}function le(M,R){if(P(R))throw Error("division by zero");if(P(M))return new J(w,w);if(G(M))return R=le(B(M),R),new J(B(R.g),B(R.h));if(G(R))return R=le(M,B(R)),new J(B(R.g),R.h);if(30<M.g.length){if(G(M)||G(R))throw Error("slowDivide_ only works with positive integers.");for(var S=b,C=R;0>=C.l(M);)S=ue(S),C=ue(C);var V=Te(S,1),z=Te(C,1);for(C=Te(C,2),S=Te(S,2);!P(C);){var D=z.add(C);0>=D.l(M)&&(V=V.add(S),z=D),C=Te(C,1),S=Te(S,1)}return R=K(M,V.j(R)),new J(V,R)}for(V=w;0<=M.l(R);){for(S=Math.max(1,Math.floor(M.m()/R.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),z=g(S),D=z.j(R);G(D)||0<D.l(M);)S-=C,z=g(S),D=z.j(R);P(z)&&(z=b),V=V.add(z),M=K(M,D)}return new J(V,M)}i.A=function(M){return le(this,M).h},i.and=function(M){for(var R=Math.max(this.g.length,M.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)&M.i(C);return new f(S,this.h&M.h)},i.or=function(M){for(var R=Math.max(this.g.length,M.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)|M.i(C);return new f(S,this.h|M.h)},i.xor=function(M){for(var R=Math.max(this.g.length,M.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)^M.i(C);return new f(S,this.h^M.h)};function ue(M){for(var R=M.g.length+1,S=[],C=0;C<R;C++)S[C]=M.i(C)<<1|M.i(C-1)>>>31;return new f(S,M.h)}function Te(M,R){var S=R>>5;R%=32;for(var C=M.g.length-S,V=[],z=0;z<C;z++)V[z]=0<R?M.i(z+S)>>>R|M.i(z+S+1)<<32-R:M.i(z+S);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,B0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=E,as=f}).apply(typeof dE<"u"?dE:typeof self<"u"?self:typeof window<"u"?window:{});var Qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var j0,$l,H0,sh,Fm,q0,F0,G0;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qc=="object"&&Qc];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,y){if(y)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var L=c[A];if(!(L in _))break e;_=_[L]}c=c[c.length-1],A=_[c],y=y(A),y!=A&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var _=0,A=!1,L={next:function(){if(!A&&_<c.length){var F=_++;return{value:y(F,c[F]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,_){return c.call.apply(c.bind,arguments)}function w(c,y,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),c.apply(y,L)}}return function(){return c.apply(y,arguments)}}function b(c,y,_){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,b.apply(null,arguments)}function O(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function P(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,L,F){for(var ie=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)ie[Pe-2]=arguments[Pe];return y.prototype[L].apply(A,ie)}}function G(c){const y=c.length;if(0<y){const _=Array(y);for(let A=0;A<y;A++)_[A]=c[A];return _}return[]}function B(c,y){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const L=c.length||0,F=A.length||0;c.length=L+F;for(let ie=0;ie<F;ie++)c[L+ie]=A[ie]}else c.push(A)}}class K{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ne(c){return/^[\s\xa0]*$/.test(c)}function J(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function le(c){return le[" "](c),c}le[" "]=function(){};var ue=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function Te(c,y,_){for(const A in c)y.call(_,c[A],A,c)}function M(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function R(c){const y={};for(const _ in c)y[_]=c[_];return y}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,y){let _,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(_ in A)c[_]=A[_];for(let F=0;F<S.length;F++)_=S[F],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function V(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function z(c){m.setTimeout(()=>{throw c},0)}function D(){var c=qe;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Et{constructor(){this.h=this.g=null}add(y,_){const A=mt.get();A.set(y,_),this.h?this.h.next=A:this.g=A,this.h=A}}var mt=new K(()=>new re,c=>c.reset());class re{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,pe=!1,qe=new Et,N=()=>{const c=m.Promise.resolve(void 0);ve=()=>{c.then(te)}};var te=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(_){z(_)}var y=mt;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}pe=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,y),m.removeEventListener("test",_,y)}catch{}return c}();function Ie(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ue){e:{try{le(y.nodeName);var L=!0;break e}catch{}L=!1}L||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:be[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}P(Ie,se);var be={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),ze=0;function rt(c,y,_,A,L){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!A,this.ha=L,this.key=++ze,this.da=this.fa=!1}function Ke(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Zt(c){this.src=c,this.g={},this.h=0}Zt.prototype.add=function(c,y,_,A,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var ie=bn(c,y,A,L);return-1<ie?(y=c[ie],_||(y.fa=!1)):(y=new rt(y,this.src,F,!!A,L),y.fa=_,c.push(y)),y};function Di(c,y){var _=y.type;if(_ in c.g){var A=c.g[_],L=Array.prototype.indexOf.call(A,y,void 0),F;(F=0<=L)&&Array.prototype.splice.call(A,L,1),F&&(Ke(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function bn(c,y,_,A){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==y&&F.capture==!!_&&F.ha==A)return L}return-1}var gr="closure_lm_"+(1e6*Math.random()|0),yr={};function Oi(c,y,_,A,L){if(Array.isArray(y)){for(var F=0;F<y.length;F++)Oi(c,y[F],_,A,L);return null}return _=bu(_),c&&c[pt]?c.K(y,_,g(A)?!!A.capture:!1,L):xo(c,y,_,!1,A,L)}function xo(c,y,_,A,L,F){if(!y)throw Error("Invalid event type");var ie=g(L)?!!L.capture:!!L,Pe=Uo(c);if(Pe||(c[gr]=Pe=new Zt(c)),_=Pe.add(y,_,A,ie,F),_.proxy)return _;if(A=ma(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ae||(L=ie),L===void 0&&(L=!1),c.addEventListener(y.toString(),A,L);else if(c.attachEvent)c.attachEvent(ga(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ma(){function c(_){return y.call(c.src,c.listener,_)}const y=ff;return c}function pa(c,y,_,A,L){if(Array.isArray(y))for(var F=0;F<y.length;F++)pa(c,y[F],_,A,L);else A=g(A)?!!A.capture:!!A,_=bu(_),c&&c[pt]?(c=c.i,y=String(y).toString(),y in c.g&&(F=c.g[y],_=bn(F,_,A,L),-1<_&&(Ke(F[_]),Array.prototype.splice.call(F,_,1),F.length==0&&(delete c.g[y],c.h--)))):c&&(c=Uo(c))&&(y=c.g[y.toString()],c=-1,y&&(c=bn(y,_,A,L)),(_=-1<c?y[c]:null)&&Es(_))}function Es(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[pt])Di(y.i,c);else{var _=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(_,A,c.capture):y.detachEvent?y.detachEvent(ga(_),A):y.addListener&&y.removeListener&&y.removeListener(A),(_=Uo(y))?(Di(_,c),_.h==0&&(_.src=null,y[gr]=null)):Ke(c)}}}function ga(c){return c in yr?yr[c]:yr[c]="on"+c}function ff(c,y){if(c.da)c=!0;else{y=new Ie(y,this);var _=c.listener,A=c.ha||c.src;c.fa&&Es(c),c=_.call(A,y)}return c}function Uo(c){return c=c[gr],c instanceof Zt?c:null}var an="__closure_events_fn_"+(1e9*Math.random()>>>0);function bu(c){return typeof c=="function"?c:(c[an]||(c[an]=function(y){return c.handleEvent(y)}),c[an])}function Tt(){fe.call(this),this.i=new Zt(this),this.M=this,this.F=null}P(Tt,fe),Tt.prototype[pt]=!0,Tt.prototype.removeEventListener=function(c,y,_,A){pa(this,c,y,_,A)};function Dt(c,y){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var L=y;y=new se(A,c),C(y,L)}if(L=!0,_)for(var F=_.length-1;0<=F;F--){var ie=y.g=_[F];L=Ni(ie,A,!0,y)&&L}if(ie=y.g=c,L=Ni(ie,A,!0,y)&&L,L=Ni(ie,A,!1,y)&&L,_)for(F=0;F<_.length;F++)ie=y.g=_[F],L=Ni(ie,A,!1,y)&&L}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],A=0;A<_.length;A++)Ke(_[A]);delete c.g[y],c.h--}}this.F=null},Tt.prototype.K=function(c,y,_,A){return this.i.add(String(c),y,!1,_,A)},Tt.prototype.L=function(c,y,_,A){return this.i.add(String(c),y,!0,_,A)};function Ni(c,y,_,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var L=!0,F=0;F<y.length;++F){var ie=y[F];if(ie&&!ie.da&&ie.capture==_){var Pe=ie.listener,wt=ie.ha||ie.src;ie.fa&&Di(c.i,ie),L=Pe.call(wt,A)!==!1&&L}}return L&&!A.defaultPrevented}function Ru(c,y,_){if(typeof c=="function")_&&(c=b(c,_));else if(c&&typeof c.handleEvent=="function")c=b(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(c,y||0)}function Lo(c){c.g=Ru(()=>{c.g=null,c.i&&(c.i=!1,Lo(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class df extends fe{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Lo(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(c){fe.call(this),this.h=c,this.g={}}P(Ts,fe);var _r=[];function Gt(c){Te(c.g,function(y,_){this.g.hasOwnProperty(_)&&Es(y)},c),c.g={}}Ts.prototype.N=function(){Ts.aa.N.call(this),Gt(this)},Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=m.JSON.stringify,ni=m.JSON.parse,Jt=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Bo(){}Bo.prototype.h=null;function Iu(c){return c.h||(c.h=c.i())}function Cu(){}var ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vr(){se.call(this,"d")}P(vr,se);function Gn(){se.call(this,"c")}P(Gn,se);var Rn={},Er=null;function ya(){return Er=Er||new Tt}Rn.La="serverreachability";function jo(c){se.call(this,Rn.La,c)}P(jo,se);function Tr(c){const y=ya();Dt(y,new jo(y))}Rn.STAT_EVENT="statevent";function _a(c,y){se.call(this,Rn.STAT_EVENT,c),this.stat=y}P(_a,se);function ct(c){const y=ya();Dt(y,new _a(y,c))}Rn.Ma="timingevent";function Du(c,y){se.call(this,Rn.Ma,c),this.size=y}P(Du,se);function Ar(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},y)}function wr(){this.g=!0}wr.prototype.xa=function(){this.g=!1};function Ou(c,y,_,A,L,F){c.info(function(){if(c.g)if(F)for(var ie="",Pe=F.split("&"),wt=0;wt<Pe.length;wt++){var xe=Pe[wt].split("=");if(1<xe.length){var Mt=xe[0];xe=xe[1];var St=Mt.split("_");ie=2<=St.length&&St[1]=="type"?ie+(Mt+"="+xe+"&"):ie+(Mt+"=redacted&")}}else ie=null;else ie=F;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+y+`
`+_+`
`+ie})}function Nu(c,y,_,A,L,F,ie){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+y+`
`+_+`
`+F+" "+ie})}function Sr(c,y,_,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Ot(c,_)+(A?" "+A:"")})}function ri(c,y){c.info(function(){return"TIMEOUT: "+y})}wr.prototype.info=function(){};function Ot(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var ie=1;ie<L.length;ie++)L[ie]=""}}}}return zo(_)}catch{return y}}var At={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},As;function va(){}P(va,Bo),va.prototype.g=function(){return new XMLHttpRequest},va.prototype.i=function(){return{}},As=new va;function si(c,y,_,A){this.j=c,this.i=y,this.l=_,this.R=A||1,this.U=new Ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ho}function Ho(){this.i=null,this.g="",this.h=!1}var br={},ws={};function Kn(c,y,_){c.L=1,c.v=Rs(st(y)),c.m=_,c.P=!0,ki(c,null)}function ki(c,y){c.F=Date.now(),et(c),c.A=st(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),xi(_.i,"t",A),c.C=0,_=c.j.J,c.h=new Ho,c.g=Gu(c.j,_?y:null,!c.m),0<c.O&&(c.M=new df(b(c.Y,c,c.g),c.O)),y=c.U,_=c.g,A=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(_r[0]=L.toString()),L=_r);for(var F=0;F<L.length;F++){var ie=Oi(_,L[F],A||y.handleEvent,!1,y.h||y);if(!ie)break;y.g[ie.key]=ie}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Tr(),Ou(c.i,c.u,c.A,c.l,c.R,c.m)}si.prototype.ca=function(c){c=c.target;const y=this.M;y&&Nn(c)==3?y.j():this.Y(c)},si.prototype.Y=function(c){try{if(c==this.g)e:{const St=Nn(this.g);var y=this.g.Ba();const Bi=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Uu(this.g)))){this.J||St!=4||y==7||(y==8||0>=Bi?Tr(3):Tr(2)),Ea(this);var _=this.g.Z();this.X=_;t:if(Rr(this)){var A=Uu(this.g);c="";var L=A.length,F=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),pn(this);var ie="";break t}this.h.i=new m.TextDecoder}for(y=0;y<L;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(F&&y==L-1)});A.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,Nu(this.i,this.u,this.A,this.l,this.R,St,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,wt=this.g;if((Pe=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(Pe)){var xe=Pe;break t}}xe=null}if(_=xe)Sr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gn(this,_);else{this.o=!1,this.s=3,ct(12),on(this),pn(this);break e}}if(this.P){_=!0;let Ut;for(;!this.J&&this.C<ie.length;)if(Ut=Ir(this,ie),Ut==ws){St==4&&(this.s=4,ct(14),_=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==br){this.s=4,ct(15),Sr(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else Sr(this.i,this.l,Ut,null),gn(this,Ut);if(Rr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||ie.length!=0||this.h.h||(this.s=1,ct(16),_=!1),this.o=this.o&&_,!_)Sr(this.i,this.l,ie,"[Invalid Chunked Response]"),on(this),pn(this);else if(0<ie.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),ks(Mt),Mt.M=!0,ct(11))}}else Sr(this.i,this.l,ie,null),gn(this,ie);St==4&&on(this),this.o&&!this.J&&(St==4?Hu(this.j,this):(this.o=!1,et(this)))}else vf(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),on(this),pn(this)}}}catch{}finally{}};function Rr(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ir(c,y){var _=c.C,A=y.indexOf(`
`,_);return A==-1?ws:(_=Number(y.substring(_,A)),isNaN(_)?br:(A+=1,A+_>y.length?ws:(y=y.slice(A,A+_),c.C=A+_,y)))}si.prototype.cancel=function(){this.J=!0,on(this)};function et(c){c.S=Date.now()+c.I,qo(c,c.I)}function qo(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ar(b(c.ba,c),y)}function Ea(c){c.B&&(m.clearTimeout(c.B),c.B=null)}si.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ri(this.i,this.A),this.L!=2&&(Tr(),ct(17)),on(this),this.s=2,pn(this)):qo(this,this.S-c)};function pn(c){c.j.G==0||c.J||Hu(c.j,c)}function on(c){Ea(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Gt(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function gn(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||Cr(_.h,c))){if(!c.K&&Cr(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Oa(_),Ca(_);else break e;el(_),ct(18)}}else _.za=L[1],0<_.za-_.T&&37500>L[2]&&_.F&&_.v==0&&!_.C&&(_.C=Ar(b(_.Za,_),6e3));if(1>=Mu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else zi(_,11)}else if((c.K||_.g==c)&&Oa(_),!ne(y))for(L=_.Da.g.parse(y),y=0;y<L.length;y++){let xe=L[y];if(_.T=xe[0],xe=xe[1],_.G==2)if(xe[0]=="c"){_.K=xe[1],_.ia=xe[2];const Mt=xe[3];Mt!=null&&(_.la=Mt,_.j.info("VER="+_.la));const St=xe[4];St!=null&&(_.Aa=St,_.j.info("SVER="+_.Aa));const Bi=xe[5];Bi!=null&&typeof Bi=="number"&&0<Bi&&(A=1.5*Bi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Ut=c.g;if(Ut){const fi=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var F=A.h;F.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Dr(F,F.h),F.h=null))}if(A.D){const nl=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(A.ya=nl,Be(A.I,A.D,nl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var ie=c;if(A.qa=Fu(A,A.J?A.ia:null,A.W),ie.K){In(A.h,ie);var Pe=ie,wt=A.L;wt&&(Pe.I=wt),Pe.B&&(Ea(Pe),et(Pe)),A.g=ie}else Bu(A);0<_.i.length&&Da(_)}else xe[0]!="stop"&&xe[0]!="close"||zi(_,7);else _.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?zi(_,7):Zo(_):xe[0]!="noop"&&_.l&&_.l.ta(xe),_.v=0)}}Tr(4)}catch{}}var mf=class{constructor(c,y){this.g=c,this.map=y}};function Fo(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Go(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Mu(c){return c.h?1:c.g?c.g.size:0}function Cr(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Dr(c,y){c.g?c.g.add(y):c.h=y}function In(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Fo.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function en(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return G(c.i)}function ku(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var y=[],_=c.length,A=0;A<_;A++)y.push(c[A]);return y}y=[],_=0;for(A in c)y[_++]=c[A];return y}function pf(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const A in c)y[_++]=A;return y}}}function Ss(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=pf(c),A=ku(c),L=A.length,F=0;F<L;F++)y.call(void 0,A[F],_&&_[F],c)}var Ko=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ta(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),L=null;if(0<=A){var F=c[_].substring(0,A);L=c[_].substring(A+1)}else F=c[_];y(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Vi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Vi){this.h=c.h,Or(this,c.j),this.o=c.o,this.g=c.g,bs(this,c.s),this.l=c.l;var y=c.i,_=new ai;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),Aa(this,_),this.m=c.m}else c&&(y=String(c).match(Ko))?(this.h=!1,Or(this,y[1]||"",!0),this.o=Nr(y[2]||""),this.g=Nr(y[3]||"",!0),bs(this,y[4]),this.l=Nr(y[5]||"",!0),Aa(this,y[6]||"",!0),this.m=Nr(y[7]||"")):(this.h=!1,this.i=new ai(null,this.h))}Vi.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Cn(y,$o,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Cn(y,$o,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Cn(_,_.charAt(0)=="/"?Qo:Vu,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Cn(_,_f)),c.join("")};function st(c){return new Vi(c)}function Or(c,y,_){c.j=_?Nr(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function bs(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Aa(c,y,_){y instanceof ai?(c.i=y,Yo(c.i,c.h)):(_||(y=Cn(y,yf)),c.i=new ai(y,c.h))}function Be(c,y,_){c.i.set(y,_)}function Rs(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Nr(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Cn(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,gf),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function gf(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var $o=/[#\/\?@]/g,Vu=/[#\?:]/g,Qo=/[#\?]/g,yf=/[#\?@]/g,_f=/#/g;function ai(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Dn(c){c.g||(c.g=new Map,c.h=0,c.i&&Ta(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}i=ai.prototype,i.add=function(c,y){Dn(this),this.i=null,c=Ui(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function wa(c,y){Dn(c),y=Ui(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Pi(c,y){return Dn(c),y=Ui(c,y),c.g.has(y)}i.forEach=function(c,y){Dn(this),this.g.forEach(function(_,A){_.forEach(function(L){c.call(y,L,A,this)},this)},this)},i.na=function(){Dn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let A=0;A<y.length;A++){const L=c[A];for(let F=0;F<L.length;F++)_.push(y[A])}return _},i.V=function(c){Dn(this);let y=[];if(typeof c=="string")Pi(this,c)&&(y=y.concat(this.g.get(Ui(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},i.set=function(c,y){return Dn(this),this.i=null,c=Ui(this,c),Pi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},i.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function xi(c,y,_){wa(c,y),0<_.length&&(c.i=null,c.g.set(Ui(c,y),G(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var A=y[_];const F=encodeURIComponent(String(A)),ie=this.V(A);for(A=0;A<ie.length;A++){var L=F;ie[A]!==""&&(L+="="+encodeURIComponent(String(ie[A]))),c.push(L)}}return this.i=c.join("&")};function Ui(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Yo(c,y){y&&!c.j&&(Dn(c),c.i=null,c.g.forEach(function(_,A){var L=A.toLowerCase();A!=L&&(wa(this,A),xi(this,L,_))},c)),c.j=y}function Pu(c,y){const _=new wr;if(m.Image){const A=new Image;A.onload=O(On,_,"TestLoadImage: loaded",!0,y,A),A.onerror=O(On,_,"TestLoadImage: error",!1,y,A),A.onabort=O(On,_,"TestLoadImage: abort",!1,y,A),A.ontimeout=O(On,_,"TestLoadImage: timeout",!1,y,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function Is(c,y){const _=new wr,A=new AbortController,L=setTimeout(()=>{A.abort(),On(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(F=>{clearTimeout(L),F.ok?On(_,"TestPingServer: ok",!0,y):On(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(L),On(_,"TestPingServer: error",!1,y)})}function On(c,y,_,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(_)}catch{}}function Cs(){this.g=new Jt}function oi(c,y,_){const A=_||"";try{Ss(c,function(L,F){let ie=L;g(L)&&(ie=zo(L)),y.push(A+F+"="+encodeURIComponent(ie))})}catch(L){throw y.push(A+"type="+encodeURIComponent("_badmap")),L}}function Mr(c){this.l=c.Ub||null,this.j=c.eb||!1}P(Mr,Bo),Mr.prototype.g=function(){return new Li(this.l,this.j)},Mr.prototype.i=function(c){return function(){return c}}({});function Li(c,y){Tt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Li,Tt),i=Li.prototype,i.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,ui(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?li(this):ui(this),this.readyState==3&&Xo(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,li(this))},i.Qa=function(c){this.g&&(this.response=c,li(this))},i.ga=function(){this.g&&li(this)};function li(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ui(c)}i.setRequestHeader=function(c,y){this.u.append(c,y)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Wo(c){let y="";return Te(c,function(_,A){y+=A,y+=":",y+=_,y+=`\r
`}),y}function Nt(c,y,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=Wo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Be(c,y,_))}function Fe(c){Tt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Fe,Tt);var Sa=/^https?$/i,Ds=["POST","PUT"];i=Fe.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,y,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():As.g(),this.v=this.o?Iu(this.o):Iu(As),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(F){xu(this,F);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)_.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const F of A.keys())_.set(F,A.get(F));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(F=>F.toLowerCase()=="content-type"),L=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Ds,y,void 0))||A||L||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,ie]of _)this.g.setRequestHeader(F,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Os(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){xu(this,F)}};function xu(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,ba(c),ci(c)}function ba(c){c.A||(c.A=!0,Dt(c,"complete"),Dt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Dt(this,"complete"),Dt(this,"abort"),ci(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ci(this,!0)),Fe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ra(this):this.bb())},i.bb=function(){Ra(this)};function Ra(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Nn(c)!=4||c.Z()!=2)){if(c.u&&Nn(c)==4)Ru(c.Ea,0,c);else if(Dt(c,"readystatechange"),Nn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var A;if(A=ie===0){var L=String(c.D).match(Ko)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),A=!Sa.test(L?L.toLowerCase():"")}_=A}if(_)Dt(c,"complete"),Dt(c,"success");else{c.m=6;try{var F=2<Nn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",ba(c)}}finally{ci(c)}}}}function ci(c,y){if(c.g){Os(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Dt(c,"ready");try{_.onreadystatechange=A}catch{}}}function Os(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function Nn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ni(y)}};function Uu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function vf(c){const y={};c=(c.g&&2<=Nn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(ne(c[A]))continue;var _=V(c[A]);const L=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const F=y[L]||[];y[L]=F,F.push(_)}M(y,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function Ia(c){this.Aa=0,this.i=[],this.j=new wr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,c),this.cb=Ns("retryDelaySeedMs",1e4,c),this.Wa=Ns("forwardChannelMaxRetries",2,c),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Fo(c&&c.concurrentRequestLimit),this.Da=new Cs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ia.prototype,i.la=8,i.G=1,i.connect=function(c,y,_,A){ct(0),this.W=c,this.H=y||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=Fu(this,null,this.W),Da(this)};function Zo(c){if(Lu(c),c.G==3){var y=c.U++,_=st(c.I);if(Be(_,"SID",c.K),Be(_,"RID",y),Be(_,"TYPE","terminate"),Ms(c,_),y=new si(c,c.j,y),y.L=2,y.v=Rs(st(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=y.v,_=!0),_||(y.g=Gu(y.j,null),y.g.ea(y.v)),y.F=Date.now(),et(y)}qu(c)}function Ca(c){c.g&&(ks(c),c.g.cancel(),c.g=null)}function Lu(c){Ca(c),c.u&&(m.clearTimeout(c.u),c.u=null),Oa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Da(c){if(!Go(c.h)&&!c.s){c.s=!0;var y=c.Ga;ve||N(),pe||(ve(),pe=!0),qe.add(y,c),c.B=0}}function Ef(c,y){return Mu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ar(b(c.Ga,c,y),tl(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new si(this,this.j,c);let F=this.o;if(this.S&&(F?(F=R(F),C(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=zu(this,L,y),_=st(this.I),Be(_,"RID",c),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),Ms(this,_),F&&(this.O?y="headers="+encodeURIComponent(String(Wo(F)))+"&"+y:this.m&&Nt(_,this.m,F)),Dr(this.h,L),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",y),Be(_,"SID","null"),L.T=!0,Kn(L,_,null)):Kn(L,_,y),this.G=2}}else this.G==3&&(c?Jo(this,c):this.i.length==0||Go(this.h)||Jo(this))};function Jo(c,y){var _;y?_=y.l:_=c.U++;const A=st(c.I);Be(A,"SID",c.K),Be(A,"RID",_),Be(A,"AID",c.T),Ms(c,A),c.m&&c.o&&Nt(A,c.m,c.o),_=new si(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=zu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Dr(c.h,_),Kn(_,A,y)}function Ms(c,y){c.H&&Te(c.H,function(_,A){Be(y,A,_)}),c.l&&Ss({},function(_,A){Be(y,A,_)})}function zu(c,y,_){_=Math.min(c.i.length,_);var A=c.l?b(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const ie=["count="+_];F==-1?0<_?(F=L[0].g,ie.push("ofs="+F)):F=0:ie.push("ofs="+F);let Pe=!0;for(let wt=0;wt<_;wt++){let xe=L[wt].g;const Mt=L[wt].map;if(xe-=F,0>xe)F=Math.max(0,L[wt].g-100),Pe=!1;else try{oi(Mt,ie,"req"+xe+"_")}catch{A&&A(Mt)}}if(Pe){A=ie.join("&");break e}}}return c=c.i.splice(0,_),y.D=c,A}function Bu(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;ve||N(),pe||(ve(),pe=!0),qe.add(y,c),c.v=0}}function el(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ar(b(c.Fa,c),tl(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ar(b(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Ca(this),ju(this))};function ks(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function ju(c){c.g=new si(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=st(c.qa);Be(y,"RID","rpc"),Be(y,"SID",c.K),Be(y,"AID",c.T),Be(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(y,"TO",c.ja),Be(y,"TYPE","xmlhttp"),Ms(c,y),c.m&&c.o&&Nt(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Rs(st(y)),_.m=null,_.P=!0,ki(_,c)}i.Za=function(){this.C!=null&&(this.C=null,Ca(this),el(this),ct(19))};function Oa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Hu(c,y){var _=null;if(c.g==y){Oa(c),ks(c),c.g=null;var A=2}else if(Cr(c.h,y))_=y.D,In(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var L=c.B;A=ya(),Dt(A,new Du(A,_)),Da(c)}else Bu(c);else if(L=y.s,L==3||L==0&&0<y.X||!(A==1&&Ef(c,y)||A==2&&el(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),L){case 1:zi(c,5);break;case 4:zi(c,10);break;case 3:zi(c,6);break;default:zi(c,2)}}}function tl(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function zi(c,y){if(c.j.info("Error code "+y),y==2){var _=b(c.fb,c),A=c.Xa;const L=!A;A=new Vi(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Or(A,"https"),Rs(A),L?Pu(A.toString(),_):Is(A.toString(),_)}else ct(2);c.G=0,c.l&&c.l.sa(y),qu(c),Lu(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function qu(c){if(c.G=0,c.ka=[],c.l){const y=en(c.h);(y.length!=0||c.i.length!=0)&&(B(c.ka,y),B(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function Fu(c,y,_){var A=_ instanceof Vi?st(_):new Vi(_);if(A.g!="")y&&(A.g=y+"."+A.g),bs(A,A.s);else{var L=m.location;A=L.protocol,y=y?y+"."+L.hostname:L.hostname,L=+L.port;var F=new Vi(null);A&&Or(F,A),y&&(F.g=y),L&&bs(F,L),_&&(F.l=_),A=F}return _=c.D,y=c.ya,_&&y&&Be(A,_,y),Be(A,"VER",c.la),Ms(c,A),A}function Gu(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Fe(new Mr({eb:_})):new Fe(c.pa),y.Ha(c.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ku(){}i=Ku.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Na(){}Na.prototype.g=function(c,y){return new tn(c,y)};function tn(c,y){Tt.call(this),this.g=new Ia(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!ne(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ne(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new hi(this)}P(tn,Tt),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Zo(this.g)},tn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=zo(c),c=_);y.i.push(new mf(y.Ya++,c)),y.G==3&&Da(y)},tn.prototype.N=function(){this.g.l=null,delete this.j,Zo(this.g),delete this.g,tn.aa.N.call(this)};function $u(c){vr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}P($u,vr);function Qu(){Gn.call(this),this.status=1}P(Qu,Gn);function hi(c){this.g=c}P(hi,Ku),hi.prototype.ua=function(){Dt(this.g,"a")},hi.prototype.ta=function(c){Dt(this.g,new $u(c))},hi.prototype.sa=function(c){Dt(this.g,new Qu)},hi.prototype.ra=function(){Dt(this.g,"b")},Na.prototype.createWebChannel=Na.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,G0=function(){return new Na},F0=function(){return ya()},q0=Rn,Fm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},At.NO_ERROR=0,At.TIMEOUT=8,At.HTTP_ERROR=6,sh=At,Mi.COMPLETE="complete",H0=Mi,Cu.EventType=ii,ii.OPEN="a",ii.CLOSE="b",ii.ERROR="c",ii.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,$l=Cu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,j0=Fe}).apply(typeof Qc<"u"?Qc:typeof self<"u"?self:typeof window<"u"?window:{});const mE="@firebase/firestore",pE="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Uh("@firebase/firestore");function ro(){return aa.logLevel}function oe(i,...e){if(aa.logLevel<=Me.DEBUG){const n=e.map(Dp);aa.debug(`Firestore (${Io}): ${i}`,...n)}}function hr(i,...e){if(aa.logLevel<=Me.ERROR){const n=e.map(Dp);aa.error(`Firestore (${Io}): ${i}`,...n)}}function yo(i,...e){if(aa.logLevel<=Me.WARN){const n=e.map(Dp);aa.warn(`Firestore (${Io}): ${i}`,...n)}}function Dp(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(i="Unexpected state"){const e=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+i;throw hr(e),new Error(e)}function Ge(i,e){i||Ee()}function Se(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Yt.UNAUTHENTICATED))}shutdown(){}}class hO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fO{constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ge(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new os;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new os,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new os)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string"),new K0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new Yt(e)}}class dO{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mO{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new dO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pO{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,hn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ge(this.o===void 0);const s=u=>{u.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.R;return this.R=u.token,oe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new gE(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ge(typeof n.token=="string"),this.R=n.token,new gE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=gO(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function De(i,e){return i<e?-1:i>e?1:0}function Gm(i,e){let n=0;for(;n<i.length&&n<e.length;){const s=i.codePointAt(n),o=e.codePointAt(n);if(s!==o){if(s<128&&o<128)return De(s,o);{const u=$0(),f=yO(u.encode(yE(i,n)),u.encode(yE(e,n)));return f!==0?f:De(s,o)}}n+=s>65535?2:1}return De(i.length,e.length)}function yE(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function yO(i,e){for(let n=0;n<i.length&&n<e.length;++n)if(i[n]!==e[n])return De(i[n],e[n]);return De(i.length,e.length)}function _o(i,e,n){return i.length===e.length&&i.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=-62135596800,vE=1e6;class dt{static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*vE);return new dt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_E)throw new me(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vE}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-_E;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new dt(0,0))}static max(){return new Ae(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="__name__";class _i{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ee(),s===void 0?s=e.length-n:s>e.length-n&&Ee(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _i.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _i?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=_i.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return De(e.length,n.length)}static compareSegments(e,n){const s=_i.isNumericId(e),o=_i.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?_i.extractNumericId(e).compare(_i.extractNumericId(n)):Gm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return as.fromString(e.substring(4,e.length-2))}}class Ze extends _i{construct(e,n,s){return new Ze(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(ee.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new Ze(n)}static emptyPath(){return new Ze([])}}const _O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends _i{construct(e,n,s){return new qt(e,n,s)}static isValidIdentifier(e){return _O.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===EE}static keyField(){return new qt([EE])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new me(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new me(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new me(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new me(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(n)}static emptyPath(){return new qt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ze.fromString(e))}static fromName(e){return new ge(Ze.fromString(e).popFirst(5))}static empty(){return new ge(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ze(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=-1;function vO(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Ae.fromTimestamp(s===1e9?new dt(n+1,0):new dt(n,s));return new us(o,ge.empty(),e)}function EO(i){return new us(i.readTime,i.key,su)}class us{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new us(Ae.min(),ge.empty(),su)}static max(){return new us(Ae.max(),ge.empty(),su)}}function TO(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(i.documentKey,e.documentKey),n!==0?n:De(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(i){if(i.code!==ee.FAILED_PRECONDITION||i.message!==AO)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new X((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):X.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):X.reject(n)}static resolve(e){return new X((n,s)=>{n(e)})}static reject(e){return new X((n,s)=>{s(e)})}static waitFor(e){return new X((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(e){let n=X.resolve(!1);for(const s of e)n=n.next(o=>o?X.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new X((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const g=p;n(e[g]).next(E=>{f[g]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new X((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function SO(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Do(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Fh.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=-1;function Gh(i){return i==null}function Sh(i){return i===0&&1/i==-1/0}function bO(i){return typeof i=="number"&&Number.isInteger(i)&&!Sh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="";function RO(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=TE(e)),e=IO(i.get(n),e);return TE(e)}function IO(i,e){let n=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":n+="";break;case Y0:n+="";break;default:n+=u}}return n}function TE(i){return i+Y0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function _s(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function X0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yc(this.root,e,this.comparator,!0)}}class Yc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Ht.RED,this.left=o??Ht.EMPTY,this.right=u??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Ht(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Ht.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,n,s,o,u){return this}insert(e,n,s){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wE(this.data.getIterator())}getIteratorFrom(e){return new wE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class wE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new wn([])}unionWith(e){let n=new Ct(qt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new W0("Invalid base64 string: "+u):u}}(e);return new Ft(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const CO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cs(i){if(Ge(!!i),typeof i=="string"){let e=0;const n=CO.exec(i);if(Ge(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ft(i.seconds),nanos:ft(i.nanos)}}function ft(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function hs(i){return typeof i=="string"?Ft.fromBase64String(i):Ft.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="server_timestamp",J0="__type__",eA="__previous_value__",tA="__local_write_time__";function Np(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[J0])===null||n===void 0?void 0:n.stringValue)===Z0}function Kh(i){const e=i.mapValue.fields[eA];return Np(e)?Kh(e):e}function au(i){const e=cs(i.mapValue.fields[tA].timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n,s,o,u,f,m,p,g){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=g}}const bh="(default)";class ou{constructor(e,n){this.projectId=e,this.database=n||bh}static empty(){return new ou("","")}get isDefaultDatabase(){return this.database===bh}isEqual(e){return e instanceof ou&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="__type__",OO="__max__",Xc={mapValue:{}},iA="__vector__",Rh="value";function fs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Np(i)?4:MO(i)?9007199254740991:NO(i)?10:11:Ee()}function bi(i,e){if(i===e)return!0;const n=fs(i);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return au(i).isEqual(au(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=cs(o.timestampValue),m=cs(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return hs(o.bytesValue).isEqual(hs(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return ft(o.geoPointValue.latitude)===ft(u.geoPointValue.latitude)&&ft(o.geoPointValue.longitude)===ft(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return ft(o.integerValue)===ft(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=ft(o.doubleValue),m=ft(u.doubleValue);return f===m?Sh(f)===Sh(m):isNaN(f)&&isNaN(m)}return!1}(i,e);case 9:return _o(i.arrayValue.values||[],e.arrayValue.values||[],bi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(AE(f)!==AE(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!bi(f[p],m[p])))return!1;return!0}(i,e);default:return Ee()}}function lu(i,e){return(i.values||[]).find(n=>bi(n,e))!==void 0}function vo(i,e){if(i===e)return 0;const n=fs(i),s=fs(e);if(n!==s)return De(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(i.booleanValue,e.booleanValue);case 2:return function(u,f){const m=ft(u.integerValue||u.doubleValue),p=ft(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,e);case 3:return SE(i.timestampValue,e.timestampValue);case 4:return SE(au(i),au(e));case 5:return Gm(i.stringValue,e.stringValue);case 6:return function(u,f){const m=hs(u),p=hs(f);return m.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let g=0;g<m.length&&g<p.length;g++){const E=De(m[g],p[g]);if(E!==0)return E}return De(m.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,f){const m=De(ft(u.latitude),ft(f.latitude));return m!==0?m:De(ft(u.longitude),ft(f.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return bE(i.arrayValue,e.arrayValue);case 10:return function(u,f){var m,p,g,E;const w=u.fields||{},b=f.fields||{},O=(m=w[Rh])===null||m===void 0?void 0:m.arrayValue,P=(p=b[Rh])===null||p===void 0?void 0:p.arrayValue,G=De(((g=O==null?void 0:O.values)===null||g===void 0?void 0:g.length)||0,((E=P==null?void 0:P.values)===null||E===void 0?void 0:E.length)||0);return G!==0?G:bE(O,P)}(i.mapValue,e.mapValue);case 11:return function(u,f){if(u===Xc.mapValue&&f===Xc.mapValue)return 0;if(u===Xc.mapValue)return 1;if(f===Xc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),g=f.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const b=Gm(p[w],E[w]);if(b!==0)return b;const O=vo(m[p[w]],g[E[w]]);if(O!==0)return O}return De(p.length,E.length)}(i.mapValue,e.mapValue);default:throw Ee()}}function SE(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return De(i,e);const n=cs(i),s=cs(e),o=De(n.seconds,s.seconds);return o!==0?o:De(n.nanos,s.nanos)}function bE(i,e){const n=i.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=vo(n[o],s[o]);if(u)return u}return De(n.length,s.length)}function Eo(i){return Km(i)}function Km(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=cs(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return hs(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return ge.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Km(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Km(n.fields[f])}`;return o+"}"}(i.mapValue):Ee()}function ah(i){switch(fs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kh(i);return e?16+ah(e):16;case 5:return 2*i.stringValue.length;case 6:return hs(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+ah(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return _s(s.fields,(u,f)=>{o+=u.length+ah(f)}),o}(i.mapValue);default:throw Ee()}}function $m(i){return!!i&&"integerValue"in i}function Mp(i){return!!i&&"arrayValue"in i}function RE(i){return!!i&&"nullValue"in i}function IE(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function oh(i){return!!i&&"mapValue"in i}function NO(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[nA])===null||n===void 0?void 0:n.stringValue)===iA}function Jl(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return _s(i.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Jl(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jl(i.arrayValue.values[n]);return e}return Object.assign({},i)}function MO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===OO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!oh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jl(n)}setAll(e){let n=qt.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Jl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());oh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];oh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){_s(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new fn(Jl(this.value))}}function rA(i){const e=[];return _s(i.fields,(n,s)=>{const o=new qt([n]);if(oh(s)){const u=rA(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Xt(e,0,Ae.min(),Ae.min(),Ae.min(),fn.empty(),0)}static newFoundDocument(e,n,s,o){return new Xt(e,1,n,Ae.min(),s,o,0)}static newNoDocument(e,n){return new Xt(e,2,n,Ae.min(),Ae.min(),fn.empty(),0)}static newUnknownDocument(e,n){return new Xt(e,3,n,Ae.min(),Ae.min(),fn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n){this.position=e,this.inclusive=n}}function CE(i,e,n){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],f=i.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(f.referenceValue),n.key):s=vo(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function DE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!bi(i.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n="asc"){this.field=e,this.dir=n}}function kO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{}class It extends sA{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new PO(e,n,s):n==="array-contains"?new LO(e,s):n==="in"?new zO(e,s):n==="not-in"?new BO(e,s):n==="array-contains-any"?new jO(e,s):new It(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new xO(e,s):new UO(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vo(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.matchesComparison(vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ri extends sA{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ri(e,n)}matches(e){return aA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function aA(i){return i.op==="and"}function oA(i){return VO(i)&&aA(i)}function VO(i){for(const e of i.filters)if(e instanceof Ri)return!1;return!0}function Qm(i){if(i instanceof It)return i.field.canonicalString()+i.op.toString()+Eo(i.value);if(oA(i))return i.filters.map(e=>Qm(e)).join(",");{const e=i.filters.map(n=>Qm(n)).join(",");return`${i.op}(${e})`}}function lA(i,e){return i instanceof It?function(s,o){return o instanceof It&&s.op===o.op&&s.field.isEqual(o.field)&&bi(s.value,o.value)}(i,e):i instanceof Ri?function(s,o){return o instanceof Ri&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&lA(f,o.filters[m]),!0):!1}(i,e):void Ee()}function uA(i){return i instanceof It?function(n){return`${n.field.canonicalString()} ${n.op} ${Eo(n.value)}`}(i):i instanceof Ri?function(n){return n.op.toString()+" {"+n.getFilters().map(uA).join(" ,")+"}"}(i):"Filter"}class PO extends It{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class xO extends It{constructor(e,n){super(e,"in",n),this.keys=cA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UO extends It{constructor(e,n){super(e,"not-in",n),this.keys=cA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cA(i,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ge.fromName(s.referenceValue))}class LO extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mp(n)&&lu(n.arrayValue,this.value)}}class zO extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lu(this.value.arrayValue,n)}}class BO extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!lu(this.value.arrayValue,n)}}class jO extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>lu(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.le=null}}function OE(i,e=null,n=[],s=[],o=null,u=null,f=null){return new HO(i,e,n,s,o,u,f)}function kp(i){const e=Se(i);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Qm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Gh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Eo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Eo(s)).join(",")),e.le=n}return e.le}function Vp(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!kO(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!lA(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!DE(i.startAt,e.startAt)&&DE(i.endAt,e.endAt)}function Ym(i){return ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function qO(i,e,n,s,o,u,f,m){return new $h(i,e,n,s,o,u,f,m)}function Qh(i){return new $h(i)}function NE(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function FO(i){return i.collectionGroup!==null}function eu(i){const e=Se(i);if(e.he===null){e.he=[];const n=new Set;for(const u of e.explicitOrderBy)e.he.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ct(qt.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.he.push(new Ch(u,s))}),n.has(qt.keyField().canonicalString())||e.he.push(new Ch(qt.keyField(),s))}return e.he}function Ei(i){const e=Se(i);return e.Pe||(e.Pe=GO(e,eu(i))),e.Pe}function GO(i,e){if(i.limitType==="F")return OE(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ch(o.field,u)});const n=i.endAt?new Ih(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Ih(i.startAt.position,i.startAt.inclusive):null;return OE(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function Xm(i,e,n){return new $h(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function Yh(i,e){return Vp(Ei(i),Ei(e))&&i.limitType===e.limitType}function hA(i){return`${kp(Ei(i))}|lt:${i.limitType}`}function so(i){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>uA(o)).join(", ")}]`),Gh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Eo(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Eo(o)).join(",")),`Target(${s})`}(Ei(i))}; limitType=${i.limitType})`}function Xh(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of eu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(f,m,p){const g=CE(f,m,p);return f.inclusive?g<=0:g<0}(s.startAt,eu(s),o)||s.endAt&&!function(f,m,p){const g=CE(f,m,p);return f.inclusive?g>=0:g>0}(s.endAt,eu(s),o))}(i,e)}function KO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function fA(i){return(e,n)=>{let s=!1;for(const o of eu(i)){const u=$O(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function $O(i,e,n){const s=i.field.isKeyField()?ge.comparator(e.key,n.key):function(u,f,m){const p=f.data.field(u),g=m.data.field(u);return p!==null&&g!==null?vo(p,g):Ee()}(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return X0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=new it(ge.comparator);function fr(){return QO}const dA=new it(ge.comparator);function Ql(...i){let e=dA;for(const n of i)e=e.insert(n.key,n);return e}function mA(i){let e=dA;return i.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ta(){return tu()}function pA(){return tu()}function tu(){return new ha(i=>i.toString(),(i,e)=>i.isEqual(e))}const YO=new it(ge.comparator),XO=new Ct(ge.comparator);function ke(...i){let e=XO;for(const n of i)e=e.add(n);return e}const WO=new Ct(De);function ZO(){return WO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sh(e)?"-0":e}}function gA(i){return{integerValue:""+i}}function JO(i,e){return bO(e)?gA(e):Pp(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this._=void 0}}function eN(i,e,n){return i instanceof uu?function(o,u){const f={fields:{[J0]:{stringValue:Z0},[tA]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Np(u)&&(u=Kh(u)),u&&(f.fields[eA]=u),{mapValue:f}}(n,e):i instanceof To?_A(i,e):i instanceof cu?vA(i,e):function(o,u){const f=yA(o,u),m=ME(f)+ME(o.Ie);return $m(f)&&$m(o.Ie)?gA(m):Pp(o.serializer,m)}(i,e)}function tN(i,e,n){return i instanceof To?_A(i,e):i instanceof cu?vA(i,e):n}function yA(i,e){return i instanceof Dh?function(s){return $m(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class uu extends Wh{}class To extends Wh{constructor(e){super(),this.elements=e}}function _A(i,e){const n=EA(e);for(const s of i.elements)n.some(o=>bi(o,s))||n.push(s);return{arrayValue:{values:n}}}class cu extends Wh{constructor(e){super(),this.elements=e}}function vA(i,e){let n=EA(e);for(const s of i.elements)n=n.filter(o=>!bi(o,s));return{arrayValue:{values:n}}}class Dh extends Wh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function ME(i){return ft(i.integerValue||i.doubleValue)}function EA(i){return Mp(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n){this.field=e,this.transform=n}}function nN(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof To&&o instanceof To||s instanceof cu&&o instanceof cu?_o(s.elements,o.elements,bi):s instanceof Dh&&o instanceof Dh?bi(s.Ie,o.Ie):s instanceof uu&&o instanceof uu}(i.transform,e.transform)}class iN{constructor(e,n){this.version=e,this.transformResults=n}}class Ti{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ti}static exists(e){return new Ti(void 0,e)}static updateTime(e){return new Ti(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Zh{}function AA(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new SA(i.key,Ti.none()):new yu(i.key,i.data,Ti.none());{const n=i.data,s=fn.empty();let o=new Ct(qt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new vs(i.key,s,new wn(o.toArray()),Ti.none())}}function rN(i,e,n){i instanceof yu?function(o,u,f){const m=o.value.clone(),p=VE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(i,e,n):i instanceof vs?function(o,u,f){if(!lh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=VE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(wA(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(i,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function nu(i,e,n,s){return i instanceof yu?function(u,f,m,p){if(!lh(u.precondition,f))return m;const g=u.value.clone(),E=PE(u.fieldTransforms,p,f);return g.setAll(E),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null}(i,e,n,s):i instanceof vs?function(u,f,m,p){if(!lh(u.precondition,f))return m;const g=PE(u.fieldTransforms,p,f),E=f.data;return E.setAll(wA(u)),E.setAll(g),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(i,e,n,s):function(u,f,m){return lh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(i,e,n)}function sN(i,e){let n=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=yA(s.transform,o||null);u!=null&&(n===null&&(n=fn.empty()),n.set(s.field,u))}return n||null}function kE(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&_o(s,o,(u,f)=>nN(u,f))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class yu extends Zh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class vs extends Zh{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function wA(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}}),e}function VE(i,e,n){const s=new Map;Ge(i.length===n.length);for(let o=0;o<n.length;o++){const u=i[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,tN(f,m,n[o]))}return s}function PE(i,e,n){const s=new Map;for(const o of i){const u=o.transform,f=n.data.field(o.field);s.set(o.field,eN(u,f,e))}return s}class SA extends Zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aN extends Zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&rN(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=nu(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=nu(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=pA();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=AA(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Ae.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,(n,s)=>kE(n,s))&&_o(this.baseMutations,e.baseMutations,(n,s)=>kE(n,s))}}class xp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Ge(e.mutations.length===s.length);let o=function(){return YO}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new xp(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt,Le;function cN(i){switch(i){case ee.OK:return Ee();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return Ee()}}function bA(i){if(i===void 0)return hr("GRPC error has no .code"),ee.UNKNOWN;switch(i){case vt.OK:return ee.OK;case vt.CANCELLED:return ee.CANCELLED;case vt.UNKNOWN:return ee.UNKNOWN;case vt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case vt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case vt.INTERNAL:return ee.INTERNAL;case vt.UNAVAILABLE:return ee.UNAVAILABLE;case vt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case vt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case vt.NOT_FOUND:return ee.NOT_FOUND;case vt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case vt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case vt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case vt.ABORTED:return ee.ABORTED;case vt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case vt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case vt.DATA_LOSS:return ee.DATA_LOSS;default:return Ee()}}(Le=vt||(vt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=new as([4294967295,4294967295],0);function xE(i){const e=$0().encode(i),n=new B0;return n.update(e),new Uint8Array(n.digest())}function UE(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new as([n,s],0),new as([o,u],0)]}class Up{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Yl(`Invalid padding: ${n}`);if(s<0)throw new Yl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Yl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Yl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=as.fromNumber(this.Ee)}Ae(e,n,s){let o=e.add(n.multiply(as.fromNumber(s)));return o.compare(hN)===1&&(o=new as([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=xE(e),[s,o]=UE(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);if(!this.Re(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Up(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.Ee===0)return;const n=xE(e),[s,o]=UE(n);for(let u=0;u<this.hashCount;u++){const f=this.Ae(s,o,u);this.Ve(f)}}Ve(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,_u.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Jh(Ae.min(),o,new it(De),fr(),ke())}}class _u{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new _u(s,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,s,o){this.me=e,this.removedTargetIds=n,this.key=s,this.fe=o}}class RA{constructor(e,n){this.targetId=e,this.ge=n}}class IA{constructor(e,n,s=Ft.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class LE{constructor(){this.pe=0,this.ye=zE(),this.we=Ft.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ke(),n=ke(),s=ke();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ee()}}),new _u(this.we,this.Se,e,n,s)}Me(){this.be=!1,this.ye=zE()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ge(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class fN{constructor(e){this.ke=e,this.qe=new Map,this.Qe=fr(),this.$e=Wc(),this.Ue=Wc(),this.Ke=new it(De)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(e.resumeToken));break;default:Ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((s,o)=>{this.Je(o)&&n(o)})}Ze(e){const n=e.targetId,s=e.ge.count,o=this.Xe(n);if(o){const u=o.target;if(Ym(u))if(s===0){const f=new ge(u.path);this.ze(n,f,Xt.newNoDocument(f,Ae.min()))}else Ge(s===1);else{const f=this.et(n);if(f!==s){const m=this.tt(e),p=m?this.nt(m,e,f):1;if(p!==0){this.Ye(n);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,g)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=hs(s).toUint8Array()}catch(p){if(p instanceof W0)return yo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Up(f,o,u)}catch(p){return yo(p instanceof Yl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(e,n,s){return n.ge.count===s-this.st(e,n.targetId)?0:2}st(e,n){const s=this.ke.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ke.it(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(e){const n=new Map;this.qe.forEach((u,f)=>{const m=this.Xe(f);if(m){if(u.current&&Ym(m.target)){const p=new ge(m.target.path);this._t(p).has(f)||this.ut(f,p)||this.ze(f,p,Xt.newNoDocument(p,e))}u.ve&&(n.set(f,u.Fe()),u.Me())}});let s=ke();this.Ue.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const g=this.Xe(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,f)=>f.setReadTime(e));const o=new Jh(e,n,this.Ke,this.Qe,s);return this.Qe=fr(),this.$e=Wc(),this.Ue=Wc(),this.Ke=new it(De),o}Ge(e,n){if(!this.Je(e))return;const s=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,n)?o.xe(n,1):o.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new LE,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Ct(De),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ct(De),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new LE),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Wc(){return new it(ge.comparator)}function zE(){return new it(ge.comparator)}const dN={asc:"ASCENDING",desc:"DESCENDING"},mN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pN={and:"AND",or:"OR"};class gN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wm(i,e){return i.useProto3Json||Gh(e)?e:{value:e}}function Oh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CA(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function yN(i,e){return Oh(i,e.toTimestamp())}function Ai(i){return Ge(!!i),Ae.fromTimestamp(function(n){const s=cs(n);return new dt(s.seconds,s.nanos)}(i))}function Lp(i,e){return Zm(i,e).canonicalString()}function Zm(i,e){const n=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?n:n.child(e)}function DA(i){const e=Ze.fromString(i);return Ge(VA(e)),e}function Jm(i,e){return Lp(i.databaseId,e.path)}function Im(i,e){const n=DA(e);if(n.get(1)!==i.databaseId.projectId)throw new me(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new me(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new ge(NA(n))}function OA(i,e){return Lp(i.databaseId,e)}function _N(i){const e=DA(i);return e.length===4?Ze.emptyPath():NA(e)}function ep(i){return new Ze(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function NA(i){return Ge(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function BE(i,e,n){return{name:Jm(i,e),fields:n.value.mapValue.fields}}function vN(i,e){let n;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Ge(E===void 0||typeof E=="string"),Ft.fromBase64String(E||"")):(Ge(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ft.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(g){const E=g.code===void 0?ee.UNKNOWN:bA(g.code);return new me(E,g.message||"")}(f);n=new IA(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Im(i,s.document.name),u=Ai(s.document.updateTime),f=s.document.createTime?Ai(s.document.createTime):Ae.min(),m=new fn({mapValue:{fields:s.document.fields}}),p=Xt.newFoundDocument(o,u,f,m),g=s.targetIds||[],E=s.removedTargetIds||[];n=new uh(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Im(i,s.document),u=s.readTime?Ai(s.readTime):Ae.min(),f=Xt.newNoDocument(o,u),m=s.removedTargetIds||[];n=new uh([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Im(i,s.document),u=s.removedTargetIds||[];n=new uh([],u,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new uN(o,u),m=s.targetId;n=new RA(m,f)}}return n}function EN(i,e){let n;if(e instanceof yu)n={update:BE(i,e.key,e.value)};else if(e instanceof SA)n={delete:Jm(i,e.key)};else if(e instanceof vs)n={update:BE(i,e.key,e.data),updateMask:DN(e.fieldMask)};else{if(!(e instanceof aN))return Ee();n={verify:Jm(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof uu)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof To)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof cu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Dh)return{fieldPath:f.field.canonicalString(),increment:m.Ie};throw Ee()}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:yN(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ee()}(i,e.precondition)),n}function TN(i,e){return i&&i.length>0?(Ge(e!==void 0),i.map(n=>function(o,u){let f=o.updateTime?Ai(o.updateTime):Ai(u);return f.isEqual(Ae.min())&&(f=Ai(u)),new iN(f,o.transformResults||[])}(n,e))):[]}function AN(i,e){return{documents:[OA(i,e.path)]}}function wN(i,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=OA(i,o);const u=function(g){if(g.length!==0)return kA(Ri.create(g,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(g){if(g.length!==0)return g.map(E=>function(b){return{field:ao(b.field),direction:RN(b.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Wm(i,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:n,parent:o}}function SN(i){let e=_N(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ge(s===1);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(w){const b=MA(w);return b instanceof Ri&&oA(b)?b.getFilters():[b]}(n.where));let f=[];n.orderBy&&(f=function(w){return w.map(b=>function(P){return new Ch(oo(P.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(b))}(n.orderBy));let m=null;n.limit&&(m=function(w){let b;return b=typeof w=="object"?w.value:w,Gh(b)?null:b}(n.limit));let p=null;n.startAt&&(p=function(w){const b=!!w.before,O=w.values||[];return new Ih(O,b)}(n.startAt));let g=null;return n.endAt&&(g=function(w){const b=!w.before,O=w.values||[];return new Ih(O,b)}(n.endAt)),qO(e,o,f,u,m,"F",p,g)}function bN(i,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function MA(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=oo(n.unaryFilter.field);return It.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(n.unaryFilter.field);return It.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=oo(n.unaryFilter.field);return It.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=oo(n.unaryFilter.field);return It.create(f,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(i):i.fieldFilter!==void 0?function(n){return It.create(oo(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return Ri.create(n.compositeFilter.filters.map(s=>MA(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(n.compositeFilter.op))}(i):Ee()}function RN(i){return dN[i]}function IN(i){return mN[i]}function CN(i){return pN[i]}function ao(i){return{fieldPath:i.canonicalString()}}function oo(i){return qt.fromServerFormat(i.fieldPath)}function kA(i){return i instanceof It?function(n){if(n.op==="=="){if(IE(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NAN"}};if(RE(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(IE(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NOT_NAN"}};if(RE(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(n.field),op:IN(n.op),value:n.value}}}(i):i instanceof Ri?function(n){const s=n.getFilters().map(o=>kA(o));return s.length===1?s[0]:{compositeFilter:{op:CN(n.op),filters:s}}}(i):Ee()}function DN(i){const e=[];return i.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VA(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,s,o,u=Ae.min(),f=Ae.min(),m=Ft.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new is(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.Tt=e}}function NN(i){const e=SN({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Xm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.Tn=new kN}addToCollectionParentIndex(e,n){return this.Tn.add(n),X.resolve()}getCollectionParents(e,n){return X.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return X.resolve()}deleteFieldIndex(e,n){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,n){return X.resolve()}getDocumentsMatchingTarget(e,n){return X.resolve(null)}getIndexType(e,n){return X.resolve(0)}getFieldIndexes(e,n){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,n){return X.resolve(us.min())}getMinOffsetFromCollectionGroup(e,n){return X.resolve(us.min())}updateCollectionGroup(e,n,s){return X.resolve()}updateIndexEntries(e,n){return X.resolve()}}class kN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Ct(Ze.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ct(Ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},PA=41943040;class un{static withCacheSize(e){return new un(e,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.DEFAULT_COLLECTION_PERCENTILE=10,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,un.DEFAULT=new un(PA,un.DEFAULT_COLLECTION_PERCENTILE,un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),un.DISABLED=new un(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Ao(0)}static Kn(){return new Ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="LruGarbageCollector",VN=1048576;function qE([i,e],[n,s]){const o=De(i,n);return o===0?De(e,s):o}class PN{constructor(e){this.Hn=e,this.buffer=new Ct(qE),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();qE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xN{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){oe(HE,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Do(n)?oe(HE,"Ignoring IndexedDB error during garbage collection: ",n):await Co(n)}await this.er(3e5)})}}class UN{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return X.resolve(Fh.ae);const s=new PN(n);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(jE)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jE):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,o,u,f,m,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,m=Date.now(),this.removeTargets(e,s,n))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(g=Date.now(),ro()<=Me.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function LN(i,e){return new UN(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.changes=new ha(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?X.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&nu(s.mutation,o,wn.empty(),dt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ke()){const o=ta();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Ql();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=ta();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ke()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=fr();const f=tu(),m=function(){return tu()}();return n.forEach((p,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof vs)?u=u.insert(g.key,g):E!==void 0?(f.set(g.key,E.mutation.getFieldMask()),nu(E.mutation,g,E.mutation.getFieldMask(),dt.now())):f.set(g.key,wn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((g,E)=>f.set(g,E)),n.forEach((g,E)=>{var w;return m.set(g,new BN(E,(w=f.get(g))!==null&&w!==void 0?w:null))}),m))}recalculateAndSaveOverlays(e,n){const s=tu();let o=new it((f,m)=>f-m),u=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const g=n.get(p);if(g===null)return;let E=s.get(p)||wn.empty();E=m.applyToLocalView(g,E),s.set(p,E);const w=(o.get(m.batchId)||ke()).add(p);o=o.insert(m.batchId,w)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),g=p.key,E=p.value,w=pA();E.forEach(b=>{if(!u.has(b)){const O=AA(n.get(b),s.get(b));O!==null&&w.set(b,O),u=u.add(b)}}),f.push(this.documentOverlayCache.saveOverlays(e,g,w))}return X.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return ge.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):FO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):X.resolve(ta());let m=su,p=u;return f.next(g=>X.forEach(g,(E,w)=>(m<w.largestBatchId&&(m=w.largestBatchId),u.get(E)?X.resolve():this.remoteDocumentCache.getEntry(e,E).next(b=>{p=p.insert(E,b)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,p,g,ke())).next(E=>({batchId:m,changes:mA(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(s=>{let o=Ql();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Ql();return this.indexManager.getCollectionParents(e,u).next(m=>X.forEach(m,p=>{const g=function(w,b){return new $h(b,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(E=>{E.forEach((w,b)=>{f=f.insert(w,b)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((p,g)=>{const E=g.getKey();f.get(E)===null&&(f=f.insert(E,Xt.newInvalidDocument(E)))});let m=Ql();return f.forEach((p,g)=>{const E=u.get(p);E!==void 0&&nu(E.mutation,g,wn.empty(),dt.now()),Xh(n,g)&&(m=m.insert(p,g))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return X.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Ai(o.createTime)}}(n)),X.resolve()}getNamedQuery(e,n){return X.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:NN(o.bundledQuery),readTime:Ai(o.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.overlays=new it(ge.comparator),this.Rr=new Map}getOverlay(e,n){return X.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ta();return X.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.Et(e,n,u)}),X.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),X.resolve()}getOverlaysForCollection(e,n,s){const o=ta(),u=n.length+1,f=new ge(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,g=p.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return X.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new it((g,E)=>g-E);const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=ta(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const m=ta(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,E)=>m.set(g,E)),!(m.size()>=o)););return X.resolve(m)}Et(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new lN(n,s));let u=this.Rr.get(n);u===void 0&&(u=ke(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.Vr=new Ct(xt.mr),this.gr=new Ct(xt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new xt(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new xt(e,n))}Sr(e,n){e.forEach(s=>this.removeReference(s,n))}br(e){const n=new ge(new Ze([])),s=new xt(n,e),o=new xt(n,e+1),u=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),u.push(f.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ge(new Ze([])),s=new xt(n,e),o=new xt(n,e+1);let u=ke();return this.gr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new xt(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ge.comparator(e.key,n.key)||De(e.Cr,n.Cr)}static pr(e,n){return De(e.Cr,n.Cr)||ge.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ct(xt.mr)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new oN(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Mr=this.Mr.add(new xt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return X.resolve(f)}lookupMutationBatch(e,n){return X.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.Nr(s),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Op:this.Fr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xt(n,0),o=new xt(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],f=>{const m=this.Or(f.Cr);u.push(m)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ct(De);return n.forEach(o=>{const u=new xt(o,0),f=new xt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,f],m=>{s=s.add(m.Cr)})}),X.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const f=new xt(new ge(u),0);let m=new Ct(De);return this.Mr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(m=m.add(p.Cr)),!0)},f),X.resolve(this.Br(m))}Br(e){const n=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ge(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return X.forEach(n.mutations,o=>{const u=new xt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new xt(n,0),o=this.Mr.firstAfterOrEqual(s);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.kr=e,this.docs=function(){return new it(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return X.resolve(s?s.document.mutableCopy():Xt.newInvalidDocument(n))}getEntries(e,n){let s=fr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Xt.newInvalidDocument(o))}),X.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=fr();const f=n.path,m=new ge(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||TO(EO(E),s)<=0||(o.has(E.key)||Xh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ee()}qr(e,n){return X.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new $N(this)}getSize(e){return X.resolve(this.size)}}class $N extends zN{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),X.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.persistence=e,this.Qr=new ha(n=>kp(n),Vp),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.$r=0,this.Ur=new zp,this.targetCount=0,this.Kr=Ao.Un()}forEachTarget(e,n){return this.Qr.forEach((s,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),X.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new Ao(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,X.resolve()}updateTargetData(e,n){return this.zn(n),X.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.Qr.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return X.resolve(s)}addMatchingKeys(e,n,s){return this.Ur.yr(n,s),X.resolve()}removeMatchingKeys(e,n,s){this.Ur.Sr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),X.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),X.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ur.vr(n);return X.resolve(s)}containsKey(e,n){return X.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new Fh(0),this.zr=!1,this.zr=!0,this.jr=new FN,this.referenceDelegate=e(this),this.Hr=new QN(this),this.indexManager=new MN,this.remoteDocumentCache=function(o){return new KN(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new ON(n),this.Yr=new HN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new GN(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){oe("MemoryPersistence","Starting transaction:",e);const o=new YN(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,n){return X.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class YN extends wO{constructor(e){super(),this.currentSequenceNumber=e}}class Bp{constructor(e){this.persistence=e,this.ti=new zp,this.ni=null}static ri(e){return new Bp(e)}get ii(){if(this.ni)return this.ni;throw Ee()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),X.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),X.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),X.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.ii,s=>{const o=ge.fromPath(s);return this.si(e,o).next(u=>{u||n.removeEntry(o,Ae.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return X.or([()=>X.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Nh{constructor(e,n){this.persistence=e,this.oi=new ha(s=>RO(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=LN(this,n)}static ri(e,n){return new Nh(e,n)}Zr(){}Xr(e){return X.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return X.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?X.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Ae.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),X.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),X.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ah(e.data.value)),n}ar(e,n,s){return X.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.oi.get(n);return X.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=o}static Yi(e,n){let s=ke(),o=ke();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new jp(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Nb()?8:SO(Wt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.rs(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ss(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new XN;return this._s(e,n,f).next(m=>{if(u.result=m,this.Xi)return this.us(e,n,f,m.size)})}).next(()=>u.result)}us(e,n,s,o){return s.documentReadCount<this.es?(ro()<=Me.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",so(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),X.resolve()):(ro()<=Me.DEBUG&&oe("QueryEngine","Query:",so(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(ro()<=Me.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",so(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ei(n))):X.resolve())}rs(e,n){if(NE(n))return X.resolve(null);let s=Ei(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Xm(n,null,"F"),s=Ei(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=ke(...u);return this.ns.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.cs(n,m);return this.ls(n,g,f,p.readTime)?this.rs(e,Xm(n,null,"F")):this.hs(e,g,n,p)}))})))}ss(e,n,s,o){return NE(n)||o.isEqual(Ae.min())?X.resolve(null):this.ns.getDocuments(e,s).next(u=>{const f=this.cs(n,u);return this.ls(n,f,s,o)?X.resolve(null):(ro()<=Me.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),so(n)),this.hs(e,f,n,vO(o,su)).next(m=>m))})}cs(e,n){let s=new Ct(fA(e));return n.forEach((o,u)=>{Xh(e,u)&&(s=s.add(u))}),s}ls(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,n,s){return ro()<=Me.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",so(n)),this.ns.getDocumentsMatchingQuery(e,n,us.min(),s)}hs(e,n,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="LocalStore",ZN=3e8;class JN{constructor(e,n,s,o){this.persistence=e,this.Ps=n,this.serializer=o,this.Ts=new it(De),this.Is=new ha(u=>kp(u),Vp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jN(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function e2(i,e,n,s){return new JN(i,e,n,s)}async function UA(i,e){const n=Se(i);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=ke();for(const g of o){f.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of u){m.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(g=>({Rs:g,removedBatchIds:f,addedBatchIds:m}))})})}function t2(i,e){const n=Se(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,g,E){const w=g.batch,b=w.keys();let O=X.resolve();return b.forEach(P=>{O=O.next(()=>E.getEntry(p,P)).next(G=>{const B=g.docVersions.get(P);Ge(B!==null),G.version.compareTo(B)<0&&(w.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),E.addEntry(G)))})}),O.next(()=>m.mutationQueue.removeMutationBatch(p,w))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=ke();for(let g=0;g<m.mutationResults.length;++g)m.mutationResults[g].transformResults.length>0&&(p=p.add(m.batch.mutations[g].key));return p}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function LA(i){const e=Se(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function n2(i,e){const n=Se(i),s=e.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];e.targetChanges.forEach((E,w)=>{const b=o.get(w);if(!b)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,w).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,w)));let O=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?O=O.withResumeToken(Ft.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):E.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(E.resumeToken,s)),o=o.insert(w,O),function(G,B,K){return G.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=ZN?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(b,O,E)&&m.push(n.Hr.updateTargetData(u,O))});let p=fr(),g=ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(i2(u,f,e.documentUpdates).next(E=>{p=E.Vs,g=E.fs})),!s.isEqual(Ae.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(w=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return X.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,g)).next(()=>p)}).then(u=>(n.Ts=o,u))}function i2(i,e,n){let s=ke(),o=ke();return n.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let f=fr();return n.forEach((m,p)=>{const g=u.get(m);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):oe(Hp,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",p.version)}),{Vs:f,fs:o}})}function r2(i,e){const n=Se(i);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Op),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function s2(i,e){const n=Se(i);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Hr.getTargetData(s,e).next(u=>u?(o=u,X.resolve(o)):n.Hr.allocateTargetId(s).next(f=>(o=new is(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(e,s.targetId)),s})}async function tp(i,e,n){const s=Se(i),o=s.Ts.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!Do(f))throw f;oe(Hp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function FE(i,e,n){const s=Se(i);let o=Ae.min(),u=ke();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,g,E){const w=Se(p),b=w.Is.get(E);return b!==void 0?X.resolve(w.Ts.get(b)):w.Hr.getTargetData(g,E)}(s,f,Ei(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(f,e,n?o:Ae.min(),n?u:ke())).next(m=>(a2(s,KO(e),m),{documents:m,gs:u})))}function a2(i,e,n){let s=i.Es.get(e)||Ae.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Es.set(e,s)}class GE{constructor(){this.activeTargetIds=ZO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o2{constructor(){this.ho=new GE,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new GE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="ConnectivityMonitor";class $E{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){oe(KE,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){oe(KE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc=null;function np(){return Zc===null?Zc=function(){return 268435456+Math.round(2147483648*Math.random())}():Zc++,"0x"+Zc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="RestConnection",u2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class c2{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===bh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,n,s,o,u){const f=np(),m=this.bo(e,n.toUriEncodedString());oe(Cm,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(e,m,p,s).then(g=>(oe(Cm,`Received RPC '${e}' ${f}: `,g),g),g=>{throw yo(Cm,`RPC '${e}' ${f} failed with error: `,g,"url: ",m,"request:",s),g})}Co(e,n,s,o,u,f){return this.So(e,n,s,o,u)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,n){const s=u2[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class f2 extends c2{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,o){const u=np();return new Promise((f,m)=>{const p=new j0;p.setWithCredentials(!0),p.listenOnce(H0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case sh.NO_ERROR:const E=p.getResponseJson();oe(Qt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),f(E);break;case sh.TIMEOUT:oe(Qt,`RPC '${e}' ${u} timed out`),m(new me(ee.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const w=p.getStatus();if(oe(Qt,`RPC '${e}' ${u} failed with status:`,w,"response text:",p.getResponseText()),w>0){let b=p.getResponseJson();Array.isArray(b)&&(b=b[0]);const O=b==null?void 0:b.error;if(O&&O.status&&O.message){const P=function(B){const K=B.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(K)>=0?K:ee.UNKNOWN}(O.status);m(new me(P,O.message))}else m(new me(ee.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new me(ee.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{oe(Qt,`RPC '${e}' ${u} completed.`)}});const g=JSON.stringify(o);oe(Qt,`RPC '${e}' ${u} sending request:`,o),p.send(n,"POST",g,s,15)})}Wo(e,n,s){const o=np(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=G0(),m=F0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");oe(Qt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const w=f.createWebChannel(E,p);let b=!1,O=!1;const P=new h2({Fo:B=>{O?oe(Qt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(b||(oe(Qt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),b=!0),oe(Qt,`RPC '${e}' stream ${o} sending:`,B),w.send(B))},Mo:()=>w.close()}),G=(B,K,ne)=>{B.listen(K,J=>{try{ne(J)}catch(le){setTimeout(()=>{throw le},0)}})};return G(w,$l.EventType.OPEN,()=>{O||(oe(Qt,`RPC '${e}' stream ${o} transport opened.`),P.Qo())}),G(w,$l.EventType.CLOSE,()=>{O||(O=!0,oe(Qt,`RPC '${e}' stream ${o} transport closed`),P.Uo())}),G(w,$l.EventType.ERROR,B=>{O||(O=!0,yo(Qt,`RPC '${e}' stream ${o} transport errored:`,B),P.Uo(new me(ee.UNAVAILABLE,"The operation could not be completed")))}),G(w,$l.EventType.MESSAGE,B=>{var K;if(!O){const ne=B.data[0];Ge(!!ne);const J=ne,le=(J==null?void 0:J.error)||((K=J[0])===null||K===void 0?void 0:K.error);if(le){oe(Qt,`RPC '${e}' stream ${o} received error:`,le);const ue=le.status;let Te=function(S){const C=vt[S];if(C!==void 0)return bA(C)}(ue),M=le.message;Te===void 0&&(Te=ee.INTERNAL,M="Unknown error status: "+ue+" with message "+le.message),O=!0,P.Uo(new me(Te,M)),w.close()}else oe(Qt,`RPC '${e}' stream ${o} received:`,ne),P.Ko(ne)}}),G(m,q0.STAT_EVENT,B=>{B.stat===Fm.PROXY?oe(Qt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===Fm.NOPROXY&&oe(Qt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function Dm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(i){return new gN(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-s);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="PersistentStream";class BA{constructor(e,n,s,o,u,f,m,p){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new zA(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===ee.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===n&&this.V_(s,o)},s=>{e(()=>{const o=new me(ee.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return oe(QE,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(oe(QE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class d2 extends BA{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=vN(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ae.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Ae.min():f.readTime?Ai(f.readTime):Ae.min()}(e);return this.listener.p_(n,s)}y_(e){const n={};n.database=ep(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=Ym(p)?{documents:AN(u,p)}:{query:wN(u,p).ht},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=CA(u,f.resumeToken);const g=Wm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}else if(f.snapshotVersion.compareTo(Ae.min())>0){m.readTime=Oh(u,f.snapshotVersion.toTimestamp());const g=Wm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const s=bN(this.serializer,e);s&&(n.labels=s),this.I_(n)}w_(e){const n={};n.database=ep(this.serializer),n.removeTarget=e,this.I_(n)}}class m2 extends BA{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=TN(e.writeResults,e.commitTime),s=Ai(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=ep(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>EN(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{}class g2 extends p2{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new me(ee.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.So(e,Zm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new me(ee.UNKNOWN,u.toString())})}Co(e,n,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Co(e,Zm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new me(ee.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class y2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(hr(n),this.N_=!1):oe("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="RemoteStore";class _2{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(f=>{s.enqueueAndForget(async()=>{fa(this)&&(oe(oa,"Restarting streams for network reachability change."),await async function(p){const g=Se(p);g.W_.add(4),await vu(g),g.j_.set("Unknown"),g.W_.delete(4),await tf(g)}(this))})}),this.j_=new y2(s,o)}}async function tf(i){if(fa(i))for(const e of i.G_)await e(!0)}async function vu(i){for(const e of i.G_)await e(!1)}function jA(i,e){const n=Se(i);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Kp(n)?Gp(n):Oo(n).c_()&&Fp(n,e))}function qp(i,e){const n=Se(i),s=Oo(n);n.K_.delete(e),s.c_()&&HA(n,e),n.K_.size===0&&(s.c_()?s.P_():fa(n)&&n.j_.set("Unknown"))}function Fp(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oo(i).y_(e)}function HA(i,e){i.H_.Ne(e),Oo(i).w_(e)}function Gp(i){i.H_=new fN({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.K_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),Oo(i).start(),i.j_.B_()}function Kp(i){return fa(i)&&!Oo(i).u_()&&i.K_.size>0}function fa(i){return Se(i).W_.size===0}function qA(i){i.H_=void 0}async function v2(i){i.j_.set("Online")}async function E2(i){i.K_.forEach((e,n)=>{Fp(i,e)})}async function T2(i,e){qA(i),Kp(i)?(i.j_.q_(e),Gp(i)):i.j_.set("Unknown")}async function A2(i,e,n){if(i.j_.set("Online"),e instanceof IA&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.K_.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.K_.delete(m),o.H_.removeTarget(m))}(i,e)}catch(s){oe(oa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mh(i,s)}else if(e instanceof uh?i.H_.We(e):e instanceof RA?i.H_.Ze(e):i.H_.je(e),!n.isEqual(Ae.min()))try{const s=await LA(i.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.H_.ot(f);return m.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.K_.get(g);E&&u.K_.set(g,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,g)=>{const E=u.K_.get(p);if(!E)return;u.K_.set(p,E.withResumeToken(Ft.EMPTY_BYTE_STRING,E.snapshotVersion)),HA(u,p);const w=new is(E.target,p,g,E.sequenceNumber);Fp(u,w)}),u.remoteSyncer.applyRemoteEvent(m)}(i,n)}catch(s){oe(oa,"Failed to raise snapshot:",s),await Mh(i,s)}}async function Mh(i,e,n){if(!Do(e))throw e;i.W_.add(1),await vu(i),i.j_.set("Offline"),n||(n=()=>LA(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{oe(oa,"Retrying IndexedDB access"),await n(),i.W_.delete(1),await tf(i)})}function FA(i,e){return e().catch(n=>Mh(i,n,e))}async function nf(i){const e=Se(i),n=ds(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:Op;for(;w2(e);)try{const o=await r2(e.localStore,s);if(o===null){e.U_.length===0&&n.P_();break}s=o.batchId,S2(e,o)}catch(o){await Mh(e,o)}GA(e)&&KA(e)}function w2(i){return fa(i)&&i.U_.length<10}function S2(i,e){i.U_.push(e);const n=ds(i);n.c_()&&n.S_&&n.b_(e.mutations)}function GA(i){return fa(i)&&!ds(i).u_()&&i.U_.length>0}function KA(i){ds(i).start()}async function b2(i){ds(i).C_()}async function R2(i){const e=ds(i);for(const n of i.U_)e.b_(n.mutations)}async function I2(i,e,n){const s=i.U_.shift(),o=xp.from(s,e,n);await FA(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await nf(i)}async function C2(i,e){e&&ds(i).S_&&await async function(s,o){if(function(f){return cN(f)&&f!==ee.ABORTED}(o.code)){const u=s.U_.shift();ds(s).h_(),await FA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await nf(s)}}(i,e),GA(i)&&KA(i)}async function YE(i,e){const n=Se(i);n.asyncQueue.verifyOperationInProgress(),oe(oa,"RemoteStore received new credentials");const s=fa(n);n.W_.add(3),await vu(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await tf(n)}async function D2(i,e){const n=Se(i);e?(n.W_.delete(2),await tf(n)):e||(n.W_.add(2),await vu(n),n.j_.set("Unknown"))}function Oo(i){return i.J_||(i.J_=function(n,s,o){const u=Se(n);return u.M_(),new d2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:v2.bind(null,i),No:E2.bind(null,i),Lo:T2.bind(null,i),p_:A2.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),Kp(i)?Gp(i):i.j_.set("Unknown")):(await i.J_.stop(),qA(i))})),i.J_}function ds(i){return i.Y_||(i.Y_=function(n,s,o){const u=Se(n);return u.M_(),new m2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:b2.bind(null,i),Lo:C2.bind(null,i),D_:R2.bind(null,i),v_:I2.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await nf(i)):(await i.Y_.stop(),i.U_.length>0&&(oe(oa,`Stopping write stream with ${i.U_.length} pending writes`),i.U_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new $p(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qp(i,e){if(hr("AsyncQueue",`${e}: ${i}`),Do(i))return new me(ee.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static emptySet(e){return new mo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ge.comparator(n.key,s.key):(n,s)=>ge.comparator(n.key,s.key),this.keyedMap=Ql(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new mo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.Z_=new it(ge.comparator)}track(e){const n=e.doc.key,s=this.Z_.get(n);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(n):e.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):Ee():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class wo{constructor(e,n,s,o,u,f,m,p,g){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new wo(e,n,mo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class N2{constructor(){this.queries=WE(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const o=Se(n),u=o.queries;o.queries=WE(),u.forEach((f,m)=>{for(const p of m.ta)p.onError(s)})})(this,new me(ee.ABORTED,"Firestore shutting down"))}}function WE(){return new ha(i=>hA(i),Yh)}async function $A(i,e){const n=Se(i);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new O2,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=Qp(f,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.ta.push(e),e.sa(n.onlineState),u.ea&&e.oa(u.ea)&&Yp(n)}async function QA(i,e){const n=Se(i),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ta.indexOf(e);f>=0&&(u.ta.splice(f,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function M2(i,e){const n=Se(i);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ta)m.oa(o)&&(s=!0);f.ea=o}}s&&Yp(n)}function k2(i,e,n){const s=Se(i),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(n);s.queries.delete(e)}function Yp(i){i.ia.forEach(e=>{e.next()})}var ip,ZE;(ZE=ip||(ip={}))._a="default",ZE.Cache="cache";class YA{constructor(e,n,s){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new wo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=wo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==ip.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.key=e}}class WA{constructor(e){this.key=e}}class V2{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ke(),this.mutatedKeys=ke(),this.ya=fA(e),this.wa=new mo(this.ya)}get Sa(){return this.fa}ba(e,n){const s=n?n.Da:new XE,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,w)=>{const b=o.get(E),O=Xh(this.query,w)?w:null,P=!!b&&this.mutatedKeys.has(b.key),G=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let B=!1;b&&O?b.data.isEqual(O.data)?P!==G&&(s.track({type:3,doc:O}),B=!0):this.va(b,O)||(s.track({type:2,doc:O}),B=!0,(p&&this.ya(O,p)>0||g&&this.ya(O,g)<0)&&(m=!0)):!b&&O?(s.track({type:0,doc:O}),B=!0):b&&!O&&(s.track({type:1,doc:b}),B=!0,(p||g)&&(m=!0)),B&&(O?(f=f.add(O),u=G?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:f,Da:s,ls:m,mutatedKeys:u}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const f=e.Da.X_();f.sort((E,w)=>function(O,P){const G=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return G(O)-G(P)}(E.type,w.type)||this.ya(E.doc,w.doc)),this.Ca(s),o=o!=null&&o;const m=n&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,g=p!==this.ga;return this.ga=p,f.length!==0||g?{snapshot:new wo(this.query,e.wa,u,f,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new XE,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ke(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return e.forEach(s=>{this.pa.has(s)||n.push(new WA(s))}),this.pa.forEach(s=>{e.has(s)||n.push(new XA(s))}),n}Oa(e){this.fa=e.gs,this.pa=ke();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return wo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Xp="SyncEngine";class P2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class x2{constructor(e){this.key=e,this.Ba=!1}}class U2{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new ha(m=>hA(m),Yh),this.qa=new Map,this.Qa=new Set,this.$a=new it(ge.comparator),this.Ua=new Map,this.Ka=new zp,this.Wa={},this.Ga=new Map,this.za=Ao.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function L2(i,e,n=!0){const s=iw(i);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await ZA(s,e,n,!0),o}async function z2(i,e){const n=iw(i);await ZA(n,e,!0,!1)}async function ZA(i,e,n,s){const o=await s2(i.localStore,Ei(e)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await B2(i,e,u,f==="current",o.resumeToken)),i.isPrimaryClient&&n&&jA(i.remoteStore,o),m}async function B2(i,e,n,s,o){i.Ha=(w,b,O)=>async function(G,B,K,ne){let J=B.view.ba(K);J.ls&&(J=await FE(G.localStore,B.query,!1).then(({documents:M})=>B.view.ba(M,J)));const le=ne&&ne.targetChanges.get(B.targetId),ue=ne&&ne.targetMismatches.get(B.targetId)!=null,Te=B.view.applyChanges(J,G.isPrimaryClient,le,ue);return eT(G,B.targetId,Te.Ma),Te.snapshot}(i,w,b,O);const u=await FE(i.localStore,e,!0),f=new V2(e,u.gs),m=f.ba(u.documents),p=_u.createSynthesizedTargetChangeForCurrentChange(n,s&&i.onlineState!=="Offline",o),g=f.applyChanges(m,i.isPrimaryClient,p);eT(i,n,g.Ma);const E=new P2(e,n,f);return i.ka.set(e,E),i.qa.has(n)?i.qa.get(n).push(e):i.qa.set(n,[e]),g.snapshot}async function j2(i,e,n){const s=Se(i),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(f=>!Yh(f,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await tp(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&qp(s.remoteStore,o.targetId),rp(s,o.targetId)}).catch(Co)):(rp(s,o.targetId),await tp(s.localStore,o.targetId,!0))}async function H2(i,e){const n=Se(i),s=n.ka.get(e),o=n.qa.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),qp(n.remoteStore,s.targetId))}async function q2(i,e,n){const s=X2(i);try{const o=await function(f,m){const p=Se(f),g=dt.now(),E=m.reduce((O,P)=>O.add(P.key),ke());let w,b;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let P=fr(),G=ke();return p.ds.getEntries(O,E).next(B=>{P=B,P.forEach((K,ne)=>{ne.isValidDocument()||(G=G.add(K))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,P)).next(B=>{w=B;const K=[];for(const ne of m){const J=sN(ne,w.get(ne.key).overlayedDocument);J!=null&&K.push(new vs(ne.key,J,rA(J.value.mapValue),Ti.exists(!0)))}return p.mutationQueue.addMutationBatch(O,g,K,m)}).next(B=>{b=B;const K=B.applyToLocalDocumentSet(w,G);return p.documentOverlayCache.saveOverlays(O,B.batchId,K)})}).then(()=>({batchId:b.batchId,changes:mA(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let g=f.Wa[f.currentUser.toKey()];g||(g=new it(De)),g=g.insert(m,p),f.Wa[f.currentUser.toKey()]=g}(s,o.batchId,n),await Eu(s,o.changes),await nf(s.remoteStore)}catch(o){const u=Qp(o,"Failed to persist write");n.reject(u)}}async function JA(i,e){const n=Se(i);try{const s=await n2(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Ua.get(u);f&&(Ge(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Ge(f.Ba):o.removedDocuments.size>0&&(Ge(f.Ba),f.Ba=!1))}),await Eu(n,s,e)}catch(s){await Co(s)}}function JE(i,e,n){const s=Se(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ka.forEach((u,f)=>{const m=f.view.sa(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=Se(f);p.onlineState=m;let g=!1;p.queries.forEach((E,w)=>{for(const b of w.ta)b.sa(m)&&(g=!0)}),g&&Yp(p)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function F2(i,e,n){const s=Se(i);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Ua.get(e),u=o&&o.key;if(u){let f=new it(ge.comparator);f=f.insert(u,Xt.newNoDocument(u,Ae.min()));const m=ke().add(u),p=new Jh(Ae.min(),new Map,new it(De),f,m);await JA(s,p),s.$a=s.$a.remove(u),s.Ua.delete(e),Wp(s)}else await tp(s.localStore,e,!1).then(()=>rp(s,e,n)).catch(Co)}async function G2(i,e){const n=Se(i),s=e.batch.batchId;try{const o=await t2(n.localStore,e);tw(n,s,null),ew(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Eu(n,o)}catch(o){await Co(o)}}async function K2(i,e,n){const s=Se(i);try{const o=await function(f,m){const p=Se(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return p.mutationQueue.lookupMutationBatch(g,m).next(w=>(Ge(w!==null),E=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>p.localDocuments.getDocuments(g,E))})}(s.localStore,e);tw(s,e,n),ew(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Eu(s,o)}catch(o){await Co(o)}}function ew(i,e){(i.Ga.get(e)||[]).forEach(n=>{n.resolve()}),i.Ga.delete(e)}function tw(i,e,n){const s=Se(i);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function rp(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),n&&i.La.Ja(s,n);i.qa.delete(e),i.isPrimaryClient&&i.Ka.br(e).forEach(s=>{i.Ka.containsKey(s)||nw(i,s)})}function nw(i,e){i.Qa.delete(e.path.canonicalString());const n=i.$a.get(e);n!==null&&(qp(i.remoteStore,n),i.$a=i.$a.remove(e),i.Ua.delete(n),Wp(i))}function eT(i,e,n){for(const s of n)s instanceof XA?(i.Ka.addReference(s.key,e),$2(i,s)):s instanceof WA?(oe(Xp,"Document no longer in limbo: "+s.key),i.Ka.removeReference(s.key,e),i.Ka.containsKey(s.key)||nw(i,s.key)):Ee()}function $2(i,e){const n=e.key,s=n.path.canonicalString();i.$a.get(n)||i.Qa.has(s)||(oe(Xp,"New document in limbo: "+n),i.Qa.add(s),Wp(i))}function Wp(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const n=new ge(Ze.fromString(e)),s=i.za.next();i.Ua.set(s,new x2(n)),i.$a=i.$a.insert(n,s),jA(i.remoteStore,new is(Ei(Qh(n.path)),s,"TargetPurposeLimboResolution",Fh.ae))}}async function Eu(i,e,n){const s=Se(i),o=[],u=[],f=[];s.ka.isEmpty()||(s.ka.forEach((m,p)=>{f.push(s.Ha(p,e,n).then(g=>{var E;if((g||n)&&s.isPrimaryClient){const w=g?!g.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(g){o.push(g);const w=jp.Yi(p.targetId,g);u.push(w)}}))}),await Promise.all(f),s.La.p_(o),await async function(p,g){const E=Se(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>X.forEach(g,b=>X.forEach(b.Hi,O=>E.persistence.referenceDelegate.addReference(w,b.targetId,O)).next(()=>X.forEach(b.Ji,O=>E.persistence.referenceDelegate.removeReference(w,b.targetId,O)))))}catch(w){if(!Do(w))throw w;oe(Hp,"Failed to update sequence numbers: "+w)}for(const w of g){const b=w.targetId;if(!w.fromCache){const O=E.Ts.get(b),P=O.snapshotVersion,G=O.withLastLimboFreeSnapshotVersion(P);E.Ts=E.Ts.insert(b,G)}}}(s.localStore,u))}async function Q2(i,e){const n=Se(i);if(!n.currentUser.isEqual(e)){oe(Xp,"User change. New user:",e.toKey());const s=await UA(n.localStore,e);n.currentUser=e,function(u,f){u.Ga.forEach(m=>{m.forEach(p=>{p.reject(new me(ee.CANCELLED,f))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Eu(n,s.Rs)}}function Y2(i,e){const n=Se(i),s=n.Ua.get(e);if(s&&s.Ba)return ke().add(s.key);{let o=ke();const u=n.qa.get(e);if(!u)return o;for(const f of u){const m=n.ka.get(f);o=o.unionWith(m.view.Sa)}return o}}function iw(i){const e=Se(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=JA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F2.bind(null,e),e.La.p_=M2.bind(null,e.eventManager),e.La.Ja=k2.bind(null,e.eventManager),e}function X2(i){const e=Se(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=G2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=K2.bind(null,e),e}class kh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ef(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return e2(this.persistence,new WN,e.initialUser,this.serializer)}Xa(e){return new xA(Bp.ri,this.serializer)}Za(e){return new o2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kh.provider={build:()=>new kh};class W2 extends kh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ge(this.persistence.referenceDelegate instanceof Nh);const s=this.persistence.referenceDelegate.garbageCollector;return new xN(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?un.withCacheSize(this.cacheSizeBytes):un.DEFAULT;return new xA(s=>Nh.ri(s,n),this.serializer)}}class sp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>JE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q2.bind(null,this.syncEngine),await D2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new N2}()}createDatastore(e){const n=ef(e.databaseInfo.databaseId),s=function(u){return new f2(u)}(e.databaseInfo);return function(u,f,m,p){return new g2(u,f,m,p)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new _2(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>JE(this.syncEngine,n,0),function(){return $E.D()?new $E:new l2}())}createSyncEngine(e,n){return function(o,u,f,m,p,g,E){const w=new U2(o,u,f,m,p,g);return E&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Se(o);oe(oa,"RemoteStore shutting down."),u.W_.add(5),await vu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sp.provider={build:()=>new sp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="FirestoreClient";class Z2{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Yt.UNAUTHENTICATED,this.clientId=Q0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{oe(ms,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(oe(ms,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Qp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Om(i,e){i.asyncQueue.verifyOperationInProgress(),oe(ms,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await UA(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function tT(i,e){i.asyncQueue.verifyOperationInProgress();const n=await J2(i);oe(ms,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(s=>YE(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>YE(e.remoteStore,o)),i._onlineComponents=e}async function J2(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe(ms,"Using user provided OfflineComponentProvider");try{await Om(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;yo("Error using user provided cache. Falling back to memory cache: "+n),await Om(i,new kh)}}else oe(ms,"Using default OfflineComponentProvider"),await Om(i,new W2(void 0));return i._offlineComponents}async function sw(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe(ms,"Using user provided OnlineComponentProvider"),await tT(i,i._uninitializedComponentsProvider._online)):(oe(ms,"Using default OnlineComponentProvider"),await tT(i,new sp))),i._onlineComponents}function eM(i){return sw(i).then(e=>e.syncEngine)}async function ap(i){const e=await sw(i),n=e.eventManager;return n.onListen=L2.bind(null,e.syncEngine),n.onUnlisten=j2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=z2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=H2.bind(null,e.syncEngine),n}function tM(i,e,n={}){const s=new os;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,g){const E=new rw({next:b=>{E.su(),f.enqueueAndForget(()=>QA(u,w));const O=b.docs.has(m);!O&&b.fromCache?g.reject(new me(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&b.fromCache&&p&&p.source==="server"?g.reject(new me(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),w=new YA(Qh(m.path),E,{includeMetadataChanges:!0,Ta:!0});return $A(u,w)}(await ap(i),i.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(i,e,n){if(!n)throw new me(ee.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function nM(i,e,n,s){if(e===!0&&s===!0)throw new me(ee.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function iT(i){if(!ge.isDocumentKey(i))throw new me(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function rT(i){if(ge.isDocumentKey(i))throw new me(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Zp(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ee()}function wi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new me(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zp(i);throw new me(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="firestore.googleapis.com",sT=!0;class aT{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new me(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lw,this.ssl=sT}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:sT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=PA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VN)throw new me(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new me(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rf{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new cO;switch(s.type){case"firstParty":return new mO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=nT.get(n);s&&(oe("ComponentProvider","Removing Datastore"),nT.delete(n),s.terminate())}(this),Promise.resolve()}}function iM(i,e,n,s={}){var o;const u=(i=wi(i,rf))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${n}`;u.host!==lw&&u.host!==m&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!lr(p,f)&&(i._setSettings(p),s.mockUserToken)){let g,E;if(typeof s.mockUserToken=="string")g=s.mockUserToken,E=Yt.MOCK_USER;else{g=bT(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new me(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Yt(w)}i._authCredentials=new hO(new K0(g,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new sf(this.firestore,e,this._query)}}class sn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sn(this.firestore,e,this._key)}}class ls extends sf{constructor(e,n,s){super(e,n,Qh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sn(this.firestore,null,new ge(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function rM(i,e,...n){if(i=ut(i),ow("collection","path",e),i instanceof rf){const s=Ze.fromString(e,...n);return rT(s),new ls(i,null,s)}{if(!(i instanceof sn||i instanceof ls))throw new me(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ze.fromString(e,...n));return rT(s),new ls(i.firestore,null,s)}}function An(i,e,...n){if(i=ut(i),arguments.length===1&&(e=Q0.newId()),ow("doc","path",e),i instanceof rf){const s=Ze.fromString(e,...n);return iT(s),new sn(i,null,new ge(s))}{if(!(i instanceof sn||i instanceof ls))throw new me(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ze.fromString(e,...n));return iT(s),new sn(i.firestore,i instanceof ls?i.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="AsyncQueue";class lT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new zA(this,"async_queue_retry"),this.Su=()=>{const s=Dm();s&&oe(oT,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=Dm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=Dm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new os;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Do(e))throw e;oe(oT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let m=f.message||"";return f.stack&&(m=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),m}(s);throw hr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const o=$p.createAndSchedule(this,e,n,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Ee()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function uT(i){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class So extends rf{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new lT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lT(e),this._firestoreClient=void 0,await e}}}function sM(i,e){const n=Lh(),s=bh,o=ps(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=AT("firestore");u&&iM(o,...u)}return o}function Jp(i){if(i._terminated)throw new me(ee.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||aM(i),i._firestoreClient}function aM(i){var e,n,s;const o=i._freezeSettings(),u=function(m,p,g,E){return new DO(m,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,aw(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new Z2(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bo(Ft.fromBase64String(e))}catch(n){throw new me(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bo(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=/^__.*__$/;class lM{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new yu(e,this.data,n,this.fieldTransforms)}}class uw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cw(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class of{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new of(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Uu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Vh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(cw(this.Lu)&&oM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class uM{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ef(e)}ju(e,n,s,o=!1){return new of({Lu:e,methodName:n,zu:s,path:qt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hw(i){const e=i._freezeSettings(),n=ef(i._databaseId);return new uM(i._databaseId,!!e.ignoreUndefinedProperties,n)}function cM(i,e,n,s,o,u={}){const f=i.ju(u.merge||u.mergeFields?2:0,e,n,o);rg("Data must be an object, but it was:",f,s);const m=fw(s,f);let p,g;if(u.merge)p=new wn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const b=op(e,w,n);if(!f.contains(b))throw new me(ee.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);mw(E,b)||E.push(b)}p=new wn(E),g=f.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=f.fieldTransforms;return new lM(new fn(m),p,g)}class lf extends Tu{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lf}}function hM(i,e,n){return new of({Lu:3,zu:e.settings.zu,methodName:i._methodName,Qu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ng extends Tu{_toFieldTransform(e){return new TA(e.path,new uu)}isEqual(e){return e instanceof ng}}class ig extends Tu{constructor(e,n){super(e),this.Hu=n}_toFieldTransform(e){const n=hM(this,e,!0),s=this.Hu.map(u=>Au(u,n)),o=new To(s);return new TA(e.path,o)}isEqual(e){return e instanceof ig&&lr(this.Hu,e.Hu)}}function fM(i,e,n,s){const o=i.ju(1,e,n);rg("Data must be an object, but it was:",o,s);const u=[],f=fn.empty();_s(s,(p,g)=>{const E=sg(e,p,n);g=ut(g);const w=o.Uu(E);if(g instanceof lf)u.push(E);else{const b=Au(g,w);b!=null&&(u.push(E),f.set(E,b))}});const m=new wn(u);return new uw(f,m,o.fieldTransforms)}function dM(i,e,n,s,o,u){const f=i.ju(1,e,n),m=[op(e,s,n)],p=[o];if(u.length%2!=0)throw new me(ee.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<u.length;b+=2)m.push(op(e,u[b])),p.push(u[b+1]);const g=[],E=fn.empty();for(let b=m.length-1;b>=0;--b)if(!mw(g,m[b])){const O=m[b];let P=p[b];P=ut(P);const G=f.Uu(O);if(P instanceof lf)g.push(O);else{const B=Au(P,G);B!=null&&(g.push(O),E.set(O,B))}}const w=new wn(g);return new uw(E,w,f.fieldTransforms)}function Au(i,e){if(dw(i=ut(i)))return rg("Unsupported field value:",e,i),fw(i,e);if(i instanceof Tu)return function(s,o){if(!cw(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=Au(m,o.Ku(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=ut(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return JO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=dt.fromDate(s);return{timestampValue:Oh(o.serializer,u)}}if(s instanceof dt){const u=new dt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Oh(o.serializer,u)}}if(s instanceof eg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof bo)return{bytesValue:CA(o.serializer,s._byteString)};if(s instanceof sn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Lp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof tg)return function(f,m){return{mapValue:{fields:{[nA]:{stringValue:iA},[Rh]:{arrayValue:{values:f.toArray().map(g=>{if(typeof g!="number")throw m.Wu("VectorValues must only contain numeric values.");return Pp(m.serializer,g)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Zp(s)}`)}(i,e)}function fw(i,e){const n={};return X0(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(i,(s,o)=>{const u=Au(o,e.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function dw(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof dt||i instanceof eg||i instanceof bo||i instanceof sn||i instanceof Tu||i instanceof tg)}function rg(i,e,n){if(!dw(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=Zp(n);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function op(i,e,n){if((e=ut(e))instanceof af)return e._internalPath;if(typeof e=="string")return sg(i,e);throw Vh("Field path arguments must be of type string or ",i,!1,void 0,n)}const mM=new RegExp("[~\\*/\\[\\]]");function sg(i,e,n){if(e.search(mM)>=0)throw Vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new af(...e.split("."))._internalPath}catch{throw Vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Vh(i,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new me(ee.INVALID_ARGUMENT,m+i+p)}function mw(i,e){return i.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new sn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pM extends pw{data(){return super.data()}}function gw(i,e){return typeof e=="string"?sg(i,e):e instanceof af?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new me(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yM{convertValue(e,n="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ft(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return _s(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,o;const u=(o=(s=(n=e.fields)===null||n===void 0?void 0:n[Rh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>ft(f.doubleValue));return new tg(u)}convertGeoPoint(e){return new eg(ft(e.latitude),ft(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Kh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(au(e));default:return null}}convertTimestamp(e){const n=cs(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ze.fromString(e);Ge(VA(s));const o=new ou(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(n)||hr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(i,e,n){let s;return s=i?n&&(n.merge||n.mergeFields)?i.toFirestore(e,n):i.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yw extends pw{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ch extends yw{data(e={}){return super.data(e)}}class vM{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Xl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ch(this._firestore,this._userDataWriter,s.key,s,new Xl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new ch(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Xl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new ch(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Xl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return m.type!==0&&(g=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:EM(m.type),doc:p,oldIndex:g,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EM(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(i){i=wi(i,sn);const e=wi(i.firestore,So);return tM(Jp(e),i._key).then(n=>Ew(e,i,n))}class _w extends yM{constructor(e){super(),this.firestore=e}convertBytes(e){return new bo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new sn(this.firestore,null,n)}}function po(i,e,n){i=wi(i,sn);const s=wi(i.firestore,So),o=_M(i.converter,e,n);return vw(s,[cM(hw(s),"setDoc",i._key,o,i.converter!==null,n).toMutation(i._key,Ti.none())])}function lo(i,e,n,...s){i=wi(i,sn);const o=wi(i.firestore,So),u=hw(o);let f;return f=typeof(e=ut(e))=="string"||e instanceof af?dM(u,"updateDoc",i._key,e,n,s):fM(u,"updateDoc",i._key,e),vw(o,[f.toMutation(i._key,Ti.exists(!0))])}function lp(i,...e){var n,s,o;i=ut(i);let u={includeMetadataChanges:!1,source:"default"},f=0;typeof e[f]!="object"||uT(e[f])||(u=e[f],f++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(uT(e[f])){const w=e[f];e[f]=(n=w.next)===null||n===void 0?void 0:n.bind(w),e[f+1]=(s=w.error)===null||s===void 0?void 0:s.bind(w),e[f+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let p,g,E;if(i instanceof sn)g=wi(i.firestore,So),E=Qh(i._key.path),p={next:w=>{e[f]&&e[f](Ew(g,i,w))},error:e[f+1],complete:e[f+2]};else{const w=wi(i,sf);g=wi(w.firestore,So),E=w._query;const b=new _w(g);p={next:O=>{e[f]&&e[f](new vM(g,b,w,O))},error:e[f+1],complete:e[f+2]},gM(i._query)}return function(b,O,P,G){const B=new rw(G),K=new YA(O,B,P);return b.asyncQueue.enqueueAndForget(async()=>$A(await ap(b),K)),()=>{B.su(),b.asyncQueue.enqueueAndForget(async()=>QA(await ap(b),K))}}(Jp(g),E,m,p)}function vw(i,e){return function(s,o){const u=new os;return s.asyncQueue.enqueueAndForget(async()=>q2(await eM(s),o,u)),u.promise}(Jp(i),e)}function Ew(i,e,n){const s=n.docs.get(e._key),o=new _w(i);return new yw(i,o,e._key,s,new Xl(n.hasPendingWrites,n.fromCache),e.converter)}function Jc(){return new ng("serverTimestamp")}function AM(...i){return new ig("arrayUnion",i)}(function(e,n=!0){(function(o){Io=o})(ca),Jn(new Hn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new So(new fO(s.getProvider("auth-internal")),new pO(f,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new me(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ou(g.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),dn(mE,pE,e),dn(mE,pE,"esm2017")})();const wM={apiKey:"AIzaSyDsrCLN8-QU3I7NxtdWUYwmDtfZ6U7Oobg",authDomain:"mychatapp-e284e.firebaseapp.com",projectId:"mychatapp-e284e",storageBucket:"mychatapp-e284e.firebasestorage.app",messagingSenderId:"1083813073670",appId:"1:1083813073670:web:b872e586029be76c1f4487",measurementId:"G-L2S7VNLFXY"},SM=MT(wM);mC(SM);const la=kD();aO();const cn=sM(),da=q.createContext(),bM=({children:i})=>{const[e,n]=q.useState({});return q.useEffect(()=>{const s=T1(la,o=>{n(o),console.log(o)});return()=>s()},[]),W.jsx(da.Provider,{value:{currentUser:e},children:i})};var ql={},cT;function RM(){if(cT)return ql;cT=1,Object.defineProperty(ql,"__esModule",{value:!0}),ql.parse=f,ql.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function f(b,O){const P=new u,G=b.length;if(G<2)return P;const B=(O==null?void 0:O.decode)||E;let K=0;do{const ne=b.indexOf("=",K);if(ne===-1)break;const J=b.indexOf(";",K),le=J===-1?G:J;if(ne>le){K=b.lastIndexOf(";",ne-1)+1;continue}const ue=m(b,K,ne),Te=p(b,ne,ue),M=b.slice(ue,Te);if(P[M]===void 0){let R=m(b,ne+1,le),S=p(b,le,R);const C=B(b.slice(R,S));P[M]=C}K=le+1}while(K<G);return P}function m(b,O,P){do{const G=b.charCodeAt(O);if(G!==32&&G!==9)return O}while(++O<P);return P}function p(b,O,P){for(;O>P;){const G=b.charCodeAt(--O);if(G!==32&&G!==9)return O+1}return P}function g(b,O,P){const G=(P==null?void 0:P.encode)||encodeURIComponent;if(!i.test(b))throw new TypeError(`argument name is invalid: ${b}`);const B=G(O);if(!e.test(B))throw new TypeError(`argument val is invalid: ${O}`);let K=b+"="+B;if(!P)return K;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);K+="; Max-Age="+P.maxAge}if(P.domain){if(!n.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);K+="; Domain="+P.domain}if(P.path){if(!s.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);K+="; Path="+P.path}if(P.expires){if(!w(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);K+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(K+="; HttpOnly"),P.secure&&(K+="; Secure"),P.partitioned&&(K+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":K+="; Priority=Low";break;case"medium":K+="; Priority=Medium";break;case"high":K+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":K+="; SameSite=Strict";break;case"lax":K+="; SameSite=Lax";break;case"none":K+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return K}function E(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function w(b){return o.call(b)==="[object Date]"}return ql}RM();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hT="popstate";function IM(i={}){function e(s,o){let{pathname:u,search:f,hash:m}=s.location;return up("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:hu(o)}return DM(e,n,null,i)}function Je(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function ei(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function CM(){return Math.random().toString(36).substring(2,10)}function fT(i,e){return{usr:i.state,key:i.key,idx:e}}function up(i,e,n=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?No(e):e,state:n,key:e&&e.key||s||CM()}}function hu({pathname:i="/",search:e="",hash:n=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(i+=n.charAt(0)==="#"?n:"#"+n),i}function No(i){let e={};if(i){let n=i.indexOf("#");n>=0&&(e.hash=i.substring(n),i=i.substring(0,n));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function DM(i,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",p=null,g=E();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function E(){return(f.state||{idx:null}).idx}function w(){m="POP";let B=E(),K=B==null?null:B-g;g=B,p&&p({action:m,location:G.location,delta:K})}function b(B,K){m="PUSH";let ne=up(G.location,B,K);g=E()+1;let J=fT(ne,g),le=G.createHref(ne);try{f.pushState(J,"",le)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;o.location.assign(le)}u&&p&&p({action:m,location:G.location,delta:1})}function O(B,K){m="REPLACE";let ne=up(G.location,B,K);g=E();let J=fT(ne,g),le=G.createHref(ne);f.replaceState(J,"",le),u&&p&&p({action:m,location:G.location,delta:0})}function P(B){let K=o.location.origin!=="null"?o.location.origin:o.location.href,ne=typeof B=="string"?B:hu(B);return ne=ne.replace(/ $/,"%20"),Je(K,`No window.location.(origin|href) available to create URL for href: ${ne}`),new URL(ne,K)}let G={get action(){return m},get location(){return i(o,f)},listen(B){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(hT,w),p=B,()=>{o.removeEventListener(hT,w),p=null}},createHref(B){return e(o,B)},createURL:P,encodeLocation(B){let K=P(B);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:b,replace:O,go(B){return f.go(B)}};return G}function Tw(i,e,n="/"){return OM(i,e,n,!1)}function OM(i,e,n,s){let o=typeof e=="string"?No(e):e,u=dr(o.pathname||"/",n);if(u==null)return null;let f=Aw(i);NM(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=HM(u);m=BM(f[p],g,s)}return m}function Aw(i,e=[],n=[],s=""){let o=(u,f,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=or([s,p.relativePath]),E=n.concat(p);u.children&&u.children.length>0&&(Je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Aw(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:LM(g,u.index),routesMeta:E})};return i.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,f);else for(let p of ww(u.path))o(u,f,p)}),e}function ww(i){let e=i.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=ww(s.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function NM(i){i.sort((e,n)=>e.score!==n.score?n.score-e.score:zM(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var MM=/^:[\w-]+$/,kM=3,VM=2,PM=1,xM=10,UM=-2,dT=i=>i==="*";function LM(i,e){let n=i.split("/"),s=n.length;return n.some(dT)&&(s+=UM),e&&(s+=VM),n.filter(o=>!dT(o)).reduce((o,u)=>o+(MM.test(u)?kM:u===""?PM:xM),s)}function zM(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function BM(i,e,n=!1){let{routesMeta:s}=i,o={},u="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],g=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",w=Ph({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),b=p.route;if(!w&&g&&n&&!s[s.length-1].route.index&&(w=Ph({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!w)return null;Object.assign(o,w.params),f.push({params:o,pathname:or([u,w.pathname]),pathnameBase:KM(or([u,w.pathnameBase])),route:b}),w.pathnameBase!=="/"&&(u=or([u,w.pathnameBase]))}return f}function Ph(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[n,s]=jM(i.path,i.caseSensitive,i.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:w},b)=>{if(E==="*"){let P=m[b]||"";f=u.slice(0,u.length-P.length).replace(/(.)\/+$/,"$1")}const O=m[b];return w&&!O?g[E]=void 0:g[E]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:i}}function jM(i,e=!1,n=!0){ei(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function HM(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ei(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function dr(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=i.charAt(n);return s&&s!=="/"?null:i.slice(n)||"/"}function qM(i,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof i=="string"?No(i):i;return{pathname:n?n.startsWith("/")?n:FM(n,e):e,search:$M(s),hash:QM(o)}}function FM(i,e){let n=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Nm(i,e,n,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function GM(i){return i.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ag(i){let e=GM(i);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function og(i,e,n,s=!1){let o;typeof i=="string"?o=No(i):(o={...i},Je(!o.pathname||!o.pathname.includes("?"),Nm("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),Nm("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),Nm("#","search","hash",o)));let u=i===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let w=e.length-1;if(!s&&f.startsWith("..")){let b=f.split("/");for(;b[0]==="..";)b.shift(),w-=1;o.pathname=b.join("/")}m=w>=0?e[w]:"/"}let p=qM(o,m),g=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var or=i=>i.join("/").replace(/\/\/+/g,"/"),KM=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),$M=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,QM=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function YM(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Sw=["POST","PUT","PATCH","DELETE"];new Set(Sw);var XM=["GET",...Sw];new Set(XM);var Mo=q.createContext(null);Mo.displayName="DataRouter";var uf=q.createContext(null);uf.displayName="DataRouterState";var bw=q.createContext({isTransitioning:!1});bw.displayName="ViewTransition";var WM=q.createContext(new Map);WM.displayName="Fetchers";var ZM=q.createContext(null);ZM.displayName="Await";var ti=q.createContext(null);ti.displayName="Navigation";var wu=q.createContext(null);wu.displayName="Location";var Ci=q.createContext({outlet:null,matches:[],isDataRoute:!1});Ci.displayName="Route";var lg=q.createContext(null);lg.displayName="RouteError";function JM(i,{relative:e}={}){Je(ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=q.useContext(ti),{hash:o,pathname:u,search:f}=Su(i,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:or([n,u])),s.createHref({pathname:m,search:f,hash:o})}function ko(){return q.useContext(wu)!=null}function pr(){return Je(ko(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(wu).location}var Rw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iw(i){q.useContext(ti).static||q.useLayoutEffect(i)}function Vo(){let{isDataRoute:i}=q.useContext(Ci);return i?fk():ek()}function ek(){Je(ko(),"useNavigate() may be used only in the context of a <Router> component.");let i=q.useContext(Mo),{basename:e,navigator:n}=q.useContext(ti),{matches:s}=q.useContext(Ci),{pathname:o}=pr(),u=JSON.stringify(ag(s)),f=q.useRef(!1);return Iw(()=>{f.current=!0}),q.useCallback((p,g={})=>{if(ei(f.current,Rw),!f.current)return;if(typeof p=="number"){n.go(p);return}let E=og(p,JSON.parse(u),o,g.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:or([e,E.pathname])),(g.replace?n.replace:n.push)(E,g.state,g)},[e,n,u,o,i])}q.createContext(null);function Su(i,{relative:e}={}){let{matches:n}=q.useContext(Ci),{pathname:s}=pr(),o=JSON.stringify(ag(n));return q.useMemo(()=>og(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function tk(i,e){return Cw(i,e)}function Cw(i,e,n,s){var ne;Je(ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=q.useContext(ti),{matches:f}=q.useContext(Ci),m=f[f.length-1],p=m?m.params:{},g=m?m.pathname:"/",E=m?m.pathnameBase:"/",w=m&&m.route;{let J=w&&w.path||"";Dw(g,!w||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let b=pr(),O;if(e){let J=typeof e=="string"?No(e):e;Je(E==="/"||((ne=J.pathname)==null?void 0:ne.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${J.pathname}" was given in the \`location\` prop.`),O=J}else O=b;let P=O.pathname||"/",G=P;if(E!=="/"){let J=E.replace(/^\//,"").split("/");G="/"+P.replace(/^\//,"").split("/").slice(J.length).join("/")}let B=!u&&n&&n.matches&&n.matches.length>0?n.matches:Tw(i,{pathname:G});ei(w||B!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),ei(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=ak(B&&B.map(J=>Object.assign({},J,{params:Object.assign({},p,J.params),pathname:or([E,o.encodeLocation?o.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?E:or([E,o.encodeLocation?o.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),f,n,s);return e&&K?q.createElement(wu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},K):K}function nk(){let i=hk(),e=YM(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),n=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",i),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:u},"ErrorBoundary")," or"," ",q.createElement("code",{style:u},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),n?q.createElement("pre",{style:o},n):null,f)}var ik=q.createElement(nk,null),rk=class extends q.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?q.createElement(Ci.Provider,{value:this.props.routeContext},q.createElement(lg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sk({routeContext:i,match:e,children:n}){let s=q.useContext(Mo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(Ci.Provider,{value:i},n)}function ak(i,e=[],n=null,s=null){if(i==null){if(!n)return null;if(n.errors)i=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)i=n.matches;else return null}let o=i,u=n==null?void 0:n.errors;if(u!=null){let p=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,m=-1;if(n)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:E,errors:w}=n,b=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||b){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,g,E)=>{let w,b=!1,O=null,P=null;n&&(w=u&&g.route.id?u[g.route.id]:void 0,O=g.route.errorElement||ik,f&&(m<0&&E===0?(Dw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,P=null):m===E&&(b=!0,P=g.route.hydrateFallbackElement||null)));let G=e.concat(o.slice(0,E+1)),B=()=>{let K;return w?K=O:b?K=P:g.route.Component?K=q.createElement(g.route.Component,null):g.route.element?K=g.route.element:K=p,q.createElement(sk,{match:g,routeContext:{outlet:p,matches:G,isDataRoute:n!=null},children:K})};return n&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?q.createElement(rk,{location:n.location,revalidation:n.revalidation,component:O,error:w,children:B(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):B()},null)}function ug(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ok(i){let e=q.useContext(Mo);return Je(e,ug(i)),e}function lk(i){let e=q.useContext(uf);return Je(e,ug(i)),e}function uk(i){let e=q.useContext(Ci);return Je(e,ug(i)),e}function cg(i){let e=uk(i),n=e.matches[e.matches.length-1];return Je(n.route.id,`${i} can only be used on routes that contain a unique "id"`),n.route.id}function ck(){return cg("useRouteId")}function hk(){var s;let i=q.useContext(lg),e=lk("useRouteError"),n=cg("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[n]}function fk(){let{router:i}=ok("useNavigate"),e=cg("useNavigate"),n=q.useRef(!1);return Iw(()=>{n.current=!0}),q.useCallback(async(o,u={})=>{ei(n.current,Rw),n.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...u}))},[i,e])}var mT={};function Dw(i,e,n){!e&&!mT[i]&&(mT[i]=!0,ei(!1,n))}q.memo(dk);function dk({routes:i,future:e,state:n}){return Cw(i,void 0,n,e)}function mk({to:i,replace:e,state:n,relative:s}){Je(ko(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=q.useContext(ti);ei(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=q.useContext(Ci),{pathname:f}=pr(),m=Vo(),p=og(i,ag(u),f,s==="path"),g=JSON.stringify(p);return q.useEffect(()=>{m(JSON.parse(g),{replace:e,state:n,relative:s})},[m,g,s,e,n]),null}function uo(i){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pk({basename:i="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){Je(!ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=i.replace(/^\/*/,"/"),m=q.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=No(n));let{pathname:p="/",search:g="",hash:E="",state:w=null,key:b="default"}=n,O=q.useMemo(()=>{let P=dr(p,f);return P==null?null:{location:{pathname:P,search:g,hash:E,state:w,key:b},navigationType:s}},[f,p,g,E,w,b,s]);return ei(O!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:q.createElement(ti.Provider,{value:m},q.createElement(wu.Provider,{children:e,value:O}))}function gk({children:i,location:e}){return tk(cp(i),e)}function cp(i,e=[]){let n=[];return q.Children.forEach(i,(s,o)=>{if(!q.isValidElement(s))return;let u=[...e,o];if(s.type===q.Fragment){n.push.apply(n,cp(s.props.children,u));return}Je(s.type===uo,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=cp(s.props.children,u)),n.push(f)}),n}var hh="get",fh="application/x-www-form-urlencoded";function cf(i){return i!=null&&typeof i.tagName=="string"}function yk(i){return cf(i)&&i.tagName.toLowerCase()==="button"}function _k(i){return cf(i)&&i.tagName.toLowerCase()==="form"}function vk(i){return cf(i)&&i.tagName.toLowerCase()==="input"}function Ek(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Tk(i,e){return i.button===0&&(!e||e==="_self")&&!Ek(i)}var eh=null;function Ak(){if(eh===null)try{new FormData(document.createElement("form"),0),eh=!1}catch{eh=!0}return eh}var wk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mm(i){return i!=null&&!wk.has(i)?(ei(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fh}"`),null):i}function Sk(i,e){let n,s,o,u,f;if(_k(i)){let m=i.getAttribute("action");s=m?dr(m,e):null,n=i.getAttribute("method")||hh,o=Mm(i.getAttribute("enctype"))||fh,u=new FormData(i)}else if(yk(i)||vk(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||m.getAttribute("action");if(s=p?dr(p,e):null,n=i.getAttribute("formmethod")||m.getAttribute("method")||hh,o=Mm(i.getAttribute("formenctype"))||Mm(m.getAttribute("enctype"))||fh,u=new FormData(m,i),!Ak()){let{name:g,type:E,value:w}=i;if(E==="image"){let b=g?`${g}.`:"";u.append(`${b}x`,"0"),u.append(`${b}y`,"0")}else g&&u.append(g,w)}}else{if(cf(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=hh,s=null,o=fh,f=i}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}function hg(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function bk(i,e){if(i.id in e)return e[i.id];try{let n=await import(i.module);return e[i.id]=n,n}catch(n){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Rk(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Ik(i,e,n){let s=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await bk(u,n);return f.links?f.links():[]}return[]}));return Nk(s.flat(1).filter(Rk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function pT(i,e,n,s,o,u){let f=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,m=(p,g)=>{var E;return n[g].pathname!==p.pathname||((E=n[g].route.path)==null?void 0:E.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,g)=>f(p,g)||m(p,g)):u==="data"?e.filter((p,g)=>{var w;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=n[0])==null?void 0:w.params)||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Ck(i,e,{includeHydrateFallback:n}={}){return Dk(i.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function Dk(i){return[...new Set(i)]}function Ok(i){let e={},n=Object.keys(i).sort();for(let s of n)e[s]=i[s];return e}function Nk(i,e){let n=new Set;return new Set(e),i.reduce((s,o)=>{let u=JSON.stringify(Ok(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function Mk(i,e){let n=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return n.pathname==="/"?n.pathname="_root.data":e&&dr(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Ow(){let i=q.useContext(Mo);return hg(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function kk(){let i=q.useContext(uf);return hg(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var fg=q.createContext(void 0);fg.displayName="FrameworkContext";function Nw(){let i=q.useContext(fg);return hg(i,"You must render this element inside a <HydratedRouter> element"),i}function Vk(i,e){let n=q.useContext(fg),[s,o]=q.useState(!1),[u,f]=q.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:w}=e,b=q.useRef(null);q.useEffect(()=>{if(i==="render"&&f(!0),i==="viewport"){let G=K=>{K.forEach(ne=>{f(ne.isIntersecting)})},B=new IntersectionObserver(G,{threshold:.5});return b.current&&B.observe(b.current),()=>{B.disconnect()}}},[i]),q.useEffect(()=>{if(s){let G=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(G)}}},[s]);let O=()=>{o(!0)},P=()=>{o(!1),f(!1)};return n?i!=="intent"?[u,b,{}]:[u,b,{onFocus:Fl(m,O),onBlur:Fl(p,P),onMouseEnter:Fl(g,O),onMouseLeave:Fl(E,P),onTouchStart:Fl(w,O)}]:[!1,b,{}]}function Fl(i,e){return n=>{i&&i(n),n.defaultPrevented||e(n)}}function Pk({page:i,...e}){let{router:n}=Ow(),s=q.useMemo(()=>Tw(n.routes,i,n.basename),[n.routes,i,n.basename]);return s?q.createElement(Uk,{page:i,matches:s,...e}):null}function xk(i){let{manifest:e,routeModules:n}=Nw(),[s,o]=q.useState([]);return q.useEffect(()=>{let u=!1;return Ik(i,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[i,e,n]),s}function Uk({page:i,matches:e,...n}){let s=pr(),{manifest:o,routeModules:u}=Nw(),{basename:f}=Ow(),{loaderData:m,matches:p}=kk(),g=q.useMemo(()=>pT(i,e,p,o,s,"data"),[i,e,p,o,s]),E=q.useMemo(()=>pT(i,e,p,o,s,"assets"),[i,e,p,o,s]),w=q.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let P=new Set,G=!1;if(e.forEach(K=>{var J;let ne=o.routes[K.route.id];!ne||!ne.hasLoader||(!g.some(le=>le.route.id===K.route.id)&&K.route.id in m&&((J=u[K.route.id])!=null&&J.shouldRevalidate)||ne.hasClientLoader?G=!0:P.add(K.route.id))}),P.size===0)return[];let B=Mk(i,f);return G&&P.size>0&&B.searchParams.set("_routes",e.filter(K=>P.has(K.route.id)).map(K=>K.route.id).join(",")),[B.pathname+B.search]},[f,m,s,o,g,e,i,u]),b=q.useMemo(()=>Ck(E,o),[E,o]),O=xk(E);return q.createElement(q.Fragment,null,w.map(P=>q.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),b.map(P=>q.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),O.map(({key:P,link:G})=>q.createElement("link",{key:P,...G})))}function Lk(...i){return e=>{i.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Mw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Mw&&(window.__reactRouterVersion="7.4.0")}catch{}function zk({basename:i,children:e,window:n}){let s=q.useRef();s.current==null&&(s.current=IM({window:n,v5Compat:!0}));let o=s.current,[u,f]=q.useState({action:o.action,location:o.location}),m=q.useCallback(p=>{q.startTransition(()=>f(p))},[f]);return q.useLayoutEffect(()=>o.listen(m),[o,m]),q.createElement(pk,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var kw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hf=q.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:m,target:p,to:g,preventScrollReset:E,viewTransition:w,...b},O){let{basename:P}=q.useContext(ti),G=typeof g=="string"&&kw.test(g),B,K=!1;if(typeof g=="string"&&G&&(B=g,Mw))try{let S=new URL(window.location.href),C=g.startsWith("//")?new URL(S.protocol+g):new URL(g),V=dr(C.pathname,P);C.origin===S.origin&&V!=null?g=V+C.search+C.hash:K=!0}catch{ei(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ne=JM(g,{relative:o}),[J,le,ue]=Vk(s,b),Te=qk(g,{replace:f,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:w});function M(S){e&&e(S),S.defaultPrevented||Te(S)}let R=q.createElement("a",{...b,...ue,href:B||ne,onClick:K||u?e:M,ref:Lk(O,le),target:p,"data-discover":!G&&n==="render"?"true":void 0});return J&&!G?q.createElement(q.Fragment,null,R,q.createElement(Pk,{page:ne})):R});hf.displayName="Link";var Bk=q.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...g},E){let w=Su(f,{relative:g.relative}),b=pr(),O=q.useContext(uf),{navigator:P,basename:G}=q.useContext(ti),B=O!=null&&Qk(w)&&m===!0,K=P.encodeLocation?P.encodeLocation(w).pathname:w.pathname,ne=b.pathname,J=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;n||(ne=ne.toLowerCase(),J=J?J.toLowerCase():null,K=K.toLowerCase()),J&&G&&(J=dr(J,G)||J);const le=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ue=ne===K||!o&&ne.startsWith(K)&&ne.charAt(le)==="/",Te=J!=null&&(J===K||!o&&J.startsWith(K)&&J.charAt(K.length)==="/"),M={isActive:ue,isPending:Te,isTransitioning:B},R=ue?e:void 0,S;typeof s=="function"?S=s(M):S=[s,ue?"active":null,Te?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(M):u;return q.createElement(hf,{...g,"aria-current":R,className:S,ref:E,style:C,to:f,viewTransition:m},typeof p=="function"?p(M):p)});Bk.displayName="NavLink";var jk=q.forwardRef(({discover:i="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=hh,action:m,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:w,...b},O)=>{let P=Kk(),G=$k(m,{relative:g}),B=f.toLowerCase()==="get"?"get":"post",K=typeof m=="string"&&kw.test(m),ne=J=>{if(p&&p(J),J.defaultPrevented)return;J.preventDefault();let le=J.nativeEvent.submitter,ue=(le==null?void 0:le.getAttribute("formmethod"))||f;P(le||J.currentTarget,{fetcherKey:e,method:ue,navigate:n,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:w})};return q.createElement("form",{ref:O,method:B,action:G,onSubmit:s?p:ne,...b,"data-discover":!K&&i==="render"?"true":void 0})});jk.displayName="Form";function Hk(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vw(i){let e=q.useContext(Mo);return Je(e,Hk(i)),e}function qk(i,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=Vo(),p=pr(),g=Su(i,{relative:u});return q.useCallback(E=>{if(Tk(E,e)){E.preventDefault();let w=n!==void 0?n:hu(p)===hu(g);m(i,{replace:w,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[p,m,g,n,s,e,i,o,u,f])}var Fk=0,Gk=()=>`__${String(++Fk)}__`;function Kk(){let{router:i}=Vw("useSubmit"),{basename:e}=q.useContext(ti),n=ck();return q.useCallback(async(s,o={})=>{let{action:u,method:f,encType:m,formData:p,body:g}=Sk(s,e);if(o.navigate===!1){let E=o.fetcherKey||Gk();await i.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,n])}function $k(i,{relative:e}={}){let{basename:n}=q.useContext(ti),s=q.useContext(Ci);Je(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Su(i||".",{relative:e})},f=pr();if(i==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(w=>w).forEach(w=>m.append("index",w));let E=m.toString();u.search=E?`?${E}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:or([n,u.pathname])),hu(u)}function Qk(i,e={}){let n=q.useContext(bw);Je(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Vw("useViewTransitionState"),o=Su(i,{relative:e.relative});if(!n.isTransitioning)return!1;let u=dr(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=dr(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Ph(o.pathname,f)!=null||Ph(o.pathname,u)!=null}new TextEncoder;function Yk(){const{currentUser:i}=q.useContext(da),e=async()=>{try{const n=la.currentUser;n&&await po(An(cn,"users",n.uid),{status:"offline"},{merge:!0}),await A1(la),console.log("User logged out successfully.")}catch(n){console.error("Error during logout:",n)}};return W.jsx(W.Fragment,{children:W.jsx("div",{className:"userdiv1",children:i!=null&&i.displayName?W.jsxs(W.Fragment,{children:[W.jsx("h3",{className:"userletter",children:i.displayName.charAt(0)||" "}),W.jsx("p",{children:i.displayName}),W.jsx("button",{onClick:e,style:{marginLeft:"10px"},children:"Sign Out"})]}):W.jsx("p",{children:"Loading..."})})})}const Po=q.createContext(),Xk=({children:i})=>{const{currentUser:e}=q.useContext(da),n={chatId:"null",user:null,isAiChat:!1},s=(f,m)=>{var p;switch(m.type){case"CHANGE_USER":return{...f,isAiChat:!1,user:m.payload,chatId:m.payload&&e.uid>m.payload.uid?e.uid+m.payload.uid:((p=m.payload)==null?void 0:p.uid)+e.uid};case"TOGGLE_AI_CHAT":return{...f,isAiChat:!0,user:null,chatId:"ai_chat"};default:return f}},[o,u]=q.useReducer(s,n);return W.jsx(Po.Provider,{value:{data:o,dispatch:u},children:i})},Wk=()=>{const i=Vo(),[e,n]=q.useState([]),[s,o]=q.useState({}),{dispatch:u}=q.useContext(Po),{currentUser:f}=q.useContext(da),m=f==null?void 0:f.uid,[p,g]=q.useState(!1);q.useEffect(()=>{const b=lp(rM(cn,"users"),O=>{const P=O.docs.map(G=>({...G.data(),uid:G.id}));n(P)});return()=>b()},[]),q.useEffect(()=>{if(!m)return;const b=An(cn,"userChats",m),O=lp(b,P=>{P.exists()&&o(P.data())});return()=>O()},[m]);const E=b=>{g(!1),u({type:"CHANGE_USER",payload:b}),window.innerWidth<=768&&i(`/chat/${b.uid}`)},w=()=>{u({type:"TOGGLE_AI_CHAT"}),window.innerWidth<=768&&i("/chat/ai")};return m?W.jsxs("div",{className:"chatsdiv",children:[W.jsxs("div",{className:"aidiv",onClick:w,children:[W.jsx("h4",{children:"OpenChat AI"}),W.jsx("img",{src:"https://img.freepik.com/free-vector/cartoon-style-robot-vectorart_78370-4103.jpg",className:"aiimg",alt:"AI Bot"})]}),e.map(b=>{var O;return W.jsxs("div",{className:"userdiv",onClick:()=>E(b),children:[W.jsx("div",{className:"userLatter",children:b.displayName.charAt(0)}),W.jsxs("div",{style:{width:"90%",marginLeft:"6px"},children:[W.jsxs("div",{className:"namestatus",children:[W.jsx("h4",{className:"usernameh3",children:b.displayName}),W.jsx("span",{style:{color:"#25d366"},children:b.status})]}),W.jsx("p",{className:"lastMessage",children:((O=s.lastMessage)==null?void 0:O.text)||"Start a new conversation"})]})]},b.uid)})]}):W.jsx("p",{children:"Loading chats..."})};function Pw(){const[i,e]=q.useState(""),[n,s]=q.useState([]),[o,u]=q.useState(""),f="AIzaSyD4x9FqziSV6gaXy2haP1TWNCaVYZuf5IE",m="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",p=async()=>{var E,w,b,O,P;if(i.trim()){s(G=>[...G,{type:"user",text:i}]),u("Loading...");try{const G=await fetch(`${m}?key=${f}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:i}]}]})});if(!G.ok)throw new Error("Failed to fetch AI response");const B=await G.json(),K=((P=(O=(b=(w=(E=B==null?void 0:B.candidates)==null?void 0:E[0])==null?void 0:w.content)==null?void 0:b.parts)==null?void 0:O[0])==null?void 0:P.text)||"No response from AI.";s(ne=>[...ne,{type:"ai",text:K}])}catch(G){s(B=>[...B,{type:"ai",text:`Error: ${G.message}`}])}e("")}},g=E=>{E.key==="Enter"&&i.trim()&&p()};return W.jsxs("div",{className:"aichatroom",children:[W.jsx("div",{className:"display-result",children:n.map((E,w)=>W.jsx("div",{className:`message ${E.type}`,children:W.jsx("h4",{children:E.text})},w))}),W.jsxs("div",{className:"input-div",children:[W.jsx("input",{type:"text",placeholder:"Ask anything",className:"aiinput",value:i,onChange:E=>e(E.target.value),onKeyDown:g}),W.jsx("button",{className:"generate-btn",onClick:p,disabled:!i.trim(),children:"send"})]})]})}function Zk(){return W.jsx(W.Fragment,{children:W.jsxs("div",{className:"sidebar-heading",children:[W.jsx(Yk,{}),W.jsx("div",{className:"sidebar",children:W.jsx(Wk,{})})]})})}const Jk=({message:i})=>{const{currentUser:e}=q.useContext(da),{data:n}=q.useContext(Po),s=q.useRef();return q.useEffect(()=>{var o;(o=s.current)==null||o.scrollIntoView({behavior:"smooth"})},[i]),W.jsxs("div",{ref:s,className:`message ${i.senderId===e.uid&&"owner"}`,children:[W.jsx("div",{className:"messageInfo"}),W.jsxs("div",{className:"messageContent",children:[W.jsx("p",{children:i.text}),i.img&&W.jsx("img",{src:i.img,alt:""})]})]})},eV=()=>{const[i,e]=q.useState([]),{data:n}=q.useContext(Po);return q.useEffect(()=>{const s=lp(An(cn,"chats",n.chatId),o=>{o.exists()&&e(o.data().messages||[])});return()=>s()},[n.chatId]),W.jsx("div",{className:"messages",children:i.length===0?W.jsx("p",{children:"No messages yet. Start chatting!"}):i.map(s=>W.jsx(Jk,{message:s},s.id))})},jt=[];for(let i=0;i<256;++i)jt.push((i+256).toString(16).slice(1));function tV(i,e=0){return(jt[i[e+0]]+jt[i[e+1]]+jt[i[e+2]]+jt[i[e+3]]+"-"+jt[i[e+4]]+jt[i[e+5]]+"-"+jt[i[e+6]]+jt[i[e+7]]+"-"+jt[i[e+8]]+jt[i[e+9]]+"-"+jt[i[e+10]]+jt[i[e+11]]+jt[i[e+12]]+jt[i[e+13]]+jt[i[e+14]]+jt[i[e+15]]).toLowerCase()}let km;const nV=new Uint8Array(16);function iV(){if(!km){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");km=crypto.getRandomValues.bind(crypto)}return km(nV)}const rV=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),gT={randomUUID:rV};function yT(i,e,n){var o;if(gT.randomUUID&&!i)return gT.randomUUID();i=i||{};const s=i.random??((o=i.rng)==null?void 0:o.call(i))??iV();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,tV(s)}const sV=()=>{const[i,e]=q.useState(""),{currentUser:n}=q.useContext(da),{data:s}=q.useContext(Po),o=async()=>{try{const f=n.uid>s.user.uid?n.uid+s.user.uid:s.user.uid+n.uid,m=An(cn,"chats",f);(await TM(m)).exists()?(await lo(m,{messages:AM({id:yT(),text:i,senderId:n.uid,date:dt.now()})}),await lo(An(cn,"userChats",n.uid),{[f+".lastMessage"]:{text:i},[f+".date"]:Jc()}),await lo(An(cn,"userChats",s.user.uid),{[f+".lastMessage"]:{text:i},[f+".date"]:Jc()})):(await po(m,{messages:[{id:yT(),text:i,senderId:n.uid,date:dt.now()}]}),await po(An(cn,"userChats",n.uid),{},{merge:!0}),await po(An(cn,"userChats",s.user.uid),{},{merge:!0}),await lo(An(cn,"userChats",n.uid),{[f+".userInfo"]:{uid:s.user.uid,displayName:s.user.displayName||"Unknown User",photoURL:s.user.photoURL||"https://example.com/default-avatar.png"},[f+".lastMessage"]:{text:i},[f+".date"]:Jc()}),await lo(An(cn,"userChats",s.user.uid),{[f+".userInfo"]:{uid:n.uid,displayName:n.displayName||"Unknown User",photoURL:n.photoURL||"https://example.com/default-avatar.png"},[f+".lastMessage"]:{text:i},[f+".date"]:Jc()})),e("")}catch(f){console.error("Error sending message: ",f)}},u=f=>{f.key==="Enter"&&i.trim()&&o()};return W.jsxs("div",{className:"input",children:[W.jsx("input",{type:"text",placeholder:"Type something...",onChange:f=>e(f.target.value),value:i,onKeyDown:u}),W.jsx("div",{className:"send",children:W.jsx("button",{onClick:o,children:"Send"})})]})},xw=()=>{var f,m;const{data:i,dispatch:e}=q.useContext(Po),n=pr(),s=Vo(),o=n.pathname.startsWith("/chat");function u(){e({type:"CHANGE_USER",payload:null}),s("/")}return W.jsxs("div",{className:`chat ${o?"visible":""}`,children:[W.jsxs("div",{className:"chatInfo",children:[W.jsx("button",{className:"backbutton",onClick:u,children:"←"}),W.jsx("span",{children:i.isAiChat?"OpenChat AI":((f=i.user)==null?void 0:f.displayName)||"Select a user to chat"}),W.jsx("span",{style:{color:"#29ff29",fontSize:"1rem"},children:!i.isAiChat&&((m=i.user)==null?void 0:m.status)})]}),i.isAiChat?W.jsx(Pw,{}):i.chatId!=="null"?W.jsxs(W.Fragment,{children:[W.jsx(eV,{}),W.jsx(sV,{})]}):W.jsx("p",{style:{padding:"20px"},children:"No user selected."})]})};function aV(){return W.jsxs("div",{className:"homepage",children:[W.jsx(Zk,{}),W.jsx(xw,{})]})}function oV(){const[i,e]=q.useState(!1),[n,s]=q.useState(!1),o=Vo(),u=async f=>{f.preventDefault();const m=f.target[0].value,p=f.target[1].value;try{await g1(la,m,p);const g=la.currentUser;await lo(An(cn,"users",g.uid),{status:"online"}),o("/")}catch{e(!0)}};return W.jsxs(W.Fragment,{children:[W.jsx("center",{children:W.jsx("h1",{children:"Login"})}),W.jsxs("form",{onSubmit:u,style:{width:"340px",height:"34vh"},children:[W.jsx("input",{required:!0,type:"email",placeholder:"Email"}),W.jsx("input",{required:!0,type:"password",placeholder:"Password"}),W.jsx("button",{disabled:n,children:"Login"}),n&&"Uploading, please wait...",i&&W.jsx("span",{children:"Something went wrong..."}),W.jsxs("p",{children:["Have an account? ",W.jsx(hf,{to:"/register",children:"register"})]})]})]})}const lV=new nr;function uV(){const[i,e]=q.useState(!1),[n,s]=q.useState(!1),o=Vo(),u=async()=>{try{const p=(await H1(la,lV)).user;await po(An(cn,"users",p.uid),{displayName:p.displayName,email:p.email,status:"offline"}),o("/")}catch(m){console.error("Google Sign-In Error:",m.message),e(!0)}},f=async m=>{m.preventDefault(),s(!0);const p=m.target[0].value,g=m.target[1].value,E=m.target[2].value;try{const b=(await p1(la,g,E)).user;await _1(b,{displayName:p}),await po(An(cn,"users",b.uid),{displayName:p,email:g,status:"offline"}),console.log("User registered successfully"),o("/")}catch(w){console.error("Registration Error:",w.message),e(!0)}finally{s(!1)}};return W.jsx(W.Fragment,{children:W.jsxs("div",{className:"register-div",children:[W.jsx("center",{children:W.jsx("h1",{children:"Register"})}),W.jsxs("form",{onSubmit:f,children:[W.jsx("input",{required:!0,type:"text",placeholder:"Display Name"}),W.jsx("input",{required:!0,type:"email",placeholder:"Email"}),W.jsx("input",{required:!0,type:"password",placeholder:"Password"}),W.jsx("button",{disabled:n,children:"Signup"}),W.jsx("button",{type:"button",onClick:u,children:"Sign up with Google"}),n&&"Uploading, please wait...",i&&W.jsx("span",{children:"Something went wrong..."}),W.jsxs("p",{children:["Have an account? ",W.jsx(hf,{to:"/login",children:"Login"})]})]})]})})}function cV(){const{currentUser:i}=q.useContext(da),e=({children:n})=>i?n:W.jsx(mk,{to:"/login"});return W.jsx(zk,{children:W.jsxs(gk,{children:[W.jsx(uo,{path:"/",element:W.jsx(e,{children:W.jsx(aV,{})})}),W.jsx(uo,{path:"/login",element:W.jsx(oV,{})}),W.jsx(uo,{path:"/ai",element:W.jsx(Pw,{})}),W.jsx(uo,{path:"/register",element:W.jsx(uV,{})}),W.jsx(uo,{path:"/chat/:userId",element:W.jsx(e,{children:W.jsx(xw,{})})})]})})}gb.createRoot(document.getElementById("root")).render(W.jsx(bM,{children:W.jsx(Xk,{children:W.jsx(q.StrictMode,{children:W.jsx(cV,{})})})}));
