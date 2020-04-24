import React, { Component } from 'react';

class FBM extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        message: 'ME VOY'
    }
}

render () {
    return (
        <h1>{this.state.message}</h1>
    )
}
};

export default FBM;