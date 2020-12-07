

export default (Module) => {
  const {
    Record,
    TimestampsRecordMixin,
    initialize, partOf, meta, nameBy, mixin, attribute
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(TimestampsRecordMixin)
  class SessionRecord extends Record {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @attribute({ type: 'string' }) uid;
    @attribute({ type: 'date' }) expires;
  }
}
