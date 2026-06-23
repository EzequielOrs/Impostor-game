import { createBrowserRouter } from 'react-router'
import { ImpostorLayout } from '../layouts/ImpostorLayout'

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <ImpostorLayout/>
    }
])