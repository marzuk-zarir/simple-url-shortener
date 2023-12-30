import { AppRootState } from '../../store'

export const selectUrls = (state: AppRootState) => state.urls

export const selectUrlById = (id: string) => (state: AppRootState) =>
    state.urls.find((url) => url.id === id)

export const selectUrlByOriginalUrl = (originalUrl: string) => (state: AppRootState) =>
    state.urls.find((url) => url.originalUrl === originalUrl)
