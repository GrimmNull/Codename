"use client";
import {changeUsername, useUsername} from "../../redux/slices/userSlice";
import styles from "./Navbar.module.scss";
import {FunctionComponent, useEffect, useState} from "react";
import {Input} from "../Input/Input";
import {useDispatch} from "react-redux";
import clsx from "clsx";
import {useCurrentRoom, useRoomName} from "../../redux/slices/roomSlice";

interface INavbarProps {
    isOnHome: boolean;
}

export const Navbar: FunctionComponent<INavbarProps> = (props) => {
    const { isOnHome } = props;
    const dispatch = useDispatch();
    const userName = useUsername();
    const roomName = useRoomName();
    const roomId = useCurrentRoom();
    const [isEditingUsername, setIsEditingUsername] = useState<boolean>(false);
    const [newUsername, setNewUsername] = useState<string>(userName);

    useEffect(() => {
        setNewUsername(userName);
    }, [userName]);

    return (<nav className={styles.wrapper}>
        <div className={clsx(styles.username, {[styles.clickable]: isOnHome})} onClick={() => !isEditingUsername && isOnHome && setIsEditingUsername(true)}>
            {!isEditingUsername ? <span>{userName}</span> : <Input value={newUsername} onChange={(value) => setNewUsername(value)} shouldFocusOnMount={true} name={"Username"} onFinish={() => {
                setIsEditingUsername(false);
                dispatch(changeUsername(newUsername));
            }} />}
        </div>
        <div className={styles.serverInfo}>
            <span className={styles.roomName}>{roomName}</span>
            <span onClick={() => navigator.clipboard.writeText(roomId)} className={styles.roomId}>{roomId}</span>
        </div>
    </nav>)
}