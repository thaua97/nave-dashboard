import { call, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

import { getSuccess } from './actions'

function* getInfos() {
    const res = yield call(api.get, 'information')

    yield put(getSuccess(res.data))
}

export default all([
    takeLatest('@infos/GET_INFOS', getInfos)
])