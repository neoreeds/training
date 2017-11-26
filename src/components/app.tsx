import * as React from 'react';
import { Button, ButtonType } from 'office-ui-fabric-react';
import { Header } from './header';
import { MainTxt } from './maintxt';
import { SecondTxt } from './secondtxt';
import { Couleur } from './actionbutton';
import { Footer } from './footer';
import * as OfficeHelpers from '@microsoft/office-js-helpers';

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
                <Header message='Training' />
                <MainTxt message='Ce petit outil permet de réaliser des tests' /><br />
                <SecondTxt message='Cliquer pour mettre la cellule en couleur' /><br />
                <Couleur couleurCellule='Yellow' /><br /><br />
                <Couleur couleurCellule='Red' /><br /><br />
                <Footer logo='assets/logo_neoreeds_with_text_medium.png' title={this.props.title}  />
            </div>
        );
    };
};
