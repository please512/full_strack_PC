webpackJsonp([1],{"/4J1":function(e,t){},HxJE:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("//Fk"),a=r.n(o),s=r("7+uW"),n=r("zL8q"),l=r.n(n),i=(r("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var u=r("VU/8")({name:"App"},i,!1,function(e){r("NUhh")},null,null).exports,m=r("/ocq"),c={name:"Home",data:function(){return{ruleForm:{username:"",password:"",passwordtrue:"",captcha:"",createtime:""},loading:!1,rules:{username:[{required:!0,validator:function(e,t,r){""===t?r(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(t)?r():r(new Error("请输入正确的账号"))},trigger:"blur"}],passwordtrue:[{required:!0,message:"密码不能为空",trigger:"blur"}],captcha:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},created:function(){},mounted:function(){var e=this;this.$nextTick(function(){e.editCaptcha()})},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm),t.loading=!0,t.ruleForm.createtime=t.$tools.getnowtime(new Date),t.ruleForm.password=t.$md5.hex_md5(t.ruleForm.passwordtrue),t.ruleForm.passwordtrue=t.$md5.hex_md5(t.ruleForm.passwordtrue),t.$axios.post("/loginIn",t.ruleForm).then(function(e){console.log(e),t.loading=!1,"200"==e.data.state?(console.log("登录成功"),sessionStorage.setItem("accesstoken",e.data.data),t.$router.push("/index")):(t.$message({message:e.data.msg,type:"error"}),t.editCaptcha())})})},resetpass:function(){this.$router.push("/forgetpass")},resetForm:function(e){this.$refs[e].resetFields()},register:function(){this.$router.push("/register")},editCaptcha:function(){this.$refs.imgYzm.src="/getCaptcha?d="+Math.random()}}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"70px"}},[r("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"passwordtrue"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.ruleForm.passwordtrue,callback:function(t){e.$set(e.ruleForm,"passwordtrue",t)},expression:"ruleForm.passwordtrue"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"验证码",prop:"captcha"}},[r("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between"}},[r("el-input",{staticStyle:{width:"73%"},attrs:{placeholder:"请输入验证码",autocomplete:"off"},model:{value:e.ruleForm.captcha,callback:function(t){e.$set(e.ruleForm,"captcha",t)},expression:"ruleForm.captcha"}}),e._v(" "),r("img",{ref:"imgYzm",staticStyle:{width:"25%",height:"40px",overflow:"hidden","border-radius":"4px"},attrs:{src:"/getCaptcha",alt:"captcha"},on:{click:e.editCaptcha}})],1)]),e._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("登录")]),e._v(" "),r("el-button",{on:{click:function(t){return e.register()}}},[e._v("注册")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetpass()}}},[e._v("找回密码")])],1)],1)],1)},staticRenderFns:[]};var d=r("VU/8")(c,p,!1,function(e){r("sOGK")},"data-v-7d2399f9",null).exports,f={name:"Register",data:function(){return{ruleForm:{username:"",password:"",passwordtrue:"",fathername:"",mothername:"",othername:"",createtime:""},loading:!1,rules:{username:[{required:!0,validator:function(e,t,r){""===t?r(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(t)?r():r(new Error("请输入正确的账号"))},trigger:"blur"}],passwordtrue:[{required:!0,message:"密码不能为空"}],fathername:[{required:!0,message:"父亲的名字不能为空"}],mothername:[{required:!0,message:"母亲的名字不能为空"}],othername:[{required:!0,message:"配偶的名字不能为空"}]}}},created:function(){console.log(this.$tools.getnowtime(new Date))},methods:{submitForm:function(e){var t=this,r=this.$tools.getnowtime(new Date);this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm),t.ruleForm.createtime=r,t.loading=!0,t.ruleForm.password=t.$md5.hex_md5(t.ruleForm.passwordtrue),t.ruleForm.passwordtrue=t.$md5.hex_md5(t.ruleForm.passwordtrue),t.$axios.post("/register",t.ruleForm).then(function(e){console.log(e),t.loading=!1,"200"==e.data.state?(console.log("注册成功"),t.$message({message:e.data.msg,type:"success"}),t.$router.go(-1)):t.$message({message:e.data.msg,type:"error"})})})},resetForm:function(e){this.$refs[e].resetFields()}}},h={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"60px"}},[r("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"passwordtrue"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.ruleForm.passwordtrue,callback:function(t){e.$set(e.ruleForm,"passwordtrue",t)},expression:"ruleForm.passwordtrue"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保1",prop:"fathername"}},[r("el-input",{attrs:{placeholder:"请输入您父亲的名字",autocomplete:"off"},model:{value:e.ruleForm.fathername,callback:function(t){e.$set(e.ruleForm,"fathername",t)},expression:"ruleForm.fathername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保2",prop:"mothername"}},[r("el-input",{attrs:{placeholder:"请输入您母亲的名字",autocomplete:"off"},model:{value:e.ruleForm.mothername,callback:function(t){e.$set(e.ruleForm,"mothername",t)},expression:"ruleForm.mothername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保3",prop:"othername"}},[r("el-input",{attrs:{placeholder:"请输入您配偶的名字",autocomplete:"off"},model:{value:e.ruleForm.othername,callback:function(t){e.$set(e.ruleForm,"othername",t)},expression:"ruleForm.othername"}})],1),e._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]};var g=r("VU/8")(f,h,!1,function(e){r("vZd/")},"data-v-77826e49",null).exports,v={name:"ForgetPass",data:function(){return{ruleForm:{username:"",fathername:"",mothername:"",othername:""},passForm:{username:"",password:"",passwordtrue:""},loading:!1,rules:{username:[{required:!0,validator:function(e,t,r){""===t?r(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(t)?r():r(new Error("请输入正确的账号"))},trigger:"blur"}],fathername:[{required:!0,message:"父亲的名字不能为空",trigger:"blur"}],mothername:[{required:!0,message:"母亲的名字不能为空",trigger:"blur"}],othername:[{required:!0,message:"配偶的名字不能为空",trigger:"blur"}]},passRule:{passwordtrue:[{required:!0,message:"新密码不能为空",trigger:"blur"}]},dialogVisible:!1}},created:function(){},methods:{submitPassForm:function(e){var t=this;this.$refs[e].validate(function(e){e&&(console.log(t.passForm),t.passForm.username=t.ruleForm.username,t.passForm.password=t.$md5.hex_md5(t.passForm.passwordtrue),t.$axios.post("/resetPass",t.passForm).then(function(e){console.log(e),"200"==e.data.state?(t.$message({message:e.data.msg,type:"success"}),t.dialogVisible=!1):t.$message({message:e.data.msg,type:"error"}),t.passForm.password=""}))})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm),t.loading=!0,t.$axios.post("/validateQues",t.ruleForm).then(function(e){t.loading=!1,console.log(e),"200"==e.data.state?(t.dialogVisible=!0,t.passForm.password=""):t.$message({message:e.data.msg,type:"error"})})})},login:function(){this.$router.go(-1)},resetForm:function(e){this.$refs[e].resetFields()}}},F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"60px"}},[r("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保1",prop:"fathername"}},[r("el-input",{attrs:{placeholder:"请输入您父亲的名字",autocomplete:"off"},model:{value:e.ruleForm.fathername,callback:function(t){e.$set(e.ruleForm,"fathername",t)},expression:"ruleForm.fathername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保2",prop:"mothername"}},[r("el-input",{attrs:{placeholder:"请输入您母亲的名字",autocomplete:"off"},model:{value:e.ruleForm.mothername,callback:function(t){e.$set(e.ruleForm,"mothername",t)},expression:"ruleForm.mothername"}})],1),e._v(" "),r("el-form-item",{attrs:{"label-position":"left",label:"密保3",prop:"othername"}},[r("el-input",{attrs:{placeholder:"请输入您配偶的名字",autocomplete:"off"},model:{value:e.ruleForm.othername,callback:function(t){e.$set(e.ruleForm,"othername",t)},expression:"ruleForm.othername"}})],1),e._v(" "),r("div",{staticStyle:{display:"flex","justify-content":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("设置密码")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"设置密码",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"passForm",staticClass:"demo-ruleForm",staticStyle:{width:"50%",margin:"0 auto"},attrs:{model:e.passForm,rules:e.passRule,"label-width":"60px"}},[r("div",[r("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"passwordtrue"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.passForm.passwordtrue,callback:function(t){e.$set(e.passForm,"passwordtrue",t)},expression:"passForm.passwordtrue"}})],1),e._v(" "),r("div",{staticClass:"dialog-footer",staticStyle:{display:"flex","justify-content":"center"},attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitPassForm("passForm")}}},[e._v("更换密码")])],1)],1)])],1)],1)},staticRenderFns:[]};var b=r("VU/8")(v,F,!1,function(e){r("HxJE")},"data-v-52275472",null).exports,w={name:"Index",data:function(){return{}},created:function(){},methods:{token:function(){this.$axios.post("/send",{}).then(function(e){console.log(e)})}}},$={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",{staticStyle:{color:"red"}},[this._v("敬请期待...")]),this._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:this.token}},[this._v("token调试")])],1)},staticRenderFns:[]};var x=r("VU/8")(w,$,!1,function(e){r("/4J1")},"data-v-72002900",null).exports;s.default.use(m.a);var y=new m.a({routes:[{path:"/",redirect:"/home",name:"Home",component:d},{path:"/home",name:"Home",component:d},{path:"/register",name:"Register",component:g},{path:"/forgetpass",name:"ForgetPass",component:b},{path:"/index",name:"Index",component:x}]}),_=r("mtWM"),k=r.n(_);function C(e){return e<10?"0"+e:e.toString()}var q={getnowtime:function(e){var t=e.getFullYear(),r=e.getMonth()+1,o=e.getDay(),a=e.getHours(),s=e.getMinutes(),n=e.getSeconds();return C(t)+"-"+C(r)+"-"+C(o)+" "+C(a)+":"+C(s)+":"+C(n)},getCookie:function(e){console.log(document.cookie);for(var t=document.cookie.split("; "),r=0;r<t.length;r++){var o=t[r].split("=");if(e==o[0])return o[1]}return""}},E=0,S=8;function R(e){return I(V(D(e),e.length*S))}function V(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,o=-271733879,a=-1732584194,s=271733878,n=0;n<e.length;n+=16){var l=r,i=o,u=a,m=s;o=U(o=U(o=U(o=U(o=N(o=N(o=N(o=N(o=j(o=j(o=j(o=j(o=H(o=H(o=H(o=H(o,a=H(a,s=H(s,r=H(r,o,a,s,e[n+0],7,-680876936),o,a,e[n+1],12,-389564586),r,o,e[n+2],17,606105819),s,r,e[n+3],22,-1044525330),a=H(a,s=H(s,r=H(r,o,a,s,e[n+4],7,-176418897),o,a,e[n+5],12,1200080426),r,o,e[n+6],17,-1473231341),s,r,e[n+7],22,-45705983),a=H(a,s=H(s,r=H(r,o,a,s,e[n+8],7,1770035416),o,a,e[n+9],12,-1958414417),r,o,e[n+10],17,-42063),s,r,e[n+11],22,-1990404162),a=H(a,s=H(s,r=H(r,o,a,s,e[n+12],7,1804603682),o,a,e[n+13],12,-40341101),r,o,e[n+14],17,-1502002290),s,r,e[n+15],22,1236535329),a=j(a,s=j(s,r=j(r,o,a,s,e[n+1],5,-165796510),o,a,e[n+6],9,-1069501632),r,o,e[n+11],14,643717713),s,r,e[n+0],20,-373897302),a=j(a,s=j(s,r=j(r,o,a,s,e[n+5],5,-701558691),o,a,e[n+10],9,38016083),r,o,e[n+15],14,-660478335),s,r,e[n+4],20,-405537848),a=j(a,s=j(s,r=j(r,o,a,s,e[n+9],5,568446438),o,a,e[n+14],9,-1019803690),r,o,e[n+3],14,-187363961),s,r,e[n+8],20,1163531501),a=j(a,s=j(s,r=j(r,o,a,s,e[n+13],5,-1444681467),o,a,e[n+2],9,-51403784),r,o,e[n+7],14,1735328473),s,r,e[n+12],20,-1926607734),a=N(a,s=N(s,r=N(r,o,a,s,e[n+5],4,-378558),o,a,e[n+8],11,-2022574463),r,o,e[n+11],16,1839030562),s,r,e[n+14],23,-35309556),a=N(a,s=N(s,r=N(r,o,a,s,e[n+1],4,-1530992060),o,a,e[n+4],11,1272893353),r,o,e[n+7],16,-155497632),s,r,e[n+10],23,-1094730640),a=N(a,s=N(s,r=N(r,o,a,s,e[n+13],4,681279174),o,a,e[n+0],11,-358537222),r,o,e[n+3],16,-722521979),s,r,e[n+6],23,76029189),a=N(a,s=N(s,r=N(r,o,a,s,e[n+9],4,-640364487),o,a,e[n+12],11,-421815835),r,o,e[n+15],16,530742520),s,r,e[n+2],23,-995338651),a=U(a,s=U(s,r=U(r,o,a,s,e[n+0],6,-198630844),o,a,e[n+7],10,1126891415),r,o,e[n+14],15,-1416354905),s,r,e[n+5],21,-57434055),a=U(a,s=U(s,r=U(r,o,a,s,e[n+12],6,1700485571),o,a,e[n+3],10,-1894986606),r,o,e[n+10],15,-1051523),s,r,e[n+1],21,-2054922799),a=U(a,s=U(s,r=U(r,o,a,s,e[n+8],6,1873313359),o,a,e[n+15],10,-30611744),r,o,e[n+6],15,-1560198380),s,r,e[n+13],21,1309151649),a=U(a,s=U(s,r=U(r,o,a,s,e[n+4],6,-145523070),o,a,e[n+11],10,-1120210379),r,o,e[n+2],15,718787259),s,r,e[n+9],21,-343485551),r=P(r,l),o=P(o,i),a=P(a,u),s=P(s,m)}return Array(r,o,a,s)}function A(e,t,r,o,a,s){return P((n=P(P(t,e),P(o,s)))<<(l=a)|n>>>32-l,r);var n,l}function H(e,t,r,o,a,s,n){return A(t&r|~t&o,e,t,a,s,n)}function j(e,t,r,o,a,s,n){return A(t&o|r&~o,e,t,a,s,n)}function N(e,t,r,o,a,s,n){return A(t^r^o,e,t,a,s,n)}function U(e,t,r,o,a,s,n){return A(r^(t|~o),e,t,a,s,n)}function P(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function D(e){for(var t=Array(),r=(1<<S)-1,o=0;o<e.length*S;o+=S)t[o>>5]|=(e.charCodeAt(o/S)&r)<<o%32;return t}function I(e){for(var t=E?"0123456789ABCDEF":"0123456789abcdef",r="",o=0;o<4*e.length;o++)r+=t.charAt(e[o>>2]>>o%4*8+4&15)+t.charAt(e[o>>2]>>o%4*8&15);return r}var J={hex_md5:R};k.a.interceptors.request.use(function(e){var t=sessionStorage.getItem("accesstoken");return t&&(e.headers.common.authorization=t),e}),k.a.interceptors.response.use(function(e){return console.log(e),440==e.data.status?a.a.reject("123"):e},function(e){var t=e.response;console.log(t)}),s.default.prototype.$axios=k.a,s.default.prototype.$tools=q,s.default.prototype.$md5=J,s.default.config.productionTip=!1,s.default.use(l.a),new s.default({el:"#app",router:y,components:{App:u},template:"<App/>"})},NUhh:function(e,t){},sOGK:function(e,t){},tvR6:function(e,t){},"vZd/":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.147144414c896bb9bb1f.js.map