(self.webpackChunkproyecto=self.webpackChunkproyecto||[]).push([[761],{5200:function(e,a,t){"use strict";t.d(a,{Z:function(){return m}});var n=t(7294),c=t(3727),l=t(8492),r=function(e){return n.createElement("header",{id:"header-nav",className:"w-100 py-2 shadow-sm "},n.createElement("div",{className:"container d-flex flex-column align-items-center"},n.createElement("div",{className:"col-12  row mx-0 align-items-center"},n.createElement("div",{className:"col-2  col-lg-1 d-flex flex-column align-items-center justify-content-center "},n.createElement(c.rU,{to:"/"},n.createElement("img",{src:l.Z,alt:"Foto de Javier",className:"img-fluid rounded-circle"}))),n.createElement("div",{className:"col-10 col-lg-7"},n.createElement("h1",{className:"h5 mb-0"}," Psicólogo Javier Mangini "),n.createElement("p",{className:"mb-0"},n.createElement("small",null,n.createElement("strong",null,"Montevideo-Uruguay")))),n.createElement("div",{className:"col-12 col-lg-4 mt-2 mt-lg-0"},n.createElement(c.rU,{to:"/contactar"},n.createElement("div",{className:"btn btn-primary btn-lg  w-100 text-uppercase"},"Contactar"))))))},o=t(1871),s=t(1197),i=function(){return n.createElement("footer",{className:"w-100 "},n.createElement("div",{className:"w-100 py-5  bg-gray-1"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("nav",{className:"row mx-0 col-12 col-lg-12"},n.createElement("div",{className:" col-12 col-md-4 mb-3 "},n.createElement(c.rU,{className:"btn btn-outline-primary   w-100",to:"/sobre-mi"}," ","¿Quién es Javier Mangini?")),n.createElement("div",{className:" col-12 col-md-4  mb-3"},n.createElement(c.rU,{className:"btn btn-outline-primary   w-100",to:"/blog"}," ","Blog")),n.createElement("div",{className:" col-12 col-md-4  mb-3"},n.createElement(c.rU,{className:"btn btn-outline-primary   w-100",to:"/contactar"}," ","Contactar")),n.createElement("div",{className:" col-12 col-md-4  mb-3"},n.createElement("a",{className:"btn btn-outline-primary   w-100",href:s.Z.whatsapp_link}," ","Whatsapp "," ",n.createElement(o.xpo,null))),n.createElement("div",{className:" col-12 col-md-4  mb-3"},n.createElement("a",{className:"btn btn-outline-primary   w-100",href:s.Z.instagram_link}," ","Instagram "," ",n.createElement(o.Zf_,null))),n.createElement("div",{className:" col-12 col-md-4  mb-3"},n.createElement("a",{className:"btn btn-outline-primary   w-100",href:s.Z.facebook_link},"Facebook "," ",n.createElement(o.R9i,null))))))),n.createElement("div",{className:"w-100 py-3 bg-dark"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},n.createElement("div",{className:"text-center text-white mb-0"},n.createElement("small",null,"Javier Mangini psicólogo psicoanalista en Montevideo © todos los derechos reservados"," ".concat((new Date).getFullYear())," | ",n.createElement("strong",null,n.createElement("a",{href:"https://mwebs.com.uy/dise%C3%B1o-web-uruguay"},"Diseño web en Uruguay"))," hecho por por ",n.createElement("strong",null,n.createElement("a",{href:"https://mwebs.com.uy/dise%C3%B1o-web-uruguay"},"mwebs")))))))))},m=function(e){return n.createElement("div",null,n.createElement(r,null),n.createElement("div",{className:"w-100 d-flex flex-column align-items-center "},e.children),n.createElement(i,null))}},1311:function(e,a,t){"use strict";t.d(a,{Z:function(){return m}});var n=t(3038),c=t.n(n),l=t(7294),r=t(1655),o=t(3727),s=/[^0-9a-zA-ZÀ-ÿ\u00f1\u00d1]/gi,i=function(e){var a=e.blog;return l.createElement("div",{className:"col-6 col-lg-3 mb-4 px-2"},l.createElement("div",{className:"w-100 shadow h-100"},l.createElement("img",{className:"blog-card-img",src:a.url_img_portada_chica,alt:"Foto del post ".concat(a.name)}),l.createElement("div",{className:"w-100 py-4 p-3"},l.createElement("h5",{className:"card-title"},"".concat(a.name.slice(0,30)," ...")),l.createElement("p",{className:"card-text"}),l.createElement(o.rU,{className:"btn btn-primary",to:"/Publicacion/".concat(a.name.replace(s,"-"),"/").concat(a.id)},"Leer más"))))},m=function(e){var a=(0,l.useState)(!1),t=c()(a,2),n=t[0],o=t[1],s=(0,l.useState)([]),m=c()(s,2),d=m[0],u=m[1],p=(0,l.useState)(!0),E=c()(p,2),v=E[0],g=E[1],b=d.map((function(e,a){return l.createElement(i,{blog:e,key:e.id})})),f=function(){if(!v)return"";o(!0);var a=d.map((function(e){return e.id}));""!=e.evitarIds&&a.push(e.evitarIds),a=a.length>0?a.join():"";var t=e.cantidad;return fetch("https://psicologojaviermangini.com.uy/get_blogs_ids?ids=".concat(a,"&cantidad=").concat(t)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){var a=e;0===a.Data.length||!1===a.Validation?g(!1):u(d.concat(a.Data)),o(!1)})).catch((function(e){o(!1)}))};return(0,l.useEffect)((function(){f()}),[]),l.createElement("section",{className:"w-100 py-5"},l.createElement("div",{className:"container d-flex flex-column align-items-center"},e.children,l.createElement("div",{className:"row"},b),n&&l.createElement("div",{className:"w-100 mb-5 "},l.createElement(r.ZP,{count:5})),!n&&v&&l.createElement("div",{className:"row my-5"},l.createElement("div",{className:"col-12 d-lfex align-items-center flex-column"},l.createElement("button",{type:"button",onClick:f,className:"btn btn-secondary btn-lg   text-uppercase"},"Cargar más")))))}},1197:function(e,a){"use strict";a.Z={name:"Javier Mangini",email:"javiermangini@hotmail.com",cellphone:"099 843 381",whatsapp_link:"https://api.whatsapp.com/send?phone=59899843381&text=Hola!",instagram_link:"https://www.instagram.com/manginijavier/",facebook_link:"https://www.facebook.com/javierjesusmangini/"}},9761:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return N}});var n=t(3038),c=t.n(n),l=t(7294),r=t(5200),o=t(5459),s=t.n(o),i=t(1197),m=t.p+"assets/javier-mangini-radio405aa781b1c354f039de3142c3a44e93.jpg",d=function(){return l.createElement("section",{className:"w-100 py-5"},l.createElement("div",{className:"container d-flex flex-column align-items-center"},l.createElement("h1",{className:"mb-5 text-center decoracionHeaders text-wrap"},"Javier Mangini psicólogo en Montevideo"),l.createElement("div",{className:"col-12 row mx-0 align-items-center  "},l.createElement("div",{className:"col-12 col-lg-6  px-2 mb-4 mb-lg-0"},l.createElement("div",{className:"col-12  p-3 "},l.createElement("img",{className:"img-fluid shadow p-1",src:m,alt:"Foro de Javier Mangini en la radio"}))),l.createElement("div",{className:"col-12 col-lg-6 px-2"},l.createElement("p",null,"Soy licenciado en psicología, psicoanalista y ex docente de la UdelaR."," ",l.createElement("b",{className:"text-bold"},"Doy consultas privadas en el centro de Montevideo o por video llamadas.")),l.createElement("p",null,"Si sentís que algo no funciona bien en tu vida, que necesitás un cambio o estás afrontando una situación difícil, déjame acompañarte."),l.createElement("p",null,l.createElement("strong",null,"Es bueno que sepas que no utilizo una única metodología para entenderte y ayudarte"),". Como cada persona es única, la forma de ayudar también tiene que serlo."),l.createElement("p",null,"Mi principal objetivo es poder ofrecerte una terapia personalizada que se adapte a tus necesidades."),l.createElement("h3",{className:""},l.createElement(s(),{options:{strings:["¿Querés hablar conmigo?","Llamame o enviame un mensaje a mi celular ".concat(i.Z.cellphone),"".concat(i.Z.cellphone),"".concat(i.Z.cellphone)],autoStart:!0,loop:!0}}))))))},u=t(3727),p=t(8492),E=function(e){return l.createElement("div",{className:"w-100 py-5 bg-light"},l.createElement("div",{className:"container shadow-sm py-4 bg-white py-lg-2"},l.createElement("div",{className:"row align-items-center justify-content-around"},l.createElement("div",{className:"col-3 mb-4 mb-lg-0 col-lg-1 d-flex flex-column align-items-center justify-content-center px-1"},l.createElement("img",{src:p.Z,alt:"Foto de Javier",className:"img-fluid rounded-circle"})),l.createElement("div",{className:"col-12 col-lg-5 mb-4 mb-lg-0"},l.createElement("h3",{className:"text-center mb-0"},l.createElement(s(),{options:{strings:[e.text1],autoStart:!0,loop:!0}})),l.createElement("h5",{className:"text-center mb-0"},e.text2)),l.createElement("div",{className:"col-12 col-lg-3 mb-2 mb-lg-0"},l.createElement(u.rU,{to:"/contactar"},l.createElement("div",{className:"btn btn-outline-primary btn-lg  w-100 text-uppercase"},"Contactar"))))))},v=t(1871),g=function(e){var a=(0,l.useState)(e.abierto),t=c()(a,2),n=t[0],r=t[1],o=(0,l.useState)(e.description),s=c()(o,2),i=s[0];s[1];return l.createElement("div",{className:"col-12 col-md-6 col-lg-4 mb-4 "},l.createElement("div",{onClick:function(){r(n=!n)},className:" ".concat(n?"item-contenedor__active":"","  shadow-sm p-3 bg-light w-100 cursor-pointer item-contenedor ")},l.createElement("div",{className:"w-100 d-flex align-items-center justify-content-between mb-3"},l.createElement("h3",{className:"".concat(n?"text-secondary":"","  w-100  font-weight-bold")},e.name),l.createElement("small",{className:" ".concat(n?"text-secondary":"")},n?l.createElement(v.s$2,null):l.createElement(v.RiI,null))),l.createElement("h5",{className:"".concat(n?"  ":""," item-description w-100")},function(e,a){return e?a:"".concat(a.slice(0,30)," ...")}(n,i))))},b=function(){return l.createElement("div",{className:"w-100 py-4 "},l.createElement("div",{className:"container"},l.createElement("div",{className:"row   "},l.createElement("div",{className:"col-12 d-flex flex-column align-items-center my-3 "},l.createElement("h2",{className:"mb-5 text-center text-wrap"},"Soy especialista en tratar adolecentes y adultos que estén con alguno de estos problemas ...")),l.createElement(g,{abierto:!1,name:"Ataques de pánico",description:"Los síntomas más comunes son: el corazón late rápidamente (taquicardia), sudoración y puede llegar a sentir como si se estuviera por morir o volverse loco/a, desasosiego, y mucho miedo de que se vuelva a repetir. Los ataques pueden ocurrir en momentos inesperados sin ningún factor desencadenante obvio. "}),l.createElement(g,{abierto:!1,name:"Depresión",description:"La depresión se presenta como un conjunto de síntomas de predominio afectivo, puede estar presente la tristeza, así como también puede sentirse apatía, desesperanza, decaimiento, irritabilidad, sensación de malestar y puede llegar a sentir que el peso de la vida es muy fuerte para cargarla. Aunque, no siempre, pero pueden aparecer síntomas de tipo somático."}),l.createElement(g,{abierto:!1,name:"Trastorno borderline",description:"El trastorno límite de la personalidad es un trastorno de la salud mental que impacta la forma en que piensas y sientes acerca de ti mismo y de los demás, causando problemas para insertarte normalmente en la vida cotidiana. Variabilidad en las emociones, sentimiento sostenido en el tiempo de vacío, catarata de emociones que inundan y no podemos controlar."}),l.createElement(g,{abierto:!1,name:"Inseguridad",description:"Supone una falta de seguridad y de confianza en uno mismo relacionada con una autopercepción a menudo negativa personal en la que no se confía en las propias capacidades, en los propios criterios para tomar decisiones ni en sus habilidades ya que en ocasiones anteriores pudieron no ser las mejores."}),l.createElement(g,{abierto:!1,name:"Separación",description:"La separación de una pareja es una situación de crisis y tensión que afecta a toda la familia, por lo tanto, la guía de un profesional en el tema, resulta fundamental para disminuir el daño del sistema familiar completo."}),l.createElement(g,{abierto:!1,name:"Indecisión",description:"La indecisión es la falta de determinación ante una situación, vivida como conflictiva, que nos impide tomar una decisión. Se puede formular como la dificultad para tomar decisiones de forma afirmativa, segura y tranquila. Puede ser un rasgo de la personalidad en sí mismo, o puede ir asociado a algunos tipos de psicopatología, como los trastornos obsesivos."}),l.createElement(g,{abierto:!1,name:"Duelo",description:"El Duelo es un proceso interno que se produce ante la pérdida de un ser querido, pero también tenemos procesos de duelo en lo relativo a la perdida de una relación afectiva, sea del tipo que sea, pudiendo ir desde la pérdida de un trabajo, un cambio de residencia (Mudanza), la ruptura de una relación de pareja."}),l.createElement(g,{abierto:!1,name:"Ansiedad",description:"La ansiedad es una reacción humana natural que afecta a la mente y al cuerpo. Tiene una importante función básica de supervivencia: la ansiedad es un sistema de alarma que se activa cuando una persona percibe un peligro o una amenaza. El problema no es la ansiedad en sí misma, sino cuando este mecanismo se activa sin que haga falta, por ejemplo, ponerse o sentirse ansioso por cuestiones futuras que tal vez no lleguen a darse nunca y por ende quedamos detenidos por pensamientos irreales."}))))},f=t(1311),N=function(){var e=(0,l.useRef)(0),a=(0,l.useState)(!1),t=c()(a,2),n=t[0],o=t[1],s=(0,l.useState)(!1),m=c()(s,2),u=(m[0],m[1],(0,l.useState)(null)),p=c()(u,2),v=p[0],g=p[1];return(0,l.useEffect)((function(){var a=function(){var a=window.scrollY;if(a>600&&null==v){var t=l.createElement(f.Z,{cantidad:"4",evitarIds:"''"}," ",l.createElement("h2",{className:"mb-5 text-center "},"Mi blog"),l.createElement("p",{className:"col-12 text-center mb-5"},"Artículos que pueden ayudarte mientras te decidís a contactarme"));g(t)}e.current<a&&n&&o(!1),e.current>a&&!n&&o(!0),e.current=a};return window.addEventListener("scroll",a,{passive:!0}),function(){return window.removeEventListener("scroll",a)}}),[n]),(0,l.useEffect)((function(){document.title="Psicólogo en Montevideo Javier Mangini"})),l.createElement(r.Z,null,l.createElement(d,null),l.createElement(b,null),l.createElement(E,{text1:"Contactame ahora mismo",text2:"¡Sin compromiso!"}),0!=v?v:"",l.createElement(E,{text1:"Llamá cuando quieras",text2:"Mi celular es ".concat(i.Z.cellphone)}))}},8492:function(e,a,t){"use strict";a.Z=t.p+"assets/javier-psicologo-cuadradod9a5049aa4b7c8421250164a3f86c958.jpg"}}]);