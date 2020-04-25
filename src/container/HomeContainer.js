import React, { Component } from 'react';

import axios from 'axios';


class HomeContainer extends Component {

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/2/').
            then(result => {
                console.log(result)
            }).catch(console.log)
    }

    render() {
        return (
            <h1>Poke App</h1>
        );
    }
}
export default HomeContainer;