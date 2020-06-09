const initialState = { username: '', password: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_INFO':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
