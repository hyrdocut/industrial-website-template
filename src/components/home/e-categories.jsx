import ProductImage from "../../assets/img/clipboard-image.png";

const Categories = (props) => {
  return (
    <>
      <section id="categories">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center">Categories</h1>
            </div>
          </div>
          <div class="row">
            <CategoriesCard text="Oils"/>
            <CategoriesCard text="Gels"/>
            <CategoriesCard text="Additives"/>
            <CategoriesCard text="Chemicals"/>
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
      <img alt="Hydrocut" class="img-fluid" src={ProductImage} />
      <div class=" d-flex justify-content-center align-items-end">
        <h3>{text}</h3>
      </div>
    </div>
  </div>
);
