

export default (Module) => {
  const {
    Record,
    TimestampsRecordMixin,
    initialize, partOf, meta, nameBy, mixin, attribute
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(TimestampsRecordMixin)
  class RequestResultRecord extends Record {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @attribute({ type: 'string' }) body;
    @attribute({ type: 'json' }) headers;
    @attribute({ type: 'number' }) status;
    @attribute({ type: 'string' }) message;
  }
}
