export default function reducer(state, action) {
  const { name, prop, value } = action.payload;
  switch (action.type) {
    case 'VALUE_CHANGED':
      return {
        ...state,
        [name]: {
          ...state[name],
          value: value,
        },
      };
    case 'STYLE_CHANGED':
      return {
        ...state,
        [name]: {
          ...state[name],
          style: {
            ...state[name].style,
            [prop]: value,
          },
        },
      };
    default:
      return state;
  }
}
