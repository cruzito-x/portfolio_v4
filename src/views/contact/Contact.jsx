import Lottie from "react-lottie";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import coffeeLottie from "../../assets/img/lottie/coffee";
import { useEffect } from "react";

const Contact = ({ lang }) => {
  const [showLottie, setShowLottie] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShowLottie(true));
    } else {
      setTimeout(() => setShowLottie(true), 2000);
    }
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());

    if (!values) {
      Swal.fire({
        title: "Error",
        text: lang.fill_all_fields?.text,
        icon: "warning",
        confirmButtonText: lang.success_accept?.text,
        confirmButtonColor: "#007bff",
      });

      return;
    }

    setSendingEmail(true);

    emailjs
      .send("service_zw3pu9r", "template_02xr7rq", values, "Wv5RQ-GtYRv-LL3O9")
      .then(
        () => {
          Swal.fire({
            text: lang.success_text?.text,
            icon: "success",
            confirmButtonText: lang.success_accept?.text,
            confirmButtonColor: "#007bff",
          });
          formRef.current.reset();
          setSendingEmail(false);
        },
        (error) => {
          Swal.fire({
            text: error.text,
            icon: "error",
            confirmButtonText: lang.success_accept?.text,
            confirmButtonColor: "#007bff",
          });

          setSendingEmail(false);
        }
      );
  };

  return (
    <div className="container p-5 h-100" id="contact">
      <div className="text-black text-center mt-5">
        <h1 className="fw-semibold">{lang.contact_me?.text}</h1>
        <label className="fw-semibold enphasis-text-dark">
          {lang.contact_subtitle?.text}
        </label>
      </div>
      <div className="row align-items-center mt-3">
        <div className="col-lg-6 col-sm-12">
          <form className="card p-5" ref={formRef} onSubmit={sendEmail}>
            <label className="text-black fw-semibold text-center fs-3">
              {lang.send_me_a_message?.text}
            </label>
            <div className="mb-3">
              <label className="form-label text-black">{lang.name?.text}</label>
              <input
                type="text"
                className="form-control text-black"
                name="username"
                placeholder={lang.name_placeholder?.text}
                required
                disabled={sendingEmail}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-black">
                {lang.email?.text}
              </label>
              <input
                type="email"
                className="form-control text-black"
                name="email"
                placeholder={lang.email_placeholder?.text}
                required
                disabled={sendingEmail}
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-black">
                {lang.message?.text}
              </label>
              <textarea
                className="form-control text-black"
                name="message"
                rows="5"
                placeholder={lang.message_placeholder?.text}
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
              {lang.send_message?.text}
            </button>
          </form>
        </div>
        <div className="col-lg-6 justify-content-center lottie-container">
          {showLottie && (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: coffeeLottie,
              }}
              style={{
                width: "85%",
              }}
            />
          )}
          <p className="text-black">{lang.contact_text?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
