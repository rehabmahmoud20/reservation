const state = {
  myHotels: [],
  hotelItem: null,
};
const getters = {
  hotels: (state) => {
    return [...state.myHotels];
  },
  hotel: (state) => {
    return { ...state.hotelItem };
  },
};
const mutations = {
  handleAddToHotels: (state, payLoad) => {
    let index = state.myHotels.findIndex((item) => item == payLoad);
    if (index < 0) {
      state.myHotels.push(payLoad);
    }
  },
  setHotel: (state, payLoad) => {
    state.hotelItem = payLoad;
  },
  handleRemoveHotel: (state, payLoad) => {
    const hotels = state.myHotels.filter((hotel) => hotel.id !== payLoad);
    state.myHotels = hotels;
  },
};

const actions = {
  handleAddToHotels: ({ commit }, payLoad) => {
    commit("handleAddToHotels", payLoad);
  },
  handleRemoveHotel: ({ commit }, payLoad) => {
    commit("handleRemoveHotel", payLoad);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
