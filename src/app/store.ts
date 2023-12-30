import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'
import urlsSlice from './features/urls/urlsSlice'

const persistConfig = {
    key: '__urls__',
    storage
}

const rootReducer = combineReducers({
    urls: urlsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
    devTools: import.meta.env.DEV
})
export const persistor = persistStore(store)

export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
