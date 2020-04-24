import React, { Component } from 'react';

class Vacaciones extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        message: 'DE VACACIONES'
    }
}

render () {
    return (
        <h1>{this.state.message}</h1>
    )
}
};

export default Vacaciones;