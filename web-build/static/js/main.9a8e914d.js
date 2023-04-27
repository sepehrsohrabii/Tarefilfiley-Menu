(()=>{var t={833:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>G});var r=o(3292),i=o(4333),n=o(1133),a=o(9526),l=o(5861),d=o(2361);const s=function(){var t=(0,l.default)((function*(){yield d.loadAsync({IS:o(9527),IS_Black:o(8675),IS_Bold:o(7174),IS_Light:o(8065),IS_Medium:o(9524),IS_UltraLight:o(1525)})}));return function(){return t.apply(this,arguments)}}();o(3535);var c=o(7377),f=o(1880),u=o(9439),p=o(9899),g=o(1787),h=o(9233),y=o(1451);s();const x={typography:{heading1:{fontSize:"48px",fontFamily:"IS_Bold"},heading2:{fontSize:"48px",fontFamily:"IS_Bold"},heading3:{fontSize:"32px",fontFamily:"IS_Bold"},heading4:{fontSize:"24px",fontFamily:"IS_Bold"},heading5:{fontSize:"18px",fontFamily:"IS_Bold"},heading6:{fontSize:"14px",fontFamily:"IS_Bold"},label:{fontSize:"16px",fontFamily:"IS"},subTitle:{fontSize:"16px",fontFamily:"IS"},subTitle_M:{fontSize:"16px",fontFamily:"IS_Medium"},paragraph1:{fontSize:"18px",fontFamily:"IS"},paragraph2:{fontSize:"16px",fontFamily:"IS"},paragraph3:{fontSize:"14px",fontFamily:"IS"},productTitle:{fontSize:"14px",fontFamily:"IS_Medium"},productSubTitle:{fontSize:"12px",fontFamily:"IS"},productPrice:{fontSize:"16px",fontFamily:"IS_Medium"},small:{fontSize:"14px",fontFamily:"IS_UltraLight"},smallest:{fontSize:"12px",fontFamily:"IS_UltraLight"}},colors:{one:"#184D47",two:"#96BB7C",three:"#FAD586",four:"#C64756",fourWithOpacity:"rgba(198, 71, 86, 0.3)",darkGray:"#303030",lightGray:"#e0e0e0",lightTextColor:"#8e8e8e",defaultTextColor:"#353740",darkTextColor:"#202123",white:"#FFFFFF",black:"#000000"}};var m=o(4152),S=o(7370),b=o(8615),j=o(540),w=o(3559),z=o(9566),I=o(477),v=o(7557),F=i.default.create({marginEnd:{marginRight:40},singleProductBox:{borderColor:x.colors.one,padding:10,borderWidth:0,borderRadius:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.36,shadowRadius:6.68,backgroundColor:x.colors.white,elevation:11,marginBottom:10,zIndex:11,marginHorizontal:10},flexBox:{flexDirection:"row",alignItems:"center"},img:{width:60,height:60,borderRadius:10,marginLeft:20},productTitle:{fontFamily:x.typography.productTitle.fontFamily,fontSize:x.typography.productTitle.fontSize,color:x.colors.darkTextColor,textAlign:"right",marginBottom:5},subTitle:{fontFamily:x.typography.productSubTitle.fontFamily,fontSize:x.typography.productSubTitle.fontSize,color:x.colors.lightTextColor,textAlign:"right"},priceBox:{flexDirection:"row",alignItems:"center"},tooman:{fontFamily:x.typography.productSubTitle.fontFamily,fontSize:x.typography.productSubTitle.fontSize,color:x.colors.lightTextColor,textAlign:"right"},price:{fontFamily:x.typography.productPrice.fontFamily,fontSize:x.typography.productPrice.fontSize,color:x.colors.darkTextColor,textAlign:"right",marginLeft:5},title:{fontFamily:x.typography.heading3.fontFamily,fontSize:x.typography.heading3.fontSize,color:x.colors.defaultTextColor,paddingHorizontal:40,marginTop:30,marginBottom:40},container:{},categoryItem:{marginRight:16,padding:8,borderRadius:10,backgroundColor:x.colors.lighterGray},selectedCategoryItem:{backgroundColor:x.colors.one},categoryText:{fontFamily:x.typography.heading6.fontFamily,fontSize:x.typography.heading6.fontSize,color:x.colors.lightTextColor},productsContainer:{marginTop:25,paddingHorizontal:30},productListContainer:{paddingTop:5,height:"500px"},selectedCategoryText:{fontFamily:x.typography.heading6.fontFamily,fontSize:x.typography.heading6.fontSize,color:x.colors.white}});const T=function(t){var e=t.categories,r=t.products,i=(0,a.useState)(e[0]),l=(0,u.default)(i,2),d=l[0],s=l[1];return(0,v.jsx)(I.default,{children:(0,v.jsxs)(n.default,{style:F.container,children:[(0,v.jsx)(h.default,{style:F.title,children:"\u0645\u0646\u0648"}),(0,v.jsx)(z.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,inverted:!0,data:e,renderItem:function(t){var e=t.item,o=t.index;return(0,v.jsx)(y.default,{onPress:function(){s(e)},style:[F.categoryItem,(null==d?void 0:d._id)===e._id&&F.selectedCategoryItem,0==o?F.marginEnd:null],children:(0,v.jsx)(h.default,{style:[F.categoryText,(null==d?void 0:d._id)===e._id&&F.selectedCategoryText],children:e.title})})},keyExtractor:function(t){return t._id.toString()}}),d&&(0,v.jsx)(n.default,{style:F.productsContainer,children:(0,v.jsx)(z.default,{vertical:!0,showsVerticalScrollIndicator:!1,data:r.filter((function(t){return t.category===d._id})),renderItem:function(t){var e=t.item;return(0,v.jsxs)(n.default,{style:F.singleProductBox,children:[(0,v.jsxs)(n.default,{style:F.priceBox,children:[(0,v.jsx)(h.default,{style:F.tooman,children:"\u062a\u0648\u0645\u0627\u0646"}),(0,v.jsx)(h.default,{style:F.price,children:e.price})]}),(0,v.jsxs)(n.default,{style:F.flexBox,children:[(0,v.jsxs)(n.default,{children:[(0,v.jsx)(h.default,{style:F.productTitle,children:e.title}),(0,v.jsx)(h.default,{style:F.subTitle,children:e.description})]}),e.image?(0,v.jsx)(p.default,{source:{uri:e.image},style:F.img}):(0,v.jsx)(p.default,{source:o(6029),style:F.img})]})]})},keyExtractor:function(t,e){return e.toString()},style:F.productListContainer})})]})})};const C=function(t){var e=t.menuRefRBSheet,o=t.categories,r=t.products;return(0,v.jsx)(w.default,{ref:e,closeOnDragDown:!0,height:700,customStyles:{wrapper:{backgroundColor:"transparent"},container:{backgroundColor:x.colors.white,paddingHorizontal:0,borderTopLeftRadius:30,borderTopRightRadius:30,shadowColor:"#000",shadowOffset:{width:0,height:-5},shadowOpacity:.2,shadowRadius:6.27,elevation:10},draggableIcon:{backgroundColor:x.colors.one}},children:(0,v.jsx)(T,{categories:o,products:r})})};var _,O,R,B,k,M,A=o(6029),L=S.default.View(_||(_=(0,f.default)(["\n  flex: 1;\n  max-width: 100%;\n  flex-direction: column;\n  background: ",";\n"])),x.colors.one),P=S.default.View(O||(O=(0,f.default)(["\n  flex: 1;\n  flex-direction: row;\n"]))),E=S.default.View(R||(R=(0,f.default)(["\n  flex: 0.5;\n  align-self: center;\n  text-align: right;\n"]))),N=S.default.View(B||(B=(0,f.default)(["\n  width: 100%;\n  padding-right: 10%;\n  padding-left: 10%;\n  margin-bottom: 10%;\n"]))),D=S.default.Text(k||(k=(0,f.default)(["\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n"])),x.typography.heading1.fontFamily,x.typography.heading1.fontSize,x.colors.white),H=S.default.Text(M||(M=(0,f.default)(["\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n  text-align: center;\n"])),x.typography.subTitle_M.fontFamily,x.typography.subTitle_M.fontSize,x.colors.white),V=i.default.create({image:{flex:.5,resizeMode:"cover",justifyContent:"center"},starContainer:{width:"100%",textAlign:"right",alignItems:"end",justifyContent:"end",paddingRight:"10%",paddingLeft:"10%",marginBottom:"10%",flexDirection:"row",marginTop:"-4%"},starText:{marginEnd:"5%",fontFamily:x.typography.smallest.fontFamily,fontSize:x.typography.smallest.fontSize,color:x.colors.white},logoContainer:{width:"100%",textAlign:"right",alignItems:"end",paddingRight:"10%",paddingLeft:"10%",marginBottom:"10%"},logo:{backgroundColor:x.colors.white,borderRadius:20,width:"70px",height:"70px"},button:{backgroundColor:x.colors.four,borderRadius:"20px",padding:"13px",left:"15%",right:"15%",position:"absolute",bottom:"7%",shadowColor:"#000000",shadowOffset:{width:0,height:3},shadowOpacity:.17,shadowRadius:3.05,elevation:4},textContainer:{width:"100%",textAlign:"right",alignItems:"end",paddingRight:"10%",paddingLeft:"10%",marginBottom:"10%"},description:{fontFamily:x.typography.paragraph2.fontFamily,fontSize:x.typography.paragraph2.fontSize,color:x.colors.white,textAlign:"justify",lineHeight:"25px"},normalText:{fontFamily:x.typography.paragraph2.fontFamily,fontSize:x.typography.paragraph2.fontSize,color:x.colors.white,marginEnd:"5%"}});const U=function(){var t=(0,a.useRef)(),e=window.location.href.split("/").pop(),o=(0,a.useState)(),r=(0,u.default)(o,2),i=r[0],d=r[1],s=(0,a.useState)(),c=(0,u.default)(s,2),f=c[0],S=c[1],w=(0,a.useState)(),z=(0,u.default)(w,2),I=z[0],F=z[1],T=function(){var t=(0,l.default)((function*(){try{var t=yield b.default.post("https://api.tarefilfiley.me/restaurant/get-data",{restaurantLink:e});200===t.status&&(d(t.data.restaurant),S(t.data.categories),F(t.data.products))}catch(o){console.error(o)}}));return function(){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){T()}),[]),(0,v.jsx)(m.SafeAreaProvider,{children:i?(0,v.jsxs)(L,{children:[(0,v.jsxs)(P,{children:[i.image?(0,v.jsx)(g.default,{source:i.image,resizeMode:"cover",style:V.image}):(0,v.jsx)(g.default,{source:A,resizeMode:"cover",style:V.image}),(0,v.jsxs)(E,{children:[(0,v.jsx)(n.default,{style:V.logoContainer,children:(0,v.jsx)(p.default,{source:i.logo,style:V.logo,resizeMode:"contain"})}),(0,v.jsx)(N,{children:(0,v.jsx)(D,{children:i.persianName})}),(0,v.jsxs)(n.default,{style:V.starContainer,children:[(0,v.jsx)(h.default,{style:V.starText,children:"(193 \u0646\u0641\u0631)"}),(0,v.jsx)(j.Icon,{type:"antdesign",name:"staro",color:x.colors.three,size:18}),(0,v.jsx)(j.Icon,{type:"antdesign",name:"star",color:x.colors.three,size:18}),(0,v.jsx)(j.Icon,{type:"antdesign",name:"star",color:x.colors.three,size:18}),(0,v.jsx)(j.Icon,{type:"antdesign",name:"star",color:x.colors.three,size:18}),(0,v.jsx)(j.Icon,{type:"antdesign",name:"star",color:x.colors.three,size:18})]}),(0,v.jsx)(N,{children:(0,v.jsxs)(h.default,{style:V.description,children:["\u0645\u062c\u0645\u0648\u0639\u0647 \u06cc ",i.persianName," \u0628\u0627 \u0645\u0646\u0648\u06cc \u0622\u0646\u0644\u0627\u06cc\u0646 \u062f\u0631 \u062e\u062f\u0645\u062a \u0634\u0645\u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0645\u0634\u0627\u0647\u062f\u0647 \u06cc \u0645\u0646\u0648 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \u06cc \u067e\u0627\u06cc\u06cc\u0646 \u0635\u0641\u062d\u0647 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f."]})}),(0,v.jsxs)(n.default,{style:V.textContainer,children:[(0,v.jsx)(j.Icon,{type:"antdesign",name:"phone",color:x.colors.three,size:18}),(0,v.jsx)(h.default,{style:V.normalText,children:i.phoneNumber})]}),(0,v.jsxs)(n.default,{style:V.textContainer,children:[(0,v.jsx)(j.Icon,{type:"antdesign",name:"clockcircleo",color:x.colors.three,size:18}),(0,v.jsx)(h.default,{style:V.normalText,children:i.openingHours})]})]})]}),(0,v.jsx)(y.default,{style:V.button,onPress:function(){t.current.open()},children:(0,v.jsx)(H,{children:"\u0645\u0634\u0627\u0647\u062f\u0647 \u0645\u0646\u0648"})}),(0,v.jsx)(C,{menuRefRBSheet:t,categories:f,products:I})]}):(0,v.jsx)(h.default,{children:"Loading..."})})};o(5931),(0,c.default)();function G(){return(0,a.useEffect)((function(){s()}),[]),(0,v.jsxs)(n.default,{style:W.container,children:[(0,v.jsx)(U,{}),(0,v.jsx)(r.default,{style:"auto"})]})}var W=i.default.create({container:{flex:1}})},9527:(t,e,o)=>{"use strict";t.exports=o.p+"static/media/IRANSansMobile.ce44a86237c3895735c4.ttf"},8675:(t,e,o)=>{"use strict";t.exports=o.p+"static/media/IRANSansMobile_Black.e016661526bf9a67e142.ttf"},7174:(t,e,o)=>{"use strict";t.exports=o.p+"static/media/IRANSansMobile_Bold.9cbecc29434c75855290.ttf"},8065:(t,e,o)=>{"use strict";t.exports=o.p+"static/media/IRANSansMobile_Light.e9646c48c5352e7e37dc.ttf"},9524:(t,e,o)=>{"use strict";t.exports=o.p+"static/media/IRANSansMobile_Medium.8a5415cfb0d7c08e7a41.ttf"},1525:(t,e,o)=>{"use strict";t.exports=o.p+"static/media/IRANSansMobile_UltraLight.0200ed932379265e8923.ttf"},6029:(t,e,o)=>{"use strict";t.exports=o.p+"static/media/food.e78dbbb63abc9800218f.jpg"},4654:()=>{}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=t,(()=>{var t=[];o.O=(e,r,i,n)=>{if(!r){var a=1/0;for(c=0;c<t.length;c++){for(var[r,i,n]=t[c],l=!0,d=0;d<r.length;d++)(!1&n||a>=n)&&Object.keys(o.O).every((t=>o.O[t](r[d])))?r.splice(d--,1):(l=!1,n<a&&(a=n));if(l){t.splice(c--,1);var s=i();void 0!==s&&(e=s)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[r,i,n]}})(),o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},(()=>{var t,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;o.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var n=Object.create(null);o.r(n);var a={};t=t||[null,e({}),e([]),e(e)];for(var l=2&i&&r;"object"==typeof l&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach((t=>a[t]=()=>r[t]));return a.default=()=>r,o.d(n,a),n}})(),o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.p="/",(()=>{var t={179:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var i,n,[a,l,d]=r,s=0;if(a.some((e=>0!==t[e]))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(d)var c=d(o)}for(e&&e(r);s<a.length;s++)n=a[s],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),o.nc=void 0;var r=o.O(void 0,[612],(()=>o(9386)));r=o.O(r)})();
//# sourceMappingURL=main.9a8e914d.js.map