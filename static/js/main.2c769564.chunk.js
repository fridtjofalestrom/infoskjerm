(this.webpackJsonpinfoskjerm=this.webpackJsonpinfoskjerm||[]).push([[0],{26:function(e,t,n){e.exports=n(69)},31:function(e,t,n){},32:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=(n(31),n(32),n(33),n(5)),l=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1").then((function(e){return e.json()})).then((function(e){return o(e.data.children[0].data)})).catch((function(e){return console.error(e)}))}),[]),n?r.a.createElement("div",{className:"reddit"},r.a.createElement("p",null,n.title),r.a.createElement("p",null,n.selftext)):r.a.createElement(r.a.Fragment,null)},s=n(25),u=n.n(s)()({clientName:"Alestrom-infoskjermkurs"}),m=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){u.getBikeRentalStationsByPosition({latitude:59.9289553,longitude:10.7586829},230).then((function(e){return o(e)}))}),[]),r.a.createElement("div",{className:"BikeStations"},r.a.createElement("h3",null,"Bysykkel"),n.map((function(e){return r.a.createElement(f,{key:e.id,station:e})})))},f=function(e){var t=e.station;return r.a.createElement("div",null,t.name," - ",t.bikesAvailable," : ",t.spacesAvailable)};var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Infoskjerm"),r.a.createElement(l,null),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.2c769564.chunk.js.map