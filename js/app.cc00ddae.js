(()=>{"use strict";var e={6864:(e,t,r)=>{var a=r(8935),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view"),r("v-snackbar",{attrs:{bottom:"",light:!e.$vuetify.theme.dark,timeout:5e3,color:e.alertData.color||null},nativeOn:{click:function(t){e.alert=!1}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[r("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[r("v-icon",[e._v("clear")])],1)]}}]),model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[e._v(" "+e._s(e.alertData.text)+" ")]),r("v-snackbar",{attrs:{top:"",light:!e.$vuetify.theme.dark,timeout:1e4,color:"primary"},nativeOn:{click:function(t){return e.updateApp.apply(null,arguments)}},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[r("v-btn",e._b({attrs:{text:"",icon:""}},"v-btn",a,!1),[r("v-icon",[e._v("cached")])],1)]}}]),model:{value:e.updateAvailable,callback:function(t){e.updateAvailable=t},expression:"updateAvailable"}},[e._v(" Atualização disponível  ")]),r("banner-install-pwa"),r("banner-cookies-warning")],1)},n=[];const i=()=>{var e;const t=window.navigator.userAgent.toLowerCase(),r=navigator.standalone??window.matchMedia("(display-mode: standalone)").matches;return/windows/i.test(t)?e="windows":/macintosh/i.test(t)?e="mac":/android/i.test(t)?e="android":/iphone|ipad|ipod/i.test(t)&&(e="ios"),{name:e,standalone:r,isMobile:"android"==e||"ios"==e}};var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[e.show?r("main",{staticClass:"banner elevation-12",on:{click:function(t){e.show=!1}}},[r("header",[e._v("Instale esse App no seu ceular")]),"ios"==e.device.name?[r("div",[e._v(" Toque em "),r("v-icon",[e._v("ios_share")]),e._v(" e depois em ")],1),r("div",{staticClass:"ios"},[e._v(" Adicionar à Tela de Início "),r("span")])]:e._e(),"android"==e.device.name?[r("div",[e._v(" Toque em "),r("v-icon",[e._v("more_vert")]),e._v("e depois em ")],1),r("div",[e._v("Adicionar à tela inicial")])]:e._e()],2):e._e()])},c=[];const l={name:"banner-install-pwa",computed:{device(){return i()}},data(){return{show:!1}},mounted(){this.device.isMobile&&!this.device.standalone&&(this.show=!0,setTimeout((()=>{this.show=!1}),1e4))}},u=l;var d=r(1001),v=r(3453),p=r.n(v),m=r(6428),h=(0,d.Z)(u,s,c,!1,null,"26922ba4",null);const f=h.exports;p()(h,{VIcon:m.Z});var g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[e.show?r("footer",{staticClass:"banner elevation-12"},[r("p",[e._v("Usamos cookies para melhorar sua experiência.")]),r("p",[e._v("Saiba mais em "),r("font",{on:{click:function(t){e.$router.push("/privacy-policy").catch((function(e){}))}}},[e._v(e._s(e.link()))])],1),r("v-btn",{attrs:{color:"accent"},on:{click:e.accept}},[r("v-icon",[e._v("check")]),e._v("Aceitar")],1)],1):e._e()])},b=[];const w={name:"banner-cookies-warning",data(){return{show:!localStorage.getItem("cookiesPolicyAccepted")}},methods:{accept(){localStorage.setItem("cookiesPolicyAccepted","true"),this.show=!1},link(){return`${location.host}/#/privacy-policy`}}},y=w;var k=r(680),A=(0,d.Z)(y,g,b,!1,null,"1a672704",null);const _=A.exports;p()(A,{VBtn:k.Z,VIcon:m.Z});const S={components:{bannerInstallPwa:f,bannerCookiesWarning:_},computed:{alert:{get(){return this.$store.state.alert},set(e){return this.$store.commit("setAlert",e)}},updateAvailable:{get(){return this.$store.state.updateAvailable},set(e){this.$store.commit("setUpdateAvailable",!1)}},alertData:function(){return this.$store.state.alertData}},created(){this.$auth.attempt()},mounted(){this.refreshPageSize(),window.onresize=()=>{this.refreshPageSize(),this.$root.$emit("resize")}},methods:{updateApp(){location.reload(!0)},refreshPageSize(){document.body.style.setProperty("--vh",`${i().standalone?window.outerHeight:window.innerHeight}px`)}}},$=S;var Z=r(7524),P=r(3202),x=(0,d.Z)($,o,n,!1,null,null,null);const T=x.exports;p()(x,{VApp:Z.Z,VBtn:k.Z,VIcon:m.Z,VSnackbar:P.Z});var I=r(3130),O=r(2809),j=r(4147);a.Z.use(O.Z);const C=[{path:"/privacy-policy",name:"Privacy Policy",component:()=>r.e(363).then(r.bind(r,6363))},{path:"/login/:provider?",name:"Login",component:()=>r.e(323).then(r.bind(r,8323)),meta:{elseAuth:!0}},{path:"/board/:id",name:"Board",component:()=>Promise.all([r.e(998),r.e(225),r.e(68),r.e(700),r.e(133),r.e(493),r.e(390),r.e(264)]).then(r.bind(r,8264)),props:!0,meta:{ifAuth:!0}},{path:"*",name:"Home",component:()=>Promise.all([r.e(998),r.e(536)]).then(r.bind(r,2536)),meta:{ifAuth:!0}}],E=new O.Z({mode:"hash",base:"/retro-visor/",routes:C});E.beforeEach(((e,t,r)=>{const o=e.matched.some((e=>e.meta.ifAuth)),n=e.matched.some((e=>e.meta.elseAuth));o&&!a.Z.$auth.authenticated?r("/login"):n&&a.Z.$auth.authenticated?r("/"):r()})),a.Z.use(I.ZP,{appName:j.name,pageTrackerScreenviewEnabled:!0,pageTrackerExcludedRotues:["/privacy-policy"],config:{id:"G-N2XSTDJX6Z"}},E);const N=E;var D=r(4665);a.Z.use(D.ZP);const L=new D.ZP.Store({state:{updateAvailable:!1,authenticated:!!localStorage.getItem("accessToken"),requestNotificationPermission:null,alert:!1,alertData:{}},mutations:{setRequestNotificationPermission(e,t){e.requestNotificationPermission=t},setUpdateAvailable(e,t){e.updateAvailable=t},setAuthenticate(e,t){e.authenticated=t},setAlert(e,t){e.alert=t},setAlertData(e,t){e.alertData=t}},actions:{openAlert({commit:e},t){if(t.text){e("setAlertData",t),e("setAlert",!0);try{navigator.vibrate(100)}catch(r){}}},setUsers({commit:e},t){e("setUsers",t),window.$vue.$idb.users.bulkPut(t)}}});var F=r(6800);a.Z.use(F.Z);let q=localStorage.getItem("lightTheme");const z=new F.Z({icons:{iconfont:"md"},theme:{dark:q?"false"==q:!!window.matchMedia("(prefers-color-scheme: dark)").matches,options:{customProperties:!0},themes:{light:{primary:"#1f75fe",secondary:"#ba55d3",accent:"#00fa9a",error:"#ea3c53",info:"#9bddff",success:"#77dd77",warning:"#ffdb58"},dark:{primary:"#1f75fe",secondary:"#ba55d3",accent:"#00fa9a",error:"#ea3c53",info:"#9bddff",success:"#77dd77",warning:"#ffdb58"}}}});var B=r(563);(0,B.z)("/retro-visor/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){window.$vue.$store.commit("setUpdateAvailable",!0),console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var R=r(6166),U=r.n(R);U().defaults.baseURL="https://us-central1-retro-visor.cloudfunctions.net/api",U().defaults.headers.common={Accept:"application/json"};const J=U().create({});J.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),J.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=J,window.axios=J,Object.defineProperties(e.prototype,{axios:{get(){return J}},$axios:{get(){return J}}})},a.Z.use(Plugin);Plugin;var M=r(5495),V=r(5843);class H{attempt(){navigator.onLine&&this.authenticated&&a.Z.axios.get("/auth",{headers:this.headers}).catch((()=>{this.deauthenticate(!0)}))}authenticate(e){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("user",JSON.stringify(e.user)),window.$vue.$store.commit("setAuthenticate",!0),window.$vue.$router.push("/").catch((e=>{}))}deauthenticate(e=!1){e||a.Z.axios["delete"]("/auth",{headers:this.headers}),window.$vue.$store.commit("setAuthenticate",!1),localStorage.removeItem("accessToken"),localStorage.removeItem("user"),window.$vue.$router.push("/").catch((e=>{})),(0,V.w7)(M.I8)}get authenticated(){return!!localStorage.getItem("accessToken")}get user(){return JSON.parse(localStorage.getItem("user")??"{}")}get headers(){let e={};return localStorage.getItem("accessToken")&&(e["Authorization"]=`Bearer ${localStorage.getItem("accessToken")}`),e}}const X=new H;H.install=function(e,t){e.$auth=X,Object.defineProperty(e.prototype,"$auth",{get(){return X}})},a.Z.use(H);var K=r(1409);const{name:G}=r(4147);class W extends K.ZP{constructor(){super(G.toLocaleLowerCase()),this.version(1).stores({users:"&id",boards:"&id",columns:"&id",notes:"&id"})}}const Y=new W;W.install=function(e,t){e.$idb=Y,Object.defineProperty(e.prototype,"$idb",{get(){return Y}})},a.Z.use(W);a.Z.config.productionTip=!1,a.Z.config.devtools=!1;const Q=new a.Z({router:N,store:L,vuetify:z,render:e=>e(T)}).$mount("#app");window.$vue=Q},5495:(e,t,r)=>{r.d(t,{Fs:()=>l,I8:()=>c});var a=r(9017),o=r(5843),n=r(9037),i=r(6034);const s=(0,a.ZF)({databaseURL:"https://retro-visor-default-rtdb.firebaseio.com",apiKey:"AIzaSyCtHwRwZkfJ7vSeILTIYpf2E7jWc15FAJk",authDomain:"retro-visor.firebaseapp.com",projectId:"retro-visor",storageBucket:"retro-visor.appspot.com",messagingSenderId:"168885876458",appId:"1:168885876458:web:0d3ee7a51f2e524b230993",measurementId:"G-N2XSTDJX6Z"}),c=(0,o.v0)(s),l=(0,n.N8)(s);(0,i.KL)(s)},4147:e=>{e.exports=JSON.parse('{"name":"Retro-visor","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build --no-clean --dest ..\\\\prod"},"dependencies":{"core-js":"^3.22.4","dexie":"^3.2.2","firebase":"^9.8.0","moment":"^2.29.3","register-service-worker":"^1.7.2","vue":"^2.6.14","vue-gtag":"^1.16.1","vue-router":"^3.5.3","vuedraggable":"^2.24.3","vuetify":"^2.6.5","vuex":"^3.6.2"},"devDependencies":{"@vue/cli-plugin-babel":"^5.0.4","@vue/cli-plugin-pwa":"^5.0.4","@vue/cli-plugin-router":"^5.0.4","@vue/cli-plugin-vuex":"^5.0.4","@vue/cli-service":"^5.0.4","axios":"^0.27.2","sass":"~1.32.13","sass-loader":"^10.2.1","vue-cli-plugin-axios":"^0.0.4","vue-cli-plugin-vuetify":"^2.4.8","vue-template-compiler":"^2.6.14","vuetify-loader":"^1.7.3"},"browserslist":["last 5 Chrome versions","last 5 ChromeAndroid versions","last 2 Safari versions","last 2 iOS major versions"]}')}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=e,(()=>{var e=[];r.O=(t,a,o,n)=>{if(!a){var i=1/0;for(u=0;u<e.length;u++){for(var[a,o,n]=e[u],s=!0,c=0;c<a.length;c++)(!1&n||i>=n)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,o,n]}})(),(()=>{r.F={},r.E=e=>{Object.keys(r.F).map((t=>{r.F[t](e)}))}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{68:"09fac8f4",133:"800c4967",225:"7b622068",264:"a7f112b9",323:"af98332e",363:"7df87d49",390:"66f01e26",493:"0c3931dc",536:"4cfb0c20",700:"1255ccc6",998:"3a3650b0"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{264:"75afbb0b",323:"3de83719",536:"98740650",998:"56dab68b"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="Retro-visor:";r.l=(a,o,n,i)=>{if(e[a])e[a].push(o);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+n){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+n),s.src=a),e[a]=[o];var v=(t,r)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p="/retro-visor/"})(),(()=>{var e=(e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],n=o.getAttribute("data-href");if(n===e||n===t)return o}},a=a=>new Promise(((o,n)=>{var i=r.miniCssF(a),s=r.p+i;if(t(i,s))return o();e(a,s,o,n)})),o={143:0};r.f.miniCss=(e,t)=>{var r={264:1,323:1,536:1,998:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0,697:0};r.f.j=(t,a)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else if(697!=t){var n=new Promise(((r,a)=>o=e[t]=[r,a]));a.push(o[2]=n);var i=r.p+r.u(t),s=new Error,c=a=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,o[1](s)}};r.l(i,c,"chunk-"+t,t)}else e[t]=0},r.F.j=t=>{if((!r.o(e,t)||void 0===e[t])&&697!=t){e[t]=null;var a=document.createElement("link");r.nc&&a.setAttribute("nonce",r.nc),a.rel="prefetch",a.as="script",a.href=r.p+r.u(t),document.head.appendChild(a)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var o,n,[i,s,c]=a,l=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var u=c(r)}for(t&&t(a);l<i.length;l++)n=i[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(u)},a=globalThis["webpackChunkRetro_visor"]=globalThis["webpackChunkRetro_visor"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{r.O(0,[143],(()=>{[363,323,998,225,68,700,133,493,390,264,536].map(r.E)}),5)})();var a=r.O(void 0,[772,840,200,256,763,170,632,75,274,611,697,797],(()=>r(6864)));a=r.O(a)})();