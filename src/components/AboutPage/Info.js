import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.png";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
              alt="about-image"
            />
          </div>

          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about Us" />
            <p clasName="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              quidem quaerat omnis sint, provident, ullam ex facilis esse
              commodi veniam est! Cupiditate unde in esse hic, consequuntur
              aperiam praesentium quis.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              commodi vel dignissimos assumenda nostrum delectus aliquam earum
              laudantium. Unde perspiciatis optio sit, asperiores ipsa delectus
              facilis suscipit itaque atque ex assumenda ea laboriosam ad autem
              veniam cum facere magni qui nostrum aliquam architecto hic quas
              non fugiat. Dolor, sed repellat?
            </p>
            <button className="main-link" style={{ marginTop: "2rem" }}>
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
