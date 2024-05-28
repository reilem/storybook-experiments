import React from 'react';
import { PiCaretCircleDoubleLeft } from "react-icons/pi";
import { PiStopCircle } from "react-icons/pi";
import { PiCaretCircleDoubleRight } from "react-icons/pi";
import { Button } from '../Button/Button';

import { PanelFooter } from './PanelFooter';

export default {
    title: 'Components/Panel/PanelFooter',
    component: PanelFooter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: { control: { type: null } },
    },
};

export const Default = {
    args: {
        children: (
            <>
                <Button variant="inline"><PiCaretCircleDoubleLeft/></Button>
                <Button variant="inline"><PiStopCircle/></Button>
                <Button variant="inline"><PiCaretCircleDoubleRight/></Button>
            </>
        ),
    },
};
