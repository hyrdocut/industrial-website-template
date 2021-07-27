import Navigation from "../components/home/a-navigation";
import Header from "../components/home/b-header";
import AboutHydrocut from "../components/home/c-about-hydrocut";
import Features from "../components/home/d-features";
import Categories from "../components/home/e-categories";
import Products from "../components/home/f-products";
import Testimonials from "../components/home/g-testimonials";
import ContactUs from "../components/home/h-contact-us";
import Footer from "../components/home/i-footer";
const Home = (props) => {
  return (
    <>
      <Navigation />
      <Header />
      <AboutHydrocut />
      <Categories />
      <Features />
      <Products />
      {/* <Testimonials/> */}
      <ContactUs />
      {/* <Footer/> */}

      <section>
        <div class="p-md-5 d-flex justify-content-center">
          <img
            alt="Hydrocut"
            class="img-fluid"
            src="assets/img/clipboard-image-1.png"
          />
        </div>
      </section>
      <section>
        <div>
          <img
            alt="Hydrocut"
            class="w-100"
            src="assets/img/clipboard-image-2.png"
          />
        </div>
      </section>
    </>
  );
};
export default Home;
