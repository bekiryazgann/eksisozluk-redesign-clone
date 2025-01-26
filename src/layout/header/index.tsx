import TopBar from "@/layout/header/top-bar";
import BottomBar from "@/layout/header/bottom-bar";

export default function Header(){
    return (
        <div className="border-t-4 border-t-brand border-b border-b-gray-200 pt-6 pb-3 flex flex-col gap-6 sticky top-0 bg-white z-50">
            <TopBar />
            <BottomBar />
        </div>
    )
}