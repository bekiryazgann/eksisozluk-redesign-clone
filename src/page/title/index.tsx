import Entry, {EntryProps} from "@/components/entry";
import TitlePageHeader from "@/page/title/header";

export default function HomePage(){
    const entries: EntryProps[] = [
        {
            content: `5g ye gecmek icin uydu modulu degistirmeye gerek yoktu. 4g ayni zamanda 5g ninde altyapisini olusturur. <br>cehalet kotu sey. cok kotu.<br><br>edit: <a class="b" href="/?q=lte">lte</a>, yatirim maliyetlerinden yakinan servis tasiyicarinin ihtiyaclarini karsilamak icin tasarlanmistir. yazilim ve <a class="b" href="/?q=ctcss">ctcss</a> optimizasyonuyla artik jenerasyon degisiminde ciddi farkliliklar ortaya cikmamaktadir.`,
            user: {
                name: "bykush",
                date: "05.12.2021 14:22 ~ 16:47",
                avatar: "https://img.ekstat.com/profiles/bykush-637769349998142061.jpg"
            }
        },
        {
            content: `bırakın göztepe düşmanları kendi pisliği içinde boğulsun.`,
            user: {
                name: "eyukcell",
                date: "31.12.2024 15:45",
                avatar: "https://ekstat.com/img/default-profile-picture-light.svg"
            }
        },
        {
            content: `ergenleri şimdiden gazlamış maçtır. futbol üzerinden tartışmalara girmeyi sevmiyorum ama bir şeye yanıt verip çıkacam, "sünepe zengin çocukları" demişsin ya bilader, göztepe tribününde öyle semtlerden öyle delikanlı çocuklar var ki karşılaşsan meczup olur, kadıköy sokaklarında sabah akşam göz göz çekersin, götüne enlemesine girmiş klavyenle beraber.`,
            user: {
                name: "1971 2007",
                date: "31.12.2024 16:07",
                avatar: "https://img.ekstat.com/profiles/1971-2007-636350262006085769.jpg"
            }
        },
        {
            content: `5g ye gecmek icin uydu modulu degistirmeye gerek yoktu. 4g ayni zamanda 5g ninde altyapisini olusturur. <br>cehalet kotu sey. cok kotu.<br><br>edit: <a class="b" href="/?q=lte">lte</a>, yatirim maliyetlerinden yakinan servis tasiyicarinin ihtiyaclarini karsilamak icin tasarlanmistir. yazilim ve <a class="b" href="/?q=ctcss">ctcss</a> optimizasyonuyla artik jenerasyon degisiminde ciddi farkliliklar ortaya cikmamaktadir.`,
            user: {
                name: "bykush",
                date: "05.12.2021 14:22 ~ 16:47",
                avatar: "https://img.ekstat.com/profiles/bykush-637769349998142061.jpg"
            }
        },
        {
            content: `bırakın göztepe düşmanları kendi pisliği içinde boğulsun.`,
            user: {
                name: "eyukcell",
                date: "31.12.2024 15:45",
                avatar: "https://ekstat.com/img/default-profile-picture-light.svg"
            }
        },
        {
            content: `ergenleri şimdiden gazlamış maçtır. futbol üzerinden tartışmalara girmeyi sevmiyorum ama bir şeye yanıt verip çıkacam, "sünepe zengin çocukları" demişsin ya bilader, göztepe tribününde öyle semtlerden öyle delikanlı çocuklar var ki karşılaşsan meczup olur, kadıköy sokaklarında sabah akşam göz göz çekersin, götüne enlemesine girmiş klavyenle beraber.`,
            user: {
                name: "1971 2007",
                date: "31.12.2024 16:07",
                avatar: "https://img.ekstat.com/profiles/1971-2007-636350262006085769.jpg"
            }
        },
        {
            content: `5g ye gecmek icin uydu modulu degistirmeye gerek yoktu. 4g ayni zamanda 5g ninde altyapisini olusturur. <br>cehalet kotu sey. cok kotu.<br><br>edit: <a class="b" href="/?q=lte">lte</a>, yatirim maliyetlerinden yakinan servis tasiyicarinin ihtiyaclarini karsilamak icin tasarlanmistir. yazilim ve <a class="b" href="/?q=ctcss">ctcss</a> optimizasyonuyla artik jenerasyon degisiminde ciddi farkliliklar ortaya cikmamaktadir.`,
            user: {
                name: "bykush",
                date: "05.12.2021 14:22 ~ 16:47",
                avatar: "https://img.ekstat.com/profiles/bykush-637769349998142061.jpg"
            }
        },
        {
            content: `bırakın göztepe düşmanları kendi pisliği içinde boğulsun.`,
            user: {
                name: "eyukcell",
                date: "31.12.2024 15:45",
                avatar: "https://ekstat.com/img/default-profile-picture-light.svg"
            }
        },
        {
            content: `ergenleri şimdiden gazlamış maçtır. futbol üzerinden tartışmalara girmeyi sevmiyorum ama bir şeye yanıt verip çıkacam, "sünepe zengin çocukları" demişsin ya bilader, göztepe tribününde öyle semtlerden öyle delikanlı çocuklar var ki karşılaşsan meczup olur, kadıköy sokaklarında sabah akşam göz göz çekersin, götüne enlemesine girmiş klavyenle beraber.`,
            user: {
                name: "1971 2007",
                date: "31.12.2024 16:07",
                avatar: "https://img.ekstat.com/profiles/1971-2007-636350262006085769.jpg"
            }
        },
    ]

    return (
        <div className="flex flex-col gap-5">
            <TitlePageHeader title="26 ocak 2025 fenerbahçe göztepe maçı" />
            <div className="flex flex-col gap-3.5">
                {entries.map((entry, index) => (
                    <Entry content={entry.content} user={entry.user} key={index} />
                ))}
            </div>
        </div>
    )
}