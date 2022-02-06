import "./App.css";
import React from "react";
import Header from "./Components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <section id="secion1" className="section1-bg pb-4 pt-4">
        <div className="container text-center mb-4 pb-4">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "58px",
                  color: "white",
                }}
              >
                Avenride : Book Car, boat, Ambulance and Delivery
              </h1>
              <Link to={"/applynow"}>
                <button id="apply-now">Apply Now</button>
              </Link>
            </div>
            <div className="col-md-6">
              <img
                src={`${process.env.PUBLIC_URL}/images/banner.jpeg`}
                alt=""
                className="img-fluid imganimate"
              />
            </div>
          </div>

          <br />
          <a
            target="_"
            href="https://play.google.com/store/apps/details?id=com.bitcc.revapp"
            className=" mb-4"
          >
            <img src={`${process.env.PUBLIC_URL}/images/android.png`} alt="" />
          </a>
        </div>
      </section>
      <section id="section2" className="section2-bg pb-4 pt-4">
        <div className="container text-center">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6 order-2">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "58px",
                  color: "white",
                }}
              >
                Book Avenboats and Avencargo across Nigeria for transport
              </h1>
            </div>
            <div className="col-md-6 order-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/Rectangle.png`}
                alt=""
                className="img-fluid imganimate"
              />
            </div>
          </div>
        </div>
      </section>

      {/* code by shoaib badshah */}

      <div className="transform -mb-12 -mt-11 rotate-3 h-28 w-full bg-green-600"></div>

      <section className="flex p-5 justify-center bg-green-600 ">
        <div className="mt-8 text-2xl text-white">
          <h5 className="mt-9 font-semibold">
            Make money on your own schedule with a scooter,<br></br> bike or
            car.
          </h5>
          <h5 className="mt-8 flex">
            <div className="rounded-full border-2 border-white w-7 h-7 mx-4"></div>
            Work when you want to
          </h5>
          <h5 className="mt-4 flex">
            <div className="rounded-full border-2 border-white w-7 h-7 mx-4"></div>
            Reach your earnings goals
          </h5>
          <h5 className="mt-4 flex">
            <div className="rounded-full border-2 border-white w-7 h-7 mx-4"></div>
            Get round-the-clock support
          </h5>
        </div>
        <div className="ml-24 mt-8 bg-white  p-5 rounded-lg w-4/12">
          <h4 className="text-2xl font-bold ml-5">What you'll need</h4>
          <div className="px-12">
            <h5 className="mt-4">
              ✅ Scooter, bike or car (with licence and insurance)
            </h5>
            <h5 className="mt-4">✅ Safety equipment (e.g. helmet)</h5>
            <h5 className="mt-4">
              ✅ Smartphone with iOS 13.6 / Android 6 or above
            </h5>
            <h5 className="mt-4">
              ✅ Proof of your right to work self-employed in the UK
            </h5>
            <h5 className="mt-4">✅ Age 18+</h5>
          </div>
        </div>
      </section>
      {/* <div className="h-10 w-full bg-green-600"></div> */}

      {/* code by shoaib badshah */}

      <section id="section3" className="section1-bg pb-4 pt-4">
        <div className="container text-center">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-md-6">
              <h1
                style={{
                  fontWeight: "bolder",
                  fontSize: "58px",
                  color: "white",
                }}
              >
                Grab your favorite food from your favourite restaurant
              </h1>
            </div>
            <div className="col-md-6">
              <img
                src={`${process.env.PUBLIC_URL}/images/Rectangle (1).png`}
                alt=""
                className="img-fluid imganimate"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="section4">
        <div className="accordion">
          <h3>Frequently Asked Questions</h3>
          <div className="accordion-tab card">
            <input
              type="checkbox"
              className="accordion-toggle"
              name="toggle"
              id="toggle1"
            />
            <label for="toggle1">
              What are the requirements for being a rider?
            </label>
            <div className="accordion-content">
              <p>
                <p>lorem ipsum dolor sit amet, consectetur adip</p>
              </p>
            </div>
          </div>

          <div className="accordion-tab card">
            <input
              type="checkbox"
              className="accordion-toggle"
              name="toggle"
              id="toggle2"
            />
            <label for="toggle2">What documnets do I need?</label>
            <div className="accordion-content">
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>

          <div className="accordion-tab card">
            <input
              type="checkbox"
              className="accordion-toggle"
              name="toggle"
              id="toggle3"
            />
            <label for="toggle3">What insuarance do i need?</label>
            <div className="accordion-content">
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>

          <div className="accordion-tab card">
            <input
              type="checkbox"
              className="accordion-toggle"
              name="toggle"
              id="toggle4"
            />
            <label for="toggle4">
              What does Avenride's free rider insuarance cover?
            </label>
            <div className="accordion-content">
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>

          <div className="accordion-tab card">
            <input
              type="checkbox"
              className="accordion-toggle"
              name="toggle"
              id="toggle5"
            />
            <label for="toggle5">How do I get paid?</label>
            <div className="accordion-content">
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
          </div>

          <div className="accordion-tab card">
            <input
              type="checkbox"
              className="accordion-toggle"
              name="toggle"
              id="toggle6"
            />
            <label for="toggle6">What kit do you offer?</label>
            <div className="accordion-content">
              <p>
                <p>lorem ipsum dolor sit amet, consectetur adip</p>
              </p>
            </div>
          </div>

          <div className="accordion-tab card">
            <input
              type="checkbox"
              className="accordion-toggle"
              name="toggle"
              id="toggle6"
            />
            <label for="toggle6">Can I provide my own kit?</label>
            <div className="accordion-content">
              <p>
                <p>lorem ipsum dolor sit amet, consectetur adip</p>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="footercontainermain"
        style={{ backgroundColor: "#E88310" }}
      >
        <div className=" pt-4 text-white">
          <div className="container mt-4 ">
            <div className="text-center">
              <h1>Join our community</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-3 mb-3">
              <div className="p-2">
                <a
                  className="sociallink"
                  href="https://www.facebook.com/quescup.india"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/social/instagram.svg`}
                    style={{ width: "2em", marginRight: ".5rem" }}
                    alt=""
                  />
                </a>
              </div>
              <div className="p-2">
                <a
                  className="sociallink"
                  href="https://www.instagram.com/p/CO7I-3IBMio/?utm_medium=copy_link"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/social/linkedin.svg`}
                    style={{ width: "2em", marginRight: ".5rem" }}
                    alt=""
                  />
                </a>
              </div>
              <div className="p-2">
                <img
                  className="sociallink"
                  src={`${process.env.PUBLIC_URL}/images/social/telegram.svg`}
                  style={{ width: "2em", marginRight: ".5rem" }}
                  alt=""
                />
              </div>
              <div className="p-2">
                <a
                  className="sociallink"
                  href="https://twitter.com/quescup?s=08"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/social/twitter.svg`}
                    style={{ width: "2em", marginRight: ".5rem" }}
                    alt=""
                  />
                </a>
              </div>
              <div className="p-2">
                <img
                  className="sociallink"
                  src={`${process.env.PUBLIC_URL}/images/social/youtube.svg`}
                  style={{ width: "2em", marginRight: ".5rem" }}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <a
                target="_"
                href="https://play.google.com/store/apps/details?id=com.bitcc.revapp"
                className=" mb-4"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/android.png`}
                  alt=""
                />
              </a>
            </div>
            <div className="d-flex flex-wrap justify-content-center pb-2 pt-2 mt-3 mb-3">
              <div className="p-2 ml-3">Terms & Condition</div>
              <div
                className="p-2 "
                style={{ marginLeft: "40px", marginRight: "40px" }}
              >
                Privacy Policy
              </div>
              <div className="p-2 mr-3">Community Guidelines</div>
            </div>
          </div>
          <div
            className="container-fluid "
            style={{ backgroundColor: "#e9810b" }}
          >
            <div className="text-center mt-4 pt-4 pb-4">
              @AvenRide Inc. All rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
