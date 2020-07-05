(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-770c953f"],{"3e1f":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[t.showPage?a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("账户管理")])]),a("div",{staticClass:"main"},[a("el-button",{staticClass:"el-icon-plus",staticStyle:{"margin-bottom":"5px"},attrs:{type:"primary"},on:{click:t.addAccountBtn}},[t._v("新增账户 ")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"accountNo",label:"账号"}}),a("el-table-column",{attrs:{prop:"accountName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"rule",label:"职务"}}),a("el-table-column",{attrs:{prop:"phoneNum",label:"联系电话"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),a("el-table-column",{attrs:{prop:"description",label:"备注"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"el-icon-setting",attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleEditAccount(e.row)}}},[t._v("变更")]),a("el-button",{staticClass:"el-icon-delete",attrs:{type:"text",size:"small"}},[t._v("注销")])]}}],null,!1,3756871333)})],1)],1)]):t._e(),t.addAccount?a("el-card",{staticClass:"box-card"},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("新建账户")])]),a("div",{staticClass:"addAccount-main"},[a("el-card",{staticClass:"box-card-addAccount",staticStyle:{"margin-right":"1%"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("基本信息")])]),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"账号",prop:"account"}},[a("el-input",{model:{value:t.ruleForm.account,callback:function(e){t.$set(t.ruleForm,"account",e)},expression:"ruleForm.account"}})],1),a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),a("el-form-item",{attrs:{label:"电话",prop:"tel"}},[a("el-input",{model:{value:t.ruleForm.tel,callback:function(e){t.$set(t.ruleForm,"tel",e)},expression:"ruleForm.tel"}})],1),a("el-form-item",{attrs:{label:"职务",prop:"job"}},[a("el-input",{model:{value:t.ruleForm.job,callback:function(e){t.$set(t.ruleForm,"job",e)},expression:"ruleForm.job"}})],1),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),a("el-form-item",{attrs:{label:"备注",prop:"tips"}},[a("el-input",{model:{value:t.ruleForm.tips,callback:function(e){t.$set(t.ruleForm,"tips",e)},expression:"ruleForm.tips"}})],1),a("el-form-item",[a("el-button",{staticStyle:{width:"100%",background:"#20a0ff"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("保存")])],1)],1)],1),a("el-card",{staticClass:"box-card-addAccount"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("权限设置")])]),a("div",{staticClass:"radio_check"},[a("div",{staticStyle:{padding:"20px",width:"100%",display:"flex","align-items":"flex-start","justify-content":"center"}},[a("p",{staticStyle:{width:"20%","margin-left":"15%"}},[t._v("所辖乡镇")]),a("div",{staticStyle:{width:"80%","margin-top":"2%"}},t._l(t.lists,(function(e){return a("label",{staticStyle:{"margin-right":"10px"}},[a("input",{attrs:{type:"radio"}}),t._v(t._s(e))])})),0)]),a("div",{staticStyle:{display:"flex","align-items":"flex-start"}},[a("p",{staticStyle:{"margin-left":"17%","margin-right":"8%"}},[t._v("所辖村庄")]),a("p",{},[t._v("目前共计选中20个村庄！")]),a("el-popover",{attrs:{placement:"right",width:"400",trigger:"click"}},[a("el-button",{staticStyle:{background:"#1482f0"},attrs:{slot:"reference"},slot:"reference"},[t._v("详情")]),a("el-card",{staticClass:"box-card-addAccount",staticStyle:{width:"100%"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("所辖村庄")])]),a("div",{staticStyle:{width:"80%"}},t._l(t.list,(function(e){return a("label",{staticStyle:{"margin-right":"10px"}},[a("input",{attrs:{type:"checkbox",checked:"checked"}}),t._v(t._s(e))])})),0)])],1)],1),a("div",{staticStyle:{display:"flex","align-items":"flex-start"}},[a("p",{staticStyle:{width:"10%","margin-left":"19%","margin-right":"5%"}},[t._v("组归属")]),a("div",{staticStyle:{width:"80%","margin-top":"2%"}},t._l(t.group,(function(e){return a("label",{staticStyle:{"margin-right":"10px"}},[a("input",{attrs:{type:"checkbox"}}),t._v(t._s(e))])})),0)])])])],1)]):t._e()],1)},r=[],c=a("5530"),n=a("5723"),o={data:function(){return{pageInfo:{pageNum:1,pageSize:10,total:0},showPage:!0,addAccount:!1,tableData:[],lists:["碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇","碧岩镇"],list:["原家岔村","原家岔村","原家岔村","原家岔村","原家岔村","原家岔村","原家岔村"],group:["超级管理员","超级管理员","超级管理员","超级管理员"]}},created:function(){this.getAccountList()},methods:{handleEditAccount:function(t){this.$router.push("/account/accountAdd?isEdit=true&accountid=".concat(t.accountId))},addAccountBtn:function(){this.$router.push("/account/accountAdd")},getAccountList:function(){var t=this,e={pageNum:this.pageInfo.pageNum,pageSize:this.pageInfo.pageSize};Object(n["b"])(e).then((function(e){t.tableData=e.data.accountInfos,t.pageInfo=Object(c["a"])(Object(c["a"])({},t.pageInfo),{},{pages:e.data.pages,total:e.data.total})}))}}},i=o,s=(a("c69f"),a("4bb9"),a("2877")),u=Object(s["a"])(i,l,r,!1,null,"e2031c4c",null);e["default"]=u.exports},"4bb9":function(t,e,a){"use strict";var l=a("5589"),r=a.n(l);r.a},5589:function(t,e,a){},5723:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return i}));var l=a("b775");function r(t){return Object(l["a"])({url:"/v1/account/list",method:"post",data:t})}function c(t){return Object(l["a"])({url:"/v1/account/detail",method:"post",data:{accountId:t}})}function n(t){return Object(l["a"])({url:"/v1/account/save",method:"post",data:t})}function o(t){return Object(l["a"])({url:"/v1/accountGroup/list",method:"post",data:t})}function i(t){return Object(l["a"])({url:"/v1/account/update",method:"post",data:t})}},"7b23":function(t,e,a){},c69f:function(t,e,a){"use strict";var l=a("7b23"),r=a.n(l);r.a}}]);