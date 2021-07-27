import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomePageProduct } from "../home-page-product";

const Products = (props) => {

  SwiperCore.use([EffectFade]);
  SwiperCore.use([Autoplay]);
  SwiperCore.use([Pagination, Scrollbar]);
  return (
    <>
      <section id="products">
        <h1 className="text-center py-md-5">Our Products</h1>
        <Swiper spaceBetween={20} slidesPerView={1} autoplay={true}>
          <SwiperSlide>
            <HomePageProduct
              title="Product"
              subtitle="hsx"
              paragraph="something new"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePageProduct
              title="Product"
              subtitle="hsx"
              paragraph="something new"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePageProduct
              title="Product"
              subtitle="hsx"
              paragraph="something new"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePageProduct
              title="Product"
              subtitle="hsx"
              paragraph="something new"
            />
          </SwiperSlide>
          <SwiperSlide>
            <HomePageProduct
              title="Product"
              subtitle="hsx"
              paragraph="something new"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
export default Products;
