(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9248)}])},9248:function(a,o,t){"use strict";t.r(o),t.d(o,{default:function(){return D}});var e=t(5893),n=(t(9008),t(7294)),l=t(603),i=t(7054),r=t(1333),c=t.n(r),s={width:"100%",height:"1000px"},h={lat:39,lng:-98},p=function(a){var o=(0,l.Z)(n.useState(c()),2),t=o[0],r=o[1],p=a.atTransit,m=a.atDealer,d=a.colors,w=a.setData,u=a.twoPlus,y={};d.forEach((function(a){y[a.name.toLowerCase()]=!0})),(0,n.useEffect)((function(){var a={},o={},t=function(a){var t=a.name+a.phone;console.log("here"),o[t]?o[t].cars.push(a):o[t]={location:a.location,cars:[a]}};c().forEach((function(o){return!!y[o.color.toLowerCase()]&&(!a[o.vin+o.phone]&&(a[o.vin+o.phone]=!0,(m&&p||m&&o.atDealer||!(!p||o.atDealer))&&t(o)))}));var e=Object.keys(o).map((function(a){return o[a]}));u&&(e=e.filter((function(a){return a.cars.length>1}))),r(e)}),[p,m,u,d.length]),console.log(t.length);return(0,e.jsx)(i.KJ,{googleMapsApiKey:"AIzaSyA4osQxlfnZEX-CUfopRAxP31PckDPX8vw",children:t?(0,e.jsx)(i.b6,{mapContainerStyle:s,center:h,zoom:4,children:(0,e.jsx)(i.XL,{options:{imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"},children:function(a){return t.map((function(o,t){return(0,e.jsx)(i.Jx,{clusterer:a,position:o.location,clickableIcons:!0,onClick:function(){w(o)},noClustererRedraw:!0})}))}})}):(0,e.jsx)("div",{})})},m=t(3253),d=t.n(m),w={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},u=function(a){var o;return a.data?(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(d(),{isOpen:a.data,onAfterOpen:function(){o.style.color="#f00"},onRequestClose:a.onClose,style:w,contentLabel:"Example Modal",children:[(0,e.jsx)("h2",{style:{color:"black"},ref:function(a){return o=a}}),a.data.cars&&a.data.cars.map((function(a,o){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{color:"black"},children:[(0,e.jsx)("b",{children:"Name:"})," ",a.name]}),(0,e.jsxs)("div",{style:{color:"black"},children:[(0,e.jsx)("b",{children:"Phone:"})," ",a.phone]}),(0,e.jsxs)("div",{style:{color:"black"},children:[(0,e.jsx)("b",{children:"Color:"})," ",a.color]}),(0,e.jsxs)("div",{style:{color:"black"},children:[(0,e.jsx)("b",{children:"Status:"})," ",a.atDealer?"At dealer":"Transit"]}),(0,e.jsxs)("div",{style:{color:"black"},children:[(0,e.jsx)("b",{children:"City:"})," ",a.city]}),(0,e.jsxs)("div",{style:{color:"black"},children:[(0,e.jsx)("b",{children:"State:"})," ",a.state]}),(0,e.jsxs)("div",{style:{color:"black"},children:[(0,e.jsx)("b",{children:"Vin:"})," ",a.vin]}),a.url&&(0,e.jsxs)("div",{style:{color:"black"},children:[(0,e.jsx)("b",{children:"Url:"})," ",(0,e.jsx)("a",{target:"_blank",href:a.url,children:a.name})]}),(0,e.jsx)("br",{})]})})),(0,e.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2",onClick:a.onClose,children:"close"})]})}):null},y=t(5152),H=t.n(y),v=new Date("2024-12-06T21:07:11.925Z"),g=t(878),G=function(a){var o=a.setStatsOpen;return(0,e.jsxs)("div",{className:"flex items-center justify-between p-4 bg-gray-900 text-white",children:[(0,e.jsx)("b",{children:(0,e.jsx)("div",{class:"hidden sm:block",children:"Civic Type R Finder"})}),(0,e.jsxs)("div",{className:"flex items-center",children:[(0,e.jsx)("button",{className:"m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-1 sm:px-2 sm:text-sm mt-2 mb-2 btn",onClick:function(){o(!0)},children:"All FL5 colors stats"}),(0,e.jsxs)("form",{action:"https://www.paypal.com/donate",method:"post",target:"_top",children:[(0,e.jsx)("input",{type:"hidden",name:"business",value:"E86PQV6YVAE8J"}),(0,e.jsx)("input",{type:"hidden",name:"no_recurring",value:"0"}),(0,e.jsx)("input",{type:"hidden",name:"currency_code",value:"USD"}),(0,e.jsx)("input",{type:"image",style:{marginTop:"9px"},src:"https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button",className:"btn"}),(0,e.jsx)("img",{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"})]})]})]})};var L=H()((function(){return t.e(33).then(t.bind(t,2033))}),{loadableGenerated:{webpack:function(){return[2033]}},ssr:!1}),M=["Crystal Black Pearl","Rallye Red","Boost Blue Pearl","Championship White","Sonic Gray Pearl"].map((function(a,o){return{name:a,id:o}}));var R=function(){var a=function(){var a=window.location.href.split("?")[1];if(!a)return{};for(var o=a.split("&"),t={},e=0;e<o.length;e++){var n=(0,l.Z)(o[e].split("="),2),i=n[0],r=n[1];t[i]=r}return t}(),o={intTansit:!a["at-dealer"],atDealer:!a["in-transit"]},t=(0,n.useState)(null),i=t[0],r=t[1],c=(0,n.useState)(!1),s=c[0],h=c[1],m=(0,n.useState)(M),d=m[0],w=m[1],y=(0,n.useState)(o.atDealer),H=y[0],R=y[1],D=(0,n.useState)(o.intTansit),f=D[0],X=D[1],J=(0,n.useState)(!1),F=J[0],C=J[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G,{setStatsOpen:h}),(0,e.jsxs)("label",{class:"inline-block mr-4",children:["In Transit",(0,e.jsx)("input",{class:"form-checkbox ml-2",type:"checkbox",value:f,checked:f,onChange:function(){X(!f)}})]}),(0,e.jsxs)("label",{class:"inline-block mr-4",children:["At Dealer",(0,e.jsx)("input",{class:"form-checkbox ml-2",type:"checkbox",value:H,checked:H,onChange:function(){R(!H)}})]}),(0,e.jsxs)("label",{class:"inline-block mr-4",children:["Dealers with 2+",(0,e.jsx)("input",{class:"form-checkbox ml-2",type:"checkbox",value:F,checked:F,onChange:function(){C(!F)}})]}),(0,e.jsx)(g.default,{options:M,selectedValues:d,onSelect:function(a){w(a)},onRemove:function(a){w(a)},displayValue:"name"}),(0,e.jsx)(u,{onClose:function(){r(null)},data:i}),s&&(0,e.jsx)(L,{open:s,onClose:function(){h(!1)}}),(0,e.jsx)(p,{setData:r,atDealer:H,atTransit:f,twoPlus:F,colors:d}),(0,e.jsxs)("h3",{style:{marginLeft:"1rem"},children:["Data last refreshed ",v.toString()]})]})};function D(){return(0,e.jsx)(R,{})}},1333:function(a){"use strict";a.exports=[{atDealer:!0,city:"Lancaster",state:"PA",phone:"7173940711 ",name:"Jones Honda",url:"https://www.joneshonda.com/",color:"Boost Blue Pearl",vin:"JHMFL5G42RX002536",location:{lat:40.06636,lng:-76.32753}},{atDealer:!0,city:"Rochester",state:"NY",phone:"5855862820 ",name:"Ide Honda",url:"https://www.idehonda.com/",color:"Sonic Gray Pearl",vin:"JHMFL5G44RX004448",location:{lat:43.12682,lng:-77.495193}},{atDealer:!0,city:"Syracuse",state:"NY",phone:"3154224168 ",name:"Lamacchia Honda",url:"https://www.lamacchiahonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G45RX004653",location:{lat:43.053909,lng:-76.169548}},{atDealer:!0,city:"Jamaica",state:"NY",phone:"7186577810 ",name:"Hillside Honda",url:"https://www.hillsidehonda.com/",color:"Boost Blue Pearl",vin:"JHMFL5G47RX002953",location:{lat:40.704632,lng:-73.814285}},{atDealer:!0,city:"Wallingford",state:"CT",phone:"2039497400 ",name:"Executive Honda",url:"https://www.executivehonda.com",color:"Championship White",vin:"JHMFL5G4XRX004888",location:{lat:41.504501,lng:-72.810387}},{atDealer:!1,city:"Riverhead",state:"NY",phone:"8884990397 ",name:"Apple Honda",url:"https://www.applehonda.net/",color:"Championship White",vin:"JHMFL5G48RX005022",location:{lat:40.927704,lng:-72.686401}},{atDealer:!0,city:"Edison",state:"NJ",phone:"7328394777 ",name:"Open Road Honda",url:"https://www.openroadhonda.com/",color:"Championship White",vin:"JHMFL5G47RX002841",location:{lat:40.49625,lng:-74.411583}},{atDealer:!0,city:"Denville",state:"NJ",phone:"9733613000 ",name:"Joyce Honda",url:"https://www.joycehonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G46RX004676",location:{lat:40.87225,lng:-74.52198}},{atDealer:!1,city:"Burlington",state:"NJ",phone:"6096994180 ",name:"Davis Honda",url:"https://www.davishonda.net",color:"Championship White",vin:"JHMFL5G44RX004904",location:{lat:40.069832,lng:-74.85585}},{atDealer:!0,city:"Albany",state:"NY",phone:"5184384555 ",name:"Lia Honda",url:"https://www.liahondaofalbany.com",color:"Boost Blue Pearl",vin:"JHMFL5G42RX002052",location:{lat:42.697788,lng:-73.810249}},{atDealer:!0,city:"Middletown",state:"RI",phone:"4018474737 ",name:"Saccucci Honda",url:"http://www.saccuccihonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G47RX004122",location:{lat:41.536217,lng:-71.292793}},{atDealer:!0,city:"Phillipsburg",state:"NJ",phone:"9088595800 ",name:"Phillipsburg-Easton Honda",url:"https://www.pehonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G43RX002514",location:{lat:40.68214,lng:-75.146736}},{atDealer:!0,city:"Madison",state:"NJ",phone:"9734434947 ",name:"Madison Honda",url:"https://www.madisonhonda.com",color:"Championship White",vin:"JHMFL5G48RX004470",location:{lat:40.750629,lng:-74.402115}},{atDealer:!0,city:"Hillside",state:"NJ",phone:"9739223883 ",name:"Route 22 Honda",url:"https://www.route22honda.com",color:"Championship White",vin:"JHMFL5G42RX004478",location:{lat:40.696899,lng:-74.220047}},{atDealer:!0,city:"Glen Head",state:"NY",phone:"5166762290 ",name:"North Shore Honda",url:"https://www.nshonda.com",color:"Championship White",vin:"JHMFL5G48RX005005",location:{lat:40.838398,lng:-73.615311}},{atDealer:!0,city:"Lynn",state:"MA",phone:"7815955252 ",name:"Kelly Honda",url:"https://www.kelly-honda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G42RX002262",location:{lat:42.455303,lng:-70.958282}},{atDealer:!0,city:"West New York",state:"NJ",phone:"2018689500 ",name:"Hudson Honda",url:"https://www.hudsonhonda.com",color:"Championship White",vin:"JHMFL5G42RX004612",location:{lat:40.795368,lng:-74.017189}},{atDealer:!0,city:"Bay Shore",state:"NY",phone:"6316650005 ",name:"Atlantic Honda",url:"https://www.atlantichonda.com",color:"Crystal Black Pearl",vin:"JHMFL5G4XRX005054",location:{lat:40.734352,lng:-73.257072}},{atDealer:!0,city:"West Caldwell",state:"NJ",phone:"9738089100 ",name:"Paul Miller Honda of West Caldwell",url:"https://www.paulmillerhonda.com",color:"Championship White",vin:"JHMFL5G45RX003468",location:{lat:40.855385,lng:-74.311806}},{atDealer:!0,city:"Clifton",state:"NJ",phone:"8885114498 ",name:"Garden State Honda",url:"https://www.gardenstatehonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G41RX004309",location:{lat:40.833347,lng:-74.146149}},{atDealer:!0,city:"Clifton",state:"NJ",phone:"8885114498 ",name:"Garden State Honda",url:"https://www.gardenstatehonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G47RX004346",location:{lat:40.833347,lng:-74.146149}},{atDealer:!0,city:"North Attleboro",state:"MA",phone:"5085788700 ",name:"Balise Honda of North Attleboro",url:"http://www.balisehondanorthalttleboro.com",color:"Boost Blue Pearl",vin:"JHMFL5G42RX004979",location:{lat:41.954357,lng:-71.343979}},{atDealer:!0,city:"West Warwick",state:"RI",phone:"4018222000 ",name:"Balise Honda of West Warwick",url:"http://www.balisehondawestwarwick.com",color:"Sonic Gray Pearl",vin:"JHMFL5G41RX004438",location:{lat:41.680862,lng:-71.500954}},{atDealer:!0,city:"Plymouth",state:"MA",phone:"5089275300 ",name:"Tufankjian Honda of Plymouth",url:"https://www.hondaofplymouth.com",color:"Championship White",vin:"JHMFL5G41RX004617",location:{lat:41.933643,lng:-70.658005}},{atDealer:!0,city:"Bowie",state:"MD",phone:"3012183100 ",name:"Darcars Honda",url:"http://www.darcarshonda.com",color:"Championship White",vin:"JHMFL5G42RX002889",location:{lat:38.921719,lng:-76.717796}},{atDealer:!0,city:"Berlin",state:"VT",phone:"8022239700 ",name:"802 Honda",url:"https://www.802honda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G49RX004848",location:{lat:44.213173,lng:-72.574699}},{atDealer:!0,city:"S Portland",state:"ME",phone:"2077741429 ",name:"Berlin City Honda of Portland",url:"http://www.berlincityhondame.com",color:"Boost Blue Pearl",vin:"JHMFL5G40RX004768",location:{lat:43.637794,lng:-70.33503}},{atDealer:!0,city:"Plattsburgh",state:"NY",phone:"5185637686 ",name:"Della Honda",url:"http://www.dellahonda.net",color:"Championship White",vin:"JHMFL5G44RX004157",location:{lat:44.695499,lng:-73.517853}},{atDealer:!0,city:"Austinburg",state:"OH",phone:"4409975151 ",name:"Victory Honda",url:"https://www.victoryhonda440.com",color:"Sonic Gray Pearl",vin:"JHMFL5G42RX004948",location:{lat:41.784065,lng:-80.858597}},{atDealer:!0,city:"Akron",state:"OH",phone:"3306336060 ",name:"Great Lakes Honda",url:"https://www.glakeshonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G41RX004861",location:{lat:41.115063,lng:-81.492409}},{atDealer:!0,city:"S Charleston",state:"WV",phone:"3047681251 ",name:"Lester Raines Honda",url:"https://www.lesterraineshonda.com",color:"Championship White",vin:"JHMFL5G40RX005001",location:{lat:38.35387,lng:-81.73558}},{atDealer:!0,city:"Springfield",state:"OH",phone:"9373257091 ",name:"Bill Marine Honda",url:"https://www.billmarinehonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G4XRX004874",location:{lat:39.926624,lng:-83.80159}},{atDealer:!0,city:"Plymouth",state:"MI",phone:"7344533600 ",name:"Victory Honda of Plymouth",url:"https://www.victoryplymouth.com",color:"Sonic Gray Pearl",vin:"JHMFL5G48RX004937",location:{lat:42.358551,lng:-83.463814}},{atDealer:!0,city:"Dublin",state:"OH",phone:"6147649449 ",name:"Germain Honda of Dublin",url:"https://www.germainhondaofdublin.com",color:"Championship White",vin:"JHMFL5G4XRX002980",location:{lat:40.104359,lng:-83.092003}},{atDealer:!0,city:"Bowling Green",state:"OH",phone:"4193542222 ",name:"Thayer Honda",url:"http://www.thayerhonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G49RX004932",location:{lat:41.398178,lng:-83.65123}},{atDealer:!0,city:"Findlay",state:"OH",phone:"4194223511 ",name:"Reineke Honda",url:"https://www.reinekehonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G47RX005058",location:{lat:41.055695,lng:-83.605461}},{atDealer:!0,city:"Toledo",state:"OH",phone:"4198412222 ",name:"Brown Honda",url:"https://www.brownhonda.com/",color:"Crystal Black Pearl",vin:"JHMFL5G45RX002496",location:{lat:41.675301,lng:-83.68985}},{atDealer:!0,city:"Bay City",state:"MI",phone:"9896711150 ",name:"Thelen Honda",url:"https://www.thelenhondabaycity.com",color:"Championship White",vin:"JHMFL5G45RX005012",location:{lat:43.615501,lng:-83.9142}},{atDealer:!0,city:"Bristol",state:"TN",phone:"4239685111 ",name:"Bristol Honda",url:"https://www.bristolhonda.com/",color:"Championship White",vin:"JHMFL5G49RX004896",location:{lat:36.54195,lng:-82.233604}},{atDealer:!0,city:"Muncie",state:"IN",phone:"7652825955 ",name:"Victory Honda of Muncie",url:"https://www.victorymuncie.com",color:"Boost Blue Pearl",vin:"JHMFL5G49RX004977",location:{lat:40.217617,lng:-85.443665}},{atDealer:!0,city:"Grand Rapids",state:"MI",phone:"6169560000 ",name:"Fox Honda",url:"https://www.foxhondausa.com/",color:"Championship White",vin:"JHMFL5G47RX004623",location:{lat:42.907806,lng:-85.58287}},{atDealer:!0,city:"Taylorsville",state:"IN",phone:"8126691586 ",name:"Hubler Honda",url:"https://www.hublerhonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G44RX002327",location:{lat:39.30188,lng:-85.959663}},{atDealer:!0,city:"Stevensville",state:"MI",phone:"2699266181 ",name:"Tyler Honda",url:"https://www.tylershonda.com/",color:"Championship White",vin:"JHMFL5G47RX004931",location:{lat:42.038757,lng:-86.516792}},{atDealer:!0,city:"Bloomington",state:"IN",phone:"8127278400 ",name:"Andy Mohr Honda",url:"https://www.andymohrhonda.com",color:"Championship White",vin:"JHMFL5G42RX004819",location:{lat:39.15493,lng:-86.574799}},{atDealer:!0,city:"Highland",state:"IN",phone:"2199223100 ",name:"Bosak Honda",url:"https://www.bosakhondahighland.com",color:"Championship White",vin:"JHMFL5G42RX005002",location:{lat:41.535561,lng:-87.471649}},{atDealer:!0,city:"Bowling Green",state:"KY",phone:"2707818230 ",name:"Gary Force Honda",url:"https://www.garyforcehonda.com/",color:"Boost Blue Pearl",vin:"JHMFL5G4XRX004860",location:{lat:36.955402,lng:-86.42765}},{atDealer:!0,city:"Alcoa",state:"TN",phone:"8659702300 ",name:"Airport Honda",url:"https://www.airporthonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G44RX004451",location:{lat:35.823799,lng:-83.977188}},{atDealer:!0,city:"Fletcher",state:"NC",phone:"8286844400 ",name:"Apple Tree Honda",url:"https://www.honda.appletreeautomobiles.com",color:"Boost Blue Pearl",vin:"JHMFL5G41RX004407",location:{lat:35.441574,lng:-82.534668}},{atDealer:!0,city:"Morton Grove",state:"IL",phone:"8479658833 ",name:"Napleton Honda of Morton Grove",url:"https://www.napletonhondamortongrove.com",color:"Boost Blue Pearl",vin:"JHMFL5G43RX004523",location:{lat:42.041012,lng:-87.797943}},{atDealer:!0,city:"Joliet",state:"IL",phone:"8154392222 ",name:"The Honda Superstore of Joliet",url:"https://www.hondaofjoliet.com",color:"Championship White",vin:"JHMFL5G47RX004914",location:{lat:41.581959,lng:-88.163437}},{atDealer:!0,city:"Aurora",state:"IL",phone:"6308515700 ",name:"Valley Honda",url:"https://www.valleyhonda.com",color:"Championship White",vin:"JHMFL5G46RX004614",location:{lat:41.750515,lng:-88.213326}},{atDealer:!0,city:"Sumter",state:"SC",phone:"8034692595 ",name:"Freedom Honda",url:"https://www.freedomhondasumter.com",color:"Boost Blue Pearl",vin:"JHMFL5G47RX002094",location:{lat:33.962502,lng:-80.402702}},{atDealer:!0,city:"Warrenville",state:"SC",phone:"8036633636 ",name:"Honda Cars of Aiken",url:"https://www.hondacarsofaiken.com",color:"Sonic Gray Pearl",vin:"JHMFL5G46RX004449",location:{lat:33.559475,lng:-81.793243}},{atDealer:!0,city:"Myrtle Beach",state:"SC",phone:"8432156500 ",name:"East Coast Honda",url:"https://www.eastcoastcars.net/",color:"Championship White",vin:"JHMFL5G4XRX004616",location:{lat:33.636452,lng:-78.993233}},{atDealer:!0,city:"Roswell",state:"GA",phone:"7709932805 ",name:"Honda Carland",url:"https://www.hondacarland.com/",color:"Championship White",vin:"JHMFL5G45RX004636",location:{lat:34.050964,lng:-84.335838}},{atDealer:!0,city:"Naples",state:"FL",phone:"2396434044 ",name:"Germain Honda of Naples",url:"https://www.germainhonda.com/",color:"Championship White",vin:"JHMFL5G48RX002685",location:{lat:26.212429,lng:-81.7519}},{atDealer:!0,city:"Naples",state:"FL",phone:"2396434044 ",name:"Germain Honda of Naples",url:"https://www.germainhonda.com/",color:"Sonic Gray Pearl",vin:"JHMFL5G46RX005035",location:{lat:26.212429,lng:-81.7519}},{atDealer:!0,city:"Coral Springs",state:"FL",phone:"9547557400 ",name:"Coral Springs Honda",url:"https://www.coralspringshonda.com/",color:"Boost Blue Pearl",vin:"JHMFL5G48RX002539",location:{lat:26.239407,lng:-80.25267}},{atDealer:!0,city:"Hialeah",state:"FL",phone:"3058165666 ",name:"AutoNation Honda Miami Lakes",url:"https://www.autonationhondamiamilakes.com",color:"Boost Blue Pearl",vin:"JHMFL5G41RX002477",location:{lat:25.925489,lng:-80.297958}},{atDealer:!0,city:"Miami",state:"FL",phone:"3058563000 ",name:"Brickell Honda",url:"https://www.brickellhonda.com/",color:"Championship White",vin:"JHMFL5G49RX003165",location:{lat:25.765791,lng:-80.205307}},{atDealer:!0,city:"Miami",state:"FL",phone:"3058563000 ",name:"Brickell Honda",url:"https://www.brickellhonda.com/",color:"Sonic Gray Pearl",vin:"JHMFL5G45RX004541",location:{lat:25.765791,lng:-80.205307}},{atDealer:!0,city:"Pensacola",state:"FL",phone:"8504799091 ",name:"Pensacola Honda",url:"https://www.pensacolahonda.com/",color:"Championship White",vin:"JHMFL5G48RX002945",location:{lat:30.487,lng:-87.259399}},{atDealer:!0,city:"Selma",state:"AL",phone:"3348753366 ",name:"Merchant Honda",url:"https://www.merchanthonda.com",color:"Championship White",vin:"JHMFL5G46RX003320",location:{lat:32.430908,lng:-87.013939}},{atDealer:!0,city:"Galveston",state:"TX",phone:"4097612125 ",name:"Classic Honda Galveston",url:"https://www.classichondagalveston.com/",color:"Sonic Gray Pearl",vin:"JHMFL5G45RX004717",location:{lat:29.28616,lng:-94.862091}},{atDealer:!0,city:"College Station",state:"TX",phone:"9796962424 ",name:"Allen Honda",url:"https://www.allenhonda.com",color:"Championship White",vin:"JHMFL5G47RX004721",location:{lat:30.62007,lng:-96.29686}},{atDealer:!0,city:"Lake Jackson",state:"TX",phone:"9792370411 ",name:"Honda of Lake Jackson",url:"https://www.hondaoflakejackson.com",color:"Championship White",vin:"JHMFL5G47RX004668",location:{lat:29.047501,lng:-95.467201}},{atDealer:!0,city:"Baytown",state:"TX",phone:"2818373686 ",name:"Community Honda",url:"https://www.mycommunityhonda.com",color:"Championship White",vin:"JHMFL5G44RX005003",location:{lat:29.805592,lng:-94.9729}},{atDealer:!0,city:"Longview",state:"TX",phone:"9037572739 ",name:"Tower Honda of Longview",url:"https://www.towerhonda.com",color:"Championship White",vin:"JHMFL5G45RX004670",location:{lat:32.536556,lng:-94.722466}},{atDealer:!0,city:"Fort Worth",state:"TX",phone:"8179844119 ",name:"Honda of Fort Worth",url:"https://www.hondaoffortworth.com",color:"Championship White",vin:"JHMFL5G49RX004591",location:{lat:32.723869,lng:-97.481522}},{atDealer:!0,city:"Oklahoma City",state:"OK",phone:"4057538700 ",name:"Bob Howard Honda",url:"https://www.bobhowardhonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G4XRX004759",location:{lat:35.60392,lng:-97.496399}},{atDealer:!0,city:"Memphis",state:"TN",phone:"9017955900 ",name:"AutoNation Honda 385",url:"https://www.autonationhonda385.com",color:"Championship White",vin:"JHMFL5G41RX005010",location:{lat:35.038601,lng:-89.795319}},{atDealer:!1,city:"Iowa City",state:"IA",phone:"3193376100 ",name:"Billion Honda",url:"https://www.billionhonda.com/",color:"Rallye Red",vin:"JHMFL5G41RX005069",location:{lat:41.634865,lng:-91.564552}},{atDealer:!0,city:"Coon Rapids",state:"MN",phone:"9522077800 ",name:"Rapids Honda",url:"https://www.rapidshonda.com",color:"Championship White",vin:"JHMFL5G4XRX002171",location:{lat:45.185669,lng:-93.312904}},{atDealer:!0,city:"North Platte",state:"NE",phone:"3085322500 ",name:"Bill Summers Honda",url:"https://www.billsummershonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G42RX004142",location:{lat:41.10503,lng:-100.76255}},{atDealer:!0,city:"Chehalis",state:"WA",phone:"3602666200 ",name:"Interstate Honda",url:"https://www.interstatehondawa.com",color:"Championship White",vin:"JHMFL5G42RX004643",location:{lat:46.682323,lng:-122.97273}},{atDealer:!0,city:"Roseville",state:"CA",phone:"9167837733 ",name:"AutoNation Honda Roseville",url:"http://www.autonationhondaroseville.com",color:"Sonic Gray Pearl",vin:"JHMFL5G45RX004295",location:{lat:38.75045,lng:-121.25959}},{atDealer:!0,city:"Napa",state:"CA",phone:"7072524011 ",name:"Kastner Honda",url:"https://www.kastnerhonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G43RX004411",location:{lat:38.291573,lng:-122.27702}},{atDealer:!0,city:"Vallejo",state:"CA",phone:"7075513200 ",name:"Honda of Vallejo",url:"https://www.hondaofvallejo.com",color:"Boost Blue Pearl",vin:"JHMFL5G43RX004652",location:{lat:38.126434,lng:-122.22702}},{atDealer:!0,city:"Vallejo",state:"CA",phone:"7075513200 ",name:"Honda of Vallejo",url:"https://www.hondaofvallejo.com",color:"Rallye Red",vin:"JHMFL5G44RX005065",location:{lat:38.126434,lng:-122.22702}},{atDealer:!0,city:"Selma",state:"CA",phone:"5598913100 ",name:"Selma Honda",url:"https://www.selmahonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G49RX004252",location:{lat:36.570381,lng:-119.62392}},{atDealer:!0,city:"Loma Linda",state:"CA",phone:"9097997070 ",name:"Spreen Honda",url:"https://www.spreenhonda.com",color:"Sonic Gray Pearl",vin:"JHMFL5G4XRX004440",location:{lat:34.063477,lng:-117.2581}},{atDealer:!0,city:"Carson",state:"CA",phone:"3108344773 ",name:"Carson Honda",url:"https://www.carsonhonda.net",color:"Crystal Black Pearl",vin:"JHMFL5G41RX003757",location:{lat:33.824635,lng:-118.24702}},{atDealer:!0,city:"Golden",state:"CO",phone:"3032154200 ",name:"Planet Honda",url:"https://www.planethonda.com",color:"Boost Blue Pearl",vin:"JHMFL5G47RX004864",location:{lat:39.729759,lng:-105.17723}},{atDealer:!0,city:"Rio Rancho",state:"NM",phone:"5058980000 ",name:"Perfection Honda",url:"http://www.perfectionhonda.com",color:"Championship White",vin:"JHMFL5G44RX002960",location:{lat:35.213001,lng:-106.6611}},{atDealer:!0,city:"Rio Rancho",state:"NM",phone:"5058980000 ",name:"Perfection Honda",url:"http://www.perfectionhonda.com",color:"Crystal Black Pearl",vin:"JHMFL5G42RX002780",location:{lat:35.213001,lng:-106.6611}},{atDealer:!0,city:"Honolulu",state:"HI",phone:"8085287200 ",name:"Pacific Honda",url:"https://www.pachonda.com",color:"Crystal Black Pearl",vin:"JHMFL5G4XRX002994",location:{lat:21.310354,lng:-157.85815}},{atDealer:!0,city:"Waipahu",state:"HI",phone:"8086807100 ",name:"Tony Honda",url:"https://www.tonyhonda.com/",color:"Championship White",vin:"JHMFL5G42RX002908",location:{lat:21.428551,lng:-157.99794}},{atDealer:!0,city:"Kaneohe",state:"HI",phone:"8082478544 ",name:"Honda Windward",url:"https://www.hondawindward.com",color:"Boost Blue Pearl",vin:"JHMFL5G42RX002729",location:{lat:21.404938,lng:-157.79912}},{atDealer:!0,city:"Kaneohe",state:"HI",phone:"8082478544 ",name:"Honda Windward",url:"https://www.hondawindward.com",color:"Championship White",vin:"JHMFL5G49RX003103",location:{lat:21.404938,lng:-157.79912}},{atDealer:!0,city:"Kahului",state:"HI",phone:"8088738081 ",name:"Island Honda",url:"https://www.islandhonda.com/",color:"Sonic Gray Pearl",vin:"JHMFL5G46RX002409",location:{lat:20.890499,lng:-156.46109}}]}},function(a){a.O(0,[255,283,774,888,179],(function(){return o=5557,a(a.s=o);var o}));var o=a.O();_N_E=o}]);