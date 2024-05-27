import React, { JSX } from 'react';
import cn from 'classnames';

import './Button.css';

type OwnProps = {
    icon?: JSX.Element;
    title?: string;
    variant?: 'primary' | 'inline';
};

type Props = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ icon, title, className, variant = 'primary', ...other }: Props) => {
    return (
        <button
            type="button"
            className={cn('button-component', className, {
                'primary-button': variant === 'primary',
                'inline-button': variant === 'inline',
            })}
            {...other}
        >
            <div className="button-icon">{icon}</div>
            {title}
        </button>
    );
};
