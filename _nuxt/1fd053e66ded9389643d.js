(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{190:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("4e0c7f48",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";var o=n(190);n.n(o).a},206:function(t,e,n){(t.exports=n(33)(!1)).push([t.i,".container[data-v-2439f3f2]{-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center;padding:0 16px}.title[data-v-2439f3f2]{display:block;font-size:40px;margin-bottom:15px;letter-spacing:1px;width:100%;background-color:#fff}.subtitle[data-v-2439f3f2],.title[data-v-2439f3f2]{font-weight:300;color:#000}.subtitle[data-v-2439f3f2]{font-size:32px;word-spacing:5px;padding-bottom:15px;max-width:600px;margin:0 auto}.main-img[data-v-2439f3f2]{margin-bottom:20px}.poemas[data-v-2439f3f2]{text-align:center;font-size:20px;max-width:600px;margin:0 auto}.poema[data-v-2439f3f2]{margin-bottom:5px;padding:10px 5px 5px;color:#000}",""])},208:function(t,e,n){"use strict";n.r(e);n(26),n(18),n(14),n(7),n(22);var o=n(10),r=n(13),c=n(37),l=n.n(c);var f={computed:function(t){for(var i=1;i<arguments.length;i++)if(i%2){var source=null!=arguments[i]?arguments[i]:{},e=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(source).filter(function(t){return Object.getOwnPropertyDescriptor(source,t).enumerable}))),e.forEach(function(e){Object(o.a)(t,e,source[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[i]));return t}({},Object(r.c)(["shownPoemas"])),mounted:function(){var t=this;setTimeout(function(){t.$nextTick(function(){var e=document.querySelector("#poemas");t.$route.hash.indexOf("#poemas")>-1&&e&&(console.warn("home scroll"),window.scrollTo({top:l()(t.getCoords(e).top-150)}))})})}},m=(n(205),n(19)),component=Object(m.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",[n("h1",{staticClass:"title"},[t._v(t._s(t.getTrans("Nahuatl: Axhan, Cemanahuatl ihuan Cahuitl",["siteTitle"])))]),n("div",{staticClass:"main-img-container"},[n("img",{staticClass:"main-img",attrs:{src:t.baseUrl+"/images/home.jpg"}})]),n("h2",{staticClass:"subtitle"},[t._v(t._s(t.getTrans("¡Nic nequi ni tlahtos, nic nequi tih nech caquis!",["siteSubtitle"])))]),n("div",{staticClass:"poemas",attrs:{id:"poemas"}},t._l(t.shownPoemas,function(e){return n("div",[n("p",{staticClass:"poema link"},[n("nuxt-link",{attrs:{to:"/poemas/"+t.slug(e)}},[t._v(t._s(t.titulo(e)))])],1)])}),0)])])},[],!1,null,"2439f3f2",null);e.default=component.exports}}]);