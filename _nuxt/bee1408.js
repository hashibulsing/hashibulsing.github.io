(window.webpackJsonp=window.webpackJsonp||[]).push([[29,16],{539:function(e,t,n){var content=n(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("998aa59c",content,!0,{sourceMap:!1})},541:function(e,t,n){var content=n(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("d0059044",content,!0,{sourceMap:!1})},549:function(e,t,n){"use strict";n(539)},550:function(e,t,n){var r=n(31)(!1);r.push([e.i,".templateFeatureCard[data-v-53270b62]{position:relative;height:250px;background:#fff;box-shadow:0 15px 30px rgba(0,0,0,.15);border-radius:30px;overflow:hidden;margin-bottom:30px}.templateFeatureCard .image[data-v-53270b62]{padding:50%;background:#000;background-size:auto 100%;background-position:50%}.templateFeatureCard .text[data-v-53270b62]{position:absolute;left:0;right:0;bottom:0;padding:13px 20px;background:rgba(242,79,65,.9);color:#fcfcfc}.templateFeatureCard .text .title[data-v-53270b62]{font-size:18px;line-height:32px;font-weight:700}.templateFeatureCard .text .description[data-v-53270b62]{font-size:12px;line-height:19px}@media screen and (min-width:768px){.templateFeatureCard[data-v-53270b62]{min-height:350px}.templateFeatureCard .text[data-v-53270b62]{padding:13px 20px}.templateFeatureCard .text .title[data-v-53270b62]{font-size:35px;line-height:48px}.templateFeatureCard .text .description[data-v-53270b62]{font-size:20px;line-height:32px}}",""]),e.exports=r},555:function(e,t,n){"use strict";n.r(t);var r={props:{singleTemplateFeature:{type:Object,required:!0}}},l=(n(549),n(12)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"templateFeatureCard"},[n("div",{staticClass:"image",style:{backgroundImage:"url("+e.singleTemplateFeature.file_url_web+")"}}),e._v(" "),n("div",{staticClass:"text"},["en"==e.$i18n.locale?n("h3",{staticClass:"title"},[e._v(e._s(e.singleTemplateFeature.heading_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("h3",{staticClass:"title font-bn"},[e._v(e._s(e.singleTemplateFeature.heading_bangla))]):e._e(),e._v(" "),"en"==e.$i18n.locale?n("p",{staticClass:"description"},[e._v(e._s(e.singleTemplateFeature.subtitle_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"description font-bn"},[e._v(e._s(e.singleTemplateFeature.subtitle_bangla))]):e._e()])])}),[],!1,null,"53270b62",null);t.default=component.exports},558:function(e,t,n){"use strict";n(541)},559:function(e,t,n){var r=n(31)(!1);r.push([e.i,".featureTabContent[data-v-1dd9a99a]{padding:50px 0 0}@media screen and (min-width:768px){.featureTabContent[data-v-1dd9a99a]{padding:70px 0 40px}}",""]),e.exports=r},561:function(e,t,n){"use strict";n.r(t);var r={components:{TemplateFeatureCard:n(555).default},props:{templateFeature:{type:"",required:!0}}},l=(n(558),n(12)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"featureTabContent"},[e.templateFeature?n("b-row",e._l(e.templateFeature,(function(e){return n("b-col",{key:e.id,attrs:{md:"4"}},[n("TemplateFeatureCard",{attrs:{singleTemplateFeature:e}})],1)})),1):e._e()],1)}),[],!1,null,"1dd9a99a",null);t.default=component.exports}}]);