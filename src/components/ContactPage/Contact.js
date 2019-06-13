import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contact Us" />
          <form
            className="mt-5"
            action="https://formspree.io/imran.zafar@irissoftware.com"
            method="POST"
          >
            {/* firstName */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="john Smith"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="XXXXX@gmail.com"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="important!!!!"
              />
            </div>
            {/* text message */}
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="hello there buddy"
              />
              {/* submit */}
              <div className="form-group mt-3">
                <input
                  type="submit"
                  value="Send"
                  className="form-control bg-primary text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
