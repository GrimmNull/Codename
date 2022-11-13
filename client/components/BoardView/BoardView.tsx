"use client"
import {updateBoard, useBoard, useBoardSizes, useImagesBoard} from "../../redux/slices/boardSlice";
import styles from "./BoardView.module.scss";
import Image from "next/image";
import {useCurrentTeam} from "../../redux/slices/userSlice";
import {useDispatch} from "react-redux";
import clsx from "clsx";
import {useRoomTeams} from "../../redux/slices/roomSlice";

export const BoardView = () => {
    const dispatch = useDispatch();
    const { width, height } = useBoardSizes();
    const boardImages = useImagesBoard();
    const board = useBoard();
    const currentTeam = useCurrentTeam();
    const teams = useRoomTeams();

    return (<div className={styles.wrapper}>
        {Array(height).fill(-1).map((el, indexRow) => <div className={styles.boardRow} key={`row-${indexRow}`}>
            {Array(width).fill(-1).map((elRow, indexCol) => <Image style={{ outline: board[indexRow][indexCol] !== -1 ? `150px solid ${teams[board[indexRow][indexCol]].color}` : "" }} src={boardImages[indexRow][indexCol]} alt={""} className={clsx(styles.boardCell)} width={150} height={150} onClick={() => {
                const tempBoard: number[][] = JSON.parse(JSON.stringify(board));
                tempBoard[indexRow][indexCol] = currentTeam;
                dispatch(updateBoard(tempBoard));
            }} />)}
        </div>)}
    </div>)
}