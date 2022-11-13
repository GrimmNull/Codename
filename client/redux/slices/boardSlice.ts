import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "../index";

interface IVisualBoard {
    height: number;
    width: number;
    board: number[][];
}

interface IBoardState {
    height: number;
    width: number;
    board: number[][];
    images: string[][];
    teamLeadBoard: number[][];
}

const initialState: IBoardState = {
    height: 4,
    width: 5,
    board: [
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1]
    ],
    images: [
        ["https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg"],
        ["https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg"],
        ["https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg"],
        ["https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg", "https://i.redd.it/2qtf46eeyri71.jpg"]
    ],
    teamLeadBoard: [
        [0, 2, 0, 1, 1],
        [0, 2, 2, 0, 1],
        [0, 0, 1, 2, 0],
        [1, 2, 0, 0, -1]
    ]
}

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        initializeBoard: (state: IBoardState, action: PayloadAction<IBoardState>) => {
            state = action.payload;
        },
        updateBoard: (state: IBoardState, action: PayloadAction<number[][]>) => {
            state.board = action.payload;
        }
    }
})

export const useBoardSizes = (): { height: number, width: number }  => useSelector((state: RootState) => ({
    height: state.board.height,
    width: state.board.width,
}));

export const useBoard = () => useSelector((state: RootState) => state.board.board);

export const useImagesBoard = () => useSelector((state: RootState) => state.board.images);

export const useTeamLeadBoard = () => useSelector((state: RootState) => state.board.teamLeadBoard);

export const { initializeBoard, updateBoard } = boardSlice.actions;

export default boardSlice.reducer;



