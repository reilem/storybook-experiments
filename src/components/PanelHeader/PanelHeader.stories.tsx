import React from 'react';
import { fn } from '@storybook/test';
import { PiChargingStation } from "react-icons/pi";

import { PanelHeader } from './PanelHeader';

export default {
    title: 'Components/Panel/PanelHeader',
    component: PanelHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClickMore: fn() },
    argTypes: {
        icon: { control: { type: null } },
    },
};

export const Default = {
    args: {
        icon: <PiChargingStation />,
        title: 'Panel header',
    },
};
