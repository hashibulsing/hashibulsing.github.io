(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{970:function(t,e,n){"use strict";n.r(e);var o={layout:"experience-app",data:function(){return{number:null,amount:null,previousMessage:"মার্চেন্টের নাম্বার দিন অথবা কিউআর কোড স্ক্যান করুন",nextMessage:{url:"/experience/mobile-app/merchant-pay/merchant-pay-three",message:"পিন দিয়ে নেক্সট চাপুন"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number,amount:this.amount}}),this.$store.commit("setMessage",t.message)}},created:function(){this.number=this.$route.query.number,this.number||(this.number="01XXXXXXXXX")}},r=n(13),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("button",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("পেমেন্ট")])]),t._v(" "),n("div",{staticClass:"playground p-25"},[n("div",{staticClass:"selected-number"},[n("div",{staticClass:"contact"},[n("span",{staticClass:"name"},[t._v("ABC Footwaer")]),t._v(" "),n("span",{staticClass:"number"},[t._v(t._s(t.number))])])]),t._v(" "),n("form",{staticClass:"form"},[n("div",{staticClass:"custom-form-group input-amount"},[n("div",{staticClass:"icon"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"custom-form-control",attrs:{type:"number",id:"phoneNumber",placeholder:"amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),n("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("পরিমাণ")])])]),t._v(" "),n("div",{staticClass:"text-center font-bold usable-balance"},[t._v("\n                ব্যবহারযোগ্য ব্যালেন্স: XXXX.XX টাকা\n            ")]),t._v(" "),n("div",{staticClass:"mt-50"},[n("a",{staticClass:"btn",on:{click:function(e){return t.nextStep(t.nextMessage)}}},[t._v("পরবর্তী")])])])])}),[],!1,null,"9473df1c",null);e.default=component.exports}}]);