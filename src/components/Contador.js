import React, { Component } from 'react'

class ContadorClasse extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contador: 0
    }
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  render () {
    return (
      <div>
        <p>Você clicou {this.state.contador} vezes</p>
        <button onClick={this.incrementar}>Clique aqui</button>
      </div>
    )
  }
}

export default ContadorClasse;
