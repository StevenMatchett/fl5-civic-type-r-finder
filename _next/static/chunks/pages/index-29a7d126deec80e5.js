(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9248)}])},9248:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var o=a(5893),n=(a(9008),a(7294)),l=a(603),r=a(7054),i=a(1333),c=a.n(i),s={width:"100%",height:"1000px"},h={lat:39,lng:-98},d=function(e){var t=(0,l.Z)(n.useState(c()),2),a=t[0],i=t[1],d=e.atTransit,p=e.atDealer,u=e.colors,m=e.setData,w=e.twoPlus,y={};u.forEach((function(e){y[e.name.toLowerCase()]=!0})),(0,n.useEffect)((function(){var e={},t={},a=function(e){var a=e.name+e.phone;console.log("here"),t[a]?t[a].cars.push(e):t[a]={location:e.location,cars:[e]}};c().forEach((function(t){return!!y[t.color.toLowerCase()]&&(!e[t.vin+t.phone]&&(e[t.vin+t.phone]=!0,(p&&d||p&&t.atDealer||!(!d||t.atDealer))&&a(t)))}));var o=Object.keys(t).map((function(e){return t[e]}));w&&(o=o.filter((function(e){return e.cars.length>1}))),i(o)}),[d,p,w,u.length]),console.log(a.length);return(0,o.jsx)(r.KJ,{googleMapsApiKey:"AIzaSyA4osQxlfnZEX-CUfopRAxP31PckDPX8vw",children:a?(0,o.jsx)(r.b6,{mapContainerStyle:s,center:h,zoom:4,children:(0,o.jsx)(r.XL,{options:{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"},children:function(e){return a.map((function(t,a){return(0,o.jsx)(r.Jx,{clusterer:e,position:t.location,clickableIcons:!0,onClick:function(){m(t)},noClustererRedraw:!0})}))}})}):(0,o.jsx)("div",{})})},p=a(3253),u=a.n(p),m={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},w=function(e){var t;return e.data?(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(u(),{isOpen:e.data,onAfterOpen:function(){t.style.color="#f00"},onRequestClose:e.onClose,style:m,contentLabel:"Example Modal",children:[(0,o.jsx)("h2",{style:{color:"black"},ref:function(e){return t=e}}),e.data.cars&&e.data.cars.map((function(e,t){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{color:"black"},children:[(0,o.jsx)("b",{children:"Name:"})," ",e.name]}),(0,o.jsxs)("div",{style:{color:"black"},children:[(0,o.jsx)("b",{children:"Phone:"})," ",e.phone]}),(0,o.jsxs)("div",{style:{color:"black"},children:[(0,o.jsx)("b",{children:"Color:"})," ",e.color]}),(0,o.jsxs)("div",{style:{color:"black"},children:[(0,o.jsx)("b",{children:"Status:"})," ",e.atDealer?"At dealer":"Transit"]}),(0,o.jsxs)("div",{style:{color:"black"},children:[(0,o.jsx)("b",{children:"City:"})," ",e.city]}),(0,o.jsxs)("div",{style:{color:"black"},children:[(0,o.jsx)("b",{children:"State:"})," ",e.state]}),(0,o.jsxs)("div",{style:{color:"black"},children:[(0,o.jsx)("b",{children:"Vin:"})," ",e.vin]}),e.url&&(0,o.jsxs)("div",{style:{color:"black"},children:[(0,o.jsx)("b",{children:"Url:"})," ",(0,o.jsx)("a",{target:"_blank",href:e.url,children:e.name})]}),(0,o.jsx)("br",{})]})})),(0,o.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2",onClick:e.onClose,children:"close"})]})}):null},y=a(5152),v=a.n(y),g=new Date("2024-12-22T21:07:41.577Z"),H=a(878),f=function(e){var t=e.setStatsOpen;return(0,o.jsxs)("div",{className:"flex items-center justify-between p-4 bg-gray-900 text-white",children:[(0,o.jsx)("b",{children:(0,o.jsx)("div",{class:"hidden sm:block",children:"Civic Type R Finder"})}),(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("button",{className:"m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2 btn",onClick:function(){t(!0)},children:"All FL5 colors stats"}),(0,o.jsxs)("form",{action:"https://www.paypal.com/donate",method:"post",target:"_top",children:[(0,o.jsx)("input",{type:"hidden",name:"business",value:"E86PQV6YVAE8J"}),(0,o.jsx)("input",{type:"hidden",name:"no_recurring",value:"0"}),(0,o.jsx)("input",{type:"hidden",name:"currency_code",value:"USD"}),(0,o.jsx)("input",{type:"image",style:{marginTop:"9px"},src:"https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button",className:"btn"}),(0,o.jsx)("img",{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"})]})]})]})};var x=v()((function(){return a.e(33).then(a.bind(a,2033))}),{loadableGenerated:{webpack:function(){return[2033]}},ssr:!1}),b=["Crystal Black Pearl","Rallye Red","Boost Blue Pearl","Championship White","Sonic Gray Pearl"].map((function(e,t){return{name:e,id:t}}));var G=function(){var e=function(){var e=window.location.href.split("?")[1];if(!e)return{};for(var t=e.split("&"),a={},o=0;o<t.length;o++){var n=(0,l.Z)(t[o].split("="),2),r=n[0],i=n[1];a[r]=i}return a}(),t={intTansit:!e["at-dealer"],atDealer:!e["in-transit"]},a=(0,n.useState)(null),r=a[0],i=a[1],c=(0,n.useState)(!1),s=c[0],h=c[1],p=(0,n.useState)(b),u=p[0],m=p[1],y=(0,n.useState)(t.atDealer),v=y[0],G=y[1],j=(0,n.useState)(t.intTansit),M=j[0],R=j[1],D=(0,n.useState)(!1),C=D[0],L=D[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{setStatsOpen:h}),(0,o.jsxs)("label",{class:"inline-block mr-4",children:["In Transit",(0,o.jsx)("input",{class:"form-checkbox ml-2",type:"checkbox",value:M,checked:M,onChange:function(){R(!M)}})]}),(0,o.jsxs)("label",{class:"inline-block mr-4",children:["At Dealer",(0,o.jsx)("input",{class:"form-checkbox ml-2",type:"checkbox",value:v,checked:v,onChange:function(){G(!v)}})]}),(0,o.jsxs)("label",{class:"inline-block mr-4",children:["Dealers with 2+",(0,o.jsx)("input",{class:"form-checkbox ml-2",type:"checkbox",value:C,checked:C,onChange:function(){L(!C)}})]}),(0,o.jsx)(H.default,{options:b,selectedValues:u,onSelect:function(e){m(e)},onRemove:function(e){m(e)},displayValue:"name"}),(0,o.jsx)(w,{onClose:function(){i(null)},data:r}),s&&(0,o.jsx)(x,{open:s,onClose:function(){h(!1)}}),(0,o.jsx)(d,{setData:i,atDealer:v,atTransit:M,twoPlus:C,colors:u}),(0,o.jsxs)("h3",{style:{marginLeft:"1rem"},children:["Data last refreshed ",g.toString()]})]})};function j(){return(0,o.jsx)(G,{})}},1333:function(e){"use strict";e.exports=[{atDealer:!0,city:"Rochester",state:"NY",phone:"5855862820 ",name:"Ide Honda",url:"https://www.idehonda.com/",color:"Sonic Gray Pearl",vin:"JHMFL5G44RX004448",location:{lat:43.12682,lng:-77.495193}},{atDealer:!0,city:"Syracuse",state:"NY",phone:"3154224168 ",name:"Lamacchia Honda",url:"https://www.lamacchiahonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G45RX004653",location:{lat:43.053909,lng:-76.169548}},{atDealer:!0,city:"Wallingford",state:"CT",phone:"2039497400 ",name:"Executive Honda",url:"https://www.executivehonda.com",color:"Championship White",vin:"JHMFL5G4XRX004888",location:{lat:41.504501,lng:-72.810387}},{atDealer:!0,city:"Newton",state:"MA",phone:"6179658200 ",name:"Honda Village",url:"https://www.hondavillage.com",color:"Boost Blue Pearl",vin:"JHMFL5G47RX004122",location:{lat:42.356384,lng:-71.188652}},{atDealer:!0,city:"Denville",state:"NJ",phone:"9733613000 ",name:"Joyce Honda",url:"https://www.joycehonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G46RX004676",location:{lat:40.87225,lng:-74.52198}},{atDealer:!0,city:"Madison",state:"NJ",phone:"9734434947 ",name:"Madison Honda",url:"https://www.madisonhonda.com",color:"Championship White",vin:"JHMFL5G48RX004470",location:{lat:40.750629,lng:-74.402115}},{atDealer:!0,city:"Glen Head",state:"NY",phone:"5166762290 ",name:"North Shore Honda",url:"https://www.nshonda.com",color:"Championship White",vin:"JHMFL5G48RX005005",location:{lat:40.838398,lng:-73.615311}},{atDealer:!0,city:"West Caldwell",state:"NJ",phone:"9738089100 ",name:"Paul Miller Honda of West Caldwell",url:"https://www.paulmillerhonda.com",color:"Championship White",vin:"JHMFL5G45RX003468",location:{lat:40.855385,lng:-74.311806}},{atDealer:!0,city:"Clifton",state:"NJ",phone:"8885114498 ",name:"Garden State Honda",url:"https://www.gardenstatehonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G41RX004309",location:{lat:40.833347,lng:-74.146149}},{atDealer:!0,city:"Clifton",state:"NJ",phone:"8885114498 ",name:"Garden State Honda",url:"https://www.gardenstatehonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G47RX004346",location:{lat:40.833347,lng:-74.146149}},{atDealer:!0,city:"West Warwick",state:"RI",phone:"4018222000 ",name:"Balise Honda of West Warwick",url:"http://www.balisehondawestwarwick.com",color:"Sonic Gray Pearl",vin:"JHMFL5G41RX004438",location:{lat:41.680862,lng:-71.500954}},{atDealer:!0,city:"Berlin",state:"VT",phone:"8022239700 ",name:"802 Honda",url:"https://www.802honda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G49RX004848",location:{lat:44.213173,lng:-72.574699}},{atDealer:!0,city:"S Portland",state:"ME",phone:"2077741429 ",name:"Berlin City Honda of Portland",url:"http://www.berlincityhondame.com",color:"Boost Blue Pearl",vin:"JHMFL5G40RX004768",location:{lat:43.637794,lng:-70.33503}},{atDealer:!0,city:"Hillside",state:"NJ",phone:"9739223883 ",name:"Route 22 Honda",url:"https://www.route22honda.com",color:"Championship White",vin:"JHMFL5G42RX004478",location:{lat:40.696899,lng:-74.220047}},{atDealer:!0,city:"Austinburg",state:"OH",phone:"4409975151 ",name:"Victory Honda",url:"https://www.victoryhonda440.com",color:"Sonic Gray Pearl",vin:"JHMFL5G42RX004948",location:{lat:41.784065,lng:-80.858597}},{atDealer:!0,city:"Akron",state:"OH",phone:"3306336060 ",name:"Great Lakes Honda",url:"https://www.glakeshonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G41RX004861",location:{lat:41.115063,lng:-81.492409}},{atDealer:!0,city:"Springfield",state:"OH",phone:"9373257091 ",name:"Bill Marine Honda",url:"https://www.billmarinehonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G4XRX004874",location:{lat:39.926624,lng:-83.80159}},{atDealer:!0,city:"Plymouth",state:"MI",phone:"7344533600 ",name:"Victory Honda of Plymouth",url:"https://www.victoryplymouth.com",color:"Sonic Gray Pearl",vin:"JHMFL5G48RX004937",location:{lat:42.358551,lng:-83.463814}},{atDealer:!0,city:"Bowling Green",state:"OH",phone:"4193542222 ",name:"Thayer Honda",url:"http://www.thayerhonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G49RX004932",location:{lat:41.398178,lng:-83.65123}},{atDealer:!0,city:"Muncie",state:"IN",phone:"7652825955 ",name:"Victory Honda of Muncie",url:"https://www.victorymuncie.com",color:"Boost Blue Pearl",vin:"JHMFL5G49RX004977",location:{lat:40.217617,lng:-85.443665}},{atDealer:!0,city:"Grand Rapids",state:"MI",phone:"6169560000 ",name:"Fox Honda",url:"https://www.foxhondausa.com/",color:"Championship White",vin:"JHMFL5G47RX004623",location:{lat:42.907806,lng:-85.58287}},{atDealer:!0,city:"Taylorsville",state:"IN",phone:"8126691586 ",name:"Hubler Honda",url:"https://www.hublerhonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G44RX002327",location:{lat:39.30188,lng:-85.959663}},{atDealer:!0,city:"Bloomington",state:"IN",phone:"8127278400 ",name:"Andy Mohr Honda",url:"https://www.andymohrhonda.com",color:"Championship White",vin:"JHMFL5G42RX004819",location:{lat:39.15493,lng:-86.574799}},{atDealer:!0,city:"Bowling Green",state:"KY",phone:"2707818230 ",name:"Gary Force Honda",url:"https://www.garyforcehonda.com/",color:"Boost Blue Pearl",vin:"JHMFL5G4XRX004860",location:{lat:36.955402,lng:-86.42765}},{atDealer:!0,city:"Alcoa",state:"TN",phone:"8659702300 ",name:"Airport Honda",url:"https://www.airporthonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G44RX004451",location:{lat:35.823799,lng:-83.977188}},{atDealer:!0,city:"Fletcher",state:"NC",phone:"8286844400 ",name:"Apple Tree Honda",url:"https://www.honda.appletreeautomobiles.com",color:"Boost Blue Pearl",vin:"JHMFL5G41RX004407",location:{lat:35.441574,lng:-82.534668}},{atDealer:!0,city:"Morton Grove",state:"IL",phone:"8479658833 ",name:"Napleton Honda of Morton Grove",url:"https://www.napletonhondamortongrove.com",color:"Boost Blue Pearl",vin:"JHMFL5G43RX004523",location:{lat:42.041012,lng:-87.797943}},{atDealer:!0,city:"Joliet",state:"IL",phone:"8154392222 ",name:"The Honda Superstore of Joliet",url:"https://www.hondaofjoliet.com",color:"Championship White",vin:"JHMFL5G47RX004914",location:{lat:41.581959,lng:-88.163437}},{atDealer:!0,city:"Warrenville",state:"SC",phone:"8036633636 ",name:"Honda Cars of Aiken",url:"https://www.hondacarsofaiken.com",color:"Sonic Gray Pearl",vin:"JHMFL5G46RX004449",location:{lat:33.559475,lng:-81.793243}},{atDealer:!0,city:"Roswell",state:"GA",phone:"7709932805 ",name:"Honda Carland",url:"https://www.hondacarland.com/",color:"Championship White",vin:"JHMFL5G45RX004636",location:{lat:34.050964,lng:-84.335838}},{atDealer:!0,city:"Miami",state:"FL",phone:"3058563000 ",name:"Brickell Honda",url:"https://www.brickellhonda.com/",color:"Championship White",vin:"JHMFL5G49RX003165",location:{lat:25.765791,lng:-80.205307}},{atDealer:!0,city:"Miami",state:"FL",phone:"3058563000 ",name:"Brickell Honda",url:"https://www.brickellhonda.com/",color:"Sonic Gray Pearl",vin:"JHMFL5G45RX004541",location:{lat:25.765791,lng:-80.205307}},{atDealer:!0,city:"College Station",state:"TX",phone:"9796962424 ",name:"Allen Honda",url:"https://www.allenhonda.com",color:"Championship White",vin:"JHMFL5G47RX004721",location:{lat:30.62007,lng:-96.29686}},{atDealer:!0,city:"Memphis",state:"TN",phone:"9017955900 ",name:"AutoNation Honda 385",url:"https://www.autonationhonda385.com",color:"Championship White",vin:"JHMFL5G41RX005010",location:{lat:35.038601,lng:-89.795319}},{atDealer:!0,city:"North Platte",state:"NE",phone:"3085322500 ",name:"Bill Summers Honda",url:"https://www.billsummershonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G42RX004142",location:{lat:41.10503,lng:-100.76255}},{atDealer:!0,city:"Napa",state:"CA",phone:"7072524011 ",name:"Kastner Honda",url:"https://www.kastnerhonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G43RX004411",location:{lat:38.291573,lng:-122.27702}},{atDealer:!0,city:"Selma",state:"CA",phone:"5598913100 ",name:"Selma Honda",url:"https://www.selmahonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G49RX004252",location:{lat:36.570381,lng:-119.62392}},{atDealer:!0,city:"Roseville",state:"CA",phone:"9167837733 ",name:"AutoNation Honda Roseville",url:"http://www.autonationhondaroseville.com",color:"Sonic Gray Pearl",vin:"JHMFL5G45RX004295",location:{lat:38.75045,lng:-121.25959}},{atDealer:!0,city:"Vallejo",state:"CA",phone:"7075513200 ",name:"Honda of Vallejo",url:"https://www.hondaofvallejo.com",color:"Boost Blue Pearl",vin:"JHMFL5G43RX004652",location:{lat:38.126434,lng:-122.22702}},{atDealer:!0,city:"Vallejo",state:"CA",phone:"7075513200 ",name:"Honda of Vallejo",url:"https://www.hondaofvallejo.com",color:"Rallye Red",vin:"JHMFL5G44RX005065",location:{lat:38.126434,lng:-122.22702}},{atDealer:!0,city:"Carson",state:"CA",phone:"3108344773 ",name:"Carson Honda",url:"https://www.carsonhonda.net",color:"Crystal Black Pearl",vin:"JHMFL5G41RX003757",location:{lat:33.824635,lng:-118.24702}},{atDealer:!0,city:"Golden",state:"CO",phone:"3032154200 ",name:"Planet Honda",url:"https://www.planethonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G47RX004864",location:{lat:39.729759,lng:-105.17723}},{atDealer:!0,city:"Findlay",state:"OH",phone:"4194223511 ",name:"Reineke Honda",url:"https://www.reinekehonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G47RX005058",location:{lat:41.055695,lng:-83.605461}}]}},function(e){e.O(0,[255,283,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);