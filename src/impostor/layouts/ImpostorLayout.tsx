import "tailwindcss";
import { Outlet } from 'react-router'

export const ImpostorLayout = () => {
    return(
        <div className="min-h-screen bg-slate-50">
            <Outlet />
        </div>
    )
}