import{a as ae}from"./chunk-L6YDYUXN.js";import{a as X,b as Y}from"./chunk-M4527DBG.js";import{d as Z,f as ee,h as te,i as ie,j as ne,k as re,l as oe}from"./chunk-DF5V3CGA.js";import"./chunk-H243YLLB.js";import{l as K,m as Q}from"./chunk-4OFKIYJU.js";import"./chunk-NBXMW3I5.js";import{F as v}from"./chunk-P5HVWHID.js";import{f as J,i as q}from"./chunk-GUOLBLKQ.js";import{a as W,b as B,c as F}from"./chunk-AZKQQTNM.js";import"./chunk-LPFABL7P.js";import"./chunk-NT4R6KA6.js";import{b as $}from"./chunk-CHTH5VC4.js";import{Hb as G,Wb as w,jb as U,mb as A,pb as j,xb as H,zb as R}from"./chunk-3TE5KJCQ.js";import{$d as O,Ca as c,Cb as I,Da as p,Dc as S,Ec as y,Fc as C,Fd as k,Gc as L,Ib as u,Ob as _,Wd as D,ac as a,bc as m,cc as N,gc as x,he as f,jc as g,lc as d,nb as T,nd as E,od as V,qb as o,vb as M,wd as P,xc as l,yc as h,zc as z}from"./chunk-U7BECMVY.js";function se(s,n){if(s&1&&(a(0,"div",6)(1,"b"),l(2),m()()),s&2){let e=d();o(2),h(e.$t("_buildTip"))}}function le(s,n){if(s&1){let e=x();a(0,"input",22),C("ngModelChange",function(i){c(e);let r=d().$implicit;return y(r.url,i)||(r.url=i),p(i)}),m()}if(s&2){let e=d().$implicit;S("ngModel",e.url)}}function ce(s,n){if(s&1&&N(0,"img",23),s&2){let e=d().$implicit;_("src",e.icon,T)}}function pe(s,n){if(s&1){let e=x();a(0,"a",24),g("nzOnConfirm",function(){c(e);let i=d().index,r=d();return p(r.handleDelete(i))}),l(1),m()}if(s&2){let e=d(2);_("nzPopconfirmTitle",e.$t("_confirmDel")),o(),z(" ",e.$t("_del")," ")}}function de(s,n){if(s&1){let e=x();a(0,"tr")(1,"td",7)(2,"input",8),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.name,i)||(r.name=i),p(i)}),m()(),a(3,"td",9),u(4,le,1,1,"input",10),m(),a(5,"td",11),u(6,ce,1,1,"img",12),a(7,"input",13),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.icon,i)||(r.icon=i),p(i)}),m(),a(8,"app-upload",14),g("onChange",function(i){let r=c(e).index,me=d();return p(me.onChangeUpload(i,r))}),m()(),a(9,"td",9)(10,"input",15),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.placeholder,i)||(r.placeholder=i),p(i)}),m()(),a(11,"td",16)(12,"nz-switch",17),C("ngModelChange",function(i){let r=c(e).$implicit;return y(r.blocked,i)||(r.blocked=i),p(i)}),m()(),a(13,"td",18)(14,"a",19),g("click",function(){let i=c(e).index,r=d();return p(r.moveUp(i))}),l(15),m(),a(16,"a",20),g("click",function(){let i=c(e).index,r=d();return p(r.moveDown(i))}),l(17),m(),u(18,pe,2,2,"a",21),m()()}if(s&2){let e=n.$implicit,t=d();o(2),S("ngModel",e.name),o(2),_("ngIf",!e.isInner),o(2),_("ngIf",e.icon),o(),S("ngModel",e.icon),o(3),S("ngModel",e.placeholder),o(2),S("ngModel",e.blocked),o(3),h(t.$t("_moveUp")),o(2),h(t.$t("_moveDown")),o(),_("ngIf",!e.isInner)}}var b=class s{constructor(n,e){this.message=n;this.modal=e}$t=f;searchList=O;submitting=!1;isSelfDevelop=D;handleAdd(){this.searchList.some(e=>!e.name.trim())||this.searchList.unshift({name:"",url:"",icon:"",placeholder:"",blocked:!1,isInner:!1})}handleDelete(n){this.searchList.splice(n,1)}moveUp(n){if(n===0)return;let e=this.searchList[n],t=this.searchList[n-1];this.searchList[n-1]=e,this.searchList[n]=t}moveDown(n){if(n===this.searchList.length-1)return;let e=this.searchList[n],t=this.searchList[n+1];this.searchList[n+1]=e,this.searchList[n]=t}handleSubmit(){this.submitting||this.modal.info({nzTitle:f("_syncDataOut"),nzOkText:f("_confirmSync"),nzContent:f("_confirmSyncTip"),nzOnOk:()=>{let n={};if(this.searchList.forEach(e=>{e.name.trim()&&(n[e.name]=null)}),Object.keys(n).length!==this.searchList.length){this.message.error(f("_repeatAdd"));return}this.submitting=!0,G({message:"update search",content:JSON.stringify(this.searchList),path:k}).then(()=>{this.message.success(f("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(n,e){return e.name}onChangeUpload(n,e){this.searchList[e].icon=n.cdn}static \u0275fac=function(e){return new(e||s)(M(w),M(v))};static \u0275cmp=I({type:s,selectors:[["system-tag"]],features:[L([v,w])],decls:23,vars:14,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],["class","mb12",4,"ngIf"],[3,"nzData"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb12"],["width","150px"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["width","220px"],["nz-input","",3,"ngModel","ngModelChange",4,"ngIf"],["width","260px",1,"whitespace-nowrap"],["class","icon",3,"src",4,"ngIf"],["nz-input","","type","text",2,"width","180px",3,"ngModelChange","ngModel"],[3,"onChange"],["nz-input","","maxlength","50",3,"ngModelChange","ngModel"],["width","100px"],[3,"ngModelChange","ngModel"],[1,"select-none"],[3,"click"],[1,"ml-2.5",3,"click"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom","class","ml-2.5 color-red",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","",3,"ngModelChange","ngModel"],[1,"icon",3,"src"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"ml-2.5","color-red",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(e,t){if(e&1){let i=x();a(0,"button",1),g("click",function(){return c(i),p(t.handleAdd())}),l(1),m(),a(2,"button",2),g("click",function(){return c(i),p(t.handleSubmit())}),l(3),m(),u(4,se,3,1,"div",3),a(5,"nz-table",4,0)(7,"thead")(8,"tr")(9,"th"),l(10),m(),a(11,"th"),l(12),m(),a(13,"th"),l(14),m(),a(15,"th"),l(16),m(),a(17,"th"),l(18),m(),a(19,"th"),l(20),m()()(),a(21,"tbody"),u(22,de,19,9,"tr",5),m()()}e&2&&(_("nzLoading",t.submitting),o(),z(" ",t.$t("_addRow"),`
`),o(),_("nzLoading",t.submitting),o(),z(" ",t.$t("_save"),`
`),o(),_("ngIf",!t.isSelfDevelop),o(),_("nzData",t.searchList),o(5),h(t.$t("_engineName")),o(2),h(t.$t("_engineUrl")),o(2),h(t.$t("_icon")),o(2),h(t.$t("_desc")),o(2),h(t.$t("_isDisable")),o(2),h(t.$t("_action")),o(2),_("ngForOf",t.searchList)("ngForTrackBy",t.trackByItem))},dependencies:[R,U,A,H,j,P,E,V,F,B,W,$,oe,ie,Z,ee,re,te,ne,q,J,ae,Y,X,Q,K],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:10px;object-fit:cover}  #file{vertical-align:middle;margin-left:10px}  #file .anticon{font-size:20px}"]})};export{b as default};
