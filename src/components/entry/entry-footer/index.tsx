import EntryUser from "@/components/entry-user";
import {Button, DropdownMenu, IconButton} from "@netist/ui";
import {ChevronDown, ChevronUp, Share01, DotsHorizontal} from "@netist/icons"
import {LikeIcon} from "@/components/like-icon";

interface EntryFooterProps {
    user: {
        name: string,
        avatar: string,
        date: string
    }
}

export default function EntryFooter({user}: EntryFooterProps){
    const likeUser: string[] = [
        "@acin da az hava gelsin", "@atesteki semender", "@bakbunuburdanalin", "@bayamlik prensi", "@ben buraya ciplak geldim",
        "@bes postaci geliyor", "@birkucaktaoturuyorum", "@birmanyateak", "@blackfear", "@blackrail", "@camburleyli",
        "@carpathia00", "@cerkez sever", "@cilizkalpyatakta", "@comboatar", "@developer options", "@dorduncu kromozonun kisa kolu",
        "@enyaphylia", "@ere143", "@estergonkalesininasiprensesi", "@fors bey", "@fulane hatun", "@gelecegin yildizi", "@hanzo adam",
        "@ilkayretediferro", "@iyi olmayan gececi", "@jinzo", "@justsmileallthetime", "@kafadanbacaklilar", "@kahvanede pazaak oynayan adam",
        "@kalplere fisildayan adam", "@klasjanhuntelaar", "@komutanlogaritma", "@kuarlinho", "@leseldelavie", "@lighterman",
        "@magnificentchf", "@meselekaybetmedenkazanmak", "@minyaturkalem",
    ]
    
    return (
        <div className="flex flex-col gap-2 pt-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <IconButton variant="transparent" className="!p-1">
                        <ChevronDown width={16} height={16}/>
                    </IconButton>
                    <IconButton variant="transparent" className="!p-1">
                        <ChevronUp width={16} height={16}/>
                    </IconButton>
                    <IconButton variant="transparent" className="!p-1 group">
                        <LikeIcon size={16} className="group-hover:fill-brand group-hover:text-brand-600 transition-colors duration-300"/>
                    </IconButton>
                    <DropdownMenu>
                        <DropdownMenu.Trigger>
                            <Button size="base" variant="transparent" className="p-1.5">
                                192
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="max-h-[180px] overflow-y-auto">
                            {likeUser.map((user: string, index: number) => (
                                <DropdownMenu.Item key={index}>
                                    {user}
                                </DropdownMenu.Item>
                            ))}
                        </DropdownMenu.Content>
                    </DropdownMenu>
                </div>
                <div className="flex items-center gap-1">
                    <DropdownMenu>
                        <DropdownMenu.Trigger>
                            <IconButton size="base" variant="transparent" className="p-1.5">
                                <Share01 width={16} height={16}/>
                            </IconButton>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="max-h-[180px] overflow-y-auto">
                            <DropdownMenu.Item>Facebook</DropdownMenu.Item>
                            <DropdownMenu.Item>Twitter</DropdownMenu.Item>
                            <DropdownMenu.Item>Entry Link'ini Kopyala</DropdownMenu.Item>
                            <DropdownMenu.Item>Entry No Kopyala</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenu.Trigger>
                            <IconButton size="base" variant="transparent" className="p-1.5">
                                <DotsHorizontal width={16} height={16}/>
                            </IconButton>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content className="max-h-[180px] overflow-y-auto">
                            <DropdownMenu.Item>Mesaj Gönder</DropdownMenu.Item>
                            <DropdownMenu.Item>Şikayet</DropdownMenu.Item>
                            <DropdownMenu.Item>Modlog</DropdownMenu.Item>
                            <DropdownMenu.Item>Engelle</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu>
                </div>
            </div>
            <EntryUser name={user.name} avatar={user.avatar} date={user.date} />
        </div>
    )
}