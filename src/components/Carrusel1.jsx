import React from 'react';
import '../assets/style/components/carrusel.scss';

const Carrusel1= ({children}) => {
    return(
        <section class="carousel">
            <div class="carousel__container">
                {children}
                {children}
                {children}
            </div>
        </section>
    )
}
export default Carrusel1;