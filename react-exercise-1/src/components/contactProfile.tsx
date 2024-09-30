import { Typography } from "@material-tailwind/react";
import ProfilePicture from "../assets/ProfilePicture.png";

export function ContactProfile() {
    const contactDetailList = ["ayush.barnwal@brightscout.com", "+91 8651447521"]

    const socialMediaLists = [
        {name: "Likedin", link:'#'},
        {name: "Twitter", link:'#'},
        {name: "Instagram", link:'#'},
        {name: "Webflow", link:'#'},
        {name: "Figma", link:'#'},
    ]

    const profilePicture = (
        <div className="w-80 h-80 overflow-hidden rounded-full relative">
            <img src={ProfilePicture} alt="Picture" className="w-full h-auto object-top absolute top-0" />
        </div>
    )

    const contactDetails = (
        <div className="flex flex-col gap-2">
            <Typography
                className="font-neue text-[18px] font-normal leading-[28.8px] text-left text-[#3C3D3E]"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Contact Details
            </Typography>
            <div className="flex flex-col gap-1.5">
                {contactDetailList.map((item, index) => {
                    return (
                        <Typography
                            key={index}
                            className="font-neue text-[27px] font-normal leading-[37.8px] text-left"
                            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                        >
                            {item}
                        </Typography>
                    )
                })}
            </div>
        </div>
    )

    const socialMedia = (
        <div className="flex flex-col gap-2">
            <Typography
                className="font-neue text-[18px] font-normal leading-[28.8px] text-left text-[#3C3D3E]"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Social
            </Typography>
            <div className="flex flex-col gap-1.5">
                {socialMediaLists.map((item, index) => {
                    return (
                        <Typography
                            key={index}
                            className="font-neue text-[27px] font-normal leading-[37.8px] text-left"
                            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                        >
                            {item.name}
                        </Typography>
                    )
                })}
            </div>
        </div>
    )

    return (
        <div className="flex flex-col gap-14">
            {profilePicture}
            {contactDetails}
            {socialMedia}
        </div>
    )
}
