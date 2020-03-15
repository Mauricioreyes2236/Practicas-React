import React, { Component } from 'react';

class Stateful extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        hello: 'Hola Mundo DSM-54 ',
        name:'Mauricio'
    }
}

render () {
    return (
        <h1>{this.state.hello}
        {this.state.name}</h1>
    )
}
};

export default Stateful;