webpackJsonp([4],{351:function(e,n,t){var o=t(14)(t(369),t(386),null,null);e.exports=o.exports},369:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={methods:{sendMessage:function(){this.$socket.emit("client:hello","client hello")}},mounted:function(){var e=this;this.$socket.on("server:hello",function(n){e.$message.info("Received from server: "+n)})}}},386:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("content-module",{attrs:{name:"dashboard"}},[e._v("\n  Dashboard\n  "),t("el-button",{attrs:{type:"info"},nativeOn:{click:function(n){e.sendMessage(n)}}},[e._v("Send hello")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.1316801f362d78f20b8d.js.map