import React from 'react';
import { PiCpu } from 'react-icons/pi';
import { PiLightning } from 'react-icons/pi';
import { fn } from '@storybook/test';

import { LimitCard } from './LimitCard';

export default {
    title: 'Components/LimitCard',
    component: LimitCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClickMore: fn(), actionOnClick: fn() },
    argTypes: {
        limitProgress: { control: { type: 'range', min: 0.0, max: 1.0, step: 0.01 } },
        headerIcon: { control: { type: null } },
        actionIcon: { control: { type: null } },
    },
};

export const Default = {
    args: {
        headerIcon: <PiCpu />,
        headerTitle: 'App limits',
        limitProgress: 0.8,
        limitTitle: "You've almost reached your limit",
        limitDescription:
            "You've used 80% of your available spots. Upgrade plan to create more projects.",
        actionIcon: <PiLightning />,
        actionLabel: 'Upgrade plan',
    },
};
