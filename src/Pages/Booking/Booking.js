import React, { useState } from "react";
import BookingBanner from "./BookingBanner";
import Services from "./Services";

const Booking = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <BookingBanner setDate={setDate} date={date} />
      <Services />
    </div>
  );
};

export default Booking;
