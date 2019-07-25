import { all } from 'redux-saga/effects'

import sales from './sales/sagas'
import infos from './infos/sagas'

export default function* rootSaga() {
    return yield all([
        sales,
        infos
    ])
}