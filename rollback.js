
const program = require('commander')
const path = process.env.ENV === 'development' ? "./dev" : "./app"
const Module = require(path).default

async function startup(Module, app) {
  const migrationsCollection = app.facade.getProxy(Module.NS.MIGRATIONS)
  const voDB = await migrationsCollection.adapter.connection
  const qualifiedName = migrationsCollection.collectionFullName()
  if ((await voDB.listCollections({name: qualifiedName}).toArray()).length === 0) {
    const collection = await voDB.createCollection(qualifiedName)
    await collection.ensureIndex({id: 1}, {unique: true})
  }
}

async function rollback({until, steps}) {
  console.log('?>?>?? rollback options', until, steps);
  app = Module.NS.MainApplication.new(Module.NS.LIGHTWEIGHT)
  app.start()
  await startup(Module, app)
  await app.rollback({until, steps})
  await app.finish()
}
console.log('?>?>?? rollback', process.argv);
// rollback()
const command = program
  .option('--until <until>', 'migration name which used as last')
  .option('--steps <steps>', 'count of migrations which will be rollbacked')
command.unknownOption = () => {}
command.description('Migrate schema of LeanES app')
command.action(rollback)
program.parse(process.argv)
