import React from 'react';
import { PiDrone } from 'react-icons/pi';
import { fn } from '@storybook/test';

import { StructuredCard } from './StructuredCard';
import { Text } from '../Text/Text';

export default {
    title: 'Components/StructuredCard',
    component: StructuredCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClickMore: fn() },
};

export const Default = {
    args: {
        headerIcon: <PiDrone />,
        headerTitle: 'Structured Card Title',
        children: (
            <>
                <Text variant="title" style={{ marginBottom: 16 }}>
                    Structured Card Body
                </Text>
                <Text variant="subtitle">This is a StructuredCard component.</Text>
            </>
        ),
        footer: <Text>This is extra footer text</Text>,
    },
};
