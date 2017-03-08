import React, { Component } from 'react'

export default class Hello extends Component {
  constructor (props) {
    super(props)
    this.state = { seconds: 0 }
  }

  componentDidMount () {
    this.$interval = setInterval(() => {
      this.setState(({ seconds }) => { return { seconds: seconds + 1 } })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.$interval)
  }

  render () {
    const s = this.state.seconds
    return <div>{ s } second{ s === 1 ? '' : 's' } ha{ s === 1 ? 's' : 've' } passed.</div>
  }
}
