(window.webpackJsonp=window.webpackJsonp||[]).push([[40,35],{525:function(e,t,o){var content=o(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("15d9b117",content,!0,{sourceMap:!1})},526:function(e,t,o){var content=o(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(32).default)("adfb76ea",content,!0,{sourceMap:!1})},528:function(e,t,o){"use strict";o.r(t);var d={props:{show:{type:Boolean,default:!1},videoLink:{type:String}},data:function(){return{videoId:""}},methods:{videoID:function(e){this.videoId=this.$youtube.getIdFromURL(e)}},updated:function(){this.videoID(this.videoLink)}},l=(o(530),o(12)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("div",{staticClass:"videoPopup",on:{click:function(t){return e.$emit("close")},wheel:function(e){e.preventDefault()},touchmove:function(e){e.preventDefault()},scroll:function(e){e.preventDefault()}}},[o("div",{staticClass:"videoPopup-inner",on:{click:function(e){e.stopPropagation()}}},[o("div",{staticClass:"close-button"},[o("button",{attrs:{title:"Close"},on:{click:function(t){return e.$emit("close")}}})]),e._v(" "),o("div",{staticClass:"video-frame"},[o("client-only",{attrs:{placeholder:"Loading..."}},[o("youtube",{attrs:{"video-id":e.videoId,"player-width":"100%","player-height":"100%","player-vars":{autoplay:0}}})],1)],1)])]):e._e()}),[],!1,null,"1ea665c2",null);t.default=component.exports},530:function(e,t,o){"use strict";o(525)},531:function(e,t,o){var d=o(31),l=o(65),r=o(321),n=d(!1),c=l(r);n.push([e.i,".videoPopup[data-v-1ea665c2]{position:fixed;left:0;top:0;height:100vh;width:100vw;background:rgba(0,0,0,.25);display:flex;justify-content:center;align-items:center;z-index:1000}.videoPopup-inner[data-v-1ea665c2]{margin:10px;position:relative;width:100%;height:290px;padding:7px;border-radius:25px;background:linear-gradient(161.04deg,rgba(255,249,244,.7) -58.16%,rgba(255,250,245,.182) 76.42%);border:1px solid #fff;box-sizing:border-box;box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px)}.videoPopup-inner .close-button[data-v-1ea665c2]{position:absolute;right:25px;top:25px;height:36px;width:36px;background:#fff;border-radius:100px;overflow:hidden}.videoPopup-inner .close-button button[data-v-1ea665c2]{border:none;background:url("+c+") no-repeat 50%;background-size:22px 22px;filter:brightness(0) invert(.4);height:100%;width:100%}.videoPopup-inner .video-frame[data-v-1ea665c2]{height:100%;border-radius:18px;overflow:hidden}.videoPopup-inner .video-frame>div[data-v-1ea665c2]{height:100%}.videoPopup-inner .video-frame>div iframe[data-v-1ea665c2]{width:100%;height:100%}@media screen and (min-width:768px){.videoPopup-inner[data-v-1ea665c2]{width:1050px;height:590px;padding:15px;border-radius:30px}}",""]),e.exports=n},532:function(e,t,o){"use strict";o(526)},533:function(e,t,o){var d=o(31)(!1);d.push([e.i,".cover-slider .cover-slide[data-v-7e51be34]{position:relative}.cover-slider .cover-slide .slide-text[data-v-7e51be34]{position:absolute;top:85px;left:0;bottom:85px;z-index:2;width:100%;color:#fcfcfc;text-align:center}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{width:100%;padding:0 25px;margin-bottom:10px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:24px;font-weight:700;line-height:1.1;letter-spacing:1px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-weight:400;font-size:15px;line-height:32px;letter-spacing:.75px}.cover-slider .cover-slide .slide-text .texts.red[data-v-7e51be34]{color:#f91320}.cover-slider .cover-slide .slide-text .texts.orange[data-v-7e51be34]{color:#d0392c}.cover-slider .cover-slide .slide-text .texts.black[data-v-7e51be34]{color:#000}.cover-slider .cover-slide .slide-text .texts.white[data-v-7e51be34]{color:#fff}.cover-slider .cover-slide .slide-text .texts.brown[data-v-7e51be34]{color:#a97c57}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:5px 16px;font-size:15px;min-width:135px}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]{background:#f91320;border:2px solid #f91320}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]:hover{background:#fcfcfc;color:#f91320}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]{background:#d0392c;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]:hover{background:#fcfcfc;color:#d0392c}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]{background:#000;border:2px solid #000}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]:hover{background:#fcfcfc;color:#000}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]{background:#fcfcfc;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]:hover{background:#d0392c;color:#fcfcfc}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]{background:#a97c57;border:2px solid #a97c57}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]:hover{background:#fcfcfc;color:#a97c57}.cover-slider .cover-slide .slide-image[data-v-7e51be34]{z-index:1}.cover-slider .cover-slide .slide-image img[data-v-7e51be34]{width:100%!important}@media screen and (min-width:768px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{top:33%;left:10%;width:40%;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{padding:0}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:10px 24px;position:relative;bottom:unset;left:unset;transform:translateX(0)}}@media screen and (min-width:1024px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{width:500px;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{margin-bottom:5px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:40px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-size:16px}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:16px 24px}}",""]),e.exports=d},534:function(e,t,o){"use strict";o.r(t);var d={name:"CoverSlider",components:{VideoPopup:o(528).default},props:{sliders:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{videoLink:"",videoPopup:!1}},methods:{openVideoPopUp:function(e){this.videoLink=e,this.videoLink?this.videoPopup=!0:alert("Video url not found!")}}},l=(o(532),o(12)),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"cover-slider"},[e.sliders.length>0?o("div",[o("client-only",[o("carousel",{attrs:{autoplay:e.sliders.length>1,items:1,loop:e.sliders.length>1,nav:!1,autoplayTimeout:this.$store.state.sliderTimeOut}},e._l(e.sliders,(function(t){return o("div",{key:t.id,staticClass:"cover-slide item"},[o("div",{staticClass:"slide-text",style:[e.$device.isDesktop?{top:t.content_position_y+"%",left:t.content_position_x+"%"}:"",e.$device.isMobile?{top:t.mobile_content_position_y+"%"}:""]},[o("div",{staticClass:"texts",class:[t.text_colour]},["en"==e.$i18n.locale?o("h1",[e._v("\n                "+e._s(t.heading_english)+"\n              ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("h1",{staticClass:"font-bn"},[e._v("\n                "+e._s(t.heading_bangla)+"\n              ")]):e._e(),e._v(" "),"en"==e.$i18n.locale?o("p",[e._v("\n                "+e._s(t.subtitle_english)+"\n              ")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("p",{staticClass:"font-bn"},[e._v("\n                "+e._s(t.subtitle_bangla)+"\n              ")]):e._e()]),e._v(" "),t.is_button_visible?o("div",["en"==e.$i18n.locale?o("a",{staticClass:"theme-btn slide-btn",class:[t.button_colour],attrs:{href:t.button_action,exact:""}},[e._v(e._s(t.button_text_english))]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("a",{staticClass:"theme-btn slide-btn font-bn",class:[t.button_colour],attrs:{href:t.button_action}},[e._v(e._s(t.button_text_bangla))]):e._e()]):e._e()]),e._v(" "),t.video_link?o("div",{staticClass:"video-play-btn",style:[e.$device.isDesktop?{top:t.play_button_position_y+"%",left:t.play_button_position_x+"%"}:"",e.$device.isMobile?{top:t.mobile_play_button_position_x+"%",left:t.mobileplay_button_position_y+"%"}:""]},[o("button",{attrs:{title:"Play Video"},on:{click:function(o){return e.openVideoPopUp(t.video_link)}}})]):e._e(),e._v(" "),o("div",{staticClass:"slide-image"},["en"==e.$i18n.locale?o("picture",[o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":t.file_url_web}}),e._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.file_url_mobile,alt:""}})]):e._e(),e._v(" "),"bn"==e.$i18n.locale?o("picture",[o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":t.file_url_web_bangla}}),e._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.file_url_mobile_bangla,alt:""}})]):e._e()])])})),0)],1)],1):e._e(),e._v(" "),o("VideoPopup",{attrs:{videoLink:e.videoLink,show:e.videoPopup},on:{close:function(t){e.videoPopup=!1},open:function(t){e.videoPopup=!0}}})],1)}),[],!1,null,"7e51be34",null);t.default=component.exports}}]);