const Contact = () => {
  return (
    <div className="container p-5" id="contact-me">
      <div className="text-center">
        <h1 className="text-black">Contact Me</h1>
        <label className="fw-semibold dark-enphasis-text">Say Hello ^^</label>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-lg-6 justify-content-center">
          <img
            src="src/assets/img/work-from-home.png"
            className="w-100"
            alt="Contact Me Image"
          />
          <p className="text-black mt-3">
            If you have any questions, need help, or just want to say hi, feel
            free to send me a message. I will get back to you as soon as
            possible.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <form className="card p-5 mb-5">
            <label className="text-black text-center fs-3">
              Send Me a Message
            </label>
            <div className="mb-3">
              <label className="form-label text-black">Name</label>
              <input
                type="text"
                className="form-control text-black"
                id="name"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-black">Email</label>
              <input
                type="email"
                className="form-control text-black"
                id="email"
                placeholder="youremail@mail.com"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-black">Message</label>
              <textarea
                className="form-control text-black"
                id="message"
                rows="5"
                placeholder="Write your message"
                style={{ resize: "none" }}
                maxLength={255}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
