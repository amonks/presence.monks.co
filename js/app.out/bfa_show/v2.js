// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('bfa_show.v2');
goog.require('cljs.core');
goog.require('schema.core');
bfa_show.v2.schema = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Num], null);
bfa_show.v2.create = (function bfa_show$v2$create(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
bfa_show.v2.x = (function bfa_show$v2$x(v2){
return cljs.core.first(v2);
});
bfa_show.v2.y = (function bfa_show$v2$y(v2){
return cljs.core.last(v2);
});
bfa_show.v2.v_reduce = (function bfa_show$v2$v_reduce(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14650 = arguments.length;
var i__7518__auto___14651 = (0);
while(true){
if((i__7518__auto___14651 < len__7517__auto___14650)){
args__7524__auto__.push((arguments[i__7518__auto___14651]));

var G__14652 = (i__7518__auto___14651 + (1));
i__7518__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((1) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((1)),(0))):null);
return bfa_show.v2.v_reduce.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7525__auto__);
});

bfa_show.v2.v_reduce.cljs$core$IFn$_invoke$arity$variadic = (function (fun,vecs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14648 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfa_show.v2.x,vecs);
return (fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(G__14648) : fun.call(null,G__14648));
})(),(function (){var G__14649 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bfa_show.v2.y,vecs);
return (fun.cljs$core$IFn$_invoke$arity$1 ? fun.cljs$core$IFn$_invoke$arity$1(G__14649) : fun.call(null,G__14649));
})()], null);
});

bfa_show.v2.v_reduce.cljs$lang$maxFixedArity = (1);

bfa_show.v2.v_reduce.cljs$lang$applyTo = (function (seq14646){
var G__14647 = cljs.core.first(seq14646);
var seq14646__$1 = cljs.core.next(seq14646);
return bfa_show.v2.v_reduce.cljs$core$IFn$_invoke$arity$variadic(G__14647,seq14646__$1);
});
bfa_show.v2.apply_operator_with_vector_or_scalar = (function bfa_show$v2$apply_operator_with_vector_or_scalar(fun,a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(b),cljs.core.PersistentVector)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14661 = bfa_show.v2.x(a);
var G__14662 = bfa_show.v2.x(b);
return (fun.cljs$core$IFn$_invoke$arity$2 ? fun.cljs$core$IFn$_invoke$arity$2(G__14661,G__14662) : fun.call(null,G__14661,G__14662));
})(),(function (){var G__14663 = bfa_show.v2.y(a);
var G__14664 = bfa_show.v2.y(b);
return (fun.cljs$core$IFn$_invoke$arity$2 ? fun.cljs$core$IFn$_invoke$arity$2(G__14663,G__14664) : fun.call(null,G__14663,G__14664));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14665 = bfa_show.v2.x(a);
var G__14666 = b;
return (fun.cljs$core$IFn$_invoke$arity$2 ? fun.cljs$core$IFn$_invoke$arity$2(G__14665,G__14666) : fun.call(null,G__14665,G__14666));
})(),(function (){var G__14667 = bfa_show.v2.y(a);
var G__14668 = b;
return (fun.cljs$core$IFn$_invoke$arity$2 ? fun.cljs$core$IFn$_invoke$arity$2(G__14667,G__14668) : fun.call(null,G__14667,G__14668));
})()], null);
}
});
bfa_show.v2.subt = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfa_show.v2.apply_operator_with_vector_or_scalar,cljs.core._);
bfa_show.v2.mult = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfa_show.v2.apply_operator_with_vector_or_scalar,cljs.core._STAR_);
bfa_show.v2.div = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfa_show.v2.apply_operator_with_vector_or_scalar,cljs.core._SLASH_);
bfa_show.v2.add = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bfa_show.v2.apply_operator_with_vector_or_scalar,cljs.core._PLUS_);
bfa_show.v2.mag = (function bfa_show$v2$mag(v){
return Math.sqrt(((bfa_show.v2.x(v) * bfa_show.v2.x(v)) + (bfa_show.v2.y(v) * bfa_show.v2.y(v))));
});
bfa_show.v2.normalize = (function bfa_show$v2$normalize(v){
var G__14671 = v;
var G__14672 = bfa_show.v2.mag(v);
return (bfa_show.v2.div.cljs$core$IFn$_invoke$arity$2 ? bfa_show.v2.div.cljs$core$IFn$_invoke$arity$2(G__14671,G__14672) : bfa_show.v2.div.call(null,G__14671,G__14672));
});
