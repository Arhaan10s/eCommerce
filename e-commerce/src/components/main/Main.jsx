import React from 'react';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import NavigateButtons from '../NavigateButton/NavigateButtons';
import ProductSection from '../ProductSection/ProductSection';
import Footer from '../Footer/Footer';


function Main(){
    return(
        <div>
            <Navbar />
            <Slider />
            <NavigateButtons />
            <ProductSection />
            <Footer />
        </div>
    ) 
}
export default Main;