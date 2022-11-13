import {TeamsDisplay} from "../../../components/TeamsDisplay/TeamsDisplay";
import styles from "../../../styles/layouts/room.module.scss";

export default function RoomLayout({children}: { children: React.ReactNode }) {
    return <div className={styles.wrapper}>
        <TeamsDisplay />
        {children}
    </div>
}