"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[71526],{157796:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(667294),i=n(883119),a=n(785893);function l({color:e="red",duration:t,finalProgress:n,shape:l="pill"}){let[r,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e=setTimeout(()=>{s(!0)},0);return()=>{clearTimeout(e)}},[]);let c="pill"===l;return(0,a.jsx)(i.xu,{color:e,dangerouslySetInlineStyle:{__style:{transform:c?`translateX(${r?"-5px":"-100%"})`:`scaleX(${r?1:0})`,transformOrigin:"left",transitionDuration:`${t}ms`,transitionTimingFunction:"ease-in"}},height:c?8:6,rounding:c?"pill":2,width:`${n}%`})}},100183:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>l,XF:()=>a});let o=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>o(t/2,e/2,2*Math.random()*Math.PI),a=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,l=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},780678:(e,t,n)=>{n.d(t,{Z:()=>i,v:()=>o});let o=()=>"undefined"!=typeof navigator&&"getInstalledRelatedApps"in navigator;async function i(){if(!o())return[];try{let e=await navigator.getInstalledRelatedApps();return e}catch(e){return[]}}},400964:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(785893);let i=(0,o.jsx)("svg",{height:"40px",version:"1.1",viewBox:"0 0 40 40",width:"40px",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:(0,o.jsx)("path",{d:"M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z",fill:"#FFFFFF",fillRule:"nonzero",id:""})})}),a=i},830269:(e,t,n)=>{n.d(t,{Z:()=>o});let o={EMAIL:1,FACEBOOK:2,GPLUS:3,GOOGLE_ONE_TAP:4,SMARTLOCK:5,MULTIFACTOR:6,SWITCH_ACCOUNT:7,LINE:8}},553171:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(464232),i=n(231486),a=n(226198),l=n(844974),r=n(966113),s=n(826067),c=n(643913);let d="undefined"!=typeof window,_=d?`${window.location.origin}/oauth/line/redirect`:"",p=({origin:e,data:t})=>t&&e===window.location.origin?String(t):null,u=({url:e,key:t})=>{if(!e.startsWith(window.location.origin)||t!==o.MM)return null;let n=(0,l.qn)(o.MM);return(0,l.L_)(o.MM),n};function g(e,t){let n;if(!d){var o;null===(o=t.error)||void 0===o||o.call(t,{message:"Window is undefined"});return}let l=function(e=5){let t="abcdefghijklmnopqrstuvwxyz1234567890";return Array(e).fill("").map(()=>t[Math.floor(Math.random()*t.length)]).join("")}(10),g=async e=>{if(!e.isTrusted)return;let o=e instanceof MessageEvent?p(e):u(e),r=(0,s.mB)(o);if(r.state&&r.code&&r.state===l){var d,m,h;n&&!n.closed&&n.close();try{let e=await fetch("/oauth/line/verify",{headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","x-csrftoken":`${String(i.U2(a.fS))}`},method:"POST",body:(0,c.Z)({code:r.code,redirect_uri:_})}),n=await e.json(),{id_token:o,access_token:l}=n;o&&l?t.success({line_id_token:o,line_access_token:l}):null===(d=t.error)||void 0===d||d.call(t,{message:"No tokens returned"})}catch(e){null===(m=t.error)||void 0===m||m.call(t,e)}finally{n&&!n.closed&&n.close(),window.removeEventListener("message",g),window.removeEventListener("storage",g),null===(h=t.complete)||void 0===h||h.call(t)}}};window.addEventListener("message",g),window.addEventListener("storage",g),n=window.open(`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${r.zal}&redirect_uri=${encodeURIComponent(_)}&state=${l}&ui_locales=${e}&scope=profile%20openid%20email`,"_blank")}},101331:(e,t,n)=>{n.d(t,{A:()=>_,Z:()=>d});var o=n(667294),i=n(464232),a=n(112690),l=n(385740),r=n(780679),s=n(458882),c=n(957161);function d(){let{trackConversionUpsellForContext:e}=(0,r.g)()||{},{trackConversionUpsellForContext:t}=(0,s.l)()||{},{viewType:n,viewParameter:o}=(0,l.SU)();return{trackConversionUpsell:({eventType:i,viewType:a,viewParameter:l,element:r,component:s,upsellReason:c,incrementUpsellReasonCounter:d})=>{let _=e||t;_&&_({eventType:i,viewType:a||n||202,viewParameter:l||o,element:r,component:s,upsellReason:c,incrementUpsellReasonCounter:d})}}}function _(){let e=(0,a.Z)(),t=(0,o.useRef)(null),n=()=>c.Z.getItem(i.w0)||0,l=()=>{c.Z.setItem(i.w0,n()+1)};return{trackConversionUpsellForContext:({eventType:o,viewType:a,viewParameter:r,element:s,component:d,upsellReason:_,incrementUpsellReasonCounter:p})=>{14688===o&&(c.Z.setItem(i.bg,_||""),t.current=d,!1!==p&&l()),e({event_type:o,view_type:a,view_parameter:r,element:s,component:t.current,aux_data:{upsell_reason:c.Z.getItem(i.bg)||null,upsell_view_count:n()}})}}}},329900:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(407043),i=n(773285),a=n(780280),l=n(619277),r=n(948376),s=n(780678),c=n(826067),d=n(67347);let _="http://play.google.com/store/apps/details?id=com.pinterest",p=["access_token","new_password","new_password_confirm","password","next"],u=(e,t)=>t?(0,c.ru)(e,{invite_code:t}):e,g=(e,t,n)=>{if("ios"===t&&"string"==typeof e&&e.startsWith("discover/article/")){let t=e.split("/")[2];e=`discover_article/${t}/?is_deeplink=1`}return("string"==typeof e&&"shopping/"===e&&(e="?is_deeplink=1"),"string"==typeof e)?u(e,n):"ios"===t||"ipad"===t?u(e.iOS,n):"android"===t?u(e.android,n):null},m=({deeplinkUri:e,invite_code:t,platform:n,fallbackUrl:o,unauthId:i,app_upsell_type:a})=>({deeplink_path:g(e,n,t),current_page_url:(0,c.Gw)("undefined"!=typeof window?window.location.href:"",p),install_id:i,utm_source:140,utm_medium:2152,app_upsell_type:a,...o?{af_r:o}:null}),h=({deeplinkUri:e,invite_code:t,platform:n,unauthId:o,app_upsell_type:i})=>{let a=JSON.stringify({deeplink_path:g(e,n,t),current_page_url:(0,c.Gw)("undefined"!=typeof window?window.location.href:"",p),install_id:o}),l=(0,c.XP)({utm_source:"mweb",utm_medium:"upsell",utm_content:a,app_upsell_type:i});return{referrer:l}},f=({unauthId:e,app_upsell_type:t})=>{let n=(0,c.XP)({utm_source:"mweb",utm_medium:"upsell",utm_campaign:"twa",utm_content:e,app_upsell_type:t});return{referrer:encodeURI(n)}},w=({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:o,logContextEvent:i,platform:a,redirectToLite:l,unauthId:r,userAgent:p,app_upsell_type:u})=>{if(null==i||i({component:14347,element:13582,event_type:701,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:u}}),t){let g=m({isAuthenticated:e,deeplinkUri:t,fallbackUrl:n,invite_code:o,platform:a,unauthId:r,userAgent:p,app_upsell_type:u});if((0,d.nP)("mweb.deeplink",{sampleRate:1,tags:{platform:a}}),o&&(0,d.nP)("mweb.deeplink.invite_code",{sampleRate:1}),(0,d.nP)("mweb.deeplink.unauthId",{sampleRate:1,tags:{withUnauthId:!!r}}),l){(0,d.nP)("mweb.deeplink.lite_link",{sampleRate:1}),null==i||i({component:14347,element:13582,event_type:14540,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:u}});let e=f({unauthId:r,app_upsell_type:u});window.location.href=(0,c.ru)("http://play.google.com/store/apps/details?id=com.pinterest.twa",e)}else if("android"===a){let e=h({deeplinkUri:t,invite_code:o,platform:a,unauthId:r,app_upsell_type:u});(0,s.v)()?(0,s.Z)().then(t=>{if(t.length>0){let e=(0,c.ru)(window.location.href,g);null==i||i({component:14347,element:13582,event_type:703,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:u}});let t=window.open(e);t||null==i||i({component:14347,element:13582,event_type:702,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:u}})}else null==i||i({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:u}}),window.location.href=(0,c.ru)(_,e)}).catch(()=>{(0,d.nP)("mweb_android.deeplink.playStore.error",{sampleRate:1})}):(null==i||i({component:14347,element:13582,event_type:14538,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:u}}),window.location.href=(0,c.ru)(_,e))}else{if((0,d.nP)("mweb.deeplink.appsflyer_link",{sampleRate:1}),"ios"===a&&"undefined"!=typeof window&&window.location.href.includes("show_yip_modal")){window.location.href=(0,c.ru)("https://pinterest.com/pinterest-predicts",g);return}null==i||i({component:14347,element:13582,event_type:14539,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:u}}),window.location.href=(0,c.ru)("https://pinterest.onelink.me/TVSr/21e04bfd",g)}}};var b=n(785893);function x({children:e,invite_code:t}){let{isAuthenticated:n,isBot:l,unauthId:s,userAgent:{platform:c,raw:d}}=(0,a.B)(),{logContextEvent:_}=(0,o.v)(),{checkExperiment:p}=(0,i.F)(),u=async(e,o,i)=>{_({component:14347,element:13582,event_type:700,view_type:20,view_parameter:3844,aux_data:{app_upsell_type:o}}),w({isAuthenticated:n,checkExperiment:p,deeplinkUri:e,fallbackUrl:i,invite_code:t,logContextEvent:_,platform:c,redirectToLite:(0,r.Rp)({isBot:l,platform:c,userAgent:d}),unauthId:s,userAgent:d,app_upsell_type:o})};return e(u)}let v=e=>(0,b.jsx)(l.ty,{children:t=>(0,b.jsx)(x,{...e,invite_code:t})});v.displayName="DeepLinkNavigator";let y=v},63552:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(883119),i=n(785893);function a({children:e,onMouseEnter:t,onMouseLeave:n,onTouch:a,rounding:l,fullWidth:r=!1,pressState:s="none",accessibilityLabel:c,role:d}){let _=(Array.isArray(s)?s:[s]).includes("compress");return(0,i.jsx)(o.iP,{accessibilityLabel:c,fullWidth:r,onMouseEnter:t&&(({event:e})=>t(e)),onMouseLeave:n&&(({event:e})=>n(e)),onTap:a&&(({event:e})=>a(e)),role:d,rounding:l,tapStyle:_?"compress":"none",children:e})}},598615:(e,t,n)=>{n.d(t,{B:()=>m,Z:()=>h});var o=n(667294),i=n(616550),a=n(407043),l=n(385740),r=n(53987),s=n(780280),c=n(867820),d=n(52022),_=n(938917),p=n(329900),u=n(67347),g=n(785893);let m=(e,t)=>"/"===e.pathname?"/":(0,r.am)(e)&&t?`board/${e.pathname.substr(1)}`:e.pathname.substr(1);function h({children:e,componentType:t,app_upsell_type:n}){let r=(0,i.TH)(),{flushContextEvents:h,logContextEvent:f}=(0,a.v)(),{viewType:w,viewParameter:b}=(0,l.SU)(),x=(0,d.Z)(),{userAgent:{platform:v}}=(0,s.B)();(0,o.useEffect)(()=>{x({action:"view",item:"download-button",within:n})},[r,n,x]);let y=(0,o.useRef)(!1);(0,o.useEffect)(()=>{w&&202!==w?(f({component:t||13106,element:10308,event_type:9976,view_type:w,view_parameter:b,aux_data:{app_upsell_type:n,app_upsell_is_dupe:y.current}}),y.current=!0):(0,u.nP)("webapp.track_app_upsell_viewed_invalid_parameters",{sampleRate:1,tags:{component:t,view_type:w,view_parameter:b,app_upsell_type:n,app_upsell_is_dupe:y.current}})},[t,f,b,w,n]);let k=(0,_.Z)();return(0,o.useEffect)(()=>{k||(0,c.My)(`mweb.app_upsell.forbidden_upsell.${n}`)},[k,n]),(0,g.jsx)(p.Z,{children:o=>e({handleOpenApp:e=>{if(x({action:"click",item:"download-button",within:n}),(0,c.NC)("press_open_app",!0),f({component:t||13106,element:10308,event_type:102,view_type:w||202,view_parameter:b,aux_data:{app_upsell_type:n}}),f({component:t||13106,element:10308,event_type:9977,view_type:w||202,view_parameter:b,aux_data:{app_upsell_type:n}}),h(!0),o){var i;f({component:t||13106,element:10308,event_type:1701,view_type:w||202,view_parameter:b,aux_data:{app_upsell_type:n}}),o(null!==(i=null==e?void 0:e.deepLinkUri)&&void 0!==i?i:m(r,"android"===v),n)}}})})}},938917:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(702664);let i=()=>(0,o.useSelector)(({session:{canUseNativeApp:e}})=>e)},948376:(e,t,n)=>{n.d(t,{G3:()=>d,Rp:()=>c,kp:()=>r});var o=n(202139),i=n(844974),a=n(339363);let l=14*o.F4,r=(e,t)=>{let n=function(){let e=Date.now(),t=Number((0,i.qn)("appUpsell")),n=Number((0,i.qn)("firstUpsellTime")),o=!!(0,a.qn)("showedAppUpsellCurrentSession");return{currentTime:e,firstUpsellTime:n,lastUpsellTime:t,showedAppUpsellCurrentSession:o}}();return e?function(e,t,n){let{currentTime:o,firstUpsellTime:a,lastUpsellTime:r,showedAppUpsellCurrentSession:s}=e;return(n=n||l,!a||o<a+t)?!s:o-r>n&&((0,i.L_)("firstUpsellTime"),!0)}(n,o.F4):function(e,t){let{currentTime:n,lastUpsellTime:o}=e;return t=t||l,!o||n-o>t}(n,t)},s=e=>{e=e.toLowerCase();let t=e.match(/android\s([0-9\.]*)/i);return t?t[1]:void 0},c=({isBot:e,platform:t,userAgent:n})=>{try{return!e&&"android"===t&&7>parseFloat(s(n))}catch(e){return!1}},d=e=>(e.startsWith("zh")||e.startsWith("ar")?e:e.slice(0,2)).toUpperCase()},473138:(e,t,n)=>{n.d(t,{Z:()=>w,u:()=>h});var o=n(667294),i=n(616550),a=n(883119),l=n(56641),r=n(400964),s=n(499128),c=n(898781),d=n(844974),_=n(867820),p=n(343341),u=n(529195),g=n(275926),m=n(785893);let h="web_siwa_redirect_path",f="id_token=";function w(){let e=(0,c.ZP)(),t=(0,i.TH)(),n=(0,g.f)(),w=(0,i.k6)(),{showToast:b}=(0,p.F9)(),[x,v]=(0,o.useState)(!1),y=t.hash.indexOf(f),k=y>=0?t.hash.substring(y+f.length):null,C=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let o=async o=>{(0,_.My)("in_app_oauth.login.siwa.returned_with_token"),v(!0),n({apple_token:o},w,t.pathname,{noImmediateRedirect:!0},{event_type:7534,view_type:10}).then(()=>{v(!1),(0,_.My)("in_app_oauth.login.siwa.login_success");let e=(0,d.qn)(h);(0,d.L_)(h),(0,l.Z)(e||"/")}).catch(()=>{v(!1),(0,_.My)("in_app_oauth.login.siwa.login_failure"),b(({hideToast:t})=>(0,m.jsx)(s.ZP,{onHide:t,text:e.bt("Opa! Você não tem uma conta conectada à Apple. Tente outro método.", "Oops! You do not have an account connected with Apple. Please try another method.", "mweb.unauth.oauth_apple_login.login_failure_toast", undefined, true),type:"error"}))})};C.current!==k&&k&&o(k),C.current=k},[w,e,k,t,n,b]),x?(0,m.jsx)(a.$j,{accessibilityLabel:e.bt("Carregando...", "Loading...", "Loading", undefined, true),show:!0}):(0,m.jsx)(a.iP,{onTap:()=>{var e;(0,_.My)("in_app_oauth.login.siwa_button.tapped");let n=(null===(e=t.state)||void 0===e?void 0:e.next)||(0,u.Yy)(t),o=n?decodeURIComponent(n):null;(0,d.Nh)(h,o),(0,l.Z)(`https://appleid.apple.com/auth/authorize?client_id=com.pinterest.signinwithapple&redirect_uri=${encodeURIComponent(window.location.origin.toString()+"/oauth/login")}&response_type=${encodeURIComponent("code id_token")}&response_mode=fragment`)},children:(0,m.jsxs)(a.xu,{alignItems:"center",color:"dark",display:"flex",height:40,paddingX:2,paddingY:1,rounding:"pill",width:"100%",children:[(0,m.jsx)(a.xu,{marginStart:-3,marginTop:-2,children:r.Z}),(0,m.jsx)(a.xu,{marginEnd:"auto",marginStart:"auto",children:(0,m.jsx)(a.xv,{color:"light",weight:"bold",children:e.bt("Continuar com a Apple", "Continue with Apple", "mweb.unauth.oauth_apple_login.login_button", undefined, true)})})]})})}},368095:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(667294),i=n(883119),a=n(121151),l=n(898781),r=n(867820),s=n(785893);function c({onDismiss:e}){let t=(0,l.ZP)();(0,o.useEffect)(()=>{(0,r.My)("unauth_mweb.login_rate_limited.view")},[]);let n=t.bt("Opa! Ocorreram muitas tentativas de login.", "Oops! Too many login attempts", "LoginRateLimitedModal.Modal.Heading", undefined, true);return(0,s.jsxs)(a.ZP,{accessibilityModalLabel:n,heading:(0,s.jsxs)(i.xu,{"data-test-id":"login-rate-limited-header",children:[(0,s.jsx)(i.xu,{display:"flex",justifyContent:"center",padding:6,children:(0,s.jsx)(i.JO,{accessibilityLabel:t.bt("Logotipo do Pinterest", "Pinterest logo", "Accessibility label for Pinterest icon", undefined, true),color:"brandPrimary",icon:"pinterest",size:40})}),(0,s.jsx)(i.X6,{accessibilityLevel:1,align:"center",size:"500",children:n})]}),onDismiss:e,children:[(0,s.jsx)(i.xu,{"data-test-id":"login-rate-limited-text",marginBottom:8,marginTop:4,paddingX:12,children:(0,s.jsx)(i.xv,{align:"center",children:t.bt("Você atingiu o número máximo de tentativas de login. Tente novamente em 30 minutos.", "You have reached the maximum number of login attempts. Try again in 30 minutes.", "LoginRateLimitedModal.Modal.Heading", undefined, true)})}),(0,s.jsx)(i.xu,{"data-test-id":"login-rate-limited-footer",marginBottom:8,paddingX:12,children:(0,s.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:e,text:t.bt("OK", "Okay", "LoginRateLimitedModal.Modal.OkButton", undefined, true)})})]})}},172351:(e,t,n)=>{n.d(t,{Z:()=>G});var o=n(667294),i=n(702664),a=n(616550),l=n(883119),r=n(464232),s=n(204324),c=n(112690),d=n(989392),_=n(499128),p=n(898781),u=n(584595),g=n(432300),m=n(45169),h=n(830269),f=n(773285),w=n(780280),b=n(957161),x=n(867820),v=n(52022),y=n(101331),k=n(343341),C=n(50286),A=n(19121),P=n(962482),j=n(63552),L=n(473138),z=n(467570),Z=n(107287),E=n(785893);function S({onFacebookConnectError:e,onFacebookConnectSuccess:t,onTouch:n,isRerequest:i}){let a=(0,p.ZP)(),{checkExperiment:r}=(0,f.F)(),{locale:s}=(0,w.B)(),{anyEnabled:c}=r("mweb_facebook_disabled"),[d,_]=(0,o.useState)(!1),[u,g]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{c||((0,z.we)(s).then(()=>{_(!0)}),(0,x.My)("pcons.facebook_connect_button_renderd"))},[s,c]),(0,E.jsxs)(l.xu,{"data-test-id":"FacebookConnectContainer",position:"relative",children:[(0,E.jsx)(l.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},left:!0,position:"absolute",right:!0,rounding:5,top:!0,children:(0,E.jsx)("div",{className:"fb-login-button","data-auth-type":i?"rerequest":void 0,"data-auto-logout-link":"false","data-button-type":"continue_with","data-layout":"rounded","data-max-rows":"1","data-scope":(0,z._V)().join(","),"data-show-faces":"false","data-size":"large","data-use-continue-as":r("mweb_unauth_remove_fb_autologin_and_personalization").anyEnabled?void 0:"true","data-width":"100%"})}),(0,E.jsxs)("button",{"data-test-id":"FacebookConnectButton",onClick:()=>{(0,x.My)("unauth_mweb.facebook_connect.button_click"),(0,x.EX)({event:"start",provider:"facebook"}),null==n||n(),c?g(!0):d&&(0,z.JF)().then(({creds:e,signupOptions:n})=>{t(e,n)},e)},style:{display:"flex",alignItems:"center",backgroundColor:"#1877F2",border:"none",height:"40px",transition:"opacity .2s linear",width:"100%",minWidth:"240px",borderRadius:"20px",padding:"0px 0px 0px 8px"},type:"button",children:[(0,E.jsx)(l.xu,{color:"default",dangerouslySetInlineStyle:{__style:{paddingTop:"5px",paddingLeft:"3px",paddingRight:"2px",marginLeft:"4px",marginRight:"4.4px"}},rounding:3,children:(0,E.jsx)(l.JO,{accessibilityLabel:a.bt("Facebook", "facebook", "accessible label for facebook icon", undefined, true),color:"shopping",icon:"facebook",inline:!0,size:19})}),(0,E.jsx)(l.xu,{alignItems:"center",display:"flex",flex:"grow",justifyContent:"center",marginEnd:1,children:(0,E.jsx)("span",{style:{fontFamily:"Helvetica, Arial, sans-serif",fontWeight:"bold",color:"#fff",fontSize:"16px",paddingRight:"8px",letterSpacing:"0.25px"},children:a.bt("Entrar com Facebook", "Continue with Facebook", "Login page button", undefined, true)})})]}),u&&(0,E.jsx)(Z.Z,{onDismiss:()=>g(!1),type:"facebook"})]})}var M=n(553171);let T={defaultButton:{display:"flex",alignItems:"center",backgroundColor:"#00C300",border:"none",height:"40px",transition:"opacity .2s linear",width:"100%",borderRadius:"20px",padding:"0px 0px 0px 8px"},lineLogo:{borderRadius:"12px",backgroundColor:"#00C300",width:"32px",height:"32px"},buttonText:{fontWeight:"bold",color:"#fff",fontSize:"16px",paddingRight:"33px"}},R=({buttonText:e,onLineConnectSuccess:t,onLineConnectError:n,onTouch:o})=>{let i=(0,p.ZP)(),{locale:a}=(0,w.B)(),r={success:e=>{let{line_id_token:n,line_access_token:o}=e;n&&o&&t({line_id_token:n,line_access_token:o},{line_id_token:n,line_access_token:o,type:"line"})},error:n},s=T.defaultButton;return(0,E.jsx)(l.xu,{"data-test-id":"LineConnectContainer",position:"relative",children:(0,E.jsxs)("button",{"data-test-id":"line-connect-button",onClick:()=>{(0,x.My)("unauth_mweb.line_connect.button_click"),o&&o(),(0,M.Z)(a,r)},style:s,type:"button",children:[(0,E.jsx)("img",{alt:i.bt("line", "line", "accessible label for line icon", undefined, true),src:"https://s.pinimg.com/webapp/btn_base-a34b3f23.png",style:T.lineLogo}),(0,E.jsx)(l.kC,{alignItems:"center",flex:"grow",justifyContent:"center",children:(0,E.jsx)("span",{style:T.buttonText,children:e})})]})})};var F=n(368095),O=n(160561),B=n(155949),U=n(275926),I=n(122485),N=n(639952),D=n(53987),$=n(598615);function W({app_upsell_type:e}){let t=(0,p.ZP)(),n=(0,a.TH)(),{userAgent:{platform:o}}=(0,w.B)(),{pathname:i}=n;return(0,E.jsx)(l.xu,{"data-test-id":"continue-app-button",marginBottom:2,children:(0,E.jsx)($.Z,{app_upsell_type:null!=e?e:"unauth-signup-modal",componentType:13858,children:({handleOpenApp:a})=>(0,E.jsx)(l.zx,{color:"red",fullWidth:!0,onClick:()=>{(0,x.My)("homepage_top_module"===e?"mweb.unauth.homepage.top.download_app_button.click":"homepage_bottom_module"===e?"mweb.unauth.homepage.bottom.download_app_button.click":"mweb.unauth.signup_modal.download_app_button.click"),i&&a({deepLinkUri:"/"===i?"/":(0,D.cD)(n)&&("ios"===o||"ipad"===o)?"user"+i:i.substr(1)})},text:t.bt("Baixar o aplicativo do Pinterest", "Get Pinterest App", "unauth.modal.get_app.button_text", undefined, true)})})})}var H=n(562647),X=n(597897);function G({apple:e,facebook:t,fbConnectHandler:n,footer:z,from:Z,google:M,isBusiness:T,isRerequest:D,line:$,next:G="/",noImmediateRedirect:q,disableFBSignup:K,onFacebookTouch:J,onLoginTouch:Y,onSignupTouch:V,showAppInstallButton:Q,showEmailButton:ee,showTextDivider:et,viewParameter:en,app_upsell_type:eo,attributionLabel:ei}){let ea=(0,a.k6)(),el=(0,a.TH)(),{country:er}=(0,w.B)(),es=(0,p.ZP)(),{showToast:ec}=(0,k.F9)(),ed=(0,c.Z)(),e_=(0,v.Z)(),ep=(0,i.useDispatch)(),eu=(0,U.f)(),eg=(0,X.U)(),{flush:em}=(0,f.F)(),eh=(0,I.m)(),ef=(0,s.Z)(),{isAuth:ew,isLimitedLogin:eb}=(0,A.Z)(),ex=(0,C.ml)(),{checkExperiment:ev}=(0,f.F)(),[ey,ek]=(0,o.useState)(null),[eC,eA]=(0,o.useState)(!1),[eP,ej]=(0,o.useState)("default"),{trackConversionUpsell:eL}=(0,y.Z)(),ez=(0,w.B)(),eZ=!!b.Z.getItem(r.V6)&&(ez.experimentsClient.checkExperiment("pcons_mweb_last_logged_in").anyEnabled||ez.experimentsClient.checkExperiment("pcons_last_logged_in").anyEnabled),eE="facebook"===eP&&5e3||"google"===eP&&4e3||void 0;(0,o.useEffect)(()=>{if(eg){var e,t;z&&(null===(e=eg.preload)||void 0===e||e.call(eg,(0,H.ke)("login.js"))),ee&&(null===(t=eg.preload)||void 0===t||t.call(eg,(0,H.ke)("signup.js")))}},[]);let eS=ew?{login_state:eb?g.Z.LIMITED:g.Z.DEFAULT}:Object.freeze({}),eM=e=>{ed({view_type:10,view_parameter:en,element:e,event_type:102,aux_data:eS})},eT=e=>{eL({viewType:10,viewParameter:en,eventType:14689,element:e})},eR=(e,t)=>{let n,o;switch(t){case"facebook":n=3205,o=h.Z.FACEBOOK;break;case"google":n=3204,o=h.Z.GPLUS;break;case"line":n=3556,o=h.Z.LINE}return{event_type:e,view_type:10,view_parameter:n,element:o===h.Z.GPLUS?12981:void 0,aux_data:{...eS,signup_login_method:o,upsell_reason:ei}}},eF=(e,t,n,o)=>{ek(null);let i=()=>ec(({hideToast:e})=>(0,E.jsx)(_.ZP,{onHide:e,text:t&&t.api_error_code&&t.message?t.message:es.bt("Desculpe, não é possível fazer o seu login.", "Sorry, we can't log you in.", "Error message when user having trouble login in.", undefined, true)}));if(t){if((0,x.My)(`unauth_mweb.login_error.api_error_code.${String(t.api_error_code)}`),[u.xN,u.lg,u.Pv].includes(t.api_error_code)){if("facebook"===n.type&&ev("mweb_unauth_remove_fb_signup_iteration").anyEnabled){null==K||K();return}(0,x.Rp)({event:"start",provider:o}),"facebook"!==n.type||n.email?(()=>{(0,x.My)("unauth_mweb.facebook_signup_attempt"),n.gender||(0,x.My)("unauth_mweb.facebook_signup_attempt.nogender");let{birthday:e}=n;if(void 0===e||!(0,d.Z)(e)){em(),ea.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:"facebook"===n.type?{...n,email_source_site:m.E_.FACEBOOK}:n,progressBarAnimationDuration:eE},attributionLabel:ei});return}ek("signup"),ej(o);let t="facebook"===n.type?{...n,email_source_site:m.E_.FACEBOOK,birthday_source_site:m.E_.FACEBOOK,birthday:e}:{...n,birthday:e};(0,x.Rp)({event:"signup_api_call_start",provider:o}),eh(t,{signupAttemptContextEvent:eR(7537,o)}).then(()=>{(0,x.NC)("signup_via_login_buttons"),(0,x.Rp)({event:"signup_api_call_success",provider:o}),["facebook","google"].includes(o)&&ef(G||"/"),ek(null)},e=>{(0,x.Rp)({event:"signup_api_call_failure",provider:o}),"line"===n.type&&(e.api_error_code===u.iZ?ea.push({pathname:"/signup/line-email-collect/",state:{signupOptions:n},attributionLabel:ei}):e.api_error_code===u.NF&&ea.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:n},attributionLabel:ei})),ec(({hideToast:t})=>(0,E.jsx)(_.ZP,{onHide:t,text:e.api_error_code&&e.message?e.message:es.bt("Desculpe! Algo saiu errado com nosso sistema.", "Sorry! Something went wrong on our end.", "Error logging on", undefined, true)})),ek(null)})})():(ea.push({pathname:"/signup/fbemailcollect/",state:{signupOptions:n},attributionLabel:ei}),(0,x.My)("unauth_mweb.reg_via_fb.has_email_perm.false"))}else u.ik.includes(t.api_error_code)&&eA(!0);i()}else(0,x.My)("unauth_mweb.login.unexpected_error"),i()},eO=e=>(t,o)=>{var i;let a="google"===e?"gsi_btn":"other",l=(null===(i=el.state)||void 0===i?void 0:i.switch_account)==="true"?{isSwitchAccount:!0,trigger:a}:{noImmediateRedirect:q,trigger:a};"facebook"===e&&(null==n||n("success"),(0,x.EX)({event:"receive_credential_response_from_provider",provider:e})),(0,x.NC)(e+"_login_success"),eu(t,ea,G,l,eR(7534,e)).catch(n=>{eF(t,n,o,e)}),ek("login"),ej(e)},eB=({event:e})=>{e.stopPropagation(),e.preventDefault(),null==Y||Y(),Z&&ep((0,N.rm)(Z)),e_({action:"click",item:"login-button"}),eM(30),(0,x.My)(`unauth_mweb.login_buttons.footer.${(null==z?void 0:z.type)||"button"}`),(0,x.NC)("press_login"),eL({eventType:14689,element:30,viewType:10,viewParameter:en}),eL({eventType:14688,component:14213,upsellReason:ei,incrementUpsellReasonCounter:!1}),ea.push({pathname:T?"/business/login/":"/login/",search:el.search,state:{next:G,attributionLabel:ei}})};return(0,E.jsxs)(l.xu,{"data-test-id":"LoginButtonsContainer",marginEnd:"auto",marginStart:"auto",marginTop:T?-5:0,maxWidth:400,children:[eC&&(0,E.jsx)(F.Z,{onDismiss:()=>eA(!1)}),et&&(0,E.jsx)(l.xu,{marginBottom:3,marginTop:3,children:(0,E.jsx)(l.xv,{align:"center",size:"100",weight:"bold",children:es.bt("OU", "OR", "Separator for email login button and social login button", undefined, true)})}),(0,E.jsx)(l.xu,{marginBottom:eZ?0:6,children:(0,E.jsxs)(o.Fragment,{children:[Q&&(0,E.jsx)(W,{app_upsell_type:eo}),ee&&(0,E.jsx)(l.xu,{"data-test-id":"continue-email-button",marginBottom:T?-2:2,children:(0,E.jsx)(l.zx,{color:Q?"gray":"red",fullWidth:!0,onClick:({event:e})=>{e&&(e.stopPropagation(),e.preventDefault()),(0,x.NC)("press_email_signup"),(0,x.Rp)({event:"start",provider:"email"}),e_({action:"click",item:"email-signup-button"}),null==V||V(),Z&&ep((0,N.rm)(Z)),eT(13506),eM(31),eL({eventType:14688,component:14215,upsellReason:ei,incrementUpsellReasonCounter:!1}),ea.push({pathname:T?"/business/signup/step1/":"/signup/step1/",search:el.search,state:{next:G,attributionLabel:ei}})},text:T?es.bt("Criar conta", "Create account", "Button text for creating a business account", undefined, true):es.bt("Continuar com o email", "Continue with email", "Sign up button", undefined, true)})}),t&&(0,E.jsx)(l.xu,{"data-test-id":"facebook-connect-button",marginBottom:eZ?1:2,children:(0,E.jsx)(S,{isRerequest:D,onFacebookConnectError:()=>{null==n||n("error"),(0,x.EX)({event:"receive_no_credential_response_from_provider",provider:"facebook"}),ec(({hideToast:e})=>(0,E.jsx)(_.ZP,{onHide:e,text:es.bt("Não foi possível conectar ao Facebook", "Unable to connect to Facebook", "Error logging on with Facebook", undefined, true)}))},onFacebookConnectSuccess:eO("facebook"),onTouch:()=>{null==J||J(),eT(13505),e_({action:"click",item:"facebook-connect-button"}),eM(68)}})}),M&&(0,E.jsx)(l.xu,{"data-test-id":"google-connect-button",marginBottom:eZ?0:2,children:(0,E.jsx)(O.Z,{onGoogleConnectSuccess:eO("google"),onTouch:()=>{eT(13504)}})}),$&&"JP"===er&&(0,E.jsx)(l.xu,{"data-test-id":"line-connect-button",marginBottom:2,children:(0,E.jsx)(R,{buttonText:es.bt("Continuar com o LINE", "Continue with LINE", "Login page button", undefined, true),onLineConnectError:()=>{ec(({hideToast:e})=>(0,E.jsx)(_.ZP,{onHide:e,text:es.bt("Não foi possível se conectar ao Line", "Unable to connect to Line", "Error logging on with Line", undefined, true)}))},onLineConnectSuccess:eO("line"),onTouch:()=>{eT(13507),eM(12277),e_({action:"click",item:"line-connect-button"})}})}),e&&(0,E.jsx)(l.xu,{"data-test-id":"apple-connect-button",marginBottom:2,children:(0,E.jsx)(L.Z,{})})]})}),z&&("member_link"===z.type?(0,E.jsx)(l.xu,{"data-test-id":"login-member",marginTop:-4,children:(0,E.jsx)(j.Z,{onTouch:e=>eB({event:e}),pressState:"none",children:(0,E.jsx)(l.xu,{marginBottom:z.increasedSpaceBelow?-1:-2,paddingY:z.noPadding?0:4,children:(0,E.jsx)(l.xv,{align:"center",color:z.textColorIsLight?"light":"dark",size:"200",weight:"bold",children:ex&&ev("pcons_mweb_sign_in_copy").anyEnabled?es.bt("Já tem uma conta? Entrar", "Already a member? Sign in", "unauth.sign_in.text.home_page", undefined, true):es.bt("Já tem uma conta? Entrar", "Already a member? Log in", "Link on mobile web sign up modal to direct unauth users to the login page", undefined, true)})})})}):(0,E.jsx)(l.xu,{"data-test-id":"login-button",marginBottom:5,children:(0,E.jsx)(l.zx,{color:"transparent",fullWidth:!0,onClick:eB,text:es.bt("Entrar", "Log in", "Login page button", undefined, true)})})),ey&&("signup"===ey?(0,E.jsx)(B.Z,{progressBarAnimationDuration:eE}):(0,E.jsx)(P.Z,{}))]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/71526.pt_BR-5c650329c6b0d246.mjs.map