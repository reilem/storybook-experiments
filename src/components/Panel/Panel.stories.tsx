import React from 'react';
import { Panel } from './Panel';

export default {
    title: 'Components/Panel',
    component: Panel,
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
            <div>
                <h2>Panel</h2>
                <p>This is a basic panel component.</p>
            </div>
        ),
    },
};
