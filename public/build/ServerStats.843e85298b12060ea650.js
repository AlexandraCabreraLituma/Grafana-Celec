(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{jmwA:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"ServerStats",(function(){return h}));var s,n,r=a("q1tI"),i=a("0cfB"),c=a("/MKj"),o=a("kDLi"),l=a("lzJ5"),d=a("ZGyg"),u=a("tVDY"),v=a("nKUr");class h extends r.PureComponent{constructor(...e){var t,a,s;super(...e),s={stats:[],isLoading:!0},(a="state")in(t=this)?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s}async componentDidMount(){try{const e=await this.props.getServerStats();this.setState({stats:e,isLoading:!1})}catch(e){console.error(e)}}render(){const{navModel:e}=this.props,{stats:t,isLoading:a}=this.state;return Object(v.jsx)(d.b,{navModel:e,children:Object(v.jsx)(d.b.Contents,{isLoading:a,children:Object(v.jsxs)("table",{className:"filter-table form-inline",children:[s||(s=Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Value"})]})})),Object(v.jsx)("tbody",{children:t.map(j)})]})})})}}function j(e){return Object(v.jsxs)("tr",{children:[Object(v.jsxs)("td",{children:[e.name," ",e.tooltip&&Object(v.jsx)(o.Tooltip,{content:e.tooltip,placement:"top",children:n||(n=Object(v.jsx)(o.Icon,{name:"info-circle"}))})]}),Object(v.jsx)("td",{children:e.value})]},e.name)}t.default=Object(i.hot)(e)(Object(c.connect)(e=>({navModel:Object(l.a)(e.navIndex,"server-stats"),getServerStats:u.a}))(h))}.call(this,a("3UD+")(e))},tVDY:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("q1tI");var s,n=a("t8hP"),r=a("ZFWI"),i=a("nKUr");const{hasLicense:c}=r.a.licenseInfo,o=async()=>{try{const e=await Object(n.getBackendSrv)().get("api/admin/stats");return[{name:"Total users",value:e.users},...c?[]:[{name:"Total admins",value:e.admins},{name:"Total editors",value:e.editors},{name:"Total viewers",value:e.viewers}],{name:"Active users (seen last 30 days)",value:e.activeUsers,tooltip:c?()=>Object(i.jsxs)(i.Fragment,{children:["For active user count by role, see the ",s||(s=Object(i.jsx)("a",{href:"/admin/licensing",children:"Licensing page"})),"."]}):""},...c?[]:[{name:"Active admins (seen last 30 days)",value:e.activeAdmins},{name:"Active editors (seen last 30 days)",value:e.activeEditors},{name:"Active viewers (seen last 30 days)",value:e.activeViewers}],{name:"Active sessions",value:e.activeSessions},{name:"Total dashboards",value:e.dashboards},{name:"Total orgs",value:e.orgs},{name:"Total playlists",value:e.playlists},{name:"Total snapshots",value:e.snapshots},{name:"Total dashboard tags",value:e.tags},{name:"Total starred dashboards",value:e.stars},{name:"Total alerts",value:e.alerts},{name:"Total data sources",value:e.datasources}]}catch(e){throw console.error(e),e}}}}]);
//# sourceMappingURL=ServerStats.843e85298b12060ea650.js.map