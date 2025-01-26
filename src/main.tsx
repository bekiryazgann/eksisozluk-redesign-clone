import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@/layout";
import HomePage from "@/page/home";
import TitlePage from "@/page/title";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:slug" element={<TitlePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
