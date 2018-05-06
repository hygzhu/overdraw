const canvas = function(previousState = {}, action) {
    switch (action.type) {
      case "MOUSEMOVE":
        return {...previousState,
          x: action.x,
          y: action.y
        }
      default:
        return previousState;
    }
  }
  
  export default canvas;