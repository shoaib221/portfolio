import { Outdent } from 'lucide-react';
import React, { use, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from '../lib/Nav/Nav.jsx';
import { Footer } from '../lib/Nav/Footer.jsx';
import "./project.css";
import { useNavContext} from '../lib/Nav/Nav4.jsx';


export const Entry = () => {
    
    const { Nav } = useNavContext();
    

    // useEffect(() => {
    //     axiosInstance.post("/auth/count", { name: "pfh" })
    //         .then(res => console.dir(res.data))
    //         .catch(err => console.dir(err))
    // }, [])

    // function scrollToTop() {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // }

    return (
        <div className='flex flex-col items-start min-h-screen w-full max-w-[1400px] mx-auto' >
            <Nav />
            
                
            <Outlet />
            
            

            {/* <div onClick={ scrollToTop } className='fixed bottom-4 right-4 z-5' >Back To Top</div> */}
        </div>
    );
};



// Layout & Page Structure
// Main Layout: Your site will have a main layout with a Navbar and Footer visible on most
// pages (excluding the dashboard layout).
// Navbar:
// ● Always Visible: Logo, Home, All Scholarships.
// ● Not Logged In: Login Button, Register Button.
// ● Logged In: User Profile Image (with dropdown), Dashboard link, Logout.
// Footer:
// ● A standard footer with Logo, Copyright, and Social Media links.

