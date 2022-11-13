import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "../index";


interface IUserState {
    username: string;
    currentTeam: number;
    isTeamLead: boolean;
};

const initialState: IUserState = {
    username: "Ramo",
    currentTeam: 0,
    isTeamLead: false,
};

const usersLice = createSlice({
    name: "user",
    initialState,
    reducers: {
        initializePlayer: (state: IUserState, action: PayloadAction<{isTeamLead: boolean; currentTeam: number }>) => {
            state.isTeamLead = action.payload.isTeamLead;
            state.currentTeam = action.payload.currentTeam;
        },
        changeUsername: (state: IUserState, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        changeLeadStatus: (state: IUserState, action:PayloadAction<boolean>) => {
            state.isTeamLead = action.payload;
        },
        changeTeam: (state: IUserState, action: PayloadAction<number>) => {
            state.currentTeam = action.payload;
        }
    }
});

export const useUsername = () => useSelector((state: RootState) => state.user.username);

export const useLeadStatus = () => useSelector((state: RootState) => state.user.isTeamLead);

export const useCurrentTeam = () => useSelector((state: RootState) => state.user.currentTeam);

export const { changeUsername, changeLeadStatus, changeTeam } = usersLice.actions;

export default usersLice.reducer;