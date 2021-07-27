import { Link } from 'react-router-dom';
import ProductImage from "../assets/img/clipboard-image.png"

const HomePageProduct = ({title,src, subtitle="",paragraph="",buttonText="Know More", buttonLink="/"}) => {
    
    return(
<>
<div class="container product-card">
              <div class="row">
                <div class="col-md-6">
                  <img class="img-fluid" src={ProductImage} alt="Product"/>
                </div>
                <div class="col-md-6">
                  <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start h-100">
                    <h1>{title}</h1>
                    <h6>{subtitle}</h6>
                    <p>
                      {paragraph}
                    </p>
                    <Link to={buttonLink}>

                    <button class="btn btn-primary" type="button">
                      {buttonText}
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
</>
)};

export {HomePageProduct}