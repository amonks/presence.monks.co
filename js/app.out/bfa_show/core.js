// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('bfa_show.core');
goog.require('cljs.core');
goog.require('bfa_show.handlers');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('bfa_show.views');
goog.require('accountant.core');
goog.require('bfa_show.graphics');
goog.require('bfa_show.subs');
goog.require('re_frame.core');
var action__12123__auto___21364 = (function (params__12124__auto__){
if(cljs.core.map_QMARK_(params__12124__auto__)){
var map__21359 = params__12124__auto__;
var map__21359__$1 = ((((!((map__21359 == null)))?((((map__21359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21359):map__21359);
var G__21361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_page,cljs.core.cst$kw$home], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21361) : re_frame.core.dispatch.call(null,G__21361));
} else {
if(cljs.core.vector_QMARK_(params__12124__auto__)){
var vec__21362 = params__12124__auto__;
var G__21363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_page,cljs.core.cst$kw$home], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21363) : re_frame.core.dispatch.call(null,G__21363));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__12123__auto___21364);

var action__12123__auto___21370 = (function (params__12124__auto__){
if(cljs.core.map_QMARK_(params__12124__auto__)){
var map__21365 = params__12124__auto__;
var map__21365__$1 = ((((!((map__21365 == null)))?((((map__21365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21365):map__21365);
var G__21367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_page,cljs.core.cst$kw$colophon], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21367) : re_frame.core.dispatch.call(null,G__21367));
} else {
if(cljs.core.vector_QMARK_(params__12124__auto__)){
var vec__21368 = params__12124__auto__;
var G__21369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_page,cljs.core.cst$kw$colophon], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21369) : re_frame.core.dispatch.call(null,G__21369));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/colophon",action__12123__auto___21370);

var action__12123__auto___21376 = (function (params__12124__auto__){
if(cljs.core.map_QMARK_(params__12124__auto__)){
var map__21371 = params__12124__auto__;
var map__21371__$1 = ((((!((map__21371 == null)))?((((map__21371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21371):map__21371);
var G__21373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_page,cljs.core.cst$kw$nodes], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21373) : re_frame.core.dispatch.call(null,G__21373));
} else {
if(cljs.core.vector_QMARK_(params__12124__auto__)){
var vec__21374 = params__12124__auto__;
var G__21375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_page,cljs.core.cst$kw$nodes], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21375) : re_frame.core.dispatch.call(null,G__21375));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/nodes",action__12123__auto___21376);

bfa_show.core.mount_root = (function bfa_show$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.render], null),document.getElementById("app"));
});
bfa_show.core.init = (function bfa_show$core$init(){
cljs.core.enable_console_print_BANG_();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["init has been called"], 0));

accountant.core.configure_navigation_BANG_();

accountant.core.dispatch_current_BANG_();

var G__21378_21379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__21378_21379) : re_frame.core.dispatch_sync.call(null,G__21378_21379));

bfa_show.core.mount_root();

return bfa_show.graphics.init();
});
bfa_show.core.init();
