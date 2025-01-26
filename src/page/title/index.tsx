import Entry, {EntryProps} from "@/components/entry";

export default function HomePage(){
    const entries: EntryProps[] = [
        {
            content: `5g ye gecmek icin uydu modulu degistirmeye gerek yoktu. 4g ayni zamanda 5g ninde altyapisini olusturur. <br>cehalet kotu sey. cok kotu.<br><br>edit: <a class="b" href="/?q=lte">lte</a>, yatirim maliyetlerinden yakinan servis tasiyicarinin ihtiyaclarini karsilamak icin tasarlanmistir. yazilim ve <a class="b" href="/?q=ctcss">ctcss</a> optimizasyonuyla artik jenerasyon degisiminde ciddi farkliliklar ortaya cikmamaktadir.`,
            user: {
                name: "bykush",
                date: "05.12.2021 14:22 ~ 16:47",
                avatar: "https://img.ekstat.com/profiles/bykush-637769349998142061.jpg"
            }
        }
    ]

    return (
        <div>
            {entries.map((entry, index) => (
                <Entry content={entry.content} user={entry.user} key={index} />
            ))}
        </div>
    )
}