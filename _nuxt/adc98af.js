(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{954:function(t,e,n){"use strict";n.r(e);var r={layout:"experience-app",data:function(){return{number:null,previousMessage:"অ্যাপ হোম পেজ",nextMessage:{url:"/experience/mobile-app/cash-out/cash-out-two",message:"ক্যাশ আউটের পরিমাণ টাইপ করুন"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number}}),this.$store.commit("setMessage",t.message)}}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("button",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("ক্যাশ আউট")])]),t._v(" "),n("div",{staticClass:"playground"},[n("form",{staticClass:"form p-25"},[n("div",{staticClass:"custom-form-group number-input"},[n("div",{staticClass:"icon"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"custom-form-control",attrs:{type:"number",id:"phoneNumber",placeholder:"number"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}}),t._v(" "),n("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("প্রাপক")]),t._v(" "),n("p",{staticClass:"info"},[t._v("১১ ডিজিটের মোবাইল নাম্বার লিখুন")]),t._v(" "),n("input",{staticClass:"number-submit",attrs:{type:"submit",value:""}}),t._v(" "),n("nuxt-link",{staticClass:"number-submit",attrs:{to:{path:"/experience/mobile-app/cash-out/cash-out-two",query:{number:t.number}}}})],1)]),t._v(" "),n("div",{staticClass:"contacts"},[n("h3",{staticClass:"title"},[t._v("সব কনট্যাক্টস")]),t._v(" "),n("ul",{attrs:{role:"list"}},[n("li",[n("a",{on:{click:function(e){return t.nextStep(t.nextMessage)}}},[n("span",{staticClass:"name"},[t._v("Jahanara Confectionaries")]),t._v(" "),n("span",{staticClass:"number"},[t._v("01XXXXXXXXX")])])])])])])])}),[],!1,null,"3a0a1d85",null);e.default=component.exports}}]);