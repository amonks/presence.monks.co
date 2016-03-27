// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args18479 = [];
var len__7517__auto___18485 = arguments.length;
var i__7518__auto___18486 = (0);
while(true){
if((i__7518__auto___18486 < len__7517__auto___18485)){
args18479.push((arguments[i__7518__auto___18486]));

var G__18487 = (i__7518__auto___18486 + (1));
i__7518__auto___18486 = G__18487;
continue;
} else {
}
break;
}

var G__18481 = args18479.length;
switch (G__18481) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18479.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async18482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18482 = (function (f,blockable,meta18483){
this.f = f;
this.blockable = blockable;
this.meta18483 = meta18483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18484,meta18483__$1){
var self__ = this;
var _18484__$1 = this;
return (new cljs.core.async.t_cljs$core$async18482(self__.f,self__.blockable,meta18483__$1));
});

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18484){
var self__ = this;
var _18484__$1 = this;
return self__.meta18483;
});

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async18482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async18482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta18483], null);
});

cljs.core.async.t_cljs$core$async18482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18482";

cljs.core.async.t_cljs$core$async18482.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async18482");
});

cljs.core.async.__GT_t_cljs$core$async18482 = (function cljs$core$async$__GT_t_cljs$core$async18482(f__$1,blockable__$1,meta18483){
return (new cljs.core.async.t_cljs$core$async18482(f__$1,blockable__$1,meta18483));
});

}

return (new cljs.core.async.t_cljs$core$async18482(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args18491 = [];
var len__7517__auto___18494 = arguments.length;
var i__7518__auto___18495 = (0);
while(true){
if((i__7518__auto___18495 < len__7517__auto___18494)){
args18491.push((arguments[i__7518__auto___18495]));

var G__18496 = (i__7518__auto___18495 + (1));
i__7518__auto___18495 = G__18496;
continue;
} else {
}
break;
}

var G__18493 = args18491.length;
switch (G__18493) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18491.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args18498 = [];
var len__7517__auto___18501 = arguments.length;
var i__7518__auto___18502 = (0);
while(true){
if((i__7518__auto___18502 < len__7517__auto___18501)){
args18498.push((arguments[i__7518__auto___18502]));

var G__18503 = (i__7518__auto___18502 + (1));
i__7518__auto___18502 = G__18503;
continue;
} else {
}
break;
}

var G__18500 = args18498.length;
switch (G__18500) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18498.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args18505 = [];
var len__7517__auto___18508 = arguments.length;
var i__7518__auto___18509 = (0);
while(true){
if((i__7518__auto___18509 < len__7517__auto___18508)){
args18505.push((arguments[i__7518__auto___18509]));

var G__18510 = (i__7518__auto___18509 + (1));
i__7518__auto___18509 = G__18510;
continue;
} else {
}
break;
}

var G__18507 = args18505.length;
switch (G__18507) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18505.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18512 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18512) : fn1.call(null,val_18512));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18512,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18512) : fn1.call(null,val_18512));
});})(val_18512,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args18513 = [];
var len__7517__auto___18516 = arguments.length;
var i__7518__auto___18517 = (0);
while(true){
if((i__7518__auto___18517 < len__7517__auto___18516)){
args18513.push((arguments[i__7518__auto___18517]));

var G__18518 = (i__7518__auto___18517 + (1));
i__7518__auto___18517 = G__18518;
continue;
} else {
}
break;
}

var G__18515 = args18513.length;
switch (G__18515) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18513.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7362__auto___18520 = n;
var x_18521 = (0);
while(true){
if((x_18521 < n__7362__auto___18520)){
(a[x_18521] = (0));

var G__18522 = (x_18521 + (1));
x_18521 = G__18522;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__18523 = (i + (1));
i = G__18523;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async18527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18527 = (function (alt_flag,flag,meta18528){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta18528 = meta18528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18529,meta18528__$1){
var self__ = this;
var _18529__$1 = this;
return (new cljs.core.async.t_cljs$core$async18527(self__.alt_flag,self__.flag,meta18528__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async18527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18529){
var self__ = this;
var _18529__$1 = this;
return self__.meta18528;
});})(flag))
;

cljs.core.async.t_cljs$core$async18527.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async18527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async18527.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta18528], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async18527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18527";

cljs.core.async.t_cljs$core$async18527.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async18527");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async18527 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18527(alt_flag__$1,flag__$1,meta18528){
return (new cljs.core.async.t_cljs$core$async18527(alt_flag__$1,flag__$1,meta18528));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async18527(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async18533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18533 = (function (alt_handler,flag,cb,meta18534){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta18534 = meta18534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18535,meta18534__$1){
var self__ = this;
var _18535__$1 = this;
return (new cljs.core.async.t_cljs$core$async18533(self__.alt_handler,self__.flag,self__.cb,meta18534__$1));
});

cljs.core.async.t_cljs$core$async18533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18535){
var self__ = this;
var _18535__$1 = this;
return self__.meta18534;
});

cljs.core.async.t_cljs$core$async18533.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async18533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async18533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async18533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta18534], null);
});

cljs.core.async.t_cljs$core$async18533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18533";

cljs.core.async.t_cljs$core$async18533.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async18533");
});

cljs.core.async.__GT_t_cljs$core$async18533 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18533(alt_handler__$1,flag__$1,cb__$1,meta18534){
return (new cljs.core.async.t_cljs$core$async18533(alt_handler__$1,flag__$1,cb__$1,meta18534));
});

}

return (new cljs.core.async.t_cljs$core$async18533(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18536_SHARP_){
var G__18540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18536_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18540) : fret.call(null,G__18540));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18537_SHARP_){
var G__18541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18537_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18541) : fret.call(null,G__18541));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6459__auto__ = wport;
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18542 = (i + (1));
i = G__18542;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6459__auto__ = ret;
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__6447__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6447__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6447__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7524__auto__ = [];
var len__7517__auto___18548 = arguments.length;
var i__7518__auto___18549 = (0);
while(true){
if((i__7518__auto___18549 < len__7517__auto___18548)){
args__7524__auto__.push((arguments[i__7518__auto___18549]));

var G__18550 = (i__7518__auto___18549 + (1));
i__7518__auto___18549 = G__18550;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((1) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7525__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18545){
var map__18546 = p__18545;
var map__18546__$1 = ((((!((map__18546 == null)))?((((map__18546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18546):map__18546);
var opts = map__18546__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18543){
var G__18544 = cljs.core.first(seq18543);
var seq18543__$1 = cljs.core.next(seq18543);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18544,seq18543__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args18551 = [];
var len__7517__auto___18601 = arguments.length;
var i__7518__auto___18602 = (0);
while(true){
if((i__7518__auto___18602 < len__7517__auto___18601)){
args18551.push((arguments[i__7518__auto___18602]));

var G__18603 = (i__7518__auto___18602 + (1));
i__7518__auto___18602 = G__18603;
continue;
} else {
}
break;
}

var G__18553 = args18551.length;
switch (G__18553) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18551.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18434__auto___18605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___18605){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___18605){
return (function (state_18577){
var state_val_18578 = (state_18577[(1)]);
if((state_val_18578 === (7))){
var inst_18573 = (state_18577[(2)]);
var state_18577__$1 = state_18577;
var statearr_18579_18606 = state_18577__$1;
(statearr_18579_18606[(2)] = inst_18573);

(statearr_18579_18606[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (1))){
var state_18577__$1 = state_18577;
var statearr_18580_18607 = state_18577__$1;
(statearr_18580_18607[(2)] = null);

(statearr_18580_18607[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (4))){
var inst_18556 = (state_18577[(7)]);
var inst_18556__$1 = (state_18577[(2)]);
var inst_18557 = (inst_18556__$1 == null);
var state_18577__$1 = (function (){var statearr_18581 = state_18577;
(statearr_18581[(7)] = inst_18556__$1);

return statearr_18581;
})();
if(cljs.core.truth_(inst_18557)){
var statearr_18582_18608 = state_18577__$1;
(statearr_18582_18608[(1)] = (5));

} else {
var statearr_18583_18609 = state_18577__$1;
(statearr_18583_18609[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (13))){
var state_18577__$1 = state_18577;
var statearr_18584_18610 = state_18577__$1;
(statearr_18584_18610[(2)] = null);

(statearr_18584_18610[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (6))){
var inst_18556 = (state_18577[(7)]);
var state_18577__$1 = state_18577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18577__$1,(11),to,inst_18556);
} else {
if((state_val_18578 === (3))){
var inst_18575 = (state_18577[(2)]);
var state_18577__$1 = state_18577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18577__$1,inst_18575);
} else {
if((state_val_18578 === (12))){
var state_18577__$1 = state_18577;
var statearr_18585_18611 = state_18577__$1;
(statearr_18585_18611[(2)] = null);

(statearr_18585_18611[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (2))){
var state_18577__$1 = state_18577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18577__$1,(4),from);
} else {
if((state_val_18578 === (11))){
var inst_18566 = (state_18577[(2)]);
var state_18577__$1 = state_18577;
if(cljs.core.truth_(inst_18566)){
var statearr_18586_18612 = state_18577__$1;
(statearr_18586_18612[(1)] = (12));

} else {
var statearr_18587_18613 = state_18577__$1;
(statearr_18587_18613[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (9))){
var state_18577__$1 = state_18577;
var statearr_18588_18614 = state_18577__$1;
(statearr_18588_18614[(2)] = null);

(statearr_18588_18614[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (5))){
var state_18577__$1 = state_18577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18589_18615 = state_18577__$1;
(statearr_18589_18615[(1)] = (8));

} else {
var statearr_18590_18616 = state_18577__$1;
(statearr_18590_18616[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (14))){
var inst_18571 = (state_18577[(2)]);
var state_18577__$1 = state_18577;
var statearr_18591_18617 = state_18577__$1;
(statearr_18591_18617[(2)] = inst_18571);

(statearr_18591_18617[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (10))){
var inst_18563 = (state_18577[(2)]);
var state_18577__$1 = state_18577;
var statearr_18592_18618 = state_18577__$1;
(statearr_18592_18618[(2)] = inst_18563);

(statearr_18592_18618[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18578 === (8))){
var inst_18560 = cljs.core.async.close_BANG_(to);
var state_18577__$1 = state_18577;
var statearr_18593_18619 = state_18577__$1;
(statearr_18593_18619[(2)] = inst_18560);

(statearr_18593_18619[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___18605))
;
return ((function (switch__18320__auto__,c__18434__auto___18605){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_18597 = [null,null,null,null,null,null,null,null];
(statearr_18597[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_18597[(1)] = (1));

return statearr_18597;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_18577){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_18577);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e18598){if((e18598 instanceof Object)){
var ex__18324__auto__ = e18598;
var statearr_18599_18620 = state_18577;
(statearr_18599_18620[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18577);

return cljs.core.cst$kw$recur;
} else {
throw e18598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__18621 = state_18577;
state_18577 = G__18621;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_18577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_18577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___18605))
})();
var state__18436__auto__ = (function (){var statearr_18600 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_18600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___18605);

return statearr_18600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___18605))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__18805){
var vec__18806 = p__18805;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(1),null);
var job = vec__18806;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18434__auto___18988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___18988,res,vec__18806,v,p,job,jobs,results){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___18988,res,vec__18806,v,p,job,jobs,results){
return (function (state_18811){
var state_val_18812 = (state_18811[(1)]);
if((state_val_18812 === (1))){
var state_18811__$1 = state_18811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18811__$1,(2),res,v);
} else {
if((state_val_18812 === (2))){
var inst_18808 = (state_18811[(2)]);
var inst_18809 = cljs.core.async.close_BANG_(res);
var state_18811__$1 = (function (){var statearr_18813 = state_18811;
(statearr_18813[(7)] = inst_18808);

return statearr_18813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18811__$1,inst_18809);
} else {
return null;
}
}
});})(c__18434__auto___18988,res,vec__18806,v,p,job,jobs,results))
;
return ((function (switch__18320__auto__,c__18434__auto___18988,res,vec__18806,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0 = (function (){
var statearr_18817 = [null,null,null,null,null,null,null,null];
(statearr_18817[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__);

(statearr_18817[(1)] = (1));

return statearr_18817;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1 = (function (state_18811){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_18811);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e18818){if((e18818 instanceof Object)){
var ex__18324__auto__ = e18818;
var statearr_18819_18989 = state_18811;
(statearr_18819_18989[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18811);

return cljs.core.cst$kw$recur;
} else {
throw e18818;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__18990 = state_18811;
state_18811 = G__18990;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = function(state_18811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1.call(this,state_18811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___18988,res,vec__18806,v,p,job,jobs,results))
})();
var state__18436__auto__ = (function (){var statearr_18820 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_18820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___18988);

return statearr_18820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___18988,res,vec__18806,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18821){
var vec__18822 = p__18821;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18822,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18822,(1),null);
var job = vec__18822;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7362__auto___18991 = n;
var __18992 = (0);
while(true){
if((__18992 < n__7362__auto___18991)){
var G__18823_18993 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18823_18993) {
case "compute":
var c__18434__auto___18995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18992,c__18434__auto___18995,G__18823_18993,n__7362__auto___18991,jobs,results,process,async){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (__18992,c__18434__auto___18995,G__18823_18993,n__7362__auto___18991,jobs,results,process,async){
return (function (state_18836){
var state_val_18837 = (state_18836[(1)]);
if((state_val_18837 === (1))){
var state_18836__$1 = state_18836;
var statearr_18838_18996 = state_18836__$1;
(statearr_18838_18996[(2)] = null);

(statearr_18838_18996[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18837 === (2))){
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18836__$1,(4),jobs);
} else {
if((state_val_18837 === (3))){
var inst_18834 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18836__$1,inst_18834);
} else {
if((state_val_18837 === (4))){
var inst_18826 = (state_18836[(2)]);
var inst_18827 = process(inst_18826);
var state_18836__$1 = state_18836;
if(cljs.core.truth_(inst_18827)){
var statearr_18839_18997 = state_18836__$1;
(statearr_18839_18997[(1)] = (5));

} else {
var statearr_18840_18998 = state_18836__$1;
(statearr_18840_18998[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18837 === (5))){
var state_18836__$1 = state_18836;
var statearr_18841_18999 = state_18836__$1;
(statearr_18841_18999[(2)] = null);

(statearr_18841_18999[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18837 === (6))){
var state_18836__$1 = state_18836;
var statearr_18842_19000 = state_18836__$1;
(statearr_18842_19000[(2)] = null);

(statearr_18842_19000[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18837 === (7))){
var inst_18832 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
var statearr_18843_19001 = state_18836__$1;
(statearr_18843_19001[(2)] = inst_18832);

(statearr_18843_19001[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18992,c__18434__auto___18995,G__18823_18993,n__7362__auto___18991,jobs,results,process,async))
;
return ((function (__18992,switch__18320__auto__,c__18434__auto___18995,G__18823_18993,n__7362__auto___18991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0 = (function (){
var statearr_18847 = [null,null,null,null,null,null,null];
(statearr_18847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__);

(statearr_18847[(1)] = (1));

return statearr_18847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1 = (function (state_18836){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_18836);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e18848){if((e18848 instanceof Object)){
var ex__18324__auto__ = e18848;
var statearr_18849_19002 = state_18836;
(statearr_18849_19002[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18836);

return cljs.core.cst$kw$recur;
} else {
throw e18848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__19003 = state_18836;
state_18836 = G__19003;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = function(state_18836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1.call(this,state_18836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__;
})()
;})(__18992,switch__18320__auto__,c__18434__auto___18995,G__18823_18993,n__7362__auto___18991,jobs,results,process,async))
})();
var state__18436__auto__ = (function (){var statearr_18850 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_18850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___18995);

return statearr_18850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(__18992,c__18434__auto___18995,G__18823_18993,n__7362__auto___18991,jobs,results,process,async))
);


break;
case "async":
var c__18434__auto___19004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18992,c__18434__auto___19004,G__18823_18993,n__7362__auto___18991,jobs,results,process,async){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (__18992,c__18434__auto___19004,G__18823_18993,n__7362__auto___18991,jobs,results,process,async){
return (function (state_18863){
var state_val_18864 = (state_18863[(1)]);
if((state_val_18864 === (1))){
var state_18863__$1 = state_18863;
var statearr_18865_19005 = state_18863__$1;
(statearr_18865_19005[(2)] = null);

(statearr_18865_19005[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18864 === (2))){
var state_18863__$1 = state_18863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18863__$1,(4),jobs);
} else {
if((state_val_18864 === (3))){
var inst_18861 = (state_18863[(2)]);
var state_18863__$1 = state_18863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18863__$1,inst_18861);
} else {
if((state_val_18864 === (4))){
var inst_18853 = (state_18863[(2)]);
var inst_18854 = async(inst_18853);
var state_18863__$1 = state_18863;
if(cljs.core.truth_(inst_18854)){
var statearr_18866_19006 = state_18863__$1;
(statearr_18866_19006[(1)] = (5));

} else {
var statearr_18867_19007 = state_18863__$1;
(statearr_18867_19007[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18864 === (5))){
var state_18863__$1 = state_18863;
var statearr_18868_19008 = state_18863__$1;
(statearr_18868_19008[(2)] = null);

(statearr_18868_19008[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18864 === (6))){
var state_18863__$1 = state_18863;
var statearr_18869_19009 = state_18863__$1;
(statearr_18869_19009[(2)] = null);

(statearr_18869_19009[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18864 === (7))){
var inst_18859 = (state_18863[(2)]);
var state_18863__$1 = state_18863;
var statearr_18870_19010 = state_18863__$1;
(statearr_18870_19010[(2)] = inst_18859);

(statearr_18870_19010[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18992,c__18434__auto___19004,G__18823_18993,n__7362__auto___18991,jobs,results,process,async))
;
return ((function (__18992,switch__18320__auto__,c__18434__auto___19004,G__18823_18993,n__7362__auto___18991,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0 = (function (){
var statearr_18874 = [null,null,null,null,null,null,null];
(statearr_18874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__);

(statearr_18874[(1)] = (1));

return statearr_18874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1 = (function (state_18863){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_18863);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e18875){if((e18875 instanceof Object)){
var ex__18324__auto__ = e18875;
var statearr_18876_19011 = state_18863;
(statearr_18876_19011[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18863);

return cljs.core.cst$kw$recur;
} else {
throw e18875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__19012 = state_18863;
state_18863 = G__19012;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = function(state_18863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1.call(this,state_18863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__;
})()
;})(__18992,switch__18320__auto__,c__18434__auto___19004,G__18823_18993,n__7362__auto___18991,jobs,results,process,async))
})();
var state__18436__auto__ = (function (){var statearr_18877 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_18877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___19004);

return statearr_18877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(__18992,c__18434__auto___19004,G__18823_18993,n__7362__auto___18991,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19013 = (__18992 + (1));
__18992 = G__19013;
continue;
} else {
}
break;
}

var c__18434__auto___19014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___19014,jobs,results,process,async){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___19014,jobs,results,process,async){
return (function (state_18899){
var state_val_18900 = (state_18899[(1)]);
if((state_val_18900 === (1))){
var state_18899__$1 = state_18899;
var statearr_18901_19015 = state_18899__$1;
(statearr_18901_19015[(2)] = null);

(statearr_18901_19015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18900 === (2))){
var state_18899__$1 = state_18899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18899__$1,(4),from);
} else {
if((state_val_18900 === (3))){
var inst_18897 = (state_18899[(2)]);
var state_18899__$1 = state_18899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18899__$1,inst_18897);
} else {
if((state_val_18900 === (4))){
var inst_18880 = (state_18899[(7)]);
var inst_18880__$1 = (state_18899[(2)]);
var inst_18881 = (inst_18880__$1 == null);
var state_18899__$1 = (function (){var statearr_18902 = state_18899;
(statearr_18902[(7)] = inst_18880__$1);

return statearr_18902;
})();
if(cljs.core.truth_(inst_18881)){
var statearr_18903_19016 = state_18899__$1;
(statearr_18903_19016[(1)] = (5));

} else {
var statearr_18904_19017 = state_18899__$1;
(statearr_18904_19017[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18900 === (5))){
var inst_18883 = cljs.core.async.close_BANG_(jobs);
var state_18899__$1 = state_18899;
var statearr_18905_19018 = state_18899__$1;
(statearr_18905_19018[(2)] = inst_18883);

(statearr_18905_19018[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18900 === (6))){
var inst_18885 = (state_18899[(8)]);
var inst_18880 = (state_18899[(7)]);
var inst_18885__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18887 = [inst_18880,inst_18885__$1];
var inst_18888 = (new cljs.core.PersistentVector(null,2,(5),inst_18886,inst_18887,null));
var state_18899__$1 = (function (){var statearr_18906 = state_18899;
(statearr_18906[(8)] = inst_18885__$1);

return statearr_18906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18899__$1,(8),jobs,inst_18888);
} else {
if((state_val_18900 === (7))){
var inst_18895 = (state_18899[(2)]);
var state_18899__$1 = state_18899;
var statearr_18907_19019 = state_18899__$1;
(statearr_18907_19019[(2)] = inst_18895);

(statearr_18907_19019[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18900 === (8))){
var inst_18885 = (state_18899[(8)]);
var inst_18890 = (state_18899[(2)]);
var state_18899__$1 = (function (){var statearr_18908 = state_18899;
(statearr_18908[(9)] = inst_18890);

return statearr_18908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18899__$1,(9),results,inst_18885);
} else {
if((state_val_18900 === (9))){
var inst_18892 = (state_18899[(2)]);
var state_18899__$1 = (function (){var statearr_18909 = state_18899;
(statearr_18909[(10)] = inst_18892);

return statearr_18909;
})();
var statearr_18910_19020 = state_18899__$1;
(statearr_18910_19020[(2)] = null);

(statearr_18910_19020[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___19014,jobs,results,process,async))
;
return ((function (switch__18320__auto__,c__18434__auto___19014,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0 = (function (){
var statearr_18914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__);

(statearr_18914[(1)] = (1));

return statearr_18914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1 = (function (state_18899){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_18899);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e18915){if((e18915 instanceof Object)){
var ex__18324__auto__ = e18915;
var statearr_18916_19021 = state_18899;
(statearr_18916_19021[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18899);

return cljs.core.cst$kw$recur;
} else {
throw e18915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__19022 = state_18899;
state_18899 = G__19022;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = function(state_18899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1.call(this,state_18899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___19014,jobs,results,process,async))
})();
var state__18436__auto__ = (function (){var statearr_18917 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_18917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___19014);

return statearr_18917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___19014,jobs,results,process,async))
);


var c__18434__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto__,jobs,results,process,async){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto__,jobs,results,process,async){
return (function (state_18955){
var state_val_18956 = (state_18955[(1)]);
if((state_val_18956 === (7))){
var inst_18951 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
var statearr_18957_19023 = state_18955__$1;
(statearr_18957_19023[(2)] = inst_18951);

(statearr_18957_19023[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (20))){
var state_18955__$1 = state_18955;
var statearr_18958_19024 = state_18955__$1;
(statearr_18958_19024[(2)] = null);

(statearr_18958_19024[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (1))){
var state_18955__$1 = state_18955;
var statearr_18959_19025 = state_18955__$1;
(statearr_18959_19025[(2)] = null);

(statearr_18959_19025[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (4))){
var inst_18920 = (state_18955[(7)]);
var inst_18920__$1 = (state_18955[(2)]);
var inst_18921 = (inst_18920__$1 == null);
var state_18955__$1 = (function (){var statearr_18960 = state_18955;
(statearr_18960[(7)] = inst_18920__$1);

return statearr_18960;
})();
if(cljs.core.truth_(inst_18921)){
var statearr_18961_19026 = state_18955__$1;
(statearr_18961_19026[(1)] = (5));

} else {
var statearr_18962_19027 = state_18955__$1;
(statearr_18962_19027[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (15))){
var inst_18933 = (state_18955[(8)]);
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18955__$1,(18),to,inst_18933);
} else {
if((state_val_18956 === (21))){
var inst_18946 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
var statearr_18963_19028 = state_18955__$1;
(statearr_18963_19028[(2)] = inst_18946);

(statearr_18963_19028[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (13))){
var inst_18948 = (state_18955[(2)]);
var state_18955__$1 = (function (){var statearr_18964 = state_18955;
(statearr_18964[(9)] = inst_18948);

return statearr_18964;
})();
var statearr_18965_19029 = state_18955__$1;
(statearr_18965_19029[(2)] = null);

(statearr_18965_19029[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (6))){
var inst_18920 = (state_18955[(7)]);
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18955__$1,(11),inst_18920);
} else {
if((state_val_18956 === (17))){
var inst_18941 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
if(cljs.core.truth_(inst_18941)){
var statearr_18966_19030 = state_18955__$1;
(statearr_18966_19030[(1)] = (19));

} else {
var statearr_18967_19031 = state_18955__$1;
(statearr_18967_19031[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (3))){
var inst_18953 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18955__$1,inst_18953);
} else {
if((state_val_18956 === (12))){
var inst_18930 = (state_18955[(10)]);
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18955__$1,(14),inst_18930);
} else {
if((state_val_18956 === (2))){
var state_18955__$1 = state_18955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18955__$1,(4),results);
} else {
if((state_val_18956 === (19))){
var state_18955__$1 = state_18955;
var statearr_18968_19032 = state_18955__$1;
(statearr_18968_19032[(2)] = null);

(statearr_18968_19032[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (11))){
var inst_18930 = (state_18955[(2)]);
var state_18955__$1 = (function (){var statearr_18969 = state_18955;
(statearr_18969[(10)] = inst_18930);

return statearr_18969;
})();
var statearr_18970_19033 = state_18955__$1;
(statearr_18970_19033[(2)] = null);

(statearr_18970_19033[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (9))){
var state_18955__$1 = state_18955;
var statearr_18971_19034 = state_18955__$1;
(statearr_18971_19034[(2)] = null);

(statearr_18971_19034[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (5))){
var state_18955__$1 = state_18955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18972_19035 = state_18955__$1;
(statearr_18972_19035[(1)] = (8));

} else {
var statearr_18973_19036 = state_18955__$1;
(statearr_18973_19036[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (14))){
var inst_18935 = (state_18955[(11)]);
var inst_18933 = (state_18955[(8)]);
var inst_18933__$1 = (state_18955[(2)]);
var inst_18934 = (inst_18933__$1 == null);
var inst_18935__$1 = cljs.core.not(inst_18934);
var state_18955__$1 = (function (){var statearr_18974 = state_18955;
(statearr_18974[(11)] = inst_18935__$1);

(statearr_18974[(8)] = inst_18933__$1);

return statearr_18974;
})();
if(inst_18935__$1){
var statearr_18975_19037 = state_18955__$1;
(statearr_18975_19037[(1)] = (15));

} else {
var statearr_18976_19038 = state_18955__$1;
(statearr_18976_19038[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (16))){
var inst_18935 = (state_18955[(11)]);
var state_18955__$1 = state_18955;
var statearr_18977_19039 = state_18955__$1;
(statearr_18977_19039[(2)] = inst_18935);

(statearr_18977_19039[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (10))){
var inst_18927 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
var statearr_18978_19040 = state_18955__$1;
(statearr_18978_19040[(2)] = inst_18927);

(statearr_18978_19040[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (18))){
var inst_18938 = (state_18955[(2)]);
var state_18955__$1 = state_18955;
var statearr_18979_19041 = state_18955__$1;
(statearr_18979_19041[(2)] = inst_18938);

(statearr_18979_19041[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18956 === (8))){
var inst_18924 = cljs.core.async.close_BANG_(to);
var state_18955__$1 = state_18955;
var statearr_18980_19042 = state_18955__$1;
(statearr_18980_19042[(2)] = inst_18924);

(statearr_18980_19042[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto__,jobs,results,process,async))
;
return ((function (switch__18320__auto__,c__18434__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0 = (function (){
var statearr_18984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__);

(statearr_18984[(1)] = (1));

return statearr_18984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1 = (function (state_18955){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_18955);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e18985){if((e18985 instanceof Object)){
var ex__18324__auto__ = e18985;
var statearr_18986_19043 = state_18955;
(statearr_18986_19043[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18955);

return cljs.core.cst$kw$recur;
} else {
throw e18985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__19044 = state_18955;
state_18955 = G__19044;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__ = function(state_18955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1.call(this,state_18955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18321__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto__,jobs,results,process,async))
})();
var state__18436__auto__ = (function (){var statearr_18987 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_18987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto__);

return statearr_18987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto__,jobs,results,process,async))
);

return c__18434__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19045 = [];
var len__7517__auto___19048 = arguments.length;
var i__7518__auto___19049 = (0);
while(true){
if((i__7518__auto___19049 < len__7517__auto___19048)){
args19045.push((arguments[i__7518__auto___19049]));

var G__19050 = (i__7518__auto___19049 + (1));
i__7518__auto___19049 = G__19050;
continue;
} else {
}
break;
}

var G__19047 = args19045.length;
switch (G__19047) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19045.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19052 = [];
var len__7517__auto___19055 = arguments.length;
var i__7518__auto___19056 = (0);
while(true){
if((i__7518__auto___19056 < len__7517__auto___19055)){
args19052.push((arguments[i__7518__auto___19056]));

var G__19057 = (i__7518__auto___19056 + (1));
i__7518__auto___19056 = G__19057;
continue;
} else {
}
break;
}

var G__19054 = args19052.length;
switch (G__19054) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19052.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19059 = [];
var len__7517__auto___19112 = arguments.length;
var i__7518__auto___19113 = (0);
while(true){
if((i__7518__auto___19113 < len__7517__auto___19112)){
args19059.push((arguments[i__7518__auto___19113]));

var G__19114 = (i__7518__auto___19113 + (1));
i__7518__auto___19113 = G__19114;
continue;
} else {
}
break;
}

var G__19061 = args19059.length;
switch (G__19061) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19059.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18434__auto___19116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___19116,tc,fc){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___19116,tc,fc){
return (function (state_19087){
var state_val_19088 = (state_19087[(1)]);
if((state_val_19088 === (7))){
var inst_19083 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
var statearr_19089_19117 = state_19087__$1;
(statearr_19089_19117[(2)] = inst_19083);

(statearr_19089_19117[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (1))){
var state_19087__$1 = state_19087;
var statearr_19090_19118 = state_19087__$1;
(statearr_19090_19118[(2)] = null);

(statearr_19090_19118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (4))){
var inst_19064 = (state_19087[(7)]);
var inst_19064__$1 = (state_19087[(2)]);
var inst_19065 = (inst_19064__$1 == null);
var state_19087__$1 = (function (){var statearr_19091 = state_19087;
(statearr_19091[(7)] = inst_19064__$1);

return statearr_19091;
})();
if(cljs.core.truth_(inst_19065)){
var statearr_19092_19119 = state_19087__$1;
(statearr_19092_19119[(1)] = (5));

} else {
var statearr_19093_19120 = state_19087__$1;
(statearr_19093_19120[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (13))){
var state_19087__$1 = state_19087;
var statearr_19094_19121 = state_19087__$1;
(statearr_19094_19121[(2)] = null);

(statearr_19094_19121[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (6))){
var inst_19064 = (state_19087[(7)]);
var inst_19070 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19064) : p.call(null,inst_19064));
var state_19087__$1 = state_19087;
if(cljs.core.truth_(inst_19070)){
var statearr_19095_19122 = state_19087__$1;
(statearr_19095_19122[(1)] = (9));

} else {
var statearr_19096_19123 = state_19087__$1;
(statearr_19096_19123[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (3))){
var inst_19085 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19087__$1,inst_19085);
} else {
if((state_val_19088 === (12))){
var state_19087__$1 = state_19087;
var statearr_19097_19124 = state_19087__$1;
(statearr_19097_19124[(2)] = null);

(statearr_19097_19124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (2))){
var state_19087__$1 = state_19087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19087__$1,(4),ch);
} else {
if((state_val_19088 === (11))){
var inst_19064 = (state_19087[(7)]);
var inst_19074 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19087__$1,(8),inst_19074,inst_19064);
} else {
if((state_val_19088 === (9))){
var state_19087__$1 = state_19087;
var statearr_19098_19125 = state_19087__$1;
(statearr_19098_19125[(2)] = tc);

(statearr_19098_19125[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (5))){
var inst_19067 = cljs.core.async.close_BANG_(tc);
var inst_19068 = cljs.core.async.close_BANG_(fc);
var state_19087__$1 = (function (){var statearr_19099 = state_19087;
(statearr_19099[(8)] = inst_19067);

return statearr_19099;
})();
var statearr_19100_19126 = state_19087__$1;
(statearr_19100_19126[(2)] = inst_19068);

(statearr_19100_19126[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (14))){
var inst_19081 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
var statearr_19101_19127 = state_19087__$1;
(statearr_19101_19127[(2)] = inst_19081);

(statearr_19101_19127[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (10))){
var state_19087__$1 = state_19087;
var statearr_19102_19128 = state_19087__$1;
(statearr_19102_19128[(2)] = fc);

(statearr_19102_19128[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19088 === (8))){
var inst_19076 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
if(cljs.core.truth_(inst_19076)){
var statearr_19103_19129 = state_19087__$1;
(statearr_19103_19129[(1)] = (12));

} else {
var statearr_19104_19130 = state_19087__$1;
(statearr_19104_19130[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___19116,tc,fc))
;
return ((function (switch__18320__auto__,c__18434__auto___19116,tc,fc){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_19108 = [null,null,null,null,null,null,null,null,null];
(statearr_19108[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_19108[(1)] = (1));

return statearr_19108;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_19087){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_19087);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e19109){if((e19109 instanceof Object)){
var ex__18324__auto__ = e19109;
var statearr_19110_19131 = state_19087;
(statearr_19110_19131[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19087);

return cljs.core.cst$kw$recur;
} else {
throw e19109;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__19132 = state_19087;
state_19087 = G__19132;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_19087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_19087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___19116,tc,fc))
})();
var state__18436__auto__ = (function (){var statearr_19111 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_19111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___19116);

return statearr_19111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___19116,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18434__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto__){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto__){
return (function (state_19196){
var state_val_19197 = (state_19196[(1)]);
if((state_val_19197 === (7))){
var inst_19192 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19198_19219 = state_19196__$1;
(statearr_19198_19219[(2)] = inst_19192);

(statearr_19198_19219[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19197 === (1))){
var inst_19176 = init;
var state_19196__$1 = (function (){var statearr_19199 = state_19196;
(statearr_19199[(7)] = inst_19176);

return statearr_19199;
})();
var statearr_19200_19220 = state_19196__$1;
(statearr_19200_19220[(2)] = null);

(statearr_19200_19220[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19197 === (4))){
var inst_19179 = (state_19196[(8)]);
var inst_19179__$1 = (state_19196[(2)]);
var inst_19180 = (inst_19179__$1 == null);
var state_19196__$1 = (function (){var statearr_19201 = state_19196;
(statearr_19201[(8)] = inst_19179__$1);

return statearr_19201;
})();
if(cljs.core.truth_(inst_19180)){
var statearr_19202_19221 = state_19196__$1;
(statearr_19202_19221[(1)] = (5));

} else {
var statearr_19203_19222 = state_19196__$1;
(statearr_19203_19222[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19197 === (6))){
var inst_19179 = (state_19196[(8)]);
var inst_19176 = (state_19196[(7)]);
var inst_19183 = (state_19196[(9)]);
var inst_19183__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19176,inst_19179) : f.call(null,inst_19176,inst_19179));
var inst_19184 = cljs.core.reduced_QMARK_(inst_19183__$1);
var state_19196__$1 = (function (){var statearr_19204 = state_19196;
(statearr_19204[(9)] = inst_19183__$1);

return statearr_19204;
})();
if(inst_19184){
var statearr_19205_19223 = state_19196__$1;
(statearr_19205_19223[(1)] = (8));

} else {
var statearr_19206_19224 = state_19196__$1;
(statearr_19206_19224[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19197 === (3))){
var inst_19194 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19196__$1,inst_19194);
} else {
if((state_val_19197 === (2))){
var state_19196__$1 = state_19196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19196__$1,(4),ch);
} else {
if((state_val_19197 === (9))){
var inst_19183 = (state_19196[(9)]);
var inst_19176 = inst_19183;
var state_19196__$1 = (function (){var statearr_19207 = state_19196;
(statearr_19207[(7)] = inst_19176);

return statearr_19207;
})();
var statearr_19208_19225 = state_19196__$1;
(statearr_19208_19225[(2)] = null);

(statearr_19208_19225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19197 === (5))){
var inst_19176 = (state_19196[(7)]);
var state_19196__$1 = state_19196;
var statearr_19209_19226 = state_19196__$1;
(statearr_19209_19226[(2)] = inst_19176);

(statearr_19209_19226[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19197 === (10))){
var inst_19190 = (state_19196[(2)]);
var state_19196__$1 = state_19196;
var statearr_19210_19227 = state_19196__$1;
(statearr_19210_19227[(2)] = inst_19190);

(statearr_19210_19227[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19197 === (8))){
var inst_19183 = (state_19196[(9)]);
var inst_19186 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_19183) : cljs.core.deref.call(null,inst_19183));
var state_19196__$1 = state_19196;
var statearr_19211_19228 = state_19196__$1;
(statearr_19211_19228[(2)] = inst_19186);

(statearr_19211_19228[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto__))
;
return ((function (switch__18320__auto__,c__18434__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18321__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18321__auto____0 = (function (){
var statearr_19215 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19215[(0)] = cljs$core$async$reduce_$_state_machine__18321__auto__);

(statearr_19215[(1)] = (1));

return statearr_19215;
});
var cljs$core$async$reduce_$_state_machine__18321__auto____1 = (function (state_19196){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_19196);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e19216){if((e19216 instanceof Object)){
var ex__18324__auto__ = e19216;
var statearr_19217_19229 = state_19196;
(statearr_19217_19229[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19196);

return cljs.core.cst$kw$recur;
} else {
throw e19216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__19230 = state_19196;
state_19196 = G__19230;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18321__auto__ = function(state_19196){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18321__auto____1.call(this,state_19196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18321__auto____0;
cljs$core$async$reduce_$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18321__auto____1;
return cljs$core$async$reduce_$_state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto__))
})();
var state__18436__auto__ = (function (){var statearr_19218 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_19218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto__);

return statearr_19218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto__))
);

return c__18434__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19231 = [];
var len__7517__auto___19283 = arguments.length;
var i__7518__auto___19284 = (0);
while(true){
if((i__7518__auto___19284 < len__7517__auto___19283)){
args19231.push((arguments[i__7518__auto___19284]));

var G__19285 = (i__7518__auto___19284 + (1));
i__7518__auto___19284 = G__19285;
continue;
} else {
}
break;
}

var G__19233 = args19231.length;
switch (G__19233) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19231.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18434__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto__){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto__){
return (function (state_19258){
var state_val_19259 = (state_19258[(1)]);
if((state_val_19259 === (7))){
var inst_19240 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19260_19287 = state_19258__$1;
(statearr_19260_19287[(2)] = inst_19240);

(statearr_19260_19287[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (1))){
var inst_19234 = cljs.core.seq(coll);
var inst_19235 = inst_19234;
var state_19258__$1 = (function (){var statearr_19261 = state_19258;
(statearr_19261[(7)] = inst_19235);

return statearr_19261;
})();
var statearr_19262_19288 = state_19258__$1;
(statearr_19262_19288[(2)] = null);

(statearr_19262_19288[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (4))){
var inst_19235 = (state_19258[(7)]);
var inst_19238 = cljs.core.first(inst_19235);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19258__$1,(7),ch,inst_19238);
} else {
if((state_val_19259 === (13))){
var inst_19252 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19263_19289 = state_19258__$1;
(statearr_19263_19289[(2)] = inst_19252);

(statearr_19263_19289[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (6))){
var inst_19243 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
if(cljs.core.truth_(inst_19243)){
var statearr_19264_19290 = state_19258__$1;
(statearr_19264_19290[(1)] = (8));

} else {
var statearr_19265_19291 = state_19258__$1;
(statearr_19265_19291[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (3))){
var inst_19256 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19258__$1,inst_19256);
} else {
if((state_val_19259 === (12))){
var state_19258__$1 = state_19258;
var statearr_19266_19292 = state_19258__$1;
(statearr_19266_19292[(2)] = null);

(statearr_19266_19292[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (2))){
var inst_19235 = (state_19258[(7)]);
var state_19258__$1 = state_19258;
if(cljs.core.truth_(inst_19235)){
var statearr_19267_19293 = state_19258__$1;
(statearr_19267_19293[(1)] = (4));

} else {
var statearr_19268_19294 = state_19258__$1;
(statearr_19268_19294[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (11))){
var inst_19249 = cljs.core.async.close_BANG_(ch);
var state_19258__$1 = state_19258;
var statearr_19269_19295 = state_19258__$1;
(statearr_19269_19295[(2)] = inst_19249);

(statearr_19269_19295[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (9))){
var state_19258__$1 = state_19258;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19270_19296 = state_19258__$1;
(statearr_19270_19296[(1)] = (11));

} else {
var statearr_19271_19297 = state_19258__$1;
(statearr_19271_19297[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (5))){
var inst_19235 = (state_19258[(7)]);
var state_19258__$1 = state_19258;
var statearr_19272_19298 = state_19258__$1;
(statearr_19272_19298[(2)] = inst_19235);

(statearr_19272_19298[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (10))){
var inst_19254 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
var statearr_19273_19299 = state_19258__$1;
(statearr_19273_19299[(2)] = inst_19254);

(statearr_19273_19299[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19259 === (8))){
var inst_19235 = (state_19258[(7)]);
var inst_19245 = cljs.core.next(inst_19235);
var inst_19235__$1 = inst_19245;
var state_19258__$1 = (function (){var statearr_19274 = state_19258;
(statearr_19274[(7)] = inst_19235__$1);

return statearr_19274;
})();
var statearr_19275_19300 = state_19258__$1;
(statearr_19275_19300[(2)] = null);

(statearr_19275_19300[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto__))
;
return ((function (switch__18320__auto__,c__18434__auto__){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_19279 = [null,null,null,null,null,null,null,null];
(statearr_19279[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_19279[(1)] = (1));

return statearr_19279;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_19258){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_19258);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e19280){if((e19280 instanceof Object)){
var ex__18324__auto__ = e19280;
var statearr_19281_19301 = state_19258;
(statearr_19281_19301[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19258);

return cljs.core.cst$kw$recur;
} else {
throw e19280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__19302 = state_19258;
state_19258 = G__19302;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_19258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_19258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto__))
})();
var state__18436__auto__ = (function (){var statearr_19282 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_19282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto__);

return statearr_19282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto__))
);

return c__18434__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7114__auto__ = (((_ == null))?null:_);
var m__7115__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7115__auto__.call(null,_));
} else {
var m__7115__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7115__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7114__auto__ = (((m == null))?null:m);
var m__7115__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7115__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7115__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7115__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7114__auto__ = (((m == null))?null:m);
var m__7115__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7115__auto__.call(null,m,ch));
} else {
var m__7115__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7115__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7114__auto__ = (((m == null))?null:m);
var m__7115__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7115__auto__.call(null,m));
} else {
var m__7115__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7115__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__19527 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19527) : cljs.core.atom.call(null,G__19527));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async19528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19528 = (function (mult,ch,cs,meta19529){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta19529 = meta19529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19530,meta19529__$1){
var self__ = this;
var _19530__$1 = this;
return (new cljs.core.async.t_cljs$core$async19528(self__.mult,self__.ch,self__.cs,meta19529__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async19528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19530){
var self__ = this;
var _19530__$1 = this;
return self__.meta19529;
});})(cs))
;

cljs.core.async.t_cljs$core$async19528.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async19528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async19528.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async19528.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19528.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19528.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19531_19751 = self__.cs;
var G__19532_19752 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19531_19751,G__19532_19752) : cljs.core.reset_BANG_.call(null,G__19531_19751,G__19532_19752));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async19528.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta19529], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async19528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19528";

cljs.core.async.t_cljs$core$async19528.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async19528");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async19528 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async19528(mult__$1,ch__$1,cs__$1,meta19529){
return (new cljs.core.async.t_cljs$core$async19528(mult__$1,ch__$1,cs__$1,meta19529));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async19528(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18434__auto___19753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___19753,cs,m,dchan,dctr,done){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___19753,cs,m,dchan,dctr,done){
return (function (state_19663){
var state_val_19664 = (state_19663[(1)]);
if((state_val_19664 === (7))){
var inst_19659 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19665_19754 = state_19663__$1;
(statearr_19665_19754[(2)] = inst_19659);

(statearr_19665_19754[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (20))){
var inst_19564 = (state_19663[(7)]);
var inst_19574 = cljs.core.first(inst_19564);
var inst_19575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19574,(0),null);
var inst_19576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19574,(1),null);
var state_19663__$1 = (function (){var statearr_19666 = state_19663;
(statearr_19666[(8)] = inst_19575);

return statearr_19666;
})();
if(cljs.core.truth_(inst_19576)){
var statearr_19667_19755 = state_19663__$1;
(statearr_19667_19755[(1)] = (22));

} else {
var statearr_19668_19756 = state_19663__$1;
(statearr_19668_19756[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (27))){
var inst_19606 = (state_19663[(9)]);
var inst_19611 = (state_19663[(10)]);
var inst_19535 = (state_19663[(11)]);
var inst_19604 = (state_19663[(12)]);
var inst_19611__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19604,inst_19606);
var inst_19612 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19611__$1,inst_19535,done);
var state_19663__$1 = (function (){var statearr_19669 = state_19663;
(statearr_19669[(10)] = inst_19611__$1);

return statearr_19669;
})();
if(cljs.core.truth_(inst_19612)){
var statearr_19670_19757 = state_19663__$1;
(statearr_19670_19757[(1)] = (30));

} else {
var statearr_19671_19758 = state_19663__$1;
(statearr_19671_19758[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (1))){
var state_19663__$1 = state_19663;
var statearr_19672_19759 = state_19663__$1;
(statearr_19672_19759[(2)] = null);

(statearr_19672_19759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (24))){
var inst_19564 = (state_19663[(7)]);
var inst_19581 = (state_19663[(2)]);
var inst_19582 = cljs.core.next(inst_19564);
var inst_19544 = inst_19582;
var inst_19545 = null;
var inst_19546 = (0);
var inst_19547 = (0);
var state_19663__$1 = (function (){var statearr_19673 = state_19663;
(statearr_19673[(13)] = inst_19544);

(statearr_19673[(14)] = inst_19581);

(statearr_19673[(15)] = inst_19547);

(statearr_19673[(16)] = inst_19545);

(statearr_19673[(17)] = inst_19546);

return statearr_19673;
})();
var statearr_19674_19760 = state_19663__$1;
(statearr_19674_19760[(2)] = null);

(statearr_19674_19760[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (39))){
var state_19663__$1 = state_19663;
var statearr_19678_19761 = state_19663__$1;
(statearr_19678_19761[(2)] = null);

(statearr_19678_19761[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (4))){
var inst_19535 = (state_19663[(11)]);
var inst_19535__$1 = (state_19663[(2)]);
var inst_19536 = (inst_19535__$1 == null);
var state_19663__$1 = (function (){var statearr_19679 = state_19663;
(statearr_19679[(11)] = inst_19535__$1);

return statearr_19679;
})();
if(cljs.core.truth_(inst_19536)){
var statearr_19680_19762 = state_19663__$1;
(statearr_19680_19762[(1)] = (5));

} else {
var statearr_19681_19763 = state_19663__$1;
(statearr_19681_19763[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (15))){
var inst_19544 = (state_19663[(13)]);
var inst_19547 = (state_19663[(15)]);
var inst_19545 = (state_19663[(16)]);
var inst_19546 = (state_19663[(17)]);
var inst_19560 = (state_19663[(2)]);
var inst_19561 = (inst_19547 + (1));
var tmp19675 = inst_19544;
var tmp19676 = inst_19545;
var tmp19677 = inst_19546;
var inst_19544__$1 = tmp19675;
var inst_19545__$1 = tmp19676;
var inst_19546__$1 = tmp19677;
var inst_19547__$1 = inst_19561;
var state_19663__$1 = (function (){var statearr_19682 = state_19663;
(statearr_19682[(13)] = inst_19544__$1);

(statearr_19682[(15)] = inst_19547__$1);

(statearr_19682[(16)] = inst_19545__$1);

(statearr_19682[(18)] = inst_19560);

(statearr_19682[(17)] = inst_19546__$1);

return statearr_19682;
})();
var statearr_19683_19764 = state_19663__$1;
(statearr_19683_19764[(2)] = null);

(statearr_19683_19764[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (21))){
var inst_19585 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19687_19765 = state_19663__$1;
(statearr_19687_19765[(2)] = inst_19585);

(statearr_19687_19765[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (31))){
var inst_19611 = (state_19663[(10)]);
var inst_19615 = done(null);
var inst_19616 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19611);
var state_19663__$1 = (function (){var statearr_19688 = state_19663;
(statearr_19688[(19)] = inst_19615);

return statearr_19688;
})();
var statearr_19689_19766 = state_19663__$1;
(statearr_19689_19766[(2)] = inst_19616);

(statearr_19689_19766[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (32))){
var inst_19603 = (state_19663[(20)]);
var inst_19606 = (state_19663[(9)]);
var inst_19605 = (state_19663[(21)]);
var inst_19604 = (state_19663[(12)]);
var inst_19618 = (state_19663[(2)]);
var inst_19619 = (inst_19606 + (1));
var tmp19684 = inst_19603;
var tmp19685 = inst_19605;
var tmp19686 = inst_19604;
var inst_19603__$1 = tmp19684;
var inst_19604__$1 = tmp19686;
var inst_19605__$1 = tmp19685;
var inst_19606__$1 = inst_19619;
var state_19663__$1 = (function (){var statearr_19690 = state_19663;
(statearr_19690[(20)] = inst_19603__$1);

(statearr_19690[(9)] = inst_19606__$1);

(statearr_19690[(21)] = inst_19605__$1);

(statearr_19690[(22)] = inst_19618);

(statearr_19690[(12)] = inst_19604__$1);

return statearr_19690;
})();
var statearr_19691_19767 = state_19663__$1;
(statearr_19691_19767[(2)] = null);

(statearr_19691_19767[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (40))){
var inst_19631 = (state_19663[(23)]);
var inst_19635 = done(null);
var inst_19636 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19631);
var state_19663__$1 = (function (){var statearr_19692 = state_19663;
(statearr_19692[(24)] = inst_19635);

return statearr_19692;
})();
var statearr_19693_19768 = state_19663__$1;
(statearr_19693_19768[(2)] = inst_19636);

(statearr_19693_19768[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (33))){
var inst_19622 = (state_19663[(25)]);
var inst_19624 = cljs.core.chunked_seq_QMARK_(inst_19622);
var state_19663__$1 = state_19663;
if(inst_19624){
var statearr_19694_19769 = state_19663__$1;
(statearr_19694_19769[(1)] = (36));

} else {
var statearr_19695_19770 = state_19663__$1;
(statearr_19695_19770[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (13))){
var inst_19554 = (state_19663[(26)]);
var inst_19557 = cljs.core.async.close_BANG_(inst_19554);
var state_19663__$1 = state_19663;
var statearr_19696_19771 = state_19663__$1;
(statearr_19696_19771[(2)] = inst_19557);

(statearr_19696_19771[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (22))){
var inst_19575 = (state_19663[(8)]);
var inst_19578 = cljs.core.async.close_BANG_(inst_19575);
var state_19663__$1 = state_19663;
var statearr_19697_19772 = state_19663__$1;
(statearr_19697_19772[(2)] = inst_19578);

(statearr_19697_19772[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (36))){
var inst_19622 = (state_19663[(25)]);
var inst_19626 = cljs.core.chunk_first(inst_19622);
var inst_19627 = cljs.core.chunk_rest(inst_19622);
var inst_19628 = cljs.core.count(inst_19626);
var inst_19603 = inst_19627;
var inst_19604 = inst_19626;
var inst_19605 = inst_19628;
var inst_19606 = (0);
var state_19663__$1 = (function (){var statearr_19698 = state_19663;
(statearr_19698[(20)] = inst_19603);

(statearr_19698[(9)] = inst_19606);

(statearr_19698[(21)] = inst_19605);

(statearr_19698[(12)] = inst_19604);

return statearr_19698;
})();
var statearr_19699_19773 = state_19663__$1;
(statearr_19699_19773[(2)] = null);

(statearr_19699_19773[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (41))){
var inst_19622 = (state_19663[(25)]);
var inst_19638 = (state_19663[(2)]);
var inst_19639 = cljs.core.next(inst_19622);
var inst_19603 = inst_19639;
var inst_19604 = null;
var inst_19605 = (0);
var inst_19606 = (0);
var state_19663__$1 = (function (){var statearr_19700 = state_19663;
(statearr_19700[(20)] = inst_19603);

(statearr_19700[(27)] = inst_19638);

(statearr_19700[(9)] = inst_19606);

(statearr_19700[(21)] = inst_19605);

(statearr_19700[(12)] = inst_19604);

return statearr_19700;
})();
var statearr_19701_19774 = state_19663__$1;
(statearr_19701_19774[(2)] = null);

(statearr_19701_19774[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (43))){
var state_19663__$1 = state_19663;
var statearr_19702_19775 = state_19663__$1;
(statearr_19702_19775[(2)] = null);

(statearr_19702_19775[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (29))){
var inst_19647 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19703_19776 = state_19663__$1;
(statearr_19703_19776[(2)] = inst_19647);

(statearr_19703_19776[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (44))){
var inst_19656 = (state_19663[(2)]);
var state_19663__$1 = (function (){var statearr_19704 = state_19663;
(statearr_19704[(28)] = inst_19656);

return statearr_19704;
})();
var statearr_19705_19777 = state_19663__$1;
(statearr_19705_19777[(2)] = null);

(statearr_19705_19777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (6))){
var inst_19595 = (state_19663[(29)]);
var inst_19594 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_19595__$1 = cljs.core.keys(inst_19594);
var inst_19596 = cljs.core.count(inst_19595__$1);
var inst_19597 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_19596) : cljs.core.reset_BANG_.call(null,dctr,inst_19596));
var inst_19602 = cljs.core.seq(inst_19595__$1);
var inst_19603 = inst_19602;
var inst_19604 = null;
var inst_19605 = (0);
var inst_19606 = (0);
var state_19663__$1 = (function (){var statearr_19706 = state_19663;
(statearr_19706[(20)] = inst_19603);

(statearr_19706[(9)] = inst_19606);

(statearr_19706[(30)] = inst_19597);

(statearr_19706[(21)] = inst_19605);

(statearr_19706[(29)] = inst_19595__$1);

(statearr_19706[(12)] = inst_19604);

return statearr_19706;
})();
var statearr_19707_19778 = state_19663__$1;
(statearr_19707_19778[(2)] = null);

(statearr_19707_19778[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (28))){
var inst_19603 = (state_19663[(20)]);
var inst_19622 = (state_19663[(25)]);
var inst_19622__$1 = cljs.core.seq(inst_19603);
var state_19663__$1 = (function (){var statearr_19708 = state_19663;
(statearr_19708[(25)] = inst_19622__$1);

return statearr_19708;
})();
if(inst_19622__$1){
var statearr_19709_19779 = state_19663__$1;
(statearr_19709_19779[(1)] = (33));

} else {
var statearr_19710_19780 = state_19663__$1;
(statearr_19710_19780[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (25))){
var inst_19606 = (state_19663[(9)]);
var inst_19605 = (state_19663[(21)]);
var inst_19608 = (inst_19606 < inst_19605);
var inst_19609 = inst_19608;
var state_19663__$1 = state_19663;
if(cljs.core.truth_(inst_19609)){
var statearr_19711_19781 = state_19663__$1;
(statearr_19711_19781[(1)] = (27));

} else {
var statearr_19712_19782 = state_19663__$1;
(statearr_19712_19782[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (34))){
var state_19663__$1 = state_19663;
var statearr_19713_19783 = state_19663__$1;
(statearr_19713_19783[(2)] = null);

(statearr_19713_19783[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (17))){
var state_19663__$1 = state_19663;
var statearr_19714_19784 = state_19663__$1;
(statearr_19714_19784[(2)] = null);

(statearr_19714_19784[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (3))){
var inst_19661 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19663__$1,inst_19661);
} else {
if((state_val_19664 === (12))){
var inst_19590 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19715_19785 = state_19663__$1;
(statearr_19715_19785[(2)] = inst_19590);

(statearr_19715_19785[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (2))){
var state_19663__$1 = state_19663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19663__$1,(4),ch);
} else {
if((state_val_19664 === (23))){
var state_19663__$1 = state_19663;
var statearr_19716_19786 = state_19663__$1;
(statearr_19716_19786[(2)] = null);

(statearr_19716_19786[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (35))){
var inst_19645 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19717_19787 = state_19663__$1;
(statearr_19717_19787[(2)] = inst_19645);

(statearr_19717_19787[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (19))){
var inst_19564 = (state_19663[(7)]);
var inst_19568 = cljs.core.chunk_first(inst_19564);
var inst_19569 = cljs.core.chunk_rest(inst_19564);
var inst_19570 = cljs.core.count(inst_19568);
var inst_19544 = inst_19569;
var inst_19545 = inst_19568;
var inst_19546 = inst_19570;
var inst_19547 = (0);
var state_19663__$1 = (function (){var statearr_19718 = state_19663;
(statearr_19718[(13)] = inst_19544);

(statearr_19718[(15)] = inst_19547);

(statearr_19718[(16)] = inst_19545);

(statearr_19718[(17)] = inst_19546);

return statearr_19718;
})();
var statearr_19719_19788 = state_19663__$1;
(statearr_19719_19788[(2)] = null);

(statearr_19719_19788[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (11))){
var inst_19564 = (state_19663[(7)]);
var inst_19544 = (state_19663[(13)]);
var inst_19564__$1 = cljs.core.seq(inst_19544);
var state_19663__$1 = (function (){var statearr_19720 = state_19663;
(statearr_19720[(7)] = inst_19564__$1);

return statearr_19720;
})();
if(inst_19564__$1){
var statearr_19721_19789 = state_19663__$1;
(statearr_19721_19789[(1)] = (16));

} else {
var statearr_19722_19790 = state_19663__$1;
(statearr_19722_19790[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (9))){
var inst_19592 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19723_19791 = state_19663__$1;
(statearr_19723_19791[(2)] = inst_19592);

(statearr_19723_19791[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (5))){
var inst_19542 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_19543 = cljs.core.seq(inst_19542);
var inst_19544 = inst_19543;
var inst_19545 = null;
var inst_19546 = (0);
var inst_19547 = (0);
var state_19663__$1 = (function (){var statearr_19724 = state_19663;
(statearr_19724[(13)] = inst_19544);

(statearr_19724[(15)] = inst_19547);

(statearr_19724[(16)] = inst_19545);

(statearr_19724[(17)] = inst_19546);

return statearr_19724;
})();
var statearr_19725_19792 = state_19663__$1;
(statearr_19725_19792[(2)] = null);

(statearr_19725_19792[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (14))){
var state_19663__$1 = state_19663;
var statearr_19726_19793 = state_19663__$1;
(statearr_19726_19793[(2)] = null);

(statearr_19726_19793[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (45))){
var inst_19653 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19727_19794 = state_19663__$1;
(statearr_19727_19794[(2)] = inst_19653);

(statearr_19727_19794[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (26))){
var inst_19595 = (state_19663[(29)]);
var inst_19649 = (state_19663[(2)]);
var inst_19650 = cljs.core.seq(inst_19595);
var state_19663__$1 = (function (){var statearr_19728 = state_19663;
(statearr_19728[(31)] = inst_19649);

return statearr_19728;
})();
if(inst_19650){
var statearr_19729_19795 = state_19663__$1;
(statearr_19729_19795[(1)] = (42));

} else {
var statearr_19730_19796 = state_19663__$1;
(statearr_19730_19796[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (16))){
var inst_19564 = (state_19663[(7)]);
var inst_19566 = cljs.core.chunked_seq_QMARK_(inst_19564);
var state_19663__$1 = state_19663;
if(inst_19566){
var statearr_19731_19797 = state_19663__$1;
(statearr_19731_19797[(1)] = (19));

} else {
var statearr_19732_19798 = state_19663__$1;
(statearr_19732_19798[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (38))){
var inst_19642 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19733_19799 = state_19663__$1;
(statearr_19733_19799[(2)] = inst_19642);

(statearr_19733_19799[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (30))){
var state_19663__$1 = state_19663;
var statearr_19734_19800 = state_19663__$1;
(statearr_19734_19800[(2)] = null);

(statearr_19734_19800[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (10))){
var inst_19547 = (state_19663[(15)]);
var inst_19545 = (state_19663[(16)]);
var inst_19553 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19545,inst_19547);
var inst_19554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19553,(0),null);
var inst_19555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19553,(1),null);
var state_19663__$1 = (function (){var statearr_19735 = state_19663;
(statearr_19735[(26)] = inst_19554);

return statearr_19735;
})();
if(cljs.core.truth_(inst_19555)){
var statearr_19736_19801 = state_19663__$1;
(statearr_19736_19801[(1)] = (13));

} else {
var statearr_19737_19802 = state_19663__$1;
(statearr_19737_19802[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (18))){
var inst_19588 = (state_19663[(2)]);
var state_19663__$1 = state_19663;
var statearr_19738_19803 = state_19663__$1;
(statearr_19738_19803[(2)] = inst_19588);

(statearr_19738_19803[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (42))){
var state_19663__$1 = state_19663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19663__$1,(45),dchan);
} else {
if((state_val_19664 === (37))){
var inst_19631 = (state_19663[(23)]);
var inst_19622 = (state_19663[(25)]);
var inst_19535 = (state_19663[(11)]);
var inst_19631__$1 = cljs.core.first(inst_19622);
var inst_19632 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19631__$1,inst_19535,done);
var state_19663__$1 = (function (){var statearr_19739 = state_19663;
(statearr_19739[(23)] = inst_19631__$1);

return statearr_19739;
})();
if(cljs.core.truth_(inst_19632)){
var statearr_19740_19804 = state_19663__$1;
(statearr_19740_19804[(1)] = (39));

} else {
var statearr_19741_19805 = state_19663__$1;
(statearr_19741_19805[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19664 === (8))){
var inst_19547 = (state_19663[(15)]);
var inst_19546 = (state_19663[(17)]);
var inst_19549 = (inst_19547 < inst_19546);
var inst_19550 = inst_19549;
var state_19663__$1 = state_19663;
if(cljs.core.truth_(inst_19550)){
var statearr_19742_19806 = state_19663__$1;
(statearr_19742_19806[(1)] = (10));

} else {
var statearr_19743_19807 = state_19663__$1;
(statearr_19743_19807[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___19753,cs,m,dchan,dctr,done))
;
return ((function (switch__18320__auto__,c__18434__auto___19753,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18321__auto__ = null;
var cljs$core$async$mult_$_state_machine__18321__auto____0 = (function (){
var statearr_19747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19747[(0)] = cljs$core$async$mult_$_state_machine__18321__auto__);

(statearr_19747[(1)] = (1));

return statearr_19747;
});
var cljs$core$async$mult_$_state_machine__18321__auto____1 = (function (state_19663){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_19663);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e19748){if((e19748 instanceof Object)){
var ex__18324__auto__ = e19748;
var statearr_19749_19808 = state_19663;
(statearr_19749_19808[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19663);

return cljs.core.cst$kw$recur;
} else {
throw e19748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__19809 = state_19663;
state_19663 = G__19809;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18321__auto__ = function(state_19663){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18321__auto____1.call(this,state_19663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18321__auto____0;
cljs$core$async$mult_$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18321__auto____1;
return cljs$core$async$mult_$_state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___19753,cs,m,dchan,dctr,done))
})();
var state__18436__auto__ = (function (){var statearr_19750 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_19750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___19753);

return statearr_19750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___19753,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args19810 = [];
var len__7517__auto___19813 = arguments.length;
var i__7518__auto___19814 = (0);
while(true){
if((i__7518__auto___19814 < len__7517__auto___19813)){
args19810.push((arguments[i__7518__auto___19814]));

var G__19815 = (i__7518__auto___19814 + (1));
i__7518__auto___19814 = G__19815;
continue;
} else {
}
break;
}

var G__19812 = args19810.length;
switch (G__19812) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19810.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7114__auto__ = (((m == null))?null:m);
var m__7115__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7115__auto__.call(null,m,ch));
} else {
var m__7115__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7115__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7114__auto__ = (((m == null))?null:m);
var m__7115__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7115__auto__.call(null,m,ch));
} else {
var m__7115__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7115__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7114__auto__ = (((m == null))?null:m);
var m__7115__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7115__auto__.call(null,m));
} else {
var m__7115__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7115__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7114__auto__ = (((m == null))?null:m);
var m__7115__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7115__auto__.call(null,m,state_map));
} else {
var m__7115__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7115__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7114__auto__ = (((m == null))?null:m);
var m__7115__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7115__auto__.call(null,m,mode));
} else {
var m__7115__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7115__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7524__auto__ = [];
var len__7517__auto___19827 = arguments.length;
var i__7518__auto___19828 = (0);
while(true){
if((i__7518__auto___19828 < len__7517__auto___19827)){
args__7524__auto__.push((arguments[i__7518__auto___19828]));

var G__19829 = (i__7518__auto___19828 + (1));
i__7518__auto___19828 = G__19829;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((3) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7525__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19821){
var map__19822 = p__19821;
var map__19822__$1 = ((((!((map__19822 == null)))?((((map__19822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19822):map__19822);
var opts = map__19822__$1;
var statearr_19824_19830 = state;
(statearr_19824_19830[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__19822,map__19822__$1,opts){
return (function (val){
var statearr_19825_19831 = state;
(statearr_19825_19831[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19822,map__19822__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_19826_19832 = state;
(statearr_19826_19832[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19817){
var G__19818 = cljs.core.first(seq19817);
var seq19817__$1 = cljs.core.next(seq19817);
var G__19819 = cljs.core.first(seq19817__$1);
var seq19817__$2 = cljs.core.next(seq19817__$1);
var G__19820 = cljs.core.first(seq19817__$2);
var seq19817__$3 = cljs.core.next(seq19817__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19818,G__19819,G__19820,seq19817__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__19999 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19999) : cljs.core.atom.call(null,G__19999));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20000 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20001){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20001 = meta20001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20002,meta20001__$1){
var self__ = this;
var _20002__$1 = this;
return (new cljs.core.async.t_cljs$core$async20000(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20001__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20002){
var self__ = this;
var _20002__$1 = this;
return self__.meta20001;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20003_20165 = self__.cs;
var G__20004_20166 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20003_20165,G__20004_20166) : cljs.core.reset_BANG_.call(null,G__20003_20165,G__20004_20166));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta20001], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20000";

cljs.core.async.t_cljs$core$async20000.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async20000");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20000 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20000(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20001){
return (new cljs.core.async.t_cljs$core$async20000(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20001));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20000(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18434__auto___20167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___20167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___20167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20102){
var state_val_20103 = (state_20102[(1)]);
if((state_val_20103 === (7))){
var inst_20020 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20104_20168 = state_20102__$1;
(statearr_20104_20168[(2)] = inst_20020);

(statearr_20104_20168[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (20))){
var inst_20032 = (state_20102[(7)]);
var state_20102__$1 = state_20102;
var statearr_20105_20169 = state_20102__$1;
(statearr_20105_20169[(2)] = inst_20032);

(statearr_20105_20169[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (27))){
var state_20102__$1 = state_20102;
var statearr_20106_20170 = state_20102__$1;
(statearr_20106_20170[(2)] = null);

(statearr_20106_20170[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (1))){
var inst_20008 = (state_20102[(8)]);
var inst_20008__$1 = calc_state();
var inst_20010 = (inst_20008__$1 == null);
var inst_20011 = cljs.core.not(inst_20010);
var state_20102__$1 = (function (){var statearr_20107 = state_20102;
(statearr_20107[(8)] = inst_20008__$1);

return statearr_20107;
})();
if(inst_20011){
var statearr_20108_20171 = state_20102__$1;
(statearr_20108_20171[(1)] = (2));

} else {
var statearr_20109_20172 = state_20102__$1;
(statearr_20109_20172[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (24))){
var inst_20076 = (state_20102[(9)]);
var inst_20062 = (state_20102[(10)]);
var inst_20055 = (state_20102[(11)]);
var inst_20076__$1 = (inst_20055.cljs$core$IFn$_invoke$arity$1 ? inst_20055.cljs$core$IFn$_invoke$arity$1(inst_20062) : inst_20055.call(null,inst_20062));
var state_20102__$1 = (function (){var statearr_20110 = state_20102;
(statearr_20110[(9)] = inst_20076__$1);

return statearr_20110;
})();
if(cljs.core.truth_(inst_20076__$1)){
var statearr_20111_20173 = state_20102__$1;
(statearr_20111_20173[(1)] = (29));

} else {
var statearr_20112_20174 = state_20102__$1;
(statearr_20112_20174[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (4))){
var inst_20023 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20023)){
var statearr_20113_20175 = state_20102__$1;
(statearr_20113_20175[(1)] = (8));

} else {
var statearr_20114_20176 = state_20102__$1;
(statearr_20114_20176[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (15))){
var inst_20049 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20049)){
var statearr_20115_20177 = state_20102__$1;
(statearr_20115_20177[(1)] = (19));

} else {
var statearr_20116_20178 = state_20102__$1;
(statearr_20116_20178[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (21))){
var inst_20054 = (state_20102[(12)]);
var inst_20054__$1 = (state_20102[(2)]);
var inst_20055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20054__$1,cljs.core.cst$kw$solos);
var inst_20056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20054__$1,cljs.core.cst$kw$mutes);
var inst_20057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20054__$1,cljs.core.cst$kw$reads);
var state_20102__$1 = (function (){var statearr_20117 = state_20102;
(statearr_20117[(13)] = inst_20056);

(statearr_20117[(11)] = inst_20055);

(statearr_20117[(12)] = inst_20054__$1);

return statearr_20117;
})();
return cljs.core.async.ioc_alts_BANG_(state_20102__$1,(22),inst_20057);
} else {
if((state_val_20103 === (31))){
var inst_20084 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20084)){
var statearr_20118_20179 = state_20102__$1;
(statearr_20118_20179[(1)] = (32));

} else {
var statearr_20119_20180 = state_20102__$1;
(statearr_20119_20180[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (32))){
var inst_20061 = (state_20102[(14)]);
var state_20102__$1 = state_20102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20102__$1,(35),out,inst_20061);
} else {
if((state_val_20103 === (33))){
var inst_20054 = (state_20102[(12)]);
var inst_20032 = inst_20054;
var state_20102__$1 = (function (){var statearr_20120 = state_20102;
(statearr_20120[(7)] = inst_20032);

return statearr_20120;
})();
var statearr_20121_20181 = state_20102__$1;
(statearr_20121_20181[(2)] = null);

(statearr_20121_20181[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (13))){
var inst_20032 = (state_20102[(7)]);
var inst_20039 = inst_20032.cljs$lang$protocol_mask$partition0$;
var inst_20040 = (inst_20039 & (64));
var inst_20041 = inst_20032.cljs$core$ISeq$;
var inst_20042 = (inst_20040) || (inst_20041);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20042)){
var statearr_20122_20182 = state_20102__$1;
(statearr_20122_20182[(1)] = (16));

} else {
var statearr_20123_20183 = state_20102__$1;
(statearr_20123_20183[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (22))){
var inst_20062 = (state_20102[(10)]);
var inst_20061 = (state_20102[(14)]);
var inst_20060 = (state_20102[(2)]);
var inst_20061__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20060,(0),null);
var inst_20062__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20060,(1),null);
var inst_20063 = (inst_20061__$1 == null);
var inst_20064 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20062__$1,change);
var inst_20065 = (inst_20063) || (inst_20064);
var state_20102__$1 = (function (){var statearr_20124 = state_20102;
(statearr_20124[(10)] = inst_20062__$1);

(statearr_20124[(14)] = inst_20061__$1);

return statearr_20124;
})();
if(cljs.core.truth_(inst_20065)){
var statearr_20125_20184 = state_20102__$1;
(statearr_20125_20184[(1)] = (23));

} else {
var statearr_20126_20185 = state_20102__$1;
(statearr_20126_20185[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (36))){
var inst_20054 = (state_20102[(12)]);
var inst_20032 = inst_20054;
var state_20102__$1 = (function (){var statearr_20127 = state_20102;
(statearr_20127[(7)] = inst_20032);

return statearr_20127;
})();
var statearr_20128_20186 = state_20102__$1;
(statearr_20128_20186[(2)] = null);

(statearr_20128_20186[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (29))){
var inst_20076 = (state_20102[(9)]);
var state_20102__$1 = state_20102;
var statearr_20129_20187 = state_20102__$1;
(statearr_20129_20187[(2)] = inst_20076);

(statearr_20129_20187[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (6))){
var state_20102__$1 = state_20102;
var statearr_20130_20188 = state_20102__$1;
(statearr_20130_20188[(2)] = false);

(statearr_20130_20188[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (28))){
var inst_20072 = (state_20102[(2)]);
var inst_20073 = calc_state();
var inst_20032 = inst_20073;
var state_20102__$1 = (function (){var statearr_20131 = state_20102;
(statearr_20131[(15)] = inst_20072);

(statearr_20131[(7)] = inst_20032);

return statearr_20131;
})();
var statearr_20132_20189 = state_20102__$1;
(statearr_20132_20189[(2)] = null);

(statearr_20132_20189[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (25))){
var inst_20098 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20133_20190 = state_20102__$1;
(statearr_20133_20190[(2)] = inst_20098);

(statearr_20133_20190[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (34))){
var inst_20096 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20134_20191 = state_20102__$1;
(statearr_20134_20191[(2)] = inst_20096);

(statearr_20134_20191[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (17))){
var state_20102__$1 = state_20102;
var statearr_20135_20192 = state_20102__$1;
(statearr_20135_20192[(2)] = false);

(statearr_20135_20192[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (3))){
var state_20102__$1 = state_20102;
var statearr_20136_20193 = state_20102__$1;
(statearr_20136_20193[(2)] = false);

(statearr_20136_20193[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (12))){
var inst_20100 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20102__$1,inst_20100);
} else {
if((state_val_20103 === (2))){
var inst_20008 = (state_20102[(8)]);
var inst_20013 = inst_20008.cljs$lang$protocol_mask$partition0$;
var inst_20014 = (inst_20013 & (64));
var inst_20015 = inst_20008.cljs$core$ISeq$;
var inst_20016 = (inst_20014) || (inst_20015);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20016)){
var statearr_20137_20194 = state_20102__$1;
(statearr_20137_20194[(1)] = (5));

} else {
var statearr_20138_20195 = state_20102__$1;
(statearr_20138_20195[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (23))){
var inst_20061 = (state_20102[(14)]);
var inst_20067 = (inst_20061 == null);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20067)){
var statearr_20139_20196 = state_20102__$1;
(statearr_20139_20196[(1)] = (26));

} else {
var statearr_20140_20197 = state_20102__$1;
(statearr_20140_20197[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (35))){
var inst_20087 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
if(cljs.core.truth_(inst_20087)){
var statearr_20141_20198 = state_20102__$1;
(statearr_20141_20198[(1)] = (36));

} else {
var statearr_20142_20199 = state_20102__$1;
(statearr_20142_20199[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (19))){
var inst_20032 = (state_20102[(7)]);
var inst_20051 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20032);
var state_20102__$1 = state_20102;
var statearr_20143_20200 = state_20102__$1;
(statearr_20143_20200[(2)] = inst_20051);

(statearr_20143_20200[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (11))){
var inst_20032 = (state_20102[(7)]);
var inst_20036 = (inst_20032 == null);
var inst_20037 = cljs.core.not(inst_20036);
var state_20102__$1 = state_20102;
if(inst_20037){
var statearr_20144_20201 = state_20102__$1;
(statearr_20144_20201[(1)] = (13));

} else {
var statearr_20145_20202 = state_20102__$1;
(statearr_20145_20202[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (9))){
var inst_20008 = (state_20102[(8)]);
var state_20102__$1 = state_20102;
var statearr_20146_20203 = state_20102__$1;
(statearr_20146_20203[(2)] = inst_20008);

(statearr_20146_20203[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (5))){
var state_20102__$1 = state_20102;
var statearr_20147_20204 = state_20102__$1;
(statearr_20147_20204[(2)] = true);

(statearr_20147_20204[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (14))){
var state_20102__$1 = state_20102;
var statearr_20148_20205 = state_20102__$1;
(statearr_20148_20205[(2)] = false);

(statearr_20148_20205[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (26))){
var inst_20062 = (state_20102[(10)]);
var inst_20069 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_20062);
var state_20102__$1 = state_20102;
var statearr_20149_20206 = state_20102__$1;
(statearr_20149_20206[(2)] = inst_20069);

(statearr_20149_20206[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (16))){
var state_20102__$1 = state_20102;
var statearr_20150_20207 = state_20102__$1;
(statearr_20150_20207[(2)] = true);

(statearr_20150_20207[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (38))){
var inst_20092 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20151_20208 = state_20102__$1;
(statearr_20151_20208[(2)] = inst_20092);

(statearr_20151_20208[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (30))){
var inst_20062 = (state_20102[(10)]);
var inst_20056 = (state_20102[(13)]);
var inst_20055 = (state_20102[(11)]);
var inst_20079 = cljs.core.empty_QMARK_(inst_20055);
var inst_20080 = (inst_20056.cljs$core$IFn$_invoke$arity$1 ? inst_20056.cljs$core$IFn$_invoke$arity$1(inst_20062) : inst_20056.call(null,inst_20062));
var inst_20081 = cljs.core.not(inst_20080);
var inst_20082 = (inst_20079) && (inst_20081);
var state_20102__$1 = state_20102;
var statearr_20152_20209 = state_20102__$1;
(statearr_20152_20209[(2)] = inst_20082);

(statearr_20152_20209[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (10))){
var inst_20008 = (state_20102[(8)]);
var inst_20028 = (state_20102[(2)]);
var inst_20029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20028,cljs.core.cst$kw$solos);
var inst_20030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20028,cljs.core.cst$kw$mutes);
var inst_20031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20028,cljs.core.cst$kw$reads);
var inst_20032 = inst_20008;
var state_20102__$1 = (function (){var statearr_20153 = state_20102;
(statearr_20153[(16)] = inst_20031);

(statearr_20153[(7)] = inst_20032);

(statearr_20153[(17)] = inst_20029);

(statearr_20153[(18)] = inst_20030);

return statearr_20153;
})();
var statearr_20154_20210 = state_20102__$1;
(statearr_20154_20210[(2)] = null);

(statearr_20154_20210[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (18))){
var inst_20046 = (state_20102[(2)]);
var state_20102__$1 = state_20102;
var statearr_20155_20211 = state_20102__$1;
(statearr_20155_20211[(2)] = inst_20046);

(statearr_20155_20211[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (37))){
var state_20102__$1 = state_20102;
var statearr_20156_20212 = state_20102__$1;
(statearr_20156_20212[(2)] = null);

(statearr_20156_20212[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20103 === (8))){
var inst_20008 = (state_20102[(8)]);
var inst_20025 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_20008);
var state_20102__$1 = state_20102;
var statearr_20157_20213 = state_20102__$1;
(statearr_20157_20213[(2)] = inst_20025);

(statearr_20157_20213[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___20167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18320__auto__,c__18434__auto___20167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18321__auto__ = null;
var cljs$core$async$mix_$_state_machine__18321__auto____0 = (function (){
var statearr_20161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20161[(0)] = cljs$core$async$mix_$_state_machine__18321__auto__);

(statearr_20161[(1)] = (1));

return statearr_20161;
});
var cljs$core$async$mix_$_state_machine__18321__auto____1 = (function (state_20102){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_20102);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e20162){if((e20162 instanceof Object)){
var ex__18324__auto__ = e20162;
var statearr_20163_20214 = state_20102;
(statearr_20163_20214[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20102);

return cljs.core.cst$kw$recur;
} else {
throw e20162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__20215 = state_20102;
state_20102 = G__20215;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18321__auto__ = function(state_20102){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18321__auto____1.call(this,state_20102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18321__auto____0;
cljs$core$async$mix_$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18321__auto____1;
return cljs$core$async$mix_$_state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___20167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18436__auto__ = (function (){var statearr_20164 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_20164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___20167);

return statearr_20164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___20167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7114__auto__ = (((p == null))?null:p);
var m__7115__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7115__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7115__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7115__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7114__auto__ = (((p == null))?null:p);
var m__7115__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7115__auto__.call(null,p,v,ch));
} else {
var m__7115__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7115__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20216 = [];
var len__7517__auto___20219 = arguments.length;
var i__7518__auto___20220 = (0);
while(true){
if((i__7518__auto___20220 < len__7517__auto___20219)){
args20216.push((arguments[i__7518__auto___20220]));

var G__20221 = (i__7518__auto___20220 + (1));
i__7518__auto___20220 = G__20221;
continue;
} else {
}
break;
}

var G__20218 = args20216.length;
switch (G__20218) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20216.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7114__auto__ = (((p == null))?null:p);
var m__7115__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7115__auto__.call(null,p));
} else {
var m__7115__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7115__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7114__auto__ = (((p == null))?null:p);
var m__7115__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7115__auto__.call(null,p,v));
} else {
var m__7115__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7115__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20224 = [];
var len__7517__auto___20352 = arguments.length;
var i__7518__auto___20353 = (0);
while(true){
if((i__7518__auto___20353 < len__7517__auto___20352)){
args20224.push((arguments[i__7518__auto___20353]));

var G__20354 = (i__7518__auto___20353 + (1));
i__7518__auto___20353 = G__20354;
continue;
} else {
}
break;
}

var G__20226 = args20224.length;
switch (G__20226) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20224.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__20227 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20227) : cljs.core.atom.call(null,G__20227));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6459__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6459__auto__,mults){
return (function (p1__20223_SHARP_){
if(cljs.core.truth_((p1__20223_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20223_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20223_SHARP_.call(null,topic)))){
return p1__20223_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20223_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20228 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20229){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20229 = meta20229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20230,meta20229__$1){
var self__ = this;
var _20230__$1 = this;
return (new cljs.core.async.t_cljs$core$async20228(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20229__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20230){
var self__ = this;
var _20230__$1 = this;
return self__.meta20229;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20231 = self__.mults;
var G__20232 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20231,G__20232) : cljs.core.reset_BANG_.call(null,G__20231,G__20232));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20228.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20228.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta20229], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20228";

cljs.core.async.t_cljs$core$async20228.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async20228");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20228 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20228(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20229){
return (new cljs.core.async.t_cljs$core$async20228(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20229));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20228(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18434__auto___20356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___20356,mults,ensure_mult,p){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___20356,mults,ensure_mult,p){
return (function (state_20304){
var state_val_20305 = (state_20304[(1)]);
if((state_val_20305 === (7))){
var inst_20300 = (state_20304[(2)]);
var state_20304__$1 = state_20304;
var statearr_20306_20357 = state_20304__$1;
(statearr_20306_20357[(2)] = inst_20300);

(statearr_20306_20357[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (20))){
var state_20304__$1 = state_20304;
var statearr_20307_20358 = state_20304__$1;
(statearr_20307_20358[(2)] = null);

(statearr_20307_20358[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (1))){
var state_20304__$1 = state_20304;
var statearr_20308_20359 = state_20304__$1;
(statearr_20308_20359[(2)] = null);

(statearr_20308_20359[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (24))){
var inst_20283 = (state_20304[(7)]);
var inst_20292 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20283);
var state_20304__$1 = state_20304;
var statearr_20309_20360 = state_20304__$1;
(statearr_20309_20360[(2)] = inst_20292);

(statearr_20309_20360[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (4))){
var inst_20235 = (state_20304[(8)]);
var inst_20235__$1 = (state_20304[(2)]);
var inst_20236 = (inst_20235__$1 == null);
var state_20304__$1 = (function (){var statearr_20310 = state_20304;
(statearr_20310[(8)] = inst_20235__$1);

return statearr_20310;
})();
if(cljs.core.truth_(inst_20236)){
var statearr_20311_20361 = state_20304__$1;
(statearr_20311_20361[(1)] = (5));

} else {
var statearr_20312_20362 = state_20304__$1;
(statearr_20312_20362[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (15))){
var inst_20277 = (state_20304[(2)]);
var state_20304__$1 = state_20304;
var statearr_20313_20363 = state_20304__$1;
(statearr_20313_20363[(2)] = inst_20277);

(statearr_20313_20363[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (21))){
var inst_20297 = (state_20304[(2)]);
var state_20304__$1 = (function (){var statearr_20314 = state_20304;
(statearr_20314[(9)] = inst_20297);

return statearr_20314;
})();
var statearr_20315_20364 = state_20304__$1;
(statearr_20315_20364[(2)] = null);

(statearr_20315_20364[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (13))){
var inst_20259 = (state_20304[(10)]);
var inst_20261 = cljs.core.chunked_seq_QMARK_(inst_20259);
var state_20304__$1 = state_20304;
if(inst_20261){
var statearr_20316_20365 = state_20304__$1;
(statearr_20316_20365[(1)] = (16));

} else {
var statearr_20317_20366 = state_20304__$1;
(statearr_20317_20366[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (22))){
var inst_20289 = (state_20304[(2)]);
var state_20304__$1 = state_20304;
if(cljs.core.truth_(inst_20289)){
var statearr_20318_20367 = state_20304__$1;
(statearr_20318_20367[(1)] = (23));

} else {
var statearr_20319_20368 = state_20304__$1;
(statearr_20319_20368[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (6))){
var inst_20235 = (state_20304[(8)]);
var inst_20285 = (state_20304[(11)]);
var inst_20283 = (state_20304[(7)]);
var inst_20283__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20235) : topic_fn.call(null,inst_20235));
var inst_20284 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_20285__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20284,inst_20283__$1);
var state_20304__$1 = (function (){var statearr_20320 = state_20304;
(statearr_20320[(11)] = inst_20285__$1);

(statearr_20320[(7)] = inst_20283__$1);

return statearr_20320;
})();
if(cljs.core.truth_(inst_20285__$1)){
var statearr_20321_20369 = state_20304__$1;
(statearr_20321_20369[(1)] = (19));

} else {
var statearr_20322_20370 = state_20304__$1;
(statearr_20322_20370[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (25))){
var inst_20294 = (state_20304[(2)]);
var state_20304__$1 = state_20304;
var statearr_20323_20371 = state_20304__$1;
(statearr_20323_20371[(2)] = inst_20294);

(statearr_20323_20371[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (17))){
var inst_20259 = (state_20304[(10)]);
var inst_20268 = cljs.core.first(inst_20259);
var inst_20269 = cljs.core.async.muxch_STAR_(inst_20268);
var inst_20270 = cljs.core.async.close_BANG_(inst_20269);
var inst_20271 = cljs.core.next(inst_20259);
var inst_20245 = inst_20271;
var inst_20246 = null;
var inst_20247 = (0);
var inst_20248 = (0);
var state_20304__$1 = (function (){var statearr_20324 = state_20304;
(statearr_20324[(12)] = inst_20246);

(statearr_20324[(13)] = inst_20248);

(statearr_20324[(14)] = inst_20247);

(statearr_20324[(15)] = inst_20245);

(statearr_20324[(16)] = inst_20270);

return statearr_20324;
})();
var statearr_20325_20372 = state_20304__$1;
(statearr_20325_20372[(2)] = null);

(statearr_20325_20372[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (3))){
var inst_20302 = (state_20304[(2)]);
var state_20304__$1 = state_20304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20304__$1,inst_20302);
} else {
if((state_val_20305 === (12))){
var inst_20279 = (state_20304[(2)]);
var state_20304__$1 = state_20304;
var statearr_20326_20373 = state_20304__$1;
(statearr_20326_20373[(2)] = inst_20279);

(statearr_20326_20373[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (2))){
var state_20304__$1 = state_20304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20304__$1,(4),ch);
} else {
if((state_val_20305 === (23))){
var state_20304__$1 = state_20304;
var statearr_20327_20374 = state_20304__$1;
(statearr_20327_20374[(2)] = null);

(statearr_20327_20374[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (19))){
var inst_20235 = (state_20304[(8)]);
var inst_20285 = (state_20304[(11)]);
var inst_20287 = cljs.core.async.muxch_STAR_(inst_20285);
var state_20304__$1 = state_20304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20304__$1,(22),inst_20287,inst_20235);
} else {
if((state_val_20305 === (11))){
var inst_20259 = (state_20304[(10)]);
var inst_20245 = (state_20304[(15)]);
var inst_20259__$1 = cljs.core.seq(inst_20245);
var state_20304__$1 = (function (){var statearr_20328 = state_20304;
(statearr_20328[(10)] = inst_20259__$1);

return statearr_20328;
})();
if(inst_20259__$1){
var statearr_20329_20375 = state_20304__$1;
(statearr_20329_20375[(1)] = (13));

} else {
var statearr_20330_20376 = state_20304__$1;
(statearr_20330_20376[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (9))){
var inst_20281 = (state_20304[(2)]);
var state_20304__$1 = state_20304;
var statearr_20331_20377 = state_20304__$1;
(statearr_20331_20377[(2)] = inst_20281);

(statearr_20331_20377[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (5))){
var inst_20242 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_20243 = cljs.core.vals(inst_20242);
var inst_20244 = cljs.core.seq(inst_20243);
var inst_20245 = inst_20244;
var inst_20246 = null;
var inst_20247 = (0);
var inst_20248 = (0);
var state_20304__$1 = (function (){var statearr_20332 = state_20304;
(statearr_20332[(12)] = inst_20246);

(statearr_20332[(13)] = inst_20248);

(statearr_20332[(14)] = inst_20247);

(statearr_20332[(15)] = inst_20245);

return statearr_20332;
})();
var statearr_20333_20378 = state_20304__$1;
(statearr_20333_20378[(2)] = null);

(statearr_20333_20378[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (14))){
var state_20304__$1 = state_20304;
var statearr_20337_20379 = state_20304__$1;
(statearr_20337_20379[(2)] = null);

(statearr_20337_20379[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (16))){
var inst_20259 = (state_20304[(10)]);
var inst_20263 = cljs.core.chunk_first(inst_20259);
var inst_20264 = cljs.core.chunk_rest(inst_20259);
var inst_20265 = cljs.core.count(inst_20263);
var inst_20245 = inst_20264;
var inst_20246 = inst_20263;
var inst_20247 = inst_20265;
var inst_20248 = (0);
var state_20304__$1 = (function (){var statearr_20338 = state_20304;
(statearr_20338[(12)] = inst_20246);

(statearr_20338[(13)] = inst_20248);

(statearr_20338[(14)] = inst_20247);

(statearr_20338[(15)] = inst_20245);

return statearr_20338;
})();
var statearr_20339_20380 = state_20304__$1;
(statearr_20339_20380[(2)] = null);

(statearr_20339_20380[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (10))){
var inst_20246 = (state_20304[(12)]);
var inst_20248 = (state_20304[(13)]);
var inst_20247 = (state_20304[(14)]);
var inst_20245 = (state_20304[(15)]);
var inst_20253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20246,inst_20248);
var inst_20254 = cljs.core.async.muxch_STAR_(inst_20253);
var inst_20255 = cljs.core.async.close_BANG_(inst_20254);
var inst_20256 = (inst_20248 + (1));
var tmp20334 = inst_20246;
var tmp20335 = inst_20247;
var tmp20336 = inst_20245;
var inst_20245__$1 = tmp20336;
var inst_20246__$1 = tmp20334;
var inst_20247__$1 = tmp20335;
var inst_20248__$1 = inst_20256;
var state_20304__$1 = (function (){var statearr_20340 = state_20304;
(statearr_20340[(12)] = inst_20246__$1);

(statearr_20340[(13)] = inst_20248__$1);

(statearr_20340[(14)] = inst_20247__$1);

(statearr_20340[(17)] = inst_20255);

(statearr_20340[(15)] = inst_20245__$1);

return statearr_20340;
})();
var statearr_20341_20381 = state_20304__$1;
(statearr_20341_20381[(2)] = null);

(statearr_20341_20381[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (18))){
var inst_20274 = (state_20304[(2)]);
var state_20304__$1 = state_20304;
var statearr_20342_20382 = state_20304__$1;
(statearr_20342_20382[(2)] = inst_20274);

(statearr_20342_20382[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20305 === (8))){
var inst_20248 = (state_20304[(13)]);
var inst_20247 = (state_20304[(14)]);
var inst_20250 = (inst_20248 < inst_20247);
var inst_20251 = inst_20250;
var state_20304__$1 = state_20304;
if(cljs.core.truth_(inst_20251)){
var statearr_20343_20383 = state_20304__$1;
(statearr_20343_20383[(1)] = (10));

} else {
var statearr_20344_20384 = state_20304__$1;
(statearr_20344_20384[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___20356,mults,ensure_mult,p))
;
return ((function (switch__18320__auto__,c__18434__auto___20356,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_20348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20348[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_20348[(1)] = (1));

return statearr_20348;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_20304){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_20304);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e20349){if((e20349 instanceof Object)){
var ex__18324__auto__ = e20349;
var statearr_20350_20385 = state_20304;
(statearr_20350_20385[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20304);

return cljs.core.cst$kw$recur;
} else {
throw e20349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__20386 = state_20304;
state_20304 = G__20386;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_20304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_20304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___20356,mults,ensure_mult,p))
})();
var state__18436__auto__ = (function (){var statearr_20351 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_20351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___20356);

return statearr_20351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___20356,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20387 = [];
var len__7517__auto___20390 = arguments.length;
var i__7518__auto___20391 = (0);
while(true){
if((i__7518__auto___20391 < len__7517__auto___20390)){
args20387.push((arguments[i__7518__auto___20391]));

var G__20392 = (i__7518__auto___20391 + (1));
i__7518__auto___20391 = G__20392;
continue;
} else {
}
break;
}

var G__20389 = args20387.length;
switch (G__20389) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20387.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20394 = [];
var len__7517__auto___20397 = arguments.length;
var i__7518__auto___20398 = (0);
while(true){
if((i__7518__auto___20398 < len__7517__auto___20397)){
args20394.push((arguments[i__7518__auto___20398]));

var G__20399 = (i__7518__auto___20398 + (1));
i__7518__auto___20398 = G__20399;
continue;
} else {
}
break;
}

var G__20396 = args20394.length;
switch (G__20396) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20394.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20401 = [];
var len__7517__auto___20472 = arguments.length;
var i__7518__auto___20473 = (0);
while(true){
if((i__7518__auto___20473 < len__7517__auto___20472)){
args20401.push((arguments[i__7518__auto___20473]));

var G__20474 = (i__7518__auto___20473 + (1));
i__7518__auto___20473 = G__20474;
continue;
} else {
}
break;
}

var G__20403 = args20401.length;
switch (G__20403) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20401.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__18434__auto___20476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___20476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___20476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20442){
var state_val_20443 = (state_20442[(1)]);
if((state_val_20443 === (7))){
var state_20442__$1 = state_20442;
var statearr_20444_20477 = state_20442__$1;
(statearr_20444_20477[(2)] = null);

(statearr_20444_20477[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (1))){
var state_20442__$1 = state_20442;
var statearr_20445_20478 = state_20442__$1;
(statearr_20445_20478[(2)] = null);

(statearr_20445_20478[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (4))){
var inst_20406 = (state_20442[(7)]);
var inst_20408 = (inst_20406 < cnt);
var state_20442__$1 = state_20442;
if(cljs.core.truth_(inst_20408)){
var statearr_20446_20479 = state_20442__$1;
(statearr_20446_20479[(1)] = (6));

} else {
var statearr_20447_20480 = state_20442__$1;
(statearr_20447_20480[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (15))){
var inst_20438 = (state_20442[(2)]);
var state_20442__$1 = state_20442;
var statearr_20448_20481 = state_20442__$1;
(statearr_20448_20481[(2)] = inst_20438);

(statearr_20448_20481[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (13))){
var inst_20431 = cljs.core.async.close_BANG_(out);
var state_20442__$1 = state_20442;
var statearr_20449_20482 = state_20442__$1;
(statearr_20449_20482[(2)] = inst_20431);

(statearr_20449_20482[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (6))){
var state_20442__$1 = state_20442;
var statearr_20450_20483 = state_20442__$1;
(statearr_20450_20483[(2)] = null);

(statearr_20450_20483[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (3))){
var inst_20440 = (state_20442[(2)]);
var state_20442__$1 = state_20442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20442__$1,inst_20440);
} else {
if((state_val_20443 === (12))){
var inst_20428 = (state_20442[(8)]);
var inst_20428__$1 = (state_20442[(2)]);
var inst_20429 = cljs.core.some(cljs.core.nil_QMARK_,inst_20428__$1);
var state_20442__$1 = (function (){var statearr_20451 = state_20442;
(statearr_20451[(8)] = inst_20428__$1);

return statearr_20451;
})();
if(cljs.core.truth_(inst_20429)){
var statearr_20452_20484 = state_20442__$1;
(statearr_20452_20484[(1)] = (13));

} else {
var statearr_20453_20485 = state_20442__$1;
(statearr_20453_20485[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (2))){
var inst_20405 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_20406 = (0);
var state_20442__$1 = (function (){var statearr_20454 = state_20442;
(statearr_20454[(7)] = inst_20406);

(statearr_20454[(9)] = inst_20405);

return statearr_20454;
})();
var statearr_20455_20486 = state_20442__$1;
(statearr_20455_20486[(2)] = null);

(statearr_20455_20486[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (11))){
var inst_20406 = (state_20442[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_20442,(10),Object,null,(9));
var inst_20415 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20406) : chs__$1.call(null,inst_20406));
var inst_20416 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20406) : done.call(null,inst_20406));
var inst_20417 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20415,inst_20416);
var state_20442__$1 = state_20442;
var statearr_20456_20487 = state_20442__$1;
(statearr_20456_20487[(2)] = inst_20417);


cljs.core.async.impl.ioc_helpers.process_exception(state_20442__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (9))){
var inst_20406 = (state_20442[(7)]);
var inst_20419 = (state_20442[(2)]);
var inst_20420 = (inst_20406 + (1));
var inst_20406__$1 = inst_20420;
var state_20442__$1 = (function (){var statearr_20457 = state_20442;
(statearr_20457[(7)] = inst_20406__$1);

(statearr_20457[(10)] = inst_20419);

return statearr_20457;
})();
var statearr_20458_20488 = state_20442__$1;
(statearr_20458_20488[(2)] = null);

(statearr_20458_20488[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (5))){
var inst_20426 = (state_20442[(2)]);
var state_20442__$1 = (function (){var statearr_20459 = state_20442;
(statearr_20459[(11)] = inst_20426);

return statearr_20459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20442__$1,(12),dchan);
} else {
if((state_val_20443 === (14))){
var inst_20428 = (state_20442[(8)]);
var inst_20433 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20428);
var state_20442__$1 = state_20442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20442__$1,(16),out,inst_20433);
} else {
if((state_val_20443 === (16))){
var inst_20435 = (state_20442[(2)]);
var state_20442__$1 = (function (){var statearr_20460 = state_20442;
(statearr_20460[(12)] = inst_20435);

return statearr_20460;
})();
var statearr_20461_20489 = state_20442__$1;
(statearr_20461_20489[(2)] = null);

(statearr_20461_20489[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (10))){
var inst_20410 = (state_20442[(2)]);
var inst_20411 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20442__$1 = (function (){var statearr_20462 = state_20442;
(statearr_20462[(13)] = inst_20410);

return statearr_20462;
})();
var statearr_20463_20490 = state_20442__$1;
(statearr_20463_20490[(2)] = inst_20411);


cljs.core.async.impl.ioc_helpers.process_exception(state_20442__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_20443 === (8))){
var inst_20424 = (state_20442[(2)]);
var state_20442__$1 = state_20442;
var statearr_20464_20491 = state_20442__$1;
(statearr_20464_20491[(2)] = inst_20424);

(statearr_20464_20491[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___20476,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18320__auto__,c__18434__auto___20476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_20468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20468[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_20468[(1)] = (1));

return statearr_20468;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_20442){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_20442);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e20469){if((e20469 instanceof Object)){
var ex__18324__auto__ = e20469;
var statearr_20470_20492 = state_20442;
(statearr_20470_20492[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20442);

return cljs.core.cst$kw$recur;
} else {
throw e20469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__20493 = state_20442;
state_20442 = G__20493;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_20442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_20442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___20476,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18436__auto__ = (function (){var statearr_20471 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_20471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___20476);

return statearr_20471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___20476,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args20495 = [];
var len__7517__auto___20551 = arguments.length;
var i__7518__auto___20552 = (0);
while(true){
if((i__7518__auto___20552 < len__7517__auto___20551)){
args20495.push((arguments[i__7518__auto___20552]));

var G__20553 = (i__7518__auto___20552 + (1));
i__7518__auto___20552 = G__20553;
continue;
} else {
}
break;
}

var G__20497 = args20495.length;
switch (G__20497) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20495.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18434__auto___20555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___20555,out){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___20555,out){
return (function (state_20527){
var state_val_20528 = (state_20527[(1)]);
if((state_val_20528 === (7))){
var inst_20506 = (state_20527[(7)]);
var inst_20507 = (state_20527[(8)]);
var inst_20506__$1 = (state_20527[(2)]);
var inst_20507__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20506__$1,(0),null);
var inst_20508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20506__$1,(1),null);
var inst_20509 = (inst_20507__$1 == null);
var state_20527__$1 = (function (){var statearr_20529 = state_20527;
(statearr_20529[(7)] = inst_20506__$1);

(statearr_20529[(9)] = inst_20508);

(statearr_20529[(8)] = inst_20507__$1);

return statearr_20529;
})();
if(cljs.core.truth_(inst_20509)){
var statearr_20530_20556 = state_20527__$1;
(statearr_20530_20556[(1)] = (8));

} else {
var statearr_20531_20557 = state_20527__$1;
(statearr_20531_20557[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20528 === (1))){
var inst_20498 = cljs.core.vec(chs);
var inst_20499 = inst_20498;
var state_20527__$1 = (function (){var statearr_20532 = state_20527;
(statearr_20532[(10)] = inst_20499);

return statearr_20532;
})();
var statearr_20533_20558 = state_20527__$1;
(statearr_20533_20558[(2)] = null);

(statearr_20533_20558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20528 === (4))){
var inst_20499 = (state_20527[(10)]);
var state_20527__$1 = state_20527;
return cljs.core.async.ioc_alts_BANG_(state_20527__$1,(7),inst_20499);
} else {
if((state_val_20528 === (6))){
var inst_20523 = (state_20527[(2)]);
var state_20527__$1 = state_20527;
var statearr_20534_20559 = state_20527__$1;
(statearr_20534_20559[(2)] = inst_20523);

(statearr_20534_20559[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20528 === (3))){
var inst_20525 = (state_20527[(2)]);
var state_20527__$1 = state_20527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20527__$1,inst_20525);
} else {
if((state_val_20528 === (2))){
var inst_20499 = (state_20527[(10)]);
var inst_20501 = cljs.core.count(inst_20499);
var inst_20502 = (inst_20501 > (0));
var state_20527__$1 = state_20527;
if(cljs.core.truth_(inst_20502)){
var statearr_20536_20560 = state_20527__$1;
(statearr_20536_20560[(1)] = (4));

} else {
var statearr_20537_20561 = state_20527__$1;
(statearr_20537_20561[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20528 === (11))){
var inst_20499 = (state_20527[(10)]);
var inst_20516 = (state_20527[(2)]);
var tmp20535 = inst_20499;
var inst_20499__$1 = tmp20535;
var state_20527__$1 = (function (){var statearr_20538 = state_20527;
(statearr_20538[(10)] = inst_20499__$1);

(statearr_20538[(11)] = inst_20516);

return statearr_20538;
})();
var statearr_20539_20562 = state_20527__$1;
(statearr_20539_20562[(2)] = null);

(statearr_20539_20562[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20528 === (9))){
var inst_20507 = (state_20527[(8)]);
var state_20527__$1 = state_20527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20527__$1,(11),out,inst_20507);
} else {
if((state_val_20528 === (5))){
var inst_20521 = cljs.core.async.close_BANG_(out);
var state_20527__$1 = state_20527;
var statearr_20540_20563 = state_20527__$1;
(statearr_20540_20563[(2)] = inst_20521);

(statearr_20540_20563[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20528 === (10))){
var inst_20519 = (state_20527[(2)]);
var state_20527__$1 = state_20527;
var statearr_20541_20564 = state_20527__$1;
(statearr_20541_20564[(2)] = inst_20519);

(statearr_20541_20564[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20528 === (8))){
var inst_20499 = (state_20527[(10)]);
var inst_20506 = (state_20527[(7)]);
var inst_20508 = (state_20527[(9)]);
var inst_20507 = (state_20527[(8)]);
var inst_20511 = (function (){var cs = inst_20499;
var vec__20504 = inst_20506;
var v = inst_20507;
var c = inst_20508;
return ((function (cs,vec__20504,v,c,inst_20499,inst_20506,inst_20508,inst_20507,state_val_20528,c__18434__auto___20555,out){
return (function (p1__20494_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20494_SHARP_);
});
;})(cs,vec__20504,v,c,inst_20499,inst_20506,inst_20508,inst_20507,state_val_20528,c__18434__auto___20555,out))
})();
var inst_20512 = cljs.core.filterv(inst_20511,inst_20499);
var inst_20499__$1 = inst_20512;
var state_20527__$1 = (function (){var statearr_20542 = state_20527;
(statearr_20542[(10)] = inst_20499__$1);

return statearr_20542;
})();
var statearr_20543_20565 = state_20527__$1;
(statearr_20543_20565[(2)] = null);

(statearr_20543_20565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___20555,out))
;
return ((function (switch__18320__auto__,c__18434__auto___20555,out){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_20547 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20547[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_20547[(1)] = (1));

return statearr_20547;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_20527){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_20527);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e20548){if((e20548 instanceof Object)){
var ex__18324__auto__ = e20548;
var statearr_20549_20566 = state_20527;
(statearr_20549_20566[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20527);

return cljs.core.cst$kw$recur;
} else {
throw e20548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__20567 = state_20527;
state_20527 = G__20567;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_20527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_20527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___20555,out))
})();
var state__18436__auto__ = (function (){var statearr_20550 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_20550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___20555);

return statearr_20550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___20555,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args20568 = [];
var len__7517__auto___20617 = arguments.length;
var i__7518__auto___20618 = (0);
while(true){
if((i__7518__auto___20618 < len__7517__auto___20617)){
args20568.push((arguments[i__7518__auto___20618]));

var G__20619 = (i__7518__auto___20618 + (1));
i__7518__auto___20618 = G__20619;
continue;
} else {
}
break;
}

var G__20570 = args20568.length;
switch (G__20570) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20568.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18434__auto___20621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___20621,out){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___20621,out){
return (function (state_20594){
var state_val_20595 = (state_20594[(1)]);
if((state_val_20595 === (7))){
var inst_20576 = (state_20594[(7)]);
var inst_20576__$1 = (state_20594[(2)]);
var inst_20577 = (inst_20576__$1 == null);
var inst_20578 = cljs.core.not(inst_20577);
var state_20594__$1 = (function (){var statearr_20596 = state_20594;
(statearr_20596[(7)] = inst_20576__$1);

return statearr_20596;
})();
if(inst_20578){
var statearr_20597_20622 = state_20594__$1;
(statearr_20597_20622[(1)] = (8));

} else {
var statearr_20598_20623 = state_20594__$1;
(statearr_20598_20623[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20595 === (1))){
var inst_20571 = (0);
var state_20594__$1 = (function (){var statearr_20599 = state_20594;
(statearr_20599[(8)] = inst_20571);

return statearr_20599;
})();
var statearr_20600_20624 = state_20594__$1;
(statearr_20600_20624[(2)] = null);

(statearr_20600_20624[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20595 === (4))){
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20594__$1,(7),ch);
} else {
if((state_val_20595 === (6))){
var inst_20589 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20601_20625 = state_20594__$1;
(statearr_20601_20625[(2)] = inst_20589);

(statearr_20601_20625[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20595 === (3))){
var inst_20591 = (state_20594[(2)]);
var inst_20592 = cljs.core.async.close_BANG_(out);
var state_20594__$1 = (function (){var statearr_20602 = state_20594;
(statearr_20602[(9)] = inst_20591);

return statearr_20602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20594__$1,inst_20592);
} else {
if((state_val_20595 === (2))){
var inst_20571 = (state_20594[(8)]);
var inst_20573 = (inst_20571 < n);
var state_20594__$1 = state_20594;
if(cljs.core.truth_(inst_20573)){
var statearr_20603_20626 = state_20594__$1;
(statearr_20603_20626[(1)] = (4));

} else {
var statearr_20604_20627 = state_20594__$1;
(statearr_20604_20627[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20595 === (11))){
var inst_20571 = (state_20594[(8)]);
var inst_20581 = (state_20594[(2)]);
var inst_20582 = (inst_20571 + (1));
var inst_20571__$1 = inst_20582;
var state_20594__$1 = (function (){var statearr_20605 = state_20594;
(statearr_20605[(8)] = inst_20571__$1);

(statearr_20605[(10)] = inst_20581);

return statearr_20605;
})();
var statearr_20606_20628 = state_20594__$1;
(statearr_20606_20628[(2)] = null);

(statearr_20606_20628[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20595 === (9))){
var state_20594__$1 = state_20594;
var statearr_20607_20629 = state_20594__$1;
(statearr_20607_20629[(2)] = null);

(statearr_20607_20629[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20595 === (5))){
var state_20594__$1 = state_20594;
var statearr_20608_20630 = state_20594__$1;
(statearr_20608_20630[(2)] = null);

(statearr_20608_20630[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20595 === (10))){
var inst_20586 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20609_20631 = state_20594__$1;
(statearr_20609_20631[(2)] = inst_20586);

(statearr_20609_20631[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20595 === (8))){
var inst_20576 = (state_20594[(7)]);
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20594__$1,(11),out,inst_20576);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___20621,out))
;
return ((function (switch__18320__auto__,c__18434__auto___20621,out){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_20613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20613[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_20613[(1)] = (1));

return statearr_20613;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_20594){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_20594);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e20614){if((e20614 instanceof Object)){
var ex__18324__auto__ = e20614;
var statearr_20615_20632 = state_20594;
(statearr_20615_20632[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20594);

return cljs.core.cst$kw$recur;
} else {
throw e20614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__20633 = state_20594;
state_20594 = G__20633;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_20594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_20594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___20621,out))
})();
var state__18436__auto__ = (function (){var statearr_20616 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_20616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___20621);

return statearr_20616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___20621,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20643 = (function (map_LT_,f,ch,meta20644){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20644 = meta20644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20645,meta20644__$1){
var self__ = this;
var _20645__$1 = this;
return (new cljs.core.async.t_cljs$core$async20643(self__.map_LT_,self__.f,self__.ch,meta20644__$1));
});

cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20645){
var self__ = this;
var _20645__$1 = this;
return self__.meta20644;
});

cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async20646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20646 = (function (map_LT_,f,ch,meta20644,_,fn1,meta20647){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20644 = meta20644;
this._ = _;
this.fn1 = fn1;
this.meta20647 = meta20647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20648,meta20647__$1){
var self__ = this;
var _20648__$1 = this;
return (new cljs.core.async.t_cljs$core$async20646(self__.map_LT_,self__.f,self__.ch,self__.meta20644,self__._,self__.fn1,meta20647__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20648){
var self__ = this;
var _20648__$1 = this;
return self__.meta20647;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async20646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20634_SHARP_){
var G__20649 = (((p1__20634_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20634_SHARP_) : self__.f.call(null,p1__20634_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20649) : f1.call(null,G__20649));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async20646.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20644,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async20643], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta20647], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async20646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20646";

cljs.core.async.t_cljs$core$async20646.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async20646");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async20646 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20646(map_LT___$1,f__$1,ch__$1,meta20644__$1,___$2,fn1__$1,meta20647){
return (new cljs.core.async.t_cljs$core$async20646(map_LT___$1,f__$1,ch__$1,meta20644__$1,___$2,fn1__$1,meta20647));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async20646(self__.map_LT_,self__.f,self__.ch,self__.meta20644,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6447__auto__ = ret;
if(cljs.core.truth_(and__6447__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6447__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20650 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20650) : self__.f.call(null,G__20650));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async20643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20644], null);
});

cljs.core.async.t_cljs$core$async20643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20643";

cljs.core.async.t_cljs$core$async20643.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async20643");
});

cljs.core.async.__GT_t_cljs$core$async20643 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async20643(map_LT___$1,f__$1,ch__$1,meta20644){
return (new cljs.core.async.t_cljs$core$async20643(map_LT___$1,f__$1,ch__$1,meta20644));
});

}

return (new cljs.core.async.t_cljs$core$async20643(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async20654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20654 = (function (map_GT_,f,ch,meta20655){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta20655 = meta20655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20656,meta20655__$1){
var self__ = this;
var _20656__$1 = this;
return (new cljs.core.async.t_cljs$core$async20654(self__.map_GT_,self__.f,self__.ch,meta20655__$1));
});

cljs.core.async.t_cljs$core$async20654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20656){
var self__ = this;
var _20656__$1 = this;
return self__.meta20655;
});

cljs.core.async.t_cljs$core$async20654.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async20654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20655], null);
});

cljs.core.async.t_cljs$core$async20654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20654";

cljs.core.async.t_cljs$core$async20654.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async20654");
});

cljs.core.async.__GT_t_cljs$core$async20654 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async20654(map_GT___$1,f__$1,ch__$1,meta20655){
return (new cljs.core.async.t_cljs$core$async20654(map_GT___$1,f__$1,ch__$1,meta20655));
});

}

return (new cljs.core.async.t_cljs$core$async20654(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async20660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20660 = (function (filter_GT_,p,ch,meta20661){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta20661 = meta20661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20662,meta20661__$1){
var self__ = this;
var _20662__$1 = this;
return (new cljs.core.async.t_cljs$core$async20660(self__.filter_GT_,self__.p,self__.ch,meta20661__$1));
});

cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20662){
var self__ = this;
var _20662__$1 = this;
return self__.meta20661;
});

cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async20660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async20660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta20661], null);
});

cljs.core.async.t_cljs$core$async20660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20660";

cljs.core.async.t_cljs$core$async20660.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"cljs.core.async/t_cljs$core$async20660");
});

cljs.core.async.__GT_t_cljs$core$async20660 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async20660(filter_GT___$1,p__$1,ch__$1,meta20661){
return (new cljs.core.async.t_cljs$core$async20660(filter_GT___$1,p__$1,ch__$1,meta20661));
});

}

return (new cljs.core.async.t_cljs$core$async20660(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args20663 = [];
var len__7517__auto___20707 = arguments.length;
var i__7518__auto___20708 = (0);
while(true){
if((i__7518__auto___20708 < len__7517__auto___20707)){
args20663.push((arguments[i__7518__auto___20708]));

var G__20709 = (i__7518__auto___20708 + (1));
i__7518__auto___20708 = G__20709;
continue;
} else {
}
break;
}

var G__20665 = args20663.length;
switch (G__20665) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20663.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18434__auto___20711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___20711,out){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___20711,out){
return (function (state_20686){
var state_val_20687 = (state_20686[(1)]);
if((state_val_20687 === (7))){
var inst_20682 = (state_20686[(2)]);
var state_20686__$1 = state_20686;
var statearr_20688_20712 = state_20686__$1;
(statearr_20688_20712[(2)] = inst_20682);

(statearr_20688_20712[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20687 === (1))){
var state_20686__$1 = state_20686;
var statearr_20689_20713 = state_20686__$1;
(statearr_20689_20713[(2)] = null);

(statearr_20689_20713[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20687 === (4))){
var inst_20668 = (state_20686[(7)]);
var inst_20668__$1 = (state_20686[(2)]);
var inst_20669 = (inst_20668__$1 == null);
var state_20686__$1 = (function (){var statearr_20690 = state_20686;
(statearr_20690[(7)] = inst_20668__$1);

return statearr_20690;
})();
if(cljs.core.truth_(inst_20669)){
var statearr_20691_20714 = state_20686__$1;
(statearr_20691_20714[(1)] = (5));

} else {
var statearr_20692_20715 = state_20686__$1;
(statearr_20692_20715[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20687 === (6))){
var inst_20668 = (state_20686[(7)]);
var inst_20673 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20668) : p.call(null,inst_20668));
var state_20686__$1 = state_20686;
if(cljs.core.truth_(inst_20673)){
var statearr_20693_20716 = state_20686__$1;
(statearr_20693_20716[(1)] = (8));

} else {
var statearr_20694_20717 = state_20686__$1;
(statearr_20694_20717[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20687 === (3))){
var inst_20684 = (state_20686[(2)]);
var state_20686__$1 = state_20686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20686__$1,inst_20684);
} else {
if((state_val_20687 === (2))){
var state_20686__$1 = state_20686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20686__$1,(4),ch);
} else {
if((state_val_20687 === (11))){
var inst_20676 = (state_20686[(2)]);
var state_20686__$1 = state_20686;
var statearr_20695_20718 = state_20686__$1;
(statearr_20695_20718[(2)] = inst_20676);

(statearr_20695_20718[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20687 === (9))){
var state_20686__$1 = state_20686;
var statearr_20696_20719 = state_20686__$1;
(statearr_20696_20719[(2)] = null);

(statearr_20696_20719[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20687 === (5))){
var inst_20671 = cljs.core.async.close_BANG_(out);
var state_20686__$1 = state_20686;
var statearr_20697_20720 = state_20686__$1;
(statearr_20697_20720[(2)] = inst_20671);

(statearr_20697_20720[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20687 === (10))){
var inst_20679 = (state_20686[(2)]);
var state_20686__$1 = (function (){var statearr_20698 = state_20686;
(statearr_20698[(8)] = inst_20679);

return statearr_20698;
})();
var statearr_20699_20721 = state_20686__$1;
(statearr_20699_20721[(2)] = null);

(statearr_20699_20721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20687 === (8))){
var inst_20668 = (state_20686[(7)]);
var state_20686__$1 = state_20686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20686__$1,(11),out,inst_20668);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___20711,out))
;
return ((function (switch__18320__auto__,c__18434__auto___20711,out){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_20703 = [null,null,null,null,null,null,null,null,null];
(statearr_20703[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_20703[(1)] = (1));

return statearr_20703;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_20686){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_20686);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e20704){if((e20704 instanceof Object)){
var ex__18324__auto__ = e20704;
var statearr_20705_20722 = state_20686;
(statearr_20705_20722[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20686);

return cljs.core.cst$kw$recur;
} else {
throw e20704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__20723 = state_20686;
state_20686 = G__20723;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_20686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_20686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___20711,out))
})();
var state__18436__auto__ = (function (){var statearr_20706 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_20706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___20711);

return statearr_20706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___20711,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args20724 = [];
var len__7517__auto___20727 = arguments.length;
var i__7518__auto___20728 = (0);
while(true){
if((i__7518__auto___20728 < len__7517__auto___20727)){
args20724.push((arguments[i__7518__auto___20728]));

var G__20729 = (i__7518__auto___20728 + (1));
i__7518__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var G__20726 = args20724.length;
switch (G__20726) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20724.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18434__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto__){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto__){
return (function (state_20896){
var state_val_20897 = (state_20896[(1)]);
if((state_val_20897 === (7))){
var inst_20892 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20898_20939 = state_20896__$1;
(statearr_20898_20939[(2)] = inst_20892);

(statearr_20898_20939[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (20))){
var inst_20862 = (state_20896[(7)]);
var inst_20873 = (state_20896[(2)]);
var inst_20874 = cljs.core.next(inst_20862);
var inst_20848 = inst_20874;
var inst_20849 = null;
var inst_20850 = (0);
var inst_20851 = (0);
var state_20896__$1 = (function (){var statearr_20899 = state_20896;
(statearr_20899[(8)] = inst_20848);

(statearr_20899[(9)] = inst_20851);

(statearr_20899[(10)] = inst_20850);

(statearr_20899[(11)] = inst_20849);

(statearr_20899[(12)] = inst_20873);

return statearr_20899;
})();
var statearr_20900_20940 = state_20896__$1;
(statearr_20900_20940[(2)] = null);

(statearr_20900_20940[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (1))){
var state_20896__$1 = state_20896;
var statearr_20901_20941 = state_20896__$1;
(statearr_20901_20941[(2)] = null);

(statearr_20901_20941[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (4))){
var inst_20837 = (state_20896[(13)]);
var inst_20837__$1 = (state_20896[(2)]);
var inst_20838 = (inst_20837__$1 == null);
var state_20896__$1 = (function (){var statearr_20902 = state_20896;
(statearr_20902[(13)] = inst_20837__$1);

return statearr_20902;
})();
if(cljs.core.truth_(inst_20838)){
var statearr_20903_20942 = state_20896__$1;
(statearr_20903_20942[(1)] = (5));

} else {
var statearr_20904_20943 = state_20896__$1;
(statearr_20904_20943[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (15))){
var state_20896__$1 = state_20896;
var statearr_20908_20944 = state_20896__$1;
(statearr_20908_20944[(2)] = null);

(statearr_20908_20944[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (21))){
var state_20896__$1 = state_20896;
var statearr_20909_20945 = state_20896__$1;
(statearr_20909_20945[(2)] = null);

(statearr_20909_20945[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (13))){
var inst_20848 = (state_20896[(8)]);
var inst_20851 = (state_20896[(9)]);
var inst_20850 = (state_20896[(10)]);
var inst_20849 = (state_20896[(11)]);
var inst_20858 = (state_20896[(2)]);
var inst_20859 = (inst_20851 + (1));
var tmp20905 = inst_20848;
var tmp20906 = inst_20850;
var tmp20907 = inst_20849;
var inst_20848__$1 = tmp20905;
var inst_20849__$1 = tmp20907;
var inst_20850__$1 = tmp20906;
var inst_20851__$1 = inst_20859;
var state_20896__$1 = (function (){var statearr_20910 = state_20896;
(statearr_20910[(14)] = inst_20858);

(statearr_20910[(8)] = inst_20848__$1);

(statearr_20910[(9)] = inst_20851__$1);

(statearr_20910[(10)] = inst_20850__$1);

(statearr_20910[(11)] = inst_20849__$1);

return statearr_20910;
})();
var statearr_20911_20946 = state_20896__$1;
(statearr_20911_20946[(2)] = null);

(statearr_20911_20946[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (22))){
var state_20896__$1 = state_20896;
var statearr_20912_20947 = state_20896__$1;
(statearr_20912_20947[(2)] = null);

(statearr_20912_20947[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (6))){
var inst_20837 = (state_20896[(13)]);
var inst_20846 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20837) : f.call(null,inst_20837));
var inst_20847 = cljs.core.seq(inst_20846);
var inst_20848 = inst_20847;
var inst_20849 = null;
var inst_20850 = (0);
var inst_20851 = (0);
var state_20896__$1 = (function (){var statearr_20913 = state_20896;
(statearr_20913[(8)] = inst_20848);

(statearr_20913[(9)] = inst_20851);

(statearr_20913[(10)] = inst_20850);

(statearr_20913[(11)] = inst_20849);

return statearr_20913;
})();
var statearr_20914_20948 = state_20896__$1;
(statearr_20914_20948[(2)] = null);

(statearr_20914_20948[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (17))){
var inst_20862 = (state_20896[(7)]);
var inst_20866 = cljs.core.chunk_first(inst_20862);
var inst_20867 = cljs.core.chunk_rest(inst_20862);
var inst_20868 = cljs.core.count(inst_20866);
var inst_20848 = inst_20867;
var inst_20849 = inst_20866;
var inst_20850 = inst_20868;
var inst_20851 = (0);
var state_20896__$1 = (function (){var statearr_20915 = state_20896;
(statearr_20915[(8)] = inst_20848);

(statearr_20915[(9)] = inst_20851);

(statearr_20915[(10)] = inst_20850);

(statearr_20915[(11)] = inst_20849);

return statearr_20915;
})();
var statearr_20916_20949 = state_20896__$1;
(statearr_20916_20949[(2)] = null);

(statearr_20916_20949[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (3))){
var inst_20894 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20896__$1,inst_20894);
} else {
if((state_val_20897 === (12))){
var inst_20882 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20917_20950 = state_20896__$1;
(statearr_20917_20950[(2)] = inst_20882);

(statearr_20917_20950[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (2))){
var state_20896__$1 = state_20896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20896__$1,(4),in$);
} else {
if((state_val_20897 === (23))){
var inst_20890 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20918_20951 = state_20896__$1;
(statearr_20918_20951[(2)] = inst_20890);

(statearr_20918_20951[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (19))){
var inst_20877 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20919_20952 = state_20896__$1;
(statearr_20919_20952[(2)] = inst_20877);

(statearr_20919_20952[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (11))){
var inst_20862 = (state_20896[(7)]);
var inst_20848 = (state_20896[(8)]);
var inst_20862__$1 = cljs.core.seq(inst_20848);
var state_20896__$1 = (function (){var statearr_20920 = state_20896;
(statearr_20920[(7)] = inst_20862__$1);

return statearr_20920;
})();
if(inst_20862__$1){
var statearr_20921_20953 = state_20896__$1;
(statearr_20921_20953[(1)] = (14));

} else {
var statearr_20922_20954 = state_20896__$1;
(statearr_20922_20954[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (9))){
var inst_20884 = (state_20896[(2)]);
var inst_20885 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20896__$1 = (function (){var statearr_20923 = state_20896;
(statearr_20923[(15)] = inst_20884);

return statearr_20923;
})();
if(cljs.core.truth_(inst_20885)){
var statearr_20924_20955 = state_20896__$1;
(statearr_20924_20955[(1)] = (21));

} else {
var statearr_20925_20956 = state_20896__$1;
(statearr_20925_20956[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (5))){
var inst_20840 = cljs.core.async.close_BANG_(out);
var state_20896__$1 = state_20896;
var statearr_20926_20957 = state_20896__$1;
(statearr_20926_20957[(2)] = inst_20840);

(statearr_20926_20957[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (14))){
var inst_20862 = (state_20896[(7)]);
var inst_20864 = cljs.core.chunked_seq_QMARK_(inst_20862);
var state_20896__$1 = state_20896;
if(inst_20864){
var statearr_20927_20958 = state_20896__$1;
(statearr_20927_20958[(1)] = (17));

} else {
var statearr_20928_20959 = state_20896__$1;
(statearr_20928_20959[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (16))){
var inst_20880 = (state_20896[(2)]);
var state_20896__$1 = state_20896;
var statearr_20929_20960 = state_20896__$1;
(statearr_20929_20960[(2)] = inst_20880);

(statearr_20929_20960[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20897 === (10))){
var inst_20851 = (state_20896[(9)]);
var inst_20849 = (state_20896[(11)]);
var inst_20856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20849,inst_20851);
var state_20896__$1 = state_20896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20896__$1,(13),out,inst_20856);
} else {
if((state_val_20897 === (18))){
var inst_20862 = (state_20896[(7)]);
var inst_20871 = cljs.core.first(inst_20862);
var state_20896__$1 = state_20896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20896__$1,(20),out,inst_20871);
} else {
if((state_val_20897 === (8))){
var inst_20851 = (state_20896[(9)]);
var inst_20850 = (state_20896[(10)]);
var inst_20853 = (inst_20851 < inst_20850);
var inst_20854 = inst_20853;
var state_20896__$1 = state_20896;
if(cljs.core.truth_(inst_20854)){
var statearr_20930_20961 = state_20896__$1;
(statearr_20930_20961[(1)] = (10));

} else {
var statearr_20931_20962 = state_20896__$1;
(statearr_20931_20962[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto__))
;
return ((function (switch__18320__auto__,c__18434__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18321__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18321__auto____0 = (function (){
var statearr_20935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20935[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18321__auto__);

(statearr_20935[(1)] = (1));

return statearr_20935;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18321__auto____1 = (function (state_20896){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_20896);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e20936){if((e20936 instanceof Object)){
var ex__18324__auto__ = e20936;
var statearr_20937_20963 = state_20896;
(statearr_20937_20963[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20896);

return cljs.core.cst$kw$recur;
} else {
throw e20936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__20964 = state_20896;
state_20896 = G__20964;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18321__auto__ = function(state_20896){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18321__auto____1.call(this,state_20896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18321__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18321__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto__))
})();
var state__18436__auto__ = (function (){var statearr_20938 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_20938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto__);

return statearr_20938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto__))
);

return c__18434__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args20965 = [];
var len__7517__auto___20968 = arguments.length;
var i__7518__auto___20969 = (0);
while(true){
if((i__7518__auto___20969 < len__7517__auto___20968)){
args20965.push((arguments[i__7518__auto___20969]));

var G__20970 = (i__7518__auto___20969 + (1));
i__7518__auto___20969 = G__20970;
continue;
} else {
}
break;
}

var G__20967 = args20965.length;
switch (G__20967) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20965.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args20972 = [];
var len__7517__auto___20975 = arguments.length;
var i__7518__auto___20976 = (0);
while(true){
if((i__7518__auto___20976 < len__7517__auto___20975)){
args20972.push((arguments[i__7518__auto___20976]));

var G__20977 = (i__7518__auto___20976 + (1));
i__7518__auto___20976 = G__20977;
continue;
} else {
}
break;
}

var G__20974 = args20972.length;
switch (G__20974) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20972.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args20979 = [];
var len__7517__auto___21030 = arguments.length;
var i__7518__auto___21031 = (0);
while(true){
if((i__7518__auto___21031 < len__7517__auto___21030)){
args20979.push((arguments[i__7518__auto___21031]));

var G__21032 = (i__7518__auto___21031 + (1));
i__7518__auto___21031 = G__21032;
continue;
} else {
}
break;
}

var G__20981 = args20979.length;
switch (G__20981) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20979.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18434__auto___21034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___21034,out){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___21034,out){
return (function (state_21005){
var state_val_21006 = (state_21005[(1)]);
if((state_val_21006 === (7))){
var inst_21000 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
var statearr_21007_21035 = state_21005__$1;
(statearr_21007_21035[(2)] = inst_21000);

(statearr_21007_21035[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21006 === (1))){
var inst_20982 = null;
var state_21005__$1 = (function (){var statearr_21008 = state_21005;
(statearr_21008[(7)] = inst_20982);

return statearr_21008;
})();
var statearr_21009_21036 = state_21005__$1;
(statearr_21009_21036[(2)] = null);

(statearr_21009_21036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21006 === (4))){
var inst_20985 = (state_21005[(8)]);
var inst_20985__$1 = (state_21005[(2)]);
var inst_20986 = (inst_20985__$1 == null);
var inst_20987 = cljs.core.not(inst_20986);
var state_21005__$1 = (function (){var statearr_21010 = state_21005;
(statearr_21010[(8)] = inst_20985__$1);

return statearr_21010;
})();
if(inst_20987){
var statearr_21011_21037 = state_21005__$1;
(statearr_21011_21037[(1)] = (5));

} else {
var statearr_21012_21038 = state_21005__$1;
(statearr_21012_21038[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21006 === (6))){
var state_21005__$1 = state_21005;
var statearr_21013_21039 = state_21005__$1;
(statearr_21013_21039[(2)] = null);

(statearr_21013_21039[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21006 === (3))){
var inst_21002 = (state_21005[(2)]);
var inst_21003 = cljs.core.async.close_BANG_(out);
var state_21005__$1 = (function (){var statearr_21014 = state_21005;
(statearr_21014[(9)] = inst_21002);

return statearr_21014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21005__$1,inst_21003);
} else {
if((state_val_21006 === (2))){
var state_21005__$1 = state_21005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21005__$1,(4),ch);
} else {
if((state_val_21006 === (11))){
var inst_20985 = (state_21005[(8)]);
var inst_20994 = (state_21005[(2)]);
var inst_20982 = inst_20985;
var state_21005__$1 = (function (){var statearr_21015 = state_21005;
(statearr_21015[(10)] = inst_20994);

(statearr_21015[(7)] = inst_20982);

return statearr_21015;
})();
var statearr_21016_21040 = state_21005__$1;
(statearr_21016_21040[(2)] = null);

(statearr_21016_21040[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21006 === (9))){
var inst_20985 = (state_21005[(8)]);
var state_21005__$1 = state_21005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21005__$1,(11),out,inst_20985);
} else {
if((state_val_21006 === (5))){
var inst_20982 = (state_21005[(7)]);
var inst_20985 = (state_21005[(8)]);
var inst_20989 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20985,inst_20982);
var state_21005__$1 = state_21005;
if(inst_20989){
var statearr_21018_21041 = state_21005__$1;
(statearr_21018_21041[(1)] = (8));

} else {
var statearr_21019_21042 = state_21005__$1;
(statearr_21019_21042[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21006 === (10))){
var inst_20997 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
var statearr_21020_21043 = state_21005__$1;
(statearr_21020_21043[(2)] = inst_20997);

(statearr_21020_21043[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21006 === (8))){
var inst_20982 = (state_21005[(7)]);
var tmp21017 = inst_20982;
var inst_20982__$1 = tmp21017;
var state_21005__$1 = (function (){var statearr_21021 = state_21005;
(statearr_21021[(7)] = inst_20982__$1);

return statearr_21021;
})();
var statearr_21022_21044 = state_21005__$1;
(statearr_21022_21044[(2)] = null);

(statearr_21022_21044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___21034,out))
;
return ((function (switch__18320__auto__,c__18434__auto___21034,out){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_21026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21026[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_21026[(1)] = (1));

return statearr_21026;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_21005){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_21005);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e21027){if((e21027 instanceof Object)){
var ex__18324__auto__ = e21027;
var statearr_21028_21045 = state_21005;
(statearr_21028_21045[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21005);

return cljs.core.cst$kw$recur;
} else {
throw e21027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__21046 = state_21005;
state_21005 = G__21046;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_21005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_21005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___21034,out))
})();
var state__18436__auto__ = (function (){var statearr_21029 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_21029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___21034);

return statearr_21029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___21034,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21047 = [];
var len__7517__auto___21117 = arguments.length;
var i__7518__auto___21118 = (0);
while(true){
if((i__7518__auto___21118 < len__7517__auto___21117)){
args21047.push((arguments[i__7518__auto___21118]));

var G__21119 = (i__7518__auto___21118 + (1));
i__7518__auto___21118 = G__21119;
continue;
} else {
}
break;
}

var G__21049 = args21047.length;
switch (G__21049) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21047.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18434__auto___21121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___21121,out){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___21121,out){
return (function (state_21087){
var state_val_21088 = (state_21087[(1)]);
if((state_val_21088 === (7))){
var inst_21083 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
var statearr_21089_21122 = state_21087__$1;
(statearr_21089_21122[(2)] = inst_21083);

(statearr_21089_21122[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (1))){
var inst_21050 = (new Array(n));
var inst_21051 = inst_21050;
var inst_21052 = (0);
var state_21087__$1 = (function (){var statearr_21090 = state_21087;
(statearr_21090[(7)] = inst_21052);

(statearr_21090[(8)] = inst_21051);

return statearr_21090;
})();
var statearr_21091_21123 = state_21087__$1;
(statearr_21091_21123[(2)] = null);

(statearr_21091_21123[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (4))){
var inst_21055 = (state_21087[(9)]);
var inst_21055__$1 = (state_21087[(2)]);
var inst_21056 = (inst_21055__$1 == null);
var inst_21057 = cljs.core.not(inst_21056);
var state_21087__$1 = (function (){var statearr_21092 = state_21087;
(statearr_21092[(9)] = inst_21055__$1);

return statearr_21092;
})();
if(inst_21057){
var statearr_21093_21124 = state_21087__$1;
(statearr_21093_21124[(1)] = (5));

} else {
var statearr_21094_21125 = state_21087__$1;
(statearr_21094_21125[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (15))){
var inst_21077 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
var statearr_21095_21126 = state_21087__$1;
(statearr_21095_21126[(2)] = inst_21077);

(statearr_21095_21126[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (13))){
var state_21087__$1 = state_21087;
var statearr_21096_21127 = state_21087__$1;
(statearr_21096_21127[(2)] = null);

(statearr_21096_21127[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (6))){
var inst_21052 = (state_21087[(7)]);
var inst_21073 = (inst_21052 > (0));
var state_21087__$1 = state_21087;
if(cljs.core.truth_(inst_21073)){
var statearr_21097_21128 = state_21087__$1;
(statearr_21097_21128[(1)] = (12));

} else {
var statearr_21098_21129 = state_21087__$1;
(statearr_21098_21129[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (3))){
var inst_21085 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21087__$1,inst_21085);
} else {
if((state_val_21088 === (12))){
var inst_21051 = (state_21087[(8)]);
var inst_21075 = cljs.core.vec(inst_21051);
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21087__$1,(15),out,inst_21075);
} else {
if((state_val_21088 === (2))){
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21087__$1,(4),ch);
} else {
if((state_val_21088 === (11))){
var inst_21067 = (state_21087[(2)]);
var inst_21068 = (new Array(n));
var inst_21051 = inst_21068;
var inst_21052 = (0);
var state_21087__$1 = (function (){var statearr_21099 = state_21087;
(statearr_21099[(7)] = inst_21052);

(statearr_21099[(10)] = inst_21067);

(statearr_21099[(8)] = inst_21051);

return statearr_21099;
})();
var statearr_21100_21130 = state_21087__$1;
(statearr_21100_21130[(2)] = null);

(statearr_21100_21130[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (9))){
var inst_21051 = (state_21087[(8)]);
var inst_21065 = cljs.core.vec(inst_21051);
var state_21087__$1 = state_21087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21087__$1,(11),out,inst_21065);
} else {
if((state_val_21088 === (5))){
var inst_21052 = (state_21087[(7)]);
var inst_21055 = (state_21087[(9)]);
var inst_21060 = (state_21087[(11)]);
var inst_21051 = (state_21087[(8)]);
var inst_21059 = (inst_21051[inst_21052] = inst_21055);
var inst_21060__$1 = (inst_21052 + (1));
var inst_21061 = (inst_21060__$1 < n);
var state_21087__$1 = (function (){var statearr_21101 = state_21087;
(statearr_21101[(12)] = inst_21059);

(statearr_21101[(11)] = inst_21060__$1);

return statearr_21101;
})();
if(cljs.core.truth_(inst_21061)){
var statearr_21102_21131 = state_21087__$1;
(statearr_21102_21131[(1)] = (8));

} else {
var statearr_21103_21132 = state_21087__$1;
(statearr_21103_21132[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (14))){
var inst_21080 = (state_21087[(2)]);
var inst_21081 = cljs.core.async.close_BANG_(out);
var state_21087__$1 = (function (){var statearr_21105 = state_21087;
(statearr_21105[(13)] = inst_21080);

return statearr_21105;
})();
var statearr_21106_21133 = state_21087__$1;
(statearr_21106_21133[(2)] = inst_21081);

(statearr_21106_21133[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (10))){
var inst_21071 = (state_21087[(2)]);
var state_21087__$1 = state_21087;
var statearr_21107_21134 = state_21087__$1;
(statearr_21107_21134[(2)] = inst_21071);

(statearr_21107_21134[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21088 === (8))){
var inst_21060 = (state_21087[(11)]);
var inst_21051 = (state_21087[(8)]);
var tmp21104 = inst_21051;
var inst_21051__$1 = tmp21104;
var inst_21052 = inst_21060;
var state_21087__$1 = (function (){var statearr_21108 = state_21087;
(statearr_21108[(7)] = inst_21052);

(statearr_21108[(8)] = inst_21051__$1);

return statearr_21108;
})();
var statearr_21109_21135 = state_21087__$1;
(statearr_21109_21135[(2)] = null);

(statearr_21109_21135[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___21121,out))
;
return ((function (switch__18320__auto__,c__18434__auto___21121,out){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_21113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21113[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_21113[(1)] = (1));

return statearr_21113;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_21087){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_21087);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e21114){if((e21114 instanceof Object)){
var ex__18324__auto__ = e21114;
var statearr_21115_21136 = state_21087;
(statearr_21115_21136[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21087);

return cljs.core.cst$kw$recur;
} else {
throw e21114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__21137 = state_21087;
state_21087 = G__21137;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_21087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_21087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___21121,out))
})();
var state__18436__auto__ = (function (){var statearr_21116 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_21116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___21121);

return statearr_21116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___21121,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21138 = [];
var len__7517__auto___21212 = arguments.length;
var i__7518__auto___21213 = (0);
while(true){
if((i__7518__auto___21213 < len__7517__auto___21212)){
args21138.push((arguments[i__7518__auto___21213]));

var G__21214 = (i__7518__auto___21213 + (1));
i__7518__auto___21213 = G__21214;
continue;
} else {
}
break;
}

var G__21140 = args21138.length;
switch (G__21140) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21138.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18434__auto___21216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto___21216,out){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto___21216,out){
return (function (state_21182){
var state_val_21183 = (state_21182[(1)]);
if((state_val_21183 === (7))){
var inst_21178 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21184_21217 = state_21182__$1;
(statearr_21184_21217[(2)] = inst_21178);

(statearr_21184_21217[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (1))){
var inst_21141 = [];
var inst_21142 = inst_21141;
var inst_21143 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_21182__$1 = (function (){var statearr_21185 = state_21182;
(statearr_21185[(7)] = inst_21142);

(statearr_21185[(8)] = inst_21143);

return statearr_21185;
})();
var statearr_21186_21218 = state_21182__$1;
(statearr_21186_21218[(2)] = null);

(statearr_21186_21218[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (4))){
var inst_21146 = (state_21182[(9)]);
var inst_21146__$1 = (state_21182[(2)]);
var inst_21147 = (inst_21146__$1 == null);
var inst_21148 = cljs.core.not(inst_21147);
var state_21182__$1 = (function (){var statearr_21187 = state_21182;
(statearr_21187[(9)] = inst_21146__$1);

return statearr_21187;
})();
if(inst_21148){
var statearr_21188_21219 = state_21182__$1;
(statearr_21188_21219[(1)] = (5));

} else {
var statearr_21189_21220 = state_21182__$1;
(statearr_21189_21220[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (15))){
var inst_21172 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21190_21221 = state_21182__$1;
(statearr_21190_21221[(2)] = inst_21172);

(statearr_21190_21221[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (13))){
var state_21182__$1 = state_21182;
var statearr_21191_21222 = state_21182__$1;
(statearr_21191_21222[(2)] = null);

(statearr_21191_21222[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (6))){
var inst_21142 = (state_21182[(7)]);
var inst_21167 = inst_21142.length;
var inst_21168 = (inst_21167 > (0));
var state_21182__$1 = state_21182;
if(cljs.core.truth_(inst_21168)){
var statearr_21192_21223 = state_21182__$1;
(statearr_21192_21223[(1)] = (12));

} else {
var statearr_21193_21224 = state_21182__$1;
(statearr_21193_21224[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (3))){
var inst_21180 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21182__$1,inst_21180);
} else {
if((state_val_21183 === (12))){
var inst_21142 = (state_21182[(7)]);
var inst_21170 = cljs.core.vec(inst_21142);
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21182__$1,(15),out,inst_21170);
} else {
if((state_val_21183 === (2))){
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21182__$1,(4),ch);
} else {
if((state_val_21183 === (11))){
var inst_21146 = (state_21182[(9)]);
var inst_21150 = (state_21182[(10)]);
var inst_21160 = (state_21182[(2)]);
var inst_21161 = [];
var inst_21162 = inst_21161.push(inst_21146);
var inst_21142 = inst_21161;
var inst_21143 = inst_21150;
var state_21182__$1 = (function (){var statearr_21194 = state_21182;
(statearr_21194[(11)] = inst_21160);

(statearr_21194[(7)] = inst_21142);

(statearr_21194[(8)] = inst_21143);

(statearr_21194[(12)] = inst_21162);

return statearr_21194;
})();
var statearr_21195_21225 = state_21182__$1;
(statearr_21195_21225[(2)] = null);

(statearr_21195_21225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (9))){
var inst_21142 = (state_21182[(7)]);
var inst_21158 = cljs.core.vec(inst_21142);
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21182__$1,(11),out,inst_21158);
} else {
if((state_val_21183 === (5))){
var inst_21146 = (state_21182[(9)]);
var inst_21143 = (state_21182[(8)]);
var inst_21150 = (state_21182[(10)]);
var inst_21150__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21146) : f.call(null,inst_21146));
var inst_21151 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21150__$1,inst_21143);
var inst_21152 = cljs.core.keyword_identical_QMARK_(inst_21143,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_21153 = (inst_21151) || (inst_21152);
var state_21182__$1 = (function (){var statearr_21196 = state_21182;
(statearr_21196[(10)] = inst_21150__$1);

return statearr_21196;
})();
if(cljs.core.truth_(inst_21153)){
var statearr_21197_21226 = state_21182__$1;
(statearr_21197_21226[(1)] = (8));

} else {
var statearr_21198_21227 = state_21182__$1;
(statearr_21198_21227[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (14))){
var inst_21175 = (state_21182[(2)]);
var inst_21176 = cljs.core.async.close_BANG_(out);
var state_21182__$1 = (function (){var statearr_21200 = state_21182;
(statearr_21200[(13)] = inst_21175);

return statearr_21200;
})();
var statearr_21201_21228 = state_21182__$1;
(statearr_21201_21228[(2)] = inst_21176);

(statearr_21201_21228[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (10))){
var inst_21165 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21202_21229 = state_21182__$1;
(statearr_21202_21229[(2)] = inst_21165);

(statearr_21202_21229[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21183 === (8))){
var inst_21146 = (state_21182[(9)]);
var inst_21142 = (state_21182[(7)]);
var inst_21150 = (state_21182[(10)]);
var inst_21155 = inst_21142.push(inst_21146);
var tmp21199 = inst_21142;
var inst_21142__$1 = tmp21199;
var inst_21143 = inst_21150;
var state_21182__$1 = (function (){var statearr_21203 = state_21182;
(statearr_21203[(7)] = inst_21142__$1);

(statearr_21203[(8)] = inst_21143);

(statearr_21203[(14)] = inst_21155);

return statearr_21203;
})();
var statearr_21204_21230 = state_21182__$1;
(statearr_21204_21230[(2)] = null);

(statearr_21204_21230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18434__auto___21216,out))
;
return ((function (switch__18320__auto__,c__18434__auto___21216,out){
return (function() {
var cljs$core$async$state_machine__18321__auto__ = null;
var cljs$core$async$state_machine__18321__auto____0 = (function (){
var statearr_21208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21208[(0)] = cljs$core$async$state_machine__18321__auto__);

(statearr_21208[(1)] = (1));

return statearr_21208;
});
var cljs$core$async$state_machine__18321__auto____1 = (function (state_21182){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_21182);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e21209){if((e21209 instanceof Object)){
var ex__18324__auto__ = e21209;
var statearr_21210_21231 = state_21182;
(statearr_21210_21231[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21182);

return cljs.core.cst$kw$recur;
} else {
throw e21209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__21232 = state_21182;
state_21182 = G__21232;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
cljs$core$async$state_machine__18321__auto__ = function(state_21182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18321__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18321__auto____1.call(this,state_21182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18321__auto____0;
cljs$core$async$state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18321__auto____1;
return cljs$core$async$state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto___21216,out))
})();
var state__18436__auto__ = (function (){var statearr_21211 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_21211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto___21216);

return statearr_21211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto___21216,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
