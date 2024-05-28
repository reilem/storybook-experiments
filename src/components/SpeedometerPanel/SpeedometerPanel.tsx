import React, { JSX } from 'react';
import cn from 'classnames';

import { Panel } from '../Panel/Panel';
import { PanelFooter } from '../PanelFooter/PanelFooter';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { CurvedProgress } from '../CurvedProgress/CurvedProgress';

import './SpeedometerPanel.css';

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
            <PanelHeader icon={headerIcon} title={headerTitle} onClickMore={onClickMore} />
            <div className="speedometer-panel-body">
                <CurvedProgress value={progressValue} />
                <div className="text-container">
                    <Text variant="title">{bodyMessage}</Text>
                    <Text variant="subtitle">{bodyDescription}</Text>
                </div>
            </div>
            <PanelFooter>
                {actionOnClick && (
                    <Button onClick={actionOnClick}>
                        {actionIcon}
                        {actionLabel}
                    </Button>
                )}
            </PanelFooter>
        </Panel>
    );
};
