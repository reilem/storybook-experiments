import React from 'react';
import cn from 'classnames';

import './Card.css';

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, ...other }: React.PropsWithChildren<Props>) => {
    return (
        <div className={cn('card-component', className)} {...other}>
            {children}
        </div>
    );
};
