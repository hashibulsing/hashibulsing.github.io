(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{972:function(t,e,n){"use strict";n.r(e);var r={layout:"experience-app",data:function(){return{number:null,amount:null,previousMessage:"ট্যাপ করে ধরে রেখে কনফার্ম করুন",nextMessage:{url:"/experience/mobile-app",message:"অ্যাপ হোম পেজ"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number,amount:this.amount}}),this.$store.commit("setMessage",t.message)}},created:function(){this.amount=this.$route.query.amount,this.number=this.$route.query.number,this.number||(this.number="01XXXXXXXXX")}},c=n(13),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("button",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("মোবাইল রিচার্জ")])]),t._v(" "),n("div",{staticClass:"playground p-25"},[n("div",{staticClass:"success-message"},[n("div",{staticClass:"icon"}),t._v(" "),n("h3",{staticClass:"message"},[t._v("মোবাইল রিচার্জ সফল হয়েছে")]),t._v(" "),n("h3",{staticClass:"selected-number"},[t._v(t._s(t.number))])]),t._v(" "),n("div",{staticClass:"mt-50"},[n("a",{staticClass:"btn red",on:{click:function(e){return t.nextStep(t.nextMessage)}}},[t._v("হোমে ফিরে যাই")])])])])}),[],!1,null,"6d7ef687",null);e.default=component.exports}}]);