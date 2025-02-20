import Lottie from "react-lottie";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import coffeeLottie from "../../assets/img/lottie/coffee";

const Contact = () => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const formRef = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());

    if (!values) {
      Swal.fire({
        title: "Error",
        text: "Please, Fill the Form to Send a Message",
        icon: "warning",
        confirmButtonText: "Accept",
        confirmButtonColor: "#267cec",
      });

      return;
    }

    setSendingEmail(true);

    emailjs
      .send("service_zw3pu9r", "template_02xr7rq", values, "Wv5RQ-GtYRv-LL3O9")
      .then(
        () => {
          Swal.fire({
            title: "Success",
            text: "Message sent successfully!",
            icon: "success",
            confirmButtonText: "Accept",
            confirmButtonColor: "#267cec",
          });
          formRef.current.reset();
          setSendingEmail(false);
        },
        (error) => {
          Swal.fire({
            title: "Error",
            text: error.text,
            icon: "error",
            confirmButtonText: "Accept",
            confirmButtonColor: "#267cec",
          });
          setSendingEmail(false);
        }
      );
  };

  return (
    <div className="container p-5 mb-5" id="contact-me">
      <div className="text-black text-center mt-5">
        <h1 className="fw-semibold">Contact Me</h1>
        <label className="fw-semibold dark-enphasis-text">Say Hello ^^</label>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-lg-6 justify-content-center lottie-container">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: coffeeLottie,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
          <p className="text-black mt-3">
            If you have any questions, need help, or just want to say hi, feel
            free to send me a message. I will get back to you as soon as
            possible.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <form className="card p-5 mb-5" ref={formRef} onSubmit={sendEmail}>
            <label className="text-black fw-semibold text-center fs-3">
              Send Me a Message
            </label>
            <div className="mb-3">
              <label className="form-label text-black">Name</label>
              <input
                type="text"
                className="form-control text-black"
                name="username"
                placeholder="Your Name"
                required
                disabled={sendingEmail}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-black">Email</label>
              <input
                type="email"
                className="form-control text-black"
                name="email"
                placeholder="youremailaddress@mail.com"
                required
                disabled={sendingEmail}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-black">Message</label>
              <textarea
                className="form-control text-black"
                name="message"
                rows="5"
                placeholder="Write your message"
                style={{ resize: "none" }}
                maxLength={255}
                required
                disabled={sendingEmail}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={sendingEmail}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
