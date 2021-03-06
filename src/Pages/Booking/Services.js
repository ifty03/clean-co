import React, { useState, useEffect } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const Services = ({ date }) => {
  const [services, setServices] = useState(null);
  const [booked, setBooked] = useState({});
  useEffect(() => {
    fetch("Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="min-h-screen bg-accent">
      <div className="pt-10 grid grid-cols-3 gap-5 w-5/6 mx-auto">
        {services?.map((service, index) => (
          <Service
            setBooked={setBooked}
            service={service}
            date={date}
            key={index}
          ></Service>
        ))}
        {booked && (
          <BookingModal date={date} setBooked={setBooked} booked={booked} />
        )}
      </div>
    </div>
  );
};

export default Services;
