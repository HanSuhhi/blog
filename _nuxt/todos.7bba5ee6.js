import{l as u,o as e,c as n,F as a,r as i,t as d,_ as f,x,u as h,b as p,y as k,m as v,w as l,d as w}from"./entry.0c521200.js";import{q as b}from"./query.98ec65bb.js";import"./preview.acec1cc3.js";const C={class:"inventory-part"},g=u({__name:"part",props:{list:{}},setup(_){return(t,s)=>(e(),n("ol",C,[(e(!0),n(a,null,i(t.list,o=>(e(),n("li",{key:o,class:"inventory-part_li"},d(o),1))),128))]))}});const B=f(g,[["__scopeId","data-v-3f38b5e1"]]);async function q(){return{data:await b("/todo").findOne()}}const D=u({__name:"todos",async setup(_){let t,s;const{data:{body:o}}=([t,s]=x(()=>q()),t=await t,s(),t);return(F,N)=>{const m=B,r=k;return e(),n(a,null,[(e(!0),n(a,null,i(h(o),([c,...y])=>(e(),v(r,{key:c,name:"system"},{input:l(()=>[w(" ls ./todos/"+d(c),1)]),output:l(()=>[p(m,{class:"intro-ls_part",list:y},null,8,["list"])]),_:2},1024))),128)),p(r,{name:"system"})],64)}}});export{D as default};