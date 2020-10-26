import React, { Component } from 'react';
import Axios from 'axios';
import Pokemon from './components/Pokemon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: '',
      pokemonImg: null,
    };
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      pokemon: e.target.value,
    });
  };

  fetchPokemon = () => {
    let fetchURL = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`;
    Axios.get(fetchURL).then((res) => {
      console.log(res.data);
      this.setState({
        pokemonImg: res.data.sprites.front_default,
      });
    });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          onChange={this.handleInput}
          value={this.state.pokemon}
        />
        <button onClick={this.fetchPokemon}>Search Pokemon</button>
        <Pokemon pokemonImg={this.state.pokemonImg} />
      </div>
    );
  }
}

export default App;
