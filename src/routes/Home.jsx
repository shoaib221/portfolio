import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from '../lib/Theme/Theme';
import '../lib/animation/animation1.css'
import { Banner, About, Skill, Project, Achievement, Experience } from './compo.jsx'
import { useNavContext } from '../lib/Nav/Nav4.jsx';
import { IoMenu } from "react-icons/io5";



export const Home = () => {

    const { ThemeChoice, ThemeButton2 } = useTheme()

    const [board, setBoard] = useState("intro")
    const [sideMenu, setSideMenu] = useState(false)


    return (
        <div className='flex flex-col lg:flex-row grow relative  w-full pt-12' >

            {/* small screen */}
            <div className={`fixed w-full h-full block lg:hidden bg-(--color4) text-(--color1) z-30 side-bar ${ sideMenu ? 'show': "" } flex flex-col gap-4 items-center`} >
                <div className={`cursor-pointer ${ board=== 'intro' && 'border-b-1' }`} onClick={() => {setSideMenu(false); setBoard("intro");} } >Introduction</div>
                <div className={`cursor-pointer ${ board=== 'project' && 'border-b-1' }`} onClick={() => {setSideMenu(false); setBoard("project");} } >Project</div>
                <div className={`cursor-pointer ${ board=== 'skill' && 'border-b-1' }`} onClick={() => {setSideMenu(false); setBoard("skill"); } } >Skill</div>
                <div className={`cursor-pointer ${ board=== 'achievement' && 'border-b-1' }`} onClick={() => {setSideMenu(false); setBoard("achievement");} } >Achievement</div>
                <div className={`cursor-pointer ${ board=== 'experience' && 'border-b-1' }`} onClick={() => {setSideMenu(false); setBoard("experience");} } >Experience</div>
            </div>

            <nav className='fixed top-0 left-0 right-0 bg-(--color4) text-(--color1) h-12 z-30' >

                <div className='hidden lg:flex justify-evenly items-center h-12' >
                    <div className={`cursor-pointer ${ board=== 'intro' && 'border-b-1' }`} onClick={() => setBoard("intro")} >Introduction</div>
                    <div className={`cursor-pointer ${ board=== 'project' && 'border-b-1' }`} onClick={() => setBoard("project")} >Project</div>
                    <div className={`cursor-pointer ${ board=== 'skill' && 'border-b-1' }`} onClick={() => setBoard("skill")} >Skill</div>
                    <div className={`cursor-pointer ${ board=== 'achievement' && 'border-b-1' }`} onClick={() => setBoard("achievement")} >Achievement</div>
                    <div className={`cursor-pointer ${ board=== 'experience' && 'border-b-1' }`} onClick={() => setBoard("experience")} >Experience</div>

                </div>

                <IoMenu className='block lg:hidden text-2xl m-3' onClick={ () => setSideMenu(prev => !prev) } />
                
            </nav>




            <Banner />



            {board === "intro" && <About />}
            {board === "skill" && <Skill />}
            {board === "project" && <Project />}
            {board === "achievement" && <Achievement />}
            {board === "experience" && <Experience />}







        </div>
    );
};



// Home Page
// Banner: A hero section with a title, description, and a "Search Scholarship" button.
// Top Scholarships (Dynamic): A section displaying the top 6 scholarships (e.g., those
// with the lowest application fees or most recent post date). Each card must have a
// "View Details" button.
// Animation: You must implement animation on the Home page using framer-motion.
// Two Extra Sections: Add two extra static sections. For example:
// 1. A "Success Stories" or "Testimonials" section.
// 2. A "Contact Us" or "F.A.Q" section.
