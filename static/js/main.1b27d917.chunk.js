(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"db",(function(){return U}));var c,r=n(1),a=n.n(r),j=n(31),i=n.n(j),b=n(42),u=n(30),s=n(45),o=n(17),d=n(9),l="/top",O="/redux-page1",h="/redux-page2",x="/fire-base-page1",p=n(4),f=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.b,{to:l,children:"Top"}),Object(p.jsx)(o.b,{to:O,children:"Page1"}),Object(p.jsx)(o.b,{to:h,children:"Page2"})]})},g=n(13),m=u.c,v=function(){return Object(u.b)()},C=n(34),k=Object(C.b)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),I=k.actions,y=I.increment,P=I.decrement,S=I.incrementByAmount,B=function(){return{count:m((function(e){return e.counter.value}))}},F=k.reducer,w=function(){var e=v(),t=B().count,n=Object(r.useState)(2),c=Object(g.a)(n,2),a=c[0],j=c[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:"Page1"}),Object(p.jsx)("button",{onClick:function(){return e(y())},children:"\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(p.jsx)("button",{onClick:function(){return e(P())},children:"\u30c7\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(p.jsx)("input",{value:a,onChange:function(e){return j(Number(e.target.value))}}),Object(p.jsx)("button",{onClick:function(){return e(S(a))},children:"\u6570\u5024\u5206\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(p.jsx)("div",{children:t})]})},A=function(){var e=v(),t=B().count,n=Object(r.useState)(2),c=Object(g.a)(n,2),a=c[0],j=c[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:"Page2"}),Object(p.jsx)("button",{onClick:function(){return e(y())},children:"\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(p.jsx)("button",{onClick:function(){return e(P())},children:"\u30c7\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(p.jsx)("input",{value:a,onChange:function(e){return j(Number(e.target.value))}}),Object(p.jsx)("button",{onClick:function(){return e(S(a))},children:"\u6570\u5024\u5206\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(p.jsx)("div",{children:t})]})},L=function(){return Object(p.jsx)("div",{children:"Top"})},N=n(18),R=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(N.d)(Object(N.c)());return Object(N.b)(Object(N.a)(a,"users")).then((function(e){e.exists()?console.log(e.val()):console.log("No data available")})).catch((function(e){console.error(e)})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:"Page1"}),Object(p.jsx)("input",{onChange:function(e){return c(e.target.value)},placeholder:"\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(p.jsx)("button",{onClick:function(){Object(N.e)(Object(N.d)(U,"users/"),{username:n})},children:"\u30c7\u30fc\u30bf\u8ffd\u52a0"})]})},T=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.b,{to:l,children:"Top"}),Object(p.jsx)(o.b,{to:O,children:"Redux"}),Object(p.jsx)(o.b,{to:x,children:"FireBase"})]})},z=function(){return Object(p.jsx)(o.a,{children:Object(p.jsxs)(d.d,{children:[Object(p.jsxs)(d.b,{exact:!0,path:l,children:[Object(p.jsx)(T,{}),Object(p.jsx)(L,{})]}),Object(p.jsx)(d.b,{path:x,children:Object(p.jsx)(R,{})}),Object(p.jsxs)(d.b,{path:O,children:[Object(p.jsx)(f,{}),Object(p.jsx)(w,{})]}),Object(p.jsxs)(d.b,{path:h,children:[Object(p.jsx)(f,{}),Object(p.jsx)(A,{})]}),Object(p.jsx)(d.b,{path:"*",children:Object(p.jsx)(d.a,{to:{pathname:l}})})]})})},G=Object(C.a)({reducer:{counter:F}}),J=function(){return Object(p.jsx)(K,{children:Object(p.jsx)(u.a,{store:G,children:Object(p.jsx)(z,{})})})},K=s.a.div(c||(c=Object(b.a)(["\n    background-color: skyblue;\n    min-height: 100vh;\n"]))),M=n(49);Object(M.a)({apiKey:"AIzaSyCLifYdh2b-V9WzIK1X3cL9gRoI_q5UC24",authDomain:"chat-app-86125.firebaseapp.com",databaseURL:"https://chat-app-86125-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chat-app-86125",storageBucket:"chat-app-86125.appspot.com",messagingSenderId:"717771492231",appId:"1:717771492231:web:4019216ccf20fc5052e122",measurementId:"G-BQCX5GM9PP"});var U=Object(N.c)();i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1b27d917.chunk.js.map