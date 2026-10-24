import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactOrder from '../components/ContactUs';
import CardSection from '../components/CardSection';
import HomePage from '../components/homePage';

function ContactUs() {
    return (
        <div>
            <HomePage />
            <CardSection />
            <ContactOrder />
        </div>
    )
}

export default ContactUs
