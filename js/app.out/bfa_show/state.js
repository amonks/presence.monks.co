// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('bfa_show.state');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('bfa_show.v2');
goog.require('bfa_show.window');
goog.require('bfa_show.graphics');
bfa_show.state.schema = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$dimensions,bfa_show.v2.schema,cljs.core.cst$kw$video_DASH_playing_QMARK_,schema.core.Bool,cljs.core.cst$kw$current_DASH_page,schema.core.Keyword,cljs.core.cst$kw$header_DASH_graphics,bfa_show.graphics.schema], null);
bfa_show.state.initial_state = (function bfa_show$state$initial_state(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$header_DASH_graphics,bfa_show.graphics.initial_state(),cljs.core.cst$kw$video_DASH_playing_QMARK_,false,cljs.core.cst$kw$current_DASH_page,cljs.core.cst$kw$home,cljs.core.cst$kw$dimensions,bfa_show.window.size()], null);
});
