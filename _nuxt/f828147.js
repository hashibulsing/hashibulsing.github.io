(window.webpackJsonp=window.webpackJsonp||[]).push([[70,2,3,54,59],{491:function(t,e,l){var content=l(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(34).default)("15d9b117",content,!0,{sourceMap:!1})},492:function(t,e,l){var content=l(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(34).default)("adfb76ea",content,!0,{sourceMap:!1})},493:function(t,e,l){"use strict";l.r(e);var o={props:{show:{type:Boolean,default:!1},videoLink:{type:String}},data:function(){return{videoId:""}},methods:{videoID:function(t){this.videoId=this.$youtube.getIdFromURL(t)}},updated:function(){this.videoID(this.videoLink)}},d=(l(494),l(13)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.show?l("div",{staticClass:"videoPopup",on:{click:function(e){return t.$emit("close")},wheel:function(t){t.preventDefault()},touchmove:function(t){t.preventDefault()},scroll:function(t){t.preventDefault()}}},[l("div",{staticClass:"videoPopup-inner",on:{click:function(t){t.stopPropagation()}}},[l("div",{staticClass:"close-button"},[l("button",{attrs:{title:"Close"},on:{click:function(e){return t.$emit("close")}}})]),t._v(" "),l("div",{staticClass:"video-frame"},[l("client-only",{attrs:{placeholder:"Loading..."}},[l("youtube",{attrs:{"video-id":t.videoId,"player-width":"100%","player-height":"100%","player-vars":{autoplay:0}}})],1)],1)])]):t._e()}),[],!1,null,"1ea665c2",null);e.default=component.exports},494:function(t,e,l){"use strict";l(491)},495:function(t,e,l){var o=l(33),d=l(63),n=l(296),r=o(!1),c=d(n);r.push([t.i,".videoPopup[data-v-1ea665c2]{position:fixed;left:0;top:0;height:100vh;width:100vw;background:rgba(0,0,0,.25);display:flex;justify-content:center;align-items:center;z-index:1000}.videoPopup-inner[data-v-1ea665c2]{margin:10px;position:relative;width:100%;height:290px;padding:7px;border-radius:25px;background:linear-gradient(161.04deg,rgba(255,249,244,.7) -58.16%,rgba(255,250,245,.182) 76.42%);border:1px solid #fff;box-sizing:border-box;box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px)}.videoPopup-inner .close-button[data-v-1ea665c2]{position:absolute;right:25px;top:25px;height:36px;width:36px;background:#fff;border-radius:100px;overflow:hidden}.videoPopup-inner .close-button button[data-v-1ea665c2]{border:none;background:url("+c+") no-repeat 50%;background-size:22px 22px;filter:brightness(0) invert(.4);height:100%;width:100%}.videoPopup-inner .video-frame[data-v-1ea665c2]{height:100%;border-radius:18px;overflow:hidden}.videoPopup-inner .video-frame>div[data-v-1ea665c2]{height:100%}.videoPopup-inner .video-frame>div iframe[data-v-1ea665c2]{width:100%;height:100%}@media screen and (min-width:768px){.videoPopup-inner[data-v-1ea665c2]{width:1050px;height:590px;padding:15px;border-radius:30px}}",""]),t.exports=r},496:function(t,e,l){"use strict";l(492)},497:function(t,e,l){var o=l(33)(!1);o.push([t.i,".cover-slider .cover-slide[data-v-7e51be34]{position:relative}.cover-slider .cover-slide .slide-text[data-v-7e51be34]{position:absolute;top:85px;left:0;bottom:85px;z-index:2;width:100%;color:#fcfcfc;text-align:center}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{width:100%;padding:0 25px;margin-bottom:10px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:24px;font-weight:700;line-height:1.1;letter-spacing:1px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-weight:400;font-size:15px;line-height:32px;letter-spacing:.75px}.cover-slider .cover-slide .slide-text .texts.red[data-v-7e51be34]{color:#f91320}.cover-slider .cover-slide .slide-text .texts.orange[data-v-7e51be34]{color:#d0392c}.cover-slider .cover-slide .slide-text .texts.black[data-v-7e51be34]{color:#000}.cover-slider .cover-slide .slide-text .texts.white[data-v-7e51be34]{color:#fff}.cover-slider .cover-slide .slide-text .texts.brown[data-v-7e51be34]{color:#a97c57}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:5px 16px;font-size:15px;min-width:135px}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]{background:#f91320;border:2px solid #f91320}.cover-slider .cover-slide .slide-text .slide-btn.red[data-v-7e51be34]:hover{background:#fcfcfc;color:#f91320}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]{background:#d0392c;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.orange[data-v-7e51be34]:hover{background:#fcfcfc;color:#d0392c}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]{background:#000;border:2px solid #000}.cover-slider .cover-slide .slide-text .slide-btn.black[data-v-7e51be34]:hover{background:#fcfcfc;color:#000}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]{background:#fcfcfc;border:2px solid #d0392c}.cover-slider .cover-slide .slide-text .slide-btn.white[data-v-7e51be34]:hover{background:#d0392c;color:#fcfcfc}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]{background:#a97c57;border:2px solid #a97c57}.cover-slider .cover-slide .slide-text .slide-btn.brown[data-v-7e51be34]:hover{background:#fcfcfc;color:#a97c57}.cover-slider .cover-slide .slide-image[data-v-7e51be34]{z-index:1}.cover-slider .cover-slide .slide-image img[data-v-7e51be34]{width:100%!important}@media screen and (min-width:768px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{top:33%;left:10%;width:40%;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{padding:0}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:10px 24px;position:relative;bottom:unset;left:unset;transform:translateX(0)}}@media screen and (min-width:1024px){.cover-slider .cover-slide .slide-text[data-v-7e51be34]{width:500px;text-align:left}.cover-slider .cover-slide .slide-text .texts[data-v-7e51be34]{margin-bottom:5px}.cover-slider .cover-slide .slide-text .texts h1[data-v-7e51be34]{font-size:40px}.cover-slider .cover-slide .slide-text .texts p[data-v-7e51be34]{font-size:16px}.cover-slider .cover-slide .slide-text .slide-btn[data-v-7e51be34]{padding:16px 24px}}",""]),t.exports=o},498:function(t,e,l){"use strict";l.r(e);var o={name:"CoverSlider",components:{VideoPopup:l(493).default},props:{sliders:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{videoLink:"",videoPopup:!1}},methods:{openVideoPopUp:function(t){this.videoLink=t,this.videoLink?this.videoPopup=!0:alert("Video url not found!")}}},d=(l(496),l(13)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"cover-slider"},[t.sliders.length>0?l("div",[l("client-only",[l("carousel",{attrs:{autoplay:t.sliders.length>1,items:1,loop:t.sliders.length>1,nav:!1,autoplayTimeout:this.$store.state.sliderTimeOut}},t._l(t.sliders,(function(e){return l("div",{key:e.id,staticClass:"cover-slide item"},[l("div",{staticClass:"slide-text",style:[t.$device.isDesktop?{top:e.content_position_y+"%",left:e.content_position_x+"%"}:"",t.$device.isMobile?{top:e.mobile_content_position_y+"%"}:""]},[l("div",{staticClass:"texts",class:[e.text_colour]},["en"==t.$i18n.locale?l("h1",[t._v("\n                "+t._s(e.heading_english)+"\n              ")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("h1",{staticClass:"font-bn"},[t._v("\n                "+t._s(e.heading_bangla)+"\n              ")]):t._e(),t._v(" "),"en"==t.$i18n.locale?l("p",[t._v("\n                "+t._s(e.subtitle_english)+"\n              ")]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("p",{staticClass:"font-bn"},[t._v("\n                "+t._s(e.subtitle_bangla)+"\n              ")]):t._e()]),t._v(" "),e.is_button_visible?l("div",["en"==t.$i18n.locale?l("a",{staticClass:"theme-btn slide-btn",class:[e.button_colour],attrs:{href:e.button_action,exact:""}},[t._v(t._s(e.button_text_english))]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("a",{staticClass:"theme-btn slide-btn font-bn",class:[e.button_colour],attrs:{href:e.button_action}},[t._v(t._s(e.button_text_bangla))]):t._e()]):t._e()]),t._v(" "),e.video_link?l("div",{staticClass:"video-play-btn",style:[t.$device.isDesktop?{top:e.play_button_position_y+"%",left:e.play_button_position_x+"%"}:"",t.$device.isMobile?{top:e.mobile_play_button_position_x+"%",left:e.mobileplay_button_position_y+"%"}:""]},[l("button",{attrs:{title:"Play Video"},on:{click:function(l){return t.openVideoPopUp(e.video_link)}}})]):t._e(),t._v(" "),l("div",{staticClass:"slide-image"},["en"==t.$i18n.locale?l("picture",[l("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":e.file_url_web}}),t._v(" "),l("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.file_url_mobile,alt:""}})]):t._e(),t._v(" "),"bn"==t.$i18n.locale?l("picture",[l("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width:768px)","data-srcset":e.file_url_web_bangla}}),t._v(" "),l("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.file_url_mobile_bangla,alt:""}})]):t._e()])])})),0)],1)],1):t._e(),t._v(" "),l("VideoPopup",{attrs:{videoLink:t.videoLink,show:t.videoPopup},on:{close:function(e){t.videoPopup=!1},open:function(e){t.videoPopup=!0}}})],1)}),[],!1,null,"7e51be34",null);e.default=component.exports},546:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL8SURBVHgBlZaxctNAEIZ3JVNjniB+g5AZmJAK0ZEqegO7ZCaxLcMD4DwAkWyHGucNnCp0diogFCglndKRKuqJdOyeTkI6ybK8Mxkpur39dm9/r4SwhTmO2/5rPnnK958/ndw13YebHPqj6WtDxLZAsMm9U1gUwqcAq0ez5dVBsSbrTgT4BRGt3OOQNoQyPkCnyBOeCeLU80ZhI8jxaNKlDR4ttzkwRfQMiC8pgK8lYgnArkDsKVIQmS1Lr6oEGYwmR3RZyEXKDtdkp1cdo7EErq4ChGVn/CUrEDCeesNTaGgsihhwCYjPuVdTz9lL14y8I/XAZQCd73wbABtXa4B4Q7cBgwbO5GMJwiqiJtvsFJut8bpgxx/OdzjrdSDqUU/+g1Sc8ssgJFO5SFWsquRIvRoORt6DGUcBnf9D3/GWDNT9Zu7gWoBY0W2b/I4KEJKkxVdS1aQC0OVEM7WxlEnaBPSrQAi4UAlbGUSWhdhRJfv6JvIeq0zGU3f4jP9IeXPOthU9OiV3QBkDWQTwv5L0jAN9AytOJRDmxcDSlgGTPhbMFNFdPq6hrVc1NMwBs/UIzR19vSJOmEHoiAL1oM0qy3snikkayWOm/366K5Uo4rlymesEavguX6knfgZhU2dMK4nKCoYGnzs320Y5FAmaHGFAqrwo+asekv+iCFGqooUeZ5vfMzsb3FKwPU6ERgRPXp9FwM/0kcNSTxMggVwmsXM2dDyXGunoY6GpFcYSQI8gF4VKVDWsGDkW6MfmwhaWza50LClACSKbnEiSz985yc2fTcaiSI+JftCj/JqpO998u7rfPzj8Q7c2IlgvDg6Dn9+/3kKNcdWYvFOCyDCtmTu8r4Ww/aCg+68O+fwsKtWuAymAVB+dwtvzs/5v3acSokDXedBLur+hZxqAX8/vFMBiFVbFWgvRQXx0KYibTPdX6tVQC2Db+LXCJrUvpzDILxTgsaGazEKpAzSGsMlRAnIqdBIY+JFp2k2+vxpD2OREBuDxHZLcV033/QOEoYHKzY/uVQAAAABJRU5ErkJggg=="},547:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIfSURBVHgB5VUxdtNAEJ1ZcQDR0SFOgEuoMBVlfIM4NYm8fhwgygHAkhN6+wS4pYrSpUPcQLmBSxpp+LOSk2clkm3xXhr+e7LW2tX8nZ0/X0TPAN534alNzplkyEwD/S9CGTMv5rPJ8p9JrJ0FJfEPYh48NV8KRVfx5KIrhqEdEOLzmiA3Un7E9RLXG+V3AZiicJpMumJ0ZnI2nX/AEaVKUBhv+P3r6V3L/FqJ43i6pkMzwYsjl41I2iRQXM7CG0xmGPoFe29b41A3fP1BgdO2BTiKrLpL0JekSl8oaFtQcjWHrO96kZRsVm7AZD9/uXrdnK9qwsN6M1lbnJ0SPpvG1y6QSC5sxloHyNrHBo6QYowQPjKN5h0y3q9P2FxjGDwZQGSRxPakK4ZHO3B7+3P9/t2nJfrlD7pdhfCq2p0TAzKwF/TfYC+D1EJrs7leUDmzUxOEwPnlt/B3b5JaQcfo9hGacUitkDUceUVsFs4B9iVRWzcs1snzYWFGwpmQ5MgIzw0ykkCIHtwZMoc9RE37f0QS2vjXxtZVQQi6Qjcv28yvlvgRVa4c6LOm/W+RwLKPcVtQZesnCJzSAagtP9YxXDvYmOqWrWDX43oYHUqgwDEl2pw69spitHm+RYLjGdS7SKknUC9XfAjmvlYvGmtcob2iGIc2oT4oSAZaA6PCaJJU3/L77UTUE1yXWVj8RySoQY7Cjbu+HYfAUHlDz4m/YMThoEm16dsAAAAASUVORK5CYII="},548:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGJSURBVHgB7VZdUsIwEP62rc9yA+sNvIH1JOKzimE8AHAAhxT13SNwBDgBV6g3qM+Qxk1JGejQ0jYOT34znU2yme/Lz2a3QA0eXz+u0ACn5nlVjsEwvvczlRiLGjSZR+UBIaa9tX9xGaiN0ESCtJYbP5BVBOV5n29P35UihlyBRkTo83APDtAs6ENPpBym+UJ2DtCUiPpWOUFHaCBkHqE0brh7Z/mA5+HslqAX3EyU50fHttwUfCJhRt6Kmz1eePQ+HSzzi+fzjKyduwgY8BElzPO1zxuUJzUN21qozUH3QMRECYejgCOYp1qEkbI7hasI3we23xERDRnLlwkcMRDxiENqXPQ9nAFBnbN4/aZ9odY/xeM65WslkoFWHAihbSdsrpv4WolwECzYRNuOlzT1tRKJpXjo4msl8n8nrUT+6k48u6x0a7RTsSrAPOE+b74TT2dLrgF5guRabWrKHB1BSvV1Xl05GVueXbos5xtnaIxnNg8e5GTzx0EwJdhutxOIi5Yy9X2Bc+IXMLXPEsVvvksAAAAASUVORK5CYII="},549:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHSURBVHgBzVVNUtswFH7PYV/foOkJmq46XcUsuyo9Qc26Tay0B2h7AIjiwAw74AZmx9JL2IUbmBuYPdbjk+x48kdiJmGGb0YjRZa+T+/pfQrRK4M3LegPRhGRKCxtz30QyQzxxYmO/q/b39pA/gPdGcj9pY/MPjMFn798zW9vrm+f49ijNRCSkMsgVTyMRgvi39Al9hva6DkOjxrAE3PXZG4VeOZEq3P9UohMcDfJ9G6cQE/pITMr2iFEJB1rtc+9QdxlkhRzOcL+rvUgpS2g1DAw7J1j2EY78FgkqBSTbcktKg5dcR7Ul4xqyWhHQCYe6jG9MvaaLoyUPhfm0P2Ai2OtPjTZ1zgCw+7SSvDGF6ZGHQFc2/755+T96dGv+1ULx0O1Tw2AKvKFuLskAB+EreIxgCdS8jw9Pu43cuoU9nBcFKFhZ1Z/SQDIoNJG8CFyHPaVzjBOkPcULVsUtIQtU3RsmRuiDpsiKG3LJVfpgxkBoQuPzCXC+wvCwIpJ+ZApkNinZP7Ipii3MU/fm5yFE6bi0pJXZpuvIpgkQ3dox86R5HXZipEgr9SZXcv2lMITKCFSucLUBPvzam+4KkW0IJais23tH8omzDhZfNoRkJ53tYC9RDuwJur9jj/SlnAcIu5lRnpTdz9zLt0VhCaxjj65FI20OsTEPyrLa1vklgsV2ciYbx9P+YvQOAW3sSEAAAAASUVORK5CYII="},550:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7VXbUcNADJTOKSAd4A5IKiCpJPkHv6ABpwDGZwPf0AFDBZgKCBVgOkgB+ISU2JMHfoUJHxnYGfvuLHlXOnv2AI4dWBfw/ahvUE2AoA/tLPMk8p6qQxVwg9gDoJDD7eQliLLc6o3uri8+GgWYfMLDwyqIKRGl0AaEKd9tEVFAQ62DRRnqVVQSArIuQRhrdwbdMHMC/YyII0PoyboMqM0sJ0jOmNzmaZZoryt5SRXCupv106pUJJrDnriJ3JdiarcKGIAFHAgKfhn/An9AoLdP8vnV7YkyxrYof9u0gyZ06kCc1fH1vWXyDIFSdtn3lSEeQEDswwC+ss9MebkQA+RRXFaLqHT1YwGpUipe+hPBPFfWII7cMYemfGUiauWfqXOZnNZx4G61QlhatLjjciTSsfaDzVzeNps7e+SkgawNu69CCGXOhw82diDEBXmmyIx3yQX8kdlx/aHY+pKoIN/FloD8HevWMOUtGTFRCg0QWydYFVM82nLibyeatM6D3UZc855sV9r1Fz4OfAHeUJo436jQ4QAAAABJRU5ErkJggg=="},594:function(t,e,l){var content=l(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(34).default)("3d7e6710",content,!0,{sourceMap:!1})},595:function(t,e,l){var content=l(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(34).default)("1241f9de",content,!0,{sourceMap:!1})},664:function(t,e,l){"use strict";l(594)},665:function(t,e,l){var o=l(33)(!1);o.push([t.i,".view-all-jobs[data-v-1e08d325]{padding:33px 0 52px}.view-all-jobs-details .select-category[data-v-1e08d325]{padding:15px 0 0}.view-all-jobs-details .select-category__form[data-v-1e08d325]{display:flex;grid-gap:20px;gap:20px;width:95%;margin:0 auto;flex-direction:column}.view-all-jobs-details .select-category__form .form-group[data-v-1e08d325]{flex-basis:100%;margin-bottom:0}.view-all-jobs-details .select-category__form .form-group .custom-select[data-v-1e08d325]{border:none;background-color:#eff0f7}@media screen and (min-width:768px){.view-all-jobs[data-v-1e08d325]{padding:45px 0 70px}.view-all-jobs-details .select-category__form[data-v-1e08d325]{grid-gap:23px;gap:23px;flex-direction:row;width:65%}.view-all-jobs-details .select-category__form .form-group[data-v-1e08d325]{flex-basis:calc(50% - 11.5px)}}",""]),t.exports=o},666:function(t,e,l){"use strict";l(595)},667:function(t,e,l){var o=l(33)(!1);o.push([t.i,".all-job-details[data-v-59228a3b]{padding-bottom:70px}.all-job-details .all-jobs[data-v-59228a3b]{display:flex;grid-gap:26px;gap:26px;flex-direction:column}.all-job-details .all-jobs .job-details[data-v-59228a3b]{flex-basis:100%;background:linear-gradient(161.04deg,#fff9f4 -58.16%,rgba(255,250,245,.26) 76.42%);border:1px solid hsla(0,0%,100%,.2);box-shadow:0 4px 20px rgba(0,0,0,.15);-webkit-backdrop-filter:blur(62px);backdrop-filter:blur(62px);border-radius:30px;padding:25px 47px 36px 42px}.all-job-details .all-jobs .job-details-title[data-v-59228a3b]{padding-bottom:20px}.all-job-details .all-jobs .job-details-title h2[data-v-59228a3b]{font-weight:700;font-size:20px;line-height:30px;display:flex;align-items:center;letter-spacing:1px;color:#14142b}.all-job-details .all-jobs .job-details_detail_type[data-v-59228a3b]{display:flex;flex-direction:column}.all-job-details .all-jobs .job-details_detail_type .avdt .av[data-v-59228a3b]{display:flex;grid-gap:16px;gap:16px;align-items:center;padding-bottom:10px}.all-job-details .all-jobs .job-details_detail_type .avdt .av img[data-v-59228a3b]{width:24px;height:24px}.all-job-details .all-jobs .job-details_detail_type .avdt .av p[data-v-59228a3b]{font-weight:400;font-size:14px;line-height:32px;letter-spacing:1px;color:#6e7191}.all-job-details .all-jobs .job-details_detail_type .avdt .deadline p[data-v-59228a3b]{color:#f24f41}.all-job-details .all-jobs .job-details_detail .qualification[data-v-59228a3b]{display:flex;grid-gap:16px;gap:16px;align-items:center;padding-bottom:10px}.all-job-details .all-jobs .job-details_detail .qualification img[data-v-59228a3b]{width:24px;height:24px}.all-job-details .all-jobs .job-details_detail .qualification p[data-v-59228a3b]{font-weight:400;font-size:14px;line-height:32px;letter-spacing:1px;color:#6e7191}.all-job-details .all-jobs .job-details_detail .job-apply-button[data-v-59228a3b]{display:flex;flex-direction:column;align-items:center;padding-top:30px}.all-job-details .all-jobs .job-details_detail .job-apply-button .theme-btn[data-v-59228a3b]{padding:16px 36px}.all-job-details .pagination[data-v-59228a3b]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;padding-top:70px;grid-gap:20px;gap:20px}.all-job-details .pagination p[data-v-59228a3b]{color:#4e4b66;font-size:16px}.all-job-details .pagination a[data-v-59228a3b]{text-decoration:none;color:#a0a3bd}.all-job-details .pagination a[data-v-59228a3b]:hover{color:#4e4b66}.all-job-details .pagination .pagination-number[data-v-59228a3b]{display:flex;grid-gap:5px;gap:5px}.all-job-details .pagination .pagination-number a[data-v-59228a3b]{color:#a0a3bd;float:left;padding:5px 11px;text-decoration:none;border:1px solid #a0a3bd;border-radius:6px}.all-job-details .pagination .pagination-number a[data-v-59228a3b]:hover{background:#eff0f7;font-size:bold;border:1px solid #d0392c;color:#d0392c}.all-job-details .pagination .pagination-number .dot[data-v-59228a3b]{border:none}.all-job-details .pagination .pagination-number .dot[data-v-59228a3b]:hover{border:none;background:none;color:#a0a3bd}.all-job-details .pagination .pagination-number .active[data-v-59228a3b]{background:#eff0f7;font-size:bold;border:1px solid #d0392c;color:#d0392c}@media screen and (min-width:930px){.all-job-details[data-v-59228a3b]{padding-bottom:70px}.all-job-details .all-jobs[data-v-59228a3b]{display:flex;grid-gap:26px;gap:26px;flex-direction:row;flex-wrap:wrap}.all-job-details .all-jobs .job-details[data-v-59228a3b]{flex-basis:calc(50% - 13px);padding:38px 32px 44px}.all-job-details .all-jobs .job-details-title h2[data-v-59228a3b]{font-size:24px;line-height:35px}.all-job-details .all-jobs .job-details_detail_type[data-v-59228a3b]{display:flex;flex-direction:row;grid-gap:45px;gap:45px}.all-job-details .all-jobs .job-details_detail_type .avdt .av p[data-v-59228a3b]{font-size:16px;text-align:justify}.all-job-details .all-jobs .job-details_detail_type .avdt .deadline p[data-v-59228a3b]{color:#f24f41}.all-job-details .all-jobs .job-details_detail .qualification p[data-v-59228a3b]{font-size:16px}.all-job-details .pagination .pagination-number[data-v-59228a3b]{display:flex}.all-job-details .pagination .pagination-number a[data-v-59228a3b]{padding:8px 16px;margin-right:5px}}",""]),t.exports=o},784:function(t,e,l){"use strict";l.r(e);var o={data:function(){return{form:{amount:"",department:"defaultSelect",category:"defaultSelect"},departmentOptions:[{text:"Select Department",value:"defaultSelect",disabled:!0},{text:"Select Department",value:"1"},{text:"Select Department",value:"2"},{text:"Select Department",value:"3"},{text:"Select Department",value:"4"}],categoryOptions:[{text:"Category",value:"defaultSelect",disabled:!0},{text:"Category",value:"1"},{text:"Category",value:"2"},{text:"Category",value:"3"},{text:"Category",value:"4"},{text:"Category",value:"5"}]}}},d=(l(664),l(13)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"view-all-jobs"},[l("b-container",[l("div",{staticClass:"view-all-jobs-details"},[l("div",{staticClass:"section-heading"},[l("h2",[t._v("View All Jobs")])]),t._v(" "),l("div",{staticClass:"select-category"},[l("b-form",{staticClass:"select-category__form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[l("b-form-group",[l("b-form-select",{attrs:{options:t.departmentOptions,selected:!0},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1),t._v(" "),l("b-form-group",[l("b-form-select",{attrs:{options:t.categoryOptions,selected:!0},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1)],1)],1)])])],1)}),[],!1,null,"1e08d325",null);e.default=component.exports},785:function(t,e,l){"use strict";l.r(e);var o={},d=(l(666),l(13)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"all-job-details"},[o("b-container",[o("div",{staticClass:"all-jobs"},[o("div",{staticClass:"job-details"},[o("div",{staticClass:"job-details-title"},[o("h2",[t._v("\n            Job Title Lorem Ipsum"),o("br"),t._v("\n            Dummy Text\n          ")])]),t._v(" "),o("div",{staticClass:"job-details_detail"},[o("div",{staticClass:"job-details_detail_type"},[o("div",{staticClass:"area-vacancy avdt"},[o("div",{staticClass:"area av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(546),alt:""}}),t._v(" "),o("p",[t._v("Division : Dhaka")])]),t._v(" "),o("div",{staticClass:"vacancy av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(547),alt:""}}),t._v(" "),o("p",[t._v("Vacancy : 02")])])]),t._v(" "),o("div",{staticClass:"deadline-type avdt"},[o("div",{staticClass:"deadline av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(548),alt:""}}),t._v(" "),o("p",[t._v("Deadline : 21 Jun 2022")])]),t._v(" "),o("div",{staticClass:"type av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(549),alt:""}}),t._v(" "),o("p",[t._v("Job Type : Remote")])])])]),t._v(" "),o("div",{staticClass:"qualification"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(550),alt:""}}),t._v(" "),o("p",[t._v("Qualification : Bachelor degree in any discipline")])]),t._v(" "),o("div",{staticClass:"job-apply-button"},[o("button",{staticClass:"theme-btn",attrs:{type:"submit"}},[t._v("Apply Now")])])])]),t._v(" "),o("div",{staticClass:"job-details"},[o("div",{staticClass:"job-details-title"},[o("h2",[t._v("\n            Job Title Lorem Ipsum"),o("br"),t._v("\n            Dummy Text\n          ")])]),t._v(" "),o("div",{staticClass:"job-details_detail"},[o("div",{staticClass:"job-details_detail_type"},[o("div",{staticClass:"area-vacancy avdt"},[o("div",{staticClass:"area av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(546),alt:""}}),t._v(" "),o("p",[t._v("Division : Dhaka")])]),t._v(" "),o("div",{staticClass:"vacancy av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(547),alt:""}}),t._v(" "),o("p",[t._v("Vacancy : 02")])])]),t._v(" "),o("div",{staticClass:"deadline-type avdt"},[o("div",{staticClass:"deadline av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(548),alt:""}}),t._v(" "),o("p",[t._v("Deadline : 21 Jun 2022")])]),t._v(" "),o("div",{staticClass:"type av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(549),alt:""}}),t._v(" "),o("p",[t._v("Job Type : Remote")])])])]),t._v(" "),o("div",{staticClass:"qualification"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(550),alt:""}}),t._v(" "),o("p",[t._v("Qualification : Bachelor degree in any discipline")])]),t._v(" "),o("div",{staticClass:"job-apply-button"},[o("button",{staticClass:"theme-btn",attrs:{type:"submit"}},[t._v("Apply Now")])])])]),t._v(" "),o("div",{staticClass:"job-details"},[o("div",{staticClass:"job-details-title"},[o("h2",[t._v("\n            Job Title Lorem Ipsum"),o("br"),t._v("\n            Dummy Text\n          ")])]),t._v(" "),o("div",{staticClass:"job-details_detail"},[o("div",{staticClass:"job-details_detail_type"},[o("div",{staticClass:"area-vacancy avdt"},[o("div",{staticClass:"area av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(546),alt:""}}),t._v(" "),o("p",[t._v("Division : Dhaka")])]),t._v(" "),o("div",{staticClass:"vacancy av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(547),alt:""}}),t._v(" "),o("p",[t._v("Vacancy : 02")])])]),t._v(" "),o("div",{staticClass:"deadline-type avdt"},[o("div",{staticClass:"deadline av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(548),alt:""}}),t._v(" "),o("p",[t._v("Deadline : 21 Jun 2022")])]),t._v(" "),o("div",{staticClass:"type av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(549),alt:""}}),t._v(" "),o("p",[t._v("Job Type : Remote")])])])]),t._v(" "),o("div",{staticClass:"qualification"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(550),alt:""}}),t._v(" "),o("p",[t._v("Qualification : Bachelor degree in any discipline")])]),t._v(" "),o("div",{staticClass:"job-apply-button"},[o("button",{staticClass:"theme-btn",attrs:{type:"submit"}},[t._v("Apply Now")])])])]),t._v(" "),o("div",{staticClass:"job-details"},[o("div",{staticClass:"job-details-title"},[o("h2",[t._v("\n            Job Title Lorem Ipsum"),o("br"),t._v("\n            Dummy Text\n          ")])]),t._v(" "),o("div",{staticClass:"job-details_detail"},[o("div",{staticClass:"job-details_detail_type"},[o("div",{staticClass:"area-vacancy avdt"},[o("div",{staticClass:"area av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(546),alt:""}}),t._v(" "),o("p",[t._v("Division : Dhaka")])]),t._v(" "),o("div",{staticClass:"vacancy av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(547),alt:""}}),t._v(" "),o("p",[t._v("Vacancy : 02")])])]),t._v(" "),o("div",{staticClass:"deadline-type avdt"},[o("div",{staticClass:"deadline av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(548),alt:""}}),t._v(" "),o("p",[t._v("Deadline : 21 Jun 2022")])]),t._v(" "),o("div",{staticClass:"type av"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(549),alt:""}}),t._v(" "),o("p",[t._v("Job Type : Remote")])])])]),t._v(" "),o("div",{staticClass:"qualification"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":l(550),alt:""}}),t._v(" "),o("p",[t._v("Qualification : Bachelor degree in any discipline")])]),t._v(" "),o("div",{staticClass:"job-apply-button"},[o("button",{staticClass:"theme-btn",attrs:{type:"submit"}},[t._v("Apply Now")])])])])]),t._v(" "),o("div",{staticClass:"pagination"},[o("p",[t._v("Pages :")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("«")]),t._v(" "),o("div",{staticClass:"pagination-number"},[o("a",{staticClass:"active",attrs:{href:"#"}},[t._v("1")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("2")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("3")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("4")]),t._v(" "),o("a",{staticClass:"dot",attrs:{href:"#"}},[t._v(".....")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("10")])]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("»")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("«")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("Previous")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("Next")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("»")])])])],1)}),[],!1,null,"59228a3b",null);e.default=component.exports},895:function(t,e,l){"use strict";l.r(e);var o=l(498),d=l(784),n=l(785),r={name:"AllJobs",layout:"theme-layout",components:{CoverSlider:o.default,ViewJobs:d.default,JobDetails:n.default},data:function(){return{coverSliders:[{id:13,page_id:1,file_url_web:"https://nagad.com.bd/uploads/slider/5V4wplACkmNpw4iJCYKPilS5u31MaX3MvKGZTJqF.jpg",file_url_web_bangla:"https://nagad.com.bd/uploads/slider/7VOPKJaUXMsao97UIjEaqlKXxXSfDJ7VqOOEJlaA.jpg",file_url_mobile_bangla:"https://nagad.com.bd/uploads/slider/3X0ysECDR2U2B7uKdSD3rasoK418Jn7zUwOjLzNL.png",button_text_english:"Learn More",button_text_bangla:"বিস্তারিত",button_action:"/services/service/?service=cash-out",heading_english:"Enjoy the lowest ever Cash Out rate",heading_bangla:"সব থেকে কম খরচে ক্যাশ আউট করার সুবিধা",subtitle_english:null,subtitle_bangla:null,is_button_visible:1,is_app_download_button_visible:0,status:1,file_url_mobile:"https://nagad.com.bd/uploads/slider/k85VsFP8erG0JGWpBGXIiKYFqXcKjzbVI7x2SAlc.png",video_link:null,text_colour:"white",button_colour:"orange",content_position_x:"6.529947916666667",content_position_y:"48.6053212483724",play_button_position_x:"50",play_button_position_y:"50",deleted_at:null,created_at:"2022-01-13 05:39:00",updated_at:"2022-04-08 10:03:07"},{id:38,page_id:1,file_url_web:"https://nagad.com.bd/uploads/slider/iFGZj6rdTjEEKqBdLaBEYehTY18fMaRSjNCCjmnG.jpg",file_url_web_bangla:"https://nagad.com.bd/uploads/slider/Hh0jSz9tc7yjawiWEndS7fzdsMjUFRuYQoWaCNYn.jpg",file_url_mobile_bangla:"https://nagad.com.bd/uploads/slider/uj0SdokcoU7gXWXAga5FedHvy47EmdU6NqxIIR1t.jpg",button_text_english:"Learn More",button_text_bangla:"বিস্তারিত",button_action:"https://nagad.com.bd/campaigns/campaign/?campaign=utshober-khushi-nagad-e-beshi",heading_english:"Utshober Khushi Nagad-e Beshi",heading_bangla:"উৎসবের খুশি নগদে বেশি",subtitle_english:null,subtitle_bangla:null,is_button_visible:1,is_app_download_button_visible:0,status:1,file_url_mobile:"https://nagad.com.bd/uploads/slider/ksbZgSLCI69LmNjsypCQK3wxG3UT6BEbVJV6hqgD.jpg",video_link:null,text_colour:"white",button_colour:"white",content_position_x:"6.529947916666667",content_position_y:"48.6053212483724",play_button_position_x:"6.529947916666667",play_button_position_y:"48.6053212483724",deleted_at:null,created_at:"2022-03-31 21:43:17",updated_at:"2022-04-11 11:16:50"}]}}},c=l(13),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",[l("CoverSlider",{attrs:{sliders:t.coverSliders}}),t._v(" "),l("ViewJobs"),t._v(" "),l("JobDetails")],1)}),[],!1,null,"08327e33",null);e.default=component.exports}}]);