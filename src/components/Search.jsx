import React from 'react';
import '../assets/style/components/search.scss';

const Search = () => {
    return(
        <div className="search">
  <section class="main">
    <h2 class="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" class="input" placeholder="Buscar..."></input>
  </section>
        </div>
    )
}
export default Search;