// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.handlers');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
/**
 * See https://github.com/Day8/re-frame/issues/65
 */
re_frame.handlers.report_middleware_factories = (function re_frame$handlers$report_middleware_factories(v){
var name_of_factory = (function re_frame$handlers$report_middleware_factories_$_name_of_factory(f){
return cljs.core.cst$kw$re_DASH_frame_DASH_factory_DASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f));
});
var factory_names_in = (function re_frame$handlers$report_middleware_factories_$_factory_names_in(v__$1){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(name_of_factory,v__$1));
});
var seq__15215 = cljs.core.seq(factory_names_in(v));
var chunk__15216 = null;
var count__15217 = (0);
var i__15218 = (0);
while(true){
if((i__15218 < count__15217)){
var name = chunk__15216.cljs$core$IIndexed$_nth$arity$2(null,i__15218);
re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"",name,"\" used incorrectly. Must be used like this \"(",name," ...)\", whereas you just used \"",name,"\"."], 0));

var G__15219 = seq__15215;
var G__15220 = chunk__15216;
var G__15221 = count__15217;
var G__15222 = (i__15218 + (1));
seq__15215 = G__15219;
chunk__15216 = G__15220;
count__15217 = G__15221;
i__15218 = G__15222;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__15215);
if(temp__4425__auto__){
var seq__15215__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15215__$1)){
var c__7262__auto__ = cljs.core.chunk_first(seq__15215__$1);
var G__15223 = cljs.core.chunk_rest(seq__15215__$1);
var G__15224 = c__7262__auto__;
var G__15225 = cljs.core.count(c__7262__auto__);
var G__15226 = (0);
seq__15215 = G__15223;
chunk__15216 = G__15224;
count__15217 = G__15225;
i__15218 = G__15226;
continue;
} else {
var name = cljs.core.first(seq__15215__$1);
re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"",name,"\" used incorrectly. Must be used like this \"(",name," ...)\", whereas you just used \"",name,"\"."], 0));

var G__15227 = cljs.core.next(seq__15215__$1);
var G__15228 = null;
var G__15229 = (0);
var G__15230 = (0);
seq__15215 = G__15227;
chunk__15216 = G__15228;
count__15217 = G__15229;
i__15218 = G__15230;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given a vector of middleware, filter out any nils, and use "comp" to compose the elements.
 *   v can have nested vectors, and will be flattened before "comp" is applied.
 *   For convienience, if v is a function (assumed to be middleware already), just return it.
 *   Filtering out nils allows us to create Middleware conditionally like this:
 *   (comp-middleware [pure (when debug? debug)])  ;; that 'when' might leave a nil
 *   
 */
re_frame.handlers.comp_middleware = (function re_frame$handlers$comp_middleware(v){
if(cljs.core.fn_QMARK_(v)){
return v;
} else {
if(cljs.core.coll_QMARK_(v)){
var v__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(v));
re_frame.handlers.report_middleware_factories(v__$1);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,v__$1);
} else {
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: comp-middleware expects a vector, got: ",v], 0));

}
}
});
re_frame.handlers.id__GT_fn = (function (){var G__15231 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15231) : cljs.core.atom.call(null,G__15231));
})();
re_frame.handlers.lookup_handler = (function re_frame$handlers$lookup_handler(event_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.handlers.id__GT_fn) : cljs.core.deref.call(null,re_frame.handlers.id__GT_fn)),event_id);
});
/**
 * Unregister all event handlers
 */
re_frame.handlers.clear_handlers_BANG_ = (function re_frame$handlers$clear_handlers_BANG_(){
var G__15234 = re_frame.handlers.id__GT_fn;
var G__15235 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15234,G__15235) : cljs.core.reset_BANG_.call(null,G__15234,G__15235));
});
/**
 * register a handler for an event.
 *   This is low level and it is expected that "re-frame.core/register-handler" would
 *   generally be used.
 */
re_frame.handlers.register_base = (function re_frame$handlers$register_base(var_args){
var args15236 = [];
var len__7517__auto___15239 = arguments.length;
var i__7518__auto___15240 = (0);
while(true){
if((i__7518__auto___15240 < len__7517__auto___15239)){
args15236.push((arguments[i__7518__auto___15240]));

var G__15241 = (i__7518__auto___15240 + (1));
i__7518__auto___15240 = G__15241;
continue;
} else {
}
break;
}

var G__15238 = args15236.length;
switch (G__15238) {
case 2:
return re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15236.length)].join('')));

}
});

re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2 = (function (event_id,handler_fn){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.handlers.id__GT_fn) : cljs.core.deref.call(null,re_frame.handlers.id__GT_fn)),event_id)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: overwriting an event-handler for: ",event_id], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.handlers.id__GT_fn,cljs.core.assoc,event_id,handler_fn);
});

re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$3 = (function (event_id,middleware,handler_fn){
var mid_ware = re_frame.handlers.comp_middleware(middleware);
var midware_PLUS_hfn = (mid_ware.cljs$core$IFn$_invoke$arity$1 ? mid_ware.cljs$core$IFn$_invoke$arity$1(handler_fn) : mid_ware.call(null,handler_fn));
return re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(event_id,midware_PLUS_hfn);
});

re_frame.handlers.register_base.cljs$lang$maxFixedArity = 3;
re_frame.handlers._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the handler, then call it.
 *   By default, handlers are not assumed to be pure. They are called with
 *   two paramters:
 *  - the `app-db` atom
 *  - the event vector
 *   The handler is assumed to side-effect on `app-db` - the return value is ignored.
 *   To write a pure handler, use the "pure" middleware when registering the handler.
 */
re_frame.handlers.handle = (function re_frame$handlers$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var handler_fn = re_frame.handlers.lookup_handler(event_id);
if((handler_fn == null)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: no event handler registered for: \"",event_id,"\". Ignoring."], 0));
} else {
if(cljs.core.truth_(re_frame.handlers._STAR_handling_STAR_)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: while handling \"",re_frame.handlers._STAR_handling_STAR_,"\"  dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync in an event handler."], 0));
} else {
var _STAR_handling_STAR_15244 = re_frame.handlers._STAR_handling_STAR_;
re_frame.handlers._STAR_handling_STAR_ = event_v;

try{return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,event_v) : handler_fn.call(null,re_frame.db.app_db,event_v));
}finally {re_frame.handlers._STAR_handling_STAR_ = _STAR_handling_STAR_15244;
}}
}
});
