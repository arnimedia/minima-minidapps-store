import React from 'react';
import SEO from '../common/SEO';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import SocialLayout from '../component/cta/SocialLayout';
import MiniDappsHome from '../component/minidapps/MiniDappsHome';

const MiniDapps = () => {

    return (
        <>
        <SEO title="Minima"/>
        <main className="main-wrapper">
            <Header />
            <MiniDappsHome parentClass="bg-color-dark" />
            <SocialLayout /> 
            <Footer />
        </main>
        </>
    )
}

export default MiniDapps;