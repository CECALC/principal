import{c as f,M as F,r as c,N as j,o as L,e as M,g as s,T as P,O as D,Q as E,d as H,v as C,I as U,B as S,A as m,F as A,P as V,y as v,R as G,z as w,x,G as K,H as W,S as J,U as X,L as Y,K as Z}from"./entry.e04d823b.js";const ee={ratio:[String,Number]};function te(e,r){return f(()=>{const n=Number(e.ratio||(r!==void 0?r.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const ne=16/9,ie=F({name:"QImg",props:{...ee,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ne},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:r,emit:n}){const d=c(e.initialRatio),h=te(e,d);let i=null,u=!1;const a=[c(null),c(b())],l=c(0),o=c(!1),g=c(!1),z=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),B=f(()=>({width:e.width,height:e.height})),T=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),I=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));j(()=>p(),q);function p(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function b(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function q(t){i!==null&&(clearTimeout(i),i=null),g.value=!1,t===null?(o.value=!1,a[l.value^1].value=b()):o.value=!0,a[l.value].value=t}function Q({target:t}){u!==!0&&(i!==null&&(clearTimeout(i),i=null),d.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,k(t,1))}function k(t,_){u===!0||_===1e3||(t.complete===!0?$(t):i=setTimeout(()=>{i=null,k(t,_+1)},50))}function $(t){u!==!0&&(l.value=l.value^1,a[l.value].value=null,o.value=!1,g.value=!1,n("load",t.currentSrc||t.src))}function R(t){i!==null&&(clearTimeout(i),i=null),o.value=!1,g.value=!0,a[l.value].value=null,a[l.value^1].value=b(),n("error",t)}function N(t){const _=a[t].value,y={key:"img_"+t,class:T.value,style:I.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,..._};return l.value===t?(y.class+=" q-img__image--waiting",Object.assign(y,{onLoad:Q,onError:R})):y.class+=" q-img__image--loaded",s("div",{class:"q-img__container absolute-full",key:"img"+t},s("img",y))}function O(){return o.value!==!0?s("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},D(r[g.value===!0?"error":"default"])):s("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},r.loading!==void 0?r.loading():e.noSpinner===!0?void 0:[s(E,{color:e.spinnerColor,size:e.spinnerSize})])}return L(()=>{q(p())}),M(()=>{u=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const t=[];return h.value!==null&&t.push(s("div",{key:"filler",style:h.value})),g.value!==!0&&(a[0].value!==null&&t.push(N(0)),a[1].value!==null&&t.push(N(1))),t.push(s(P,{name:"q-transition--fade"},O)),s("div",{class:z.value,style:B.value,role:"img","aria-label":e.alt},t)}}}),ae={class:"text-body2"},le=v("div",{class:"text-white"}," Características principais: ",-1),oe={class:"text-caption"},se=H({__name:"AppDadosFerramenta",props:{cor:{},dados:{}},setup(e){function r(n){window.open(n,"_blank")}return(n,d)=>{const h=J,i=ie,u=X,a=Y,l=Z;return C(),U(l,{flat:"",class:"q-pa-xs full-width",style:{"background-color":"rgba(0 0 0 / 60%)"}},{default:S(()=>[m(a,{horizontal:"",class:"full-width",style:{"max-height":"200px",overflow:"hidden"}},{default:S(()=>[m(i,{src:n.dados.miniaturaUrl,"img-style":{width:"400px",height:"199px"},style:{width:"520px"},class:"rounded-borders"},{default:S(()=>[m(h,{icon:"mdiOpenInNew"in n?n.mdiOpenInNew:A(V),class:"absolute-top-right all-pointer-events cursor-pointer q-ma-sm",round:"",color:"white","text-color":"grey-8",size:"lg",onClick:d[0]||(d[0]=o=>r(n.dados.url))},null,8,["icon"])]),_:1},8,["src"]),m(a,{class:"text-white",style:{"overflow-y":"scroll",width:"100%"}},{default:S(()=>[v("div",{class:G(["text-h6",`text-${n.cor}`])},w(n.dados.titulo)+" v."+w(n.dados.versao),3),v("div",ae,w(n.dados.descricao),1),m(u,{color:"grey-8",class:"q-my-md"}),v("div",null,[le,v("ul",oe,[(C(!0),x(K,null,W(n.dados.caracteristicas,o=>(C(),x("li",{key:o},w(o),1))),128))])])]),_:1})]),_:1})]),_:1})}}});export{se as _};
