(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{983:function(t,e,n){"use strict";n.r(e);var r={layout:"experience-ussd",data:function(){return{inputValue:""}},methods:{cancelHandler:function(){this.$router.push("/experience/ussd"),this.$store.commit("setMessage","ইউএসএসডি হোম পেজ")}}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ussd-main-frame"},[n("div",{staticClass:"ussd-playground"},[n("div",{staticClass:"ussd-card"},[t._m(0),t._v(" "),n("form",{staticClass:"form",attrs:{action:""},on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",name:"inputValue",id:"",maxlength:"11"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),n("button",{staticClass:"reset",on:{click:function(e){return t.cancelHandler()}}},[t._v("CANCEL")]),t._v(" "),n("button",{staticClass:"submit",on:{click:function(e){return t.cancelHandler()}}},[t._v("SEND")])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title"},[t._v("\n                Bill Pay request of Tk 10.00 to 1002 is successful. "),n("br"),t._v("\n                TrlxID: 711DDCTK "),n("br"),t._v("\n                Fee & VAT:  Tk 5.00 "),n("br"),t._v("\n                Balance: Tk 1.72 "),n("br"),t._v("\n                0. Main Menu\n            ")])}],!1,null,"2989e214",null);e.default=component.exports}}]);