export function getTraffic () {
    return {
        type: '@sales/GET_TRAFFIC',
    }
}

export function getSuccess (traffic) {
    return {
        type: '@sales/GET_SUCCESS',
        traffic
    }
}