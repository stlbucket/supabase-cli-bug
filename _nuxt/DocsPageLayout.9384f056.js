import K from"./DocsAside.d3db8dd8.js";import O from"./ProseCodeInline.cbfc63e0.js";import R from"./Alert.a1cccd14.js";import U from"./DocsPageBottom.16a8fb92.js";import W from"./DocsPrevNext.54145319.js";import{d as Y,W as G,ad as Q,i as X,J as m,r as V,q as Z,o as ee,ag as oe,b as u,Y as A,w as h,K as t,c as g,g as r,f as y,e as p,$ as te,E as x,t as ne,F as se,n as k,a2 as ae,ah as ce,p as le,j as re,l as _e}from"./entry.a5a20c4b.js";import ie from"./DocsToc.5ab24bba.js";import"./ContentSlot.b32826d1.js";import"./ProseA.b275cdf0.js";import"./EditOnLink.vue.bdca773f.js";import"./DocsTocLinks.ad276f42.js";const ue=d=>(le("data-v-fa81d3b7"),d=d(),re(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=Y({__name:"DocsPageLayout",setup(d){const{page:s}=G(),{config:f,tree:b}=Q(),j=X(),E=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},T=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),P=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=b.value)==null?void 0:o.length)>1||((l=(c=(n=b.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),F=m(()=>E("bottom",!0)),_=V(!1),a=V(null),v=()=>j.path.split("/").slice(0,2).join("/"),i=Z("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=i.value.scrollTop)}return ee(()=>{i.value.parentPath!==v()?(i.value.parentPath=v(),i.value.scrollTop=0):C()}),oe(()=>{a.value&&(i.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,w,B,N,$,I;const n=K,c=O,l=R,H=U,L=W,M=ae,q=ie,z=ce;return u(),A(z,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(N=(B=t(f))==null?void 0:B.main)==null?void 0:N.padded,class:k(["docs-page-content",{fluid:(I=($=t(f))==null?void 0:$.main)==null?void 0:I.fluid,"has-toc":t(P),"has-aside":t(S)}])},{default:h(()=>[t(S)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(T)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ne(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(T)&&t(s)&&t(F)?(u(),g(se,{key:2},[r(H),r(L)],64)):y("",!0)]),t(P)?(u(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=J=>_.value=!t(_))},[fe,r(M,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(q,{onMove:o[1]||(o[1]=J=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const we=_e(ve,[["__scopeId","data-v-fa81d3b7"]]);export{we as default};