(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{907:function(t,e,n){"use strict";n.r(e);var l={layout:"experience-ussd",data:function(){return{inputValue:""}},methods:{submitHandler:function(){this.$router.push("/experience/ussd/ussd-forget-pin/level-five"),this.$store.commit("setMessage","লেনদেনের পরিমাণ লিখুন")},cancelHandler:function(){this.$router.push("/experience/ussd"),this.$store.commit("setMessage","ইউএসএসডি হোম পেজ")}}},r=n(12),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ussd-main-frame"},[n("div",{staticClass:"ussd-playground"},[n("div",{staticClass:"ussd-card"},[n("p",{staticClass:"title"},[t._v("Please select a service from your last 10 transaction:")]),t._v(" "),t._m(0),t._v(" "),n("form",{staticClass:"form",attrs:{action:""},on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",name:"inputValue",id:"",maxlength:"1"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),n("button",{staticClass:"reset",on:{click:function(e){return t.cancelHandler()}}},[t._v("CANCEL")]),t._v(" "),n("button",{staticClass:"submit",on:{click:function(e){return t.submitHandler()}}},[t._v("SEND")])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{attrs:{role:"list"}},[n("li",[t._v("1. Send Money")]),t._v(" "),n("li",[t._v("2. Cash Out")]),t._v(" "),n("li",[t._v("3. Mobile Recharge")]),t._v(" "),n("li",[t._v("4. Payment")]),t._v(" "),n("li",[t._v("5. Bill Pay")])])}],!1,null,"34f5a398",null);e.default=component.exports}}]);