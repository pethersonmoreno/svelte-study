function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?h(e):p(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function w(t){return y(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}let x;function S(t){x=t}function _(t,e){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.context.set(t,e)}const P=[],A=[],R=[],N=[],C=Promise.resolve();let k=!1;function I(t){R.push(t)}let q=!1;const U=new Set;function L(){if(!q){q=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];S(e),M(e.$$)}for(P.length=0;A.length;)A.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];U.has(e)||(U.add(e),e())}R.length=0}while(P.length);for(;N.length;)N.pop()();k=!1,q=!1,U.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const O=new Set;let j;function D(){j={r:0,c:[],p:j}}function B(){j.r||o(j.c),j=j.p}function G(t,e){t&&t.i&&(O.delete(t),t.i(e))}function T(t,e,n,r){if(t&&t.o){if(O.has(t))return;O.add(t),j.c.push(()=>{O.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function V(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function J(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),I(()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(I)}function K(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(P.push(t),k||(k=!0,C.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,a,c,l,i=[-1]){const u=x;S(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let h=!1;p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&W(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l($(n.target)):p.fragment&&p.fragment.c(),n.intro&&G(e.$$.fragment),F(e,n.target,n.anchor),L()),S(u)}class Y{$destroy(){K(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Q=[];function Z(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!Q.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Q.push(n,e)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const l=[a,c];return o.push(l),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const tt={},et=()=>({});function nt(e){let n,r,o,s,a,c,f,g,E,x,S,_,P,A,R,N,C,k,I,q,U,L,M,O,j,D,B,G,T;return{c(){n=p("header"),r=p("div"),o=p("div"),s=p("img"),c=m(),f=p("div"),g=p("h1"),E=d("Petherson Moreno (Posts are not mine)"),x=m(),S=p("span"),_=d("Software Developer"),P=m(),A=p("div"),R=p("a"),N=h("svg"),C=h("title"),k=d("Twitter logo"),I=h("path"),q=m(),U=p("a"),L=h("svg"),M=h("title"),O=d("GitHub logo"),j=h("path"),D=m(),B=p("a"),G=p("img"),this.h()},l(t){n=b(t,"HEADER",{class:!0});var e=$(n);r=b(e,"DIV",{class:!0});var a=$(r);o=b(a,"DIV",{class:!0});var l=$(o);s=b(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(u),c=w(a),f=b(a,"DIV",{class:!0});var i=$(f);g=b(i,"H1",{class:!0});var p=$(g);E=y(p,"Petherson Moreno (Posts are not mine)"),p.forEach(u),x=w(i),S=b(i,"SPAN",{class:!0});var h=$(S);_=y(h,"Software Developer"),h.forEach(u),P=w(i),A=b(i,"DIV",{class:!0});var d=$(A);R=b(d,"A",{href:!0,target:!0});var m=$(R);N=b(m,"svg",{xmlns:!0,viewBox:!0,role:!0,"aria-labelledby":!0,class:!0},1);var v=$(N);C=b(v,"title",{id:!0},1);var T=$(C);k=y(T,"Twitter logo"),T.forEach(u),I=b(v,"path",{d:!0},1),$(I).forEach(u),v.forEach(u),m.forEach(u),q=w(d),U=b(d,"A",{href:!0,target:!0});var V=$(U);L=b(V,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,role:!0,"aria-labelledby":!0,class:!0},1);var z=$(L);M=b(z,"title",{id:!0},1);var H=$(M);O=y(H,"GitHub logo"),H.forEach(u),j=b(z,"path",{d:!0},1),$(j).forEach(u),z.forEach(u),V.forEach(u),D=w(d),B=b(d,"A",{href:!0});var J=$(B);G=b(J,"IMG",{class:!0,src:!0,alt:!0}),J.forEach(u),d.forEach(u),i.forEach(u),a.forEach(u),e.forEach(u),this.h()},h(){v(s,"class","profile-image svelte-17cbdp"),s.src!==(a="https://avatars0.githubusercontent.com/u/22779752?s=460&u=71c7aa2da2cef2054d92697ef17337f8a3383140&v=4")&&v(s,"src","https://avatars0.githubusercontent.com/u/22779752?s=460&u=71c7aa2da2cef2054d92697ef17337f8a3383140&v=4"),v(s,"alt","pethersonmoreno profile"),v(o,"class","profile svelte-17cbdp"),v(g,"class","svelte-17cbdp"),v(S,"class","role svelte-17cbdp"),v(C,"id","a3nwio0iehsz7gmmysvll02oakahlvob"),v(I,"d","M612 116.258c-22.525 9.98-46.694 16.75-72.088 19.772\n              25.93-15.527 45.777-40.155 55.184-69.41-24.322 14.378-51.17\n              24.82-79.775 30.48-22.906-24.438-55.49-39.66-91.63-39.66-69.333\n              0-125.55 56.218-125.55 125.514 0 9.828 1.11 19.427 3.25\n              28.606-104.325-5.24-196.834-55.223-258.75-131.174-10.822\n              18.51-16.98 40.078-16.98 63.1 0 43.56 22.182 81.994 55.836\n              104.48-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.29\n              111.554 100.692 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107\n              0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.2 117.253\n              87.194-42.946 33.655-97.098 53.656-155.915 53.656-10.134\n              0-20.116-.612-29.944-1.72 55.568 35.68 121.537 56.484 192.44\n              56.484 230.947 0 357.187-191.29 357.187-357.188l-.42-16.253C573.87\n              163.525 595.21 141.42 612 116.257z"),v(N,"xmlns","http://www.w3.org/2000/svg"),v(N,"viewBox","0 0 612 612"),v(N,"role","img"),v(N,"aria-labelledby","a3nwio0iehsz7gmmysvll02oakahlvob"),v(N,"class","icon-img svelte-17cbdp"),v(R,"href","https://twitter.com/pethersonmoreno"),v(R,"target","_blank"),v(M,"id","a9umsuhtdvycvrsulea35mewfzunyupy"),v(j,"d","M409.132\n              114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166\n              259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062\n              29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0\n              184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164\n              63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996\n              2.474-2.282 3.71-5.14 3.71-8.562\n              0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567\n              1.136c-4.187.767-9.47 1.092-15.846\n              1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43\n              1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763\n              8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38\n              7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7\n              6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382\n              12.847-4.284 1.713-12.758 6.377-22.56\n              13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825\n              0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732\n              1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794\n              7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947\n              35.977-7.42 54.82-7.42s37.116 2.473 54.822\n              7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806\n              17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24\n              15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958\n              30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19\n              7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84\n              11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842\n              22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38\n              2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062\n              108.068-79.226 27.88-38.16 41.826-81.126\n              41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"),v(L,"xmlns","http://www.w3.org/2000/svg"),v(L,"width","438.549"),v(L,"height","438.549"),v(L,"viewBox","0 0 438.549 438.549"),v(L,"role","img"),v(L,"aria-labelledby","a9umsuhtdvycvrsulea35mewfzunyupy"),v(L,"class","icon-img svelte-17cbdp"),v(U,"href","https://github.com/pethersonmoreno"),v(U,"target","_blank"),v(G,"class","icon-img svelte-17cbdp"),G.src!==(T="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg")&&v(G,"src","https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"),v(G,"alt","Petherson Moreno's DEV Profile"),v(B,"href","https://github.com/pethersonmoreno"),v(A,"class","social svelte-17cbdp"),v(f,"class","profile-description svelte-17cbdp"),v(r,"class","flex-container"),v(n,"class","svelte-17cbdp")},m(t,e){i(t,n,e),l(n,r),l(r,o),l(o,s),l(r,c),l(r,f),l(f,g),l(g,E),l(f,x),l(f,S),l(S,_),l(f,P),l(f,A),l(A,R),l(R,N),l(N,C),l(C,k),l(N,I),l(A,q),l(A,U),l(U,L),l(L,M),l(M,O),l(L,j),l(A,D),l(A,B),l(B,G)},p:t,i:t,o:t,d(t){t&&u(n)}}}class rt extends Y{constructor(t){super(),X(this,t,null,nt,a,{})}}function ot(t){let e,n,r,o;const s=new rt({}),a=t[1].default,l=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(a,t,t[0],null);return{c(){e=m(),H(s.$$.fragment),n=m(),r=p("main"),l&&l.c(),this.h()},l(t){(function(t,e=document.body){return Array.from(e.querySelectorAll(t))})('[data-svelte="svelte-hhoh46"]',document.head).forEach(u),e=w(t),J(s.$$.fragment,t),n=w(t),r=b(t,"MAIN",{class:!0});var o=$(r);l&&l.l(o),o.forEach(u),this.h()},h(){document.title="Petherson Moreno - Blog",v(r,"class","svelte-1uhnsl8")},m(t,a){i(t,e,a),F(s,t,a),i(t,n,a),i(t,r,a),l&&l.m(r,null),o=!0},p(t,[e]){l&&l.p&&1&e&&l.p(c(a,t,t[0],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(a,t[0],e,null))},i(t){o||(G(s.$$.fragment,t),G(l,t),o=!0)},o(t){T(s.$$.fragment,t),T(l,t),o=!1},d(t){t&&u(e),K(s,t),t&&u(n),t&&u(r),l&&l.d(t)}}}function st(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class at extends Y{constructor(t){super(),X(this,t,st,ot,a,{})}}function ct(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=b(t,"PRE",{});var o=$(e);n=y(o,r),o.forEach(u)},m(t,r){i(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&u(e)}}}function lt(e){let n,r,o,s,a,c,f,h,x,S,_,P=e[1].message+"",A=e[2]&&e[1].stack&&ct(e);return{c(){n=p("h1"),r=d(e[0]),o=m(),s=p("figure"),a=p("img"),f=m(),h=p("figcaption"),x=d(P),S=m(),A&&A.c(),_=g(),this.h()},l(t){n=b(t,"H1",{class:!0});var c=$(n);r=y(c,e[0]),c.forEach(u),o=w(t),s=b(t,"FIGURE",{});var l=$(s);a=b(l,"IMG",{alt:!0,src:!0}),f=w(l),h=b(l,"FIGCAPTION",{});var i=$(h);x=y(i,P),i.forEach(u),l.forEach(u),S=w(t),A&&A.l(t),_=g(),this.h()},h(){v(n,"class","svelte-o81gtr"),v(a,"alt","Borat"),a.src!==(c="great-success.png")&&v(a,"src","great-success.png")},m(t,e){i(t,n,e),l(n,r),i(t,o,e),i(t,s,e),l(s,a),l(s,f),l(s,h),l(h,x),i(t,S,e),A&&A.m(t,e),i(t,_,e)},p(t,[e]){1&e&&E(r,t[0]),2&e&&P!==(P=t[1].message+"")&&E(x,P),t[2]&&t[1].stack?A?A.p(t,e):(A=ct(t),A.c(),A.m(_.parentNode,_)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&u(n),t&&u(o),t&&u(s),t&&u(S),A&&A.d(t),t&&u(_)}}}function it(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ut extends Y{constructor(t){super(),X(this,t,it,lt,a,{status:0,error:1})}}function ft(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&H(c.$$.fragment),n=g()},l(t){c&&J(c.$$.fragment,t),n=g()},m(t,e){c&&F(c,t,e),i(t,n,e),r=!0},p(t,e){const r=16&e?V(o,[z(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){D();const t=c;T(t.$$.fragment,1,0,()=>{K(t,1)}),B()}s?(H((c=new s(a())).$$.fragment),G(c.$$.fragment,1),F(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&G(c.$$.fragment,t),r=!0)},o(t){c&&T(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&K(c,t)}}}function pt(t){let e;const n=new ut({props:{error:t[0],status:t[1]}});return{c(){H(n.$$.fragment)},l(t){J(n.$$.fragment,t)},m(t,r){F(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){T(n.$$.fragment,t),e=!1},d(t){K(n,t)}}}function ht(t){let e,n,r,o;const s=[pt,ft],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),i(t,r,n),o=!0},p(t,o){let l=e;e=c(t),e===l?a[e].p(t,o):(D(),T(a[l],1,1,()=>{a[l]=null}),B(),n=a[e],n||(n=a[e]=s[e](t),n.c()),G(n,1),n.m(r.parentNode,r))},i(t){o||(G(n),o=!0)},o(t){T(n),o=!1},d(t){a[e].d(t),t&&u(r)}}}function dt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new at({props:o});return{c(){H(s.$$.fragment)},l(t){J(s.$$.fragment,t)},m(t,e){F(s,t,e),n=!0},p(t,[e]){const n=12&e?V(r,[4&e&&{segment:t[2][0]},8&e&&z(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(G(s.$$.fragment,t),n=!0)},o(t){T(s.$$.fragment,t),n=!1},d(t){K(s,t)}}}function mt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e;return _(tt,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1)},[o,s,a,c,l,r]}class gt extends Y{constructor(t){super(),X(this,t,mt,dt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const vt=[],$t=[{js:()=>import("./index.35bd31dd.js"),css:["index.35bd31dd.css","client.590f004c.css"]}],bt=[{pattern:/^\/$/,parts:[{i:0}]}];const yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,Et,xt,St=!1,_t=[],Pt="{}";const At={page:Z({}),preloading:Z(null),session:Z(yt&&yt.session)};let Rt,Nt;At.session.subscribe(async t=>{if(Rt=t,!St)return;Nt=!0;const e=Ot(new URL(location.href)),n=Et={},{redirect:r,props:o,branch:s}=await Gt(e);n===Et&&await Bt(r,s,o,e.page)});let Ct,kt=null;let It,qt=1;const Ut="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Lt={};function Mt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(yt.baseUrl))return null;let e=t.pathname.slice(yt.baseUrl.length);if(""===e&&(e="/"),!vt.some(t=>t.test(e)))for(let n=0;n<bt.length;n+=1){const r=bt[n],o=r.pattern.exec(e);if(o){const n=Mt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function jt(){return{x:pageXOffset,y:pageYOffset}}async function Dt(t,e,n,r){if(e)It=e;else{const t=jt();Lt[It]=t,e=It=++qt,Lt[It]=n?t:{x:0,y:0}}It=e,wt&&At.preloading.set(!0);const o=kt&&kt.href===t.href?kt.promise:Gt(t);kt=null;const s=Et={},{redirect:a,props:c,branch:l}=await o;if(s===Et&&(await Bt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Lt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Lt[It]=t,t&&scrollTo(t.x,t.y)}}async function Bt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ot(new URL(t,document.baseURI));return n?(Ut[e.replaceState?"replaceState":"pushState"]({id:It},"",t),Dt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(At.page.set(r),At.preloading.set(!1),wt)wt.$set(n);else{n.stores={page:{subscribe:At.page.subscribe},preloading:{subscribe:At.preloading.subscribe},session:At.session},n.level0={props:await xt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Vt(t.nextSibling);Vt(t),Vt(e)}wt=new gt({target:Ct,props:n,hydrate:!0})}_t=e,Pt=JSON.stringify(r.query),St=!0,Nt=!1}async function Gt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;xt||(xt=yt.preloaded[0]||et.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Rt));let l=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Pt)return!0;const o=_t[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,o)&&(u=!0),s.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!Nt&&!u&&_t[c]&&_t[c].part===e.i)return _t[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Tt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}($t[e.i]);let m;return m=St||!yt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Rt):{}:yt.preloaded[c+1],s[`level${p}`]={component:h,props:m,segment:f,match:i,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Tt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Vt(t){t.parentNode.removeChild(t)}function zt(t){const e=Ot(new URL(t,document.baseURI));if(e)return kt&&t===kt.href||function(t,e){kt={href:t,promise:e}}(t,Gt(e)),kt.promise}let Ht;function Jt(t){clearTimeout(Ht),Ht=setTimeout(()=>{Ft(t)},20)}function Ft(t){const e=Wt(t.target);e&&"prefetch"===e.rel&&zt(e.href)}function Kt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Wt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ot(o);if(s){Dt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Ut.pushState({id:It},"",o.href)}}function Wt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Xt(t){if(Lt[It]=jt(),t.state){const e=Ot(new URL(location.href));e?Dt(e,t.state.id):location.href=location.href}else qt=qt+1,function(t){It=t}(qt),Ut.replaceState({id:It},"",location.href)}var Yt;Yt={target:document.querySelector("#sapper")},"scrollRestoration"in Ut&&(Ut.scrollRestoration="manual"),function(t){Ct=t}(Yt.target),addEventListener("click",Kt),addEventListener("popstate",Xt),addEventListener("touchstart",Ft),addEventListener("mousemove",Jt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ut.replaceState({id:qt},"",e);const n=new URL(location.href);if(yt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=yt;xt||(xt=s&&s[0]),Bt(null,[],{error:c,status:a,session:o,level0:{props:xt},level1:{props:{status:a,error:c},component:ut},segments:s},{host:e,path:n,query:Mt(r),params:{}})}();const r=Ot(n);return r?Dt(r,qt,!0,t):void 0});export{Y as S,m as a,$ as b,b as c,y as d,p as e,w as f,u as g,v as h,X as i,i as j,l as k,E as l,f as m,g as n,t as o,a as s,d as t};