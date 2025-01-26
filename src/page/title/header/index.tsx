import {Button, DropdownMenu, Input, Select} from "@netist/ui";
import {useState} from "react";

interface TitlePageHeaderProps{
    title: string
}

export default function TitlePageHeader({title}: TitlePageHeaderProps){
    const [follow, setFollow] = useState<boolean>(false)
    const [page, setPage] = useState<string>("1")

    const toggleFollow = () => setFollow(!follow)

    const pages: string[] = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29"
    ]

    return (
        <div className="flex flex-col gap-2.5 pt-2.5">
            <h3 className="text-2xl font-bold text-gray-800"> {title} </h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <DropdownMenu>
                        <DropdownMenu.Trigger>
                            <Button variant="transparent" className="p-1.5">
                                Şükela
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Son 24 Saat</DropdownMenu.Item>
                            <DropdownMenu.Item>Son 1 Hafta</DropdownMenu.Item>
                            <DropdownMenu.Item>Son 1 Ay</DropdownMenu.Item>
                            <DropdownMenu.Item>Son 3 Ay</DropdownMenu.Item>
                            <DropdownMenu.Item>Tümü</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenu.Trigger>
                            <Button variant="transparent" className="p-1.5">
                                Başlıkta Ara
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Bugün</DropdownMenu.Item>
                            <DropdownMenu.Item>Ekşi Şeyler'de</DropdownMenu.Item>
                            <DropdownMenu.Item>Linkler</DropdownMenu.Item>
                            <DropdownMenu.Item>Benimkiler</DropdownMenu.Item>
                            <DropdownMenu.Item>Görseller</DropdownMenu.Item>
                            <DropdownMenu.Item>Çaylaklar</DropdownMenu.Item>
                            <DropdownMenu.Item className="p-0">
                                <Input size="small"
                                       className="w-full"
                                       type="search"
                                       autoFocus={true}/>
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu>

                    <Button variant="transparent" className="p-1.5" onClick={toggleFollow}>
                        {!follow && "Takip Et"}
                        {follow && "Takip Etme"}
                    </Button>

                    <Button variant="transparent">
                        Sorunsallar (1)
                    </Button>
                </div>
                <div className="flex items-center gap-1.5">
                    <Select value={page} onValueChange={setPage} size="small">
                        <Select.Trigger>
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content>
                            {pages.map((page: string, index: number) => (
                                <Select.Item key={index} value={page}>
                                    {page}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select>
                    <span className="text-gray-500">/</span>
                    <Button className="aspect-square p-3.5" variant="secondary">
                        {pages[pages.length-1]}
                    </Button>
                </div>
            </div>
        </div>
    )
}