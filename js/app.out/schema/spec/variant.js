// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.variant');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.variant.option_step = (function schema$spec$variant$option_step(o,params,else$){
var g = cljs.core.cst$kw$guard.cljs$core$IFn$_invoke$arity$1(o);
var c = schema.spec.core.sub_checker(o,params);
var step = (cljs.core.truth_(g)?((function (g,c){
return (function (x){
var guard_result = (function (){try{return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
}catch (e12753){if((e12753 instanceof Object)){
var e_SHARP_ = e12753;
return cljs.core.cst$kw$schema$spec$variant_SLASH_exception;
} else {
throw e12753;

}
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema$spec$variant_SLASH_exception,guard_result)){
return schema.utils.error(schema.utils.make_ValidationError(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(o),x,(new cljs.core.Delay(((function (guard_result,g,c){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.utils.value_name(x)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(g)));
});})(guard_result,g,c))
,null)),cljs.core.cst$sym$throws_QMARK_));
} else {
if(cljs.core.truth_(guard_result)){
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(x) : c.call(null,x));
} else {
return (else$.cljs$core$IFn$_invoke$arity$1 ? else$.cljs$core$IFn$_invoke$arity$1(x) : else$.call(null,x));

}
}
});})(g,c))
:c);
var temp__4423__auto__ = cljs.core.cst$kw$wrap_DASH_error.cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(temp__4423__auto__)){
var wrap_error = temp__4423__auto__;
return ((function (wrap_error,temp__4423__auto__,g,c,step){
return (function (x){
var res = (step.cljs$core$IFn$_invoke$arity$1 ? step.cljs$core$IFn$_invoke$arity$1(x) : step.call(null,x));
var temp__4423__auto____$1 = schema.utils.error_val(res);
if(cljs.core.truth_(temp__4423__auto____$1)){
var e = temp__4423__auto____$1;
return schema.utils.error((wrap_error.cljs$core$IFn$_invoke$arity$1 ? wrap_error.cljs$core$IFn$_invoke$arity$1(e) : wrap_error.call(null,e)));
} else {
return res;
}
});
;})(wrap_error,temp__4423__auto__,g,c,step))
} else {
return step;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.variant.VariantSpec = (function (pre,options,err_f,post,__meta,__extmap,__hash){
this.pre = pre;
this.options = options;
this.err_f = err_f;
this.post = post;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k12755,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__12757 = (((k12755 instanceof cljs.core.Keyword))?k12755.fqn:null);
switch (G__12757) {
case "pre":
return self__.pre;

break;
case "options":
return self__.options;

break;
case "err-f":
return self__.err_f;

break;
case "post":
return self__.post;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12755,else__7076__auto__);

}
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,self__.options);
});

schema.spec.variant.VariantSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var t = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (f,o){
return schema.spec.variant.option_step(o,params,f);
});})(this$__$1))
,((function (this$__$1){
return (function (x){
return schema.utils.error(schema.utils.make_ValidationError(this$__$1,x,(new cljs.core.Delay(((function (this$__$1){
return (function (){
var G__12758 = schema.utils.value_name(x);
return (self__.err_f.cljs$core$IFn$_invoke$arity$1 ? self__.err_f.cljs$core$IFn$_invoke$arity$1(G__12758) : self__.err_f.call(null,G__12758));
});})(this$__$1))
,null)),null));
});})(this$__$1))
,cljs.core.reverse(self__.options));
if(cljs.core.truth_(self__.post)){
return ((function (t,this$__$1){
return (function (x){
var or__6459__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
var v = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(v))){
return v;
} else {
var or__6459__auto____$1 = (function (){var G__12760 = (cljs.core.truth_(cljs.core.cst$kw$return_DASH_walked_QMARK_.cljs$core$IFn$_invoke$arity$1(params))?v:x);
return (self__.post.cljs$core$IFn$_invoke$arity$1 ? self__.post.cljs$core$IFn$_invoke$arity$1(G__12760) : self__.post.call(null,G__12760));
})();
if(cljs.core.truth_(or__6459__auto____$1)){
return or__6459__auto____$1;
} else {
return v;
}
}
}
});
;})(t,this$__$1))
} else {
return ((function (t,this$__$1){
return (function (x){
var or__6459__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
}
});
;})(t,this$__$1))
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.spec.variant.VariantSpec{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$err_DASH_f,self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post,self__.post],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.variant.VariantSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12754){
var self__ = this;
var G__12754__$1 = this;
return (new cljs.core.RecordIter((0),G__12754__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,cljs.core.cst$kw$options,cljs.core.cst$kw$err_DASH_f,cljs.core.cst$kw$post], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
var self__ = this;
var this__7068__auto____$1 = this;
var h__6894__auto__ = self__.__hash;
if(!((h__6894__auto__ == null))){
return h__6894__auto__;
} else {
var h__6894__auto____$1 = cljs.core.hash_imap(this__7068__auto____$1);
self__.__hash = h__6894__auto____$1;

return h__6894__auto____$1;
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
var self__ = this;
var this__7069__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6447__auto__ = other__7070__auto__;
if(cljs.core.truth_(and__6447__auto__)){
var and__6447__auto____$1 = (this__7069__auto____$1.constructor === other__7070__auto__.constructor);
if(and__6447__auto____$1){
return cljs.core.equiv_map(this__7069__auto____$1,other__7070__auto__);
} else {
return and__6447__auto____$1;
}
} else {
return and__6447__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pre,null,cljs.core.cst$kw$err_DASH_f,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$options,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__12754){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__12761 = cljs.core.keyword_identical_QMARK_;
var expr__12762 = k__7081__auto__;
if(cljs.core.truth_((pred__12761.cljs$core$IFn$_invoke$arity$2 ? pred__12761.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pre,expr__12762) : pred__12761.call(null,cljs.core.cst$kw$pre,expr__12762)))){
return (new schema.spec.variant.VariantSpec(G__12754,self__.options,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12761.cljs$core$IFn$_invoke$arity$2 ? pred__12761.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$options,expr__12762) : pred__12761.call(null,cljs.core.cst$kw$options,expr__12762)))){
return (new schema.spec.variant.VariantSpec(self__.pre,G__12754,self__.err_f,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12761.cljs$core$IFn$_invoke$arity$2 ? pred__12761.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$err_DASH_f,expr__12762) : pred__12761.call(null,cljs.core.cst$kw$err_DASH_f,expr__12762)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,G__12754,self__.post,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12761.cljs$core$IFn$_invoke$arity$2 ? pred__12761.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post,expr__12762) : pred__12761.call(null,cljs.core.cst$kw$post,expr__12762)))){
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,G__12754,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__12754),null));
}
}
}
}
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$options,self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$err_DASH_f,self__.err_f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post,self__.post],null))], null),self__.__extmap));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__12754){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.spec.variant.VariantSpec(self__.pre,self__.options,self__.err_f,self__.post,G__12754,self__.__extmap,self__.__hash));
});

schema.spec.variant.VariantSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.spec.variant.VariantSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre,cljs.core.cst$sym$options,cljs.core.cst$sym$err_DASH_f,cljs.core.cst$sym$post], null);
});

schema.spec.variant.VariantSpec.cljs$lang$type = true;

schema.spec.variant.VariantSpec.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.VariantSpec.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.spec.variant/VariantSpec");
});

schema.spec.variant.__GT_VariantSpec = (function schema$spec$variant$__GT_VariantSpec(pre,options,err_f,post){
return (new schema.spec.variant.VariantSpec(pre,options,err_f,post,null,null,null));
});

schema.spec.variant.map__GT_VariantSpec = (function schema$spec$variant$map__GT_VariantSpec(G__12756){
return (new schema.spec.variant.VariantSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__12756),cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(G__12756),cljs.core.cst$kw$err_DASH_f.cljs$core$IFn$_invoke$arity$1(G__12756),cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(G__12756),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12756,cljs.core.cst$kw$pre,cljs.core.array_seq([cljs.core.cst$kw$options,cljs.core.cst$kw$err_DASH_f,cljs.core.cst$kw$post], 0)),null));
});

/**
 * A variant spec represents a choice between a set of alternative
 * subschemas, e.g., a tagged union. It has an overall precondition,
 * set of options, and error function.
 * 
 * The semantics of `options` is that the options are processed in
 * order. During checking, the datum must match the schema for the
 * first option for which `guard` passes. During generation, any datum
 * generated from an option will pass the corresponding `guard`.
 * 
 * err-f is a function to produce an error message if none
 * of the guards match (and must be passed unless the last option has no
 * guard).
 */
schema.spec.variant.variant_spec = (function schema$spec$variant$variant_spec(var_args){
var args12765 = [];
var len__7517__auto___12768 = arguments.length;
var i__7518__auto___12769 = (0);
while(true){
if((i__7518__auto___12769 < len__7517__auto___12768)){
args12765.push((arguments[i__7518__auto___12769]));

var G__12770 = (i__7518__auto___12769 + (1));
i__7518__auto___12769 = G__12770;
continue;
} else {
}
break;
}

var G__12767 = args12765.length;
switch (G__12767) {
case 2:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12765.length)].join('')));

}
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2 = (function (pre,options){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(pre,options,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3 = (function (pre,options,err_f){
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(pre,options,err_f,null);
});

schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4 = (function (pre,options,err_f,post){
if(cljs.core.truth_((function (){var or__6459__auto__ = err_f;
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return (cljs.core.cst$kw$guard.cljs$core$IFn$_invoke$arity$1(cljs.core.last(options)) == null);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_("when last option has a guard, err-f must be provided")));
}

return schema.spec.variant.__GT_VariantSpec(pre,options,err_f,post);
});

schema.spec.variant.variant_spec.cljs$lang$maxFixedArity = 4;
