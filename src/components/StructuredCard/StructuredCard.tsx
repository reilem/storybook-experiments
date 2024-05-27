import React, { JSX } from 'react';
import cn from 'classnames';
import { PiDotsThreeBold } from 'react-icons/pi';

import './StructuredCard.css';
import { Card } from '../Card/Card';
import { FloatingIcon } from '../FloatingIcon/FloatingIcon';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

type OwnProps = {
    headerIcon?: JSX.Element;
    headerTitle?: string;
    onClickMore?: () => void;
    footer?: JSX.Element;
};

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & OwnProps;

export const StructuredCard = ({
    headerIcon,
    headerTitle,
    onClickMore,
    footer,
    children,
    className,
    ...other
}: React.PropsWithChildren<Props>) => {
    return (
        <Card className={cn('structured-card-component', className)} {...other}>
            <div className="structured-card-header">
                <div className="structured-card-header-left">
                    {headerIcon && <FloatingIcon icon={headerIcon} />}
                    {headerTitle && <Text variant="title">{headerTitle}</Text>}
                </div>
                <Button variant="inline" icon={<PiDotsThreeBold />} onClick={onClickMore} />
            </div>
            <div className="structured-card-body">{children}</div>
            {footer && <div className="structured-card-footer">{footer}</div>}
        </Card>
    );
};
