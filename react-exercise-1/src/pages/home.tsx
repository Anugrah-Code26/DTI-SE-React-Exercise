import { About } from '../components/about';
import { Hero } from '../components/hero';
import { ProjectLists } from '../components/projectList';
import { Testimonials } from '../components/testimonial';
import { Work } from '../components/work';
import { HomeFooter } from '../components/HomeFooter';
import { NavBar } from '../components/navbar';

export function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Work />
            <ProjectLists />
            <Testimonials />
            <HomeFooter />
        </>
    )
}