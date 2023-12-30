import { useParams } from 'react-router-dom'
import { selectUrlById } from '../app/features/urls/urlsSelectors'
import { useAppSelector } from '../app/hooks'

export default function Redirect() {
    const { id } = useParams()

    const url = useAppSelector(selectUrlById(id as string))

    if (url) {
        window.location.href = url.originalUrl

        return <div>Redirecting...</div>
    }

    return <div>Invalid Url</div>
}
