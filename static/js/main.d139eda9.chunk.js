(this.webpackJsonpsuperlista=this.webpackJsonpsuperlista||[]).push([[0],{54:function(e,t,n){e.exports=n(67)},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(59),n(39)),i=n(44),u=n(21),m=n(108),d=n(68),s=n(106),f=n(107),p=n(98),g=n(111),E=n(102),v=n(41),b=n.n(v),O=n(42),h=n.n(O),y=n(103);var j=function(e){var t=e.task,n=e.completed,a=e.removeTodo,o=e.toggleTodo,c=e.id;return r.a.createElement(p.a,null,r.a.createElement(g.a,{tabIndex:-1,checked:n,onClick:function(){return o(c)}}),r.a.createElement(p.a,{style:{textDecoration:n?"line-through":"none"}},t),r.a.createElement(y.a,null,r.a.createElement(E.a,{"aria-label":"Delete",onClick:function(){return a(c)}},r.a.createElement(b.a,null)),r.a.createElement(E.a,{"aria-label":"Edit"},r.a.createElement(h.a,null))))},k=n(104),w=n(105);var T=function(e){return r.a.createElement(d.a,null,r.a.createElement(k.a,null,e.todos.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{id:t.id,task:t.task,key:t.id,completed:t.completed,removeTodo:e.removeTodo,toggleTodo:e.toggleTodo}),r.a.createElement(w.a,null))}))))},D=n(110),P=function(e){var t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],o=n[1];return[r,function(e){o(e.target.value)},function(){o("")}]};var S=function(e){var t=e.addTodo,n=P(""),a=Object(u.a)(n,3),o=a[0],c=a[1],l=a[2];return r.a.createElement(d.a,{style:{margin:"1rem 0",padding:"0 1rem"}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o),l()}},r.a.createElement(D.a,{value:o,onChange:c,margin:"normal",label:"Add New Todo",fullWidth:!0})))},C=n(109),x=n(43),W=n.n(x);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var I=function(){var e=Object(a.useState)([{id:1,task:"Clean Fishtank",completed:!1},{id:2,task:"Wash Car",completed:!0},{id:3,task:"Grow Beard",completed:!1}]),t=Object(u.a)(e,2),n=t[0],o=t[1];return r.a.createElement(d.a,{style:{padding:0,margin:0,height:"100vh",backgroundColor:"#fafafa"},elevation:0},r.a.createElement(s.a,{color:"primary",position:"static",style:{height:"64px"}},r.a.createElement(f.a,null,r.a.createElement(m.a,{color:"inherit"},"TODOS WITH HOOKS"))),r.a.createElement(C.a,{container:!0,justify:"center",style:{marginTop:"1rem"}},r.a.createElement(C.a,{item:!0,xs:11,md:8,lg:8},r.a.createElement(S,{addTodo:function(e){o([].concat(Object(i.a)(n),[{id:W()(),task:e,completed:!1}]))}}),r.a.createElement(T,{todos:n,removeTodo:function(e){var t=n.filter((function(t){return t.id!==e}));o(t)},toggleTodo:function(e){var t=n.map((function(t){return t.id===e?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{completed:!t.completed}):t}));o(t)}}))))};n(66);var F=function(){return r.a.createElement("div",null,r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.d139eda9.chunk.js.map