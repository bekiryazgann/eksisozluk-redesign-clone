import {SidebarItemIT} from "@/type";
import SidebarItem from "@/layout/sidebar/sidebar-item";

export default function Sidebar(){
    const items: SidebarItemIT[] = [
        {
            title: "steam deck"
        },
        {
            title: "ekşi sözlük dertleşecek insan veritabanı",
            entries: 106
        },
        {
            title: "gezi olayları sırasında yaşanan tuvalet sorunu",
            entries: 4
        },
        {
            title: "26 ocak 2025 ikinci yenidoğan çetesi skandalı",
            entries: 179
        },
        {
            title: "26 ocak 2025 fenerbahçe göztepe maçı",
            entries: 516
        },
        {
            title: "tugay kosova"
        },
        {
            title: "votka kola"
        },
        {
            title: "sofian amrabat",
            entries: 3
        },
        {
            title: "ali koç istifa"
        },
        {
            title: "edin dzeko",
            entries: 2
        }
    ]

    return (
        <div className="max-w-[245px] flex-1 flex flex-col gap-4 fixed top-[169px] pt-2">
            <h3 className="text-lg text-gray-800 font-semibold"> Bugün </h3>
            <div className="flex flex-col gap-4">
                {items.map((item: SidebarItemIT, index: number) => (
                    <SidebarItem
                        title={item.title}
                        entries={item.entries}
                        active={item.active}
                        key={index}/>
                ))}
            </div>
        </div>
    )
}