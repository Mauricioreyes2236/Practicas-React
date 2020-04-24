import React, { Component } from 'react';

class ClaseDigital extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        message: 'PERO DEBO CONECTARME A CLASSROOM'
    }
}

render () {
    return (
        <h1>{this.state.message}</h1>
    )
}
};

export default ClaseDigital;