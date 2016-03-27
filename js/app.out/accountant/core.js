// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.history.Event');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__21238_21241 = el;
var G__21239_21242 = type;
var G__21240_21243 = ((function (G__21238_21241,G__21239_21242,out){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
});})(G__21238_21241,G__21239_21242,out))
;
goog.events.listen(G__21238_21241,G__21239_21242,G__21240_21243);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history){
var navigation = accountant.core.listen(history,goog.history.EventType.NAVIGATE);
var c__18434__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__18434__auto__,navigation){
return (function (){
var f__18435__auto__ = (function (){var switch__18320__auto__ = ((function (c__18434__auto__,navigation){
return (function (state_21286){
var state_val_21287 = (state_21286[(1)]);
if((state_val_21287 === (1))){
var state_21286__$1 = state_21286;
var statearr_21288_21302 = state_21286__$1;
(statearr_21288_21302[(2)] = null);

(statearr_21288_21302[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21287 === (2))){
var state_21286__$1 = state_21286;
var statearr_21289_21303 = state_21286__$1;
(statearr_21289_21303[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21287 === (3))){
var inst_21284 = (state_21286[(2)]);
var state_21286__$1 = state_21286;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21286__$1,inst_21284);
} else {
if((state_val_21287 === (4))){
var state_21286__$1 = state_21286;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21286__$1,(7),navigation);
} else {
if((state_val_21287 === (5))){
var state_21286__$1 = state_21286;
var statearr_21291_21304 = state_21286__$1;
(statearr_21291_21304[(2)] = null);

(statearr_21291_21304[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21287 === (6))){
var inst_21282 = (state_21286[(2)]);
var state_21286__$1 = state_21286;
var statearr_21292_21305 = state_21286__$1;
(statearr_21292_21305[(2)] = inst_21282);

(statearr_21292_21305[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21287 === (7))){
var inst_21276 = (state_21286[(2)]);
var inst_21277 = inst_21276.token;
var inst_21278 = secretary.core.dispatch_BANG_(inst_21277);
var state_21286__$1 = (function (){var statearr_21293 = state_21286;
(statearr_21293[(7)] = inst_21278);

return statearr_21293;
})();
var statearr_21294_21306 = state_21286__$1;
(statearr_21294_21306[(2)] = null);

(statearr_21294_21306[(1)] = (2));


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
});})(c__18434__auto__,navigation))
;
return ((function (switch__18320__auto__,c__18434__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__18321__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__18321__auto____0 = (function (){
var statearr_21298 = [null,null,null,null,null,null,null,null];
(statearr_21298[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__18321__auto__);

(statearr_21298[(1)] = (1));

return statearr_21298;
});
var accountant$core$dispatch_on_navigate_$_state_machine__18321__auto____1 = (function (state_21286){
while(true){
var ret_value__18322__auto__ = (function (){try{while(true){
var result__18323__auto__ = switch__18320__auto__(state_21286);
if(cljs.core.keyword_identical_QMARK_(result__18323__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18323__auto__;
}
break;
}
}catch (e21299){if((e21299 instanceof Object)){
var ex__18324__auto__ = e21299;
var statearr_21300_21307 = state_21286;
(statearr_21300_21307[(5)] = ex__18324__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21286);

return cljs.core.cst$kw$recur;
} else {
throw e21299;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18322__auto__,cljs.core.cst$kw$recur)){
var G__21308 = state_21286;
state_21286 = G__21308;
continue;
} else {
return ret_value__18322__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__18321__auto__ = function(state_21286){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__18321__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__18321__auto____1.call(this,state_21286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__18321__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__18321__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__18321__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__18321__auto__;
})()
;})(switch__18320__auto__,c__18434__auto__,navigation))
})();
var state__18436__auto__ = (function (){var statearr_21301 = (f__18435__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18435__auto__.cljs$core$IFn$_invoke$arity$0() : f__18435__auto__.call(null));
(statearr_21301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18434__auto__);

return statearr_21301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18436__auto__);
});})(c__18434__auto__,navigation))
);

return c__18434__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
while(true){
var temp__4423__auto__ = e.href;
if(cljs.core.truth_(temp__4423__auto__)){
var href = temp__4423__auto__;
return href;
} else {
var temp__4425__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__21309 = parent;
e = G__21309;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str(history.pathPrefix_),cljs.core.str(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url(history,token);
js_history.pushState(null,(function (){var or__6459__auto__ = title;
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
var or__6459__auto____$1 = document.title;
if(cljs.core.truth_(or__6459__auto____$1)){
return or__6459__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return [cljs.core.str("?"),cljs.core.str(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return [cljs.core.str("#"),cljs.core.str(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes in
 *   Secretary.
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history){
var G__21313 = document;
var G__21314 = "click";
var G__21315 = ((function (G__21313,G__21314){
return (function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__6459__auto__ = meta_key;
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
var or__6459__auto____$1 = alt_key;
if(cljs.core.truth_(or__6459__auto____$1)){
return or__6459__auto____$1;
} else {
var or__6459__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__6459__auto____$2)){
return or__6459__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href = accountant.core.find_href(target);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str(path),cljs.core.str(query),cljs.core.str(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var current_host = window.location.hostname;
if(cljs.core.truth_((function (){var and__6447__auto__ = cljs.core.not(any_key);
if(and__6447__auto__){
var and__6447__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__6447__auto____$1){
var and__6447__auto____$2 = secretary.core.locate_route(path);
if(cljs.core.truth_(and__6447__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
} else {
return and__6447__auto____$2;
}
} else {
return and__6447__auto____$1;
}
} else {
return and__6447__auto__;
}
})())){
accountant.core.set_token_BANG_(history,relative_href,title);

return e.preventDefault();
} else {
return null;
}
});})(G__21313,G__21314))
;
return goog.events.listen(G__21313,G__21314,G__21315);
});
/**
 * Create and configure HTML5 history navigation.
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(){
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.dispatch_on_navigate(accountant.core.history);

return accountant.core.prevent_reload_on_known_path(accountant.core.history);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21316_SHARP_){
return cljs.core.name(p1__21316_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (params,values,pairs){
return (function (p1__21317_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__21317_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args21318 = [];
var len__7517__auto___21321 = arguments.length;
var i__7518__auto___21322 = (0);
while(true){
if((i__7518__auto___21322 < len__7517__auto___21321)){
args21318.push((arguments[i__7518__auto___21322]));

var G__21323 = (i__7518__auto___21322 + (1));
i__7518__auto___21322 = G__21323;
continue;
} else {
}
break;
}

var G__21320 = args21318.length;
switch (G__21320) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21318.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv(((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;
accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
return secretary.core.dispatch_BANG_([cljs.core.str(path),cljs.core.str(query),cljs.core.str(hash)].join(''));
});
