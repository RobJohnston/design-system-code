(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{255:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(277),s=n.n(r),l=n(76),i=n(77),d=(n(75),n(159),n(299)),u=n(78),p=(n(160),n(32)),m=n.n(p),c=n(60),g=n.n(c),b=(n(313),function(t){function e(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(g()(g()(n))),n.state={dropdownOpen:!0},n}m()(e,t);var n=e.prototype;return n.toggle=function(){this.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})},n.render=function(){var t=this.props,e=t.files,n=t.nameEn,a=t.nameFr,r=t.path,s=t.i18n,i=e.sort(function(t,e){return parseInt(t.node.frontmatter.subnav.split("/")[3],10)-parseInt(e.node.frontmatter.subnav.split("/")[3],10)});return o.a.createElement(l.X,{className:"collapseItem"},o.a.createElement("a",{href:"#",onClick:this.toggle,style:{border:"0px","font-size":"1.2125em","font-family":"'Nunito Sans', sans-serif","margin-top":"5px","margin-bottom":"5px","font-weight":"600"}},"en"===s.language?n:a),o.a.createElement(l.C,{isOpen:this.state.dropdownOpen},o.a.createElement(l.W,null,i.map(function(t){if("en"===s.language&&"en"===t.node.frontmatter.lang||"fr"===s.language&&"fr"===t.node.frontmatter.lang)return o.a.createElement(l.X,{className:"subItem",active:r===t.node.frontmatter.path,style:{"padding-left":"2rem",border:"0px"}},o.a.createElement(u.a,{className:"subLink",to:t.node.frontmatter.path,activeStyle:{color:"white",backgroundColor:"#467B8D"}},t.node.frontmatter.title))}))))},e}(o.a.Component)),h=Object(i.b)("default")(b),f=(n(318),Object(i.b)("default")(function(t){return o.a.createElement(u.b,{query:"1251706298",render:function(e){var n="",a="",r=[],s=[];return e[t.path.split("/")[1]].edges.forEach(function(e){e.node.frontmatter.subnav.split("/")[1]!==n&&(""!==n&&s.push(o.a.createElement(h,{files:r,nameEn:n,nameFr:a,path:t.path})),r=[],n=e.node.frontmatter.subnav.split("/")[1],a=e.node.frontmatter.subnav.split("/")[2]),r.push(e)}),0!==r.push.length&&s.push(o.a.createElement(h,{files:r,nameEn:n,nameFr:a,path:t.path})),o.a.createElement("div",{id:"sidenav"},o.a.createElement(l.fb,{style:{"margin-top":"110px","margin-bottom":"40px"}}," ",o.a.createElement("h4",{id:"title"},"Components"),s))},data:d})})),v=n(275),C=n(83),y=n(0),S=n.n(y),w=(n(351),n(352),n(353),n(355)),E=n(357),N=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={output:void 0===n.props.defaultOutput||"react"===n.props.defaultOutput?"react":"html",isShowingCode:n.props.isShowingCode,copyText:"COPY CODE"},n.changeOutput=n.changeOutput.bind(g()(g()(n))),n.copy=n.copy.bind(g()(g()(n))),n}m()(e,t);var n=e.prototype;return n.copy=function(){this.setState({copyText:"Copied!"})},n.changeOutput=function(t){this.state.output!==t&&(this.setState({output:t}),"Copied!"===this.state.copyText&&this.setState({copyText:"COPY CODE"}))},n.render=function(){var t=this;return o.a.createElement(l.D,null,o.a.createElement(l.xb,{className:"codeblock",style:this.props.isShowingCode?{display:"flex"}:{display:"none"}},o.a.createElement(l.B,{md:"12"},o.a.createElement(l.fb,{tabs:!0},o.a.createElement(l.hb,null,o.a.createElement(l.ib,{href:"#",onClick:function(){return t.changeOutput("react")},className:"react"!==this.state.output?"":"active"},"React")),o.a.createElement(l.hb,null,o.a.createElement(l.ib,{href:"#",onClick:function(){return t.changeOutput("html")},className:"html"!==this.state.output?"":"active"},"HTML")))),o.a.createElement(l.B,{md:"12",style:{width:"100%"}},o.a.createElement(E.CopyToClipboard,{text:"html"===this.state.output?this.props.html:this.props.react},o.a.createElement(l.e,{style:{position:"absolute",right:"20px",top:"12px"},color:"primary",size:"sm",outline:!0,onClick:this.copy,className:"float-right"},this.props.t(this.state.copyText))),o.a.createElement("pre",{style:{"padding-top":"40px"}},o.a.createElement(w.PrismCode,{className:"html"===this.state.output?"language-html":"language-jsx"},"html"===this.state.output?this.props.html:this.props.react)))))},e}(o.a.Component);N.propTypes={defaultOutput:S.a.string,html:S.a.string,react:S.a.string,isShowingCode:S.a.bool},N.defaultProps={defaultOutput:"html",isShowingCode:!0};var D=Object(i.b)("CodeBlock")(N),x=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={isShowingCode:!1},n.toggle=n.toggle.bind(g()(g()(n))),n.returnButton=n.returnButton.bind(g()(g()(n))),n}m()(e,t);var n=e.prototype;return n.toggle=function(){this.setState(function(t){return{isShowingCode:!t.isShowingCode}})},n.returnButton=function(){return o.a.createElement("div",null,o.a.createElement(l.e,{onClick:this.toggle,style:{width:"30px",height:"30px",padding:"0px 0px 5px 0px",textAlign:"center",fontSize:"20px",fontWeight:"900",marginRight:"15px"},size:"sm",color:"info"},this.state.isShowingCode?"-":"+"),o.a.createElement(l.V,{onClick:this.toggle},this.props.t(this.state.isShowingCode?"HIDE CODE":"SHOW CODE")))},n.render=function(){return o.a.createElement(l.D,null,o.a.createElement(l.xb,null,this.state.isShowingCode?o.a.createElement("div",null):this.returnButton(),o.a.createElement(D,{html:this.props.html,react:this.props.react,defaultOutput:this.props.defaultOutput,isShowingCode:this.state.isShowingCode}),this.state.isShowingCode?this.returnButton():o.a.createElement("div",null)))},e}(D);x.propTypes={defaultOutput:S.a.string,html:S.a.string,react:S.a.string,isShowingCode:S.a.bool},x.defaultProps={defaultOutput:"html",isShowingCode:!1};var O=Object(i.b)("CodeBlock")(x),k=(n(63),n(85)),F=n.n(k),B=n(273),T=n.n(B),j=n(361),A={"aria-label":S.a.string,children:S.a.node,className:S.a.string,cssModule:S.a.object,next:S.a.bool,previous:S.a.bool,tag:S.a.oneOfType([S.a.func,S.a.string])},I=function(t){var e=t.className,n=t.cssModule,a=(t.next,t.previous,t.tag),r=F()(t,["className","cssModule","next","previous","tag"]),s=Object(j.a)(T()(e,"page-link"),n),l=t["aria-label"]||"Previous",i=t.children;return i&&Array.isArray(i)&&0===i.length&&(i=null),r.href||"a"!==a||(a="button"),i=[o.a.createElement("span",{"aria-hidden":"true",key:"caret"},i||"«"),o.a.createElement("span",{className:"sr-only",key:"sr"},l)],o.a.createElement(a,Object.assign({},r,{className:s,"aria-label":l}),i)};I.propTypes=A,I.defaultProps={tag:"a"};var V=I,z=function(t){function e(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(g()(g()(n))),n.state={dropdownOpen:!1},n}m()(e,t);var n=e.prototype;return n.toggle=function(){this.setState({dropdownOpen:!this.state.dropdownOpen})},n.render=function(){return o.a.createElement(l.f,{direction:"down",isOpen:this.state.dropdownOpen,toggle:this.toggle,style:{marginBottom:"15px"},color:this.props.color},o.a.createElement(l.I,Object.assign({caret:!0},this.props),"Reply"),o.a.createElement(l.H,null,o.a.createElement(l.G,null,"Action 1"),o.a.createElement(l.G,null,"Action 2"),o.a.createElement(l.G,null,"Action 3")))},e}(o.a.Component),q=Object(i.b)("ButtonDropdownWrapper")(z);n.d(e,"pageQuery",function(){return P}),e.default=Object(i.b)("default")(function(t){var e=t.data,n=t.i18n,a=e.eng,r=e.fr,i=a.frontmatter.path,d=new s.a({createElement:o.a.createElement,components:{paginationlinkprev:V,togglecodeblock:O,codeblock:D,mdbuttondropdown:q,alert:l.a,badge:l.b,breadcrumb:l.c,breadcrumbitem:l.d,button:l.e,buttondropdown:l.f,buttongroup:l.g,buttontoolbar:l.h,card:l.i,cardblock:l.j,cardbody:l.k,cardcolumns:l.l,carddeck:l.m,cardfooter:l.n,cardgroup:l.o,cardheader:l.p,cardimg:l.q,cardimgoverlay:l.r,cardlink:l.s,cardsubtitle:l.t,cardtext:l.u,cardtitle:l.v,carousel:l.w,carouselcaption:l.x,carouselcontrol:l.y,carouselindicators:l.z,carouselitem:l.A,mdcol:l.B,collapse:l.C,container:l.D,custominput:l.E,dropdown:l.F,dropdownitem:l.G,dropdownmenu:l.H,dropdowntoggle:l.I,fade:l.J,form:l.K,formfeedback:l.L,formgroup:l.M,formtext:l.N,input:l.O,inputgroup:l.P,inputgroupaddon:l.Q,inputgroupbutton:l.R,inputgroupbuttondropdown:l.S,inputgrouptext:l.T,jumbotron:l.U,label:l.V,listgroup:l.W,listgroupitem:l.X,listgroupitemheading:l.Y,listgroupitemtext:l.Z,media:l.ab,modal:l.bb,modalbody:l.cb,modalfooter:l.db,modalheader:l.eb,nav:l.fb,navbar:l.jb,navbarbrand:l.kb,navbartoggler:l.lb,navdropdown:l.gb,navitem:l.hb,navlink:l.ib,pagination:l.mb,paginationitem:l.nb,paginationlink:l.ob,popover:l.pb,popoverbody:l.qb,popovercontent:l.rb,popoverheader:l.sb,popovertitle:l.tb,poppercontent:l.ub,poppertargethelper:l.vb,progress:l.wb,row:l.xb,tabcontent:l.yb,table:l.Ab,tabpane:l.zb,tooltip:l.Bb,uncontrolledalert:l.Cb,uncontrolledbuttondropdown:l.Db,uncontrolledcarousel:l.Eb,uncontrolledcollapse:l.Fb,uncontrolleddropdown:l.Gb,uncontrollednavdropdown:l.Hb,uncontrolledtooltip:l.Ib}}).Compiler;return o.a.createElement(C.a,null,o.a.createElement("div",{id:"mobile-menu-holder",className:"d-sm-block d-md-none d-lg-none d-xl-none bg-primary",style:{padding:"6px"}},o.a.createElement(l.e,{color:"primary",id:"mobile-menu",className:"mr-3"},"Menu"),o.a.createElement(v.a,{lng:"en"===n.language?"en":"fr",placeholder:"en"===n.language?"Search":"Chercher"})),o.a.createElement(l.Fb,{toggler:"#mobile-menu"},o.a.createElement("div",{className:"mobile-sidebar"},o.a.createElement(f,{path:i}))),o.a.createElement("div",{className:"d-none d-md-block"},o.a.createElement(f,{path:i})),o.a.createElement(l.D,{className:"mt-2 doc-container"},"en"===n.language||null===r?o.a.createElement("div",{className:"col-sm"},d(a.htmlAst)):o.a.createElement("div",{className:"col-sm"},d(r.htmlAst))))});var P="1855962696"},299:function(t){t.exports={data:{component:{totalCount:49,edges:[{node:{frontmatter:{title:"Couleur",path:"/component/colour",lang:"fr",subnav:"1/Visuals/Visuels/1"}}},{node:{frontmatter:{title:"Colour",path:"/component/colour",lang:"en",subnav:"1/Visuals/Visuels/1"}}},{node:{frontmatter:{title:"Icons",path:"/component/icons",lang:"en",subnav:"1/Visuals/Visuels/2"}}},{node:{frontmatter:{title:"Icônes",path:"/component/icons",lang:"fr",subnav:"1/Visuals/Visuels/2"}}},{node:{frontmatter:{title:"Typographie",path:"/component/typography",lang:"fr",subnav:"1/Visuals/Visuels/3"}}},{node:{frontmatter:{title:"Typography",path:"/component/typography",lang:"en",subnav:"1/Visuals/Visuels/3"}}},{node:{frontmatter:{title:"Images, avatars et vignettes",path:"/component/avatars-and-thumbnails",lang:"fr",subnav:"2/Standard/Standard/1"}}},{node:{frontmatter:{title:"Avatars and thumbnails",path:"/component/avatars-and-thumbnails",lang:"en",subnav:"2/Standard/Standard/1"}}},{node:{frontmatter:{title:"Infobulles",path:"/component/tooltips",lang:"fr",subnav:"2/Standard/Standard/10"}}},{node:{frontmatter:{title:"Tooltips",path:"/component/tooltips",lang:"en",subnav:"2/Standard/Standard/10"}}},{node:{frontmatter:{title:"Badges",path:"/component/badges",lang:"fr",subnav:"2/Standard/Standard/2"}}},{node:{frontmatter:{title:"Badges",path:"/component/badges",lang:"en",subnav:"2/Standard/Standard/2"}}},{node:{frontmatter:{title:"Boutons",path:"/component/buttons",lang:"fr",subnav:"2/Standard/Standard/3"}}},{node:{frontmatter:{title:"Buttons",path:"/component/buttons",lang:"en",subnav:"2/Standard/Standard/3"}}},{node:{frontmatter:{title:"Cartes",path:"/component/cards",lang:"fr",subnav:"2/Standard/Standard/4"}}},{node:{frontmatter:{title:"Cards",path:"/component/cards",lang:"en",subnav:"2/Standard/Standard/4"}}},{node:{frontmatter:{title:"Comments",path:"/component/comments",lang:"en",subnav:"2/Standard/Standard/5"}}},{node:{frontmatter:{title:"Divider/Rule",path:"/component/divider-rule",lang:"en",subnav:"2/Standard/Standard/6"}}},{node:{frontmatter:{title:"Séparateur ou règle",path:"/component/divider-rule",lang:"fr",subnav:"2/Standard/Standard/6"}}},{node:{frontmatter:{title:"Grilles et espacement",path:"/component/grids-and-spacing",lang:"fr",subnav:"2/Standard/Standard/7"}}},{node:{frontmatter:{title:"Grids and Spacing",path:"/component/grids-and-spacing",lang:"en",subnav:"2/Standard/Standard/7"}}},{node:{frontmatter:{title:"Messagerie du système",path:"/component/system-messaging",lang:"fr",subnav:"2/Standard/Standard/8"}}},{node:{frontmatter:{title:"System messaging",path:"/component/system-messaging",lang:"en",subnav:"2/Standard/Standard/8"}}},{node:{frontmatter:{title:"Balises, puces et pilules",path:"/component/tags-chips-and-pills",lang:"fr",subnav:"2/Standard/Standard/9"}}},{node:{frontmatter:{title:"Tags, chips and pills",path:"/component/tags-chips-and-pills",lang:"en",subnav:"2/Standard/Standard/9"}}},{node:{frontmatter:{title:"Fil d'Ariane",path:"/component/breadcrumbs",lang:"fr",subnav:"3/Navigation/Navigation/1"}}},{node:{frontmatter:{title:"Breadcrumbs",path:"/component/breadcrumbs",lang:"en",subnav:"3/Navigation/Navigation/1"}}},{node:{frontmatter:{title:"Haut de la page",path:"/component/back-to-top",lang:"fr",subnav:"3/Navigation/Navigation/2"}}},{node:{frontmatter:{title:"Back to Top",path:"/component/back-to-top",lang:"en",subnav:"3/Navigation/Navigation/2"}}},{node:{frontmatter:{title:"Drawers and Accordions",path:"/component/drawers-and-accordions",lang:"en",subnav:"3/Navigation/Navigation/3"}}},{node:{frontmatter:{title:"Links",path:"/component/links",lang:"en",subnav:"3/Navigation/Navigation/5"}}},{node:{frontmatter:{title:"Liens",path:"/component/links",lang:"fr",subnav:"3/Navigation/Navigation/5"}}},{node:{frontmatter:{title:"Menus",path:"/component/menus",lang:"fr",subnav:"3/Navigation/Navigation/6"}}},{node:{frontmatter:{title:"Menus",path:"/component/menus",lang:"en",subnav:"3/Navigation/Navigation/6"}}},{node:{frontmatter:{title:"Pagination and Scrolling",path:"/component/pagination-scrolling",lang:"en",subnav:"3/Navigation/Navigation/7"}}},{node:{frontmatter:{title:"Pagination et défilement",path:"/component/pagination-scrolling",lang:"fr",subnav:"3/Navigation/Navigation/7"}}},{node:{frontmatter:{title:"Search",path:"/component/search",lang:"en",subnav:"3/Navigation/Navigation/8"}}},{node:{frontmatter:{title:"Barre de Recherche",path:"/component/search",lang:"fr",subnav:"3/Navigation/Navigation/8"}}},{node:{frontmatter:{title:"Form Design and Labels",path:"/component/overall-design-and-labels",lang:"en",subnav:"4/Forms/Formulaires/1"}}},{node:{frontmatter:{title:"Formulaires: conception et étiquettes globales",path:"/component/overall-design-and-labels",lang:"fr",subnav:"4/Forms/Formulaires/1"}}},{node:{frontmatter:{title:"Saisies des boutons",path:"/component/button-inputs",lang:"fr",subnav:"4/Forms/Formulaires/2"}}},{node:{frontmatter:{title:"Button inputs",path:"/component/button-inputs",lang:"en",subnav:"4/Forms/Formulaires/2"}}},{node:{frontmatter:{title:"Errors and validation",path:"/component/errors-and-validation",lang:"en",subnav:"4/Forms/Formulaires/3"}}},{node:{frontmatter:{title:"Erreurs et validation",path:"/component/errors-and-validation",lang:"fr",subnav:"4/Forms/Formulaires/3"}}},{node:{frontmatter:{title:"File upload",path:"/component/file-upload",lang:"en",subnav:"4/Forms/Formulaires/4"}}},{node:{frontmatter:{title:"Saisies textuelles",path:"/component/text-inputs",lang:"fr",subnav:"4/Forms/Formulaires/4"}}},{node:{frontmatter:{title:"Téléversement des fichiers",path:"/component/file-upload",lang:"fr",subnav:"4/Forms/Formulaires/5"}}},{node:{frontmatter:{title:"Progress indicators",path:"/component/progress-indicators",lang:"en",subnav:"4/Forms/Formulaires/5"}}},{node:{frontmatter:{title:"Text inputs",path:"/component/text-inputs",lang:"en",subnav:"4/Forms/Formulaires/6"}}}]},overview:{totalCount:8,edges:[{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"en",subnav:"1/About/À notre sujet/1"}}},{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"fr",subnav:"1/About/À notre sujet/1"}}},{node:{frontmatter:{title:"What's new?",path:"/overview/whats-new",lang:"en",subnav:"1/About/À notre sujet/2"}}},{node:{frontmatter:{title:"Nouveautés",path:"/overview/whats-new",lang:"fr",subnav:"1/About/À notre sujet/2"}}},{node:{frontmatter:{title:"Frequently asked questions",path:"/overview/frequently-asked-questions",lang:"en",subnav:"1/About/À notre sujet/3"}}},{node:{frontmatter:{title:"Foire aux questions",path:"/overview/frequently-asked-questions",lang:"fr",subnav:"1/About/À notre sujet/3"}}},{node:{frontmatter:{title:"Blogs",path:"/overview/blogs",lang:"en",subnav:"3/Community/Communauté/1"}}},{node:{frontmatter:{title:"Blogues",path:"/overview/blogs",lang:"fr",subnav:"3/Community/Communauté/1"}}}]},content:{totalCount:8,edges:[{node:{frontmatter:{title:"Lignes directrices sur le contenu",path:"/content/content-guidelines",lang:"fr",subnav:"1/Content/Contenu/1"}}},{node:{frontmatter:{title:"Content guidelines",path:"/content/content-guidelines",lang:"en",subnav:"1/Content/Contenu/1"}}},{node:{frontmatter:{title:"Mise en forme du contenu",path:"/content/formatting",lang:"fr",subnav:"1/Content/Contenu/2"}}},{node:{frontmatter:{title:"Formatting",path:"/content/formatting",lang:"en",subnav:"1/Content/Contenu/2"}}},{node:{frontmatter:{title:"Glossary",path:"/content/glossary",lang:"en",subnav:"1/Content/Contenu/3"}}},{node:{frontmatter:{title:"Glossaire",path:"/content/glossary",lang:"fr",subnav:"1/Content/Contenu/4"}}},{node:{frontmatter:{title:"Help articles",path:"/content/help-articles",lang:"en",subnav:"1/Content/Contenu/4"}}},{node:{frontmatter:{title:"System vocabulary",path:"/content/system-vocabulary",lang:"en",subnav:"1/Content/Contenu/5"}}}]},identity:null,data:{totalCount:16,edges:[{node:{frontmatter:{title:"Overview",path:"/data/data-overview",lang:"en",subnav:"1/Data/Données/1"}}},{node:{frontmatter:{title:"Aperçu",path:"/data/data-overview",lang:"fr",subnav:"1/Data/Données/1"}}},{node:{frontmatter:{title:"Choosing visualizations",path:"/data/choosing-visualizations",lang:"en",subnav:"1/Data/Données/2"}}},{node:{frontmatter:{title:"Choisir les visualizations",path:"/data/choosing-visualizations",lang:"fr",subnav:"1/Data/Données/2"}}},{node:{frontmatter:{title:"Column and bar graphs",path:"/data/column-and-bar-graphs",lang:"en",subnav:"1/Data/Données/3"}}},{node:{frontmatter:{title:"Diagrammes à barres ou colonne",path:"/data/column-and-bar-graphs",lang:"fr",subnav:"1/Data/Données/3"}}},{node:{frontmatter:{title:"Legends and tooltips",path:"/data/legends-and-tooltips",lang:"en",subnav:"1/Data/Données/4"}}},{node:{frontmatter:{title:"Les légendes et infobulles",path:"/data/legends-and-tooltips",lang:"fr",subnav:"1/Data/Données/4"}}},{node:{frontmatter:{title:"Line graphs",path:"/data/line-graphs",lang:"en",subnav:"1/Data/Données/5"}}},{node:{frontmatter:{title:"Graphiques linéaires",path:"/data/line-graphs",lang:"fr",subnav:"1/Data/Données/5"}}},{node:{frontmatter:{title:"Scatterplots",path:"/data/scatterplots",lang:"en",subnav:"1/Data/Données/6"}}},{node:{frontmatter:{title:"Nuage de points",path:"/data/scatterplots",lang:"fr",subnav:"1/Data/Données/6"}}},{node:{frontmatter:{title:"Stylized numbers",path:"/data/stylized-numbers",lang:"en",subnav:"1/Data/Données/7"}}},{node:{frontmatter:{title:"Nombres stylisés",path:"/data/stylized-numbers",lang:"fr",subnav:"1/Data/Données/7"}}},{node:{frontmatter:{title:"Tables",path:"/data/tables",lang:"en",subnav:"1/Data/Données/8"}}},{node:{frontmatter:{title:"Tableaux",path:"/data/tables",lang:"fr",subnav:"1/Data/Données/8"}}}]}}}},313:function(t,e,n){},318:function(t,e,n){}}]);
//# sourceMappingURL=component---src-templates-md-template-js-cf9b765f890508e1a26c.js.map