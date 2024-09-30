import Person from "../assets/Person.png";
import Hello from "../assets/Hello.png";
import Close from "../assets/CLOSE.png"
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

export function Hero() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const drawerSwitch = () => {setIsDrawerOpen(!isDrawerOpen)};

    const navbarItems = [
        { label: "Home", path: '/' },
        { label: "About", path: '/about' },
        { label: "Work", path: '/work' },
        { label: "Contact", path: '/contact' },
    ];

    const socialMedia = [
        {name: "Likedin", link:'#'},
        {name: "Twitter", link:'#'},
        {name: "Instagram", link:'#'},
        {name: "Webflow", link:'#'},
    ]

    const personPicture = (
        <img src={Person} alt="Person" className="absolute bottom-0 left-0 right-0 mx-auto" />
    )

    const helloPicture = (
        <div onClick={drawerSwitch} className="flex bg-black w-[398px] rounded-l-full absolute right-[-290px] mx-auto top-96 transition-transform duration-300 ease-in-out hover:translate-x-[-290px] cursor-pointer">
            <img src={Hello} alt="Hello" className="py-5 px-8" />
            <Typography 
                className="my-auto pr-7 font-neue text-[40px] font-medium leading-[48px] text-left text-white"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Hi I’m Ayush
            </Typography>
        </div>
    )

    const overlay = (
        <div 
            onClick={drawerSwitch}
            className={`fixed top-0 left-0 h-full bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out 
            ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
            style={{ width: '50%' }}
        />
    );

    const drawer = (
        <div 
            className={`fixed top-0 right-0 z-20 h-full bg-black transition-transform duration-300 ease-in-out 
            ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`} 
            style={{ width: '50%' }}
        >
            <div className="h-screen pt-32 pr-20 pb-14 pl-16 flex flex-col justify-between">
                <div className="flex flex-col gap-7">
                    {navbarItems.map((item, index) => {
                        const isActive = location.pathname === item.path
                        return (
                            <div className="flex items-center">
                                {isActive && <GoDotFill className="w-4 h-4 text-[#F4F7FA]" />}
                                <Typography
                                    key={index}
                                    className={`font-neue text-[60px] font-medium leading-[72px] text-left text-[#F4F7FA] cursor-pointer ${isActive ? "pl-4" : "pl-8"}`}
                                    onClick={() => navigate(item.path)}
                                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                >
                                    <div className="flex items-center">
                                        {item.label}
                                    </div>
                                </Typography>
                            </div>
                        )
                    })}
                </div>
                <div className="flex gap-8 pl-8">
                    {socialMedia.map((item, index) => {
                        return (
                            <Typography
                                key={index}
                                className="font-neue text-[18px] font-normal leading-[28.8px] text-left text-[#F4F7FA]"
                                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                            >
                                {item.name}
                            </Typography>
                        )
                    })}
                </div>
            </div>
            <img src={Close} alt="Close" onClick={drawerSwitch} className="h-20 w-20 fixed top-14 right-14 cursor-pointer" />
        </div>
    );

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
            {overlay}
            {drawer}
            {profesionAnimation}
        </div>
    )
}
