(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77135442"],{"0f06":function(t,e,a){},"26a2":function(t,e,a){"use strict";var i=a("b950"),n=a.n(i);n.a},2934:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return o}));var i=a("b775");function n(){return Object(i["a"])({url:"/v1/village/list",method:"post"})}function r(){return Object(i["a"])({url:"/v1/position/query",method:"post"})}function o(t){return Object(i["a"])({url:"/v1/villageGroup/list",method:"post",data:t})}},"2b96":function(t,e,a){"use strict";var i=a("9ef6"),n=a.n(i);n.a},"2c50":function(t,e,a){},7715:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("行政区域设置")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.isFold=!t.isFold}}},[t._v(t._s(t.isFold?"展开":"折叠"))])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFold,expression:"isFold"}],staticClass:"area-box"},[a("p",{staticClass:"tag-title top"},[t._v("乡镇")]),t._l(t.areaList,(function(e){return a("el-tag",{key:"town"+e.townshipId,class:["tag-cursor",{active:t.activeTownIndex===e.townshipId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.getTowns(e)}}},[t._v(t._s(e.townshipName)+" ")])})),a("p",{staticClass:"tag-title"},[t._v("村")]),t._l(t.currentTownList,(function(e){return a("el-tag",{key:"village"+e.villageId,class:["tag-cursor",{active:t.activeVillageIndex===e.villageId}],attrs:{size:"mini","disable-transitions":!0,type:"info"},on:{click:function(a){return t.selectTown(e)}}},[t._v(t._s(e.villageName)+" ")])}))],2)])},n=[],r=a("2934"),o={data:function(){return{isFold:!1,areaList:[],currentTownList:[],activeTownIndex:0,activeTownName:"",activeVillageIndex:0,activeVillageName:""}},props:{initFold:Boolean},created:function(){this.isFold=this.initFold,this.getVillageList()},methods:{goBack:function(){this.$router.go(-1)},getTowns:function(t){this.currentTownList=t&&t.villageInfos||[],this.init(t),this.areaChange()},selectTown:function(t){this.activeVillageIndex=t.villageId,this.activeVillageName=t.villageName,console.log(this.activeVillageIndex)},getVillageList:function(){var t=this;Object(r["a"])().then((function(e){t.areaList=e.data.townshipInfos||[],t.init(t.areaList[0]),t.areaChange()}))},areaChange:function(t){var e=[{name:this.activeTownName,value:this.activeTownIndex},{name:this.activeVillageName,value:this.activeVillageIndex}];this.$emit("areaChange",e)},init:function(t){this.activeTownIndex=t.townshipId,this.currentTownList=t&&t.villageInfos||[],this.activeVillageIndex=this.currentTownList[0].villageId,this.activeTownName=t.townshipName,this.activeVillageName=this.currentTownList[0].villageName}}},s=o,l=(a("9180"),a("2b96"),a("2877")),c=Object(l["a"])(s,i,n,!1,null,"708dbd06",null);e["a"]=c.exports},8194:function(t,e,a){"use strict";a.d(e,"i",(function(){return n})),a.d(e,"f",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return l})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"j",(function(){return d})),a.d(e,"b",(function(){return f})),a.d(e,"a",(function(){return h}));var i=a("b775");function n(t){return Object(i["a"])({url:"/v1/family/search",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/v1/family/members",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/v1/family/save",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/v1/member/detail",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/v1/family/members",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/v1/member/detail",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/v1/relationship/query",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/v1/member/update",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/v1/member/cancel",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/v1/member/save",method:"post",data:t})}},9180:function(t,e,a){"use strict";var i=a("0f06"),n=a.n(i);n.a},"9ca4":function(t,e,a){"use strict";var i=a("2c50"),n=a.n(i);n.a},"9ef6":function(t,e,a){},b950:function(t,e,a){},f2f4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"organization-page"},[a("area-selector",{on:{areaChange:t.areaChange}}),a("div",{staticClass:"content"},[a("div",{staticClass:"option-box"},[a("div",{staticClass:"search-box"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"可按户号、户主姓名、身份证搜索",clearable:""},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.searchMemberList}},[t._v("搜索"),a("i",{staticClass:"el-icon-search el-icon--right"})])],1),a("div",[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:function(e){return t.handleEdit("new")}}},[t._v("新增农户")]),a("el-button",{attrs:{icon:"el-icon-download",type:"primary"},on:{click:function(e){return t.handleEdit("new")}}},[t._v("下载信息")])],1)]),a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-class-name":"table-header-color",data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"familyNo",label:"户号"}}),a("el-table-column",{attrs:{prop:"adminMemberName",label:"户主"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"80"}}),a("el-table-column",{attrs:{prop:"idCard",label:"身份证号"}}),a("el-table-column",{attrs:{prop:"birthDate",label:"出生日期"}}),a("el-table-column",{attrs:{prop:"currentAddress",label:"现居住地"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleEdit("edit",e.row)}}},[t._v("变更")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.goDetail(e.row)}}},[t._v("详情")])]}}])})],1),t.pageInfo.total?a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.pageInfo.total}}):t._e()],1)],1)},n=[],r=(a("99af"),a("b0c0"),a("7715")),o=a("8194"),s={components:{AreaSelector:r["a"]},data:function(){return{tableData:[],searchKey:"",form:{},pageInfo:{pageNum:1,pageSize:10,total:0},formLabelWidth:"100px",rules:{code:[{required:!0,message:"请输入组织代码",trigger:"blur"}],name:[{required:!0,message:"请输入组织名称",trigger:"blur"}],represent:[{required:!0,message:"请输入法人代表",trigger:"blur"}],createdDate:[{type:"date",message:"请选择成立日期",trigger:"change"}],desc:[{message:"请填写组织介绍",trigger:"blur"}]},groupOptions:[],isEdit:!1,areaList:[]}},created:function(){this.searchMemberList()},methods:{handleEdit:function(t,e){e?this.$router.push("/member/edit?isEdit=".concat(t,"&id=").concat(e&&e.familyId,"&familyCount=").concat(e.familyNo)):this.$router.push("/member/edit?isEdit=".concat(t))},goDetail:function(t){this.$router.push("/member/detail?id=".concat(t.familyId,"&village=").concat(this.areaList[0].name).concat(this.areaList[1].value,"&name=").concat(t.adminMemberName,"&familyNo=").concat(t.familyNo))},searchMemberList:function(){var t=this,e={keyword:this.searchKey,pageNum:this.pageInfo.pageNum,pageSize:this.pageInfo.pageSize,villageId:1};Object(o["i"])(e).then((function(e){t.tableData=e.data&&e.data.familyInfos||[]}))},getMemberList:function(){var t=this,e={keyword:this.searchKey,pageNum:this.pageInfo.pageNum,pageSize:this.pageInfo.pageSize,villageId:1};Object(o["f"])(e).then((function(e){t.tableData=e.data&&e.data.familyInfos||[]}))},areaChange:function(t){this.areaList=t,this.form.villageGroupId=t[1].value}}},l=s,c=(a("26a2"),a("9ca4"),a("2877")),u=Object(c["a"])(l,i,n,!1,null,"247fccb4",null);e["default"]=u.exports}}]);