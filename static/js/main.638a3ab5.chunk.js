(this["webpackJsonpreact-sandbox"]=this["webpackJsonpreact-sandbox"]||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"db",(function(){return fe}));var c,r,a,i,s,j,u,d,o,b,l,O,x,h,g=n(1),p=n.n(g),m=n(39),f=n.n(m),v=n(14),w=n(38),C=n(15),k=n(18),y=n(9),D="/top",S="/redux-page1",I="/redux-page2",N="/fire-base-page1",B=n(4),F=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(k.b,{to:D,children:"Top"}),Object(B.jsx)(k.b,{to:S,children:"Page1"}),Object(B.jsx)(k.b,{to:I,children:"Page2"})]})},P=n(12),T=w.c,A=function(){return Object(w.b)()},Y=n(32),M=Object(Y.b)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),U=M.actions,L=U.increment,R=U.decrement,_=U.incrementByAmount,z=function(){return{count:T((function(e){return e.counter.value}))}},E=M.reducer,G=function(){var e=A(),t=z().count,n=Object(g.useState)(2),c=Object(P.a)(n,2),r=c[0],a=c[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{children:"Page1"}),Object(B.jsx)("button",{onClick:function(){return e(L())},children:"\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(B.jsx)("button",{onClick:function(){return e(R())},children:"\u30c7\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(B.jsx)("input",{value:r,onChange:function(e){return a(Number(e.target.value))}}),Object(B.jsx)("button",{onClick:function(){return e(_(r))},children:"\u6570\u5024\u5206\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(B.jsx)("div",{children:t})]})},H=function(){var e=A(),t=z().count,n=Object(g.useState)(2),c=Object(P.a)(n,2),r=c[0],a=c[1];return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("div",{children:"Page2"}),Object(B.jsx)("button",{onClick:function(){return e(L())},children:"\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(B.jsx)("button",{onClick:function(){return e(R())},children:"\u30c7\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(B.jsx)("input",{value:r,onChange:function(e){return a(Number(e.target.value))}}),Object(B.jsx)("button",{onClick:function(){return e(_(r))},children:"\u6570\u5024\u5206\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8"}),Object(B.jsx)("div",{children:t})]})},J=function(){return Object(B.jsx)("div",{children:"Top"})},K=n(27),X=n.n(K),q=(n(74),n(88)),Q=Object(Y.b)({name:"chatData",initialState:{value:[],status:"loading"},reducers:{setChatData:function(e,t){e.value=t.payload,e.status="idle"}}}),V=Q.reducer,W=Q.actions.setChatData,Z=n(24),$=function(){var e=Object(g.useState)(""),t=Object(P.a)(e,2),n=t[0],c=t[1],r=Object(g.useState)(""),a=Object(P.a)(r,2),i=a[0],s=a[1],j={chatData:T((function(e){return e.chatData}))}.chatData;return X.a.locale("ja"),function(){var e=A();Object(g.useEffect)((function(){var t=Object(Z.d)(fe,"users");Object(Z.b)(t,(function(t){if(console.log("\u30c7\u30fc\u30bf\u3092\u53d6\u3063\u3066\u304f\u308b"),t.exists()){var n=t.val(),c=Object.entries(n||{}).map((function(e){var t=Object(P.a)(e,2);return{key:t[0],value:t[1]}}));e(W(c))}else console.log("\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093")}))}),[e])}(),console.log("\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0"),Object(B.jsxs)(ee,{children:[Object(B.jsxs)(te,{children:[Object(B.jsx)(ne,{children:"\u30e6\u30fc\u30b6\u30fc\u540d"}),Object(B.jsx)(ce,{value:n,onChange:function(e){return c(e.target.value)},placeholder:"\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(B.jsx)(re,{children:"\u30c6\u30ad\u30b9\u30c8"}),Object(B.jsx)(ae,{value:i,onChange:function(e){return s(e.target.value)},placeholder:"\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"}),Object(B.jsx)(ie,{onClick:function(){return function(e){var t=e.userName,n=e.text,c=e.setUserName,r=e.setText;if(0!==t.length&&0!==n.length){X.a.locale("ja");var a={user_name:t,text:n,createAt:X()().format("YYYY-MM-DD HH:mm:ss")},i=Object(Z.d)(fe,"users/");Object(Z.c)(i,a),c(""),r("")}else window.alert("\u30e6\u30fc\u30b6\u30fc\u540d\u3068\u30c6\u30ad\u30b9\u30c8\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044")}({userName:n,text:i,setUserName:c,setText:s})},children:"\u30c7\u30fc\u30bf\u8ffd\u52a0"}),Object(B.jsx)(se,{children:"\u30e6\u30fc\u30b6\u30fc\u540d"}),Object(B.jsx)(je,{children:"\u30c6\u30ad\u30b9\u30c8"}),Object(B.jsx)(ue,{children:"\u4f5c\u6210\u65e5\u6642"})]}),Object(B.jsx)(de,{children:"loading"===j.status?Object(B.jsx)(q.a,{}):j.value.map((function(e,t){return Object(B.jsxs)(oe,{style:{order:-t},children:[Object(B.jsx)(be,{children:e.value.user_name}),Object(B.jsx)(be,{children:e.value.text}),Object(B.jsx)(be,{children:X()(e.value.createAt).fromNow()})]},e.key)}))})]})},ee=C.a.div(c||(c=Object(v.a)(["\n    text-align: center;\n"]))),te=C.a.div(r||(r=Object(v.a)(["\n    display: grid;\n    grid-template-columns: 150px 150px 150px;\n    grid-template-rows: 50px 50px 50px 50px;\n"]))),ne=C.a.div(a||(a=Object(v.a)(["\n    grid-column-start: 1;\n    grid-column-end: 2;\n"]))),ce=C.a.input(i||(i=Object(v.a)(["\n    grid-column-start: 2;\n    grid-column-end: 4;\n"]))),re=C.a.div(s||(s=Object(v.a)(["\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n"]))),ae=C.a.input(j||(j=Object(v.a)(["\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 3;\n"]))),ie=C.a.button(u||(u=Object(v.a)(["\n    grid-row-start: 3;\n    grid-row-end: 4;\n"]))),se=C.a.div(d||(d=Object(v.a)(["\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 4;\n    grid-row-end: 5;\n"]))),je=C.a.div(o||(o=Object(v.a)(["\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 4;\n    grid-row-end: 5;\n"]))),ue=C.a.div(b||(b=Object(v.a)(["\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 4;\n    grid-row-end: 5;\n"]))),de=C.a.div(l||(l=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),oe=C.a.div(O||(O=Object(v.a)(["\n    display: flex;\n"]))),be=C.a.div(x||(x=Object(v.a)(["\n    width: 150px;\n"]))),le=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(k.b,{to:D,children:"Top"}),Object(B.jsx)(k.b,{to:S,children:"Redux"}),Object(B.jsx)(k.b,{to:N,children:"FireBase"})]})},Oe=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(k.b,{to:D,children:"Top"})})},xe=function(){return Object(B.jsx)(k.a,{basename:"/react-sandbox",children:Object(B.jsxs)(y.d,{children:[Object(B.jsxs)(y.b,{exact:!0,path:D,children:[Object(B.jsx)(le,{}),Object(B.jsx)(J,{})]}),Object(B.jsxs)(y.b,{path:N,children:[Object(B.jsx)(Oe,{}),Object(B.jsx)($,{})]}),Object(B.jsxs)(y.b,{path:S,children:[Object(B.jsx)(F,{}),Object(B.jsx)(G,{})]}),Object(B.jsxs)(y.b,{path:I,children:[Object(B.jsx)(F,{}),Object(B.jsx)(H,{})]}),Object(B.jsx)(y.b,{path:"*",children:Object(B.jsx)(y.a,{to:{pathname:D}})})]})})},he=Object(Y.a)({reducer:{counter:E,chatData:V}}),ge=function(){return Object(B.jsx)(pe,{children:Object(B.jsx)(w.a,{store:he,children:Object(B.jsx)(xe,{})})})},pe=C.a.div(h||(h=Object(v.a)(["\n    background-color: skyblue;\n    min-height: 100vh;\n"]))),me=n(59);Object(me.a)({apiKey:"AIzaSyCLifYdh2b-V9WzIK1X3cL9gRoI_q5UC24",authDomain:"chat-app-86125.firebaseapp.com",databaseURL:"https://chat-app-86125-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chat-app-86125",storageBucket:"chat-app-86125.appspot.com",messagingSenderId:"717771492231",appId:"1:717771492231:web:4019216ccf20fc5052e122",measurementId:"G-BQCX5GM9PP"});var fe=Object(Z.a)();f.a.render(Object(B.jsx)(p.a.StrictMode,{children:Object(B.jsx)(ge,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.638a3ab5.chunk.js.map