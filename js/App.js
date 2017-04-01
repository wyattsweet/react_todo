import React from 'react'
import { render } from 'react-dom'
import '../public/style.css'

class Todo extends React.Component {
  render () {
    return (
      React.createElement('div', null, 'Wyatt\'s Todo Experience')
    )
  }
}

render(React.createElement(Todo), document.getElementById('root'))
