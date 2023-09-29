import { createSlice } from "@reduxjs/toolkit"
import { message } from "../../components/interface/interface"

interface messageArray {
    messages: message[]
}

const initialState: messageArray = {
    messages: []
}

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage: (state, { payload }) => {
            const message = {
                id: payload.id,
                name: payload.name,
                message: payload.message
            }
            state.messages.push(message)
        },
        removeMessage: (state, action) => {
            state.messages = state.messages.filter((message) => (message.id != action.payload))
        }
    }
})

export const { addMessage, removeMessage } = messageSlice.actions
export default messageSlice.reducer