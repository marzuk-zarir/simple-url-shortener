import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Redirect from './pages/Redirect'

export default function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/sh/:id" element={<Redirect />} />
            <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
    )
}
