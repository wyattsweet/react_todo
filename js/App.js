import React from 'react'
import { render } from 'react-dom'
import '../public/style.css'
import preload from '../public/data.json'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {todos: preload.todos}
  }

  makeComplete (e) {
    console.log(e.target)
  }

  render () {
    return (
      <div>
        <header>
          <h1>Todos</h1>
        </header>
        <code><pre>{JSON.stringify(this.state.todos)}</pre></code>
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
    )
  }
}

render(<Todo />, document.getElementById('root'))
