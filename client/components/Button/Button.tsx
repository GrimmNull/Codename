import styles from "./Button.module.scss";
import {FunctionComponent, ReactNode} from "react";
import clsx from "clsx";

interface IButtonProps {
    children: ReactNode;
    buttonClasses?: string;
    disabled: boolean;
    onClick: () => void;
}

export const Button: FunctionComponent<IButtonProps> = (props) => {
    const { children, buttonClasses, disabled, onClick } = props;

    return (<button onClick={onClick} disabled={disabled} className={clsx(styles.button, buttonClasses)}>
        {children}
    </button>)
}