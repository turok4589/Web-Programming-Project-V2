(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var o=s[n];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},n={app:0},i={app:0},r=[];function o(t){return l.p+"js/"+({AdminUsers:"AdminUsers",FitnessTracker:"FitnessTracker",Fitnessfeed:"Fitnessfeed",Friendlist:"Friendlist",Users:"Users",about:"about"}[t]||t)+"."+{AdminUsers:"1ebd088c",FitnessTracker:"6d722949",Fitnessfeed:"7f943f63",Friendlist:"d84273bc",Users:"b38c8f69",about:"3ddf7981"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s={Fitnessfeed:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=new Promise((function(e,s){for(var a="css/"+({AdminUsers:"AdminUsers",FitnessTracker:"FitnessTracker",Fitnessfeed:"Fitnessfeed",Friendlist:"Friendlist",Users:"Users",about:"about"}[t]||t)+"."+{AdminUsers:"31d6cfe0",FitnessTracker:"31d6cfe0",Fitnessfeed:"f6752d67",Friendlist:"31d6cfe0",Users:"31d6cfe0",about:"31d6cfe0"}[t]+".css",i=l.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete n[t],f.parentNode.removeChild(f),s(r)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){n[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,s[1](d)}i[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},5147:function(t,e,s){"use strict";s("a434");var a={user:null,username:null,user_id:null,usertype:null,notifications:[],addNotification:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.notifications.push({text:t,type:e})},deleteNotification:function(t){this.notifications.splice(t,1)}};e["a"]=a},"53c4":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Nav"),s("div",{staticClass:"container"},[s("Notifications"),s("router-view"),s("Footer")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar container is-fixed-top is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/fitnesstracker"}},[t._v("Fitness Tracker")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/fitnessfeed"}},[t._v("Fitness Feed")]),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v(" More ")]),s("div",{staticClass:"navbar-dropdown"},[s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")])],1),s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/fitnesstracker"}},[t._v("Fitness Tracker")])],1),s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/fitnessfeed"}},[t._v("Fitness Feed")])],1)])]),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v(" Friends ")]),s("div",{staticClass:"navbar-dropdown"},[s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/users"}},[t._v("View and look for users you want to add")])],1),s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/friendlist"}},[s("strong",[t._v("Look at friendslist")])])],1)])]),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[t._v(" Admin ")]),s("div",{staticClass:"navbar-dropdown"},[s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/adminusers"}},[t._v("Users")])],1)])])],1)]),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("LoginBadge")],1),s("div",{staticClass:"navbar-item"},[s("Signout")],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[a("img",{attrs:{src:s("cf05"),height:"28"}})])}],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"LoginBadge"}},[t.session.user?s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.name))]),s("p",{staticClass:"is-size-7"},[t._v("@"+t._s(t.session.user.handle))])])]):s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button",attrs:{to:"/signuppage"}},[s("strong",[t._v("Sign Up")])]),s("router-link",{staticClass:"button",attrs:{to:"/login"}},[s("strong",[t._v("Log in")])])],1)])},c=[],u=s("5147"),d={data:function(){return{session:u["a"]}}},f=d,m=s("2877"),v=Object(m["a"])(f,l,c,!1,null,null,null),p=v.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"LoginBadge"}},[t.session.user?s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("a",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[s("strong",[t._v("SignOut")])])])]):t._e()])},b=[],g={data:function(){return{session:u["a"]}},methods:{signout:function(){u["a"].user=null,u["a"].username=null,u["a"].user_id=null,u["a"].addNotification("You have succesfully signed out"),this.$router.push("Login")}}},_=g,C=Object(m["a"])(_,h,b,!1,null,null,null),y=C.exports,w={data:function(){return{isActive:!1,session:u["a"],isAdmin:u["a"].usertype}},methods:{},components:{LoginBadge:p,Signout:y}},E=w,k=Object(m["a"])(E,r,o,!1,null,null,null),x=k.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"notifications"}},t._l(t.session.notifications,(function(e,a){return s("div",{key:a,staticClass:"notification",class:"is-"+e.type},[s("button",{staticClass:"delete",on:{click:function(e){return t.deleteNotification(a)}}}),t._v(" "+t._s(e.text)+" ")])})),0)},O=[],N={data:function(){return{session:u["a"]}},methods:{deleteNotification:function(t){u["a"].deleteNotification(t)}}},$=N,j=(s("cf45"),Object(m["a"])($,F,O,!1,null,null,null)),P=j.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer has-background-grey-darker"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("h1",{staticClass:"title has-text-primary-light"},[s("strong",[t._v("This is my early build for my Fitness Tracker App for a project at Suny Newpaltz"),s("br"),t._v(" Author: Miguel A Vasquez Fall 2020")])])])])])}],T={},L=T,S=Object(m["a"])(L,A,U,!1,null,null,null),Y=S.exports,B={components:{Nav:x,Footer:Y,Notifications:P}},D=B,M=Object(m["a"])(D,n,i,!1,null,null,null),z=M.exports,R=(s("d3b7"),s("8c4f")),W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-two-thirds"},[a("section",{staticClass:"hero is-large is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-size-1"},[t._v(" Welcome to my Fall 2020 Fitness Tracker Website ")]),a("h2",{staticClass:"is-size-0.5"},[a("strong",[t._v("This website will help you reach your fitness goals by helping you track your calories!")])])])])])]),a("div",{staticClass:"column is-one-third"},[a("section",{staticClass:"hero is-large is-bold"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("a",[a("img",{attrs:{src:s("db59")}})])])])])])])])}],V={name:"Home",components:{}},q=V,J=Object(m["a"])(q,W,H,!1,null,null,null),I=J.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[t._m(0),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third is-offset-one-third"},[s("div",{staticClass:"field"},[t._m(1),s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"Please Enter Your Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(2),t._m(3)])]),s("div",{staticClass:"field"},[t._m(4),s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"text",placeholder:"Please Enter Your Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(5)])]),t._m(6),s("div",{staticClass:"field is-grouped buttons are-small"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.Login(e)}}},[t._v(" Login ")])]),t._m(7),s("p",{staticClass:"control"},[s("router-link",{staticClass:"button is-info",attrs:{to:"/signuppage"}},[t._v("No Account? Click This to Sign Up!")])],1)])])])])},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"is-size-2"},[s("strong",[t._v("Please enter your email and password"),s("br"),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[s("strong",[t._v("Email:")]),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-right"},[s("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[s("strong",[t._v("Password:")]),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"checkbox"},[s("input",{attrs:{type:"checkbox"}}),t._v(" Remember me"),s("br"),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"control"},[s("button",{staticClass:"button is-info"},[t._v(" Forgot Password? ")])])}],Q=(s("96cf"),s("1da1")),X=s("bea6"),Z={data:function(){return{email:"",password:""}},methods:{Login:function(){var t=this;return Object(Q["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(X["g"])(t.email,t.password);case 2:s=e.sent,s?(u["a"].user={name:s[0].Firstname+" "+s[0].Lastname,handle:s[0].Value},u["a"].user_id=s[0].User_id,u["a"].usertype=s[0].User_Type,u["a"].username=s[0].Username,u["a"].addNotification("Yay! You logged in","success"),t.$router.push("FitnessTracker")):u["a"].addNotification("You have entered the wrong email or password");case 4:case"end":return e.stop()}}),e)})))()}}},tt=Z,et=Object(m["a"])(tt,K,G,!1,null,null,null),st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[t._m(0),t._m(1),s("div",{staticClass:"field"},[t._m(2),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter Your First Name"},domProps:{value:t.firstname},on:{input:function(e){e.target.composing||(t.firstname=e.target.value)}}})])]),s("div",{staticClass:"field"},[t._m(3),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter Your Last Name"},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}})])]),s("div",{staticClass:"field"},[t._m(4),s("div",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter Your Username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._m(5)])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[t._m(6),s("div",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"input",attrs:{type:"number",placeholder:"Enter a year"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}}),t._m(7)])])]),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[t._m(8),s("div",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],staticClass:"input",attrs:{type:"number",placeholder:"Month(Enter a number)"},domProps:{value:t.month},on:{input:function(e){e.target.composing||(t.month=e.target.value)}}}),t._m(9)])])]),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[t._m(10),s("div",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.day,expression:"day"}],staticClass:"input",attrs:{type:"number",placeholder:"Enter the day you were born(has to be a number)"},domProps:{value:t.day},on:{input:function(e){e.target.composing||(t.day=e.target.value)}}}),t._m(11)])])])]),s("div",{staticClass:"field"},[t._m(12),s("div",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter Your Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(13)])]),s("div",{staticClass:"field"},[t._m(14),s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"text",placeholder:"Please Enter Your Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(15)])]),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-info",on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[s("strong",[t._v("Register")])])]),s("div",{staticClass:"control"},[s("router-link",{staticClass:"button is-link is-danger",attrs:{to:"/login"}},[s("strong",[t._v("Already have an account?")])])],1)])])},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"is-size-2"},[s("strong",[t._v("Welcome to the MyFitnessApp Sign Up Page!"),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"is-size-0.5"},[s("strong",[t._v("Please Enter your Name, Username, Date Of Birth, Email, and Password"),s("br"),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("First Name:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("Last Name:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("Username:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("Enter The Year You Were Born:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("Month You Were Born:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("Day You Were Born:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"label"},[s("strong",[t._v("Email:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[s("strong",[t._v("Password:")]),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])}],it={data:function(){return{email:"",password:"",username:"",firstname:"",lastname:"",year:0,month:0,day:0}},methods:{signup:function(){var t=this;return Object(Q["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.year+"-"+t.month+"-"+t.day,e.next=3,Object(X["h"])(t.username,t.firstname,t.lastname,s,t.password,t.email);case 3:u["a"].addNotification("Yay! You Signed up! Login to begin tracking your fitness goals!"),t.$router.push("Login");case 5:case"end":return e.stop()}}),e)})))()}}},rt=it,ot=Object(m["a"])(rt,at,nt,!1,null,null,null),lt=ot.exports;a["a"].use(R["a"]);var ct=[{path:"/",name:"Home",component:I},{path:"/login",name:"Login",component:st},{path:"/users",name:"Users",component:function(){return s.e("Users").then(s.bind(null,"ed81"))},beforeEnter:ft},{path:"/signuppage",name:"SignUpPage",component:lt},{path:"/friendlist",name:"Friendlist",component:function(){return s.e("Friendlist").then(s.bind(null,"dc22"))},beforeEnter:ft},{path:"/fitnessfeed",name:"Fitnessfeed",component:function(){return s.e("Fitnessfeed").then(s.bind(null,"1e47"))},beforeEnter:ft},{path:"/adminusers",name:"AdminUsers",component:function(){return s.e("AdminUsers").then(s.bind(null,"6135"))},beforeEnter:mt},{path:"/fitnesstracker",name:"FitnessTracker",component:function(){return s.e("FitnessTracker").then(s.bind(null,"1c3c"))},beforeEnter:ft},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],ut=new R["a"]({mode:"history",base:"",routes:ct}),dt=ut;function ft(t,e,s){u["a"].user?s():s("Login")}function mt(t,e,s){5==u["a"].usertype?s():s("Users")}var vt=s("289d");s("5abe"),s("15f5");a["a"].config.productionTip=!1,a["a"].use(vt["a"]),new a["a"]({router:dt,render:function(t){return t(z)}}).$mount("#app")},"773f":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("d3b7");var a=Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT||"/";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?fetch(a+t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})):fetch(a+t).then((function(t){return t.json()}))}},bea6:function(t,e,s){"use strict";s.d(e,"d",(function(){return n})),s.d(e,"e",(function(){return i})),s.d(e,"g",(function(){return r})),s.d(e,"h",(function(){return o})),s.d(e,"f",(function(){return l})),s.d(e,"c",(function(){return c})),s.d(e,"a",(function(){return u})),s.d(e,"b",(function(){return d}));var a=s("773f");s("5147");function n(){return Object(a["a"])("users")}function i(){return Object(a["a"])("users/usertableforadmin")}function r(t,e){return Object(a["a"])("users/login",{email:t,password:e})}function o(t,e,s,n,i,r){return Object(a["a"])("users/register",{UserName:t,FirstName:e,LastName:s,DOB:n,Password:i,Email:r})}function l(t){return Object(a["a"])("friendlist/friendslist",{Owner_id:t})}function c(t){return Object(a["a"])("users/delete",{id:t})}function u(t,e){return Object(a["a"])("friendlist/add_Friend",{Friends_id:t,Owner_id:e})}function d(t,e){return Object(a["a"])("friendlist/delete_Friend",{Friends_id:t,Owner_id:e})}},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},cf45:function(t,e,s){"use strict";var a=s("53c4"),n=s.n(a);n.a},db59:function(t,e,s){t.exports=s.p+"img/fitnesspic.9979e835.jpg"}});
//# sourceMappingURL=app.aba771bc.js.map