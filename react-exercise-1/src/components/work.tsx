import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import WhiteArrowButton from "../assets/White Arrow.png";
import BlackArrowButton from "../assets/Black Arrow.png";

export function Work() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const recentWorkItems = [
        {
            label: "Decodable.co",
            category: "Brand Design - Webflow Development - Web Design",
            path: '#'
        },
        {
            label: "Gofirefly.io",
            category: "Brand Design - Webflow Development - Web Design",
            path: '#'
        },
        {
            label: "Blinkops.com",
            category: "Brand Design - Webflow Development - Web Design",
            path: '#'
        },
        {
            label: "Withkanvas.com",
            category: "Brand Design - Webflow Development - Web Design",
            path: '#'
        },
    ];

    return (
        <div className="mt-40 mx-20 flex">
            <Typography
                className="flex-none w-[420px] font-neue text-[40px] font-medium leading-[48px] text-left"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Recent Work
            </Typography>
            <div className="flex flex-col flex-grow gap-8 divide-y-2 divide-solid divide-[#C7D0D9]">
                {recentWorkItems.map((item, index) => {
                    return (
                        <div key={item.label} className={`flex justify-between ${index !== 0 ? 'pt-8' : ''}`}>
                            <div className="flex flex-col gap-5">
                                <Typography 
                                    className="font-inter text-[60px] font-normal leading-[72.61px] text-left"
                                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                >
                                    {item.label}
                                </Typography>
                                <Typography
                                    className="font-neue text-[18px] font-medium leading-[28.8px] text-left text-[#3C3D3E]"
                                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                >
                                    {item.category}
                                </Typography>
                            </div>
                            <div 
                                onMouseEnter={() => setHoveredIndex(index)} 
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img src={hoveredIndex === index ? BlackArrowButton : WhiteArrowButton} alt="Detail Button" className="transition-all duration-300 ease-in-out" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
