import {createSlice } from "@reduxjs/toolkit";

const itemsinitialState = {menudata  : [] , likedata : {} , submitdata : []};

const averagedataSlice = createSlice({
    name : 'averagedata',
    initialState : itemsinitialState,
    reducers : {
        itemCheck(state , action){
            state.menudata = action.payload.slice();       
        },
        likedataCheck(state , action){
            state.likedata = Object.assign(action.payload , {});   
        },
        submitdataCheck(state , action){
            state.submitdata = action.payload.slice();       
        }
    }
})

export default averagedataSlice.reducer;
export const averagedataAction = averagedataSlice.actions;