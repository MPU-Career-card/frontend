"use strict";(self.webpackChunkcareer_card=self.webpackChunkcareer_card||[]).push([[24],{863:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});var s=a(43),c=a(821),i=a(614),n=a(978),r=a(413),o=a(921),u=a(711),d=a(579);const p=()=>{const[t,e]=(0,s.useState)({}),[a,p]=(0,s.useState)(!1),[l,f]=(0,s.useState)(),[g,h]=(0,s.useState)(),y=(0,s.useRef)(!1),j=async()=>{try{p(!0);const{data:t}=await r.FC.get(""),a=t.reduce(((t,e)=>({...t,[e]:[]})),{});e(a)}catch(t){if(t instanceof c.pe){const{status:e,data:{detail:a}}=t.response||{data:{}};f(e),h(a)}}finally{p(!1)}},m=(0,r.sg)((async t=>{if(!t)return y.current=!1,void j();try{y.current=!0;const{data:a}=await(0,r.Ky)(t),s=Object.keys(a).reduce(((t,e)=>({...t,[e]:a[e].specialities})),{});console.log({specialities:s}),e(s)}catch(a){if(a instanceof c.pe){const{status:t,data:{detail:e}}=a.response||{data:{}};f(t),h(e)}}}),300);return(0,s.useEffect)((()=>{j()}),[]),a?(0,d.jsx)(o.R,{}):l||g?(0,d.jsx)(u.$,{status:l,description:g}):(0,d.jsxs)(n.mc,{children:[(0,d.jsx)(i.hr,{image:"/frontend/assets/promo.jpg",title:"\u041a\u0430\u0440\u044c\u0435\u0440\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b",description:"- \u044d\u0442\u043e \u043f\u0440\u043e\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0442\u0435\u0431\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441 \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0435\u0439 \u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0432 \u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u043e\u043c \u041f\u043e\u043b\u0438\u0442\u0435\u0445\u0435"}),(0,d.jsx)(i.KK,{specialities:t,getSpecialities:async t=>{if(!y.current)try{const{data:a}=await(0,r.RA)(t);e((e=>({...e,[t]:a.specialities})))}catch(a){if(a instanceof c.pe){const{status:t,data:{detail:e}}=a.response||{data:{}};f(t),h(e)}}},onSearchInputChange:t=>{m(t.target.value)},marginTop:100,marginBottom:100}),(0,d.jsx)(i.wi,{})]})}}}]);
//# sourceMappingURL=24.6f77b7ac.chunk.js.map