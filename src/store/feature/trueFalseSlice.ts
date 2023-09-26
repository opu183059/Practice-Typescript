import { createSlice } from '@reduxjs/toolkit'

export const trueFalseSlice = createSlice({
    name: 'trueFalse',
    initialState: {
        value: true,
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value
        },

    },
})

// Action creators are generated for each case reducer function
export const { toggle } = trueFalseSlice.actions

export default trueFalseSlice.reducer