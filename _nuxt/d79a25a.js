(window.webpackJsonp=window.webpackJsonp||[]).push([[69,29],{509:function(t,e,n){var content=n(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("4ae29655",content,!0,{sourceMap:!1})},520:function(t,e,n){"use strict";n(509)},521:function(t,e,n){var o=n(33)(!1);o.push([t.i,".locationMap[data-v-6d18d9ee]{border-radius:16px;overflow:hidden;margin:10px}@media screen and (min-width:768px){.locationMap[data-v-6d18d9ee]{border-radius:16px;overflow:hidden;margin:16px}}",""]),t.exports=o},522:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{currentLocation:{},circleOptions:{},locations:[{lat:23.793811,lng:90.40525},{lat:45.815,lng:"15.9819"},{lat:"45.12",lng:"16.21"}],pins:{selected:"data:image/png;base64,iVBORw0KGgo...",notSelected:"data:image/png;base64,iVBORw0KGgo..."},clusterStyle:[{url:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",width:56,height:56,textColor:"#fff"}]}}},d=(n(520),n(13)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"locationMap"},[n("GMap",{ref:"gMap",attrs:{language:"en",cluster:{options:{styles:t.clusterStyle}},center:{lat:t.locations[0].lat,lng:t.locations[0].lng},options:{fullscreenControl:!0},zoom:16}},[t._l(t.locations,(function(e){return n("GMapMarker",{key:e.id,attrs:{position:{lat:e.lat,lng:e.lng},options:{icon:e===t.currentLocation?t.pins.selected:t.pins.notSelected}},on:{click:function(n){t.currentLocation=e}}},[n("GMapInfoWindow",{attrs:{options:{maxWidth:200}}})],1)})),t._v(" "),n("GMapCircle",{attrs:{options:t.circleOptions}})],2)],1)}),[],!1,null,"6d18d9ee",null);e.default=component.exports},564:function(t,e,n){var content=n(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("c46e672a",content,!0,{sourceMap:!1})},635:function(t,e,n){"use strict";n(564)},636:function(t,e,n){var o=n(33)(!1);o.push([t.i,".uddoktaCard[data-v-af0800a0]{position:relative;z-index:1}.uddoktaCard-inner[data-v-af0800a0]{background:linear-gradient(161.04deg,#fff9f4 -58.16%,rgba(255,250,245,.26) 76.42%);border:1px solid hsla(0,0%,100%,.2);box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(62px);backdrop-filter:blur(62px);border-radius:26px;padding-top:25px;margin:-30px 0 50px}.uddoktaCard-inner_title[data-v-af0800a0]{display:flex;flex-direction:column;justify-content:center;align-items:center}.uddoktaCard-inner_title .section-heading[data-v-af0800a0]{padding-bottom:10px}.uddoktaCard-inner_title .description[data-v-af0800a0]{padding:0 27px;text-align:center;font-weight:400;font-size:14px;line-height:25px;letter-spacing:.75px}.uddoktaCard-inner_title .uddokta-button[data-v-af0800a0]{margin:14px 0 35px}.uddoktaCard-inner_title .uddokta-button .theme-btn[data-v-af0800a0]{padding:7px 30px 6px}@media screen and (min-width:768px){.uddoktaCard-inner_title .description[data-v-af0800a0]{padding:0 82px;font-weight:400;font-size:16px}.uddoktaCard-inner_title .uddokta-button[data-v-af0800a0]{margin:37px}.uddoktaCard-inner_title .uddokta-button .theme-btn[data-v-af0800a0]{padding:16px 27px}}",""]),t.exports=o},661:function(t,e,n){"use strict";n.r(e);var o={components:{LocationMap:n(522).default}},d=(n(635),n(13)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"uddoktaCard"},[n("b-container",[n("div",{staticClass:"uddoktaCard-inner"},[n("div",{staticClass:"uddoktaCard-inner_title"},[n("div",{staticClass:"section-heading"},[n("h2",[t._v("Title Name Here")])]),t._v(" "),n("div",{staticClass:"description"},[n("p",[t._v("\n            Lorem Ipsum is simply dummy text of the printing and typesetting\n            industry. Lorem Ipsum has been the industry's standard dummy text\n            ever since the 1500s,\n          ")])]),t._v(" "),n("div",{staticClass:"uddokta-button"},[n("button",{staticClass:"theme-btn",attrs:{type:"submit"}},[t._v("Uddokta Near Me")])])]),t._v(" "),n("div",{staticClass:"uddoktaCard-inner_location"},[n("LocationMap")],1)])])],1)}),[],!1,null,"af0800a0",null);e.default=component.exports}}]);