// This file is part of leanes-server.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.

const program = require('commander')
const path = process.env.ENV === 'development' ? "./dev" : "./prod"
const Module = require(path).default

async function startup(Module, app) {
  const migrationsCollection = app.facade.getProxy(Module.NS.MIGRATIONS)
  const voDB = await migrationsCollection.adapter.db
  const qualifiedName = migrationsCollection.collectionFullName()
  if ((await voDB.listCollections({name: qualifiedName}).toArray()).length === 0) {
    const collection = await voDB.createCollection(qualifiedName)
    await collection.ensureIndex({id: 1}, {unique: true})
  }
}

async function rollback({until, steps}) {
  app = Module.NS.MainApplication.new(Module.NS.LIGHTWEIGHT)
  app.start()
  await startup(Module, app)
  await app.rollback({until, steps: Number(steps)})
  await app.finish()
}

const command = program
  .option('--until <until>', 'migration name which used as last')
  .option('--steps <steps>', 'count of migrations which will be rollbacked')
command.unknownOption = () => {}
command.description('Migrate schema of LeanES app')
command.action(rollback)
program.parse(process.argv)
