function ContactUs() {
  return (
    <div className="row contact">
      <div className="col-4 left">
        <div className="container left-bg position-fixed">
          <div className="overlay" />
          <div className="container logo" />
        </div>
      </div>
      <div className="col-8 right">
        <div className="container">
          <form action="home.html">
            <h3>Contact Us</h3>
            <div className="mb-3 mt-3">
              <label htmlFor="fullname" className="form-label">
                Full Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Full Name Here..."
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="example@domain.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone-number" className="form-label">
                Phone Number<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="08573890xxxxx"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">
                Nationality
              </label>
              <select id="nationality" className="form-select">
                <option value>Selected</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Malaysian">Malaysian</option>
                <option value="Singaporean">Singaporean</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" rows={4} defaultValue={" "} />
            </div>
            <div className="mb-5 mt-4">
              <button className="btn btn-primary rounded-pill" id="btn-orange">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs