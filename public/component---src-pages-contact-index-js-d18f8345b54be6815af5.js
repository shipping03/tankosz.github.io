"use strict";(self.webpackChunkgatsby_starter_netlify_cms=self.webpackChunkgatsby_starter_netlify_cms||[]).push([[415],{9448:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(1721),l=a(7294),r=a(8037),c=a(5310);var m=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault();var t,n=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":n.getAttribute("name")},a.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return(0,r.c4)(n.getAttribute("action"))})).catch((function(e){return alert(e)}))},a.state={isValidated:!1},a}return(0,n.Z)(t,e),t.prototype.render=function(){return l.createElement(c.Z,null,l.createElement("section",{className:"section"},l.createElement("div",{className:"container"},l.createElement("div",{className:"content"},l.createElement("h1",null,"联系我们"),l.createElement("br",null),l.createElement("br",null),l.createElement("p",null,"如产品、合作、应聘职位等，请填写并提交如下表单，我们将第一时间回复您！"),l.createElement("form",{name:"contact",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},l.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),l.createElement("div",{hidden:!0},l.createElement("label",null,"Don’t fill this out:"," ",l.createElement("input",{name:"bot-field",onChange:this.handleChange}))),l.createElement("div",{className:"field"},l.createElement("label",{className:"label",htmlFor:"name"},"如何称呼您"),l.createElement("div",{className:"control"},l.createElement("input",{placeholder:"请输入姓名",className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),l.createElement("div",{className:"field"},l.createElement("label",{className:"label",htmlFor:"email"},"您的邮件地址"),l.createElement("div",{className:"control"},l.createElement("input",{placeholder:"请输入邮箱",className:"input",type:"email",name:"email",onChange:this.handleChange,id:"email",required:!0}))),l.createElement("div",{className:"field"},l.createElement("label",{className:"label",htmlFor:"message"},"您想要咨询的内容"),l.createElement("div",{className:"control"},l.createElement("textarea",{placeholder:"请填写详细信息",className:"textarea",name:"message",onChange:this.handleChange,id:"message",required:!0}))),l.createElement("div",{className:"field"},l.createElement("button",{className:"button is-link",type:"submit"},"提交")))))))},t}(l.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-d18f8345b54be6815af5.js.map