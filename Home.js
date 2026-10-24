// src/pages/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../components/homePage';
import AboutSection from '../components/aboutSection';
import GallerySection from '../components/GallerySection';
import CardSection from '../components/CardSection';
import GoogleYoutube from '../components/googleyoutube';
import Team from '../components/team';
import CrudModal from '../components/CrudModal';
function Home() {
  return (
    <div>
      <HomePage />
      <AboutSection />
      <GallerySection />
      <CardSection />
      <Team />
      <GoogleYoutube />
      <CrudModal />
    </div>
  );
}

export default Home;
