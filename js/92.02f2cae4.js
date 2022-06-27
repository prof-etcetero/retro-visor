"use strict";(globalThis["webpackChunkRetro_visor"]=globalThis["webpackChunkRetro_visor"]||[]).push([[92],{9092:(t,e,r)=>{r.r(e),r.d(e,{default:()=>y});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("nav",{staticClass:"v-sheet elevation-2"},[r("profile")],1),r("v-main",t._l(t.boards,(function(e,a){return r("v-card",{key:a},[r("v-card-title",[t.isOwner(e)?r("v-text-field",{attrs:{solo:"","hide-details":""},on:{change:function(r){return t.refreshBoardTitle(e)}},model:{value:e.title,callback:function(r){t.$set(e,"title",r)},expression:"board.title"}}):[t._v(t._s(e.title))]],2),r("v-card-text",t._l(e.columns,(function(e,a){return r("span",{key:a},[r("label",[t._v(t._s(e.title))])])})),0),r("v-card-actions",[t.isOwner(e)?r("v-btn",{attrs:{icon:"",large:"",title:"Deletar Board"},on:{click:function(r){return t.confirmDeleteBoard(a,e)}}},[r("v-icon",[t._v("delete")])],1):t._e(),r("v-btn",{attrs:{fab:"",small:"",light:"",color:"accent",title:"Acessar Board"},on:{click:function(r){return t.$router.push("/board/"+e.id)}}},[r("v-icon",[t._v("play_arrow")])],1)],1)],1)})),1),r("v-btn",{attrs:{fab:"",small:"",fixed:"",bottom:"",right:"",light:"",color:"accent",title:"Crair Board",loading:t.loading},on:{click:t.createBoard}},[r("v-icon",[t._v("add")])],1),r("dialog-confirmation",{ref:"dialogConfirmation",on:{confirm:t.confirm}})],1)},s=[],o=r(2151),i=r(4584);const n={components:{profile:o.Z,dialogConfirmation:i.Z},data(){return{boards:[],loading:!1,pendingDeleteBoard:null}},created(){this.refresh(),this.fetch()},methods:{refresh(){this.$idb.boards.toArray((t=>{this.boards=t??[]}))},fetch(){this.axios.get("/boards",{headers:this.$auth.headers}).then((t=>{this.$idb.boards.clear().finally((()=>{this.boards=t.data,this.$idb.boards.bulkPut(this.boards)}))})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao obter Boards. Tente novamente",color:"error"})}))},boardColumns(t){return this.columns.filter((e=>e.boardId=t))},createBoard(){this.loading=!0,this.axios.post("/boards",{title:"Um board"},{headers:this.$auth.headers}).then((t=>this.$idb.boards.put(t.data).finally((()=>{this.refresh()})))).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao criar Board. Tente novamente",color:"error"})})).finally((()=>{this.loading=!1}))},refreshBoardTitle(t){this.axios.patch(`/boards/${t.id}`,{title:t.title},{headers:this.$auth.headers}).then((()=>{this.$idb.boards.update(t.id,t)})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao salvar Board. Tente novamente",color:"error"})}))},confirmDeleteBoard(t,e){this.pendingDeleteBoard=e.id,this.$refs.dialogConfirmation.open(`Deletar o Board <strong>${e.title??t+1}</strong> ?`)},confirm(){this.pendingDeleteBoard&&this.axios.delete(`/boards/${this.pendingDeleteBoard}`,{headers:this.$auth.headers}).then((()=>{this.$idb.boards.delete(this.pendingDeleteBoard).finally((()=>this.refresh()))})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao deletar Board. Tente novamente",color:"error"})}))},isOwner(t){return t.owner==this.$auth.user.id}}},l=n;var d=r(1001),c=r(3453),h=r.n(c),u=r(680),v=r(5648),b=r(1226),f=r(6505),g=r(3325);const p=(0,g.Z)(b.Z,f.Z,v.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...f.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...v.Z.options.computed.classes.call(this)}},styles(){const t={...v.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=b.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}});var m=r(4589);const B=(0,m.Ji)("v-card__actions"),$=((0,m.Ji)("v-card__subtitle"),(0,m.Ji)("v-card__text")),_=(0,m.Ji)("v-card__title");var k=r(6428),x=r(1009),C=r(5978),Z=(0,d.Z)(l,a,s,!1,null,"7ec937b6",null);const y=Z.exports;h()(Z,{VBtn:u.Z,VCard:p,VCardActions:B,VCardText:$,VCardTitle:_,VIcon:k.Z,VMain:x.Z,VTextField:C.Z})}}]);