import * as React from 'react';

export interface MainTxtProps {
    message: string;
}

export class MainTxt extends React.Component<MainTxtProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <h2 className='nr-maintext'>{this.props.message}</h2>
        );
    };
};
