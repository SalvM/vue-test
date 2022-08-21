import { cities } from "@/assets/Mocks";

export default {
    namespaced: true,
    state: {
      list: cities,
      query: ''
    },
    mutations: {
      changeQuery (state, searchText) {
          state.query = searchText
      },
    },
    getters: {
      getData (state) {
          return state.query.length >= 3 ? state.list.filter(city => city.includes(state.query?.toLowerCase())) : [];
      }
    }
  };