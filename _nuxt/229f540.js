(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{980:function(t,e,n){"use strict";n.r(e);var r={layout:"experience-ussd",data:function(){return{inputValue:""}},methods:{submitHandler:function(){this.$router.push("/experience/ussd/ussd-bill-pay/level-six"),this.$store.commit("setMessage","পিন দিন")},cancelHandler:function(){this.$router.push("/experience/ussd"),this.$store.commit("setMessage","ইউএসএসডি হোম পেজ")}}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ussd-main-frame"},[n("div",{staticClass:"ussd-playground"},[n("div",{staticClass:"ussd-card"},[n("p",{staticClass:"title"},[t._v("Enter Reference Number:")]),t._v(" "),n("form",{staticClass:"form",attrs:{action:""},on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",name:"inputValue",id:"",maxlength:"11"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),n("button",{staticClass:"reset",on:{click:function(e){return t.cancelHandler()}}},[t._v("CANCEL")]),t._v(" "),n("button",{staticClass:"submit",on:{click:function(e){return t.submitHandler()}}},[t._v("SEND")])])])])])}),[],!1,null,"000ef9c9",null);e.default=component.exports}}]);