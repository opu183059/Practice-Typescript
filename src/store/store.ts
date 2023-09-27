import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import trueFalseSlice from './slices/trueFalseSlice'
import todoSlice from './slices/todoSlice'
import addPersonSlice from './slices/addPersonSlice'


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        globalToggle: trueFalseSlice,
        todo: todoSlice,
        managePerson: addPersonSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
