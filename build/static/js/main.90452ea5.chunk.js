(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(22),s=a.n(n),i=a(6),d=a(16),o=a(9),j=a(10),l=a(8),u=a(110),b=a(2),O=(a(59),a(107)),h=a(1);function p(e){var t=e.title,a=e.description,r=e.dateCreated,n=(e.complete,e.dateComplete,e.id),s=Object(c.useState)(""),o=Object(i.a)(s,2),u=o[0],b=o[1],p=Object(c.useState)(""),x=Object(i.a)(p,2),f=x[0],m=x[1],g=Object(c.useContext)(l.a),v=g.state,C=g.dispatch,w=(Object(j.d)(),Object(d.b)((function(e){return{url:"/todo/".concat(e),headers:{Authorization:"".concat(v.user.access_token)},method:"delete",data:{id:e}}}))),y=Object(i.a)(w,2),E=y[0],k=y[1];return Object(c.useEffect)((function(){var e;E&&E.data&&!1===E.isLoading&&(e="undefined"==typeof k.data?n:k.data.id,C({type:"DELETE_TODO",id:e}))}),[E]),Object(h.jsx)("form",{children:Object(h.jsxs)("div",{class:"input-group col-lg-12 mb-0",children:[Object(h.jsx)("input",{type:"text",defaultValue:t,disabled:"disabled"}),Object(h.jsx)("input",{type:"text",defaultValue:a,disabled:"disabled"}),Object(h.jsx)("input",{type:"date",defaultValue:r,disabled:"disabled"}),Object(h.jsx)("input",{type:"checkbox",onChange:function(){if(u)b(""),m("");else{var e=(new Date).toISOString().slice(0,10);b("checked"),m(e)}},checked:u}),Object(h.jsx)("input",{type:"date",defaultValue:f}),Object(h.jsx)(O.a,{variant:"link",onClick:function(e){k(n)},children:"Delete"})]})})}var x=r.a.memo(p);function f(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],u=s[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),p=O[0],x=O[1],f=Object(c.useState)(!1),m=Object(i.a)(f,2),g=m[0],v=m[1],C=Object(c.useState)(""),w=Object(i.a)(C,2),y=w[0],E=w[1],k=Object(c.useContext)(l.a),S=k.state,L=k.dispatch,T=S.user,R=(Object(j.d)(),Object(d.b)((function(e){var t=e.title,a=e.description,c=e.dateCreated,r=e.complete,n=e.dateComplete,s=e.author;return{url:"/todo",method:"post",headers:{Authorization:"".concat(S.user.access_token)},data:{title:t,description:a,dateCreated:c,complete:r,dateComplete:n,author:s}}}))),F=Object(i.a)(R,2),_=F[0],D=F[1];return Object(c.useEffect)((function(){}),[g]),Object(c.useEffect)((function(){_&&_.data&&L({type:"CREATE_TODO",title:a,description:o,dateCreated:p,complete:g,dateComplete:y,id:_.data.id,author:T.username})}),[_]),Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),D({title:a,description:o,dateCreated:p,complete:g,dateComplete:y,author:T.username})},children:Object(h.jsxs)("div",{class:"input-group col-lg-12 mb-0",children:[Object(h.jsx)("input",{id:"title",name:"title",placeholder:"title",defaultValue:a,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("input",{id:"description",description:"title",placeholder:"description",defaultValue:o,onChange:function(e){return u(e.target.value)}}),Object(h.jsx)("input",{id:"dateCreated",type:"date",description:"dateCreated",placeholder:"dateCreated",defaultValue:p,onChange:function(e){return x(e.target.value)}}),Object(h.jsx)("input",{id:"complete",type:"checkbox",description:"complete",defaultValue:g,onChange:function(){if(g)v((function(e){return!e})),E("");else{var e=(new Date).toISOString().slice(0,10);v((function(e){return!e})),E(e)}}}),Object(h.jsx)("input",{id:"dateComplete",type:"date",description:"dateComplete",placeholder:"dateComplete",defaultValue:y}),Object(h.jsx)("input",{id:"add",type:"submit",value:"Add"})]})})}function m(){var e=Object(c.useContext)(l.a),t=e.state,a=(e.dispatch,t.todos);return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{}),Object(h.jsx)("hr",{}),a.map((function(e,t){return Object(c.createElement)(x,Object(b.a)(Object(b.a)({},e),{},{title:e.title,description:e.description,dateCreated:e.dateCreated,complete:e.complete,dateComplete:e.dateComplete,id:e.id?e.id:e._id,author:e.author,key:"ToDo-"+t}))}))]})}var g=a.p+"static/media/dogImage.4c434d19.jpg";function v(){var e=Object(c.useContext)(l.a).state.user;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{class:"container",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsxs)("h1",{class:"text-center",children:["HELLO\uff01",e.username]}),Object(h.jsx)("div",{class:"span4",children:Object(h.jsx)("img",{class:"rounded mx-auto d-block",src:g})})]})})})}function C(){var e=Object(c.useContext)(l.a),t=e.state,a=e.dispatch,r=t.user,n=Object(d.b)((function(){return{url:"/todo",headers:{Authorization:"".concat(t.user.access_token)},method:"get"}})),s=Object(i.a)(n,2),o=s[0],j=s[1];Object(c.useEffect)((function(){j()}),[t.user.access_token]),Object(c.useEffect)((function(){o&&o.data&&!1===o.isLoading&&a({type:"FETCH_TODOS",todos:o.data.todo})}),[o]);o.data;var u=o.isLoading;return r?Object(h.jsxs)(h.Fragment,{children:[u&&"loading..."," ",Object(h.jsx)(m,{})]}):Object(h.jsx)(h.Fragment,{children:" "})}var w=a(108),y=a(109),E=a(114),k=a(112);function S(e){var t=e.show,a=e.handleClose,r=Object(c.useContext)(l.a).dispatch,n=Object(c.useState)(""),s=Object(i.a)(n,2),o=(s[0],s[1]),j=Object(c.useState)({username:"",password:"",passwordRepeat:""}),u=Object(i.a)(j,2),p=u[0],x=u[1],f=Object(d.b)((function(e,t){return{url:"auth/register",method:"post",data:{username:e,password:t,passwordConfirmation:t}}})),m=Object(i.a)(f,2),g=m[0],v=m[1];return Object(c.useEffect)((function(){g&&g.data&&r({type:"REGISTER",username:g.data.username})}),[g]),Object(c.useEffect)((function(){g&&!1===g.isLoading&&(g.data||g.error)&&(g.error?(o("Registration failed, please try again later."),alert("fail")):(o("Registration successful. You may now login."),alert("success")))}),[g]),Object(h.jsx)(E.a,{show:t,onHide:a,children:Object(h.jsxs)(k.a,{onSubmit:function(e){e.preventDefault(),v(p.username,p.password),a()},children:[Object(h.jsx)(E.a.Header,{closeButton:!0,children:Object(h.jsx)(E.a.Title,{children:"Register"})}),Object(h.jsxs)(E.a.Body,{children:[Object(h.jsx)(k.a.Label,{htmlFor:"register-username",children:"Username:"}),Object(h.jsx)(k.a.Control,{type:"text",value:p.username,onChange:function(e){return x(Object(b.a)(Object(b.a)({},p),{},{username:e.target.value}))},name:"register-username",id:"register-username"}),Object(h.jsx)(k.a.Label,{htmlFor:"register-password",children:"Password:"}),Object(h.jsx)(k.a.Control,{type:"password",name:"register-password",id:"register-password",value:p.password,onChange:function(e){return x(Object(b.a)(Object(b.a)({},p),{},{password:e.target.value}))}}),Object(h.jsx)(k.a.Label,{htmlFor:"register-password-repeat",children:"Repeat password:"}),Object(h.jsx)(k.a.Control,{type:"password",name:"register-password-repeat",id:"register-password-repeat",value:p.passwordRepeat,onChange:function(e){return x(Object(b.a)(Object(b.a)({},p),{},{passwordRepeat:e.target.value}))}})]}),Object(h.jsxs)(E.a.Footer,{children:[Object(h.jsx)(O.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(h.jsx)(O.a,{variant:"primary",type:"submit",disabled:0===p.username.length||0===p.password.length||p.password!==p.passwordRepeat,children:"Register"})]})]})})}function L(e){var t=e.show,a=e.handleClose,r=Object(c.useContext)(l.a).dispatch,n=Object(c.useState)(""),s=Object(i.a)(n,2),o=s[0],u=s[1],b=Object(c.useState)(""),p=Object(i.a)(b,2),x=p[0],f=p[1],m=Object(c.useState)(!1),g=Object(i.a)(m,2),v=g[0],C=g[1],w=Object(j.d)();var y=Object(d.b)((function(e,t){return{url:"auth/login",method:"post",data:{username:e,password:t}}})),S=Object(i.a)(y,2),L=S[0],T=S[1];return Object(c.useEffect)((function(){L&&!1===L.isLoading&&(L.data||L.error)&&(L.error?(C(!0),alert("failed")):(C(!1),r({type:"LOGIN",username:o,access_token:L.data.access_token}),w.navigate("/")))}),[L]),Object(h.jsx)(E.a,{show:t,onHide:a,children:Object(h.jsxs)(k.a,{onSubmit:function(e){e.preventDefault(),T(o,x),a()},children:[Object(h.jsx)(E.a.Header,{closeButton:!0,children:Object(h.jsx)(E.a.Title,{children:"Login"})}),Object(h.jsxs)(E.a.Body,{children:[Object(h.jsx)(k.a.Label,{htmlFor:"login-username",children:"Username:"}),Object(h.jsx)(k.a.Control,{type:"text",value:o,onChange:function(e){u(e.target.value)},name:"login-username",id:"login-username"}),Object(h.jsx)(k.a.Label,{htmlFor:"login-password",children:"Password:"}),Object(h.jsx)(k.a.Control,{type:"password",value:x,onChange:function(e){f(e.target.value)},name:"login-password",id:"login-password"}),v&&Object(h.jsx)(k.a.Text,{style:{color:"red"},children:"Invalid username or password"})]}),Object(h.jsxs)(E.a.Footer,{children:[Object(h.jsx)(O.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(h.jsx)(O.a,{variant:"primary",disabled:0===o.length,type:"submit",children:"Login"})]})]})})}function T(e){var t=Object(c.useContext)(l.a).state,n=r.a.lazy((function(){return a.e(3).then(a.bind(null,115))})),s=Object(c.useState)(!1),d=Object(i.a)(s,2),o=d[0],j=d[1],u=Object(c.useState)(!1),b=Object(i.a)(u,2),p=b[0],x=b[1];return t.user.username?Object(h.jsx)(n,{}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"justify-content-end",children:[Object(h.jsxs)(O.a,{variant:"link",onClick:function(e){return j(!0)},children:[Object(h.jsx)("span",{children:Object(h.jsx)(w.a,{})}),"Login"]}),Object(h.jsx)(L,{show:o,handleClose:function(){return j(!1)}}),Object(h.jsxs)(O.a,{variant:"link",onClick:function(e){return x(!0)},children:[Object(h.jsx)("span",{children:Object(h.jsx)(y.a,{})}),"Register"]}),Object(h.jsx)(S,{show:p,handleClose:function(){return x(!1)}})]})})}var R=a(113),F=a(111);function _(){return Object(h.jsx)(j.a,{href:"/about",children:Object(h.jsx)(R.a.Brand,{children:"About"})})}function D(){return Object(h.jsx)(j.a,{href:"/",children:Object(h.jsx)(R.a.Brand,{children:"HomePage"})})}function B(){var e=Object(c.useContext)(l.a).state.user;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(j.a,{href:"/profile",children:Object(h.jsx)(R.a.Brand,{children:e.username?"Profile":null})})})}function H(){Object(c.useContext)(l.a).state.user;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(R.a,{bg:"light",variant:"light",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(R.a.Brand,{href:"/",children:Object(h.jsx)(D,{})}),Object(h.jsx)(R.a.Brand,{href:"/profile",children:Object(h.jsx)(B,{})}),Object(h.jsx)(R.a.Brand,{href:"/about",children:Object(h.jsx)(_,{})}),Object(h.jsxs)(R.a.Collapse,{id:"basic-navbar-nav",children:[Object(h.jsx)(F.a,{className:"me-auto"}),Object(h.jsx)(r.a.Suspense,{fallback:"Loading...",children:Object(h.jsx)(T,{})})]})]})})})}function I(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{class:"card text-center",children:[Object(h.jsx)("div",{class:"card-header",children:"ABOUT ME"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("h5",{class:"card-title",children:"Emails"}),Object(h.jsx)("p",{class:"card-text",children:"Please email me at taskMaster@task.com."}),Object(h.jsx)("a",{href:"/",class:"btn btn-primary",children:"Home Page"})]}),Object(h.jsx)("div",{class:"card-header",children:"GITHUB"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("h5",{class:"card-title",children:"Find me on GitHub"}),Object(h.jsx)("p",{class:"card-text",children:"https://github.com/YYYXie"}),Object(h.jsx)("a",{href:"https://github.com/YYYXie",class:"btn btn-primary",children:"GitHub Page"})]})]})})}var V=a(55);function A(e,t){switch(t.type){case"LOGIN":case"REGISTER":return{username:t.username,access_token:t.access_token};case"LOGOUT":return{username:void 0,access_token:void 0};default:return e}}function G(e,t){switch(t.type){case"CREATE_TODO":var a={id:t.id,title:t.title,description:t.description,dateCreated:t.dateCreated,complete:t.complete,dateComplete:t.dateComplete,author:t.author};return[].concat(Object(V.a)(e),[a]);case"DELETE_TODO":return console.log("delete id:"+t.id),e.filter((function(e,a){return e._id!==t.id}))||e.filter((function(e,a){return e.id!==t.id}));case"FETCH_TODOS":return t.todos;default:return e}}function P(e,t){return{user:A(e.user,t),todos:G(e.todos,t)}}var Y=function(){var e=Object(c.useReducer)(P,{user:{},todos:[]}),t=Object(i.a)(e,2),a=t[0],r=t[1],n=Object(o.f)({"/":Object(o.g)({view:Object(h.jsx)(C,{})}),"/userbar":Object(o.g)({view:Object(h.jsx)(T,{})}),"/about":Object(o.g)({view:Object(h.jsx)(I,{})}),"/profile":Object(o.g)({view:Object(h.jsx)(v,{})}),"/todo/:id":Object(o.g)((function(e){return{view:Object(h.jsx)(m,{id:e.params.id})}}))});return Object(h.jsx)("div",{children:Object(h.jsx)(l.a.Provider,{value:{state:a,dispatch:r},children:Object(h.jsx)(j.b,{routes:n,children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(H,{}),Object(h.jsx)("hr",{}),Object(h.jsx)(j.c,{})]})})})})},U=a(37),z=a.n(U).a.create({baseURL:"/"});s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(d.a,{value:z,children:Object(h.jsx)(Y,{})})}),document.getElementById("root"))},8:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0),r=a.n(c).a.createContext({state:{},dispatch:function(){}})}},[[103,1,2]]]);
//# sourceMappingURL=main.90452ea5.chunk.js.map