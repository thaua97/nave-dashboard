import { call, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

import { getSuccess } from './actions'

function* getSalesTraffic() {
    const res = yield call(api.get, 'sales')

    yield put(getSuccess(res.data))
}

export default all([
    takeLatest('@sales/GET_TRAFFIC', getSalesTraffic)
])