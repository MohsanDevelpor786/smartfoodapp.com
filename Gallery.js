import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GallerySection from '../components/GallerySection';
import CardSection from '../components/CardSection';
import HomePage from '../components/homePage';

function Gallery() {
    return (
        <div>
            {/* <HomePage /> */}
            <GallerySection />
            <CardSection />
        </div>
    )
}

export default Gallery
