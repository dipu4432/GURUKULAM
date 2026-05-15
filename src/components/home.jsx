import Banner from "./banner";
import About from "./about";
// import Donate from "./donatePage"
import Donors from "./donors";
import Gaushala from "./gaushala";
import Gallery from "./gallery";
import Facility from "./facility";
import Facilities from "./facilities";
import FooterSection from "./footerSection";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      {/* <section id="donate">
        <Donate />
      </section> */}

      <section id="donors">
        <Donors />
      </section>

      <section id="gaushala">
        <Gaushala />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="facility">
        <Facility />
      </section>

      <section id="facilities">
        <Facilities />
      </section>

      <section id="footer">
        <FooterSection />
      </section>
    </div>
  );
};

export default Home;