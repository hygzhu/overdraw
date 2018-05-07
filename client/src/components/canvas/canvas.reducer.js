const canvas = function(previousState = {}, action) {
    switch (action.type) {
      case "MOUSEMOVE":
        return {...previousState,
          x: action.x,
          y: action.y
        }
      case "MOUSECLICK":
      return {...previousState,
        drawing: action.drawing
      }
      case "SETCONTEXT":
      return {...previousState,
        context: action.context
      }
      default:
        return previousState;
    }
  }
  
  export default canvas;