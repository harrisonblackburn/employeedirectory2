(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(24),i=n.n(s),a=(n(35),n(10)),o=n(2),l=n(25),j=n(26),d=n(30),h=n(29),b=(n(36),n(1));var u=function(e){return Object(b.jsx)("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})},p=n(27),m=n.n(p),O=function(){return m.a.get("https://randomuser.me/api/?results=20")};n(56);var x=function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[" ",e.name," "]}),Object(b.jsxs)("td",{children:[" ",e.id.value," "]}),Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:e.picture.medium})}),Object(b.jsxs)("td",{children:[" ",e.email," "]}),Object(b.jsxs)("td",{children:[" ",e.phone," "]}),Object(b.jsxs)("td",{children:[" ",e.dob.date," "]})]})};n(57);var f=function(e){return Object(b.jsx)("main",{className:"wrapper",children:e.children})},v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],renderemployees:[]},e.handleSortBy=function(e){"First"===e&&console.log("sort by first name, then set state")},e.populateTable=function(){O().then((function(t){console.log(t),e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.populateTable()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(f,{children:[Object(b.jsx)(u,{backgroundImage:"https://acavideoremoteinterpreting.com/wp-content/uploads/2018/12/deaf-employee-video-remote-asl.jpg",children:Object(b.jsx)("h1",{children:"Employee Directory"})}),Object(b.jsxs)("table",{class:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",onClick:function(){return e.handleSortBy("First")},children:"First"}),Object(b.jsx)("th",{scope:"col",children:"ID"}),Object(b.jsx)("th",{scope:"col",children:"Picture"}),Object(b.jsx)("th",{scope:"col",children:"Email"}),Object(b.jsx)("th",{scope:"col",children:"Phone"}),Object(b.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(b.jsx)("tbody",{children:this.state.employees.map((function(e){return Object(b.jsx)(x,{id:e.id,name:e.name.first,picture:e.picture,email:e.email,phone:e.phone,dob:e.dob},e.id.value)}))})]})]})}}]),n}(r.a.Component);n(58);var g=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(b.jsx)(a.b,{className:"navbar-brand",to:"/",children:"Employee Directory"}),Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"navbar-nav",children:Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(a.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link",children:"Filter Employee List"})})})})]})};n(64);var y=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("span",{children:"Pupster 2017"})})};var k=function(){return Object(b.jsx)(a.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(f,{children:Object(b.jsx)(o.a,{exact:!0,path:"/",component:v})}),Object(b.jsx)(y,{})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),F()}},[[65,1,2]]]);
//# sourceMappingURL=main.e1fb9708.chunk.js.map