(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(157),i=a(158),c=a(179),s=a.n(c),l=a(155);a(180);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"About",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"main-container about"},r.a.createElement("div",{className:"main-contents"},r.a.createElement("img",{src:s.a,alt:"Stone Family"}),r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,"Hi. I’m Steve Stone. Father of three boys, husband of the most incredible woman in the world, and Christ-follower. I'm passionate about coffee, design, youth ministry, and making things."),r.a.createElement("p",null,"I started out at"," ",r.a.createElement("a",{href:"https://www.centralonline.tv/"},"Central Christian Church")," ","in Las Vegas doing video production while in attending UNLV's film school. Then God called me out to Louisville, Kentucky to work at"," ",r.a.createElement("a",{href:"https://www.southeastchristian.org/home"},"Southeast Christian Church"),". My great friend Dave Harris and I started Digital Stache and created motion backgrounds and a few app-based games (Spin That Wheel, Scorekeep, Ready, Set Go). We also had a podcast for a few years called ",r.a.createElement("a",{href:"https://churchtechtalk.com"},"Church Tech Talk"),", ran a site called Stuff I Can Use (formerly Vine Resources), and put on a free conference for church tech folks called Gurus."),r.a.createElement("p",null,"Now I work at"," ",r.a.createElement("a",{href:"https://www.downloadyouthministry.com/"},"Download Youth Ministry")," ","making apps that help youth workers, like"," ",r.a.createElement("a",{href:"https://sidekick.tv"},"Sidekick"),".")),r.a.createElement(i.a,null)))}},151:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(152);var l=r.a.createContext({}),m=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Steveostudios"}}}}},155:function(e,t,a){"use strict";var n=a(156),r=a(0),o=a.n(r),i=a(4),c=a.n(i),s=a(165),l=a.n(s),m=a(151);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(m.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var d="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Steveostudios",description:"A little about Steve Stone",author:"@steveostudios"}}}}},157:function(e,t,a){"use strict";var n=a(154),r=a(0),o=a.n(r),i=a(4),c=a.n(i),s=a(151),l=a(160),m=(a(161),function(e){e.siteTitle;return o.a.createElement("div",{className:"sidebar"},o.a.createElement("div",{className:"about"},o.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),o.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},o.a.createElement("span",{className:"navicon"})),o.a.createElement("div",{className:"nav nav-full"},o.a.createElement(s.a,{to:"/"},o.a.createElement(l.a,{icon:["fas","home"]})),o.a.createElement(s.a,{to:"/about/"},o.a.createElement(l.a,{icon:["fas","user-circle"]})),o.a.createElement(s.a,{to:"/books/"},o.a.createElement(l.a,{icon:["fas","book-open"]})),o.a.createElement(s.a,{to:"/blog/"},o.a.createElement(l.a,{icon:["fas","rss"]}))),o.a.createElement("h1",null,o.a.createElement(s.a,{to:"/"},o.a.createElement("span",null,"Hi."),o.a.createElement("span",null,"I'm Steve.")),o.a.createElement("div",{className:"nav nav-mobile"},o.a.createElement(s.a,{to:"/"},o.a.createElement(l.a,{icon:["fas","home"]})),o.a.createElement(s.a,{to:"/about/"},o.a.createElement(l.a,{icon:["fas","user-circle"]})),o.a.createElement(s.a,{to:"/books/"},o.a.createElement(l.a,{icon:["fas","book-open"]})),o.a.createElement(s.a,{to:"/blog/"},o.a.createElement(l.a,{icon:["fas","rss"]})))),o.a.createElement("div",{className:"meta"},o.a.createElement("h2",null,o.a.createElement("span",null,"Developer."),o.a.createElement("span",null,"Designer."),o.a.createElement("span",null,"Youth Worker."),o.a.createElement("span",null,"Nerd.")),o.a.createElement("div",{className:"details"},o.a.createElement("div",{className:"social"},o.a.createElement("a",{className:"twitter",href:"https://twitter.com/steveostudios"},o.a.createElement(l.a,{icon:["fab","twitter"]})),o.a.createElement("a",{className:"github",href:"https://github.com/steveostudios"},o.a.createElement(l.a,{icon:["fab","github"]})),o.a.createElement("a",{className:"dribbble",href:"https://dribbble.com/steveostudios"},o.a.createElement(l.a,{icon:["fab","dribbble"]})),o.a.createElement("a",{className:"vimeo",href:"https://vimeo.com/steveostudios"},o.a.createElement(l.a,{icon:["fab","vimeo-v"]})))))))});m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var u=m,d=(a(162),a(159)),p=a(163),h=a(164);d.b.add(p.b,p.a,p.c,p.e,p.d,h.a,h.d,h.b,h.c);var f=function(e){var t=e.children;return o.a.createElement(s.b,{query:"755544856",render:function(e){return o.a.createElement("div",null,o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",null," ",t," "))},data:n})};f.propTypes={children:c.a.node.isRequired};t.a=f},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(166);t.a=function(){return r.a.createElement("footer",null,"©",(new Date).getFullYear()," steveostudios")}},179:function(e,t,a){e.exports=a.p+"static/family-255469e4972a919cf4787a9bfc0f9569.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-index-js-df46f1fb5e35a7f8f53e.js.map