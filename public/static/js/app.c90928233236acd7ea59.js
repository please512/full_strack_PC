webpackJsonp([1],{NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("7+uW"),n=r("zL8q"),a=r.n(n),l=(r("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var s=r("VU/8")({name:"App"},l,!1,function(e){r("NUhh")},null,null).exports,u=r("/ocq"),i={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{login:function(){this.$axios.post("/loginIn",{username:"18595838670",password:"lzy920512"}).then(function(e){console.log(e)})},register:function(){this.$router.push("/Register")}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("忘记密码")])],1)},staticRenderFns:[]};var c=r("VU/8")(i,m,!1,function(e){r("vT5x")},"data-v-460d7d61",null).exports,p={name:"HelloWorld",data:function(){return{ruleForm:{username:"",password:"",fathername:"",mothername:"",othername:"",createtime:""},rules:{username:[{required:!0,validator:function(e,t,r){""===t?r(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(t)?r():r(new Error("请输入正确的账号"))},trigger:"blur"}],password:[{required:!0,message:"密码不能为空"}],fathername:[{required:!0,message:"父亲的名字不能为空"}],mothername:[{required:!0,message:"母亲的名字不能为空"}],othername:[{required:!0,message:"配偶的名字不能为空"}]}}},created:function(){},methods:{submitForm:function(e){var t=this,r=this.$tools.dateparse(new Date);this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm),t.ruleForm.createtime=r,t.$axios.post("/register",t.ruleForm).then(function(e){"ok"==e.state&&(console.log("注册成功"),t.$el.Message({message:"注册成功",type:"success"}))})})},resetForm:function(e){this.$refs[e].resetFields()}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"60px"}},[r("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保1",prop:"fathername"}},[r("el-input",{attrs:{placeholder:"请输入您父亲的名字",autocomplete:"off"},model:{value:e.ruleForm.fathername,callback:function(t){e.$set(e.ruleForm,"fathername",t)},expression:"ruleForm.fathername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保2",prop:"mothername"}},[r("el-input",{attrs:{placeholder:"请输入您母亲的名字",autocomplete:"off"},model:{value:e.ruleForm.mothername,callback:function(t){e.$set(e.ruleForm,"mothername",t)},expression:"ruleForm.mothername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保3",prop:"othername"}},[r("el-input",{attrs:{placeholder:"请输入您配偶的名字",autocomplete:"off"},model:{value:e.ruleForm.othername,callback:function(t){e.$set(e.ruleForm,"othername",t)},expression:"ruleForm.othername"}})],1),e._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("注册")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]};var d=r("VU/8")(p,f,!1,function(e){r("dh8G")},"data-v-8b9e885e",null).exports;o.default.use(u.a);var h=new u.a({routes:[{path:"/",name:"Home",component:c},{path:"/register",name:"register",component:d}]}),v=r("mtWM"),F=r.n(v);function g(e){return e<10?"0"+e:e.toString()}var b={tools:{dateparse:function(e){var t=e.getFullYear(),r=e.getMonth()+1,o=e.getDay(),n=e.getHours(),a=e.getMinutes(),l=e.getSeconds();return g(t)+"-"+g(r)+"-"+g(o)+" "+g(n)+":"+g(a)+":"+g(l)}}};o.default.prototype.$axios=F.a,o.default.prototype.$tools=b.tools,o.default.prototype.$el=a.a,o.default.config.productionTip=!1,o.default.use(a.a),new o.default({el:"#app",router:h,components:{App:s},template:"<App/>"})},NUhh:function(e,t){},dh8G:function(e,t){},tvR6:function(e,t){},vT5x:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c90928233236acd7ea59.js.map