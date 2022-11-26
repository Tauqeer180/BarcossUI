import React from "react";

export default function ContactUs() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 col-lg-8 offset-2  col-sm-12 col-xs-12">
          <div className="contact-form-content p-50 xs-padding20 mb-100 sm-mb80 xs-mb50">
            <div className="contact-title text-center mb-50 wow fadeIn">
              <h3 className="font32">Get In Touch</h3>
            </div>
            <div className="contact-form wow fadeIn">
              <form id="contact-form" method="post">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <div className="form-group" id="name-field">
                      <div className="form-input">
                        <input
                          type="text"
                          className="form-control"
                          id="form-name"
                          name="form-name"
                          placeholder="Name.."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <div className="form-group" id="email-field">
                      <div className="form-input">
                        <input
                          type="email"
                          className="form-control"
                          id="form-email"
                          name="form-email"
                          placeholder="Email.."
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="form-group" id="phone-field">
                      <div className="form-input">
                        <input
                          type="text"
                          className="form-control"
                          id="form-phone"
                          name="form-phone"
                          placeholder="Subject.."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="form-group" id="message-field">
                      <div className="form-input">
                        <textarea
                          className="form-control"
                          rows="6"
                          id="form-message"
                          name="form-message"
                          placeholder="Your Message Here..."
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="form-group text-center mb-0">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
