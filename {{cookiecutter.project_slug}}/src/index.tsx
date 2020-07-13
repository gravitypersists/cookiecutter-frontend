import * as React from 'react'
import { render } from 'react-dom'
import Component from './components/Example/Component'

const App = () => {
    return <Component />
}

render(<App />, document.querySelector('#app-container'))