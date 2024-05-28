import React from 'react';
import cn from 'classnames';

import './Panel.css';

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export const Panel = ({ children, className, ...other }: React.PropsWithChildren<Props>) => {
    return (
        <div className={cn('panel-component', className)} {...other}>
            {children}
        </div>
    );
};
