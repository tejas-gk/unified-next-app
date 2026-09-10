var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,ee,z,B,te,V,ne,re,ie,H,ae,oe,U,se,ce,le,ue,W,de,fe,pe,me,G,he,ge,_e,ve,K,ye,be,xe,Se,Ce,we,Te,q,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,J,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn=e((()=>{i={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},a={duration:.5,overwrite:!1,delay:0},l=1e8,u=1/l,d=Math.PI*2,f=d/4,p=0,m=Math.sqrt,h=Math.cos,g=Math.sin,_=function(e){return typeof e==`string`},v=function(e){return typeof e==`function`},y=function(e){return typeof e==`number`},b=function(e){return e===void 0},x=function(e){return typeof e==`object`},S=function(e){return e!==!1},C=function(){return typeof window<`u`},w=function(e){return v(e)||_(e)},T=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},E=Array.isArray,D=/random\([^)]+\)/g,O=/,\s*/g,k=/(?:-?\.?\d|\.)+/gi,A=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,j=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,M=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,N=/[+-]=-?[.\d]+/,P=/[^,'"\[\]\s]+/gi,F=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,z={},B={},V=function(e){return(B=De(e,z))&&Kn},ne=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},re=function(e,t){return!t&&console.warn(e)},ie=function(e,t){return e&&(z[e]=t)&&B&&(B[e]=t)||z},H=function(){return 0},ae={suppressEvents:!0,isStart:!0,kill:!1},oe={suppressEvents:!0,kill:!1},U={suppressEvents:!0},se={},ce=[],le={},W={},de={},fe=30,pe=[],me=``,G=function(e){var t=e[0],n,r;if(x(t)||v(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=pe.length;r--&&!pe[r].targetTest(t););n=pe[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new tn(e[r],n)))||e.splice(r,1);return e},he=function(e){return e._gsap||G(ut(e))[0]._gsap},ge=function(e,t,n){return(n=e[t])&&v(n)?e[t]():b(n)&&e.getAttribute&&e.getAttribute(t)||n},_e=function(e,t){return(e=e.split(`,`)).forEach(t)||e},ve=function(e){return Math.round(e*1e5)/1e5||0},K=function(e){return Math.round(e*1e7)/1e7||0},ye=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},be=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},xe=function(){var e=ce.length,t=ce.slice(0),n,r;for(le={},ce.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Se=function(e){return!!(e._initted||e._startAt||e.add)},Ce=function(e,t,n,r){ce.length&&!s&&xe(),e.render(t,n,r||!!(s&&t<0&&Se(e))),ce.length&&!s&&xe()},we=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(P).length<2?t:_(e)?e.trim():e},Te=function(e){return e},q=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ee=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},De=function(e,t){for(var n in t)e[n]=t[n];return e},Oe=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=x(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},ke=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ae=function(e){var t=e.parent||I,n=e.keyframes?Ee(E(e.keyframes)):q;if(S(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},je=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Me=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ne=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Pe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fe=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ie=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Le=function(e,t,n,r){return e._startAt&&(s?e._startAt.revert(oe):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Re=function e(t){return!t||t._ts&&e(t.parent)},ze=function(e){return e._repeat?Be(e._tTime,e=e.duration()+e._rDelay)*e:0},Be=function(e,t){var n=Math.floor(e=K(e/t));return e&&n===e?n-1:n},Ve=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},He=function(e){return e._end=K(e._start+(e._tDur/Math.abs(e._ts||e._rts||u)||0))},Ue=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=K(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),He(e),n._dirty||Fe(n,e)),e},We=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ve(e.rawTime(),t),(!t._dur||it(0,t.totalDuration(),n)-t._tTime>u)&&t.render(n,!0)),Fe(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-u}},Ge=function(e,t,n,r){return t.parent&&Pe(t),t._start=K((y(n)?n:n||e!==I?tt(e,n,t):e._time)+t._delay),t._end=K(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Me(e,t,`_first`,`_last`,e._sort?`_start`:0),Ye(t)||(e._recent=t),r||We(e,t),e._ts<0&&Ue(e,e._tTime),e},Ke=function(e,t){return(z.ScrollTrigger||ne(`scrollTrigger`,t))&&z.ScrollTrigger.create(t,e)},qe=function(e,t,n,r,i){if(dn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!s&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ue!==Ht.frame)return ce.push(e),e._lazy=[i,r],1},Je=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Ye=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Xe=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Je(e)&&!(!e._initted&&Ye(e))||(e._ts<0||e._dp._ts<0)&&!Ye(e))?0:1,o=e._rDelay,c=0,l,d,f;if(o&&e._repeat&&(c=it(0,e._tDur,t),d=Be(c,o),e._yoyo&&d&1&&(a=1-a),d!==Be(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||s||r||e._zTime===u||!t&&e._zTime){if(!e._initted&&qe(e,t,r,n,c))return;for(f=e._zTime,e._zTime=t||(n?u:0),n||=t&&!f,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Le(e,t,n,!0),e._onUpdate&&!n&&Dt(e,`onUpdate`),c&&e._repeat&&!n&&e.parent&&Dt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Pe(e,1),!n&&!s&&(Dt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Ze=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Qe=function(e,t,n,r){var i=e._repeat,a=K(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:K(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Ue(e,e._tTime=e._tDur*o),e.parent&&He(e),n||Fe(e.parent,e),e},$e=function(e){return e instanceof rn?Fe(e):Qe(e,e._dur)},et={_start:0,endTime:H,totalDuration:H},tt=function e(t,n,r){var i=t.labels,a=t._recent||et,o=t.duration()>=l?a.endTime(!1):t._dur,s,c,u;return _(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),u=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),u&&r&&(c=c/100*(E(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},nt=function(e,t,n){var r=y(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=S(s.vars.inherit)&&s.parent;a.immediateRender=S(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new vn(t[0],a,t[i+1])},rt=function(e,t){return e||e===0?t(e):t},it=function(e,t,n){return n<e?e:n>t?t:n},at=function(e,t){return!_(e)||!(t=F.exec(e))?``:t[1]},ot=function(e,t,n){return rt(n,function(n){return it(e,t,n)})},st=[].slice,ct=function(e,t){return e&&x(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&x(e[0]))&&!e.nodeType&&e!==L},lt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return _(e)&&!t||ct(e,1)?(r=n).push.apply(r,ut(e)):n.push(e)})||n},ut=function(e,t,n){return c&&!t&&c.selector?c.selector(e):_(e)&&!n&&(R||!Ut())?st.call((t||ee).querySelectorAll(e),0):E(e)?lt(e,n):ct(e)?st.call(e,0):e?[e]:[]},dt=function(e){return e=ut(e)[0]||re(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return ut(t,n.querySelectorAll?n:n===e?re(`Invalid scope`)||ee.createElement(`div`):e)}},ft=function(e){return e.sort(function(){return .5-Math.random()})},pt=function(e){if(v(e))return e;var t=x(e)?e:{each:e},n=Xt(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,u=r,d=r;return _(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(u=r[0],d=r[1]),function(e,o,f){var p=(f||t).length,h=a[p],g,_,v,y,b,x,S,C,w;if(!h){if(w=t.grid===`auto`?0:(t.grid||[1,l])[1],!w){for(S=-l;S<(S=f[w++].getBoundingClientRect().left)&&w<p;);w<p&&w--}for(h=a[p]=[],g=s?Math.min(w,p)*u-.5:r%w,_=w===l?0:s?p*d/w-.5:r/w|0,S=0,C=l,x=0;x<p;x++)v=x%w-g,y=_-(x/w|0),h[x]=b=c?Math.abs(c===`y`?y:v):m(v*v+y*y),b>S&&(S=b),b<C&&(C=b);r===`random`&&ft(h),h.max=S-C,h.min=C,h.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(w>p?p-1:c?c===`y`?p/w:w:Math.max(w,p/w))||0)*(r===`edges`?-1:1),h.b=p<0?i-p:i,h.u=at(t.amount||t.each)||0,n=n&&p<0?Yt(n):n}return p=(h[e]-h.min)/h.max||0,K(h.b+(n?n(p):p)*h.v)+h.u}},mt=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=K(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(y(n)?0:at(n))}},ht=function(e,t){var n=E(e),r,i;return!n&&x(e)&&(r=n=e.radius||l,e.values?(e=ut(e.values),(i=!y(e[0]))&&(r*=r)):e=mt(e.increment)),rt(t,n?v(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=l,s=0,c=e.length,u,d;c--;)i?(u=e[c].x-n,d=e[c].y-a,u=u*u+d*d):u=Math.abs(e[c]-n),u<o&&(o=u,s=c);return s=!r||o<=r?e[s]:t,i||s===t||y(t)?s:s+at(t)}:mt(e))},gt=function(e,t,n,r){return rt(E(e)?!t:n===!0?!!(n=0):!r,function(){return E(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},_t=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},vt=function(e,t){return function(n){return e(parseFloat(n))+(t||at(n))}},yt=function(e,t,n){return wt(e,t,0,1,n)},bt=function(e,t,n){return rt(n,function(n){return e[~~t(n)]})},xt=function e(t,n,r){var i=n-t;return E(t)?bt(t,e(0,t.length),n):rt(r,function(e){return(i+(e-t)%i)%i+t})},St=function e(t,n,r){var i=n-t,a=i*2;return E(t)?bt(t,e(0,t.length-1),n):rt(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Ct=function(e){return e.replace(D,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(O);return gt(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},wt=function(e,t,n,r,i){var a=t-e,o=r-n;return rt(i,function(t){return n+((t-e)/a*o||0)})},Tt=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=_(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(E(t)&&!E(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=De(E(t)?[]:{},t));if(!u){for(c in n)on.call(s,t,c,`get`,n[c]);a=function(e){return Dn(e,s)||(o?t.p:t)}}}return rt(r,a)},Et=function(e,t,n){var r=e.labels,i=l,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},Dt=function(e,t,n){var r=e.vars,i=r[t],a=c,o=e._ctx,s,l,u;if(i)return s=r[t+`Params`],l=r.callbackScope||e,n&&ce.length&&xe(),o&&(c=o),u=s?i.apply(l,s):i.call(l),c=a,u},Ot=function(e){return Pe(e),e.scrollTrigger&&e.scrollTrigger.kill(!!s),e.progress()<1&&Dt(e,`onInterrupt`),e},At=[],jt=function(e){if(e)if(e=!e.name&&e.default||e,C()||e.headless){var t=e.name,n=v(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:H,render:Dn,add:on,kill:kn,modifier:On,rawVars:0},a={targetTest:0,get:0,getSetter:Cn,aliases:{},register:0};if(Ut(),e!==r){if(W[t])return;q(r,q(ke(e,i),a)),De(r.prototype,De(i,ke(e,a))),W[r.prop=t]=r,e.targetTest&&(pe.push(r),se[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}ie(t,r),e.register&&e.register(Kn,r,Mn)}else At.push(e)},Mt=255,Nt={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Pt=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},Ft=function(e,t,n){var r=e?y(e)?[e>>16,e>>8&Mt,e&Mt]:0:Nt.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Nt[e])r=Nt[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Mt,r&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(k),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Pt(s+1/3,i,a),r[1]=Pt(s,i,a),r[2]=Pt(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(A),n&&r.length<4&&(r[3]=1),r}else r=e.match(k)||Nt.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Mt,a=r[1]/Mt,o=r[2]/Mt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},It=function(e){var t=[],n=[],r=-1;return e.split(Rt).forEach(function(e){var i=e.match(j)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Lt=function(e,t,n){var r=``,i=(e+r).match(Rt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Ft(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=It(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Rt,`1`).split(j),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Rt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Rt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Nt)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),zt=/hsl[a]?\(/,Bt=function(e){var t=e.join(` `),n;if(Rt.lastIndex=0,Rt.test(t))return n=zt.test(t),e[1]=Lt(e[1],n),e[0]=Lt(e[0],n,It(e[1])),!0},Ht=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){te&&(!R&&C()&&(L=R=window,ee=L.document||{},z.gsap=Kn,(L.gsapVersions||=[]).push(Kn.version),V(B||L.GreenSockGlobals||!L.gsap&&L||{}),At.forEach(jt)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Vt=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Vt=0,l=H},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Ut(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Ut=function(){return!Vt&&Ht.wake()},J={},Wt=/^[\d.\-M][\d.\-,\s]/,Gt=/["']/g,Kt=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Gt,``).trim():+c,r=s.substr(o+1).trim();return t},qt=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Jt=function(e){var t=(e+``).split(`(`),n=J[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Kt(t[1])]:qt(e).split(`,`).map(we)):J._CE&&Wt.test(e)?J._CE(``,e):n},Yt=function(e){return function(t){return 1-e(1-t)}},Xt=function(e,t){return e&&(v(e)?e:J[e]||Jt(e))||t},Zt=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return _e(e,function(e){for(var t in J[e]=z[e]=i,J[a=e.toLowerCase()]=n,i)J[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=J[e+`.`+t]=i[t]}),i},Qt=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$t=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/d*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*g((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Qt(s);return a=d/a,c.config=function(n,r){return e(t,n,r)},c},en=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Qt(r);return i.config=function(n){return e(t,n)},i},_e(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Zt(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),J.Linear.easeNone=J.none=J.Linear.easeIn,Zt(`Elastic`,$t(`in`),$t(`out`),$t()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Zt(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Zt(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Zt(`Circ`,function(e){return-(m(1-e*e)-1)}),Zt(`Sine`,function(e){return e===1?1:-h(e*f)+1}),Zt(`Back`,en(`in`),en(`out`),en()),J.SteppedEase=J.steps=z.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-u;return function(e){return((r*it(0,a,e)|0)+i)*n}}},a.ease=J[`quad.out`],_e(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return me+=e+`,`+e+`Params,`}),tn=function(e,t){this.id=p++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ge,this.set=t?t.getSetter:Cn},nn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qe(this,+e.duration,1,1),this.data=e.data,c&&(this._ctx=c,c.data.push(this)),Vt||Ht.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Qe(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Ut(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ue(this,e),!n._dp||n.parent||We(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Ge(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===u||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Ce(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+ze(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+ze(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Be(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-u?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Ve(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-u?0:this._rts,this.totalTime(it(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),He(this),Ie(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ut(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==u&&(this._tTime-=u)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=K(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Ge(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(S(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ve(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=U);var t=s;return s=e,Se(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),s=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,$e(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,$e(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(tt(this,e),S(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,S(t)),this._dur||(this._zTime=-u),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-u:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-u,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-u)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=v(e)?e:Te,a=function(){var e=t.then;t.then=null,n&&n(),v(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Ot(this)},e}(),q(nn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-u,_prom:0,_ps:!1,_rts:1}),rn=function(e){r(t,e);function t(t,r){var i;return t===void 0&&(t={}),i=e.call(this,t)||this,i.labels={},i.smoothChildTiming=!!t.smoothChildTiming,i.autoRemoveChildren=!!t.autoRemoveChildren,i._sort=S(t.sortChildren),I&&Ge(t.parent||I,n(i),r),t.reversed&&i.reverse(),t.paused&&i.paused(!0),t.scrollTrigger&&Ke(n(i),t.scrollTrigger),i}var a=t.prototype;return a.to=function(e,t,n){return nt(0,arguments,this),this},a.from=function(e,t,n){return nt(1,arguments,this),this},a.fromTo=function(e,t,n,r){return nt(2,arguments,this),this},a.set=function(e,t,n){return t.duration=0,t.parent=this,Ae(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new vn(e,t,tt(this,n),1),this},a.call=function(e,t,n){return Ge(this,vn.delayedCall(0,e,t),n)},a.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new vn(e,n,tt(this,i)),this},a.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Ae(n).immediateRender=S(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},a.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Ae(r).immediateRender=S(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},a.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:K(e),c=this._zTime<0!=e<0&&(this._initted||!a),l,d,f,p,m,h,g,_,v,y,b,x;if(this!==I&&o>i&&e>=0&&(o=i),o!==this._tTime||n||c){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),l=o,v=this._start,_=this._ts,h=!_,c&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(b=this._yoyo,m=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(m*100+e,t,n);if(l=K(o%m),o===i?(p=this._repeat,l=a):(y=K(o/m),p=~~y,p&&p===y&&(l=a,p--),l>a&&(l=a)),y=Be(this._tTime,m),!r&&this._tTime&&y!==p&&this._tTime-y*m-this._dur<=0&&(y=p),b&&p&1&&(l=a-l,x=1),p!==y&&!this._lock){var S=b&&y&1,C=S===(b&&p&1);if(p<y&&(S=!S),r=S?0:o%a?a:o,this._lock=1,this.render(r||(x?0:K(p*m)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&Dt(this,`onRepeat`),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,y=p),r&&r!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,C&&(this._lock=2,r=S?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!h))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=Ze(this,K(r),K(l)),g&&(o-=l-(l=g._start))),this._tTime=o,this._time=l,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!y&&(Dt(this,`onStart`),this._tTime!==o))return this;if(l>=r&&e>=0)for(d=this._first;d;){if(f=d._next,(d._act||l>=d._start)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(l-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(l-d._start)*d._ts,t,n),l!==this._time||!this._ts&&!h){g=0,f&&(o+=this._zTime=-u);break}}d=f}else{d=this._last;for(var w=e<0?e:l;d;){if(f=d._prev,(d._act||w<=d._end)&&d._ts&&g!==d){if(d.parent!==this)return this.render(e,t,n);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,t,n||s&&Se(d)),l!==this._time||!this._ts&&!h){g=0,f&&(o+=this._zTime=w?-u:u);break}}d=f}}if(g&&!t&&(this.pause(),g.render(l>=r?0:-u)._zTime=l>=r?1:-1,this._ts))return this._start=v,He(this),this.render(e,t,n);this._onUpdate&&!t&&Dt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(v===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Pe(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(Dt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},a.add=function(e,t){var n=this;if(y(t)||(t=tt(this,t,e)),!(e instanceof nn)){if(E(e))return e.forEach(function(e){return n.add(e,t)}),this;if(_(e))return this.addLabel(e,t);if(v(e))e=vn.delayedCall(0,e);else return this}return this===e?this:Ge(this,e,t)},a.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-l);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof vn?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},a.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},a.remove=function(e){return _(e)?this.removeLabel(e):v(e)?this.killTweensOf(e):(e.parent===this&&Ne(this,e),e===this._recent&&(this._recent=this._last),Fe(this))},a.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=K(Ht.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},a.addLabel=function(e,t){return this.labels[e]=tt(this,t),this},a.removeLabel=function(e){return delete this.labels[e],this},a.addPause=function(e,t,n){var r=vn.delayedCall(0,t||H,n);return r.data=`isPause`,this._hasPause=1,Ge(this,r,tt(this,e))},a.removePause=function(e){var t=this._first;for(e=tt(this,e);t;)t._start===e&&t.data===`isPause`&&Pe(t),t=t._next},a.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)ln!==r[i]&&r[i].kill(e,t);return this},a.getTweensOf=function(e,t){for(var n=[],r=ut(e),i=this._first,a=y(t),o;i;)i instanceof vn?be(i._targets,r)&&(a?(!ln||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},a.tweenTo=function(e,t){t||={};var n=this,r=tt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,d=vn.to(n,q({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||u,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());d._dur!==e&&Qe(d,e,0,1).render(d._time,!0,!0),l=1}o&&o.apply(d,s||[])}},t));return c?d.render(0):d},a.tweenFromTo=function(e,t,n){return this.tweenTo(t,q({startAt:{time:tt(this,e)}},n))},a.recent=function(){return this._recent},a.nextLabel=function(e){return e===void 0&&(e=this._time),Et(this,tt(this,e))},a.previousLabel=function(e){return e===void 0&&(e=this._time),Et(this,tt(this,e),1)},a.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+u)},a.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=K(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Fe(this)},a.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},a.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Fe(this)},a.totalDuration=function(e){var t=0,n=this,r=n._last,i=l,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Ge(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=K(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Qe(n,n===I&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(I._ts&&(Ce(I,Ve(e,I)),ue=Ht.frame),Ht.frame>=fe){fe+=i.autoSleep||120;var t=I._first;if((!t||!t._ts)&&i.autoSleep&&Ht._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Ht.sleep()}}},t}(nn),q(rn.prototype,{_lock:0,_hasPause:0,_forcing:0}),an=function(e,t,n,r,i,a,o){var s=new Mn(this._pt,e,t,0,1,En,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Ct(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(M)||[];u=M.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?ye(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=M.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(N.test(r)||g)&&(s.e=0),this._pt=s,s},on=function(e,t,n,r,a,o,s,c,l,u){v(r)&&(r=r(a||0,e,o));var d=e[t],f=n===`get`?v(d)?l?e[t.indexOf(`set`)||!v(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](l):e[t]():d:n,p=v(d)?l?xn:bn:yn,m;if(_(r)&&(~r.indexOf(`random(`)&&(r=Ct(r)),r.charAt(1)===`=`&&(m=ye(f,r)+(at(f)||0),(m||m===0)&&(r=m))),!u||f!==r||un)return!isNaN(f*r)&&r!==``?(m=new Mn(this._pt,e,t,+f||0,r-(f||0),typeof d==`boolean`?Tn:wn,0,p),l&&(m.fp=l),s&&m.modifier(s,this,e),this._pt=m):(!d&&!(t in e)&&ne(t,r),an.call(this,e,t,f,r,p,c||i.stringFilter,l))},sn=function(e,t,n,r,i){if(v(e)&&(e=hn(e,i,t,n,r)),!x(e)||e.style&&e.nodeType||E(e)||T(e))return _(e)?hn(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=hn(e[o],i,t,n,r);return a},cn=function(e,t,n,r,i,a){var o,s,c,l;if(W[e]&&(o=new W[e]).init(i,o.rawVars?t[e]:sn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Mn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==kt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},dn=function e(t,n,r){var i=t.vars,c=i.ease,d=i.startAt,f=i.immediateRender,p=i.lazy,m=i.onUpdate,h=i.runBackwards,g=i.yoyoEase,_=i.keyframes,v=i.autoRevert,y=t._dur,b=t._startAt,x=t._targets,C=t.parent,w=C&&C.data===`nested`?C.vars.targets:x,T=t._overwrite===`auto`&&!o,E=t.timeline,D=i.easeReverse||g,O,k,A,j,M,N,P,F,L,R,ee,z,B;if(E&&(!_||!c)&&(c=`none`),t._ease=Xt(c,a.ease),t._rEase=D&&(Xt(D)||t._ease),t._from=!E&&!!i.runBackwards,t._from&&(t.ratio=1),!E||_&&!i.stagger){if(F=x[0]?he(x[0]).harness:0,z=F&&i[F.prop],O=ke(i,se),b&&(b._zTime<0&&b.progress(1),n<0&&h&&f&&!v?b.render(-1,!0):b.revert(h&&y?oe:ae),b._lazy=0),d){if(Pe(t._startAt=vn.set(x,q({data:`isStart`,overwrite:!1,parent:C,immediateRender:!0,lazy:!b&&S(p),startAt:null,delay:0,onUpdate:m&&function(){return Dt(t,`onUpdate`)},stagger:0},d))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(s||!f&&!v)&&t._startAt.revert(oe),f&&y&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(h&&y&&!b){if(n&&(f=!1),A=q({overwrite:!1,data:`isFromStart`,lazy:f&&!b&&S(p),immediateRender:f,stagger:0,parent:C},O),z&&(A[F.prop]=z),Pe(t._startAt=vn.set(x,A)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(s?t._startAt.revert(oe):t._startAt.render(-1,!0)),t._zTime=n,!f)e(t._startAt,u,u);else if(!n)return}for(t._pt=t._ptCache=0,p=y&&S(p)||p&&!y,k=0;k<x.length;k++){if(M=x[k],P=M._gsap||G(x)[k]._gsap,t._ptLookup[k]=R={},le[P.id]&&ce.length&&xe(),ee=w===x?k:w.indexOf(M),F&&(L=new F).init(M,z||O,t,ee,w)!==!1&&(t._pt=j=new Mn(t._pt,M,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(e){R[e]=j}),L.priority&&(N=1)),!F||z)for(A in O)W[A]&&(L=cn(A,O,t,ee,M,w))?L.priority&&(N=1):R[A]=j=on.call(t,M,A,`get`,O[A],ee,w,0,i.stringFilter);t._op&&t._op[k]&&t.kill(M,t._op[k]),T&&t._pt&&(ln=t,I.killTweensOf(M,R,t.globalTime(n)),B=!t.parent,ln=0),t._pt&&p&&(le[P.id]=1)}N&&jn(t),t._onInit&&t._onInit(t)}t._onUpdate=m,t._initted=(!t._op||t._pt)&&!B,_&&n<=0&&E.render(l,!0,!0)},fn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return un=1,e.vars[t]=`+=0`,dn(e,o),un=0,s?re(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=ve(n)+at(u.e),u.b&&=l.s+at(u.b)},pn=function(e,t){var n=e[0]?he(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=De({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},mn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(E(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},hn=function(e,t,n,r,i){return v(e)?e.call(t,n,r,i):_(e)&&~e.indexOf(`random(`)?Ct(e):e},gn=me+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,_n={},_e(gn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return _n[e]=1}),vn=function(e){r(t,e);function t(t,r,a,s){var c;typeof r==`number`&&(a.duration=r,r=a,a=null),c=e.call(this,s?r:Ae(r))||this;var l=c.vars,d=l.duration,f=l.delay,p=l.immediateRender,m=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,v=l.scrollTrigger,b=r.parent||I,C=(E(t)||T(t)?y(t[0]):`length`in r)?[t]:ut(t),D,O,k,A,j,M,N,P;if(c._targets=C.length?G(C):re(`GSAP target `+t+` not found. https://gsap.com`,!i.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=h,g||m||w(d)||w(f)){r=c.vars;var F=r.easeReverse||r.yoyoEase;if(D=c.timeline=new rn({data:`nested`,defaults:_||{},targets:b&&b.data===`nested`?b.vars.targets:C}),D.kill(),D.parent=D._dp=n(c),D._start=0,m||w(d)||w(f)){if(A=C.length,N=m&&pt(m),x(m))for(j in m)~gn.indexOf(j)&&(P||={},P[j]=m[j]);for(O=0;O<A;O++)k=ke(r,_n),k.stagger=0,F&&(k.easeReverse=F),P&&De(k,P),M=C[O],k.duration=+hn(d,n(c),O,M,C),k.delay=(+hn(f,n(c),O,M,C)||0)-c._delay,!m&&A===1&&k.delay&&(c._delay=f=k.delay,c._start+=f,k.delay=0),D.to(M,k,N?N(O,M,C):0),D._ease=J.none;D.duration()?d=f=0:c.timeline=0}else if(g){Ae(q(D.vars.defaults,{ease:`none`})),D._ease=Xt(g.ease||r.ease||`none`);var L=0,R,ee,z;if(E(g))g.forEach(function(e){return D.to(C,e,`>`)}),D.duration();else{for(j in k={},g)j===`ease`||j===`easeEach`||mn(j,g[j],k,g.easeEach);for(j in k)for(R=k[j].sort(function(e,t){return e.t-t.t}),L=0,O=0;O<R.length;O++)ee=R[O],z={ease:ee.e,duration:(ee.t-(O?R[O-1].t:0))/100*d},z[j]=ee.v,D.to(C,z,L),L+=z.duration;D.duration()<d&&D.to({},{duration:d-D.duration()})}}d||c.duration(d=D.duration())}else c.timeline=0;return h===!0&&!o&&(ln=n(c),I.killTweensOf(C),ln=0),Ge(b,n(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(p||!d&&!g&&c._start===K(b._time)&&S(p)&&Re(n(c))&&b.data!==`nested`)&&(c._tTime=-u,c.render(Math.max(0,-f)||0)),v&&Ke(n(c),v),c}var a=t.prototype;return a.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-u&&!o?i:e<u?0:e,c,l,d,f,p,m,h,g;if(!a)Xe(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,g=this.timeline,this._repeat){if(f=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(f*100+e,t,n);if(c=K(s%f),s===i?(d=this._repeat,c=a):(p=K(s/f),d=~~p,d&&d===p?(c=a,d--):c>a&&(c=a)),m=this._yoyo&&d&1,m&&(c=a-c),p=Be(this._tTime,f),c===r&&!n&&this._initted&&d===p)return this._tTime=s,this;d!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&c!==f&&this._initted&&(this._lock=n=1,this.render(K(f*d),!0).invalidate()._lock=0)}if(!this._initted){if(qe(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&d!==p))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var _=c<r;if(_!==this._inv){var v=_?r:a-r;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=v?(_?-1:1)/v:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=h=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=h=this._ease(c/a);if(this._from&&(this.ratio=h=1-h),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!p&&(Dt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(h,l.d),l=l._next;g&&g.render(e<0?e:g._dur*g._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Le(this,e,t,n),Dt(this,`onUpdate`)),this._repeat&&d!==p&&this.vars.onRepeat&&!t&&this.parent&&Dt(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Le(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Pe(this,1),!t&&!(o&&!r)&&(s||r||m)&&(Dt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},a.targets=function(){return this._targets},a.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},a.resetTo=function(e,t,n,r,i){Vt||Ht.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||dn(this,a),o=this._ease(a/this._dur),fn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Ue(this,0),this.parent||Me(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},a.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Ot(this):this.scrollTrigger&&this.scrollTrigger.kill(!!s),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,ln&&ln.vars.overwrite!==!0)._first||Ot(this),this.parent&&n!==this.timeline.totalDuration()&&Qe(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?ut(e):r,a=this._ptLookup,o=this._pt,c,l,u,d,f,p,m;if((!t||t===`all`)&&je(r,i))return t===`all`&&(this._pt=0),Ot(this);for(c=this._op=this._op||[],t!==`all`&&(_(t)&&(f={},_e(t,function(e){return f[e]=1}),t=f),t=pn(r,t)),m=r.length;m--;)if(~i.indexOf(r[m]))for(f in l=a[m],t===`all`?(c[m]=t,d=l,u={}):(u=c[m]=c[m]||{},d=t),d)p=l&&l[f],p&&((!(`kill`in p.d)||p.d.kill(f)===!0)&&Ne(this,p,`_pt`),delete l[f]),u!==`all`&&(u[f]=1);return this._initted&&!this._pt&&o&&Ot(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return nt(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return nt(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return I.killTweensOf(e,t,n)},t}(nn),q(vn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_e(`staggerTo,staggerFrom,staggerFromTo`,function(e){vn[e]=function(){var t=new rn,n=st.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}}),yn=function(e,t,n){return e[t]=n},bn=function(e,t,n){return e[t](n)},xn=function(e,t,n,r){return e[t](r.fp,n)},Sn=function(e,t,n){return e.setAttribute(t,n)},Cn=function(e,t){return v(e[t])?bn:b(e[t])&&e.setAttribute?Sn:yn},wn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Tn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},En=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Dn=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},On=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},kn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ne(this,t,`_pt`):t.dep||(n=1),t=r;return!n},An=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},jn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Mn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||wn,this.d=o||this,this.set=s||yn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=An,this.m=e,this.mt=n,this.tween=t},e}(),_e(me+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return se[e]=1}),z.TweenMax=z.TweenLite=vn,z.TimelineLite=z.TimelineMax=rn,I=new rn({sortChildren:!1,defaults:a,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),i.stringFilter=Bt,Nn=[],Pn={},Fn=[],In=0,Ln=0,Rn=function(e){return(Pn[e]||Fn).map(function(e){return e()})},zn=function(){var e=Date.now(),t=[];e-In>2&&(Rn(`matchMediaInit`),Nn.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=L.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Rn(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),In=e,Rn(`matchMedia`))},Bn=function(){function e(e,t){this.selector=t&&dt(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Ln++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){v(e)&&(n=t,t=e,e=v);var r=this,i=function(){var e=c,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=dt(n)),c=r,a=t.apply(r,arguments),v(a)&&r._r.push(a),c=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===v?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=c;c=null,e(this),c=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof vn&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof rn?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof vn)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Nn.length;r--;)Nn[r].id===this.id&&Nn.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Vn=function(){function e(e){this.contexts=[],this.scope=e,c&&c.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){x(e)||(e={matches:e});var r=new Bn(0,n||this.scope),i=r.conditions={},a,o,s;for(o in c&&!r.selector&&(r.selector=c.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=L.matchMedia(e[o]),a&&(Nn.indexOf(r)<0&&Nn.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(zn):a.addEventListener(`change`,zn)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Hn={registerPlugin:function(){[...arguments].forEach(function(e){return jt(e)})},timeline:function(e){return new rn(e)},getTweensOf:function(e,t){return I.getTweensOf(e,t)},getProperty:function(e,t,n,r){_(e)&&(e=ut(e)[0]);var i=he(e||{}).get,a=n?Te:we;return n===`native`&&(n=``),e&&(t?a((W[t]&&W[t].get||i)(e,t,n,r)):function(t,n,r){return a((W[t]&&W[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=ut(e),e.length>1){var r=e.map(function(e){return Kn.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=W[t],o=he(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;kt._pt=0,r.init(e,n?t+n:t,kt,0,[e]),r.render(1,r),kt._pt&&Dn(1,kt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Kn.to(e,q((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return I.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xt(e.ease,a.ease)),Oe(a,e||{})},config:function(e){return Oe(i,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!W[e]&&!z[e]&&re(t+` effect requires `+e+` plugin.`)}),de[t]=function(e,t,r){return n(ut(e),q(t||{},i),r)},a&&(rn.prototype[t]=function(e,n,r){return this.add(de[t](e,x(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){J[e]=Xt(t)},parseEase:function(e,t){return arguments.length?Xt(e,t):J},getById:function(e){return I.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new rn(e),r,i;for(n.smoothChildTiming=S(e.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,(t||!(!r._dur&&r instanceof vn&&r.vars.onComplete===r._targets[0]))&&Ge(n,r,r._start-r._delay),r=i;return Ge(I,n,0),n},context:function(e,t){return e?new Bn(e,t):c},matchMedia:function(e){return new Vn(e)},matchMediaRefresh:function(){return Nn.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||zn()},addEventListener:function(e,t){var n=Pn[e]||(Pn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Pn[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:xt,wrapYoyo:St,distribute:pt,random:gt,snap:ht,normalize:yt,getUnit:at,clamp:ot,splitColor:Ft,toArray:ut,selector:dt,mapRange:wt,pipe:_t,unitize:vt,interpolate:Tt,shuffle:ft},install:V,effects:de,ticker:Ht,updateRoot:rn.updateRoot,plugins:W,globalTimeline:I,core:{PropTween:Mn,globals:ie,Tween:vn,Timeline:rn,Animation:nn,getCache:he,_removeLinkedListItem:Ne,reverting:function(){return s},context:function(e){return e&&c&&(c.data.push(e),e._ctx=c),c},suppressOverwrites:function(e){return o=e}}},_e(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Hn[e]=vn[e]}),Ht.add(rn.updateRoot),kt=Hn.to({},{duration:0}),Un=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Wn=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Un(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Gn=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(_(n)&&(r={},_e(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Wn(e,n)}}}},Kn=Hn.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)s?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Gn(`roundProps`,mt),Gn(`modifiers`),Gn(`snap`,ht))||Hn,vn.version=rn.version=Kn.version=`3.15.0`,te=1,C()&&Ut(),J.Power0,J.Power1,J.Power2,J.Power3,J.Power4,J.Linear,J.Quad,J.Cubic,J.Quart,J.Quint,J.Strong,J.Elastic,J.Back,J.SteppedEase,J.Bounce,J.Sine,J.Expo,J.Circ})),Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi=e((()=>{qn(),tr=function(){return typeof window<`u`},nr={},rr=180/Math.PI,ir=Math.PI/180,ar=Math.atan2,or=1e8,sr=/([A-Z])/g,cr=/(left|right|width|margin|padding|x)/i,lr=/[\s,\(]\S/,ur={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},dr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_r=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},vr=function(e,t,n){return e.style[t]=n},yr=function(e,t,n){return e.style.setProperty(t,n)},br=function(e,t,n){return e._gsap[t]=n},xr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Sr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Cr=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},wr=`transform`,Tr=wr+`Origin`,Er=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in nr&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=ur[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Gr(i,e)}):this.tfm[t]=o.x?o[t]:Gr(i,t),t===Tr&&(this.tfm.zOrigin=o.zOrigin);else return ur.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(wr)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Tr,n,``)),t=wr}(a||n)&&this.props.push(t,n,a[t])},Dr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Or=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(sr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=er(),(!i||!i.isStart)&&!n[wr]&&(Dr(n),r.zOrigin&&n[Tr]&&(n[Tr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kr=function(e,t){var n={target:e,props:[],revert:Or,save:Er};return e._gsap||Kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},jr=function(e,t){var n=Yn.createElementNS?Yn.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Yn.createElement(e);return n&&n.style?n:Yn.createElement(e)},Mr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(sr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Pr(n)||n,1)||``},Nr=`O,Moz,ms,Ms,Webkit`.split(`,`),Pr=function(e,t,n){var r=(t||Qn).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Nr[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Nr[i]:``)+e},Fr=function(){tr()&&window.document&&(Jn=window,Yn=Jn.document,Xn=Yn.documentElement,Qn=jr(`div`)||{style:{}},jr(`div`),wr=Pr(wr),Tr=wr+`Origin`,Qn.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Ar=!!Pr(`perspective`),er=Kn.core.reverting,Zn=1)},Ir=function(e){var t=e.ownerSVGElement,n=jr(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Xn.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Xn.removeChild(n),i},Lr=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Rr=function(e){var t,n;try{t=e.getBBox()}catch{t=Ir(e),n=1}return t&&(t.width||t.height)||n||(t=Ir(e)),t&&!t.width&&!t.x&&!t.y?{x:+Lr(e,[`x`,`cx`,`x1`])||0,y:+Lr(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},zr=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Rr(e))},Br=function(e,t){if(t){var n=e.style,r;t in nr&&t!==Tr&&(t=wr),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(sr,`-$1`).toLowerCase())):n.removeAttribute(t)}},Vr=function(e,t,n,r,i,a){var o=new Mn(e._pt,t,n,0,1,a?_r:gr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Hr={deg:1,rad:1,turn:1},Ur={grid:1,flex:1},Wr=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Qn.style,c=cr.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Hr[i]||Hr[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&zr(t),(p||o===`%`)&&(nr[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],ve(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Yn||!h.appendChild)&&(h=Yn.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Ht.time&&!g.uncache)return ve(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Br(t,n)}else(p||o===`%`)&&!Ur[Mr(h,`display`)]&&(s.position=Mr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Qn),m=Qn[u],h.removeChild(Qn),s.position=`absolute`;return c&&p&&(g=he(h),g.time=Ht.time,g.width=h[u]),ve(f?m*a/d:m&&a?d/m*a:0)},Gr=function(e,t,n,r){var i;return Zn||Fr(),t in ur&&t!==`transform`&&(t=ur[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),nr[t]&&t!==`transform`?(i=ri(e,r),i=t===`transformOrigin`?i.svg?i.origin:ii(Mr(e,Tr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Xr[t]&&Xr[t](e,t,n)||Mr(e,t)||ge(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Wr(e,t,i,n)+n:i},Kr=function(e,t,n,r){if(!n||n===`none`){var a=Pr(t,e,1),o=a&&Mr(e,a,1);o&&o!==n?(t=a,n=o):t===`borderColor`&&(n=Mr(e,`borderTopColor`))}var s=new Mn(this._pt,e.style,t,0,1,En),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b,x;if(s.b=n,s.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Mr(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(h=e.style[t],e.style[t]=r,r=Mr(e,t)||r,h?e.style[t]=h:Br(e,t)),u=[n,r],Bt(u),n=u[0],r=u[1],f=n.match(j)||[],x=r.match(j)||[],x.length){for(;d=j.exec(r);)g=d[0],v=r.substring(c,d.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),g!==(h=f[l++]||``)&&(p=parseFloat(h)||0,b=h.substr((p+``).length),g.charAt(1)===`=`&&(g=ye(p,g)+b),_=parseFloat(g),y=g.substr((_+``).length),c=j.lastIndex-y.length,y||(y=y||i.units[t]||b,c===r.length&&(r+=y,s.e+=y)),b!==y&&(p=Wr(e,t,h,y)||0),s._pt={_next:s._pt,p:v||l===1?v:`,`,s:p,c:_-p,m:m&&m<4||t===`zIndex`?Math.round:0});s.c=c<r.length?r.substring(c,r.length):``}else s.r=t===`display`&&r===`none`?_r:gr;return N.test(r)&&(s.e=0),this._pt=s,s},qr={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Jr=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=qr[n]||n,t[1]=qr[r]||r,t.join(` `)},Yr=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],nr[o]&&(s=1,o=o===`transformOrigin`?Tr:wr),Br(n,o);s&&(Br(n,wr),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,ri(n,1),a.uncache=1,Dr(r)))}},Xr={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Mn(e._pt,t,n,0,0,Yr);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Zr=[1,0,0,1,0,0],Qr={},$r=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},ei=function(e){var t=Mr(e,wr);return $r(t)?Zr:t.substr(7).match(A).map(ve)},ti=function(e,t){var n=e._gsap||he(e),r=e.style,i=ei(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Zr:i):(i===Zr&&!e.offsetParent&&e!==Xn&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Xn.appendChild(e)),i=ei(e),s?r.display=s:Br(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Xn.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ni=function(e,t,n,r,i,a){var o=e._gsap,s=i||ti(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Zr&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Rr(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Tr]=`0px 0px`,a&&(Vr(a,o,`xOrigin`,c,y),Vr(a,o,`yOrigin`,l,b),Vr(a,o,`xOffset`,u,o.xOffset),Vr(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},ri=function(e,t){var n=e._gsap||new tn(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,o=`px`,s=`deg`,c=getComputedStyle(e),l=Mr(e,Tr)||`0`,u=d=f=h=g=_=v=y=b=0,d,f,p=m=1,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,ee,z,B;return n.svg=!!(e.getCTM&&zr(e)),c.translate&&((c.translate!==`none`||c.scale!==`none`||c.rotate!==`none`)&&(r[wr]=(c.translate===`none`?``:`translate3d(`+(c.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(c.rotate===`none`?``:`rotate(`+c.rotate+`) `)+(c.scale===`none`?``:`scale(`+c.scale.split(` `).join(`,`)+`) `)+(c[wr]===`none`?``:c[wr])),r.scale=r.rotate=r.translate=`none`),C=ti(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),l=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),ni(e,N||l,!!N||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,S=n.yOrigin||0,C!==Zr&&(D=C[0],O=C[1],k=C[2],A=C[3],u=j=C[4],d=M=C[5],C.length===6?(p=Math.sqrt(D*D+O*O),m=Math.sqrt(A*A+k*k),h=D||O?ar(O,D)*rr:0,v=k||A?ar(k,A)*rr+h:0,v&&(m*=Math.abs(Math.cos(v*ir))),n.svg&&(u-=x-(x*D+S*k),d-=S-(x*O+S*A))):(B=C[6],ee=C[7],I=C[8],L=C[9],R=C[10],z=C[11],u=C[12],d=C[13],f=C[14],w=ar(B,R),g=w*rr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+I*E,P=M*T+L*E,F=B*T+R*E,I=j*-E+I*T,L=M*-E+L*T,R=B*-E+R*T,z=ee*-E+z*T,j=N,M=P,B=F),w=ar(-k,R),_=w*rr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-I*E,P=O*T-L*E,F=k*T-R*E,z=A*E+z*T,D=N,O=P,k=F),w=ar(O,D),h=w*rr,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,_=180-_),p=ve(Math.sqrt(D*D+O*O+k*k)),m=ve(Math.sqrt(M*M+B*B)),w=ar(j,M),v=Math.abs(w)>2e-4?w*rr:0,b=z?1/(z<0?-z:z):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!$r(Mr(e,wr)),N&&e.setAttribute(`transform`,N))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(p*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t||=n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ve(p),n.scaleY=ve(m),n.rotation=ve(h)+s,n.rotationX=ve(g)+s,n.rotationY=ve(_)+s,n.skewX=v+s,n.skewY=y+s,n.transformPerspective=b+o,(n.zOrigin=parseFloat(l.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Tr]=ii(l)),n.xOffset=n.yOffset=0,n.force3D=i.force3D,n.renderTransform=n.svg?di:Ar?ui:oi,n.uncache=0,n},ii=function(e){return(e=e.split(` `))[0]+` `+e[1]},ai=function(e,t,n){var r=at(t);return ve(parseFloat(t)+parseFloat(Wr(e,`x`,n+`px`,r)))+r},oi=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,ui(e,t)},si=`0deg`,ci=`0px`,li=`) `,ui=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==si||l!==si)){var x=parseFloat(l)*ir,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*ir,w=Math.cos(x),a=ai(_,a,S*w*-v),o=ai(_,o,-Math.sin(x)*-v),s=ai(_,s,C*w*-v+v)}h!==ci&&(y+=`perspective(`+h+li),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==ci||o!==ci||s!==ci)&&(y+=s!==ci||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+li),c!==si&&(y+=`rotate(`+c+li),l!==si&&(y+=`rotateY(`+l+li),u!==si&&(y+=`rotateX(`+u+li),(d!==si||f!==si)&&(y+=`skew(`+d+`, `+f+li),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+li),_.style[wr]=y||`translate(0, 0)`},di=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=ir,c*=ir,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=ir,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=ve(b),x=ve(x),S=ve(S),C=ve(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Wr(f,`x`,a,`px`),y=Wr(f,`y`,o,`px`)),(p||m||h||g)&&(v=ve(v+p-(p*b+m*S)+h),y=ve(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=ve(v+r/100*w.width),y=ve(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[wr]=w)},fi=function(e,t,n,r,i){var a=360,o=_(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?rr:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*or)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*or)%a-~~(s/a)*a)),e._pt=u=new Mn(e._pt,t,n,r,s,fr),u.e=c,u.u=`deg`,e._props.push(n),u},pi=function(e,t){for(var n in t)e[n]=t[n];return e},mi=function(e,t,n){var r=pi({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[wr]=t,o=ri(n,1),Br(n,wr),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[wr],a[wr]=t,o=ri(n,1),a[wr]=c),nr)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=at(c),p=at(l),u=f===p?parseFloat(c):Wr(n,s,c,p),d=parseFloat(l),e._pt=new Mn(e._pt,o,s,u,d-u,dr),e._pt.u=p||0,e._props.push(s));pi(o,r)},_e(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Xr[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Gr(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}}),hi={name:`css`,register:Fr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var o=this._props,s=e.style,c=n.vars.startAt,l,u,d,f,p,m,h,g,v,y,b,x,S,C,w,T,E;for(h in Zn||Fr(),this.styles=this.styles||kr(e),T=this.styles.props,this.tween=n,t)if(h!==`autoRound`&&(u=t[h],!(W[h]&&cn(h,t,n,r,e,a)))){if(p=typeof u,m=Xr[h],p===`function`&&(u=u.call(n,r,e,a),p=typeof u),p===`string`&&~u.indexOf(`random(`)&&(u=Ct(u)),m)m(this,e,h,u,n)&&(w=1);else if(h.substr(0,2)===`--`)l=(getComputedStyle(e).getPropertyValue(h)+``).trim(),u+=``,Rt.lastIndex=0,Rt.test(l)||(g=at(l),v=at(u),v?g!==v&&(l=Wr(e,h,l,v)+v):g&&(u+=g)),this.add(s,`setProperty`,l,u,r,a,0,0,h),o.push(h),T.push(h,0,s[h]);else if(p!==`undefined`){if(c&&h in c?(l=typeof c[h]==`function`?c[h].call(n,r,e,a):c[h],_(l)&&~l.indexOf(`random(`)&&(l=Ct(l)),at(l+``)||l===`auto`||(l+=i.units[h]||at(Gr(e,h))||``),(l+``).charAt(1)===`=`&&(l=Gr(e,h))):l=Gr(e,h),f=parseFloat(l),y=p===`string`&&u.charAt(1)===`=`&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),h in ur&&(h===`autoAlpha`&&(f===1&&Gr(e,`visibility`)===`hidden`&&d&&(f=0),T.push(`visibility`,0,s.visibility),Vr(this,s,`visibility`,f?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),h!==`scale`&&h!==`transform`&&(h=ur[h],~h.indexOf(`,`)&&(h=h.split(`,`)[0]))),b=h in nr,b){if(this.styles.save(h),E=u,p===`string`&&u.substring(0,6)===`var(--`){if(u=Mr(e,u.substring(4,u.indexOf(`)`))),u.substring(0,5)===`calc(`){var D=e.style.perspective;e.style.perspective=u,u=Mr(e,`perspective`),D?e.style.perspective=D:Br(e,`perspective`)}d=parseFloat(u)}if(x||(S=e._gsap,S.renderTransform&&!t.parseTransform||ri(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,x=this._pt=new Mn(this._pt,s,wr,0,1,S.renderTransform,S,0,-1),x.dep=1),h===`scale`)this._pt=new Mn(this._pt,S,`scaleY`,S.scaleY,(y?ye(S.scaleY,y+d):d)-S.scaleY||0,dr),this._pt.u=0,o.push(`scaleY`,h),h+=`X`;else if(h===`transformOrigin`){T.push(Tr,0,s[Tr]),u=Jr(u),S.svg?ni(e,u,0,C,0,this):(v=parseFloat(u.split(` `)[2])||0,v!==S.zOrigin&&Vr(this,S,`zOrigin`,S.zOrigin,v),Vr(this,s,h,ii(l),ii(u)));continue}else if(h===`svgOrigin`){ni(e,u,1,C,0,this);continue}else if(h in Qr){fi(this,S,h,f,y?ye(f,y+u):u);continue}else if(h===`smoothOrigin`){Vr(this,S,`smooth`,S.smooth,u);continue}else if(h===`force3D`){S[h]=u;continue}else if(h===`transform`){mi(this,u,e);continue}}else h in s||(h=Pr(h)||h);if(b||(d||d===0)&&(f||f===0)&&!lr.test(u)&&h in s)g=(l+``).substr((f+``).length),d||=0,v=at(u)||(h in i.units?i.units[h]:g),g!==v&&(f=Wr(e,h,l,v)),this._pt=new Mn(this._pt,b?S:s,h,f,(y?ye(f,y+d):d)-f,!b&&(v===`px`||h===`zIndex`)&&t.autoRound!==!1?hr:dr),this._pt.u=v||0,b&&E!==u?(this._pt.b=l,this._pt.e=E,this._pt.r=mr):g!==v&&v!==`%`&&(this._pt.b=l,this._pt.r=pr);else if(h in s)Kr.call(this,e,h,l,y?y+u:u);else if(h in e)this.add(e,h,l||e[h],y?y+u:u,r,a);else if(h!==`parseTransform`){ne(h,u);continue}b||(h in s?T.push(h,0,s[h]):typeof e[h]==`function`?T.push(h,2,e[h]()):T.push(h,1,l||e[h])),o.push(h)}}w&&jn(this)},render:function(e,t){if(t.tween._time||!er())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gr,aliases:ur,getSetter:function(e,t,n){var r=ur[t];return r&&r.indexOf(`,`)<0&&(t=r),t in nr&&t!==Tr&&(e._gsap.x||Gr(e,`x`))?n&&$n===n?t===`scale`?xr:br:($n=n||{})&&(t===`scale`?Sr:Cr):e.style&&!b(e.style[t])?vr:~t.indexOf(`-`)?yr:Cn(e,t)},core:{_removeProperty:Br,_getMatrix:ti}},Kn.utils.checkPrefix=Pr,Kn.core.getStyleSaver=kr,(function(e,t,n,r){var a=_e(e+`,`+t+`,`+n,function(e){nr[e]=1});_e(t,function(e){i.units[e]=`deg`,Qr[e]=1}),ur[a[13]]=e+`,`+t,_e(r,function(e){var t=e.split(`:`);ur[t[1]]=a[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),_e(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){i.units[e]=`px`}),Kn.registerPlugin(hi)})),_i,vi=e((()=>{qn(),gi(),_i=Kn.registerPlugin(hi)||Kn,_i.core.Tween}));function yi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bi(e,t,n){return t&&yi(e.prototype,t),n&&yi(e,n),e}var xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Y,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa=e((()=>{Pi=function(){return xi||typeof window<`u`&&(xi=window.gsap)&&xi.registerPlugin&&xi},Fi=1,Ii=[],Y=[],Li=[],Ri=Date.now,zi=function(e,t){return t},Bi=function(){var e=ki.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Y),r.push.apply(r,Li),Y=n,Li=r,zi=function(e,n){return t[e](n)}},Vi=function(e,t){return~Li.indexOf(e)&&Li[Li.indexOf(e)+1][t]},Hi=function(e){return!!~Ai.indexOf(e)},Ui=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},Wi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Gi=`scrollLeft`,Ki=`scrollTop`,qi=function(){return ji&&ji.isPressed||Y.cache++},Ji=function(e,t){var n=function n(r){if(r||r===0){Fi&&(Ci.history.scrollRestoration=`manual`);var i=ji&&ji.isPressed;r=n.v=Math.round(r)||(ji&&ji.iOS?1:0),e(r),n.cacheID=Y.cache,i&&zi(`ss`,r)}else(t||Y.cache!==n.cacheID||zi(`ref`))&&(n.cacheID=Y.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},Yi={s:Gi,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Ji(function(e){return arguments.length?Ci.scrollTo(e,Xi.sc()):Ci.pageXOffset||wi[Gi]||Ti[Gi]||Ei[Gi]||0})},Xi={s:Ki,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:Yi,sc:Ji(function(e){return arguments.length?Ci.scrollTo(Yi.sc(),e):Ci.pageYOffset||wi[Ki]||Ti[Ki]||Ei[Ki]||0})},Zi=function(e,t){return(t&&t._ctx&&t._ctx.selector||xi.utils.toArray)(e)[0]||(typeof e==`string`&&xi.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},Qi=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},$i=function(e,t){var n=t.s,r=t.sc;Hi(e)&&(e=wi.scrollingElement||Ti);var i=Y.indexOf(e),a=r===Xi.sc?1:2;!~i&&(i=Y.push(e)-1),Y[i+a]||Ui(e,`scroll`,qi);var o=Y[i+a],s=o||(Y[i+a]=Ji(Vi(e,n),!0)||(Hi(e)?r:Ji(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=xi.getProperty(e,`scrollBehavior`)===`smooth`),s},ea=function(e,t,n){var r=e,i=e,a=Ri(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=Ri();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=Ri();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},ta=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},na=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ra=function(){ki=xi.core.globals().ScrollTrigger,ki&&ki.core&&Bi()},ia=function(e){return xi=e||Pi(),!Si&&xi&&typeof document<`u`&&document.body&&(Ci=window,wi=document,Ti=wi.documentElement,Ei=wi.body,Ai=[Ci,wi,Ti,Ei],xi.utils.clamp,Ni=xi.core.context||function(){},Oi=`onpointerenter`in Ei?`pointer`:`mouse`,Di=aa.isTouch=Ci.matchMedia&&Ci.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in Ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=aa.eventTypes=(`ontouchstart`in Ti?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in Ti?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Fi=0},500),Si=1),ki||ra(),Si},Yi.op=Xi,Y.cache=0,aa=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){Si||ia(xi)||console.warn(`Please gsap.registerPlugin(Observer)`),ki||ra();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,N=e.onGestureEnd,P=e.onWheel,F=e.onEnable,I=e.onDisable,L=e.onClick,R=e.scrollSpeed,ee=e.capture,z=e.allowClicks,B=e.lockAxis,te=e.onLockAxis;this.target=i=Zi(i)||Ti,this.vars=e,u&&=xi.utils.toArray(u),t||=1e-9,n||=0,d||=1,R||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(Ci.getComputedStyle(Ei).lineHeight)||22;var V,ne,re,ie,H,ae,oe,U=this,se=0,ce=0,le=e.passive||!s&&e.passive!==!1,ue=$i(i,Yi),W=$i(i,Xi),de=ue(),fe=W(),pe=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&Mi[0]===`pointerdown`,me=Hi(i),G=i.ownerDocument||wi,he=[0,0,0],ge=[0,0,0],_e=0,ve=function(){return _e=Ri()},K=function(e,t){return(U.event=e)&&u&&Qi(e.target,u)||t&&pe&&e.pointerType!==`touch`||A&&A(e,t)},ye=function(){U._vx.reset(),U._vy.reset(),ne.pause(),c&&c(U)},be=function(){var e=U.deltaX=na(he),n=U.deltaY=na(ge),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(U,e,n,he,ge),r&&(v&&U.deltaX>0&&v(U),y&&U.deltaX<0&&y(U),S&&S(U),T&&U.deltaX<0!=se<0&&T(U),se=U.deltaX,he[0]=he[1]=he[2]=0),i&&(x&&U.deltaY>0&&x(U),b&&U.deltaY<0&&b(U),C&&C(U),E&&U.deltaY<0!=ce<0&&E(U),ce=U.deltaY,ge[0]=ge[1]=ge[2]=0),(ie||re)&&(k&&k(U),re&&=(p&&re===1&&p(U),h&&h(U),0),ie=!1),ae&&!(ae=!1)&&te&&te(U),H&&=(P(U),!1),V=0},xe=function(e,t,n){he[n]+=e,ge[n]+=t,U._vx.update(e),U._vy.update(t),o?V||=requestAnimationFrame(be):be()},Se=function(e,t){B&&!oe&&(U.axis=oe=Math.abs(e)>Math.abs(t)?`x`:`y`,ae=!0),oe!==`y`&&(he[2]+=e,U._vx.update(e,!0)),oe!==`x`&&(ge[2]+=t,U._vy.update(t,!0)),o?V||=requestAnimationFrame(be):be()},Ce=function(e){if(!K(e,1)){e=ta(e,s);var t=e.clientX,r=e.clientY,i=t-U.x,a=r-U.y,o=U.isDragging;U.x=t,U.y=r,(o||(i||a)&&(Math.abs(U.startX-t)>=n||Math.abs(U.startY-r)>=n))&&(re||=o?2:1,o||(U.isDragging=!0),Se(i,a))}},we=U.onPress=function(e){K(e,1)||e&&e.button||(U.axis=oe=null,ne.pause(),U.isPressed=!0,e=ta(e),se=ce=0,U.startX=U.x=e.clientX,U.startY=U.y=e.clientY,U._vx.reset(),U._vy.reset(),Ui(j?i:G,Mi[1],Ce,le,!0),U.deltaX=U.deltaY=0,g&&g(U))},Te=U.onRelease=function(e){if(!K(e,1)){Wi(j?i:G,Mi[1],Ce,!0);var t=!isNaN(U.y-U.startY),n=U.isDragging,r=n&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),a=ta(e);!r&&t&&(U._vx.reset(),U._vy.reset(),s&&z&&xi.delayedCall(.08,function(){if(Ri()-_e>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(G.createEvent){var t=G.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,Ci,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,c&&n&&!j&&ne.restart(!0),re&&be(),m&&n&&m(U),_&&_(U,r)}},q=function(e){return e.touches&&e.touches.length>1&&(U.isGesturing=!0)&&M(e,U.isDragging)},Ee=function(){return(U.isGesturing=!1)||N(U)},De=function(e){if(!K(e)){var t=ue(),n=W();xe((t-de)*R,(n-fe)*R,1),de=t,fe=n,c&&ne.restart(!0)}},Oe=function(e){if(!K(e)){e=ta(e,s),P&&(H=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?Ci.innerHeight:1)*d;xe(e.deltaX*t,e.deltaY*t,0),c&&!j&&ne.restart(!0)}},ke=function(e){if(!K(e)){var t=e.clientX,n=e.clientY,r=t-U.x,i=n-U.y;U.x=t,U.y=n,ie=!0,c&&ne.restart(!0),(r||i)&&Se(r,i)}},Ae=function(e){U.event=e,D(U)},je=function(e){U.event=e,O(U)},Me=function(e){return K(e)||ta(e,s)&&L(U)};ne=U._dc=xi.delayedCall(l||.25,ye).pause(),U.deltaX=U.deltaY=0,U._vx=ea(0,50,!0),U._vy=ea(0,50,!0),U.scrollX=ue,U.scrollY=W,U.isDragging=U.isGesturing=U.isPressed=!1,Ni(this),U.enable=function(e){return U.isEnabled||(Ui(me?G:i,`scroll`,qi),r.indexOf(`scroll`)>=0&&Ui(me?G:i,`scroll`,De,le,ee),r.indexOf(`wheel`)>=0&&Ui(i,`wheel`,Oe,le,ee),(r.indexOf(`touch`)>=0&&Di||r.indexOf(`pointer`)>=0)&&(Ui(i,Mi[0],we,le,ee),Ui(G,Mi[2],Te),Ui(G,Mi[3],Te),z&&Ui(i,`click`,ve,!0,!0),L&&Ui(i,`click`,Me),M&&Ui(G,`gesturestart`,q),N&&Ui(G,`gestureend`,Ee),D&&Ui(i,Oi+`enter`,Ae),O&&Ui(i,Oi+`leave`,je),k&&Ui(i,Oi+`move`,ke)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=ie=re=!1,U._vx.reset(),U._vy.reset(),de=ue(),fe=W(),e&&e.type&&we(e),F&&F(U)),U},U.disable=function(){U.isEnabled&&(Ii.filter(function(e){return e!==U&&Hi(e.target)}).length||Wi(me?G:i,`scroll`,qi),U.isPressed&&(U._vx.reset(),U._vy.reset(),Wi(j?i:G,Mi[1],Ce,!0)),Wi(me?G:i,`scroll`,De,ee),Wi(i,`wheel`,Oe,ee),Wi(i,Mi[0],we,ee),Wi(G,Mi[2],Te),Wi(G,Mi[3],Te),Wi(i,`click`,ve,!0),Wi(i,`click`,Me),Wi(G,`gesturestart`,q),Wi(G,`gestureend`,Ee),Wi(i,Oi+`enter`,Ae),Wi(i,Oi+`leave`,je),Wi(i,Oi+`move`,ke),U.isEnabled=U.isPressed=U.isDragging=!1,I&&I(U))},U.kill=U.revert=function(){U.disable();var e=Ii.indexOf(U);e>=0&&Ii.splice(e,1),ji===U&&(ji=0)},Ii.push(U),j&&Hi(i)&&(ji=U),U.enable(f)},bi(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}(),aa.version=`3.15.0`,aa.create=function(e){return new aa(e)},aa.register=ia,aa.getAll=function(){return Ii.slice()},aa.getById=function(e){return Ii.filter(function(t){return t.vars.id===e})[0]},Pi()&&xi.registerPlugin(aa)})),X,sa,Z,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Q,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,$,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws=e((()=>{oa(),za=1,Ba=Date.now,Va=Ba(),Ha=0,Ua=0,Wa=function(e,t,n){var r=oo(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},Ga=function(e,t){return t&&(!oo(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},Ka=function e(){return Ua&&requestAnimationFrame(e)},qa=function(){return va=1},Ja=function(){return va=0},Ya=function(e){return e},Xa=function(e){return Math.round(e*1e5)/1e5||0},Za=function(){return typeof window<`u`},Qa=function(){return X||Za()&&(X=window.gsap)&&X.registerPlugin&&X},$a=function(e){return!!~da.indexOf(e)},eo=function(e){return(e===`Height`?Fa:Z[`inner`+e])||la[`client`+e]||ua[`client`+e]},to=function(e){return Vi(e,`getBoundingClientRect`)||($a(e)?function(){return Os.width=Z.innerWidth,Os.height=Fa,Os}:function(){return Mo(e)})},no=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=Vi(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?eo(i):e[`client`+i])||0}},ro=function(e,t){return!t||~Li.indexOf(e)?to(e):function(){return Os}},io=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=Vi(e,n))?a()-to(e)()[i]:$a(e)?(la[n]||ua[n])-eo(r):e[n]-e[`offset`+r])},ao=function(e,t){for(var n=0;n<Ca.length;n+=3)(!t||~t.indexOf(Ca[n+1]))&&e(Ca[n],Ca[n+1],Ca[n+2])},oo=function(e){return typeof e==`string`},so=function(e){return typeof e==`function`},co=function(e){return typeof e==`number`},lo=function(e){return typeof e==`object`},uo=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},fo=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},po=Math.abs,mo=`left`,ho=`top`,go=`right`,_o=`bottom`,vo=`width`,yo=`height`,bo=`Right`,xo=`Left`,So=`Top`,Co=`Bottom`,wo=`padding`,To=`margin`,Eo=`Width`,Do=`Height`,Oo=`px`,ko=function(e){return Z.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Ao=function(e){var t=ko(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},jo=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Mo=function(e,t){var n=t&&ko(e)[ya]!==`matrix(1, 0, 0, 1, 0, 0)`&&X.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},No=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Po=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},Fo=function(e){return function(t){return X.utils.snap(Po(e),t)}},Io=function(e){var t=X.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}else for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Lo=function(e){return function(t,n){return Io(Po(e))(t,n.direction)}},Ro=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},zo=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Bo=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Vo=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},Ho={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Uo={toggleActions:`play`,anticipatePin:0},Wo={top:0,left:0,center:.5,bottom:1,right:1},Go=function(e,t){if(oo(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Wo?Wo[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ko=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=ca.createElement(`div`),m=$a(n)||Vi(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?ua:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===Xi?go:_o)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],qo(p,0,r,_),p},qo=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+Eo]=1,i[`border`+o+Eo]=0,i[n.p]=t+`px`,X.set(e,i)},Q=[],Jo={},Xo=function(){return Ba()-Ha>34&&(Yo||=requestAnimationFrame(ys))},Zo=function(){(!Da||!Da.isPressed||Da.startX>ua.clientWidth)&&(Y.cache++,Da?Yo||=requestAnimationFrame(ys):ys(),Ha||rs(`scrollStart`),Ha=Ba())},Qo=function(){Aa=Z.innerWidth,ka=Z.innerHeight},$o=function(e){Y.cache++,(e===!0||!_a&&!Ea&&!ca.fullscreenElement&&!ca.webkitFullscreenElement&&(!Oa||Aa!==Z.innerWidth||Math.abs(Z.innerHeight-ka)>Z.innerHeight*.25))&&fa.restart(!0)},es={},ts=[],ns=function e(){return Bo($,`scrollEnd`,e)||hs(!0)},rs=function(e){return es[e]&&es[e].map(function(e){return e()})||ts},is=[],as=function(e){for(var t=0;t<is.length;t+=5)(!e||is[t+4]&&is[t+4].query===e)&&(is[t].style.cssText=is[t+1],is[t].getBBox&&is[t].setAttribute(`transform`,is[t+2]||``),is[t+3].uncache=1)},os=function(){return Y.forEach(function(e){return so(e)&&++e.cacheID&&(e.rec=e())})},ss=function(e,t){var n;for(ba=0;ba<Q.length;ba++)n=Q[ba],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ia=!0,t&&as(t),t||rs(`revert`)},cs=function(e,t){Y.cache++,(t||!ls)&&Y.forEach(function(e){return so(e)&&e.cacheID++&&(e.rec=0)}),oo(e)&&(Z.history.scrollRestoration=Na=e)},us=0,fs=function(){if(ds!==us){var e=ds=us;requestAnimationFrame(function(){return e===us&&hs(!0)})}},ps=function(){ua.appendChild(Pa),Fa=!Da&&Pa.offsetHeight||Z.innerHeight,ua.removeChild(Pa)},ms=function(e){return pa(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},hs=function(e,t){if(la=ca.documentElement,ua=ca.body,da=[Z,ca,la,ua],Ha&&!e&&!Ia){zo($,`scrollEnd`,ns);return}ps(),ls=$.isRefreshing=!0,Ia||os();var n=rs(`refreshInit`);wa&&$.sort(),t||ss(),Y.forEach(function(e){so(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Q.slice(0).forEach(function(e){return e.refresh()}),Ia=!1,Q.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),La=1,ms(!0),Q.forEach(function(e){var t=io(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),ms(!1),La=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),Y.forEach(function(e){so(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),cs(Na,1),fa.pause(),us++,ls=2,ys(2),Q.forEach(function(e){return so(e.vars.onRefresh)&&e.vars.onRefresh(e)}),ls=$.isRefreshing=!1,rs(`refresh`)},gs=0,_s=1,ys=function(e){if(e===2||!ls&&!Ia){$.isUpdating=!0,vs&&vs.update(0);var t=Q.length,n=Ba(),r=n-Va>=50,i=t&&Q[0].scroll();if(_s=gs>i?-1:1,ls||(gs=i),r&&(Ha&&!va&&n-Ha>200&&(Ha=0,rs(`scrollEnd`)),ha=Va,Va=n),_s<0){for(ba=t;ba-->0;)Q[ba]&&Q[ba].update(0,r);_s=1}else for(ba=0;ba<t;ba++)Q[ba]&&Q[ba].update(0,r);$.isUpdating=!1}Yo=0},bs=[mo,ho,_o,go,To+Co,To+bo,To+So,To+xo,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],xs=bs.concat([vo,yo,`boxSizing`,`max`+Eo,`max`+Do,`position`,To,wo,wo+So,wo+bo,wo+Co,wo+xo]),Ss=function(e,t,n){Ts(n);var r=e._gsap;if(r.spacerIsNative)Ts(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},Cs=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=bs.length,a=t.style,o=e.style,s;i--;)s=bs[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[_o]=o[go]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[vo]=No(e,Yi)+Oo,a[yo]=No(e,Xi)+Oo,a[wo]=o[To]=o[ho]=o[mo]=`0`,Ts(r),o[vo]=o[`max`+Eo]=n[vo],o[yo]=o[`max`+Do]=n[yo],o[wo]=n[wo],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ws=/([A-Z])/g,Ts=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||X.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(ws,`-$1`).toLowerCase())}},Es=function(e){for(var t=xs.length,n=e.style,r=[],i=0;i<t;i++)r.push(xs[i],n[xs[i]]);return r.t=e,r},Ds=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Os={left:0,top:0},ks=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){so(e)&&(e=e(s)),oo(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?Go(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),co(e))f&&(e=X.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&qo(o,n,r,!0);else{so(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=Zi(t,s)||ua,y=Mo(_)||{},(!y||!y.left&&!y.top)&&ko(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=Mo(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=Go(v[0],y[r.d]),x=Go(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&qo(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,qo(a,C,r,w&&C>20||!w&&(u?Math.max(ua[h],la[h]):a.parentNode[h])<=C+1),u&&(c=Mo(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Oo))}return f&&_&&(h=Mo(_),f.seek(d),g=Mo(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},As=/(webkit|moz|length|cssText|inset)/i,js=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===ua){for(a in e._stOrig=i.cssText,o=ko(e),o)!+a&&!As.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;X.core.getCache(e).uncache=1,t.appendChild(e)}},Ms=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Ns=function(e,t,n){var r={};r[t.p]=`+=`+n,X.set(e,r)},Ps=function(e,t){var n=$i(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=Ms(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){Y.cache++,t.tween&&ys()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=X.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},zo(e,`wheel`,n.wheelHandler),$.isTouch&&zo(e,`touchmove`,n.wheelHandler),i},$=function(){function e(t,n){sa||e.register(X)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),Ma(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ua){this.update=this.refresh=this.kill=Ya;return}t=jo(oo(t)||co(t)||t.nodeType?{trigger:t}:t,Uo);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Yi:Xi,T=!l&&l!==0,E=Zi(t.scroller||Z),D=X.core.getCache(E),O=$a(E),k=(`pinType`in t?t.pinType:Vi(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Uo.markers,N=O?0:parseFloat(ko(E)[`border`+w.p2+Eo])||0,P=this,F=t.onRefreshInit&&function(){return t.onRefreshInit(P)},I=no(E,O,w),L=ro(E,O),R=0,ee=0,z=0,B=$i(E,w),te,V,ne,re,ie,H,ae,oe,U,se,ce,le,ue,W,de,fe,pe,me,G,he,ge,_e,ve,K,ye,be,xe,Se,Ce,we,Te,q,Ee,De,Oe,ke,Ae,je,Me;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=E,P.scroll=x?x.time.bind(x):B,re=B(),P.vars=t,n||=t.animation,`refreshPriority`in t&&(wa=1,t.refreshPriority===-9999&&(vs=P)),D.tweenScroll=D.tweenScroll||{top:Ps(E,Xi),left:Ps(E,Yi)},P.tweenTo=te=D.tweenScroll[w.p],P.scrubDuration=function(e){Ee=co(e)&&e,Ee?q?q.duration(e):q=X.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Ee,paused:!0,onComplete:function(){return h&&h(P)}}):(q&&q.progress(1).kill(),q=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(l),we=0,o||=n.vars.id),v&&((!lo(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in ua.style&&X.set(O?[ua,la]:E,{scrollBehavior:`auto`}),Y.forEach(function(e){return so(e)&&e.target===(O?ca.scrollingElement||la:E)&&(e.smooth=!1)}),ne=so(v.snapTo)?v.snapTo:v.snapTo===`labels`?Fo(n):v.snapTo===`labelsDirectional`?Lo(n):v.directional===!1?X.utils.snap(v.snapTo):function(e,t){return Io(v.snapTo)(e,Ba()-ee<500?0:t.direction)},De=v.duration||{min:.1,max:2},De=lo(De)?ma(De.min,De.max):ma(De,De),Oe=X.delayedCall(v.delay||Ee/2||.1,function(){var e=B(),t=Ba()-ee<500,r=te.tween;if((t||Math.abs(P.getVelocity())<10)&&!r&&!va&&R!==e){var i=(e-H)/W,a=n&&!T?n.totalProgress():i,o=t?0:(a-Te)/(Ba()-ha)*1e3||0,s=X.utils.clamp(-i,1-i,po(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=ne(c,P),co(l)||(l=c),u=Math.max(0,Math.round(H+l*W)),e<=ae&&e>=H&&u!==e){if(r&&!r._initted&&r.data<=po(u-e))return;v.inertia===!1&&(s=l-i),te(u,{duration:De(po(Math.max(po(c-a),po(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:po(u-e),onInterrupt:function(){return Oe.restart(!0)&&p&&fo(P,p)},onComplete:function(){P.update(),R=B(),n&&!T&&(q?q.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),we=Te=n&&!T?n.totalProgress():P.progress,g&&g(P),m&&fo(P,m)}},e,s*W,u-e-s*W),f&&fo(P,f,te.tween)}}else P.isActive&&R!==e&&Oe.restart(!0)}).pause()),o&&(Jo[o]=P),u=P.trigger=Zi(u||d!==!0&&d),Me=u&&u._gsap&&u._gsap.stRevert,Me&&=Me(P),d=d===!0?u:Zi(d),oo(a)&&(a={targets:u,className:a}),d&&(f===!1||f===To||(f=!f&&d.parentNode&&d.parentNode.style&&ko(d.parentNode).display===`flex`?!1:wo),P.pin=d,V=X.core.getCache(d),V.spacer?de=V.pinState:(b&&(b=Zi(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),V.spacerIsNative=!!b,b&&(V.spacerState=Es(b))),V.spacer=me=b||ca.createElement(`div`),me.classList.add(`pin-spacer`),o&&me.classList.add(`pin-spacer-`+o),V.pinState=de=Es(d)),t.force3D!==!1&&X.set(d,{force3D:!0}),P.spacer=me=V.spacer,Ce=ko(d),K=Ce[f+w.os2],he=X.getProperty(d),ge=X.quickSetter(d,w.a,Oo),Cs(d,me,Ce),pe=Es(d)),M){le=lo(M)?jo(M,Ho):Ho,se=Ko(`scroller-start`,o,E,w,le,0),ce=Ko(`scroller-end`,o,E,w,le,0,se),G=se[`offset`+w.op.d2];var Ne=Zi(Vi(E,`content`)||E);oe=this.markerStart=Ko(`start`,o,Ne,w,le,G,0,x),U=this.markerEnd=Ko(`end`,o,Ne,w,le,G,0,x),x&&(je=X.quickSetter([oe,U],w.a,Oo)),!k&&!(Li.length&&Vi(E,`fixedMarkers`)===!0)&&(Ao(O?ua:E),X.set([se,ce],{force3D:!0}),be=X.quickSetter(se,w.a,Oo),Se=X.quickSetter(ce,w.a,Oo))}if(x){var Pe=x.vars.onUpdate,Fe=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){P.update(0,0,1),Pe&&Pe.apply(x,Fe||[])})}if(P.previous=function(){return Q[Q.indexOf(P)-1]},P.next=function(){return Q[Q.indexOf(P)+1]},P.revert=function(e,t){if(!t)return P.kill(!0);var r=e!==!1||!P.enabled,i=_a;r!==P.isReverted&&(r&&(ke=Math.max(B(),P.scroll.rec||0),z=P.progress,Ae=n&&n.progress()),oe&&[oe,U,se,ce].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(_a=P,P.update(r)),d&&(!y||!P.isActive)&&(r?Ss(d,me,de):Cs(d,me,ko(d),ye)),r||P.update(r),_a=i,P.isReverted=r)},P.refresh=function(r,i,a,o){if(!((_a||!P.enabled)&&!i)){if(d&&r&&Ha){zo(e,`scrollEnd`,ns);return}!ls&&F&&F(P),_a=P,te.tween&&!a&&(te.tween.kill(),te.tween=0),q&&q.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var s=I(),l=L(),m=x?x.duration():io(E,w),h=W<=.01||!W,g=0,_=o||0,v=lo(a)?a.end:t.end,b=t.endTrigger||u,S=lo(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=P.pinnedContainer=t.pinnedContainer&&Zi(t.pinnedContainer,P),D=u&&Math.max(0,Q.indexOf(P))||0,A=D,j,V,ne,le,G,ge,K,be,Se,Ce,we,Te,Ee;for(M&&lo(a)&&(Te=X.getProperty(se,w.p),Ee=X.getProperty(ce,w.p));A-->0;)ge=Q[A],ge.end||ge.refresh(0,1)||(_a=P),K=ge.pin,K&&(K===u||K===d||K===C)&&!ge.isReverted&&(Ce||=[],Ce.unshift(ge),ge.revert(!0,!0)),ge!==Q[A]&&(D--,A--);for(so(S)&&(S=S(P)),S=Wa(S,`start`,P),H=ks(S,u,s,w,B(),oe,se,P,l,N,k,m,x,P._startClamp&&`_startClamp`)||(d?-.001:0),so(v)&&(v=v(P)),oo(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(oo(S)?S.split(` `)[0]:``)+v:(g=Go(v.substr(2),s),v=oo(S)?S:(x?X.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,H):H)+g,b=u)),v=Wa(v,`end`,P),ae=Math.max(H,ks(v||(b?`100% 0`:m),b,s,w,B()+g,U,ce,P,l,N,k,m,x,P._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)ge=Q[A]||{},K=ge.pin,K&&ge.start-ge._pinPush<=H&&!x&&ge.end>0&&(j=ge.end-(P._startClamp?Math.max(0,ge.start):ge.start),(K===u&&ge.start-ge._pinPush<H||K===C)&&isNaN(S)&&(g+=j*(1-ge.progress)),K===d&&(_+=j));if(H+=g,ae+=g,P._startClamp&&(P._startClamp+=g),P._endClamp&&!ls&&(P._endClamp=ae||-.001,ae=Math.min(ae,io(E,w))),W=ae-H||(H-=.01)&&.001,h&&(z=X.utils.clamp(0,1,X.utils.normalize(H,ae,ke))),P._pinPush=_,oe&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+B()),X.set([oe,U],j)),d&&!(La&&P.end>=io(E,w)))j=ko(d),le=w===Xi,ne=B(),_e=parseFloat(he(w.a))+_,!m&&ae>1&&(we=(O?ca.scrollingElement||la:E).style,we={style:we,value:we[`overflow`+w.a.toUpperCase()]},O&&ko(ua)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(we.style[`overflow`+w.a.toUpperCase()]=`scroll`)),Cs(d,me,j),pe=Es(d),V=Mo(d,!0),be=k&&$i(E,le?Yi:Xi)(),f?(ye=[f+w.os2,W+_+Oo],ye.t=me,A=f===wo?No(d,w)+W+_:0,A&&(ye.push(w.d,A+Oo),me.style.flexBasis!==`auto`&&(me.style.flexBasis=A+Oo)),Ts(ye),C&&Q.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&B(ke)):(A=No(d,w),A&&me.style.flexBasis!==`auto`&&(me.style.flexBasis=A+Oo)),k&&(G={top:V.top+(le?ne-H:be)+Oo,left:V.left+(le?be:ne-H)+Oo,boxSizing:`border-box`,position:`fixed`},G[vo]=G[`max`+Eo]=Math.ceil(V.width)+Oo,G[yo]=G[`max`+Do]=Math.ceil(V.height)+Oo,G[To]=G[To+So]=G[To+bo]=G[To+Co]=G[To+xo]=`0`,G[wo]=j[wo],G[wo+So]=j[wo+So],G[wo+bo]=j[wo+bo],G[wo+Co]=j[wo+Co],G[wo+xo]=j[wo+xo],fe=Ds(de,G,y),ls&&B(0)),n?(Se=n._initted,Ta(1),n.render(n.duration(),!0,!0),ve=he(w.a)-_e+W+_,xe=Math.abs(W-ve)>1,k&&xe&&fe.splice(fe.length-2,2),n.render(0,!0,!0),Se||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Ta(0)):ve=W,we&&(we.value?we.style[`overflow`+w.a.toUpperCase()]=we.value:we.style.removeProperty(`overflow-`+w.a));else if(u&&B()&&!x)for(V=u.parentNode;V&&V!==ua;)V._pinOffset&&(H-=V._pinOffset,ae-=V._pinOffset),V=V.parentNode;Ce&&Ce.forEach(function(e){return e.revert(!1,!0)}),P.start=H,P.end=ae,re=ie=ls?ke:B(),!x&&!ls&&(re<ke&&B(ke),P.scroll.rec=0),P.revert(!1,!0),ee=Ba(),Oe&&(R=-1,Oe.restart(!0)),_a=0,n&&T&&(n._initted||Ae)&&n.progress()!==Ae&&n.progress(Ae||0,!0).render(n.time(),!0,!0),(h||z!==P.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||z||n.vars.immediateRender!==!1)&&n.totalProgress(x&&H<-.001&&!z?X.utils.normalize(H,ae,0):z,!0),P.progress=h||(re-H)/W===z?0:z),d&&f&&(me._pinOffset=Math.round(P.progress*ve)),q&&q.invalidate(),isNaN(Te)||(Te-=X.getProperty(se,w.p),Ee-=X.getProperty(ce,w.p),Ns(se,w,Te),Ns(oe,w,Te-(o||0)),Ns(ce,w,Ee),Ns(U,w,Ee-(o||0))),h&&!ls&&P.update(),c&&!ls&&!ue&&(ue=!0,c(P),ue=!1)}},P.getVelocity=function(){return(B()-ie)/(Ba()-ha)*1e3||0},P.endAnimation=function(){uo(P.callbackAnimation),n&&(q?q.progress(1):n.paused()?T||uo(n,P.direction<0,1):uo(n,n.reversed()))},P.labelToScroll=function(e){return n&&n.labels&&(H||P.refresh()||H)+n.labels[e]/n.duration()*W||0},P.getTrailing=function(e){var t=Q.indexOf(P),n=P.direction>0?Q.slice(0,t).reverse():Q.slice(t+1);return(oo(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return P.direction>0?e.end<=H:e.start>=ae})},P.update=function(e,t,r){if(!(x&&!r&&!e)){var o=ls===!0?ke:P.scroll(),c=e?0:(o-H)/W,u=c<0?0:c>1?1:c||0,p=P.progress,h,g,b,D,O,M,N,F;if(t&&(ie=re,re=x?B():o,v&&(Te=we,we=n&&!T?n.totalProgress():u)),m&&d&&!_a&&!za&&Ha&&(!u&&H<o+(o-ie)/(Ba()-ha)*m?u=1e-4:u===1&&ae>o+(o-ie)/(Ba()-ha)*m&&(u=.9999)),u!==p&&P.enabled){if(h=P.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,P.direction=u>p?1:-1,P.progress=u,O&&!_a&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],F=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||F)&&(F||l||!n)&&(so(C)?C(P):P.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(q&&!_a&&!za?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo(`totalProgress`,u,n._tTime/n._tDur):(q.vars.totalProgress=u,q.invalidate().restart())):n&&n.totalProgress(u,!!(_a&&(ee||e)))),d){if(e&&f&&(me.style[f+w.os2]=K),!k)ge(Xa(_e+ve*u));else if(O){if(N=!e&&u>p&&ae+1>o&&o+1>=io(E,w),y)if(!e&&(h||N)){var I=Mo(d,!0),L=o-H;js(d,ua,I.top+(w===Xi?L:0)+Oo,I.left+(w===Xi?0:L)+Oo)}else js(d,me);Ts(h||N?fe:pe),xe&&u<1&&h||ge(_e+(u===1&&!N?ve:0))}}v&&!te.tween&&!_a&&!za&&Oe.restart(!0),a&&(M||_&&u&&(u<1||!Ra))&&pa(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(P),O&&!_a?(T&&(F&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(P)),(M||!Ra)&&(s&&M&&fo(P,s),A[b]&&fo(P,A[b]),_&&(u===1?P.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&fo(P,A[b]))),S&&!h&&Math.abs(P.getVelocity())>(co(S)?S:2500)&&(uo(P.callbackAnimation),q?q.progress(1):uo(n,D===`reverse`?1:!u,1))):T&&i&&!_a&&i(P)}if(Se){var R=x?o/x.duration()*(x._caScrollDist||0):o;be(R+ +!!se._isFlipped),Se(R)}je&&je(-o/x.duration()*(x._caScrollDist||0))}},P.enable=function(t,n){P.enabled||(P.enabled=!0,zo(E,`resize`,$o),O||zo(E,`scroll`,Zo),F&&zo(e,`refreshInit`,F),t!==!1&&(P.progress=z=0,re=ie=R=B()),n!==!1&&P.refresh())},P.getTween=function(e){return e&&te?te.tween:q},P.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}P.refresh(!1,!1,{start:Ga(e,n&&!!P._startClamp),end:Ga(t,n&&!!P._endClamp)},r),P.update()},P.adjustPinSpacing=function(e){if(ye&&e){var t=ye.indexOf(w.d)+1;ye[t]=parseFloat(ye[t])+e+Oo,ye[1]=parseFloat(ye[1])+e+Oo,Ts(ye)}},P.disable=function(t,n){if(t!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,n||q&&q.pause(),ke=0,V&&(V.uncache=1),F&&Bo(e,`refreshInit`,F),Oe&&(Oe.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!O)){for(var r=Q.length;r--;)if(Q[r].scroller===E&&Q[r]!==P)return;Bo(E,`resize`,$o),O||Bo(E,`scroll`,Zo)}},P.kill=function(e,r){P.disable(e,r),q&&!r&&q.kill(),o&&delete Jo[o];var i=Q.indexOf(P);i>=0&&Q.splice(i,1),i===ba&&_s>0&&ba--,i=0,Q.forEach(function(e){return e.scroller===P.scroller&&(i=1)}),i||ls||(P.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),oe&&[oe,U,se,ce].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),vs===P&&(vs=0),d&&(V&&(V.uncache=1),i=0,Q.forEach(function(e){return e.pin===d&&i++}),i||(V.spacer=0)),t.onKill&&t.onKill(P)},Q.push(P),P.enable(!1,!1),Me&&Me(P),n&&n.add&&!W){var Ie=P.update;P.update=function(){P.update=Ie,Y.cache++,H||ae||P.refresh()},X.delayedCall(.01,P.update),W=.01,H=ae=0}else P.refresh();d&&fs()},e.register=function(t){return sa||=(X=t||Qa(),Za()&&window.document&&e.enable(),Ua),sa},e.defaults=function(e){if(e)for(var t in e)Uo[t]=e[t];return Uo},e.disable=function(e,t){Ua=0,Q.forEach(function(n){return n[t?`kill`:`disable`](e)}),Bo(Z,`wheel`,Zo),Bo(ca,`scroll`,Zo),clearInterval(ga),Bo(ca,`touchcancel`,Ya),Bo(ua,`touchstart`,Ya),Ro(Bo,ca,`pointerdown,touchstart,mousedown`,qa),Ro(Bo,ca,`pointerup,touchend,mouseup`,Ja),fa.kill(),ao(Bo);for(var n=0;n<Y.length;n+=3)Vo(Bo,Y[n],Y[n+1]),Vo(Bo,Y[n],Y[n+2])},e.enable=function(){if(Z=window,ca=document,la=ca.documentElement,ua=ca.body,X)if(pa=X.utils.toArray,ma=X.utils.clamp,Ma=X.core.context||Ya,Ta=X.core.suppressOverwrites||Ya,Na=Z.history.scrollRestoration||`auto`,gs=Z.pageYOffset||0,X.core.globals(`ScrollTrigger`,e),ua){Ua=1,Pa=document.createElement(`div`),Pa.style.height=`100vh`,Pa.style.position=`absolute`,ps(),Ka(),aa.register(X),e.isTouch=aa.isTouch,ja=aa.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Oa=aa.isTouch===1,zo(Z,`wheel`,Zo),da=[Z,ca,la,ua],X.matchMedia?(e.matchMedia=function(e){var t=X.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},X.addEventListener(`matchMediaInit`,function(){os(),ss()}),X.addEventListener(`matchMediaRevert`,function(){return as()}),X.addEventListener(`matchMedia`,function(){hs(0,1),rs(`matchMedia`)}),X.matchMedia().add(`(orientation: portrait)`,function(){return Qo(),Qo})):console.warn(`Requires GSAP 3.11.0 or later`),Qo(),zo(ca,`scroll`,Zo);var t=ua.hasAttribute(`style`),n=ua.style,r=n.borderTopStyle,i=X.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=Mo(ua),Xi.m=Math.round(a.top+Xi.sc())||0,Yi.m=Math.round(a.left+Yi.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(ua.setAttribute(`style`,``),ua.removeAttribute(`style`)),ga=setInterval(Xo,250),X.delayedCall(.5,function(){return za=0}),zo(ca,`touchcancel`,Ya),zo(ua,`touchstart`,Ya),Ro(zo,ca,`pointerdown,touchstart,mousedown`,qa),Ro(zo,ca,`pointerup,touchend,mouseup`,Ja),ya=X.utils.checkPrefix(`transform`),xs.push(ya),sa=Ba(),fa=X.delayedCall(.2,hs).pause(),Ca=[ca,`visibilitychange`,function(){var e=Z.innerWidth,t=Z.innerHeight;ca.hidden?(xa=e,Sa=t):(xa!==e||Sa!==t)&&$o()},ca,`DOMContentLoaded`,hs,Z,`load`,hs,Z,`resize`,$o],ao(zo),Q.forEach(function(e){return e.enable(0,1)}),o=0;o<Y.length;o+=3)Vo(Bo,Y[o],Y[o+1]),Vo(Bo,Y[o],Y[o+2])}else ca&&ca.addEventListener(`DOMContentLoaded`,function t(){e.enable(),ca.removeEventListener(`DOMContentLoaded`,t)})},e.config=function(t){`limitCallbacks`in t&&(Ra=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(ga)||(ga=n)&&setInterval(Xo,n),`ignoreMobileResize`in t&&(Oa=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(ao(Bo)||ao(zo,t.autoRefreshEvents||`none`),Ea=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=Zi(e),r=Y.indexOf(n),i=$a(n);~r&&Y.splice(r,i?6:2),t&&(i?Li.unshift(Z,t,ua,t,la,t):Li.unshift(n,t))},e.clearMatchMedia=function(e){Q.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(oo(e)?Zi(e):e).getBoundingClientRect(),i=r[n?vo:yo]*t||0;return n?r.right-i>0&&r.left+i<Z.innerWidth:r.bottom-i>0&&r.top+i<Z.innerHeight},e.positionInViewport=function(e,t,n){oo(e)&&(e=Zi(e));var r=e.getBoundingClientRect(),i=r[n?vo:yo],a=t==null?i/2:t in Wo?Wo[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/Z.innerWidth:(r.top+a)/Z.innerHeight},e.killAll=function(e){if(Q.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=es.killAll||[];es={},t.forEach(function(e){return e()})}},e}(),$.version=`3.15.0`,$.saveStyles=function(e){return e?pa(e).forEach(function(e){if(e&&e.style){var t=is.indexOf(e);t>=0&&is.splice(t,5),is.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),X.core.getCache(e),Ma())}}):is},$.revert=function(e,t){return ss(!e,t)},$.create=function(e,t){return new $(e,t)},$.refresh=function(e){return e?$o(!0):(sa||$.register())&&hs(!0)},$.update=function(e){return++Y.cache&&ys(e===!0?2:0)},$.clearScrollMemory=cs,$.maxScroll=function(e,t){return io(e,t?Yi:Xi)},$.getScrollFunc=function(e,t){return $i(Zi(e),t?Yi:Xi)},$.getById=function(e){return Jo[e]},$.getAll=function(){return Q.filter(function(e){return e.vars.id!==`ScrollSmoother`})},$.isScrolling=function(){return!!Ha},$.snapDirectional=Io,$.addEventListener=function(e,t){var n=es[e]||(es[e]=[]);~n.indexOf(t)||n.push(t)},$.removeEventListener=function(e,t){var n=es[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},$.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=X.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&so(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return so(a)&&(a=a(),zo($,`refresh`,function(){return a=t.batchMax()})),pa(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push($.create(t))}),n},Fs=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Is=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(aa.isTouch?` pinch-zoom`:``):`none`,t===la&&e(ua,n)},Ls={auto:1,scroll:1},Rs=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||X.core.getCache(i),o=Ba(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==ua&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Ls[(s=ko(i)).overflowY]||Ls[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!$a(i)&&(Ls[(s=ko(i)).overflowY]||Ls[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},zs=function(e,t,n,r){return aa.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=Rs,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&zo(ca,aa.eventTypes[0],Hs,!1,!0)},onDisable:function(){return Bo(ca,aa.eventTypes[0],Hs,!0)}})},Bs=/(input|label|select|textarea)/i,Hs=function(e){var t=Bs.test(e.target.tagName);(t||Vs)&&(e._gsapAllow=!0,Vs=t)},Us=function(e){lo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||=`wheel,touch`,e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=Zi(e.target)||la,l=X.core.globals().ScrollSmoother,u=l&&l.get(),d=ja&&(e.content&&Zi(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=$i(c,Xi),p=$i(c,Yi),m=1,h=(aa.isTouch&&Z.visualViewport?Z.visualViewport.scale*Z.visualViewport.width:Z.outerWidth)/Z.innerWidth,g=0,_=so(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=zs(c,e.type,!0,i),x=function(){return y=!1},S=Ya,C=Ya,w=function(){s=io(c,Xi),C=ma(+!!ja,s),n&&(S=ma(0,io(c,Yi))),v=us},T=function(){d._gsap.y=Xa(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Xa(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Xa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=Y.cache,ys()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&X.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return ja&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Xa((Z.visualViewport&&Z.visualViewport.scale||1)/h),D.pause(),e!==m&&Is(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=us},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{Y.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Fs(p,i,o,io(c,Yi)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Fs(f,i,o,io(c,Xi)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(ja&&D.vars.scrollY>=s||i>=s-1)&&X.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Ba()-g>1e3&&(v=0,g=Ba())},e.onChange=function(e,t,r,i,a){if(us!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&ys()},e.onEnable=function(){Is(c,!n&&`x`),$.addEventListener(`refresh`,j),zo(Z,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){Is(c,!0),Bo(Z,`resize`,j),$.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new aa(e),o.iOS=ja,ja&&!f()&&f(1),ja&&X.ticker.add(Ya),A=o._dc,D=X.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:Ms(f,f(),function(){return D.pause()})},onUpdate:ys,onComplete:A.vars.onComplete}),o},$.sort=function(e){if(so(e))return Q.sort(e);var t=Z.pageYOffset||0;return $.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Z.innerHeight}),Q.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},$.observe=function(e){return new aa(e)},$.normalizeScroll=function(e){if(e===void 0)return Da;if(e===!0&&Da)return Da.enable();if(e===!1){Da&&Da.kill(),Da=e;return}var t=e instanceof aa?e:Us(e);return Da&&Da.target===t.target&&Da.kill(),$a(t.target)&&(Da=t),t},$.core={_getVelocityProp:ea,_inputObserver:zs,_scrollers:Y,_proxies:Li,bridge:{ss:function(){Ha||rs(`scrollStart`),Ha=Ba()},ref:function(){return _a}}},Qa()&&X.registerPlugin($)})),Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc=e((()=>{qs=typeof Symbol==`function`?Symbol():`_split`,Ys=()=>Js||mc.register(window.gsap),Xs=typeof Intl<`u`&&`Segmenter`in Intl?new Intl.Segmenter:0,Zs=e=>e?typeof e==`string`?Zs(document.querySelectorAll(e)):`length`in e?Array.from(e).reduce((e,t)=>(typeof t==`string`?e.push(...Zs(t)):e.push(t),e),[]):[e]:[],Qs=e=>Zs(e).filter(e=>e&&e.nodeType===1),$s=[],ec=function(){},tc={add:e=>e()},nc=/\s+/g,rc=RegExp(`\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.`,`gu`),ic={left:0,top:0,width:0,height:0},ac=(e,t)=>{for(;++t<e.length&&e[t]===ic;);return e[t]||ic},oc=({element:e,html:t,ariaL:n,ariaH:r})=>{e.innerHTML=t,n?e.setAttribute(`aria-label`,n):e.removeAttribute(`aria-label`),r?e.setAttribute(`aria-hidden`,r):e.removeAttribute(`aria-hidden`)},sc=(e,t)=>{if(t){let n=new Set(e.join(``).match(t)||$s),r=e.length,i,a,o,s;if(n.size)for(;--r>-1;){a=e[r];for(o of n)if(o.startsWith(a)&&o.length>a.length){for(i=0,s=a;o.startsWith(s+=e[r+ ++i])&&s.length<o.length;);if(i&&s.length===o.length){e[r]=o,e.splice(r+1,i);break}}}}return e},cc=e=>window.getComputedStyle(e).display===`inline`&&(e.style.display=`inline-block`),lc=(e,t,n)=>t.insertBefore(typeof e==`string`?document.createTextNode(e):e,n),uc=(e,t,n)=>{let r=t[e+`sClass`]||``,{tag:i=`div`,aria:a=`auto`,propIndex:o=!1}=t,s=e===`line`?`block`:`inline-block`,c=r.indexOf(`++`)>-1,l=t=>{let l=document.createElement(i),u=n.length+1;return r&&(l.className=r+(c?` `+r+u:``)),o&&l.style.setProperty(`--`+e,u+``),a!==`none`&&l.setAttribute(`aria-hidden`,`true`),i!==`span`&&(l.style.position=`relative`,l.style.display=s),l.textContent=t,n.push(l),l};return c&&(r=r.replace(`++`,``)),l.collection=n,l},dc=(e,t,n,r)=>{let i=uc(`line`,n,r),a=window.getComputedStyle(e).textAlign||`left`;return(n,r)=>{let o=i(``);for(o.style.textAlign=a,e.insertBefore(o,t[n]);n<r;n++)o.appendChild(t[n]);o.normalize()}},fc=(e,t,n,r,i,a,o,s,c,l)=>{var u;let d=Array.from(e.childNodes),f=0,{wordDelimiter:p,reduceWhiteSpace:m=!0,prepareText:h}=t,g=e.getBoundingClientRect(),_=g,v=!m&&window.getComputedStyle(e).whiteSpace.substring(0,3)===`pre`,y=0,b=n.collection,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;for(typeof p==`object`?(C=p.delimiter||p,S=p.replaceWith||``):S=p===``?``:p||` `,x=S!==` `;f<d.length;f++)if(w=d[f],w.nodeType===3){for(F=w.textContent||``,m?F=F.replace(nc,` `):v&&(F=F.replace(/\n/g,S+`
`)),h&&(F=h(F,e)),w.textContent=F,T=S||C?F.split(C||S):F.match(s)||$s,L=T[T.length-1],O=x?L.slice(-1)===` `:!L,L||T.pop(),_=g,D=x?T[0].charAt(0)===` `:!T[0],D&&lc(` `,e,w),T[0]||T.shift(),sc(T,c),a&&l||(w.textContent=``),k=1;k<=T.length;k++)if(I=T[k-1],!m&&v&&I.charAt(0)===`
`&&((u=w.previousSibling)==null||u.remove(),lc(document.createElement(`br`),e,w),I=I.slice(1)),!m&&I===``)lc(S,e,w);else if(I===` `)e.insertBefore(document.createTextNode(` `),w);else{if(x&&I.charAt(0)===` `&&lc(` `,e,w),y&&k===1&&!D&&b.indexOf(y.parentNode)>-1?(E=b[b.length-1],E.appendChild(document.createTextNode(r?``:I))):(E=n(r?``:I),lc(E,e,w),y&&k===1&&!D&&E.insertBefore(y,E.firstChild)),r)for(j=Xs?sc([...Xs.segment(I)].map(e=>e.segment),c):I.match(s)||$s,R=0;R<j.length;R++)E.appendChild(j[R]===` `?document.createTextNode(` `):r(j[R]));if(a&&l){if(F=w.textContent=F.substring(I.length+1,F.length),A=E.getBoundingClientRect(),A.top>_.top&&A.left<=_.left){for(M=e.cloneNode(),N=e.childNodes[0];N&&N!==E;)P=N,N=N.nextSibling,M.appendChild(P);e.parentNode.insertBefore(M,e),i&&cc(M)}_=A}(k<T.length||O)&&lc(k>=T.length?` `:x&&I.slice(-1)===` `?` `+S:S,e,w)}e.removeChild(w),y=0}else w.nodeType===1&&(o&&o.indexOf(w)>-1?(b.indexOf(w.previousSibling)>-1&&b[b.length-1].appendChild(w),y=w):(fc(w,t,n,r,i,a,o,s,c,!0),y=0),i&&cc(w))},pc=class e{constructor(e,t){this.isSplit=!1,Ys(),this.elements=Qs(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(e=>{var n;t.overwrite!==!1&&((n=e[qs])==null||n._data.orig.filter(({element:t})=>t===e).forEach(oc)),e[qs]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],r,i=()=>{let e=n.length,t;for(;e--;){t=n[e];let r=t.element.offsetWidth;if(r!==t.width){t.width=r,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<`u`&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(i,200)})},ec(this),this.split(t)}split(e){return(this._ctx||tc).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t=`chars,words,lines`,aria:n=`auto`,deepSlice:r=!0,smartWrap:i,onSplit:a,autoSplit:o=!1,specialChars:s,mask:c}=this.vars,l=t.indexOf(`lines`)>-1,u=t.indexOf(`chars`)>-1,d=t.indexOf(`words`)>-1,f=u&&!d&&!l,p=s&&(`push`in s?RegExp(`(?:`+s.join(`|`)+`)`,`gu`):s),m=p?RegExp(p.source+`|`+rc.source,`gu`):rc,h=!!e.ignore&&Qs(e.ignore),{orig:g,animTime:_,obs:v}=this._data,y;(u||d||l)&&(this.elements.forEach((t,a)=>{g[a]={element:t,html:t.innerHTML,ariaL:t.getAttribute(`aria-label`),ariaH:t.getAttribute(`aria-hidden`)},n===`auto`?t.setAttribute(`aria-label`,(t.textContent||``).trim()):n===`hidden`&&t.setAttribute(`aria-hidden`,`true`);let o=[],s=[],c=[],_=u?uc(`char`,e,o):null,v=uc(`word`,e,s),y,b,x,S;if(fc(t,e,v,_,f,r&&(l||f),h,m,p,!1),l){let n=Zs(t.childNodes),r=dc(t,n,e,c),i,a=[],o=0,s=n.map(e=>e.nodeType===1?e.getBoundingClientRect():ic),l=ic,u;for(y=0;y<n.length;y++)i=n[y],i.nodeType===1&&(i.nodeName===`BR`?((!y||n[y-1].nodeName!==`BR`)&&(a.push(i),r(o,y+1)),o=y+1,l=ac(s,y)):(u=s[y],y&&u.top>l.top&&u.left<l.left+l.width-1&&(r(o,y),o=y),l=u));o<y&&r(o,y),a.forEach(e=>e.parentNode?.removeChild(e))}if(!d){for(y=0;y<s.length;y++)if(b=s[y],u||!b.nextSibling||b.nextSibling.nodeType!==3)if(i&&!l){for(x=document.createElement(`span`),x.style.whiteSpace=`nowrap`;b.firstChild;)x.appendChild(b.firstChild);b.replaceWith(x)}else b.replaceWith(...b.childNodes);else S=b.nextSibling,S&&S.nodeType===3&&(S.textContent=(b.textContent||``)+(S.textContent||``),b.remove());s.length=0,t.normalize()}this.lines.push(...c),this.words.push(...s),this.chars.push(...o)}),c&&this[c]&&this.masks.push(...this[c].map(e=>{let t=e.cloneNode();return e.replaceWith(t),t.appendChild(e),e.className&&(t.className=e.className.trim().split(` `).map(e=>e+`-mask`).join(` `)),t.style.overflow=`clip`,t}))),this.isSplit=!0,Ks&&l&&o&&Ks.addEventListener(`loadingdone`,this._split),(y=a&&a(this))&&y.totalTime&&(this._data.anim=_?y.totalTime(_):y),l&&o&&this.elements.forEach((e,t)=>{g[t].width=e.offsetWidth,v&&v.observe(e)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Ks?.removeEventListener(`loadingdone`,this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:r}=this._data;this.kill(),n.forEach(oc),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,r&&(this._data.animTime=r.totalTime(),r.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(t,n){return new e(t,n)}static register(e){Gs=Gs||e||window.gsap,Gs&&(Zs=Gs.utils.toArray,ec=Gs.core.context||ec),!Js&&window.innerWidth>0&&(Ks=document.fonts,Js=!0)}},pc.version=`3.15.0`,mc=pc}));function gc(e,t,n){return Math.max(e,Math.min(t,n))}function _c(e,t,n){return(1-n)*e+n*t}function vc(e,t,n,r){return _c(e,t,1-Math.exp(-n*r))}function yc(e,t){return(e%t+t)%t}function bc(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}function xc(e,t){return e===1?Ec:e===2?t:1}var Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc=e((()=>{Sc=`1.3.25`,Cc=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=gc(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=vc(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}},wc=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=bc(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Tc=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},Ec=100/6,Dc={passive:!1},Oc=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Tc;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,Dc),this.element.addEventListener(`touchstart`,this.onTouchStart,Dc),this.element.addEventListener(`touchmove`,this.onTouchMove,Dc),this.element.addEventListener(`touchend`,this.onTouchEnd,Dc)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,Dc),this.element.removeEventListener(`touchstart`,this.onTouchStart,Dc),this.element.removeEventListener(`touchmove`,this.onTouchMove,Dc),this.element.removeEventListener(`touchend`,this.onTouchEnd,Dc)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=xc(r,this.window.width),a=xc(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},kc=e=>Math.min(1,1.001-2**(-10*e)),Ac=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Cc;emitter=new Tc;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1}={}){window.lenisVersion=Sc,window.lenis||(window.lenis={}),window.lenis.version=Sc,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=kc:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T},this.dimensions=new wc(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new Oc(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)){this.reset();return}};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty(`overflow`);return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty(`overflow`,`clip`);return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof HTMLElement&&f?.nodeType&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=gc(0,f,this.limit);if(f===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=kc:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?yc(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}}})),Mc,Nc=e((()=>{Mc=`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 500 500"
          style="enable-background: new 0 0 500 500"
          xml:space="preserve"
        >
          <g id="OBJECTS">
            <g>
              <defs>
                <rect
                  id="SVGID_00000096047778527669984780000011793510740351694481_"
                  y="39.002"
                  width="500"
                  height="460.998"
                />
              </defs>
              <clipPath
                id="SVGID_00000093153939579634936360000016450208163738171783_"
              >
                <use
                  xlink:href="#SVGID_00000096047778527669984780000011793510740351694481_"
                  style="overflow: visible"
                />
              </clipPath>
              <g
                style="
                  clip-path: url(#SVGID_00000093153939579634936360000016450208163738171783_);
                "
              >
                <g>
                  <linearGradient
                    id="SVGID_00000170279579684690805840000012784778096686606746_"
                    gradientUnits="userSpaceOnUse"
                    x1="209.7526"
                    y1="103.0204"
                    x2="228.7526"
                    y2="211.6877"
                  >
                    <stop offset="0" style="stop-color: #c779fc" />
                    <stop offset="0.1258" style="stop-color: #c379fc" />
                    <stop offset="0.2475" style="stop-color: #b77afb" />
                    <stop offset="0.3675" style="stop-color: #a47cfb" />
                    <stop offset="0.4859" style="stop-color: #897efa" />
                    <stop offset="0.5562" style="stop-color: #757ff9" />
                    <stop offset="0.6281" style="stop-color: #6989f8" />
                    <stop offset="0.7575" style="stop-color: #4aa4f6" />
                    <stop offset="0.9284" style="stop-color: #17d0f2" />
                    <stop offset="1" style="stop-color: #00e4f0" />
                  </linearGradient>
                  <path
                    style="
                      fill: url(#SVGID_00000170279579684690805840000012784778096686606746_);
                    "
                    d="M159.256,117.426      c0,0-0.279,11.034-0.613,18.387c-3.667,10.604-8.499,18.434-5.833,28.436c2.666,10.001,5.095,14.252,2.839,19.335      c-2.256,5.083-7.339,13.165-7.006,19.124c9.917,2.126,24.499,1.959,24.499,1.959s-2.334-12,0-19.834      c0.751,3.167,4.585,17.583,8.001,20.917c13.833,1.25,72.583,11.153,114.75-7.715c2-11.368,5.834-24.831,3.167-32.35      c-2.667-7.519-4.325-10.171-4-15.019c0.833-12.407-2.336-17.966-6.418-22.066s-3.25-11.829-4.416-16.631      c-1.166-4.802-7.666-14.968-13.333-18.635c-5.667-3.667-9.126-5.271-12.938-13.334c-3.813-8.063-15.225-18.664-19.737-21.52      c-4.513-2.855-14.951-7.742-27.575-7.433C198.018,51.356,159.954,74.685,159.256,117.426z"
                  />
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M159.256,117.426c0,0-0.279,11.034-0.613,18.387c-3.667,10.604-8.499,18.434-5.833,28.436      c2.666,10.001,5.095,14.252,2.839,19.335c-2.256,5.083-7.339,13.165-7.006,19.124c9.917,2.126,24.499,1.959,24.499,1.959      s-2.334-12,0-19.834c0.751,3.167,4.585,17.583,8.001,20.917c13.833,1.25,72.583,11.153,114.75-7.715      c2-11.368,5.834-24.831,3.167-32.35c-2.667-7.519-4.325-10.171-4-15.019c0.833-12.407-2.336-17.966-6.418-22.066      s-3.25-11.829-4.416-16.631c-1.166-4.802-7.666-14.968-13.333-18.635c-5.667-3.667-9.126-5.271-12.938-13.334      c-3.813-8.063-15.225-18.664-19.737-21.52c-4.513-2.855-14.951-7.742-27.575-7.433      C198.018,51.356,159.954,74.685,159.256,117.426z"
                  />
                </g>
                <g>
                  <path
                    style="
                      fill: #f4c2ad;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M416.975,449.262c0,0,3.349,9.632,3.758,12.144c0.409,2.512,0.491,14.678,2.325,19.428c1.834,4.75,3.009,6.917,4.005,12      c0.996,5.083-0.097,8.917,3.241,8.417c3.338-0.5,6.505-2.583,6.005-9.25s-1-6.583-1-7.75s1.052-4,1.052-4      s8.948,11.249,9.448,12.166c0.5,0.917,5.582,9.834,6.916,12.084c1.334,2.25,2.25,9.084,5.417,13.25      c3.167,4.166,6.001,3.749,6.167,2.916c0.166-0.833,0-4.833,0-4.833s2.416-6.251,2.833-7.917c0.417-1.666,0.417-15.832,0-19.166      c-0.417-3.334,0.25-10.75-0.5-12.167c-0.75-1.417-17.333-35.544-17.333-35.544L416.975,449.262z"
                  />
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M464.309,515.833c-1.25-7.417-3.083-13.584-3.75-15.167c-0.667-1.583-4.001-13.749-4.834-16.416"
                  />
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M467.454,500.08c-0.48-2.164-2.729-11.162-3.396-13.579s-2.042-7.084-2.042-7.084"
                  />
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M466.995,485.835c-0.521-1.418-3.396-8.418-3.396-8.418"
                  />
                </g>
                <g>
                  <path
                    style="
                      fill: #ffc800;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M318.221,405.231H153.726c0,0-22.001,55.103-28.667,109.103h230.583C355.642,514.334,334.888,454.129,318.221,405.231z"
                  />
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M221.392,405.231c0,0,1,55.269,2.25,70.269s8.75,24.5,8.75,24.5l2,14.334"
                  />
                  <g>
                    <path
                      style="fill: #1f1f1f"
                      d="M177.429,452.784c1.262,0.949,2.458,1.95,3.605,2.988l1.713,1.563l1.7,1.48       c1.152,0.964,2.172,2.023,3.273,3.015c1.151,0.969,2.205,2.022,3.309,3.027c1.086,1.021,2.181,2.033,3.288,3.033       c1.086,1.023,2.168,2.044,3.217,3.11c1.056,1.059,1.985,2.261,2.883,3.517c0.883,1.272,1.791,2.535,2.718,3.786       c0.471,0.617,0.939,1.242,1.443,1.823c0.517,0.567,1.056,1.109,1.611,1.631c1.129,1.02,2.3,1.991,3.504,2.92       c1.204,0.927,2.383,1.891,3.609,2.79l3.715,2.65c1.258,0.855,2.542,1.673,3.813,2.507c1.288,0.81,2.59,1.597,3.907,2.357       c1.309,0.773,2.662,1.473,4.01,2.171c1.341,0.704,2.716,1.379,4.093,1.954l-0.74-0.064h0.001       c1.231-0.239,2.468-0.644,3.656-1.115c1.197-0.458,2.359-1.018,3.506-1.601c0.577-0.284,1.129-0.626,1.693-0.936       c0.565-0.309,1.12-0.64,1.655-1.015c0.539-0.364,1.044-0.801,1.56-1.21c0.501-0.44,0.979-0.929,1.465-1.39       c0.965-0.939,1.926-1.861,2.95-2.642c1.03-0.77,2.15-1.346,3.313-1.852c1.172-0.485,2.434-0.806,3.737-1.072       c1.282-0.303,2.597-0.57,3.819-1.008c1.257-0.38,2.352-1.045,3.498-1.623c1.134-0.599,2.289-1.168,3.399-1.812       c1.125-0.621,2.223-1.287,3.337-1.93c1.106-0.653,2.19-1.345,3.267-2.048c1.071-0.71,2.171-1.382,3.21-2.139l3.121-2.269       c1.044-0.751,2.013-1.6,3.012-2.409c1-0.809,1.984-1.636,2.945-2.489c0.413-0.367,1.046-0.329,1.412,0.084       c0.367,0.413,0.329,1.046-0.084,1.412c-0.011,0.01-0.021,0.019-0.031,0.026l-0.008,0.007l-3.03,2.457       c-1.014,0.813-2.006,1.655-3.058,2.419l-3.118,2.344c-1.026,0.798-2.114,1.513-3.174,2.266       c-1.07,0.736-2.119,1.506-3.208,2.216l-3.268,2.128c-1.079,0.725-2.205,1.376-3.311,2.058c-1.115,0.668-2.211,1.369-3.35,1.996       l-3.39,1.929l-3.44,1.835c-1.142,0.624-2.32,1.175-3.478,1.766c-1.157,0.594-2.339,1.136-3.516,1.69       c-1.171,0.564-2.364,1.083-3.555,1.608c-1.184,0.538-2.395,1.018-3.595,1.523c-1.21,0.48-2.416,0.972-3.643,1.416       c-1.225,0.459-2.444,0.886-3.721,1.292h-0.001c-0.253,0.081-0.521,0.048-0.741-0.064c-2.752-1.441-5.393-2.969-8.019-4.565       c-1.313-0.792-2.602-1.623-3.903-2.434l-3.842-2.526l-3.781-2.617l-3.717-2.707c-1.25-0.888-2.434-1.864-3.653-2.793       l-1.817-1.409l-1.772-1.466c-1.173-0.987-2.383-1.933-3.526-2.955l-3.443-3.054c-1.15-1.015-2.229-2.109-3.347-3.16       c-1.112-1.057-2.224-2.115-3.27-3.241l-3.189-3.323l-3.049-3.482l-1.52-1.743l-1.414-1.8l-2.824-3.6       c-0.335-0.428-0.26-1.045,0.167-1.38c0.357-0.28,0.849-0.273,1.196-0.014L177.429,452.784z"
                    />
                  </g>
                  <g>
                    <path
                      style="fill: #1f1f1f"
                      d="M249.857,465.759c0.001-0.001-0.627,2.365-1.744,5.824c-0.564,1.732-1.245,3.744-2.04,5.878       c-0.795,2.134-1.679,4.4-2.667,6.625c-0.469,1.123-1.007,2.218-1.516,3.305c-0.497,1.091-1.082,2.125-1.597,3.147       c-0.534,1.014-1.119,1.962-1.638,2.878c-0.545,0.902-1.119,1.727-1.619,2.502c-0.508,0.771-1.065,1.426-1.511,2.033       c-0.439,0.613-0.895,1.099-1.27,1.499c-0.742,0.807-1.166,1.267-1.166,1.267c-0.374,0.406-1.007,0.433-1.413,0.059       c-0.407-0.374-0.433-1.007-0.058-1.414c0.008-0.009,0.017-0.019,0.026-0.027l0.049-0.049c0,0,0.411-0.41,1.13-1.129       c0.355-0.364,0.79-0.805,1.218-1.383c0.433-0.571,0.978-1.171,1.472-1.909c0.472-0.753,1.015-1.546,1.533-2.425       c0.493-0.895,1.05-1.816,1.56-2.809c0.505-0.998,0.999-2.039,1.452-3.124c0.453-1.085,0.935-2.174,1.349-3.296       c0.435-1.111,0.858-2.227,1.236-3.341c0.36-1.12,0.637-2.254,0.782-3.39c0.171-1.126,0.275-2.232,0.421-3.259       c0.146-1.027,0.333-1.978,0.582-2.829c0.237-0.855,0.484-1.63,0.837-2.274c0.346-0.648,0.735-1.188,1.138-1.61       c0.381-0.432,0.764-0.738,1.049-0.947c0.288-0.209,0.475-0.318,0.475-0.318l0.711-0.414c0.396-0.23,0.905-0.097,1.136,0.3       C249.888,465.325,249.912,465.553,249.857,465.759z"
                    />
                  </g>
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M238.267,405.231c0,0,0,61.421-0.5,71.47c-0.5,10.049-1.915,15.031-3.375,21.1"
                  />
                </g>
                <g>
                  <g>
                    <path
                      style="fill: #ffffff"
                      d="M150.392,408l-11,21.822c0,0,12.834,30.011,51.833,48.511c4.85,2.301,6.542,0.542,8.042-1.708       s29.125-49.25,29.125-49.25h6.375c0,0,12.035,31.25,27.125,52.038c1.458,2.008,2.5,3.212,5.75,2.462s52.125-18.352,68.5-32.613       l-9.875-33.512L150.392,408z"
                    />
                    <path
                      style="fill: #dbdbff"
                      d="M333.073,438.848l-6.807-23.098L150.392,408l-10.362,20.558       c7.198,2.961,29.425,10.48,79.456,13.954c4.975-8.449,8.906-15.137,8.906-15.137h6.375c0,0,2.645,6.869,7.012,16.31       C288.452,445.374,318.858,441.422,333.073,438.848z"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M150.392,408l-11,21.822c0,0,12.834,30.011,51.833,48.511c4.85,2.301,6.542,0.542,8.042-1.708s29.125-49.25,29.125-49.25h6.375       c0,0,12.035,31.25,27.125,52.038c1.458,2.008,2.5,3.212,5.75,2.462s52.125-18.352,68.5-32.613l-9.875-33.512L150.392,408z"
                    />
                  </g>
                  <g>
                    <path
                      style="fill: #f4c2ad"
                      d="M258.892,120.853c0,0,1.991,18.922,6.334,32.647c6.333,20.016,13,32,30.667,37.5v49.333h-78.834       v-52.166c0,0,10.448-7.591,9.184-16.334c-0.796-5.5-20.578-40.556-20.578-40.556L258.892,120.853z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M225.636,177.296c3.604,1.859,9.957,5.112,14.09,7.079c6.041,2.875,9.041,1.625,11.666-2.5       c2.261-3.552,9.027-19.836,10.652-40.986c-2.145-10.465-3.152-20.036-3.152-20.036l-53.228,10.425       c0,0,19.782,35.056,20.578,40.556C226.517,173.73,226.238,175.573,225.636,177.296z"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M258.892,120.853c0,0,1.991,18.922,6.334,32.647c6.333,20.016,13,32,30.667,37.5v49.333h-78.834v-52.166       c0,0,10.448-7.591,9.184-16.334c-0.796-5.5-20.578-40.556-20.578-40.556L258.892,120.853z"
                    />
                  </g>

                  <path
                    style="
                      fill: #ffffff;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M244.309,194.75c0,0,5.083,8.399,9.333,11.762v38.863h-35.875V196L244.309,194.75z"
                  />

                  <polygon
                    style="
                      fill: #ffffff;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    points="      257.567,193.626 253.642,206.512 245.017,210.673 245.017,250 288.642,250 288.642,201.75     "
                  />
                  <g>
                    <g>
                      <path
                        style="fill: #575dff"
                        d="M250.778,219c0,0,27.114-17.333,33.78-37.333c0,0,3.5-1.75,6.25,0s2.15,3.842,2.65,4.342        s38.849,19.325,44.599,21.908c5.75,2.583,6.666,4.5,8.5,7.583c1.834,3.083,97.084,169.75,100.084,180.25s1.5,28,1.5,28        s7.625,21.125,7.875,22.5s0,2.75-1,3.625s-8.125,5.625-22.875,9.125s-19.75,3.625-20.25,2.5s-6.875-21.875-6.875-21.875        s-21.29-3.958-28.957-14.291c-7.667-10.333-41.334-84.834-41.334-84.834s-1.667,4.333-1.5,5.5s4.833,35.834,4.333,40.167        c-0.5,4.333-7.833,11.333-7.833,11.333s1.001,22.167,0.667,24c-0.334,1.833-1.334,3.333-1.334,3.333s-31.832,10-95.666,6.5        s-83.666-15.333-85-16c-1.334-0.667-2.667-3-2.167-6.5s6-21,6-21s-3.166-16-2.666-19.5s15.666-17.667,15.666-17.667        s-12.209-42.791-13.709-45.166s-3.25-9.25-3.25-11.25s6.375-11,6.375-11s-3.625-39.375-3.875-46.75s-1.875-16.25,7-21.625        s54.5-26.875,54.5-26.875s2.375-4,6.75-3.5C227.598,200.339,236.79,212.625,250.778,219z"
                      />
                      <path
                        style="fill: #61fcff"
                        d="M333.226,346c-0.114-0.798,0.629-3.076,1.11-4.438c0.235-0.917,0.421-1.728,0.438-2.068        c0.048-0.997,4.368-61.076,3.118-71.16c0,0-9.25,72.416-11,79.166c3.5,15,4.668,32.75,2.834,37        c-1.834,4.25-2.834,6.5-2.834,6.5s-33.514,8.331-69.507,11.281c0,0,45.356,0.495,72.429-4.866        c0.824-0.802,7.277-7.192,7.745-11.248C338.059,381.834,333.393,347.167,333.226,346z"
                      />
                      <path
                        style="fill: #61fcff"
                        d="M446.642,395.75c-2.755-9.644-83.316-151.001-97.866-176.395        c0.033,0.077,33.869,77.65,39.366,88.395C393.642,318.5,446.642,395.75,446.642,395.75z"
                      />
                      <path
                        style="fill: #61fcff"
                        d="M157.226,230.56c-0.407-2.878,0.642-6.608,3.154-8.917        c2.513-2.309,24.794-20.686,24.795-20.686c-11.569,5.612-23.344,11.457-27.408,13.919c-8.875,5.375-7.25,14.25-7,21.625        s3.875,46.75,3.875,46.75S157.633,233.438,157.226,230.56z"
                      />
                      <path
                        style="fill: #393ecc"
                        d="M250.778,219c-10.976-5.002-18.994-13.655-26.087-24.797        c-10.116-2.439-18.011-2.333-19.031,0.635l-6.287,18.274l-11.896,34.582c-0.789,2.294,2.717,5.768,8.727,9.213        c-2.265,0.253-4.747,0.416-7.469,0.457c0,0-0.817,1.751-0.897,2.541c-0.081,0.79-16.185,9.198-17.964,11.027        c-1.778,1.828-1.196,9.26,0.922,15.591c-4.551,6.823-12.129,14.593-13.824,16.849c-0.691,0.919-1.882,4.624-3.075,8.927        c3.999,12.672,11.33,38.367,11.33,38.367s-0.502,0.47-1.32,1.252c0.919,1.032,1.805,1.922,2.627,2.607        c6.407,5.344,9.211,4.959,11.84,4.643c2.63-0.317,23.395-9.257,31.46-16.056c8.065-6.799,10.507-12.666,10.488-15.766        c-0.018-3.102,0.215-19.328,0.24-19.577c1.025-2.659,2.853-12.442,3.098-12.751c4.094-4.357,6.638-12.055,6.368-13.507        c-0.233-1.253-1.516-11.143-2.326-14.317c5.561,0.521,9.415-0.175,10.107-2.186l11.896-34.583l4.819-14.013        C252.227,218.071,250.778,219,250.778,219z"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-width: 2;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M250.778,219c0,0,27.114-17.333,33.78-37.333c0,0,3.5-1.75,6.25,0s2.15,3.842,2.65,4.342s38.849,19.325,44.599,21.908        c5.75,2.583,6.666,4.5,8.5,7.583c1.834,3.083,97.084,169.75,100.084,180.25s1.5,28,1.5,28s7.625,21.125,7.875,22.5        s0,2.75-1,3.625s-8.125,5.625-22.875,9.125s-19.75,3.625-20.25,2.5s-6.875-21.875-6.875-21.875s-21.29-3.958-28.957-14.291        c-7.667-10.333-41.334-84.834-41.334-84.834s-1.667,4.333-1.5,5.5s4.833,35.834,4.333,40.167        c-0.5,4.333-7.833,11.333-7.833,11.333s1.001,22.167,0.667,24c-0.334,1.833-1.334,3.333-1.334,3.333s-31.832,10-95.666,6.5        s-83.666-15.333-85-16c-1.334-0.667-2.667-3-2.167-6.5s6-21,6-21s-3.166-16-2.666-19.5s15.666-17.667,15.666-17.667        s-12.209-42.791-13.709-45.166s-3.25-9.25-3.25-11.25s6.375-11,6.375-11s-3.625-39.375-3.875-46.75s-1.875-16.25,7-21.625        s54.5-26.875,54.5-26.875s2.375-4,6.75-3.5C227.598,200.339,236.79,212.625,250.778,219z"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M405.017,439.625c0,0,27-5.938,43.125-15.875"
                    />
                    <g>
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M445.599,425.236c0,0,5.82,13.906,9.213,24.804"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M442.439,426.899c0,0,5.981,14.344,9.3,25.051"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M439.747,428.676c0,0,5.854,14.208,9.099,24.726"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M436.727,429.822c0,0,5.511,14.731,8.68,25.06"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M433.375,430.915c0,0,5.742,15.022,8.837,25.161"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M430.304,432.315c0,0,5.596,14.896,8.617,24.844"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M427.063,433.262c0,0,5.761,15.053,8.707,24.813"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M423.869,434.346c0,0,5.401,15.086,8.273,24.654"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M420.732,435.555c0,0,5.329,14.826,8.127,24.205"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M417.563,436.701c0,0,5.096,14.624,7.819,23.813"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M414.192,437.283c0,0,4.828,14.958,7.477,23.957"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="M410.846,438.19        c0,0,4.967,14.773,7.54,23.583"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M407.686,438.994c0,0,4.518,14.517,7.018,23.137"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M342.832,210.673c1.94,9.673-0.607,39.494-4.94,57.661c0.167,2.667-1.5,37.166-3.166,72.166c0,0,11.5-21.666,14.833-38.5       c8.5-21,7.833-30,7.833-30"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M334.726,340.5c0,0,14.916-11.5,24.041-26.375"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M346.064,214.669       c2.202,15.831-2.128,44.712-8.213,56.834"
                    />
                    <g>
                      <path
                        style="fill: #1f1f1f"
                        d="M311.723,264.055c-0.083,1.185-0.252,2.303-0.442,3.434c-0.208,1.123-0.441,2.239-0.723,3.343        c-0.15,0.549-0.273,1.105-0.445,1.648l-0.496,1.633c-0.359,1.079-0.734,2.152-1.163,3.206        c-0.196,0.534-0.428,1.054-0.659,1.573c-0.235,0.517-0.443,1.047-0.703,1.553l-0.761,1.526        c-0.242,0.515-0.548,0.996-0.818,1.496c-0.287,0.49-0.54,1.001-0.855,1.475l-0.915,1.439c-0.608,0.96-1.311,1.856-1.963,2.787        l0.053-0.079l-1.362,1.823l-1.45,1.609c-0.95,1.096-1.98,2.084-2.983,3.109c-0.996,1.032-2.025,2.025-3.07,3        c-1.041,0.979-2.065,1.979-3.122,2.939c-2.142,1.89-4.22,3.854-6.414,5.682c-2.185,1.837-4.323,3.733-6.568,5.498        c-2.237,1.772-4.412,3.626-6.707,5.326c-2.281,1.716-4.521,3.49-6.837,5.159l-6.965,4.987l-7.118,4.77l-1.781,1.19        l-1.824,1.125l-3.649,2.247l-3.649,2.246l-3.734,2.105l-3.737,2.102c-1.244,0.703-2.484,1.414-3.772,2.036l-7.656,3.867        c-2.575,1.242-5.22,2.341-7.827,3.519c-1.315,0.562-2.599,1.198-3.941,1.697l-4.021,1.509l-4.021,1.508        c-0.673,0.242-1.334,0.522-2.018,0.733l-2.059,0.619l-8.234,2.472c-0.514,0.154-1.057-0.138-1.211-0.651        c-0.129-0.432,0.055-0.882,0.42-1.107l0.287-0.177c2.516-1.552,5.084-2.756,7.654-3.912l1.945-0.8        c0.647-0.267,1.265-0.628,1.914-0.891c1.287-0.56,2.557-1.162,3.854-1.684c2.595-1.042,5.213-2.018,7.784-3.143        c2.564-1.132,5.221-2.058,7.817-3.144l7.816-3.263c1.317-0.523,2.599-1.123,3.881-1.724l3.859-1.79        c1.288-0.598,2.583-1.188,3.848-1.832l3.741-2.031l3.699-2.112c0.615-0.355,1.239-0.696,1.846-1.063l1.791-1.153l7.162-4.619        l7.017-4.843c2.336-1.621,4.595-3.348,6.898-5.018c1.153-0.834,2.291-1.687,3.405-2.57c1.119-0.877,2.256-1.733,3.352-2.641        c2.23-1.766,4.352-3.662,6.522-5.5c1.089-0.915,2.151-1.86,3.2-2.819c1.059-0.948,2.109-1.906,3.142-2.883        c1.031-0.979,2.028-1.991,3.043-2.984c1.018-0.99,2.018-1.997,2.981-3.036c0.969-1.032,1.975-2.038,2.871-3.118l1.379-1.594        l1.165-1.622l0.008-0.01l0.046-0.07c0.285-0.472,0.603-0.919,0.859-1.407c0.274-0.476,0.538-0.958,0.738-1.478        c0.207-0.515,0.411-1.029,0.576-1.56c0.177-0.524,0.29-1.082,0.435-1.615c0.112-0.551,0.251-1.082,0.328-1.639l0.262-1.638        c0.148-1.092,0.324-2.149,0.494-3.194c0.076-0.526,0.217-1.023,0.318-1.534c0.12-0.505,0.225-1.012,0.383-1.5        c0.128-0.498,0.277-0.989,0.442-1.477c0.193-0.479,0.332-0.972,0.562-1.445c0.211-0.48,0.425-0.956,0.688-1.43        c0.262-0.475,0.517-0.949,0.845-1.423c0.285-0.476,0.663-0.949,1.037-1.428c0.376-0.49,0.802-0.95,1.314-1.45l0.564-0.553        c0.333-0.326,0.867-0.32,1.193,0.013C311.659,263.584,311.738,263.824,311.723,264.055z"
                      />
                    </g>
                    <g>
                      <path
                        style="fill: #1f1f1f"
                        d="M319.183,309.167c-0.117,0.418-0.284,0.872-0.436,1.314c-0.146,0.453-0.333,0.861-0.503,1.289        c-0.181,0.42-0.333,0.853-0.537,1.262l-0.597,1.23c-0.208,0.405-0.378,0.831-0.618,1.219l-0.683,1.183l-0.683,1.182        c-0.239,0.388-0.513,0.752-0.768,1.129l-0.778,1.121c-0.269,0.367-0.498,0.763-0.8,1.104l-1.761,2.086        c-0.305,0.337-0.561,0.717-0.905,1.019l-0.986,0.943l-1.974,1.883l0.068-0.066l-1.388,1.213l-1.403,1.015        c-0.927,0.699-1.895,1.297-2.849,1.93c-0.95,0.64-1.919,1.242-2.897,1.828c-0.976,0.59-1.941,1.198-2.926,1.771        c-1.984,1.115-3.934,2.301-5.949,3.359c-2.011,1.067-3.994,2.189-6.039,3.19c-2.04,1.009-4.045,2.091-6.118,3.032        c-2.065,0.958-4.106,1.968-6.191,2.882l-6.263,2.727l-6.346,2.53l-1.587,0.632l-1.61,0.571l-3.222,1.141l-3.221,1.142        l-3.264,1.017c-2.185,0.649-4.336,1.408-6.548,1.969c-2.205,0.582-4.424,1.11-6.634,1.667        c-2.222,0.511-4.474,0.897-6.708,1.35c-1.122,0.203-2.23,0.473-3.363,0.619l-3.393,0.45l-3.39,0.448        c-0.566,0.068-1.127,0.166-1.696,0.208l-1.708,0.111l-6.824,0.441c-0.294,0.019-0.547-0.204-0.566-0.498        c-0.018-0.281,0.186-0.526,0.462-0.563l0.059-0.008l6.721-0.868l1.674-0.216c0.558-0.076,1.109-0.21,1.663-0.313l3.317-0.657        l3.31-0.655c1.105-0.204,2.18-0.579,3.267-0.868c2.172-0.601,4.314-1.3,6.464-1.939c2.124-0.756,4.287-1.328,6.478-1.816        l3.28-0.772c1.094-0.262,2.208-0.461,3.314-0.694l3.329-0.681c1.096-0.276,2.205-0.521,3.295-0.825        c1.091-0.299,2.182-0.607,3.256-0.959c0.538-0.173,1.081-0.332,1.616-0.516l1.587-0.598l6.349-2.395l6.273-2.597        c2.081-0.891,4.12-1.876,6.183-2.809c2.067-0.924,4.079-1.965,6.107-2.973c2.03-1.001,3.998-2.123,5.993-3.19        c1.998-1.064,3.939-2.228,5.892-3.368c0.97-0.581,1.918-1.196,2.878-1.792c0.962-0.594,1.912-1.202,2.838-1.843        c0.929-0.635,1.885-1.242,2.764-1.924l1.342-0.997l1.166-1.04l0.012-0.01l0.057-0.057c0.591-0.645,1.217-1.249,1.769-1.925        c0.278-0.334,0.574-0.649,0.836-0.995c0.28-0.328,0.475-0.735,0.715-1.096l1.361-2.204c0.234-0.356,0.396-0.767,0.596-1.145        c0.189-0.386,0.375-0.772,0.591-1.136c0.426-0.732,0.814-1.482,1.201-2.231c0.186-0.379,0.405-0.739,0.625-1.1        c0.235-0.353,0.376-0.751,0.611-1.104c0.221-0.361,0.416-0.734,0.66-1.088c0.253-0.351,0.422-0.732,0.679-1.085        c0.233-0.358,0.499-0.725,0.736-1.064c0.238-0.352,0.524-0.684,0.816-1.078l0.215-0.289c0.318-0.429,0.924-0.519,1.353-0.2        C319.158,308.374,319.286,308.792,319.183,309.167z"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M152.226,387.833c0,0,86.834,24.833,177.5,9.667"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M152.226,220.661c0,0,16.916,22.589,26.916,61.339"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M154.547,217.411       c0,0,15.345,17.02,23.72,61.305"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M212.267,188c0,0,10.231,29.667,38.512,39.5c22.28-6.667,42.28-41.976,42.28-41.976"
                    />
                  </g>

                  <path
                    style="
                      fill: #ffffff;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M257.567,193.626c0,0,13.825,16.457,17.158,21.042c1.882,2.588,4.167,2.002,5.417,0c1.25-2.002,7.25-18.558,6.75-33.78      c0,0-12.584-9.722-12.917-9.972s-1.713,0.353-1.713,0.353S270.017,180.889,257.567,193.626z"
                  />

                  <path
                    style="
                      fill: #ffffff;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M226.266,174.644c0,0,8.127,12.35,18.043,20.106c0,0-14.665,19.96-16.499,21.647c-1.834,1.686-3.752,1.27-4.751-0.48      c-0.999-1.75-5.69-16.643-7.262-30.946l8.429-9.804L226.266,174.644z"
                  />
                </g>
                <path
                  style="
                    fill: #f4c2ad;
                    stroke: #1f1f1f;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 10;
                  "
                  d="     M183.388,60.613c37.979-17.978,65.9,17.498,74.455,48.445c5.709,20.651,2.707,39.186-1.742,48.291     c-4.447,9.104-10.982,13.952-10.983,13.952c0,0-7.56,3.012-17.643,2.012s-27.43-8.186-41.999-23.895     C163.642,125.875,148.134,83.476,183.388,60.613z"
                />
                <path
                  style="fill: #e39076"
                  d="M254.886,106.267c-0.5-2.108-1.998-7.199-6.728-8.897c-5.489-1.972-11.744-1.832-19.136,3.667     c-6.145,4.571-8.56,10.979-8.096,14.942l-0.826-1.773c-0.152,1.42-1.518,2.872-3.943,4.338c-1.959,1.184-4.555,1.751-5.759,1.206     l1.108,1.612c-3.179-2.412-9.926-3.585-16.983-0.612c-8.491,3.577-11.787,8.894-12.875,14.625     c-0.938,4.938,2.688,8.813,4.25,10.313c3.302,3.17,12.438,7.625,22.063,2.25c9.219-5.148,9.816-14.958,6.619-22.108l0.568,0.827     c-0.583-2.471,0.799-5.227,2.191-6.022s4.468-0.587,6.301,1.17l-0.423-0.908c4.536,6.383,13.291,10.849,22.406,5.521     C255.14,120.853,255.94,110.721,254.886,106.267z"
                />
                <g>
                  <g>
                    <linearGradient
                      id="SVGID_00000165916812323603747700000005172204528299523731_"
                      gradientUnits="userSpaceOnUse"
                      x1="191.406"
                      y1="121.0214"
                      x2="203.4062"
                      y2="143.8966"
                    >
                      <stop offset="0" style="stop-color: #ff5766" />
                      <stop offset="0.1756" style="stop-color: #fe556a" />
                      <stop offset="0.3456" style="stop-color: #f94d76" />
                      <stop offset="0.5133" style="stop-color: #f24189" />
                      <stop offset="0.6797" style="stop-color: #e830a4" />
                      <stop offset="0.8435" style="stop-color: #db1ac7" />
                      <stop offset="1" style="stop-color: #cc00f0" />
                    </linearGradient>
                    <path
                      style="
                        fill: url(#SVGID_00000165916812323603747700000005172204528299523731_);
                      "
                      d="M209.857,118.225       c-2.239-3.187-10.041-5.333-18.25-1.875c-8.491,3.577-11.787,8.894-12.875,14.625c-0.938,4.938,2.688,8.813,4.25,10.313       c3.302,3.17,12.438,7.625,22.063,2.25C215.741,137.564,214.836,125.311,209.857,118.225z"
                    />
                    <path
                      style="opacity: 0.6; fill: #ffffff"
                      d="M210.627,138.618c-1.321,1.874-3.148,3.561-5.582,4.919       c-0.727,0.406-1.45,0.749-2.169,1.048v-29.801c3.302,0.491,5.851,1.832,6.981,3.44c0.27,0.384,0.524,0.786,0.77,1.198V138.618z        M192.293,116.089c-0.229,0.088-0.456,0.165-0.686,0.261c-5.03,2.119-8.227,4.851-10.231,7.915v15.284       c0.6,0.737,1.18,1.329,1.606,1.738c1.741,1.672,5.107,3.7,9.311,4.456V116.089z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M178.389,128.6c-0.563,1.781-2.594,5.281-3,5.969c-0.406,0.688-0.875,1.5-0.25,2.781       c0.625,1.281,1.531,2.5,2.281,3.219c0.75,0.719,1.25,0.906,2.313,0.688c1.063-0.219,2.271-0.386,3.48,0.245       c0,0-4.198-5.213-4.323-8.87C178.764,128.975,178.389,128.6,178.389,128.6z"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M209.857,118.225c-2.239-3.187-10.041-5.333-18.25-1.875c-8.491,3.577-11.787,8.894-12.875,14.625       c-0.938,4.938,2.688,8.813,4.25,10.313c3.302,3.17,12.438,7.625,22.063,2.25C215.741,137.564,214.836,125.311,209.857,118.225z       "
                    />
                  </g>
                  <g>
                    <linearGradient
                      id="SVGID_00000155118913244152270350000004269844240891065749_"
                      gradientUnits="userSpaceOnUse"
                      x1="2591.2512"
                      y1="-1210.1075"
                      x2="2603.2517"
                      y2="-1187.2313"
                      gradientTransform="matrix(-0.5077 0.8615 0.8615 0.5077 2588.3188 -1519.1564)"
                    >
                      <stop offset="0" style="stop-color: #ff5766" />
                      <stop offset="0.1756" style="stop-color: #fe556a" />
                      <stop offset="0.3456" style="stop-color: #f94d76" />
                      <stop offset="0.5133" style="stop-color: #f24189" />
                      <stop offset="0.6797" style="stop-color: #e830a4" />
                      <stop offset="0.8435" style="stop-color: #db1ac7" />
                      <stop offset="1" style="stop-color: #cc00f0" />
                    </linearGradient>
                    <path
                      style="
                        fill: url(#SVGID_00000155118913244152270350000004269844240891065749_);
                      "
                      d="M218.456,113.312       c-1.609-3.547,0.503-11.358,7.65-16.675c7.392-5.5,13.646-5.64,19.136-3.668c4.73,1.699,6.228,6.789,6.728,8.897       c1.055,4.454,0.254,14.586-9.263,20.15C232.13,128.199,222.033,121.198,218.456,113.312z"
                    />
                    <path
                      style="opacity: 0.6; fill: #ffffff"
                      d="M220.511,102.681c1.318-2.126,3.157-4.23,5.596-6.044       c1.843-1.371,3.614-2.408,5.321-3.163v30.603c-4.477-0.914-8.335-3.787-10.917-7.287V102.681z M249.762,96.586       c-1.018-1.497-2.463-2.878-4.52-3.617c-1.048-0.376-2.125-0.674-3.231-0.874v30.303c0.232-0.124,0.464-0.245,0.696-0.381       c3.323-1.943,5.565-4.445,7.055-7.066V96.586z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M243.371,91.467c1.819,0.42,5.866,0.447,6.665,0.445c0.799,0,1.736,0.008,2.524,1.197       c0.786,1.188,1.377,2.588,1.615,3.599c0.238,1.011,0.146,1.537-0.582,2.341c-0.729,0.805-1.486,1.761-1.556,3.122       c0,0-2.36-6.264-5.446-8.228C243.504,91.981,243.371,91.467,243.371,91.467z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M217.185,109.806c-0.152,1.42-1.518,2.872-3.943,4.338c-1.959,1.184-4.555,1.751-5.759,1.206       l4.75,6.906c-0.583-2.471,0.799-5.227,2.191-6.022s4.468-0.587,6.301,1.17L217.185,109.806z"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M218.456,113.312c-1.609-3.547,0.503-11.358,7.65-16.675c7.392-5.5,13.646-5.64,19.136-3.668       c4.73,1.699,6.228,6.789,6.728,8.897c1.055,4.454,0.254,14.586-9.263,20.15C232.13,128.199,222.033,121.198,218.456,113.312z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      style="fill: #ff5766"
                      d="M236.827,156.101c-3.03,1.757-8.594,1.784-12.856,0.715c-0.835-0.209-1.304-0.205-1.304-0.205       s0.709-4.635,1.592-6.882c0.88-2.247,2.263-3.812,2.779-4.058c0.514-0.246,2.014-0.457,3.111-1.092v-0.002       c1.098-0.635,2.026-1.831,2.496-2.155c0.469-0.325,2.514-0.748,4.901-0.395c2.388,0.353,6.762,2.042,6.762,2.042       s-0.236,0.405-0.47,1.232c-1.193,4.23-3.982,9.043-7.014,10.799L236.827,156.101z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M232.568,148.755c-0.901,0.522-2.488,0.942-2.876,1.272c-0.388,0.329-4.449,4.762-5.689,5.665       c-1.24,0.902-2.204,0.83-2.436,0.701c-0.232-0.129-1.253-0.8-1.407-0.658c-0.154,0.142-0.562,0.984-0.275,1.208       c0.289,0.224,1.533,0.51,2.35,0.194c0.818-0.316,4.938-3.466,6.158-4.674c1.221-1.207,2.014-1.747,2.643-1.795       c0.63-0.049,2.331-0.536,2.331-0.536l-0.001,0.001c0,0,1.268-1.234,1.623-1.756c0.357-0.522,1.218-0.942,2.872-1.401       c1.654-0.458,6.438-2.467,7.117-3.019c0.681-0.552,1.051-1.773,0.999-2.135c-0.051-0.361-0.983-0.426-1.184-0.363       c-0.2,0.063-0.125,1.282-0.13,1.548c-0.004,0.265-0.419,1.138-1.818,1.765c-1.399,0.627-7.265,1.947-7.743,2.119       c-0.479,0.173-1.634,1.341-2.533,1.863L232.568,148.755z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M231.3,157.495c0,0,0.181-0.038,0.487-0.117c0.308-0.077,0.741-0.192,1.246-0.347       c0.255-0.073,0.523-0.17,0.807-0.263c0.286-0.091,0.573-0.225,0.879-0.328c0.294-0.135,0.606-0.251,0.904-0.409       c0.303-0.146,0.611-0.295,0.901-0.473c0.306-0.154,0.583-0.35,0.866-0.53c0.291-0.173,0.544-0.384,0.805-0.573       c0.266-0.184,0.483-0.407,0.718-0.593c0.232-0.186,0.429-0.389,0.618-0.573c0.18-0.19,0.377-0.345,0.517-0.509       c0.14-0.164,0.273-0.303,0.382-0.418c0.219-0.23,0.355-0.361,0.355-0.361s-0.056,0.173-0.171,0.476       c-0.06,0.15-0.129,0.335-0.223,0.541c-0.086,0.211-0.227,0.422-0.369,0.663c-0.145,0.24-0.301,0.505-0.517,0.743       c-0.211,0.242-0.403,0.533-0.677,0.757c-0.265,0.231-0.511,0.511-0.824,0.713c-0.299,0.222-0.609,0.44-0.943,0.617       c-0.324,0.192-0.667,0.352-1.012,0.49c-0.336,0.161-0.695,0.236-1.027,0.352c-0.681,0.173-1.325,0.283-1.885,0.297       c-0.555,0.033-1.02-0.008-1.34-0.052C231.477,157.549,231.3,157.495,231.3,157.495z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M227.038,145.672c0,0,0.09-0.051,0.249-0.142c0.159-0.09,0.393-0.201,0.689-0.312       c0.287-0.113,0.623-0.245,0.982-0.386c0.183-0.057,0.351-0.152,0.524-0.237c0.175-0.084,0.353-0.169,0.529-0.253       c0.164-0.113,0.327-0.227,0.489-0.337c0.168-0.116,0.34-0.219,0.473-0.345c0.283-0.235,0.563-0.444,0.807-0.645       c0.237-0.197,0.455-0.351,0.618-0.446c0.156-0.097,0.247-0.146,0.247-0.146s-0.066,0.083-0.178,0.23       c-0.117,0.136-0.271,0.339-0.468,0.587c-0.188,0.245-0.445,0.517-0.734,0.804c-0.142,0.15-0.296,0.28-0.463,0.395       c-0.17,0.124-0.344,0.251-0.517,0.377c-0.397,0.165-0.783,0.384-1.171,0.471c-0.19,0.054-0.378,0.097-0.554,0.139       c-0.177,0.048-0.336,0.065-0.49,0.091c-0.305,0.046-0.564,0.082-0.746,0.116C227.143,145.657,227.038,145.672,227.038,145.672z       "
                    />
                    <path
                      style="fill: #ffffff"
                      d="M238.42,147.571c0.595,0.304,0.646,1.394,0.114,2.436c-0.531,1.042-1.444,1.639-2.039,1.335       c-0.596-0.304-0.646-1.394-0.115-2.435C236.911,147.865,237.825,147.267,238.42,147.571z"
                    />
                    <path
                      style="fill: #ffffff"
                      d="M241.151,146.492c0.352,0.18,0.381,0.825,0.066,1.441c-0.314,0.617-0.854,0.971-1.207,0.791       c-0.353-0.18-0.383-0.825-0.067-1.441C240.258,146.665,240.799,146.312,241.151,146.492z"
                    />
                  </g>
                  <g>
                    <path
                      style="fill: #1f1f1f"
                      d="M229.755,138.259c0,0-0.318-1.397,0.67-2.133c0.98-0.729,1.824-0.023,1.649,0.468       c-0.175,0.491-0.799,0.531-1.142,0.708C230.589,137.479,229.755,138.259,229.755,138.259z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M224.792,141.136c0,0-1.054-0.972-2.184-0.479c-1.119,0.487-0.927,1.571-0.414,1.663       c0.514,0.093,0.858-0.429,1.182-0.639C223.7,141.47,224.792,141.136,224.792,141.136z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M226.242,141.076c0,0,0.23-0.112,0.497-0.229c0.124-0.058,0.269-0.124,0.424-0.195       c0.142-0.07,0.283-0.132,0.409-0.21c0.136-0.066,0.256-0.149,0.382-0.229c0.067-0.036,0.119-0.089,0.185-0.129       c0.066-0.039,0.118-0.09,0.179-0.132c0.052-0.047,0.119-0.083,0.164-0.126c0.045-0.043,0.096-0.078,0.134-0.108       c0.081-0.061,0.138-0.097,0.138-0.097s0.021,0.058,0.041,0.161c0.018,0.103,0.043,0.256,0.006,0.429       c-0.017,0.088-0.025,0.189-0.071,0.283c-0.044,0.094-0.081,0.203-0.153,0.294c-0.071,0.091-0.139,0.197-0.238,0.272       c-0.092,0.085-0.194,0.159-0.307,0.218c-0.448,0.25-0.961,0.237-1.287,0.112C226.409,141.281,226.242,141.076,226.242,141.076z       "
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M222.893,138.86c0,0-0.148,0.003-0.416-0.042c-0.259-0.052-0.632-0.149-1.048-0.358       c-0.2-0.112-0.435-0.226-0.646-0.395c-0.203-0.177-0.457-0.338-0.64-0.583c-0.194-0.234-0.379-0.494-0.46-0.811       c-0.052-0.151-0.105-0.302-0.156-0.455l-0.045-0.133l-0.021-0.102l-0.045-0.206c-0.125-0.548-0.208-1.107-0.284-1.633       c-0.072-0.527-0.152-1.013-0.194-1.441c-0.041-0.43-0.071-0.785-0.089-1.035c-0.018-0.248-0.029-0.39-0.029-0.39       s0.061,0.129,0.164,0.355c0.106,0.225,0.252,0.547,0.421,0.931c0.082,0.191,0.191,0.398,0.292,0.619       c0.103,0.22,0.212,0.452,0.324,0.692c0.224,0.481,0.461,0.994,0.656,1.521l0.076,0.196l0.037,0.098       c0.004-0.011,0.027,0.042,0.04,0.06l0.176,0.308c0.105,0.208,0.249,0.384,0.339,0.591c0.077,0.217,0.205,0.4,0.309,0.594       c0.093,0.205,0.239,0.353,0.34,0.532c0.112,0.167,0.237,0.304,0.337,0.446c0.111,0.132,0.208,0.247,0.288,0.342       C222.782,138.747,222.893,138.86,222.893,138.86z"
                    />
                  </g>
                </g>
                <g id="XMLID_6_">
                  <g>
                    <path
                      style="fill: #c779fc"
                      d="M203.901,70.12c0.19,7.82,1.67,26.83,11.24,37.38c0,0-3.94,0.81-7.66,0       c-5.33-2.18-9.91-6.27-13.399-12.48c0,0,0.81,17.86,5.81,24.23c0,0-3.79,1.79-6.29,2.17c-1.71-0.96-3.79-2.88-3.79-2.88       s1.25,3.71,2.21,4.79c-1.729-0.55-7.97-4.64-12.22-16.07h-0.01c0,0-2.551,27.07,3.189,34.03c-3.34,0.61-6.45-0.21-8.149-1.67       c0,0-1.141-1.55-2.57-4.27c0,0-10.29-2.35-12.95-17.6c-2.67-15.25-2.5-32.42,7.25-47.75s23.91-20.17,37.66-18.25       c6.17-2.17,23.31,0.25,34.68,11.37c11.37,11.13,14.79,22.93,14.58,31.66l-4.649-2.69c0,0-11.33,0.53-20.011-5.34       c0,0,2.261,6,4.67,8.25c-2.06,0.75-5.13,0.1-5.13,0.1S209.781,89.5,203.901,70.12z"
                    />
                  </g>
                  <g>
                    <g>
                      <path
                        style="fill: #1f1f1f"
                        d="M193.197,95.486c0,0-0.159-0.32-0.438-0.88c-0.139-0.28-0.308-0.62-0.503-1.01        c-0.202-0.379-0.385-0.871-0.608-1.372c-0.209-0.51-0.471-1.056-0.682-1.645c-0.213-0.587-0.439-1.207-0.672-1.848        c-0.237-0.639-0.416-1.32-0.634-1.999c-0.219-0.68-0.417-1.376-0.585-2.08c-0.174-0.703-0.369-1.399-0.522-2.094        c-0.145-0.695-0.287-1.38-0.425-2.043c-0.279-1.323-0.443-2.575-0.632-3.638c-0.153-1.069-0.253-1.962-0.336-2.586        c-0.079-0.624-0.123-0.981-0.123-0.981c-0.033-0.262,0.152-0.5,0.414-0.534c0.254-0.032,0.486,0.142,0.53,0.392l0.003,0.018        c0,0,0.061,0.351,0.167,0.964c0.11,0.613,0.248,1.491,0.448,2.537c0.234,1.039,0.452,2.264,0.785,3.55        c0.165,0.643,0.335,1.308,0.508,1.983c0.181,0.673,0.403,1.345,0.604,2.022c0.194,0.68,0.419,1.349,0.662,1.999        c0.242,0.65,0.445,1.304,0.703,1.911c0.253,0.608,0.498,1.196,0.73,1.754c0.229,0.559,0.496,1.05,0.714,1.523        c0.235,0.468,0.409,0.895,0.635,1.276c0.212,0.381,0.396,0.713,0.548,0.986c0.304,0.547,0.478,0.859,0.478,0.859        c0.269,0.483,0.096,1.092-0.387,1.361c-0.482,0.269-1.092,0.096-1.36-0.387C193.212,95.515,193.204,95.498,193.197,95.486z"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M203.892,66.62c0,0-0.05,1.31,0.01,3.5c0.19,7.82,1.67,26.83,11.24,37.38c0,0-3.94,0.81-7.66,0       c-5.33-2.18-9.91-6.27-13.399-12.48"
                    />
                    <g>
                      <path
                        style="fill: #1f1f1f"
                        d="M178.854,107.58c0,0-0.282-0.934-0.705-2.335c-0.228-0.688-0.431-1.538-0.639-2.452        c-0.196-0.912-0.482-1.874-0.627-2.85c-0.167-0.971-0.333-1.943-0.489-2.854c-0.163-0.908-0.216-1.771-0.312-2.501        c-0.164-1.464-0.274-2.439-0.274-2.439c-0.031-0.278,0.169-0.528,0.446-0.56c0.267-0.03,0.508,0.153,0.555,0.413l0.005,0.029        c0,0,0.169,0.954,0.423,2.386c0.14,0.712,0.245,1.555,0.461,2.435c0.209,0.881,0.432,1.82,0.655,2.76        c0.202,0.946,0.534,1.84,0.776,2.703c0.129,0.427,0.253,0.841,0.372,1.233c0.118,0.392,0.276,0.764,0.397,1.106        c0.511,1.372,0.851,2.286,0.851,2.286c0.193,0.518-0.069,1.094-0.587,1.288c-0.518,0.193-1.094-0.069-1.287-0.587        C178.868,107.622,178.86,107.599,178.854,107.58z"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M192.021,123.33c-1.729-0.55-7.97-4.64-12.22-16.07"
                    />
                    <g>
                      <path
                        style="fill: #1f1f1f"
                        d="M191.988,121.612c0,0-0.127-0.123-0.35-0.337c-0.111-0.107-0.247-0.237-0.402-0.387        c-0.153-0.161-0.333-0.293-0.518-0.527c-0.184-0.22-0.385-0.459-0.597-0.71c-0.202-0.253-0.449-0.516-0.638-0.793        c-0.387-0.557-0.833-1.131-1.215-1.738c-0.387-0.605-0.785-1.201-1.119-1.782c-0.347-0.573-0.66-1.112-0.917-1.581        c-0.524-0.93-0.848-1.57-0.848-1.57c-0.109-0.216-0.023-0.48,0.193-0.589c0.202-0.102,0.448-0.031,0.567,0.156        c0,0,0.374,0.586,0.979,1.447c0.297,0.433,0.655,0.929,1.049,1.453c0.381,0.533,0.824,1.071,1.254,1.616        c0.428,0.549,0.903,1.047,1.321,1.538c0.21,0.251,0.428,0.432,0.624,0.636c0.197,0.196,0.383,0.381,0.555,0.552        c0.155,0.174,0.384,0.317,0.541,0.452c0.169,0.133,0.316,0.249,0.438,0.345c0.243,0.191,0.381,0.3,0.381,0.3l0.015,0.012        c0.434,0.342,0.509,0.972,0.167,1.407c-0.342,0.434-0.972,0.509-1.407,0.166C192.038,121.657,192.012,121.635,191.988,121.612        z"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M194.082,95.02c0,0,0.81,17.86,5.81,24.23c0,0-3.79,1.79-6.29,2.17c-0.311-0.132-0.633-0.325-0.963-0.567"
                    />
                    <g>
                      <path
                        style="fill: #1f1f1f"
                        d="M171.368,135.799c0,0-0.145-0.307-0.4-0.843c-0.261-0.525-0.617-1.307-1.018-2.281        c-0.21-0.479-0.425-1.001-0.623-1.559c-0.205-0.557-0.42-1.143-0.644-1.75c-0.195-0.617-0.396-1.254-0.601-1.901        c-0.222-0.642-0.362-1.32-0.542-1.984c-0.164-0.67-0.362-1.33-0.473-2.001c-0.128-0.665-0.254-1.321-0.376-1.955        c-0.135-0.631-0.172-1.258-0.257-1.842c-0.073-0.587-0.141-1.141-0.205-1.653c-0.121-2.062-0.182-3.432-0.182-3.432        c-0.013-0.284,0.207-0.524,0.49-0.537c0.274-0.012,0.507,0.192,0.535,0.462l0.003,0.039c0,0,0.131,1.334,0.327,3.335        c0.084,0.495,0.175,1.032,0.271,1.599c0.109,0.565,0.17,1.169,0.33,1.778c0.146,0.61,0.296,1.24,0.45,1.88        c0.134,0.644,0.357,1.277,0.545,1.919c0.204,0.637,0.367,1.285,0.61,1.897c0.226,0.617,0.448,1.225,0.664,1.813        c0.242,0.577,0.476,1.135,0.698,1.664c0.216,0.533,0.443,1.021,0.663,1.465c0.214,0.447,0.41,0.856,0.584,1.219        c0.193,0.366,0.362,0.684,0.501,0.946c0.278,0.525,0.438,0.824,0.438,0.824c0.259,0.488,0.074,1.094-0.415,1.353        c-0.488,0.259-1.093,0.074-1.352-0.414C171.382,135.827,171.374,135.811,171.368,135.799z"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M179.792,107.26c0,0-2.551,27.07,3.189,34.03c-3.34,0.61-6.45-0.21-8.149-1.67c0,0-1.141-1.55-2.57-4.27"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M233.491,95c-2.06,0.75-5.13,0.1-5.13,0.1s-18.58-5.6-24.46-24.98"
                    />
                    <g>
                      <path
                        style="fill: #1f1f1f"
                        d="M228.15,87.725c0,0-0.189-0.121-0.521-0.333c-0.332-0.217-0.803-0.491-1.381-0.932        c-0.285-0.211-0.595-0.439-0.921-0.68c-0.306-0.257-0.628-0.528-0.962-0.808c-0.341-0.271-0.659-0.59-0.988-0.906        c-0.323-0.323-0.677-0.623-0.977-0.979c-0.309-0.344-0.619-0.688-0.923-1.027c-0.294-0.348-0.557-0.713-0.824-1.054        c-0.553-0.668-0.946-1.385-1.333-1.957c-0.198-0.284-0.33-0.577-0.463-0.824c-0.13-0.249-0.244-0.467-0.337-0.646        c-0.186-0.358-0.292-0.563-0.292-0.563c-0.134-0.256-0.034-0.573,0.223-0.707c0.246-0.127,0.546-0.042,0.688,0.19l0.028,0.045        c0,0,0.114,0.187,0.314,0.515c0.1,0.163,0.22,0.362,0.359,0.589c0.142,0.225,0.281,0.491,0.488,0.748        c0.404,0.518,0.812,1.166,1.378,1.762c0.274,0.304,0.542,0.631,0.84,0.94c0.308,0.3,0.621,0.604,0.933,0.909        c0.301,0.315,0.656,0.575,0.977,0.857c0.329,0.276,0.643,0.555,0.981,0.787c0.329,0.241,0.646,0.474,0.948,0.695        c0.308,0.197,0.6,0.384,0.869,0.557c0.516,0.349,1.036,0.611,1.376,0.802c0.345,0.189,0.542,0.298,0.542,0.298        c0.484,0.266,0.662,0.874,0.396,1.358c-0.266,0.484-0.873,0.662-1.358,0.396C228.189,87.748,228.168,87.736,228.15,87.725z"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M253.481,94.78l-4.649-2.69c0,0-9.726,0.503-20.172-5.225"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M159.119,122.375c0,0,0.086-2.458,0.192-4.625c-2.67-15.25-2.5-32.42,7.25-47.75s23.91-20.17,37.66-18.25       c6.17-2.17,25.795-0.313,36.85,8.813"
                    />
                  </g>
                </g>
                <g>
                  <path
                    style="fill: #1f1f1f"
                    d="M247.832,92.093c0,0,0-0.077,0.001-0.222c0.002-0.148-0.022-0.311-0.036-0.547      c-0.005-0.222-0.054-0.526-0.115-0.879c-0.068-0.349-0.094-0.746-0.225-1.176c-0.111-0.431-0.231-0.898-0.359-1.392      c-0.135-0.493-0.346-0.999-0.527-1.53c-0.201-0.526-0.354-1.09-0.628-1.622c-0.249-0.541-0.503-1.09-0.756-1.64l-0.379-0.825      c-0.14-0.268-0.297-0.526-0.442-0.788c-0.297-0.521-0.588-1.034-0.871-1.53c-0.29-0.492-0.538-0.987-0.831-1.423      c-0.296-0.434-0.576-0.844-0.835-1.223c-1.035-1.517-1.725-2.529-1.725-2.529l-0.024-0.036c-0.178-0.262-0.111-0.618,0.15-0.796      c0.254-0.173,0.599-0.113,0.782,0.13c0,0,0.747,1,1.868,2.499c0.281,0.376,0.585,0.783,0.906,1.213      c0.318,0.433,0.597,0.93,0.917,1.423c0.313,0.498,0.636,1.013,0.964,1.537c0.162,0.263,0.335,0.523,0.491,0.794l0.433,0.839      c0.289,0.562,0.577,1.123,0.861,1.676c0.307,0.541,0.499,1.132,0.735,1.679c0.216,0.556,0.46,1.079,0.629,1.603      c0.161,0.529,0.313,1.028,0.454,1.49c0.158,0.455,0.215,0.909,0.306,1.295c0.083,0.387,0.153,0.729,0.179,1.048      c0.032,0.302,0.066,0.562,0.07,0.703c0.006,0.145,0.009,0.222,0.009,0.222c0.021,0.552-0.409,1.017-0.961,1.038      c-0.552,0.021-1.017-0.409-1.038-0.961c0-0.013,0-0.026,0-0.04V92.093z"
                  />
                </g>
                <g>
                  <rect
                    x="178.701"
                    y="184.734"
                    transform="matrix(0.3475 -0.9377 0.9377 0.3475 -35.8618 324.6976)"
                    style="fill: #ffffff"
                    width="73.353"
                    height="6.766"
                  />
                  <polygon
                    style="fill: #ff5766"
                    points="229.127,160.751 220.616,164.249 222.784,158.4 231.295,154.901     "
                  />
                  <polygon
                    style="fill: #ff5766"
                    points="225.13,171.534 216.62,175.032 218.787,169.183 227.299,165.685     "
                  />
                  <polygon
                    style="fill: #ff5766"
                    points="221.134,182.317 212.625,185.815 214.791,179.966 223.302,176.468     "
                  />
                  <polygon
                    style="fill: #ff5766"
                    points="217.139,193.101 208.628,196.598 210.795,190.75 219.306,187.251     "
                  />
                  <polygon
                    style="fill: #ff5766"
                    points="213.143,203.884 204.632,207.382 206.799,201.533 215.31,198.035     "
                  />
                  <polygon
                    style="fill: #ff5766"
                    points="209.146,214.667 200.635,218.165 202.803,212.316 211.314,208.818     "
                  />
                  <polygon
                    style="fill: #ff5766"
                    points="205.805,223.684 207.317,219.601 201.379,222.042     "
                  />

                  <rect
                    x="178.701"
                    y="184.734"
                    transform="matrix(0.3475 -0.9377 0.9377 0.3475 -35.8618 324.6976)"
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    width="73.353"
                    height="6.766"
                  />
                </g>
                <g>
                  <path
                    style="
                      fill: #f4c2ad;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M165.398,223.067c0,0,5.021-9.244,6.708-11.494s5.25-5.125,8.469-3.438c3.219,1.688,7.219,3.813,9.406,5.063      s4.625,3.125,4.875,4.188s-2.625,4.223-5.75,4.643C185.981,222.449,165.398,223.067,165.398,223.067z"
                  />

                  <path
                    style="
                      fill: #f4c2ad;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M164.517,230.875c-1.088-0.957-2.313-3.605-2.063-5.302c0.25-1.698,0.75-2.454,2.313-3.951c1.563-1.497,8.75-5.061,10.875-6.31      s4.84-0.938,6.326,0c1.486,0.938,7.457,4.751,9.378,5.751c1.921,1,1.046,4.53-1.767,5.515c-2.813,0.985-8.75,0-8.75,0      L164.517,230.875z"
                  />

                  <path
                    style="
                      fill: #f4c2ad;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M164.079,239.813c-1.088-0.957-2.313-3.605-2.063-5.302c0.25-1.698,0.75-2.454,2.313-3.951c1.563-1.497,8.75-5.061,10.875-6.31      s4.84-0.938,6.326,0c1.486,0.938,7.457,4.751,9.378,5.751c1.921,1,1.046,4.53-1.767,5.515c-2.813,0.985-8.75,0-8.75,0      L164.079,239.813z"
                  />

                  <path
                    style="
                      fill: #f4c2ad;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M185.931,259.625c0,0-16.508-6.84-19.523-8.295c-3.016-1.455-4.391-4.096-4.391-5.9s0.875-6.117,1.563-6.93      s9-5.448,10.688-6.349c1.688-0.901,5.563-1.46,8.125-0.118s5.938,3.185,6.75,3.482c0.813,0.297,1.063,3.047-1.563,4.235      c0,0,4.193,1.198,6.253,4.537C195.892,247.625,195.657,257.125,185.931,259.625z"
                  />
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M187.579,239.75c0,0-1.313,1.357-4.313,1.429c-3,0.071-5.869-0.714-5.869-0.714l-4.256,3.341"
                  />
                </g>
                <g>
                  <g>
                    <path
                      style="fill: #575dff"
                      d="M178.444,256.504c0,0-0.636,1.825-0.636,2.619c0,0.794-15.166,10.794-16.75,12.794       s-0.25,9.334,2.5,15.417c-3.834,7.25-10.584,15.749-12.042,18.166c-1.458,2.417-4.208,21.833-4.208,25.333       s11.999,19.918,18.916,24.584c6.917,4.666,9.666,3.999,12.25,3.416c2.584-0.583,22.334-11.584,29.667-19.167       c7.333-7.583,9.166-13.667,8.833-16.75c-0.333-3.083-1.75-19.25-1.75-19.5c0.75-2.75,1.574-12.667,1.787-13       c3.63-4.75,5.379-12.666,4.963-14.083c-0.416-1.417-3.416-14.251-4.208-14.917c-0.792-0.666-3.375-0.583-3.375-0.583       s-5.88-10.725-6.917-12.417s-1.811-2.986-1.811-2.986S199.809,254,178.444,256.504z"
                    />
                    <g>
                      <path
                        style="fill: #61fcff"
                        d="M183.949,315.109c-2.183-3.422-2.808-5.609-3.745-7.734s-11.688-27.625-12.5-30.438        s-0.25-4.313,1.125-5.688s6.938-10.34,6.938-10.34h-0.001c-4.191,3.167-13.486,9.465-14.708,11.007        c-1.584,2-0.25,9.334,2.5,15.417c-0.113,0.215-0.237,0.434-0.356,0.65l1.124,0.558c0,0,9.37,14.678,12.468,18.933        C179.892,311.729,181.948,314.681,183.949,315.109z"
                      />
                      <path
                        style="fill: #61fcff"
                        d="M162.406,289.403l-0.001-0.004c-3.904,6.725-9.567,13.91-10.889,16.101        c-1.458,2.417-4.208,21.833-4.208,25.333c0,2.611,6.679,12.411,12.943,19.158c-0.023-0.058-7.942-19.495-8.026-22.366        c-0.084-2.875,2.666-20.25,3.291-22.125S162.406,289.403,162.406,289.403z"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M178.444,256.504c0,0-0.636,1.825-0.636,2.619c0,0.794-15.166,10.794-16.75,12.794s-0.25,9.334,2.5,15.417       c-3.834,7.25-10.584,15.749-12.042,18.166c-1.458,2.417-4.208,21.833-4.208,25.333s11.999,19.918,18.916,24.584       c6.917,4.666,9.666,3.999,12.25,3.416c2.584-0.583,22.334-11.584,29.667-19.167c7.333-7.583,9.166-13.667,8.833-16.75       c-0.333-3.083-1.75-19.25-1.75-19.5c0.75-2.75,1.574-12.667,1.787-13c3.63-4.75,5.379-12.666,4.963-14.083       c-0.416-1.417-3.416-14.251-4.208-14.917c-0.792-0.666-3.375-0.583-3.375-0.583s-5.88-10.725-6.917-12.417       s-1.811-2.986-1.811-2.986S199.809,254,178.444,256.504z"
                    />
                  </g>
                  <g>
                    <path
                      style="fill: #1f1f1f"
                      d="M164.403,286.799c0,0,0.518,0.865,1.423,2.379c0.912,1.509,2.199,3.678,3.791,6.248       c1.609,2.56,3.491,5.545,5.565,8.7c1.026,1.588,2.148,3.18,3.283,4.801c0.554,0.826,1.171,1.593,1.77,2.388l0.452,0.593       l0.213,0.277l0.255,0.278l0.512,0.554l0.526,0.465c1.431,1.229,3.362,1.921,5.19,1.454c0.908-0.208,1.725-0.697,2.462-1.235       c0.371-0.27,0.722-0.564,1.058-0.872l0.126-0.113l0.016-0.015c-0.021,0.016,0.069-0.055-0.043,0.031l0.03-0.033l0.061-0.067       l0.241-0.27l0.48-0.536c1.236-1.442,2.173-2.807,3.193-4.275c0.992-1.415,1.936-2.764,2.875-3.938       c0.928-1.186,1.824-2.238,2.65-3.141c0.835-0.896,1.685-1.57,2.413-2.103c0.744-0.519,1.384-0.878,1.859-1.091       c0.23-0.111,0.421-0.186,0.554-0.231c0.13-0.048,0.198-0.073,0.198-0.073l0.481-0.179c0.483-0.179,1.021,0.067,1.201,0.551       c0.122,0.329,0.046,0.684-0.166,0.933c0,0-2.626,3.071-6.673,7.591c-1.021,1.124-2.108,2.354-3.305,3.623       c-1.159,1.25-2.499,2.684-3.907,3.979l-0.534,0.472l-0.269,0.236l-0.067,0.06l-0.034,0.03l-0.098,0.072l-0.158,0.108       c-0.418,0.291-0.856,0.568-1.319,0.819c-0.921,0.506-1.94,0.927-3.05,1.136c-1.105,0.213-2.309,0.185-3.429-0.147       c-1.128-0.329-2.118-0.922-2.997-1.645l-0.65-0.577l-0.518-0.555l-0.257-0.276c-0.146-0.169-0.176-0.223-0.27-0.339       l-0.472-0.611c-0.622-0.814-1.273-1.619-1.83-2.44c-1.159-1.63-2.289-3.238-3.34-4.815c-2.134-3.137-4.066-6.096-5.72-8.635       c-3.276-5.097-5.46-8.495-5.46-8.495l-0.011-0.017c-0.299-0.465-0.164-1.084,0.301-1.382c0.464-0.299,1.084-0.165,1.382,0.3       C164.391,286.778,164.398,286.79,164.403,286.799z"
                    />
                  </g>
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M177.809,259.123l-0.25,15.044c0,0,19.5,1.582,36.833-13.334"
                  />
                  <g>
                    <path
                      style="fill: #1f1f1f"
                      d="M177.583,275.167c0.001,0-0.75-0.001-1.86-0.049c-0.558-0.025-1.207-0.061-1.91-0.125       c-0.706-0.071-1.45-0.149-2.259-0.354c-0.219-0.069-0.406-0.108-0.67-0.242l-0.192-0.104l-0.095-0.056l-0.136-0.121       c-0.088-0.085-0.169-0.181-0.238-0.277l-0.025-0.036c0.053,0.127-0.079-0.185-0.065-0.153l-0.001-0.004l-0.002-0.009       l-0.009-0.032l-0.017-0.065c-0.019-0.029-0.059-0.313-0.044-0.521l0.014-0.161l0.022-0.092l0.047-0.181       c0.067-0.236,0.152-0.421,0.238-0.602c0.351-0.699,0.739-1.232,1.077-1.691c0.682-0.904,1.189-1.459,1.189-1.459       c0.225-0.246,0.605-0.264,0.851-0.039c0.153,0.14,0.217,0.34,0.19,0.531l-0.052,0.344c0,0.001-0.03,0.198-0.121,0.52       c-0.082,0.325-0.233,0.765-0.408,1.264c-0.087,0.239-0.183,0.498-0.283,0.771c-0.098,0.257-0.208,0.524-0.255,0.75       c-0.028,0.103-0.063,0.212-0.054,0.238l0.002,0.016l-0.001,0.005c0.01-0.043,0.018-0.09,0.02-0.138       c0.029-0.173-0.118-0.495-0.041-0.291l0.023,0.064l0.011,0.031l0.003,0.008l0.001,0.004c0.03,0.072-0.252-0.599-0.135-0.32       l-0.018-0.039c-0.052-0.106-0.129-0.208-0.221-0.287c-0.046-0.04-0.095-0.074-0.145-0.103l-0.016-0.017       c-0.01-0.009-0.021-0.016-0.034-0.02c-0.054-0.009,0.008,0.003,0.045,0.025c0.044,0.022,0.061,0.049,0.129,0.072       c0.241,0.093,0.535,0.229,0.848,0.36c0.311,0.131,0.637,0.257,0.957,0.372c0.643,0.221,1.27,0.338,1.806,0.372       c0.537,0.039,0.987-0.012,1.299-0.048c0.313-0.053,0.487-0.111,0.487-0.111c0.537-0.182,1.12,0.105,1.302,0.643       c0.182,0.537-0.105,1.121-0.643,1.303c-0.108,0.037-0.218,0.055-0.326,0.055H177.583z"
                    />
                  </g>
                  <g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M180.36,256.258       c0,0-0.281,12.225,0,17.921"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M182.723,255.365       c0,0,0.314,12.117,0.818,17.68"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M185.175,255.43       c0,0,1.157,12.684,1.883,18.112"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M187.686,255.081       c0,0,1.967,12.47,2.914,17.765"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M189.811,254.472       c0,0,2.66,12.083,3.83,17.243"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M192.643,253.578       c0,0,3.217,12.272,4.608,17.3"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M194.872,252.569       c0,0,3.655,11.786,5.27,16.681"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M197.413,251.448       c0,0,4.252,11.947,6.088,16.707"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M199.262,250.49       c0,0,5.294,11.319,7.353,15.945"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M202.125,249.113       c0,0,5.063,11.009,7.344,15.5"
                    />
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="M203.987,247.328       c0,0,5.673,11.149,8.176,15.507"
                    />
                  </g>
                </g>
                <g>
                  <path
                    style="
                      fill: #ffffff;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M240.689,192.702c0.809-3.464-8.917-8.698-21.725-11.691c-12.809-2.993-23.847-2.612-24.657,0.852l-1.466,6.271l46.383,10.839      L240.689,192.702z"
                  />

                  <path
                    style="
                      fill: #ffe3d6;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M239.225,198.973c-0.811,3.464-11.849,3.846-24.657,0.852c-12.809-2.993-22.535-8.227-21.726-11.691      c0.811-3.463,11.849-3.845,24.656-0.852C230.307,190.275,240.033,195.509,239.225,198.973z"
                  />
                  <g>
                    <g>
                      <path
                        style="fill: #ffe4d6"
                        d="M216.483,191.629c-14.312-3.345-26.648-2.918-27.552,0.952l-4.398,18.819        c0.904-3.871,13.24-4.297,27.552-0.953c14.312,3.345,25.181,9.194,24.276,13.064l4.397-18.819        C241.664,200.823,230.795,194.974,216.483,191.629z"
                      />
                      <path
                        style="fill: #ffd4c2"
                        d="M212.085,210.448c-14.312-3.345-26.648-2.918-27.552,0.953l-8.322,35.611l51.828,12.112        l8.322-35.612C237.266,219.642,226.397,213.792,212.085,210.448z"
                      />
                      <path
                        style="
                          fill: none;
                          stroke: #1f1f1f;
                          stroke-width: 2;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-miterlimit: 10;
                        "
                        d="        M236.361,223.512c0.904-3.87-9.964-9.72-24.276-13.064c-14.312-3.345-26.648-2.918-27.552,0.953"
                      />
                    </g>
                    <path
                      style="
                        fill: none;
                        stroke: #1f1f1f;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-miterlimit: 10;
                      "
                      d="       M240.759,204.693c0.905-3.871-9.964-9.719-24.275-13.064c-14.312-3.345-26.648-2.918-27.552,0.952l-12.721,54.43l51.828,12.112       L240.759,204.693z"
                    />
                  </g>
                  <g>
                    <path
                      style="fill: #1f1f1f"
                      d="M225.394,250.279c-0.496,2.125-2.621,3.443-4.745,2.947c-2.123-0.496-3.443-2.621-2.947-4.744       c0.497-2.124,2.621-3.444,4.745-2.948C224.571,246.03,225.89,248.155,225.394,250.279z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M219.96,238.818c-0.496,2.124-2.621,3.443-4.745,2.947c-2.125-0.497-3.443-2.621-2.947-4.745       c0.496-2.124,2.621-3.443,4.744-2.947C219.137,234.569,220.456,236.693,219.96,238.818z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M204.593,240.365c-0.496,2.124-2.621,3.443-4.744,2.947c-2.124-0.496-3.444-2.621-2.948-4.745       c0.497-2.124,2.621-3.444,4.745-2.947C203.77,236.116,205.09,238.24,204.593,240.365z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M193.727,231.459c-0.497,2.123-2.621,3.443-4.745,2.947c-2.125-0.497-3.443-2.621-2.947-4.745       c0.496-2.124,2.62-3.444,4.744-2.948C192.904,227.21,194.224,229.335,193.727,231.459z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M230.845,229.265c-0.468,1.999-2.434,3.249-4.392,2.791c-1.958-0.457-3.166-2.45-2.698-4.449       c0.467-1.999,2.433-3.249,4.39-2.792C230.104,225.274,231.311,227.266,230.845,229.265z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M202.88,220.182c-0.468,1.998-2.434,3.249-4.392,2.791c-1.958-0.458-3.166-2.449-2.699-4.448       c0.468-1.999,2.434-3.249,4.391-2.792C202.139,216.19,203.347,218.182,202.88,220.182z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M211.66,229.624c-0.497,2.123-2.621,3.443-4.745,2.946c-2.124-0.496-3.443-2.621-2.947-4.744       c0.496-2.124,2.621-3.444,4.744-2.948C210.836,225.375,212.156,227.499,211.66,229.624z"
                    />
                    <path
                      style="fill: #1f1f1f"
                      d="M188.657,244.276c-0.497,2.124-2.621,3.443-4.745,2.947c-2.124-0.497-3.443-2.621-2.947-4.745       c0.496-2.124,2.621-3.444,4.745-2.948C187.834,240.027,189.153,242.152,188.657,244.276z"
                    />
                  </g>

                  <path
                    style="
                      fill: #ffb191;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M228.039,259.124c-0.904,3.869-13.239,4.295-27.552,0.951c-14.311-3.346-25.181-9.193-24.276-13.063      c0.904-3.871,13.239-4.297,27.552-0.952C218.074,249.404,228.943,255.253,228.039,259.124z"
                  />
                  <path
                    style="opacity: 0.7; fill: #ffffff"
                    d="M193.471,216.85c-0.442,1.895-2.392,3.698-4.353,4.029l0,0      c-1.96,0.331-3.192-0.936-2.75-2.831l4.572-19.562c0.442-1.895,2.393-3.699,4.353-4.029l0,0c1.962-0.331,3.193,0.937,2.75,2.831      L193.471,216.85z M191.128,226.873c0.443-1.895-0.788-3.162-2.75-2.831l0,0c-1.96,0.33-3.909,2.134-4.353,4.029l-0.251,1.079      c-0.443,1.896,0.789,3.162,2.748,2.831l0,0c1.962-0.331,3.911-2.134,4.355-4.029L191.128,226.873z"
                  />
                </g>
                <g>
                  <g>
                    <path
                      style="fill: #c779fc"
                      d="M265.589,131.385c-1.002-2.14-1.998-3.951-2.941-5.346L265.589,131.385z"
                    />

                    <linearGradient
                      id="SVGID_00000103224296979602190410000013781275687185474208_"
                      gradientUnits="userSpaceOnUse"
                      x1="261.3019"
                      y1="94.0076"
                      x2="280.3019"
                      y2="202.6743"
                    >
                      <stop offset="0" style="stop-color: #c779fc" />
                      <stop offset="0.1258" style="stop-color: #c379fc" />
                      <stop offset="0.2475" style="stop-color: #b77afb" />
                      <stop offset="0.3675" style="stop-color: #a47cfb" />
                      <stop offset="0.4859" style="stop-color: #897efa" />
                      <stop offset="0.5562" style="stop-color: #757ff9" />
                      <stop offset="0.6281" style="stop-color: #6989f8" />
                      <stop offset="0.7575" style="stop-color: #4aa4f6" />
                      <stop offset="0.9284" style="stop-color: #17d0f2" />
                      <stop offset="1" style="stop-color: #00e4f0" />
                    </linearGradient>
                    <path
                      style="
                        fill: url(#SVGID_00000103224296979602190410000013781275687185474208_);
                      "
                      d="M265.589,131.385       c7.079,15.117,14.441,46.751,5.545,65.681l3.65,0.968c0,0,10.159-12.862,6.1-38.859L265.589,131.385z"
                    />
                  </g>
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M271.646,148.879c3.992,15.641,5.686,34.998-0.512,48.188l3.65,0.968c0,0,10.159-12.862,6.1-38.859"
                  />
                </g>
                <g>
                  <g>
                    <path
                      style="fill: #c779fc"
                      d="M265.199,115.683c-0.485-2.313-1.04-4.303-1.64-5.877L265.199,115.683z"
                    />

                    <linearGradient
                      id="SVGID_00000031928197097390866490000005101108255667282091_"
                      gradientUnits="userSpaceOnUse"
                      x1="252.7428"
                      y1="95.5038"
                      x2="271.743"
                      y2="204.1717"
                    >
                      <stop offset="0" style="stop-color: #c779fc" />
                      <stop offset="0.1258" style="stop-color: #c379fc" />
                      <stop offset="0.2475" style="stop-color: #b77afb" />
                      <stop offset="0.3675" style="stop-color: #a47cfb" />
                      <stop offset="0.4859" style="stop-color: #897efa" />
                      <stop offset="0.5562" style="stop-color: #757ff9" />
                      <stop offset="0.6281" style="stop-color: #6989f8" />
                      <stop offset="0.7575" style="stop-color: #4aa4f6" />
                      <stop offset="0.9284" style="stop-color: #17d0f2" />
                      <stop offset="1" style="stop-color: #00e4f0" />
                    </linearGradient>
                    <path
                      style="
                        fill: url(#SVGID_00000031928197097390866490000005101108255667282091_);
                      "
                      d="M265.199,115.683       c3.431,16.336,3.354,48.816-9.64,65.206l3.332,1.778c0,0,12.834-10.194,14.834-36.431L265.199,115.683z"
                    />
                  </g>
                  <path
                    style="
                      fill: none;
                      stroke: #1f1f1f;
                      stroke-width: 2;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      stroke-miterlimit: 10;
                    "
                    d="      M265.669,154.881c-1.635,9.891-4.79,19.297-10.109,26.007l3.332,1.778c0,0,12.834-10.194,14.834-36.431"
                  />
                  <g>
                    <path
                      style="fill: #1f1f1f"
                      d="M264.003,109.665c0,0,0.219,0.676,0.601,1.86c0.174,0.6,0.464,1.293,0.65,2.153       c0.193,0.858,0.413,1.826,0.651,2.881c0.271,1.056,0.42,2.205,0.615,3.42c0.169,1.217,0.441,2.493,0.55,3.829       c0.135,1.334,0.273,2.713,0.414,4.114c0.15,1.401,0.161,2.833,0.249,4.26c0.064,1.429,0.168,2.858,0.132,4.267       c-0.004,1.409-0.008,2.795-0.012,4.137c0.028,1.344-0.123,2.637-0.17,3.866c-0.071,1.229-0.139,2.392-0.2,3.465       c-0.082,1.072-0.231,2.048-0.325,2.918c-0.104,0.869-0.194,1.625-0.269,2.249c-0.148,1.247-0.234,1.96-0.234,1.96       c-0.066,0.548-0.563,0.94-1.111,0.874c-0.548-0.066-0.939-0.563-0.874-1.111c0.001-0.006,0.002-0.012,0.002-0.018l0.011-0.071       c0,0,0.1-0.697,0.273-1.917c0.088-0.61,0.193-1.351,0.315-2.2c0.111-0.851,0.281-1.807,0.387-2.858       c0.086-1.055,0.179-2.197,0.277-3.405c0.074-1.21,0.255-2.482,0.257-3.807c0.035-1.324,0.071-2.692,0.108-4.082       c0.068-1.391-0.002-2.803-0.032-4.216c-0.054-1.412-0.03-2.83-0.146-4.215c-0.107-1.387-0.212-2.753-0.314-4.074       c-0.075-1.325-0.315-2.584-0.454-3.79c-0.164-1.202-0.285-2.35-0.522-3.368c-0.207-1.03-0.397-1.974-0.563-2.811       c-0.158-0.839-0.438-1.557-0.596-2.155c-0.354-1.193-0.557-1.875-0.557-1.875l-0.002-0.006       c-0.073-0.246,0.067-0.505,0.313-0.579C263.67,109.29,263.926,109.425,264.003,109.665z"
                    />
                  </g>
                </g>
                <g>
                  <path
                    style="fill: #1f1f1f"
                    d="M172.146,184.739c0,0,0.046-0.561,0.128-1.541c0.047-0.493,0.074-1.08,0.162-1.774      c0.116-0.699,0.247-1.487,0.39-2.347c0.112-0.869,0.386-1.767,0.629-2.73c0.126-0.48,0.254-0.974,0.386-1.478      c0.128-0.505,0.356-0.994,0.535-1.506c0.192-0.508,0.387-1.025,0.584-1.548l0.298-0.789l0.296-0.731      c0.198-0.51,0.448-1.034,0.607-1.541l0.491-1.529c0.296-1.037,0.555-2.115,0.767-3.168c0.147-1.068,0.403-2.11,0.443-3.14      c0.071-1.025,0.203-2.018,0.154-2.961c-0.035-0.94,0.046-1.842-0.086-2.655c-0.08-0.82-0.154-1.571-0.219-2.238      c-0.108-0.659-0.252-1.225-0.344-1.697c-0.199-0.942-0.312-1.481-0.312-1.481l-0.015-0.069      c-0.067-0.319,0.137-0.631,0.456-0.698c0.308-0.065,0.61,0.125,0.691,0.425c0,0,0.147,0.556,0.405,1.527      c0.122,0.488,0.301,1.076,0.449,1.761c0.104,0.694,0.221,1.477,0.349,2.331c0.164,0.854,0.114,1.792,0.181,2.78      c0.08,0.991-0.02,2.03-0.061,3.109c-0.01,1.083-0.238,2.18-0.359,3.309c-0.188,1.12-0.418,2.244-0.703,3.376l-0.488,1.695      c-0.162,0.566-0.381,1.059-0.567,1.587c-0.38,1.027-0.753,2.038-1.115,3.016c-0.165,0.483-0.379,0.941-0.495,1.421      c-0.121,0.479-0.238,0.947-0.354,1.403c-0.223,0.913-0.48,1.768-0.575,2.578c-0.132,0.805-0.252,1.542-0.359,2.196      c-0.1,0.664-0.142,1.27-0.199,1.756c-0.102,0.979-0.161,1.538-0.161,1.538c-0.058,0.549-0.549,0.948-1.099,0.891      C172.497,185.762,172.102,185.279,172.146,184.739z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
`}));t((()=>{vi(),Ws(),hc(),jc(),Nc(),_i.registerPlugin($,mc),document.addEventListener(`DOMContentLoaded`,()=>{let e=new Ac;e.on(`scroll`,$.update),_i.ticker.add(t=>{e.raf(t*1e3)}),_i.ticker.lagSmoothing(0);let t=`http://www.w3.org/2000/svg`,n={lensImageURL:`/experiments/larevoltosa-scroll-animation/img.jpg`,glaresPerLens:2,finalZoomScale:22,zoomFocusPoint:`47% 21%`};document.querySelector(`.svg-container`).innerHTML=Mc;let r=document.querySelector(`svg`),i=document.createElementNS(t,`defs`);r.insertBefore(i,r.firstChild);let a=[],o=[];[...r.querySelectorAll(`path`)].filter(e=>parseFloat(getComputedStyle(e).opacity)===.6).forEach((e,r)=>{let s=e.previousElementSibling;if(!s)return;let c=s.getBBox(),l=`lens-clip-${r}`,u=document.createElementNS(t,`clipPath`);u.setAttribute(`id`,l),u.appendChild(s.cloneNode(!0)),i.appendChild(u);let d=document.createElementNS(t,`g`);d.setAttribute(`clip-path`,`url(#${l})`);let f=document.createElementNS(t,`image`);f.setAttribute(`href`,n.lensImageURL),f.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n.lensImageURL),f.setAttribute(`x`,c.x),f.setAttribute(`y`,c.y),f.setAttribute(`width`,c.width),f.setAttribute(`height`,c.height),f.setAttribute(`preserveAspectRatio`,`xMidYMid slice`),f.setAttribute(`opacity`,`0`),d.appendChild(f),o.push(f);let p=c.width*.22,m=c.width+p*2,h=m/n.glaresPerLens;for(let e=0;e<n.glaresPerLens;e++){let n=document.createElementNS(t,`rect`);n.setAttribute(`x`,c.x+c.width*.3-e*h),n.setAttribute(`y`,c.y-c.height*.25),n.setAttribute(`width`,p),n.setAttribute(`height`,c.height*1.5),n.setAttribute(`fill`,`#ffffff`),n.setAttribute(`opacity`,`0.6`),d.appendChild(n),a.push({band:n,sweepDistance:m})}e.parentNode.insertBefore(d,e),e.remove()});let s=document.querySelector(`.spotlight-header h1`),c=null;s&&(c=mc.create(s,{type:`words`,wordsClass:`spotlight-word`}),_i.set(c.words,{opacity:0})),_i.set(r,{transformOrigin:n.zoomFocusPoint,transformBox:`fill-box`});let l=document.querySelector(`.spotlight`);$.create({trigger:l,start:`top top`,end:()=>`+=`+window.innerHeight*3,pin:!0,pinSpacing:!0,scrub:!0,onUpdate:e=>{let t=e.progress,i=Math.min(t/.75,1);a.forEach(({band:e,sweepDistance:t})=>{_i.set(e,{x:i*t})});let s=1+t*2*(n.finalZoomScale-1);if(_i.set(r,{scale:s}),t>=.5){let e=(t-.5)/.5;o.forEach(t=>_i.set(t,{opacity:e}))}else o.forEach(e=>_i.set(e,{opacity:0}));if(c&&c.words.length>0)if(t>=.65&&t<=.85){let e=(t-.65)/.2,n=c.words.length;c.words.forEach((t,r)=>{let i=r/n;e>=i?_i.set(t,{opacity:1}):_i.set(t,{opacity:0})})}else t<.65?_i.set(c.words,{opacity:0}):t>.85&&_i.set(c.words,{opacity:1})}})})}))();