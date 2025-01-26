import {SVGProps} from "react";


interface LikeIconProps extends SVGProps<SVGSVGElement>{
    size: number
}

export function LikeIcon({size = 24, ...props}: LikeIconProps){
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.5 23.5C8.07107 23.5 4.5 19.9022 4.5 15.4203C4.5 14.3813 4.98614 12.9251 5.77903 11.2704C6.56289 9.63453 7.61271 7.87197 8.66946 6.24315C9.72507 4.61608 10.7816 3.13167 11.5746 2.05352C11.9531 1.53905 12.2711 1.1176 12.5 0.817899C12.7289 1.1176 13.0469 1.53905 13.4254 2.05352C14.2184 3.13167 15.2749 4.61608 16.3305 6.24315C17.3873 7.87197 18.4371 9.63453 19.221 11.2704C20.0139 12.9251 20.5 14.3813 20.5 15.4203C20.5 19.9022 16.9289 23.5 12.5 23.5Z" stroke="currentColor"/>
        </svg>
    )
}