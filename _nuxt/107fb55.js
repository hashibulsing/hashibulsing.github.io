(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1024:function(t,e,n){"use strict";n.r(e);var r={layout:"experience-app",data:function(){return{number:null,previousMessage:"সোর্স সিলেক্ট করুন",selectSource:{url:"/experience/mobile-app/add-money/card/SetAmount",message:"মোবাইল নাম্বার, ট্রান্সফারের পরিমাণ ও ই-মেইল দিয়ে নেক্সট চাপুন"}}},methods:{prevStep:function(){this.$router.go(-1),this.$store.commit("setMessage",this.previousMessage)},nextStep:function(t){this.$router.push({path:t.url,query:{number:this.number}}),this.$store.commit("setMessage",t.message)}},created:function(){this.number=this.$route.query.number,this.number||(this.number="01XXXXXXXXX")}},o=n(13),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-frame"},[n("div",{staticClass:"page-title"},[n("a",{staticClass:"back-btn",on:{click:function(e){return t.prevStep()}}}),t._v(" "),n("h4",[t._v("কার্ড টু নগদ ")])]),t._v(" "),n("div",{staticClass:"playground"},[n("form",{staticClass:"form p-25"},[n("div",{staticClass:"custom-form-group number-input"},[n("div",{staticClass:"icon"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"custom-form-control",attrs:{type:"number",id:"phoneNumber",placeholder:"number"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}}),t._v(" "),n("label",{staticClass:"custom-form-control-label",attrs:{for:"phoneNumber"}},[t._v("প্রাপক")]),t._v(" "),n("p",{staticClass:"info"},[t._v("নাম, ১১ ডিজিটের মোবাইল নাম্বার")]),t._v(" "),n("a",{staticClass:"number-submit",on:{click:function(e){return t.nextStep(t.selectSource)}}})])]),t._v(" "),n("div",{staticClass:"contacts"},[n("h3",{staticClass:"title"},[t._v("নিজের নাম্বার")]),t._v(" "),n("ul",{attrs:{role:"list"}},[n("li",[n("a",{on:{click:function(e){return t.nextStep(t.selectSource)}}},[n("span",{staticClass:"name"},[t._v("Monim Kaiser")]),t._v(" "),n("span",{staticClass:"number"},[t._v("01XXXXXXXXX")])])])])])])])}),[],!1,null,"4f82567e",null);e.default=component.exports}}]);