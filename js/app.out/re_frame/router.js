// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.impl.batching');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('goog.async.nextTick');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flush_DASH_dom,((typeof reagent.core.after_render !== 'undefined')?reagent.core.after_render:reagent.impl.batching.do_later),cljs.core.cst$kw$yield,goog.async.nextTick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

re_frame.router.enqueue = (function re_frame$router$enqueue(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$enqueue$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$enqueue$arity$2(this$,event);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router.enqueue[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7115__auto__.call(null,this$,event));
} else {
var m__7115__auto____$1 = (re_frame.router.enqueue["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7115__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.enqueue",this$);
}
}
}
});

re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$2(this$,f);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__7115__auto__.call(null,this$,f));
} else {
var m__7115__auto____$1 = (re_frame.router.add_post_event_callback["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__7115__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
}
});

re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__7115__auto__.call(null,this$,trigger,arg));
} else {
var m__7115__auto____$1 = (re_frame.router._fsm_trigger["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__7115__auto____$1.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
}
});

re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router._add_event[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7115__auto__.call(null,this$,event));
} else {
var m__7115__auto____$1 = (re_frame.router._add_event["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__7115__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
}
});

re_frame.router._process_1st_event = (function re_frame$router$_process_1st_event(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_process_1st_event$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_process_1st_event$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router._process_1st_event[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (re_frame.router._process_1st_event["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event",this$);
}
}
}
});

re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (re_frame.router._run_next_tick["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
}
});

re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router._run_queue[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (re_frame.router._run_queue["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
}
});

re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router._exception[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__7115__auto__.call(null,this$,ex));
} else {
var m__7115__auto____$1 = (re_frame.router._exception["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__7115__auto____$1.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
}
});

re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router._pause[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__7115__auto__.call(null,this$,later_fn));
} else {
var m__7115__auto____$1 = (re_frame.router._pause["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__7115__auto____$1.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
}
});

re_frame.router._resume = (function re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (re_frame.router._resume[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (re_frame.router._resume["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
})
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = true;

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$finish_DASH_run,null);
} else {
var temp__4423__auto__ = cljs.core.some(re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__4423__auto__)){
var later_fn = temp__4423__auto__;
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$pause,later_fn);
} else {
re_frame.router._process_1st_event(this$__$1);

var G__15256 = (n - (1));
n = G__15256;
continue;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
re_frame.router._process_1st_event(this$__$1);

return re_frame.router._run_queue(this$__$1);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__15247 = ((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$run_DASH_queue,null);
});})(this$__$1))
;
return goog.async.nextTick(G__15247);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{re_frame.handlers.handle(event_v);
}catch (e15248){var ex_15257 = e15248;
re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$exception,ex_15257);
}
self__.queue = cljs.core.pop(self__.queue);

var seq__15249 = cljs.core.seq(self__.post_event_callback_fns);
var chunk__15250 = null;
var count__15251 = (0);
var i__15252 = (0);
while(true){
if((i__15252 < count__15251)){
var f = chunk__15250.cljs$core$IIndexed$_nth$arity$2(null,i__15252);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : f.call(null,event_v,self__.queue));

var G__15258 = seq__15249;
var G__15259 = chunk__15250;
var G__15260 = count__15251;
var G__15261 = (i__15252 + (1));
seq__15249 = G__15258;
chunk__15250 = G__15259;
count__15251 = G__15260;
i__15252 = G__15261;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__15249);
if(temp__4425__auto__){
var seq__15249__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15249__$1)){
var c__7262__auto__ = cljs.core.chunk_first(seq__15249__$1);
var G__15262 = cljs.core.chunk_rest(seq__15249__$1);
var G__15263 = c__7262__auto__;
var G__15264 = cljs.core.count(c__7262__auto__);
var G__15265 = (0);
seq__15249 = G__15262;
chunk__15250 = G__15263;
count__15251 = G__15264;
i__15252 = G__15265;
continue;
} else {
var f = cljs.core.first(seq__15249__$1);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : f.call(null,event_v,self__.queue));

var G__15266 = cljs.core.next(seq__15249__$1);
var G__15267 = null;
var G__15268 = (0);
var G__15269 = (0);
seq__15249 = G__15266;
chunk__15250 = G__15267;
count__15251 = G__15268;
i__15252 = G__15269;
continue;
}
} else {
return null;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$enqueue$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$add_DASH_event,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
var vec__15253 = (function (){var G__15254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__15254)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__15254,this$__$1){
return (function (){
re_frame.router._add_event(this$__$1,arg);

return re_frame.router._run_next_tick(this$__$1);
});})(G__15254,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__15254)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__15254,this$__$1){
return (function (){
return re_frame.router._add_event(this$__$1,arg);
});})(G__15254,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__15254)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__15254,this$__$1){
return (function (){
return re_frame.router._run_queue(this$__$1);
});})(G__15254,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__15254)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__15254,this$__$1){
return (function (){
return re_frame.router._add_event(this$__$1,arg);
});})(G__15254,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__15254)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__15254,this$__$1){
return (function (){
return re_frame.router._pause(this$__$1,arg);
});})(G__15254,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__15254)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,((function (G__15254,this$__$1){
return (function (){
return re_frame.router._exception(this$__$1,arg);
});})(G__15254,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__15254)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__15254,this$__$1){
return (function (){
return re_frame.router._run_next_tick(this$__$1);
});})(G__15254,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__15254)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__15254,this$__$1){
return (function (){
return re_frame.router._add_event(this$__$1,arg);
});})(G__15254,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__15254)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__15254,this$__$1){
return (function (){
return re_frame.router._resume(this$__$1);
});})(G__15254,this$__$1))
], null);
} else {
throw [cljs.core.str("re-frame: state transition not found. "),cljs.core.str(self__.fsm_state),cljs.core.str(" "),cljs.core.str(trigger)].join('');

}
}
}
}
}
}
}
}
}
})();
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15253,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15253,(1),null);
self__.fsm_state = new_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__15255 = ((function (this$__$1){
return (function (){
return re_frame.router._fsm_trigger(this$__$1,cljs.core.cst$kw$resume,null);
});})(this$__$1))
;
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__15255) : later_fn.call(null,G__15255));
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return self__.post_event_callback_fns = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,f);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);

throw ex;
});

re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fsm_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$queue,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$post_DASH_event_DASH_callback_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

re_frame.router.EventQueue.cljs$lang$type = true;

re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";

re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"re-frame.router/EventQueue");
});

re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue(cljs.core.cst$kw$idle,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentVector.EMPTY);
/**
 * Queue an event to be processed by the registered handler.
 * 
 *   Usage example:
 *   (dispatch [:delete-item 42])
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"dispatch\" is ignoring a nil event."], 0));
} else {
re_frame.router.enqueue(re_frame.router.event_queue,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler
 *   immediately. Note: dispatch-sync may not be called while another
 *   event is being handled.
 * 
 *   Usage example:
 *   (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle(event_v);

return null;
});
