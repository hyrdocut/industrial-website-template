import ProductImage from "../assets/img/clipboard-image.png";
import Navigation from "../components/home/a-navigation";
import "./cutting-oil-additive.sass";

const CuttingOilAdditive = (props) => {
  return (
    <>
      <Navigation />
      <div className="product-page-background row">
        <div className="col-md-12 col-12 p-5 text-center row">
          <h1>CUTTING OIL ADDITIVE</h1>
          <div className="col-md-6 col-12">
            <img src={ProductImage} className="img-fluid" alt="Cutting Oil" />
          </div>
          <div className="col-md-6 col-12 bg-danger py-md-5 text-start">
            <h5>Packaging</h5>
            <div className="d-flex">
              <p className="px-2 py-1 bg-success">50 kg</p>
              <p className="px-2 py-1 bg-warning">200 kg</p>
            </div>
            <h6>Product Description</h6>
            <p>
              Cutting Oil additive mainly used for making soluble cutting oil.
            </p>
            <p>
              It is totally incorporated by emulsifier, stabilizer,
              anti-corrosion chemicals it also fortified by anti-foaming and
              anti-micro biocide additives. It dilutes with paraffinic oil Sn 70
              or Sn 150 to get stable emulsion. It is free from boron, chlorine,
              phenol{" "}
            </p>
            <h6>Product Quality</h6>
            <p>
              HC 3690 - is prepared from highly refined chemicals which is
              non-toxic and skin friendly. Its features are
            </p>
            <ol>
              <li>Easily soluble in base oil</li>
              <li>No need temp for processing cutting oil</li>
              <li>No toxic odour</li>
              <li>Environment Friendly</li>
              <li>Clear and sparkling result of soluble oil</li>
              <li>Good and stable emulsion</li>
              <li>Passed up to 800 ppm</li>
              <li>Gives anti staining and anti-corrosion to metal</li>
              <li>Gives lubricity and finishing while cutting operation</li>
              <li>Extended sump life and skin friendly to operators.</li>
              <li>High ph. and cleaning property</li>
            </ol>
            <h6>Lab Test report as per BIS specification</h6>
            <p>
              Sample - HC 3690
              <br />
              Quantity - 500 gm
              <br />
              <li>Appearance - clear amber</li>
              <li>Solubility in Sn 70 - clearly soluble</li>
              <li>Ph. - 9.2</li>
              <li>Cast iron corrosion test - passed 7 days</li>
              <li>Emulsion - with RO water - passed - 1 week</li>
              <li>Copper corrosion test - passed 1b </li>
              <li className="text-danger">Mircooranism test- passed </li>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CuttingOilAdditive;
