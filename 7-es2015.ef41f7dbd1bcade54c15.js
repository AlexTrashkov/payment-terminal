(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{c8T6:function(t,o,e){"use strict";e.r(o);var n=e("PCNd"),r=e("tyNb"),i=e("fXoL"),a=e("MXtB"),c=e("ofXK"),s=e("J6EX");function p(t,o){if(1&t&&i.Lb(0,"a",6),2&t){const t=o.$implicit;i.ic("background-image","url("+t.logoUrl+")",i.Db),i.cc("routerLink","checkout/"+t.name)}}function l(t,o){if(1&t&&(i.Pb(0,"div",2),i.Pb(1,"div",3),i.lc(2,"Choose your operator"),i.Ob(),i.Pb(3,"div",4),i.jc(4,p,1,3,"a",5),i.Ob(),i.Ob()),2&t){const t=o.ngIf;i.zb(4),i.cc("ngForOf",t)}}function b(t,o){1&t&&(i.Pb(0,"div",7),i.Lb(1,"app-loader-icon",8),i.Ob())}const d=[{path:"",component:(()=>{class t{constructor(t){this.telecomOperatorsService=t,this.operators$=this.telecomOperatorsService.operators$}}return t.\u0275fac=function(o){return new(o||t)(i.Kb(a.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-telecom-operators"]],decls:4,vars:4,consts:[["class","operators",4,"ngIf","ngIfElse"],["loader",""],[1,"operators"],[1,"operators__message"],[1,"operators__list"],["class","operators__item",3,"routerLink","background-image",4,"ngFor","ngForOf"],[1,"operators__item",3,"routerLink"],[1,"loader"],[1,"loader__content"]],template:function(t,o){if(1&t&&(i.jc(0,l,5,1,"div",0),i.ac(1,"async"),i.jc(2,b,2,0,"ng-template",null,1,i.kc)),2&t){const t=i.ec(3);i.cc("ngIf",i.bc(1,2,o.operators$))("ngIfElse",t)}},directives:[c.j,c.i,r.c,s.a],pipes:[c.b],styles:[".operators[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.operators__message[_ngcontent-%COMP%]{margin:20px 0;font-size:20px}.operators__list[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;-webkit-box-pack:space-evenly;justify-content:space-evenly}.operators__item[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #b0c4de;border-radius:16px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;height:110px;width:30%;margin-bottom:2%;background-size:contain;-o-object-fit:contain;object-fit:contain;background-position:50%;background-repeat:no-repeat;-webkit-transition-duration:.2s;transition-duration:.2s}@media (max-width:700px){.operators__item[_ngcontent-%COMP%]{width:45%}}@media (max-width:600px){.operators__item[_ngcontent-%COMP%]{width:100%;margin:0;border:none;border-bottom:1px solid #b0c4de;border-radius:0}.operators__item[_ngcontent-%COMP%]:first-child{border-top:1px solid #b0c4de}}.operators__item[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}@media (max-width:600px){.operators__item[_ngcontent-%COMP%]:hover{-webkit-transform:none;transform:none;background-color:#e0ffff}}.loader[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}.loader__content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"],changeDetection:0}),t})()}];let f=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(o){return new(o||t)},imports:[[r.d.forChild(d)],r.d]}),t})();e.d(o,"TelecomOperatorsModule",(function(){return m}));let m=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(o){return new(o||t)},imports:[[n.a,f]]}),t})()}}]);