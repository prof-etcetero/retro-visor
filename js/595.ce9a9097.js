"use strict";(globalThis["webpackChunkRetro_visor"]=globalThis["webpackChunkRetro_visor"]||[]).push([[595],{8712:()=>{},3513:()=>{},5349:()=>{},7712:()=>{},2125:()=>{},2095:()=>{},288:()=>{},8304:()=>{},1794:()=>{},2167:()=>{},8682:()=>{},5415:()=>{},3438:()=>{},1173:(t,e,s)=>{s.r(e),s.d(e,{default:()=>q});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.board?s("v-main",[s("nav",{staticClass:"v-sheet elevation-2"},[s("v-btn",{attrs:{icon:"",title:"Voltar à Home"},on:{click:function(e){return t.$router.push("/")}}},[s("v-icon",[t._v("arrow_back")])],1),s("label",[t._v(t._s(t.board.title))]),t.board.owner==t.$auth.user.id?s("allowed-users",{attrs:{boardId:t.id}}):t._e(),s("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",title:"Ordenar itens"}},"v-btn",a,!1),o),[s("v-icon",[t._v("filter_list")])],1)]}}],null,!1,3545687399)},[s("v-list",[s("v-list-item",{on:{click:function(e){return t.sort("date")}}},[s("v-list-item-icon",[s("v-icon",[t._v("calendar_month")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Por data")])],1)],1),s("v-list-item",{on:{click:function(e){return t.sort("votes")}}},[s("v-list-item-icon",[s("v-icon",[t._v("thumb_up")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("Por votos")])],1)],1)],1)],1),s("v-btn",{attrs:{icon:"",title:"Adicionar coluna",loading:t.loadingNewColumn},on:{click:t.addColumn}},[s("v-icon",[t._v("view_week")])],1),s("theme-toggler"),s("profile")],1),s("main",{style:{"grid-template-columns":"repeat("+t.board.columns.length+", minMax(320px, 1fr))"}},t._l(t.board.columns,(function(e,o){return s("aside",{key:o,staticClass:"v-sheet elevation-2"},[s("v-text-field",{attrs:{solo:"","hide-details":""},on:{change:function(s){return t.refreshColumnTitle(o,e)}},model:{value:e.title,callback:function(s){t.$set(e,"title",s)},expression:"column.title"}}),s("draggable",t._b({attrs:{list:e.notes,"data-id":e.id},on:{start:t.onDragStart,end:t.onDragEnd}},"draggable",t.dragOptions,!1),[s("transition-group",{attrs:{name:t.drag?"moving":null,tag:"article","data-id":e.id}},t._l(e.notes,(function(e){return s("note",{key:e.id,ref:"note-"+e.id,refInFor:!0,attrs:{value:e},on:{remove:function(e){return t.confirmRemoveNote(e)}}})})),1)],1),s("footer",[s("v-btn",{attrs:{text:"",fab:"",small:"",title:"Deletar coluna"},on:{click:function(s){return t.confirmRemoveColumn(o,e.id)}}},[s("v-icon",[t._v("delete")])],1),s("v-btn",{attrs:{text:"",fab:"",small:"",loading:t.loadingNewNote==o,title:"Adicoinar nota"},on:{click:function(s){return t.addNote(o,e.id)}}},[s("v-icon",[t._v("add")])],1)],1)],1)})),0),s("dialog-confirmation",{ref:"dialogConfirmation",on:{confirm:t.confirm}})],1):t._e()},a=[],i=s(7133),n=s.n(i),r=s(6390),l=s.n(r),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"elevation-2",style:{backgroundColor:t.data.color},attrs:{id:"note-"+t.data.id,"data-id":t.data.id,"data-color":t.data.color}},[s("div",{staticClass:"handle"},[t._v(t._s(t._f("date")(t.data.createdAt)))]),s("v-textarea",{attrs:{filled:"","hide-details":"","auto-grow":"",rows:"1",light:t.isLight(t.data.color)},on:{change:t.save},model:{value:t.data.text,callback:function(e){t.$set(t.data,"text",e)},expression:"data.text"}}),s("label",[s("v-btn",{attrs:{text:"",fab:"",small:"",title:"Deletar nota"},on:{click:t.remove}},[s("v-icon",[t._v("delete")])],1),s("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",title:"Mudar cor"}},"v-btn",a,!1),o),[s("v-icon",[t._v("palette")])],1)]}}])},[s("v-color-picker",{attrs:{"hide-canvas":"","hide-inputs":"","hide-mode-switch":"","hide-sliders":"","show-swatches":"",mode:"hexa",swatches:t.swatches},on:{input:t.refreshColor},model:{value:t.data.color,callback:function(e){t.$set(t.data,"color",e)},expression:"data.color"}})],1),s("v-btn",{attrs:{icon:"",title:"Votar nessa nota"},on:{click:t.vote}},[s("v-icon",[t._v("thumb_up")])],1),t._v(" "+t._s(t.data.votes||0)+" ")],1)],1)},h=[],c=s(4584);const u={name:"note",props:["value"],components:{draggable:l(),dialogConfirmation:c.Z},computed:{dragOptions(){return{forceFallback:!0,animation:250,class:"content",handle:".handle",group:"columns"}}},data(){return{data:this.value,pendingDelete:null,swatches:[[this.$vuetify.theme.defaults.dark.primary,this.$vuetify.theme.defaults.dark.accent,this.$vuetify.theme.defaults.dark.secondary],[this.$vuetify.theme.defaults.dark.warning,this.$vuetify.theme.defaults.dark.error,"#ffffff"]].map((t=>t.map((t=>t.toLocaleUpperCase()))))}},methods:{refresh(t){this.data=t,this.$forceUpdate()},remove(){this.$emit("remove",this.data)},vote(){this.data.votes=parseInt(this.data.votes??"0")+1,this.$forceUpdate(),this.save()},save(){this.axios.patch(`/boards/${this.data.boardId}/notes/${this.data.id}`,this.data,{headers:this.$auth.headers}).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao salvar nota. Tente novamente",color:"error"})}))},refreshColor(t){t&&(t=(t.hex??t).toLocaleUpperCase(),this.swatches.flat().includes(t)&&(this.data.color=t,this.$forceUpdate(),this.save()))},isLight(t){return"string"==typeof t&&[this.swatches[0][1],this.swatches[1][0],this.swatches[1][2]].includes(t.toLocaleUpperCase())}},filters:{date(t){return n()(t).format("DD/MM HH:mm")}}},m=u;var v=s(1001),f=s(3453),p=s.n(f),b=s(680),g=s(943),$=s(6428),x=s(6768),_=s(8177),k=(0,v.Z)(m,d,h,!1,null,"23d1e0c5",null);const C=k.exports;p()(k,{VBtn:b.Z,VColorPicker:g.Z,VIcon:$.Z,VMenu:x.Z,VTextarea:_.Z});var y=s(2151),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",title:"Meu time"}},"v-btn",a,!1),o),[s("v-icon",[t._v("people")])],1)]}}])},[s("main",{staticClass:"v-sheet"},[s("v-combobox",{attrs:{items:t.searcHResults,"item-text":"name","item-value":"id",loading:t.searching,type:"search",label:"Pesquisar usuário por email"},model:{value:t.searchParams,callback:function(e){t.searchParams=e},expression:"searchParams"}}),s("v-list",{staticClass:"flat transparent"},t._l(t.users,(function(e,o){return s("v-list-item",{key:o},[s("v-list-item-icon",[s("v-icon",[t._v("person")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.name))])],1),s("v-list-item-action",[s("v-btn",{attrs:{icon:""},on:{click:function(s){return t.confirmRemoveUser(e)}}},[s("v-icon",[t._v("delete")])],1)],1)],1)})),1)],1),s("dialog-confirmation",{ref:"dialogConfirmation",on:{confirm:t.confirm}})],1)},I=[];const D={name:"allowed-users",props:["boardId"],components:{dialogConfirmation:c.Z},data(){return{users:[],searchParams:null,searching:!1,searcHResults:[],pendingDelete:null}},mounted(){this.$idb.boards.get(this.boardId).then((t=>{this.users=t.users??[]}))},methods:{searchUser(t){this.searching=!0,this.axios.get(`/users/${t}`,{headers:this.$auth.headers}).then((t=>{200==t.status&&(this.searcHResults=t.data)})).finally((()=>{this.searching=!1}))},addUser(t){this.users.find((e=>e.id==t.id))||this.axios.post(`/boards/${this.boardId}/users`,t,{headers:this.$auth.headers}).then((()=>{this.users.push(t)})).catch((t=>{this.$store.dispatch("openAlert",{text:"Falha adicionar usuário. Tente novamente",color:"error"})}))},confirmRemoveUser(t){this.pendingDelete=t.id,this.$refs.dialogConfirmation.open(`Deletar a coluna <strong>${t.name}</strong> ?`)},confirm(){this.pendingDelete&&this.axios.delete(`/boards/${this.boardId}/users/${this.pendingDelete}`,{headers:this.$auth.headers}).then((()=>{let t=this.users.find((t=>t.id==this.pendingDelete)),e=this.users.indexOf(t);this.users.splice(e,1)})).catch((t=>{this.$store.dispatch("openAlert",{text:"Falha remover usuário. Tente novamente",color:"error"})})).finally((()=>{this.pendingDelete=null}))}},watch:{searchParams:function(t){"string"==typeof t?this.searchUser(t):this.addUser(t)}}},V=D;var Z=s(9881),N=s(6816),A=s(7620),T=s(3099),L=s(352),F=s(459),U=(0,v.Z)(V,w,I,!1,null,"25671476",null);const M=U.exports;p()(U,{VBtn:b.Z,VCombobox:Z.Z,VIcon:$.Z,VList:N.Z,VListItem:A.Z,VListItemAction:T.Z,VListItemContent:L.km,VListItemIcon:F.Z,VListItemTitle:L.V9,VMenu:x.Z});var R=s(9372),S=s(9037),B=s(5495);const H={props:["id"],components:{note:C,profile:y.Z,draggable:l(),allowedUsers:M,ThemeToggler:R.Z,dialogConfirmation:c.Z},computed:{dragOptions(){return{forceFallback:!0,animation:250,tag:"section",handle:".handle",group:"columns"}}},data(){return{drag:!1,sortBy:localStorage.getItem("sortBy")??"date",pendingDelete:null,board:null,loadingNewColumn:!1,loadingNewNote:null,unsubscription:null,newNoteAdded:null,swatches:[[this.$vuetify.theme.defaults.dark.primary,this.$vuetify.theme.defaults.dark.accent,this.$vuetify.theme.defaults.dark.secondary],[this.$vuetify.theme.defaults.dark.warning,this.$vuetify.theme.defaults.dark.error,"#ffffff"]].map((t=>t.map((t=>t.toLocaleUpperCase()))))}},mounted(){this.refresh(!0)},beforeDestroy(){this.unsubscription&&this.unsubscription()},methods:{refresh(t=!1){this.$idb.boards.get(this.id).then((t=>{this.board=t,this.refreshColumnNotes()})).finally((()=>{t&&(this.fetch(),this.refreshScription())}))},onDragStart(t){this.drag=!0,document.documentElement.classList.add("grabbing")},onDragEnd(t){this.drag=!1,document.documentElement.classList.remove("grabbing"),this.$nextTick((()=>{this.changeNoteColumn(t.item,t.target,t.to,t.newIndex,t.oldIndex)}))},fetch(){this.axios.get(`/boards/${this.id}`,{headers:this.$auth.headers}).then((t=>{if(200!=t.status)return this.$router.push("/");this.board=t.data,this.refreshColumnNotes(),this.save()})).catch((t=>{console.log(t),this.$router.push("/"),this.$store.dispatch("openAlert",{text:"Falha ao obter Boards. Tente novamente",color:"error"})}))},refreshColumnNotes(){this.board.columns=this.board.columns.map((t=>(t.notes=this.board.notes.filter((e=>e.columnId==t.id)),t)))},refreshScription(){this.unsubscription&&this.unsubscription(),this.unsubscription=(0,S.jM)((0,S.iH)(B.Fs,`/boards/${this.id}`),(t=>{t.exists()&&(this.board.notes=Object.entries(t.val().notes).map((t=>(t[1].id=t[0],t[1]))),this.board.columns=Object.entries(t.val().columns).map((t=>(t[1].notes=this.board.notes.filter((e=>e.columnId==t[0])),t[1].id=t[0],t[1]))),this.board.notes.forEach((t=>{this.$refs[`note-${t.id}`]&&this.$refs[`note-${t.id}`][0]?.refresh(t)})),this.newNoteAdded&&this.$nextTick((()=>{document.querySelector(`#note-${this.newNoteAdded}`)?.scrollIntoView({behavior:"smooth"}),this.newNoteAdded=null})),this.save())}))},sort(t){t&&(localStorage.setItem("sortBy",t),this.sortBy=t),"date"==this.sortBy?this.board.columns=this.board.columns.map((t=>(t.notes=t.notes?.sort(((t,e)=>t.createdAt-e.createdAt)),t))):this.board.columns=this.board.columns.map((t=>(t.notes=t.notes?.sort(((t,e)=>(e.votes??0)-(t.votes??0))),t)))},addColumn(){this.loadingNewColumn=!0,this.axios.post(`/boards/${this.id}/columns`,{},{headers:this.$auth.headers}).then((()=>{this.$nextTick((()=>{let t=document.querySelectorAll("main section");t[t.length-1]?.scrollIntoView({behavior:"smooth"})}))})).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao adicionar coluna. Tente novamente",color:"error"})})).finally((()=>{this.loadingNewColumn=!1}))},refreshColumnTitle(t,e){this.axios.patch(`/boards/${this.board.id}/columns/${e.id}`,{title:e.title},{headers:this.$auth.headers}).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao salvar coluna. Tente novamente",color:"error"})}))},confirmRemoveColumn(t,e){this.pendingDelete={type:"column",id:e,columnIndex:t},this.$refs.dialogConfirmation.open(`Deletar a coluna <strong>${this.board.columns[t].title??t+1}</strong> ?`)},removeColumn(){this.pendingDelete&&this.axios.delete(`/boards/${this.board.id}/columns/${this.pendingDelete.id}`,{headers:this.$auth.headers}).then((()=>{this.pendingDelete=null})).catch((t=>{this.$store.dispatch("openAlert",{text:"Falha ao remover coluna. Tente novamente",color:"error"})}))},addNote(t,e){this.loadingNewNote=t,this.axios.post(`/boards/${this.board.id}/columns/${e}/notes`,{},{headers:this.$auth.headers}).then((t=>{this.newNoteAdded=t.data.id})).catch((t=>{this.$store.dispatch("openAlert",{text:"Falha ao adicionar nota. Tente novamente",color:"error"})})).finally((()=>{this.loadingNewNote=null}))},changeNoteColumn(t,e,s,o,a){let i=t.getAttribute("data-id"),n=s.getAttribute("data-id");if(!n)return;if(t=this.board.notes.find((t=>t.id==i)),t.columnId==n)return;let r=this.board.notes.indexOf(t);this.board.notes[r].columnId=n,this.axios.patch(`/boards/${this.board.id}/notes/${i}`,{columnId:n},{headers:this.$auth.headers}).catch((()=>{this.$store.dispatch("openAlert",{text:"Falha ao salvar coluna. Tente novamente",color:"error"})}))},confirmRemoveNote(t){this.pendingDelete={type:"note",id:t.id},this.$refs.dialogConfirmation.open(`Deletar a nota <strong>${t.text}</strong> ?`)},removeNote(){this.pendingDelete&&this.axios.delete(`/boards/${this.board.id}/notes/${this.pendingDelete.id}`,{headers:this.$auth.headers}).then((()=>{this.pendingDelete=null}))},confirm(){"column"==this.pendingDelete?.type&&this.removeColumn(),"note"==this.pendingDelete?.type&&this.removeNote()},save(){this.$idb.boards.delete(this.board.id).finally((()=>{this.$idb.boards.put(this.board)}))}},filters:{date(t){return n()(t).format("DD/MM HH:mm")}}},P=H;var E=s(1009),O=s(5978),j=(0,v.Z)(P,o,a,!1,null,"2d543612",null);const q=j.exports;p()(j,{VBtn:b.Z,VIcon:$.Z,VList:N.Z,VListItem:A.Z,VListItemContent:L.km,VListItemIcon:F.Z,VListItemTitle:L.V9,VMain:E.Z,VMenu:x.Z,VTextField:O.Z})}}]);