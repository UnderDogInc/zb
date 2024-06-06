const alert = {
  state: {
    alert: {
      isShow: false,
      message: '',
      color: ''
    }
  },

  getters: {
    getAlert: state => state.alert
  },

  mutations: {
    setInfoAlert(state, message) {
      state.alert = {
        color: 'var(--info-color)',
        isShow: true,
        message
      }
    },

    setErrorAlert(state, message) {
      state.alert = {
        color: 'var(--primary-color)',
        isShow: true,
        message
      }
    },

    setSuccessAlert(state, message) {
      state.alert = {
        color: 'var(--success-color)',
        isShow: true,
        message
      }
    },

    setWarningAlert(state, message) {
      state.alert = {
        color: 'var(--warning-color)',
        isShow: true,
        message
      }
    },

    clearAlert(state) {
      state.alert = {
        isShow: false,
        message: '',
        color: ''
      }
    },

    hideAlert(state) {
      state.alert.isShow = false
    }
  },

  actions: {
    setInfoAlert({ commit }, message) {
      commit('setInfoAlert', message)
    },
    setErrorAlert({ commit }, message) {
      commit('setErrorAlert', message)
    },
    setSuccessAlert({ commit }, message) {
      commit('setSuccessAlert', message)
    },
    setWarningAlert({ commit }, message) {
      commit('setWarningAlert', message)
    },
    clearAlert({ commit }) {
      commit('clearAlert')
    },
    hideAlert({ commit }) {
      commit('hideAlert')
    }
  }
}

export default alert
