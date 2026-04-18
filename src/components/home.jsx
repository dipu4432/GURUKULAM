import Banner from "./banner";
import About from "./about";
import Gaushala from "./gaushala";
import Gallery from "./gallery";
import Facility from "./facility";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
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
    </div>
  );
};

export default Home;