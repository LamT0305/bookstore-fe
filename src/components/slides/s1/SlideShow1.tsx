import { Link } from "react-router-dom";
import ImageShow from "../../../assets/images/img-show-1.png";
import "./style.css";

function SlideShow1() {
  const handleMouseEnter = (event: any) => {
    event.target.style.backgroundPosition = "100% 0";
  };

  const handleMouseLeave = (event: any) => {
    event.target.style.backgroundPosition = "-100% 0";
  };

  return (
    <div
      className="slide-container"
      style={{ marginTop: 20, backgroundColor: "#f8f9fa", paddingTop: 80, width:"100%" }}
    >
      <div className="container">
        <div className="row align-items-center" style={{ height: 600 }}>
          <div className="col-md-7 col-lg-6 mb-4 mb-lg-0">
            <div
              className="hero__content position-relative"
              style={{ textAlign: "left" }}
            >
              <p className="badge-text mb-2 text-uppercase">
                LET'S MAKE THE BEST INVESTMENT
              </p>
              <h1 className="display-4 mb-4 text-capitalize">
                There Is No Friend As Loyal As A Book
              </h1>
              <p className="text-muted mb-5 fs-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                harum quibusdam, assumenda quia explicabo.
              </p>
              <Link
                className="button button__primary"
                to={"#"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>Shop now</span>
              </Link>
            </div>
          </div>
          <div className="col-md-5 offset-lg-1 text-center">
            <div className="hero__image text-center">
              <img className="img-fluid" src={ImageShow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideShow1;
