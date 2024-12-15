import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom"


const TempLayout = () => {
    return (
        <div className="max-h-screen h-screen bg-[#211f23] text-white flex">
            <Sidebar />

            <div className="flex-1 overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
};

export default TempLayout;
