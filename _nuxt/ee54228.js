(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{946:function(t,e,n){"use strict";n.r(e);var c={layout:"experience-app",data:function(){return{type:null,bankName:null}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage","ব্যাংক টু নগদ সিলেক্ট করুন")},nextStep:function(){this.$router.push("/experience/mobile-app/add-money/bank/e-banking"),this.$store.commit("setMessage","ইব্যাংকিং এ যান")}},created:function(){this.type=this.$route.query.type,this.bankName=this.$route.query.bankName,this.bankName||(this.bankName="ABC Bank")}},o=n(13),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("a",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("ব্যাংক বাছাই করুন")])]),t._v(" "),n("div",{staticClass:"playground"},[n("form",{staticClass:"form p-25"},[n("div",{staticClass:"custom-form-group number-input bank-name"},[n("div",{staticClass:"icon"}),t._v(" "),n("input",{staticClass:"custom-form-control",attrs:{type:"text",id:"phoneNumber",placeholder:"name"}}),t._v(" "),n("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("ব্যাংকের নাম")]),t._v(" "),n("p",{staticClass:"info"},[t._v("ব্যাংকের নাম লিখুন")]),t._v(" "),n("a",{staticClass:"number-submit",on:{click:function(e){return t.nextStep()}}})])]),t._v(" "),n("div",{staticClass:"contacts"},[n("h3",{staticClass:"title"},[t._v("ব্যাংকের তালিকা")]),t._v(" "),n("ul",{attrs:{role:"list"}},[n("li",[n("a",{on:{click:function(e){return t.nextStep()}}},[n("span",{staticClass:"name"},[t._v("ABC Bank")])])])])])])])}),[],!1,null,"7cc17b44",null);e.default=component.exports}}]);