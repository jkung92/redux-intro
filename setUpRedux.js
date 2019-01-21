let INITIAL_STATE = { mood: 'd(￣▽￣o)' };

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'happy':
      return { ...state, mood: '⊂◉‿◉つ' };
    case 'sad':
      return { ...state, mood: '(ಥ﹏ಥ)' };
    case 'angry':
      return { ...state, mood: 'ლಠ益ಠ)ლ' };
    case 'confused':
      return { ...state, mood: '(☉_☉)' };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);
