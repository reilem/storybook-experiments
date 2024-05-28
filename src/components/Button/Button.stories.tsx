import React from 'react';
import { fn } from '@storybook/test';
import { PiChalkboardTeacherFill } from 'react-icons/pi';

import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { onClick: fn() },
    argTypes: { children: { control: { type: null } } },
};

export const Default = {
    args: {
        children: (
            <>
                <PiChalkboardTeacherFill />
                Button Example
            </>
        ),
    },
};
