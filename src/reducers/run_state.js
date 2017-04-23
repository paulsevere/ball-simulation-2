export default function(state = true, action) {
  switch (action.type) {
    case "PAUSE":
      return !state;
    default:
      return state;
  }
}
