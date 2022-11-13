import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "../index";

interface IUpdateRoomPayload {
    currentRoomId: string;
    roomName: string;
}

interface IUser {
    name: string;
    isTeamLead: boolean;
}

export interface ITeam {
    teamName: string;
    color: string;
    users: IUser[];
}

interface IRoomState {
    roomName: string;
    currentRoomId: string;
    teams: ITeam[];
}

const testTeams: ITeam[] = [
    {
        teamName: "Chihiro",
        color: "#fff",
        users: [
            {
                name: "Ramo",
                isTeamLead: true,
            },
            {
                name: "Ramo's alter ego",
                isTeamLead: false,
            }
        ]
    },
    {
        teamName: "ElectricLizard",
        color: "yellow",
        users: [
            {
                name: "ElectricHoney",
                isTeamLead: true,
            },
            {
                name: "Lix",
                isTeamLead: false,
            }
        ]
    }
]

const initialState: IRoomState = {
    roomName: "testRoom",
    currentRoomId: "efd4-sdfef4-df4",
    teams: testTeams,
}

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        changeRoom: (state: IRoomState, action: PayloadAction<IUpdateRoomPayload>) => {
            const {roomName, currentRoomId} = action.payload;
            state.roomName = roomName;
            state.currentRoomId = currentRoomId;
        },
        updatePlayers: (state: IRoomState, action: PayloadAction<ITeam[]>) => {
            state.teams = action.payload;
        }
    }
})

export const useCurrentRoom = () => useSelector((state: RootState) => state.room.currentRoomId);

export const useRoomName = () => useSelector((state: RootState) => state.room.roomName);

export const useRoomTeams = () => useSelector((state: RootState) => state.room.teams);

export const {changeRoom, updatePlayers} = roomSlice.actions;

export default roomSlice.reducer;