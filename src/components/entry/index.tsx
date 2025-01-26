import EntryFooter from "@/components/entry/entry-footer";
import {InlineTips} from "@netist/ui";

export interface EntryProps {
    content: string,
    user: {
        name: string,
        avatar: string,
        date: string
    }
}

export default function Entry({content, user}: EntryProps){
    return (
        <InlineTips>
            <InlineTips.Content>
                <div className="flex flex-col">
                    <div dangerouslySetInnerHTML={{__html: content}} className="content"></div>
                    <EntryFooter user={user}/>
                </div>
            </InlineTips.Content>
        </InlineTips>
    )
}