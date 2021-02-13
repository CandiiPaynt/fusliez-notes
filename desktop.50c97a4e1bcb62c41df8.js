(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7,9,10],{101:function(e,t,a){"use strict";var r=a(43),n=a(8),o=a(24),l=a(40),s=a(12),c=a(22),i=a(0),m=a.n(i),d=a(32),p=a(11),u=Object(p.d)(e=>({ColorMenuCell:{display:"flex",flex:"0 0 25%",maxWidth:"25%",justifyContent:"center",alignItems:"center"},ColorMenuSwatch:t=>({display:"block",width:"100%",height:"2rem",borderRadius:"0.25rem",padding:0,margin:"0.125rem",border:`1px solid rgba(${Object(d.c)(e.textColorSecondary)}, 0.5)`,backgroundColor:`rgb(${Object(d.b)(t.targetColor,"base")})`,"&:hover":{borderRadius:"50%",cursor:"pointer",backgroundColor:`rgb(${Object(d.b)(t.targetColor,"base")})`}})}));var b=function(e){const{targetColor:t,swapPlayersColors:a}=e,r=u({targetColor:t});return m.a.createElement("div",{className:r.ColorMenuCell},m.a.createElement("button",{className:r.ColorMenuSwatch,onClick:()=>a(),title:t},m.a.createElement("span",{className:"sr-only"},t)))},g=Object(p.d)(e=>({root:{},ColorMenu:{alignItems:"center",background:e.backgroundColorPrimary,border:"1px solid "+e.borderColor,borderRadius:"0.25rem",boxShadow:"0 0 0.25rem black",bottom:"110%",display:"flex",flexWrap:"wrap",left:0,justifyContent:"space-between",position:"absolute",width:"100%",zIndex:10},isHidden:{display:"none"}}));var f=function(e){const{isMenuShowing:t,setIsMenuShowing:a,currentColor:r}=e,l=m.a.useRef(null),s=g(),c=Object(o.c)(n.e),i=Object(o.b)();return m.a.useEffect(()=>{function e(e){var t;l.current&&!(null===(t=null==l?void 0:l.current)||void 0===t?void 0:t.contains(e.target))&&a(!1)}return document.addEventListener("click",e,!0),document.addEventListener("drag",e,!0),()=>{document.removeEventListener("click",e,!0),document.removeEventListener("drag",e,!0)}},[l]),m.a.createElement("div",{ref:l,className:`${s.ColorMenu} ${t?"":s.isHidden}`},[{color:"brown"},{color:"red"},{color:"orange"},{color:"yellow"},{color:"lime"},{color:"green"},{color:"cyan"},{color:"blue"},{color:"purple"},{color:"pink"},{color:"white"},{color:"black"}].map(({color:e})=>m.a.createElement(b,{targetColor:e,key:e,swapPlayersColors:()=>((e,t)=>{if(e!==t){const a=[...c.map(a=>Object.assign(Object.assign({},a),{players:[...a.players.map(a=>Object.assign(Object.assign({},a),{color:a.color===e?t:a.color===t?e:a.color}))]}))];i(Object(n.m)(a))}a(!1)})(r,e)})))},y=a(41),x=a.n(y),E=Object(p.d)(e=>({Player:e=>({display:"flex",flexDirection:"column",alignItems:"stretch",flex:e.showNames||e.isColorBlind?"1 0 50%":"0 0 2.5rem",maxWidth:e.showNames||e.isColorBlind?"50%":"none"}),PlayerTile:t=>({alignItems:"center",backgroundColor:t.playerName||!t.showNames?`rgb(${Object(d.b)(t.color,"dark")})`:e.backgroundColorSecondary,border:"1px solid",borderColor:t.playerName||!t.showNames?`rgb(${Object(d.b)(t.color,"base")})`:e.borderColor,borderRadius:"0.25rem",boxShadow:"1px 1px 1px rgba(0,0,0,0.25)",display:"flex",justifyContent:"center",margin:"0.375rem",opacity:t.longPressed?"0.5":1,position:"relative",transition:"border-color 0.2s ease","&:hover":{borderColor:`rgba(${Object(d.c)(e.textColorSecondary)}, 0.25)`,cursor:t.isReadOnly?"grab":"pointer"}}),PlayerIcon:e=>({display:"flex",flex:e.showNames||!e.isColorBlind?"0 0 2.25rem":"1 0 auto",alignSelf:"stretch",width:e.showNames||!e.isColorBlind?"2.25rem":"auto",height:"2rem",justifyContent:"center",alignItems:"center",backgroundColor:e.playerName||!e.showNames?`rgb(${Object(d.b)(e.color,"base")})`:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"1.75rem auto",backgroundPosition:"center 0.25rem","&:hover":{cursor:e.isReadOnly?"grab":e.showNames?"pointer":"grab"}}),PlayerName:t=>({flexGrow:1,flexBasis:"0",maxWidth:"100%",paddingLeft:"0.5rem",fontSize:"1.15rem",fontWeight:600,lineHeight:1.25,letterSpacing:"0.05rem",color:""!==t.playerName?Object(d.a)(Object(d.b)(t.color,"dark"),e):e.textColorPrimary,opacity:t.isReadOnly&&""===t.playerName?.5:1}),PlayerInput:t=>({color:Object(d.a)(Object(d.b)(t.color,"dark"),e),display:"block",fontSize:t.isMobile?"1rem":t.showNames?"1.15rem":"1rem",fontFamily:e.fontFamily,fontWeight:600,letterSpacing:"0.05rem",lineHeight:1.25,padding:"0.25rem 0",textAlign:"left",width:"100%","&::placeholder":{color:e.textColorPrimary,opacity:.5}}),PlayerHelpText:{textAlign:"center",fontSize:"0.75rem",overflowX:"hidden",letterSpacing:"0.05em",fontWeight:500,opacity:.7}})),C=a(95);var h=function(e){const{t:t}=Object(C.a)(),a=Object(o.c)(c.b),l=Object(o.c)(c.c),i=Object(o.c)(s.c),d=Object(o.c)(s.b),p=Object(o.c)(r.b),[u,b]=m.a.useState(!1),g=Object(o.b)(),y=m.a.useRef(null),h=E(Object.assign({showNames:i,isMobile:a,isColorBlind:d,orientation:l},e)),{color:j,playerName:O,section:v,index:S}=e;return m.a.createElement("div",{className:h.Player,id:j,title:j},m.a.createElement("div",{className:h.PlayerTile+" player-handle"},u&&!a&&!p&&m.a.createElement(f,{isMenuShowing:u,setIsMenuShowing:b,currentColor:j}),m.a.createElement("div",{className:x()(h.PlayerIcon,"player-handle"),onClick:()=>{p||i&&!a&&b(!u)},style:{backgroundImage:`url(assets/images/playerIcons/${j}.png)`}}),i&&m.a.createElement("div",{className:h.PlayerName},!p&&m.a.createElement("input",{type:"text",placeholder:t("main."+j),className:h.PlayerInput,maxLength:10,onChange:e=>((e,t)=>{const a=v.players.map(e=>Object.assign({},e));a[e].playerName=t.currentTarget.value,g(Object(n.l)({sectionId:v.id,players:a}))})(S,e),onKeyPress:e=>{var t,a,r,n,o,l,s,c,i,m;if("Enter"===e.key){const e=y.current,d=null!==(n=null===(r=null===(a=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===a?void 0:a.parentElement)||void 0===r?void 0:r.nextElementSibling)&&void 0!==n?n:null===(c=null===(s=null===(l=null===(o=e.parentElement)||void 0===o?void 0:o.parentElement)||void 0===l?void 0:l.parentElement)||void 0===s?void 0:s.parentElement)||void 0===c?void 0:c.firstElementChild,p=null===(m=null===(i=null==d?void 0:d.lastChild)||void 0===i?void 0:i.lastChild)||void 0===m?void 0:m.firstChild;null==p||p.select()}},value:O,ref:y}),p&&m.a.createElement(m.a.Fragment,null,""!==O?O:t("main."+j)))),d&&m.a.createElement("div",{className:h.PlayerHelpText},t("main."+j)))},j=a(99),O=Object(p.d)(e=>({PlayerSection:{},PlayerSectionTitle:{fontSize:"1rem",letterSpacing:"0.05rem",fontWeight:600},PlayerSectionArea:{display:"flex",flexWrap:"wrap",minHeight:"2rem",justifyContent:"flex-start",padding:"0.5rem",backgroundColor:e.backgroundColorSecondary,borderRadius:"0.25rem"}}));var v=function(e){const t=Object(o.c)(s.c),a=Object(o.c)(c.b),[r,l]=m.a.useState(!1),i=O({showNames:t}),{section:d}=e,{t:p}=Object(C.a)(),u=Object(o.b)();return m.a.useEffect(()=>{a||(r?document.querySelector("body").classList.add("dragging"):document.querySelector("body").classList.remove("dragging"))},[r]),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:i.PlayerSection},m.a.createElement("h2",{className:i.PlayerSectionTitle},p(d.title)),m.a.createElement(j.ReactSortable,{group:"players",handle:".player-handle",delayOnTouchOnly:a,filter:a?"input":"",preventOnFilter:!1,delay:a?10:0,touchStartThreshold:3,list:d.players,setList:e=>{u(Object(n.l)({sectionId:d.id,players:e}))},className:i.PlayerSectionArea,forceFallback:!0,onChoose:()=>l(!0),onUnchoose:()=>l(!1)},d.players.map(({color:e,playerName:t},a)=>m.a.createElement(h,{key:a,color:e,playerName:t,section:d,index:a})))))},S=Object(p.d)({PlayersPanel:{marginBottom:"1rem"},PlayersControls:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:"0.5rem 0","& button":{margin:"0.25rem",flex:"1 1 auto",maxWidth:"100%"}}});var N=function(){const e=Object(o.c)(s.c),t=Object(o.c)(r.b),a=Object(o.c)(c.b),i=Object(o.c)(n.e),d=Object(o.b)(),{t:p}=Object(C.a)(),u=S({isMobile:a});return m.a.createElement("div",{className:u.PlayersPanel},i.map(e=>m.a.createElement(v,{section:e,key:e.id})),m.a.createElement("div",{className:u.PlayersControls},e&&m.a.createElement(l.b,{onClick:()=>d(Object(r.d)())},p(t?"controls.unlockEditing":"controls.lockEditing")),a&&m.a.createElement(l.b,{onClick:()=>d(Object(n.j)())},p("controls.resetPositions"))))},P=a(102),w=Object(p.d)({MainContent:e=>({margin:e.isMobile?"1rem":0,padding:e.isMobile?0:"1rem",maxWidth:e.isMobile?"none":"22.5rem",height:"100%"})});t.a=function(){const e=Object(o.c)(c.b),t=w({isMobile:e});return m.a.createElement("div",{id:"main",className:t.MainContent},!e&&m.a.createElement(P.default,null),m.a.createElement(N,null))}},102:function(e,t,a){"use strict";a.r(t);var r=a(5),n=(a(103),a(22)),o=a(104),l=a(0),s=a.n(l),c=a(32),i=a(24),m=a(11),d=Object(m.d)({CircularBar:e=>({fontSize:e.isMobile?"0.5rem":"1rem"})});var p=function(e){const{progress:t,color:a,children:r}=e,l=Object(i.c)(n.b),m=Object(i.c)(n.c),p=d({color:a,progress:t,isMobile:l,orientation:m});return s.a.createElement(o.a,{value:t,className:p.CircularBar,counterClockwise:!0,styles:{path:{stroke:a},trail:{stroke:function(e){return`rgba(${Object(c.c)(e)}, 0.3)`}(String(a))}}},r)},u=a(41),b=a.n(u),g=Object(m.d)(e=>({ProgressBar:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"0 0.25rem"},ProgressBarTitle:{fontSize:"0.875rem",letterSpacing:"0.05rem",fontWeight:600,marginBottom:"0.5rem"},ProgressBarTitleOverall:{fontSize:"1.25rem"},ProgressBarTitleImpostor:{color:Object(c.d)(e.imposterColorPrimary,80)},ProgressBarTitleCrewmate:{color:Object(c.d)(e.crewmateColorPrimary,30)},CirclePrimary:{width:"6rem",height:"6rem",display:"flex",flexDirection:"column",alignItems:"center"},CircleSecondary:{width:"5rem",height:"5rem",display:"flex",flexDirection:"column",alignItems:"center"},progress:{marginBottom:"0.5rem"},CirclePercentage:{fontSize:"0.75rem",fontWeight:600,lineHeight:1,letterSpacing:"0.05rem"},CirclePercentagePrimary:{fontSize:"1rem"},CircleScores:{fontSize:"0.75rem",letterSpacing:"0.05rem"},CircleScoresPrimary:{fontSize:"1rem"}})),f=a(95);var y=function(e){const{t:t,i18n:a}=Object(f.a)(),r=Object(m.f)(),n=g(),{overallRate:o,overallWins:l,overallLosses:c,crewmateRate:i,crewmateWins:d,crewmateLosses:u,impostorRate:y,impostorWins:x,impostorLosses:E}=e;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:n.ProgressBar},s.a.createElement("span",{className:b()(n.ProgressBarTitle,n.ProgressBarTitleCrewmate)},t("main.crewmate")),s.a.createElement("div",{className:n.CircleSecondary},s.a.createElement(p,{progress:i,color:r.crewmateColorPrimary,className:n.progress},s.a.createElement("span",{className:n.CirclePercentage},i+"%"),s.a.createElement("span",{style:{direction:a.dir()},className:n.CircleScores},`${d}${t("main.w")}-${u}${t("main.l")}`)))),s.a.createElement("div",{className:n.ProgressBar},s.a.createElement("span",{className:b()(n.ProgressBarTitle,n.ProgressBarTitleOverall)},t("main.overall")),s.a.createElement("div",{className:n.CirclePrimary},s.a.createElement(p,{progress:o,color:r.neutralColor,className:n.progress},s.a.createElement("span",{className:b()(n.CirclePercentage,n.CirclePercentagePrimary)},o+"%"),s.a.createElement("span",{style:{direction:a.dir()},className:b()(n.CircleScores,n.CircleScoresPrimary)},`${l}${t("main.w")}-${c}${t("main.l")}`)))),s.a.createElement("div",{className:n.ProgressBar},s.a.createElement("span",{className:b()(n.ProgressBarTitle,n.ProgressBarTitleImpostor)},t("main.impostor")),s.a.createElement("div",{className:n.CircleSecondary},s.a.createElement(p,{progress:y,color:r.imposterColorPrimary,className:n.progress},s.a.createElement("span",{className:n.CirclePercentage},y+"%"),s.a.createElement("span",{style:{direction:a.dir()},className:n.CircleScores},`${x}${t("main.w")}-${E}${t("main.l")}`)))))},x=Object(m.d)({ScoresPanel:{marginBottom:"1rem",alignItems:"center",display:"flex",justifyContent:"space-between",flex:"1 0 16rem",maxWidth:"20rem"}});t.default=function(){const e=Object(i.c)(r.g),t=Object(i.c)(r.f),a=Object(i.c)(r.i),n=Object(i.c)(r.h),o=x(),l=(e,t)=>t>0?Math.floor(e/t*100):100,c=e||0,m=t||0,d=a||0,p=n||0,u=c+d,b=m+p,g=l(u,u+b),f=l(c,c+m),E=l(d,d+p);return s.a.createElement("div",{className:o.ScoresPanel},s.a.createElement(y,Object.assign({},{overallRate:g,overallWins:u,overallLosses:b,crewmateRate:f,crewmateWins:c,crewmateLosses:m,impostorRate:E,impostorWins:d,impostorLosses:p})))}},108:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a(8),o=a(24),l=a(40),s=a(0),c=a.n(s),i=a(11),m=Object(i.d)(e=>({Score:{backgroundColor:e.backgroundColorSecondary,color:e.textColorPrimary,borderTop:"1px solid "+e.borderColor,borderBottom:"1px solid "+e.borderColor,display:"block",fontSize:"1.25rem",fontWeight:600,height:"100%",padding:"0 0.5rem",textAlign:"center",appearance:"textfield",width:"2rem"}})),d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};var p=function(e){const t=m(),a=d(e,[]);return c.a.createElement("input",Object.assign({type:"number",min:0,className:t.Score},a))},u=a(32),b=Object(i.d)(e=>({WinsLossesButtonContainer:{alignItems:"center",display:"flex",flex:1,position:"relative",justifyContent:"space-between",height:"100%",width:"100%",margin:"0.25rem 0"},winsLossesButton:t=>({margin:0,fontSize:"0.75rem",padding:"0.375rem .5rem",backgroundColor:`rgba(${Object(u.c)(t.buttonBackgroundColor)}, 0.5)`,color:e.textColorPrimary,"&:hover":{backgroundColor:`rgba(${Object(u.c)(t.buttonBackgroundColorHover)}, 0.5)`,color:e.textColorSecondary}}),winsLossesButtonLeft:{borderRadius:"6px 0 0 6px"},winsLossesButtonRight:{borderRadius:"0 6px 6px 0"}})),g=a(42);var f=function(e){const{buttonBackgroundColor:t,buttonBackgroundColorHover:a,decrement:r,increment:n,score:o,setScore:s}=e,i=b({buttonBackgroundColor:t,buttonBackgroundColorHover:a});return c.a.createElement("div",{className:i.WinsLossesButtonContainer},c.a.createElement(l.b,{onClick:()=>r(),className:`${i.winsLossesButton} ${i.winsLossesButtonLeft}`},c.a.createElement(g.a,{icon:"minus"})),c.a.createElement(p,{value:o,onChange:e=>s(parseInt(e.currentTarget.value))}),c.a.createElement(l.b,{onClick:()=>n(),className:`${i.winsLossesButton} ${i.winsLossesButtonRight}`},c.a.createElement(g.a,{icon:"plus"})))},y=a(22),x=a(44),E=a(43),C=Object(i.d)(e=>({ScoreControls:e=>({flex:e.isMobile?"1 0 16rem":"0 0 auto",maxWidth:e.isMobile?"20rem":"none",marginBottom:e.isMobile?0:"1rem"}),ScoreButtonsLayout:e=>({display:"flex",marginTop:e.isMobile?"1rem":"0.5rem",justifyContent:"space-between"}),ScoreButtonsColumn:{alignItems:"flex-start",display:"flex",flex:"0 0 auto",flexDirection:"column",justifyContent:"space-around",width:"auto",maxWidth:"100%",padding:"0 0.25rem"},ScoreButtonsLabel:e=>({letterSpacing:"0.05rem",fontSize:e.isMobile?"0.75rem":"0.875rem",fontWeight:500}),ScoreButtonsHeader:e=>({fontSize:e.isMobile?"0.875rem":"1rem",letterSpacing:"0.05rem",fontWeight:500,textAlign:"center",width:"100%"}),ScoreOptions:{display:"flex",flexWrap:"wrap",margin:"1rem 0 0"},ScoreOptionButton:{flex:"1 0 8rem",margin:"0.25rem"}})),h=a(95);t.default=function(){const{t:e}=Object(h.a)(),t=Object(i.f)(),a=Object(o.c)(r.g),s=Object(o.c)(r.f),m=Object(o.c)(r.i),d=Object(o.c)(r.h),p=Object(o.c)(y.b),u=C({isMobile:p}),b=Object(o.b)();return c.a.createElement("div",{className:u.ScoreControls},c.a.createElement("div",{className:u.ScoreButtonsLayout},c.a.createElement("div",{className:u.ScoreButtonsColumn},c.a.createElement("h4",{className:u.ScoreButtonsLabel}," "),c.a.createElement("h4",{className:u.ScoreButtonsLabel},e("controls.crewmate")),c.a.createElement("h4",{className:u.ScoreButtonsLabel},e("controls.impostor"))),c.a.createElement("div",{className:u.ScoreButtonsColumn},c.a.createElement("h4",{className:u.ScoreButtonsHeader},e("controls.wins")),c.a.createElement(f,{buttonBackgroundColor:t.crewmateColorPrimary,buttonBackgroundColorHover:t.crewmateColorSecondary,decrement:()=>b(Object(r.b)()),increment:()=>b(Object(r.k)()),score:a,setScore:e=>b(Object(r.p)(e))}),c.a.createElement(f,{buttonBackgroundColor:t.imposterColorPrimary,buttonBackgroundColorHover:t.imposterColorSecondary,decrement:()=>b(Object(r.d)()),increment:()=>b(Object(r.m)()),score:m,setScore:e=>b(Object(r.r)(e))})),c.a.createElement("div",{className:u.ScoreButtonsColumn},c.a.createElement("h4",{className:u.ScoreButtonsHeader},e("controls.losses")),c.a.createElement(f,{buttonBackgroundColor:t.crewmateColorPrimary,buttonBackgroundColorHover:t.crewmateColorSecondary,decrement:()=>b(Object(r.a)()),increment:()=>b(Object(r.j)()),score:s,setScore:e=>b(Object(r.o)(e))}),c.a.createElement(f,{buttonBackgroundColor:t.imposterColorPrimary,buttonBackgroundColorHover:t.imposterColorSecondary,decrement:()=>b(Object(r.c)()),increment:()=>b(Object(r.l)()),score:d,setScore:e=>b(Object(r.q)(e))}))),c.a.createElement("div",{className:u.ScoreOptions},c.a.createElement(l.b,{className:u.ScoreOptionButton,onClick:()=>b(Object(r.n)())},e("controls.resetScores")),!p&&c.a.createElement(l.b,{className:u.ScoreOptionButton,onClick:()=>b(Object(n.j)())},e("controls.resetPositions")),!p&&c.a.createElement(l.b,{className:u.ScoreOptionButton,danger:!0,onClick:()=>(b(Object(r.n)()),b(Object(n.i)()),b(Object(x.d)()),void b(Object(E.c)()))},e("controls.resetAll"))))}},109:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a(8),o=a(12),l=a(22),s=a(24),c=a(40),i=a(105),m=a.n(i),d=a(0),p=a.n(d),u=a(95);function b(e){const{t:t}=Object(u.a)();return p.a.createElement("svg",Object.assign({viewBox:"0 0 1366 768"},e,{preserveAspectRatio:"xMinYMin meet"}),p.a.createElement("title",null,"MiraHq"),p.a.createElement("image",{href:"assets/images/Mirahq.jpg"}),p.a.createElement("text",{y:155,x:812.5},t("maps.greenhouse")),p.a.createElement("text",{y:254,x:949.5},t("maps.admin")),p.a.createElement("text",{y:232,x:784.5},t("maps.office")),p.a.createElement("text",{transform:"rotate(45.439 727.06 812.293) scale(.78224 1)",y:551.511,x:705.185},t("maps.communications")),p.a.createElement("text",{transform:"rotate(67.008 600.961 652.111) scale(.83183 1)",y:580.612,x:590.578},t("maps.lockerRoom")),p.a.createElement("text",{fontSize:28,y:666,x:778.5},t("maps.medBay")),p.a.createElement("text",{y:560,x:1054.5},t("maps.cafeteria")),p.a.createElement("text",{transform:"rotate(45 938.725 548.208)",fontSize:28,y:565,x:909.5},t("maps.storage")),p.a.createElement("text",{y:704,x:1077.5},t("maps.balcony")),p.a.createElement("text",{y:612,x:214.5},t("maps.launchpad")),p.a.createElement("text",{fontSize:28,y:400,x:408},t("maps.reactor")),p.a.createElement("text",{transform:"rotate(45 705.725 339.208)",y:420,x:653.5},t("maps.laboratory")),p.a.createElement("g",{className:"MapDescriptions"},p.a.createElement("text",{y:63,x:1140},t("maps.vents")),p.a.createElement("text",{y:98,x:1140},t("maps.ventConnections")),p.a.createElement("text",{y:135,x:1140},t("maps.wiringTasks")),p.a.createElement("text",{y:172,x:1140},t("maps.commonTasks"))))}function g(e){const{t:t}=Object(u.a)();return p.a.createElement("svg",Object.assign({viewBox:"0 0 1366 768"},e,{preserveAspectRatio:"xMinYMin meet"}),p.a.createElement("title",null,"Polus"),p.a.createElement("image",{href:"assets/images/Polus.jpg"}),p.a.createElement("text",{y:375,x:244.5},t("maps.electrical")),p.a.createElement("text",{y:365,x:75.5},t("maps.security")),p.a.createElement("text",{y:433,x:865.5},t("maps.east")),p.a.createElement("text",{y:361,x:618.5},t("maps.storage")),p.a.createElement("text",{fontSize:32,y:260,x:994.5},t("maps.laboratory")),p.a.createElement("text",{fontSize:28,y:597,x:1035.5},t("maps.specimenRoom")),p.a.createElement("text",{transform:"rotate(45 684.608 655)",y:632,x:673.5},t("maps.admin")),p.a.createElement("text",{y:660,x:342.5},t("maps.weapons")),p.a.createElement("text",{transform:"rotate(45 424.608 494)",y:531,x:303.5},t("maps.communications")),p.a.createElement("text",{y:499,x:659.5},t("maps.office")),p.a.createElement("text",{y:500,x:71.5},t("maps.o2")),p.a.createElement("text",{y:428,x:409.5},t("maps.central")),p.a.createElement("text",{y:250,x:712.5},t("maps.northeast")),p.a.createElement("text",{y:632,x:475.5},t("maps.south")),p.a.createElement("text",{y:598,x:85.5},t("maps.southwest")),p.a.createElement("text",{y:248,x:285.5},t("maps.northwest")),p.a.createElement("g",{className:"MapDescriptions"},p.a.createElement("text",{fontSize:22,y:45,x:890},t("maps.vents")),p.a.createElement("text",{fontSize:22,y:77.5,x:890},t("maps.commonTasks")),p.a.createElement("text",{fontSize:22,y:110,x:890},t("maps.wiringTasks")),p.a.createElement("text",{fontSize:22,y:45,x:1110},t("maps.ventConnections")),p.a.createElement("text",{fontSize:22,y:77.5,x:1110},t("maps.securityCameras")),p.a.createElement("text",{fontSize:22,y:110,x:1110},t("maps.cameraZones"))))}function f(e){const{t:t}=Object(u.a)();return p.a.createElement("svg",Object.assign({viewBox:"0 0 1366 768"},e,{preserveAspectRatio:"xMinYMin meet"}),p.a.createElement("title",null,"TheSkeld"),p.a.createElement("image",{href:"assets/images/TheSkeld.png"}),p.a.createElement("g",{className:"MapDescriptions"},p.a.createElement("text",{y:30,x:1160},t("maps.vents")),p.a.createElement("text",{y:55,x:1160},t("maps.ventConnections")),p.a.createElement("text",{y:82,x:1160},t("maps.wiringTasks")),p.a.createElement("text",{y:108,x:1160},t("maps.commonTasks")),p.a.createElement("text",{y:136,x:1160},t("maps.securityCameras")),p.a.createElement("text",{y:165,x:1160},t("maps.cameraZones"))),p.a.createElement("text",{fontSize:32,y:168,x:700},t("maps.cafeteria")),p.a.createElement("text",{fontSize:32,y:225,x:1e3},t("maps.weapons")),p.a.createElement("text",{fontSize:32,y:355,x:1155},t("maps.navigation")),p.a.createElement("text",{fontSize:28,y:560,x:990},t("maps.shields")),p.a.createElement("text",{fontSize:28,y:655,x:830},t("maps.communications")),p.a.createElement("text",{fontSize:32,y:565,x:680},t("maps.storage")),p.a.createElement("text",{fontSize:32,y:492,x:515.5},t("maps.electrical")),p.a.createElement("text",{fontSize:32,y:540,x:185.5},t("maps.lowerEngine")),p.a.createElement("text",{fontSize:32,y:370,x:170},t("maps.reactor")),p.a.createElement("text",{fontSize:32,y:175,x:190.5},t("maps.upperEngine")),p.a.createElement("text",{fontSize:32,y:315,x:490},t("maps.medBay")),p.a.createElement("text",{fontSize:32,y:360,x:365},t("maps.security")),p.a.createElement("text",{fontSize:32,y:425,x:885.5},t("maps.admin")),p.a.createElement("text",{fontSize:32,y:330,x:942.5},t("maps.o2")))}var y=a(41),x=a.n(y),E=a(11),C=Object(E.d)(e=>({"@global":{image:{pointerEvents:"none"},text:{fontFamily:"Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif",fontSize:"1.75rem",fill:"#ffffff",strokeWidth:"1px",stroke:"#000000",pointerEvents:"none",userSelect:"none"},".MapDescriptions":{"&>text":{fontFamily:e.fontFamily,fontSize:"1.25rem",strokeWidth:0}}},MapsPanel:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:"1rem"},MapsPanelMapsHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},MapsPanelMapsTitle:{fontSize:"1.25rem",fontWeight:500,letterSpacing:"0.05em",marginRight:"1rem",flex:"1 0 auto"},MapsPanelMapsToggle:e=>({display:e.isMobile?"flex":"inline-flex",width:e.isMobile?"100%":"auto",margin:"0 0.25rem"}),MapsPanelMapsToggleButton:{flex:"1 1 auto","&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},MapsPanelMapsToggleButtonActive:{opacity:"0.5",cursor:"default","&:hover":{backgroundColor:e.linkColor}},MapsPanelMainContainer:{flex:1,display:"flex",flexDirection:"column",position:"relative"},MapsPanelMapContainer:{backgroundColor:"#000000"},MapsPanelMap:{maxHeight:"calc(-16.5rem + 100vh)"},MapsPanelDraggableHeader:e=>({display:"flex",flexDirection:e.isMobile?"column":"row",justifyContent:"space-between",alignItems:"center",margin:"1rem 0","& h3":{fontSize:e.isMobile?"0.875rem":"1rem",fontWeight:500,letterSpacing:"0.05em",padding:"0.5rem 0"}}),MapsPanelMapPlayerIcon:e=>({width:e.isMobile?"1rem":"2rem",height:"auto",margin:"0 0.75rem"}),MapsPanelMapPlayerIconNonVisible:{visibility:"hidden"},MapPlayerName:{fontSize:"1rem",margin:"0.25rem 0",textShadow:"-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000"},MapPlayerIconContainer:e=>({alignItems:"center",display:"inline-flex",flex:"1 0\n     "+(e.isMobile?"2rem":"4rem"),flexDirection:"column",height:"auto",justifyContent:"center",margin:"0.5rem",textAlign:"center",maxWidth:e.isMobile?"1.5rem":"3rem","&:hover":{cursor:"grab"}})}));t.default=function(){const{t:e}=Object(u.a)(),t=Object(s.c)(l.b),a=Object(s.c)(l.c),i=Object(s.c)(o.c),d=Object(s.c)(o.b),y=Object(s.c)(n.d),E=Object(s.c)(r.b),h=Object(s.c)(r.c),j=Object(s.c)(n.f),O=Object(s.c)(n.c),v=Object(s.c)(n.h),S=Object(s.c)(n.e),N=Object(s.b)(),P=C({map:h,isMobile:t,orientation:a}),w=p.a.useMemo(()=>{const e=[],t={};for(const e of y)t[e.id]=e;for(const a of E)e.push(Object.assign(Object.assign({},t[a.id]),{x:a.x,y:a.y}));return e},[y]);let M=p.a.createElement(f,{className:P.MapsPanelMap});return"MiraHq"===h?M=p.a.createElement(b,{className:P.MapsPanelMap}):"Polus"===h&&(M=p.a.createElement(g,{className:P.MapsPanelMap})),p.a.createElement("div",{className:P.MapsPanel},p.a.createElement("div",{className:P.MapsPanelMapsHeader},!t&&p.a.createElement("h2",{className:P.MapsPanelMapsTitle},e("maps.title")),p.a.createElement("div",{className:P.MapsPanelMapsToggle},p.a.createElement(c.b,{className:P.MapsPanelMapsToggleButton,pressed:"TheSkeld"===h,onClick:()=>N(Object(r.f)("TheSkeld"))},"The Skeld"),p.a.createElement(c.b,{className:P.MapsPanelMapsToggleButton,pressed:"MiraHq"===h,onClick:()=>N(Object(r.f)("MiraHq"))},"Mira HQ"),p.a.createElement(c.b,{className:P.MapsPanelMapsToggleButton,pressed:"Polus"===h,onClick:()=>N(Object(r.f)("Polus"))},"Polus"))),p.a.createElement("div",{className:P.MapsPanelMainContainer,id:"MapsContainer"},p.a.createElement("div",{className:P.MapsPanelMapContainer},M),p.a.createElement("div",{className:P.MapsPanelDraggableHeader},p.a.createElement("h3",null,e("maps.dragInstructions")),p.a.createElement(c.b,{onClick:()=>N(Object(r.d)())},e("maps.removePlayers"))),p.a.createElement("div",null,w.map((t,a)=>p.a.createElement(m.a,{key:a,bounds:"#MapsContainer",position:{x:t.x,y:t.y},onStop:(e,a)=>{N(Object(r.e)(Object.assign(Object.assign({},t),{x:a.lastX,y:a.lastY})))},disabled:t.section===v},p.a.createElement("span",{className:P.MapPlayerIconContainer},i&&p.a.createElement("p",{className:P.MapPlayerName},t.playerName),p.a.createElement("img",{alt:t.id+" character icon",src:`assets/images/playerIcons/${t.section===O?t.id+"-dead":""+t.id}.png`,className:x()({[P.MapsPanelMapPlayerIconNonVisible]:t.section===v},P.MapsPanelMapPlayerIcon),onDrag:e=>e.stopPropagation(),draggable:!1,onDoubleClick:()=>(e=>{e.section===O?N(Object(n.m)(S.map(t=>Object.assign(Object.assign({},t),{players:t.id===O?[...t.players.filter(t=>t.color!==e.id)]:t.id===j?[...t.players,{id:e.id.charAt(0).toUpperCase()+e.id.slice(1),playerName:e.playerName,color:e.id}]:[...t.players]})))):N(Object(n.m)(S.map(t=>Object.assign(Object.assign({},t),{players:t.id!==O?[...t.players.filter(t=>t.color!==e.id)]:[...t.players,{id:e.id.charAt(0).toUpperCase()+e.id.slice(1),playerName:e.playerName,color:e.id}]}))))})(t),title:"Double-click to mark dead/alive"}),d&&p.a.createElement("p",{className:P.MapPlayerName},e("main."+t.id))))))))}},110:function(e,t,a){"use strict";a.r(t);var r=a(22),n=a(40),o=a(4),l=a(0),s=a.n(l),c=a(24),i=a(11),m=Object(i.d)({NotesPanel:e=>({height:"100%",flexGrow:1,display:"flex",flexDirection:"column",padding:e.isMobile?"1rem":"0",width:"100%"}),NotesHeader:{display:"flex",marginBottom:"0.5rem","& h2":{fontSize:"1.25rem",fontWeight:500,letterSpacing:"0.05em",marginRight:"1rem",flex:"1 0 auto"}},NotesReset:{flex:"0 0 auto",alignSelf:"flex-start"},Notepad:{flex:"1 0 auto",marginBottom:"1rem",fontSize:"1.25rem",resize:"vertical"}}),d=a(95);t.default=function(){const e=o.b+"notes",{t:t}=Object(d.a)(),a=Object(c.c)(r.b),l=Object(c.c)(r.c),i=m({isMobile:a,orientation:l}),[p,u]=s.a.useState(localStorage.getItem(e)||"");return s.a.useEffect(()=>{localStorage.setItem(e,p)},[p]),s.a.createElement("div",{className:i.NotesPanel},!a&&s.a.createElement("div",{className:i.NotesHeader},s.a.createElement("h2",null,t("controls.notes")),s.a.createElement(n.b,{className:i.NotesReset,onClick:()=>{u("")}},t("controls.resetNotes"))),s.a.createElement("textarea",{className:i.Notepad,name:"notes",onChange:e=>{u(e.target.value)},value:p}),a&&s.a.createElement(n.b,{className:i.NotesReset,onClick:()=>{u("")}},t("controls.resetNotes")))}},122:function(e,t,a){"use strict";a.r(t);var r=a(40),n=a(4),o=a(110),l=a(0),s=a.n(l),c=a(108),i=a(11),m=Object(i.d)(e=>({ControlsContent:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",padding:"1rem",maxWidth:"22.5rem"},ControlsContentHeader:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignSelf:"stretch",padding:"0.5rem 0","& button":{margin:"0.25rem",flex:"1 1 auto",maxWidth:"100%"}},Divider:{width:"100%",border:0,borderBottom:"1px solid "+e.borderColor,marginBottom:"1rem"},scoreButtons:{display:"flex",flexDirection:"column",marginBottom:"0.5rem"},scoreButtonsSection:{alignItems:"center",display:"flex",justifyContent:"space-between",width:"100%"}})),d=a(95);const p=s.a.lazy(()=>a.e(11).then(a.bind(null,125))),u=s.a.lazy(()=>a.e(2).then(a.bind(null,126))),b=s.a.lazy(()=>a.e(3).then(a.bind(null,127)));var g=function(){const{t:e}=Object(d.a)(),t=m(),[a,l]=s.a.useState(!1),[i,g]=s.a.useState(!1),[f,y]=s.a.useState(!1);return s.a.useEffect(()=>{const e=localStorage.getItem(n.b+"version");null!==e&&e===n.c||l(!0),localStorage.setItem(n.b+"version",n.c)},[]),s.a.createElement("div",{id:"controls",className:t.ControlsContent},s.a.createElement(c.default,null),s.a.createElement("hr",{className:t.Divider}),s.a.createElement(o.default,null),s.a.createElement("hr",{className:t.Divider}),s.a.createElement("div",{className:t.ControlsContentHeader},s.a.createElement(r.b,{onClick:()=>g(!0)},e("menu.settings")),s.a.createElement(r.b,{onClick:()=>y(!0)},e("menu.about")),s.a.createElement(r.b,{onClick:()=>l(!0)},e("menu.changelog"))),s.a.createElement(p,{show:i,onClose:()=>g(!1)}),s.a.createElement(b,{show:a,onClose:()=>l(!1)}),s.a.createElement(u,{show:f,onClose:()=>y(!1)}))},f=a(42),y=a(96),x=Object(i.d)(e=>({Footer:{backgroundColor:e.backgroundColor,padding:"0.5rem"}}));var E=function(){const e=x(),{t:t,i18n:a}=Object(d.a)();return s.a.createElement(s.a.Fragment,null,s.a.createElement("footer",{style:{direction:a.dir()},className:e.Footer},s.a.createElement(y.a,{i18nKey:"footer.partOne"},"fusliez notes made with ",s.a.createElement(f.a,{icon:"heart"})," by the fuslie fam.")," ","|"," ",s.a.createElement("a",{href:"https://github.com/Kedyn/fusliez-notes",target:"_blank",rel:"noopener noreferrer"},t("footer.partTwo"))," ","|"," ",s.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSdrIUKoatKPmYTq1pxzX1jNtM9mYrBmG8sfkJFfl8NZ6EbjuA/viewform",target:"_blank",rel:"noopener noreferrer"},t("footer.partThree"))))},C=a(101),h=a(109),j=Object(i.d)(e=>({DesktopContent:{flexGrow:1,display:"flex"},DesktopDivider:{width:"1px",backgroundColor:e.borderColor},DesktopMapButton:{width:"1rem",padding:"0.25rem",borderRadius:"0"}}));t.default=function(){const e=j(),[t,a]=s.a.useState(!1);return s.a.createElement(s.a.Fragment,null,s.a.createElement("main",{className:e.DesktopContent},!t&&s.a.createElement(s.a.Fragment,null,s.a.createElement(C.a,null),s.a.createElement("div",{className:e.DesktopDivider}),s.a.createElement(g,null)),s.a.createElement(r.b,{className:e.DesktopMapButton,onClick:()=>a(!t)},s.a.createElement(f.a,{icon:t?"arrow-right":"arrow-left",size:"xs"})),s.a.createElement(h.default,null)),s.a.createElement(E,null))}}}]);