import { IconRadioactive } from '@tabler/icons-react'
import clsx from 'clsx'
import { FormEvent, useState } from 'react'
import { selectUrls } from '../../app/features/urls/urlsSelectors'
import { addUrl } from '../../app/features/urls/urlsSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export default function Form() {
    const dispatch = useAppDispatch()

    const storedUrls = useAppSelector(selectUrls)

    const [url, setUrl] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const isValid = /^(ftp|http|https):\/\/[^ "]+$/.test(url.trim())

        if (!url.trim()) {
            setError('Please enter a URL')
            return
        }

        if (!isValid) {
            setError('Please enter a valid URL')
            return
        }

        if (storedUrls.find((storedUrl) => storedUrl.originalUrl === url.trim())) {
            setError('This URL is already shortened. Please enter a new URL')
            return
        }

        setError('')
        dispatch(addUrl({ url }))
        setUrl('')
    }

    return (
        <section>
            <h1 className="mx-auto max-w-screen-md py-14 text-center text-3xl font-extrabold text-neutral-600">
                Create short links and use it from same browser. Otherwise it won't work 😇
            </h1>

            <form onSubmit={handleSubmit} className="flex w-full items-start gap-4">
                <div className="w-full">
                    <input
                        type="text"
                        name="url"
                        value={url}
                        onChange={(ev) => setUrl(ev.target.value)}
                        placeholder="Paste your link here"
                        className={clsx(
                            'w-full rounded-md border bg-orange-50 px-6 py-2.5 text-lg text-orange-500 placeholder-orange-300 transition focus:outline-0 focus:ring-1',
                            error
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-orange-300 focus:ring-orange-300'
                        )}
                    />
                    {error && <p className="ml-3 font-medium text-red-600">** {error}</p>}
                </div>
                <button
                    type="submit"
                    className="flex items-center rounded-md bg-orange-500 px-6 py-3 font-bold text-neutral-100 transition focus:ring-2 focus:ring-orange-300"
                >
                    <IconRadioactive className="mr-2" />
                    Short
                </button>
            </form>
        </section>
    )
}
