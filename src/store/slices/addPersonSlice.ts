import { createSlice } from "@reduxjs/toolkit"
import { personData } from "../../components/interface/interface"

interface personArray {
    personArray: personData[]
}

const initialState: personArray = {
    personArray: []
}

export const addPersonSlice = createSlice({
    name: "managePerson",
    initialState,
    reducers: {
        addPerson: (state, action) => {
            const personInformation = {
                id: action.payload.id,
                userName: action.payload.userName,
                city: action.payload.city,
                number: action.payload.number
            }
            state.personArray.push(personInformation)
        },
        removePerson: (state, action) => {
            state.personArray = state.personArray.filter((personData) => (personData.id != action.payload))
        }
    }
})

export const { addPerson, removePerson } = addPersonSlice.actions
export default addPersonSlice.reducer