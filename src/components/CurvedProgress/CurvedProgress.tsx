import React from 'react';
import cn from 'classnames';

import { Text } from '../Text/Text';

import './CurvedProgress.css';

type OwnProps = {
    value?: number; // From 0 to 100
};

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & OwnProps;

export const CurvedProgress = ({ value = 0, className, ...other }: Props) => {
    // Value: 0 -> Rotation: -45deg
    // Value: 100 -> Rotation: 135
    const progressRotation = `${value * 180 - 45}deg`;
    const progressStr = `${(value * 100).toFixed(0)}%`;

    return (
        <div
            className={cn('curved-progress-component', className)}
            // Pass custom CSS variable through style to trigger rotation in CSS
            style={{ '--progress-rotation': progressRotation } as React.CSSProperties}
            {...other}
        >
            <Text className="progress-text">{progressStr}</Text>
        </div>
    );
};
