"use client";
import styles from "./TeamsDisplay.module.scss";
import {useRoomTeams} from "../../redux/slices/roomSlice";
import clsx from "clsx";
import {useUsername} from "../../redux/slices/userSlice";

export const TeamsDisplay = () => {
    const teams = useRoomTeams();
    const currentUserName = useUsername();

    return <div className={styles.wrapper}>
        {teams?.map(team => <div key={team.teamName} className={styles.teamWrapper}>
            <span style={{color: team.color}} className={styles.teamName}>{team.teamName}</span>
            {team?.users?.map(user => <div>
                <span style={{ color: team.color }} className={clsx(styles.teamMember, {[styles.isTeamLead]: user.isTeamLead, [styles.isCurrentUser]: user.name === currentUserName})}>{user.name}</span>
            </div>)}
        </div>)}
    </div>
}