import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Bubble from "../assets/img/Bubble.jpg";
import aHung from "../assets/AboutUs/aHung.jpg";
import DuyLe from "../assets/AboutUs/Duy.jpg";
const SubTeam = () => {
  const settings = {
    dots: false,
    infinite: true,

    speed: 2000,
  };

  const data = [
    { img: aHung, name: "Hưng", job: "CEO" },
    { img: DuyLe, name: "DuyLe", job: "Architect" },
    { img: DuyLe, name: "DuyLe", job: "Architect" },
  ];
  return (
    <div>
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials section-bg bg-container ">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>EBS TEAM</h2>
          </div>
          <div>
            <div className="row pb-5 mb-4">
              {data.map((item) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    {/* Card*/}
                    <div className="grid m-2">
                    <figure className="effect-sadie ">
                      <Image
                        className="img-responsive"
                        src={item.img}
                        alt={item.name}
                        height={500}
                        width={500}
                      />
                      <figcaption>
                   
                      <p  class="display-3">
                      <p>{item.name} - {item.job}</p>
                      </p>
                        {/* <a href="#">View more</a> */}
                      </figcaption>
                    </figure>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <Slider {...settings}>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <Image
                  alt=""
                  src={Bubble}
                  className="testimonial-img"
                  width={100}
                  height={100}
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <Image
                  alt=""
                  src={Bubble}
                  className="testimonial-img"
                  width={100}
                  height={100}
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <Image
                  alt=""
                  src={Bubble}
                  className="testimonial-img"
                  width={100}
                  height={100}
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <Image
                  alt=""
                  src={Bubble}
                  className="testimonial-img"
                  width={100}
                  height={100}
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <Image
                  alt=""
                  src={Bubble}
                  className="testimonial-img"
                  width={100}
                  height={100}
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
          </Slider> */}
        </div>
      </section>
      {/* End Testimonials Section */}
    </div>
  );
};

export default SubTeam;
