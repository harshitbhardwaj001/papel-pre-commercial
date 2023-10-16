import { useRef } from "react";
import "./ContactStyles.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_74y6buj",
        "template_63e08h3",
        form.current,
        "8iAF3NicGC42Ffgt6",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!!");
        },
        (error) => {
          console.log(error.text);
          alert("Not able to send the message currently!!");
        },
      );
  };
  return (
    <>
      <div id="contact">
        <h1>Send a message to us!</h1>
      </div>
      <div className="form-container">
        <form ref={form}>
          <input placeholder="Name" type="text" name="from_name" />
          <input placeholder="Email" type="email" name="user_mail" />
          <textarea placeholder="Message" name="message" rows="4"></textarea>
          <button onClick={sendEmail}>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
