(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{973:function(t,e,n){"use strict";n.r(e);var r={layout:"experience-app",data:function(){return{number:null,amount:null,previousMessage:"মোবাইল নাম্বার টাইপ করুন",nextMessage:{url:"/experience/mobile-app/mobile-recharge/SetPinStepFour",message:"রিচার্জের টাইপ সিলেক্ট করে পিন দিয়ে নেক্সট চাপুন"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number,amount:this.amount}}),this.$store.commit("setMessage",t.message)}},created:function(){this.number=this.$route.query.number,this.number||(this.number="01XXXXXXXXX")}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("button",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("মোবাইল রিচার্জ")])]),t._v(" "),n("div",{staticClass:"playground p-25"},[n("div",{staticClass:"selected-number"},[n("nuxt-link",{staticClass:"contact operator gp",attrs:{to:"/experience/mobile-app/mobile-recharge/mobile-recharge-four"}},[n("span",{staticClass:"name"},[t._v("Jahanara Confectionaries")]),t._v(" "),n("span",{staticClass:"number"},[t._v(t._s(t.number))])])],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"tabcontent",attrs:{id:"amount"}},[n("form",{staticClass:"form"},[n("div",{staticClass:"custom-form-group input-amount"},[n("div",{staticClass:"icon"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"custom-form-control",attrs:{type:"number",id:"phoneNumber",placeholder:"number"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),n("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("পরিমাণ")])]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"text-center font-bold usable-balance"},[t._v("\n                    ব্যবহারযোগ্য ব্যালেন্স: XXXX.XX টাকা\n                ")]),t._v(" "),n("div",{staticClass:"mt-50"},[n("a",{staticClass:"btn",on:{click:function(e){return t.nextStep(t.nextMessage)}}},[t._v("পরবর্তী")])])]),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},[n("button",{staticClass:"tablinks active",attrs:{onclick:"tabSwitcher(event, 'amount')",id:"defaultOpen"}},[t._v("পরিমান")]),t._v(" "),n("button",{staticClass:"tablinks",attrs:{onclick:"tabSwitcher(event, 'voice')"}},[t._v("ভয়েস")]),t._v(" "),n("button",{staticClass:"tablinks",attrs:{onclick:"tabSwitcher(event, 'internet')"}},[t._v("ইন্টারনেট")]),t._v(" "),n("button",{staticClass:"tablinks",attrs:{onclick:"tabSwitcher(event, 'bundle')"}},[t._v("বান্ডল")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"amounts"},[n("span",[t._v("50")]),t._v(" "),n("span",[t._v("100")]),t._v(" "),n("span",[t._v("150")]),t._v(" "),n("span",[t._v("200")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center important-info"},[n("h4",[t._v("গুরুত্বপূর্ণ তথ্য")])])}],!1,null,"1cc44d0a",null);e.default=component.exports}}]);