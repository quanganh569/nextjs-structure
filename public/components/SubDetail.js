import Image from "next/image";
import React, { useState } from "react";
import Bubble from "../assets/img/Bubble.jpg";
import ModalImage from "react-modal-image";
import Tabs from "./Tabs.tsx";
import img01 from "../assets/detail/1.jpg";

const SubDetail = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const [dataDetail, setDataDetail] = useState([
    { name: "", image: "../assets/detail/1.jpg" },
    { name: "", image: "../assets/detail/2.jpg" },
    { name: "", image: "../assets/detail/3.jpg" },
    { name: "", image: "../assets/detail/4.jpg" },
    { name: "", image: "../assets/detail/5.jpg" },
    { name: "", image: "../assets/detail/6.jpg" },
    { name: "", image: "../assets/detail/7.jpg" },
    { name: "", image: "../assets/detail/8.jpg" },
    { name: "", image: "../assets/detail/9.jpg" },
    { name: "", image: "../assets/detail/10.jpg" },
    { name: "", image: "../assets/detail/11.jpg" },
    { name: "", image: "../assets/detail/12.jpg" },
    { name: "", image: "../assets/detail/13.jpg" },
  ]);
  const [dataDetail01, setDataDetail01] = useState([
    { name: "", image: "../assets/detail/1.jpg" },
    { name: "", image: "../assets/detail/2.jpg" },
    { name: "", image: "../assets/detail/3.jpg" },
    { name: "", image: "../assets/detail/4.jpg" },
    { name: "", image: "../assets/detail/5.jpg" },
    
  ]);
  const [dataDetail02, setDataDetail02] = useState([
    { name: "", image: "../assets/detail/10.jpg" },
    { name: "", image: "../assets/detail/11.jpg" },
    { name: "", image: "../assets/detail/12.jpg" },
    { name: "", image: "../assets/detail/13.jpg" },
    
  ]);
  const [dataDetail03, setDataDetail03] = useState([
    { name: "", image: "../assets/detail/6.jpg" },
    { name: "", image: "../assets/detail/7.jpg" },
    { name: "", image: "../assets/detail/8.jpg" },
    { name: "", image: "../assets/detail/9.jpg" },
    
  ]);
  return (
    <div>
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container-fluid px-5" data-aos="fade-up">
          <div className="section-title">
            <h2>Details</h2>
          </div>
          <Tabs
            onChange={(value) => {
              setTabSelected(value);
            }}
            tabs={["All", "Multi Residential", "Residential", "Commercial"]}
            tabSelected={tabSelected}
          />
          {tabSelected == 0 && (
            <div className="row">
              {dataDetail.map((item) => {
                return (
                  <>
                    <div className="col-lg-2 col-md-3 col-sm-12">
                      <a data-fancybox="gallery" href={item.image}>
                        <img
                          alt=""
                          src={item.image}
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          )}
          {tabSelected == 1 && (
            <div className="row">
              {dataDetail01.map((item) => {
                return (
                  <>
                    <div className="col-lg-2 col-md-3 col-sm-12">
                      <a data-fancybox="gallery" href={item.image}>
                        <img
                          alt=""
                          src={item.image}
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          )}
          {tabSelected == 2 && (
            <div className="row">
              {dataDetail02.map((item) => {
                return (
                  <>
                    <div className="col-lg-2 col-md-3 col-sm-12">
                      <a data-fancybox="gallery" href={item.image}>
                        <img
                          alt=""
                          src={item.image}
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          )}
          {tabSelected == 3 && (
            <div className="row">
              {dataDetail03.map((item) => {
                return (
                  <>
                    <div className="col-lg-2 col-md-3 col-sm-12">
                      <a data-fancybox="gallery" href={item.image}>
                        <img
                          alt=""
                          src={item.image}
                          className="img-thumbnail"
                        />
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </section>
      {/* End Portfolio Section */}
    </div>
  );
};

export default SubDetail;
