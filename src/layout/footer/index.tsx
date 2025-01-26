import {Button} from "@netist/ui";

export default function Footer(){
    const titles: string[] = [
        'iletişim',
        'şeffaflık raporları',
        'sözlük kuralları',
        'reklam',
        'kariyer',
        'kullanım koşulları',
        'gizlilik politikamız',
        'sss',
        'istatistikler',
        'modlog',
        'sub-etha',
        'instagram',
        'twitter',
        'facebook',
    ]

    return (
        <div className="border-t border-t-gray-200 py-3 mt-3 flex flex-wrap items-center gap-1">
            {titles.map((channel: string, index: number) => (
                <Button variant="transparent" key={index} className="px-2.5 py-1">
                    {channel}
                </Button>
            ))}
        </div>
    )
}