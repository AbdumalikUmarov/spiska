import React, { useState } from "react";
import { auth, fs } from "../Config/Config";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const Modal = ({
  TotalPrice,
  totalQty,
  hideModal,
  phoneNumber,
  buyerName,
  setPhoneNumber,
  setBuyerName,
  address,
  setAddress,
  handleSubmitModal
}) => {
  const history = useHistory();

  // form states
  const [cartPrice] = useState(TotalPrice);
  const [cartQty] = useState(totalQty);

  // close modal
  const handleCloseModal = () => {
    hideModal();
  };

  // cash on delivery
  const handleCashOnDelivery = async (e) => {
    e.preventDefault();
    // console.log(phoneNumber, buyerName, cartPrice, cartQty);
    
    handleSubmitModal()
   
  };

  return (
    <div className="shade-area">
      <div className="modal-container">
        <form className="form-group" onSubmit={handleCashOnDelivery}>
          <input
            type="text"
            className="form-control"
            placeholder="Telefon raqam"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
          <br></br>
          <input
            type="text"
            className="form-control"
            placeholder="Ismi"
            required
            onChange={(e) => setBuyerName(e.target.value)}
            value={buyerName}
          />
          <br></br>
          <input
            type="text"
            className="form-control"
            placeholder="Manzil"
            required
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
         
         
          <br></br>
          <button type="submit" className="btn btn-success btn-md">
            Submit
          </button>
        </form>
        <div className="delete-icon" onClick={handleCloseModal}>
          x
        </div>
      </div>
    </div>
  );
};
