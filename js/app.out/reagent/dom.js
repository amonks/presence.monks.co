// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6459__auto__ = (function (){var and__6447__auto__ = typeof ReactDOM !== 'undefined';
if(and__6447__auto__){
return ReactDOM;
} else {
return and__6447__auto__;
}
})();
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
var and__6447__auto__ = typeof require !== 'undefined';
if(and__6447__auto__){
return require("react-dom");
} else {
return and__6447__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$dom], 0)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__15052 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15052) : cljs.core.atom.call(null,G__15052));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_15055 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_15055){
return (function (){
var _STAR_always_update_STAR_15056 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_15056;
}});})(_STAR_always_update_STAR_15055))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_15055;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args15057 = [];
var len__7517__auto___15060 = arguments.length;
var i__7518__auto___15061 = (0);
while(true){
if((i__7518__auto___15061 < len__7517__auto___15060)){
args15057.push((arguments[i__7518__auto___15061]));

var G__15062 = (i__7518__auto___15061 + (1));
i__7518__auto___15061 = G__15062;
continue;
} else {
}
break;
}

var G__15059 = args15057.length;
switch (G__15059) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15057.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__15068_15072 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__15069_15073 = null;
var count__15070_15074 = (0);
var i__15071_15075 = (0);
while(true){
if((i__15071_15075 < count__15070_15074)){
var v_15076 = chunk__15069_15073.cljs$core$IIndexed$_nth$arity$2(null,i__15071_15075);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_15076);

var G__15077 = seq__15068_15072;
var G__15078 = chunk__15069_15073;
var G__15079 = count__15070_15074;
var G__15080 = (i__15071_15075 + (1));
seq__15068_15072 = G__15077;
chunk__15069_15073 = G__15078;
count__15070_15074 = G__15079;
i__15071_15075 = G__15080;
continue;
} else {
var temp__4425__auto___15081 = cljs.core.seq(seq__15068_15072);
if(temp__4425__auto___15081){
var seq__15068_15082__$1 = temp__4425__auto___15081;
if(cljs.core.chunked_seq_QMARK_(seq__15068_15082__$1)){
var c__7262__auto___15083 = cljs.core.chunk_first(seq__15068_15082__$1);
var G__15084 = cljs.core.chunk_rest(seq__15068_15082__$1);
var G__15085 = c__7262__auto___15083;
var G__15086 = cljs.core.count(c__7262__auto___15083);
var G__15087 = (0);
seq__15068_15072 = G__15084;
chunk__15069_15073 = G__15085;
count__15070_15074 = G__15086;
i__15071_15075 = G__15087;
continue;
} else {
var v_15088 = cljs.core.first(seq__15068_15082__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_15088);

var G__15089 = cljs.core.next(seq__15068_15082__$1);
var G__15090 = null;
var G__15091 = (0);
var G__15092 = (0);
seq__15068_15072 = G__15089;
chunk__15069_15073 = G__15090;
count__15070_15074 = G__15091;
i__15071_15075 = G__15092;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
