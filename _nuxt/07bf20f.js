(window.webpackJsonp=window.webpackJsonp||[]).push([[189,23,46,47,52],{1028:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(30),n(503)),l=n(591),d={name:"MyNagadTemplate",layout:"theme-layout",components:{PageIntro:o.default,FeatureTab:l.default},data:function(){return{pageInto:[],termsCondition:Object}},methods:{getMyNagadTemplate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/get-my-nagad-template/".concat(t.$route.params.slug));case 2:n=e.sent,t.pageInto=n.data.data.heading[0],t.termsCondition=n.data.data.details[0];case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.getMyNagadTemplate()}},c=(n(885),n(13)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"myNagadTemplate"},[n("div",{staticClass:"text-center"},[n("PageIntro",{attrs:{pageHeading:t.pageInto}}),t._v(" "),"en"==t.$i18n.locale?n("button",{staticClass:"theme-btn mt-3"},[t._v("\n      Read More\n    ")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("button",{staticClass:"theme-btn mt-3 font-bn"},[t._v("\n      আরও পড়ুন\n    ")]):t._e()],1),t._v(" "),n("FeatureTab"),t._v(" "),n("section",{staticClass:"termsAndCondition"},[n("b-container",["en"==t.$i18n.locale?n("h3",{staticClass:"title"},[t._v("\n        "+t._s(t.termsCondition.title_english)+":\n      ")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("h3",{staticClass:"title font-bn"},[t._v("\n        "+t._s(t.termsCondition.title_bangla)+":\n      ")]):t._e(),t._v(" "),n("div",{staticClass:"description"},["en"==t.$i18n.locale?n("p",{domProps:{innerHTML:t._s(t.termsCondition.description_english)}}):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("p",{staticClass:"font-bn",domProps:{innerHTML:t._s(t.termsCondition.description_bangla)}}):t._e()])])],1)],1)}),[],!1,null,"0209ee32",null);e.default=component.exports;installComponents(component,{PageIntro:n(503).default})},501:function(t,e,n){var content=n(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("e6b3a1ba",content,!0,{sourceMap:!1})},503:function(t,e,n){"use strict";n.r(e);var r={props:{pageHeading:{type:null,required:!0}}},o=(n(507),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-intro "},[t.pageHeading?n("b-container",[n("div",{staticClass:"section-heading"},["en"==t.$i18n.locale?n("h2",[t._v(t._s(t.pageHeading.title_english))]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("h2",{staticClass:"font-bn"},[t._v(t._s(t.pageHeading.title_bangla))]):t._e()]),t._v(" "),n("div",{staticClass:"intro-text text-center"},["en"==t.$i18n.locale?n("p",[t._v(t._s(t.pageHeading.short_description_english))]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("p",{staticClass:"font-bn"},[t._v(t._s(t.pageHeading.short_description_bangla))]):t._e()])]):t._e()],1)}),[],!1,null,"0c580544",null);e.default=component.exports},507:function(t,e,n){"use strict";n(501)},508:function(t,e,n){var r=n(33)(!1);r.push([t.i,".page-intro[data-v-0c580544]{padding-top:25px}.page-intro .section-heading[data-v-0c580544]{padding-bottom:10px}.page-intro .intro-text p[data-v-0c580544]{font-size:14px;font-weight:400;line-height:25px;letter-spacing:.75px;color:#262338}@media screen and (min-width:768px){.page-intro[data-v-0c580544]{padding-top:30px}.page-intro .intro-text p[data-v-0c580544]{font-size:16px;line-height:28px}}",""]),t.exports=r},512:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("998aa59c",content,!0,{sourceMap:!1})},514:function(t,e,n){var content=n(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("d0059044",content,!0,{sourceMap:!1})},515:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK1SURBVHgB7ZtBchJBFIb/16Mhy0l0GasmEaI72VhSbsQTiCdIbiCcIOQG4QQmN8AbkI1hF9ylArFm4dYKrhIR5tndCwXESnqm0kOl3reBaYbpqa+nu2fxfkAAISOl6GWZVPAOxGUGhfAEgYe6v0/9i+4hMpJaQhRVw0Jw9VHfSA35EjOwn0VGgBQ8jyqRUuMTEFWQP6EeydqjtQ18v/x2jBSkkrC+vnGqn6EIywSh+njtyQ8togtHnKfD9lZlT/+rOd3GTD29JrSYEMMTirGrP3ZmW2k4mhQ247gzhAMP4M7uTLfg9vnX7nv4p6OnZTMJ+BR/FmQOV9R1XX9pOlwHyuXkYlSpzk4DGv6cUAM5cRZ3YzC1ptv00/gGjjhJ4CCZ2wKT49jcSI6oBIfTx3p+R3DESYKCmpGgt8dL5MzZv4MQwREnCfcVkQCRYBEJEAkWkQCRYBEJEAkWkQCRYBEJEAkWkQCRYBEJEAkWkQCRYBEJEAkWkQCRYBEJEAkWkQCRYBEJEAkWkQCRYBEJEAkWkQCRYBEJEAkWkQCRYElT1puJZ1uvPiS0OB5gMgyjCTV8F4h6lWDKgplw8P+qcsLDAKZg9C084nU6UHBztWmastyseJXwa3LdBt8QByAcwTNep0Mc90wOYbNYrFQX/T4e61NyKBj3vjAaBoNuB0uEbJG4BxJKpdfluaYYjrhJUKo3fUigmokGIk+SZEYC37WEfv+zlsBTISsOC+pqDzlhoonEmOlfHzvHAt0XRpM5or8dM1F9+2klTCY4GsNfGm5FYSchrmMulTuaiwPdBudIYBSVwxW1uny5SANh/3zQbcIR54XR7PUq0a+17G/UbwODWmkEGFLtDiZ8ZUWA2sgdHhJRo39xUkdKMqfmzdufTasyv4DH1LxeAXsg+jIarx64JmKFBfwGq7i/oHea0VsAAAAASUVORK5CYII="},516:function(t,e,n){t.exports=n.p+"img/issd.31e8f67.png"},525:function(t,e,n){"use strict";n(512)},526:function(t,e,n){var r=n(33)(!1);r.push([t.i,".templateFeatureCard[data-v-53270b62]{position:relative;height:250px;background:#fff;box-shadow:0 15px 30px rgba(0,0,0,.15);border-radius:30px;overflow:hidden;margin-bottom:30px}.templateFeatureCard .image[data-v-53270b62]{padding:50%;background:#000;background-size:auto 100%;background-position:50%}.templateFeatureCard .text[data-v-53270b62]{position:absolute;left:0;right:0;bottom:0;padding:13px 20px;background:rgba(242,79,65,.9);color:#fcfcfc}.templateFeatureCard .text .title[data-v-53270b62]{font-size:18px;line-height:32px;font-weight:700}.templateFeatureCard .text .description[data-v-53270b62]{font-size:12px;line-height:19px}@media screen and (min-width:768px){.templateFeatureCard[data-v-53270b62]{min-height:350px}.templateFeatureCard .text[data-v-53270b62]{padding:13px 20px}.templateFeatureCard .text .title[data-v-53270b62]{font-size:35px;line-height:48px}.templateFeatureCard .text .description[data-v-53270b62]{font-size:20px;line-height:32px}}",""]),t.exports=r},532:function(t,e,n){"use strict";n.r(e);var r={props:{singleTemplateFeature:{type:Object,required:!0}}},o=(n(525),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"templateFeatureCard"},[n("div",{staticClass:"image",style:{backgroundImage:"url("+t.singleTemplateFeature.file_url_web+")"}}),t._v(" "),n("div",{staticClass:"text"},["en"==t.$i18n.locale?n("h3",{staticClass:"title"},[t._v(t._s(t.singleTemplateFeature.heading_english))]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("h3",{staticClass:"title font-bn"},[t._v(t._s(t.singleTemplateFeature.heading_bangla))]):t._e(),t._v(" "),"en"==t.$i18n.locale?n("p",{staticClass:"description"},[t._v(t._s(t.singleTemplateFeature.subtitle_english))]):t._e(),t._v(" "),"bn"==t.$i18n.locale?n("p",{staticClass:"description font-bn"},[t._v(t._s(t.singleTemplateFeature.subtitle_bangla))]):t._e()])])}),[],!1,null,"53270b62",null);e.default=component.exports},535:function(t,e,n){"use strict";n(514)},536:function(t,e,n){var r=n(33)(!1);r.push([t.i,".featureTabContent[data-v-1dd9a99a]{padding:50px 0 0}@media screen and (min-width:768px){.featureTabContent[data-v-1dd9a99a]{padding:70px 0 40px}}",""]),t.exports=r},538:function(t,e,n){"use strict";n.r(e);var r={components:{TemplateFeatureCard:n(532).default},props:{templateFeature:{type:"",required:!0}}},o=(n(535),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"featureTabContent"},[t.templateFeature?n("b-row",t._l(t.templateFeature,(function(t){return n("b-col",{key:t.id,attrs:{md:"4"}},[n("TemplateFeatureCard",{attrs:{singleTemplateFeature:t}})],1)})),1):t._e()],1)}),[],!1,null,"1dd9a99a",null);e.default=component.exports},545:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("4ed6f9ca",content,!0,{sourceMap:!1})},582:function(t,e,n){"use strict";n(545)},583:function(t,e,n){var r=n(33)(!1);r.push([t.i,".featureTab[data-v-6510c9fb]{padding-top:50px;width:90%;margin:0 auto}",""]),t.exports=r},591:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(30),n(14),{components:{FeatureTabContent:n(538).default},data:function(){return{templateFeature:Array,type:"ussd"}},methods:{getMyNagadTemplate:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/get-my-nagad-feature-slider/".concat(t.$route.query.mn,"/").concat(t.type));case 2:n=e.sent,t.templateFeature=n.data.data;case 4:case"end":return e.stop()}}),e)})))()},loadData:function(t){this.type=t,this.getMyNagadTemplate()}},created:function(){this.getMyNagadTemplate()}}),l=(n(582),n(13)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"featureTab"},[r("b-tabs",[r("b-tab",{on:{click:function(e){return t.loadData("app")}},scopedSlots:t._u([{key:"title",fn:function(){return[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"icon",attrs:{"data-src":n(515),alt:""}}),t._v(" App\n                ")]},proxy:!0}])},[t._v(" "),r("FeatureTabContent",{attrs:{templateFeature:t.templateFeature}})],1),t._v(" "),r("b-tab",{attrs:{active:""},on:{click:function(e){return t.loadData("ussd")}},scopedSlots:t._u([{key:"title",fn:function(){return[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"icon",attrs:{"data-src":n(516),alt:""}}),t._v(" *167#\n                ")]},proxy:!0}])},[t._v(" "),r("FeatureTabContent",{attrs:{templateFeature:t.templateFeature}})],1)],1)],1)}),[],!1,null,"6510c9fb",null);e.default=component.exports},782:function(t,e,n){var content=n(886);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("01084838",content,!0,{sourceMap:!1})},885:function(t,e,n){"use strict";n(782)},886:function(t,e,n){var r=n(33)(!1);r.push([t.i,".myNagadTemplate[data-v-0209ee32]{padding:70px 0 0;overflow:hidden}.myNagadTemplate .termsAndCondition[data-v-0209ee32]{color:#262338;margin-bottom:50px}.myNagadTemplate .termsAndCondition .title[data-v-0209ee32]{font-size:15px;line-height:20px;font-weight:700;margin-bottom:15px}.myNagadTemplate .termsAndCondition .description p[data-v-0209ee32]{font-size:12px;line-height:23px;margin-bottom:.5rem}@media screen and (min-width:768px){.myNagadTemplate .termsAndCondition .title[data-v-0209ee32]{font-size:24px;line-height:32px;margin-bottom:30px}.myNagadTemplate .termsAndCondition .description p[data-v-0209ee32]{font-size:16px;line-height:28px;margin-bottom:1rem}}",""]),t.exports=r}}]);