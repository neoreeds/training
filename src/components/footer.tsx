import * as React from 'react';

export interface FooterProps {
    title: string;
    logo: string;
}

export class Footer extends React.Component<FooterProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <section className='nr-Footer ms-bgColor-neutralLighter ms-u-fadeIn500'>
                <img width='200' height='46' src={this.props.logo} alt={this.props.title} title={this.props.title} />
            </section>
        );
    };
};
