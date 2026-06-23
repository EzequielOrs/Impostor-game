import { RouterProvider } from "react-router"
import { AppRouter } from "./impostor/router/app.router"

export const ImpostorApp = () => {
    return(
        <>
            <div> ImpostorApp </div>
            <RouterProvider router={ AppRouter }/>
        </>
    )
}