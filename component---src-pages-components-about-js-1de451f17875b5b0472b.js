(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"05u4":function(e,t,a){},xuPq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a("q1tI"),l=a.n(n),i=a("wx14"),o=a("ODXe"),c=a("Ff2n"),r=a("iuhU"),s=a("tr08"),u=a("H2TA");var m=a("G7As"),v=a("bfFb"),d=a("NqtD"),f=a("5AJ6"),p=Object(f.a)(n.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");function b(e,t){if(null==e)return e;var a,n=Math.round(e/t)*t;return Number(n.toFixed((a=t.toString().split(".")[1])?a.length:0))}function h(e){e.value;var t=Object(c.a)(e,["value"]);return n.createElement("span",t)}var E=n.createElement(p,{fontSize:"inherit"});function y(e){return"".concat(e," Star").concat(1!==e?"s":"")}var g=n.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.defaultValue,f=void 0===u?null:u,p=e.disabled,g=void 0!==p&&p,k=e.emptyIcon,N=e.emptyLabelText,O=void 0===N?"Empty":N,x=e.getLabelText,S=void 0===x?y:x,M=e.icon,j=void 0===M?E:M,A=e.IconContainerComponent,C=void 0===A?h:A,F=e.max,L=void 0===F?5:F,w=e.name,R=e.onChange,T=e.onChangeActive,z=e.onMouseLeave,I=e.onMouseMove,V=e.precision,B=void 0===V?1:V,H=e.readOnly,J=void 0!==H&&H,X=e.size,G=void 0===X?"medium":X,q=e.value,D=Object(c.a)(e,["classes","className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"]),$=function(e){var t=n.useState(e),a=t[0],l=t[1],i=e||a;return n.useEffect((function(){null==a&&l("mui-".concat(Math.round(1e5*Math.random())))}),[a]),i}(w),P=function(e){var t=e.controlled,a=e.default,l=(e.name,e.state,n.useRef(void 0!==t).current),i=n.useState(a),o=i[0],c=i[1];return[l?t:o,n.useCallback((function(e){l||c(e)}),[])]}({controlled:q,default:f,name:"Rating"}),Q=Object(o.a)(P,2),U=Q[0],W=Q[1],_=b(U,B),K=Object(s.a)(),Y=n.useState({hover:-1,focus:-1}),Z=Y[0],ee=Z.hover,te=Z.focus,ae=Y[1],ne=_;-1!==ee&&(ne=ee),-1!==te&&(ne=te);var le=Object(m.a)(),ie=le.isFocusVisible,oe=le.onBlurVisible,ce=le.ref,re=n.useState(!1),se=re[0],ue=re[1],me=n.useRef(),ve=Object(v.a)(ce,me),de=Object(v.a)(ve,t),fe=function(e){var t=parseFloat(e.target.value);W(t),R&&R(e,t)},pe=function(e){0===e.clientX&&0===e.clientY||(ae({hover:-1,focus:-1}),W(null),R&&parseFloat(e.target.value)===_&&R(e,null))},be=function(e){ie(e)&&ue(!0);var t=parseFloat(e.target.value);ae((function(e){return{hover:e.hover,focus:t}})),T&&te!==t&&T(e,t)},he=function(e){if(-1===ee){!1!==se&&(ue(!1),oe());ae((function(e){return{hover:e.hover,focus:-1}})),T&&-1!==te&&T(e,-1)}},Ee=function(e,t){var l="".concat($,"-").concat(String(e.value).replace(".","-")),o=n.createElement(C,{value:e.value,className:Object(r.a)(a.icon,e.filled?a.iconFilled:a.iconEmpty,e.hover&&a.iconHover,e.focus&&a.iconFocus,e.active&&a.iconActive)},k&&!e.filled?k:j);return J?n.createElement("span",Object(i.a)({key:e.value},t),o):n.createElement(n.Fragment,{key:e.value},n.createElement("label",Object(i.a)({className:a.label,htmlFor:l},t),o,n.createElement("span",{className:a.visuallyhidden},S(e.value))),n.createElement("input",{onFocus:be,onBlur:he,onChange:fe,onClick:pe,disabled:g,value:e.value,id:l,type:"radio",name:$,checked:e.checked,className:a.visuallyhidden}))};return n.createElement("span",Object(i.a)({ref:de,onMouseMove:function(e){I&&I(e);var t,a=me.current,n=a.getBoundingClientRect(),l=n.right,i=n.left,o=a.firstChild.getBoundingClientRect().width;t="rtl"===K.direction?(l-e.clientX)/(o*L):(e.clientX-i)/(o*L);var c=b(L*t+B/2,B);c=function(e,t,a){return e<t?t:e>a?a:e}(c,B,L),ae((function(e){return e.hover===c&&e.focus===c?e:{hover:c,focus:c}})),ue(!1),T&&ee!==c&&T(e,c)},onMouseLeave:function(e){z&&z(e);ae({hover:-1,focus:-1}),T&&-1!==ee&&T(e,-1)},className:Object(r.a)(a.root,l,"medium"!==G&&a["size".concat(Object(d.a)(G))],g&&a.disabled,se&&a.focusVisible,J&&a.readOnly),role:J?"img":null,"aria-label":J?S(ne):null},D),Array.from(new Array(L)).map((function(e,t){var l=t+1;if(B<1){var i=Array.from(new Array(1/B));return n.createElement("span",{key:l,className:Object(r.a)(a.decimal,l===Math.ceil(ne)&&(-1!==ee||-1!==te)&&a.iconActive)},i.map((function(e,t){var a=b(l-1+(t+1)*B,B);return Ee({value:a,filled:a<=ne,hover:a<=ee,focus:a<=te,checked:a===_},{style:i.length-1===t?{}:{width:a===ne?"".concat((t+1)*B*100,"%"):"0%",overflow:"hidden",zIndex:1,position:"absolute"}})})))}return Ee({value:l,active:l===ne&&(-1!==ee||-1!==te),filled:l<=ne,hover:l<=ee,focus:l<=te,checked:l===_})})),!J&&!g&&null==_&&n.createElement(n.Fragment,null,n.createElement("input",{value:"",id:"".concat($,"-empty"),type:"radio",name:$,defaultChecked:!0,className:a.visuallyhidden}),n.createElement("label",{className:a.pristine,htmlFor:"".concat($,"-empty")},n.createElement("span",{className:a.visuallyhidden},O))))})),k=Object(u.a)((function(e){return{root:{display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#ffb400",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent","&$disabled":{opacity:.5,pointerEvents:"none"},"&$focusVisible $iconActive":{outline:"1px solid #999"}},sizeSmall:{fontSize:e.typography.pxToRem(18)},sizeLarge:{fontSize:e.typography.pxToRem(30)},readOnly:{pointerEvents:"none"},disabled:{},focusVisible:{},visuallyhidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,color:"#000",overflow:"hidden",padding:0,position:"absolute",top:20,width:1},pristine:{"input:focus + &":{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}},label:{cursor:"inherit"},icon:{display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},iconEmpty:{color:e.palette.action.disabled},iconFilled:{},iconHover:{},iconFocus:{},iconActive:{transform:"scale(1.2)"},decimal:{position:"relative"}}}),{name:"MuiRating"})(g),N=(a("L+7h"),a("05u4"),a("9Koi")),O=[{name:"React - React Native",level:4},{name:"Javascript",level:4},{name:"HTML",level:4},{name:"CSS",level:4},{name:"REST API",level:4},{name:"Material UI",level:4},{name:"Express Js",level:4},{name:"Git - GitHub",level:4},{name:"Redux",level:4},{name:"SQL - NoSQL",level:3},{name:"Node",level:3},{name:"JSON",level:3},{name:"Microservices",level:3},{name:"Adobe XD",level:3},{name:"AWS",level:2},{name:"Typescript",level:2},{name:"GatsbyJs",level:2}];function x(){var e=Object(N.a)("global")[0];return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"about-me-title"},l.a.createElement("h1",null,e("about.title")),l.a.createElement("span",{className:"about-photo"}),l.a.createElement("div",null,l.a.createElement("p",{dangerouslySetInnerHTML:{__html:e("about.bio",{interpolation:{escapeValue:!1}})}}))),l.a.createElement("div",{className:"skills"},l.a.createElement("div",{className:"infoBlock"},l.a.createElement("h1",null,e("about.skills-title")),l.a.createElement("div",{className:"skill-container"},O.map((function(e,t){return l.a.createElement(S,{key:t,name:e.name,level:e.level})})))),l.a.createElement("div",{className:"infoBlock"},l.a.createElement("h1",null,e("about.experience-title")),l.a.createElement("div",{className:"skill-description"},e("about.experience"))),l.a.createElement("div",{className:"infoBlock"},l.a.createElement("h1",null,e("about.soft-skills-title")),l.a.createElement("div",{className:"skill-container"},l.a.createElement("div",{className:"skill-description"},l.a.createElement("p",null,e("about.soft-skills-1"))),l.a.createElement("div",{className:"skill-description"},l.a.createElement("p",null,e("about.soft-skills-2"))),l.a.createElement("div",{className:"skill-description"},l.a.createElement("p",null,e("about.soft-skills-3")))))))}var S=function(e){return l.a.createElement("div",{className:"skill-description"},l.a.createElement("p",null,e.name),l.a.createElement(k,{style:{color:"#f57c00"},name:"read-only",value:e.level,readOnly:!0}))}}}]);
//# sourceMappingURL=component---src-pages-components-about-js-1de451f17875b5b0472b.js.map