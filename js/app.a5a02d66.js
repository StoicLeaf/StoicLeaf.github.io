(function(e){function t(t){for(var n,l,s=t[0],i=t[1],u=t[2],d=0,h=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&h.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},"1b09":function(e,t,r){"use strict";r("3f5f")},"3f5f":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("HexGen")],1)},a=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tophat"},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"8",offset:"2"}},[r("h2",[e._v("Tomb of Annihilation HexCrawl Generator")]),r("br"),r("h4",[e._v("Options:")]),r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"1"}},[r("v-text-field",{attrs:{type:"text",label:"RNG Seed"},model:{value:e.seed,callback:function(t){e.seed=t},expression:"seed"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-combobox",{attrs:{label:"Encounter on .. (ToA p.193)",type:"text",items:e.encounterThresholdOptions,attach:""},model:{value:e.encounterThreshold,callback:function(t){e.encounterThreshold=t},expression:"encounterThreshold"}})],1),r("v-col",{attrs:{cols:"1"}},[r("v-text-field",{attrs:{label:"# of Days"},model:{value:e.numberOfDays,callback:function(t){e.numberOfDays=t},expression:"numberOfDays"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-btn",{on:{click:e.generateHexCrawl}},[e._v("generate")])],1)],1)],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"8",offset:"2"}},[r("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",[e._v(" Day ")]),r("th",{attrs:{colspan:"3"}},[e._v(" Precipitation ")]),r("th",{attrs:{colspan:"2"}},[e._v(" Hexes Travelled ")]),r("th",{attrs:{colspan:"3"}},[e._v(" Encounters ")])]),r("tr",[r("th"),r("th",[e._v("early")]),r("th",[e._v("during")]),r("th",[e._v("late")]),r("th",[e._v("slow")]),r("th",[e._v("fast")]),r("th",[e._v("early")]),r("th",[e._v("during")]),r("th",[e._v("late")])])]),r("tbody",e._l(e.hexCrawlLedger,(function(t,n){return r("tr",{key:n},[r("td",[e._v(e._s(t.dayNumber))]),r("td",[e._v(e._s(t.weatherEarly))]),r("td",[e._v(e._s(t.weatherDuring))]),r("td",[e._v(e._s(t.weatherLate))]),r("td",[e._v(e._s(t.slowSpeed))]),r("td",[e._v(e._s(t.fastSpeed))]),r("td",[e._v(e._s(t.encounterEarly))]),r("td",[e._v(e._s(t.encounterDuring))]),r("td",[e._v(e._s(t.encounterLate))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)},s=[],i=r("6125"),u=r.n(i),c={name:"",data:function(){return{randomGenerator:null,encounterThresholdOptions:[{text:"on 16+",value:"16",disabled:!1},{text:"on 18+",value:"18",disabled:!1}],seed:"666",encounterThreshold:null,numberOfDays:100,hexCrawlLedger:null}},created:function(){this.encounterThreshold=this.encounterThresholdOptions[0],this.generateHexCrawl()},methods:{generateHexCrawl:function(){console.log("yo"),this.randomGenerator=u()(this.seed);for(var e=[],t=1;t<=this.numberOfDays;t++){var r={dayNumber:t,weatherEarly:this.determineWeather(),weatherDuring:this.determineWeather(),weatherLate:this.determineWeather(),slowSpeed:this.getSlowSpeed(),fastSpeed:this.getFastSpeed(),encounterEarly:this.getEncounter(),encounterDuring:this.getEncounter(),encounterLate:this.getEncounter()};e.push(r)}this.hexCrawlLedger=e},determineWeather:function(){var e=this.rollDice(20),t=!1;e>=18&&2===this.rollDice(4)&&(t=!0);var r="";return e<13?r+="No rainfall":e<18?r+="Light rain":e<21&&(r=t?"Tropical storm":"Heavy rain"),r},getSlowSpeed:function(){var e=this.rollDice(4);return e<3?0:1},getFastSpeed:function(){var e=this.rollDice(4);return e>2?2:1},getEncounter:function(){var e=this.rollDice(20),t=parseInt(this.encounterThreshold.value);return e>=t?this.rollDice(100):"-"},rollDice:function(e){return Math.floor(this.randomGenerator()*e+1)}}},d=c,h=(r("1b09"),r("2877")),f=r("6544"),p=r.n(f),v=r("8336"),b=r("62ad"),_=r("2b5d"),y=r("a523"),m=r("0fd9"),g=r("1f4f"),w=r("8654"),x=Object(h["a"])(d,l,s,!1,null,"99ca6472",null),O=x.exports;p()(x,{VBtn:v["a"],VCol:b["a"],VCombobox:_["a"],VContainer:y["a"],VRow:m["a"],VSimpleTable:g["a"],VTextField:w["a"]});var D={name:"App",components:{HexGen:O}},S=D,T=r("7496"),E=Object(h["a"])(S,o,a,!1,null,null,null),j=E.exports;p()(E,{VApp:T["a"]});var C=r("f309");n["a"].use(C["a"]);var k=new C["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:k,render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=app.a5a02d66.js.map