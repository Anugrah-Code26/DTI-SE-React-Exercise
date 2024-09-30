import { Typography } from "@material-tailwind/react";
import TestimonyPicture1 from "../assets/Testimonial 1.jpeg";
import TestimonyPicture2 from "../assets/Testimonial 2.jpeg";

export function Testimonials() {
    const testimonyLists = [
        {
            testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            picture: TestimonyPicture1,
            name: "Ayush Raj",
            profesion: "VP of Marketing @ Webflow",
        },
        {
            testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            picture: TestimonyPicture2,
            name: "Alex Cattoni",
            profesion: "Founder @ CopyPossy",
        },
    ];

    return (
        <div className="mt-40 mx-20 flex">
            <Typography 
                className="flex-none w-[420px] font-neue text-[40px] font-medium leading-[48px] text-left"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Testimonials
            </Typography>
            <div className="flex flex-col gap-16">
                {testimonyLists.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col flex-grow gap-7">
                            <Typography 
                                className="font-neue text-[27px] font-normal leading-[37.8px] text-left text-[#3C3D3E]"
                                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                            >
                                "{item.testimony}"
                            </Typography>
                            <div className="flex gap-3">
                                <img src={item.picture} alt="Picture" className="w-16 h-16 rounded-full" />
                                <div className="py-1.5 flex flex-col">
                                    <Typography 
                                        className="font-neue text-[18px] font-medium leading-[28.8px] text-left"
                                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography 
                                        className="font-neue text-[14px] font-normal leading-[22.4px] text-left"
                                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                    >
                                        {item.profesion}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
