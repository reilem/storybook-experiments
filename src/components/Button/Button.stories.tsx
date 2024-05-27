import React from 'react';
import { fn } from '@storybook/test';
import { PiAirplaneTakeoff } from 'react-icons/pi';

import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { onClick: fn() },
};

export const Default = {
    args: {
        icon: <PiAirplaneTakeoff />,
        title: 'Button',
    },
};
