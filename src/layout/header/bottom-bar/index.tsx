import {Button, DropdownMenu, IconButton} from "@netist/ui";
import {DotsHorizontal} from "@netist/icons";

export default function BottomBar(){
    const topChannels: string[] = [
        "Bugün",
        "Gündem",
        "Debe",
        "Sorunsallar",
        "Takip",
        "Son",
        "Çaylaklar"
    ]

    const moreChannels: string[] = [
        "Tarihte Bugün",
        "#spor",
        "#ilişkiler",
        "#yaşam",
        "#siyaset",
        "#seyahat",
        "#müzik",
        "Başıboşlar",
        "Tüm Kanallar"
    ]

    return (
        <div className="container mx-auto flex items-center justify-center gap-3">
            <div className="flex items-center gap-3">
                {topChannels.map((channel: string, index: number) => (
                    <Button variant="transparent" key={index}>
                        {channel}
                    </Button>
                ))}
                <DropdownMenu>
                    <DropdownMenu.Trigger asChild>
                        <IconButton variant="transparent">
                            <DotsHorizontal width={16} />
                        </IconButton>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content className="max-w-[180px] z-50">
                        {moreChannels.map((channel: string, index: number) => (
                            <DropdownMenu.Item key={index}>{channel}</DropdownMenu.Item>
                        ))}
                    </DropdownMenu.Content>
                </DropdownMenu>
            </div>
        </div>
    )
}