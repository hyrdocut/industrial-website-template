import ProductImage from "../../assets/img/clipboard-image.png";
import HeaderChemicalFactory from "../../assets/img/header-chemical-factory.jpeg";

const Categories = (props) => {
  return (
    <>
      <section id="categories">
        <div class="container h-100 py-5 d-flex flex-column justify-content-center justify-items-center align-items-center ">
          <div class="row py-5">
            <div class="col-md-12">
              <h1 class="text-center">Categories</h1>
            </div>
          </div>
          <div class="row">
            <CategoriesCard text="Oils" />
            <CategoriesCard text="Gels" />
            <CategoriesCard text="Additives" />
            <CategoriesCard text="Chemicals" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;

const CategoriesCard = ({ text }) => (
  <div class="col-md-3">
    <div class="categories-card">
      <img alt="Hydrocut" class="img-fluid categories-image" src={HeaderChemicalFactory} />
        <h3 className="categories-text text-center">{text}</h3>
    </div>
  </div>
);
