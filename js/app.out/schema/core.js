// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (schema.core.spec[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (schema.core.spec["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (schema.core.explain[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (schema.core.explain["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,schema.spec.core.run_checker((function (s,params){
return schema.spec.core.checker(schema.core.spec(s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker(schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker(schema__$1);
return ((function (c){
return (function (value){
var temp__4425__auto___14206 = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(value) : c.call(null,value));
if(cljs.core.truth_(temp__4425__auto___14206)){
var error_14207 = temp__4425__auto___14206;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Value does not match schema: %s",cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error_14207], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$schema$core_SLASH_error,cljs.core.cst$kw$schema,schema__$1,cljs.core.cst$kw$value,value,cljs.core.cst$kw$error,error_14207], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator(schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition(s,(function (p1__14208_SHARP_){
var and__6447__auto__ = !((p1__14208_SHARP_ == null));
if(and__6447__auto__){
var or__6459__auto__ = (klass === p1__14208_SHARP_.constructor);
if(or__6459__auto__){
return or__6459__auto__;
} else {
return p1__14208_SHARP_ instanceof klass;
}
} else {
return and__6447__auto__;
}
}),(function (p1__14209_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14209_SHARP_),klass),cljs.core.cst$sym$instance_QMARK_);
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition(this$,this$);
var temp__4423__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4423__auto__)){
var class_schema = temp__4423__auto__;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec(pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4423__auto__ = schema.utils.class_schema(this$);
if(cljs.core.truth_(temp__4423__auto__)){
var more_schema = temp__4423__auto__;
return schema.core.explain(more_schema);
} else {
var pred__14210 = cljs.core._EQ_;
var expr__14211 = this$;
if(cljs.core.truth_((pred__14210.cljs$core$IFn$_invoke$arity$2 ? pred__14210.cljs$core$IFn$_invoke$arity$2(null,expr__14211) : pred__14210.call(null,null,expr__14211)))){
return cljs.core.cst$sym$Str;
} else {
if(cljs.core.truth_((pred__14210.cljs$core$IFn$_invoke$arity$2 ? pred__14210.cljs$core$IFn$_invoke$arity$2(Boolean,expr__14211) : pred__14210.call(null,Boolean,expr__14211)))){
return cljs.core.cst$sym$Bool;
} else {
if(cljs.core.truth_((pred__14210.cljs$core$IFn$_invoke$arity$2 ? pred__14210.cljs$core$IFn$_invoke$arity$2(Number,expr__14211) : pred__14210.call(null,Number,expr__14211)))){
return cljs.core.cst$sym$Num;
} else {
if(cljs.core.truth_((pred__14210.cljs$core$IFn$_invoke$arity$2 ? pred__14210.cljs$core$IFn$_invoke$arity$2(null,expr__14211) : pred__14210.call(null,null,expr__14211)))){
return cljs.core.cst$sym$Regex;
} else {
if(cljs.core.truth_((pred__14210.cljs$core$IFn$_invoke$arity$2 ? pred__14210.cljs$core$IFn$_invoke$arity$2(Date,expr__14211) : pred__14210.call(null,Date,expr__14211)))){
return cljs.core.cst$sym$Inst;
} else {
if(cljs.core.truth_((pred__14210.cljs$core$IFn$_invoke$arity$2 ? pred__14210.cljs$core$IFn$_invoke$arity$2(cljs.core.UUID,expr__14211) : pred__14210.call(null,cljs.core.UUID,expr__14211)))){
return cljs.core.cst$sym$Uuid;
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14214,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14216 = (((k14214 instanceof cljs.core.Keyword))?k14214.fqn:null);
switch (G__14216) {
case "_":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14214,else__7076__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.AnythingSchema{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14213){
var self__ = this;
var G__14213__$1 = this;
return (new cljs.core.RecordIter((0),G__14213__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14213){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14217 = cljs.core.keyword_identical_QMARK_;
var expr__14218 = k__7081__auto__;
if(cljs.core.truth_((pred__14217.cljs$core$IFn$_invoke$arity$2 ? pred__14217.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_,expr__14218) : pred__14217.call(null,cljs.core.cst$kw$_,expr__14218)))){
return (new schema.core.AnythingSchema(G__14213,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14213),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$_,self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14213){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__14213,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Any;
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__14215){
return (new schema.core.AnythingSchema(cljs.core.cst$kw$_.cljs$core$IFn$_invoke$arity$1(G__14215),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14215,cljs.core.cst$kw$_),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14224,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14226 = (((k14224 instanceof cljs.core.Keyword))?k14224.fqn:null);
switch (G__14226) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14224,else__7076__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.EqSchema{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14223){
var self__ = this;
var G__14223__$1 = this;
return (new cljs.core.RecordIter((0),G__14223__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14223){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14227 = cljs.core.keyword_identical_QMARK_;
var expr__14228 = k__7081__auto__;
if(cljs.core.truth_((pred__14227.cljs$core$IFn$_invoke$arity$2 ? pred__14227.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,expr__14228) : pred__14227.call(null,cljs.core.cst$kw$v,expr__14228)))){
return (new schema.core.EqSchema(G__14223,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14223),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14223){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__14223,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__14221_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.v,p1__14221_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__14222_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14222_SHARP_),self__.v),cljs.core.cst$sym$_EQ_);
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.v),cljs.core.cst$sym$eq);
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__14225){
return (new schema.core.EqSchema(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__14225),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14225,cljs.core.cst$kw$v),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14234,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14236 = (((k14234 instanceof cljs.core.Keyword))?k14234.fqn:null);
switch (G__14236) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14234,else__7076__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Isa{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14233){
var self__ = this;
var G__14233__$1 = this;
return (new cljs.core.RecordIter((0),G__14233__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$parent], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parent,null,cljs.core.cst$kw$h,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14233){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14237 = cljs.core.keyword_identical_QMARK_;
var expr__14238 = k__7081__auto__;
if(cljs.core.truth_((pred__14237.cljs$core$IFn$_invoke$arity$2 ? pred__14237.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$h,expr__14238) : pred__14237.call(null,cljs.core.cst$kw$h,expr__14238)))){
return (new schema.core.Isa(G__14233,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14237.cljs$core$IFn$_invoke$arity$2 ? pred__14237.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parent,expr__14238) : pred__14237.call(null,cljs.core.cst$kw$parent,expr__14238)))){
return (new schema.core.Isa(self__.h,G__14233,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14233),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14233){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__14233,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__14231_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$3(self__.h,p1__14231_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__14232_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),p1__14232_SHARP_),cljs.core.cst$sym$isa_QMARK_);
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.parent),cljs.core.cst$sym$isa_QMARK_);
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$h,cljs.core.cst$sym$parent], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__14235){
return (new schema.core.Isa(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__14235),cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__14235),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14235,cljs.core.cst$kw$h,cljs.core.array_seq([cljs.core.cst$kw$parent], 0)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args14241 = [];
var len__7517__auto___14244 = arguments.length;
var i__7518__auto___14245 = (0);
while(true){
if((i__7518__auto___14245 < len__7517__auto___14244)){
args14241.push((arguments[i__7518__auto___14245]));

var G__14246 = (i__7518__auto___14245 + (1));
i__7518__auto___14245 = G__14246;
continue;
} else {
}
break;
}

var G__14243 = args14241.length;
switch (G__14243) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14241.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14251,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14253 = (((k14251 instanceof cljs.core.Keyword))?k14251.fqn:null);
switch (G__14253) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14251,else__7076__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.EnumSchema{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14250){
var self__ = this;
var G__14250__$1 = this;
return (new cljs.core.RecordIter((0),G__14250__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vs], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vs,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14250){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14254 = cljs.core.keyword_identical_QMARK_;
var expr__14255 = k__7081__auto__;
if(cljs.core.truth_((pred__14254.cljs$core$IFn$_invoke$arity$2 ? pred__14254.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$vs,expr__14255) : pred__14254.call(null,cljs.core.cst$kw$vs,expr__14255)))){
return (new schema.core.EnumSchema(G__14250,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14250),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vs,self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14250){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__14250,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__14248_SHARP_){
return cljs.core.contains_QMARK_(self__.vs,p1__14248_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__14249_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14249_SHARP_),self__.vs);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$enum,self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vs], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__14252){
return (new schema.core.EnumSchema(cljs.core.cst$kw$vs.cljs$core$IFn$_invoke$arity$1(G__14252),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14252,cljs.core.cst$kw$vs),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14259 = arguments.length;
var i__7518__auto___14260 = (0);
while(true){
if((i__7518__auto___14260 < len__7517__auto___14259)){
args__7524__auto__.push((arguments[i__7518__auto___14260]));

var G__14261 = (i__7518__auto___14260 + (1));
i__7518__auto___14260 = G__14261;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set(vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq14258){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14258));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14264,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14266 = (((k14264 instanceof cljs.core.Keyword))?k14264.fqn:null);
switch (G__14266) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14264,else__7076__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Predicate{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14263){
var self__ = this;
var G__14263__$1 = this;
return (new cljs.core.RecordIter((0),G__14263__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p_QMARK_,cljs.core.cst$kw$pred_DASH_name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pred_DASH_name,null,cljs.core.cst$kw$p_QMARK_,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14263){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14267 = cljs.core.keyword_identical_QMARK_;
var expr__14268 = k__7081__auto__;
if(cljs.core.truth_((pred__14267.cljs$core$IFn$_invoke$arity$2 ? pred__14267.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p_QMARK_,expr__14268) : pred__14267.call(null,cljs.core.cst$kw$p_QMARK_,expr__14268)))){
return (new schema.core.Predicate(G__14263,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14267.cljs$core$IFn$_invoke$arity$2 ? pred__14267.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pred_DASH_name,expr__14268) : pred__14267.call(null,cljs.core.cst$kw$pred_DASH_name,expr__14268)))){
return (new schema.core.Predicate(self__.p_QMARK_,G__14263,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14263),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p_QMARK_,self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred_DASH_name,self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14263){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__14263,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__14262_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14262_SHARP_),self__.pred_name);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.integer_QMARK_)){
return cljs.core.cst$sym$Int;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return cljs.core.cst$sym$Keyword;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return cljs.core.cst$sym$Symbol;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p_QMARK_,cljs.core.string_QMARK_)){
return cljs.core.cst$sym$Str;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.pred_name),cljs.core.cst$sym$pred);

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p_QMARK_,cljs.core.cst$sym$pred_DASH_name], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__14265){
return (new schema.core.Predicate(cljs.core.cst$kw$p_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14265),cljs.core.cst$kw$pred_DASH_name.cljs$core$IFn$_invoke$arity$1(G__14265),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14265,cljs.core.cst$kw$p_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$pred_DASH_name], 0)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args14271 = [];
var len__7517__auto___14274 = arguments.length;
var i__7518__auto___14275 = (0);
while(true){
if((i__7518__auto___14275 < len__7517__auto___14274)){
args14271.push((arguments[i__7518__auto___14275]));

var G__14276 = (i__7518__auto___14275 + (1));
i__7518__auto___14275 = G__14276;
continue;
} else {
}
break;
}

var G__14273 = args14271.length;
switch (G__14273) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14271.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.cljs$core$IFn$_invoke$arity$2(p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return cljs.core.cst$kw$proto_DASH_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14281,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14283 = (((k14281 instanceof cljs.core.Keyword))?k14281.fqn:null);
switch (G__14283) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14281,else__7076__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Protocol{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14280){
var self__ = this;
var G__14280__$1 = this;
return (new cljs.core.RecordIter((0),G__14280__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$p,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14280){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14284 = cljs.core.keyword_identical_QMARK_;
var expr__14285 = k__7081__auto__;
if(cljs.core.truth_((pred__14284.cljs$core$IFn$_invoke$arity$2 ? pred__14284.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,expr__14285) : pred__14284.call(null,cljs.core.cst$kw$p,expr__14285)))){
return (new schema.core.Protocol(G__14280,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14280),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$p,self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14280){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__14280,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__14278_SHARP_){
return cljs.core.cst$kw$proto_DASH_pred.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)).call(null,p1__14278_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__14279_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14279_SHARP_),schema.core.protocol_name(this$__$1)),cljs.core.cst$sym$satisfies_QMARK_);
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.protocol_name(this$__$1)),cljs.core.cst$sym$protocol);
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__14282){
return (new schema.core.Protocol(cljs.core.cst$kw$p.cljs$core$IFn$_invoke$arity$1(G__14282),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14282,cljs.core.cst$kw$p),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(schema.spec.core.precondition(this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__12848__12849__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__12848__12849__auto__),cljs.core.cst$sym$string_QMARK_);
});})(this$__$1))
),schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__14288_SHARP_){
return cljs.core.re_find(this$__$1,p1__14288_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__14289_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14289_SHARP_),schema.core.explain(this$__$1)),cljs.core.cst$sym$re_DASH_find);
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core14292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core14292 = (function (meta14293){
this.meta14293 = meta14293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core14292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14294,meta14293__$1){
var self__ = this;
var _14294__$1 = this;
return (new schema.core.t_schema$core14292(meta14293__$1));
});

schema.core.t_schema$core14292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14294){
var self__ = this;
var _14294__$1 = this;
return self__.meta14293;
});

schema.core.t_schema$core14292.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core14292.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__14290_SHARP_){
return (p1__14290_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__14291_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14291_SHARP_),cljs.core.cst$sym$js_SLASH_RegExp),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
));
});

schema.core.t_schema$core14292.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$sym$Regex;
});

schema.core.t_schema$core14292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta14293], null);
});

schema.core.t_schema$core14292.cljs$lang$type = true;

schema.core.t_schema$core14292.cljs$lang$ctorStr = "schema.core/t_schema$core14292";

schema.core.t_schema$core14292.cljs$lang$ctorPrWriter = (function (this__7057__auto__,writer__7058__auto__,opt__7059__auto__){
return cljs.core._write(writer__7058__auto__,"schema.core/t_schema$core14292");
});

schema.core.__GT_t_schema$core14292 = (function schema$core$__GT_t_schema$core14292(meta14293){
return (new schema.core.t_schema$core14292(meta14293));
});

}

return (new schema.core.t_schema$core14292(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14296,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14298 = (((k14296 instanceof cljs.core.Keyword))?k14296.fqn:null);
switch (G__14298) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14296,else__7076__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Maybe{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14295){
var self__ = this;
var G__14295__$1 = this;
return (new cljs.core.RecordIter((0),G__14295__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14295){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14299 = cljs.core.keyword_identical_QMARK_;
var expr__14300 = k__7081__auto__;
if(cljs.core.truth_((pred__14299.cljs$core$IFn$_invoke$arity$2 ? pred__14299.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__14300) : pred__14299.call(null,cljs.core.cst$kw$schema,expr__14300)))){
return (new schema.core.Maybe(G__14295,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14295),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14295){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__14295,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.nil_QMARK_,cljs.core.cst$kw$schema,schema.core.eq(null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.cst$sym$maybe);
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__14297){
return (new schema.core.Maybe(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__14297),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14297,cljs.core.cst$kw$schema),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14305,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14307 = (((k14305 instanceof cljs.core.Keyword))?k14305.fqn:null);
switch (G__14307) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14305,else__7076__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.NamedSchema{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14304){
var self__ = this;
var G__14304__$1 = this;
return (new cljs.core.RecordIter((0),G__14304__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14304){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14308 = cljs.core.keyword_identical_QMARK_;
var expr__14309 = k__7081__auto__;
if(cljs.core.truth_((pred__14308.cljs$core$IFn$_invoke$arity$2 ? pred__14308.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__14309) : pred__14308.call(null,cljs.core.cst$kw$schema,expr__14309)))){
return (new schema.core.NamedSchema(G__14304,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14308.cljs$core$IFn$_invoke$arity$2 ? pred__14308.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__14309) : pred__14308.call(null,cljs.core.cst$kw$name,expr__14309)))){
return (new schema.core.NamedSchema(self__.schema,G__14304,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14304),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14304){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__14304,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,self__.schema,cljs.core.cst$kw$wrap_DASH_error,((function (this$__$1){
return (function (p1__14303_SHARP_){
return schema.utils.__GT_NamedError(self__.name,p1__14303_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.name),schema.core.explain(self__.schema)),cljs.core.cst$sym$named);
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$name], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__14306){
return (new schema.core.NamedSchema(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__14306),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14306),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14306,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$name], 0)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14314,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14316 = (((k14314 instanceof cljs.core.Keyword))?k14314.fqn:null);
switch (G__14316) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14314,else__7076__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Either{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14313){
var self__ = this;
var G__14313__$1 = this;
return (new cljs.core.RecordIter((0),G__14313__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14313){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14317 = cljs.core.keyword_identical_QMARK_;
var expr__14318 = k__7081__auto__;
if(cljs.core.truth_((pred__14317.cljs$core$IFn$_invoke$arity$2 ? pred__14317.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__14318) : pred__14317.call(null,cljs.core.cst$kw$schemas,expr__14318)))){
return (new schema.core.Either(G__14313,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14313),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14313){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__14313,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7231__auto__ = ((function (this$__$1){
return (function schema$core$iter__14320(s__14321){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__14321__$1 = s__14321;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14321__$1);
if(temp__4425__auto__){
var s__14321__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14321__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14321__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14323 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14322 = (0);
while(true){
if((i__14322 < size__7230__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14322);
cljs.core.chunk_append(b__14323,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null));

var G__14327 = (i__14322 + (1));
i__14322 = G__14327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14323),schema$core$iter__14320(cljs.core.chunk_rest(s__14321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14323),null);
}
} else {
var s = cljs.core.first(s__14321__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,cljs.core.complement(schema.core.checker(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__14320(cljs.core.rest(s__14321__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7231__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__14312_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14312_SHARP_),cljs.core.cst$sym$some_DASH_matching_DASH_either_DASH_clause_QMARK_);
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$either,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__14315){
return (new schema.core.Either(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__14315),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14315,cljs.core.cst$kw$schemas),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `conditional` or `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14329 = arguments.length;
var i__7518__auto___14330 = (0);
while(true){
if((i__7518__auto___14330 < len__7517__auto___14329)){
args__7524__auto__.push((arguments[i__7518__auto___14330]));

var G__14331 = (i__7518__auto___14330 + (1));
i__7518__auto___14330 = G__14331;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq14328){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14328));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14334,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14336 = (((k14334 instanceof cljs.core.Keyword))?k14334.fqn:null);
switch (G__14336) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14334,else__7076__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14333){
var self__ = this;
var G__14333__$1 = this;
return (new cljs.core.RecordIter((0),G__14333__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.cst$kw$error_DASH_symbol], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preds_DASH_and_DASH_schemas,null,cljs.core.cst$kw$error_DASH_symbol,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14333){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14337 = cljs.core.keyword_identical_QMARK_;
var expr__14338 = k__7081__auto__;
if(cljs.core.truth_((pred__14337.cljs$core$IFn$_invoke$arity$2 ? pred__14337.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$preds_DASH_and_DASH_schemas,expr__14338) : pred__14337.call(null,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,expr__14338)))){
return (new schema.core.ConditionalSchema(G__14333,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14337.cljs$core$IFn$_invoke$arity$2 ? pred__14337.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error_DASH_symbol,expr__14338) : pred__14337.call(null,cljs.core.cst$kw$error_DASH_symbol,expr__14338)))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__14333,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14333),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$preds_DASH_and_DASH_schemas,self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error_DASH_symbol,self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14333){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__14333,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7231__auto__ = ((function (this$__$1){
return (function schema$core$iter__14340(s__14341){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__14341__$1 = s__14341;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14341__$1);
if(temp__4425__auto__){
var s__14341__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14341__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14341__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14343 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14342 = (0);
while(true){
if((i__14342 < size__7230__auto__)){
var vec__14348 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14342);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14348,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14348,(1),null);
cljs.core.chunk_append(b__14343,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null));

var G__14353 = (i__14342 + (1));
i__14342 = G__14353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14343),schema$core$iter__14340(cljs.core.chunk_rest(s__14341__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14343),null);
}
} else {
var vec__14349 = cljs.core.first(s__14341__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14349,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14349,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,p,cljs.core.cst$kw$schema,s], null),schema$core$iter__14340(cljs.core.rest(s__14341__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7231__auto__(self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__14332_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14332_SHARP_),(function (){var or__6459__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(self__.preds_and_schemas))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(cljs.core.ffirst(self__.preds_and_schemas)));
} else {
return cljs.core.cst$sym$some_DASH_matching_DASH_condition_QMARK_;
}
}
})());
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$conditional,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this$__$1){
return (function (p__14350){
var vec__14351 = p__14350;
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14351,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(pred)),schema.core.explain(schema__$1)], null);
});})(this$__$1))
,cljs.core.array_seq([self__.preds_and_schemas], 0)),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$preds_DASH_and_DASH_schemas,cljs.core.cst$sym$error_DASH_symbol], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__14335){
return (new schema.core.ConditionalSchema(cljs.core.cst$kw$preds_DASH_and_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__14335),cljs.core.cst$kw$error_DASH_symbol.cljs$core$IFn$_invoke$arity$1(G__14335),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14335,cljs.core.cst$kw$preds_DASH_and_DASH_schemas,cljs.core.array_seq([cljs.core.cst$kw$error_DASH_symbol], 0)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14365 = arguments.length;
var i__7518__auto___14366 = (0);
while(true){
if((i__7518__auto___14366 < len__7517__auto___14365)){
args__7524__auto__.push((arguments[i__7518__auto___14366]));

var G__14367 = (i__7518__auto___14366 + (1));
i__7518__auto___14366 = G__14367;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq(preds_and_schemas)) && ((cljs.core.even_QMARK_(cljs.core.count(preds_and_schemas))) || ((cljs.core.last(preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.array_seq([cljs.core.count(preds_and_schemas)], 0))));
}

return (new schema.core.ConditionalSchema((function (){var iter__7231__auto__ = (function schema$core$iter__14355(s__14356){
return (new cljs.core.LazySeq(null,(function (){
var s__14356__$1 = s__14356;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14356__$1);
if(temp__4425__auto__){
var s__14356__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14356__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14356__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14358 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14357 = (0);
while(true){
if((i__14357 < size__7230__auto__)){
var vec__14363 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14357);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14363,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14363,(1),null);
cljs.core.chunk_append(b__14358,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null));

var G__14368 = (i__14357 + (1));
i__14357 = G__14368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14358),schema$core$iter__14355(cljs.core.chunk_rest(s__14356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14358),null);
}
} else {
var vec__14364 = cljs.core.first(s__14356__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(0),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.cst$kw$else))?cljs.core.constantly(true):pred),schema__$1], null),schema$core$iter__14355(cljs.core.rest(s__14356__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7231__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_(cljs.core.count(preds_and_schemas)))?cljs.core.last(preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq14354){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14354));
});

/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__7114__auto__ = (((this$ == null))?null:this$);
var m__7115__auto__ = (schema.core.precondition[goog.typeOf(x__7114__auto__)]);
if(!((m__7115__auto__ == null))){
return (m__7115__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto__.call(null,this$));
} else {
var m__7115__auto____$1 = (schema.core.precondition["_"]);
if(!((m__7115__auto____$1 == null))){
return (m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7115__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7115__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(this$__$1.pre),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,(function (){var iter__7231__auto__ = ((function (this$__$1){
return (function schema$core$iter__14369(s__14370){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__14370__$1 = s__14370;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14370__$1);
if(temp__4425__auto__){
var s__14370__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14370__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14370__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14372 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14371 = (0);
while(true){
if((i__14371 < size__7230__auto__)){
var map__14379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14371);
var map__14379__$1 = ((((!((map__14379 == null)))?((((map__14379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14379):map__14379);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14379__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14379__$1,cljs.core.cst$kw$schema);
cljs.core.chunk_append(b__14372,(cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))));

var G__14383 = (i__14371 + (1));
i__14371 = G__14383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14372),schema$core$iter__14369(cljs.core.chunk_rest(s__14370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14372),null);
}
} else {
var map__14381 = cljs.core.first(s__14370__$2);
var map__14381__$1 = ((((!((map__14381 == null)))?((((map__14381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14381):map__14381);
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$guard);
var schema__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14381__$1,cljs.core.cst$kw$schema);
return cljs.core.cons((cljs.core.truth_(guard)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(guard,schema.core.precondition(schema.core.spec(schema__$1))):schema.core.precondition(schema.core.spec(schema__$1))),schema$core$iter__14369(cljs.core.rest(s__14370__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7231__auto__(this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement(this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14386,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14388 = (((k14386 instanceof cljs.core.Keyword))?k14386.fqn:null);
switch (G__14388) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14386,else__7076__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.CondPre{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14385){
var self__ = this;
var G__14385__$1 = this;
return (new cljs.core.RecordIter((0),G__14385__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14385){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14389 = cljs.core.keyword_identical_QMARK_;
var expr__14390 = k__7081__auto__;
if(cljs.core.truth_((pred__14389.cljs$core$IFn$_invoke$arity$2 ? pred__14389.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__14390) : pred__14389.call(null,cljs.core.cst$kw$schemas,expr__14390)))){
return (new schema.core.CondPre(G__14385,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14385),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14385){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__14385,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$3(schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__7231__auto__ = ((function (this$__$1){
return (function schema$core$iter__14392(s__14393){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__14393__$1 = s__14393;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14393__$1);
if(temp__4425__auto__){
var s__14393__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14393__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14393__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14395 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14394 = (0);
while(true){
if((i__14394 < size__7230__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14394);
cljs.core.chunk_append(b__14395,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null));

var G__14399 = (i__14394 + (1));
i__14394 = G__14399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14395),schema$core$iter__14392(cljs.core.chunk_rest(s__14393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14395),null);
}
} else {
var s = cljs.core.first(s__14393__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$guard,schema.core.precondition(schema.core.spec(s)),cljs.core.cst$kw$schema,s], null),schema$core$iter__14392(cljs.core.rest(s__14393__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7231__auto__(self__.schemas);
})(),((function (this$__$1){
return (function (p1__14384_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14384_SHARP_),cljs.core.cst$sym$matches_DASH_some_DASH_precondition_QMARK_);
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cond_DASH_pre,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__14387){
return (new schema.core.CondPre(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__14387),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14387,cljs.core.cst$kw$schemas),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14401 = arguments.length;
var i__7518__auto___14402 = (0);
while(true){
if((i__7518__auto___14402 < len__7517__auto___14401)){
args__7524__auto__.push((arguments[i__7518__auto___14402]));

var G__14403 = (i__7518__auto___14402 + (1));
i__7518__auto___14402 = G__14403;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq14400){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14400));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14406,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14408 = (((k14406 instanceof cljs.core.Keyword))?k14406.fqn:null);
switch (G__14408) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14406,else__7076__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Constrained{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$ = true;

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14405){
var self__ = this;
var G__14405__$1 = this;
return (new cljs.core.RecordIter((0),G__14405__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$post_DASH_name,null,cljs.core.cst$kw$postcondition,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14405){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14409 = cljs.core.keyword_identical_QMARK_;
var expr__14410 = k__7081__auto__;
if(cljs.core.truth_((pred__14409.cljs$core$IFn$_invoke$arity$2 ? pred__14409.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__14410) : pred__14409.call(null,cljs.core.cst$kw$schema,expr__14410)))){
return (new schema.core.Constrained(G__14405,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14409.cljs$core$IFn$_invoke$arity$2 ? pred__14409.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$postcondition,expr__14410) : pred__14409.call(null,cljs.core.cst$kw$postcondition,expr__14410)))){
return (new schema.core.Constrained(self__.schema,G__14405,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14409.cljs$core$IFn$_invoke$arity$2 ? pred__14409.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post_DASH_name,expr__14410) : pred__14409.call(null,cljs.core.cst$kw$post_DASH_name,expr__14410)))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__14405,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14405),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$postcondition,self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$post_DASH_name,self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14405){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__14405,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = true;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$4(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,self__.schema], null)], null),null,schema.spec.core.precondition(this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__14404_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14404_SHARP_),self__.post_name);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,self__.post_name),schema.core.explain(self__.schema)),cljs.core.cst$sym$constrained);
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$postcondition,cljs.core.cst$sym$post_DASH_name], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__14407){
return (new schema.core.Constrained(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__14407),cljs.core.cst$kw$postcondition.cljs$core$IFn$_invoke$arity$1(G__14407),cljs.core.cst$kw$post_DASH_name.cljs$core$IFn$_invoke$arity$1(G__14407),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14407,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$postcondition,cljs.core.cst$kw$post_DASH_name], 0)),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var args14413 = [];
var len__7517__auto___14416 = arguments.length;
var i__7518__auto___14417 = (0);
while(true){
if((i__7518__auto___14417 < len__7517__auto___14416)){
args14413.push((arguments[i__7518__auto___14417]));

var G__14418 = (i__7518__auto___14417 + (1));
i__7518__auto___14417 = G__14418;
continue;
} else {
}
break;
}

var G__14415 = args14413.length;
switch (G__14415) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14413.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3(s,p_QMARK_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(schema.utils.fn_name(p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_(p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not a function: %s",cljs.core.array_seq([p_QMARK_], 0))));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
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
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14422,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14424 = (((k14422 instanceof cljs.core.Keyword))?k14422.fqn:null);
switch (G__14424) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14422,else__7076__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(x) : t.call(null,x));
if(cljs.core.truth_(schema.utils.error_QMARK_(tx))){
return tx;
} else {
var G__14425 = (function (){var or__6459__auto__ = tx;
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return x;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14425) : f.call(null,G__14425));
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__14420_SHARP_){
return schema.spec.core.sub_checker(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,p1__14420_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse(self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Both{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14421){
var self__ = this;
var G__14421__$1 = this;
return (new cljs.core.RecordIter((0),G__14421__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schemas,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14421){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14426 = cljs.core.keyword_identical_QMARK_;
var expr__14427 = k__7081__auto__;
if(cljs.core.truth_((pred__14426.cljs$core$IFn$_invoke$arity$2 ? pred__14426.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas,expr__14427) : pred__14426.call(null,cljs.core.cst$kw$schemas,expr__14427)))){
return (new schema.core.Both(G__14421,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14421),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schemas,self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14421){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__14421,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons(cljs.core.cst$sym$both,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schemas], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__14423){
return (new schema.core.Both(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(G__14423),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14423,cljs.core.cst$kw$schemas),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__7524__auto__ = [];
var len__7517__auto___14431 = arguments.length;
var i__7518__auto___14432 = (0);
while(true){
if((i__7518__auto___14432 < len__7517__auto___14431)){
args__7524__auto__.push((arguments[i__7518__auto___14432]));

var G__14433 = (i__7518__auto___14432 + (1));
i__7518__auto___14432 = G__14433;
continue;
} else {
}
break;
}

var argseq__7525__auto__ = ((((0) < args__7524__auto__.length))?(new cljs.core.IndexedSeq(args__7524__auto__.slice((0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__7525__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq14430){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14430));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred,if_schema,cljs.core.constantly(true),else_schema], 0));
});
schema.core.var_name = (function schema$core$var_name(v){
var map__14436 = cljs.core.meta(v);
var map__14436__$1 = ((((!((map__14436 == null)))?((((map__14436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14436):map__14436);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14436__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14436__$1,cljs.core.cst$kw$name);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14439,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14441 = (((k14439 instanceof cljs.core.Keyword))?k14439.fqn:null);
switch (G__14441) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14439,else__7076__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Recursive{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14438){
var self__ = this;
var G__14438__$1 = this;
return (new cljs.core.RecordIter((0),G__14438__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$derefable], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$derefable,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14438){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14442 = cljs.core.keyword_identical_QMARK_;
var expr__14443 = k__7081__auto__;
if(cljs.core.truth_((pred__14442.cljs$core$IFn$_invoke$arity$2 ? pred__14442.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$derefable,expr__14443) : pred__14442.call(null,cljs.core.cst$kw$derefable,expr__14443)))){
return (new schema.core.Recursive(G__14438,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14438),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$derefable,self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14438){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__14438,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.cljs$core$IFn$_invoke$arity$2(schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.derefable) : cljs.core.deref.call(null,self__.derefable))], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.var_name(self__.derefable)),cljs.core.cst$sym$var):cljs.core.cst$sym$$$$)),cljs.core.cst$sym$recursive);
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$derefable], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__14440){
return (new schema.core.Recursive(cljs.core.cst$kw$derefable.cljs$core$IFn$_invoke$arity$1(G__14440),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14440,cljs.core.cst$kw$derefable),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Not an IDeref: %s",cljs.core.array_seq([schema__$1], 0))));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || (x.cljs$core$IAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14451,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14453 = (((k14451 instanceof cljs.core.Keyword))?k14451.fqn:null);
switch (G__14453) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14451,else__7076__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Atomic{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$ = true;

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14450){
var self__ = this;
var G__14450__$1 = this;
return (new cljs.core.RecordIter((0),G__14450__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14450){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14454 = cljs.core.keyword_identical_QMARK_;
var expr__14455 = k__7081__auto__;
if(cljs.core.truth_((pred__14454.cljs$core$IFn$_invoke$arity$2 ? pred__14454.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__14455) : pred__14454.call(null,cljs.core.cst$kw$schema,expr__14455)))){
return (new schema.core.Atomic(G__14450,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14450),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14450){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__14450,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = true;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__12848__12849__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__12848__12849__auto__),cljs.core.cst$sym$atom_QMARK_);
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
var G__14457_14460 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(coll) : cljs.core.deref.call(null,coll));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14457_14460) : item_fn.call(null,G__14457_14460));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
var G__14458 = cljs.core.first(xs);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14458) : cljs.core.atom.call(null,G__14458));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.cst$sym$atom);
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__14452){
return (new schema.core.Atomic(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__14452),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14452,cljs.core.cst$kw$schema),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic(schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14462,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14464 = (((k14462 instanceof cljs.core.Keyword))?k14462.fqn:null);
switch (G__14464) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14462,else__7076__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.RequiredKey{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14461){
var self__ = this;
var G__14461__$1 = this;
return (new cljs.core.RecordIter((0),G__14461__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14461){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14465 = cljs.core.keyword_identical_QMARK_;
var expr__14466 = k__7081__auto__;
if(cljs.core.truth_((pred__14465.cljs$core$IFn$_invoke$arity$2 ? pred__14465.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$k,expr__14466) : pred__14465.call(null,cljs.core.cst$kw$k,expr__14466)))){
return (new schema.core.RequiredKey(G__14461,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14461),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14461){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__14461,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__14463){
return (new schema.core.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__14463),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14463,cljs.core.cst$kw$k),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14470,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14472 = (((k14470 instanceof cljs.core.Keyword))?k14470.fqn:null);
switch (G__14472) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14470,else__7076__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.OptionalKey{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14469){
var self__ = this;
var G__14469__$1 = this;
return (new cljs.core.RecordIter((0),G__14469__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14469){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14473 = cljs.core.keyword_identical_QMARK_;
var expr__14474 = k__7081__auto__;
if(cljs.core.truth_((pred__14473.cljs$core$IFn$_invoke$arity$2 ? pred__14473.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$k,expr__14474) : pred__14473.call(null,cljs.core.cst$kw$k,expr__14474)))){
return (new schema.core.OptionalKey(G__14469,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14469),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14469){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__14469,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__14471){
return (new schema.core.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__14471),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14471,cljs.core.cst$kw$k),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Bad explicit key: %s",cljs.core.array_seq([ks], 0))));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__6459__auto__ = schema.core.required_key_QMARK_(ks);
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
return schema.core.optional_key_QMARK_(ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14478,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14480 = (((k14478 instanceof cljs.core.Keyword))?k14478.fqn:null);
switch (G__14480) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14478,else__7076__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.MapEntry{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14477){
var self__ = this;
var G__14477__$1 = this;
return (new cljs.core.RecordIter((0),G__14477__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_schema,cljs.core.cst$kw$val_DASH_schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key_DASH_schema,null,cljs.core.cst$kw$val_DASH_schema,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14477){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14481 = cljs.core.keyword_identical_QMARK_;
var expr__14482 = k__7081__auto__;
if(cljs.core.truth_((pred__14481.cljs$core$IFn$_invoke$arity$2 ? pred__14481.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$key_DASH_schema,expr__14482) : pred__14481.call(null,cljs.core.cst$kw$key_DASH_schema,expr__14482)))){
return (new schema.core.MapEntry(G__14477,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14481.cljs$core$IFn$_invoke$arity$2 ? pred__14481.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$val_DASH_schema,expr__14482) : pred__14481.call(null,cljs.core.cst$kw$val_DASH_schema,expr__14482)))){
return (new schema.core.MapEntry(self__.key_schema,G__14477,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14477),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_schema,self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$val_DASH_schema,self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14477){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__14477,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element(true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
var G__14484_14491 = cljs.core.key(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14484_14491) : item_fn.call(null,G__14484_14491));

return e;
});})(this$__$1))
),schema.spec.collection.one_element(true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
var G__14485_14492 = cljs.core.val(e);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14485_14492) : item_fn.call(null,G__14485_14492));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__14486,p__14487,_){
var vec__14488 = p__14486;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14488,(0),null);
var vec__14489 = p__14487;
var xk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14489,(0),null);
var xv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14489,(1),null);
var temp__4423__auto__ = schema.utils.error_val(xk);
if(cljs.core.truth_(temp__4423__auto__)){
var k_err = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,cljs.core.cst$sym$invalid_DASH_key], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val(xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.val_schema)),schema.core.explain(self__.key_schema)),cljs.core.cst$sym$map_DASH_entry);
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$key_DASH_schema,cljs.core.cst$sym$val_DASH_schema], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__14479){
return (new schema.core.MapEntry(cljs.core.cst$kw$key_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__14479),cljs.core.cst$kw$val_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__14479),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14479,cljs.core.cst$kw$key_DASH_schema,cljs.core.array_seq([cljs.core.cst$kw$val_DASH_schema], 0)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(schema.core.specific_key_QMARK_,cljs.core.keys(map_schema));
if((cljs.core.count(key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("More than one non-optional/required key schemata: %s",cljs.core.array_seq([cljs.core.vec(key_schemata)], 0))));
}

return cljs.core.first(key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explicit_schema_key(kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_(kspec))?cljs.core.cst$sym$required_DASH_key:(cljs.core.truth_(schema.core.optional_key_QMARK_(kspec))?cljs.core.cst$sym$optional_DASH_key:null)));
}
} else {
return schema.core.explain(kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema(this$);
var duplicate_keys_14522 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain_kspec,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (extra_keys_schema){
return (function (p1__14493_SHARP_){
return (cljs.core.count(p1__14493_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals(cljs.core.group_by(schema.core.explicit_schema_key,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_(duplicate_keys_14522)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Schema has multiple variants of the same explicit key: %s",cljs.core.array_seq([duplicate_keys_14522], 0))));
}

return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__7231__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__14508(s__14509){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__14509__$1 = s__14509;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14509__$1);
if(temp__4425__auto__){
var s__14509__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14509__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14509__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14511 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14510 = (0);
while(true){
if((i__14510 < size__7230__auto__)){
var vec__14518 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14510);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14518,(1),null);
cljs.core.chunk_append(b__14511,(function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (i__14510,rk,required_QMARK_,vec__14518,k,v,c__7229__auto__,size__7230__auto__,b__14511,s__14509__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__14519_14523 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14519_14523) : item_fn.call(null,G__14519_14523));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(i__14510,rk,required_QMARK_,vec__14518,k,v,c__7229__auto__,size__7230__auto__,b__14511,s__14509__$2,temp__4425__auto__,extra_keys_schema))
);
})());

var G__14524 = (i__14510 + (1));
i__14510 = G__14524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14511),schema$core$map_elements_$_iter__14508(cljs.core.chunk_rest(s__14509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14511),null);
}
} else {
var vec__14520 = cljs.core.first(s__14509__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14520,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14520,(1),null);
return cljs.core.cons((function (){var rk = schema.core.explicit_schema_key(k);
var required_QMARK_ = schema.core.required_key_QMARK_(k);
return schema.spec.collection.one_element(required_QMARK_,schema.core.map_entry(schema.core.eq(rk),v),((function (rk,required_QMARK_,vec__14520,k,v,s__14509__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find(m,rk);
if(cljs.core.truth_(e)){
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(e) : item_fn.call(null,e));
} else {
if(cljs.core.truth_(required_QMARK_)){
var G__14521_14525 = schema.utils.error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,cljs.core.cst$sym$missing_DASH_required_DASH_key], null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14521_14525) : item_fn.call(null,G__14521_14525));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__14520,k,v,s__14509__$2,temp__4425__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__14508(cljs.core.rest(s__14509__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__7231__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(schema.core.map_entry,cljs.core.find(this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts),(function (){var iter__7231__auto__ = (function schema$core$map_error_$_iter__14536(s__14537){
return (new cljs.core.LazySeq(null,(function (){
var s__14537__$1 = s__14537;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14537__$1);
if(temp__4425__auto__){
var s__14537__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14537__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14537__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14539 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14538 = (0);
while(true){
if((i__14538 < size__7230__auto__)){
var vec__14544 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14538);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14544,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14544,(1),null);
cljs.core.chunk_append(b__14539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null));

var G__14546 = (i__14538 + (1));
i__14538 = G__14546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14539),schema$core$map_error_$_iter__14536(cljs.core.chunk_rest(s__14537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14539),null);
}
} else {
var vec__14545 = cljs.core.first(s__14537__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$sym$disallowed_DASH_key], null),schema$core$map_error_$_iter__14536(cljs.core.rest(s__14537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7231__auto__(extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$,cljs.core.map_QMARK_,(function (p1__12848__12849__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__12848__12849__auto__),cljs.core.cst$sym$map_QMARK_);
})),(function (p1__14547_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,p1__14547_SHARP_);
}),schema.core.map_elements(this$),schema.core.map_error());
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7231__auto__ = (function schema$core$map_explain_$_iter__14558(s__14559){
return (new cljs.core.LazySeq(null,(function (){
var s__14559__$1 = s__14559;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14559__$1);
if(temp__4425__auto__){
var s__14559__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14559__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14559__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14561 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14560 = (0);
while(true){
if((i__14560 < size__7230__auto__)){
var vec__14566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14560);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14566,(1),null);
cljs.core.chunk_append(b__14561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null));

var G__14568 = (i__14560 + (1));
i__14560 = G__14568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14561),schema$core$map_explain_$_iter__14558(cljs.core.chunk_rest(s__14559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14561),null);
}
} else {
var vec__14567 = cljs.core.first(s__14559__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14567,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec(k),schema.core.explain(v)], null),schema$core$map_explain_$_iter__14558(cljs.core.rest(s__14559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7231__auto__(this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec(this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain(this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_("Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__12848__12849__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__12848__12849__auto__),cljs.core.cst$sym$set_QMARK_);
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(cljs.core.first(this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(cljs.core.first(this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14570,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14572 = (((k14570 instanceof cljs.core.Keyword))?k14570.fqn:null);
switch (G__14572) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14570,else__7076__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Queue{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14569){
var self__ = this;
var G__14569__$1 = this;
return (new cljs.core.RecordIter((0),G__14569__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$schema,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14569){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14573 = cljs.core.keyword_identical_QMARK_;
var expr__14574 = k__7081__auto__;
if(cljs.core.truth_((pred__14573.cljs$core$IFn$_invoke$arity$2 ? pred__14573.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__14574) : pred__14573.call(null,cljs.core.cst$kw$schema,expr__14574)))){
return (new schema.core.Queue(G__14569,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14569),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14569){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__14569,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__12848__12849__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__12848__12849__auto__),cljs.core.cst$sym$queue_QMARK_);
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.cst$sym$queue);
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__14571){
return (new schema.core.Queue(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__14571),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14571,cljs.core.cst$kw$schema),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14578,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14580 = (((k14578 instanceof cljs.core.Keyword))?k14578.fqn:null);
switch (G__14580) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14578,else__7076__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.One{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14577){
var self__ = this;
var G__14577__$1 = this;
return (new cljs.core.RecordIter((0),G__14577__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$optional_QMARK_,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14577){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14581 = cljs.core.keyword_identical_QMARK_;
var expr__14582 = k__7081__auto__;
if(cljs.core.truth_((pred__14581.cljs$core$IFn$_invoke$arity$2 ? pred__14581.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__14582) : pred__14581.call(null,cljs.core.cst$kw$schema,expr__14582)))){
return (new schema.core.One(G__14577,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14581.cljs$core$IFn$_invoke$arity$2 ? pred__14581.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optional_QMARK_,expr__14582) : pred__14581.call(null,cljs.core.cst$kw$optional_QMARK_,expr__14582)))){
return (new schema.core.One(self__.schema,G__14577,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14581.cljs$core$IFn$_invoke$arity$2 ? pred__14581.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__14582) : pred__14581.call(null,cljs.core.cst$kw$name,expr__14582)))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__14577,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14577),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$optional_QMARK_,self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14577){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__14577,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$optional_QMARK_,cljs.core.cst$sym$name], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__14579){
return (new schema.core.One(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__14579),cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(G__14579),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14579),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14579,cljs.core.cst$kw$schema,cljs.core.array_seq([cljs.core.cst$kw$optional_QMARK_,cljs.core.cst$kw$name], 0)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__14590 = cljs.core.split_with((function (p1__14585_SHARP_){
return ((p1__14585_SHARP_ instanceof schema.core.One)) && (cljs.core.not(cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__14585_SHARP_)));
}),s);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14590,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14590,(1),null);
var vec__14591 = cljs.core.split_with(((function (vec__14590,required,more){
return (function (p1__14586_SHARP_){
var and__6447__auto__ = (p1__14586_SHARP_ instanceof schema.core.One);
if(and__6447__auto__){
return cljs.core.cst$kw$optional_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__14586_SHARP_);
} else {
return and__6447__auto__;
}
});})(vec__14590,required,more))
,more);
var optional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14591,(0),null);
var more__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14591,(1),null);
if(((cljs.core.count(more__$1) <= (1))) && (cljs.core.every_QMARK_(((function (vec__14590,required,more,vec__14591,optional,more__$1){
return (function (p1__14587_SHARP_){
return !((p1__14587_SHARP_ instanceof schema.core.One));
});})(vec__14590,required,more,vec__14591,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("%s is not a valid sequence schema; %s%s%s",cljs.core.array_seq([s,"a valid sequence schema consists of zero or more `one` elements, ","followed by zero or more `optional` elements, followed by an optional ","schema that will match the remaining elements."], 0))));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,optional),cljs.core.first(more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec(schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_(x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__14592_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14592_SHARP_),cljs.core.cst$sym$sequential_QMARK_);
});})(this$__$1))
),cljs.core.vec,(function (){var vec__14593 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14593,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14593,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__7231__auto__ = ((function (vec__14593,singles,multi,this$__$1){
return (function schema$core$iter__14594(s__14595){
return (new cljs.core.LazySeq(null,((function (vec__14593,singles,multi,this$__$1){
return (function (){
var s__14595__$1 = s__14595;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14595__$1);
if(temp__4425__auto__){
var s__14595__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14595__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14595__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14597 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14596 = (0);
while(true){
if((i__14596 < size__7230__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14596);
cljs.core.chunk_append(b__14597,(function (){var required_QMARK_ = cljs.core.not(s.optional_QMARK_);
return schema.spec.collection.one_element(required_QMARK_,schema.core.named(s.schema,s.name),((function (i__14596,required_QMARK_,s,c__7229__auto__,size__7230__auto__,b__14597,s__14595__$2,temp__4425__auto__,vec__14593,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq(x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
var G__14604_14615 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14604_14615) : item_fn.call(null,G__14604_14615));

return cljs.core.rest(x__$1);
} else {
if(required_QMARK_){
var G__14605_14616 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (i__14596,temp__4423__auto__,required_QMARK_,s,c__7229__auto__,size__7230__auto__,b__14597,s__14595__$2,temp__4425__auto__,vec__14593,singles,multi,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,s.name),cljs.core.cst$sym$present_QMARK_);
});})(i__14596,temp__4423__auto__,required_QMARK_,s,c__7229__auto__,size__7230__auto__,b__14597,s__14595__$2,temp__4425__auto__,vec__14593,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14605_14616) : item_fn.call(null,G__14605_14616));
} else {
}

return null;
}
});})(i__14596,required_QMARK_,s,c__7229__auto__,size__7230__auto__,b__14597,s__14595__$2,temp__4425__auto__,vec__14593,singles,multi,this$__$1))
);
})());

var G__14617 = (i__14596 + (1));
i__14596 = G__14617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14597),schema$core$iter__14594(cljs.core.chunk_rest(s__14595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14597),null);
}
} else {
var s = cljs.core.first(s__14595__$2);
return cljs.core.cons((function (){var required_QMARK_ = cljs.core.not(s.optional_QMARK_);
return schema.spec.collection.one_element(required_QMARK_,schema.core.named(s.schema,s.name),((function (required_QMARK_,s,s__14595__$2,temp__4425__auto__,vec__14593,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq(x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
var G__14606_14618 = cljs.core.first(x__$1);
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14606_14618) : item_fn.call(null,G__14606_14618));

return cljs.core.rest(x__$1);
} else {
if(required_QMARK_){
var G__14607_14619 = schema.utils.error(schema.utils.make_ValidationError(s.schema,cljs.core.cst$kw$schema$core_SLASH_missing,(new cljs.core.Delay(((function (temp__4423__auto__,required_QMARK_,s,s__14595__$2,temp__4425__auto__,vec__14593,singles,multi,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,s.name),cljs.core.cst$sym$present_QMARK_);
});})(temp__4423__auto__,required_QMARK_,s,s__14595__$2,temp__4425__auto__,vec__14593,singles,multi,this$__$1))
,null)),null));
(item_fn.cljs$core$IFn$_invoke$arity$1 ? item_fn.cljs$core$IFn$_invoke$arity$1(G__14607_14619) : item_fn.call(null,G__14607_14619));
} else {
}

return null;
}
});})(required_QMARK_,s,s__14595__$2,temp__4425__auto__,vec__14593,singles,multi,this$__$1))
);
})(),schema$core$iter__14594(cljs.core.rest(s__14595__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14593,singles,multi,this$__$1))
,null,null));
});})(vec__14593,singles,multi,this$__$1))
;
return iter__7231__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements(multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.utils.error_val,elts);
if(cljs.core.seq(extra)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(head,schema.utils.error_val(schema.utils.error(schema.utils.make_ValidationError(null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(extra)),cljs.core.cst$sym$has_DASH_extra_DASH_elts_QMARK_);
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__14608 = schema.core.parse_sequence_schema(this$__$1);
var singles = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14608,(0),null);
var multi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14608,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__7231__auto__ = ((function (vec__14608,singles,multi,this$__$1){
return (function schema$core$iter__14609(s__14610){
return (new cljs.core.LazySeq(null,((function (vec__14608,singles,multi,this$__$1){
return (function (){
var s__14610__$1 = s__14610;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__14610__$1);
if(temp__4425__auto__){
var s__14610__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14610__$2)){
var c__7229__auto__ = cljs.core.chunk_first(s__14610__$2);
var size__7230__auto__ = cljs.core.count(c__7229__auto__);
var b__14612 = cljs.core.chunk_buffer(size__7230__auto__);
if((function (){var i__14611 = (0);
while(true){
if((i__14611 < size__7230__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7229__auto__,i__14611);
cljs.core.chunk_append(b__14612,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one)));

var G__14620 = (i__14611 + (1));
i__14611 = G__14620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14612),schema$core$iter__14609(cljs.core.chunk_rest(s__14610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14612),null);
}
} else {
var s = cljs.core.first(s__14610__$2);
return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?cljs.core.cst$sym$optional:cljs.core.cst$sym$one)),schema$core$iter__14609(cljs.core.rest(s__14610__$2)));
}
} else {
return null;
}
break;
}
});})(vec__14608,singles,multi,this$__$1))
,null,null));
});})(vec__14608,singles,multi,this$__$1))
;
return iter__7231__auto__(singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain(multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(first_schema,first_name),schema.core.one(second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14625,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14627 = (((k14625 instanceof cljs.core.Keyword))?k14625.fqn:null);
switch (G__14627) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14625,else__7076__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.Record{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14624){
var self__ = this;
var G__14624__$1 = this;
return (new cljs.core.RecordIter((0),G__14624__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$klass,cljs.core.cst$kw$schema], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$klass,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14624){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14628 = cljs.core.keyword_identical_QMARK_;
var expr__14629 = k__7081__auto__;
if(cljs.core.truth_((pred__14628.cljs$core$IFn$_invoke$arity$2 ? pred__14628.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$klass,expr__14629) : pred__14628.call(null,cljs.core.cst$kw$klass,expr__14629)))){
return (new schema.core.Record(G__14624,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14628.cljs$core$IFn$_invoke$arity$2 ? pred__14628.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schema,expr__14629) : pred__14628.call(null,cljs.core.cst$kw$schema,expr__14629)))){
return (new schema.core.Record(self__.klass,G__14624,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14624),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$klass,self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14624){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__14624,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec((function (){var p = schema.spec.core.precondition(this$__$1,((function (this$__$1){
return (function (p1__14621_SHARP_){
return (p1__14621_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__14622_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14622_SHARP_),self__.klass),cljs.core.cst$sym$instance_QMARK_);
});})(this$__$1))
);
var temp__4423__auto__ = cljs.core.cst$kw$extra_DASH_validator_DASH_fn.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(p,schema.spec.core.precondition(this$__$1,evf,((function (evf,temp__4423__auto__,p,this$__$1){
return (function (p1__14623_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__14623_SHARP_),cljs.core.cst$sym$passes_DASH_extra_DASH_validation_QMARK_);
});})(evf,temp__4423__auto__,p,this$__$1))
));
} else {
return p;
}
})(),cljs.core.cst$kw$constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(this$__$1)),schema.core.map_elements(self__.schema),schema.core.map_error());
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(self__.schema)),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.klass], 0)))),cljs.core.cst$sym$record);
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$klass,cljs.core.cst$sym$schema], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__14626){
return (new schema.core.Record(cljs.core.cst$kw$klass.cljs$core$IFn$_invoke$arity$1(G__14626),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__14626),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14626,cljs.core.cst$kw$klass,cljs.core.array_seq([cljs.core.cst$kw$schema], 0)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_(schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected map, got %s",cljs.core.array_seq([schema.utils.type_of(schema__$1)], 0))));
}

return cljs.core.with_meta((new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constructor,map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__14635 = cljs.core.split_with((function (p1__14632_SHARP_){
return (p1__14632_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14635,(0),null);
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14635,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14635,required,more){
return (function (p1__14633_SHARP_){
return schema.core.explain(p1__14633_SHARP_.schema);
});})(vec__14635,required,more))
,required),((cljs.core.seq(more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
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
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7073__auto__,k__7074__auto__){
var self__ = this;
var this__7073__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7073__auto____$1,k__7074__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7075__auto__,k14637,else__7076__auto__){
var self__ = this;
var this__7075__auto____$1 = this;
var G__14639 = (((k14637 instanceof cljs.core.Keyword))?k14637.fqn:null);
switch (G__14639) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14637,else__7076__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7087__auto__,writer__7088__auto__,opts__7089__auto__){
var self__ = this;
var this__7087__auto____$1 = this;
var pr_pair__7090__auto__ = ((function (this__7087__auto____$1){
return (function (keyval__7091__auto__){
return cljs.core.pr_sequential_writer(writer__7088__auto__,cljs.core.pr_writer,""," ","",opts__7089__auto__,keyval__7091__auto__);
});})(this__7087__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7088__auto__,pr_pair__7090__auto__,"#schema.core.FnSchema{",", ","}",opts__7089__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14636){
var self__ = this;
var G__14636__$1 = this;
return (new cljs.core.RecordIter((0),G__14636__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$output_DASH_schema,cljs.core.cst$kw$input_DASH_schemas], null),cljs.core._iterator(self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7071__auto__){
var self__ = this;
var this__7071__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7067__auto__){
var self__ = this;
var this__7067__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7077__auto__){
var self__ = this;
var this__7077__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7068__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7069__auto__,other__7070__auto__){
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

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7082__auto__,k__7083__auto__){
var self__ = this;
var this__7082__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$output_DASH_schema,null,cljs.core.cst$kw$input_DASH_schemas,null], null), null),k__7083__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7082__auto____$1),self__.__meta),k__7083__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7083__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7080__auto__,k__7081__auto__,G__14636){
var self__ = this;
var this__7080__auto____$1 = this;
var pred__14640 = cljs.core.keyword_identical_QMARK_;
var expr__14641 = k__7081__auto__;
if(cljs.core.truth_((pred__14640.cljs$core$IFn$_invoke$arity$2 ? pred__14640.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$output_DASH_schema,expr__14641) : pred__14640.call(null,cljs.core.cst$kw$output_DASH_schema,expr__14641)))){
return (new schema.core.FnSchema(G__14636,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14640.cljs$core$IFn$_invoke$arity$2 ? pred__14640.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$input_DASH_schemas,expr__14641) : pred__14640.call(null,cljs.core.cst$kw$input_DASH_schemas,expr__14641)))){
return (new schema.core.FnSchema(self__.output_schema,G__14636,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7081__auto__,G__14636),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7085__auto__){
var self__ = this;
var this__7085__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$output_DASH_schema,self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$input_DASH_schemas,self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7072__auto__,G__14636){
var self__ = this;
var this__7072__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__14636,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7078__auto__,entry__7079__auto__){
var self__ = this;
var this__7078__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7079__auto__)){
return cljs.core._assoc(this__7078__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7079__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7078__auto____$1,entry__7079__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec(schema.spec.core.precondition(this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__12848__12849__auto__){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__12848__12849__auto__),cljs.core.cst$sym$ifn_QMARK_);
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.input_schemas) > (1))){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT__STAR_,schema.core.explain(self__.output_schema),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$_EQ__GT_,schema.core.explain(self__.output_schema),schema.core.explain_input_schema(cljs.core.first(self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$output_DASH_schema,cljs.core.cst$sym$input_DASH_schemas], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__7107__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__7107__auto__,writer__7108__auto__){
return cljs.core._write(writer__7108__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__14638){
return (new schema.core.FnSchema(cljs.core.cst$kw$output_DASH_schema.cljs$core$IFn$_invoke$arity$1(G__14638),cljs.core.cst$kw$input_DASH_schemas.cljs$core$IFn$_invoke$arity$1(G__14638),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14638,cljs.core.cst$kw$output_DASH_schema,cljs.core.array_seq([cljs.core.cst$kw$input_DASH_schemas], 0)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq(input_schema)){
if((cljs.core.last(input_schema) instanceof schema.core.One)){
return cljs.core.count(input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq(input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_("Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_("Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(schema__$1,cljs.core.assoc,cljs.core.cst$kw$name,name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,cljs.core.cst$kw$schema,schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_(f)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Non-function %s",cljs.core.array_seq([schema.utils.type_of(f)], 0))));
}

var or__6459__auto__ = schema.utils.class_schema(schema.utils.fn_schema_bearer(f));
if(cljs.core.truth_(or__6459__auto__)){
return or__6459__auto__;
} else {
var m__12545__auto__ = cljs.core.meta(f);
var k__12546__auto__ = cljs.core.cst$kw$schema;
var temp__4423__auto__ = cljs.core.find(m__12545__auto__,k__12546__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__12547__auto__ = temp__4423__auto__;
return cljs.core.val(pair__12547__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k__12546__auto__,m__12545__auto__], 0))));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(schema.utils.max_value_length,max_length) : cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length));
});
