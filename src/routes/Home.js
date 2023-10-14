import Features from "../Components/Features";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Animation from "../Components/Animation";
import WaterName from "../Components/WaterName";
import Footer from "../Components/Footer";
import Coming from "../Components/comingsoon";

function Home() {
  {
    console.log("reached home");
  }
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName="hero"
        heroImg="/assets/img/Banner3.png"
        desc="What is"
        title="PAPEL?"
        btnText="Find Out"
        url="/#about"
        btnClass="show"
      />
      <WaterName />
      <Animation />
      <Features
        key="1"
        cName="fa-sharp fa-solid fa-recycle fa-spin fa-sm"
        section="section2"
        title="68% Renewable"
        desc=""
        imgSrc="/assets/img/renewable_illustration_1.svg"
      />
      <Features
        key="2"
        cName="fa-sharp fa-solid fa-bottle-water fa-shake fa-2xl"
        section="section1"
        title="75% Paper-Based"
        desc=""
        imgSrc="/assets/img/no_plastic_illustration_1.svg"
      />
      <Features
        key="3"
        cName="fa-sharp fa-solid fa-bottle-water fa-shake fa-2xl"
        section="section3"
        title="Smoothest Alkaline Water Ever!"
        // desc="Experience the Ultimate Refreshment :"
        imgSrc="/assets/img/alkaline_water_1.svg"
        imgName="alkaline"
      />
      <Features
        key="4"
        cName="fa-sharp fa-solid fa-bottle-water fa-shake fa-2xl"
        section="section4"
        title="1 PAPEL Truck = 1.5 Million Packs"
        desc="Everyone else need 12 trucks to ship fully formed bottles."
        imgSrc="/assets/img/truck_1.svg"
        imgName="truck"
      />
      <Features
        key="5"
        cName="fa-sharp fa-solid fa-bottle-water fa-shake fa-2xl"
        section="section5"
        title="That Reduces the Carbon Footprint"
        desc=""
        imgSrc="/assets/img/1.png"
        imgName="carbon"
      />
      <Features
        key="6"
        cName="fa-sharp fa-solid fa-bottle-water fa-shake fa-2xl"
        section="section6"
        title="Responsibly Sourced"
        desc=""
        imgSrc="/assets/img/responsible.png"
        imgName="responsible"
      />
      <Features
        key="7"
        cName="fa-sharp fa-solid fa-bottle-water fa-shake fa-2xl"
        section="section7"
        title="FSC Certified"
        desc="The mark of responsible forestry"
        imgSrc="/assets/img/fsc.png"
        imgName="fsc"
      />
      <Coming />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
