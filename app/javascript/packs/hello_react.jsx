import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

let Hello = require('components/Hello.jsx').default

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render(Hello)

if (module.hot) {
  module.hot.accept('components/Hello.jsx', () => {
    Hello = require('components/Hello.jsx').default
    render(Hello)
  })
}
