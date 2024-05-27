import React from 'react';
import cn from 'classnames';

import { Text } from '../Text/Text';

import './CurvedProgress.css';

type OwnProps = {
    progress?: number; // From 0 to 100
};

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & OwnProps;

/**
 * Primary UI component for user interaction
 */
export const CurvedProgress = ({ progress = 0, className, ...other }: Props) => {
    const progressStr = `${progress}%`;
    // 0 -> -45
    // 100 -> 135
    const progressRotation = `${progress * 1.8 - 45}deg`;

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
