(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65c0af31"],{"047c":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"bottom-right shadow",on:{click:t.scrollTop}},[e("i",{staticClass:"fas fa-chevron-up d-flex"})])},i=[],n={name:"ScrollTopArrow",data:function(){return{visible:!1}},methods:{scrollTop:function(){var t=this;this.intervalId=setInterval((function(){0===window.pageYOffset&&clearInterval(t.intervalId),window.scroll(0,window.pageYOffset-50)}),10)},scrollListener:function(){this.visible=window.scrollY>150}},mounted:function(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollListener)}},c=n,l=(e("3a75"),e("2877")),o=Object(l["a"])(c,a,i,!1,null,null,null);s["a"]=o.exports},"3a75":function(t,s,e){"use strict";var a=e("cb92"),i=e.n(a);i.a},a058:function(t,s,e){"use strict";var a=e("cd05"),i=e.n(a);i.a},cb92:function(t,s,e){},cd05:function(t,s,e){},ff5a:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"homepage"},[e("div",{staticClass:"homepage-banner-bg  d-flex justify-content-center align-items-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col d-flex justify-content-center align-items-center"},[e("div",{staticClass:"text-center text-light p-5"},[e("h2",{staticClass:"homepage-banner-title mb-4"},[t._v("IceLife")]),e("h4",{staticClass:"mb-4"},[t._v("優質冰品，最好的選擇")]),e("router-link",{staticClass:"btn btn-lg btn-primary px-5",attrs:{to:{name:"前台產品頁面"}}},[t._v(" 立即購買 ")])],1)])])])]),e("section",{staticClass:"mb-4 bg-light"},[e("div",{staticClass:"container py-5"},[e("h2",{staticClass:"subtitle font-weight-bold text-center"},[t._v(" 系列商品推薦 ")]),e("div",{staticClass:"row py-4",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"col-lg-6 mb-3"},[e("a",{staticClass:"rotated d-block bg-white p-4",staticStyle:{"text-decoration":"none"},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.toCategory("甜入你心")}}},[t._m(0)])]),e("div",{staticClass:"col-lg-6 mb-3"},[e("a",{staticClass:"rotated d-block bg-white p-4",staticStyle:{"text-decoration":"none"},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.toCategory("成熟午後")}}},[t._m(1)])])])])]),t._m(2),e("section",{staticClass:"coupon"},[e("div",{staticClass:"coupon-banner-bg d-flex justify-content-center align-items-center"},[e("div",{staticClass:"coupon-banner-content d-flex flex-column justify-content-center"},[e("h2",{staticClass:"font-weight-bold text-primary text-center mb-4"},[t._v(" IceLife 週年慶活動進行中！ ")]),e("router-link",{staticClass:"btn btn-lg btn-cyan",attrs:{to:{name:"優惠活動進行中"}}},[t._v(" 立刻取得優惠券 ")])],1)])]),e("ScrollTopArrow")],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex"},[e("img",{staticClass:"imgsz",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/91fxEPvMLQLwgRhJf35uJt75GyN3Tzw0VSisbQFGlkrw0y7yT8XKxSRRM0QBqyAMHny0t89gBRRubqYwU62E2yfl3NfzT09UL1ZcX2ieNcvfeh5OuufjxpMmG4xT9rYx.jpg",alt:""}}),e("div",{staticClass:"d-flex flex-column"},[e("h5",{staticClass:"font-weight-bold"},[t._v(" 甜入你心系列 ")]),e("p",{staticClass:"text-secondary mb-auto"},[t._v(" 甜入你心系列 2018 奪得全國甜點金獎， 不論男女老少咸宜，喚起你的童年！ ")]),e("button",{staticClass:"btn btn-primary rounded adbtn",attrs:{type:"button"}},[t._v("立即逛 ")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex"},[e("img",{staticClass:"imgsz",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/L1Ps9GdSyBypZSDYe98EjgMBgEm1m10IF4cUnChO5sorufYFhEllQa9y0lWhRzM3uhFCGYA8XFRf08oUMvIeAvd6v8BuOQOfBoijinH59XrAmKJDGCM97x2nnnqrmFMl.jpg",alt:""}}),e("div",{staticClass:"d-flex flex-column"},[e("h5",{staticClass:"font-weight-bold"},[t._v(" 成熟午後系列 ")]),e("p",{staticClass:"text-secondary mb-auto"},[t._v(" 工作累了，想要來點冰品嗎？ 成熟午後系列冰品，讓你享有午後放鬆的時光。 ")]),e("button",{staticClass:"btn btn-primary rounded adbtn",attrs:{type:"button"}},[t._v("放鬆去 ")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("div",{staticClass:"container py-5"},[e("h2",{staticClass:"subtitle font-weight-bold text-center"},[t._v(" 三大保證 ")]),e("div",{staticClass:"row",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"d-flex flex-column align-items-center p-4"},[e("i",{staticClass:"fas fa-hand-sparkles iconsz text-primary mb-3"}),e("h3",{staticClass:"font-weight-bold"},[t._v("純淨")]),e("p",{staticClass:"produce-content"},[t._v(" 產品鮮乳採用「低溫長時間殺菌(LTLT)」，保留維生素和乳清蛋白等營養成分 維持鮮乳本身的營養完整度。 ")])])]),e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"d-flex flex-column align-items-center p-4"},[e("i",{staticClass:"fas fa-tint-slash iconsz text-primary mb-3"}),e("h3",{staticClass:"font-weight-bold"},[t._v("濃郁")]),e("p",{staticClass:"produce-content"},[t._v(" IceLife 香濃冰淇淋，製造過程100%使用紐西蘭純鮮乳， 不加入任何一滴水，口感綿密、入口即化。 ")])])]),e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"d-flex flex-column align-items-center p-4"},[e("i",{staticClass:"fas fa-thumbs-up iconsz text-primary mb-3"}),e("h3",{staticClass:"font-weight-bold"},[t._v("安全")]),e("p",{staticClass:"produce-content"},[t._v(" 生產工廠已通過 ISO22000 與 HACCP 國際認證。 全部產品已投保一億產品責任險，讓您吃得安心。 ")])])])])])])}],n=e("047c"),c={name:"HomePage",components:{ScrollTopArrow:n["a"]},data:function(){return{coupon:["icelife5","icelife8","icelife9"],tempCoupon:"",copytempCoupon:"",copyResult:""}},methods:{toCategory:function(t){this.$router.push({name:"前台產品頁面",params:{categoryName:t}})}}},l=c,o=(e("a058"),e("2877")),r=Object(o["a"])(l,a,i,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-65c0af31.ed4bdc1b.js.map