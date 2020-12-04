

export default (Module) => {
  const {
    BaseMigration,
    initialize, partOf, nameBy, meta, method
  } = Module.NS;

  @initialize
  @partOf(Module)
  class CreateRequestResultsMigration extends BaseMigration {
    @meta static object = {};
    @method static change() {
      const name = 'request_results'
      this.createCollection(name)
      this.addField(name, 'id', 'string')
      this.addField(name, 'type', 'string')
      this.addTimestamps(name)

      this.addField(name, 'body', 'string')
      this.addField(name, 'headers', 'json')
      this.addField(name, 'status', 'number')
      this.addField(name, 'message', 'string')

      this.addIndex(name, ['id'], {type: 'hash', unique: true})
    }
  }
}
