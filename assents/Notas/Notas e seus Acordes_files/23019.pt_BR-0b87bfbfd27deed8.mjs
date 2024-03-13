"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[23019],{758127:(e,i,l)=>{l.d(i,{U:()=>r,Z:()=>a});var t=l(883119),o=l(785893);let r=", ";function a(){return(0,o.jsx)(t.xu,{display:"visuallyHidden",children:r})}},80811:(e,i,l)=>{l.d(i,{Z:()=>j});var t=l(667294),o=l(616550),r=l(883119),a=l(112690),n=l(298361),s=l(898781),d=l(892819),c=l(349700),u=l(780280),_=l(867820),h=l(758127),x=l(948618),g=l(50286),m=l(19121),v=l(526760),p=l(722556),b=l(815613),f=l(861411),y=l(785893);let w=({isOneLineMetadataExp:e,children:i})=>{let l=(0,m.Z)(),t=(0,g.HG)(),o=l&&l.isAuth;return t&&(e||o)?(0,y.jsx)(r.X6,{accessibilityLevel:2,lineClamp:1,size:"400",children:i}):(0,y.jsx)(r.xv,{lineClamp:1,weight:"bold",children:i})};function j({archivedDate:e,boardUrl:i,canEdit:l,collaborators:m,collaboratorsCount:j=0,containerBackgroundColor:z,coverPhoto:C,followedByMe:P,fullSizeDrawer:A,sensitivityScreen:S,handleInviteResponse:B,hideMeta:Z,id:I,invite:E,imagesLego:k=[],isBoardInviteAccepted:T,isActive:F,isAuthenticated:D,isCollaborative:L,isCollaborator:U,isOneLineMetadataExp:H=!1,isOwner:W,isProtected:G,isSecret:M,isSectionCountVisibleExp:O=!1,isTemporarilyDisabled:q,lastModifiedDate:R,layout:X,locale:$,name:N,numCols:J,onEditClick:K,onFollow:Y,onUnfollow:V,owner:Q,pinCount:ee=0,sectionCount:ei,showFollowButton:el,viewParameter:et,viewType:eo,viewerId:er,slotIndex:ea}){let en=(0,s.ZP)(),es=(0,n.Z)(),ed=(0,d.Z)(),{pathname:ec}=(0,o.TH)(),eu=(0,a.Z)(),e_=(0,g.HG)(),{isRTL:eh}=(0,u.B)(),ex=e_&&D,eg="square"===X?v.M0:v.z9,em=!/\/search\/boards\//.test(ec),ev=e=>{D||(0,_.NC)("press_follow_board"),Y&&Y(e)},ep=e=>{D||(0,_.NC)("press_unfollow_board"),V&&V(e)},eb=k.map(e=>({url:e.url,name:N})),ef=!!Q&&!l&&el,ey=!W&&!U&&!!(null!=S&&S.show_warning),ew={board_id:I,reason:null==S?void 0:S.reason};(0,t.useEffect)(()=>{ey&&eu({event_type:13,component:13861,view_type:215,aux_data:ew})},[]);let ej=Q?Q.id:void 0,ez=[...m.filter(({id:e})=>e===ej),...m.filter(({id:e})=>e===er&&e!==ej),...m.filter(({id:e})=>![ej,er].includes(e))].map(e=>{var i,l;return{name:null!==(i=ex?e.full_name:e.username)&&void 0!==i?i:"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":null!==(l=e.image_medium_url)&&void 0!==l?l:""}}),eC=j>=ez.length?j-ez.length:0;eC=eC>99?100:eC;let eP=[...ez,...Array(eC).fill({name:"",src:""})],eA=ex?24:16,eS=eA/3*((ez.length>2?3:ez.length)*2+1),{cardWithFollowCalculated:eB}=(0,t.useMemo)(()=>{let i=0;return H||(!e&&em&&(i+=1),ei&&(i+=1),!e||e_||(i+=1)),{cardWithFollowCalculated:210+14*i}},[e,e_,H,em,ei]);return(0,y.jsx)(f.fS,{auxData:{board_pin_count:null!=ee?ee:0,board_id:I},component:13669,impressionData:{imageURL:null==C?void 0:C.url},loggingId:I,slotIndex:ea||0,viewParameter:et,viewType:eo,children:({impressionTrackerRef:o})=>(0,y.jsxs)(r.xu,{ref:o,"data-test-id":`boardCard-${N}`,height:ef?`max(calc(25vh + 10px), ${eB}px)`:"100%",position:"relative",width:ex?eg:"100%",children:[(0,y.jsx)(p.Z,{canEdit:l,containerBackgroundColor:z,coverPhoto:C,fullSize:A,images:eb,isActive:F,isProtected:G,isSecret:M,isTemporarilyDisabled:q,layout:X,onEditClick:K,showSensitivityScreen:ey}),!Z&&(0,y.jsx)(t.Fragment,{children:E&&!q?(0,y.jsxs)(t.Fragment,{children:[(0,y.jsxs)(r.xu,{alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",padding:2,children:[(0,y.jsxs)(r.xu,{width:"100%",children:[(0,y.jsx)(r.rU,{href:null!=i?i:"",children:(0,y.jsx)(r.xu,{marginBottom:1,marginTop:0,children:(0,y.jsx)(w,{isOneLineMetadataExp:H,children:N})})}),T?(0,y.jsx)(r.xv,{lineClamp:1,size:"200",children:en.bt("Você aceitou o convite", "You’ve joined", "boardRep.invite.invitationAcceptedText", undefined, true)}):(0,y.jsx)(r.xv,{size:"200",children:function(e,i){let{full_name:l,username:t}=e,o=(0,y.jsx)(r.rU,{display:"inlineBlock",href:`/${t}`,underline:"hover",children:l},"linkToUser");return(0,c.nk)(i.bt("{{ linkToUser }} convidou você para participar dessa pasta", "{{ linkToUser }} invited you to join this board", "boardRep.invite.invitationText", undefined, true),{linkToUser:o})}(E.invited_by_user,en)})]}),(0,y.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},height:eA,marginStart:2,minWidth:eS,width:eS,children:(0,y.jsx)(r.HE,{accessibilityLabel:h.U+(en.bt("A pasta tem colaboradores", "Board has collaborators", "BoardCard.AvatarGroup.Collaborators", undefined, true)),collaborators:eP})})]}),T?(0,y.jsx)(r.xu,{direction:"row",display:"flex",paddingX:2,children:(0,y.jsx)(r.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,y.jsx)(r.ZP,{fullWidth:!0,href:null!=i?i:"",size:"lg",text:en.bt("Ver pasta", "See board", "boardRep.invite.seeBoardButton", undefined, true)})})}):(0,y.jsxs)(r.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,y.jsx)(r.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,y.jsx)(r.zx,{fullWidth:!0,onClick:()=>{null==B||B(!1)},size:"lg",text:en.bt("Recusar", "Decline", "boardRep.invite.declineButton", undefined, true)})}),(0,y.jsx)(r.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,y.jsx)(r.zx,{color:"red",fullWidth:!0,onClick:()=>{null==B||B(!0)},size:"lg",text:en.bt("Aceitar", "Accept", "boardRep.invite.acceptButton", undefined, true)})})]})]}):(0,y.jsxs)(r.xu,{height:ex?void 0:v.s0,marginTop:ex?0:1,paddingX:2,paddingY:ex?2:0,children:[(0,y.jsxs)(r.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,y.jsx)(w,{isOneLineMetadataExp:H,children:N}),L&&!q&&(0,y.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},height:eA,marginStart:2,minWidth:eS,width:eS,children:(0,y.jsx)(r.HE,{accessibilityLabel:h.U+(en.bt("A pasta tem colaboradores", "Board has collaborators", "BoardCard.AvatarGroup.Collaborators", undefined, true)),collaborators:eP})})]}),(0,y.jsxs)(r.xu,{alignItems:e_?"center":"start",direction:e_||H?"row":"column",display:"flex",marginTop:1,children:[(0,y.jsxs)(r.xv,{lineClamp:1,size:"100",children:[(0,y.jsx)(h.Z,{}),(0,c.nk)(en.nbt(["{{ count }} Pin", "{{ count }} Pins"], ee, "profile.ProfilePage.board.BoardCard.pinsCount", true),{count:ed($,ee,H?{shortform:!0,shortform_maximum_fraction_digits:1}:{})})]}),O&&!!ei&&(0,y.jsxs)(r.xv,{size:"100",children:[e_||H?(0,y.jsx)(x.Z,{ariaHidden:!0,size:"100"}):void 0,(0,y.jsx)(h.Z,{}),(0,c.nk)(en.nbt(["{{ count }} subpasta", "{{ count }} subpastas"], ei, "profile.ProfilePage.board.BoardCard.sectionsCount", true),{count:ei})]}),(H||!e&&em)&&(0,y.jsx)(r.xu,{display:ex?"flex":"inlineBlock",marginEnd:eh?2:0,marginStart:H||e_?2:0,children:(0,y.jsxs)(r.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,y.jsx)(h.Z,{}),es(R,!0)]})}),e&&!e_&&(0,y.jsxs)(r.xv,{color:"subtle",inline:!0,lineClamp:1,size:"100",children:[(0,y.jsx)(h.Z,{}),en.bt("Arquivada", "Archived", "profile.ProfilePage.BoardCard.ArchivedText", undefined, true)]})]}),ef&&(0,y.jsx)(r.xu,{column:2===J?12:void 0,flex:"none",marginTop:2===J?3:void 0,children:(0,y.jsx)(b.Z,{disabled:null==Q?void 0:Q.blocked_by_me,followEventType:26,id:I,isFollowed:P,onFollow:ev,onUnfollow:ep,pinKey:null,shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:et,viewType:eo})})]})})]})})}},223019:(e,i,l)=>{l.d(i,{Z:()=>p});var t=l(702664),o=l(883119),r=l(112690),a=l(773285),n=l(780280),s=l(867820),d=l(52022),c=l(19121),u=l(80811),_=l(340494),h=l(853492),x=l(712055),g=l(130460),m=l(785893);let v=["thumbnail","imageOnly"];function p({boardId:e,containerBackgroundColor:i,forwardedRef:l,fullSize:p,isOneLineMetadataExp:b=!1,isSectionCountVisibleExp:f=!1,showFollowButton:y=!0,showPinCount:w=!0,slotIndex:j,type:z,viewParameter:C,viewType:P}){var A,S,B;let Z=(0,c.Z)(),I=Z&&Z.isAuth,E=(0,t.useDispatch)(),{locale:k}=(0,n.B)(),T=(0,d.Z)(),F=(0,g.gC)()(e),D=(0,_.Z)(),{checkExperiment:L}=(0,a.F)(),U=(0,r.Z)(),H=Z.isAuth?Z.id:"";if(!F)return null;let{owner:W}=F,G=[W,...F.collaborating_users||[]].filter(Boolean).map(({id:e,image_medium_url:i,username:l})=>({id:e,image_medium_url:i,username:l})),M=(null==W?void 0:W.id)===H,O=G.filter(({id:e})=>e===H).length>0;if("secret"===F.privacy&&!O)return null;let q="grid"===z||"thumbnail"===z?2:4,R=D(F,q),X={isCustom:F.has_custom_cover,url:R,position:(0,h.Bw)(F.cover_pin)},$=(0,h.Jx)(F,R).map(({url:e})=>({name:(0,h.po)(e),url:e})),N=!!F.is_temporarily_disabled&&(L("mweb_hide_u16_group_board").anyEnabled||L("unauth_hide_u16_group_board").anyEnabled),J=b||"full"===z,K=(0,m.jsx)(u.Z,{archivedDate:null!==(A=F.archived_by_me_at)&&void 0!==A?A:void 0,canEdit:!!F.access&&F.access.includes("write"),collaborators:G,collaboratorsCount:F.collaborator_count,containerBackgroundColor:i,coverPhoto:R?X:null,followedByMe:F.followed_by_me,fullSizeDrawer:p,hideMeta:v.includes(z),id:F.id,imagesLego:$,isAuthenticated:I,isCollaborative:F.is_collaborative,isCollaborator:O,isOneLineMetadataExp:b,isOwner:M,isProtected:"protected"===F.privacy,isSecret:"secret"===F.privacy,isSectionCountVisibleExp:f,isTemporarilyDisabled:N,lastModifiedDate:J?F.board_order_modified_at:"",locale:k,name:null!==(S=F.name)&&void 0!==S?S:"",numCols:q,onFollow:e=>E((0,x.Z)(e,U)),onUnfollow:e=>E((0,x.f)(e,U)),owner:W,pinCount:w&&F.pin_count?F.pin_count:void 0,sectionCount:null!==(B=F.section_count)&&void 0!==B?B:0,sensitivityScreen:F.sensitivity_screen,showFollowButton:y,slotIndex:j,viewerId:H,viewParameter:C,viewType:P});return!v.includes(z)&&F.url?(0,m.jsx)(o.Tg,{href:F.url,onTap:()=>{I||((0,s.NC)("click_go_to_board"),T({action:"click",item:"board-card"}))},rounding:2,tapStyle:"compress",children:(0,m.jsx)(o.xu,{ref:l,paddingY:3,children:K})}):K}},686844:(e,i,l)=>{l.d(i,{Z:()=>r});var t=l(883119),o=l(785893);function r({customCover:e,height:i,imgUrl:l,imgPos:r,width:a}){let n="center center";if(e&&r){let e=1;e=r.height/r.width>i/a?a/r.width:i/r.height;let l=r.x*e,t=r.y*e;n=`-${l}px -${t}px`}let s={backgroundImage:`url(${l})`,backgroundPosition:n,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:{height:i,width:a}},children:(0,o.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:s},children:(0,o.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}},722556:(e,i,l)=>{l.d(i,{Z:()=>_});var t=l(883119),o=l(898781),r=l(780280),a=l(50286),n=l(526760),s=l(686844),d=l(108211),c=l(785893);let u={square:"100%"};function _(e){var i,l;let _=(0,o.ZP)(),{containerBackgroundColor:h="white",coverPhoto:x,fullSize:g,images:m,isProtected:v,isSecret:p,isTemporarilyDisabled:b,showSensitivityScreen:f,isActive:y,canEdit:w,onEditClick:j,layout:z}=e,C=(0,a.HG)(),{isRTL:P,isAuthenticated:A}=(0,r.B)(),S=C&&A,B=m[0],Z=!x&&(null===(i=m[0])||void 0===i?void 0:i.name)||_.bt("Imagem da capa", "Cover image", "DrawerImageGroup", undefined, true),I=[,,].fill(),E=new t.Ry(1),k="square"===z?n.M0:n.z9,T="square"===z?n.FP:n.FC,F=null!=B&&B.url?(0,c.jsx)(t.Ee,{alt:Z,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:B.url}):(0,c.jsx)(t.xu,{color:"secondary",height:"100%",width:"100%"}),D=b||f?{filter:"blur(20px)"}:{};return(0,c.jsx)(t.zd,{height:g?"100%":void 0,rounding:4,wash:y,width:"100%",children:(0,c.jsxs)(t.xu,{"aria-hidden":!0,direction:"row",display:"flex",height:S?T:"100%",children:[(0,c.jsx)(t.sg,{span:8,children:(0,c.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:D},height:g?"100%":void 0,position:"relative",children:(0,c.jsx)(t.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:u.square}},overflow:"hidden",width:"100%",children:(0,c.jsxs)(t.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},"data-test-id":"drawer-image-group-first-image-container",left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:[(v||p)&&(0,c.jsx)(t.xu,{left:!P,margin:2,position:"absolute",right:P,top:!0,zIndex:E,children:(0,c.jsx)(d.Z,{backgroundColor:"default",iconColor:"default",privacy:p?"secret":"protected",size:S?32:24})}),null!=x&&x.url?(0,c.jsx)(s.Z,{customCover:x.isCustom,height:T,imgPos:x.position||{width:0,height:0,x:0,y:0},imgUrl:null!==(l=x.url)&&void 0!==l?l:"",width:Math.floor(k/3*2)}):F]})})})}),(0,c.jsx)(t.sg,{span:4,children:(0,c.jsxs)(t.xu,{dangerouslySetInlineStyle:{__style:D},height:"100%",children:[w&&y&&(0,c.jsx)(t.xu,{bottom:!0,left:P,margin:2,position:"absolute",right:!P,zIndex:E,children:(0,c.jsx)(t.hU,{accessibilityLabel:_.bt("Editar", "Edit", "DrawerImageGroup.edit", undefined, true),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>null==j?void 0:j(e),size:"sm"})}),I.map((e,i)=>{let l=x?m[i]:m[i+1];return(0,c.jsx)(t.xu,{height:g?"50%":void 0,position:"relative",children:(0,c.jsx)(t.xu,{color:"secondary",dangerouslySetInlineStyle:{__style:{paddingBottom:u.square}},overflow:"hidden",width:"100%",children:(0,c.jsx)(t.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{borderColor:h,borderStyle:"solid",borderWidth:0===i?1:"0 1px 1px 1px"}},left:!0,overflow:"hidden",position:"absolute",right:!0,top:!0,children:null!=l&&l.url?(0,c.jsx)(t.Ee,{alt:l&&l.name||"placeholder",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:l.url}):(0,c.jsx)(t.xu,{color:"secondary",height:"100%",width:"100%"})})})},i)})]})}),(b||f)&&(0,c.jsx)(t.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:b?(0,c.jsx)(t.xu,{maxWidth:188,children:(0,c.jsx)(t.xv,{align:"center",color:"light",size:"200",weight:"bold",children:_.bt("Esta pasta está indisponível no momento", "This board is currently unavailable", "drawerImageGroup.unavailableBoard.heading", undefined, true)})}):(0,c.jsx)(t.X6,{align:"center",color:"light",size:"400",children:_.bt("Esta pasta pode ter conteúdo sensível", "This board may contain sensitive content", "drawerImageGroup.sensitivityScreen.heading", undefined, true)})})]})})}},526760:(e,i,l)=>{l.d(i,{FC:()=>n,FP:()=>r,M0:()=>o,Xq:()=>s,s0:()=>t,z9:()=>a});let t=44,o=236,r=157,a=320,n=213,s=7},108211:(e,i,l)=>{l.d(i,{Z:()=>a});var t=l(883119),o=l(898781),r=l(785893);function a({backgroundColor:e="darkGray",iconColor:i="inverse",iconSize:l,privacy:a,size:n=20}){let s=(0,o.ZP)();return(0,r.jsx)(t.xu,{alignItems:"center",color:e,direction:"column",display:"flex",height:n,justifyContent:"center",rounding:"circle",width:n,children:(0,r.jsx)(t.JO,{accessibilityLabel:s.bt("Ícone de pasta secreta", "Secret board icon", "Icon indicating that a board is secret", undefined, true),color:i,icon:"secret"===a?"lock":"security",size:null!=l?l:n/2})})}},340494:(e,i,l)=>{l.d(i,{Z:()=>r});var t=l(50286),o=l(19121);function r(){let e=(0,t.HG)(),i=(0,o.Z)(),l=i&&i.isAuth;return e&&l?e=>{var i,l;let t=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,o=null!==(i=null===(l=e.cover_pin)||void 0===l?void 0:l.image_url)&&void 0!==i?i:t,r=e.images&&e.images["170x"]&&e.images["170x"].length?e.images["170x"][0].url:"";return o||r}:(e,i)=>{var l,t;let o=e.image_cover_hd_url||e.image_cover_url||"";if(!o)return"";let r=e.cover_images&&e.cover_images["400x300"]?e.cover_images["400x300"].url:void 0,a=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,n=e.cover_images&&e.cover_images["216x146"]?e.cover_images["216x146"].url:void 0,s=null!==(l=null!==(t=null!=r?r:a)&&void 0!==t?t:n)&&void 0!==l?l:"",d=e.image_cover_url||"";return o||(i&&i>2&&s?s:"")||d}}},853492:(e,i,l)=>{l.d(i,{Bw:()=>n,Jx:()=>a,po:()=>t});let t=(e="")=>(null!=e?e:"").substring((null!=e?e:"").lastIndexOf("/")+1),o=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),r=e=>{if(!e)return()=>!0;let i=t(e);return e=>{var l;return"string"==typeof e?t(e)!==i:t(null!==(l=e.url)&&void 0!==l?l:"")!==i}},a=(e,i)=>e.images&&e.images["170x"]?e.images["170x"].filter(r(i)):e.pin_thumbnail_urls?e.pin_thumbnail_urls.filter(r(i)).map(o):[],n=e=>{var i;return null!==(i=e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})&&void 0!==i?i:{x:0,y:0,width:0,height:0}}},712055:(e,i,l)=>{l.d(i,{Z:()=>r,f:()=>a});var t=l(186656),o=l(254176);function r(e,i){return async l=>{l((0,o.md)(e,!0));try{await (0,t.Z)({url:`/v3/boards/${e}/follow/`,method:"PUT"}),i({event_type:26,object_id_str:e})}catch(i){l((0,o.md)(e,!1))}}}function a(e,i){return async l=>{l((0,o.md)(e,!1));try{await (0,t.Z)({url:`/v3/boards/${e}/follow/`,method:"DELETE"}),i({event_type:27,object_id_str:e})}catch(i){l((0,o.md)(e,!0))}}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/23019.pt_BR-0b87bfbfd27deed8.mjs.map