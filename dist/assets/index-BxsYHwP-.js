import{e as r,V as i,j as e,G as t,F as n,T as o,x,J as c}from"./index-CZAbHP5N.js";const p=({text:l})=>{const[g,s]=r.useState(!0),a=i();r.useEffect(()=>{s(!1)},[]);const d=()=>{a("/dashboard/broker/add-broker")};return e.jsxs(t,{container:!0,spacing:n,justifyContent:"center",sx:{minHeight:"80vh",pt:5,borderLeft:1,borderColor:"grey.400",height:"FitScreen"},children:[" ",e.jsx(o,{textAlign:"left",px:5,fontSize:20,fontWeight:500,color:"#123591",width:"100%",children:"Broker"}),e.jsxs(t,{item:!0,xs:12,md:6,textAlign:"center",children:[e.jsx(x,{display:"flex",justifyContent:"center",mb:2,children:e.jsx("img",{src:"https://web.algorooms.com/static/media/broker.f7382bf4a577d51366641db39ab94138.svg",alt:"No Brokers",style:{maxWidth:"400px",height:"auto"},loading:"lazy"})}),e.jsx(o,{variant:"h6",gutterBottom:!0,children:"No Brokers found. Please Add brokers!"}),e.jsx(c,{sx:{border:"2px dashed gray",borderRadius:"4px",padding:"8px 16px","&:hover":{borderColor:"black"}},onClick:d,children:"+ Add Broker"})]})]})};export{p as default};
