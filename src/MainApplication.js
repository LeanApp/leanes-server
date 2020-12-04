// This file is part of leanes-server.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.

console.log('>>>>QQQQ 888');

export default (Module) => {
  const {
    APPLICATION_PROXY,
    Pipes,
    Application,
    MigratifyApplicationMixin,
    initialize, partOf, meta, property, method, nameBy, mixin,
    Utils: { _ }
  } = Module.NS;

  const {
    LogMessage: { DEBUG },
    LogFilterMessage: { SET_LOG_LEVEL }
  } = Pipes.NS;

  @initialize
  @partOf(Module)
  @mixin(MigratifyApplicationMixin)
  class MainApplication extends Application {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property initialState: object = null;

    @method setLogLevelMethod(level: number): void {
      this.send(SET_LOG_LEVEL, level);
    }

    @method sendEvent(name, body, type = 'Event') {
      this.send(name, body, type);
    }

    @method setState(state): void {
      const appProxy = this.facade.getProxy(APPLICATION_PROXY);
      appProxy.setState(state);
    }

    @method getState(): object {
      const appProxy = this.facade.getProxy(APPLICATION_PROXY);
      return appProxy.getData();
    }

    constructor(data: ?(Symbol | object)) {
      console.log('>>>>QQQQ 999');
      const { ApplicationFacade } = Module.NS;
      const symbol = _.isSymbol(data)
        ? data
        : null;
      console.log('>>>>QQQQ 1010');
      super(Module.name, ApplicationFacade, symbol);
      console.log('>>>>QQQQ 1010+1');
      this.dispatch = this.sendEvent.bind(this);
      console.log('>>>>QQQQ 1010+2');
      if (!_.isSymbol(data) && _.isObject(data)) {
        console.log('>>>>QQQQ 1010+3');
        this.initialState = data;
        console.log('>>>>QQQQ 1010+4');
      }
    }
  }

  // console.log('><MMMMMMMMM ?? MainApplication, MainApplication', Module.name, Module.NS,  Module.NS.MainApplication);
}
console.log('>>>>QQQQ 888+');
