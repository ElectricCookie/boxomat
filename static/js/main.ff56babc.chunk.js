(this["webpackJsonpbox-planner"]=this["webpackJsonpbox-planner"]||[]).push([[0],{164:function(e,t,n){},166:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n(0),c=n.n(i),s=n(61),a=n.n(s),o=(n(164),n(11)),l=n(146),u=(n(165),n(191)),d=(n(166),n(13)),b=n(14);function j(){var e=Object(d.a)(["\n  display: flex;\n  padding-top: 40px;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return j=function(){return e},e}var x=b.a.div(j()),h=n(143),p=n(19),f=n(32),O=n(144),m=n(194),v=n(28),g=[[1,1],[2,1],[3,1],[4,1],[5,1],[2,2],[3,2],[5,2],[6,2]],y=[{hex:"#f3be38",ral:"RAL 1003"},{hex:"#d81a21",ral:"RAL 3020"},{hex:"#007cb6",ral:"RAL 5015"},{hex:"#48A43F",ral:"RAL 6018"},{hex:"#999999",ral:"RAL 7001"},{hex:"#383e42",ral:"RAL 7016"}],z={"5x3":"SB 32","6x5":"SB 353","7x5":"SB 43","8x6":"SB 443","11x7":"SB 64"},I=Object(O.a)((function(){var e,t=JSON.parse(null!==(e=localStorage.getItem("app-state"))&&void 0!==e?e:"{}"),n=Object(i.useState)(t),r=Object(f.a)(n,2),c=r[0],s=r[1],a=function(e){localStorage.setItem("app-state",JSON.stringify(e)),s(e)},o=Object(i.useState)(!1),l=Object(f.a)(o,2),u=l[0],d=l[1],b=Object(i.useState)(null!=c?Object.keys(c)[0]:null),j=Object(f.a)(b,2),x=j[0],O=j[1],z=Object(i.useState)(null),I=Object(f.a)(z,2),C=I[0],S=I[1];return{showAddBox:u,forBox:function(e){return Object.keys(c).map((function(t){return e(t,c[t])}))},setShowAddBox:d,clearInserts:function(){window.confirm("Are you sure?")&&a(Object(v.a)(c,(function(e){return e[x].inserts={},e})))},selectSlot:function(e){null!=c[x].selectionStart?a(Object(v.a)(c,(function(t){var n=Object(m.a)();if(null==C||C.sizeX*C.sizeY===e.prototype.sizeX*e.prototype.sizeY||window.confirm("Your new box has a different size. Continue?"))return t[x].inserts[n]=Object(p.a)(Object(p.a)({label:"",color:y[0]},C),e.prototype),t[x].selectionStart=null,S(null),t}))):a(Object(v.a)(c,(function(t){return t[x].selectionStart=e,t})))},repositionInsert:function(e){var t=c[x].inserts[e];S(Object(p.a)(Object(p.a)({},t),{},{boxId:x,insertId:e})),a(Object(v.a)(c,(function(t){return delete t[x].inserts[e],t})))},repositioningInsert:C,cancelReposition:function(){if(null!=C){var e=C.boxId,t=C.insertId;a(Object(v.a)(c,(function(n){return n[e].inserts[t]=C,n}))),S(null)}},selectInsert:function(e){a(Object(v.a)(c,(function(t){return t[x].activeInsert=e,t})))},activeBox:c[x],activeBoxId:x,getSlots:function(e){for(var t=[],n=e.selectionStart,r=e.inserts,i=e.sizeY,c=e.sizeX,s=0;s<c;s++)for(var a=0;a<i;a++){var o={selectable:!0,x:s,y:a,selected:(null===n||void 0===n?void 0:n.x)===s&&(null===n||void 0===n?void 0:n.y)===a};if(null!=n){var l,u=Math.abs(n.x-s)+1,d=Math.abs(n.y-a)+1,b=Math.max(u,d),j=Math.min(u,d),x=!1,p=Object(h.a)(g);try{for(p.s();!(l=p.n()).done;){var f=l.value;f[0]===b&&f[1]===j&&(x=!0)}}catch(S){p.e(S)}finally{p.f()}o.selectable=x;var O={x:Math.min(n.x,s),y:Math.min(n.y,a),sizeX:u,sizeY:d};o.prototype=O;for(var m=0,v=Object.keys(r);m<v.length;m++){var y=r[v[m]];if(y.x<O.x+O.sizeX&&y.x+y.sizeX>O.x&&y.y<O.y+O.sizeY&&y.y+y.sizeY>O.y){o.selectable=!1;break}}}else for(var z=0,I=Object.keys(r);z<I.length;z++){var C=r[I[z]];if(s>=C.x&&s<C.x+C.sizeX&&a>=C.y&&a<C.y+C.sizeY){o.selectable=!1;break}}t.push(o)}return t},createBox:function(e){var t=Object(m.a)();a(Object(v.a)(c,(function(n){return n[t]=Object(p.a)(Object(p.a)({},e),{},{inserts:{}}),n}))),d(!1),O(t)},updateBox:function(e,t){a(Object(v.a)(c,(function(n){return null!=t?n[e]=t:delete n[e],n})))},setActiveBoxId:O,boxes:c}})),C=n(176);function S(){var e=Object(d.a)(["\n  background: ",";\n  border-radius: ","px;\n  transition: all 0.2s ease-in-out;\n\n  grid-column: ",";\n  grid-row: ",";\n"]);return S=function(){return e},e}var w=b.a.div(S(),(function(e){return e.selected?"#aaa":e.selectable?"#dadada":"#fafafa"}),(function(e){return 1.5*e.scale}),(function(e){return e.x+1}),(function(e){return e.y+1}));function k(){var e=Object(d.a)(["\n  background: #fff;\n  border-radius: ","px;\n  display: flex;\n  margin: ","px;\n  flex-direction: column;\n  padding: 1rem;\n  border: ",";\n\n  .content {\n    position: relative;\n    width: calc(","vw);\n    height: ","vw;\n    > div {\n      position: absolute;\n      display: grid;\n      grid-gap: 5px;\n      grid-template-columns: ",";\n      grid-template-rows: ",";\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .inserts {\n      pointer-events: none;\n      > div {\n        pointer-events: all;\n      }\n    }\n  }\n\n  small {\n    text-align: center;\n    color: #ddd;\n    display: block;\n  }\n  .inserts {\n    display: grid;\n  }\n"]);return k=function(){return e},e}var B=b.a.div(k(),(function(e){return Math.max(1.5*e.scale,4)}),(function(e){return 10*e.scale}),(function(e){return e.active?"1px solid #000":"1px solid #ddd"}),(function(e){return e.sizeX*e.scale}),(function(e){return e.sizeY*e.scale}),(function(e){return"minmax(0, 1fr) ".repeat(e.sizeX)}),(function(e){return"minmax(0, 1fr) ".repeat(e.sizeY)}));function Y(){var e=Object(d.a)(["\n  grid-row-start: ",";\n  grid-row-end: ",";\n  grid-column-start: ",";\n  grid-column-end: ",";\n  background: ",";\n  opacity: 1;\n  border: 2px solid ",";\n  display: flex;\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n  align-items: center;\n  text-align: center;\n  color: #fff;\n  justify-content: center;\n  /*box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);*/\n  border-radius: ","px;\n"]);return Y=function(){return e},e}var E=b.a.div(Y(),(function(e){return e.y+1}),(function(e){return e.y+1+e.sizeY}),(function(e){return e.x+1}),(function(e){return e.x+1+e.sizeX}),(function(e){return e.color.hex}),(function(e){return e.editing?"#000":"#ddd"}),(function(e){return 1.5*e.scale})),X=function(e){var t=e.box,n=e.scale,i=e.preview,c=e.onClick,s=t.sizeX,a=t.sizeY,o=t.inserts,l=I.useContainer(),u=l.getSlots,d=l.selectSlot,b=l.selectInsert;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(B,{scale:n,sizeX:s,sizeY:a,children:Object(r.jsxs)("div",{onClick:i?c:null,className:"content",children:[Object(r.jsx)("div",{className:"inserts",children:u(t).map((function(e){return Object(r.jsx)(w,{x:e.x,selected:e.selected,scale:n,onClick:function(){i||d(e)},selectable:e.selectable,y:e.y})}))}),Object(r.jsx)("div",{className:"inserts",children:Object.keys(o).map((function(e){var c,s=o[e];return i||(c="".concat(s.sizeX,"x").concat(s.sizeY),s.label&&(c=s.label)),Object(r.jsx)(E,Object(p.a)(Object(p.a)({editing:e===t.activeInsert,scale:n,onClick:function(){i||(e!==t.activeInsert?b(e):b(null))}},s),{},{children:c}))}))})]})})})};function M(){var e=Object(d.a)(["\n  border-bottom: 1px solid #ddd;\n  padding: 1rem;\n  display: flex;\n"]);return M=function(){return e},e}var N=b.a.div(M()),L=function(){var e=I.useContainer(),t=e.forBox,n=e.setActiveBoxId,i=e.setShowAddBox;return Object(r.jsxs)(N,{children:[t((function(e,t){return Object(r.jsx)(X,{boxId:e,onClick:function(){n(e)},preview:!0,box:t,scale:.5})})),Object(r.jsx)(C.a,{onClick:function(){return i(!0)},children:"Add box"})]})};function A(){var e=Object(d.a)(["\n  flex: 1;\n  display: flex;\n\n  .editor {\n    display: flex;\n    position: relative;\n    overflow: hidden;\n    align-items: center;\n    flex: 1;\n\n    justify-content: center;\n    background: #fafafa;\n  }\n  .inspector {\n    min-width: 30%;\n\n    overflow-y: auto;\n    padding: 1rem;\n    border-left: 1px solid #ddd;\n  }\n"]);return A=function(){return e},e}var T=b.a.main(A()),U=n(193),R=n(190),F=n(20),J=n(188);function D(){var e=Object(d.a)(["\n  display: inline-block;\n  width: 32px;\n  border-radius: 4px;\n  height: 32px;\n  border: 1px solid ",";\n  margin: 5px;\n  transition: opacity 0.2s ease-in-out;\n  opacity: ",";\n  cursor: pointer;\n  background: ",";\n  &:hover {\n    opacity: 1;\n  }\n"]);return D=function(){return e},e}var G=b.a.div(D(),(function(e){return e.active?"#000":"#ddd"}),(function(e){return e.active?1:.5}),(function(e){return e.color.hex})),P=function(e){var t=e.insertId,n=I.useContainer(),i=n.activeBox,c=n.updateBox,s=n.activeBoxId,a=n.repositionInsert,o=i.inserts[t],l=function(e){c(s,Object(v.a)(i,(function(n){return null==e?delete n.inserts[t]:n.inserts[t]=e,n})))};return Object(r.jsxs)(R.a,{onSubmit:function(e){e.preventDefault()},children:[Object(r.jsx)(F.a,{children:Object(r.jsx)("label",{children:"Label"})}),Object(r.jsx)(J.a,{type:"text",onChange:function(e){e.target.value.length>24||l(Object(v.a)(o,(function(t){return t.label=e.target.value,t})))},value:o.label}),Object(r.jsxs)(F.a,{children:[Object(r.jsx)("label",{children:"Color"}),y.map((function(e){return Object(r.jsx)(G,{active:e===o.color,onClick:function(){!function(e){l(Object(v.a)(o,(function(t){return t.color=e,t})))}(e)},color:e})}))]}),Object(r.jsxs)(F.a,{children:[Object(r.jsx)(C.a,{onClick:function(){return l()},children:"Remove"}),Object(r.jsx)(C.a,{onClick:function(){a(t)},children:"Move"})]})]})},H=function(){var e=I.useContainer(),t=e.activeBox,n=e.selectInsert;return t?Object(r.jsx)(r.Fragment,{children:Object.keys(t.inserts).map((function(e){var i=t.inserts[e],c=t.activeInsert===e;return Object(r.jsxs)(U.a,{fluid:!0,onClick:c?null:function(){n(e)},children:[Object(r.jsx)(U.a.Content,{children:Object(r.jsxs)(U.a.Header,{children:[null===i||void 0===i?void 0:i.sizeX,"x",null===i||void 0===i?void 0:i.sizeY," - ",null===i||void 0===i?void 0:i.label,Object(r.jsx)("br",{}),Object(r.jsx)("small",{children:null===i||void 0===i?void 0:i.color.ral})]})}),c?Object(r.jsx)(U.a.Content,{children:Object(r.jsx)(P,{insertId:e})}):null]})}))}):Object(r.jsx)("div",{})},_=n(192),q=function(){var e=I.useContainer(),t=e.createBox,n=e.showAddBox,c=e.setShowAddBox,s=Object(i.useState)({sizeX:5,sizeY:3}),a=Object(f.a)(s,2),o=a[0],l=a[1];return Object(r.jsxs)(_.a,{onClose:function(){return c(!1)},onOpen:function(){return c(!0)},open:n,children:[Object(r.jsx)(_.a.Header,{children:"Select a box size"}),Object(r.jsx)(_.a.Content,{children:Object(r.jsxs)(_.a.Description,{children:[Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(X,{box:Object(p.a)(Object(p.a)({},o),{},{inserts:[]}),scale:1})}),Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:[{sizeX:5,sizeY:3},{sizeX:6,sizeY:5},{sizeX:7,sizeY:5},{sizeX:8,sizeY:6},{sizeX:11,sizeY:7}].map((function(e){return Object(r.jsxs)(C.a,{onClick:function(){return l(e)},active:e.sizeX===o.sizeX&&e.sizeY===o.sizeY,children:[e.sizeX,"x",e.sizeY]})}))})]})}),Object(r.jsxs)(_.a.Actions,{children:[Object(r.jsx)(C.a,{color:"black",onClick:function(){return c(!1)},children:"Cancel"}),Object(r.jsx)(C.a,{color:"primary",onClick:function(){return t(o)},children:"Create"})]})]})};function K(){var e=Object(d.a)(["\n  width: 20vw;\n\n  background: #fff;\n  box-shadow: 0 0 32px rgba(0, 0, 0, 0.2);\n  padding: 4rem;\n  border-radius: 16px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  display: flex;\n  transition: 0.2s ease-in-out;\n  transform: translateX(-50%)\n    translateY(",");\n"]);return K=function(){return e},e}var Q=b.a.div(K(),(function(e){return e.active?"10%":"120%"}));function V(){var e=Object(d.a)(["\n  height: ","rem;\n  width: ","rem;\n  background: ",";\n  border-radius: 4px;\n"]);return V=function(){return e},e}var W=b.a.div(V(),(function(e){return 2*e.sizeY}),(function(e){return 2*e.sizeX}),(function(e){var t;return null===(t=e.color)||void 0===t?void 0:t.hex})),Z=function(){var e,t=I.useContainer(),n=t.repositioningInsert,i=t.cancelReposition,c=null!==(e=null===n||void 0===n?void 0:n.label)&&void 0!==e?e:"";return console.log(n),Object(r.jsxs)(Q,{active:null!=n,children:[Object(r.jsxs)("div",{style:{flex:1},children:[Object(r.jsx)("b",{children:"Moving"}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:0===c.length?"No label":c}),Object(r.jsx)("br",{}),Object(r.jsxs)("span",{children:["Original size: ",null===n||void 0===n?void 0:n.sizeX,"x",null===n||void 0===n?void 0:n.sizeY]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(C.a,{onClick:function(){return i()},children:"Cancel"})]}),Object(r.jsx)(W,Object(p.a)({},n))]})},$=function(){var e=Object(i.useState)(3),t=Object(f.a)(e,2),n=t[0],c=(t[1],I.useContainer()),s=c.activeBox,a=c.updateBox,o=c.activeBoxId,l=c.clearInserts;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{}),Object(r.jsxs)(T,{children:[Object(r.jsx)(q,{}),Object(r.jsxs)("div",{className:"editor",children:[null!=s?Object(r.jsx)(X,{updateBox:function(e){return a(s,e)},active:!0,scale:n,boxId:o,box:s}):null,Object(r.jsx)(Z,{})]}),Object(r.jsxs)("div",{className:"inspector",children:[Object(r.jsxs)("h2",{children:[null===s||void 0===s?void 0:s.sizeX,"x",null===s||void 0===s?void 0:s.sizeY]}),Object(r.jsx)(C.a,{onClick:l,children:"Clear inserts"}),Object(r.jsx)("h3",{children:"Inserts"}),Object(r.jsx)(H,{})]})]})]})};function ee(){var e=Object(d.a)(["\n  padding: 5rem 10vw;\n\n  .pricing-table {\n    border: 1px solid #ddd;\n    margin: 1rem 0;\n    padding: 1rem;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  }\n\n  table {\n    overflow: hidden;\n    thead {\n      tr {\n        border-bottom: 2px solid #ddd;\n      }\n    }\n    border-collapse: collapse;\n    tr {\n      border-bottom: 1px solid #ddd;\n    }\n    td {\n      padding: 0.5rem;\n    }\n    width: 100%;\n    th {\n      text-align: left;\n    }\n  }\n"]);return ee=function(){return e},e}var te=b.a.main(ee()),ne=function(){var e=I.useContainer().boxes,t=Object(i.useState)({}),n=Object(f.a)(t,2),c=n[0],s=n[1],a=Object(i.useState)({}),o=Object(f.a)(a,2),l=o[0],u=o[1];return Object(i.useEffect)((function(){var t={},n={};Object.keys(e).forEach((function(r){var i=e[r],c=i.sizeX+"x"+i.sizeY;null==n[c]?n[c]=Object(p.a)({count:1},i):n[c].count++,u(n),Object.keys(i.inserts).map((function(e){return i.inserts[e]})).sort((function(e,t){return Math.min(e.sizeY,e.sizeX)-Math.min(t.sizeY,t.sizeX)})).sort((function(e,t){return Math.max(e.sizeY,e.sizeX)-Math.max(t.sizeY,t.sizeX)})).forEach((function(e){var n=Math.min(e.sizeY,e.sizeX)+"x"+Math.max(e.sizeY,e.sizeX)+":"+e.color.ral;null==t[n]?t[n]={count:1,sizeA:Math.min(e.sizeY,e.sizeX),color:e.color,sizeB:Math.max(e.sizeY,e.sizeX)}:t[n].count++})),s(t)}))}),[e]),Object(r.jsxs)(te,{children:[Object(r.jsxs)("div",{className:"pricing-table",children:[Object(r.jsx)("h2",{children:"Boxes"}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Count"}),Object(r.jsx)("th",{children:"Size"}),Object(r.jsx)("th",{children:"Article NR"})]})}),Object(r.jsx)("tbody",{children:Object.keys(l).map((function(e){var t=l[e];return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.count}),Object(r.jsx)("td",{children:e}),Object(r.jsx)("td",{children:z[e]})]})}))})]})]}),Object(r.jsxs)("div",{className:"pricing-table",children:[Object(r.jsx)("h2",{children:"Inserts"}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Count"}),Object(r.jsx)("th",{children:"Color"}),Object(r.jsx)("th",{children:"Size"}),Object(r.jsx)("th",{children:"Article NR"})]})}),Object(r.jsx)("tbody",{children:Object.keys(c).map((function(e){var t=c[e];return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.count}),Object(r.jsx)("td",{children:t.color.ral.toUpperCase()}),Object(r.jsxs)("td",{children:[t.sizeA,"x",t.sizeB]}),Object(r.jsxs)("td",{children:["SB E ",t.sizeA,t.sizeB," "]})]})}))})]})]})]})},re=n(189),ie=n(94),ce=function(){return Object(r.jsxs)(re.a,{children:[Object(r.jsx)("h1",{children:"Boxomat"}),Object(r.jsx)("a",{href:"",children:"Github"}),Object(r.jsx)("p",{children:"Boxomat helps you plan assortments. "}),Object(r.jsx)("br",{}),Object(r.jsx)("h2",{children:"Licensing"}),Object(r.jsx)("p",{children:"Boxomat is licensed under the MIT license. "}),Object(r.jsx)("h2",{children:"Credits"}),Object(r.jsx)("ul",{children:Object.keys(ie).map((function(e,t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("a",{target:"_bank",rel:"noreferrer",href:ie[e].repository,children:e})," ","\xb7 License:"," ",Object(r.jsx)("a",{href:ie[e].licenseUrl,children:ie[e].licenses})]},t)}))})]})},se=function(e){var t=e.path,n=e.children,i=e.exact,c=Object(o.g)({path:t,exact:i}),s=Object(o.f)();return Object(r.jsx)(u.a.Item,{onClick:function(){return s.push(t)},active:c,children:n})};var ae=function(){return Object(r.jsx)(x,{children:Object(r.jsx)(I.Provider,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsxs)(u.a,{inverted:!0,fixed:"top",children:[Object(r.jsx)(u.a.Item,{header:!0,children:"Boxomat"}),Object(r.jsx)(se,{path:"/",exact:!0,children:"Editor"}),Object(r.jsx)(se,{path:"/shopping-list",children:"Shopping List"}),Object(r.jsx)(se,{path:"/about",children:"About"})]}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/",exact:!0,children:Object(r.jsx)($,{})}),Object(r.jsx)(o.a,{path:"/shopping-list",children:Object(r.jsx)(ne,{})}),Object(r.jsx)(o.a,{path:"/about",children:Object(r.jsx)(ce,{})})]})]})})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),c(e),s(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ae,{})}),document.getElementById("root")),oe()},94:function(e){e.exports=JSON.parse('{"@testing-library/jest-dom@5.11.8":{"licenses":"MIT","repository":"https://github.com/testing-library/jest-dom","licenseUrl":"https://github.com/testing-library/jest-dom/raw/master/LICENSE","parents":"box-planner"},"@testing-library/react@11.2.3":{"licenses":"MIT","repository":"https://github.com/testing-library/react-testing-library","licenseUrl":"https://github.com/testing-library/react-testing-library/raw/master/LICENSE","parents":"box-planner"},"@testing-library/user-event@12.6.0":{"licenses":"MIT","repository":"https://github.com/testing-library/user-event","licenseUrl":"https://github.com/testing-library/user-event/raw/master/LICENSE","parents":"box-planner"},"immer@8.0.0":{"licenses":"MIT","repository":"https://github.com/immerjs/immer","licenseUrl":"https://github.com/immerjs/immer/raw/master/LICENSE","parents":"box-planner"},"npm-license-crawler@0.2.1":{"licenses":"BSD-3-Clause","repository":"http://github.com/mwittig/npm-license-crawler","licenseUrl":"http://github.com/mwittig/npm-license-crawler/raw/master/LICENSE","parents":"box-planner"},"react-dnd@11.1.3":{"licenses":"MIT","repository":"https://github.com/react-dnd/react-dnd","licenseUrl":"https://github.com/react-dnd/react-dnd/raw/master/LICENSE","parents":"box-planner"},"react-dom@17.0.1":{"licenses":"MIT","repository":"https://github.com/facebook/react","licenseUrl":"https://github.com/facebook/react/raw/master/LICENSE","parents":"box-planner"},"react-router-dom@5.2.0":{"licenses":"MIT","repository":"https://github.com/ReactTraining/react-router","licenseUrl":"https://github.com/ReactTraining/react-router/raw/master/LICENSE","parents":"box-planner"},"react-router@5.2.0":{"licenses":"MIT","repository":"https://github.com/ReactTraining/react-router","licenseUrl":"https://github.com/ReactTraining/react-router/raw/master/LICENSE","parents":"box-planner"},"react-scripts@4.0.1":{"licenses":"MIT","repository":"https://github.com/facebook/create-react-app","licenseUrl":"https://github.com/facebook/create-react-app/raw/master/LICENSE","parents":"box-planner"},"react@17.0.1":{"licenses":"MIT","repository":"https://github.com/facebook/react","licenseUrl":"https://github.com/facebook/react/raw/master/LICENSE","parents":"box-planner"},"semantic-ui-css@2.4.1":{"licenses":"MIT","repository":"https://github.com/Semantic-Org/Semantic-UI-CSS","licenseUrl":"https://github.com/Semantic-Org/Semantic-UI-CSS/raw/master/LICENSE","parents":"box-planner"},"semantic-ui-react@2.0.2":{"licenses":"MIT","repository":"git+ssh://github.com/Semantic-Org/Semantic-UI-React","licenseUrl":"git+ssh://github.com/Semantic-Org/Semantic-UI-React/raw/master/LICENSE.md","parents":"box-planner"},"styled-components@5.2.1":{"licenses":"MIT","repository":"https://github.com/styled-components/styled-components","licenseUrl":"https://github.com/styled-components/styled-components","parents":"box-planner"},"unstated-next@1.1.0":{"licenses":"MIT","parents":"box-planner"},"uuid@8.3.2":{"licenses":"MIT","repository":"https://github.com/uuidjs/uuid","licenseUrl":"https://github.com/uuidjs/uuid/raw/master/LICENSE.md","parents":"box-planner"},"web-vitals@0.2.4":{"licenses":"Apache-2.0","repository":"https://github.com/GoogleChrome/web-vitals","licenseUrl":"https://github.com/GoogleChrome/web-vitals/raw/master/LICENSE","parents":"box-planner"}}')}},[[174,1,2]]]);
//# sourceMappingURL=main.ff56babc.chunk.js.map