// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.impl.batching');
goog.require('clojure.set');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom.generation !== 'undefined'){
} else {
reagent.ratom.generation = (0);
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
}
reagent.ratom.reactive_QMARK_ = (function reagent$ratom$reactive_QMARK_(){
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
});
reagent.ratom.running = (function reagent$ratom$running(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.ratom._running) : cljs.core.deref.call(null,reagent.ratom._running));
});
reagent.ratom.arr_len = (function reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
reagent.ratom.arr_eq = (function reagent$ratom$arr_eq(x,y){
var len = reagent.ratom.arr_len(x);
var and__6447__auto__ = (len === reagent.ratom.arr_len(y));
if(and__6447__auto__){
var i = (0);
while(true){
var or__6459__auto__ = (i === len);
if(or__6459__auto__){
return or__6459__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__14779 = (i + (1));
i = G__14779;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__6447__auto__;
}
});
reagent.ratom.in_context = (function reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR_14781 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14781;
}});
reagent.ratom.deref_capture = (function reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = reagent.ratom.generation = (reagent.ratom.generation + (1));


var res = reagent.ratom.in_context(r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__4429__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4429__auto__ == null)){
return null;
} else {
var r = temp__4429__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
reagent.ratom.check_watches = (function reagent$ratom$check_watches(old,new$){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
reagent.ratom.add_w = (function reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f));

return this$.watchesArr = null;
});
reagent.ratom.remove_w = (function reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key));

return this$.watchesArr = null;
});
reagent.ratom.notify_w = (function reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv(((function (w){
return (function (p1__14782_SHARP_,p2__14783_SHARP_,p3__14784_SHARP_){
var G__14786 = p1__14782_SHARP_;
G__14786.push(p2__14783_SHARP_);

G__14786.push(p3__14784_SHARP_);

return G__14786;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_14787 = (a[i]);
var f_14788 = (a[(i + (1))]);
(f_14788.cljs$core$IFn$_invoke$arity$4 ? f_14788.cljs$core$IFn$_invoke$arity$4(k_14787,this$,old,new$) : f_14788.call(null,k_14787,this$,old,new$));

var G__14789 = ((2) + i);
i = G__14789;
continue;
} else {
return null;
}
break;
}
});
reagent.ratom.pr_atom = (function reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,[cljs.core.str("#<"),cljs.core.str(s),cljs.core.str(" ")].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR_14791 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(a);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14791;
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if(typeof reagent.ratom.rea_queue !== 'undefined'){
} else {
reagent.ratom.rea_queue = null;
}
reagent.ratom.rea_enqueue = (function reagent$ratom$rea_enqueue(r){
if((reagent.ratom.rea_queue == null)){
reagent.ratom.rea_queue = [];

reagent.impl.batching.schedule();
} else {
}

return reagent.ratom.rea_queue.push(r);
});
reagent.ratom.flush_BANG_ = (function reagent$ratom$flush_BANG_(){
while(true){
var q = reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
reagent.ratom.rea_queue = null;

var n__7362__auto___14792 = q.length;
var i_14793 = (0);
while(true){
if((i_14793 < n__7362__auto___14792)){
(q[i_14793])._try_run();

var G__14794 = (i_14793 + (1));
i_14793 = G__14794;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_;

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$validator,cljs.core.cst$sym$new_DASH_value)], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$meta,cljs.core.cst$sym$validator,cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var args14795 = [];
var len__7517__auto___14803 = arguments.length;
var i__7518__auto___14804 = (0);
while(true){
if((i__7518__auto___14804 < len__7517__auto___14803)){
args14795.push((arguments[i__7518__auto___14804]));

var G__14805 = (i__7518__auto___14804 + (1));
i__7518__auto___14804 = G__14805;
continue;
} else {
}
break;
}

var G__14799 = args14795.length;
switch (G__14799) {
case 1:
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7536__auto__ = (new cljs.core.IndexedSeq(args14795.slice((1)),(0)));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7536__auto__);

}
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});

reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__14800){
var map__14801 = p__14800;
var map__14801__$1 = ((((!((map__14801 == null)))?((((map__14801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14801):map__14801);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14801__$1,cljs.core.cst$kw$meta);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14801__$1,cljs.core.cst$kw$validator);
return (new reagent.ratom.RAtom(x,meta,validator,null));
});

reagent.ratom.atom.cljs$lang$applyTo = (function (seq14796){
var G__14797 = cljs.core.first(seq14796);
var seq14796__$1 = cljs.core.next(seq14796);
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic(G__14797,seq14796__$1);
});

reagent.ratom.atom.cljs$lang$maxFixedArity = (1);
reagent.ratom.cache_key = "reagReactionCache";
reagent.ratom.cached_reaction = (function reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o[reagent.ratom.cache_key]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if(cljs.core.some_QMARK_(r)){
return cljs.core._deref(r);
} else {
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__14810 = f;
var G__14811 = cljs.core.cst$kw$on_DASH_dispose;
var G__14812 = ((function (G__14810,G__14811,m,m__$1,r){
return (function (x){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

var __14813 = (o[reagent.ratom.cache_key]);
var __14814__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__14813,k);
var __14815__$2 = (o[reagent.ratom.cache_key] = __14814__$1);

if(cljs.core.some_QMARK_(obj)){
obj.reaction = null;
} else {
}

if(cljs.core.some_QMARK_(destroy)){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__14810,G__14811,m,m__$1,r))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__14810,G__14811,G__14812) : reagent.ratom.make_reaction.call(null,G__14810,G__14811,G__14812));
})();
var v = cljs.core._deref(r__$1);
(o[reagent.ratom.cache_key] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

if(cljs.core.some_QMARK_(obj)){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4427__auto__ = self__.reaction;
if((temp__4427__auto__ == null)){
return reagent.ratom.cached_reaction(((function (temp__4427__auto__,this$__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
});})(temp__4427__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__4427__auto__;
return cljs.core._deref(r);
}
});

reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
});

reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$args,cljs.core.with_meta(cljs.core.cst$sym$reaction,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.Track.cljs$lang$type = true;

reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track";

reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"reagent.ratom/Track");
});

reagent.ratom.__GT_Track = (function reagent$ratom$__GT_Track(f,args,reaction){
return (new reagent.ratom.Track(f,args,reaction));
});

reagent.ratom.make_track = (function reagent$ratom$make_track(f,args){
return (new reagent.ratom.Track(f,args,null));
});
reagent.ratom.make_track_BANG_ = (function reagent$ratom$make_track_BANG_(f,args){
var t = reagent.ratom.make_track(f,args);
var r = (function (){var G__14819 = ((function (t){
return (function (){
return cljs.core._deref(t);
});})(t))
;
var G__14820 = cljs.core.cst$kw$auto_DASH_run;
var G__14821 = true;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__14819,G__14820,G__14821) : reagent.ratom.make_reaction.call(null,G__14819,G__14820,G__14821));
})();
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(r) : cljs.core.deref.call(null,r));

return r;
});
reagent.ratom.track = (function reagent$ratom$track(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14824 = arguments.length;
var i__7518__auto___14825 = (0);
while(true){
if((i__7518__auto___14825 < len__7517__auto___14824)){
args__7524__auto__.push((arguments[i__7518__auto___14825]));

var G__14826 = (i__7518__auto___14825 + (1));
i__7518__auto___14825 = G__14826;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((1) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((1)),(0))):null);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7525__auto__);
});

reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return reagent.ratom.make_track(f,args);
});

reagent.ratom.track.cljs$lang$maxFixedArity = (1);

reagent.ratom.track.cljs$lang$applyTo = (function (seq14822){
var G__14823 = cljs.core.first(seq14822);
var seq14822__$1 = cljs.core.next(seq14822);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic(G__14823,seq14822__$1);
});
reagent.ratom.track_BANG_ = (function reagent$ratom$track_BANG_(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14829 = arguments.length;
var i__7518__auto___14830 = (0);
while(true){
if((i__7518__auto___14830 < len__7517__auto___14829)){
args__7524__auto__.push((arguments[i__7518__auto___14830]));

var G__14831 = (i__7518__auto___14830 + (1));
i__7518__auto___14830 = G__14831;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((1) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((1)),(0))):null);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7525__auto__);
});

reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return reagent.ratom.make_track_BANG_(f,args);
});

reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq14827){
var G__14828 = cljs.core.first(seq14827);
var seq14827__$1 = cljs.core.next(seq14827);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14828,seq14827__$1);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_14832 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14832;
}});

reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if(cljs.core.some_QMARK_(self__.watches)){
return reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,[cljs.core.str("Cursor: "),cljs.core.str(self__.path)].join(''));
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if(((!((self__.ratom == null)))?((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || (self__.ratom.cljs$core$IDeref$))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.ratom,new_value) : cljs.core.reset_BANG_.call(null,self__.ratom,new_value));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14834 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14834) : f.call(null,G__14834));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14835 = a__$1._peek();
var G__14836 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14835,G__14836) : f.call(null,G__14835,G__14836));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14837 = a__$1._peek();
var G__14838 = x;
var G__14839 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14837,G__14838,G__14839) : f.call(null,G__14837,G__14838,G__14839));
})());
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__4427__auto__ = self__.reaction;
if((temp__4427__auto__ == null)){
var f = ((((!((self__.ratom == null)))?((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || (self__.ratom.cljs$core$IDeref$))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?((function (temp__4427__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.ratom) : cljs.core.deref.call(null,self__.ratom)),self__.path);
});})(temp__4427__auto__,oldstate,this$__$1))
:((function (temp__4427__auto__,oldstate,this$__$1){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(temp__4427__auto__,oldstate,this$__$1))
);
return reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__4427__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ratom,cljs.core.cst$sym$path,cljs.core.with_meta(cljs.core.cst$sym$reaction,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var or__6459__auto__ = ((!((src == null)))?(((false) || (src.reagent$ratom$IReactiveAtom$))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,src));
if(or__6459__auto__){
return or__6459__auto__;
} else {
return (cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IReactiveAtom,cljs.core.cst$sym$src),cljs.core.list(cljs.core.cst$sym$and,cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$src),cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$src))))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null,null,null));
});
reagent.ratom.with_let_destroy = (function reagent$ratom$with_let_destroy(v){
var temp__4429__auto__ = v.destroy;
if((temp__4429__auto__ == null)){
return null;
} else {
var f = temp__4429__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
reagent.ratom.with_let_values = (function reagent$ratom$with_let_values(key){
var temp__4427__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4427__auto__ == null)){
return [];
} else {
var c = temp__4427__auto__;
return reagent.ratom.cached_reaction(cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((!((this$ == null))) && (!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (reagent.ratom.run[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (reagent.ratom.run["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

reagent.ratom.handle_reaction_change = (function reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_14845 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_14845;
}});

reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if(((oldval === newval)) || (self__.dirty_QMARK_)){
return null;
} else {
self__.dirty_QMARK_ = true;

if((self__.auto_run == null)){
return reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run();
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
});

reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
self__.watching = derefed;

var seq__14846_14868 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__14847_14869 = null;
var count__14848_14870 = (0);
var i__14849_14871 = (0);
while(true){
if((i__14849_14871 < count__14848_14870)){
var w_14872 = chunk__14847_14869.cljs$core$IIndexed$_nth$arity$2(null,i__14849_14871);
cljs.core._add_watch(w_14872,this$,reagent.ratom.handle_reaction_change);

var G__14873 = seq__14846_14868;
var G__14874 = chunk__14847_14869;
var G__14875 = count__14848_14870;
var G__14876 = (i__14849_14871 + (1));
seq__14846_14868 = G__14873;
chunk__14847_14869 = G__14874;
count__14848_14870 = G__14875;
i__14849_14871 = G__14876;
continue;
} else {
var temp__4425__auto___14877 = cljs.core.seq(seq__14846_14868);
if(temp__4425__auto___14877){
var seq__14846_14878__$1 = temp__4425__auto___14877;
if(cljs.core.chunked_seq_QMARK_(seq__14846_14878__$1)){
var c__7262__auto___14879 = cljs.core.chunk_first(seq__14846_14878__$1);
var G__14880 = cljs.core.chunk_rest(seq__14846_14878__$1);
var G__14881 = c__7262__auto___14879;
var G__14882 = cljs.core.count(c__7262__auto___14879);
var G__14883 = (0);
seq__14846_14868 = G__14880;
chunk__14847_14869 = G__14881;
count__14848_14870 = G__14882;
i__14849_14871 = G__14883;
continue;
} else {
var w_14884 = cljs.core.first(seq__14846_14878__$1);
cljs.core._add_watch(w_14884,this$,reagent.ratom.handle_reaction_change);

var G__14885 = cljs.core.next(seq__14846_14878__$1);
var G__14886 = null;
var G__14887 = (0);
var G__14888 = (0);
seq__14846_14868 = G__14885;
chunk__14847_14869 = G__14886;
count__14848_14870 = G__14887;
i__14849_14871 = G__14888;
continue;
}
} else {
}
}
break;
}

var seq__14850 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14851 = null;
var count__14852 = (0);
var i__14853 = (0);
while(true){
if((i__14853 < count__14852)){
var w = chunk__14851.cljs$core$IIndexed$_nth$arity$2(null,i__14853);
cljs.core._remove_watch(w,this$);

var G__14889 = seq__14850;
var G__14890 = chunk__14851;
var G__14891 = count__14852;
var G__14892 = (i__14853 + (1));
seq__14850 = G__14889;
chunk__14851 = G__14890;
count__14852 = G__14891;
i__14853 = G__14892;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14850);
if(temp__4425__auto__){
var seq__14850__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14850__$1)){
var c__7262__auto__ = cljs.core.chunk_first(seq__14850__$1);
var G__14893 = cljs.core.chunk_rest(seq__14850__$1);
var G__14894 = c__7262__auto__;
var G__14895 = cljs.core.count(c__7262__auto__);
var G__14896 = (0);
seq__14850 = G__14893;
chunk__14851 = G__14894;
count__14852 = G__14895;
i__14853 = G__14896;
continue;
} else {
var w = cljs.core.first(seq__14850__$1);
cljs.core._remove_watch(w,this$);

var G__14897 = cljs.core.next(seq__14850__$1);
var G__14898 = null;
var G__14899 = (0);
var G__14900 = (0);
seq__14850 = G__14897;
chunk__14851 = G__14898;
count__14852 = G__14899;
i__14853 = G__14900;
continue;
}
} else {
return null;
}
}
break;
}
});

reagent.ratom.Reaction.prototype._try_run = (function (other){
var self__ = this;
var this$ = this;
if((self__.dirty_QMARK_) && (cljs.core.some_QMARK_(self__.watching))){
try{return this$._run();
}catch (e14854){var e = e14854;
self__.state = null;

self__.caught = e;

return reagent.ratom.notify_w(this$,e,null);
}} else {
return null;
}
});

reagent.ratom.Reaction.prototype._run = (function (){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = reagent.ratom.deref_capture(self__.f,this$);
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if(((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res))){
} else {
reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
});

reagent.ratom.Reaction.prototype._set_opts = (function (p__14855){
var self__ = this;
var map__14856 = p__14855;
var map__14856__$1 = ((((!((map__14856 == null)))?((((map__14856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14856):map__14856);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14856__$1,cljs.core.cst$kw$auto_DASH_run);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14856__$1,cljs.core.cst$kw$on_DASH_set);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14856__$1,cljs.core.cst$kw$on_DASH_dispose);
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14856__$1,cljs.core.cst$kw$no_DASH_cache);
var this$ = this;
if(cljs.core.some_QMARK_(auto_run__$1)){
this$.auto_run = auto_run__$1;
} else {
}

if(cljs.core.some_QMARK_(on_set)){
this$.on_set = on_set;
} else {
}

if(cljs.core.some_QMARK_(on_dispose)){
this$.on_dispose = on_dispose;
} else {
}

if(cljs.core.some_QMARK_(no_cache)){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,[cljs.core.str("Reaction "),cljs.core.str(cljs.core.hash(a__$1)),cljs.core.str(":")].join(''));
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__14858_14901 = cljs.core.seq(cljs.core.set(wg));
var chunk__14859_14902 = null;
var count__14860_14903 = (0);
var i__14861_14904 = (0);
while(true){
if((i__14861_14904 < count__14860_14903)){
var w_14905 = chunk__14859_14902.cljs$core$IIndexed$_nth$arity$2(null,i__14861_14904);
cljs.core._remove_watch(w_14905,this$__$1);

var G__14906 = seq__14858_14901;
var G__14907 = chunk__14859_14902;
var G__14908 = count__14860_14903;
var G__14909 = (i__14861_14904 + (1));
seq__14858_14901 = G__14906;
chunk__14859_14902 = G__14907;
count__14860_14903 = G__14908;
i__14861_14904 = G__14909;
continue;
} else {
var temp__4425__auto___14910 = cljs.core.seq(seq__14858_14901);
if(temp__4425__auto___14910){
var seq__14858_14911__$1 = temp__4425__auto___14910;
if(cljs.core.chunked_seq_QMARK_(seq__14858_14911__$1)){
var c__7262__auto___14912 = cljs.core.chunk_first(seq__14858_14911__$1);
var G__14913 = cljs.core.chunk_rest(seq__14858_14911__$1);
var G__14914 = c__7262__auto___14912;
var G__14915 = cljs.core.count(c__7262__auto___14912);
var G__14916 = (0);
seq__14858_14901 = G__14913;
chunk__14859_14902 = G__14914;
count__14860_14903 = G__14915;
i__14861_14904 = G__14916;
continue;
} else {
var w_14917 = cljs.core.first(seq__14858_14911__$1);
cljs.core._remove_watch(w_14917,this$__$1);

var G__14918 = cljs.core.next(seq__14858_14911__$1);
var G__14919 = null;
var G__14920 = (0);
var G__14921 = (0);
seq__14858_14901 = G__14918;
chunk__14859_14902 = G__14919;
count__14860_14903 = G__14920;
i__14861_14904 = G__14921;
continue;
}
} else {
}
}
break;
}

if(cljs.core.some_QMARK_(this$__$1.on_dispose)){
return this$__$1.on_dispose(s);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction is read only."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.list(cljs.core.cst$sym$$_DASH_on_DASH_set,cljs.core.cst$sym$a))], 0)))].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14862 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__14862) : f__$1.call(null,G__14862));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14863 = a__$1._peek_at();
var G__14864 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__14863,G__14864) : f__$1.call(null,G__14863,G__14864));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__14865 = a__$1._peek_at();
var G__14866 = x;
var G__14867 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__14865,G__14866,G__14867) : f__$1.call(null,G__14865,G__14866,G__14867));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.flush_BANG_();

return this$__$1._run();
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
reagent.ratom.remove_w(this$__$1,key);

if((!(was_empty)) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4429__auto___14922 = self__.caught;
if((temp__4429__auto___14922 == null)){
} else {
var e_14923 = temp__4429__auto___14922;
self__.caught = null;

throw e_14923;
}

var non_reactive_14924 = (reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_14924){
reagent.ratom.flush_BANG_();
} else {
}

if((non_reactive_14924) && ((self__.auto_run == null))){
if(self__.dirty_QMARK_){
var oldstate_14925 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if(((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_14925,self__.state))){
} else {
reagent.ratom.notify_w(this$__$1,oldstate_14925,self__.state);
}
} else {
}
} else {
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run();
} else {
}
}

return self__.state;
});

reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$dirty_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean,cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$nocache_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null)),cljs.core.with_meta(cljs.core.cst$sym$watching,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$auto_DASH_run,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$caught,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14931 = arguments.length;
var i__7518__auto___14932 = (0);
while(true){
if((i__7518__auto___14932 < len__7517__auto___14931)){
args__7524__auto__.push((arguments[i__7518__auto___14932]));

var G__14933 = (i__7518__auto___14932 + (1));
i__7518__auto___14932 = G__14933;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((1) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((1)),(0))):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7525__auto__);
});

reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__14928){
var map__14929 = p__14928;
var map__14929__$1 = ((((!((map__14929 == null)))?((((map__14929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14929):map__14929);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14929__$1,cljs.core.cst$kw$auto_DASH_run);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14929__$1,cljs.core.cst$kw$on_DASH_set);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14929__$1,cljs.core.cst$kw$on_DASH_dispose);
var reaction = (new reagent.ratom.Reaction(f,null,true,false,null,null,null,null));
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$auto_DASH_run,auto_run,cljs.core.cst$kw$on_DASH_set,on_set,cljs.core.cst$kw$on_DASH_dispose,on_dispose], null));

return reaction;
});

reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq14926){
var G__14927 = cljs.core.first(seq14926);
var seq14926__$1 = cljs.core.next(seq14926);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(G__14927,seq14926__$1);
});
reagent.ratom.temp_reaction = reagent.ratom.make_reaction(null);
reagent.ratom.run_in_reaction = (function reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = reagent.ratom.temp_reaction;
var res = reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
reagent.ratom.temp_reaction = reagent.ratom.make_reaction(null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
});})(r,res))
;

(obj[key] = r);
}

return res;
});
reagent.ratom.check_derefs = (function reagent$ratom$check_derefs(f){
var ctx = {};
var res = reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.some_QMARK_(ctx.captured)], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
})
reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.changed) && (cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if(cljs.core.some_QMARK_(self__.watches)){
reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w(this$__$1,old,new$);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w(this$__$1,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w(this$__$1,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
});

reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$callback,cljs.core.with_meta(cljs.core.cst$sym$changed,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean,cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$watches,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
