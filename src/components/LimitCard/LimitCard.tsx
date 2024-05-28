import React, { JSX } from 'react';
import cn from 'classnames';
import { PiDotsThreeBold } from 'react-icons/pi';

import { Card } from '../Card/Card';
import { FloatingIcon } from '../FloatingIcon/FloatingIcon';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

import './LimitCard.css';
import { CurvedProgress } from '../CurvedProgress/CurvedProgress';

type OwnProps = {
    headerIcon?: JSX.Element;
    headerTitle?: string;
    onClickMore?: () => void;
    limitProgress: number;
    limitTitle: string;
    limitDescription: string;
    actionIcon?: JSX.Element;
    actionLabel?: string;
    actionOnClick?: () => void;
};

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & OwnProps;

export const LimitCard = ({
    headerIcon,
    headerTitle,
    onClickMore,
    limitProgress,
    limitTitle,
    limitDescription,
    actionIcon,
    actionLabel,
    actionOnClick,
    className,
    ...other
}: Props) => {
    return (
        <Card className={cn('limit-card-component', className)} {...other}>
            <div className="limit-card-header">
                <div className="limit-card-header-left">
                    {headerIcon && <FloatingIcon icon={headerIcon} />}
                    {headerTitle && <Text variant="title">{headerTitle}</Text>}
                </div>
                {onClickMore && (
                    <Button variant="inline" icon={<PiDotsThreeBold />} onClick={onClickMore} />
                )}
            </div>
            <div className="limit-card-body">
                <CurvedProgress value={limitProgress} />
                <div className="text-container">
                    <Text variant="title">{limitTitle}</Text>
                    <Text variant="subtitle">{limitDescription}</Text>
                </div>
            </div>
            <div className="limit-card-footer">
                {actionOnClick && (
                    <Button icon={actionIcon} title={actionLabel} onClick={actionOnClick} />
                )}
            </div>
        </Card>
    );
};
