(()=>{var e={833:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>K});var r=o(3292),i=o(4333),n=o(1133),a=o(9526),l=o(5861),s=o(2361);const d=function(){var e=(0,l.default)((function*(){yield s.loadAsync({IS:o(9527),IS_Black:o(8675),IS_Bold:o(7174),IS_Light:o(8065),IS_Medium:o(9524),IS_UltraLight:o(1525)})}));return function(){return e.apply(this,arguments)}}();var c=o(3535),f=o(7377),u=o(1880),p=o(9439),g=o(9899),h=o(1787),y=o(9233),x=o(1451);d();const m={typography:{heading1:{fontSize:"48px",fontFamily:"IS_Bold"},heading2:{fontSize:"48px",fontFamily:"IS_Bold"},heading3:{fontSize:"32px",fontFamily:"IS_Bold"},heading4:{fontSize:"24px",fontFamily:"IS_Bold"},heading5:{fontSize:"18px",fontFamily:"IS_Bold"},heading6:{fontSize:"14px",fontFamily:"IS_Bold"},label:{fontSize:"16px",fontFamily:"IS"},subTitle:{fontSize:"16px",fontFamily:"IS"},subTitle_M:{fontSize:"16px",fontFamily:"IS_Medium"},paragraph1:{fontSize:"18px",fontFamily:"IS"},paragraph2:{fontSize:"16px",fontFamily:"IS"},paragraph3:{fontSize:"14px",fontFamily:"IS"},productTitle:{fontSize:"14px",fontFamily:"IS_Medium"},productSubTitle:{fontSize:"12px",fontFamily:"IS"},productPrice:{fontSize:"16px",fontFamily:"IS_Medium"},small:{fontSize:"14px",fontFamily:"IS_UltraLight"},smallest:{fontSize:"12px",fontFamily:"IS_UltraLight"}},colors:{one:"#184D47",two:"#96BB7C",three:"#FAD586",four:"#C64756",fourWithOpacity:"rgba(198, 71, 86, 0.3)",darkGray:"#303030",lightGray:"#e0e0e0",lightTextColor:"#8e8e8e",defaultTextColor:"#353740",darkTextColor:"#202123",white:"#FFFFFF",black:"#000000"}};var S=o(4152),b=o(7370),j=o(8615),w=o(540),z=o(3559),v=o(9566),I=o(477),F=o(7557),T=i.default.create({marginEnd:{marginRight:40},singleProductBox:{borderColor:m.colors.one,padding:10,borderWidth:0,borderRadius:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.36,shadowRadius:6.68,backgroundColor:m.colors.white,elevation:11,marginBottom:10,zIndex:11,marginHorizontal:10},flexBox:{flexDirection:"row",alignItems:"center"},img:{width:60,height:60,borderRadius:10,marginLeft:20},productTitle:{fontFamily:m.typography.productTitle.fontFamily,fontSize:m.typography.productTitle.fontSize,color:m.colors.darkTextColor,textAlign:"right",marginBottom:5},subTitle:{fontFamily:m.typography.productSubTitle.fontFamily,fontSize:m.typography.productSubTitle.fontSize,color:m.colors.lightTextColor,textAlign:"right"},priceBox:{flexDirection:"row",alignItems:"center"},tooman:{fontFamily:m.typography.productSubTitle.fontFamily,fontSize:m.typography.productSubTitle.fontSize,color:m.colors.lightTextColor,textAlign:"right"},price:{fontFamily:m.typography.productPrice.fontFamily,fontSize:m.typography.productPrice.fontSize,color:m.colors.darkTextColor,textAlign:"right",marginLeft:5},title:{fontFamily:m.typography.heading3.fontFamily,fontSize:m.typography.heading3.fontSize,color:m.colors.defaultTextColor,paddingHorizontal:40,marginTop:30,marginBottom:40},container:{},categoryItem:{marginRight:16,padding:8,borderRadius:10,backgroundColor:m.colors.lighterGray},selectedCategoryItem:{backgroundColor:m.colors.one},categoryText:{fontFamily:m.typography.heading6.fontFamily,fontSize:m.typography.heading6.fontSize,color:m.colors.lightTextColor},productsContainer:{marginTop:25,paddingHorizontal:30},productListContainer:{paddingTop:5,height:"500px"},selectedCategoryText:{fontFamily:m.typography.heading6.fontFamily,fontSize:m.typography.heading6.fontSize,color:m.colors.white}});const C=function(e){var t=e.categories,r=e.products,i=(0,a.useState)(t[0]),l=(0,p.default)(i,2),s=l[0],d=l[1];return(0,F.jsx)(I.default,{children:(0,F.jsxs)(n.default,{style:T.container,children:[(0,F.jsx)(y.default,{style:T.title,children:"\u0645\u0646\u0648"}),(0,F.jsx)(v.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,inverted:!0,data:t,renderItem:function(e){var t=e.item,o=e.index;return(0,F.jsx)(x.default,{onPress:function(){d(t)},style:[T.categoryItem,(null==s?void 0:s._id)===t._id&&T.selectedCategoryItem,0==o?T.marginEnd:null],children:(0,F.jsx)(y.default,{style:[T.categoryText,(null==s?void 0:s._id)===t._id&&T.selectedCategoryText],children:t.title})})},keyExtractor:function(e){return e._id.toString()}}),s&&(0,F.jsx)(n.default,{style:T.productsContainer,children:(0,F.jsx)(v.default,{vertical:!0,showsVerticalScrollIndicator:!1,data:r.filter((function(e){return e.category===s._id})),renderItem:function(e){var t=e.item;return(0,F.jsxs)(n.default,{style:T.singleProductBox,children:[(0,F.jsxs)(n.default,{style:T.priceBox,children:[(0,F.jsx)(y.default,{style:T.tooman,children:"\u062a\u0648\u0645\u0627\u0646"}),(0,F.jsx)(y.default,{style:T.price,children:t.price})]}),(0,F.jsxs)(n.default,{style:T.flexBox,children:[(0,F.jsxs)(n.default,{children:[(0,F.jsx)(y.default,{style:T.productTitle,children:t.title}),(0,F.jsx)(y.default,{style:T.subTitle,children:t.description})]}),t.image?(0,F.jsx)(g.default,{source:{uri:t.image},style:T.img}):(0,F.jsx)(g.default,{source:o(6029),style:T.img})]})]})},keyExtractor:function(e,t){return t.toString()},style:T.productListContainer})})]})})};const _=function(e){var t=e.menuRefRBSheet,o=e.categories,r=e.products;return(0,F.jsx)(z.default,{ref:t,closeOnDragDown:!0,height:700,customStyles:{wrapper:{backgroundColor:"transparent"},container:{backgroundColor:m.colors.white,paddingHorizontal:0,borderTopLeftRadius:30,borderTopRightRadius:30,shadowColor:"#000",shadowOffset:{width:0,height:-5},shadowOpacity:.2,shadowRadius:6.27,elevation:10},draggableIcon:{backgroundColor:m.colors.one}},children:(0,F.jsx)(C,{categories:o,products:r})})};var k,O,R,B,L,M,A=o(5519),P=o(6029),N=b.default.View(k||(k=(0,u.default)(["\n  flex: 1;\n  max-width: 100%;\n  flex-direction: column;\n  background: ",";\n"])),m.colors.one),H=b.default.View(O||(O=(0,u.default)(["\n  flex: 1;\n  flex-direction: row;\n"]))),E=b.default.View(R||(R=(0,u.default)(["\n  flex: 0.5;\n  align-self: center;\n  text-align: right;\n"]))),D=b.default.View(B||(B=(0,u.default)(["\n  width: 100%;\n  padding-right: 10%;\n  padding-left: 10%;\n  margin-bottom: 10%;\n"]))),U=b.default.Text(L||(L=(0,u.default)(["\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n"])),m.typography.heading1.fontFamily,m.typography.heading1.fontSize,m.colors.white),V=b.default.Text(M||(M=(0,u.default)(["\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-align: center;\n"])),m.typography.subTitle_M.fontFamily,m.typography.subTitle_M.fontSize,m.colors.white),G=i.default.create({image:{flex:.5,resizeMode:"cover",justifyContent:"center"},starContainer:{width:"100%",textAlign:"right",alignItems:"end",justifyContent:"end",paddingRight:"10%",paddingLeft:"10%",marginBottom:"10%",flexDirection:"row",marginTop:"-4%"},starText:{marginEnd:"5%",fontFamily:m.typography.smallest.fontFamily,fontSize:m.typography.smallest.fontSize,color:m.colors.white},logoContainer:{width:"100%",textAlign:"right",alignItems:"end",paddingRight:"10%",paddingLeft:"10%",marginBottom:"10%"},logo:{backgroundColor:m.colors.white,borderRadius:20,width:"70px",height:"70px"},button:{backgroundColor:m.colors.four,borderRadius:"20px",padding:"13px",left:"15%",right:"15%",position:"absolute",bottom:"7%",shadowColor:"#000000",shadowOffset:{width:0,height:3},shadowOpacity:.17,shadowRadius:3.05,elevation:4},textContainer:{width:"100%",textAlign:"right",alignItems:"center",paddingRight:"10%",paddingLeft:"10%",marginBottom:"10%",flexDirection:"row-reverse"},description:{fontFamily:m.typography.paragraph2.fontFamily,fontSize:m.typography.paragraph2.fontSize,color:m.colors.white,textAlign:"right",lineHeight:"25px"},normalText:{fontFamily:m.typography.paragraph2.fontFamily,fontSize:m.typography.paragraph2.fontSize,color:m.colors.white,marginEnd:"5%"}});const W=function(){var e=(0,a.useRef)(),t=window.location.href,o=new URLSearchParams(t.split("?")[1]).get("restaurantLink");console.log(o);var r=(0,a.useState)(),i=(0,p.default)(r,2),s=i[0],d=i[1],c=(0,a.useState)(),f=(0,p.default)(c,2),u=f[0],b=f[1],z=(0,a.useState)(),v=(0,p.default)(z,2),I=v[0],T=v[1],C=function(){var e=(0,l.default)((function*(){try{null===o&&(o=yield A.default.getItem("restaurantLink"),console.log(o));var e=yield j.default.post("https://api.tarefilfiley.me/restaurant/get-data",{restaurantLink:o});200===e.status&&(d(e.data.restaurant),b(e.data.categories),T(e.data.products),yield A.default.setItem("restaurantLink",o))}catch(t){console.error(t)}}));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){C()}),[]),(0,F.jsx)(S.SafeAreaProvider,{children:s?(0,F.jsxs)(N,{children:[(0,F.jsxs)(H,{children:[s.image?(0,F.jsx)(h.default,{source:s.image,resizeMode:"cover",style:G.image}):(0,F.jsx)(h.default,{source:P,resizeMode:"cover",style:G.image}),(0,F.jsxs)(E,{children:[(0,F.jsx)(n.default,{style:G.logoContainer,children:(0,F.jsx)(g.default,{source:s.logo,style:G.logo,resizeMode:"contain"})}),(0,F.jsx)(D,{children:(0,F.jsx)(U,{children:s.persianName})}),(0,F.jsxs)(n.default,{style:G.starContainer,children:[(0,F.jsx)(y.default,{style:G.starText,children:"(193 \u0646\u0641\u0631)"}),(0,F.jsx)(w.Icon,{type:"antdesign",name:"staro",color:m.colors.three,size:18}),(0,F.jsx)(w.Icon,{type:"antdesign",name:"star",color:m.colors.three,size:18}),(0,F.jsx)(w.Icon,{type:"antdesign",name:"star",color:m.colors.three,size:18}),(0,F.jsx)(w.Icon,{type:"antdesign",name:"star",color:m.colors.three,size:18}),(0,F.jsx)(w.Icon,{type:"antdesign",name:"star",color:m.colors.three,size:18})]}),(0,F.jsx)(D,{children:(0,F.jsxs)(y.default,{style:G.description,children:["\u0645\u062c\u0645\u0648\u0639\u0647 \u06cc ",s.persianName," \u0628\u0627 \u0645\u0646\u0648\u06cc \u0622\u0646\u0644\u0627\u06cc\u0646 \u062f\u0631 \u062e\u062f\u0645\u062a \u0634\u0645\u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u06cc \u0645\u0646\u0648 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \u06cc \u067e\u0627\u06cc\u06cc\u0646 \u0635\u0641\u062d\u0647 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f."]})}),(0,F.jsxs)(n.default,{style:G.textContainer,children:[(0,F.jsx)(w.Icon,{type:"antdesign",name:"phone",color:m.colors.three,size:18}),(0,F.jsx)(y.default,{style:G.normalText,children:s.phoneNumber})]}),(0,F.jsxs)(n.default,{style:G.textContainer,children:[(0,F.jsx)(w.Icon,{type:"antdesign",name:"clockcircleo",color:m.colors.three,size:18}),(0,F.jsx)(y.default,{style:G.normalText,children:s.openingHours})]})]})]}),(0,F.jsx)(x.default,{style:G.button,onPress:function(){e.current.open()},children:(0,F.jsx)(V,{children:"\u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u0646\u0648"})}),(0,F.jsx)(_,{menuRefRBSheet:e,categories:u,products:I})]}):(0,F.jsx)(y.default,{children:"Loading..."})})};o(5931);var q=(0,f.default)();const J=function(){var e={prefixes:[],config:{screens:{Home:{path:"",screens:{Home:"/:restaurantLink"}}}}};return(0,F.jsx)(c.default,{linking:e,fallback:(0,F.jsx)(Text,{children:"Loading..."}),children:(0,F.jsx)(q.Navigator,{initialRouteName:"Home",screenOptions:{headerShown:!1},children:(0,F.jsx)(q.Screen,{name:"Home",component:W})})})};function K(){return(0,a.useEffect)((function(){d()}),[]),(0,F.jsxs)(n.default,{style:Q.container,children:[(0,F.jsx)(J,{}),(0,F.jsx)(r.default,{style:"auto"})]})}var Q=i.default.create({container:{flex:1}})},9527:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/IRANSansMobile.ce44a86237c3895735c4.ttf"},8675:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/IRANSansMobile_Black.e016661526bf9a67e142.ttf"},7174:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/IRANSansMobile_Bold.9cbecc29434c75855290.ttf"},8065:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/IRANSansMobile_Light.e9646c48c5352e7e37dc.ttf"},9524:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/IRANSansMobile_Medium.8a5415cfb0d7c08e7a41.ttf"},1525:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/IRANSansMobile_UltraLight.0200ed932379265e8923.ttf"},6029:(e,t,o)=>{"use strict";e.exports=o.p+"static/media/food.e78dbbb63abc9800218f.jpg"},4654:()=>{}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=e,(()=>{var e=[];o.O=(t,r,i,n)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,i,n]=e[c],l=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,i,n]}})(),o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var n=Object.create(null);o.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,o.d(n,a),n}})(),o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/",(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[a,l,s]=r,d=0;if(a.some((t=>0!==e[t]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(s)var c=s(o)}for(t&&t(r);d<a.length;d++)n=a[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.nc=void 0;var r=o.O(void 0,[201],(()=>o(9386)));r=o.O(r)})();
//# sourceMappingURL=main.915f03e3.js.map