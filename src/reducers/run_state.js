export default function(state = false, action) {
  switch (action.type) {
    case 'PAUSE':
      return !state;
    default:
      return state;
  }
}
