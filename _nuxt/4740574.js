(window.webpackJsonp=window.webpackJsonp||[]).push([[75,14,19,24,52,54,59],{1027:function(e,t,o){"use strict";o.r(t);var n=o(10),r=(o(30),o(498)),l=o(503),d=o(555),c=o(586),v={name:"CampaignTemplate",layout:"theme-layout",components:{CoverSlider:r.default,PageIntro:l.default,CampaignDetails:d.default,RelatedCampaign:c.default},data:function(){return{coverSliders:[],heading:[],details:null,relatedCampaign:[]}},methods:{getCoverSlider:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/get-campaign-template-details/".concat(e.$route.params.slug));case 2:o=t.sent,e.coverSliders=o.data.data.slider,e.heading=o.data.data.heading[0],e.details=o.data.data.details[0],"en"==e.$i18n.locale&&e.$store.commit("setCurrentPageTitle",e.heading.title_english),"bn"==e.$i18n.locale&&e.$store.commit("setCurrentPageTitle",e.heading.title_bangla);case 8:case"end":return t.stop()}}),t)})))()},getRelatedCampaign:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("get-related-campaign");case 2:o=t.sent,e.relatedCampaign=o.data.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.getCoverSlider(),this.getRelatedCampaign()}},f=(o(883),o(13)),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{staticClass:"campaignTemplate"},[o("CoverSlider",{attrs:{sliders:e.coverSliders}}),e._v(" "),o("PageIntro",{attrs:{pageHeading:e.heading}}),e._v(" "),o("CampaignDetails",{attrs:{pageDetails:e.details}}),e._v(" "),o("RelatedCampaign",{attrs:{relatedCampaign:e.relatedCampaign}})],1)}),[],!1,null,"024c8394",null);t.default=component.exports;installComponents(component,{PageIntro:o(503).default,CampaignDetails:o(555).default})},491:function(e,t,o){var content=o(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(34).default)("15d9b117",content,!0,{sourceMap:!1})},492:function(e,t,o){var content=o(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(34).default)("adfb76ea",content,!0,{sourceMap:!1})},493:function(e,t,o){"use strict";o.r(t);var n={props:{show:{type:Boolean,default:!1},videoLink:{type:String}},data:function(){return{videoId:""}},methods:{videoID:function(e){this.videoId=this.$youtube.getIdFromURL(e)}},updated:function(){this.videoID(this.videoLink)}},r=(o(494),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("div",{staticClass:"videoPopup",on:{click:function(t){return e.$emit("close")},wheel:function(e){e.preventDefault()},touchmove:function(e){e.preventDefault()},scroll:function(e){e.preventDefault()}}},[o("div",{staticClass:"videoPopup-inner",on:{click:function(e){e.stopPropagation()}}},[o("div",{staticClass:"close-button"},[o("button",{attrs:{title:"Close"},on:{click:function(t){return e.$emit("close")}}})]),e._v(" "),o("div",{staticClass:"video-frame"},[o("client-only",{attrs:{placeholder:"Loading..."}},[o("youtube",{attrs:{"video-id":e.videoId,"player-width":"100%","player-height":"100%","player-vars":{autoplay:0}}})],1)],1)])]):e._e()}),[],!1,null,"1ea665c2",null);t.default=component.exports},494:function(e,t,o){"use strict";o(491)},495:function(e,t,o){var n=o(33),r=o(63),l=o(296),d=n(!1),c=r(l);d.push([e.i,".videoPopup[data-v-1ea665c2]{position:fixed;left:0;top:0;height:100vh;width:100vw;background:rgba(0,0,0,.25);display:flex;justify-content:center;align-items:center;z-index:1000}.videoPopup-inner[data-v-1ea665c2]{margin:10px;position:relative;width:100%;height:290px;padding:7px;border-radius:25px;background:linear-gradient(161.04deg,rgba(255,249,244,.7) -58.16%,rgba(255,250,245,.182) 76.42%);border:1px solid #fff;box-sizing:border-box;box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px)}.videoPopup-inner .close-button[data-v-1ea665c2]{position:absolute;right:25px;top:25px;height:36px;width:36px;background:#fff;border-radius:100px;overflow:hidden}.videoPopup-inner .close-button button[data-v-1ea665c2]{border:none;background:url("+c+") no-repeat 50%;background-size:22px 22px;filter:brightness(0) invert(.4);height:100%;width:100%}.videoPopup-inner .video-frame[data-v-1ea665c2]{height:100%;border-radius:18px;overflow:hidden}.videoPopup-inner .video-frame>div[data-v-1ea665c2]{height:100%}.videoPopup-inner .video-frame>div iframe[data-v-1ea665c2]{width:100%;height:100%}@media screen and (min-width:768px){.videoPopup-inner[data-v-1ea665c2]{width:1050px;height:590px;padding:15px;border-radius:30px}}",""]),e.exports=d},496:function(e,t,o){"use strict";o(492)},497:function(e,t,o){var n=o(33)(!1);n.push([e.i,".cover-slider .cover-slide[data-v-7e51be34]{position:relative}.cover-slider .cover-slide .slide-text[data-v-7e51be34]{position:absolute;top:85px;left:0;bottom:85px;z-index:2;width:100%;color:#fcfcfc;text-align:center}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{width:100%;padding:0 25px;margin-bottom:10px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:24px;font-weight:700;line-height:1.1;letter-spacing:1px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-weight:400;font-size:15px;line-height:32px;letter-spacing:.75px}.cover-slider .cover-slide .slide-text .texts.red[data-v-7e51be34]{color:#f91320}.cover-slider .cover-slide .slide-text .texts.orange[data-v-7e51be34]{color:#d0392c}.cover-slider .cover-slide .slide-text .texts.black[data-v-7e51be34]{color:#000}.cover-slider .cover-slide .slide-text .texts.white[data-v-7e51be34]{color:#fff}.cover-slider .cover-slide .slide-text .texts.brown[data-v-7e51be34]{color:#a97c57}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:5px 16px;font-size:15px;min-width:135px}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]{background:#f91320;border:2px solid #f91320}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]:hover{background:#fcfcfc;color:#f91320}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]{background:#d0392c;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]:hover{background:#fcfcfc;color:#d0392c}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]{background:#000;border:2px solid #000}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]:hover{background:#fcfcfc;color:#000}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]{background:#fcfcfc;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]:hover{background:#d0392c;color:#fcfcfc}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]{background:#a97c57;border:2px solid #a97c57}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]:hover{background:#fcfcfc;color:#a97c57}.cover-slider .cover-slide .slide-image[data-v-7e51be34]{z-index:1}.cover-slider .cover-slide .slide-image img[data-v-7e51be34]{width:100%!important}@media screen and (min-width:768px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{top:33%;left:10%;width:40%;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{padding:0}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:10px 24px;position:relative;bottom:unset;left:unset;transform:translateX(0)}}@media screen and (min-width:1024px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{width:500px;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{margin-bottom:5px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:40px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-size:16px}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:16px 24px}}",""]),e.exports=n},498:function(e,t,o){"use strict";o.r(t);var n={name:"CoverSlider",components:{VideoPopup:o(493).default},props:{sliders:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{videoLink:"",videoPopup:!1}},methods:{openVideoPopUp:function(e){this.videoLink=e,this.videoLink?this.videoPopup=!0:alert("Video url not found!")}}},r=(o(496),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"cover-slider"},[e.sliders.length>0?o("div",[o("client-only",[o("carousel",{attrs:{autoplay:e.sliders.length>1,items:1,loop:e.sliders.length>1,nav:!1,autoplayTimeout:this.$store.state.sliderTimeOut}},e._l(e.sliders,(function(t){return o("div",{key:t.id,staticClass:"cover-slide item"},[o("div",{staticClass:"slide-text",style:[e.$device.isDesktop?{top:t.content_position_y+"%",left:t.content_position_x+"%"}:"",e.$device.isMobile?{top:t.mobile_content_position_y+"%"}:""]},[o("div",{staticClass:"texts",class:[t.text_colour]},["en"==e.$i18n.locale?o("h1",[e._v("\n                "+e._s(t.heading_english)+"\n              ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("h1",{staticClass:"font-bn"},[e._v("\n                "+e._s(t.heading_bangla)+"\n              ")]):e._e(),e._v(" "),"en"==e.$i18n.locale?o("p",[e._v("\n                "+e._s(t.subtitle_english)+"\n              ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("p",{staticClass:"font-bn"},[e._v("\n                "+e._s(t.subtitle_bangla)+"\n              ")]):e._e()]),e._v(" "),t.is_button_visible?o("div",["en"==e.$i18n.locale?o("a",{staticClass:"theme-btn slide-btn",class:[t.button_colour],attrs:{href:t.button_action,exact:""}},[e._v(e._s(t.button_text_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("a",{staticClass:"theme-btn slide-btn font-bn",class:[t.button_colour],attrs:{href:t.button_action}},[e._v(e._s(t.button_text_bangla))]):e._e()]):e._e()]),e._v(" "),t.video_link?o("div",{staticClass:"video-play-btn",style:[e.$device.isDesktop?{top:t.play_button_position_y+"%",left:t.play_button_position_x+"%"}:"",e.$device.isMobile?{top:t.mobile_play_button_position_x+"%",left:t.mobileplay_button_position_y+"%"}:""]},[o("button",{attrs:{title:"Play Video"},on:{click:function(o){return e.openVideoPopUp(t.video_link)}}})]):e._e(),e._v(" "),o("div",{staticClass:"slide-image"},["en"==e.$i18n.locale?o("picture",[o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":t.file_url_web}}),e._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.file_url_mobile,alt:""}})]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("picture",[o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":t.file_url_web_bangla}}),e._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.file_url_mobile_bangla,alt:""}})]):e._e()])])})),0)],1)],1):e._e(),e._v(" "),o("VideoPopup",{attrs:{videoLink:e.videoLink,show:e.videoPopup},on:{close:function(t){e.videoPopup=!1},open:function(t){e.videoPopup=!0}}})],1)}),[],!1,null,"7e51be34",null);t.default=component.exports},501:function(e,t,o){var content=o(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(34).default)("e6b3a1ba",content,!0,{sourceMap:!1})},503:function(e,t,o){"use strict";o.r(t);var n={props:{pageHeading:{type:null,required:!0}}},r=(o(507),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"page-intro "},[e.pageHeading?o("b-container",[o("div",{staticClass:"section-heading"},["en"==e.$i18n.locale?o("h2",[e._v(e._s(e.pageHeading.title_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("h2",{staticClass:"font-bn"},[e._v(e._s(e.pageHeading.title_bangla))]):e._e()]),e._v(" "),o("div",{staticClass:"intro-text text-center"},["en"==e.$i18n.locale?o("p",[e._v(e._s(e.pageHeading.short_description_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("p",{staticClass:"font-bn"},[e._v(e._s(e.pageHeading.short_description_bangla))]):e._e()])]):e._e()],1)}),[],!1,null,"0c580544",null);t.default=component.exports},507:function(e,t,o){"use strict";o(501)},508:function(e,t,o){var n=o(33)(!1);n.push([e.i,".page-intro[data-v-0c580544]{padding-top:25px}.page-intro .section-heading[data-v-0c580544]{padding-bottom:10px}.page-intro .intro-text p[data-v-0c580544]{font-size:14px;font-weight:400;line-height:25px;letter-spacing:.75px;color:#262338}@media screen and (min-width:768px){.page-intro[data-v-0c580544]{padding-top:30px}.page-intro .intro-text p[data-v-0c580544]{font-size:16px;line-height:28px}}",""]),e.exports=n},513:function(e,t,o){var content=o(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(34).default)("3e6fc39c",content,!0,{sourceMap:!1})},533:function(e,t,o){"use strict";o(513)},534:function(e,t,o){var n=o(33)(!1);n.push([e.i,".offer-card[data-v-3faf146e]{border-radius:20px;padding:5px;background:linear-gradient(118.64deg,rgba(255,243,233,.7) -4.78%,hsla(0,0%,100%,.7) 64.5%,rgba(255,243,233,.7) 111.91%);border:1px solid #fff;box-shadow:0 4px 17px rgba(78,75,102,.25);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);margin-bottom:15px}.offer-card-body[data-v-3faf146e]{border-radius:15px;overflow:hidden}.offer-card-body a[data-v-3faf146e]{display:block}.offer-card-body a img[data-v-3faf146e]{width:100%;aspect-ratio:16/9;-o-object-fit:cover;object-fit:cover}.offer-card-footer[data-v-3faf146e]{padding:15px;display:flex;justify-content:center;align-content:center;grid-gap:12px;gap:12px}@media screen and (min-width:768px){.offer-card[data-v-3faf146e]{margin-bottom:20px}}",""]),e.exports=n},537:function(e,t,o){"use strict";o.r(t);var n={props:{offerCard:{type:null,default:[]}}},r=(o(533),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"offer-card"},[o("div",{staticClass:"offer-card-body"},[o("nuxt-link",{attrs:{to:{path:"/campaign/",query:{offer:e.offerCard.slug}}}},["en"==e.$i18n.locale?o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.offerCard.file_url_web,alt:"offer image"}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.offerCard.file_url_web_bangla,alt:"offer image"}}):e._e()])],1),e._v(" "),o("div",{staticClass:"offer-card-footer"},["en"==e.$i18n.locale?o("nuxt-link",{staticClass:"theme-btn",attrs:{to:{path:"/campaign/",query:{offer:e.offerCard.slug}}}},[e._v("View Offer")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("nuxt-link",{staticClass:"theme-btn font-bn",attrs:{to:{path:"/bn/campaign/",query:{offer:e.offerCard.slug}}}},[e._v("অফার দেখুন")]):e._e()],1)])}),[],!1,null,"3faf146e",null);t.default=component.exports},539:function(e,t,o){var content=o(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(34).default)("342f05d3",content,!0,{sourceMap:!1})},540:function(e,t,o){var content=o(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(34).default)("162a30a5",content,!0,{sourceMap:!1})},555:function(e,t,o){"use strict";o.r(t);var n={props:{pageDetails:{type:null,required:!0}}},r=(o(570),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"campaignDetails"},[o("b-container",[o("div",{staticClass:"title"},["en"==e.$i18n.locale?o("h4",[e._v("Campaign Details:")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("h4",{staticClass:"font-bn"},[e._v("অফারের বিস্তারিত:")]):e._e()]),e._v(" "),e.pageDetails?o("div",{staticClass:"details"},["en"==e.$i18n.locale?o("p",{domProps:{innerHTML:e._s(e.pageDetails.description_english)}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("p",{staticClass:"font-bn",domProps:{innerHTML:e._s(e.pageDetails.description_bangla)}}):e._e()]):e._e()])],1)}),[],!1,null,"29738629",null);t.default=component.exports},570:function(e,t,o){"use strict";o(539)},571:function(e,t,o){var n=o(33)(!1);n.push([e.i,".campaignDetails[data-v-29738629]{padding:25px 0 0}.campaignDetails .title[data-v-29738629]{margin-bottom:5px}.campaignDetails .title h4[data-v-29738629]{font-weight:700;font-size:15px;line-height:20px;color:#262338}.campaignDetails .details p[data-v-29738629]{font-weight:400;font-size:12px;line-height:23px;letter-spacing:.75px;color:#262338}@media screen and (min-width:768px){.campaignDetails[data-v-29738629]{padding:50px 0 0}.campaignDetails .title[data-v-29738629]{margin-bottom:20px}.campaignDetails .title h4[data-v-29738629]{font-size:24px;line-height:32px}.campaignDetails .details p[data-v-29738629]{font-size:16px;line-height:28px}}",""]),e.exports=n},572:function(e,t,o){"use strict";o(540)},573:function(e,t,o){var n=o(33)(!1);n.push([e.i,".all-campaign[data-v-f580f5d6]{padding:50px 0}.all-campaign .view-more-btn[data-v-f580f5d6]{margin-top:20px}@media screen and (min-width:768px){.all-campaign[data-v-f580f5d6]{padding:50px 0}.all-campaign .campaigns[data-v-f580f5d6]{padding-top:30px}}",""]),e.exports=n},586:function(e,t,o){"use strict";o.r(t);var n={components:{OfferCard:o(537).default},props:{relatedCampaign:{type:Array,required:!0}},data:function(){return{}}},r=(o(572),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"all-campaign"},[o("b-container",[o("div",{staticClass:"section-heading"},["en"==e.$i18n.locale?o("h2",[e._v("Other Offers")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("h2",{staticClass:"font-bn"},[e._v("অন্যান্য অফার")]):e._e()]),e._v(" "),e.relatedCampaign.length>0?o("div",{staticClass:"campaigns"},[o("b-row",e._l(e.relatedCampaign,(function(e,t){return o("b-col",{key:t,attrs:{md:"6",lg:"4"}},[o("OfferCard",{attrs:{offerCard:e}})],1)})),1)],1):e._e()])],1)}),[],!1,null,"f580f5d6",null);t.default=component.exports},781:function(e,t,o){var content=o(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(34).default)("513971f2",content,!0,{sourceMap:!1})},883:function(e,t,o){"use strict";o(781)},884:function(e,t,o){var n=o(33)(!1);n.push([e.i,"main.campaignTemplate[data-v-024c8394]{overflow:hidden}",""]),e.exports=n}}]);