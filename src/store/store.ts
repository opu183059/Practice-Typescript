import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import trueFalseSlice from './slices/trueFalseSlice'
import todoSlice from './slices/todoSlice'
import addPersonSlice from './slices/addPersonSlice'
import messageSlice from './slices/messageSlice'


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        globalToggle: trueFalseSlice,
        todo: todoSlice,
        managePerson: addPersonSlice,
        message: messageSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
