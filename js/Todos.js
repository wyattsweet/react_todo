import React from 'react'
import { connect } from 'react-redux'
const { array, func, string } = React.PropTypes
import { setTodo, addTodo } from './actionCreators'

class Todos extends React.Component {
  constructor (props) {
    super(props)
    this.handleTodoChange = this.handleTodoChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  handleTodoChange (e) {
    this.props.dispatch(setTodo(e.target.value))
  }

  addTodo (e) {
    e.preventDefault()
    this.props.dispatch(addTodo(this.props.todo))
    this.props.dispatch(setTodo(''))
    this.refs.todoInput.value = ''
  }

  render () {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <label>
            New Todo:
            <input ref='todoInput' type='text' onChange={this.handleTodoChange} placeholder='Enter Your Todo' />
          </label>
          <input type='submit' value='Add' />
        </form>
        <ul>
          {this.props.todos.map((td) => {
            return (
              <li onClick={this.makeComplete} key={td.id}>{td.todo}</li>
            )
          })}
        </ul>
        <div id='filter'>
          <a href='#'>Show All</a>, <a href='#'>Completed</a>, <a href='#'>Pending</a>
        </div>
      </div>
    )
  }
}

Todos.propTypes = {
  dispatch: func,
  todos: array,
  todo: string
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todo: state.todo
  }
}

export default connect(mapStateToProps)(Todos)
