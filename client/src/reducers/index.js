import { combineReducers } from "redux";

// Import reducers:
import menu from "../components/menu/menu.reducer";
import game from "../components/game/game.reducer";
import lobby from "../components/lobby/lobby.reducer";

const rootReducer = combineReducers({
  game, menu, lobby
})

export default rootReducer;
