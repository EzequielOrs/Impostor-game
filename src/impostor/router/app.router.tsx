import { createBrowserRouter } from 'react-router'
import { ImpostorLayout } from '../layouts/ImpostorLayout'
import { HomePage } from '../pages/HomePage'

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <ImpostorLayout />,
        children: [
            { index: true, element: <HomePage /> },
        ],
    },
])