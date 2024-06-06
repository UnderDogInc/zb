import getUsers from "~/app/api/service/users.js";
import alert from "~/entities/store/modules/alert.js";
const users = {
  state: {
    users: [],
    isLoading: false,
    error: null
  },

  getters: {
    usersList: state => state.users.filter((user, index, self) =>
      index === self.findIndex((u) => JSON.stringify(u) === JSON.stringify(user))
    ),
    isLoading: state => state.isLoading,
    isError: state => state.error
  },

  mutations: {
    setUsers(state, usersList) {
      state.users = usersList
    },
    setLoading(state, status) {
      state.isLoading = status
    }
  },

  actions: {
    async search({ commit }, payload) {
      try {
        commit('setLoading', true);

        const isMixed = payload.some(e =>!isNaN(Number(e))) && payload.some(e => isNaN(Number(e)));
        const isAllStrings = payload.every(e => isNaN(Number(e)));
        const isAllNumbers = payload.every(e =>!isNaN(Number(e)));

        let users = [];

        if (isMixed) {
          const searchQuery = payload.filter(e => isNaN(Number(e))).map(item => item.charAt(0).toUpperCase() + item.slice(1));
          const idQuery = payload.filter(e =>!isNaN(Number(e)));

          const [usernameResponse, idResponse] = await Promise.all([
            getUsers('username', searchQuery),
            getUsers('id', idQuery)
          ]);

          users = [...usernameResponse.data,...idResponse.data];
        } else if (isAllStrings) {
          const searchQuery = payload.map(item => item.charAt(0).toUpperCase() + item.slice(1));
          const { data } = await getUsers('username', searchQuery);
          users = data;
        } else if (isAllNumbers) {
          const { data } = await getUsers('id', payload);
          users = data;
        }
        commit('setUsers', users);
      } catch (e) {
        console.log(e);
      } finally {
        commit('setLoading', false);
      }
    },
    clearSearch({ commit }) {
      commit('setUsers', []);
    }
  }
}

export default users
