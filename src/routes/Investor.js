import { useRef, useState } from "react";
import Comment from "../Components/Comments";
import Deck from "../Components/Deck";
import ErrorBoundary from "../ErrorBoundary";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import "./InvestorStyles.css";

function Investor() {
  const [email, setEmail] = useState("");
  const form = useRef();
  const [modal, setModal] = useState(false);

  const emailValidation = () => {
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (emailValidation() && email !== "") {
      emailjs
        .sendForm(
          "service_74y6buj",
          "template_ymccak3",
          form.current,
          "8iAF3NicGC42Ffgt6",
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
      setModal(true);
    } else {
      alert("Enter Valid Email");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Open Deck - PAPEL WATER</title>
        <meta
          name="description"
          content="Check out Papel's Open Deck for Investors."
        />
        <link rel="canonical" href="/investorpage" />
      </Helmet>
      {/* <Navbar /> */}
      <ErrorBoundary>
        <Deck />
      </ErrorBoundary>
      <ErrorBoundary>
        <Comment />
      </ErrorBoundary>
      {!modal && (
        <div className={"subscribe"}>
          <div className="mail" id="form">
            <h2>Enter Your Valid Email To Access Papel's Open Pitch Deck</h2>
            <p>
              Your backing keeps the show running, and we swear{" "}
              <strong> no email spam, ever!</strong>
            </p>
            <form ref={form}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                name="from_name"
                onChange={handleChange}
              />
            </form>
            <button onClick={sendEmail}>Enter</button>
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default Investor;
