(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{846:function(e,t,n){"use strict";n.r(t);var l={layout:"experience-ussd",data:function(){return{inputValue:""}},methods:{submitHandler:function(){var e=this.inputValue;if("*"==e&&(e=11),11===parseInt(e))this.$router.push("/experience/ussd/ussd-bill-pay/level-one-extra"),this.$store.commit("setMessage","একাউন্ট অপশন সিলেক্ট করুন");else this.$router.push("/experience/ussd/ussd-bill-pay/level-two"),this.$store.commit("setMessage","বিলার একাউন্ট সিলেক্ট করুন")},cancelHandler:function(){this.$router.push("/experience/ussd"),this.$store.commit("setMessage","ইউএসএসডি হোম পেজ")}}},r=n(12),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ussd-main-frame"},[n("div",{staticClass:"ussd-playground"},[n("div",{staticClass:"ussd-card"},[e._m(0),e._v(" "),n("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){e.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"text",name:"inputValue",id:"",maxlength:"2"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),e._v(" "),n("button",{staticClass:"reset",on:{click:function(t){return e.cancelHandler()}}},[e._v("CANCEL")]),e._v(" "),n("button",{staticClass:"submit",on:{click:function(t){return e.submitHandler()}}},[e._v("SEND")])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{attrs:{role:"list"}},[n("li",[e._v("1. Electricity")]),e._v(" "),n("li",[e._v("2. Gas")]),e._v(" "),n("li",[e._v("3. Internet")]),e._v(" "),n("li",[e._v("4. Water")]),e._v(" "),n("li",[e._v("5. TV & Telephone 6. Education")]),e._v(" "),n("li",[e._v("7. Bank & FI")]),e._v(" "),n("li",[e._v("8. Insurance")]),e._v(" "),n("li",[e._v("9. COVID19 Sample Collection Fee")]),e._v(" "),n("li",[e._v("10. ekpay")]),e._v(" "),n("li",[e._v("Next Page *")])])}],!1,null,"02aee8af",null);t.default=component.exports}}]);