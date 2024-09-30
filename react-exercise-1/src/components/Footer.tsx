import { Typography } from "@material-tailwind/react";

export function Footer() {
    const socialMedia = [
        {name: "Likedin", link:'#'},
        {name: "Twitter", link:'#'},
        {name: "Instagram", link:'#'},
        {name: "Webflow", link:'#'},
    ]

    return (
        <footer className="relative w-full bg-black">
            <div className="px-20 flex justify-between">
                <Typography
                    className="font-neue text-[18px] font-normal leading-[28.8px] text-left text-[#C7D0D9]"
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                >
                    Build with 💖 by Brightscout & Ayush 
                </Typography>
                <div className="flex gap-8">
                    {socialMedia.map((item, index) => {
                        return (
                            <Typography
                                key={index}
                                className="font-neue text-[18px] font-normal leading-[28.8px] text-left text-[#C7D0D9]"
                                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                            >
                                {item.name}
                            </Typography>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}