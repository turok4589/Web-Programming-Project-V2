(function(t){function s(s){for(var e,r,l=s[0],o=s[1],c=s[2],u=0,f=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);v&&v(s);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,s=0;s<i.length;s++){for(var a=i[s],e=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(e=!1)}e&&(i.splice(s--,1),t=l(l.s=a[0]))}return t}var e={},n={app:0},i=[];function r(t){return l.p+"js/"+({FitnessTracker:"FitnessTracker",about:"about"}[t]||t)+"."+{FitnessTracker:"52c01594",about:"c67bd670"}[t]+".js"}function l(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var s=[],a=n[t];if(0!==a)if(a)s.push(a[2]);else{var e=new Promise((function(s,e){a=n[t]=[s,e]}));s.push(a[2]=e);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=r(t);var c=new Error;i=function(s){o.onerror=o.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var e=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;c.message="Loading chunk "+t+" failed.\n("+e+": "+i+")",c.name="ChunkLoadError",c.type=e,c.request=i,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(s)},l.m=t,l.c=e,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)l.d(a,e,function(s){return t[s]}.bind(null,e));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var u=0;u<o.length;u++)s(o[u]);var v=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},5147:function(t,s,a){"use strict";var e={user:null};s["a"]=e},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Nav"),a("div",{staticClass:"container"},[a("router-view"),a("Footer")],1)],1)},i=[],r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar container is-fixed-top is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(s){t.isActive=!t.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/fitnesstracker"}},[t._v("Fitness Tracker")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")])],1),a("a",{staticClass:"navbar-item"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/fitnesstracker"}},[t._v("Fitness Tracker")])],1)])]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" Admin ")]),a("div",{staticClass:"navbar-dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/users"}},[t._v("Users")])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("LoginBadge")],1)])])],1)])])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[e("img",{attrs:{src:a("cf05"),height:"28"}})])}],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"LoginBadge"}},[t.session.user?a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.name))]),a("p",{staticClass:"is-size-7"},[t._v("@"+t._s(t.session.user.handle))])])]):a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button",attrs:{to:"/signuppage"}},[a("strong",[t._v("Sign Up")])]),a("router-link",{staticClass:"button",attrs:{to:"/login"}},[a("strong",[t._v("Log in")])])],1)])},c=[],u=a("5147"),v={data:function(){return{session:u["a"]}}},f=v,d=a("2877"),p=Object(d["a"])(f,o,c,!1,null,null,null),m=p.exports,b={data:function(){return{isActive:!1}},methods:{},components:{LoginBadge:m}},h=b,C=Object(d["a"])(h,r,l,!1,null,null,null),_=C.exports,g=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer has-background-grey-darker"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("h1",{staticClass:"title has-text-primary-light"},[a("strong",[t._v("This is my early build for my Fitness Tracker App for a project at Suny Newpaltz"),a("br"),t._v(" Author: Miguel A Vasquez Fall 2020")])])])])])}],k={},E=k,w=Object(d["a"])(E,g,y,!1,null,null,null),x=w.exports,$={components:{Nav:_,Footer:x}},P=$,j=Object(d["a"])(P,n,i,!1,null,null,null),F=j.exports,O=(a("d3b7"),a("8c4f")),T=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-two-thirds"},[e("section",{staticClass:"hero is-large is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-size-1"},[t._v(" Welcome to my Fall 2020 Fitness Tracker Website ")]),e("h2",{staticClass:"is-size-0.5"},[e("strong",[t._v("This website will help you reach your fitness goals by helping you track your calories!")])])])])])]),e("div",{staticClass:"column is-one-third"},[e("section",{staticClass:"hero is-large is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("a",[e("img",{attrs:{src:a("db59")}})])])])])])])])}],L={name:"Home",components:{}},z=L,N=Object(d["a"])(z,T,A,!1,null,null,null),S=N.exports,M=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",[t._m(0),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third is-offset-one-third"},[t._m(1),t._m(2),t._m(3),a("div",{staticClass:"field is-grouped buttons are-small"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-success",on:{click:function(s){return s.preventDefault(),t.login(s)}}},[t._v(" Login ")])]),t._m(4),a("p",{staticClass:"control"},[a("router-link",{staticClass:"button is-info",attrs:{to:"/signuppage"}},[t._v("No Account? Click This to Sign Up!")])],1)])])])])},U=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h1",{staticClass:"is-size-2"},[a("strong",[t._v("Please enter your email and password"),a("br"),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("h2",[a("strong",[t._v("Email:")]),a("br")]),a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{staticClass:"input",attrs:{type:"email",placeholder:"Please Enter Your Email"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})]),a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("h3",[a("strong",[t._v("Password:")]),a("br")]),a("p",{staticClass:"control has-icons-left"},[a("input",{staticClass:"input",attrs:{type:"password",placeholder:"Please Enter Your Password"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{staticClass:"checkbox"},[a("input",{attrs:{type:"checkbox"}}),t._v(" Remember me"),a("br"),a("br")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"control"},[a("button",{staticClass:"button is-info"},[t._v(" Forgot Password? ")])])}],Y={methods:{login:function(){u["a"].user={name:"Miguel A Vasquez",handle:"Newpaltz"},this.$router.push("FitnessTracker")}}},B=Y,q=Object(d["a"])(B,M,U,!1,null,null,null),H=q.exports,W=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("form",[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("div",{staticClass:"field is-grouped"},[t._m(7),a("div",{staticClass:"control"},[a("router-link",{staticClass:"button is-link is-danger",attrs:{to:"/login"}},[a("strong",[t._v("Already have an account?")])])],1)])])},J=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h1",{staticClass:"is-size-2"},[a("strong",[t._v("Welcome to the MyFitnessApp Sign Up Page!"),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h2",{staticClass:"is-size-0.5"},[a("strong",[t._v("Please Enter your Name, Username, Email, and Password"),a("br"),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[a("strong",[t._v("First Name:")])]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Enter Your First Name"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[a("strong",[t._v("Last Name:")])]),a("div",{staticClass:"control"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Enter Your Last Name"}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[a("strong",[t._v("Username:")])]),a("div",{staticClass:"control has-icons-left"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Enter Your Username",value:""}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[a("strong",[t._v("Email:")])]),a("div",{staticClass:"control has-icons-left"},[a("input",{staticClass:"input",attrs:{type:"email",placeholder:"Enter Your Email",value:""}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"field"},[a("h3",[a("strong",[t._v("Password:")]),a("br")]),a("p",{staticClass:"control has-icons-left"},[a("input",{staticClass:"input",attrs:{type:"password",placeholder:"Please Enter Your Password"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"control"},[a("button",{staticClass:"button is-info"},[a("strong",[t._v("Register")])])])}],R={},V=R,D=Object(d["a"])(V,W,J,!1,null,null,null),G=D.exports;e["a"].use(O["a"]);var I=[{path:"/",name:"Home",component:S},{path:"/login",name:"Login",component:H},{path:"/signuppage",name:"SignUpPage",component:G},{path:"/fitnesstracker",name:"FitnessTracker",component:function(){return a.e("FitnessTracker").then(a.bind(null,"1c3c"))},beforeEnter:X},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],K=new O["a"]({mode:"history",base:"",routes:I}),Q=K;function X(t,s,a){u["a"].user?a():a("Login")}a("5abe"),a("15f5");e["a"].config.productionTip=!1,new e["a"]({router:Q,render:function(t){return t(F)}}).$mount("#app")},cf05:function(t,s,a){t.exports=a.p+"img/logo.82b9c7a5.png"},db59:function(t,s,a){t.exports=a.p+"img/fitnesspic.9979e835.jpg"}});
//# sourceMappingURL=app.64bf2316.js.map