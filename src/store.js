import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/users';
import counterReducer from './features/counter';
import themeReducer from './features/theme';

const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
        theme: themeReducer
    }
})

export default store;