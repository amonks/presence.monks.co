// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('bfa_show.handlers');
goog.require('cljs.core');
goog.require('bfa_show.state');
goog.require('re_frame.core');
goog.require('bfa_show.window');
goog.require('bfa_show.v2');
goog.require('schema.core');
/**
 * throw an exception if db doesn't match the schema
 */
bfa_show.handlers.check_and_throw_BANG_ = (function bfa_show$handlers$check_and_throw_BANG_(a_schema,db){
var temp__4423__auto__ = schema.core.check(a_schema,db);
if(cljs.core.truth_(temp__4423__auto__)){
var problems = temp__4423__auto__;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["problems... ",problems], 0));
} else {
return null;
}
});
bfa_show.handlers.check_schema_mw = (function (){var G__16646 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfa_show.handlers.check_and_throw_BANG_,bfa_show.state.schema);
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__16646) : re_frame.core.after.call(null,G__16646));
})();
bfa_show.handlers.constrain = (function bfa_show$handlers$constrain(var_args){
var args16647 = [];
var len__7517__auto___16650 = arguments.length;
var i__7518__auto___16651 = (0);
while(true){
if((i__7518__auto___16651 < len__7517__auto___16650)){
args16647.push((arguments[i__7518__auto___16651]));

var G__16652 = (i__7518__auto___16651 + (1));
i__7518__auto___16651 = G__16652;
continue;
} else {
}
break;
}

var G__16649 = args16647.length;
switch (G__16649) {
case 4:
return bfa_show.handlers.constrain.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return bfa_show.handlers.constrain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16647.length)].join('')));

}
});

bfa_show.handlers.constrain.cljs$core$IFn$_invoke$arity$4 = (function (fun,i,minimum,maximum){
var result = (fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(i) : fun.call(null,i));
if((result > maximum)){
return minimum;
} else {
if((result < minimum)){
return maximum;
} else {
return result;
}
}
});

bfa_show.handlers.constrain.cljs$core$IFn$_invoke$arity$2 = (function (fun,i){
return bfa_show.handlers.constrain.cljs$core$IFn$_invoke$arity$4(fun,i,(0),(1));
});

bfa_show.handlers.constrain.cljs$lang$maxFixedArity = 4;
bfa_show.handlers.constrained_PLUS_ = (function bfa_show$handlers$constrained_PLUS_(amount){
return (function (p1__16654_SHARP_){
return bfa_show.handlers.constrain.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,amount),p1__16654_SHARP_);
});
});
bfa_show.handlers.get_another = (function bfa_show$handlers$get_another(f,c,_BANG_){
while(true){
var attempt = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_BANG_,attempt)){
return attempt;
} else {
continue;
}
break;
}
});
bfa_show.handlers.get_another_randomly = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfa_show.handlers.get_another,cljs.core.rand_nth);
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,bfa_show.handlers.check_schema_mw,(function (_,___$1){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["initializing db"], 0));

return bfa_show.state.initial_state();
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$set_DASH_page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.handlers.check_schema_mw,(re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$current_DASH_page) : re_frame.core.path.call(null,cljs.core.cst$kw$current_DASH_page)),re_frame.core.trim_v], null),(function (_,p__16655){
var vec__16656 = p__16655;
var new_page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16656,(0),null);
return new_page;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resize_DASH_window,(function (db,p__16657){
var vec__16658 = p__16657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16658,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16658,(1),null);
var size__$1 = (function (){var or__6459__auto__ = size;
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return bfa_show.window.size();
}
})();
document.getElementById("graphics").width = bfa_show.v2.x(size__$1);

document.getElementById("graphics").height = bfa_show.v2.y(size__$1);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$dimensions,size__$1);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$frame,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.handlers.check_schema_mw,(re_frame.core.path.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$header_DASH_graphics,cljs.core.cst$kw$darts) : re_frame.core.path.call(null,cljs.core.cst$kw$header_DASH_graphics,cljs.core.cst$kw$darts)),re_frame.core.trim_v], null),(function (darts,_){
var inc_dart = bfa_show.handlers.constrained_PLUS_(0.005);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (inc_dart){
return (function (p1__16659_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__16659_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$progress], null),inc_dart);
});})(inc_dart))
,darts);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.handlers.check_schema_mw,(re_frame.core.path.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$header_DASH_graphics,cljs.core.cst$kw$nodes) : re_frame.core.path.call(null,cljs.core.cst$kw$header_DASH_graphics,cljs.core.cst$kw$nodes)),re_frame.core.trim_v], null),(function (nodes,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null),cljs.core.cst$kw$size,cljs.core.rand.cljs$core$IFn$_invoke$arity$1((50))], null));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_node_DASH_at_DASH_position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.handlers.check_schema_mw,(re_frame.core.path.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$header_DASH_graphics,cljs.core.cst$kw$nodes) : re_frame.core.path.call(null,cljs.core.cst$kw$header_DASH_graphics,cljs.core.cst$kw$nodes)),re_frame.core.trim_v], null),(function (nodes,p__16660){
var vec__16661 = p__16660;
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16661,(0),null);
var window_size = (function (){var G__16663 = (function (){var G__16664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dimensions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16664) : re_frame.core.subscribe.call(null,G__16664));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16663) : cljs.core.deref.call(null,G__16663));
})();
var scaled_position = (bfa_show.v2.div.cljs$core$IFn$_invoke$arity$2 ? bfa_show.v2.div.cljs$core$IFn$_invoke$arity$2(position,window_size) : bfa_show.v2.div.call(null,position,window_size));
var new_node = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.v2.x(scaled_position),bfa_show.v2.y(scaled_position)], null),cljs.core.cst$kw$size,(10)], null);
var G__16665_16666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$add_DASH_dart_DASH_from_DASH_node,new_node], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16665_16666) : re_frame.core.dispatch.call(null,G__16665_16666));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,new_node);
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_dart_DASH_from_DASH_node,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.handlers.check_schema_mw,(re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$header_DASH_graphics) : re_frame.core.path.call(null,cljs.core.cst$kw$header_DASH_graphics)),re_frame.core.trim_v], null),(function (state,p__16667){
var vec__16668 = p__16667;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16668,(0),null);
var darts = cljs.core.cst$kw$darts.cljs$core$IFn$_invoke$arity$1(state);
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$darts], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(darts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,node,cljs.core.cst$kw$to,(bfa_show.handlers.get_another_randomly.cljs$core$IFn$_invoke$arity$2 ? bfa_show.handlers.get_another_randomly.cljs$core$IFn$_invoke$arity$2(nodes,node) : bfa_show.handlers.get_another_randomly.call(null,nodes,node)),cljs.core.cst$kw$progress,(0)], null)));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$add_DASH_dart,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.handlers.check_schema_mw,(re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$header_DASH_graphics) : re_frame.core.path.call(null,cljs.core.cst$kw$header_DASH_graphics)),re_frame.core.trim_v], null),(function (state,_){
var nodes = cljs.core.cst$kw$nodes.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$darts], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$darts.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,cljs.core.rand_nth(nodes),cljs.core.cst$kw$to,cljs.core.rand_nth(nodes),cljs.core.cst$kw$progress,(0)], null)));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$stop_DASH_video,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.handlers.check_schema_mw,(re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$video_DASH_playing_QMARK_) : re_frame.core.path.call(null,cljs.core.cst$kw$video_DASH_playing_QMARK_)),re_frame.core.trim_v], null),(function (_,___$1){
return false;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$play_DASH_video,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.handlers.check_schema_mw,(re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$video_DASH_playing_QMARK_) : re_frame.core.path.call(null,cljs.core.cst$kw$video_DASH_playing_QMARK_)),re_frame.core.trim_v], null),(function (_,___$1){
return true;
}));
