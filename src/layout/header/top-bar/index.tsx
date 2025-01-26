import {Input, Button, IconButton, DropdownMenu} from "@netist/ui";
import {User01, MessageSquare02, Activity, DotsHorizontal, Channels, Settings, UserX01, Moon01, LogOut01} from "@netist/icons"
import {Link} from "react-router-dom"

export default function TopBar(){
    return (
        <div className="container mx-auto flex items-center gap-4">
            <Link to="/">
                <img src="/logo.svg" alt=""/>
            </Link>
            <div className="flex-1">
                <Input size="small" type="search" placeholder="başlık, #entry, @yazar"/>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="transparent" type="button" className="px-3 py-1.5">
                    <User01 width={16} height={16} />
                    Ben
                </Button>
                <Button variant="transparent" type="button" className="px-3 py-1.5">
                    <MessageSquare02 width={16} height={16} />
                    Mesaj
                </Button>
                <Button type="button" className="px-3 py-1.5">
                    <Activity width={16} height={16} />
                    Olay
                </Button>
                <DropdownMenu>
                    <DropdownMenu.Trigger asChild>
                        <IconButton variant="transparent">
                            <DotsHorizontal width={16} />
                        </IconButton>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className="max-w-[180px] z-50">
                        <DropdownMenu.Item className="gap-x-2">
                            <Channels width={16} height={16}/>
                            Kanallar
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="gap-x-2">
                            <Settings width={16} height={16}/>
                            Ayarlar
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="gap-x-2">
                            <Moon01 width={16} height={16}/>
                            Gece Modu
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="gap-x-2">
                            <UserX01 width={16} height={16}/>
                            Takip Engellenmiş
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item className="gap-x-2">
                            <LogOut01 width={16} height={16}/>
                            Terk
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu>

            </div>
        </div>
    )
}