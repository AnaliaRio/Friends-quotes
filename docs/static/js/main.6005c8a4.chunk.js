(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(1),c=a(9),r=a.n(c),s=a(10),n=a(5),l=a(7),i=a(3),h=(a(15),a(8)),u=a(0);var d=function(){console.log(h);var e=Object(o.useState)(h),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(o.useState)(""),d=Object(i.a)(r,2),j=d[0],b=d[1],m=Object(o.useState)(""),p=Object(i.a)(m,2),O=p[0],w=p[1],f=Object(o.useState)({quote:"",character:""}),y=Object(i.a)(f,2),q=y[0],x=y[1],v=function(e){x(Object(l.a)(Object(l.a)({},q),{},Object(n.a)({},e.target.id,e.target.value)))},_=a.filter((function(e){return e.quote.toLowerCase().includes(j.toLowerCase())||e.character.toLowerCase().includes(j.toLowerCase())})).filter((function(e){return e.quote.toLowerCase().includes(O.toLowerCase())||e.character.toLowerCase().includes(O.toLowerCase())})).map((function(e,t){return Object(u.jsx)("li",{className:"quote__item",children:Object(u.jsxs)("p",{className:"quote__name",children:[e.quote," - ",e.character]})},t)}));return Object(u.jsxs)("div",{className:"page",children:[Object(u.jsxs)("header",{className:"header",children:[Object(u.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/watch?v=Xs-HbHCcK58",children:["  ",Object(u.jsx)("h1",{className:"header__title",children:"Frases de Friends \ud83e\udd9e"})]}),Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{htmlFor:"",children:"Filtrar por frase"}),Object(u.jsx)("input",{className:"header__search",autoComplete:"off",name:"search",type:"search",placeholder:"Filtrar por frase",onChange:function(e){b(e.target.value)},value:j})]}),Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{htmlFor:"characters",children:"Filtrar por personaje"}),Object(u.jsxs)("select",{name:"characters",id:"characters",className:"header__search",onChange:function(e){w(e.target.value)},value:O,children:[Object(u.jsx)("option",{value:"Todos",children:"Todos"}),Object(u.jsx)("option",{value:"Ross",children:"Ross"}),Object(u.jsx)("option",{value:"Monica",children:"Monica"}),Object(u.jsx)("option",{value:"Joey",children:"Joey"}),Object(u.jsx)("option",{value:"Phoebe",children:"Phoebe"}),Object(u.jsx)("option",{value:"Chandler",children:"Chandler"}),Object(u.jsx)("option",{value:"Rachel",children:"Rachel"})]})]})]}),Object(u.jsxs)("main",{children:[Object(u.jsx)("ul",{className:"quote__list",children:_}),Object(u.jsxs)("form",{className:"new-quote__form",children:[Object(u.jsx)("h2",{className:"new-quote__title",children:"A\xf1ade una nueva frase"}),Object(u.jsx)("input",{className:"new-quote__input",type:"text",name:"quote",id:"quote",placeholder:"F \xb7 r \xb7 a \xb7 s \xb7 e",onChange:v,value:q.quote}),Object(u.jsx)("input",{className:"new-quote__input",type:"text",name:"character",id:"character",placeholder:"Personaje",onChange:v,value:q.character}),Object(u.jsx)("input",{className:"new-quote__btn",type:"submit",value:"A\xf1adir",onClick:function(e){e.preventDefault(),c([].concat(Object(s.a)(a),[q])),x({quote:"",character:""})}})]})]})]})};r.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"quote":"Pivot! Pivot! Pivot! Pivot! Pivot!","character":"Ross"},{"quote":"Joey doesn\'t share food!","character":"Joey"},{"quote":"But they don\'t know that we know they know we know!","character":"Phoebe"},{"quote":"Phoebe. That\'s P, as in Phoebe, H as in hoebe, O as in oebe, E as in ebe, B as in bebe, and E as in \'Ello there mate.","character":"Phoebe"},{"quote":"I\'m not so good with the advice. Can I interest you in a sarcastic comment?","character":"Chandler"},{"quote":"I got off the plane.","character":"Rachel"},{"quote":"How you doin?","character":"Joey"},{"quote":"We were on a break!","character":"Ross"},{"quote":"I grew up in a house with Monica, okay. If you didn\'t eat fast, you didn\'t eat.","character":"Ross"},{"quote":"Unagi.","character":"Ross"},{"quote":"Smelly cat, smelly cat, what are they feeding you? Smelly cat, smelly cat, it\'s not your fault.","character":"Phoebe"},{"quote":"Just so you know, it\'s not that common, it doesn\'t happen to every guy, and it is a big deal!","character":"Rachel"},{"quote":"Here come the meat sweats.","character":"Joey"},{"quote":"Look at me! I\'m Chandler! Could I be wearing any more clothes?!","character":"Joey"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.6005c8a4.chunk.js.map