(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1005:function(e,t,n){"use strict";n.r(t);var r={layout:"experience-ussd",data:function(){return{inputValue:""}},methods:{cancelHandler:function(){this.$router.push("/experience/ussd"),this.$store.commit("setMessage","ইউএসএসডি হোম পেজ")}}},c=n(13),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ussd-main-frame"},[n("div",{staticClass:"ussd-playground"},[n("div",{staticClass:"ussd-card"},[e._m(0),e._v(" "),n("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){e.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"password",name:"inputValue",id:"",maxlength:"4"},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),e._v(" "),n("button",{staticClass:"reset",on:{click:function(t){return e.cancelHandler()}}},[e._v("CANCEL")]),e._v(" "),n("button",{staticClass:"submit",on:{click:function(t){return e.cancelHandler()}}},[e._v("SEND")])])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[e._v("\n                Mobile Recharge request of Tk 10.00 for 01xxxxxxxxx is successful. "),n("br"),e._v("\n                TrlxID: 711DDCTK "),n("br"),e._v("\n                Fee & VAT:  Tk 0.00 "),n("br"),e._v("\n                Balance: Tk 1.72 "),n("br"),e._v("\n                0. Main Menu\n            ")])}],!1,null,"9045d038",null);t.default=component.exports}}]);