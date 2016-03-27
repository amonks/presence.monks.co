// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('bfa_show.views');
goog.require('cljs.core');
goog.require('bfa_show.graphics');
goog.require('re_frame.core');
bfa_show.views.handle_message = (function bfa_show$views$handle_message(message){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["message",message.origin], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["message",message.data], 0));
});
bfa_show.views.add_listeners = (function bfa_show$views$add_listeners(){
return window.addEventListener("message",(function (p1__17080_SHARP_){
return bfa_show.views.handle_message(p1__17080_SHARP_);
}),false);
});
window.addEventListener("message",(function (){
return bfa_show.views.add_listeners();
}));
bfa_show.views.home_link = (function bfa_show$views$home_link(var_args){
var args17081 = [];
var len__7517__auto___17084 = arguments.length;
var i__7518__auto___17085 = (0);
while(true){
if((i__7518__auto___17085 < len__7517__auto___17084)){
args17081.push((arguments[i__7518__auto___17085]));

var G__17086 = (i__7518__auto___17085 + (1));
i__7518__auto___17085 = G__17086;
continue;
} else {
}
break;
}

var G__17083 = args17081.length;
switch (G__17083) {
case 1:
return bfa_show.views.home_link.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return bfa_show.views.home_link.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17081.length)].join('')));

}
});

bfa_show.views.home_link.cljs$core$IFn$_invoke$arity$1 = (function (title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/"], null),title], null);
});

bfa_show.views.home_link.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.home_link,"PRESENCE and the arrow of time"], null);
});

bfa_show.views.home_link.cljs$lang$maxFixedArity = 1;
bfa_show.views.colophon_link = (function bfa_show$views$colophon_link(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/colophon"], null),"colophon"], null);
});
bfa_show.views.nodes_link = (function bfa_show$views$nodes_link(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/nodes"], null),"nodes"], null);
});
bfa_show.views.footer = (function bfa_show$views$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.colophon_link], null)," | ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.nodes_link], null)], null),bfa_show.views.i,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"2016 | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://monks.co"], null),"Andrew Monks"], null)], null)], null)], null);
});
bfa_show.views.header = (function bfa_show$views$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.home_link], null)], null)], null);
});
bfa_show.views.video = (function bfa_show$views$video(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$vimeo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"https://player.vimeo.com/video/160085792?color=ffffff&title=0&byline=0&portrait=0"], null)], null)], null);
});
bfa_show.views.home = (function bfa_show$views$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.video], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,"<h3>The Arrow Of Time</h3><p>Contemporary physics has shown that there's no particular reason why time should go forward rather than backward. There has to be <em>time</em>, mind you, but the math doesn't care which direction it goes.</p><p>However, we can observe that the total entropy in the universe increases over time, and always has. With this odd metric, we can tell the past from the future.</p><h3>The Speed Of Light</h3><p>If objects could travel faster than the speed of light, it would create multiple conflicting timelines. If I throw a ball <em>faster than the speed of light</em>, then depending on where you're standing you might see the ball travel from the earth to the sun <em>or</em> from the sun to the earth. The trouble is, neither of these views would be any more correct than the other.</p>"], null)], null)], null)], null)], null);
});
bfa_show.views.colophon = (function bfa_show$views$colophon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,"<h3>PRESENCE and the arrow of time</h3><p>The piece itself uses the following technologies:</p><ol><li>Apple iPad Pro</li><li>Apple iOS</li><li>OpenFrameworks</li><li>Amazon S3</li><li>generic PVC 40</li><li>Oatey Regular Clear PVC Cement</li></ol>"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,"<h3>This Website</h3><p>This is the documentation website for <code>PRESENCE and the arrow of time</code>. It uses the following technologies:</p><ol><li>Amazon Route53 DNS</li><li>Github Pages</li><li>Clojurescript</li><li>Reagent (re-frame)</li><li>Quil (Processing)</li></ol><p>The source code is available on Github at <a href='//github.com/amonks/presence.monks.co'>amonks/presence.monks.co</a></p>"], null)], null)], null)], null)], null);
});
bfa_show.views.render = (function bfa_show$views$render(){
var current_page = (function (){var G__17090 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_page], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__17090) : re_frame.core.subscribe.call(null,G__17090));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_page) : cljs.core.deref.call(null,current_page)),cljs.core.cst$kw$nodes)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$corner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.home_link,"PRESENCE"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.header], null),(function (){var G__17091 = ((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_page) : cljs.core.deref.call(null,current_page)) instanceof cljs.core.Keyword))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_page) : cljs.core.deref.call(null,current_page)).fqn:null);
switch (G__17091) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.home], null);

break;
case "colophon":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.colophon], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current_page) : cljs.core.deref.call(null,current_page)))].join('')));

}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bfa_show.views.footer], null)], null);
}
});
