import React from 'react';
import cn from 'classnames';

import './Button.css';

type OwnProps = {
    variant?: 'neutral' | 'success' | 'danger' | 'inline';
};

export type Props = OwnProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Which variants use a border around the button
const BORDERED_VARIANTS = ['neutral', 'success', 'danger'];

export const Button = ({
    variant = 'neutral',
    children,
    className,
    ...other
}: React.PropsWithChildren<Props>) => {
    return (
        <button
            type="button"
            className={cn('button-component', className, {
                'bordered-button': BORDERED_VARIANTS.includes(variant),
                'neutral-button': variant === 'neutral',
                'success-button': variant === 'success',
                'danger-button': variant === 'danger',
                'inline-button': variant === 'inline',
            })}
            {...other}
        >
            {children}
        </button>
    );
};
