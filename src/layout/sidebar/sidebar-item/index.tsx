import {SidebarItemIT} from "@/type"
import {clx} from "@netist/ui"
import {Link} from "react-router-dom"
import slugify from 'react-slugify';

interface SidebarItemProps extends SidebarItemIT{}

export default function SidebarItem({entries, title, active}: SidebarItemProps){
    return (
        <Link
            to={"/" + slugify(title)}
            className={clx(
                " w-full items-center justify-between",
                "hover:text-brand-600",
                "border-r-4 hover:border-r-brand-600",
                "transition duration-300 cursor-pointer relative text-left",
                {
                    "text-brand-600 border-r-brand-600": active,
                    "text-gray-800 border-r-transparent": !active
                }
            )}>
            {title}
            {entries && (
                <span className="text-gray-500 ml-2 text-xs font-semibold">({entries})</span>
            )}
        </Link>
    )
}