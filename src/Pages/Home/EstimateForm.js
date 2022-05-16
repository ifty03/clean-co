import React from "react";

const EstimateForm = () => {
  return (
    <div className="w-5/6 mx-auto mb-20 px-10 py-6 bg-neutral">
      <h2 className="text-2xl mb-4 text-primary">Get Free Estimate</h2>
      <div className="grid grid-cols-4 gap-5">
        <input
          type="text"
          placeholder="Type here"
          class="input block input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input block input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input block input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input block input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input block input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input block input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input block input-bordered input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          class="input block input-bordered input-primary w-full max-w-xs"
        />
      </div>
      <button className="btn btn-primary mt-5">REQUEST A QOUTE</button>
    </div>
  );
};

export default EstimateForm;
