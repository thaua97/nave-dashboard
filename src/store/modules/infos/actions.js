export function getInfos () {
    return {
        type: '@infos/GET_INFOS',
    }
}

export function getSuccess (infos) {
    return {
        type: '@infos/GET_SUCCESS',
        infos
    }
}