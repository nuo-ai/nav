import{a as ee,b as _,d as te}from"./chunk-XS7GCOHB.js";import{o as Z,p as q,r as J}from"./chunk-ZS45SZ66.js";import{Da as Y,Ea as Q,S as G,d as U,eb as K,fb as X,gb as $}from"./chunk-Q4ILM65Y.js";import{Ab as M,Da as g,Ea as u,Ga as N,Kb as h,La as I,Mb as B,Nb as p,Pb as c,Qc as W,Rb as f,Sb as E,Tb as V,Xc as j,Yb as F,a as k,bc as d,cc as v,dc as H,ec as b,fc as z,hc as L,kc as R,mc as m,oa as S,pb as l,qb as x,w as O,x as y,xb as D,yb as w,yc as C,zb as A,zc as P}from"./chunk-GDED5QH7.js";var oe=(e=>(e[e.Side=1]="Side",e[e.Shortcut=2]="Shortcut",e))(oe||{}),ie=(n=>(n[n.Calendar=1]="Calendar",n[n.OffWork=2]="OffWork",n[n.Runtime=3]="Runtime",n[n.Image=4]="Image",n[n.Countdown=5]="Countdown",n[n.HTML=6]="HTML",n[n.Holiday=7]="Holiday",n))(ie||{});var ne=class t{constructor(i){this.sanitized=i}transform(i){return this.sanitized.bypassSecurityTrustHtml(i)}static \u0275fac=function(e){return new(e||t)(x(U,16))};static \u0275pipe=M({name:"safeHtml",type:t,pure:!0})};function se(t,i){if(t&1&&(b(0),C(1),z()),t&2){let e=m(3);l(),P(e.nzTitle)}}function le(t,i){if(t&1&&(d(0,"div",7),p(1,se,2,1,"ng-container",9),v()),t&2){let e=m(2);l(),c("nzStringTemplateOutlet",e.nzTitle)}}function pe(t,i){if(t&1&&(b(0),C(1),z()),t&2){let e=m(2);l(),P(e.nzContent)}}function ce(t,i){if(t&1&&(d(0,"div",2)(1,"div",3)(2,"div",4),H(3,"span",5),v(),d(4,"div",6)(5,"div"),p(6,le,2,1,"div",7),d(7,"div",8),p(8,pe,2,1,"ng-container",9),v()()()()()),t&2){let e=m();E(e.nzOverlayStyle),V(e._classMap),f("ant-popover-rtl",e.dir==="rtl"),c("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),l(6),F(e.nzTitle?6:-1),l(2),c("nzStringTemplateOutlet",e.nzContent)}}var de="popover",Me=(()=>{let t=ee,i,e=[],s=[];return class T extends t{static{let a=typeof Symbol=="function"&&Symbol.metadata?Object.create(t[Symbol.metadata]??null):void 0;i=[G()],O(null,null,i,{kind:"field",name:"nzPopoverBackdrop",static:!1,private:!1,access:{has:r=>"nzPopoverBackdrop"in r,get:r=>r.nzPopoverBackdrop,set:(r,n)=>{r.nzPopoverBackdrop=n}},metadata:a},e,s),a&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a})}getProxyPropertyMap(){return k({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}constructor(){super(re),this._nzModuleName=de,this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=y(this,e,!1),this.visibleChange=(y(this,s),new I)}static{this.\u0275fac=function(r){return new(r||T)}}static{this.\u0275dir=A({type:T,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(r,n){r&2&&f("ant-popover-open",n.visible)},inputs:{arrowPointAtCenter:[2,"nzPopoverArrowPointAtCenter","arrowPointAtCenter",j],title:[0,"nzPopoverTitle","title"],content:[0,"nzPopoverContent","content"],directiveTitle:[0,"nz-popover","directiveTitle"],trigger:[0,"nzPopoverTrigger","trigger"],placement:[0,"nzPopoverPlacement","placement"],origin:[0,"nzPopoverOrigin","origin"],visible:[0,"nzPopoverVisible","visible"],mouseEnterDelay:[0,"nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:[0,"nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:[0,"nzPopoverOverlayClassName","overlayClassName"],overlayStyle:[0,"nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[B,h]})}}})(),re=(()=>{class t extends te{constructor(){super(...arguments),this._prefix="ant-popover"}get hasBackdrop(){return this.nzTrigger==="click"?this.nzBackdrop:!1}isEmpty(){return _(this.nzTitle)&&_(this.nzContent)}static{this.\u0275fac=(()=>{let e;return function(o){return(e||(e=N(t)))(o||t)}})()}static{this.\u0275cmp=D({type:t,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[h],decls:2,vars:6,consts:[["overlay","cdkConnectedOverlay"],["cdkConnectedOverlay","","nzConnectedOverlay","",3,"overlayOutsideClick","detach","positionChange","cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter"],[1,"ant-popover",3,"nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],[1,"ant-popover-title"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"]],template:function(s,o){if(s&1){let a=L();p(0,ce,9,11,"ng-template",1,0,W),R("overlayOutsideClick",function(n){return g(a),u(o.onClickOutside(n))})("detach",function(){return g(a),u(o.hide())})("positionChange",function(n){return g(a),u(o.onPositionChange(n))})}s&2&&c("cdkConnectedOverlayHasBackdrop",o.hasBackdrop)("cdkConnectedOverlayOrigin",o.origin)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayOpen",o._visible)("cdkConnectedOverlayPush",o.cdkConnectedOverlayPush)("nzArrowPointAtCenter",o.nzArrowPointAtCenter)},dependencies:[Q,Y,q,Z,J,$,X],encapsulation:2,data:{animation:[K]},changeDetection:0})}}return t})(),Be=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=w({type:t})}static{this.\u0275inj=S({imports:[re]})}}return t})();export{oe as a,ie as b,ne as c,Me as d,Be as e};
