import React from 'react';
import { PiAtom } from 'react-icons/pi';

import { FloatingIcon } from './FloatingIcon';

export default {
    title: 'Components/FloatingIcon',
    component: FloatingIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: { icon: { control: { type: null } } },
};

export const Default = {
    args: {
        icon: <PiAtom />,
    },
};
