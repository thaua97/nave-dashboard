import { combineReducers } from 'redux'

import sales from './sales/reducer'
import infos from './infos/reducer'

export default combineReducers({
    sales,
    infos
})