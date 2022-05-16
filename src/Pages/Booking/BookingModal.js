import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { format } from "date-fns";
import auth from "../../firebase.init";

const BookingModal = ({ booked, setBooked, date }) => {
  const [user] = useAuthState(auth);
  const bookingDate = format(date, "PP");
  const handelBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const booking = { name, email, price, date, phone };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setBooked(null);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            class="btn btn-sm btn-circle btn-error absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg mb-5">{booked?.name}</h3>
          <form onSubmit={handelBooking}>
            <input
              type="text"
              name="name"
              disabled
              value={booked?.name}
              className="input my-2 text-lg input-bordered w-full "
            />
            <input
              type="text"
              name="price"
              disabled
              value={booked?.price}
              className="input my-2 text-lg input-bordered w-full "
            />
            <input
              type="text"
              name="email"
              disabled
              value={user ? user.email : "useremail@gmail.com"}
              className="input my-2 text-lg input-bordered w-full "
            />
            <input
              type="text"
              name="date"
              disabled
              value={bookingDate}
              className="input my-2 text-lg input-bordered w-full "
            />

            <input
              type="text"
              name="phone"
              required
              placeholder="Your number"
              className="input my-2 text-lg input-bordered w-full "
            />
            <div className="modal-action">
              <label htmlFor="my-modal-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Done !"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
