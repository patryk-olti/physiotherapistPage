(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports={container:"styles_container__3ZmPb",content__flexColumn:"styles_content__flexColumn__2shlw",content__flexColumnStart:"styles_content__flexColumnStart__2yxw_",content__flexRow:"styles_content__flexRow__2cgXL",content:"styles_content__Oxthe",title:"styles_title__ZymLy",textArea:"styles_textArea__zR5y1",imageBox:"styles_imageBox__1D_zP",icon:"styles_icon__1nV2u",iconLarge:"styles_iconLarge__J0GD3",imgMedium:"styles_imgMedium__3VzXV",footer:"styles_footer__lTV_f"}},,function(e,a,t){e.exports={container__Anim:"customs_container__Anim__30hHb",animation__box:"customs_animation__box__EY-1W",animation__content:"customs_animation__content__2lkxa",animation__inner:"customs_animation__inner__GF9j9",animation__square:"customs_animation__square__RsVIj",animation__text:"customs_animation__text__B1g7S",animation__button:"customs_animation__button__1pOrq",animation__contentBackground:"customs_animation__contentBackground__tJuWJ",animation__image:"customs_animation__image__1WMEp",menu__container:"customs_menu__container__3ugGQ",menu__tile:"customs_menu__tile__j5m51",tile:"customs_tile__3rPJA"}},,,,,function(e,a,t){e.exports=t.p+"static/media/kamienie.153b1056.jpg"},,,,function(e,a,t){e.exports=t.p+"static/media/person_background.8e8d49e3.jpg"},function(e,a,t){e.exports=t.p+"static/media/salon.0c7f5272.jpg"},,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(11),r=t.n(o),s=(t(20),t(14)),l=t(4),c=t(12),m=t.n(c),u=t(5),d=t(7),_=t(28),p=t(3),h=t.n(p),f=function(e){var a=e.scrollTarget;l.a.registerPlugin(_.a);return i.a.createElement("button",{className:h.a.menu__tile,onClick:function(){return l.a.to(window,{duration:1,ease:"power2",scrollTo:"#".concat(a)})}}," ")},g=[{id:1,name:"home"},{id:2,name:"offerts"},{id:3,name:"contact"}],y=function(e){var a=e.handleRef;return i.a.createElement("div",{className:h.a.menu__container,ref:a},g.map(function(e){return i.a.createElement(f,{key:e.id,scrollTarget:e.name}," ")}))},E=t(1),x=t.n(E),v=function(){var e=Object(n.useRef)(),a=l.a.timeline();Object(n.useEffect)(function(){a.fromTo("#title",{alpha:0,x:"+=300"},{alpha:1,x:0,duration:2}).fromTo("#text",{alpha:0,y:"+=100"},{alpha:1,y:0,duration:1,delay:"-1"}).fromTo("#img",{alpha:0,x:"+=100"},{alpha:1,x:0,duration:1,delay:"-0.5"}).fromTo("#icon1",{alpha:0,y:"+=10"},{alpha:1,y:0,duration:.5,delay:"-0.25"}).fromTo("#icon2",{alpha:0,y:"+=10"},{alpha:1,y:0,duration:.5,delay:"-0.25"}).fromTo("#icon3",{alpha:0,y:"+=10"},{alpha:1,y:0,duration:.5,delay:"-0.25"}).fromTo(e.current,{alpha:0,x:"-=5"},{alpha:1,x:0,duration:.5,delay:"-0.25"})});return i.a.createElement("div",{className:x.a.container,id:"home"},i.a.createElement("div",{className:x.a.content__flexColumn},i.a.createElement("h1",{className:x.a.title,id:"title"}," Studio Masa\u017cu - Wika "),i.a.createElement("div",{className:x.a.content__flexColumnStart},i.a.createElement("div",{className:x.a.content__flexRow},i.a.createElement("section",{className:x.a.textArea,id:"text"},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")),i.a.createElement("div",{className:x.a.content__flexRow},i.a.createElement("a",{href:"#",className:x.a.icon,id:"icon1"}," ",i.a.createElement(u.a,{icon:d.b})," "),i.a.createElement("a",{href:"#",className:x.a.icon,id:"icon2"}," ",i.a.createElement(u.a,{icon:d.a})," "),i.a.createElement("a",{href:"#",className:x.a.icon,id:"icon3"}," ",i.a.createElement(u.a,{icon:d.c})," ")))),i.a.createElement("div",{className:x.a.imageBox},i.a.createElement("img",{src:m.a,alt:"person",id:"img"})),i.a.createElement(y,{handleRef:e}))},b=t(6),N=t(8),k=t.n(N),w=function(){var e=Object(n.useRef)();return l.a.registerPlugin(b.ScrollTrigger),Object(n.useEffect)(function(){l.a.fromTo(e.current,{y:"+=100",alpha:0},{y:0,alpha:1,duration:1.5,scrollTrigger:{trigger:"#offerts",start:"top 40%",end:"top top",scrub:1}})},[]),i.a.createElement("div",{className:x.a.container,id:"offerts"},i.a.createElement("div",{className:x.a.content__flexColumn,ref:e},i.a.createElement("div",{className:x.a.content__flexColumn},i.a.createElement("h1",null," Technika Nr. 1 "),i.a.createElement("div",{className:x.a.content},i.a.createElement("section",{className:x.a.textArea},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),i.a.createElement("section",{className:x.a.textArea},i.a.createElement("img",{src:k.a,alt:"img",className:x.a.imgMedium})))),i.a.createElement("div",{className:x.a.content__flexColumn},i.a.createElement("h1",null," Technika Nr. 2 "),i.a.createElement("div",{className:x.a.content},i.a.createElement("section",{className:x.a.textArea},i.a.createElement("img",{src:k.a,alt:"img",className:x.a.imgMedium})),i.a.createElement("section",{className:x.a.textArea},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))),i.a.createElement("div",{className:x.a.content__flexColumn},i.a.createElement("h1",null," Technika Nr. 3 "),i.a.createElement("div",{className:x.a.content},i.a.createElement("section",{className:x.a.textArea},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),i.a.createElement("section",{className:x.a.textArea},i.a.createElement("img",{src:k.a,alt:"img",className:x.a.imgMedium}))))))},T=t(9),L=function(){var e=Object(n.useRef)();return l.a.registerPlugin(b.ScrollTrigger),Object(n.useEffect)(function(){l.a.fromTo(e.current,{y:"+=100",alpha:0},{y:0,alpha:1,duration:1.5,scrollTrigger:{trigger:"#contact",start:"top 40%",end:"top top",scrub:1}})},[]),i.a.createElement("div",{className:x.a.container,id:"contact"},i.a.createElement("div",{className:x.a.content__flexColumn,ref:e},i.a.createElement("div",{className:x.a.content},i.a.createElement("div",{className:h.a.tile},i.a.createElement("a",{href:"#",className:x.a.iconLarge}," ",i.a.createElement(u.a,{icon:T.b})," "),i.a.createElement("h1",null," Wroc\u0142aw "),i.a.createElement("h2",null," ul. Najnowsza 35/2 ")),i.a.createElement("div",{className:h.a.tile},i.a.createElement("a",{href:"#",className:x.a.iconLarge}," ",i.a.createElement(u.a,{icon:T.c})," "),i.a.createElement("h1",null," telefon "),i.a.createElement("h2",null," 123-456-789 ")),i.a.createElement("div",{className:h.a.tile},i.a.createElement("a",{href:"#",className:x.a.iconLarge}," ",i.a.createElement(u.a,{icon:T.a})," "),i.a.createElement("h1",null," e-mail "),i.a.createElement("h2",null," przyklad@gmail.com ")))))},I=function(){return i.a.createElement("div",{className:x.a.footer}," 2022 \xa9 created for wika ")},A=t(13),j=t.n(A),C=function(e){var a=e.handleClick,t=l.a.timeline();return Object(n.useEffect)(function(){t.fromTo("#box1",{y:"-=100%"},{y:0,duration:1}).fromTo("#box2",{y:"+=100%"},{y:0,duration:1,delay:"-0.5"}).fromTo("#box3",{y:"-=100%"},{y:0,duration:1,delay:"-0.5"}).fromTo("#text__content",{alpha:0},{alpha:1,duration:1,delay:"0.5"}).fromTo("#square",{alpha:1},{alpha:0,duration:.2}).fromTo("#square",{alpha:0},{alpha:1,duration:.2}).fromTo("#square",{alpha:1},{alpha:0,duration:.2}).fromTo("#square",{alpha:0},{alpha:1,duration:.2}).fromTo("#square",{alpha:1},{alpha:0,duration:.2}).fromTo("#square",{alpha:0},{alpha:1,duration:.2}).fromTo("#text__slide",{x:"+=95%"},{x:0,duration:1}).fromTo("#button",{alpha:0},{alpha:1,duration:1,delay:1}).fromTo("#background",{alpha:0},{alpha:1,duration:1}).fromTo("#image",{alpha:0},{alpha:1,duration:1})},[]),i.a.createElement("div",{className:x.a.container,id:"container"},i.a.createElement("div",{className:h.a.container__Anim},i.a.createElement("div",{className:h.a.animation__box,id:"box1"}," "),i.a.createElement("div",{className:h.a.animation__box,id:"box2"}," "),i.a.createElement("div",{className:h.a.animation__box,id:"box3"}," "),i.a.createElement("div",{className:h.a.animation__content,id:"text__content"},i.a.createElement("div",{className:h.a.animation__inner,id:"text__slide"},i.a.createElement("div",{className:h.a.animation__square,id:"square"}," "),i.a.createElement("span",{className:h.a.animation__text}," wika - studio ")),i.a.createElement("button",{className:h.a.animation__button,id:"button",onMouseEnter:function(){return t.to("#button",{y:"+=5",duration:.5})},onMouseLeave:function(){return t.to("#button",{y:0,duration:.5})},onClick:function(){t.to("#text__content",{alpha:0,duration:.5}).to("#container",{alpha:0,duration:2}),setTimeout(function(){return a(!0)},3e3)}}," wejd\u017a "),i.a.createElement("div",{className:h.a.animation__contentBackground,id:"background"})),i.a.createElement("img",{src:j.a,alt:"img",className:h.a.animation__image,id:"image"})))};var M=function(){var e=Object(n.useState)(!0),a=Object(s.a)(e,2),t=a[0],o=a[1];return i.a.createElement("div",{className:"App"},t?i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(w,null),i.a.createElement(L,null),i.a.createElement(I,null)):i.a.createElement(C,{handleClick:o}))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M,null)),document.getElementById("root"))}],[[15,2,1]]]);
//# sourceMappingURL=main.4eb9b561.chunk.js.map