// Initialisation des imports REACT
import * as React from 'react';
import { render } from 'react-dom';

// Composants
import { App } from './components/app';
import { Progress } from './components/progress';

// Fichier css utilisé
import './assets/styles/global.scss';

(() => {
    const title = 'Training';
    const container = document.querySelector('#container');

    /* On applique Render applicationaprès initialisaion Office  */
    Office.initialize = () => {
        render(
            <App title={title} />,
            container
        );
    };

    /* Render initial affichant une barre de progression */
    /* c'est celui que nous voyons dans la page html en dehor d'Excel */
    render(<Progress title={title} logo='assets/logo_neoreeds_with_text_medium.png' message="S'il vous plaît sideload votre AddIn pour voir le corps App." />, container);
})();

