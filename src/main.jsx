import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { NotFound } from './lib/miscel/NotFound.jsx';
import { NavProvider } from './lib/Nav/context.jsx';


import './lib/Box/box.css';
import './index.css';
import "./lib/Buttons/button.css";
import './lib/Theme/Theme.css'
import { Entry } from './routes/Entry.jsx';
import { Home } from './routes/Home.jsx';


const queryClient = new QueryClient();

const App = () => {


    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient} >
                <NavProvider>
                    <ToastContainer />
                    <Routes>
                        <Route path='/' element={<Entry />} >
                            <Route index element={<Home />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </NavProvider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}



createRoot(document.getElementById('root')).render(<App />);

