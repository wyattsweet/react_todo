import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import '../public/style.css'
import preload from '../public/data.json'
import Header from './Header'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: preload.todos
    }
  }

  makeComplete (e) {
    console.log(e.target)
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <ul>
            {this.state.todos.map((td) => {
              return (
                <li onClick={this.makeComplete} key={td.id}>{td.todo}</li>
              )
            })}
          </ul>
          <div id='filter'>
            <a href='#'>Show All</a><a href='#'>Completed</a><a href='#'>Pending</a>
          </div>
        </div>
      </Provider>
    )
  }
}

render(<Todo />, document.getElementById('root'))
