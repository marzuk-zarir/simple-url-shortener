import { IconTrash } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { selectUrls } from '../../app/features/urls/urlsSelectors'
import { deleteUrl } from '../../app/features/urls/urlsSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export default function LinkList() {
    const dispatch = useAppDispatch()

    const urls = useAppSelector(selectUrls)

    const urlOrigin = window.location.origin

    return (
        <section className="mt-14">
            <div className="flex flex-col gap-8">
                {urls.map((url) => (
                    <div className="flex justify-between" key={url.id}>
                        <p className="font-medium">
                            <Link
                                to={`${urlOrigin}/sh/${url.id}`}
                                target="__blank"
                                className="text-orange-500 transition hover:text-orange-600"
                            >
                                {`${urlOrigin}/sh/${url.id}`}
                            </Link>
                        </p>

                        <div className="flex items-center gap-3">
                            <button onClick={() => dispatch(deleteUrl({ id: url.id }))}>
                                <IconTrash className="text-orange-400 transition hover:text-orange-500" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
