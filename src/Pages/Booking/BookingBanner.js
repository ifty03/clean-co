import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const BookingBanner = ({ date, setDate }) => {
  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = (
      <p>
        Today is <span className="text-primary"> {format(date, "PP")}</span>.
      </p>
    );
  }
  return (
    <div class="hero min-h-screen bg-neutral">
      <div class="hero-content lg:mx-16 lg:gap-40 gap-10 flex-col lg:flex-row-reverse">
        <img
          src="https://raw.githubusercontent.com/mir-hussain/clean-co-live/main/src/assets/image/bucketgirl.png"
          class="max-w-lg rounded-lg "
        />
        <div className="w-[50%]">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            footer={footer}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingBanner;
