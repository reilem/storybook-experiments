import React from 'react';
import cn from 'classnames';

import './Text.css';

type OwnProps = {
    variant?: 'big' | 'title' | 'default' | 'subtitle';
    children: string;
};

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & OwnProps;

export const Text = ({ variant = 'default', className, children, ...other }: Props) => {
    return (
        <div
            className={cn(
                'text-component',
                {
                    'big-text': variant === 'big',
                    'title-text': variant === 'title',
                    'default-text': variant === 'default',
                    'subtitle-text': variant === 'subtitle',
                },
                className,
            )}
            {...other}
        >
            {children}
        </div>
    );
};
