import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Scrollbar,
  Navigation
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomePageProduct } from "../home-page-product";

const Products = (props) => {

  SwiperCore.use([EffectFade]);
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Pagination,Navigation, Scrollbar]);
  return (
    <>
      <section id="products">
        <h1 className="text-center py-md-5">Our Products</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={true}
          navigation
          pagination
        >
          <SwiperSlide className="product-card">
            <HomePageProduct
              title="CUTTING OIL ADDITIVE "
              subtitle="HC - 3690"
              paragraph="The Cutting Oil Additive's main use is to make a soluble cutting oil. It is totally incorporated by emulsifier, stabilizer, anticorrosion chemicals it also fortified by anti-foaming and anti-micro biocide additives. It dilutes with paraffinic oil Sn 70 or Sn 150 to get stable emulsion. It is free from boron, chlorine, phenol "
              buttonLink="/cutting-oil-additive"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePageProduct
              title="CUTTING OIL"
              subtitle="Hydrocut SL - 8500"
              paragraph="Cutting oil is most demanded oil in the metal working segment. It is petroleum based blended with additive which is fortified with emulsifier, anticorrosion chemicals, stabilizers, lubricating agents, biocide, etc."
              buttonLink="/cutting-oil"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePageProduct
              title="EDM GEL"
              subtitle="Hydrocut- ED 1590"
              paragraph="Hydrocut ED 1590 is the current advanced geel for dielectric fluid of latest moly wire cutting operation. Its advantege is high cut ratio and metal removal in edm cutting operation. It increases viscosity of water which increases electrical discharge. The EDM gel gives the highest quality of surface finishing."
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePageProduct
              title="EDM OIL(Spark Erosion Oil)"
              subtitle="Hydrocut-ED-1530"
              paragraph="Spark Erosion is one of the modern cutting metal process. It is called as EDM wire cutting operation. It is mainly used in prescribed operation like die and mild preparation. It can operate on any metals who conducts electric charges. Dielectric fluid is used during operation to work as an insulator they are three types aqua synthetic and emulsion type semisynthetic oil base and neat type direct oil base"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePageProduct
              title="HYDRO AMIDE(Hydrocut- d-10)"
              subtitle="Hydrocut-d-10"
              paragraph="It is an anti-corrosion additive used in metal working fluid. It also acts as emulsion stabilizer. This is non-ionic emulsifier so it is effective to make emulsion under hard water. It is also used in anti-corrosion additive for cutting oil, synthetic, and semi-synthetic formulation."
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default Products;
