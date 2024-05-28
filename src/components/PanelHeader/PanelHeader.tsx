import React, { JSX } from 'react';
import cn from 'classnames';
import { PiDotsThreeBold } from 'react-icons/pi';

import { Button } from '../Button/Button';
import { FloatingIcon } from '../FloatingIcon/FloatingIcon';
import { Text } from '../Text/Text';

import './PanelHeader.css';

type OwnProps = {
    title: string;
    icon?: JSX.Element;
    onClickMore?: () => void;
};

type Props = OwnProps & React.HtmlHTMLAttributes<HTMLDivElement>;

export const PanelHeader = ({ icon, title, onClickMore, className, ...other }: React.PropsWithChildren<Props>) => {
    return (
        <div className={cn('panel-header-component', className)} {...other}>
            <div className="panel-header-left">
                {icon && <FloatingIcon icon={icon} />}
                <Text variant="title">{title}</Text>
            </div>

            {onClickMore && (
                <Button variant="inline" onClick={onClickMore}>
                    <PiDotsThreeBold />
                </Button>
            )}
        </div>
    );
};
