import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import img01 from "../assets/Partner/img01.jpg";
import img02 from "../assets/Partner/img02.jpg";
import img03 from "../assets/Partner/img03.jpg";
import img04 from "../assets/Partner/img04.jpg";
import img05 from "../assets/Partner/img05.png";
import img06 from "../assets/Partner/img06.png";
import img07 from "../assets/Partner/img07.png";
import img08 from "../assets/Partner/img08.png";
import img09 from "../assets/Partner/img09.png";
import img10 from "../assets/Partner/img10.png";
import img11 from "../assets/Partner/img11.jpg";
import img12 from "../assets/Partner/img12.jpg";
import img13 from "../assets/Partner/img13.jpg";
import img14 from "../assets/Partner/img14.jpg";
import img15 from "../assets/Partner/img15.jpg";
const SubPartner = () => {
  const arrayData = [
    {
      title: "img01",
      img: img01,
      description: "01",
    },
    {
      title: "img02",
      img: img02,
      description: "02",
    },
    {
      title: "img03",
      img: img03,
      description: "03",
    },
    {
      title: "img04",
      img: img04,
      description: "04",
    },
    {
      title: "img05",
      img: img05,
      description: "05",
    },
    {
      title: "img06",
      img: img06,
      description: "06",
    },
    {
      title: "img07",
      img: img07,
      description: "07",
    },
    {
      title: "img08",
      img: img08,
      description: "08",
    },
    {
      title: "img09",
      img: img09,
      description: "09",
    },
    {
      title: "img10",
      img: img10,
      description: "10",
    },
    {
      title: "img11",
      img: img11,
      description: "11",
    },
    {
      title: "img12",
      img: img12,
      description: "12",
    },
    {
      title: "img13",
      img: img13,
      description: "13",
    },
    {
      title: "img14",
      img: img14,
      description: "14",
    },
    {
      title: "img15",
      img: img15,
      description: "15",
    },
  ];
  const settings = {
    className: "center",
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"

  };
  return (
    <div>
      <section id="about" className="facts ">
        <div className="container px-5" data-aos="fade-up">
          <div className="section-title">
            <h2>Our Clients</h2>
          </div>
          <Slider {...settings}>
            {arrayData.map((item, index) => {
              return (
                <div key={index}>
                  <Image src={item.img} alt="" width={200} height={100} />
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default SubPartner;
