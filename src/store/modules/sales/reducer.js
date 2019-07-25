export default function sales(state = [], action) {
    switch (action.type) {
        case '@sales/GET_SUCCESS':
            return  action.traffic
        default:
            return state
    }
}