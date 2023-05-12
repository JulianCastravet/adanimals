import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Home from './Home';

export default function PublicRoutes() {
    
    return (
        <div className="">
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}