(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(226)},226:function(e,t,n){"use strict";n.r(t);n(109);var a,i=n(0),r=n.n(i),o=n(102),l=n.n(o),c=n(9),s=n(16),u=n(10),d=n(26),m=n(35),g=n(104),f=n(105),p=n(107),h="https://zezjjanshg.execute-api.us-west-2.amazonaws.com/dev/",b={getSignInResult:function(e,t){var n=(e.emailAddress||"").trim().toLowerCase(),a=Object(p.a)({},e,{meetingSheetId:t,emailAddress:n}),i=JSON.stringify(a),r=new URL("".concat(h,"/signin"));return fetch(r,{headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",method:"POST",body:i}).then(function(e){return e.json()})},initializeSheet:function(e){var t=new URL("".concat(h,"/initialize/").concat(e));return fetch(t,{method:"PUT"}).then(function(e){return e.json()})}},E=new s.default.Map({meetingSheetId:void 0}),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setup/setMeetingSheetId":return e.merge(t.payload);default:return e}},w=function(e){return{type:"signin/status",payload:e}},S=new s.default.Map,y=new s.default.Map({isPending:!0}),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"signin/status":return e.merge(t.payload);case"signin/request":return y;case"signin/clear":return S;default:return e}},N=new s.default.Map,O=document.getElementsByTagName("base")[0].getAttribute("href"),j=Object(u.a)({basename:O}),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,k=Object(d.d)((a=j,Object(f.combineReducers)({setup:v,signin:I,router:Object(m.connectRouter)(a)})),N,x(Object(d.a)(Object(m.routerMiddleware)(j),g.a))),R=n(228),G=function(e){return e.getIn(["signin","hasSignedIn"],!1)},P=function(e){return e.getIn(["signin","isInGoodStandingPending"],!1)},D=function(e){return e.getIn(["signin","isInGoodStanding"],!1)},M=function(e){return e.getIn(["signin","expirationDate"],"N/A")},F=n(21),C=function(e){return e?null:"Required."},L=Object(F.withFormState)(function(e){var t=e.field,n=e.formState,a=e.label,i=e.validate,o=n.errors[t],l="undefined"!==typeof o,c="form-control form-control-lg";return l&&(c+=" is-invalid"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement(F.Text,{className:c,autoComplete:"off",field:t,id:t,validate:i,validateOnBlur:!0}),l?r.a.createElement("div",{className:"invalid-feedback"},o):null)}),_=function(e){var t=e.onSubmit;return r.a.createElement("div",{className:"container"},r.a.createElement(F.Form,{id:"signin-form",onSubmit:t},r.a.createElement("input",{autoComplete:"false",name:"hidden",type:"text",style:{display:"none"}}),r.a.createElement(L,{field:"firstName",label:"First Name",validate:C}),r.a.createElement(L,{field:"lastName",label:"Last Name",validate:C}),r.a.createElement(L,{field:"emailAddress",label:"Email Address",validate:C}),r.a.createElement(L,{field:"phoneNumber",label:"Phone Number",validate:C}),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-light",type:"reset"},"Reset"))))},A=Object(c.connect)(function(){return{}},function(e,t){return{onSubmit:function(n){e(function(e,t){return function(n){n({type:"signin/request"}),n(w({hasSignedIn:!0,isInGoodStandingPending:!0})),b.getSignInResult(e,t).then(function(e){n(w({isInGoodStandingPending:!1,isInGoodStanding:e.onList&&e.isInGoodStanding,expirationDate:e.expirationDate}))})}}(n,t.meetingSheetId))}}})(_),T=function(e){var t=e.expirationDate;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You're a member in good standing! Way to go!"),t?r.a.createElement("p",null,"Your membership expires on ",r.a.createElement("strong",null,t),"."):"",r.a.createElement("p",null,"Will you consider signing up for local dues? $10 a month goes a long way."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.dsa-la.org/membership",target:"_blank",rel:"noopener noreferrer"},"https://www.dsa-la.org/membership")))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You don't appear in our records!"),r.a.createElement("p",null,"Would you like to sign up to become a member?"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://act.dsausa.org/donate/membership/",target:"_blank",rel:"noopener noreferrer"},"https://act.dsausa.org/donate/membership/")))},z=function(){return r.a.createElement("p",null,"Please wait while we save your sign in...")},U=function(e){var t=e.isInGoodStandingPending,n=e.isInGoodStanding,a=e.expirationDate,i=e.onReset;return r.a.createElement("div",{className:"container"},function(e,t,n,a){return e?r.a.createElement(z,null):r.a.createElement(r.a.Fragment,null,t?r.a.createElement(T,{expirationDate:n}):r.a.createElement(W,null),r.a.createElement("button",{className:"btn btn-primary",onClick:a},"Return to Sign In Form"))}(t,n,a,i))};U.defaultProps={isMemberInGoodStanding:!1};var B=U,q={onReset:function(){return{type:"signin/clear"}}},J=Object(c.connect)(function(e){return{isInGoodStandingPending:P(e),isInGoodStanding:D(e),expirationDate:M(e)}},q)(B),Y=function(e){var t=e.hasSignedIn,n=e.meetingSheetId;return t?r.a.createElement(J,null):r.a.createElement(A,{meetingSheetId:n})},X=Object(c.connect)(function(e,t){return{hasSignedIn:G(e),meetingSheetId:t.match.params.meetingSheetId}})(Y),$=function(e){var t=e.onSubmit;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Let's get started."),r.a.createElement("p",null,"Some expository text talking about how to get the sheet ID, share it to the appropriate Google account, and enter below will go here."),r.a.createElement(F.Form,{id:"setup-form",onSubmit:t},r.a.createElement("input",{autoComplete:"false",name:"hidden",type:"text",style:{display:"none"}}),r.a.createElement(L,{field:"meetingSheetId",label:"Meeting Sheet ID",validate:C}),r.a.createElement(L,{field:"meetingName",label:"Meeting Name",validate:C}),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Go"))))},V={onSubmit:function(e){return function(t){var n=e.meetingSheetId;b.initializeSheet(n).then(function(){j.push("/meeting/".concat(n)),t({type:"setup/setMeetingSheetId",payload:e})})}}},H=Object(c.connect)(function(){return{}},V)($),K=function(e){var t=e.history;return r.a.createElement(m.ConnectedRouter,{history:t},r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{exact:!0,path:"/",component:H}),r.a.createElement(R.a,{path:"/meeting/:meetingSheetId",component:X})))},Q=Object(c.connect)(function(){return{history:j}})(K),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var te=document.getElementById("root");l.a.render(r.a.createElement(c.Provider,{store:k},r.a.createElement(Q,null)),te),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Z?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ee(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ee(e)})}}()}},[[108,2,1]]]);
//# sourceMappingURL=main.34367496.chunk.js.map