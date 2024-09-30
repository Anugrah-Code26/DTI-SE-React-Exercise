import { Button, Typography } from "@material-tailwind/react";
import Project1 from "../assets/Project 1.png";
import Project2 from "../assets/Project 2.png";
import Project3 from "../assets/Project 3.png";
import Project4 from "../assets/Project 4.png";
import Project5 from "../assets/Project 5.png";
import Project6 from "../assets/Project 6.png";
import Project7 from "../assets/Project 7.png";
import Project8 from "../assets/Project 8.png";
import Project9 from "../assets/Project 9.png";
import Arrow from "../assets/arrow_forward.png";

const projectImages1 = [
    { label: Project1, path: '#' },
    { label: Project2, path: '#' },
    { label: Project3, path: '#' },
    { label: Project4, path: '#' },
    { label: Project5, path: '#' },
];

const projectImages2 = [
    { label: Project6, path: '#' },
    { label: Project7, path: '#' },
    { label: Project8, path: '#' },
    { label: Project9, path: '#' },
    { label: Project1, path: '#' },
];

const projectRows = [projectImages1, projectImages2];

export function ProjectLists() {
    return (
        <div className="mt-40 flex flex-col">
            {projectRows.map((row, index) => (
                <div key={index} className="overflow-x-auto whitespace-nowrap pb-5 pt-5">
                    <div className="flex gap-10">
                        {row.map((item, index) => (
                            <div key={index} className="relative inline-block bg-[#C7D0D9] group overflow-visible rounded">
                                <div className="py-14 px-12 w-96 relative transition-shadow duration-300 group-hover:shadow-3xl group-hover:shadow-black">
                                    <img 
                                        src={item.label} 
                                        alt="item" 
                                        className="h-48 object-cover transition duration-300 rounded" 
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 rounded" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Button 
                                            size="lg"
                                            color="white"
                                            className="flex gap-2 items-center text-black normal-case"
                                            ripple={true}
                                            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                        >
                                            <Typography 
                                                className="font-neue text-[16px] font-medium leading-[19.2px] text-left"
                                                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                            >
                                                Visit the website
                                            </Typography>
                                            <img src={Arrow} className="ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
