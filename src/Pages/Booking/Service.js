import React from "react";

const Service = ({ service, setBooked }) => {
  const { name, price, provider } = service;
  return (
    <div class="card bg-neutral shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>
          Price: $ <span>{price}</span>
        </p>
        <p>
          Provider: <span>{provider}</span>
        </p>
        <div class="card-actions justify-end">
          <label
            onClick={() => {
              setBooked(service);
            }}
            for="my-modal-6"
            class="btn btn-primary modal-button"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
