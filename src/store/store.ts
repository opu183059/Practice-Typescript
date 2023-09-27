import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import trueFalseSlice from './slices/trueFalseSlice'
import todoSlice from './slices/todoSlice'


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        globalToggle: trueFalseSlice,
        todo: todoSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
