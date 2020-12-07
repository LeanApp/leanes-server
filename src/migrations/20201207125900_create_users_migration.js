

export default (Module) => {
  const {
    BaseMigration,
    initialize, partOf, nameBy, meta, method
  } = Module.NS;

  @initialize
  @partOf(Module)
  class CreateUsersMigration extends BaseMigration {
    @meta static object = {};
    @method static change() {
      const name = 'users'
      this.createCollection(name)
      this.addField(name, 'id', 'string')
      this.addField(name, 'type', 'string')
      this.addTimestamps(name)

      this.addField(name, 'email', 'string')
      this.addField(name, 'email_verified', 'boolean')
      this.addField(name, 'name', 'string')
      this.addField(name, 'nickname', 'string')
      this.addField(name, 'picture', 'string')
      this.addField(name, 'sub', 'string')
      this.addField(name, 'salt', 'string')
      this.addField(name, 'password_hash', 'string')
      this.addField(name, 'isAdmin', 'boolean')
      this.addField(name, 'isLocked', 'boolean')

      this.addIndex(name, ['id'], {type: 'hash', unique: true})
      this.addIndex(name, ['sub'], {type: 'hash', unique: true})
      this.addIndex(name, ['email'], {type: 'hash', unique: true})
      this.addIndex(name, ['nickname'], {type: 'hash', unique: true})
    }
  }
}
