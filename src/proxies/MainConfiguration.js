

export default (Module) => {
  const {
    Configuration,
    initialize, partOf, meta, property, nameBy, mixin
  } = Module.NS;

  @initialize
  @partOf(Module)
  class MainConfiguration extends Configuration {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property get manifestPath(): string {
      return '../package.json';
    }

    @property get configPath(): string {
      return `../configs/${this.environment}`;
    }
  }
}
