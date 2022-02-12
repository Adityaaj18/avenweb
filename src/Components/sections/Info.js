import React from "react";

const Info = () => {
  return (
    <div className="col-12 flex justify-center">
      <div className="col-3 p-7">
        <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>
        <h1 className="text-2xl font-semibold mb-3">Competitive fees</h1>
        <p className="text-lg">
          We pay a competitive fee for each order you deliver. You can earn tips
          from customers too, to help towards your earnings goals.
        </p>
      </div>
      <div className="col-3 p-7">
        <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>

        <h1 className="text-2xl font-semibold mb-3">
          Ways to boost your earnings
        </h1>
        <p className="text-lg">
          Take advantage of busy areas and earn more at evenings and weekends.
        </p>
      </div>
      <div className="col-3 p-7">
        <div className="rounded-full border-2 border-black self-center w-20 h-20 bg-yellow-500 mx-4"></div>

        <h1 className="text-2xl font-semibold mb-3">
          Support, training and peace of mind
        </h1>
        <p className="text-lg">
          Our support teams are always with you. We offer safety training and
          equipment, too, as well as free accident cover while you’re on the
          road.
        </p>
      </div>
    </div>
  );
};

export default Info;
