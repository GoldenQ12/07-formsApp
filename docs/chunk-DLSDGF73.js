import{a as L,b as C,c as p,d as N,e as _,f as J,g as I,h as R,i as $,j as H,k as w,l as Q,m as k,n as V,o as X}from"./chunk-BIHX5SGM.js";import{C as v,D as f,F as e,G as t,H as s,I as q,J as g,K as S,L as i,M as d,N as F,Q as c,R as u,U as M,V as b,W as E,X as O,ba as D,k as P,o as x,p as j,s as G,t as T,y as a,z as y}from"./chunk-22D44L75.js";function ee(o,n){if(o&1&&(e(0,"span",11),i(1),t()),o&2){let h=S();a(),F(" ",h.getFieldError("name")," ")}}function te(o,n){o&1&&(e(0,"span",11),i(1," El precio es menor de 0 "),t())}function ie(o,n){o&1&&(e(0,"span",11),i(1," Las existencias deben de ser 0 o mayor "),t())}var U=(()=>{let n=class n{constructor(r){this.formBuilder=r,this.myForm=this.formBuilder.group({name:["",[p.required,p.minLength(3)]],price:[0,[p.required,p.min(0)]],inStorage:[0,[p.required,p.min(0)]]})}getFieldError(r){if(!this.myForm.controls[r])return null;let l=this.myForm.controls[r].errors||{};for(let m of Object.keys(l))switch(m){case"required":return"Este campo es requerido";case"minlength":return`Minimo ${l.minlength.requiredLength} caracteres.`}return null}isValidField(r){return this.myForm.controls[r].errors&&this.myForm.controls[r].touched}ngOnInit(){}onSave(){if(this.myForm.invalid){this.myForm.markAllAsTouched();return}this.myForm.reset({price:0,inStorage:0})}};n.\u0275fac=function(l){return new(l||n)(y(V))},n.\u0275cmp=x({type:n,selectors:[["ng-component"]],decls:70,vars:28,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","placeholder","Nombre del producto","formControlName","name",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","placeholder","Precio del producto","formControlName","price",1,"form-control"],["type","number","placeholder","Existencias del producto","formControlName","inStorage",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(l,m){l&1&&(e(0,"h2"),i(1,"Reactivos: B\xE1sicos"),t(),s(2,"hr"),e(3,"div",0)(4,"div",1)(5,"form",2),g("ngSubmit",function(){return m.onSave()}),e(6,"div",3)(7,"label",4),i(8,"Producto"),t(),e(9,"div",5),s(10,"input",6),v(11,ee,2,1,"span",7),t()(),e(12,"div",3)(13,"label",4),i(14,"Precio"),t(),e(15,"div",5),s(16,"input",8),v(17,te,2,0,"span",7),t()(),e(18,"div",3)(19,"label",4),i(20,"Existencias"),t(),e(21,"div",5),s(22,"input",9),v(23,ie,2,0,"span",7),t()(),e(24,"div",0)(25,"div",1)(26,"button",10),i(27," Guardar "),t()()()()()(),e(28,"div",0)(29,"div",1)(30,"span"),i(31,"Valid"),t(),e(32,"pre"),i(33),c(34,"json"),t(),e(35,"span"),i(36,"Pristine"),t(),e(37,"pre"),i(38),c(39,"json"),t(),e(40,"span"),i(41,"Touched"),t(),e(42,"pre"),i(43),c(44,"json"),t(),e(45,"span"),i(46,"Value"),t(),e(47,"pre"),i(48),c(49,"json"),t(),e(50,"span"),i(51,"Precio"),t(),e(52,"pre"),i(53),c(54,"json"),t(),e(55,"span"),i(56,"Precio - Errors "),t(),e(57,"pre"),i(58),c(59,"json"),t(),e(60,"span"),i(61,"Producto"),t(),e(62,"pre"),i(63),c(64,"json"),t(),e(65,"span"),i(66,"Producto"),t(),e(67,"pre"),i(68),c(69,"json"),t()()()),l&2&&(a(5),f("formGroup",m.myForm),a(6),f("ngIf",m.isValidField("name")),a(6),f("ngIf",m.isValidField("price")),a(6),f("ngIf",m.isValidField("inStorage")),a(10),d(u(34,12,m.myForm.valid)),a(5),d(u(39,14,m.myForm.pristine)),a(5),d(u(44,16,m.myForm.touched)),a(5),d(u(49,18,m.myForm.value)),a(5),d(u(54,20,m.myForm.controls.price.value)),a(5),d(u(59,22,m.myForm.controls.price.errors)),a(5),d(u(64,24,m.myForm.controls.name.value)),a(5),d(u(69,26,m.myForm.controls.name.errors)))},dependencies:[b,I,C,R,N,_,w,k,E]});let o=n;return o})();function ne(o,n){if(o&1&&(e(0,"span",14),i(1),t()),o&2){let h=S();a(),F(" ",h.getFieldError("name")," ")}}function re(o,n){o&1&&(e(0,"span",14),i(1," Este campo es requerido "),t())}function oe(o,n){if(o&1){let h=q();e(0,"div",15)(1,"div",6),s(2,"input",16),e(3,"button",17),g("click",function(){let l=G(h).index,m=S();return T(m.onDeleteFavourite(l))}),i(4," Eliminar "),t()(),v(5,re,2,0,"span",5),t()}if(o&2){let h=n.index,r=S();a(2),f("formControlName",h),a(3),f("ngIf",r.isValidFieldInArray(r.favouriteGames,h))}}var W=(()=>{let n=class n{getFieldError(r){if(!this.myForm.controls[r])return null;let l=this.myForm.controls[r].errors||{};for(let m of Object.keys(l))switch(m){case"required":return"Este campo es requerido";case"minlength":return`Minimo ${l.minlength.requiredLength} caracteres.`}return null}isValidField(r){return this.myForm.controls[r].errors&&this.myForm.controls[r].touched}isValidFieldInArray(r,l){return r.controls[l].errors&&r.controls[l].touched}get favouriteGames(){return this.myForm.get("favouriteGames")}constructor(r){this.fb=r,this.newFavourite=new J("",[p.required],[]),this.myForm=this.fb.group({name:["",[p.required,p.minLength(0)]],favouriteGames:this.fb.array([["Metal Gear",p.required],["Hades",p.required],["DeathStranding",p.required]])})}onDeleteFavourite(r){this.favouriteGames.removeAt(r)}onAddFavourite(){if(this.newFavourite.invalid)return;let r=this.newFavourite.value;this.favouriteGames.push(this.fb.control(r,p.required,[])),this.newFavourite.reset()}onSubmit(){if(this.myForm.invalid){this.myForm.markAllAsTouched();return}this.myForm.controls.favouriteGames=this.fb.array([]),this.myForm.reset()}};n.\u0275fac=function(l){return new(l||n)(y(V))},n.\u0275cmp=x({type:n,selectors:[["ng-component"]],decls:49,vars:16,consts:[["autocomplete","off",3,"ngSubmit","formGroup"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["placeholder","Nombre de la persona","formControlName","name",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Agregar favorito",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","favouriteGames",1,"col-sm-9"],["class","mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"],[1,"mb-1"],[1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(l,m){l&1&&(e(0,"h2"),i(1,"Reactivos: "),e(2,"small"),i(3," Din\xE1micos "),t()(),s(4,"hr"),e(5,"form",0),g("ngSubmit",function(){return m.onSubmit()}),e(6,"div",1)(7,"label",2),i(8,"Nombre"),t(),e(9,"div",3),s(10,"input",4),v(11,ne,2,1,"span",5),t()(),e(12,"div",1)(13,"label",2),i(14,"Agregar"),t(),e(15,"div",3)(16,"div",6),s(17,"input",7),e(18,"button",8),g("click",function(){return m.onAddFavourite()}),i(19," Agregar favorito "),t()()()(),e(20,"div",1)(21,"label",2),i(22,"Favoritos"),t(),e(23,"div",9),v(24,oe,6,2,"div",10),t()(),e(25,"div",11)(26,"div",12)(27,"button",13),i(28," Guardar "),t()()()(),e(29,"span"),i(30,"Valid"),t(),e(31,"pre"),i(32),c(33,"json"),t(),s(34,"br"),e(35,"span"),i(36,"Value"),t(),e(37,"pre"),i(38),c(39,"json"),t(),s(40,"br"),e(41,"span"),i(42,"Agregar Juego"),t(),e(43,"pre"),i(44),c(45,"json"),t(),e(46,"pre"),i(47),c(48,"json"),t()),l&2&&(a(5),f("formGroup",m.myForm),a(6),f("ngIf",m.isValidField("name")),a(6),f("formControl",m.newFavourite),a(7),f("ngForOf",m.favouriteGames.controls),a(8),d(u(33,8,"object")),a(6),d(u(39,10,"object")),a(6),d(u(45,12,"object")),a(3),d(u(48,14,"object")))},dependencies:[M,b,I,C,N,_,H,w,k,Q,E]});let o=n;return o})();function me(o,n){if(o&1&&(e(0,"span",18),i(1),t()),o&2){let h=S();a(),F(" ",h.getFieldError("termsAndConditions")," ")}}var Y=(()=>{let n=class n{constructor(r){this.fb=r,this.myForm=this.fb.group({gender:["",p.required],wantNotifications:[!0,p.required],termsAndConditions:[!1,p.requiredTrue]}),this.person={gender:"F",wantNotications:!1}}ngOnInit(){this.myForm.reset(this.person)}onSave(){if(this.myForm.invalid){this.myForm.markAllAsTouched();return}this.person=this.myForm.value,this.myForm.reset({gender:"",wantNotifications:!0,termsAndConditions:!1})}getFieldError(r){if(!this.myForm.controls[r])return null;let l=this.myForm.controls[r].errors||{};for(let m of Object.keys(l))switch(m){case"required":return"Este campo es requerido";case"minlength":return`Minimo ${l.minlength.requiredLength} caracteres.`}return null}isValidField(r){return this.myForm.controls[r].errors&&this.myForm.controls[r].touched}};n.\u0275fac=function(l){return new(l||n)(y(V))},n.\u0275cmp=x({type:n,selectors:[["ng-component"]],decls:53,vars:11,consts:[["autocomplete","off",3,"ngSubmit","formGroup"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"form-check"],["type","radio","value","M","id","radioMasculino","formControlName","gender",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","id","radioFemenino","formControlName","gender",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],[1,"form-check","form-switch","mt-2"],["type","checkbox","id","flexSwitchCheckChecked","formControlName","wantNotifications",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","id","flexCheckDefault","formControlName","termsAndConditions",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["class","form-text text-danger",4,"ngIf"],[1,"row"],[1,"col"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(l,m){l&1&&(e(0,"h2"),i(1,"Reactivos: Switches"),t(),s(2,"hr"),e(3,"form",0),g("ngSubmit",function(){return m.onSave()}),e(4,"div",1)(5,"label",2),i(6,"G\xE9nero"),t(),e(7,"div",3)(8,"div",4),s(9,"input",5),e(10,"label",6),i(11," Masculino "),t()(),e(12,"div",4),s(13,"input",7),e(14,"label",8),i(15," Femenino "),t()()()(),e(16,"div",1)(17,"label",2),i(18,"Notificaciones"),t(),e(19,"div",3)(20,"div",9),s(21,"input",10),e(22,"label",11),i(23,"Quiero recibir notificaciones"),t()()()(),e(24,"div",1),s(25,"label",2),e(26,"div",3)(27,"div",4),s(28,"input",12),e(29,"label",13),i(30," T\xE9rminos y condiciones de uso "),t()(),v(31,me,2,1,"span",14),t()(),e(32,"div",15)(33,"div",16)(34,"button",17),i(35," Guardar "),t()()()(),e(36,"h5"),i(37,"Valor del formulario"),t(),e(38,"pre"),i(39),c(40,"json"),t(),s(41,"br"),e(42,"h5"),i(43,"Persona"),t(),e(44,"pre"),i(45),c(46,"json"),t(),s(47,"br"),e(48,"h5"),i(49,"Valid"),t(),e(50,"pre"),i(51),c(52,"json"),t()),l&2&&(a(3),f("formGroup",m.myForm),a(28),f("ngIf",m.isValidField("termsAndConditions")),a(8),d(u(40,5,m.myForm.value)),a(6),d(u(46,7,m.person)),a(6),d(u(52,9,m.myForm.valid)))},dependencies:[b,I,C,L,$,N,_,w,k,E]});let o=n;return o})();var ae=[{path:"",children:[{path:"basic",component:U},{path:"dynamic",component:W},{path:"switches",component:Y},{path:"**",redirectTo:"basic"}]}],Z=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=j({type:n}),n.\u0275inj=P({imports:[D.forChild(ae),D]});let o=n;return o})();var we=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=j({type:n}),n.\u0275inj=P({imports:[O,Z,X]});let o=n;return o})();export{we as ReactiveModule};