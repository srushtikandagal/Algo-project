import{q as h,j as t,g as P,a as g,s as y,af as B,r as M,ag as l,_ as a,b as _,e as u,u as R,f as S,k as H,m as E}from"./index-DWydQnnc.js";const O=h(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=h(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=h(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function L(o){return g("MuiCheckbox",o)}const m=P("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=o=>{const{classes:e,indeterminate:c,color:s,size:r}=o,n={root:["root",c&&"indeterminate",`color${l(s)}`,`size${l(r)}`]},d=E(n,L,e);return a({},e,d)},q=y(B,{shouldForwardProp:o=>M(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>a({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:_(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${m.checked}, &.${m.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),T=t.jsx(U,{}),W=t.jsx(O,{}),w=t.jsx(V,{}),D=u.forwardRef(function(e,c){var s,r;const n=R({props:e,name:"MuiCheckbox"}),{checkedIcon:d=T,color:b="primary",icon:z=W,indeterminate:i=!1,indeterminateIcon:x=w,inputProps:I,size:p="medium",className:$}=n,j=S(n,N),k=i?x:z,C=i?x:d,v=a({},n,{color:b,indeterminate:i,size:p}),f=F(v);return t.jsx(q,a({type:"checkbox",inputProps:a({"data-indeterminate":i},I),icon:u.cloneElement(k,{fontSize:(s=k.props.fontSize)!=null?s:p}),checkedIcon:u.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:p}),ownerState:v,ref:c,className:H(f.root,$)},j,{classes:f}))});export{D as C};
