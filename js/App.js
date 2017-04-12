import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import '../public/style.css'
import Header from './Header'
import Todos from './Todos'

class Todo extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Todos />
        </div>
      </Provider>
    )
  }
}

render(<Todo />, document.getElementById('root'))
