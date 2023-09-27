import { createSlice } from '@reduxjs/toolkit'

export interface globalToggle {
    value: boolean
}
const initialState: globalToggle = {
    value: false
}

export const trueFalseSlice = createSlice({
    name: 'globalToggle',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value
        },

    },
})

export const { toggle } = trueFalseSlice.actions
export default trueFalseSlice.reducer