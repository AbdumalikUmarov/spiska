import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import PrintPage from "./PrintPage";
import { auth, fs } from "../Config/Config";

export default function PrintModal({
  TotalPrice,
  totalQty,
  hideModal,
  phoneNumber,
  buyerName,
  address,
}) {
  const uid = auth.currentUser.uid;
  const [cartDatas, setCartDatas] = useState([]);

  const [cartPrice] = useState(TotalPrice);
  const [cartQty] = useState(totalQty);
  async function handleBeforeLoad() {
    const cartData = await fs.collection("Cart " + uid).get();
    console.log(cartData.docs);
    setCartDatas(cartData.docs);
  }
  async function handleSuccess() {
    const cartData = await fs.collection("Cart " + auth.currentUser.uid).get();
    const userData = await fs.collection("users").doc(auth.currentUser.uid).get();
  

    toast.success("Your order has been placed successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
    hideModal();
    for (var snap of cartData.docs) {
      var data = snap.data();
      data.ID = snap.id;
      await fs.collection("Seller-Cart " + uid).add(data);
      await fs
        .collection("Cart " + uid)
        .doc(snap.id)
        .delete();
    }
  }
  useEffect(() => {
    handleBeforeLoad();
  }, []);
  return (
    <div className="shade-area">
      <div className="modal-container">
        <div>
          <PrintPage
            TotalPrice={TotalPrice}
            totalQty={totalQty}
            cartDatas={cartDatas}
            handleSuccess={handleSuccess}
            phoneNumber={phoneNumber}
            buyerName={buyerName}
            address={address}
          />
        </div>
        <div className="delete-icon" onClick={hideModal}>
          x
        </div>
      </div>
    </div>
  );
}
