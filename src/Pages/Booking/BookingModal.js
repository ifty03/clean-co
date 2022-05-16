import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ booked, setBooked }) => {
  const [user] = useAuthState(auth);
  const handelBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const price = e.target.price.value;

    setBooked(null);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
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
              name="phone"
              required
              placeholder="Your number"
              className="input my-2 text-lg input-bordered w-full "
            />
            <div className="modal-action">
              <label for="my-modal-6">
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
