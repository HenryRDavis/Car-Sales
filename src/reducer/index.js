const initialState = {
    additionalPrice: 0,
    car: {
      price: 360420,
      name: 'Lightning McQueen',
      image:
        'https://i.pinimg.com/originals/ab/e8/88/abe888fb17f610d683c940ed14fb1105.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'Vroom vroom', price: 135 },
      { id: 2, name: 'Car stuff', price: 88 },
      { id: 3, name: 'Kachow', price: 199 },
      { id: 4, name: 'Red', price: 250 },
      { id: 5, name: 'Lightning', price: 1000 },
      { id: 6, name: 'I am Speed', price: 5000 }
    ]
  };

function reducer (state = initialState, action) {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            action.payload
          ]
        }
      }
    default:
      return state
  }
}
export default reducer;