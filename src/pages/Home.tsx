import Form from '../components/Home/Form'
import LinkList from '../components/Home/LinkList'

export default function Home() {
    return (
        <main className="min-h-screen bg-neutral-50">
            <div className="container mx-auto max-w-screen-lg px-8">
                <Form />
                <LinkList />
            </div>
        </main>
    )
}
