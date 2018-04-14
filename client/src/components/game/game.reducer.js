const game = function(previousState = {}, action) {
    switch (action.type) {
      case "MULTIPLAYER":
        return { ...previousState,
          screen: "lobby"
      };
      case "MENU":
        return { ...previousState,
          screen: "menu"
      };
      default:
        return previousState;
    }
  }
  
  export default game;