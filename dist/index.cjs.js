"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var set,get,has$1,O="object",check=function(e){return e&&e.Math==Math&&e},global_1=check(typeof globalThis==O&&globalThis)||check(typeof window==O&&window)||check(typeof self==O&&self)||check(typeof commonjsGlobal==O&&commonjsGlobal)||Function("return this")(),fails=function(e){try{return!!e()}catch(e){return!0}},descriptors=!fails((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),nativePropertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor&&!nativePropertyIsEnumerable.call({1:2},1),f=NASHORN_BUG?function(e){var t=getOwnPropertyDescriptor(this,e);return!!t&&t.enumerable}:nativePropertyIsEnumerable,objectPropertyIsEnumerable={f:f},createPropertyDescriptor=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},toString={}.toString,classofRaw=function(e){return toString.call(e).slice(8,-1)},split="".split,indexedObject=fails((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==classofRaw(e)?split.call(e,""):Object(e)}:Object,requireObjectCoercible=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},toIndexedObject=function(e){return indexedObject(requireObjectCoercible(e))},isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},toPrimitive=function(e,t){if(!isObject(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!isObject(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!isObject(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!isObject(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")},hasOwnProperty={}.hasOwnProperty,has=function(e,t){return hasOwnProperty.call(e,t)},document$1=global_1.document,EXISTS=isObject(document$1)&&isObject(document$1.createElement),documentCreateElement=function(e){return EXISTS?document$1.createElement(e):{}},ie8DomDefine=!descriptors&&!fails((function(){return 7!=Object.defineProperty(documentCreateElement("div"),"a",{get:function(){return 7}}).a})),nativeGetOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,f$1=descriptors?nativeGetOwnPropertyDescriptor:function(e,t){if(e=toIndexedObject(e),t=toPrimitive(t,!0),ie8DomDefine)try{return nativeGetOwnPropertyDescriptor(e,t)}catch(e){}if(has(e,t))return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(e,t),e[t])},objectGetOwnPropertyDescriptor={f:f$1},anObject=function(e){if(!isObject(e))throw TypeError(String(e)+" is not an object");return e},nativeDefineProperty=Object.defineProperty,f$2=descriptors?nativeDefineProperty:function(e,t,r){if(anObject(e),t=toPrimitive(t,!0),anObject(r),ie8DomDefine)try{return nativeDefineProperty(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e},objectDefineProperty={f:f$2},hide=descriptors?function(e,t,r){return objectDefineProperty.f(e,t,createPropertyDescriptor(1,r))}:function(e,t,r){return e[t]=r,e},setGlobal=function(e,t){try{hide(global_1,e,t)}catch(r){global_1[e]=t}return t},isPure=!1,shared=createCommonjsModule((function(e){var t=global_1["__core-js_shared__"]||setGlobal("__core-js_shared__",{});(e.exports=function(e,r){return t[e]||(t[e]=void 0!==r?r:{})})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),functionToString=shared("native-function-to-string",Function.toString),WeakMap=global_1.WeakMap,nativeWeakMap="function"==typeof WeakMap&&/native code/.test(functionToString.call(WeakMap)),id=0,postfix=Math.random(),uid=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++id+postfix).toString(36)},keys=shared("keys"),sharedKey=function(e){return keys[e]||(keys[e]=uid(e))},hiddenKeys={},WeakMap$1=global_1.WeakMap,enforce=function(e){return has$1(e)?get(e):set(e,{})},getterFor=function(e){return function(t){var r;if(!isObject(t)||(r=get(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}};if(nativeWeakMap){var store=new WeakMap$1,wmget=store.get,wmhas=store.has,wmset=store.set;set=function(e,t){return wmset.call(store,e,t),t},get=function(e){return wmget.call(store,e)||{}},has$1=function(e){return wmhas.call(store,e)}}else{var STATE=sharedKey("state");hiddenKeys[STATE]=!0,set=function(e,t){return hide(e,STATE,t),t},get=function(e){return has(e,STATE)?e[STATE]:{}},has$1=function(e){return has(e,STATE)}}var internalState={set:set,get:get,has:has$1,enforce:enforce,getterFor:getterFor},redefine=createCommonjsModule((function(e){var t=internalState.get,r=internalState.enforce,n=String(functionToString).split("toString");shared("inspectSource",(function(e){return functionToString.call(e)})),(e.exports=function(e,t,o,i){var a=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,s=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||has(o,"name")||hide(o,"name",t),r(o).source=n.join("string"==typeof t?t:"")),e!==global_1?(a?!s&&e[t]&&(c=!0):delete e[t],c?e[t]=o:hide(e,t,o)):c?e[t]=o:setGlobal(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||functionToString.call(this)}))})),path=global_1,aFunction=function(e){return"function"==typeof e?e:void 0},getBuiltIn=function(e,t){return arguments.length<2?aFunction(path[e])||aFunction(global_1[e]):path[e]&&path[e][t]||global_1[e]&&global_1[e][t]},ceil=Math.ceil,floor=Math.floor,toInteger=function(e){return isNaN(e=+e)?0:(e>0?floor:ceil)(e)},min=Math.min,toLength=function(e){return e>0?min(toInteger(e),9007199254740991):0},max=Math.max,min$1=Math.min,toAbsoluteIndex=function(e,t){var r=toInteger(e);return r<0?max(r+t,0):min$1(r,t)},createMethod=function(e){return function(t,r,n){var o,i=toIndexedObject(t),a=toLength(i.length),c=toAbsoluteIndex(n,a);if(e&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((e||c in i)&&i[c]===r)return e||c||0;return!e&&-1}},arrayIncludes={includes:createMethod(!0),indexOf:createMethod(!1)},indexOf=arrayIncludes.indexOf,objectKeysInternal=function(e,t){var r,n=toIndexedObject(e),o=0,i=[];for(r in n)!has(hiddenKeys,r)&&has(n,r)&&i.push(r);for(;t.length>o;)has(n,r=t[o++])&&(~indexOf(i,r)||i.push(r));return i},enumBugKeys=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hiddenKeys$1=enumBugKeys.concat("length","prototype"),f$3=Object.getOwnPropertyNames||function(e){return objectKeysInternal(e,hiddenKeys$1)},objectGetOwnPropertyNames={f:f$3},f$4=Object.getOwnPropertySymbols,objectGetOwnPropertySymbols={f:f$4},ownKeys=getBuiltIn("Reflect","ownKeys")||function(e){var t=objectGetOwnPropertyNames.f(anObject(e)),r=objectGetOwnPropertySymbols.f;return r?t.concat(r(e)):t},copyConstructorProperties=function(e,t){for(var r=ownKeys(t),n=objectDefineProperty.f,o=objectGetOwnPropertyDescriptor.f,i=0;i<r.length;i++){var a=r[i];has(e,a)||n(e,a,o(t,a))}},replacement=/#|\.prototype\./,isForced=function(e,t){var r=data[normalize(e)];return r==POLYFILL||r!=NATIVE&&("function"==typeof t?fails(t):!!t)},normalize=isForced.normalize=function(e){return String(e).replace(replacement,".").toLowerCase()},data=isForced.data={},NATIVE=isForced.NATIVE="N",POLYFILL=isForced.POLYFILL="P",isForced_1=isForced,getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,_export=function(e,t){var r,n,o,i,a,c=e.target,s=e.global,u=e.stat;if(r=s?global_1:u?global_1[c]||setGlobal(c,{}):(global_1[c]||{}).prototype)for(n in t){if(i=t[n],o=e.noTargetGet?(a=getOwnPropertyDescriptor$1(r,n))&&a.value:r[n],!isForced_1(s?n:c+(u?".":"#")+n,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;copyConstructorProperties(i,o)}(e.sham||o&&o.sham)&&hide(i,"sham",!0),redefine(r,n,i,e)}},aFunction$1=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},bindContext=function(e,t,r){if(aFunction$1(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}},toObject=function(e){return Object(requireObjectCoercible(e))},isArray=Array.isArray||function(e){return"Array"==classofRaw(e)},nativeSymbol=!!Object.getOwnPropertySymbols&&!fails((function(){return!String(Symbol())})),Symbol$1=global_1.Symbol,store$1=shared("wks"),wellKnownSymbol=function(e){return store$1[e]||(store$1[e]=nativeSymbol&&Symbol$1[e]||(nativeSymbol?Symbol$1:uid)("Symbol."+e))},SPECIES=wellKnownSymbol("species"),arraySpeciesCreate=function(e,t){var r;return isArray(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!isArray(r.prototype)?isObject(r)&&null===(r=r[SPECIES])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)},push=[].push,createMethod$1=function(e){var t=1==e,r=2==e,n=3==e,o=4==e,i=6==e,a=5==e||i;return function(c,s,u,l){for(var f,p,h=toObject(c),d=indexedObject(h),y=bindContext(s,u,3),v=toLength(d.length),m=0,b=l||arraySpeciesCreate,g=t?b(c,v):r?b(c,0):void 0;v>m;m++)if((a||m in d)&&(p=y(f=d[m],m,h),e))if(t)g[m]=p;else if(p)switch(e){case 3:return!0;case 5:return f;case 6:return m;case 2:push.call(g,f)}else if(o)return!1;return i?-1:n||o?o:g}},arrayIteration={forEach:createMethod$1(0),map:createMethod$1(1),filter:createMethod$1(2),some:createMethod$1(3),every:createMethod$1(4),find:createMethod$1(5),findIndex:createMethod$1(6)},SPECIES$1=wellKnownSymbol("species"),arrayMethodHasSpeciesSupport=function(e){return!fails((function(){var t=[];return(t.constructor={})[SPECIES$1]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},$map=arrayIteration.map;_export({target:"Array",proto:!0,forced:!arrayMethodHasSpeciesSupport("map")},{map:function(e){return $map(this,e,arguments.length>1?arguments[1]:void 0)}});var TO_STRING_TAG=wellKnownSymbol("toStringTag"),CORRECT_ARGUMENTS="Arguments"==classofRaw(function(){return arguments}()),tryGet=function(e,t){try{return e[t]}catch(e){}},classof=function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tryGet(t=Object(e),TO_STRING_TAG))?r:CORRECT_ARGUMENTS?classofRaw(t):"Object"==(n=classofRaw(t))&&"function"==typeof t.callee?"Arguments":n},TO_STRING_TAG$1=wellKnownSymbol("toStringTag"),test={};test[TO_STRING_TAG$1]="z";var objectToString="[object z]"!==String(test)?function(){return"[object "+classof(this)+"]"}:test.toString,ObjectPrototype=Object.prototype;objectToString!==ObjectPrototype.toString&&redefine(ObjectPrototype,"toString",objectToString,{unsafe:!0});var nativePromiseConstructor=global_1.Promise,redefineAll=function(e,t,r){for(var n in t)redefine(e,n,t[n],r);return e},defineProperty=objectDefineProperty.f,TO_STRING_TAG$2=wellKnownSymbol("toStringTag"),setToStringTag=function(e,t,r){e&&!has(e=r?e:e.prototype,TO_STRING_TAG$2)&&defineProperty(e,TO_STRING_TAG$2,{configurable:!0,value:t})},SPECIES$2=wellKnownSymbol("species"),setSpecies=function(e){var t=getBuiltIn(e),r=objectDefineProperty.f;descriptors&&t&&!t[SPECIES$2]&&r(t,SPECIES$2,{configurable:!0,get:function(){return this}})},anInstance=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e},iterators={},ITERATOR=wellKnownSymbol("iterator"),ArrayPrototype=Array.prototype,isArrayIteratorMethod=function(e){return void 0!==e&&(iterators.Array===e||ArrayPrototype[ITERATOR]===e)},ITERATOR$1=wellKnownSymbol("iterator"),getIteratorMethod=function(e){if(null!=e)return e[ITERATOR$1]||e["@@iterator"]||iterators[classof(e)]},callWithSafeIterationClosing=function(e,t,r,n){try{return n?t(anObject(r)[0],r[1]):t(r)}catch(t){var o=e.return;throw void 0!==o&&anObject(o.call(e)),t}},iterate_1=createCommonjsModule((function(e){var t=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,r,n,o,i){var a,c,s,u,l,f,p=bindContext(r,n,o?2:1);if(i)a=e;else{if("function"!=typeof(c=getIteratorMethod(e)))throw TypeError("Target is not iterable");if(isArrayIteratorMethod(c)){for(s=0,u=toLength(e.length);u>s;s++)if((l=o?p(anObject(f=e[s])[0],f[1]):p(e[s]))&&l instanceof t)return l;return new t(!1)}a=c.call(e)}for(;!(f=a.next()).done;)if((l=callWithSafeIterationClosing(a,p,f.value,o))&&l instanceof t)return l;return new t(!1)}).stop=function(e){return new t(!0,e)}})),ITERATOR$2=wellKnownSymbol("iterator"),SAFE_CLOSING=!1;try{var called=0,iteratorWithReturn={next:function(){return{done:!!called++}},return:function(){SAFE_CLOSING=!0}};iteratorWithReturn[ITERATOR$2]=function(){return this},Array.from(iteratorWithReturn,(function(){throw 2}))}catch(e){}var defer,channel,port,checkCorrectnessOfIteration=function(e,t){if(!t&&!SAFE_CLOSING)return!1;var r=!1;try{var n={};n[ITERATOR$2]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r},SPECIES$3=wellKnownSymbol("species"),speciesConstructor=function(e,t){var r,n=anObject(e).constructor;return void 0===n||null==(r=anObject(n)[SPECIES$3])?t:aFunction$1(r)},html=getBuiltIn("document","documentElement"),location=global_1.location,set$1=global_1.setImmediate,clear=global_1.clearImmediate,process=global_1.process,MessageChannel=global_1.MessageChannel,Dispatch=global_1.Dispatch,counter=0,queue={},ONREADYSTATECHANGE="onreadystatechange",run=function(e){if(queue.hasOwnProperty(e)){var t=queue[e];delete queue[e],t()}},runner=function(e){return function(){run(e)}},listener=function(e){run(e.data)},post=function(e){global_1.postMessage(e+"",location.protocol+"//"+location.host)};set$1&&clear||(set$1=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return queue[++counter]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},defer(counter),counter},clear=function(e){delete queue[e]},"process"==classofRaw(process)?defer=function(e){process.nextTick(runner(e))}:Dispatch&&Dispatch.now?defer=function(e){Dispatch.now(runner(e))}:MessageChannel?(port=(channel=new MessageChannel).port2,channel.port1.onmessage=listener,defer=bindContext(port.postMessage,port,1)):!global_1.addEventListener||"function"!=typeof postMessage||global_1.importScripts||fails(post)?defer=ONREADYSTATECHANGE in documentCreateElement("script")?function(e){html.appendChild(documentCreateElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run(e)}}:function(e){setTimeout(runner(e),0)}:(defer=post,global_1.addEventListener("message",listener,!1)));var flush,head,last,notify,toggle,node,promise,then,task={set:set$1,clear:clear},userAgent=getBuiltIn("navigator","userAgent")||"",getOwnPropertyDescriptor$2=objectGetOwnPropertyDescriptor.f,macrotask=task.set,MutationObserver=global_1.MutationObserver||global_1.WebKitMutationObserver,process$1=global_1.process,Promise$1=global_1.Promise,IS_NODE="process"==classofRaw(process$1),queueMicrotaskDescriptor=getOwnPropertyDescriptor$2(global_1,"queueMicrotask"),queueMicrotask=queueMicrotaskDescriptor&&queueMicrotaskDescriptor.value;queueMicrotask||(flush=function(){var e,t;for(IS_NODE&&(e=process$1.domain)&&e.exit();head;){t=head.fn,head=head.next;try{t()}catch(e){throw head?notify():last=void 0,e}}last=void 0,e&&e.enter()},IS_NODE?notify=function(){process$1.nextTick(flush)}:MutationObserver&&!/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)?(toggle=!0,node=document.createTextNode(""),new MutationObserver(flush).observe(node,{characterData:!0}),notify=function(){node.data=toggle=!toggle}):Promise$1&&Promise$1.resolve?(promise=Promise$1.resolve(void 0),then=promise.then,notify=function(){then.call(promise,flush)}):notify=function(){macrotask.call(global_1,flush)});var Internal,OwnPromiseCapability,PromiseWrapper,nativeThen,microtask=queueMicrotask||function(e){var t={fn:e,next:void 0};last&&(last.next=t),head||(head=t,notify()),last=t},PromiseCapability=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n})),this.resolve=aFunction$1(t),this.reject=aFunction$1(r)},f$5=function(e){return new PromiseCapability(e)},newPromiseCapability={f:f$5},promiseResolve=function(e,t){if(anObject(e),isObject(t)&&t.constructor===e)return t;var r=newPromiseCapability.f(e);return(0,r.resolve)(t),r.promise},hostReportErrors=function(e,t){var r=global_1.console;r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t))},perform=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},task$1=task.set,SPECIES$4=wellKnownSymbol("species"),PROMISE="Promise",getInternalState=internalState.get,setInternalState=internalState.set,getInternalPromiseState=internalState.getterFor(PROMISE),PromiseConstructor=nativePromiseConstructor,TypeError$1=global_1.TypeError,document$2=global_1.document,process$2=global_1.process,$fetch=global_1.fetch,versions=process$2&&process$2.versions,v8=versions&&versions.v8||"",newPromiseCapability$1=newPromiseCapability.f,newGenericPromiseCapability=newPromiseCapability$1,IS_NODE$1="process"==classofRaw(process$2),DISPATCH_EVENT=!!(document$2&&document$2.createEvent&&global_1.dispatchEvent),UNHANDLED_REJECTION="unhandledrejection",REJECTION_HANDLED="rejectionhandled",PENDING=0,FULFILLED=1,REJECTED=2,HANDLED=1,UNHANDLED=2,FORCED=isForced_1(PROMISE,(function(){var e=PromiseConstructor.resolve(1),t=function(){},r=(e.constructor={})[SPECIES$4]=function(e){e(t,t)};return!((IS_NODE$1||"function"==typeof PromiseRejectionEvent)&&(!isPure||e.finally)&&e.then(t)instanceof r&&0!==v8.indexOf("6.6")&&-1===userAgent.indexOf("Chrome/66"))})),INCORRECT_ITERATION=FORCED||!checkCorrectnessOfIteration((function(e){PromiseConstructor.all(e).catch((function(){}))})),isThenable=function(e){var t;return!(!isObject(e)||"function"!=typeof(t=e.then))&&t},notify$1=function(e,t,r){if(!t.notified){t.notified=!0;var n=t.reactions;microtask((function(){for(var o=t.value,i=t.state==FULFILLED,a=0;n.length>a;){var c,s,u,l=n[a++],f=i?l.ok:l.fail,p=l.resolve,h=l.reject,d=l.domain;try{f?(i||(t.rejection===UNHANDLED&&onHandleUnhandled(e,t),t.rejection=HANDLED),!0===f?c=o:(d&&d.enter(),c=f(o),d&&(d.exit(),u=!0)),c===l.promise?h(TypeError$1("Promise-chain cycle")):(s=isThenable(c))?s.call(c,p,h):p(c)):h(o)}catch(e){d&&!u&&d.exit(),h(e)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&onUnhandled(e,t)}))}},dispatchEvent=function(e,t,r){var n,o;DISPATCH_EVENT?((n=document$2.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),global_1.dispatchEvent(n)):n={promise:t,reason:r},(o=global_1["on"+e])?o(n):e===UNHANDLED_REJECTION&&hostReportErrors("Unhandled promise rejection",r)},onUnhandled=function(e,t){task$1.call(global_1,(function(){var r,n=t.value;if(isUnhandled(t)&&(r=perform((function(){IS_NODE$1?process$2.emit("unhandledRejection",n,e):dispatchEvent(UNHANDLED_REJECTION,e,n)})),t.rejection=IS_NODE$1||isUnhandled(t)?UNHANDLED:HANDLED,r.error))throw r.value}))},isUnhandled=function(e){return e.rejection!==HANDLED&&!e.parent},onHandleUnhandled=function(e,t){task$1.call(global_1,(function(){IS_NODE$1?process$2.emit("rejectionHandled",e):dispatchEvent(REJECTION_HANDLED,e,t.value)}))},bind=function(e,t,r,n){return function(o){e(t,r,o,n)}},internalReject=function(e,t,r,n){t.done||(t.done=!0,n&&(t=n),t.value=r,t.state=REJECTED,notify$1(e,t,!0))},internalResolve=function(e,t,r,n){if(!t.done){t.done=!0,n&&(t=n);try{if(e===r)throw TypeError$1("Promise can't be resolved itself");var o=isThenable(r);o?microtask((function(){var n={done:!1};try{o.call(r,bind(internalResolve,e,n,t),bind(internalReject,e,n,t))}catch(r){internalReject(e,n,r,t)}})):(t.value=r,t.state=FULFILLED,notify$1(e,t,!1))}catch(r){internalReject(e,{done:!1},r,t)}}};FORCED&&(PromiseConstructor=function(e){anInstance(this,PromiseConstructor,PROMISE),aFunction$1(e),Internal.call(this);var t=getInternalState(this);try{e(bind(internalResolve,this,t),bind(internalReject,this,t))}catch(e){internalReject(this,t,e)}},(Internal=function(e){setInternalState(this,{type:PROMISE,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:PENDING,value:void 0})}).prototype=redefineAll(PromiseConstructor.prototype,{then:function(e,t){var r=getInternalPromiseState(this),n=newPromiseCapability$1(speciesConstructor(this,PromiseConstructor));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=IS_NODE$1?process$2.domain:void 0,r.parent=!0,r.reactions.push(n),r.state!=PENDING&&notify$1(this,r,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),OwnPromiseCapability=function(){var e=new Internal,t=getInternalState(e);this.promise=e,this.resolve=bind(internalResolve,e,t),this.reject=bind(internalReject,e,t)},newPromiseCapability.f=newPromiseCapability$1=function(e){return e===PromiseConstructor||e===PromiseWrapper?new OwnPromiseCapability(e):newGenericPromiseCapability(e)},"function"==typeof nativePromiseConstructor&&(nativeThen=nativePromiseConstructor.prototype.then,redefine(nativePromiseConstructor.prototype,"then",(function(e,t){var r=this;return new PromiseConstructor((function(e,t){nativeThen.call(r,e,t)})).then(e,t)})),"function"==typeof $fetch&&_export({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return promiseResolve(PromiseConstructor,$fetch.apply(global_1,arguments))}}))),_export({global:!0,wrap:!0,forced:FORCED},{Promise:PromiseConstructor}),setToStringTag(PromiseConstructor,PROMISE,!1),setSpecies(PROMISE),PromiseWrapper=path[PROMISE],_export({target:PROMISE,stat:!0,forced:FORCED},{reject:function(e){var t=newPromiseCapability$1(this);return t.reject.call(void 0,e),t.promise}}),_export({target:PROMISE,stat:!0,forced:FORCED},{resolve:function(e){return promiseResolve(this,e)}}),_export({target:PROMISE,stat:!0,forced:INCORRECT_ITERATION},{all:function(e){var t=this,r=newPromiseCapability$1(t),n=r.resolve,o=r.reject,i=perform((function(){var r=aFunction$1(t.resolve),i=[],a=0,c=1;iterate_1(e,(function(e){var s=a++,u=!1;i.push(void 0),c++,r.call(t,e).then((function(e){u||(u=!0,i[s]=e,--c||n(i))}),o)})),--c||n(i)}));return i.error&&o(i.value),r.promise},race:function(e){var t=this,r=newPromiseCapability$1(t),n=r.reject,o=perform((function(){var o=aFunction$1(t.resolve);iterate_1(e,(function(e){o.call(t,e).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}});var runtime_1=createCommonjsModule((function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return $()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=P(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?h:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",d={};function y(){}function v(){}function m(){}var b={};b[i]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(T([])));w&&w!==r&&n.call(w,i)&&(b=w);var O=m.prototype=y.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function S(e){var t;this._invoke=function(r,o){function i(){return new Promise((function(t,i){!function t(r,o,i,a){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return t("throw",e,i,a)}))}a(c.arg)}(r,o,t,i)}))}return t=t?t.then(i,i):i()}}function P(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function T(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:$}}function $(){return{value:t,done:!0}}return v.prototype=O.constructor=m,m.constructor=v,m[c]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},E(S.prototype),S.prototype[a]=function(){return this},e.AsyncIterator=S,e.async=function(t,r,n,o){var i=new S(s(t,r,n,o));return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(O),O[c]="Generator",O[i]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));function asyncGeneratorStep(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){asyncGeneratorStep(i,n,o,a,c,"next",e)}function c(e){asyncGeneratorStep(i,n,o,a,c,"throw",e)}a(void 0)}))}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ownKeys$1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys$1(r,!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys$1(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var awaited={props:{action:{type:[String,Promise,Function],required:!1},storeData:{type:[String,Array],required:!1},lazy:{type:Boolean,default:!1}},data:function(){return{resolved:!1,error:null,observer:null,target:null}},mounted:function(){assert(this.$store,"Vuex doesn't installed."),this.target=this.$refs.target,this.lazy?this.observe():this.run()},destroyed:function(){this.unobserve()},methods:{run:function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.action){e.next=3;break}return this.resolved=!0,e.abrupt("return");case 3:if(this.resolved=!1,e.prev=4,"string"!=typeof this.action){e.next=10;break}return e.next=8,this.$store.dispatch(this.action);case 8:e.next=18;break;case 10:if("function"!=typeof this.action){e.next=15;break}return e.next=13,this.action();case 13:e.next=18;break;case 15:if(!isPromise(this.action)){e.next=18;break}return e.next=18,this.action;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),this.error=e.t0;case 23:return e.prev=23,this.resolved=!0,e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[4,20,23,26]])})));return function(){return e.apply(this,arguments)}}(),observe:function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].intersectionRatio<=0||(e.unobserve(),e.run())})),this.observer.observe(this.target)},unobserve:function(){this.observer.unobserve(this.target)}},render:function(e){var t=this,r=null;return this.storeData&&(r=Array.isArray(this.storeData)?this.storeData.map((function(e){return t.$store.state[e]})):this.$store.state[this.storeData]),this.error?getSlot(this,e,"error",{error:this.error}):this.resolved?getSlot(this,e,"default",{data:r}):getSlot(this,e,"pending",{data:r})}};function getSlot(e,t,r,n){var o=e.$scopedSlots[r];return t("div",{ref:"target"},o?o(n):[])}function isPromise(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}function assert(e,t){if(!e)throw new Error("[vue-awaited] ".concat(t))}function awaitedComponent(e){var t,r=e.asyncComponent,n=e.loading,o=_objectWithoutProperties(e,["asyncComponent","loading"]);return function(){return _objectSpread2({component:new Promise((function(e){t=e})),loading:{mounted:(e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("IntersectionObserver"in window){e.next=3;break}return r().then(t),e.abrupt("return");case 3:(n=new IntersectionObserver((function(e){e[0].intersectionRatio<=0||(n.unobserve(o.$el),r().then(t))}))).observe(this.$el);case 5:case"end":return e.stop()}}),e,this)}))),function(){return e.apply(this,arguments)}),render:function(e){return n||e("div")}}},o);var e}}var index=function(e){return e.component("awaited",awaited)};exports.awaited=awaited,exports.awaitedComponent=awaitedComponent,exports.default=index;
