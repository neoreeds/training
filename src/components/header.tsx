import * as React from 'react';

export interface HeaderProps {
    message: string;
}

export class Header extends React.Component<HeaderProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <section className='ms-header ms-bgColor-neutralLighter'>
                <h1 className='ms-fontColor-neutralPrimary'>{this.props.message}</h1>
            </section>
        );
    };
};
