import {Avatar} from "@netist/ui";

interface EntryUserProps{
    name: string,
    avatar: string,
    date: string
}

export default function EntryUser({name, avatar, date}: EntryUserProps){
    return (
        <div className="w-full flex items-center justify-end">
            <div className="flex items-center text-right gap-2.5">
                <div className="flex flex-col gap-1 text-xs">
                    <span className="cursor-pointer text-brand hover:underline">{name}</span>
                    <span className="text-gray-400">{date}</span>
                </div>
                <Avatar
                    className="cursor-pointer hover:scale-110 transition duration-250"
                    size="large"
                    fallback={name}
                        src={avatar} />
            </div>
        </div>
    )
}