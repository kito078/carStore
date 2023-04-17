import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Bottle from "../../images/part1.png";
import Bottle1 from "../../images/part2.png";
import Bottle2 from "../../images/part3.png";
import Bottle3 from "../../images/part4.png";
import "./Category.css";
import { Row, Col, Card } from "reactstrap";
import { Pagination } from "swiper";

export default function Category() {
  return (
    <div className="swiper-container">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="category__box px-5">
            <Row>
              <Col className="">
                <div className="category__image">
                  <img src={Bottle} alt="" />
                </div>
                <div className="category__title mt-4 ">
                  <h5>24/7 Support Team</h5>
                  <p className="mt-3">Offline/Online</p>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide className="category__box">
            <Row>
              <Col className="">
                <div className="category__image">
                  <img src={Bottle1} alt="" />
                </div>
                <div className="category__title mt-4 ">
                  <h5>Money back Guarantee</h5>
                  <p className="mt-3">Order Over $100</p>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide className="category__box">
            <Row>
              <Col className="">
                <div className="category__image">
                  <img src={Bottle2} alt="" />
                </div>
                <div className="category__title mt-4 ">
                  <h5>Free Transport</h5>
                  <p className="mt-3">Order Over $100</p>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide className="category__box">
            <Row>
              <Col className="">
                <div className="category__image">
                  <img src={Bottle3} alt="" />
                </div>
                <div className="category__title mt-4 ">
                  <h5>100 Trusted Partner</h5>
                  <p className="mt-3">We are Trusted</p>
                </div>
              </Col>
            </Row>
          </SwiperSlide>

          {/* add more slides */}
        </Swiper>
      </div>
    </div>
  );
}

// import React from "react";

// function Category() {
//   return (
//     <div>
//       <Row>
//         <Col className="Category__box">
//           <div className="Category__box">
//             <img src="" alt="" />
//           </div>
//           <div>
//             <h5>Fresh Fruits</h5>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default Category;
