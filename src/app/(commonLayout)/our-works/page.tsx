"use client"
import AllProjects from '@/Components/OurWorksPage/AllProjects/AllProjects';
import OurWorksHero from '@/Components/OurWorksPage/OurWorksHero/OurWorksHero';
import Container from '@/Components/Reusable/Container/Container';


const OurWorks = () => {
    
    return (
        <Container>
            <div className='flex flex-col gap-32'>
            <OurWorksHero/>
            <AllProjects/>
            </div>
        </Container>
    );
};

export default OurWorks;