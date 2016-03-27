// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,(function (p1__15183_SHARP_){
return console.log(p1__15183_SHARP_);
}),cljs.core.cst$kw$warn,(function (p1__15184_SHARP_){
return console.warn(p1__15184_SHARP_);
}),cljs.core.cst$kw$error,(function (p1__15185_SHARP_){
return console.error(p1__15185_SHARP_);
}),cljs.core.cst$kw$group,(function (p1__15186_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__15186_SHARP_);
} else {
return console.log(p1__15186_SHARP_);
}
}),cljs.core.cst$kw$groupEnd,(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_frame.utils.default_loggers) : cljs.core.atom.call(null,re_frame.utils.default_loggers));
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_loggers)),cljs.core.set(cljs.core.keys(re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$empty_QMARK_,cljs.core.list(cljs.core.cst$sym$difference,cljs.core.list(cljs.core.cst$sym$set,cljs.core.list(cljs.core.cst$sym$keys,cljs.core.cst$sym$new_DASH_loggers)),cljs.core.list(cljs.core.cst$sym$set,cljs.core.list(cljs.core.cst$sym$keys,cljs.core.cst$sym$default_DASH_loggers))))], 0)))].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__7524__auto__ = [];
var len__7517__auto___15188 = arguments.length;
var i__7518__auto___15189 = (0);
while(true){
if((i__7518__auto___15189 < len__7517__auto___15188)){
args__7524__auto__.push((arguments[i__7518__auto___15189]));

var G__15190 = (i__7518__auto___15189 + (1));
i__7518__auto___15189 = G__15190;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$log.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq15187){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15187));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__7524__auto__ = [];
var len__7517__auto___15192 = arguments.length;
var i__7518__auto___15193 = (0);
while(true){
if((i__7518__auto___15193 < len__7517__auto___15192)){
args__7524__auto__.push((arguments[i__7518__auto___15193]));

var G__15194 = (i__7518__auto___15193 + (1));
i__7518__auto___15193 = G__15194;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$warn.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq15191){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15191));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__7524__auto__ = [];
var len__7517__auto___15196 = arguments.length;
var i__7518__auto___15197 = (0);
while(true){
if((i__7518__auto___15197 < len__7517__auto___15196)){
args__7524__auto__.push((arguments[i__7518__auto___15197]));

var G__15198 = (i__7518__auto___15197 + (1));
i__7518__auto___15197 = G__15198;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq15195){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15195));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__7524__auto__ = [];
var len__7517__auto___15200 = arguments.length;
var i__7518__auto___15201 = (0);
while(true){
if((i__7518__auto___15201 < len__7517__auto___15200)){
args__7524__auto__.push((arguments[i__7518__auto___15201]));

var G__15202 = (i__7518__auto___15201 + (1));
i__7518__auto___15201 = G__15202;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$groupEnd.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq15199){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15199));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__7524__auto__ = [];
var len__7517__auto___15204 = arguments.length;
var i__7518__auto___15205 = (0);
while(true){
if((i__7518__auto___15205 < len__7517__auto___15204)){
args__7524__auto__.push((arguments[i__7518__auto___15205]));

var G__15206 = (i__7518__auto___15205 + (1));
i__7518__auto___15205 = G__15206;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.utils.loggers) : cljs.core.deref.call(null,re_frame.utils.loggers))).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq15203){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15203));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: expected a vector event, but got: ",v], 0));
}
});
