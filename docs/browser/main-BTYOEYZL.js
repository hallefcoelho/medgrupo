import{a as B,b as G}from"./chunk-TTOFE7OF.js";import{a as k,c as E}from"./chunk-VIWS544P.js";import{a as M,b as F,c as A,d as x,f as P,g as D,j,k as p,l as O,t as q,y as L,z as V}from"./chunk-R7NRQVUY.js";import{Cb as N,Ia as R,Z as v,Za as g,_a as b,aa as a,ab as z,ba as m,cb as T,eb as w,fb as C,g as c,ga as f,la as S,ma as h,oa as I,zc as U}from"./chunk-ESE2SNNS.js";var _=[{path:"",redirectTo:"/secure",pathMatch:"full"},{path:"secure",loadChildren:()=>import("./chunk-UHXU4HVG.js").then(i=>i.SecureModule)}],H=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e}),e.\u0275inj=m({imports:[p.forRoot(_,{scrollPositionRestoration:"enabled",onSameUrlNavigation:"reload",preloadingStrategy:j,useHash:!0,paramsInheritanceStrategy:"always"}),p]});let i=e;return i})();var W=(()=>{let e=class e{constructor(t,r){this.matIconRegistry=t,this.domSanitizer=r,this.title="medgrupo",this.matIconRegistry.addSvgIcon("icon-home-active",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-home-active.svg")),this.matIconRegistry.addSvgIcon("icon-play",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-play.svg")),this.matIconRegistry.addSvgIcon("icon-mentoria",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-mentoria.svg")),this.matIconRegistry.addSvgIcon("icon-treinamento",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-treinamento.svg")),this.matIconRegistry.addSvgIcon("icon-metricas",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-metricas.svg")),this.matIconRegistry.addSvgIcon("icon-arrow-down",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-arrow-down.svg")),this.matIconRegistry.addSvgIcon("icon-book",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-book.svg")),this.matIconRegistry.addSvgIcon("icon-question",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-question.svg")),this.matIconRegistry.addSvgIcon("icon-interrogacao",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-interrogacao.svg")),this.matIconRegistry.addSvgIcon("icon-arrow-right",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-arrow-right.svg")),this.matIconRegistry.addSvgIcon("icon-arrow-right-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-arrow-right-light.svg")),this.matIconRegistry.addSvgIcon("icon-category",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-category.svg")),this.matIconRegistry.addSvgIcon("icon-category-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-category-light.svg")),this.matIconRegistry.addSvgIcon("icon-course",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-course.svg")),this.matIconRegistry.addSvgIcon("icon-course-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-course-light.svg")),this.matIconRegistry.addSvgIcon("icon-revision",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-revision.svg")),this.matIconRegistry.addSvgIcon("icon-revision-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-revision-light.svg")),this.matIconRegistry.addSvgIcon("icon-moon",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-moon.svg")),this.matIconRegistry.addSvgIcon("icon-moon-active",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-moon-active.svg")),this.matIconRegistry.addSvgIcon("icon-sun",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-sun.svg")),this.matIconRegistry.addSvgIcon("icon-sun-active",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/icon/icon-sun-active.svg")),this.matIconRegistry.addSvgIcon("perfil",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/perfil.svg")),this.matIconRegistry.addSvgIcon("menu",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/menu.svg")),this.matIconRegistry.addSvgIcon("menu-light",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/menu-light.svg")),this.matIconRegistry.addSvgIcon("card",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/img/card.svg"))}};e.\u0275fac=function(r){return new(r||e)(g(q),g(P))},e.\u0275cmp=S({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,s){r&1&&N(0,"router-outlet")},dependencies:[D]});let i=e;return i})();var te="@",ie=(()=>{let e=class e{constructor(t,r,s,n,u){this.doc=t,this.delegate=r,this.zone=s,this.animationType=n,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=f(z,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-DLLG7WKE.js")).catch(r=>{throw new v(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let n=new s(this.delegate,this._engine,this.zone);return this.delegate=n,n})}createRenderer(t,r){let s=this.delegate.createRenderer(t,r);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let n=new y(s);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let $=u.createRenderer(t,r);n.use($)}).catch(u=>{n.use(s)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){b()},e.\u0275prov=a({token:e,factory:e.\u0275fac});let i=e;return i})(),y=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,t,r){this.delegate.insertBefore(e,o,t,r)}removeChild(e,o,t){this.delegate.removeChild(e,o,t)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,t,r){this.delegate.setAttribute(e,o,t,r)}removeAttribute(e,o,t){this.delegate.removeAttribute(e,o,t)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,t,r){this.delegate.setStyle(e,o,t,r)}removeStyle(e,o,t){this.delegate.removeStyle(e,o,t)}setProperty(e,o,t){this.shouldReplay(o)&&this.replay.push(r=>r.setProperty(e,o,t)),this.delegate.setProperty(e,o,t)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,t){return this.shouldReplay(o)&&this.replay.push(r=>r.listen(e,o,t)),this.delegate.listen(e,o,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(te)}};function X(i="animations"){return w("NgAsyncAnimations"),I([{provide:T,useFactory:(e,o,t)=>new ie(e,o,t,i),deps:[U,F,C]},{provide:R,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var l={user:{avatar:"https://gravatar.com/avatar/a6a013dd781f3e328601aa167476a4fe?s=400&d=retro&r=x",notifications:!0},navigation:[{icon:"icon-home",title:"Pra voc\xEA"},{icon:"icon-play",title:"Conte\xFAdos"},{icon:"icon-calendar",title:"Mentoria"},{icon:"icon-smart",title:"Treinamento"},{icon:"icon-chart-bar",title:"M\xE9tricas"}],conteudos:[{icon:"clinica",header:"Glomerulopatia I (Nefritica, Altera\xE7\xF5es Assintom\xE1ticas, GNRP)",short:"CLM",affix:[{aulas:"94%"},{apostila:"94%"},{questoes:"34%"}]},{icon:"clinica",header:"Glomerulopatia I (Nefritica, Altera\xE7\xF5es Assintom\xE1ticas, GNRP)",short:"CLM",affix:[{aulas:"94%"},{apostila:"94%"},{questoes:"34%"}]}],parcial:[{acertos:"90%",questoes:32,weeks:[20,70,100,100,100,100,100]}],tarefas:[{title:"Aula Cirurgia 1",category:"MEDCURSO",schedule:"14h00 - 16h00",icon:"course"},{title:"Cirurgia Geral",category:"Category",schedule:"16h00 - 17h00",icon:"category"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"},{title:"Nefrologia",category:"Fazer Revis\xE3o",schedule:"17h00 - 18h00",icon:"revision"}]};var Y=(()=>{let e=class e{constructor(){}getPartialData(){return new c(t=>t.next(l.parcial))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Z=(()=>{let e=class e{constructor(){}getContentData(){return new c(t=>t.next(l.conteudos))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var J=(()=>{let e=class e{constructor(){}getScheduleData(){return new c(t=>t.next(l.tarefas))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var K=(()=>{let e=class e{constructor(){}getUserData(){return new c(t=>t.next(l.user))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Q=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=h({type:e,bootstrap:[W]}),e.\u0275inj=m({providers:[X(),{provide:B,useClass:Z},{provide:G,useClass:Y},{provide:O,useClass:J},{provide:k,useClass:K}],imports:[x,H,M,E.forRoot(),V,L]});let i=e;return i})();A().bootstrapModule(Q).catch(i=>console.error(i));