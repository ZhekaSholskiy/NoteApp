import './sidebar.css';
import {MouseEventHandler, ReactElement, useState} from "react";
import { ArrowForwardIos } from '@mui/icons-material';
import ButtonBase from '@mui/material/ButtonBase';

const SidebarClosingButton = (props: {onOpenHandler: MouseEventHandler<HTMLButtonElement>}): ReactElement => {
    return (
        <ButtonBase
            onClick={props.onOpenHandler}
            children={<ArrowForwardIos />}
            className="sidebar-container__hide-icon"/>
    );
}

export function SideBar(props: {children: ReactElement}):ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const onOpenHandler:MouseEventHandler<HTMLButtonElement> = () => setIsOpen(!isOpen);

    return (
        isOpen
            ? <div className={'sidebar-container' + (isOpen && ' sidebar-container--opened')}>
                {props.children}
                <SidebarClosingButton onOpenHandler={onOpenHandler}/>
            </div>
            : <SidebarClosingButton onOpenHandler={onOpenHandler}/>
    )
}
