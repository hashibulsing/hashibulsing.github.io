(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{950:function(t,e,n){"use strict";n.r(e);var l={layout:"experience-app",data:function(){return{number:null,previousMessage:"কাস্টমার নাম্বার ও মোবাইল নাম্বার টাইপ দিয়ে নেক্সট চাপুন",nextMessage:{url:"/experience/mobile-app/bill-pay/bill-pay-four",message:"কনফার্মেশন এসএমএস পাবেন"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number}}),this.$store.commit("setMessage",t.message)}},created:function(){this.number=this.$route.query.number,this.number||(this.number="01XXXXXXXXX")}},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("button",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("বিল পে")])]),t._v(" "),n("div",{staticClass:"playground p-25"},[n("div",{staticClass:"selected-number"},[n("div",{staticClass:"contact"},[n("span",{staticClass:"name"},[t._v("Monim Kaiser")]),t._v(" "),n("span",{staticClass:"number"},[t._v(t._s(t.number))])])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"mt-50 text-center"},[n("a",{staticClass:"final-submit-btn",on:{click:function(e){return t.nextStep(t.nextMessage)}}}),t._v(" "),n("p",{staticClass:"final-submit-btn-tips"},[t._v("ট্যাপ করে ধরে থাকুন")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"amounts"},[n("ul",{attrs:{role:"list"}},[n("li",[n("span",{staticClass:"amount"},[t._v("XXXX.XX টাকা")]),t._v(" "),n("span",{staticClass:"amount-type"},[t._v("পরিমাণ")])]),t._v(" "),n("li",[n("span",{staticClass:"amount"},[t._v("XX.XX টাকা")]),t._v(" "),n("span",{staticClass:"amount-type"},[t._v("খরচ")])]),t._v(" "),n("li",[n("span",{staticClass:"amount"},[t._v("XXXX.XX টাকা")]),t._v(" "),n("span",{staticClass:"amount-type"},[t._v("মোট")])]),t._v(" "),n("li",[n("span",{staticClass:"amount"},[t._v("XXXX.XX টাকা")]),t._v(" "),n("span",{staticClass:"amount-type"},[t._v("নতুন ব্যালেন্স")])])])])}],!1,null,"312f48c2",null);e.default=component.exports}}]);