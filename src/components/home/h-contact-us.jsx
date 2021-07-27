const ContactUs = (props) => {
  return (
    <>
      <section class="container map-clean">
        <div className="row">
          <div class=" col-md-6 col-12">
            <form method="post">
              <h2 class="text-center">Contact Us</h2>
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
          </div>
          <div class="col-md-6 col-12 intro">
            <h2 class="text-center">Location </h2>
            <p class="text-center">
              Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
              Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactUs;
