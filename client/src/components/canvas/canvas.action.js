export const mouseMove = (x, y) => {
  return {
    type: "MOUSEMOVE",
    x: x,
    y: y
  }
}

export const mouseClick = (status) => {
  return {
    type: "MOUSECLICK",
    drawing: status
  }
}

export const setContext = (context) => {
  return {
    type: "SETCONTEXT",
    context: context
  }
}