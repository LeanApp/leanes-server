
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

async function migrate({until}) {
  console.log('?>?>?? migrate options', until);
  app = Module.NS.MainApplication.new(Module.NS.LIGHTWEIGHT)
  app.start()
  await startup(Module, app)
  await app.migrate({until})
  await app.finish()
}
console.log('?>?>?? migrate', process.argv);
// migrate()
const command = program
  .option('--until <until>', 'migration name which used as last')
command.unknownOption = () => {}
command.description('Migrate schema of LeanES app')
command.action(migrate)
program.parse(process.argv)
