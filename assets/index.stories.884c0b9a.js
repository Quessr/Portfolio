var f=Object.defineProperty;var n=(e,t)=>f(e,"name",{value:t,configurable:!0});import{C as P}from"./index.0a35ce12.js";import{j as d}from"./jsx-runtime.5b399fd4.js";import"./styled-components.browser.esm.73d62701.js";import"./index.ec084709.js";import"./index.b2cbf8c3.js";import"./index.5bd8671d.js";import"./clsx.m.256e9345.js";import"./index.4ddfedd0.js";import"./index.2ad2d27b.js";import"./index.062b06f7.js";import"./index.f93dea89.js";import"./index.501ecf15.js";import"./index.230e7bc9.js";import"./iframe.8337ed06.js";const c={_origin:"https://api.emailjs.com"},g=n((e,t="https://api.emailjs.com")=>{c._userID=e,c._origin=t},"init"),l=n((e,t,o)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},"validateParams");class p{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}n(p,"EmailJSResponseStatus");const u=n((e,t,o={})=>new Promise((i,a)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:r})=>{const m=new p(r);m.status===200||m.text==="OK"?i(m):a(m)}),s.addEventListener("error",({target:r})=>{a(new p(r))}),s.open("POST",c._origin+e,!0),Object.keys(o).forEach(r=>{s.setRequestHeader(r,o[r])}),s.send(t)}),"sendPost"),h=n((e,t,o,i)=>{const a=i||c._userID;l(a,e,t);const s={lib_version:"3.10.0",user_id:a,service_id:e,template_id:t,template_params:o};return u("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},"send"),C=n(e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},"findHTMLForm"),x=n((e,t,o,i)=>{const a=i||c._userID,s=C(o);l(a,e,t);const r=new FormData(s);return r.append("lib_version","3.10.0"),r.append("service_id",e),r.append("template_id",t),r.append("user_id",a),u("/api/v1.0/email/send-form",r)},"sendForm"),y={init:g,send:h,sendForm:x},E=n(()=>d(P,{onSubmit:n(t=>{t.preventDefault(),y.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",t.target,"YOUR_PUBLIC_KEY").then(o=>{console.log(o.text)},o=>{console.log(o.text)})},"sendEmail")}),"ContactPage"),_=E,R={parameters:{storySource:{source:`import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import ContactPage from '.';

export default {
  title: 'Pages / ContactPage',
  component: ContactPage,
} as ComponentMeta<typeof ContactPage>;

export const API = (props: typeof ContactPage) => {
  return <ContactPage {...props} />;
};
`,locationsMap:{api:{startLoc:{col:19,line:11},endLoc:{col:1,line:13},startBody:{col:19,line:11},endBody:{col:1,line:13}}}}},title:"Pages / ContactPage",component:_},U=n(e=>d(_,{...e}),"API"),V=["API"];export{U as API,V as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories.884c0b9a.js.map
