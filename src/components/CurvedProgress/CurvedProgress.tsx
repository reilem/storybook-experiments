import React from 'react';
import cn from 'classnames';

import { Text } from '../Text/Text';

import './CurvedProgress.css';

type OwnProps = {
    value?: number; // From 0 to 100
};

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & OwnProps;

/**
 * Primary UI component for user interaction
 */
export const CurvedProgress = ({ value = 0, className, ...other }: Props) => {
    // 0 -> -45
    // 100 -> 135
    const progressRotation = `${value * 180 - 45}deg`;
    const progressStr = `${(value * 100).toFixed(0)}%`;

    return (
        <div
            className={cn('curved-progress-component', className)}
            style={{ '--progress-rotation': progressRotation } as React.CSSProperties}
            {...other}
        >
            <Text variant="big" className="progress-text">
                {progressStr}
            </Text>
        </div>
    );
};
