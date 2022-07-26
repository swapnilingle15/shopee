"use strict";(self.webpackChunkshopee=self.webpackChunkshopee||[]).push([[304],{2092:function(e,i,n){n(2791),n(5366);var r=n(184);i.Z=function(e){return(0,r.jsx)("button",{className:"btn btn-".concat(e.type),onClick:e.onClick,disabled:e.disabled,style:{width:e.width+"px"},children:e.children})}},8698:function(e,i,n){n.d(i,{Z:function(){return a}});n(2791);var r=n(184),a=function(){return(0,r.jsx)("div",{className:"horizontal-bar"})}},5301:function(e,i,n){n.d(i,{Z:function(){return b}});var r,a=n(885),s=n(2791),l=n(2092),t=["title","titleId"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function o(e,i){if(null==e)return{};var n,r,a=function(e,i){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,i){var n=e.title,a=e.titleId,l=o(e,t);return s.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:16,height:20,viewBox:"0 0 20 22",ref:i,"aria-labelledby":a},l),n?s.createElement("title",{id:a},n):null,r||(r=s.createElement("g",{id:"lock",transform:"translate(-2 -1)"},s.createElement("rect",{id:"Rectangle_1590","data-name":"Rectangle 1590",width:18,height:11,rx:2,transform:"translate(3 11)",fill:"none",stroke:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2}),s.createElement("path",{id:"Path_38020","data-name":"Path 38020",d:"M7,11V7A5,5,0,1,1,17,7v4",fill:"none",stroke:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2}))))}var u=s.forwardRef(c),m=(n.p,n(9434)),h=n(6871),p=n(6366),x=n(184),j=function(e,i,n){return e?"FREE":i?"- $ ".concat(null===n||void 0===n?void 0:n.toFixed(2)):"$ ".concat(null===n||void 0===n?void 0:n.toFixed(2))},f=function(e,i){var n=i-i*(e/100);return n},v=function(e){var i=e.label,n=e.price,r=e.isFree,a=void 0!==r&&r,s=e.isDiscount,l=void 0!==s&&s,t=e.isTotal,d=void 0!==t&&t;return(0,x.jsxs)("div",{className:"aem-Grid aem-Grid--12",children:[(0,x.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--8",children:d?(0,x.jsx)("b",{children:i}):i}),(0,x.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--4",children:d?(0,x.jsx)("b",{children:j(a,l,n)}):(0,x.jsx)(x.Fragment,{children:j(a,l,n)})})]})},b=function(){var e=(0,s.useState)(0),i=(0,a.Z)(e,2),n=i[0],r=i[1],t=(0,s.useState)(0),d=(0,a.Z)(t,2),o=d[0],c=d[1],j=(0,s.useState)(0),b=(0,a.Z)(j,2),C=b[0],G=b[1],y=(0,s.useState)(0),g=(0,a.Z)(y,2),N=g[0],S=g[1],E=(0,s.useState)(!0),Z=(0,a.Z)(E,2),q=Z[0],I=Z[1],k=(0,h.bS)("/checkout"),M=(0,m.v9)((function(e){return e.cart.cart})),T=(0,h.s0)(),A=(0,m.I0)();(0,s.useEffect)((function(){var e=0;M.forEach((function(i){e+=i.price*i.quantity})),r(e),c(e-f(20,e)),G(e>150?100:0),S(e-f(5,e)),I(e>500)}),[M]);return(0,x.jsx)("section",{className:"price-summary-section",children:(0,x.jsxs)("div",{className:"aem-Grid aem-Grid--12",children:[(0,x.jsx)("div",{className:"section-header",children:"Pricing Summary"}),(0,x.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12",children:[(0,x.jsx)(v,{label:"Subtotal",price:n}),(0,x.jsx)(v,{label:"Coupon",price:o,isDiscount:!0}),(0,x.jsx)(v,{label:"Gift Card",price:C,isDiscount:!0}),(0,x.jsx)(v,{label:"Estimated tax",price:N}),(0,x.jsx)(v,{label:"Estimated shipping",isFree:q,price:50}),(0,x.jsx)(v,{label:"Estimated Total",price:n-o-C+N+(q?0:50),isTotal:!0})]}),!k&&(0,x.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--12 button-section",children:[(0,x.jsxs)(l.Z,{type:"primary",onClick:function(){A((0,p.k9)(M)),T("/checkout")},children:[(0,x.jsx)(u,{}),"\xa0\xa0CHECKOUT"]}),(0,x.jsx)("img",{src:"data:image/png;base64,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",alt:"paypal_link"})]})]})})}},3304:function(e,i,n){n.r(i),n.d(i,{default:function(){return K}});var r,a=n(1413),s=n(4942),l=n(885),t=n(2791),d=n(326),o=n(4925),c=n(184),u=["label","type","error","isRequired"],m=(0,t.forwardRef)((function(e,i){var n=e.label,r=e.type,s=e.error,l=e.isRequired,t=(0,o.Z)(e,u);return(0,c.jsxs)("div",{className:"shopee-form-input",children:[(0,c.jsxs)("div",{className:"label-section",children:[(0,c.jsx)("label",{children:n}),!l&&(0,c.jsx)("span",{children:"Optional"})]}),(0,c.jsx)("input",(0,a.Z)({type:r,ref:i,className:"input ".concat(s&&"is-danger")},t)),s&&l&&(0,c.jsx)("div",{className:"is-danger",children:"This is a required field."})]})})),h=n(948),p=n(2092),x=[{label:"Country",type:"text",name:"country",placeholder:"Select Country",isRequired:!0},{label:"First Name",type:"text",name:"firstName",placeholder:"First Name",isRequired:!0,size:6},{label:"Last Name",type:"text",name:"lastName",placeholder:"Last Name",isRequired:!0,size:6},{label:"Street Address",type:"text",name:"streetAddress",placeholder:"Address Line",isRequired:!0,size:6},{label:"Street Address",type:"text",name:"streetAddress2",placeholder:"Address Line 2",isRequired:!1,size:6},{label:"City",type:"text",name:"city",placeholder:"City",isRequired:!0,size:6},{label:"State",type:"text",name:"state",placeholder:"Select State",isRequired:!0,size:4},{label:"ZIP",type:"number",name:"zip",placeholder:"Zip code",isRequired:!0,size:2,max:6,min:5}],j=["title","titleId"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function v(e,i){if(null==e)return{};var n,r,a=function(e,i){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,i){var n=e.title,a=e.titleId,s=v(e,j);return t.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,viewBox:"0 0 18 18",ref:i,"aria-labelledby":a},s),n?t.createElement("title",{id:a},n):null,r||(r=t.createElement("path",{id:"edit-2",d:"M14.1,2.84a2.282,2.282,0,0,1,3.228,3.228L6.438,16.961,2,18.172l1.21-4.438Z",transform:"translate(-1 -1.172)",fill:"none",stroke:"#336DFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})))}var C=t.forwardRef(b),G=(n.p,n(9434)),y=n(6366),g=["label","name","id","type","error","options","onChange","disabled","isRequired"],N=(0,t.forwardRef)((function(e,i){var n=e.label,r=e.name,s=e.id,l=(e.type,e.error),t=e.options,d=e.onChange,u=e.disabled,m=e.isRequired,h=(0,o.Z)(e,g);return(0,c.jsxs)("div",{className:"shopee-form-select",children:[(0,c.jsxs)("div",{className:"label-section",children:[(0,c.jsx)("label",{children:n}),!m&&(0,c.jsx)("span",{children:"Optional"})]}),(0,c.jsx)("select",(0,a.Z)((0,a.Z)({ref:i,name:r,className:"input-select ".concat(l&&"is-danger"),id:s},h),{},{onChange:d,disabled:u,children:t.map((function(e){return(0,c.jsx)("option",{value:e.value,children:e.label},e.value)}))})),l&&m&&(0,c.jsx)("div",{className:"is-danger",children:"This is a required field."})]})})),S=n(8083),E=function(e){var i=e.data,n=e.toggleEditMode;return(0,c.jsxs)("div",{className:"shipping-info-readonly",children:[(0,c.jsxs)("div",{className:"header",children:[(0,c.jsx)("b",{children:"Shipping Information"}),(0,c.jsxs)("span",{onClick:n,children:[(0,c.jsx)(C,{}),(0,c.jsx)("span",{className:"edit-button",children:"Edit"})]})]}),(0,c.jsxs)("div",{className:"aem-Grid aem-Grid--12 user-details-section",children:[(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 user-contact-section",children:[(0,c.jsx)("div",{children:i.email}),(0,c.jsx)("div",{children:i.phoneNumber})]}),(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12",children:[(0,c.jsx)("div",{children:"".concat(i.firstName," ").concat(i.lastName)}),(0,c.jsx)("div",{children:"".concat(i.streetAddress," ").concat(i.streetAddress2)}),(0,c.jsx)("div",{children:"".concat(i.city,", ").concat(i.state," ").concat(i.zip)}),(0,c.jsx)("div",{children:"".concat(i.country)})]})]})]})},Z=function(e){var i,n,r=(0,t.useState)(!0),s=(0,l.Z)(r,2),o=s[0],u=s[1],j=(0,t.useState)({}),f=(0,l.Z)(j,2),v=f[0],b=f[1],C=(0,t.useState)([]),g=(0,l.Z)(C,2),Z=g[0],q=g[1],I=(0,t.useState)([]),k=(0,l.Z)(I,2),M=k[0],T=k[1],A=(0,d.cI)({shouldUnregister:!1}),R=A.register,w=A.handleSubmit,O=A.control,L=A.formState.errors,F=(0,G.I0)();(0,t.useEffect)((function(){fetch("https://countriesnow.space/api/v0.1/countries/states").then((function(e){return e.json()})).then((function(e){var i=e.data,n=[];i.forEach((function(e){n.push((0,a.Z)({value:e.iso3+e.iso2,label:e.name},e))})),q(n)})).catch((function(e){return console.log("error",e)}))}),[]);var z=function(e){var i=e.target.value,n=Z.filter((function(e){return e.value===i}))[0].states;T(n.map((function(e){return{value:e.state_code,label:e.name}})))};return o?(0,c.jsxs)("div",{className:"border-bottom",children:[(0,c.jsx)("h4",{className:"margin-0",children:"Contact Information"}),(0,c.jsx)("p",{children:"We'll use there details to keep you informed on your delivery."}),(0,c.jsxs)("form",{onSubmit:w((function(i){b(i),u(!1),e.clickContinue(),F((0,y.GP)(i))})),children:[(0,c.jsxs)("div",{className:"aem-Grid aem-Grid--12",children:[(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12",children:(0,c.jsx)(m,(0,a.Z)({label:"Email",type:"text",error:!(null===(i=L.email)||void 0===i||!i.message),placeholder:"Enter Email",isRequired:!0},R("email",{required:{value:!0,message:"This is a required field."}})))}),(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12",children:(0,c.jsxs)("div",{className:"shopee-form-input",children:[(0,c.jsx)("label",{children:"Phone Number"}),(0,c.jsx)(d.Qr,{control:O,name:"phoneNumber",rules:{required:{value:!0,message:"This is a required field."}},render:function(e){var i,n=e.field,r=n.onChange,a=n.name,s=n.value;return(0,c.jsx)(h.Z,{format:"(###) ###-####",name:a,value:s,className:(null===(i=L.phoneNumber)||void 0===i?void 0:i.message)&&"is-danger",onChange:r,placeholder:"(123) 123-1234"})}}),(null===(n=L.phoneNumber)||void 0===n?void 0:n.message)&&(0,c.jsx)("div",{className:"is-danger",children:"This is a required field."})]})})]}),(0,c.jsxs)("section",{className:"aem-Grid aem-Grid--12",children:[(0,c.jsx)("h4",{children:"1. Shipping Information"}),x.map((function(e){var i,n,r;return"country"===e.name?(0,c.jsx)("div",{className:"aem-Grid aem-Grid--12",children:(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12",children:(0,c.jsx)(N,(0,a.Z)({label:e.label,name:e.name,id:e.id,isRequired:e.isRequired,error:!(null===(i=L[e.name])||void 0===i||!i.message),options:Z},R(e.name,{required:{value:e.isRequired,message:e.isRequired&&"This is a required field."},onChange:z})))})},e.name):"state"===e.name?(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--".concat(e.size," aem-GridColumn--tablet--6 aem-GridColumn--phone--12"),children:(0,c.jsx)(N,(0,a.Z)({label:e.label,name:e.name,id:e.id,isRequired:e.isRequired,error:!(null===(n=L[e.name])||void 0===n||!n.message),options:M,disabled:0===M.length},R(e.name,{required:{value:e.isRequired,message:e.isRequired&&"This is a required field."}})))},e.name):(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--".concat(e.size," aem-GridColumn--tablet--6 aem-GridColumn--phone--12"),children:(0,c.jsx)(m,(0,a.Z)({label:e.label,type:e.type,placeholder:e.placeholder,isRequired:e.isRequired,error:!(null===(r=L[e.name])||void 0===r||!r.message)},R(e.name,{required:{value:e.isRequired,message:e.isRequired&&"This is a required field."}})))},e.name)}))]}),(0,c.jsx)("center",{children:(0,c.jsx)(S.Z,{query:"(max-width: 768px)",children:function(e){return(0,c.jsx)(c.Fragment,{children:e?(0,c.jsx)(p.Z,{type:"secondary",width:180,children:"CONTINUE"}):(0,c.jsx)(p.Z,{type:"secondary",width:280,children:"CONTINUE TO SHIPPING METHOD"})})}})})]})]}):(0,c.jsx)(E,{data:v,toggleEditMode:function(){u(!0),e.clickEditMode()}})},q=n(5301),I=[{label:"Standard Shipping",id:"standardShipping",name:"shippingMethod",description:"(4-8 business days via USPS) FREE"},{label:"Express Delivery",id:"expressDelivery",name:"shippingMethod",description:"(2-5 business days via USPS) $17.95"},{label:"Next Day Delivery",id:"newDayDelivery",name:"shippingMethod",description:"(Next business days via FedEx) $53.61"}],k=["name","label","id","description","handleChange","children"],M=(0,t.forwardRef)((function(e,i){var n=e.name,r=e.label,s=e.id,l=e.description,t=e.handleChange,d=e.children,u=(0,o.Z)(e,k);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"shopee-form-radio",onClick:t,children:[(0,c.jsx)("input",(0,a.Z)({ref:i,type:"radio",id:s,value:s,name:n},u)),(0,c.jsxs)("label",{htmlFor:s,children:[(0,c.jsx)("b",{children:r}),"\xa0\xa0",l||""]})]}),d]})})),T=function(e){var i=e.data,n=e.toggleEditMode,r=I.filter((function(e){return e.id===i.shippingMethod}))[0];return(0,c.jsxs)("div",{className:"shipping-method-readonly",children:[(0,c.jsxs)("div",{className:"header",children:[(0,c.jsx)("span",{children:(0,c.jsx)("b",{children:"Shipping Method"})}),(0,c.jsxs)("span",{onClick:n,children:[(0,c.jsx)(C,{}),(0,c.jsx)("span",{className:"edit-button",children:"Edit"})]})]}),(0,c.jsx)("div",{className:"aem-Grid aem-Grid--12 user-details-section",children:(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12",children:[(0,c.jsx)("div",{children:r.label}),(0,c.jsxs)("div",{children:["Est. delivery in ",r.description]})]})})]})},A=function(e){var i,n=(0,t.useState)(!0),r=(0,l.Z)(n,2),s=r[0],o=r[1],u=(0,t.useState)({}),m=(0,l.Z)(u,2),h=m[0],x=m[1],j=(0,d.cI)({shouldUnregister:!1}),f=j.register,v=j.handleSubmit,b=j.formState.errors,C=(0,G.I0)();return s?(0,c.jsxs)("div",{className:"border-bottom",children:[(0,c.jsx)("h4",{children:"2. Shipping Method"}),(0,c.jsxs)("form",{onSubmit:v((function(i){var n=I.filter((function(e){return e.id===i.shippingMethod}))[0];x(i),o(!1),e.clickContinue(),C((0,y._m)(n))})),children:[(0,c.jsxs)("section",{children:[I.map((function(e){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(M,(0,a.Z)({label:e.label,description:e.description,id:e.id},f(e.name,{required:{value:!0,message:"This is a required field."}})),e.id)})})),(null===(i=b.shippingMethod)||void 0===i?void 0:i.message)&&(0,c.jsx)("div",{className:"is-danger",children:"This is a required field."})]}),(0,c.jsx)("center",{children:(0,c.jsx)(S.Z,{query:"(max-width: 768px)",children:function(e){return(0,c.jsx)(c.Fragment,{children:e?(0,c.jsx)(p.Z,{type:"secondary",width:180,children:"CONTINUE"}):(0,c.jsx)(p.Z,{type:"secondary",width:280,children:"CONTINUE TO PAYMENT"})})}})})]})]}):(0,c.jsx)(T,{data:h,toggleEditMode:function(){o(!s),e.clickEditMode()}})},R=n(850),w=function(e){var i,n,r,s,l=e.register,t=e.control,o=e.errors;return(0,c.jsx)("section",{className:"aem-Grid aem-Grid--12 credit-card-details",children:(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-Grid aem-Grid--12",children:[(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12",children:(0,c.jsx)(m,(0,a.Z)({label:"Name on Card",type:"text",isRequired:!0,error:null===(i=o.name)||void 0===i?void 0:i.message},l("name",{required:{value:!0,message:"This is a required field."}})))}),(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12",children:(0,c.jsxs)("div",{className:"shopee-form-input",children:[(0,c.jsx)("label",{children:"Credit Card Number"}),(0,c.jsx)(d.Qr,{control:t,name:"creditCardNumber",rules:{required:{value:!0,message:"This is a required field."}},render:function(e){var i,n=e.field,r=n.onChange,a=n.name,s=n.value;return(0,c.jsx)(h.Z,{format:"#### #### #### ####",name:a,className:(null===(i=o.creditCardNumber)||void 0===i?void 0:i.message)&&"is-danger",onChange:r,value:s})}}),(null===(n=o.creditCardNumber)||void 0===n?void 0:n.message)&&(0,c.jsx)("div",{className:"is-danger",children:"This is a required field."})]})}),(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--8 expiration-date",children:(0,c.jsx)(m,(0,a.Z)({label:"Expiration Date",type:"date",isRequired:!0,error:null===(r=o.expirationDate)||void 0===r?void 0:r.message},l("expirationDate",{required:{value:!0,message:"This is a required field."}})))}),(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--4",children:(0,c.jsxs)("div",{className:"shopee-form-input",children:[(0,c.jsx)("label",{children:"CVV"}),(0,c.jsx)(d.Qr,{control:t,name:"cvv",rules:{required:{value:!0,message:"This is a required field."}},render:function(e){var i,n=e.field,r=n.onChange,a=n.name,s=n.value;return(0,c.jsx)(h.Z,{format:"###",name:a,onChange:r,className:(null===(i=o.cvv)||void 0===i?void 0:i.message)&&"is-danger",value:s})}}),(null===(s=o.cvv)||void 0===s?void 0:s.message)&&(0,c.jsx)("div",{className:"is-danger",children:"This is a required field."})]})})]})})},O=function(e){var i=e.data,n=e.toggleEditMode,r=R.dG.filter((function(e){return e.id===i.paymentType}))[0],a=[];return i.paymentType===R.M2&&(a=i.creditCardNumber.split(" ")),(0,c.jsxs)("div",{className:"payment-info-readonly",children:[(0,c.jsxs)("div",{className:"header",children:[(0,c.jsx)("span",{children:(0,c.jsx)("b",{children:"Payment Information"})}),(0,c.jsxs)("span",{onClick:n,children:[(0,c.jsx)(C,{}),(0,c.jsx)("span",{className:"edit-button",children:"Edit"})]})]}),(0,c.jsx)("div",{className:"aem-Grid aem-Grid--12 user-details-section",children:(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12",children:[(0,c.jsx)("div",{children:r.label}),i.paymentType===R.M2&&(0,c.jsxs)("div",{children:["Visa ending in ",a[3]]})]})})]})},L=function(e){var i,n=(0,t.useState)(!0),r=(0,l.Z)(n,2),s=r[0],o=r[1],u=(0,t.useState)({}),m=(0,l.Z)(u,2),h=m[0],x=m[1],j=(0,t.useState)(""),f=(0,l.Z)(j,2),v=f[0],b=f[1],C=(0,d.cI)({shouldUnregister:!1}),g=C.register,N=C.handleSubmit,E=C.control,Z=C.formState.errors,q=(0,G.I0)();return s?(0,c.jsxs)("div",{className:"border-bottom",children:[(0,c.jsx)("h4",{children:"3. Payment Information"}),(0,c.jsxs)("form",{onSubmit:N((function(i){var n=R.dG.filter((function(e){return e.id===i.paymentType}))[0];x(i),o(!1),e.clickContinue(),q((0,y.sb)((0,a.Z)((0,a.Z)({},i),{},{label:n.label})))})),children:[(0,c.jsxs)("section",{children:[R.dG.map((function(e){return(0,c.jsx)(M,(0,a.Z)((0,a.Z)({label:e.label,id:e.id,handleChange:function(){return i=e.id,void b(i);var i}},g(e.name,{required:{value:!0,message:"This is a required field."}})),{},{children:v===R.M2&&e.id===R.M2?(0,c.jsx)(w,{register:g,control:E,errors:Z}):null}),e.id)})),(null===(i=Z.paymentType)||void 0===i?void 0:i.message)&&(0,c.jsx)("div",{className:"is-danger",children:"This is a required field."})]}),(0,c.jsx)("center",{children:(0,c.jsx)(S.Z,{query:"(max-width: 768px)",children:function(e){return(0,c.jsx)(c.Fragment,{children:e?(0,c.jsx)(p.Z,{type:"secondary",width:180,children:"CONTINUE"}):(0,c.jsx)(p.Z,{type:"secondary",width:280,children:"CONTINUE TO REVIEW ORDER"})})}})})]})]}):(0,c.jsx)(O,{data:h,toggleEditMode:function(){o(!s),e.clickEditMode()}})},F=n(6012),z=n(6871),P=n(3504),W=n(8698),Y=n(763),V="SHIPPING_INFO",B="SHIPPING_METHOD",X="PAYMENT_INFO",U="REVIEW_ORDER",D=function(e){var i=e.serialNumber,n=e.tabLabel;return(0,c.jsx)("div",{className:"checkout-tab inactive",children:"".concat(i,". ").concat(n)})},K=function(){var e,i=(0,t.useState)((e={},(0,s.Z)(e,V,!0),(0,s.Z)(e,B,!1),(0,s.Z)(e,X,!1),(0,s.Z)(e,U,!1),e)),n=(0,l.Z)(i,2),r=n[0],d=n[1],o=(0,G.v9)((function(e){return e.cart.cart})),u=(0,G.v9)((function(e){return e.checkout})),m=(0,z.s0)(),h=function(e){var i=e.paymentInformation;return(0,Y.isEmpty)(null===i||void 0===i?void 0:i.paymentType)}(u),x=function(e){var i=(0,a.Z)((0,a.Z)({},r),{},(0,s.Z)({},e,!0));d(i)};(0,t.useEffect)((function(){0===o.length&&m("/shopee")}),[m,o]);return(0,c.jsx)("section",{className:"component-container",children:(0,c.jsxs)("div",{children:[(0,c.jsxs)("center",{children:[(0,c.jsx)("span",{className:"display-l-36-",children:"Checkout"}),(0,c.jsx)(W.Z,{})]}),(0,c.jsxs)("div",{className:"aem-Grid aem-Grid--12",children:[(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--7 aem-GridColumn--phone--12",children:[(0,c.jsx)("h3",{children:"Guest Checkout"}),(0,c.jsx)("div",{className:"checkout-tab",children:(0,c.jsx)(Z,{clickContinue:function(){return x(B)},clickEditMode:function(){return x(V)}})}),r.SHIPPING_METHOD?(0,c.jsx)("div",{className:"checkout-tab",children:(0,c.jsx)(A,{clickContinue:function(){return x(X)},clickEditMode:function(){return x(B)}})}):(0,c.jsx)(D,{serialNumber:2,tabLabel:"Shipping Method"}),r.PAYMENT_INFO?(0,c.jsx)("div",{className:"checkout-tab",children:(0,c.jsx)(L,{clickContinue:function(){return x(U)},clickEditMode:function(){return d((0,a.Z)((0,a.Z)({},r),{},(0,s.Z)({},U,!1)))}})}):(0,c.jsx)(D,{serialNumber:3,tabLabel:"Payment Information"}),r.REVIEW_ORDER&&(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12",children:(0,c.jsx)(F.Z,{})})]}),!r.SHIPPING_METHOD&&!r.PAYMENT_INFO&&(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--5 aem-GridColumn--phone--hide sign-in-section-wrapper",children:(0,c.jsx)("section",{className:"sign-in-section",children:(0,c.jsxs)("div",{className:"aem-Grid aem-Grid--12",children:[(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--8 aem-GridColumn--phone--6",children:"Sign in for Express Checkout"}),(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--4 aem-GridColumn--phone--6",children:(0,c.jsx)(p.Z,{type:"secondary",disabled:!0,children:"SIGN IN"})})]})})}),(0,c.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--5 aem-GridColumn--phone--12",children:(0,c.jsx)(q.Z,{})}),(0,c.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--7 aem-GridColumn--phone--12 place-order-button-section",children:[(0,c.jsx)("center",{children:(0,c.jsx)(p.Z,{type:"primary",width:280,onClick:function(){m("/ordersummary")},disabled:h||!r.PAYMENT_INFO,children:"PLACE ORDER"})}),(0,c.jsxs)("div",{children:["By Clicking confirm order you agree to our\xa0\xa0",(0,c.jsx)(P.OL,{to:"/shopee",children:"Terms and Conditions"})]})]})]})]})})}},6012:function(e,i,n){n.d(i,{Z:function(){return l}});n(2791);var r=n(9434),a=n(4777),s=n(184),l=function(){var e=(0,r.v9)((function(e){return e.checkout.orderItems})),i=e.length;return(0,s.jsxs)("section",{className:"order-items-section",children:[(0,s.jsxs)("b",{children:[i," ",i>1?"items":"item"," in your order"]}),(0,s.jsx)("div",{className:"aem-Grid aem-Grid--12",children:e.map((function(e){return(0,s.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 order-item",children:(0,s.jsxs)("div",{className:"aem-Grid aem-Grid--12",children:[(0,s.jsx)("div",{className:"aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--4",children:(0,s.jsx)("figure",{children:(0,s.jsx)("img",{src:e.image,alt:e.title})})}),(0,s.jsxs)("div",{className:"aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--8",children:[(0,s.jsx)("h4",{children:e.title}),a.V.includes(e.category)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:["Size: ",e.size]}),(0,s.jsxs)("div",{children:["Color: ",e.color]})]}),(0,s.jsxs)("div",{children:["Quantity: ",e.quantity]})]})]})},e.id)}))})]})}},850:function(e,i,n){n.d(i,{M2:function(){return r},dG:function(){return a}});var r="creditCard",a=[{label:"Credit Card",id:r,name:"paymentType"},{label:"PayPal",id:"payPal",name:"paymentType"},{label:"Cash On Delivery",id:"cod",name:"paymentType"}]},4777:function(e,i,n){n.d(i,{V:function(){return r},s:function(){return a}});var r=["men's clothing","women's clothing"],a=function(e){switch(e){case"women":return{menuLabel:"Shop",childMenu:{menuLabel:"Women's",childMenu:{menuLabel:"Outerwear"}}};case"men":return{menuLabel:"Shop",childMenu:{menuLabel:"Men's",childMenu:{menuLabel:"Outerwear"}}};case"shop":return{menuLabel:"Shop",childMenu:{menuLabel:"All"}};default:return{menuLabel:"Shop",childMenu:{menuLabel:"".concat(e[0].toUpperCase()).concat(e.slice(1))}}}}},5366:function(){}}]);
//# sourceMappingURL=304.8c343cd8.chunk.js.map