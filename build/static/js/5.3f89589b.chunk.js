(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[5],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(59),c=n.n(r),i=n(61),a=n(54),o=n(57),s=n(49),l=n(0),u=n(53),j=n(3),b=n(51),d=(n(26),n(101)),h=n(1);function p(){var e=Object(j.g)(),t=Object(d.a)(["user"]),n=Object(s.a)(t,2),r=n[0],p=(n[1],Object(l.useState)(!1)),m=Object(s.a)(p,2),v=m[0],f=m[1],O=Object(l.useState)(""),g=Object(s.a)(O,2),x=g[0],y=g[1],I=Object(l.useState)({userID:r.ID,image:"",text:""}),N=Object(s.a)(I,2),w=N[0],M=N[1],Z=Object(l.useState)(!1),G=Object(s.a)(Z,2),E=G[0],k=G[1];Object(l.useEffect)((function(){r.jwttoken||k(!0),r.jwttoken&&"false"===r.ADMIN&&f(!0)}),[r.ADMIN,r.jwttoken]);var D=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,i,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files,(r=new FormData).append("file",n[0]),r.append("upload_preset","ifmsImage"),e.next=6,fetch("https://api.cloudinary.com/v1_1/dnvqpohyb/image/upload",{method:"POST",body:r});case 6:return i=e.sent,e.next=9,i.json();case 9:a=e.sent,console.log(a),y(a.secure_url);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{}),E&&Object(h.jsx)(j.a,{to:"/menutable/:id"}),v&&Object(h.jsx)(j.a,{to:"Announcement"}),Object(h.jsx)("section",{className:"mainsectionreview",children:Object(h.jsx)("div",{class:"page-wrapper p-t-180 p-b-100",children:Object(h.jsx)("div",{class:"wrapper wrapper--w960",children:Object(h.jsx)("div",{class:"card card-2",children:Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("h2",{class:"title",children:"Add Announcement"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={userID:r.ID,image:x,text:w.text};console.log(n),fetch("https://shrouded-springs-22159.herokuapp.com/announcement/announcement",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){b.b.success("Successfully added.",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),setTimeout((function(){e.push("/Announcement")}),2e3)})).catch((function(e){return console.log(e)}))},children:[Object(h.jsx)("h4",{children:Object(h.jsx)("label",{className:"form-control-label"})}),Object(h.jsxs)("div",{className:"btn #64b5f6 blue darken-1",children:[Object(h.jsx)("span",{children:"Upload Image"}),Object(h.jsx)("input",{type:"file",name:"image",onChange:D})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"input-group",children:Object(h.jsx)("input",{class:"input--style-2",type:"text",placeholder:"Enter text",name:"text",value:w.text,onChange:function(e){var t=e.target,n=t.name,r=t.value;M((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(a.a)({},n,r))}))}})}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{class:"btn btn-sm btn-success mt-4 ",type:"submit",children:"Submit"})]})]})})})})}),Object(h.jsx)(b.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return a}));var r={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},c={Accept:"application/json","Content-Type":"application/json",withCredentials:!0,credentials:"include"},i={path:"/",expires:new Date(Date.now()+1728e4)},a={Accept:"application/json","Content-Type":"application/json"}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(49),c=n(51),i=(n(26),n(101)),a=(n(0),n(18)),o=n(1);function s(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"collapse navbar-collapse sub-menu-bar",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{id:"nav",className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/static",children:"Statistics"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/blogs",children:"Blogs"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/Announcement",children:"Announcements"})}),Object(o.jsxs)("li",{class:"nav-item",children:[Object(o.jsx)(a.b,{exact:!0,to:"/usertable",children:"Tables"}),Object(o.jsxs)("ul",{class:"sub-menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{exact:!0,to:"/usertable",children:"Users"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{exact:!0,to:"/menutable",children:"Mess Menu"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{exact:!0,to:"/formtable",children:"Form Table"})})]})]})]})}),Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(a.b,{exact:!0,activeClassName:"menu_active",className:"btn btn-danger",to:"/logout",children:"Logout"})})]})}function l(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"collapse navbar-collapse sub-menu-bar",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{id:"nav",className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/static",children:"Statistics"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/blogs",children:"Blogs"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/Announcement",children:"Announcements"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/mess",children:"Mess Menu"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/review",children:"Feedback / Review"})})]})}),Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(a.b,{exact:!0,activeClassName:"menu_active",className:"btn btn-danger",to:"/logout",children:"Logout"})})]})}var u=n(55),j=n.n(u),b=n(56),d=n.n(b),h=n(52);function p(){var e,t=Object(i.a)(["user"]),n=Object(r.a)(t,2),s=(n[0],n[1]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"collapse navbar-collapse sub-menu-bar",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{id:"nav",className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/static",children:"Statistics"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/mess",children:"Mess Menu"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(a.b,{exact:!0,to:"/review",children:"Feedback / Review"})})]})}),Object(o.jsx)("div",{className:"button",children:Object(o.jsx)(j.a,{clientId:"891482342487-b7l4qtvnvmqivo2fkhj98hqu7h4kevpk.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(t){d()({method:"post",url:"".concat("https://shrouded-springs-22159.herokuapp.com","/api/googlelogin"),data:JSON.stringify({tokenId:t.tokenId}),headers:h.c}).then((function(t){"Other mail"===t.data.message?c.b.warning("Please Login with IITDh Email",h.b):void 0!==(e=t.data.jsonToken)&&null!==e?(s("jwttoken",e,h.a),s("ADMIN",t.data.user.isAdmin,h.a),s("ID",t.data.user._id,h.a),c.b.success("Successfully login",h.b),window.location.reload()):c.b.error("Something went Wrong",h.b)})).catch((function(e){return console.log(e)}))},onFailure:function(e){console.log(e),c.b.error("Error from the Google Site",h.b)},cookiePolicy:"single_host_origin"})}),Object(o.jsx)(c.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}function m(){var e=Object(i.a)(["user"]),t=Object(r.a)(e,2),n=t[0],u=(t[1],function(){return n.jwttoken&&void 0!==n.jwttoken?null!==n.ADMIN&&"true"===n.ADMIN?Object(o.jsx)(s,{}):Object(o.jsx)(l,{}):Object(o.jsx)(p,{})});return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("div",{className:"navbar-area",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row align-items-center",children:Object(o.jsx)("div",{className:"col-lg-12",children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(o.jsx)(a.b,{exact:!0,className:"navbar-brand logo",to:"/",children:Object(o.jsx)("img",{className:"logo1",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAAB6CAYAAADtXdsAAAAACXBIWXMAABJ0AAASdAHeZh94AAAKxGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wOS0yN1QxMDowOToyOSswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDktMjlUMTY6MzU6MjErMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDktMjlUMTY6MzU6MjErMDU6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZjM5YTE2ODYtY2YxYi00MjQxLTk4M2ItNjc0ZDc0ZTQ0ZDE1IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTEwMzllYTEtMTc3ZS0yMjQ2LTkyYTAtNDJmNjZmYTY3M2QwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Y2NlNzc4MDMtZmI2YS02MzQzLTg4NmQtYmVmODZiMjc4ODIyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjY2U3NzgwMy1mYjZhLTYzNDMtODg2ZC1iZWY4NmIyNzg4MjIiIHN0RXZ0OndoZW49IjIwMjEtMDktMjdUMTA6MDk6MjkrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGltYWdlL3BuZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzUxNGNiZi1mNDIyLWMwNDMtOWQ2MS0zMDhjZjQ0NTBiMWMiIHN0RXZ0OndoZW49IjIwMjEtMDktMjlUMTQ6MzA6MDgrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWM1ZGYwMmMtNDgwMC00ZjRlLTg3ODMtZjkwNmE2MDdjODk0IiBzdEV2dDp3aGVuPSIyMDIxLTA5LTI5VDE0OjMwOjUwKzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjczNTZjNjFjLTQ2ZGUtYTA0Ni1iZGJkLWI4YTRkZDcxYWM4YSIgc3RFdnQ6d2hlbj0iMjAyMS0wOS0yOVQxNDozMDo1MCswNTozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMzlhMTY4Ni1jZjFiLTQyNDEtOTgzYi02NzRkNzRlNDRkMTUiIHN0RXZ0OndoZW49IjIwMjEtMDktMjlUMTY6MzU6MjErMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWM1ZGYwMmMtNDgwMC00ZjRlLTg3ODMtZjkwNmE2MDdjODk0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmNjZTc3ODAzLWZiNmEtNjM0My04ODZkLWJlZjg2YjI3ODgyMiIgc3RSZWY6b3JpZ2luYWxEb2N1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",alt:"Logo",width:"120"})}),Object(o.jsxs)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(o.jsx)("span",{className:"toggler-icon"}),Object(o.jsx)("span",{className:"toggler-icon"}),Object(o.jsx)("span",{className:"toggler-icon"})]}),Object(o.jsx)(u,{})]})})})})})}),Object(o.jsx)(c.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}},54:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(54);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},59:function(e,t,n){e.exports=n(60)},60:function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,c="function"===typeof Symbol?Symbol:{},i=c.iterator||"@@iterator",a=c.asyncIterator||"@@asyncIterator",o=c.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(D){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var c=t&&t.prototype instanceof m?t:m,i=Object.create(c.prototype),a=new G(r||[]);return i._invoke=function(e,t,n){var r=j;return function(c,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===c)throw i;return k()}for(n.method=c,n.arg=i;;){var a=n.delegate;if(a){var o=w(a,n);if(o){if(o===p)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===j)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?h:b,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(D){return{type:"throw",arg:D}}}e.wrap=l;var j="suspendedStart",b="suspendedYield",d="executing",h="completed",p={};function m(){}function v(){}function f(){}var O={};s(O,i,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(E([])));x&&x!==n&&r.call(x,i)&&(O=x);var y=f.prototype=m.prototype=Object.create(O);function I(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(c,i,a,o){var s=u(e[c],e,i);if("throw"!==s.type){var l=s.arg,j=l.value;return j&&"object"===typeof j&&r.call(j,"__await")?t.resolve(j.__await).then((function(e){n("next",e,a,o)}),(function(e){n("throw",e,a,o)})):t.resolve(j).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,o)}))}o(s.arg)}var c;this._invoke=function(e,r){function i(){return new t((function(t,c){n(e,r,t,c)}))}return c=c?c.then(i,i):i()}}function w(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,w(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var c=u(r,e.iterator,n.arg);if("throw"===c.type)return n.method="throw",n.arg=c.arg,n.delegate=null,p;var i=c.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function Z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function G(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function E(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var c=-1,a=function n(){for(;++c<e.length;)if(r.call(e,c))return n.value=e[c],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:k}}function k(){return{value:t,done:!0}}return v.prototype=f,s(y,"constructor",f),s(f,"constructor",v),v.displayName=s(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},I(N.prototype),s(N.prototype,a,(function(){return this})),e.AsyncIterator=N,e.async=function(t,n,r,c,i){void 0===i&&(i=Promise);var a=new N(l(t,n,r,c),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(y),s(y,o,"Generator"),s(y,i,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=E,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function c(r,c){return o.type="throw",o.arg=e,n.next=r,c&&(n.method="next",n.arg=t),!!c}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return c("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return c(a.catchLoc,!0);if(this.prev<a.finallyLoc)return c(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return c(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return c(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n];if(c.tryLoc<=this.prev&&r.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var i=c;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),Z(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var c=r.arg;Z(n)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:E(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=r}catch(c){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},61:function(e,t,n){"use strict";function r(e,t,n,r,c,i,a){try{var o=e[i](a),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,i){var a=e.apply(t,n);function o(e){r(a,c,i,o,s,"next",e)}function s(e){r(a,c,i,o,s,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=5.3f89589b.chunk.js.map