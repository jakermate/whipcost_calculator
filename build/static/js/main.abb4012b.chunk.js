(this.webpackJsonploan=this.webpackJsonploan||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/r8.65851d34.jpg"},16:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),o=a.n(r),c=(a(21),a(2)),s=a(11),i=(a(22),a(23),a(3)),m=a(12),u=a.n(m),d=a(6),x=a.n(d),b=a(1),f=a(4),p=a.n(f);function g(){var e=Object(c.a)(["\n  padding-bottom: 6px;\n"]);return g=function(){return e},e}function v(){var e=Object(n.useState)(25e3),t=Object(b.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(1),c=Object(b.a)(o,2),s=c[0],i=c[1],m=Object(n.useState)(12),u=Object(b.a)(m,2),d=u[0],x=u[1],f=Object(n.useState)(0),g=Object(b.a)(f,2),v=g[0],E=g[1],y=Object(n.useState)(0),w=Object(b.a)(y,2),N=w[0],j=w[1];function O(e){console.log("unfocused"),""===e.target.value&&(e.target.value=0)}return Object(n.useEffect)((function(){!function(e){if(console.log("update"),a<.01)return j(0),void E(0);if(s<.01)return j((a/d).toFixed(2)),void E(a);if(d<1)return j(0),void E(a);var t=a*(s/100)/12/(1-Math.pow(1+s/100/12,-d));E((d*t).toFixed(2)),j(t.toFixed(2))}()}),[a,s,d]),l.a.createElement("div",{id:"monthly-price-calc ",className:"py-3 px-4"},l.a.createElement("div",{className:"flex flex-row flex-wrap p-3 box-border"},l.a.createElement("div",{className:"pr-4 mb-4 sm:mb-0 w-full sm:w-1/3 relative"},l.a.createElement("label",{className:"mb-2 block text-gray-700 text-sm",htmlFor:"loan"},"Loan Amount"),l.a.createElement(h,{onChange:function(e){var t;(t=e.target.value)?r(t):r()},type:"text",name:"loan",style:{paddingLeft:"16px"},value:a,onBlur:function(e){return O(e)},className:"border-b-2 w-full bg-transparent outline-none border-gray-400"}),l.a.createElement("div",{className:"absolute text-lg font-bold",style:{top:"27px"}},"$")),l.a.createElement("div",{className:"box-border pr-4 w-6/12 sm:w-1/3 relative"},l.a.createElement("label",{className:"mb-2 block text-gray-700 text-sm",htmlFor:"interest"},"Interest %"),l.a.createElement(h,{value:s,onBlur:function(e){return O(e)},onChange:function(e){return i(e.target.value)},type:"text",name:"interest",className:"border-b-2 bg-transparent w-full outline-none border-gray-400"})),l.a.createElement("div",{className:"box-border pr-4 w-6/12 sm:w-1/3 relative"},l.a.createElement("label",{className:"mb-2 block text-gray-700 text-sm",htmlFor:"duration"},"Loan Duration"),l.a.createElement(h,{value:d,onBlur:function(e){return O(e)},onChange:function(e){return x(e.target.value)},type:"text",name:"duration",className:"border-b-2 bg-transparent w-full outline-none border-gray-400"}),l.a.createElement("p",{className:"text-gray-500 text-sm"},"months"))),l.a.createElement("div",{className:"flex flex-row p-3 results-container"},l.a.createElement("div",{className:"w-1/2"},l.a.createElement("label",{htmlFor:"",className:"text-gray-700"},"Total Cost"),l.a.createElement("div",{className:"flex flex-row justify-start text-xl font-bold w-full text-right"},l.a.createElement("div",null,"$"),l.a.createElement("div",null,p()(v)))),l.a.createElement("div",{className:"w-1/2"},l.a.createElement("label",{htmlFor:"",className:"text-gray-700"},"Monthly Payment"),l.a.createElement("div",{className:"flex flex-row justify-start text-xl font-bold w-full text-right"},l.a.createElement("div",null,"$"),l.a.createElement("div",null,p()(N))))),l.a.createElement("div",{className:"ml-3 mt-4 mb-2 text-xl"},"This is ",l.a.createElement("span",{className:"font-bold"},(N<554?Math.abs(554/N*100)-100:Math.abs(N/554*100)-100).toFixed(0),"%")," ",N>554?l.a.createElement("span",{className:"font-bold text-red-400"},"higher"):l.a.createElement("span",{className:"font-bold text-green-400"},"lower")," than the national avarage car payment."))}var h=i.a.input(g());function E(){var e=Object(c.a)(["\n  padding-bottom: 6px;\n"]);return E=function(){return e},e}var y=a(4);function w(){var e=Object(n.useState)(360),t=Object(b.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(1),c=Object(b.a)(o,2),s=c[0],i=c[1],m=Object(n.useState)(12),u=Object(b.a)(m,2),d=u[0],x=u[1],f=Object(n.useState)(0),p=Object(b.a)(f,2),g=p[0],v=p[1],h=Object(n.useState)(0),E=Object(b.a)(h,2),w=E[0],j=E[1];function O(e){console.log("unfocused"),""===e.target.value&&(e.target.value=0)}return Object(n.useEffect)((function(){!function(){var e=s;isNaN(e)&&(e=.01);j(a*d);var t=(1-Math.pow(1+e/100/12,-d))*a/(e/100/12);v(t.toFixed(2))}()}),[a,s,d]),l.a.createElement("div",{id:"monthly-price-calc ",className:"py-3 px-4"},l.a.createElement("div",{className:"flex flex-row flex-wrap p-3 box-border"},l.a.createElement("div",{className:"pr-4 mb-4 sm:mb-0 w-full sm:w-1/3 relative"},l.a.createElement("label",{className:"mb-2 block text-gray-700 text-sm",htmlFor:"loan"},"Monthly Budget"),l.a.createElement(N,{onChange:function(e){return r(e.target.value)},type:"text",name:"loan",style:{paddingLeft:"16px"},value:a,onBlur:function(e){return O(e)},className:"border-b-2 w-full bg-transparent outline-none border-gray-400"}),l.a.createElement("div",{className:"absolute text-lg font-bold",style:{top:"27px"}},"$")),l.a.createElement("div",{className:"box-border pr-4 w-6/12 sm:w-1/3 relative"},l.a.createElement("label",{className:"mb-2 block text-gray-700 text-sm",htmlFor:"interest"},"Interest %"),l.a.createElement(N,{value:s,onBlur:function(e){return O(e)},onChange:function(e){return i(e.target.value)},type:"text",name:"interest",className:"border-b-2 bg-transparent w-full outline-none border-gray-400"})),l.a.createElement("div",{className:"box-border pr-4 w-6/12 sm:w-1/3 relative"},l.a.createElement("label",{className:"mb-2 block text-gray-700 text-sm",htmlFor:"duration"},"Loan Duration"),l.a.createElement(N,{value:d,onBlur:function(e){return O(e)},onChange:function(e){return x(e.target.value)},type:"text",name:"duration",className:"border-b-2 bg-transparent w-full outline-none border-gray-400"}),l.a.createElement("p",{className:"text-gray-500 text-sm"},"months"))),l.a.createElement("div",{className:"flex flex-row p-3 results-container"},l.a.createElement("div",{className:"w-1/2"},l.a.createElement("label",{htmlFor:"",className:"text-gray-700"},"Amount Borrowed"),l.a.createElement("div",{className:"flex flex-row justify-start text-xl font-bold w-full text-right"},l.a.createElement("div",null,"$"),l.a.createElement("div",null,y(g)))),l.a.createElement("div",{className:"w-1/2"},l.a.createElement("label",{htmlFor:"",className:"text-gray-700"},"Total Cost"),l.a.createElement("div",{className:"flex flex-row justify-start text-xl font-bold w-full text-right"},l.a.createElement("div",null,"$"),l.a.createElement("div",null,y(w))))),l.a.createElement("div",{className:"ml-3 mb-2 mt-4 text-xl"},"This is ",l.a.createElement("span",{className:"font-bold"},(w<36718?Math.abs(36718/w*100)-100:Math.abs(w/36718*100)-100).toFixed(0),"%")," ",w>36718?l.a.createElement("span",{className:"font-bold text-red-400"},"higher"):l.a.createElement("span",{className:"font-bold text-green-400"},"lower")," than the national avarage car purchase."))}var N=i.a.input(E());function j(){var e=Object(c.a)(["\n    cursor: pointer;\n    color: ",";\n    background: ",";\n\n    border-color: ",";\n    border-bottom-width: 1px;\n\n"]);return j=function(){return e},e}function O(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"container mx-auto max-w-2xl flex flex-col shadow-2xl sm:rounded-md relative bg-white border-gray-100 border-2 my-4 ",style:{minHeight:"300px",marginTop:"-60px",zIndex:200,position:"relative"}},l.a.createElement("div",{className:"input-container h-full flex-grow flex flex-col"},l.a.createElement("div",{className:"mode-switcher-container text-center flex flex-row w-full"},l.a.createElement(k,{active:0===a,className:"monthly-mode-container font-bold text-gray-500 flex-grow py-3",onClick:function(e){return r(0)}},"Monthly Payment"),l.a.createElement(k,{active:1===a,className:"max-cost-mode-container font-bold text-gray-500 flex-grow py-3",onClick:function(e){return r(1)}},"Maximum Price")),l.a.createElement("div",{className:"calculator-content bg-gray-100 flex-grow"},0===a?l.a.createElement(v,null):l.a.createElement(w,null)),l.a.createElement("div",{className:"px-8"},l.a.createElement("hr",null)),l.a.createElement("div",{id:"warning",className:"text-center mt-4 text-xs px-6 pb-8 opacity-50"},l.a.createElement("h6",null,"All prices and loan amounts are estimates, and may not reflect actual final pricing of your purchase.  Use this calculator as but one of many tools in helping you save money."),l.a.createElement("h6",null,"WhipCost accepts no liability."))))}var k=i.a.div(j(),(function(e){return!0===e.active&&"blue"}),(function(e){return!1===e.active&&"rgba(200,200,200,.2)"}),(function(e){return!0===e.active&&"blue"}));function C(){var e=Object(c.a)(["\n  position: absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  z-index: 1;\n  background: rgba(60,60,60,.8);\n"]);return C=function(){return e},e}function F(){var e=Object(c.a)(["\n  min-height: 70vh;\n  background: url(",");\n  background-size: cover;\n  position: relative;\n"]);return F=function(){return e},e}var S=function(){return l.a.createElement("div",{className:"App relative bg-gray-800"},l.a.createElement(M,{className:"App-header relative w-full text-white "},l.a.createElement(B,null),l.a.createElement("div",{className:"navbar p-4 text-white w-full relative mx-auto container justify-start flex flex-row items-center",style:{zIndex:18}},l.a.createElement("div",{className:"logo-container tracking-widest  text-teal-100"},l.a.createElement("a",{href:"/"},"WHIPCOST"))),l.a.createElement("div",{className:"container mt-12 align-center mx-auto relative header-content py-6 px-3 text-center",style:{zIndex:20}},l.a.createElement("img",Object(s.a)({src:x.a,alt:"",className:"inline-block w-32"},"alt","Whipcost Car Loan Calculator")),l.a.createElement("h1",{className:"md:text-5xl mt-8 text-4xl font-bold text-white"},"WHIPCOST"),l.a.createElement("h4",{className:"text-white text-2xl font-bold"},"Car Loan Calculator"))),l.a.createElement(O,null),l.a.createElement("section",{id:"about"},l.a.createElement("div",{id:"about-content",className:"mt-16 container mx-auto text-center text-white max-w-2xl px-6"},l.a.createElement("h1",{className:"text-3xl font-bold text-white"},"Buying a car is stressful."),l.a.createElement("p",{className:"mt-4 text-lg"},"Most people dread the idea of visiting a dealership.  Dealerships use predatory tactics in order to maximize their profit, and minimize your savings.  A salesman can either use your monthly budget to increase their margins by padding out your loan duration.  Knowing your total expected costs in addition to your monthly payment (with taxes included) before walking into the dealerships gives you a fighting chance."))),l.a.createElement("footer",{className:"flex flex-col justify-center items-center bg-gray-800 pt-16 pb-16 mt-16 text-white"},l.a.createElement("img",{src:x.a,style:{width:"70px"},alt:""}),l.a.createElement("div",{className:"mt-6 text-center"},"Helping you budget your next car purchase.",l.a.createElement("br",null),l.a.createElement("em",{className:"mt-2 font-bold"},"Don't get surprised at the dealership.")),l.a.createElement("div",{id:"copyright",className:"text-lg mt-6"},"\xa9 Whipcost, 2020")))},M=i.a.header(F(),u.a),B=i.a.div(C());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/cent.a69469ad.svg"}},[[16,1,2]]]);
//# sourceMappingURL=main.abb4012b.chunk.js.map