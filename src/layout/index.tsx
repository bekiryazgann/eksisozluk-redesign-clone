import {Outlet} from "react-router-dom";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import Sidebar from "@/layout/sidebar";

export default function Layout(){
    return (
        <div>
            <Header />
            <div className="container mx-auto flex items-start pt-10">
                <Sidebar />
                <div className="ml-[245px] pl-4">
                    <Outlet />
                    <Footer />
                </div>
                <div className="w-[300px]"></div>
            </div>
        </div>
    )
}