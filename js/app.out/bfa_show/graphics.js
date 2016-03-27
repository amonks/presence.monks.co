// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('bfa_show.graphics');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('bfa_show.window');
goog.require('schema.core');
goog.require('bfa_show.v2');
goog.require('re_frame.core');
window.addEventListener("resize",(function (){
var G__16580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_window], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16580) : re_frame.core.dispatch.call(null,G__16580));
}));
window.addEventListener("click",(function (p1__16581_SHARP_){
var G__16582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_node_DASH_at_DASH_position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16581_SHARP_.clientX,p1__16581_SHARP_.clientY], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16582) : re_frame.core.dispatch.call(null,G__16582));
}));
bfa_show.graphics.node_schema = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,bfa_show.v2.schema,cljs.core.cst$kw$size,schema.core.Num], null);
bfa_show.graphics.dart_schema = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$progress,schema.core.Num,cljs.core.cst$kw$from,bfa_show.graphics.node_schema,cljs.core.cst$kw$to,bfa_show.graphics.node_schema], null);
bfa_show.graphics.schema = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.graphics.node_schema], null),cljs.core.cst$kw$darts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.graphics.dart_schema], null)], null);
bfa_show.graphics.ipad_nodes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) / (4)),((3) / (4))], null),cljs.core.cst$kw$size,(70)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) / (4)),((1) / (4))], null),cljs.core.cst$kw$size,(70)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((3) / (4)),((3) / (4))], null),cljs.core.cst$kw$size,(70)], null)], null);
bfa_show.graphics.initial_state = (function bfa_show$graphics$initial_state(){
var node = (function (p1__16583_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(bfa_show.graphics.ipad_nodes,p1__16583_SHARP_);
});
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodes,bfa_show.graphics.ipad_nodes,cljs.core.cst$kw$darts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,node((0)),cljs.core.cst$kw$to,node((1)),cljs.core.cst$kw$progress,(0)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,node((1)),cljs.core.cst$kw$to,node((2)),cljs.core.cst$kw$progress,(0)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,node((2)),cljs.core.cst$kw$to,node((0)),cljs.core.cst$kw$progress,(0)], null)], null)], null);
});
bfa_show.graphics.setup = (function bfa_show$graphics$setup(){
return quil.core.frame_rate((30));
});
bfa_show.graphics.correct_position = (function bfa_show$graphics$correct_position(x,y,width,height){
var left = (x - (width / (2)));
var top = (y - (height / (2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,top], null);
});
bfa_show.graphics.draw_dart_line = (function bfa_show$graphics$draw_dart_line(dart){
var dimensoions = (function (){var G__16585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dimensions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16585) : re_frame.core.subscribe.call(null,G__16585));
})();
var to = bfa_show.window.scale(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dart,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$to,cljs.core.cst$kw$position], null)));
var from = bfa_show.window.scale(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dart,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$from,cljs.core.cst$kw$position], null)));
return quil.core.line.cljs$core$IFn$_invoke$arity$4(bfa_show.v2.x(to),bfa_show.v2.y(to),bfa_show.v2.x(from),bfa_show.v2.y(from));
});
bfa_show.graphics.draw_dart = (function bfa_show$graphics$draw_dart(var_args){
var args16586 = [];
var len__7517__auto___16595 = arguments.length;
var i__7518__auto___16596 = (0);
while(true){
if((i__7518__auto___16596 < len__7517__auto___16595)){
args16586.push((arguments[i__7518__auto___16596]));

var G__16597 = (i__7518__auto___16596 + (1));
i__7518__auto___16596 = G__16597;
continue;
} else {
}
break;
}

var G__16588 = args16586.length;
switch (G__16588) {
case 4:
return bfa_show.graphics.draw_dart.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 1:
return bfa_show.graphics.draw_dart.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16586.length)].join('')));

}
});

bfa_show.graphics.draw_dart.cljs$core$IFn$_invoke$arity$4 = (function (x,y,width,height){
var position = bfa_show.graphics.correct_position(x,y,width,height);
quil.core.fill.cljs$core$IFn$_invoke$arity$1((0));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(bfa_show.v2.x(position),bfa_show.v2.y(position),width,height);
});

bfa_show.graphics.draw_dart.cljs$core$IFn$_invoke$arity$1 = (function (dart){
var to = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dart,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$to,cljs.core.cst$kw$position], null));
var from = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dart,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$from,cljs.core.cst$kw$position], null));
var position = (function (){var G__16591 = from;
var G__16592 = (function (){var G__16593 = (bfa_show.v2.subt.cljs$core$IFn$_invoke$arity$2 ? bfa_show.v2.subt.cljs$core$IFn$_invoke$arity$2(to,from) : bfa_show.v2.subt.call(null,to,from));
var G__16594 = cljs.core.cst$kw$progress.cljs$core$IFn$_invoke$arity$1(dart);
return (bfa_show.v2.mult.cljs$core$IFn$_invoke$arity$2 ? bfa_show.v2.mult.cljs$core$IFn$_invoke$arity$2(G__16593,G__16594) : bfa_show.v2.mult.call(null,G__16593,G__16594));
})();
return (bfa_show.v2.add.cljs$core$IFn$_invoke$arity$2 ? bfa_show.v2.add.cljs$core$IFn$_invoke$arity$2(G__16591,G__16592) : bfa_show.v2.add.call(null,G__16591,G__16592));
})();
var scaled_position = bfa_show.window.scale(position);
bfa_show.graphics.draw_dart_line(dart);

return bfa_show.graphics.draw_dart.cljs$core$IFn$_invoke$arity$4(bfa_show.v2.x(scaled_position),bfa_show.v2.y(scaled_position),(9),(9));
});

bfa_show.graphics.draw_dart.cljs$lang$maxFixedArity = 4;
bfa_show.graphics.draw_node = (function bfa_show$graphics$draw_node(var_args){
var args16599 = [];
var len__7517__auto___16607 = arguments.length;
var i__7518__auto___16608 = (0);
while(true){
if((i__7518__auto___16608 < len__7517__auto___16607)){
args16599.push((arguments[i__7518__auto___16608]));

var G__16609 = (i__7518__auto___16608 + (1));
i__7518__auto___16608 = G__16609;
continue;
} else {
}
break;
}

var G__16601 = args16599.length;
switch (G__16601) {
case 4:
return bfa_show.graphics.draw_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 1:
return bfa_show.graphics.draw_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16599.length)].join('')));

}
});

bfa_show.graphics.draw_node.cljs$core$IFn$_invoke$arity$4 = (function (x,y,width,height){
var position = bfa_show.graphics.correct_position(x,y,width,height);
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(bfa_show.v2.x(position),bfa_show.v2.y(position),width,height);
});

bfa_show.graphics.draw_node.cljs$core$IFn$_invoke$arity$1 = (function (node){
var dimensions = (function (){var G__16603 = (function (){var G__16604 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dimensions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16604) : re_frame.core.subscribe.call(null,G__16604));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16603) : cljs.core.deref.call(null,G__16603));
})();
var position = (function (){var G__16605 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(node);
var G__16606 = dimensions;
return (bfa_show.v2.mult.cljs$core$IFn$_invoke$arity$2 ? bfa_show.v2.mult.cljs$core$IFn$_invoke$arity$2(G__16605,G__16606) : bfa_show.v2.mult.call(null,G__16605,G__16606));
})();
return bfa_show.graphics.draw_node.cljs$core$IFn$_invoke$arity$4(bfa_show.v2.x(position),bfa_show.v2.y(position),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(node));
});

bfa_show.graphics.draw_node.cljs$lang$maxFixedArity = 4;
bfa_show.graphics.draw = (function bfa_show$graphics$draw(){
var video_playing_QMARK_ = (function (){var G__16621 = (function (){var G__16622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video_DASH_playing_QMARK_], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16622) : re_frame.core.subscribe.call(null,G__16622));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16621) : cljs.core.deref.call(null,G__16621));
})();
var dimensions = (function (){var G__16624 = (function (){var G__16625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dimensions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16625) : re_frame.core.subscribe.call(null,G__16625));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16624) : cljs.core.deref.call(null,G__16624));
})();
if(cljs.core.not(video_playing_QMARK_)){
var G__16626_16629 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16626_16629) : re_frame.core.dispatch.call(null,G__16626_16629));
} else {
}

var nodes = (function (){var G__16627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodes], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16627) : re_frame.core.subscribe.call(null,G__16627));
})();
var darts = (function (){var G__16628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$darts], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16628) : re_frame.core.subscribe.call(null,G__16628));
})();
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.rect,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),dimensions));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfa_show.graphics.draw_dart,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(darts) : cljs.core.deref.call(null,darts))));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfa_show.graphics.draw_node,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(nodes) : cljs.core.deref.call(null,nodes))));
});
bfa_show.graphics.init = (function bfa_show$graphics$init(){
var dimensions = (function (){var G__16634 = (function (){var G__16635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dimensions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16635) : re_frame.core.subscribe.call(null,G__16635));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16634) : cljs.core.deref.call(null,G__16634));
})();
bfa_show.graphics.header = ((function (dimensions){
return (function bfa_show$graphics$init_$_header(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$host,"graphics",cljs.core.cst$kw$bgcolor,"#ffffff",cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.v2.x(dimensions),bfa_show.v2.y(dimensions)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(bfa_show.graphics.setup))?((function (dimensions){
return (function() { 
var G__16636__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfa_show.graphics.setup,args);
};
var G__16636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16637__i = 0, G__16637__a = new Array(arguments.length -  0);
while (G__16637__i < G__16637__a.length) {G__16637__a[G__16637__i] = arguments[G__16637__i + 0]; ++G__16637__i;}
  args = new cljs.core.IndexedSeq(G__16637__a,0);
} 
return G__16636__delegate.call(this,args);};
G__16636.cljs$lang$maxFixedArity = 0;
G__16636.cljs$lang$applyTo = (function (arglist__16638){
var args = cljs.core.seq(arglist__16638);
return G__16636__delegate(args);
});
G__16636.cljs$core$IFn$_invoke$arity$variadic = G__16636__delegate;
return G__16636;
})()
;})(dimensions))
:bfa_show.graphics.setup),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(bfa_show.graphics.draw))?((function (dimensions){
return (function() { 
var G__16639__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bfa_show.graphics.draw,args);
};
var G__16639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16640__i = 0, G__16640__a = new Array(arguments.length -  0);
while (G__16640__i < G__16640__a.length) {G__16640__a[G__16640__i] = arguments[G__16640__i + 0]; ++G__16640__i;}
  args = new cljs.core.IndexedSeq(G__16640__a,0);
} 
return G__16639__delegate.call(this,args);};
G__16639.cljs$lang$maxFixedArity = 0;
G__16639.cljs$lang$applyTo = (function (arglist__16641){
var args = cljs.core.seq(arglist__16641);
return G__16639__delegate(args);
});
G__16639.cljs$core$IFn$_invoke$arity$variadic = G__16639__delegate;
return G__16639;
})()
;})(dimensions))
:bfa_show.graphics.draw)], 0));
});})(dimensions))
;
goog.exportSymbol('bfa_show.graphics.header', bfa_show.graphics.header);

if(cljs.core.truth_(cljs.core.some(((function (dimensions){
return (function (p1__15512__15513__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__15512__15513__auto__);
});})(dimensions))
,null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,bfa_show.graphics.header,cljs.core.cst$kw$host_DASH_id,"graphics"], null));
}
});
