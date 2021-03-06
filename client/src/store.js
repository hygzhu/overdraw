import { applyMiddleware, createStore } from "redux";
import io from "socket.io-client"
// Middleware:
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import socketIO from './middleware/socket-middleware'

// Reducers:
import rootReducer from "./reducers/index";

const initialState = {
      game: {
        screen: "menu"
      },
      lobby:{
        loading: false,
        messageLog: [],
        roomReady: false,
        ready: false,
        gameActive: false,
      },
      canvas:{
        drawing: false,
      }
};

const socket = io.connect('http://localhost:4001/', 
{ reconnection: false});

const middleware = applyMiddleware(thunkMiddleware, logger, socketIO(socket));
const store = createStore(rootReducer, initialState, middleware);

// makes an object of the form {USERJOINED: 'USERJOINED'}
// handlers for server messages
export const messageTypes = [
  'LOADROOM',
  'USERJOINED',
  'USERDISCONNECT',
  'JOINROOMFAILED',
  'MESSAGERECEIVED',
  'ROOMREADY',
  'ROUNDSTART',
  'UPDATEGAMESTATE',
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})


//Adds listeners to socket messages so they can be dispatched as actions
Object.keys(messageTypes).forEach(type => socket.on(type, (payload) => store.dispatch({ type, payload })));

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
