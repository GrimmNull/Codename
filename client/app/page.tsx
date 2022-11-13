"use client";
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";
import {useState} from "react";

import styles from "../styles/pages/Home.module.scss";
import {useRouter} from "next/navigation";

const Page = () => {
    const [roomCode, setRoomCode] = useState<string>("");
    const router = useRouter();

    const onRoomEnter = () => {
        router.push(`/room/${roomCode}`);
    }

    return (<div className={styles.wrapper}>
        <div className={styles.description}>A description</div>
        <Input value={roomCode} onChange={setRoomCode} shouldFocusOnMount={true} />
        <Button disabled={roomCode === ""} buttonClasses={styles.enterButton} onClick={onRoomEnter}>Enter room</Button>
    </div>)
}

export default Page;