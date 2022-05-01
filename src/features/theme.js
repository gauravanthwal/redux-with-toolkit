import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {color: ''},
    reducers: {
        setTheme: (state, action)=>{
            state.color = action.payload
        }
    }
})

export const {setTheme} = themeSlice.actions;

export default themeSlice.reducer;


