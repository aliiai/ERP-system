import { useEffect, useState } from "react";
import "./ViewPurchase.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../stoore";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

export default function ViewPurchase(props) {
  const [purchases, setPurchases] = useState([]);
  const [purchase, setPurchase] = useState({});
  const [popup, setPopup] = useState(false);
  const [popupedit, setPopupedit] = useState(false);
  const [Order, setOrder] = useState("");
  const [name, setName] = useState();
  const [status, setStatus] = useState("open");
  const [Expacted, setExpacted] = useState("");
  const [PurchaseName, setPurchaseName] = useState("");
  const [theme, setTheme] = useState(true);
  const [serverUrl] = useRecoilState($ServerUrl);
  const [supplier, setSupplier] = useState([]);
  const fetch = async () => {
    const a = await axios.get(
      `${serverUrl}/purchases`
    );
    setPurchases(a.data.response.data);
  };

  const popupEdit = () => {
    setPopupedit(!popupedit);
  };
  const fetchSuppleier = async () => {
    const dataa = await axios.get(
      `${serverUrl}/suppliers`
    );
    setSupplier(dataa.data.response.data);
  };
  useEffect(() => {
    fetch();
    fetchSuppleier();
  }, []);

  async function deletee(id) {
    try {
      await axios.delete(
        `${serverUrl}/purchases/${id}`
      );
      Swal.fire({
        title: "Success",
        text: "Data updated successfully!",
        icon: "success",
      });
      fetch();

      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  const edit = async (id) => {
    try {
      const response = await axios.get(
        `${serverUrl}/purchases/${id}`
      );
      const purchaseData = response.data.response.data;
      setPurchase(purchaseData);
      setOrder(purchaseData.order_date);
      setExpacted(purchaseData.expected_delivery_date);
      setPurchaseName(purchaseData.supplier.name);
      popupEdit();
    } catch (error) {
      console.log(error);
    }
  };

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
    const orderDate = Order.split("-").reverse().join("-");
    
    try {
      const response = await axios.put(
        `${serverUrl}/purchases/${id}`,
        {
          order_date: orderDate,
          expected_delivery_date: expectedDate,
          supplier_id: supplier.filter((s) => s.name === name)[0].id,
          status: status,
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

  const submit = (e) => {
    e.preventDefault();
    updateData(purchase.id);
  };

  const navigate = useNavigate();
  const viewPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
 
// const themefunction = () => {
//   setTheme(!theme);
// }
   return (
    <>
      <div className={`${theme ? 'container table-data' : 'container table-data table-data-dark'}`}>
        <button className="btn btn-success my-style-btn" onClick={props.popup}>
          ADD PURCHASE
        </button>
        {/* <button className="btn btn-success my-style-btn" onClick={themefunction}>
          theme
        </button> */}
        <table className="table table-striped table-dark table-style">
          <thead>
            <tr>
              <th className="title-head-table" scope="col">PURCHASE NO</th>
              <th className="title-head-table" scope="col">SUPPLIER NAME</th>
              <th className="title-head-table" scope="col">ORDER DATE</th>
              <th className="title-head-table" scope="col">EXPECTED DATE</th>
              <th className="title-head-table" scope="col">TOTAL AMOUNT</th>
              <th className="title-head-table" scope="col">STATUS</th>
              <th className="title-head-table" scope="col">DELETE</th>
              <th className="title-head-table" scope="col">EDIT</th>
              <th className="title-head-table" scope="col">VIEW</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((item, index) => (
              <tr key={index}>
                <th className="data-table-purchase-no" scope="row">{item.purchase_order_number}</th>
                <td className="data-table-purchase">{item.supplier.name}</td>
                <td className="data-table-purchase">{item.order_date}</td>
                <td className="data-table-purchase">{item.expected_delivery_date}</td>
                <td className="data-table-purchase">{item.total_amount}</td>
                <td className="data-table-purchase">{item.status}</td>
                <td className="data-table-purchase">
                {/* <MdDelete className="icon-purchase delete" data-toggle="tooltip" data-placement="top" title="trash"/>
                <FaEdit className="icon-purchase edit" data-toggle="tooltip" data-placement="top" title="edit"/>
                <MdPreview className="icon-purchase view" data-toggle="tooltip" data-placement="top" title="view details"/> */}
                  <button
                    className="btn btn-danger"
                    onClick={() => deletee(item.id)}
                  >
                    Delete
                    
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => edit(item.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary" onClick={() => viewPurchase(item.id)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {popupedit && (
        <div className="container-form-edit-purchase">
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
            <label htmlFor="expected_date" className="label-input">
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

          <label htmlFor="expected_date" className="label-input">
              Status
            </label>
            <select
            className="form-select input-form"
            aria-label="Default select example"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            {/* {supplier.map((item) => (
              <> */}
                <option>open</option>
                <option>pending</option>
                <option>completed</option>
                <option>cancelled</option>
              {/* </>
            ))} */}
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
      )}
    </>
  );
}
