import * as React from 'react';
import { Header } from './header';
import { MainTxt } from './maintxt';
import { SecondTxt } from './secondtxt';
import { Couleur } from './colorbutton';
import { Report } from './reportButton';
import { Footer } from './footer';

export interface AppProps {
    title: string;
}

export class App extends React.Component<AppProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='nr-body'>
                <div className = 'n-header'>
                    <Header message='Training' />
                </div>
                <MainTxt message='Ce petit outil permet de réaliser des tests' /><br />
                <SecondTxt message='Cliquer pour mettre la cellule en couleur' /><br />
                <div className = 'actions'>
                    <Couleur couleurCellule='Yellow' />
                    <Couleur couleurCellule='Red' />
                    <Report />
                </div>
                <div className='n-footer'>
                    <Footer logo='assets/logo_neoreeds_with_text_medium.png' title={this.props.title}  />
                </div>
            </div>
        );
    };
};
