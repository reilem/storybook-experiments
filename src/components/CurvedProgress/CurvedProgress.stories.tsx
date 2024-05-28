import { CurvedProgress } from './CurvedProgress';

export default {
    title: 'Components/CurvedProgress',
    component: CurvedProgress,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        value: { control: { type: 'range', min: 0.0, max: 1.0, step: 0.01 } },
    },
};

export const Default = {
    args: {
        value: 0.45,
    },
};
