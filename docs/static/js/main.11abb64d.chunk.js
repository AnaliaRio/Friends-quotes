(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(8),r=a.n(n),s=a(9),o=a(5),l=a(7),i=a(3),u=(a(14),function(){return fetch("https://friends-quotes-api.herokuapp.com/quotes").then((function(e){return e.json()})).then((function(e){return e}))}),h={get:function(e,t){var a=localStorage.getItem(e);return null===a?t:JSON.parse(a)},set:function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},j=a(0);var b=function(){var e=Object(c.useState)(h.get("quotes",[])),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),b=Object(i.a)(r,2),d=b[0],O=b[1],p=Object(c.useState)("all"),f=Object(i.a)(p,2),m=f[0],x=f[1],v=Object(c.useState)({quote:"",character:""}),_=Object(i.a)(v,2),g=_[0],q=_[1];Object(c.useEffect)((function(){0===a.length&&u().then((function(e){h.set("quotes",e),n(e)}))}),[]);var N=function(e){q(Object(l.a)(Object(l.a)({},g),{},Object(o.a)({},e.target.id,e.target.value)))},w=a.filter((function(e){return e.quote.toLowerCase().includes(d.toLowerCase())})).filter((function(e){return"all"===m||m===e.character})).map((function(e,t){return Object(j.jsx)("li",{className:"quote__item",children:Object(j.jsxs)("p",{className:"quote__name",children:[e.quote," - ",e.character]})},t)}));return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/watch?v=Xs-HbHCcK58",children:[" ",Object(j.jsx)("h1",{className:"header__title",children:"Frases de Friends \ud83e\udd9e"})]}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"filterQuote",children:"Filtrar por frase "}),Object(j.jsx)("input",{className:"header__search",autoComplete:"off",name:"search",type:"search",placeholder:"Escribe una frase",onChange:function(e){O(e.target.value)},value:d})]}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"characters",children:"Filtrar por personaje "}),Object(j.jsxs)("select",{name:"characters",id:"characters",className:"header__search",onChange:function(e){x(e.target.value)},value:m,children:[Object(j.jsx)("option",{value:"all",children:"Todos"}),Object(j.jsx)("option",{value:"Ross",children:"Ross"}),Object(j.jsx)("option",{value:"Monica",children:"Monica"}),Object(j.jsx)("option",{value:"Joey",children:"Joey"}),Object(j.jsx)("option",{value:"Phoebe",children:"Phoebe"}),Object(j.jsx)("option",{value:"Chandler",children:"Chandler"}),Object(j.jsx)("option",{value:"Rachel",children:"Rachel"}),Object(j.jsx)("option",{value:"Janice",children:"Janice"})]})]})]}),Object(j.jsxs)("main",{children:[Object(j.jsx)("ul",{className:"quote__list",children:w}),Object(j.jsxs)("form",{className:"new-quote__form",children:[Object(j.jsx)("h2",{className:"new-quote__title",children:"A\xf1ade una nueva frase"}),Object(j.jsx)("input",{className:"new-quote__input",type:"text",name:"quote",id:"quote",placeholder:"F \xb7 r \xb7 a \xb7 s \xb7 e",onChange:N,value:g.quote}),Object(j.jsx)("input",{className:"new-quote__input",type:"text",name:"character",id:"character",placeholder:"Personaje",onChange:N,value:g.character}),Object(j.jsx)("input",{className:"new-quote__btn",type:"submit",value:"A\xf1adir",onClick:function(e){e.preventDefault(),n([].concat(Object(s.a)(a),[g])),q({quote:"",character:""})}})]})]})]})};r.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.11abb64d.chunk.js.map