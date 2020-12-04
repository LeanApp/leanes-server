
const path = process.env.ENV === 'development' ? "./dev" : "./app"
const Module = require(path).default

const initialState = {};
const app = Module.NS.MainApplication.new(initialState);
app.start();
const { ERROR, DEBUG, LEVELS, SEND_TO_LOG } = Module.NS.Pipes.NS.LogMessage;
app.setLogLevelMethod(DEBUG);

app.send(
  SEND_TO_LOG, 'Hello world', LEVELS[DEBUG]
);
