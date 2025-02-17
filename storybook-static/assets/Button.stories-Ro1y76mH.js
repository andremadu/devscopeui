import{j as E}from"./jsx-runtime-D_zvdyIk.js";const V="_button_1vzc4_3",C="_primary_1vzc4_75",I="_secondary_1vzc4_99",R="_success_1vzc4_123",k="_danger_1vzc4_147",A="_outline_1vzc4_171",G="_fullwidth_1vzc4_197",l={button:V,primary:C,secondary:I,success:R,danger:k,outline:A,fullwidth:G},$=({label:q,variant:F="primary",fullWidth:P=!1,className:j,disabled:c,...N})=>E.jsx("button",{className:`${l.button} ${l[F]} ${P?"w-full":""} ${c?l.disabled:""} ${j||""}`,disabled:c,...N,children:q});$.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "danger" | "outline"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Components/Button",component:$,tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","success","danger","outline"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{label:"Primary Button",variant:"primary"}},a={args:{label:"Secondary Button",variant:"secondary"}},r={args:{label:"Success Button",variant:"success"}},s={args:{label:"Danger Button",variant:"danger"}},t={args:{label:"Outline Button",variant:"outline"}},n={args:{label:"Full Width Button",fullWidth:!0}},o={args:{label:"Disabled Button",disabled:!0}};var u,i,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Primary Button",
    variant: "primary"
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary Button",
    variant: "secondary"
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,b,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Success Button",
    variant: "success"
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var _,f,B;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Danger Button",
    variant: "danger"
  }
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var S,h,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Outline Button",
    variant: "outline"
  }
}`,...(D=(h=t.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var W,z,w;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Full Width Button",
    fullWidth: true
  }
}`,...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var x,O,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    disabled: true
  }
}`,...(T=(O=o.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const K=["Primary","Secondary","Success","Danger","Outline","FullWidth","Disabled"];export{s as Danger,o as Disabled,n as FullWidth,t as Outline,e as Primary,a as Secondary,r as Success,K as __namedExportsOrder,J as default};
