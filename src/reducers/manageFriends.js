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
      let friendIndex = state.friends.findIndex(obj => obj.id === action.id)

      return (
        {
          ...state,
          friends: [
            ...state.friends.slice(0, friendIndex),
            ...state.friends.slice(friendIndex + 1)
          ]
        }
      )
    default:
      return state;
  }
}
