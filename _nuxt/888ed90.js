(window.webpackJsonp=window.webpackJsonp||[]).push([[156,13,15,25,35,40],{525:function(e,t,n){var content=n(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("15d9b117",content,!0,{sourceMap:!1})},526:function(e,t,n){var content=n(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("adfb76ea",content,!0,{sourceMap:!1})},528:function(e,t,n){"use strict";n.r(t);var o={props:{show:{type:Boolean,default:!1},videoLink:{type:String}},data:function(){return{videoId:""}},methods:{videoID:function(e){this.videoId=this.$youtube.getIdFromURL(e)}},updated:function(){this.videoID(this.videoLink)}},r=(n(530),n(12)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"videoPopup",on:{click:function(t){return e.$emit("close")},wheel:function(e){e.preventDefault()},touchmove:function(e){e.preventDefault()},scroll:function(e){e.preventDefault()}}},[n("div",{staticClass:"videoPopup-inner",on:{click:function(e){e.stopPropagation()}}},[n("div",{staticClass:"close-button"},[n("button",{attrs:{title:"Close"},on:{click:function(t){return e.$emit("close")}}})]),e._v(" "),n("div",{staticClass:"video-frame"},[n("client-only",{attrs:{placeholder:"Loading..."}},[n("youtube",{attrs:{"video-id":e.videoId,"player-width":"100%","player-height":"100%","player-vars":{autoplay:0}}})],1)],1)])]):e._e()}),[],!1,null,"1ea665c2",null);t.default=component.exports},530:function(e,t,n){"use strict";n(525)},531:function(e,t,n){var o=n(31),r=n(65),d=n(321),l=o(!1),c=r(d);l.push([e.i,".videoPopup[data-v-1ea665c2]{position:fixed;left:0;top:0;height:100vh;width:100vw;background:rgba(0,0,0,.25);display:flex;justify-content:center;align-items:center;z-index:1000}.videoPopup-inner[data-v-1ea665c2]{margin:10px;position:relative;width:100%;height:290px;padding:7px;border-radius:25px;background:linear-gradient(161.04deg,rgba(255,249,244,.7) -58.16%,rgba(255,250,245,.182) 76.42%);border:1px solid #fff;box-sizing:border-box;box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px)}.videoPopup-inner .close-button[data-v-1ea665c2]{position:absolute;right:25px;top:25px;height:36px;width:36px;background:#fff;border-radius:100px;overflow:hidden}.videoPopup-inner .close-button button[data-v-1ea665c2]{border:none;background:url("+c+") no-repeat 50%;background-size:22px 22px;filter:brightness(0) invert(.4);height:100%;width:100%}.videoPopup-inner .video-frame[data-v-1ea665c2]{height:100%;border-radius:18px;overflow:hidden}.videoPopup-inner .video-frame>div[data-v-1ea665c2]{height:100%}.videoPopup-inner .video-frame>div iframe[data-v-1ea665c2]{width:100%;height:100%}@media screen and (min-width:768px){.videoPopup-inner[data-v-1ea665c2]{width:1050px;height:590px;padding:15px;border-radius:30px}}",""]),e.exports=l},532:function(e,t,n){"use strict";n(526)},533:function(e,t,n){var o=n(31)(!1);o.push([e.i,".cover-slider .cover-slide[data-v-7e51be34]{position:relative}.cover-slider .cover-slide .slide-text[data-v-7e51be34]{position:absolute;top:85px;left:0;bottom:85px;z-index:2;width:100%;color:#fcfcfc;text-align:center}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{width:100%;padding:0 25px;margin-bottom:10px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:24px;font-weight:700;line-height:1.1;letter-spacing:1px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-weight:400;font-size:15px;line-height:32px;letter-spacing:.75px}.cover-slider .cover-slide .slide-text .texts.red[data-v-7e51be34]{color:#f91320}.cover-slider .cover-slide .slide-text .texts.orange[data-v-7e51be34]{color:#d0392c}.cover-slider .cover-slide .slide-text .texts.black[data-v-7e51be34]{color:#000}.cover-slider .cover-slide .slide-text .texts.white[data-v-7e51be34]{color:#fff}.cover-slider .cover-slide .slide-text .texts.brown[data-v-7e51be34]{color:#a97c57}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:5px 16px;font-size:15px;min-width:135px}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]{background:#f91320;border:2px solid #f91320}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]:hover{background:#fcfcfc;color:#f91320}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]{background:#d0392c;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]:hover{background:#fcfcfc;color:#d0392c}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]{background:#000;border:2px solid #000}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]:hover{background:#fcfcfc;color:#000}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]{background:#fcfcfc;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]:hover{background:#d0392c;color:#fcfcfc}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]{background:#a97c57;border:2px solid #a97c57}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]:hover{background:#fcfcfc;color:#a97c57}.cover-slider .cover-slide .slide-image[data-v-7e51be34]{z-index:1}.cover-slider .cover-slide .slide-image img[data-v-7e51be34]{width:100%!important}@media screen and (min-width:768px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{top:33%;left:10%;width:40%;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{padding:0}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:10px 24px;position:relative;bottom:unset;left:unset;transform:translateX(0)}}@media screen and (min-width:1024px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{width:500px;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{margin-bottom:5px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:40px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-size:16px}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:16px 24px}}",""]),e.exports=o},534:function(e,t,n){"use strict";n.r(t);var o={name:"CoverSlider",components:{VideoPopup:n(528).default},props:{sliders:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{videoLink:"",videoPopup:!1}},methods:{openVideoPopUp:function(e){this.videoLink=e,this.videoLink?this.videoPopup=!0:alert("Video url not found!")}}},r=(n(532),n(12)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cover-slider"},[e.sliders.length>0?n("div",[n("client-only",[n("carousel",{attrs:{autoplay:e.sliders.length>1,items:1,loop:e.sliders.length>1,nav:!1,autoplayTimeout:this.$store.state.sliderTimeOut}},e._l(e.sliders,(function(t){return n("div",{key:t.id,staticClass:"cover-slide item"},[n("div",{staticClass:"slide-text",style:[e.$device.isDesktop?{top:t.content_position_y+"%",left:t.content_position_x+"%"}:"",e.$device.isMobile?{top:t.mobile_content_position_y+"%"}:""]},[n("div",{staticClass:"texts",class:[t.text_colour]},["en"==e.$i18n.locale?n("h1",[e._v("\n                "+e._s(t.heading_english)+"\n              ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("h1",{staticClass:"font-bn"},[e._v("\n                "+e._s(t.heading_bangla)+"\n              ")]):e._e(),e._v(" "),"en"==e.$i18n.locale?n("p",[e._v("\n                "+e._s(t.subtitle_english)+"\n              ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn"},[e._v("\n                "+e._s(t.subtitle_bangla)+"\n              ")]):e._e()]),e._v(" "),t.is_button_visible?n("div",["en"==e.$i18n.locale?n("a",{staticClass:"theme-btn slide-btn",class:[t.button_colour],attrs:{href:t.button_action,exact:""}},[e._v(e._s(t.button_text_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("a",{staticClass:"theme-btn slide-btn font-bn",class:[t.button_colour],attrs:{href:t.button_action}},[e._v(e._s(t.button_text_bangla))]):e._e()]):e._e()]),e._v(" "),t.video_link?n("div",{staticClass:"video-play-btn",style:[e.$device.isDesktop?{top:t.play_button_position_y+"%",left:t.play_button_position_x+"%"}:"",e.$device.isMobile?{top:t.mobile_play_button_position_x+"%",left:t.mobileplay_button_position_y+"%"}:""]},[n("button",{attrs:{title:"Play Video"},on:{click:function(n){return e.openVideoPopUp(t.video_link)}}})]):e._e(),e._v(" "),n("div",{staticClass:"slide-image"},["en"==e.$i18n.locale?n("picture",[n("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":t.file_url_web}}),e._v(" "),n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.file_url_mobile,alt:""}})]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("picture",[n("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":t.file_url_web_bangla}}),e._v(" "),n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.file_url_mobile_bangla,alt:""}})]):e._e()])])})),0)],1)],1):e._e(),e._v(" "),n("VideoPopup",{attrs:{videoLink:e.videoLink,show:e.videoPopup},on:{close:function(t){e.videoPopup=!1},open:function(t){e.videoPopup=!0}}})],1)}),[],!1,null,"7e51be34",null);t.default=component.exports},538:function(e,t,n){var content=n(548);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("79e82ab4",content,!0,{sourceMap:!1})},547:function(e,t,n){"use strict";n(538)},548:function(e,t,n){var o=n(31)(!1);o.push([e.i,".textCard[data-v-76adc4c0]{position:relative;z-index:1}.textCard-inner[data-v-76adc4c0]{background:linear-gradient(161.04deg,#fff9f4 -58.16%,rgba(255,250,245,.26) 76.42%);border:1px solid hsla(0,0%,100%,.2);box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(62px);backdrop-filter:blur(62px);border-radius:26px;padding:22px 26px}.textCard-inner .section-heading[data-v-76adc4c0]{padding-bottom:10px}.textCard-inner .description[data-v-76adc4c0]{margin-bottom:15px}.textCard-inner .description p[data-v-76adc4c0]{font-weight:400;font-size:14px;line-height:25px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}@media screen and (min-width:768px){.textCard-inner[data-v-76adc4c0]{padding:33px 60px}.textCard-inner .section-heading[data-v-76adc4c0]{padding-bottom:15px}.textCard-inner .description p[data-v-76adc4c0]{font-size:16px;line-height:28px}}",""]),e.exports=o},554:function(e,t,n){"use strict";n.r(t);var o={props:{termsCondition:{type:Object,required:!0,default:function(){}},commonTerms:{type:Object,required:!0,default:function(){}},titleCard:{type:Boolean,default:!1},lineLimit:{type:String,default:"2"},alignText:{type:String,default:"center"}},data:function(){return{isExpanded:!1,lineLimitStyle:{"-webkit-line-clamp":this.lineLimit,"line-clamp":this.lineLimit}}}},r=(n(547),n(12)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0!=Object.keys(e.termsCondition).length?n("section",{staticClass:"textCard",style:[e.titleCard?{marginTop:"-30px"}:{marginBottom:"30px"}]},[n("b-container",[n("div",{staticClass:"textCard-inner"},[n("div",{staticClass:"section-heading"},["en"==e.$i18n.locale?n("h2",[e._v("\n          "+e._s(e.termsCondition.title_english?e.termsCondition.title_english:"Terms and Conditions")+"\n        ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("h2",{staticClass:"font-bn"},[e._v("\n          "+e._s(e.termsCondition.title_bangla?e.termsCondition.title_bangla:" শর্তাবলী")+"\n        ")]):e._e()]),e._v(" "),0==e.termsCondition.is_common?n("div",{staticClass:"description",style:{textAlign:e.alignText}},["en"==e.$i18n.locale?n("p",{style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.termsCondition.details_english)}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn",style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.termsCondition.details_bangla)}}):e._e()]):e._e(),e._v(" "),1==e.termsCondition.is_common?n("div",{staticClass:"description",style:{textAlign:e.alignText}},["en"==e.$i18n.locale?n("p",{style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.commonTerms.description_english)}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn",style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.commonTerms.description_bangla)}}):e._e()]):e._e(),e._v(" "),e.termsCondition.description_english?n("div",{staticClass:"description",style:{textAlign:e.alignText}},["en"==e.$i18n.locale?n("p",{style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.termsCondition.description_english)}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn",style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.termsCondition.description_bangla)}}):e._e()]):e._e(),e._v(" "),n("div",{staticClass:"text-center"},["en"==e.$i18n.locale?n("button",{staticClass:"theme-btn",on:{click:function(t){e.isExpanded=!e.isExpanded}}},[e._v("\n          "+e._s(e.isExpanded?"View Less":"Read More")+"\n        ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("button",{staticClass:"theme-btn font-bn",on:{click:function(t){e.isExpanded=!e.isExpanded}}},[e._v("\n          "+e._s(e.isExpanded?"কম পড়ুন":"আরও পড়ুন")+"\n        ")]):e._e()])])])],1):e._e()}),[],!1,null,"76adc4c0",null);t.default=component.exports},578:function(e,t,n){var content=n(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("75ea7110",content,!0,{sourceMap:!1})},619:function(e,t,n){"use strict";n(578)},620:function(e,t,n){var o=n(31)(!1);o.push([e.i,".featureCard[data-v-4b5ce349]{display:block;position:relative;box-shadow:0 15px 30px rgba(0,0,0,.1);border-radius:25px;overflow:hidden;margin-bottom:30px}.featureCard .image[data-v-4b5ce349]{transition:transform .3s}.featureCard .image img[data-v-4b5ce349]{width:100%}.featureCard .title[data-v-4b5ce349]{background:rgba(239,240,247,.9);position:absolute;bottom:0;left:0;right:0;padding:16px;text-align:center}.featureCard .title h2[data-v-4b5ce349]{font-size:24px;line-height:48px;font-weight:700;color:#14142b;transition:color .3s}@media screen and (min-width:768px){.featureCard[data-v-4b5ce349]{box-shadow:0 0 32px rgba(0,0,0,.1)}.featureCard .title[data-v-4b5ce349]{padding:22px}.featureCard .title h2[data-v-4b5ce349]{font-size:40px;line-height:48px}.featureCard:hover .image[data-v-4b5ce349]{transform:scale(1.2)}.featureCard:hover .title h2[data-v-4b5ce349]{color:#d0392c}}",""]),e.exports=o},621:function(e,t,n){var content=n(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("74a565b2",content,!0,{sourceMap:!1})},640:function(e,t,n){"use strict";n.r(t);var o={name:"MyNagadFeatureCard",props:{myFeatureItem:{type:Object,required:!0}}},r=(n(619),n(12)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nuxt-link",{staticClass:"featureCard",attrs:{to:"nagad/template/?template="+e.myFeatureItem.slug}},[n("div",{staticClass:"image"},["en"==e.$i18n.locale?n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.myFeatureItem.file_url_web,alt:""}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.myFeatureItem.file_url_web_bangla,alt:""}}):e._e()]),e._v(" "),n("div",{staticClass:"title"},["en"==e.$i18n.locale?n("h2",[e._v(e._s(e.myFeatureItem.title_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("h2",{staticClass:"font-bn"},[e._v(e._s(e.myFeatureItem.title_bangla))]):e._e()])])],1)}),[],!1,null,"4b5ce349",null);t.default=component.exports},652:function(e,t,n){"use strict";n(621)},653:function(e,t,n){var o=n(31)(!1);o.push([e.i,".myNagadFeatures[data-v-098c831a]{padding:35px 0}@media screen and (min-width:100px){.myNagadFeatures[data-v-098c831a]{padding:100px 0}}",""]),e.exports=o},679:function(e,t,n){var content=n(731);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("f3bb40f8",content,!0,{sourceMap:!1})},711:function(e,t,n){"use strict";n.r(t);var o={name:"Features",components:{FeatureCard:n(640).default},props:{myNagadFeatures:{type:Array,required:!0}}},r=(n(652),n(12)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"myNagadFeatures "},[n("b-container",[e.myNagadFeatures.length>0?n("b-row",e._l(e.myNagadFeatures,(function(e){return n("b-col",{key:e.id,attrs:{sm:"6"}},[n("FeatureCard",{attrs:{myFeatureItem:e}})],1)})),1):e._e()],1)],1)}),[],!1,null,"098c831a",null);t.default=component.exports},730:function(e,t,n){"use strict";n(679)},731:function(e,t,n){var o=n(31)(!1);o.push([e.i,"main.myNagad[data-v-4745b888]{overflow:hidden}",""]),e.exports=o},825:function(e,t,n){"use strict";n.r(t);var o=n(10),r=(n(30),n(534)),d=n(554),l=n(711),c=n(90),v={name:"MyNagadPage",layout:"theme-layout",components:{CoverSlider:r.default,ExpandableTextCard:d.default,AllFeature:l.default,LandingPopup:c.default},data:function(){return{seoPageTitle:"en"==this.$i18n.locale?"My Nagad - Nagad":"আমার নগদ - নগদ",seoLink:"en"==this.$i18n.locale?"nagad.com.bd/my-nagad":"nagad.com.bd/bn/my-nagad",coverSliders:[],page_id:4,servicePage:null,myNagadFeatures:[]}},head:function(){return{meta:[{hid:"link",name:"link",content:this.seoLink},{hid:"title",name:"title",content:this.title},{hid:"keywords",name:"keywords",content:"my nagad,nagad,cash in,cash out,send money,payment,dfs,mfs,bkash,upay,mobile financial service,digital financial service,lowest charge,bill pay,free,mobile recharge,emi,donation,secured,add money"},{hid:"tags",name:"tags",content:"nagad,my nagad,pin reset,limit,charges,tariff,calculator,secured"},{hid:"description",name:"description",content:"my nagad"}]}},methods:{getCoverSlider:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/get-slider/".concat(e.page_id));case 2:n=t.sent,e.coverSliders=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},getSinglePage:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("get-single-page/".concat(e.page_id));case 2:n=t.sent,e.servicePage=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},getMyNagadFeature:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("get-my-nagad-feature");case 2:n=t.sent,e.myNagadFeatures=n.data.data;case 4:case"end":return t.stop()}}),t)})))()},getPopUpBanner:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("get-pop-up-banner/".concat(e.page_id));case 2:n=t.sent,e.landingPopup=n.data.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.getCoverSlider(),this.getSinglePage(),this.getMyNagadFeature(),this.getPopUpBanner()}},f=(n(730),n(12)),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"myNagad"},[n("CoverSlider",{attrs:{sliders:e.coverSliders}}),e._v(" "),n("ExpandableTextCard",{attrs:{serviceTextCard:e.servicePage,lineLimit:"2",titleCard:"true"}}),e._v(" "),n("AllFeature",{attrs:{myNagadFeatures:e.myNagadFeatures}})],1)}),[],!1,null,"4745b888",null);t.default=component.exports}}]);