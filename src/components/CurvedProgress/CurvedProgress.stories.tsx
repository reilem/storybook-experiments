import { CurvedProgress } from './CurvedProgress';

export default {
    title: 'Components/CurvedProgress',
    component: CurvedProgress,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        progress: { control: 'range', min: 0.0, max: 100.0, step: 1 },
    },
};

export const Default = {
    args: {
        progress: 45,
    },
};
