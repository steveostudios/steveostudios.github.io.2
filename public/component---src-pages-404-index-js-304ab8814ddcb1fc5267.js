(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(172),i=a(170);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},166:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(5),i=a.n(c),s=a(39),l=a.n(s);a.d(t,"a",function(){return l.a});a(167);var o=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&c(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||c,staticQueryData:e})})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},168:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),s=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Steveostudios"}}}}},170:function(e,t,a){"use strict";var n=a(171),r=a(0),c=a.n(r),i=a(5),s=a.n(i),l=a(180),o=a.n(l),u=a(166);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title;return c.a.createElement(u.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m;var d="1025518380"},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Steveostudios",description:"A little about Steve Stone",author:"@steveostudios"}}}}},172:function(e,t,a){"use strict";var n=a(169),r=a(0),c=a.n(r),i=a(5),s=a.n(i),l=a(166),o=a(175),u=(a(176),function(e){e.siteTitle;return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"about"},c.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),c.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},c.a.createElement("span",{className:"navicon"})),c.a.createElement("div",{className:"nav nav-full"},c.a.createElement(l.a,{to:"/"},c.a.createElement(o.a,{icon:["fas","home"]})),c.a.createElement(l.a,{to:"/about/"},c.a.createElement(o.a,{icon:["fas","user-circle"]})),c.a.createElement(l.a,{to:"/books/"},c.a.createElement(o.a,{icon:["fas","book-open"]})),c.a.createElement(l.a,{to:"/blog/"},c.a.createElement(o.a,{icon:["fas","rss"]}))),c.a.createElement("h1",null,c.a.createElement(l.a,{to:"/"},c.a.createElement("span",null,"Hi."),c.a.createElement("span",null,"I'm Steve.")),c.a.createElement("div",{className:"nav nav-mobile"},c.a.createElement(l.a,{to:"/"},c.a.createElement(o.a,{icon:["fas","home"]})),c.a.createElement(l.a,{to:"/about/"},c.a.createElement(o.a,{icon:["fas","user-circle"]})),c.a.createElement(l.a,{to:"/books/"},c.a.createElement(o.a,{icon:["fas","book-open"]})),c.a.createElement(l.a,{to:"/blog/"},c.a.createElement(o.a,{icon:["fas","rss"]})))),c.a.createElement("div",{className:"meta"},c.a.createElement("h2",null,c.a.createElement("span",null,"Developer."),c.a.createElement("span",null,"Designer."),c.a.createElement("span",null,"Youth Worker."),c.a.createElement("span",null,"Nerd.")),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"social"},c.a.createElement("a",{className:"twitter",href:"https://twitter.com/steveostudios"},c.a.createElement(o.a,{icon:["fab","twitter"]})),c.a.createElement("a",{className:"github",href:"https://github.com/steveostudios"},c.a.createElement(o.a,{icon:["fab","github"]})),c.a.createElement("a",{className:"dribbble",href:"https://dribbble.com/steveostudios"},c.a.createElement(o.a,{icon:["fab","dribbble"]})),c.a.createElement("a",{className:"vimeo",href:"https://vimeo.com/steveostudios"},c.a.createElement(o.a,{icon:["fab","vimeo-v"]})))))))});u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var m=u,d=(a(177),a(174)),p=a(178),E=a(179);d.b.add(p.b,p.a,p.c,p.e,p.d,E.a,E.d,E.b,E.c);var f=function(e){var t=e.children;return c.a.createElement(l.b,{query:"755544856",render:function(e){return c.a.createElement("div",null,c.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("main",null," ",t," "))},data:n})};f.propTypes={children:s.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-index-js-304ab8814ddcb1fc5267.js.map