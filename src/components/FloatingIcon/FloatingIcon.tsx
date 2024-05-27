import React, { JSX } from 'react';
import cn from 'classnames';

import './FloatingIcon.css';

type OwnProps = {
    icon: JSX.Element;
};

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & OwnProps;

export const FloatingIcon = ({ icon, className, ...other }: Props) => {
    return (
        <div className={cn('floating-icon-component', className)} {...other}>
            {icon}
        </div>
    );
};
