(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[20],{103:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return m}));var n=c(54),s=c(57),o=c(49),r=c(0),i=c(3),a=c(68),l=c.n(a),j=c(51),b=(c(26),c(19)),u=c(101),f=c(20),h=c(21),d=c(53),p=c(1);function m(){var e=Object(r.useState)({isLike:"",Comment:""}),t=Object(o.a)(e,2),c=t[0],a=t[1],m=Object(r.useState)(!1),O=Object(o.a)(m,2),g=O[0],k=O[1],v=Object(r.useState)(0),x=Object(o.a)(v,2),C=x[0],w=x[1],y=Object(u.a)(["user"]),P=Object(o.a)(y,2),N=P[0],L=(P[1],Object(b.b)()),S=Object(i.g)();Object(r.useEffect)((function(){fetch("https://shrouded-springs-22159.herokuapp.com/menu/menuitem",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),L(h.b.itemCheck(e))})).catch((function(e){return console.log(e)})),N.jwttoken&&void 0!==N.jwttoken||k(!0)}),[N.jwttoken,L]);var D=function(e){var t=e.target,c=t.name,o=t.value;a((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(n.a)({},c,o))}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{}),g&&Object(p.jsx)(i.a,{to:"/"}),Object(p.jsx)("section",{className:"mainsectionreview",children:Object(p.jsx)("div",{class:"page-wrapper p-t-180 p-b-100",children:Object(p.jsx)("div",{class:"wrapper wrapper--w960",children:Object(p.jsx)("div",{class:"card card-2",children:Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsx)("h2",{class:"title",children:"Review Form"}),Object(p.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),window.confirm("Do you want to continue to fill the form?")){if(0===C||""===c.isLike)return j.b.warning("Please fill the form completely.",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});L(f.b.commentCheck(c.Comment)),L(f.b.likeCheck(c.isLike)),L(f.b.ratingCheck(C)),S.push("/review2")}else if(0===C||""===c.isLike)j.b.warning("Please fill the form completely!",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{var t={DidLike:"Yes"===c.isLike,Rating:C,Comment:c.Comment,UserId:N.ID,RatingFoods:{},LikeFoods:[]};fetch("https://shrouded-springs-22159.herokuapp.com/form/form/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){j.b.success("Successfully saved",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),a({isLike:"",comment:""}),L(f.b.commentCheck("")),L(f.b.likeCheck("")),L(f.b.ratingCheck(0)),setTimeout((function(){window.location.reload()}),2e3)})).catch((function(e){return console.log(e)}))}},children:[Object(p.jsx)("h4",{children:"Do you like the food?"}),Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{className:"radio-simple",type:"radio",name:"isLike",onChange:D,value:"Yes"}),Object(p.jsx)("label",{class:"form-check-label",for:"exampleRadios1",children:"Yes"})]}),Object(p.jsxs)("div",{className:"form-check form-check-inline",children:[Object(p.jsx)("input",{type:"radio",className:"radio-simple",name:"isLike",onChange:D,value:"no"}),Object(p.jsx)("label",{class:"form-check-label",for:"exampleRadios2",children:"No"})]}),Object(p.jsx)("h4",{className:"form-heading",children:"Please rate the food"}),Object(p.jsx)("div",{className:"form-check form-check-inline",children:Object(p.jsx)(l.a,{count:5,onChange:function(e){w(e)},size:24,isHalf:!1,emptyIcon:Object(p.jsx)("i",{className:"far fa-star"}),halfIcon:Object(p.jsx)("i",{className:"fa fa-star-half-alt"}),fullIcon:Object(p.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{for:"fname",className:"left-align2",children:Object(p.jsx)("h4",{children:"Comments"})}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{placeholder:"Enter Comment",value:c.Comment,onChange:D,rows:"4",cols:"50",maxlength:"200",name:"Comment"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{class:"col-2",children:Object(p.jsx)("div",{class:"p-t-30",children:Object(p.jsx)("button",{class:"btn btn--radius btn--green",type:"submit",children:"Submit"})})})]})]})})})})}),Object(p.jsx)(j.a,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}},54:function(e,t,c){"use strict";function n(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}c.d(t,"a",(function(){return n}))},57:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(54);function s(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function o(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?s(Object(c),!0).forEach((function(t){Object(n.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):s(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}}}]);
//# sourceMappingURL=20.a1fa61c5.chunk.js.map