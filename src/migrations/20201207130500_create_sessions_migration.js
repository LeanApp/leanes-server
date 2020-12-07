

export default (Module) => {
  const {
    BaseMigration,
    initialize, partOf, nameBy, meta, method
  } = Module.NS;

  @initialize
  @partOf(Module)
  class CreateSessionsMigration extends BaseMigration {
    @meta static object = {};
    @method static change() {
      const name = 'sessions'
      this.createCollection(name)
      this.addField(name, 'id', 'string')
      this.addField(name, 'type', 'string')
      this.addTimestamps(name)

      this.addField(name, 'uid', 'string')
      this.addField(name, 'expires', 'date')

      this.addIndex(name, ['id'], {type: 'hash', unique: true})
      this.addIndex(name, ['uid'], {type: 'hash'})
    }
  }
}
