import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    value: number;
}


export const counterSlice = createSlice({
    name: 'counter',
    initialState: <CounterState>{
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        random: (state) => {
            state.value = 100
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, random } = counterSlice.actions

export default counterSlice.reducer