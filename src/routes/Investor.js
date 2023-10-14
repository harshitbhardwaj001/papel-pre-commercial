import Comment from "../Components/Comments";
import Deck from "../Components/Deck";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ErrorBoundary from "../ErrorBoundary";

function Investor() {
  return (
    <>
      {/* <Navbar /> */}
      <ErrorBoundary>
        <Deck />
      </ErrorBoundary>
      <ErrorBoundary>
        <Comment />
      </ErrorBoundary>

      {/* <Footer /> */}
    </>
  );
}

export default Investor;
