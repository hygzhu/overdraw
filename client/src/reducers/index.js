import { combineReducers } from "redux";

// Import reducers:
import menu from "../components/menu/menu.reducer";
import game from "../components/game/game.reducer";
import lobby from "../components/lobby/lobby.reducer";
import canvas from "../components/canvas/canvas.reducer";

const rootReducer = combineReducers({
  game, menu, lobby, canvas
})

export default rootReducer;
