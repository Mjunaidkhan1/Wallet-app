const INITIAL_STATE = {
  loginData: [],
  // wishColor: 'silver'
};
const LoginRed = (state = INITIAL_STATE, action) => {
  console.log(action.type, 'action.type');
  console.log(action.payload, 'action.payload');
  switch (action.type) {
    case 'LOGIN_RED':
      console.log(state, 'state');
      return {
        ...state,
        loginData: [action.payload],
      };

    default:
      return state;
  }
};
export default LoginRed;
