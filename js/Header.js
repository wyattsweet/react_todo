import React from 'react'
// import { connect } from 'react-redux'
// const { string } = React.PropTypes

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>React Todo App</h1>
      </header>
    )
  }
}

// Header.propTypes = {
//   header: string
// }
//
// const mapStateToProps = (state) => {
//   return {
//     header: state.header
//   }
// }

// export default connect(mapStateToProps)(Header)

export default Header
