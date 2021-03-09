export default function ({ store, route, redirect }) {
    if (store.state.fetchError) {
        return redirect('/')
    } else if (!store.state.selectedVehicle) {
        if (route.params.id) {
            store.dispatch('selecteVehicleById', route.params.id)
        }
    }
}