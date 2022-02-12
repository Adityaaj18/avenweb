import React from "react";

function Cycle() {
  return (
    <div className="col-12 flex justify-center bg-green-600">
      <div className="col-6 ">
        <img
          src={`${process.env.PUBLIC_URL}/images/cycle.png`}
          alt=""
          className="img-fluid w-2/3 ml-48 pt-10 "
        />
      </div>
      <div className="col-6 mt-32">
        <h1 className="text-4xl font-bold mb-4 text-white">
          We're always here
          <br /> for you
        </h1>
        <p className="col-6 text-xl text-white">
          When you’re on the road, we’re with you – for help, advice and
          support, message or call us in the app. Your safety is our priority,
          so we’ll insure you in case of accidents, too. It’s totally free and
          applies from the moment you go online.
        </p>
      </div>
    </div>
  );
}

export default Cycle;
