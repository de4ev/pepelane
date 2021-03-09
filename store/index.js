import { getVehicles } from '@/api/request.js';

export const state = () => ({
    vehicles: [],
    loading: false,
    isPopupOpen: false,
    fetchError: false,
    selectedVehicle: null,
    filterOption: 'whatever',
    darkMode: false
  })
export const getters = {
    getVehicleTypes: state => {
        let vehicleTypes = ['whatever']
        state.vehicles.forEach(vehicle => {
            if (!vehicleTypes.includes(vehicle.type)) {
                vehicleTypes.push(vehicle.type)
            }
        })
        return vehicleTypes
    },
    getFilteredVehicles: state => {
        let filtered
        if (state.filterOption == 'whatever') {
            filtered = state.vehicles
        } else {
            filtered = state.vehicles.filter(vehicle => vehicle.type == state.filterOption);
        }
        console.log('Showing ' + filtered.length + ' items (' + state.filterOption + ')');
        return filtered
    }
}
 
export const mutations = {
    setVehicles: (state, vehicles) => {state.vehicles = vehicles},
    setLoading: (state, value) => {state.loading = value},
    showPopup: (state, value) => {state.isPopupOpen = value},
    setFetchError: (state, value) => {state.fetchError = value},
    setSelectedVehicle: (state, vehicle) => {state.selectedVehicle = vehicle},
    setFilterOption: (state, option) => {state.filterOption = option},
    addVehicle: (state, vehicle) => {state.vehicles.unshift(vehicle)},
    toggleDarkMode: (state) => {state.darkMode = !state.darkMode},
}
export const actions = {
    async nuxtClientInit({ commit }) {
        commit('setLoading', true)
        commit('setFetchError', false)
        await getVehicles()
            .then( vehicles => {
                commit('setVehicles', vehicles)
                commit('setLoading', false)
                console.log('Vehicles loaded');
            })
            .catch(error => {
                commit('setFetchError', true)
                commit('setLoading', false)
                console.log(error);
            })
    },
    setLoading({ commit }, value) {
        value ? commit('setLoading', true) : commit('setLoading', false)
    },
    toggleDarkMode({ commit }) {
        document.body.classList.toggle("dark-mode");
        commit('toggleDarkMode')
    },
    showPopup({ commit }, value) {
        value ? commit('showPopup', true) : commit('showPopup', false)
    },
    selecteVehicle({ commit }, vehicle) {
        commit('setSelectedVehicle', vehicle)
    },
    selecteVehicleById({ commit, state}, vehicleId) {
        const vehicle = state.vehicles.find(item => item.id == vehicleId)
        commit('setSelectedVehicle', vehicle)
    },
    filterBy({ commit }, option ) {
        commit('setFilterOption', option)
    },
    addVehicle( { commit }, someVehicleData) {
        let vehicle = Object.assign({
            "id": new Date().valueOf(),
            "name": "Default name",
            "type": "custom",
            "description": "default description",
            "specifications_text": "default specifications text",
            "team_text": "default team text",
            "term_text": "default term text",
            "rent": 0,
            "preview": `https://loremflickr.com/160/160/airship?random=${new Date().valueOf()}`,
            "image": "https://loremflickr.com/900/900/airship"
        }, someVehicleData)
        commit('addVehicle', vehicle)
    }
}