(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7863a529"],{"0f06":function(e,t,a){},2934:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return r}));var i=a("b775");function n(){return Object(i["a"])({url:"/v1/village/list",method:"post"})}function s(){return Object(i["a"])({url:"/v1/position/query",method:"post"})}function r(e){return Object(i["a"])({url:"/v1/villageGroup/list",method:"post",data:e})}},"2b96":function(e,t,a){"use strict";var i=a("9ef6"),n=a.n(i);n.a},"4ad1":function(e,t,a){},"55f4":function(e,t,a){"use strict";var i=a("ee50"),n=a.n(i);n.a},5713:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"organization-page"},[a("back"),a("area-selector",{attrs:{initFold:!0}}),a("div",{staticClass:"content"},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"组织代码",prop:"code"}},[a("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),a("el-form-item",{attrs:{label:"组织名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"法人代表",prop:"represent"}},[a("el-input",{model:{value:e.form.represent,callback:function(t){e.$set(e.form,"represent",t)},expression:"form.represent"}})],1),a("el-form-item",{attrs:{label:"成立日期",prop:"createdDate"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.createdDate,callback:function(t){e.$set(e.form,"createdDate",t)},expression:"form.createdDate"}})],1),a("el-form-item",{attrs:{label:"所在社/组"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择所在社/组"},model:{value:e.form.group,callback:function(t){e.$set(e.form,"group",t)},expression:"form.group"}},e._l(e.groupOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"组织介绍",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",placeholder:"组织介绍"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1),a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("提 交")])],1)],1)],1)},n=[],s=a("7715"),r=a("66b7"),o={components:{AreaSelector:s["a"],Back:r["a"]},data:function(){return{tableData:[{index:1,code:12,name:"zhanah",represent:"sdasas",address:"lallallal",createdDate:"2018-09-29"}],searchKey:"",form:{},formLabelWidth:"100px",dialogFormVisible:!1,rules:{code:[{required:!0,message:"请输入组织代码",trigger:"blur"}],name:[{required:!0,message:"请输入组织名称",trigger:"blur"}],represent:[{required:!0,message:"请输入法人代表",trigger:"blur"}],createdDate:[{type:"date",message:"请选择成立日期",trigger:"change"}],desc:[{message:"请填写组织介绍",trigger:"blur"}]},groupOptions:[],isEdit:!1}},methods:{handleEdit:function(e){for(var t in this.showDialog(),this.form)this.form[t]=e[t];this.isEdit=!0}}},l=o,c=(a("55f4"),a("81fb"),a("2877")),u=Object(c["a"])(l,i,n,!1,null,"fde0dd86",null);t["default"]=u.exports},"66b7":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"back-container"},[a("span",{staticClass:"custom-back",on:{click:e.goBack}},[a("i",{staticClass:"el-icon-back ",on:{click:e.goBack}}),e._v("返回 ")])])},n=[],s=(a("2f62"),{name:"Back",methods:{goBack:function(){history.back()}}}),r=s,o=(a("8ccd"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"1a422e96",null);t["a"]=l.exports},7715:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("行政区域设置")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(t){e.isFold=!e.isFold}}},[e._v(e._s(e.isFold?"展开":"折叠"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isFold,expression:"isFold"}],staticClass:"area-box"},[a("p",{staticClass:"tag-title top"},[e._v("乡镇")]),e._l(e.areaList,(function(t){return a("el-tag",{key:"town"+t.townshipId,class:["tag-cursor",{active:e.activeTownIndex===t.townshipId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return e.getTowns(t)}}},[e._v(e._s(t.townshipName)+" ")])})),a("p",{staticClass:"tag-title"},[e._v("村")]),e._l(e.currentTownList,(function(t){return a("el-tag",{key:"village"+t.villageId,class:["tag-cursor",{active:e.activeVillageIndex===t.villageId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return e.selectTown(t)}}},[e._v(e._s(t.villageName)+" ")])}))],2)])},n=[],s=a("2934"),r={data:function(){return{isFold:!1,areaList:[],currentTownList:[],activeTownIndex:0,activeTownName:"",activeVillageIndex:0,activeVillageName:""}},props:{initFold:Boolean},created:function(){this.isFold=this.initFold,this.getVillageList()},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(e){this.currentTownList=e&&e.villageInfos||[],this.init(e),this.areaChange()},selectTown:function(e){this.activeVillageIndex=e.villageId,this.activeVillageName=e.villageName,console.log(this.activeVillageIndex)},getVillageList:function(){var e=this;Object(s["a"])().then((function(t){e.areaList=t.data.townshipInfos||[],e.init(e.areaList[0]),e.areaChange()}))},areaChange:function(e){var t=[{name:this.activeTownName,value:this.activeTownIndex},{name:this.activeVillageName,value:this.activeVillageIndex}];this.$emit("areaChange",t)},init:function(e){this.activeTownIndex=e.townshipId,this.currentTownList=e&&e.villageInfos||[],this.activeVillageIndex=this.currentTownList[0].villageId,this.activeTownName=e.townshipName,this.activeVillageName=this.currentTownList[0].villageName}}},o=r,l=(a("9180"),a("2b96"),a("2877")),c=Object(l["a"])(o,i,n,!1,null,"708dbd06",null);t["a"]=c.exports},"81fb":function(e,t,a){"use strict";var i=a("e80f"),n=a.n(i);n.a},"8ccd":function(e,t,a){"use strict";var i=a("4ad1"),n=a.n(i);n.a},9180:function(e,t,a){"use strict";var i=a("0f06"),n=a.n(i);n.a},"9ef6":function(e,t,a){},e80f:function(e,t,a){},ee50:function(e,t,a){}}]);