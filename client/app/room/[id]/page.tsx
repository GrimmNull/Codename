"use client"
import {FunctionComponent} from "react";
import {BoardView} from "../../../components/BoardView/BoardView";
import styles from "../../../styles/pages/Room.module.scss";

interface IRoomParams {
    id: string;
}

interface IRoomProps {
    params: IRoomParams;
}

const Page: FunctionComponent<IRoomProps> = ({ params }) => {
    console.log(params);

    return (<div className={styles.wrapper}>
        <BoardView />
    </div>)
}

export default Page;