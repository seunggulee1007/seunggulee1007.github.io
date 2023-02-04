import{c as L,u as le,a as ie,Q as re,h as ae,b as M,d as ue,e as ee,f as U,g as se}from"./dom.687b85c8.js";import{c as f,h,r as S,i as j,o as O,a as R,n as te,d as K,g as H,l as W,e as $,w,f as A,j as F,p as oe,k as ce,m as P,q as de,_ as fe,s as ve,t as he,u as T,v as C,x as ge,y as D,z as me}from"./index.9986d022.js";var X=L({name:"QAvatar",props:{...le,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:d}){const n=ie(e),o=f(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=f(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const a=e.icon!==void 0?[h(re,{name:e.icon})]:void 0;return h("div",{class:o.value,style:n.value},[h("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},ae(d.default,a))])}}}),Y=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},M(d.default))}}),G=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},M(d.default))}});function be(){const e=S(!j.value);return e.value===!1&&O(()=>{e.value=!0}),e}const ne=typeof ResizeObserver!="undefined",J=ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var E=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let n=null,o,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(n!==null&&(clearTimeout(n),n=null),o){const{offsetWidth:c,offsetHeight:r}=o;(c!==t.width||r!==t.height)&&(t={width:c,height:r},d("resize",t))}}const{proxy:m}=H();if(ne===!0){let c;const r=b=>{o=m.$el.parentNode,o?(c=new ResizeObserver(a),c.observe(o),s()):b!==!0&&K(()=>{r(!0)})};return O(()=>{r()}),R(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():o&&c.unobserve(o))}),te}else{let b=function(){n!==null&&(clearTimeout(n),n=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,W.passive),r=void 0)},y=function(){b(),o&&o.contentDocument&&(r=o.contentDocument.defaultView,r.addEventListener("resize",a,W.passive),s())};const c=be();let r;return O(()=>{K(()=>{o=m.$el,o&&y()})}),R(b),m.trigger=a,()=>{if(c.value===!0)return h("object",{style:J.style,tabindex:-1,type:"text/html",data:J.url,"aria-hidden":"true",onLoad:y})}}}}),ye=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=H(),t=A(F,$);if(t===$)return console.error("QHeader needs to be child of QLayout"),$;const a=S(parseInt(e.heightHint,10)),s=S(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||o.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return s.value===!0?a.value:0;const i=a.value-t.scroll.value.position;return i>0?i:0}),r=f(()=>e.modelValue!==!0||m.value===!0&&s.value!==!0),b=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),y=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=f(()=>{const i=t.rows.value.top,z={};return i[0]==="l"&&t.left.space===!0&&(z[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(z[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function v(i,z){t.update("header",i,z)}function x(i,z){i.value!==z&&(i.value=z)}function p({height:i}){x(a,i),v("size",i)}function q(i){b.value===!0&&x(s,!0),n("focusin",i)}w(()=>e.modelValue,i=>{v("space",i),x(s,!0),t.animate()}),w(c,i=>{v("offset",i)}),w(()=>e.reveal,i=>{i===!1&&x(s,e.modelValue)}),w(s,i=>{t.animate(),n("reveal",i)}),w(t.scroll,i=>{e.reveal===!0&&x(s,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const Q={};return t.instances.header=Q,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",c.value),R(()=>{t.instances.header===Q&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const i=ue(d.default,[]);return e.elevated===!0&&i.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(h(E,{debounce:0,onResize:p})),h("header",{class:y.value,style:_.value,onFocusin:q},i)}}}),we=L({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:n}}=H(),o=A(F,$);if(o===$)return console.error("QPageContainer needs to be child of QLayout"),$;oe(ce,!0);const t=f(()=>{const a={};return o.header.space===!0&&(a.paddingTop=`${o.header.size}px`),o.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(a.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),a});return()=>h("div",{class:"q-page-container",style:t.value},M(d.default))}}),pe=L({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=H(),t=A(F,$);if(t===$)return console.error("QFooter needs to be child of QLayout"),$;const a=S(parseInt(e.heightHint,10)),s=S(!0),m=S(j.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||o.platform.is.ios&&t.isContainer.value===!0),r=f(()=>t.isContainer.value===!0?t.containerHeight.value:m.value),b=f(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return s.value===!0?a.value:0;const l=t.scroll.value.position+r.value+a.value-t.height.value;return l>0?l:0}),y=f(()=>e.modelValue!==!0||c.value===!0&&s.value!==!0),_=f(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),v=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),x=f(()=>{const l=t.rows.value.bottom,g={};return l[0]==="l"&&t.left.space===!0&&(g[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(g[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),g});function p(l,g){t.update("footer",l,g)}function q(l,g){l.value!==g&&(l.value=g)}function Q({height:l}){q(a,l),p("size",l)}function i(){if(e.reveal!==!0)return;const{direction:l,position:g,inflectionPoint:V}=t.scroll.value;q(s,l==="up"||g-V<100||t.height.value-r.value-g-a.value<300)}function z(l){_.value===!0&&q(s,!0),n("focusin",l)}w(()=>e.modelValue,l=>{p("space",l),q(s,!0),t.animate()}),w(b,l=>{p("offset",l)}),w(()=>e.reveal,l=>{l===!1&&q(s,e.modelValue)}),w(s,l=>{t.animate(),n("reveal",l)}),w([a,t.scroll,t.height],i),w(()=>o.screen.height,l=>{t.isContainer.value!==!0&&q(m,l)});const u={};return t.instances.footer=u,e.modelValue===!0&&p("size",a.value),p("space",e.modelValue),p("offset",b.value),R(()=>{t.instances.footer===u&&(t.instances.footer=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const l=ee(d.default,[h(E,{debounce:0,onResize:Q})]);return e.elevated===!0&&l.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h("footer",{class:v.value,style:x.value,onFocusin:z},l)}}});const ze=[null,document,document.body,document.scrollingElement,document.documentElement];function xe(e,d){let n=se(d);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return ze.includes(n)?window:n}function Se(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function _e(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let B;function k(){if(B!==void 0)return B;const e=document.createElement("p"),d=document.createElement("div");U(e,{width:"100%",height:"200px"}),U(d,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),d.appendChild(e),document.body.appendChild(d);const n=e.offsetWidth;d.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=d.clientWidth),d.remove(),B=n-o,B}const{passive:Z}=W,qe=["both","horizontal","vertical"];var Te=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>qe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:d}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,a;w(()=>e.scrollTarget,()=>{c(),m()});function s(){o!==null&&o();const y=Math.max(0,Se(t)),_=_e(t),v={top:y-n.position.top,left:_-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const x=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:y,left:_},n.directionChanged=n.direction!==x,n.delta=v,n.directionChanged===!0&&(n.direction=x,n.inflectionPoint=n.position),d("scroll",{...n})}function m(){t=xe(a,e.scrollTarget),t.addEventListener("scroll",r,Z),r(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",r,Z),t=void 0)}function r(y){if(y===!0||e.debounce===0||e.debounce==="0")s();else if(o===null){const[_,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];o=()=>{v(_),o=null}}}const{proxy:b}=H();return w(()=>b.$q.lang.rtl,s),O(()=>{a=b.$el.parentNode,m()}),R(()=>{o!==null&&o(),c()}),Object.assign(b,{trigger:r,getPosition:()=>n}),te}}),Ce=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=H(),t=S(null),a=S(o.screen.height),s=S(e.container===!0?0:o.screen.width),m=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),r=S(j.value===!0?0:k()),b=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),_=f(()=>r.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),v=f(()=>r.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function x(u){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:u.position.top,direction:u.direction,directionChanged:u.directionChanged,inflectionPoint:u.inflectionPoint.top,delta:u.delta.top};m.value=l,e.onScroll!==void 0&&n("scroll",l)}}function p(u){const{height:l,width:g}=u;let V=!1;a.value!==l&&(V=!0,a.value=l,e.onScrollHeight!==void 0&&n("scrollHeight",l),Q()),s.value!==g&&(V=!0,s.value=g),V===!0&&e.onResize!==void 0&&n("resize",u)}function q({height:u}){c.value!==u&&(c.value=u,Q())}function Q(){if(e.container===!0){const u=a.value>c.value?k():0;r.value!==u&&(r.value=u)}}let i=null;const z={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:r,totalWidth:f(()=>s.value+r.value),rows:f(()=>{const u=e.view.toLowerCase().split(" ");return{top:u[0].split(""),middle:u[1].split(""),bottom:u[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:m,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(u,l,g){z[u][l]=g}};if(oe(F,z),k()>0){let g=function(){u=null,l.classList.remove("hide-scrollbar")},V=function(){if(u===null){if(l.scrollHeight>o.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(u);u=setTimeout(g,300)},N=function(I){u!==null&&I==="remove"&&(clearTimeout(u),g()),window[`${I}EventListener`]("resize",V)},u=null;const l=document.body;w(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),de(()=>{N("remove")})}return()=>{const u=ee(d.default,[h(Te,{onScroll:x}),h(E,{onResize:p})]),l=h("div",{class:b.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},u);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:t},[h(E,{onResize:q}),h("div",{class:"absolute-full",style:_.value},[h("div",{class:"scroll",style:v.value},[l])])]):l}}});const $e={},Le=D("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),Qe=D("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),Ve=D("div",null,"Title",-1);function He(e,d){const n=me("router-view");return ve(),he(Ce,{view:"hHh lpR fff"},{default:T(()=>[C(ye,{elevated:"",class:"bg-primary text-white","height-hint":"98"},{default:T(()=>[C(G,null,{default:T(()=>[C(Y,null,{default:T(()=>[C(X,null,{default:T(()=>[Le]),_:1}),ge(" Title ")]),_:1})]),_:1})]),_:1}),C(we,null,{default:T(()=>[C(n)]),_:1}),C(pe,{elevated:"",class:"bg-grey-8 text-white"},{default:T(()=>[C(G,null,{default:T(()=>[C(Y,null,{default:T(()=>[C(X,null,{default:T(()=>[Qe]),_:1}),Ve]),_:1})]),_:1})]),_:1})]),_:1})}var Be=fe($e,[["render",He]]);export{Be as default};
