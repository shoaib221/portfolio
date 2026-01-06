import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from '../lib/Theme/Theme';
import '../lib/animation/animation1.css'


export const Home = () => {
    
    const { ThemeChoice, ThemeButton2 } = useTheme()

    return (
        <div className='block flex-grow relative  w-full' >
            <div className='h-90  w-full flex flex-col sm:flex-row-reverse' >
                <div className='h-60 w-60 rounded-full bg-contain bg-top bg-no-repeat' style={{ backgroundImage: `url(/shoaib2.jpg)` }} >

                </div>

                <div>
                    
                </div>

                

            </div>

            

            
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
