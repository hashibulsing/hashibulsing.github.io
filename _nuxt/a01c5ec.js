(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{978:function(t,e,n){"use strict";n.r(e);var r={layout:"experience-app",data:function(){return{number:null,amount:null,previousMessage:"টাকার পরিমাণ টাইপ করে নেক্সট চাপুন",nextMessage:{url:"/experience/mobile-app/send-money/sendmoney-four",message:"ট্যাপ করে ধরে রেখে কনফার্ম করুন"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number,amount:this.amount}}),this.$store.commit("setMessage",t.message)}},created:function(){this.number=this.$route.query.number,this.amount=this.$route.query.amount,this.number||(this.number="01XXXXXXXXX")}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("button",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("সেন্ড মানি")])]),t._v(" "),n("div",{staticClass:"playground p-25"},[n("div",{staticClass:"selected-number"},[n("div",{staticClass:"contact"},[n("span",{staticClass:"name"},[t._v("Monim Kaiser")]),t._v(" "),n("span",{staticClass:"number"},[t._v(t._s(t.number))])])]),t._v(" "),n("div",{staticClass:"amounts"},[n("ul",{attrs:{role:"list"}},[n("li",[t.amount?n("span",{staticClass:"amount"},[t._v(t._s(t.amount)+".00 টাকা")]):n("span",{staticClass:"amount"},[t._v("XX.XX টাকা")]),t._v(" "),n("span",{staticClass:"amount-type"},[t._v("পরিমাণ")])]),t._v(" "),t._m(0)])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mt-50"},[n("a",{staticClass:"btn",on:{click:function(e){return t.nextStep(t.nextMessage)}}},[t._v("পরবর্তী")])]),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"amount"},[t._v("XX.XX টাকা")]),t._v(" "),n("span",{staticClass:"amount-type"},[t._v("খরচ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form"},[n("div",{staticClass:"custom-form-group reference"},[n("div",{staticClass:"icon"}),t._v(" "),n("input",{staticClass:"custom-form-control",attrs:{type:"text",id:"phoneNumber",placeholder:"reference"}}),t._v(" "),n("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("রেফারেন্স")])]),t._v(" "),n("div",{staticClass:"custom-form-group pin"},[n("div",{staticClass:"icon"}),t._v(" "),n("input",{staticClass:"custom-form-control",attrs:{type:"password",id:"phoneNumber",placeholder:"pin",value:"****",readonly:""}}),t._v(" "),n("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("পিন")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-50"},[n("div",{staticClass:"disclaimer font-bold text-center"},[t._v("আপনার পিন শেয়ার করবেন না")])])}],!1,null,"62822e3a",null);e.default=component.exports}}]);