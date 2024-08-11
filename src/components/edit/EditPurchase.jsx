import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
export default function EditPurchase() {
    const [purchase, setPurchase] = useState({});
    const [Order, setOrder] = useState("");
    const [popupedit, setPopupedit] = useState(false);
    const [PurchaseName, setPurchaseName] = useState("");
    const [purchases, setPurchases] = useState([]);
    const [Expacted, setExpacted] = useState("");
    const updateData = async (id) => {
        if (!Expacted) {
          Swal.fire({
            title: "Error",
            text: "Expected date is not defined.",
            icon: "error",
          });
          return;
        }
    
        const expectedDate = Expacted.split("-").reverse().join("-");
    
        try {
          const response = await axios.put(
            `http://66.45.251.54/~porshtal/porshtal-backend/public/api/purchases/${id}`,
            {
              expected_delivery_date: expectedDate,
            }
          );
    
          Swal.fire({
            title: "Success",
            text: "Data updated successfully!",
            icon: "success",
          });
    
          // Refresh the purchase list
          fetch();
          popupEdit();
        } catch (error) {
          let errorMessage = "There was an error while updating the data.";
          if (error.response) {
            errorMessage = `Server responded with status ${error.response.status}: ${error.response.data.message || errorMessage}`;
          } else if (error.request) {
            errorMessage = "No response received from server.";
          } else {
            errorMessage = error.message;
          }
    
          Swal.fire({
            title: "Error",
            text: errorMessage,
            icon: "error",
          });
        }
      };
    const popupEdit = () => {
        setPopupedit(!popupedit);
      };
      const submit = (e) => {
        e.preventDefault();
        updateData(purchase.id);
      };
    return(
        <>
       
        <div className="container-form-edit-purchase">
          <form onSubmit={submit} className="form-data container">
            <label htmlFor="order_date" className="label-input">
              Order date
            </label>
            <input
              type="date"
              id="order_date"
              className="input-form"
              value={Order}
              onChange={(e) => setOrder(e.target.value)}
            />
            <label htmlFor="expected_date" className="label-input">
              Expected date
            </label>
            <input
              type="date"
              id="expected_date"
              className="input-form"
              value={Expacted}
              onChange={(e) => setExpacted(e.target.value)}
            />
            <label htmlFor="supplier_name" className="label-input">
              Supplier Name
            </label>
            <select
              id="supplier_name"
              className="form-select input-form"
              aria-label="Default select example"
              value={PurchaseName}
              onChange={(e) => setPurchaseName(e.target.value)}
            >
              {purchases.map((Purchase) => (
                <option key={Purchase.id}>{Purchase.supplier.name}</option>
              ))}
            </select>
            <div className="container-btns">
              <button
                type="button"
                className="btn btn-danger my-style-btn-form"
                onClick={popupEdit}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary my-style-btn-form"
              >
                Update
              </button>
            </div>
          </form>
        </div>
   
        </>
    )
}