

export default (Module) => {
  const {
    Collection,
    MongoCollectionMixin,
    initialize, partOf, meta, nameBy, mixin
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(MongoCollectionMixin)
  class MigrationsCollection extends Collection {
    @nameBy static  __filename = __filename;
    @meta static object = {};
  }
}
