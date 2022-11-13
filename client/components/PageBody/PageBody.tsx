"use client"
import styles from "./PageBody.module.scss";
import {FunctionComponent, ReactNode} from "react";

interface IPageBodyProps {
    children: ReactNode;
}

export const PageBody: FunctionComponent<IPageBodyProps> = (props) => {
    const { children } = props;

    return <div className={styles.wrapper}>
        {children}
    </div>
}