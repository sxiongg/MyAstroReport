import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/container'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
        <BrowserRouter>
            <Container />
        </BrowserRouter>,
    document.getElementById('app')
);