import React from 'react'

import { Provider } from 'react-redux'

import './config/reactotronConfig'
import store from './store'

import GlobalStyle from './styles/global'
import Dashboard from './pages/Dashboard'


function App() {
    return (
        <Provider store={store}>
            <Dashboard/>
            <GlobalStyle/>
        </Provider>
    )
}

export default App
