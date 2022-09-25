import Image from "next/image";
import React from "react";
import Treeving from "../assets/img/Treeving.jpg";
import LittleHaNoi from "../assets/img/LittleHaNoi.jpg";
import yenCoffee from "../assets/img/yenCoffee.jpg";
import Tieuphu from "../assets/img/Tieuphu.jpg";
import InfinityRoom from "../assets/img/InfinityRoom.jpg";
import Bubble from "../assets/img/Bubble.jpg";
import Slider from "react-slick";
import img01 from "../assets/Projects/img01.jpg";
import img02 from "../assets/Projects/img02.jpg";
import img03 from "../assets/Projects/img03.jpg";
import img04 from "../assets/Projects/img04.jpg";
import img05 from "../assets/Projects/img05.jpg";
import img06 from "../assets/Projects/img06.jpg";
import img07 from "../assets/Projects/img07.jpg";
import img08 from "../assets/Projects/img08.png";
import img09 from "../assets/Projects/img09.jpg";
import img10 from "../assets/Projects/img10.png";
import img11 from "../assets/Projects/img11.jpg";
import img12 from "../assets/Projects/img12.png";
import img13 from "../assets/Projects/img13.jpg";
import img14 from "../assets/Projects/img14.png";
import { BeakerIcon } from "@heroicons/react/solid";

const SubProject = () => {
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
  ];

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", size: "20" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* ======= Facts Section ======= */}
      <section id="facts" className="facts bg-container">
        <div className="container-fluid px-5" data-aos="fade-up">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <Slider {...settings}>
            {arrayData.map((item) => {
              return (
                <>
                  {/* <h2>Layla</h2> */}
                  <div className="grid m-2">
                    <figure className="effect-sadie ">
                      <Image
                        className="img-responsive"
                        src={item.img}
                        alt={item.title}
                        height={1500}
                        width={1000}
                      />
                      <figcaption>
                        <p>
                          When Layla appears, she brings an eternal summer
                          along.
                        </p>
                        {/* <a href="#">View more</a> */}
                      </figcaption>
                    </figure>
                  </div>
                </>
              );
            })}
          </Slider>
          {/* <div className="col-lg-4 col-md-6 mt-5 py-md-3" key={index}>
                  <div className="cardProject">
                    <div className="main-content">
                      <img
                        src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&q=80&fit=max"
                        alt="Batman"
                      />
                    </div>
                    <div className="overlay-content">
                      <p>
                        Sometimes the truth isnt good enough, sometimes people
                        deserve more. Sometimes people deserve to have their
                        faith rewarded...
                        <span>- The Dark Knight -</span>
                      </p>
                    </div>
                  </div> */}
          {/* <Image alt="" src={item.img} width={700} height={600} /> */}
          {/* </div> */}
        </div>
      </section>
      {/* End Facts Section */}
    </div>
  );
};

export default SubProject;
