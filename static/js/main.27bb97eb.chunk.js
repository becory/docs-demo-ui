(this["webpackJsonpdocs-demo-ui"]=this["webpackJsonpdocs-demo-ui"]||[]).push([[0],{208:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(50),s=n.n(a),i=n(12),o=n(103),l=(n(168),n(17)),u=n(30),j=n(16),d=n.n(j),b=n(18),h=n(8),m=n(300),O=n(42),x=n(54),f=n(296),p=n(297),g=n(1),v=function(e){var t=e.children,n=e.onSearchKeyword,c=e.logout,r=Object(O.useSession)("docs-demo-token"),a=r.session,s=r.clear,i=Object(l.g)(),o={};try{a&&(o=Object(x.a)(a))}catch(j){s(),i.go(0),i.push("/login")}var u;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"sticky top-0 flex items-center px-5 py-3 shadow-md bg-white",children:[Object(g.jsx)(m.a,{size:"3xl",color:"primary",style:{fontSize:"2.5rem"},children:"description"}),Object(g.jsx)("h1",{className:"hidden md:inline-flex ml-2 text-gray-700 text-xl",children:"Docs Demo"}),Object(g.jsxs)("div",{className:"text-gray-400 mx-5 md:mx-10 flex flex-grow items-center px-3 py-2 bg-gray-200 rounded-lg focus-within:text-gray-600 focus-within:bg-white focus-within:shadow-md",children:[Object(g.jsx)(m.a,{size:"3xl",className:"text-gray-700",style:{fontSize:"1rem"},children:"search"}),Object(g.jsx)("input",{type:"text",placeholder:"Search",className:"flex-grow mx-2 px-3 text-base bg-transparent outline-none",onChange:function(e){return n(e.target.value)}})]}),Object(g.jsx)(f.a,{title:"Logout",children:Object(g.jsx)(p.a,{alt:o.name,sx:{width:48,height:48,bgcolor:o.color},onClick:c,children:a?(u=o.name,u?u.split(" ").map((function(e){return e.charAt(0).toUpperCase()})):""):null})})]}),t]})},A=n(306),w=n(138),y=n.n(w),N=n(71),C=n.n(N);C.a.extend(y.a);var k=function(e){var t=e.id,n=e.fileName,c=e.date,r=Object(l.g)();return Object(g.jsxs)("div",{onClick:function(){return r.push("/doc/".concat(t))},className:"flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer",children:[Object(g.jsx)(m.a,{children:"article"}),Object(g.jsx)("p",{className:"flex-grow pl-5 w-10 pr-10 truncate",children:n}),Object(g.jsx)("p",{className:"pr-5 text-sm",children:C()(c).fromNow()})]})},S=n(139),I="https://mydocs-demo.herokuapp.com",E=n.n(S).a.create({baseURL:I});E.interceptors.request.use((function(e){var t=localStorage.getItem("docs-demo-token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),E.interceptors.response.use((function(e){var t=e.data;return e.status>=300?Promise.reject(new Error):t}),function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.reject(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var U=E,R=function(e){return U.get("/api/doc",{params:e})},D=function(e){return U.get("/api/doc/".concat(e))},q=function(e,t){return U.patch("/api/doc/".concat(e),t)},z=function(e){return U.get("/api/doc/".concat(e,"/doc_auth"))},F=n(301),G=n(293),V=n(303),B=n(304),P=n(305);var Z=function(e){var t=e.modalVisible,n=e.setModalVisible,r=Object(l.g)(),a=Object(c.useState)(""),s=Object(h.a)(a,2),i=s[0],o=s[1],u=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,c={name:i},U.post("/api/doc",c);case 4:t=e.sent,r.push("/"),r.replace("/doc/".concat(t.uuid)),n(!1),o("");case 9:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(F.a,{fullWidth:!0,maxWidth:"lg",open:t,children:[Object(g.jsx)(G.a,{children:"Create Document"}),Object(g.jsx)(V.a,{children:Object(g.jsx)(B.a,{value:i,onChange:function(e){return o(e.target.value)},type:"text",fullWidth:!0,placeholder:"Document Name",onKeyDown:function(e){return"enter"===e.key&&u()}})}),Object(g.jsxs)(P.a,{children:[Object(g.jsx)(A.a,{color:"primary",variant:"outlined",onClick:function(){return n(!1)},children:"Cancel"}),Object(g.jsx)(A.a,{color:"primary",variant:"contained",onClick:u,children:"Create"})]})]})};var M=function(e){var t=e.fileList,n=Object(c.useState)(!1),r=Object(h.a)(n,2),a=r[0],s=r[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)(Z,{modalVisible:a,setModalVisible:s}),Object(g.jsx)("section",{className:"bg-gray-200 px-10",children:Object(g.jsx)("div",{className:"max-w-3xl mx-auto",children:Object(g.jsx)("div",{className:"flex items-center justify-between py-6",children:Object(g.jsx)(A.a,{color:"primary",variant:"contained",onClick:function(){return s(!0)},startIcon:Object(g.jsx)(m.a,{children:"create"}),children:"new document"})})})}),Object(g.jsx)("section",{className:"bg-white px-10 md:px-0",children:Object(g.jsxs)("div",{className:"max-w-3xl mx-auto py-8",children:[Object(g.jsxs)("div",{className:"flex items-center justify-between pb-5 text-sm text-gray-700",children:[Object(g.jsx)("h2",{className:"font-medium flex-grow",children:"My Documents"}),Object(g.jsx)("p",{className:"mr-12",children:"Last Updated"}),Object(g.jsx)(m.a,{size:"3xl",color:"inherit",children:"people"})]}),t.length>0?t.map((function(e){return Object(g.jsx)(k,{id:e.uuid,fileName:e.name,date:e.updatedAt},e.uuid)})):Object(g.jsx)("div",{className:"w-full flex bg-gray-100 border border-gray-400 border-solid rounded-lg items-center justify-center text-3xl",style:{height:"30vh"},children:"Empty"})]})})]})},L=n(294),H=n(291);var Q=function(e){var t=e.open,n=e.setOpen,c=e.error;return Object(g.jsx)(L.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,onClose:n,children:Object(g.jsx)(H.a,{onClose:function(){return n(!1)},severity:"error",sx:{width:"100%"},children:c&&c.name?c.name:c})})};var Y=function(){var e=Object(l.g)(),t=Object(c.useState)([]),n=Object(h.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),i=Object(h.a)(s,2),o=i[0],u=i[1],j=Object(c.useState)(!1),m=Object(h.a)(j,2),x=m[0],f=m[1],p=Object(c.useState)(null),A=Object(h.a)(p,2),w=A[0],y=A[1],N=Object(O.useSession)("docs-demo-token").clear;return Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R({keyword:o});case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),y(e.t0.response.data.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),Object(c.useEffect)((function(){null!==w&&f(!0)}),[w]),Object(g.jsxs)("div",{children:[Object(g.jsx)(Q,{open:x,setOpen:f,error:w}),Object(g.jsx)(v,{onSearchKeyword:function(e){u(e)},logout:function(){N(),e.go(0),e.push("/login")},children:Object(g.jsx)(M,{fileList:r})})]})},J=n(140),T=n(141),W=n.n(T),K=(n(207),n(208),n(145)),_=n(142),X=n(290),$=n(287),ee=n(309),te=n(286),ne=n(295),ce=function(e){var t=e.editable,n=e.item,r=e.onChangeValue,a=Object(c.useState)(!1),s=Object(h.a)(a,2),o=s[0],l=s[1],u=Object(c.useState)(n.User),j=Object(h.a)(u,2),m=j[0],O=j[1],x=Object(c.useState)(""),f=Object(h.a)(x,2),p=f[0],v=f[1],A=Object(c.useState)([]),w=Object(h.a)(A,2),y=w[0],N=w[1],C=o&&!!p&&p.length>=1;return Object(c.useEffect)((function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,n={keyword:p},U.get("/api/user",{params:n});case 4:t=e.sent,N(t);case 6:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[C,p]),Object(c.useEffect)((function(){o||N([])}),[o]),t&&-1!==n.User.id?Object(g.jsx)(X.a,{id:"id",open:o,onOpen:function(){l(!0)},onClose:function(){l(!1)},value:m,options:y,loading:C,isOptionEqualToValue:function(e,t){return e.id===t.id},getOptionLabel:function(e){return e.id?"".concat(e.name," (").concat(e.email,")"):""},filterOptions:function(e){return e},onInputChange:function(e){return e?v(e.target.value):null},onChange:function(e,t){return function(e){O(e),r(Object(i.a)(Object(i.a)({},n),{},{User:e}))}(t)},renderInput:function(e){return Object(g.jsx)($.a,Object(i.a)(Object(i.a)({},e),{},{InputProps:Object(i.a)(Object(i.a)({},e.InputProps),{},{endAdornment:Object(g.jsxs)(c.Fragment,{children:[C?Object(g.jsx)(ee.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}}):n.User.id?"".concat(n.User.name," (").concat(n.User.email,")"):">>>Please select a User"},re=function(e){var t=e.editable,n=e.item,c=e.onChangeValue,r=[{auth:0,icon:"not_interested",name:"Prohibit"},{auth:1,icon:"visibility",name:"Read"},{auth:2,icon:"edit",name:"Edit"}];if(t)return Object(g.jsx)(te.a,{value:n.auth,onChange:function(e){return c(Object(i.a)(Object(i.a)({},n),{},{auth:e.target.value}))},children:r.map((function(e){return Object(g.jsxs)(ne.a,{value:e.auth,children:[Object(g.jsx)(m.a,{children:e.icon})," ",e.name]},e.auth)}))});var a=r.find((function(e){return e.auth===n.auth}));return Object(g.jsxs)("span",{children:[Object(g.jsx)(m.a,{children:a.icon})," ",a.name]})},ae=function(e){var t=e.index,n=e.item,c=e.onRemoveItem;return-1!==n.User.id?Object(g.jsx)(A.a,{color:"error",onClick:function(){return c(t)},children:Object(g.jsx)(m.a,{children:"delete_forever"})}):null};var se=function(e){var t=e.item,n=e.index,r=e.onChangeItem,a=e.onRemoveNullItem,s=e.onRemoveItem,o=Object(c.useState)(t),l=Object(h.a)(o,2),u=l[0],j=l[1],m=Object(c.useState)(!1),O=Object(h.a)(m,2),x=O[0],f=O[1],p=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.User||(t=Object(i.a)(Object(i.a)({},t),{},{User:{id:null}})),e.next=3,j(t);case 3:return e.next=5,a();case 5:return e.next=7,f(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r(n,u)}),[n,u]),Object(g.jsxs)("div",{className:"flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer",onClick:function(){return f(!0)},children:[Object(g.jsx)("div",{className:"flex-grow pl-5 pr-10",children:Object(g.jsx)(ce,{editable:x,item:u,onChangeValue:p})}),Object(g.jsx)("div",{className:"w-36 pr-5 text-sm",children:Object(g.jsx)(re,{editable:x,item:u,onChangeValue:p})}),Object(g.jsx)("div",{className:"w-24 pr-5 text-sm",children:Object(g.jsx)(ae,{index:n,item:u,onRemoveItem:s})})]})};var ie=function(e){var t=e.modalVisible,n=e.setModalVisible,c=e.doc,r=e.setDoc,a=e.getDocInfo,s=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!1),e.next=3,t=c.uuid,r={docAuths:c.DocAuths},U.patch("/api/doc/".concat(t,"/doc_auth"),r);case 3:return e.next=5,a();case 5:case"end":return e.stop()}var t,r}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!1),e.next=3,a();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=c.DocAuths;e=e.filter((function(e){return e.User&&e.User.id?!!e.User.id:!!e.User||e.User!=={}})),r((function(t){return Object(i.a)(Object(i.a)({},t),{},{DocAuths:e})}))},u=function(e,t){var n=c.DocAuths;n[e]=t,r((function(e){return Object(i.a)(Object(i.a)({},e),{},{DocAuths:n})}))},j=function(e){var t=c.DocAuths;t.splice(e,1),r((function(e){return Object(i.a)(Object(i.a)({},e),{},{DocAuths:t})}))};return Object(g.jsxs)(F.a,{size:"lg",fullWidth:!0,open:t,children:[Object(g.jsx)(G.a,{children:"Share"}),Object(g.jsx)(V.a,{children:Object(g.jsxs)("div",{className:"w-full",children:[Object(g.jsxs)("div",{className:"flex items-center p-4 rounded-lg text-gray-700 text-sm cursor-pointer",children:[Object(g.jsx)("p",{className:"flex-grow pl-5 pr-10",children:"User"}),Object(g.jsx)("p",{className:"w-36 pr-5 text-sm",children:"Auth"}),Object(g.jsx)("p",{className:"w-24 pr-5 text-sm",children:Object(g.jsx)(m.a,{children:"action"})})]}),c?c.DocAuths.map((function(e,t){return Object(g.jsx)(se,{item:e,index:t,onChangeItem:u,onRemoveItem:j,onRemoveNullItem:l},e.id)})):null,Object(g.jsx)(A.a,{onClick:function(){return function(){var e=c.DocAuths;e.push({id:-e.length,User:{id:null},auth:0}),r((function(t){return Object(i.a)(Object(i.a)({},t),{},{DocAuths:e})}))}()},startIcon:Object(g.jsx)(m.a,{children:"add"}),children:"Add Share"})]})}),Object(g.jsxs)(P.a,{children:[Object(g.jsx)(A.a,{color:"primary",variant:"link",onClick:o,children:"Cancel"}),Object(g.jsx)(A.a,{color:"primary",variant:"contained",onClick:s,children:"Save"})]})]})},oe=n(292),le=n(310),ue=n(102),je=n.n(ue),de=n(143),be=n(144);var he=function(e){var t=e.editable,n=e.users,r=e.login_user,a=e.session,s=e.setModalVisible,o=e.doc,l=e.logout,j=e.onChangeTitle,O=e.lastUpdated,x=e.quill,v=Object(c.useState)(0),w=Object(h.a)(v,2),y=w[0],N=w[1],k=Object(c.useState)({file:!1,edit:!1}),S=Object(h.a)(k,2),I=S[0],E=S[1],U=Object(c.useState)(!1),R=Object(h.a)(U,2),D=R[0],q=R[1],z=Object(c.useRef)(),F=Object(c.useRef)();Object(c.useEffect)((function(){N(z.current.offsetWidth)}),[o]);var G=function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()}))},V=function(e){E((function(t){return Object(i.a)(Object(i.a)({},t),B(I,e))}))},B=function(e,t){var n={};return Object.keys(e).forEach((function(c){n[c]=t===c&&!e[c]})),n},P=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.getContents(),n={exportAs:"blob",paragraphStyles:{normal:{run:{color:"#000000"}}}},e.next=4,be.generateWord(t,n);case 4:c=e.sent,Object(de.saveAs)(c,"".concat(o.name,"-").concat(new Date,".docx"));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("header",{className:"header",children:[Object(g.jsx)(u.b,{to:"/",className:"cursor-pointer",children:Object(g.jsx)(m.a,{size:"3xl",color:"primary",style:{fontSize:"2.5rem"},children:"description"})}),Object(g.jsxs)("div",{className:"title-menu",children:[Object(g.jsxs)("h2",{className:"text-2xl",children:[Object(g.jsx)("span",{className:"hide-span",ref:z,children:o?o.name:null}),o?o.creatorId===r.id||o.DocAuths.map((function(e){return e.id})).includes(r.id)?Object(g.jsx)(f.a,{title:"Rename",children:Object(g.jsx)("input",{value:o.name,className:"mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500",style:{width:y},ref:F,onChange:function(e){return j(e.target.value,!1)},onBlur:function(e){return j(e.target.value,!0)}})}):o.name:null]}),Object(g.jsxs)("div",{className:"menu-information",children:[Object(g.jsxs)("ul",{className:"menu",children:[Object(g.jsxs)("li",{className:"item",children:[Object(g.jsx)("span",{onClick:function(){return V("file")},children:"File"}),Object(g.jsxs)("ul",{className:je()({block:I.file,hidden:!I.file},"submenu"),children:[Object(g.jsx)("li",{className:"sub-item",onClick:function(){return q(!0)},children:"New Document"}),Object(g.jsx)("li",{className:"sub-item",onClick:function(){F.current.focus(),V("file")},children:"Rename"}),Object(g.jsx)("li",{className:"sub-item",onClick:P,children:"Export to .docx"}),Object(g.jsx)("li",{className:"sub-item",onClick:function(){return window.print()},children:"Print"})]})]}),Object(g.jsxs)("li",{className:"item",children:[Object(g.jsx)("span",{onClick:function(){return V("edit")},children:"Edit"}),Object(g.jsxs)("ul",{className:je()({block:I.edit,hidden:!I.edit},"submenu"),children:[Object(g.jsx)("li",{className:"sub-item",onClick:function(){x.history.undo(),V("edit")},children:"Undo"}),Object(g.jsx)("li",{className:"sub-item",onClick:function(){x.history.redo(),V("edit")},children:"Redo"})]})]}),Object(g.jsx)("li",{className:"item disable",children:Object(g.jsx)("span",{children:"View"})}),Object(g.jsx)("li",{className:"item disable",children:Object(g.jsx)("span",{children:"Insert"})}),Object(g.jsx)("li",{className:"item disable",children:Object(g.jsx)("span",{children:"Format"})}),Object(g.jsx)("li",{className:"item disable",children:Object(g.jsx)("span",{children:"Tools"})})]}),Object(g.jsxs)("div",{className:"info",children:["Last Updated:\xa0",C()(O.updated).fromNow(),O.User.name?"(".concat(O.User.name,")"):null]})]}),Object(g.jsx)(Z,{modalVisible:D,setModalVisible:q})]}),Object(g.jsxs)("div",{className:"user",children:[Object(g.jsx)(le.a,{max:2,children:n.filter((function(e){return e.id!==r.id})).map((function(e){return Object(g.jsx)(p.a,{sx:{bgcolor:e.color},children:G(e.name)},e.id)}))}),t?Object(g.jsx)(A.a,{variant:"contained",color:"primary",size:"small",className:"mx-2 hidden md:inline-flex h-8",onClick:function(){return s(!0)},startIcon:Object(g.jsx)(m.a,{children:"people"}),children:"Share"}):Object(g.jsx)(A.a,{variant:"outlined",color:"primary",className:"mx-2 hidden md:inline-flex h-8",startIcon:Object(g.jsx)(m.a,{children:"visibility"}),children:"Read"})," \xa0",Object(g.jsx)(f.a,{title:"Logout",children:Object(g.jsx)(p.a,{alt:r.name,sx:{width:48,height:48,bgcolor:function(e,t){var n=e.find((function(e){return e.id===t.id}));return n?n.color:null}(n,r)},onClick:l,children:a?G(r.name):null})})]})]})},me=function(){var e=Object(l.h)().id,t=Object(l.g)(),n=Object(O.useSession)("docs-demo-token"),r=n.session,a=n.save,s=n.clear,o=Object(c.useState)(),u=Object(h.a)(o,2),j=u[0],m=u[1],f=Object(c.useState)([]),p=Object(h.a)(f,2),v=p[0],A=p[1],w=Object(c.useState)([]),y=Object(h.a)(w,2),N=y[0],C=y[1],k=Object(c.useState)([]),S=Object(h.a)(k,2),E=S[0],U=S[1],R=Object(c.useState)(),F=Object(h.a)(R,2),G=F[0],V=F[1],B=Object(c.useState)(!1),P=Object(h.a)(B,2),Z=P[0],M=P[1],L=Object(c.useState)(!1),H=Object(h.a)(L,2),Y=H[0],T=H[1],X=Object(c.useState)({updated:"",User:{name:""}}),$=Object(h.a)(X,2),ee=$[0],te=$[1],ne=Object(c.useState)(!1),ce=Object(h.a)(ne,2),re=ce[0],ae=ce[1],se=Object(c.useState)(null),le=Object(h.a)(se,2),ue=le[0],je=le[1],de=Object(J.a)({theme:"snow",modules:{toolbar:"#toolbar",cursors:!0}}),be=de.quill,me=de.quillRef,Oe=de.Quill;Oe&&!be&&Oe.register("modules/cursors",W.a);var xe,fe=Object(c.useRef)();if(r)try{xe=Object(x.a)(r)}catch(Ae){xe=r}else xe=a({id:Object(oe.a)(),name:"Guest"});Object(c.useEffect)((function(){be&&(be.disable(),be.setText("Loading..."))}),[be]),Object(c.useEffect)((function(){null!==ue&&ae(!0)}),[ue]);var pe=function(){var n=Object(b.a)(d.a.mark((function n(){var c,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D(e);case 3:return c=n.sent,n.next=6,z(e);case 6:r=n.sent,m(Object(i.a)(Object(i.a)({},c),{},{DocAuths:r})),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),je(n.t0.response.data.msg),401===n.t0.response.status?t.push("/401"):t.push("/404");case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),ge=function(){var t=Object(b.a)(d.a.mark((function t(n,c){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m((function(e){return Object(i.a)(Object(i.a)({},e),{},{name:n})})),!c){t.next=12;break}return t.prev=2,t.next=5,q(e,{name:n});case 5:r=t.sent,m(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),je(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){G&&be&&(G.once("load-document",(function(e){var t=e.content,n=e.editable,c=e.updated,r=e.User;be.setContents(t),T(n),te({updated:c,User:r}),n&&be.enable()})),G.emit("get-document"))}),[G,be]),Object(c.useEffect)((function(){if(G){var e=function(e){A(e)};G.on("receive-users",e);var t=function(e){te(e)};return G.on("receive-updated",t),function(){G.off("receive-users",e),G.off("receive-updated",t)}}}),[G]),Object(c.useEffect)((function(){if(G&&be){var e=function(e){var t=e.delta;be.updateContents(t)};return G.on("receive-changes",e),function(){G.off("receive-changes",e)}}}),[G,be]),Object(c.useEffect)((function(){if(G&&be){var e=function(e,t,n){if("user"===n){var c=be.getContents();G.emit("send-changes",{delta:e,data:c})}};be.on("text-change",e);var t=function(e,t,n){"user"===n&&e&&G.emit("send-selection-changes",{range:e,time:new Date})};return be.on("selection-change",t),function(){be.off("text-change",e),be.off("selection-change",t)}}}),[G,be]),Object(c.useEffect)((function(){if(G&&be&&E){var e=function(e){U(e)};G.on("receive-selection-changes",e);var t=be.getModule("cursors");return t.clearCursors(),E.filter((function(e){return e.id!==xe.id})).forEach((function(e){t.createCursor(e.id,e.name,e.color),t.moveCursor(e.id,e.range)})),function(){G.off("receive-selection-changes",e)}}}),[G,be,E,xe]),Object(c.useEffect)((function(){if(G&&N){var e=function(e){C(e)};return G.on("receive-cursor-changes",e),function(){G.off("receive-cursor-changes",e)}}}),[G,N]),Object(c.useEffect)((function(){var n=null;function c(){return(c=Object(b.a)(d.a.mark((function c(){var a;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(_.io)(I,{query:{uuid:e},auth:{token:r}}),V(n),a=function(e){if(console.log(e),"404"===e.status)return t.push("/404")},n.on("error",a),c.next=6,pe();case 6:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return function(){c.apply(this,arguments)}(),function(){n&&n.disconnect()}}),[e,t,r]);var ve=Object(K.a)(fe,{enterDelay:100,leaveDelay:100});return Object(c.useEffect)((function(){G&&ve&&G.emit("send-cursor-changes",{cursor:ve,time:new Date})}),[G,ve]),Object(g.jsxs)("div",{children:[Object(g.jsx)(Q,{open:re,setOpen:ae,error:ue}),Object(g.jsx)(ie,{modalVisible:Z,setModalVisible:M,doc:j,setDoc:m,getDocInfo:pe}),Object(g.jsx)(he,{editable:Y,users:v,login_user:xe,session:r,setModalVisible:M,doc:j,lastUpdated:ee,onChangeTitle:ge,quill:be,logout:function(){s(),t.go(0),t.push("/login")}}),Object(g.jsxs)("div",{className:"wrapper",children:[N.filter((function(e){return e.id!==xe.id})).map((function(e){return Object(g.jsxs)("div",{className:"cursor",style:{top:e.cursor.y*(me.current.getBoundingClientRect().height/e.cursor.elementHeight)+"px",left:e.cursor.x*(me.current.getBoundingClientRect().width/e.cursor.elementWidth)+"px"},children:[Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAASoAMABAAAAAEAAAASAAAAAIh0nEsAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Chle4QcAAAEMSURBVDgRrZJBaoRAEEVbmZ3kAC7GvUtPoBBXcxQDkhukQXICmRsEBJlLuNZZCOMJPEB2MmRhp35DBxF7QttTUFbXr1+vFWRCCM6eEQRC2MNAqevaHgYCfZk9TIGsYUuQFWwN2g3bAu2C6UDGsEcgE9iBzH/hui6b55klScLiOJb6MAyoH3QhcxyHS3Hrod7I931RFIX8p4IggPxD+UnJl7nFkBqZRBiGomkaHL+jKJKwqqrQv2kX1wO427ZFwc3vZVlKUJqm0K5rv7aHm4LDQPVlmqa753kS1nUdZq/a5eVAQZRG/TnPcwnKsgygLzUzqrQY9X0vOOdiHEeAbpRHI4gyY5viQnlS2n/1F5hyGUBagmfYAAAAAElFTkSuQmCC",width:"18",height:"18",alt:e.user}),Object(g.jsx)("div",{style:{borderRadius:"0.5em",background:e.color,fontSize:"0.75em",color:"white",margin:"0 5px",padding:"3px 5px"},children:e.name})]},e.id)})),Object(g.jsxs)("div",{id:"toolbar",children:[Object(g.jsxs)("select",{className:"ql-header",children:[Object(g.jsx)("option",{selected:!0}),Object(g.jsx)("option",{value:"1"}),Object(g.jsx)("option",{value:"2"}),Object(g.jsx)("option",{value:"4"}),Object(g.jsx)("option",{value:"5"}),Object(g.jsx)("option",{value:"6"})]}),Object(g.jsx)("select",{className:"ql-font"}),Object(g.jsx)("button",{className:"ql-list",value:"ordered"}),Object(g.jsx)("button",{className:"ql-list",value:"bullet"}),Object(g.jsx)("button",{className:"ql-color"}),Object(g.jsx)("button",{className:"ql-background"}),Object(g.jsx)("button",{className:"ql-bold"}),Object(g.jsx)("button",{className:"ql-italic"}),Object(g.jsx)("button",{className:"ql-underline"}),Object(g.jsx)("button",{className:"ql-script",value:"sub"}),Object(g.jsx)("button",{className:"ql-script",value:"super"}),Object(g.jsx)("select",{className:"ql-align"}),Object(g.jsx)("button",{className:"ql-image"}),Object(g.jsx)("button",{className:"ql-blockquote"}),Object(g.jsx)("button",{className:"ql-clean"})]}),Object(g.jsx)("div",{className:"editor",ref:me})]})]})},Oe=function(e){var t=[];return Object.keys(e).forEach((function(n){e[n]&&""!==e[n]||t.push("".concat(n," is required."))})),t.length>0?Promise.reject(new Error(t.join("|"))):Promise.resolve(!0)};var xe=function(){var e=Object(O.useSession)("docs-demo-token").save,t=Object(l.g)(),n=Object(c.useState)({username:"",password:""}),r=Object(h.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!1),u=Object(h.a)(o,2),j=u[0],x=u[1],f=Object(c.useState)({color:"",on:"",msg:"",data:[]}),p=Object(h.a)(f,2),v=p[0],w=p[1],y=Object(c.useState)({username:"",password:"",password_check:"",name:"",email:""}),N=Object(h.a)(y,2),C=N[0],k=N[1],S=function(){var n=Object(b.a)(d.a.mark((function n(){var c,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w({color:"info",on:"",msg:"",data:[]}),n.next=4,Oe(a);case 4:return n.next=6,s=a,U.post("/api/auth/login",s);case 6:(c=n.sent).token&&(e(c.token),t.go(0),t.push("/home")),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r=n.t0.message.split("|"),n.t0.response&&n.t0.response.data.msg?w({color:"error",on:"loginForm",msg:"Error",data:[n.t0.response.data.msg]}):r.length>=1?w({color:"error",on:"loginForm",msg:"Field Required",data:r}):w({color:"error",on:"loginForm",msg:"Error",data:[n.t0.message]});case 14:case"end":return n.stop()}var s}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w({color:"info",on:"",msg:"",data:[]}),e.next=4,Oe(C);case 4:if(C.password_check!==C.password){e.next=12;break}return e.next=7,n=C,U.post("/api/user/register",n);case 7:w({color:"success",on:"loginForm",msg:"Sign Up Success",data:[]}),x(!1),k({username:"",password:"",password_check:"",name:"",email:""}),e.next=14;break;case 12:return e.next=14,Promise.reject(new Error("Password is not same with Confirm Password."));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),(t=e.t0.message.split("|")).length>1?w({color:"error",on:"registerForm",msg:"Field Required",data:t}):w({color:"error",on:"registerForm",msg:"Error",data:[e.t0.message]});case 20:case"end":return e.stop()}var n}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),E=Object(g.jsxs)(F.a,{size:"md",open:j,children:[Object(g.jsx)(G.a,{children:"Sign Up"}),Object(g.jsx)(V.a,{children:Object(g.jsxs)("div",{className:"space-y-5",children:["registerForm"===v.on?Object(g.jsxs)(H.a,{color:v.color,children:[Object(g.jsx)("h1",{children:v.msg}),Object(g.jsx)("ul",{children:v.data.map((function(e){return Object(g.jsx)("li",{children:e},e)}))})]}):null," ",Object(g.jsx)(B.a,{value:C.username,onChange:function(e){k(Object(i.a)(Object(i.a)({},C),{},{username:e.target.value}))},type:"text",className:"outline-none w-full",placeholder:"Username"}),Object(g.jsx)(B.a,{value:C.password,onChange:function(e){k(Object(i.a)(Object(i.a)({},C),{},{password:e.target.value}))},type:"password",className:"outline-none w-full",placeholder:"password"}),Object(g.jsx)(B.a,{value:C.password_check,onChange:function(e){return k(Object(i.a)(Object(i.a)({},C),{},{password_check:e.target.value}))},type:"password",className:"outline-none w-full",placeholder:"Check Password"}),Object(g.jsx)(B.a,{value:C.name,onChange:function(e){return k(Object(i.a)(Object(i.a)({},C),{},{name:e.target.value}))},type:"text",className:"outline-none w-full",placeholder:"Name"}),Object(g.jsx)(B.a,{value:C.email,onChange:function(e){return k(Object(i.a)(Object(i.a)({},C),{},{email:e.target.value}))},type:"text",className:"outline-none w-full",placeholder:"Email"})]})}),Object(g.jsxs)(P.a,{children:[Object(g.jsx)(A.a,{color:"primary",onClick:function(){x(!1),k({username:"",password:"",password_check:"",name:"",email:""})},children:"Cancel"}),Object(g.jsx)(A.a,{color:"primary",variant:"contained",onClick:I,children:"Sing Up"})]})]});return Object(g.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen py-2",children:[E,Object(g.jsxs)("div",{className:"w-1/2 rounded-lg flex flex-col items-center justify-center border-solid border border-gray-300 bg-white py-10",children:[Object(g.jsxs)("h2",{className:"text-3xl align-middle",children:[Object(g.jsx)(m.a,{color:"primary",size:"5xl",style:{fontSize:"2em"},children:"description"}),"Login"]}),Object(g.jsxs)("div",{className:"w-3/4 p-10 space-y-5 flex flex-col",children:["loginForm"===v.on?Object(g.jsxs)(H.a,{color:v.color,children:[Object(g.jsx)("h1",{className:"font-bold",children:v.msg}),Object(g.jsx)("ul",{children:v.data.map((function(e){return Object(g.jsx)("li",{children:e},e)}))})]}):null,Object(g.jsx)(B.a,{placeholder:"Username",size:"lg",onChange:function(e){s(Object(i.a)(Object(i.a)({},a),{},{username:e.target.value}))}}),Object(g.jsx)(B.a,{type:"password",placeholder:"password",size:"lg",onChange:function(e){s(Object(i.a)(Object(i.a)({},a),{},{password:e.target.value}))}}),Object(g.jsx)(A.a,{variant:"contained",onClick:function(){return S()},children:"Login"}),Object(g.jsx)(A.a,{color:"info",onClick:function(){return x(!0)},children:"Sign Up"}),Object(g.jsxs)(H.a,{color:"warning",children:[Object(g.jsx)("h1",{className:"font-bold",children:"Heroku\u9700\u8981\u6696\u6a5f"}),Object(g.jsx)("ul",{children:"\u82e5\u534a\u5c0f\u6642\u6c92\u9023\u7dda\uff0c\u9ede\u9078login\u5f8c\uff0c\u9700\u7b49\u5f85Heroku\u4e00\u5206\u9418\u5f8c\u958b\u6a5f\u518d\u8a66\u3002"})]})]})]})]})};var fe=function(){return Object(g.jsxs)("div",{className:"flex flex-1 items-center justify-center h-screen",children:[Object(g.jsx)("div",{className:"mx-2",children:Object(g.jsx)("h1",{className:"text-5xl my-5",children:"401"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:"text-2xl",children:"\u6c92\u6709\u6b0a\u9650"}),Object(g.jsx)("h2",{className:"text-2xl",children:"Not Authorized"})]})]})};var pe=function(){return Object(g.jsxs)("div",{className:"flex flex-1 items-center justify-center h-screen",children:[Object(g.jsx)("div",{className:"mx-2",children:Object(g.jsx)("h1",{className:"text-5xl my-5",children:"404"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:"text-2xl",children:"\u627e\u4e0d\u5230\u6a94\u6848"}),Object(g.jsx)("h2",{className:"text-2xl",children:"Not Found"})]})]})},ge=["session"],ve=["session"],Ae=function(e){var t=e.session,n=Object(o.a)(e,ge),c=!1;try{t&&(Object(x.a)(t),c=!0)}catch(r){c=!1}return c?Object(g.jsx)(l.b,Object(i.a)({},n)):Object(g.jsx)(l.a,{to:"/login"})},we=function(e){var t=e.session,n=Object(o.a)(e,ve),c=!1;try{t&&(Object(x.a)(t),c=!0)}catch(r){c=!1}return c?Object(g.jsx)(l.a,{to:"/"}):Object(g.jsx)(l.b,Object(i.a)({},n))};function ye(){var e=Object(O.useSession)("docs-demo-token").session;return Object(g.jsxs)("div",{children:[Object(g.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(we,{session:e,path:"/login",component:xe,exact:!0}),Object(g.jsx)(Ae,{session:e,path:"/",component:Y,exact:!0}),Object(g.jsx)(u.a,{path:"/home",children:Object(g.jsx)(l.a,{to:"/"})}),Object(g.jsx)(u.a,{path:"/401",exact:!0,children:Object(g.jsx)(fe,{})}),Object(g.jsx)(u.a,{path:"/404",exact:!0,children:Object(g.jsx)(pe,{})}),Object(g.jsx)(l.b,{path:"/doc/:id",children:Object(g.jsx)(me,{})})]})})]})}s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(ye,{})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.27bb97eb.chunk.js.map