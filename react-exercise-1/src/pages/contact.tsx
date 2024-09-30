import { ContactForm } from "../components/contactForm";
import { ContactProfile } from "../components/contactProfile";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/navbar";

export function Contact() {
    return (
        <>
            <NavBar />
            <div className="mt-56 flex flex-col gap-20">
                <div className="mx-20 flex justify-between gap-20">
                    <ContactProfile />
                    <ContactForm />
                </div>
                <div className="bg-black py-20">
                    <Footer />
                </div>
            </div>
        </>
    )
}