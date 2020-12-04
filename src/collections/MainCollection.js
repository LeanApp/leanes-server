

export default (Module) => {
  const {
    Collection,
    MongoCollectionMixin,
    GenerateUuidIdMixin,
    initialize, partOf, meta, nameBy, mixin
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(MongoCollectionMixin)
  @mixin(GenerateUuidIdMixin)
  class MainCollection extends Collection {
    @nameBy static  __filename = __filename;
    @meta static object = {};
  }
}
