import { Text } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export const Default = {
    args: {
        children: 'This is a piece of example text',
    },
};
