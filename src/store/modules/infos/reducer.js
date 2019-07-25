export default function infos(state = [], action) {
    switch (action.type) {
        case '@infos/GET_SUCCESS':
            return  action.infos
        default:
            return state
    }
}