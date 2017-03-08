import React from 'react'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'World'
}

Hello.propTypes = {
  name: React.PropTypes.string
}

export default Hello
