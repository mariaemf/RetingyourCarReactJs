import React from "react";
import carImg from "../assets/images/car-01.png";
import "../styles/booking.css";

const Bookings = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="new">New</option>
              <option value="popular">Popular</option>
              <option value="upcoming"></option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="booking__car-list">
          <div className="car__item">
            <div className="car__item-top">
              <div className="car__item-tile">
                <h3>Nissan</h3>
                <span>
                  <i class="ri-heart-line"></i>
                </span>
              </div>
              <p>category</p>
            </div>
            <div className="car__img">
              <img src={carImg} alt="" />
            </div>

            <div className="car__item-bottom">
              <div className="car__bottom-left">
                <p>
                  <i class="ri-user-line"></i>4
                </p>
                <p>
                  <i class="ri-repeat-line"></i>Manual
                </p>
              </div>
              <p>$29/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
