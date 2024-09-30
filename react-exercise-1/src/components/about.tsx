import { Typography } from "@material-tailwind/react";

export function About() {

    return (
        <div className="mt-40 mx-20 flex">
            <Typography 
                className="flex-none w-[420px] font-neue text-[40px] font-medium leading-[48px] text-left"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                About
            </Typography>
            <Typography 
                className="flex-grow font-neue text-[27px] font-normal leading-[37.8px] text-left text-[#3C3D3E]"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </Typography>
        </div>
    )
}
