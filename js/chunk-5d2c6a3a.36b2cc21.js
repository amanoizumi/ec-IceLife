(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d2c6a3a"],{"057f":function(t,e,r){var a=r("fc6a"),o=r("241c").f,n={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==n.call(t)?s(t):o(a(t))}},"2b20":function(t,e,r){},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var a=r("428f"),o=r("5135"),n=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});o(e,t)||i(e,t,{value:n.f(t)})}},a4d3:function(t,e,r){"use strict";var a=r("23e7"),o=r("da84"),n=r("d066"),i=r("c430"),s=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),m=r("825a"),v=r("7b0b"),b=r("fc6a"),h=r("c04e"),g=r("5c6c"),y=r("7c73"),C=r("df75"),_=r("241c"),w=r("057f"),O=r("7418"),x=r("06cf"),P=r("9bf2"),j=r("d1e7"),k=r("9112"),S=r("6eeb"),E=r("5692"),L=r("f772"),T=r("d012"),I=r("90e3"),N=r("b622"),D=r("e538"),$=r("746f"),q=r("d44e"),A=r("69f3"),F=r("b727").forEach,M=L("hidden"),J="Symbol",W="prototype",z=N("toPrimitive"),Q=A.set,U=A.getterFor(J),X=Object[W],B=o.Symbol,G=n("JSON","stringify"),H=x.f,K=P.f,R=w.f,V=j.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),rt=E("wks"),at=o.QObject,ot=!at||!at[W]||!at[W].findChild,nt=s&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=H(X,e);a&&delete X[e],K(t,e,r),a&&t!==X&&K(X,e,a)}:K,it=function(t,e){var r=Y[t]=y(B[W]);return Q(r,{type:J,tag:t,description:e}),s||(r.description=e),r},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ct=function(t,e,r){t===X&&ct(Z,e,r),m(t);var a=h(e,!0);return m(r),d(Y,a)?(r.enumerable?(d(t,M)&&t[M][a]&&(t[M][a]=!1),r=y(r,{enumerable:g(0,!1)})):(d(t,M)||K(t,M,g(1,{})),t[M][a]=!0),nt(t,a,r)):K(t,a,r)},lt=function(t,e){m(t);var r=b(e),a=C(r).concat(mt(r));return F(a,(function(e){s&&!dt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=h(t,!0),r=V.call(this,e);return!(this===X&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,M)&&this[M][e])||r)},ft=function(t,e){var r=b(t),a=h(e,!0);if(r!==X||!d(Y,a)||d(Z,a)){var o=H(r,a);return!o||!d(Y,a)||d(r,M)&&r[M][a]||(o.enumerable=!0),o}},pt=function(t){var e=R(b(t)),r=[];return F(e,(function(t){d(Y,t)||d(T,t)||r.push(t)})),r},mt=function(t){var e=t===X,r=R(e?Z:b(t)),a=[];return F(r,(function(t){!d(Y,t)||e&&!d(X,t)||a.push(Y[t])})),a};if(c||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===X&&r.call(Z,t),d(this,M)&&d(this[M],e)&&(this[M][e]=!1),nt(this,e,g(1,t))};return s&&ot&&nt(X,e,{configurable:!0,set:r}),it(e,t)},S(B[W],"toString",(function(){return U(this).tag})),S(B,"withoutSetter",(function(t){return it(I(t),t)})),j.f=dt,P.f=ct,x.f=ft,_.f=w.f=pt,O.f=mt,D.f=function(t){return it(N(t),t)},s&&(K(B[W],"description",{configurable:!0,get:function(){return U(this).description}}),i||S(X,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:B}),F(C(rt),(function(t){$(t)})),a({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=B(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),a({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),G){var vt=!c||u((function(){var t=B();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));a({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var a,o=[t],n=1;while(arguments.length>n)o.push(arguments[n++]);if(a=e,(p(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!st(e))return e}),o[1]=e,G.apply(null,o)}})}B[W][z]||k(B[W],z,B[W].valueOf),q(B,J),T[M]=!0},dbb4:function(t,e,r){var a=r("23e7"),o=r("83ab"),n=r("56ef"),i=r("fc6a"),s=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),o=s.f,l=n(a),u={},d=0;while(l.length>d)r=o(a,e=l[d++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var a=r("23e7"),o=r("d039"),n=r("fc6a"),i=r("06cf").f,s=r("83ab"),c=o((function(){i(1)})),l=!s||c;a({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(n(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a},e90b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order"},[r("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[r("div",{staticClass:"loadingio-spinner-ripple-icelifeloading"},[r("div",{staticClass:"ldio-icelifeloading-style"},[r("div"),r("div")])])]),r("div",{staticClass:"container"},[r("div",{staticClass:"my-5 row justify-content-center"},[r("div",{staticClass:"col-sm-12 col-md-6"},[r("h3",{staticClass:"text-primary"},[t._v("購買人資料")]),r("validation-observer",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[r("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes;return[r("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:o,attrs:{name:"收件人姓名",id:"username",type:"text",placeholder:"請填入姓名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes;return[r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:o,attrs:{name:"Email",id:"email",type:"email",placeholder:"請填入email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes;return[r("label",{attrs:{for:"tel"}},[t._v("聯絡電話")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:o,attrs:{name:"聯絡電話",id:"tel",type:"tel",placeholder:"請填入連絡電話"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,o=e.classes;return[r("label",{attrs:{for:"address"}},[t._v("地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:o,attrs:{name:"地址",id:"address",type:"text",placeholder:"請填入運送地址"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[t._v(t._s(a[0]))]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"payment"}},[t._v("付款方式")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",attrs:{id:"payment",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",disabled:""}},[t._v("請選擇付款方式")]),r("option",{attrs:{value:"WebATM"}},[t._v("WebATM")]),r("option",{attrs:{value:"ATM"}},[t._v("ATM轉帳")]),r("option",{attrs:{value:"ApplePay"}},[t._v("ApplePay")]),r("option",{attrs:{value:"LinePay"}},[t._v("LinePay")]),r("option",{attrs:{value:"CreditCard"}},[t._v("信用卡付款")])])]),r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:a},on:{click:function(e){return e.preventDefault(),t.creatOrder(e)}}},[t._v(" 送出訂單 ")])])])]}}])})],1),r("div",{staticClass:"col-sm-12 col-md-6"},[r("h3",{staticClass:"text-primary"},[t._v("購物明細")]),t._l(t.cart,(function(e){return r("div",{key:e.id,staticClass:"row border-bottom border-gray"},[r("div",{staticClass:"col-3 d-flex align-items-center py-3"},[r("div",{staticClass:"pic-td align-middle",staticStyle:{width:"100px",height:"100px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.product.imageUrl[0]+")"}})]),r("div",{staticClass:"col-3  d-flex align-items-center ml-3"},[t._v(t._s(e.product.title))]),r("div",{staticClass:"col-2 d-flex align-items-center"},[t._v(" X "+t._s(e.quantity)+" ")]),r("div",{staticClass:"col-3 d-flex justify-content-between align-items-center"},[r("div",{staticClass:"text-center"},[t._v(" NT"+t._s(t._f("currency")(e.product.price*e.quantity))+"元 ")])])])})),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"form-check mt-4 mb-2"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",value:"",id:"orderCheck1"},domProps:{checked:t.is_checked},on:{click:t.changeDisabled}}),r("label",{staticClass:"form-check-label",attrs:{for:"orderCheck1"}},[t._v(" 使用優惠券 ")])]),r("div",{staticClass:"input-group mb-3 mr-sm-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",id:"couponCode",placeholder:"請輸入優惠券碼",disabled:t.is_disabled},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),r("div",{staticClass:"input-group-prepend"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.useCouponCode(e)}}},[r("i",{staticClass:"fas fa-check-circle"}),t._v(" 套用 ")])])])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[t.coupon.enabled?r("h4",{staticClass:"mb-3"},[t._v(" 總金額 "+t._s(t._f("currency")(t.cartTotal*(t.coupon.percent/100)))+" 元 ")]):r("h4",[t._v(" 總金額 NT"+t._s(t._f("currency")(t.cartTotal))+" 元 ")])])])],2)])])],1)},o=[],n=(r("99af"),r("4160"),r("159b"),r("5530")),i=r("dd4e"),s={name:"Order",data:function(){return{cart:{},cartTotal:0,form:{email:"",name:"",tel:"",address:"",payment:"WebATM"},coupon_code:"",coupon:{},isLoading:!1,is_checked:!1,is_disabled:!0}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("28ddc881-34aa-4322-95a0-a5ecbf863ad8","/ec/shopping");this.$http.get(e).then((function(e){t.cart=e.data.data,t.cartTotal=0,t.cart.forEach((function(e){t.cartTotal+=e.product.price*e.quantity})),t.isLoading=!1})).catch((function(){i["a"].fire({title:"取得資料失敗!",icon:"error"}),t.isLoading=!1}))},changeDisabled:function(){this.is_disabled=!this.is_disabled},useCouponCode:function(){var t=this,e=!0;if(this.cartTotal<1111?(i["a"].fire({text:"消費金額不足，不能使用該優惠券",icon:"warning"}),e=!1):this.cartTotal>=1111&&this.cartTotal<2199&&"ICELIFE9"!==this.coupon_code?(i["a"].fire({text:"消費金額只可使用 ICELIFE9 優惠券",icon:"warning"}),e=!1):this.cartTotal>=2199&&this.cartTotal<3199&&"ICELIFE8"!==this.coupon_code?(i["a"].fire({text:"消費金額只可使用 ICELIFE8 優惠券",icon:"warning"}),e=!1):this.cartTotal>=3199&&this.cartTotal<4e3&&"ICELIFE7"!==this.coupon_code&&(i["a"].fire({text:"消費金額只可使用 ICELIFE7 優惠券",icon:"warning"}),e=!1),e){this.isLoading=!0;var r="".concat("https://course-ec-api.hexschool.io","/api/").concat("28ddc881-34aa-4322-95a0-a5ecbf863ad8","/ec/coupon/search");this.$http.post(r,{code:this.coupon_code}).then((function(e){t.getCart(),t.coupon=e.data.data,t.isLoading=!1,i["a"].fire({text:"成功套入優惠卷",icon:"success"})})).catch((function(e){var r=e.response.data.errors;if(r)r.code.forEach((function(t){i["a"].fire({text:"".concat(t),icon:"error"})})),t.isLoading=!1;else{var a=e.response.data.message;i["a"].fire({title:"".concat(a),icon:"error"}),t.isLoading=!1}}))}},creatOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("28ddc881-34aa-4322-95a0-a5ecbf863ad8","/ec/orders"),r=Object(n["a"])({},this.form);this.coupon.enabled&&(r.coupon=this.coupon.code),this.$http.post(e,r).then((function(e){t.$bus.$emit("update-total"),i["a"].fire({text:"成功送出訂單",icon:"success"}),t.getCart(),t.$router.push("/checkout/".concat(e.data.data.id)),t.isLoading=!1})).catch((function(){i["a"].fire({text:"訂單送出失敗",icon:"error"}),t.isLoading=!0}))}}},c=s,l=(r("fdda"),r("2877")),u=Object(l["a"])(c,a,o,!1,null,null,null);e["default"]=u.exports},fdda:function(t,e,r){"use strict";var a=r("2b20"),o=r.n(a);o.a}}]);
//# sourceMappingURL=chunk-5d2c6a3a.36b2cc21.js.map