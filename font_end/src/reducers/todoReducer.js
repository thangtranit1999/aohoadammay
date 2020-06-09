const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACTION':
      return [...state, action.payload];
    default:
      return state;
  }
};
