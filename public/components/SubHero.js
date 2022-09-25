import Image from "next/image";
import React from "react";
import logo from "../assets/logo-imas.png";
import bg from "../assets/img/background.jpg";
const SubHero = () => {
  return (
    <section id="hero" className="" style={{ padding: "0" }}>
      <div className="header2">
        <div className="overlay" />
        {/* <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src={bgVideo} />
      </video> */}

        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src="../assets/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white mt-10">
              {/* <Image
                alt=""
                src={logo}
                className="responsive"
                style={{ opacity: 0.5 }}
                width={200}
                height={40}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    //  <section id="hero" className="d-flex flex-column justify-content-center">
    //   <div className="container" data-aos="zoom-in" data-aos-delay={100}>
    //   <TypeWriterEffect
    //       textStyle={{
    //         fontFamily: 'Red Hat Display',
    //         color: '#3F3D56',
    //         fontWeight: 700,
    //         fontSize: '1.5em',
    //       }}
    //       startDelay={100}
    //       cursorColor="black"
    //       text="
    //       IMAS ARCHITECTURE & BUILDING SOLUTION CO.,LTD"
    //       typeSpeed={100}

    //     />

    //   </div>
    // </section>
  );
};

export default SubHero;
