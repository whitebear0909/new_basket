"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[388],{5388:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var s=r(7757),a=r.n(s),n=r(629),i={props:["user","deleteUser"]},c=r(1900);function o(t,e,r,s,a,n,i){try{var c=t[n](i),o=c.value}catch(t){return void r(t)}c.done?e(o):Promise.resolve(o).then(s,a)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f={components:{UserItem:(0,c.Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{attrs:{md:"6",xl:"3"}},[r("router-link",{attrs:{to:{name:"UserEdit",params:{id:t.user.id}}}},[r("div",{staticClass:"user-item-card mb-5"},[r("b-dropdown",{staticClass:"m-2 setting-drop",attrs:{"no-caret":"",variant:"outline-secondary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("i",{staticClass:"fa fa-ellipsis-v"})]},proxy:!0}])},[t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[r("router-link",{staticClass:"drop-button",attrs:{to:{name:"UserEdit",params:{id:t.user.id}}}},[r("i",{staticClass:"fa fa-edit mr-2"}),t._v("Edit")])],1),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[r("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.deleteUser(t.user.id)}}},[r("span",{staticClass:"drop-button"},[r("i",{staticClass:"fa fa-trash-alt mr-2"}),t._v("Delete")])])])],1),t._v(" "),r("div",{staticClass:"img-block mb-2"},[t.user.avatar?r("img",{staticClass:"card-img-top",attrs:{src:t.user.avatar,alt:"avatar",width:"100px",height:"120px"}}):r("img",{staticClass:"card-img-top",attrs:{src:"/images/default_user_avatar.png",alt:"avatar",width:"100px",height:"120px"}})]),t._v(" "),r("div",{staticClass:"card-title mb-2"},[t._v("\n                "+t._s(t.user.first_name)+" "+t._s(t.user.second_name)+"\n            ")]),t._v(" "),r("div",{staticClass:"card-qualification mb-4"},[t._v("\n                "+t._s(t.user.qualification?t.user.qualification:"unbekannt")+"\n            ")]),t._v(" "),r("div",{staticClass:"d-flex justify-content-start"},[r("b-col",{attrs:{cols:"2"}},[r("i",{staticClass:"pull-left fa fa-envelope primary"})]),t._v(" "),r("b-col",{staticClass:"card-email mb-2",attrs:{cols:"10"}},[t._v("\n                    "+t._s(t.user.email)+"\n                ")])],1)],1)])],1)}),[],!1,null,null,null).exports},data:function(){return{perPage:12,currentPage:1,searchStr:"",delUserId:""}},computed:u(u({},(0,n.Se)({users:"user/users",user:"auth/user"})),{},{rows:function(){return this.users.length}}),mounted:function(){this.$store.dispatch("user/getUsers",""),this.$store.dispatch("auth/fetchUser")},created:function(){},methods:{gotoCreatePage:function(){this.$router.push("/users/create")},getUserBySearch:function(t){13===t.keyCode&&(t&&t.preventDefault(),this.$store.dispatch("user/getUsers",this.searchStr))},setDelUserId:function(t){this.delUserId=t},deleteUser:function(t){var e,r=this;return(e=a().mark((function e(){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!=r.user.id){e.next=4;break}r.$refs["alert-modal"].show(),e.next=14;break;case 4:return s=r,e.prev=5,e.next=8,r.$bvModal.msgBoxConfirm("Do you really want to delete this Shift?",{title:"Confirmation"});case 8:!0===e.sent&&s.$store.dispatch("user/deleteUser",{id:t}).then((function(t){s.$store.dispatch("user/getUsers","")})),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:case"end":return e.stop()}}),e,null,[[5,12]])})),function(){var t=this,r=arguments;return new Promise((function(s,a){var n=e.apply(t,r);function i(t){o(n,s,a,i,c,"next",t)}function c(t){o(n,s,a,i,c,"throw",t)}i(void 0)}))})()},hideAlertModal:function(){this.$refs["alert-modal"].hide()}}},p=f,v=(0,c.Z)(p,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"content"},[r("div",{staticClass:"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left"},[t._m(0),t._v(" "),r("div",{staticClass:"mt-2"},[r("b-form",{},[r("b-row",[r("b-col",{staticClass:"pb-2",attrs:{lg:"6",md:"6",sm:"6",xs:"6"}},[r("b-input-group",[r("b-input-group-prepend",[r("b-button",{attrs:{variant:"primary"}},[r("i",{staticClass:"fa fa-search mr-1"})])],1),t._v(" "),r("b-form-input",{attrs:{placeholder:"Search User..."},on:{keydown:function(e){return t.getUserBySearch(e)}},model:{value:t.searchStr,callback:function(e){t.searchStr=e},expression:"searchStr"}})],1)],1),t._v(" "),r("b-col",{staticClass:"pb-2",attrs:{lg:"6",md:"6",sm:"6",xs:"6"}},[r("b-button",{directives:[{name:"click-ripple",rawName:"v-click-ripple"}],staticClass:"mr-1",attrs:{variant:"primary",href:"javascript:void(0)"},on:{click:t.gotoCreatePage}},[r("i",{staticClass:"fa fa-user-plus mr-4"}),t._v("\n                                Add User\n                            ")])],1)],1)],1)],1)])]),t._v(" "),r("div",{staticClass:"content"},[!0===t.users.isLoading?r("div",{staticClass:"text-center"},[r("b-spinner",{attrs:{label:"Loading..."}})],1):r("b-row",{staticClass:"text-center justify-content-start"},t._l(t.users.data,(function(e,s){return r("user-item",{key:s,attrs:{user:e,deleteUser:t.deleteUser}})})),1),t._v(" "),r("div",[r("b-pagination",{staticClass:"float-right mb-5",attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),t._v(" "),r("b-modal",{ref:"alert-modal",attrs:{"hide-footer":"",title:"Alarm"}},[r("div",{staticClass:"d-block text-center"},[r("h3",[t._v("This User is you. You can't delete this User.")])]),t._v(" "),r("div",{staticClass:"text-center"},[r("b-button",{staticClass:"mt-2 w-40",attrs:{variant:"danger"},on:{click:t.hideAlertModal}},[t._v("ok")])],1)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-sm-fill"},[r("h1",{staticClass:"h3 font-w700 mb-2"},[t._v("User Administration")])])}],!1,null,null,null).exports}}]);