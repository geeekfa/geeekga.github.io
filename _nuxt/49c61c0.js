(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{394:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{form:{projectID:null,clientID:null}}},computed:{isEnabledLogin:function(){return!0}},methods:{onFilter:function(){},onReset:function(){this.form={projectID:null,clientID:null}}}},r=n(50),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"fs-global-container-content-tab",attrs:{"no-body":""}},[e("b-tabs",{attrs:{card:""}},[e("b-tab",{attrs:{title:"Filters",active:""}},[e("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(n){var l=n.handleSubmit;return[e("b-form",{on:{submit:function(e){return e.preventDefault(),l(t.onFilter)},reset:t.onReset}},[e("b-form-group",{attrs:{"label-cols":"2","content-cols":"2",label:"Project ID:","label-for":"nested-projectID","label-size":"sm","label-align":"right"}},[e("b-form-input",{attrs:{id:"nested-projectID",size:"sm"},model:{value:t.form.projectID,callback:function(e){t.$set(t.form,"projectID",e)},expression:"form.projectID"}})],1),t._v(" "),e("ValidationProvider",{attrs:{rules:{required:!0,min:3},name:"Client"},scopedSlots:t._u([{key:"default",fn:function(n){var l=n.valid,r=n.errors;return[e("b-form-group",{attrs:{"label-cols":"2","content-cols":"3",label:"Client:","label-for":"nested-client","label-size":"sm","label-align":"right"}},[e("b-form-input",{attrs:{id:"nested-client",size:"sm",state:!r[0]&&(!!l||null)},model:{value:t.form.clientID,callback:function(e){t.$set(t.form,"clientID",e)},expression:"form.clientID"}}),t._v(" "),e("b-form-invalid-feedback",[t._v("\n                "+t._s(r[0])+"\n              ")])],1)]}}],null,!0)}),t._v(" "),e("b-button",{attrs:{type:"submit",variant:"success"}},[t._v("\n            Filter\n          ")]),t._v(" "),e("b-button",{staticClass:"ml-2",attrs:{type:"reset"}},[t._v("\n            Reset\n          ")])],1)]}}])})],1),t._v(" "),e("b-tab",{attrs:{title:"Results"}},[e("b-card-text",[t._v("Tab contents 2")])],1)],1)],1)}),[],!1,null,"7a063b0c",null);e.default=component.exports}}]);