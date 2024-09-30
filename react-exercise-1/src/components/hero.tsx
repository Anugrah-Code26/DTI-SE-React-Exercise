import Person from "../assets/Person.png";
import Hello from "../assets/Hello.png";
import { Typography } from "@material-tailwind/react";

export function Hero() {
    const personPicture = (
        <img src={Person} alt="Person" className="absolute bottom-0 left-0 right-0 mx-auto" />
    )

    const helloPicture = (
        <div className="flex bg-black w-[398px] rounded-l-full absolute right-[-290px] mx-auto top-96 transition-transform duration-300 ease-in-out hover:translate-x-[-290px]">
            <img src={Hello} alt="Hello" className="py-5 px-8" />
            <Typography 
                className="my-auto pr-7 font-neue text-[40px] font-medium leading-[48px] text-left text-white"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Hi I’m Ayush
            </Typography>
        </div>
    )

    const profesionAnimation = (
        <div className="absolute bottom-48">
            <Typography 
                className="whitespace-nowrap font-neue text-[180px] font-medium leading-[180px] text-left text-custom-gray animate-move-left"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Flow Developer - UI/UX
            </Typography>
        </div>
    )

    return (
        <div className="bg-[#C7D0D9] h-screen relative overflow-x-hidden">
            {personPicture}
            {helloPicture}
            {profesionAnimation}
        </div>
    )
}
