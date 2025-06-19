import React from "react";
import Header from "../components/Header/Header";
import './Home.css';
import './contact.css';
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
    return(
        <div>
            <Header/>
            <div className="page-container">
                <h1 className="blue">Contact Us</h1>
                <p>
                    We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                    <h2>General Enquiries</h2>
                    <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                        <br/>
                        India
                    </p>
                    <p>Phone: **+91 12345 67890**
                        <br/>
                        Email: **info@vivekanandcollege.edu**
                        <br/>
                        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
                        </p>
                        <h2>Admissions Office</h2>
                        <p>
                            For all admission-related queries regarding undergraduate or postgraduate programs:
                            <br/>
                            Phone: +91 98765 43210
                            <br/>
                            Email: admissions@vivekanandcollege.edu
                        </p>
                        <h2>Find Us on the Map</h2>
                        <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
                        <a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                        <h2>Send Us a Message</h2>
                        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>

            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage