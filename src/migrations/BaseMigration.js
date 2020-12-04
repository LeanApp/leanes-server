

export default (Module) => {
  const {
    Migration,
    MongoMigrationMixin,
    initialize, partOf, meta, nameBy, method, mixin
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(MongoMigrationMixin)
  class BaseMigration extends Migration {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method static change() {}
  }
}
