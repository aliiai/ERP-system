import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants"; // Adjust the path based on your file structure
import "./PurchaseDatails.scss";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../stoore";
export default function PurchaseDetails() {
  const { id } = useParams();
  const [purchase, setPurchase] = useState(null);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [popupEdit, setPopupEdit] = useState(false);
  const [newQty, setNewQty] = useState();
const [serverUrl] = useRecoilState($ServerUrl);
  const fetchPurchase = async () => {
    try {
      const response = await axios.get(`${serverUrl}/purchases/${id}`);
      setPurchase(response.data.response.data);
    } catch (error) {
      console.log("Error while fetching purchase details", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${serverUrl}/products`);
      setProducts(response.data.response.data);
    } catch (error) {
      console.log("Error while fetching products", error);
    }
  };

  useEffect(() => {
    fetchPurchase();
    fetchProducts();
  }, [id]);

  const handleAddPurchaseItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/purchase-items`, {
        purchase_id: id,
        product_id: productId,
        quantity: quantity,
      });
      // alert("Purchase item added successfully");
      Swal.fire({
        title: "Success",
        text: "Data updated successfully!",
        icon: "success",
      });
      fetchPurchase(); // Refresh the purchase details after adding the item
    } catch (error) {
      // console.log("Error while adding purchase item", error);
      Swal.fire({
        title: "Error",
        text: "Expected date is not defined.",
        icon: "error",
      });
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`${serverUrl}/purchase-items/${itemId}`);
      Swal.fire({
        title: "Success",
        text: "Data updated successfully!",
        icon: "success",
      });
      fetchPurchase(); // Refresh the purchase details after deletion
    } catch (error) {
      // console.log("Error while deleting purchase item", error);
      Swal.fire({
        title: "Error",
        text: "Expected date is not defined.",
        icon: "error",
      });
    }
  };

  const updateData = async (itemId) => {
    if (newQty === null) {
      Swal.fire({
        title: "Error",
        text: "Quantity is not defined.",
        icon: "error",
      });
      return;
    }

    try {
      await axios.put(`${serverUrl}/purchase-items/${itemId}`, {
        quantity: newQty,
      });

      Swal.fire({
        title: "Success",
        text: "Data updated successfully!",
        icon: "success",
      });

      fetchPurchase(); // Refresh the purchase details after updating
      setPopupEdit(false); // Close the edit popup
    } catch (error) {
      console.log("Error while updating data", error);
      Swal.fire({
        title: "Error",
        text: "There was an error while updating the data.",
        icon: "error",
      });
    }
  };

  const handleEdit = (itemId) => {
    setPopupEdit({ id: itemId });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    updateData(popupEdit.id);
  };

  if (!purchase) return <div>Loading...</div>;

  return (
    <div className="main-page-details-purchase">
      <div className="container-details-top container">
        <div className="curd-details-purchase">
          <h1 className="curd-title-purchase">Purchase Details</h1>
          <p className="title-detail">
            Order Date: <span className="detail">{purchase.order_date}</span>
          </p>
          <p className="title-detail">
            Expected Delivery Date:{" "}
            <span className="detail">{purchase.expected_delivery_date}</span>
          </p>
          <p className="title-detail">
            Supplier Name: <span className="detail">{purchase.supplier.name}</span>
          </p>
          <p className="title-detail">
            Status: <span className="detail">{purchase.status}</span>
          </p>
          <p className="title-detail">
            Total Amount: <span className="detail">{purchase.total_amount}</span>
          </p>
        </div>
        <div className="container-add-item">
          <h2 className="curd-title-purchase">Add Purchase Item</h2>
          <form onSubmit={handleAddPurchaseItem} className="form-add-item">
            <label className="label-input">Product</label>
            <select
              className="form-select input-form"
              aria-label="Default select example"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            >
              <option value="" disabled>Select a product</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>

            <label className="label-input">Quantity</label>
            <input
              className="input-form"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
            />

            <button type="submit" className="btn btn-success">
              Add Item
            </button>
          </form>
        </div>
      </div>

      <table className="table table-striped table-dark container table-style">
        <thead>
          <tr>
            <th scope="col">PRODUCT NAME</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">UNIT PRICE</th>
            <th scope="col">TOTAL PRICE</th>
            <th scope="col">DELETE</th>
            <th scope="col">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {purchase.items.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.product_name}</th>
              <td>{item.quantity}</td>
              <td>{item.unit_price}</td>
              <td>{item.total_price}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
              <td>
                <button className="btn btn-warning" onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {popupEdit && (
        <div className="container-edit-item-purchase">
          <form onSubmit={handleSubmitEdit} className="form-data container">
            <label htmlFor="" className="label-input">
              Purchase Quantity
            </label>
            <input
              value={newQty}
              onChange={(e) => setNewQty(e.target.value)}
              type="number"
              className="input-form"
            />
            <div className="container-btns">
              <button
                onClick={() => setPopupEdit(false)}
                className="btn btn-danger my-style-btn-form"
              >
                Cancel
              </button>
              <button className="btn btn-primary my-style-btn-form" type="submit">Update</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
