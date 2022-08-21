import { books } from "@/assets/Mocks";

export default {
    namespaced: true,
    state: {
      list: books,
      query: ''
    },
    mutations: {
      changeQuery (state, searchText) {
          state.query = searchText
      },
    },
    getters: {
      getData (state) {
          return state.query.length >= 3 ? state.list.filter(({title}) => title.includes(state.query?.toLowerCase())) : [];
      }
    }
};