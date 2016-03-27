// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('bfa_show.window');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('bfa_show.v2');
bfa_show.window.size = (function bfa_show$window$size(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null);
});
bfa_show.window.dispatch_resize = (function bfa_show$window$dispatch_resize(e){
var G__15428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resize_DASH_window,bfa_show.window.size()], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15428) : re_frame.core.dispatch.call(null,G__15428));
});
window.addEventListener("resize",bfa_show.window.dispatch_resize);
bfa_show.window.scale = (function bfa_show$window$scale(position){
var dimensions = (function (){var G__15432 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dimensions], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__15432) : re_frame.core.subscribe.call(null,G__15432));
})();
var G__15433 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dimensions) : cljs.core.deref.call(null,dimensions));
var G__15434 = position;
return (bfa_show.v2.mult.cljs$core$IFn$_invoke$arity$2 ? bfa_show.v2.mult.cljs$core$IFn$_invoke$arity$2(G__15433,G__15434) : bfa_show.v2.mult.call(null,G__15433,G__15434));
});
