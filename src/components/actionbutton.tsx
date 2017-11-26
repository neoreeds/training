import * as React from 'react';
import * as OfficeHelpers from '@microsoft/office-js-helpers';
import { Button, ButtonType } from 'office-ui-fabric-react';

export interface CouleurProps {
    couleurCellule: string;
}

export class Couleur extends React.Component<CouleurProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    click = async () => {

        await Excel.run(async (context) => {

            const range = context.workbook.getSelectedRange();
            range.format.fill.color = this.props.couleurCellule;
            range.load("address");

            await context.sync()

            console.log(`The range address was "${range.address}".`);
            //OfficeHelpers.UI.notify("Color is " + this.props.couleurCellule + ".");
            OfficeHelpers.UI.notify(`The range address was "${range.address}".`);

        });

        async function tryCatch(callback) {
            try {
                await callback();
            }
            catch (error) {
                OfficeHelpers.UI.notify(error);
                OfficeHelpers.Utilities.log(error);
            }
        }
    }

    render() {
        return (
            <Button className='nr-action' buttonType={ButtonType.hero} icon='ChevronRight' onClick={this.click}>{this.props.couleurCellule}</Button>
        );
    };
};
