(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/MbD":function(e,t,a){"use strict";var n=a("Tman"),o=a("q1tI"),r=a.n(o),c=a("Wbzz");a("0nhh");t.a=function(e){var t=e.additionalText,a=void 0===t?"":t,o=n.data.allSitePage.nodes.map((function(e){var t=e.path;return r.a.createElement("li",{key:t},r.a.createElement(c.Link,{to:t,getProps:function(e){return e.isCurrent?{className:"is-current-page"}:{}}},t))})),l=["other good stuff","more to see","check it out","also good","hey, look at these","nice, right? look at","more projects","more links","hey... also","more projects","additional","clicky click more","some more good stuff","like that? more here","you might also like","other projects","more from me","james also made these","I also made these","you can click these","view more","ta-da! more here","links to other stuff"],i=Math.floor(Math.random()*l.length),s=a||l[i];return r.a.createElement("nav",{className:"nav-common"},r.a.createElement("ul",null,r.a.createElement("li",null,s+":"),o))}},"0nhh":function(e,t,a){},"3SlJ":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var n=function(e,t){void 0===t&&(t=function(){}),document.querySelector(e).classList.add("fade-out"),setTimeout(t,400)},o=function(e,t){void 0===t&&(t=function(){}),document.querySelectorAll(e).forEach((function(e){e.classList.add("fade-out")})),setTimeout(t,400)}},Tman:function(e){e.exports=JSON.parse('{"data":{"allSitePage":{"nodes":[{"path":"/sixfold-symmetry"},{"path":"/selected-posters"},{"path":"/murals"},{"path":"/collages"}]}}}')},VxAK:function(e,t,a){},mIYN:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u})),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),c=a("0b+E"),l=a("3SlJ"),i=a("/MbD"),s=a("zVja");a("VxAK");function u(e){var t=e.data.allSitePage.nodes[0].context,a=t.html,u=t.title,m=t.description,d=Object(n.useState)(!1),f=d[0],p=d[1];Object(n.useEffect)((function(){c.a.pageview(window.location.pathname)}),[]);var h=function(){c.a.event({category:"ProjectClick",action:"isNavFullScreen"}),p(!f)},v=function(){return o.a.createElement("button",{className:"close-nav-button",type:"button",onClick:h},"close")};return o.a.createElement("div",{className:"project-wrapper fade-in"},o.a.createElement(s.a,{title:u}),o.a.createElement("button",{className:"project-exit shadow",type:"button",onClick:function(){c.a.event({category:"ProjectClick",action:"X"}),Object(l.b)(".project-wrapper",(function(){return Object(r.navigate)("/")}))}},"✕︎"),o.a.createElement("div",{className:"project-description"},o.a.createElement("h2",null,u),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:m}}),o.a.createElement("div",{className:"view-more-mobile"},o.a.createElement("button",{type:"button",onClick:h},"View other projects"))),o.a.createElement("hr",{className:"mobile-divider"}),o.a.createElement("div",{className:"project-content"},o.a.createElement("div",{className:"project-md-html",dangerouslySetInnerHTML:{__html:a}}),o.a.createElement("div",{className:"project-nav "+(f?"full-screen":"")},o.a.createElement(i.a,null),f&&o.a.createElement(v,null))))}var m="2950386043"}}]);
//# sourceMappingURL=component---src-templates-project-jsx-2a8e04e32ddedb48a20a.js.map