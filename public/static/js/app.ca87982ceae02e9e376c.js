webpackJsonp([1],{NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("7+uW"),a=r("zL8q"),s=r.n(a),l=(r("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var n=r("VU/8")({name:"App"},l,!1,function(e){r("NUhh")},null,null).exports,i=r("/ocq"),m={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{login:function(){this.$axios.post("/loginIn",{username:"18595838670",password:"lzy920512"}).then(function(e){console.log(e)})},register:function(){this.$router.push("/register")},forget:function(){this.$router.push("/forgetPass")}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.forget}},[e._v("忘记密码")])],1)},staticRenderFns:[]};var c=r("VU/8")(m,u,!1,function(e){r("kELQ")},"data-v-dbb8c37c",null).exports,p={name:"HelloWorld",data:function(){return{ruleForm:{username:"",password:"",fathername:"",mothername:"",othername:"",createtime:""},loading:!1,rules:{username:[{required:!0,validator:function(e,t,r){""===t?r(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(t)?r():r(new Error("请输入正确的账号"))},trigger:"blur"}],password:[{required:!0,message:"密码不能为空"}],fathername:[{required:!0,message:"父亲的名字不能为空"}],mothername:[{required:!0,message:"母亲的名字不能为空"}],othername:[{required:!0,message:"配偶的名字不能为空"}]}}},created:function(){},methods:{submitForm:function(e){var t=this,r=this.$tools.dateparse(new Date);this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm),t.ruleForm.createtime=r,t.loading=!0,t.$axios.post("/register",t.ruleForm).then(function(e){console.log(e),t.loading=!1,"0"==e.data.state?(console.log("注册成功"),t.$message({message:e.data.msg,type:"success"}),t.resetForm("ruleForm"),t.ruleForm={username:"",password:"",fathername:"",mothername:"",othername:"",createtime:""}):t.$message({message:e.data.msg,type:"error"})})})},login:function(){this.$router.go(-1)},resetForm:function(e){this.$refs[e].resetFields()}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"60px"}},[r("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保1",prop:"fathername"}},[r("el-input",{attrs:{placeholder:"请输入您父亲的名字",autocomplete:"off"},model:{value:e.ruleForm.fathername,callback:function(t){e.$set(e.ruleForm,"fathername",t)},expression:"ruleForm.fathername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保2",prop:"mothername"}},[r("el-input",{attrs:{placeholder:"请输入您母亲的名字",autocomplete:"off"},model:{value:e.ruleForm.mothername,callback:function(t){e.$set(e.ruleForm,"mothername",t)},expression:"ruleForm.mothername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保3",prop:"othername"}},[r("el-input",{attrs:{placeholder:"请输入您配偶的名字",autocomplete:"off"},model:{value:e.ruleForm.othername,callback:function(t){e.$set(e.ruleForm,"othername",t)},expression:"ruleForm.othername"}})],1),e._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("注册")]),e._v(" "),r("el-button",{on:{click:function(t){return e.login()}}},[e._v("登录")])],1)],1)],1)},staticRenderFns:[]};var d=r("VU/8")(p,f,!1,function(e){r("nZsJ")},"data-v-2e839e40",null).exports,g={name:"ForgetPass",data:function(){return{ruleForm:{username:"",fathername:"",mothername:"",othername:""},passForm:{username:"",fathername:"",mothername:"",othername:""},loading:!1,rules:{username:[{required:!0,validator:function(e,t,r){""===t?r(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(t)?r():r(new Error("请输入正确的账号"))},trigger:"blur"}],fathername:[{required:!0,message:"父亲的名字不能为空",trigger:"blur"}],mothername:[{required:!0,message:"母亲的名字不能为空",trigger:"blur"}],othername:[{required:!0,message:"配偶的名字不能为空",trigger:"blur"}]},passRule:{password:[{required:!0,message:"新密码不能为空",trigger:"blur"}]},dialogVisible:!1}},created:function(){},methods:{submitPassForm:function(e){var t=this;this.$refs[e].validate(function(e){e&&(console.log(t.passForm),t.$axios.post("/resetPass",t.passForm).then(function(e){console.log(e),"0"==e.data.state?(t.$message({message:e.data.msg,type:"success"}),t.dialogVisible=!1):t.$message({message:e.data.msg,type:"error"})}))})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm),t.loading=!0,t.$axios.post("/validateQues",t.ruleForm).then(function(e){t.loading=!1,console.log(e),"0"==e.data.state?t.dialogVisible=!0:t.$message({message:e.data.msg,type:"error"})})})},login:function(){this.$router.go(-1)},resetForm:function(e){this.$refs[e].resetFields()}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"60px"}},[r("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保1",prop:"fathername"}},[r("el-input",{attrs:{placeholder:"请输入您父亲的名字",autocomplete:"off"},model:{value:e.ruleForm.fathername,callback:function(t){e.$set(e.ruleForm,"fathername",t)},expression:"ruleForm.fathername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保2",prop:"mothername"}},[r("el-input",{attrs:{placeholder:"请输入您母亲的名字",autocomplete:"off"},model:{value:e.ruleForm.mothername,callback:function(t){e.$set(e.ruleForm,"mothername",t)},expression:"ruleForm.mothername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保3",prop:"othername"}},[r("el-input",{attrs:{placeholder:"请输入您配偶的名字",autocomplete:"off"},model:{value:e.ruleForm.othername,callback:function(t){e.$set(e.ruleForm,"othername",t)},expression:"ruleForm.othername"}})],1),e._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("设置密码")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"设置密码",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"passRule",staticClass:"demo-ruleForm",staticStyle:{width:"50%",margin:"0 auto"},attrs:{model:e.passForm,rules:e.passRule,"label-width":"60px"}},[r("div",[r("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.passForm.password,callback:function(t){e.$set(e.passForm,"password",t)},expression:"passForm.password"}})],1),e._v(" "),r("div",{staticClass:"dialog-footer",staticStyle:{display:"flex","justify-content":"center"},attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitPassForm("passForm")}}},[e._v("更换密码")])],1)],1)])],1)],1)},staticRenderFns:[]};var v=r("VU/8")(g,h,!1,function(e){r("PT1X")},"data-v-1b4d085a",null).exports;o.default.use(i.a);var F=new i.a({routes:[{path:"/",name:"Home",component:c},{path:"/register",name:"register",component:d},{path:"/forgetPass",name:"ForgetPass",component:v}]}),b=r("mtWM"),$=r.n(b);function y(e){return e<10?"0"+e:e.toString()}var _={tools:{dateparse:function(e){var t=e.getFullYear(),r=e.getMonth()+1,o=e.getDay(),a=e.getHours(),s=e.getMinutes(),l=e.getSeconds();return y(t)+"-"+y(r)+"-"+y(o)+" "+y(a)+":"+y(s)+":"+y(l)}}};o.default.prototype.$axios=$.a,o.default.prototype.$tools=_.tools,o.default.config.productionTip=!1,o.default.use(s.a),new o.default({el:"#app",router:F,components:{App:n},template:"<App/>"})},NUhh:function(e,t){},PT1X:function(e,t){},kELQ:function(e,t){},nZsJ:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ca87982ceae02e9e376c.js.map