(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"aj+l":function(e,t,n){"use strict";n.r(t);var c,s,r,a=n("q1tI"),i=n("/MKj"),l=n("ZGyg"),o=n("kDLi"),j=n("t8hP"),d=n("aBYM"),h=n.n(d),b=n("nKUr");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}const O=()=>{const[e,t]=Object(a.useState)([]),[n,i]=Object(a.useState)(),l=j.locationService.getLocation().pathname,d=window.location.href,O=d.substr(0,d.indexOf(l));h()(async()=>{const e=await Object(j.getBackendSrv)().get("/api/dashboard/snapshots").then(e=>e.map(e=>x({},e,{url:"/dashboard/snapshot/"+e.key})));t(e)},[t]);const u=Object(a.useCallback)(async n=>{const c=e.filter(e=>e.key!==n.key);t(c),await Object(j.getBackendSrv)().delete("/api/snapshots/"+n.key).catch(()=>{t(e)})},[e]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("table",{className:"filter-table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[c||(c=Object(b.jsx)("th",{children:Object(b.jsx)("strong",{children:"Name"})})),s||(s=Object(b.jsx)("th",{children:Object(b.jsx)("strong",{children:"Snapshot url"})})),Object(b.jsx)("th",{style:{width:"70px"}}),Object(b.jsx)("th",{style:{width:"30px"}}),Object(b.jsx)("th",{style:{width:"25px"}})]})}),Object(b.jsx)("tbody",{children:e.map(e=>{const t=e.externalUrl||e.url,n=e.externalUrl||`${O}${e.url}`;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("a",{href:t,children:e.name})}),Object(b.jsx)("td",{children:Object(b.jsx)("a",{href:t,children:n})}),Object(b.jsx)("td",{children:e.external&&(r||(r=Object(b.jsx)("span",{className:"query-keyword",children:"External"})))}),Object(b.jsx)("td",{className:"text-center",children:Object(b.jsx)(o.LinkButton,{href:t,variant:"secondary",size:"sm",icon:"eye",children:"View"})}),Object(b.jsx)("td",{className:"text-right",children:Object(b.jsx)(o.Button,{variant:"destructive",size:"sm",icon:"times",onClick:()=>i(e)})})]},e.key)})})]}),Object(b.jsx)(o.ConfirmModal,{isOpen:!!n,icon:"trash-alt",title:"Delete",body:`Are you sure you want to delete '${null==n?void 0:n.name}'?`,confirmText:"Delete",onDismiss:()=>i(void 0),onConfirm:()=>{u(n),i(void 0)}})]})};var u,p=n("lzJ5");n.d(t,"SnapshotListPage",(function(){return y}));const y=({navModel:e,location:t})=>Object(b.jsx)(l.b,{navModel:e,children:u||(u=Object(b.jsx)(l.b.Contents,{children:Object(b.jsx)(O,{})}))});t.default=Object(i.connect)(e=>({navModel:Object(p.a)(e.navIndex,"snapshots")}))(y)}}]);
//# sourceMappingURL=SnapshotListPage.843e85298b12060ea650.js.map