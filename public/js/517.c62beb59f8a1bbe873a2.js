(self.webpackChunkproyecto=self.webpackChunkproyecto||[]).push([[517],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e}},8926:function(e){function t(e,t,n,r,a,o,c){try{var l=e[o](c),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}e.exports=function(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){var c=e.apply(n,r);function l(e){t(c,a,o,l,i,"next",e)}function i(e){t(c,a,o,l,i,"throw",e)}l(void 0)}))}}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3884:function(e){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3038:function(e,t,n){var r=n(2858),a=n(3884),o=n(379),c=n(521);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||c()}},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},7757:function(e,t,n){e.exports=n(5666)},5200:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(3727),o=n(8492),c=function(e){return r.createElement("header",{id:"header-nav",className:"w-100 py-2 shadow-sm "},r.createElement("div",{className:"container d-flex flex-column align-items-center"},r.createElement("div",{className:"col-12  row mx-0 align-items-center"},r.createElement("div",{className:"col-2  col-lg-1 d-flex flex-column align-items-center justify-content-center "},r.createElement(a.rU,{to:"/"},r.createElement("img",{src:o.Z,alt:"Foto de Javier",className:"img-fluid rounded-circle"}))),r.createElement("div",{className:"col-10 col-lg-7"},r.createElement("h1",{className:"h5 mb-0"}," Psicólogo Javier Mangini "),r.createElement("p",{className:"mb-0"},r.createElement("small",null,r.createElement("strong",null,"Montevideo-Uruguay")))),r.createElement("div",{className:"col-12 col-lg-4 mt-2 mt-lg-0"},r.createElement(a.rU,{to:"/contactar"},r.createElement("div",{className:"btn btn-primary btn-lg  w-100 text-uppercase"},"Contactar"))))))},l=n(1871),i=n(1197),s=function(){return r.createElement("footer",{className:"w-100 "},r.createElement("div",{className:"w-100 py-5  bg-gray-1"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("nav",{className:"row mx-0 col-12 col-lg-12"},r.createElement("div",{className:" col-12 col-md-4 mb-3 "},r.createElement(a.rU,{className:"btn btn-outline-primary   w-100",to:"/sobre-mi"}," ","¿Quién es Javier Mangini?")),r.createElement("div",{className:" col-12 col-md-4  mb-3"},r.createElement(a.rU,{className:"btn btn-outline-primary   w-100",to:"/blog"}," ","Blog")),r.createElement("div",{className:" col-12 col-md-4  mb-3"},r.createElement(a.rU,{className:"btn btn-outline-primary   w-100",to:"/contactar"}," ","Contactar")),r.createElement("div",{className:" col-12 col-md-4  mb-3"},r.createElement("a",{className:"btn btn-outline-primary   w-100",href:i.Z.whatsapp_link}," ","Whatsapp "," ",r.createElement(l.xpo,null))),r.createElement("div",{className:" col-12 col-md-4  mb-3"},r.createElement("a",{className:"btn btn-outline-primary   w-100",href:i.Z.instagram_link}," ","Instagram "," ",r.createElement(l.Zf_,null))),r.createElement("div",{className:" col-12 col-md-4  mb-3"},r.createElement("a",{className:"btn btn-outline-primary   w-100",href:i.Z.facebook_link},"Facebook "," ",r.createElement(l.R9i,null))))))),r.createElement("div",{className:"w-100 py-3 bg-dark"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-12"},r.createElement("div",{className:"text-center text-white mb-0"},r.createElement("small",null,"Javier Mangini psicólogo psicoanalista en Montevideo © todos los derechos reservados","".concat((new Date).getFullYear())," | ",r.createElement("a",{href:"https://mwebs.com.uy/dise%C3%B1o-web-uruguay"},"Diseño web en Uruguay")," hecho por por ",r.createElement("a",{href:"https://mwebs.com.uy/dise%C3%B1o-web-uruguay"},"mwebs"))))))))},m=function(e){return r.createElement("div",null,r.createElement(c,null),r.createElement("div",{className:"w-100 d-flex flex-column align-items-center "},e.children),r.createElement(s,null))}},1197:function(e,t){"use strict";t.Z={name:"Javier Mangini",email:"javiermangini@hotmail.com",cellphone:"099 843 381",whatsapp_link:"https://api.whatsapp.com/send?phone=59899843381&text=Hola!",instagram_link:"https://www.instagram.com/manginijavier/",facebook_link:"https://www.facebook.com/javierjesusmangini/"}},2517:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(7294),a=n(1871),o=n(5200),c=n(7757),l=n.n(c),i=n(8926),s=n.n(i),m=n(9713),u=n.n(m),f=n(3038),h=n.n(f);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=(0,r.useState)({name:"",nameValidation:"",email:"",emailValidation:"",celular:"",celularValidation:"",message:"",messageValidation:""}),t=h()(e,2),n=t[0],a=t[1],o={name:/[A-Za-z ]{3,}/,email:/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/,celular:/[0-9]{9,}/,message:/[_A-Za-z0-9-]{3,}/},c=(0,r.useState)(!1),i=h()(c,2),m=i[0],f=i[1],p=(0,r.useState)(!1),v=h()(p,2),y=v[0],g=v[1],b=(0,r.useState)([]),E=h()(b,2),w=E[0],x=E[1],N=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name,c="".concat(r,"Validation");a((function(e){return d(d({},e),{},u()({},c,!t.required||o[r].test(n)&&""!==n))})),a((function(e){return d(d({},e),{},u()({},r,n))}))},j=function(){var e=!0;return Object.keys(o).forEach((function(t){var r="".concat(t,"Validation");a((function(e){return d(d({},e),{},u()({},r,o[t].test(n[t])))})),!1===o[t].test(n[t])&&(e=!1)})),e},k=function(){var e=s()(l().mark((function e(t){var r,a,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!1!==j()){e.next=4;break}return e.abrupt("return",alert("algo no está bien"));case 4:return g(!0),r=document.head.querySelector("[name~=csrf-token][content]").content,e.prev=6,e.next=9,fetch("/post_contacto_form",{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRF-Token":r},body:JSON.stringify(n)});case 9:return a=e.sent,e.next=12,a.json();case 12:(o=e.sent).Validation?(f(!0),g(!1)):(g(!1),x(o.Data)),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(6),g(!1),alert(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}();return m?r.createElement("h1",{className:"text-center my-5 py-5 text-success"}," ","Mensaje enviado correctamente 🙂 Te responderé en cuestión de minutos"," "):r.createElement("div",{className:"w-100 my-5  d-flex flex-column align-items-center px-3 "},r.createElement("div",{className:"container row mx-0 bg-light p-1 p-lg-5 shadow-sm"},r.createElement("h3",{className:"h5 col-12 my-4"},"Formulario de contacto"),r.createElement("div",{className:"col-6 mb-4"},r.createElement("fieldset",{className:"float-label "},r.createElement("input",{name:"name",id:"",autoComplete:"off",type:"text",className:"form-control",value:n.name,onChange:N,required:!0}),r.createElement("label",{htmlFor:"name"},"Nombre ")),!1===n.nameValidation&&r.createElement("small",{className:"col-12 text-danger font-weight-bold"},"Debe tener al menos 3 carácteres.")),r.createElement("div",{className:"col-6 mb-4"},r.createElement("fieldset",{className:"float-label"},r.createElement("input",{name:"celular",type:"number",className:"form-control",value:n.celular,onChange:N,required:!0}),r.createElement("label",{htmlFor:"celular"},"Celular")),!1===n.celularValidation&&r.createElement("small",{className:"col-12 text-danger font-weight-bold"},"Debe ser un número de celular válido.")),r.createElement("div",{className:"col-12 mb-4"},r.createElement("fieldset",{className:"float-label"},r.createElement("input",{name:"email",type:"text",className:"form-control",value:n.email,onChange:N,required:!0}),r.createElement("label",{htmlFor:"email"},"Email")),!1===n.emailValidation&&r.createElement("small",{className:"col-12 text-danger font-weight-bold"},"Debe ser un email válido.")),r.createElement("div",{className:"col-12 mb-4"},r.createElement("fieldset",{className:"float-label"},r.createElement("textarea",{name:"message",type:"text",className:"form-control",value:n.message,onChange:N,required:!0}),r.createElement("label",{htmlFor:"message"},"Mensaje")),!1===n.messageValidation&&r.createElement("small",{className:"col-12 text-danger font-weight-bold"},"Escribe algo solo con letras y números.")),r.createElement("div",{className:"col-12 border border-danger  col-lg-6 mb-4"},w.length>0&&r.createElement("ul",{className:"my-3 p-3"},w.map((function(e,t){return r.createElement("strong",null,r.createElement("small",{className:"mb-3 text-danger"},e[0]))}))),y?r.createElement("div",{className:"btn btn-block btn-lg btn-primary w-100 d-flex align-items-center justify-content-center"},r.createElement("span",{className:"spinner-grow spinner-grow-sm mr-2",role:"status","aria-hidden":"true"}),"Enviando..."):r.createElement("button",{type:"button",onClick:k,className:"btn btn-block btn-lg btn-primary w-100"},"Enviar solicitud"))))},y=n(1197),g=function(){return(0,r.useEffect)((function(){document.title="Contactar a Javier Mangini"})),r.createElement(o.Z,null,r.createElement("div",{className:"container"},r.createElement("h1",{className:" text-center my-5"},"¿Hablamos?"),r.createElement("h2",{className:"h2 text-center my-5"},"Podés contactarte conmigo de 3 maneras diferentes."),r.createElement("ol",null,r.createElement("li",{className:"mb-4"}," Llamame ahora mismo a mi celular ",r.createElement(a.XEH,null),r.createElement("strong",null," ".concat(y.Z.cellphone)),". Ten en cuenta que si no te atiendo es porque estoy en una consulta. Te\n          devolveré el llamado ni bien pueda. "),r.createElement("li",{className:"mb-4"}," Enviame un mensaje de texto a mi celular ",r.createElement(a.XEH,null),r.createElement("strong",null," ".concat(y.Z.cellphone)),".  o por Whatsapp tocando\n          este botón ",r.createElement("a",{href:y.Z.whatsapp_link,className:"btn btn-success"}," Enviar mensaje por whatsapp ",r.createElement(a.xpo,null))),r.createElement("li",{className:"mb-4"}," Enviame un email ",r.createElement(a.dTF,null)," a ",r.createElement("strong",null," ".concat(y.Z.email))," o bien rellená el\n          formulario de aquí abajo. "))),r.createElement(v,null))}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),c=new _(r||[]);return o._invoke=function(e,t,n){var r=u;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var l=k(c,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var i=m(e,t,n);if("normal"===i.type){if(r=n.done?p:f,i.arg===d)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r=p,n.method="throw",n.arg=i.arg)}}}(e,n,c),o}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function y(){}function g(){}var b={};b[o]=function(){return this};var E=Object.getPrototypeOf,w=E&&E(E(S([])));w&&w!==n&&r.call(w,o)&&(b=w);var x=g.prototype=v.prototype=Object.create(b);function N(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function n(a,o,c,l){var i=m(e[a],e,o);if("throw"!==i.type){var s=i.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):t.resolve(u).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,l)}))}l(i.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=m(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,c=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return c.next=c}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,y.displayName=i(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,i(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},N(j.prototype),j.prototype[c]=function(){return this},e.AsyncIterator=j,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new j(s(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},N(x),i(x,l,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return l.type="throw",l.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],l=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var i=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(i&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},8492:function(e,t,n){"use strict";t.Z=n.p+"assets/javier-psicologo-cuadradod9a5049aa4b7c8421250164a3f86c958.jpg"}}]);