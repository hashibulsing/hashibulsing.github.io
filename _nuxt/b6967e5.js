(window.webpackJsonp=window.webpackJsonp||[]).push([[79,16,18,20,25,54,59],{491:function(e,t,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("15d9b117",content,!0,{sourceMap:!1})},492:function(e,t,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("adfb76ea",content,!0,{sourceMap:!1})},493:function(e,t,n){"use strict";n.r(t);var o={props:{show:{type:Boolean,default:!1},videoLink:{type:String}},data:function(){return{videoId:""}},methods:{videoID:function(e){this.videoId=this.$youtube.getIdFromURL(e)}},updated:function(){this.videoID(this.videoLink)}},l=(n(494),n(13)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"videoPopup",on:{click:function(t){return e.$emit("close")},wheel:function(e){e.preventDefault()},touchmove:function(e){e.preventDefault()},scroll:function(e){e.preventDefault()}}},[n("div",{staticClass:"videoPopup-inner",on:{click:function(e){e.stopPropagation()}}},[n("div",{staticClass:"close-button"},[n("button",{attrs:{title:"Close"},on:{click:function(t){return e.$emit("close")}}})]),e._v(" "),n("div",{staticClass:"video-frame"},[n("client-only",{attrs:{placeholder:"Loading..."}},[n("youtube",{attrs:{"video-id":e.videoId,"player-width":"100%","player-height":"100%","player-vars":{autoplay:0}}})],1)],1)])]):e._e()}),[],!1,null,"1ea665c2",null);t.default=component.exports},494:function(e,t,n){"use strict";n(491)},495:function(e,t,n){var o=n(33),l=n(63),d=n(296),r=o(!1),c=l(d);r.push([e.i,".videoPopup[data-v-1ea665c2]{position:fixed;left:0;top:0;height:100vh;width:100vw;background:rgba(0,0,0,.25);display:flex;justify-content:center;align-items:center;z-index:1000}.videoPopup-inner[data-v-1ea665c2]{margin:10px;position:relative;width:100%;height:290px;padding:7px;border-radius:25px;background:linear-gradient(161.04deg,rgba(255,249,244,.7) -58.16%,rgba(255,250,245,.182) 76.42%);border:1px solid #fff;box-sizing:border-box;box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px)}.videoPopup-inner .close-button[data-v-1ea665c2]{position:absolute;right:25px;top:25px;height:36px;width:36px;background:#fff;border-radius:100px;overflow:hidden}.videoPopup-inner .close-button button[data-v-1ea665c2]{border:none;background:url("+c+") no-repeat 50%;background-size:22px 22px;filter:brightness(0) invert(.4);height:100%;width:100%}.videoPopup-inner .video-frame[data-v-1ea665c2]{height:100%;border-radius:18px;overflow:hidden}.videoPopup-inner .video-frame>div[data-v-1ea665c2]{height:100%}.videoPopup-inner .video-frame>div iframe[data-v-1ea665c2]{width:100%;height:100%}@media screen and (min-width:768px){.videoPopup-inner[data-v-1ea665c2]{width:1050px;height:590px;padding:15px;border-radius:30px}}",""]),e.exports=r},496:function(e,t,n){"use strict";n(492)},497:function(e,t,n){var o=n(33)(!1);o.push([e.i,".cover-slider .cover-slide[data-v-7e51be34]{position:relative}.cover-slider .cover-slide .slide-text[data-v-7e51be34]{position:absolute;top:85px;left:0;bottom:85px;z-index:2;width:100%;color:#fcfcfc;text-align:center}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{width:100%;padding:0 25px;margin-bottom:10px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:24px;font-weight:700;line-height:1.1;letter-spacing:1px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-weight:400;font-size:15px;line-height:32px;letter-spacing:.75px}.cover-slider .cover-slide .slide-text .texts.red[data-v-7e51be34]{color:#f91320}.cover-slider .cover-slide .slide-text .texts.orange[data-v-7e51be34]{color:#d0392c}.cover-slider .cover-slide .slide-text .texts.black[data-v-7e51be34]{color:#000}.cover-slider .cover-slide .slide-text .texts.white[data-v-7e51be34]{color:#fff}.cover-slider .cover-slide .slide-text .texts.brown[data-v-7e51be34]{color:#a97c57}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:5px 16px;font-size:15px;min-width:135px}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]{background:#f91320;border:2px solid #f91320}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]:hover{background:#fcfcfc;color:#f91320}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]{background:#d0392c;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]:hover{background:#fcfcfc;color:#d0392c}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]{background:#000;border:2px solid #000}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]:hover{background:#fcfcfc;color:#000}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]{background:#fcfcfc;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]:hover{background:#d0392c;color:#fcfcfc}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]{background:#a97c57;border:2px solid #a97c57}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]:hover{background:#fcfcfc;color:#a97c57}.cover-slider .cover-slide .slide-image[data-v-7e51be34]{z-index:1}.cover-slider .cover-slide .slide-image img[data-v-7e51be34]{width:100%!important}@media screen and (min-width:768px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{top:33%;left:10%;width:40%;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{padding:0}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:10px 24px;position:relative;bottom:unset;left:unset;transform:translateX(0)}}@media screen and (min-width:1024px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{width:500px;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{margin-bottom:5px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:40px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-size:16px}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:16px 24px}}",""]),e.exports=o},498:function(e,t,n){"use strict";n.r(t);var o={name:"CoverSlider",components:{VideoPopup:n(493).default},props:{sliders:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{videoLink:"",videoPopup:!1}},methods:{openVideoPopUp:function(e){this.videoLink=e,this.videoLink?this.videoPopup=!0:alert("Video url not found!")}}},l=(n(496),n(13)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cover-slider"},[e.sliders.length>0?n("div",[n("client-only",[n("carousel",{attrs:{autoplay:e.sliders.length>1,items:1,loop:e.sliders.length>1,nav:!1,autoplayTimeout:this.$store.state.sliderTimeOut}},e._l(e.sliders,(function(t){return n("div",{key:t.id,staticClass:"cover-slide item"},[n("div",{staticClass:"slide-text",style:[e.$device.isDesktop?{top:t.content_position_y+"%",left:t.content_position_x+"%"}:"",e.$device.isMobile?{top:t.mobile_content_position_y+"%"}:""]},[n("div",{staticClass:"texts",class:[t.text_colour]},["en"==e.$i18n.locale?n("h1",[e._v("\n                "+e._s(t.heading_english)+"\n              ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("h1",{staticClass:"font-bn"},[e._v("\n                "+e._s(t.heading_bangla)+"\n              ")]):e._e(),e._v(" "),"en"==e.$i18n.locale?n("p",[e._v("\n                "+e._s(t.subtitle_english)+"\n              ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn"},[e._v("\n                "+e._s(t.subtitle_bangla)+"\n              ")]):e._e()]),e._v(" "),t.is_button_visible?n("div",["en"==e.$i18n.locale?n("a",{staticClass:"theme-btn slide-btn",class:[t.button_colour],attrs:{href:t.button_action,exact:""}},[e._v(e._s(t.button_text_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("a",{staticClass:"theme-btn slide-btn font-bn",class:[t.button_colour],attrs:{href:t.button_action}},[e._v(e._s(t.button_text_bangla))]):e._e()]):e._e()]),e._v(" "),t.video_link?n("div",{staticClass:"video-play-btn",style:[e.$device.isDesktop?{top:t.play_button_position_y+"%",left:t.play_button_position_x+"%"}:"",e.$device.isMobile?{top:t.mobile_play_button_position_x+"%",left:t.mobileplay_button_position_y+"%"}:""]},[n("button",{attrs:{title:"Play Video"},on:{click:function(n){return e.openVideoPopUp(t.video_link)}}})]):e._e(),e._v(" "),n("div",{staticClass:"slide-image"},["en"==e.$i18n.locale?n("picture",[n("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":t.file_url_web}}),e._v(" "),n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.file_url_mobile,alt:""}})]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("picture",[n("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":t.file_url_web_bangla}}),e._v(" "),n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.file_url_mobile_bangla,alt:""}})]):e._e()])])})),0)],1)],1):e._e(),e._v(" "),n("VideoPopup",{attrs:{videoLink:e.videoLink,show:e.videoPopup},on:{close:function(t){e.videoPopup=!1},open:function(t){e.videoPopup=!0}}})],1)}),[],!1,null,"7e51be34",null);t.default=component.exports},499:function(e,t,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("0f35f4e7",content,!0,{sourceMap:!1})},505:function(e,t,n){"use strict";n(499)},506:function(e,t,n){var o=n(33)(!1);o.push([e.i,".textCard[data-v-dd7fd5a8]{position:relative;z-index:1;margin-bottom:30px}.textCard-inner[data-v-dd7fd5a8]{background:linear-gradient(161.04deg,#fff9f4 -58.16%,rgba(255,250,245,.26) 76.42%);border:1px solid hsla(0,0%,100%,.2);box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(62px);backdrop-filter:blur(62px);border-radius:26px;padding:22px 26px;margin-top:-30px}.textCard-inner .section-heading[data-v-dd7fd5a8]{padding-bottom:10px}.textCard-inner .description[data-v-dd7fd5a8]{margin-bottom:15px}.textCard-inner .description p[data-v-dd7fd5a8]{font-weight:400;font-size:14px;line-height:25px}@media screen and (min-width:768px){.textCard-inner[data-v-dd7fd5a8]{padding:33px 60px}.textCard-inner .section-heading[data-v-dd7fd5a8]{padding-bottom:15px}.textCard-inner .description p[data-v-dd7fd5a8]{font-size:16px;line-height:28px}}",""]),e.exports=o},510:function(e,t,n){"use strict";n.r(t);var o={props:{textHeading:{type:Object,required:!0,default:function(){}},textAlign:{type:String,default:"center"}},data:function(){return{}}},l=(n(505),n(13)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0!=Object.keys(e.textHeading).length?n("section",{staticClass:"textCard"},[n("b-container",[n("div",{staticClass:"textCard-inner"},[n("div",{staticClass:"section-heading"},["en"==e.$i18n.locale?n("h2",[e._v(e._s(e.textHeading.title_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("h2",{staticClass:"font-bn"},[e._v("\n          "+e._s(e.textHeading.title_bangla)+"\n        ")]):e._e()]),e._v(" "),n("div",{staticClass:"description",style:{"text-align":e.textAlign}},["en"==e.$i18n.locale?n("div",{domProps:{innerHTML:e._s(e.textHeading.short_description_english)}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn"},[e._v("\n          "+e._s(e.textHeading.short_description_bangla)+"\n        ")]):e._e()]),e._v(" "),1==e.textHeading.read_more_btn_status?n("div",{staticClass:"text-center"},["en"==e.$i18n.locale?n("nuxt-link",{staticClass:"theme-btn",attrs:{to:e.textHeading.read_more_btn_link}},[e._v("\n          View More\n        ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("nuxt-link",{staticClass:"theme-btn font-bn",attrs:{to:e.textHeading.read_more_btn_link}},[e._v("\n          আরও পড়ুন\n        ")]):e._e()],1):e._e()])])],1):e._e()}),[],!1,null,"dd7fd5a8",null);t.default=component.exports},511:function(e,t,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("79e82ab4",content,!0,{sourceMap:!1})},523:function(e,t,n){"use strict";n(511)},524:function(e,t,n){var o=n(33)(!1);o.push([e.i,".textCard[data-v-76adc4c0]{position:relative;z-index:1}.textCard-inner[data-v-76adc4c0]{background:linear-gradient(161.04deg,#fff9f4 -58.16%,rgba(255,250,245,.26) 76.42%);border:1px solid hsla(0,0%,100%,.2);box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(62px);backdrop-filter:blur(62px);border-radius:26px;padding:22px 26px}.textCard-inner .section-heading[data-v-76adc4c0]{padding-bottom:10px}.textCard-inner .description[data-v-76adc4c0]{margin-bottom:15px}.textCard-inner .description p[data-v-76adc4c0]{font-weight:400;font-size:14px;line-height:25px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}@media screen and (min-width:768px){.textCard-inner[data-v-76adc4c0]{padding:33px 60px}.textCard-inner .section-heading[data-v-76adc4c0]{padding-bottom:15px}.textCard-inner .description p[data-v-76adc4c0]{font-size:16px;line-height:28px}}",""]),e.exports=o},528:function(e,t,n){var content=n(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("279c3316",content,!0,{sourceMap:!1})},531:function(e,t,n){"use strict";n.r(t);var o={props:{termsCondition:{type:Object,required:!0,default:function(){}},commonTerms:{type:Object,required:!0,default:function(){}},titleCard:{type:Boolean,default:!1},lineLimit:{type:String,default:"2"},alignText:{type:String,default:"center"}},data:function(){return{isExpanded:!1,lineLimitStyle:{"-webkit-line-clamp":this.lineLimit,"line-clamp":this.lineLimit}}}},l=(n(523),n(13)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return 0!=Object.keys(e.termsCondition).length?n("section",{staticClass:"textCard",style:[e.titleCard?{marginTop:"-30px"}:{marginBottom:"30px"}]},[n("b-container",[n("div",{staticClass:"textCard-inner"},[n("div",{staticClass:"section-heading"},["en"==e.$i18n.locale?n("h2",[e._v("\n          "+e._s(e.termsCondition.title_english?e.termsCondition.title_english:"Terms and Conditions")+"\n        ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("h2",{staticClass:"font-bn"},[e._v("\n          "+e._s(e.termsCondition.title_bangla?e.termsCondition.title_bangla:" শর্তাবলী")+"\n        ")]):e._e()]),e._v(" "),0==e.termsCondition.is_common?n("div",{staticClass:"description",style:{textAlign:e.alignText}},["en"==e.$i18n.locale?n("p",{style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.termsCondition.details_english)}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn",style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.termsCondition.details_bangla)}}):e._e()]):e._e(),e._v(" "),1==e.termsCondition.is_common?n("div",{staticClass:"description",style:{textAlign:e.alignText}},["en"==e.$i18n.locale?n("p",{style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.commonTerms.description_english)}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn",style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.commonTerms.description_bangla)}}):e._e()]):e._e(),e._v(" "),e.termsCondition.description_english?n("div",{staticClass:"description",style:{textAlign:e.alignText}},["en"==e.$i18n.locale?n("p",{style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.termsCondition.description_english)}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn",style:[e.isExpanded?"":e.lineLimitStyle],domProps:{innerHTML:e._s(e.termsCondition.description_bangla)}}):e._e()]):e._e(),e._v(" "),n("div",{staticClass:"text-center"},["en"==e.$i18n.locale?n("button",{staticClass:"theme-btn",on:{click:function(t){e.isExpanded=!e.isExpanded}}},[e._v("\n          "+e._s(e.isExpanded?"View Less":"Read More")+"\n        ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("button",{staticClass:"theme-btn font-bn",on:{click:function(t){e.isExpanded=!e.isExpanded}}},[e._v("\n          "+e._s(e.isExpanded?"কম পড়ুন":"আরও পড়ুন")+"\n        ")]):e._e()])])])],1):e._e()}),[],!1,null,"76adc4c0",null);t.default=component.exports},541:function(e,t,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("7f246046",content,!0,{sourceMap:!1})},551:function(e,t,n){"use strict";n(528)},552:function(e,t,n){var o=n(33)(!1);o.push([e.i,".offerSummery[data-v-30dcb75c]{padding:50px 0 30px}.offerSummery-cards[data-v-30dcb75c]{display:flex;justify-content:center;flex-wrap:wrap;grid-gap:15px;gap:15px}.offerSummery-card[data-v-30dcb75c]{flex-basis:calc(50% - 7.5px);padding:10px;color:#f24f41;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:20px;text-align:center;min-height:160px;background:linear-gradient(161.04deg,#fff9f4 -58.16%,rgba(255,250,245,.26) 76.42%);border:1px solid hsla(0,0%,100%,.2);box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(62px);backdrop-filter:blur(62px)}.offerSummery-card h2[data-v-30dcb75c]{font-weight:700;font-size:22px}.offerSummery-card p[data-v-30dcb75c]{font-size:14px}.offerSummery-card.validity h2[data-v-30dcb75c]{text-transform:uppercase}@media screen and (min-width:768px){.offerSummery[data-v-30dcb75c]{padding:50px 0}.offerSummery-cards[data-v-30dcb75c]{grid-gap:30px;gap:30px}.offerSummery-card[data-v-30dcb75c]{flex-basis:calc(25% - 22.5px);min-height:250px;border-radius:30px}.offerSummery-card h2[data-v-30dcb75c]{font-weight:700;font-size:32px}.offerSummery-card p[data-v-30dcb75c]{font-size:22px}}",""]),e.exports=o},568:function(e,t,n){"use strict";n.r(t);var o={props:{offerCards:{type:Array,default:null}}},l=(n(551),n(13)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"offerSummery"},[n("b-container",[e.offerCards.length>0?n("div",{staticClass:"offerSummery-cards"},e._l(e.offerCards,(function(t){return n("div",{key:t.id,staticClass:"offerSummery-card percentage"},["en"==e.$i18n.locale?n("h2",[e._v(e._s(t.details_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("h2",{staticClass:"font-bn"},[e._v("\n          "+e._s(t.details_bangla)+"\n        ")]):e._e(),e._v(" "),"en"==e.$i18n.locale?n("p",[e._v(e._s(t.title_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("p",{staticClass:"font-bn"},[e._v("\n          "+e._s(t.title_bangla)+"\n        ")]):e._e()])})),0):e._e()])],1)}),[],!1,null,"30dcb75c",null);t.default=component.exports},574:function(e,t,n){"use strict";n(541)},575:function(e,t,n){var o=n(33)(!1);o.push([e.i,".multipleMerchentInfo[data-v-5bc63e52]{padding:0 0 50px}.multipleMerchentInfo .colum-titles[data-v-5bc63e52]{display:none}.multipleMerchentInfo .accordion .card[data-v-5bc63e52]{filter:drop-shadow(0 4px 20px rgba(0,0,0,.15));-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);border-radius:20px;overflow:hidden;border:1px solid #d9dbe9;margin-bottom:12px}.multipleMerchentInfo .accordion .card-header[data-v-5bc63e52]{display:flex;flex-wrap:wrap;align-items:center;padding:25px}.multipleMerchentInfo .accordion .card-header .row-title[data-v-5bc63e52]{flex-basis:35%;font-size:.8em}.multipleMerchentInfo .accordion .card-header .row-data[data-v-5bc63e52]{flex-basis:62%;padding:15px 0}.multipleMerchentInfo .accordion .card-header .merchant-logo[data-v-5bc63e52]{display:block;height:35px;margin-right:10px}.multipleMerchentInfo .accordion .card-header .mobileDataView[data-v-5bc63e52]{flex-basis:100%;display:flex;padding:5px 0;grid-gap:10px;gap:10px}.multipleMerchentInfo .accordion .card-header .mobileDataView .row-title[data-v-5bc63e52]{flex-basis:calc(36% - 5px);font-size:.8em}.multipleMerchentInfo .accordion .card-header .mobileDataView .row-data[data-v-5bc63e52]{flex-basis:calc(64% - 5px);padding:0}.multipleMerchentInfo .accordion .card-header .theme-btn[data-v-5bc63e52]{padding:5px 15px;margin:10px auto 0}.multipleMerchentInfo .accordion .card-body[data-v-5bc63e52]{padding:0;display:flex;flex-wrap:wrap;overflow:auto;font-size:12px}.multipleMerchentInfo .accordion .card-body table[data-v-5bc63e52]{width:100%}.multipleMerchentInfo .accordion .card-body table thead tr th[data-v-5bc63e52]{padding:7px;text-align:center;background-color:#eb2127;color:#fff;border:1px solid #d9dbe9}.multipleMerchentInfo .accordion .card-body table tbody tr td[data-v-5bc63e52]{border:1px solid #d9dbe9;padding:7px}.multipleMerchentInfo .accordion .card-body table tbody tr td[data-v-5bc63e52]:nth-child(3){word-break:break-word}@media screen and (min-width:768px){.multipleMerchentInfo[data-v-5bc63e52]{padding:50px 0}.multipleMerchentInfo .colum-titles[data-v-5bc63e52]{display:flex;align-items:flex-end;padding:25px 170px 0 25px}.multipleMerchentInfo .colum-titles p[data-v-5bc63e52]{flex:1;flex-shrink:1;font-weight:700;padding:15px 10px;text-align:center}.multipleMerchentInfo .colum-titles p[data-v-5bc63e52]:first-child{flex-basis:35%;flex-grow:unset;flex-shrink:unset;text-align:left}.multipleMerchentInfo .accordion .card-header[data-v-5bc63e52]{justify-content:space-between}.multipleMerchentInfo .accordion .card-header .row-title[data-v-5bc63e52]{display:none}.multipleMerchentInfo .accordion .card-header .row-data[data-v-5bc63e52]{padding:0;text-align:center}.multipleMerchentInfo .accordion .card-header .offerInfo[data-v-5bc63e52]{flex:1;display:flex;justify-content:space-around}.multipleMerchentInfo .accordion .card-header .merchant[data-v-5bc63e52]{flex-basis:30%;flex-grow:0;text-align:left}.multipleMerchentInfo .accordion .card-header .merchant-logo[data-v-5bc63e52]{display:inline-block;height:unset;width:25%;margin-right:15px}.multipleMerchentInfo .accordion .card-header .offer-limit[data-v-5bc63e52],.multipleMerchentInfo .accordion .card-header .offer-percentage[data-v-5bc63e52]{flex-basis:20%}.multipleMerchentInfo .accordion .card-header .mobileDataView[data-v-5bc63e52]{flex-basis:unset;flex:1;display:inline-block}.multipleMerchentInfo .accordion .card-header .theme-btn[data-v-5bc63e52]{margin:0}.multipleMerchentInfo .accordion .card-body[data-v-5bc63e52]{font-size:14px}.multipleMerchentInfo .accordion .card-body table tbody tr td[data-v-5bc63e52],.multipleMerchentInfo .accordion .card-body table thead tr th[data-v-5bc63e52]{padding:12px}.merchantNameAndLogo[data-v-5bc63e52]{display:flex;align-items:center}}",""]),e.exports=o},587:function(e,t,n){"use strict";n.r(t);var o={props:{merchantOffer:{type:Array,default:[]},tableColumns:{type:Object,default:{}}}},l=(n(574),n(13)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"multipleMerchentInfo"},[n("b-container",[e.tableColumns?n("div",{staticClass:"colum-titles"},[n("p",[e._v("Brand Name")]),e._v(" "),e._l(e.tableColumns,(function(t){return n("p",{key:t},[e._v("\n        "+e._s(t)+"\n      ")])}))],2):e._e(),e._v(" "),e.merchantOffer.length>0?n("div",{staticClass:"accordion",attrs:{role:"tablist"}},e._l(e.merchantOffer,(function(t,o){return n("b-card",{key:t.id,attrs:{"no-body":""}},[n("b-card-header",{attrs:{"header-tag":"header",role:"tab"}},[n("div",{staticClass:"row-title"},[n("strong",[e._v("\n              Brand "),n("br"),e._v("\n              Name\n            ")])]),e._v(" "),t.merchant?n("div",{staticClass:"merchant row-data merchantNameAndLogo"},["bn"==e.$i18n.locale?n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"merchant-logo",attrs:{"data-src":t.merchant.file_url_bangla,alt:""}}):e._e(),e._v(" "),"en"==e.$i18n.locale?n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"merchant-logo",attrs:{"data-src":t.merchant.file_url_english,alt:""}}):e._e(),e._v(" "),"en"==e.$i18n.locale?n("span",{staticClass:"merchant-name"},[e._v(e._s(t.merchant.title_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("span",{staticClass:"merchant-name"},[e._v(e._s(t.merchant.title_bangla))]):e._e()]):e._e(),e._v(" "),t.single_merchant_offer_data?n("div",{staticClass:"offerInfo"},e._l(t.single_merchant_offer_data,(function(t){return n("div",{key:t.id,staticClass:"mobileDataView"},[n("div",{staticClass:"row-title"},[n("strong",[e._v(e._s(t.offer_table_column_title.title_english))])]),e._v(" "),n("p",{staticClass:"row-data"},[e._v(e._s(t.value))])])})),0):e._e(),e._v(" "),1==t.is_online?n("div",{style:[e.$device.isMobile?{width:"100%",textAlign:"center"}:""]},[n("a",{staticClass:"theme-btn",attrs:{href:t.online_url,variant:"info",target:"_blank"}},[e._v("Click Here")])]):e._e(),e._v(" "),0==t.is_online?n("div",{style:[e.$device.isMobile?{width:"100%",textAlign:"center"}:""]},[n("button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+o,expression:"'accordion-' + index"}],staticClass:"theme-btn",attrs:{variant:"info"}},[e._v("\n              Address\n            ")])]):e._e()]),e._v(" "),0==t.is_online?n("b-collapse",{attrs:{id:"accordion-"+o,accordion:"my-accordion",role:"tabpanel"}},[t.merchant.address.length>0?n("b-card-body",[n("table",[n("thead",[n("tr",[n("th",[e._v("District")]),e._v(" "),n("th",[e._v("Area")]),e._v(" "),n("th",[e._v("Address")])])]),e._v(" "),n("tbody",e._l(t.merchant.address,(function(t){return n("tr",{key:t.id},["en"==e.$i18n.locale?n("td",[e._v("\n                    "+e._s(t.district?t.district.name:"-")+"\n                  ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?n("td",[e._v("\n                    "+e._s(t.district?t.district.bn_name:"-")+"\n                  ")]):e._e(),e._v(" "),n("td",[e._v(e._s(t.area_english))]),e._v(" "),n("td",[e._v(e._s(t.address_english))])])})),0)])]):e._e()],1):e._e()],1)})),1):e._e()])],1)}),[],!1,null,"5bc63e52",null);t.default=component.exports},775:function(e,t,n){var content=n(846);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("1a23350c",content,!0,{sourceMap:!1})},845:function(e,t,n){"use strict";n(775)},846:function(e,t,n){var o=n(33)(!1);o.push([e.i,".campaignTemplate[data-v-374284d8]{padding-bottom:50px}",""]),e.exports=o},928:function(e,t,n){"use strict";n.r(t);var o=n(498),l=n(510),d=n(568),r=n(587),c=n(531),_={name:"SingleMerchantSingleOffer",layout:"theme-layout",components:{CoverSlider:o.default,TextCard:l.default,OfferSummeryCards:d.default,MultipleMerchantInfo:r.default,ExpandableTextCard:c.default},data:function(){return{coverSliders:[{id:13,page_id:1,file_url_web:"https://nagad.com.bd/uploads/slider/5V4wplACkmNpw4iJCYKPilS5u31MaX3MvKGZTJqF.jpg",file_url_web_bangla:"https://nagad.com.bd/uploads/slider/7VOPKJaUXMsao97UIjEaqlKXxXSfDJ7VqOOEJlaA.jpg",file_url_mobile_bangla:"https://nagad.com.bd/uploads/slider/3X0ysECDR2U2B7uKdSD3rasoK418Jn7zUwOjLzNL.png",button_text_english:"Learn More",button_text_bangla:"বিস্তারিত",button_action:"/services/service/?service=cash-out",heading_english:"Enjoy the lowest ever Cash Out rate",heading_bangla:"সব থেকে কম খরচে ক্যাশ আউট করার সুবিধা",subtitle_english:null,subtitle_bangla:null,is_button_visible:1,is_app_download_button_visible:0,status:1,file_url_mobile:"https://nagad.com.bd/uploads/slider/k85VsFP8erG0JGWpBGXIiKYFqXcKjzbVI7x2SAlc.png",video_link:null,text_colour:"white",button_colour:"orange",content_position_x:"6.529947916666667",content_position_y:"48.6053212483724",play_button_position_x:"50",play_button_position_y:"50",deleted_at:null,created_at:"2022-01-13 05:39:00",updated_at:"2022-03-06 09:58:12"},{id:17,page_id:1,file_url_web:"https://nagad.com.bd/uploads/slider/PyTEGwVLw7Yat9dxUmdSxABtdzqmiAhQuAQLW6iK.jpg",file_url_web_bangla:"https://nagad.com.bd/uploads/slider/ic6LGIk1O3c96zms69RoL5iRIMjhDoJMy6XjllR2.jpg",file_url_mobile_bangla:"https://nagad.com.bd/uploads/slider/D9HclzM6iCQJGnZyz2R5D5XJlO48jfWn1P9GkCKp.png",button_text_english:"Learn more",button_text_bangla:"বিস্তারিত",button_action:"/pg/?n=about-nagad",heading_english:"Nagad - DFS of Bangladesh Post Office",heading_bangla:"নগদ - বাংলাদেশ ডাক বিভাগের ডিজিটাল লেনদেন",subtitle_english:null,subtitle_bangla:null,is_button_visible:0,is_app_download_button_visible:0,status:1,file_url_mobile:"https://nagad.com.bd/uploads/slider/PHjlGa7MIP478eiSkJAJl91C2i5LjevNCgDJ6aHv.png",video_link:null,text_colour:"white",button_colour:"red",content_position_x:"15",content_position_y:"33",play_button_position_x:"50",play_button_position_y:"50",deleted_at:null,created_at:"2022-01-19 11:34:48",updated_at:"2022-01-27 11:40:12"},{id:22,page_id:1,file_url_web:"https://nagad.com.bd/uploads/slider/5mRv6xLxFzoVH7Oi96Pv2lOPxq86jbH3jemQWZEs.jpg",file_url_web_bangla:"https://nagad.com.bd/uploads/slider/SXdjMcPZ4c0Jac4uspyy1DLIGqOKu2ZhcV63hs5w.jpg",file_url_mobile_bangla:"https://nagad.com.bd/uploads/slider/nGo5M9DxaZEut7KSXlswIiTZZPbsvpCyQzUZk2m4.jpg",button_text_english:null,button_text_bangla:null,button_action:null,heading_english:null,heading_bangla:null,subtitle_english:null,subtitle_bangla:null,is_button_visible:0,is_app_download_button_visible:0,status:1,file_url_mobile:"https://nagad.com.bd/uploads/slider/EHGn2CAAOdq26KJZHkiDxiwCmZTlD2CCItrrCHkK.jpg",video_link:"https://www.youtube.com/watch?v=dCboPK9Hho4",text_colour:"white",button_colour:"red",content_position_x:"83.41926574707031",content_position_y:"46.33335537380643",play_button_position_x:"47.604166666666664",play_button_position_y:"77.29166666666667",deleted_at:null,created_at:"2022-01-26 14:40:17",updated_at:"2022-03-06 09:58:54"},{id:34,page_id:1,file_url_web:"https://nagad.com.bd/uploads/slider/acadMbaenDcdjlyF1BhkaSPA5JjwnEq1rCYVunH4.jpg",file_url_web_bangla:"https://nagad.com.bd/uploads/slider/YC5pMTwzjAUNcjsFdijDZe7NMV04GCYkRX5UibLY.jpg",file_url_mobile_bangla:"https://nagad.com.bd/uploads/slider/uzasWFiPBBcLVj4rnKPF06bMEQ1iy9e0RlDcocdO.png",button_text_english:"Learn More",button_text_bangla:"বিস্তারিত",button_action:"https://nagadislamic.com.bd/bn/",heading_english:"Download Nagad App and Easily Activate Islamic Account",heading_bangla:"নগদ ইসলামিক একাউন্ট এক্টিভেট করুন খুব সহজে",subtitle_english:null,subtitle_bangla:null,is_button_visible:1,is_app_download_button_visible:0,status:1,file_url_mobile:"https://nagad.com.bd/uploads/slider/4xsuWPZTOYQT1NWhqe8YP0oSuZlU34EGIzRowyYK.png",video_link:null,text_colour:"white",button_colour:"red",content_position_x:"7.607421875",content_position_y:"32.50868055555556",play_button_position_x:"50",play_button_position_y:"50",deleted_at:null,created_at:"2022-03-03 13:12:51",updated_at:"2022-03-09 06:43:01"}],staticCover:{id:7,title_english:"Lorem ipsum",title_bangla:"ক্যাশ আউট",description_english:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum saepe excepturi, veniam quis sed incidunt dolore in eos, laborum alias? Doloremque tenetur voluptatem explicabo facilis sequi pariatur velit inventore nesciunt corporis exercitationem, animi eligendi similique vero dolor voluptatibus quibusdam a molestias cumque recusandae quos sapiente sit possimus rerum alias. Quisquam corrupti accusantium laborum cumque alias incidunt, illum ipsa perspiciatis reiciendis at molestiae rem, adipisci temporibus quidem officia. Cum veniam laudantium molestiae sapiente, possimus molestias error, dolore culpa animi, cumque asperiores. Delectus repellendus dolorum laudantium similique maiores aliquam doloribus totam ipsam consequatur molestiae. Cupiditate ratione maxime fugiat et? Nihil, nemo! Quisquam corrupti accusantium laborum cumque alias incidunt, illum ipsa perspiciatis reiciendis at molestiae rem, adipisci temporibus quidem officia. Cum veniam laudantium molestiae sapiente, possimus molestias error, dolore culpa animi, cumque asperiores. Delectus repellendus dolorum laudantium similique maiores aliquam doloribus totam ipsam consequatur molestiae. Cupiditate ratione maxime fugiat et? Nihil, nemo!",short_description_english:null,short_description_bangla:null,description_bangla:"আপনার নগদ অ্যাকাউন্টে থেকে টাকা উত্তোলন করুন",file_url_thumbnail:"https://nagad.com.bd/uploads/service/1JLMSYH4rr4XsE7BNPK6SsaT9x9tCObnPrnAIqpi.png",file_url_web:"https://nagad.com.bd/uploads/service/Kkq1hfvGtHRj1NPZVI2AlBzGV4phVJjO6u8Tva5n.jpg",file_url_mobile:"https://nagad.com.bd/uploads/service/XLWt68WOFMfBmyDoREOQzxfuFBBlao2vaY0fD3db.jpg",file_url_web_bangla:"https://nagad.com.bd/uploads/service/TjgkE0MdBS9dLjQ2DnvQJBCU0BLyhQqBTQtu5nrM.jpg",file_url_mobile_bangla:"https://nagad.com.bd/uploads/service/XrE944VUv9nCqkwVvVwjKg1hB7w4JAmIzrW41Svm.jpg",slug:"cash-out",status:1}}}},v=(n(845),n(13)),component=Object(v.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"campaignTemplate"},[n("CoverSlider",{attrs:{sliders:e.coverSliders}}),e._v(" "),n("TextCard",{attrs:{serviceTextCard:e.staticCover}}),e._v(" "),n("OfferSummeryCards"),e._v(" "),n("MultipleMerchantInfo"),e._v(" "),n("ExpandableTextCard",{attrs:{serviceTextCard:e.staticCover,lineLimit:"7",alignText:"justify"}}),e._v(" "),n("ExpandableTextCard",{attrs:{serviceTextCard:e.staticCover,lineLimit:"7",alignText:"justify"}})],1)}),[],!1,null,"374284d8",null);t.default=component.exports}}]);