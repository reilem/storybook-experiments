import React from 'react';
import { Card } from './Card';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {
        children: (
            <div>
                <h2>Card</h2>
                <p>This is a card component.</p>
            </div>
        ),
    },
};
