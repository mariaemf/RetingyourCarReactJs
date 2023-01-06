import React from "react";
import sellcar from "../assets/images/sell-car.png";
import TrackingChart from "../charts/TrackingChart";
import "../styles/sellcar.css";

const SellCar = () => {
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Sell Car</h2>
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>2023 Mercedes Benz</h2>
            <img src={sellcar} alt="" />
          </div>

          <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>
        </div>

        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Offers</h2>

            <div className="filter__widget-01">
              <select>
                <option value="toyota">Toyota</option>
                <option value="bmw">BMW</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Killian James</h3>
              </div>

              <h6 className="avg__price">
                $16,605 <span>average price</span>
              </h6>

              <h6 className="market__price">Market average is $16,244</h6>
              <span className="arrow__key">
                <i class="ri-arrow-right-line"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
