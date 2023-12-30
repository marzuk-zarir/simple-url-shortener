import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { customAlphabet } from 'nanoid'

type URL = {
    id: string
    originalUrl: string
}

const initialState: URL[] = []

const urlsSlice = createSlice({
    name: 'urls',
    initialState,
    reducers: {
        addUrl(state, action: PayloadAction<{ url: string }>) {
            const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 8)

            state.push({
                id: nanoid(),
                originalUrl: action.payload.url
            })
        },

        deleteUrl(state, action: PayloadAction<{ id: string }>) {
            const index = state.findIndex((url) => url.id === action.payload.id)

            if (index !== -1) {
                state.splice(index, 1)
            }
        }
    }
})

export const { addUrl, deleteUrl } = urlsSlice.actions
export default urlsSlice.reducer
