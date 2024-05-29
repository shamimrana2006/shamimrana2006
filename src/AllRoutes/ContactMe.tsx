export default function ContactMe() {
  return (
    <div>
      <section color="red" className="contact section" id="contact">
        <h2 className="section-title">Contact Me</h2>
        <span className="section-subtitle">Get in touch</span>
        <div className="contact-container container">
          <div className="contact-contect">
            <div className="contact-item">
              <div className="contact-logo">
                <i className="uil uil-phone"></i>
              </div>
              <div className="contact-item-details">
                <div className="contact-title">Call Me</div>
                <span className="contact-description">+8801976474421</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-logo">
                <i className="uil uil-envelope"></i>
              </div>
              <div className="contact-item-details">
                <div className="contact-title">Email</div>
                <span className="contact-description">
                  mdshamimrana20@gmail.com
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-logo">
                <i className="uil uil-map-marker"></i>
              </div>
              <div className="contact-item-details">
                <div className="contact-title">Location</div>
                <span className="contact-description">
                  Mymonsing , Dhaka - Bangladesh
                </span>
              </div>
            </div>
          </div>

          <form className="contact-input">
            <div for="name" className="contact-input-item">
              <input
                type="text"
                placeholder="Full name"
                name="name"
                className="contact-inpute"
                id="name"
                required
              />
              <label for="" className="label">
                Full name
              </label>
            </div>
            <div for="email" className="contact-input-item">
              <input
                type="text"
                placeholder="Valid email address"
                name="email"
                className="contact-inpute"
                id="email"
                required
              />
              <label for="" className="label">
                Email
              </label>
            </div>
            {/* <div for="email" className="contact-input-item">
              <input
                type="text"
                placeholder="Valid email address"
                name="name"
                className="contact-inpute"
                id="email"
                required
              />
              <label for="email" className="label iu">
                Email
              </label>
            </div> */}
            <div for="project" className="contact-input-item">
              <input
                type="text"
                required
                name="name"
                className="contact-inpute"
                placeholder="Subject/Project"
                id="project"
              />
              <label for="project" className="label">
                Subject
              </label>
            </div>
            <div for="message" className="contact-input-item">
              <textarea
                type="text"
                required
                name="name"
                className="contact-inpute"
                placeholder="Type your message"
                id="message"
              ></textarea>
              <label for="message" className="label">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="button contact-sent-massege"
              id="button"
            >
              Sent Massege <i className="uil uil-message"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
