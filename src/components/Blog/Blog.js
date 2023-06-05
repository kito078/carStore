import React from "react";
import "./Blog.css";
import Bmage from "../../images/con2.jpg";
import Bmage2 from "../../images/tar1.jpg";
import Bmage3 from "../../images/01.jpg";
import Bmage4 from "../../images/banner.png";
import { BiTimeFive, BiCommentMinus } from "react-icons/bi";
import { HiOutlineDownload } from "react-icons/hi";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.blogs);

  // cartCtx.blogs.map((item) => console.log(item.id));
  return (
    <div>
      <div className="blog-container">
        <div className="blog-container-content">
          <h2 className="mb-4">Blog Details Right Sidebar.</h2>
          <h5>Home Blog Details Blog Details Right Sidebar</h5>
        </div>
      </div>
      <div class="container recent ">
        <div class="recent__image-section ">
          {/* <img src= alt=""> */}
          <img src={cartCtx.blogs.blogItems.img} alt="" />
          <div className="container views d-none">
            <div className=" d-flex align-items-center justify-content-center">
              <BiTimeFive />
              <h5>23 February 2023</h5>
            </div>
            <div className=" d-flex align-items-center justify-content-center">
              <HiOutlineDownload />
              <h5>120 Views</h5>
            </div>
            <div className=" d-flex align-items-center justify-content-center">
              <BiCommentMinus />
              <h5>03 Comments</h5>
            </div>
          </div>
        </div>
        <div class="recent__posts-section ms-5 d-none d-lg-block">
          <h2>Popular Posts</h2>
          <div>
            <div class="recent-post mb-0 pb-0">
              <div class="recent__header">
                <img src={cartCtx.blogs.blogItems.img2} alt="" />
              </div>
              <div class="content-section ">
                <h2 class="post-date">23 January, 2023</h2>
                <h5 class="post-text">
                  12 Ways You Can Cut Your Prescription Costs
                </h5>
              </div>
            </div>
            <div class="recent-post mb-0 pb-0">
              <div class="recent__header">
                <img src={Bmage2} alt="" />
              </div>
              <div class="content-section">
                <h2 class="post-date">23 January, 2023</h2>
                <h5 class="post-text">
                  12 Ways You Can Cut Your Prescription Costs
                </h5>
              </div>
            </div>
            <div class="recent-post mb-0 pb-0">
              <div class="recent__header">
                <img src={Bmage3} alt="" />
              </div>
              <div class="content-section">
                <h2 class="post-date">23 January, 2023</h2>
                <h5 class="post-text">
                  12 Ways You Can Cut Your Prescription Costs
                </h5>
              </div>
            </div>
            <div class="recent-post mb-0 pb-0">
              <div class="recent__header">
                <img src={Bmage4} alt="" />
              </div>
              <div class="content-section">
                <h2 class="post-date">23 January, 2023</h2>
                <h5 class="post-text">
                  12 Ways You Can Cut Your Prescription Costs
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container blog__view__content px-4">
        <h3 className="mb-4">amet consectetur</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis.
          quam soluta eum reiciendis hic. Lorem ipsum dolor sit
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis.
          quam soluta eum reiciendis hic. Lorem ipsum dolor sit
        </p>
        <div class="recent__image-section popular__image my-5">
          {/* <img src= alt=""> */}
          <img src={cartCtx.blogs.blogItems.img2} alt="" />
          <h3 className="mt-4">High quality for timely markets.</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis.
          quam soluta eum reiciendis hic. Lorem ipsum dolor sit
        </p>
        <p className="mt-5">
          In particular, the garbled words of lorem ipsum bear an unmistakable
          resemblance to sections 1.10.32–33 of Cicero’s work, with the most
          notable passage excerpted below iscovering the source behind the
          ubiquitous.
        </p>
      </div>
      <div className="container blog__avatar ps-4 mt-5 ">
        <div className="blog__avatar__header mt-3">
          <img src={cartCtx.blogs.blogItems.img3} alt="" />
        </div>
        <div className="blog__avatar__body ms-4 mt-3">
          <h2>amet consectetur</h2>
          <h5>September 2, 2021</h5>
          <p>
            Progressively procrastinate mission-critical action items before
            team building ROI. Interactively provide access to cross functional
            quality vectors for client-centric catalysts for change.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
