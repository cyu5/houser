const initialState = {
  houses: [],
  name: "",
  address: "",
  city: "",
  state: "",
  zip: 0,
  img: "",
  mortgage: 0,
  rent: 0
};

const UPDATE_HOUSES = `UPDATE_HOUSES`;
const UPDATE_INPUT = `UPDATE_INPUT`;

function reducer(state = initialState, action) {
  const { type, houses, prop, input } = action;
  switch (type) {
    case UPDATE_HOUSES:
      return Object.assign({}, state, { houses: houses });

    case UPDATE_INPUT:
      console.log(`reducer on update-input. input: `, { [prop]: input });
      return Object.assign({}, state, { [prop]: input });

    default:
      return state;
  }
}

export function updateHouses(houses) {
  return {
    type: UPDATE_HOUSES,
    houses
  };
}

export function updateInput(input, prop) {
  console.log(`action create trigger on updateInput. action: `, {
    type: UPDATE_INPUT,
    input,
    prop
  });
  return {
    type: UPDATE_INPUT,
    input,
    prop
  };
}

export default reducer;
