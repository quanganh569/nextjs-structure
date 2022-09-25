import Image from "next/image";
import React from "react";
import Treeving from "../assets/img/Treeving.jpg";
import LittleHaNoi from "../assets/img/LittleHaNoi.jpg";
import yenCoffee from "../assets/img/yenCoffee.jpg";
import Tieuphu from "../assets/img/Tieuphu.jpg";
import InfinityRoom from "../assets/img/InfinityRoom.jpg";
import Bubble from "../assets/img/Bubble.jpg";
import Slider from "react-slick";
import img01 from "../assets/AboutUs/img01.jpg";
import img02 from "../assets/AboutUs/img02.png";
import img03 from "../assets/AboutUs/img03.jpg";
import img04 from "../assets/AboutUs/img04.png";
import img05 from "../assets/AboutUs/img05.png";
import img06 from "../assets/AboutUs/img06.jpg";
import { BeakerIcon } from "@heroicons/react/solid";

const SubProject = () => {
  const arrayData = [
    {
      title: "img01",
      img: img01,
      description: "PRESERVATION",
    },
    {
      title: "img02",
      img: img02,
      description: "RENOVATION",
    },
    {
      title: "img03",
      img: img03,
      description: "RERUBISHMENT",
    },
    {
      title: "img04",
      img: img04,
      description: "RESTRUCTURE",
    },
    {
      title: "img05",
      img: img05,
      description: "RECONDITION",
    },
    {
      title: "img06",
      img: img06,
      description: "EBS",
    },
    {
      title: "img05",
      img: img05,
      description: "RECONDITION",
    },
    {
      title: "img05",
      img: img05,
      description: "RECONDITION",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

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
      <section id="about" className="facts ">
        <div className="container-fluid " data-aos="fade-up">
          <div className="section-title">
            <h2>About-Us</h2>
          </div>
          <div className="">
            {arrayData.map((item, index) => {
              return (
                <>
                  <div className="grid responsive">
                    <figure className="gallery effect-layla">
                      <a target="_blank" href="img_5terre.jpg">
                      <Image
                      className="img-responsive"
                      src={item.img}
                      alt="img02"
                      height={800}
                      width={800}
                    />
                      </a>
                      <figcaption>
                      <h4>
                        {" "}
                        <span>{item.description}</span>
                      </h4>
                      <p>
                      <span>{item.description}</span>
                      </p>
                      {/* <a href="#">View more</a> */}
                    </figcaption>
                    </figure>
                  </div>
               
                </>
            
              );
            })}
          </div>
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
