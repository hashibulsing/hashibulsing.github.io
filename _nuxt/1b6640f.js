(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1025:function(t,e,o){"use strict";o.r(e);var n={layout:"experience-app",data:function(){return{number:null,amount:null,email:null,previousMessage:"মোবাইল নাম্বার সিলেক্ট করুন",setAmount:{url:"/experience/mobile-app/add-money/card/SmsPortal",message:"এস এসএল পোর্টাল"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number,amount:this.amount,email:this.email}}),this.$store.commit("setMessage",t.message)}},created:function(){this.email=this.$route.query.email,this.amount=this.$route.query.amount,this.number=this.$route.query.number,this.number||(this.number="01XXXXXXXXX")}},r=o(13),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-frame"},[o("div",{staticClass:"page-title"},[o("a",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),o("h4",[t._v("কার্ড টু নগদ ")])]),t._v(" "),o("div",{staticClass:"playground p-25"},[o("div",{staticClass:"selected-number"},[o("div",{staticClass:"contact add-money"},[o("span",{staticClass:"name"},[t._v("মোবাইল  নাম্বার ")]),t._v(" "),o("span",{staticClass:"number"},[t._v(t._s(t.number))])])]),t._v(" "),o("form",{staticClass:"form"},[o("div",{staticClass:"custom-form-group input-amount"},[o("div",{staticClass:"icon"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"custom-form-control",attrs:{type:"number",id:"phoneNumber",placeholder:"number"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),o("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("পরিমাণ")])]),t._v(" "),o("div",{staticClass:"custom-form-group mail"},[o("div",{staticClass:"icon"}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"custom-form-control",attrs:{type:"email",id:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),o("label",{staticClass:"custom-form-control-label",attrs:{for:"email"}},[t._v("সেট ইমেইল আইডি")])])]),t._v(" "),o("div",{staticClass:"mt-50"},[o("a",{staticClass:"btn",on:{click:function(e){return t.nextStep(t.setAmount)}}},[t._v("পরবর্তী\n              ")])])])])}),[],!1,null,"45b1b7aa",null);e.default=component.exports}}]);