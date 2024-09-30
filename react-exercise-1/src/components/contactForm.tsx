import { Button, Typography } from "@material-tailwind/react";

export function ContactForm() {
    const formLists = [
        { label: "Name", detail: "James Robert" },
        { label: "Email", detail: "ayush.barnwal@brightscout.com" },
        { label: "Subject", detail: "For web design work Enquire" },
        { label: "Message", detail: "Type your Message" },
    ]

    return (
        <div className="flex flex-col gap-9">
            <Typography
                className="font-neue text-[60px] font-medium leading-[72px] text-left"
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            >
                Let’s build something cool together
            </Typography>
            <div className="flex flex-col gap-8">
                <form>
                    <div className="flex flex-col gap-8">
                        {formLists.map((item, index) => {
                            return (
                                <div key={index} className={`border-b-2 border-[#3C3D3E] border-solid flex flex-col gap-3 ${item.label === "Message" ? "h-60" : ""}`}>
                                    <Typography
                                        className="font-neue text-[18px] font-normal leading-[28.8px] text-left"
                                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                    >
                                        {item.label}
                                    </Typography>
                                    <input className="pb-3 w-full bg-transparent border-none font-neue text-[27px] font-normal leading-[37.8px] text-left text-[#3C3D3E]" placeholder={item.detail} />
                                </div>
                            )
                        })}
                    </div>
                </form>
                <Button 
                    className="py-6 px-12 w-fit rounded-full normal-case"
                    placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                >
                    <Typography
                        className="font-neue text-[18px] font-medium leading-[21.6px] text-left"
                        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                    >
                        Submit
                    </Typography>
                </Button>            
            </div>
        </div>
    )
}
