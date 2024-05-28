import React, { JSX } from 'react';
import cn from 'classnames';
import { PiDotsThreeBold } from 'react-icons/pi';

import { Panel } from '../Panel/Panel';
import { FloatingIcon } from '../FloatingIcon/FloatingIcon';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

import './SpeedometerPanel.css';
import { CurvedProgress } from '../CurvedProgress/CurvedProgress';

type OwnProps = {
    headerIcon?: JSX.Element;
    headerTitle?: string;
    onClickMore?: () => void;
    progressValue: number;
    bodyMessage: string;
    bodyDescription: string;
    actionIcon?: JSX.Element;
    actionLabel?: string;
    actionOnClick?: () => void;
};

type Props = React.HtmlHTMLAttributes<HTMLDivElement> & OwnProps;

export const SpeedometerPanel = ({
    headerIcon,
    headerTitle,
    onClickMore,
    progressValue,
    bodyMessage,
    bodyDescription,
    actionIcon,
    actionLabel,
    actionOnClick,
    className,
    ...other
}: Props) => {
    return (
        <Panel className={cn('speedometer-panel-component', className)} {...other}>
            <div className="speedometer-panel-header">
                <div className="speedometer-panel-header-left">
                    {headerIcon && <FloatingIcon icon={headerIcon} />}
                    {headerTitle && <Text variant="title">{headerTitle}</Text>}
                </div>
                {onClickMore && (
                    <Button variant="inline" icon={<PiDotsThreeBold />} onClick={onClickMore} />
                )}
            </div>
            <div className="speedometer-panel-body">
                <CurvedProgress value={progressValue} />
                <div className="text-container">
                    <Text variant="title">{bodyMessage}</Text>
                    <Text variant="subtitle">{bodyDescription}</Text>
                </div>
            </div>
            <div className="speedometer-panel-footer">
                {actionOnClick && (
                    <Button icon={actionIcon} title={actionLabel} onClick={actionOnClick} />
                )}
            </div>
        </Panel>
    );
};
