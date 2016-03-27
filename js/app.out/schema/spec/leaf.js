// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('schema.spec.core');

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
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k12775,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__12777 = (((k12775 instanceof cljs.core.Keyword))?k12775.fqn:null);
switch (G__12777) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12775,else__7076__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__6459__auto__ = (self__.pre.cljs$core$IFn$_invoke$arity$1 ? self__.pre.cljs$core$IFn$_invoke$arity$1(x) : self__.pre.call(null,x));
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12774){
var self__ = this;
var G__12774__$1 = this;
return (new cljs.core.RecordIter((0),G__12774__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre], null),cljs.core._iterator(self__.__extmap)));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__12774){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__12778 = cljs.core.keyword_identical_QMARK_;
var expr__12779 = k__7081__auto__;
if(cljs.core.truth_((pred__12778.cljs$core$IFn$_invoke$arity$2 ? pred__12778.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pre,expr__12779) : pred__12778.call(null,cljs.core.cst$kw$pre,expr__12779)))){
return (new schema.spec.leaf.LeafSpec(G__12774,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__12774),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pre,self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__12774){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__12774,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pre], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__12776){
return (new schema.spec.leaf.LeafSpec(cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(G__12776),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12776,cljs.core.cst$kw$pre),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec(pre);
});
