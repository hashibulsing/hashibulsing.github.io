(window.webpackJsonp=window.webpackJsonp||[]).push([[12,24],{513:function(e,t,r){var content=r(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(34).default)("3e6fc39c",content,!0,{sourceMap:!1})},533:function(e,t,r){"use strict";r(513)},534:function(e,t,r){var n=r(33)(!1);n.push([e.i,".offer-card[data-v-3faf146e]{border-radius:20px;padding:5px;background:linear-gradient(118.64deg,rgba(255,243,233,.7) -4.78%,hsla(0,0%,100%,.7) 64.5%,rgba(255,243,233,.7) 111.91%);border:1px solid #fff;box-shadow:0 4px 17px rgba(78,75,102,.25);-webkit-backdrop-filter:blur(30px);backdrop-filter:blur(30px);margin-bottom:15px}.offer-card-body[data-v-3faf146e]{border-radius:15px;overflow:hidden}.offer-card-body a[data-v-3faf146e]{display:block}.offer-card-body a img[data-v-3faf146e]{width:100%;aspect-ratio:16/9;-o-object-fit:cover;object-fit:cover}.offer-card-footer[data-v-3faf146e]{padding:15px;display:flex;justify-content:center;align-content:center;grid-gap:12px;gap:12px}@media screen and (min-width:768px){.offer-card[data-v-3faf146e]{margin-bottom:20px}}",""]),e.exports=n},537:function(e,t,r){"use strict";r.r(t);var n={props:{offerCard:{type:null,default:[]}}},l=(r(533),r(13)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"offer-card"},[r("div",{staticClass:"offer-card-body"},[r("nuxt-link",{attrs:{to:{path:"/campaign/",query:{offer:e.offerCard.slug}}}},["en"==e.$i18n.locale?r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.offerCard.file_url_web,alt:"offer image"}}):e._e(),e._v(" "),"bn"==e.$i18n.locale?r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"},{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.offerCard.file_url_web_bangla,alt:"offer image"}}):e._e()])],1),e._v(" "),r("div",{staticClass:"offer-card-footer"},["en"==e.$i18n.locale?r("nuxt-link",{staticClass:"theme-btn",attrs:{to:{path:"/campaign/",query:{offer:e.offerCard.slug}}}},[e._v("View Offer")]):e._e(),e._v(" "),"bn"==e.$i18n.locale?r("nuxt-link",{staticClass:"theme-btn font-bn",attrs:{to:{path:"/bn/campaign/",query:{offer:e.offerCard.slug}}}},[e._v("অফার দেখুন")]):e._e()],1)])}),[],!1,null,"3faf146e",null);t.default=component.exports},619:function(e,t,r){var content=r(691);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(34).default)("a8a97210",content,!0,{sourceMap:!1})},690:function(e,t,r){"use strict";r(619)},691:function(e,t,r){var n=r(33)(!1);n.push([e.i,".all-campaign[data-v-1bdb6e36]{padding:30px 0}.all-campaign .view-more-btn[data-v-1bdb6e36]{margin-top:20px}.all-campaign .campaigns[data-v-1bdb6e36]{display:flex;flex-wrap:wrap;flex-direction:column}.all-campaign .campaigns .single-campaign[data-v-1bdb6e36]{flex-basis:calc(33.333% - 13.33333px)}@media screen and (min-width:768px){.all-campaign[data-v-1bdb6e36]{padding:50px 0}.all-campaign .campaigns[data-v-1bdb6e36]{flex-direction:row;justify-content:space-between;padding-top:0}}",""]),e.exports=n},791:function(e,t,r){"use strict";r.r(t);var n={components:{OfferCard:r(537).default},props:{allOffer:{type:[],required:!0,default:[]}},data:function(){return{numberOfOfferShow:6}},methods:{viewMoreButtonHandler:function(){this.numberOfOfferShow+=this.allOffer.length}}},l=(r(690),r(13)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"all-campaign"},[r("b-container",[r("div",{staticClass:"campaigns"},e._l(e.allOffer,(function(t,n){return r("div",{key:n,staticClass:"single-campaign"},[n<e.numberOfOfferShow?r("OfferCard",{attrs:{offerCard:t}}):e._e()],1)})),0),e._v(" "),r("div",{staticClass:"view-more-btn text-center"},["en"==e.$i18n.locale&&e.numberOfOfferShow<e.allOffer.length?r("button",{staticClass:"theme-btn",on:{click:function(t){return e.viewMoreButtonHandler()}}},[e._v("View More")]):e._e(),e._v(" "),"bn"==e.$i18n.locale&&e.numberOfOfferShow<e.allOffer.length?r("button",{staticClass:"theme-btn font-bn font-bn",on:{click:function(t){return e.viewMoreButtonHandler()}}},[e._v("আরো দেখুন")]):e._e()])])],1)}),[],!1,null,"1bdb6e36",null);t.default=component.exports}}]);