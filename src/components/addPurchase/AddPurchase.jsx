import { useEffect, useState } from "react";
// import "../../pages/purchase/Purchase.scss"
import "./AddPurchase.scss";
// import "./AddPrurchase.css"
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../stoore";
export default function AddPurchase(props) {
  const [name, setName] = useState("");
  const [Expected, setExpected] = useState("");
  const [Order, setOrder] = useState("");
  const [supplier, setSupplier] = useState([]);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [serverUrl] = useRecoilState($ServerUrl);
  const postData = async () => {
    console.log(supplier.filter((s) => s.name === name)[0].id);
    try {
      const postData = await axios.post(
        `${serverUrl}/purchases`,
        {
          order_date: Order.toString().split("-").reverse().join("-"),
          expected_delivery_date: Expected.toString()
            .split("-")
            .reverse()
            .join("-"),
          supplier_id: supplier.filter((s) => s.name === name)[0].id,
        }
      );
      // console.log("Success");
      const purchaseId = postData.data.response.data.id;
      navigate(`/purchase/${purchaseId}`);
    } catch (error) {
      console.log("Error while fetching");
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "That thing is still around?",
        icon: "error",
      });
    }
  };
  function submit(e) {
    e.preventDefault();
    postData();
    // showAlert()
  }
  const fetchSuppleier = async () => {
    const dataa = await axios.get(
      `${serverUrl}/suppliers`
    );
    setSupplier(dataa.data.response.data);
  };
  useEffect(() => {
    fetchSuppleier();
  }, []);

  // console.log(Order.split("-" , 1 ).toString());
  return (
    <>
      <div className="model-popup-add">
        <form onSubmit={submit} className="form-data container">
          <label htmlFor="" className="label-input">
            Order date
          </label>
          <input
            type="date"
            className="input-form"
            value={Order}
            onChange={(e) => {
              setOrder(e.target.value);
            }}
          />
          <label htmlFor="" className="label-input">
            Expected d date
          </label>
          <input
            type="date"
            className="input-form"
            value={Expected}
            onChange={(e) => {
              setExpected(e.target.value);
            }}
          />
          <label htmlFor="" className="label-input">
            Supplier Name
          </label>
          <select
            className="form-select input-form"
            aria-label="Default select example"
            onChange={(e) => {
              setName(e.target.value);
            }}
          >
            {supplier.map((item) => (
              <>
                <option key={item.id}>{item.name}</option>
              </>
            ))}
          </select>
          <div className="container-btns">
            <button
              
              className="btn btn-danger my-style-btn-form"
              onClick={props.popup}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary my-style-btn-form">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}
