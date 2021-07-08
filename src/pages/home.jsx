const Home = (props) => {
  return (
    <>
      <nav class="navbar navbar-light navbar-expand-md navigation-clean">
        <div class="container">
          <a class="navbar-brand" href="#">
            Hydrocut
          </a>
          <button
            data-bs-toggle="collapse"
            class="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  First Item
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Second Item
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Third Item
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  Dropdown{" "}
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    First Item
                  </a>
                  <a class="dropdown-item" href="#">
                    Second Item
                  </a>
                  <a class="dropdown-item" href="#">
                    Third Item
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header class="container">
        <div
          id="header"
          class="row d-flex justify-content-center align-items-center"
        >
          <div class="col-md-6 d-md-flex flex-column justify-content-center">
            <div class="h-100">
              <h1
                id="hydrocut-heading"
                class="text-center text-md-start fw-bolder bluecolor-main py-md-3"
              >
                Quality MWFs and Lubes for your Equipments
              </h1>
              <h3>
                When it comes to Quality, Hydrocut is the brand you've always
                trusted
              </h3>
              <p className="py-md-2">
                For every machinery to stay healthy and serve the business, it
                is always important that it gives its best even in the toughest
                of situations. When you know the importance of quality
                lubricants, your machines know the importance of performance!
                <br />
              </p>
              <div className="py-md-4">
                <a class="primary-button-main" href="#">
                  Talk to Experts
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 h-100 d-flex justify-items-center align-items-center">
            <img class="img-fluid w-100" src="assets/img/bitmap.png" />
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center vh-100 flex-row-reverse">
          <div class="col-md-6 d-md-flex flex-column justify-content-center">
            <div>
              <h1 class="text-center text-md-start">About Hydrocut</h1>
              <h6 class="text-center text-md-start">
                Building up a good company is like raising up an extraordinary
                kid, the pain and perseverance it takes to inculcate values in
                the kid to make them tough and be able to withstand every
                situation. Your machines are those values which makes your
                company good. Keep believing your child and always fuel up their
                values.
              </h6>
              <p>&nbsp;</p>
              <div class="row">
                <ul class="col-6">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
                <ul class="col-6">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
              <button class="btn btn-primary" type="button">
                Call to Action button
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <img class="img-fluid" src="assets/img/clipboard-image.png" />
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="d-flex align-items-center h-100 justify-content-center">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <img class="img-fluid" src="assets/img/clipboard-image.png" />
            </div>
            <div class="col-md-4">
              <div class="d-flex align-items-center h-100 justify-content-center">
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center">Categories</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <img
                  class="card-img w-100 d-block"
                  src="assets/img/clipboard-image.png"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-end">
                  <h4>Oils</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img
                  class="card-img w-100 d-block"
                  src="assets/img/clipboard-image.png"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-end">
                  <h4>Gels</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img
                  class="card-img w-100 d-block"
                  src="assets/img/clipboard-image.png"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-end">
                  <h4>Additives</h4>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img
                  class="card-img w-100 d-block"
                  src="assets/img/clipboard-image.png"
                />
                <div class="card-img-overlay d-flex justify-content-center align-items-end">
                  <h4>Chemicals</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img class="img-fluid" src="assets/img/clipboard-image.png" />
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start h-100">
                <h1>Heading</h1>
                <p>
                  Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj laj
                </p>
                <button class="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-md-6">
              <img class="img-fluid" src="assets/img/clipboard-image.png" />
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start h-100">
                <h1>Heading</h1>
                <p>
                  Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj laj
                </p>
                <button class="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img class="img-fluid" src="assets/img/clipboard-image.png" />
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start h-100">
                <h1>Heading</h1>
                <p>
                  Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj laj
                </p>
                <button class="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-md-6">
              <img class="img-fluid" src="assets/img/clipboard-image.png" />
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start h-100">
                <h1>Heading</h1>
                <p>
                  Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj laj
                </p>
                <button class="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img class="img-fluid" src="assets/img/clipboard-image.png" />
            </div>
            <div class="col-md-6">
              <div class="d-flex flex-column justify-content-center align-items-center align-items-md-start h-100">
                <h1>Heading</h1>
                <p>
                  Lorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj lajLorem ipsum dolor aljdlj lfkj lsj flsj
                  lajLorem ipsum dolor aljdlj lfkj lsj flsj lajLorem ipsum dolor
                  aljdlj lfkj lsj flsj laj
                </p>
                <button class="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="p-md-5 d-flex justify-content-center">
          <img class="img-fluid" src="assets/img/clipboard-image-1.png" />
        </div>
      </section>
      <section></section>
      <section>
        <div>
          <img class="w-100" src="assets/img/clipboard-image-2.png" />
        </div>
      </section>
      <section class="testimonials-clean">
        <div class="container">
          <div class="intro">
            <h2 class="text-center">Testimonials </h2>
            <p class="text-center">
              Our customers love us! Read what they have to say below. Aliquam
              sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet
              vitae.
            </p>
          </div>
          <div class="row people">
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <p class="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est.
                </p>
              </div>
              <div class="author">
                <img
                  class="rounded-circle"
                  src="assets/img/clipboard-image.png"
                />
                <h5 class="name">Heading</h5>
                <p class="title">soem post</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <p class="description">
                  Praesent aliquam in tellus eu gravida. Aliquam varius finibus
                  est, et interdum justo suscipit id.
                </p>
              </div>
              <div class="author">
                <img
                  class="rounded-circle"
                  src="assets/img/clipboard-image.png"
                />
                <h5 class="name">Heading</h5>
                <p class="title">some post</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <p class="description">
                  Aliquam varius finibus est, et interdum justo suscipit.
                  Vulputate quis leo in, vehicula rhoncus lacus. Praesent
                  aliquam in tellus eu.
                </p>
              </div>
              <div class="author">
                <img
                  class="rounded-circle"
                  src="assets/img/clipboard-image.png"
                />
                <h5 class="name">heading</h5>
                <p class="title">post</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-clean">
        <form method="post">
          <h2 class="text-center">Contact us</h2>
          <div class="mb-3">
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div class="mb-3">
            <input
              class="form-control is-invalid"
              type="email"
              name="email"
              placeholder="Email"
            />
            <small class="form-text text-danger">
              Please enter a correct email address.
            </small>
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              name="message"
              placeholder="Message"
              rows="14"
            ></textarea>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">
              send{" "}
            </button>
          </div>
        </form>
        <section class="map-clean">
          <div class="container">
            <div class="intro">
              <h2 class="text-center">Location </h2>
              <p class="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
              </p>
            </div>
          </div>
          <iframe
            allowfullscreen=""
            frameborder="0"
            src="https://cdn.bootstrapstudio.io/placeholders/map.html"
            width="100%"
            height="450"
          ></iframe>
        </section>
      </section>
      <footer class="footer-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social">
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p class="copyright">Company Name © 2021</p>
        </div>
      </footer>
    </>
  );
};
export default Home;
