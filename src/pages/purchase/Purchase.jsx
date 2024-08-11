import { useState } from "react";
import "./Purchase.scss";

import ViewPurchase from "../../components/viewPurchase/ViewPurchase";
import AddPurchase from "../../components/addPurchase/AddPurchase";
import axios from "axios";

export default function Add(props) {
  const [popupEdit, setPopupEdit] = useState(false);
  // const fetch = async () => {
  //   const a = await axios.get(
  //     `http://66.45.251.54/~porshtal/porshtal-backend/public/api/purchases`
  //   );
  //   setPurchases(a.data.response.data);
  // };
  const [popup, setPopup] = useState(false);
  const pobup = () => {
    setPopup(!popup);
  
  };
  return (
    <>
      <div id="main-page-add">
        <ViewPurchase  popup={pobup}/>
        {popup && <AddPurchase popup={pobup}/>}
        {popupEdit && <div className="conatiner-page-edit">
          <form className="form-data container">
              <label htmlFor="" className="label-input">
                Order date
              </label>
              <input
                type="date"
                className="input-form"
              />
              <label htmlFor="" className="label-input" >
                Expected d date
              </label>
              <input type="date" className="input-form" />
              <label htmlFor="" className="label-input">
                Supplier Name
              </label>
              <select className="form-select input-form" aria-label="Default select example">
            
               
              <option >item</option>
              
             
              </select>
              <div className="container-btns">
                <button
                  type="submit"
                  className="btn btn-danger my-style-btn-form"
                  onClick={props.popup}
                >
                  Cancel
                </button>
                <button className="btn btn-primary my-style-btn-form" >
                  Add
                </button>
              </div>
            </form>
        </div> }
      </div>
    </>
  );
}
