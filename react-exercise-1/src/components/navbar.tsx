import React from "react";
import {
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
 
export function NavBar() {
    const navigate = useNavigate()

    const navbarItems = [
        { label: "About", path: '/about' },
        { label: "Work", path: '/work' },
        { label: "Contact", path: '/contact' },
    ];

    const navList = (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
            {navbarItems.map((item) => {
                return (
                    <Typography
                        key={item.label}
                        className="font-neue text-[18px] font-normal leading-[21.6px] text-center text-black cursor-pointer"
                        onClick={() => navigate(item.path)}
                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                    >
                        {item.label}
                    </Typography>
                )
            })}
        </ul>
    )

    const [openNav, setOpenNav] = React.useState(false);
    
    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);
    
    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
 
    return (
        <div className="absolute top-0 left-0 w-full bg-transparent z-10 rounded-none shadow-none border-0 px-20 py-3">
            <div className="flex items-center justify-between">
                <img src={Logo} alt="logo" onClick={() => navigate('/')} className="cursor-pointer" />
                <div className="hidden lg:block">
                    {navList}
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        
                >
                {openNav ? (
                    <IoClose className="h-6 w-6" color="black" />
                ) : (
                    <IoMenu className="h-6 w-6" color="black" />
                )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                {navList}
            </Collapse>
        </div>
    );
}