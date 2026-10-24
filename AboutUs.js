// src/pages/AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSection from '../components/aboutSection';
import HomePage from '../components/homePage';
import GetAxios from '../components/GetAxios';
import PostAxios from '../components/PostAxios';
import FetchApi from '../components/FetchApi';
import Example from '../components/example'; //  Capitalized

function AboutUs() {
    return (
        <>
            <HomePage />
            <AboutSection />
            <Example /> 
            {/* <FetchApi /> */}
            <PostAxios />
            <GetAxios />
        </>
    );
}

export default AboutUs;
