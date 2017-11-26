import * as React from 'react';

export interface SecondTxtProps {
    message: string;
}

export class SecondTxt extends React.Component<SecondTxtProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <h3 className='nr-secondtext'>{this.props.message}</h3>
        );
    };
};
