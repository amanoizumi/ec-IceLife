(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d60284a"],{b7c8:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"checkout"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}},[a("div",{staticClass:"loadingio-spinner-ripple-icelifeloading"},[a("div",{staticClass:"ldio-icelifeloading-style"},[a("div"),a("div")])])]),a("section",{staticClass:"checkout-banner mb-md-9 mb-5"}),a("div",{staticClass:"container mb-5"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col d-flex justify-content-center"},[a("div",{staticClass:"card",staticStyle:{width:"20rem"}},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("訂單內容")]),a("ul",{staticClass:"list-group list-group-flush"},[t._l(t.order.products,(function(s,i){return a("li",{key:i,staticClass:"list-group-item px-0"},[a("div",{staticClass:"d-flex mt-2"},[a("img",{staticClass:"mr-2",staticStyle:{width:"60px",height:"60px","object-fit":"cover"},attrs:{src:s.product.imageUrl[0],alt:""}}),a("div",{staticClass:"w-100 d-flex flex-column"},[a("div",{staticClass:"d-flex justify-content-between font-weight-bold"},[a("h5",[t._v(t._s(s.product.title))]),a("p",{staticClass:"mb-0"},[t._v("x"+t._s(s.quantity))])]),a("div",{staticClass:"text-right"},[a("p",{staticClass:"mb-0"},[t._v(" "+t._s(t._f("currency")(s.product.price))+"/"+t._s(s.product.unit)+" ")])])])])])})),a("li",{staticClass:"list-group-item px-0 pb-0"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("Email")]),a("td",{staticClass:"text-right border-0 px-0"},[t._v(" "+t._s(t.order.user.email)+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人姓名")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.name)+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人電話")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.tel)+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("收貨人地址")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.user.address)+" ")])])])])]),a("li",{staticClass:"list-group-item px-0 pb-0"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v(" 付款金額 ")]),a("td",{staticClass:"text-right border-0 px-0"},[t._v(" "+t._s(t._f("currency")(t.order.amount))+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款方式")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(" "+t._s(t.order.payment)+" ")])]),a("tr",[a("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款狀態 ")]),a("td",{staticClass:"text-right border-0 px-0 pt-0"},[t.order.paid?a("strong",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])]),!1===t.order.paid?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger",on:{click:function(s){return s.preventDefault(),t.payOrder(s)}}},[t._v(" 確認付款 ")])]):t._e()])],2)])])])])])],1)},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col mb-3"},[a("h3",{staticClass:"text-center"},[t._v("感謝您的訂購，以下為您的訂單。")])])])}],e=(a("99af"),a("dd4e")),c={name:"Checkout",data:function(){return{order:{user:{}},orderId:"",isLoading:!1}},created:function(){this.orderId=this.$route.params.id,this.getOrder()},methods:{getOrder:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io","/api/").concat("28ddc881-34aa-4322-95a0-a5ecbf863ad8","/ec/orders/").concat(this.orderId);this.isLoading=!0,this.$http.get(s).then((function(s){t.order=s.data.data,t.isLoading=!1})).catch((function(){e["a"].fire({title:"無法取得資料",icon:"error"}),t.isLoading=!1}))},payOrder:function(){var t=this,s="".concat("https://course-ec-api.hexschool.io","/api/").concat("28ddc881-34aa-4322-95a0-a5ecbf863ad8","/ec/orders/").concat(this.orderId,"/paying");this.isLoading=!0,this.$http.post(s).then((function(s){s.data.data.paid&&(t.getOrder(),e["a"].fire({text:"已付款",icon:"success"})),t.isLoading=!1})).catch((function(){e["a"].fire({text:"付款失敗",icon:"error"}),t.isLoading=!1}))}}},o=c,d=(a("f0fe"),a("2877")),n=Object(d["a"])(o,i,r,!1,null,"6aefdfc5",null);s["default"]=n.exports},cecf:function(t,s,a){},f0fe:function(t,s,a){"use strict";var i=a("cecf"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-9d60284a.8f0e2238.js.map