
export default function(state, action) {
  console.log(action)
  switch(action.type) {
    case 'UPDATE':
      return action.payload;
    default: 
      return state;
  }
}