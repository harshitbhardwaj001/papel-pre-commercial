import ContactUs from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - PAPEL WATER</title>
        <meta name="description" content="Get in touch with us." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      {/* <Navbar /> */}
      <ContactUs />
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
