// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args15521 = [];
var len__7517__auto___15524 = arguments.length;
var i__7518__auto___15525 = (0);
while(true){
if((i__7518__auto___15525 < len__7517__auto___15524)){
args15521.push((arguments[i__7518__auto___15525]));

var G__15526 = (i__7518__auto___15525 + (1));
i__7518__auto___15525 = G__15526;
continue;
} else {
}
break;
}

var G__15523 = args15521.length;
switch (G__15523) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15521.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;
quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__15536 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__15537 = null;
var count__15538 = (0);
var i__15539 = (0);
while(true){
if((i__15539 < count__15538)){
var vec__15540 = chunk__15537.cljs$core$IIndexed$_nth$arity$2(null,i__15539);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15540,(1),null);
var temp__4425__auto___15544 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4425__auto___15544)){
var handler_15545 = temp__4425__auto___15544;
(prc[cljs.core.name(processing_name)] = ((function (seq__15536,chunk__15537,count__15538,i__15539,handler_15545,temp__4425__auto___15544,vec__15540,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_15541 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_15545.cljs$core$IFn$_invoke$arity$0 ? handler_15545.cljs$core$IFn$_invoke$arity$0() : handler_15545.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_15541;
}});})(seq__15536,chunk__15537,count__15538,i__15539,handler_15545,temp__4425__auto___15544,vec__15540,processing_name,quil_name))
);
} else {
}

var G__15546 = seq__15536;
var G__15547 = chunk__15537;
var G__15548 = count__15538;
var G__15549 = (i__15539 + (1));
seq__15536 = G__15546;
chunk__15537 = G__15547;
count__15538 = G__15548;
i__15539 = G__15549;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__15536);
if(temp__4425__auto__){
var seq__15536__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15536__$1)){
var c__7262__auto__ = cljs.core.chunk_first(seq__15536__$1);
var G__15550 = cljs.core.chunk_rest(seq__15536__$1);
var G__15551 = c__7262__auto__;
var G__15552 = cljs.core.count(c__7262__auto__);
var G__15553 = (0);
seq__15536 = G__15550;
chunk__15537 = G__15551;
count__15538 = G__15552;
i__15539 = G__15553;
continue;
} else {
var vec__15542 = cljs.core.first(seq__15536__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15542,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15542,(1),null);
var temp__4425__auto___15554__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4425__auto___15554__$1)){
var handler_15555 = temp__4425__auto___15554__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__15536,chunk__15537,count__15538,i__15539,handler_15555,temp__4425__auto___15554__$1,vec__15542,processing_name,quil_name,seq__15536__$1,temp__4425__auto__){
return (function (){
var _STAR_applet_STAR_15543 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_15555.cljs$core$IFn$_invoke$arity$0 ? handler_15555.cljs$core$IFn$_invoke$arity$0() : handler_15555.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_15543;
}});})(seq__15536,chunk__15537,count__15538,i__15539,handler_15555,temp__4425__auto___15554__$1,vec__15542,processing_name,quil_name,seq__15536__$1,temp__4425__auto__))
);
} else {
}

var G__15556 = cljs.core.next(seq__15536__$1);
var G__15557 = null;
var G__15558 = (0);
var G__15559 = (0);
seq__15536 = G__15556;
chunk__15537 = G__15557;
count__15538 = G__15558;
i__15539 = G__15559;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__15560_SHARP_){
return (p1__15560_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15560_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__15560_SHARP_.call(null,options));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__6459__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var opts__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$setup], null),((function (opts,sketch_size,renderer,features){
return (function (p1__15561_SHARP_){
return ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(p1__15561_SHARP_)){
return (p1__15561_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__15561_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__15561_SHARP_.call(null));
} else {
return null;
}
});
;})(opts,sketch_size,renderer,features))
});})(opts,sketch_size,renderer,features))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_wheel], null),((function (opts,sketch_size,renderer,features){
return (function (p1__15562_SHARP_){
if(cljs.core.truth_(p1__15562_SHARP_)){
return ((function (opts,sketch_size,renderer,features){
return (function (){
var G__15564 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
return (p1__15562_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15562_SHARP_.cljs$core$IFn$_invoke$arity$1(G__15564) : p1__15562_SHARP_.call(null,G__15564));
});
;})(opts,sketch_size,renderer,features))
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
);
var attach_function = ((function (opts,sketch_size,renderer,features,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));

return prc.target_frame_rate = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60)) : cljs.core.atom.call(null,(60)));
});})(opts,sketch_size,renderer,features,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__7524__auto__ = [];
var len__7517__auto___15567 = arguments.length;
var i__7518__auto___15568 = (0);
while(true){
if((i__7518__auto___15568 < len__7517__auto___15567)){
args__7524__auto__.push((arguments[i__7518__auto___15568]));

var G__15569 = (i__7518__auto___15568 + (1));
i__7518__auto___15568 = G__15569;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__15566 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__15566);
})();
var renderer = (function (){var or__6459__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

return (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.warn("WARNING: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq15565){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15565));
});
quil.sketch.sketch_init_list = (function (){var G__15570 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15570) : cljs.core.atom.call(null,G__15570));
})();
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK_ = quil.sketch.empty_body_QMARK_();
var seq__15575 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(quil.sketch.sketch_init_list) : cljs.core.deref.call(null,quil.sketch.sketch_init_list)));
var chunk__15576 = null;
var count__15577 = (0);
var i__15578 = (0);
while(true){
if((i__15578 < count__15577)){
var sk = chunk__15576.cljs$core$IIndexed$_nth$arity$2(null,i__15578);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__15579 = seq__15575;
var G__15580 = chunk__15576;
var G__15581 = count__15577;
var G__15582 = (i__15578 + (1));
seq__15575 = G__15579;
chunk__15576 = G__15580;
count__15577 = G__15581;
i__15578 = G__15582;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__15575);
if(temp__4425__auto__){
var seq__15575__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15575__$1)){
var c__7262__auto__ = cljs.core.chunk_first(seq__15575__$1);
var G__15583 = cljs.core.chunk_rest(seq__15575__$1);
var G__15584 = c__7262__auto__;
var G__15585 = cljs.core.count(c__7262__auto__);
var G__15586 = (0);
seq__15575 = G__15583;
chunk__15576 = G__15584;
count__15577 = G__15585;
i__15578 = G__15586;
continue;
} else {
var sk = cljs.core.first(seq__15575__$1);
if(cljs.core.truth_(add_elem_QMARK_)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk).call(null);

var G__15587 = cljs.core.next(seq__15575__$1);
var G__15588 = null;
var G__15589 = (0);
var G__15590 = (0);
seq__15575 = G__15587;
chunk__15576 = G__15588;
count__15577 = G__15589;
i__15578 = G__15590;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
