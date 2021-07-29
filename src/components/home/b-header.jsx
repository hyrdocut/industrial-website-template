import BreakOil from "../../assets/img/break-oil.png";
// import BreakOil from "../../";
import AbsBreak from "../../assets/img/abs-brake.png";
import {motion} from 'framer-motion'

const Header = (props) => {
  return (
    <>
      <header class="container-fluid">
        <div
          id="header"
          class="row d-flex justify-content-center align-items-center"
        >
          <div class="col-md-7 d-md-flex flex-column justify-content-center align-content-center row">
            <div class="h-100 col-md-10">
              <motion.h1
                id="hydrocut-heading"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -1000, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                class="otomanopee-font text-center text-md-start fw-bolder bluecolor-main py-md-3"
              >
                Quality MWFs and Lubes For your Equipments
              </motion.h1>
              <motion.h3
               id="hydrocut-tagline"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -1000, opacity: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                When it comes to Quality, Hydrocut is the brand to trust
              </motion.h3>
              <motion.p
              id="hydrocut-para"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -1000, opacity: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 50 }}
                className="py-md-2 yomogi-font"
              >
                For every machinery to stay healthy and serve the business, it
                is always important for the machine to give its best even in the
                toughest of situations. When you know the importance of quality
                lubricants, your machines know the importance of performance!
                <br />
              </motion.p>
              <div className="py-md-4">
                <a class="primary-button-main" href="#">
                  Talk to Experts
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-5 h-100 d-flex d-md-block justify-items-center align-items-center">
            <span className="header-image-container">
              <motion.img
                animate={{ x: 0, y: 0, rotateX: 0 }}
                initial={{ x: -1000, y: -600, rotateX: 120 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 50 }}
                alt="Hydrocut"
                class="first-header-image"
                src={BreakOil}
              />
              <motion.img
                animate={{  rotateY: 0 }}
                initial={{ rotateY: 160 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 50 }}
                alt="Hydrocut"
                class="second-header-image"
                src={AbsBreak}
              />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
