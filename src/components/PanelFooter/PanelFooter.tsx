import React from 'react';
import cn from 'classnames';

import './PanelFooter.css';

type Props = React.HtmlHTMLAttributes<HTMLDivElement>;

export const PanelFooter = ({ className, children, ...other }: React.PropsWithChildren<Props>) => {
    return (
        <div className={cn('panel-footer-component', className)} {...other}>
            {children}
        </div>
    );
};
