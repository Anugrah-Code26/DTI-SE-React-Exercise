import { Button, Typography } from "@material-tailwind/react";
import ProfilePicture from "../assets/ProfilePicture.png";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export function HomeFooter() {
    const navigate = useNavigate()

    return (
        <div className="mt-40 bg-black h-[378px] flex flex-col justify-between">
            <div className="px-20 pt-20 flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <Typography
                        className="font-neue text-[60px] font-medium leading-[72px] text-left text-[#F4F7FA]"
                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                    >
                        Have something in mind? 
                    </Typography>
                    <div className="flex gap-3">
                        <div className="w-20 h-20 overflow-hidden rounded-full relative">
                            <img src={ProfilePicture} alt="Picture" className="w-full h-auto object-top absolute top-0" />
                        </div>
                        <Typography
                            className="font-neue text-[60px] font-medium leading-[72px] text-left text-[#F4F7FA]"
                            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                        >
                            let’s build it together. 
                        </Typography>
                    </div>
                </div>
                <Button 
                    className="bg-white py-6 px-12 h-[70px] rounded-full normal-case"
                    onClick={() => navigate('/contact')}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                >
                    <Typography
                        className="font-neue text-[18px] font-medium leading-[21.6px] text-left text-black"
                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                    >
                        Get in touch
                    </Typography>
                </Button>
            </div>
            <div className="pb-8">
                <Footer />
            </div>
        </div>
    )
}