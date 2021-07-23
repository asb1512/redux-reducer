export function manageFriends(state = {
  friends: []
}, action) {
  switch(action.type) {
    case "ADD_FRIEND":
      return (
        {...state,
          friends: [
          ...state.friends,
          action.friend
          ]
        }
      )
    case "REMOVE_FRIEND":
        return (
          
        )
    default:
      return state;
  }
}
