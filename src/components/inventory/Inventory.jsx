import "./Inventory.scss";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../stoore";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Inventory() {
  const [serverUrl] = useRecoilState($ServerUrl);
  const [inventors, setInventory] = useState([]);

  const fetchInventory = async () => {
    try {
      const response = await axios.get(`${serverUrl}/inventories`);
      setInventory(response.data.response.data);
      // console.log(response.data.response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  console.log(inventors);

  return (
    <div className="container table-data">
      <button className="btn btn-success my-style-btn">ADD Inventory</button>

      <table className="table table-striped table-dark table-style">
        <thead>
          <tr>
            {/* <th className="title-head-table" scope="col">id</th> */}
            {/* <th className="title-head-table" scope="col">product_id</th> */}
            {/* <th className="title-head-table" scope="col">warehouse_id</th> */}
            <th className="title-head-table" scope="col">quantity</th>
            <th className="title-head-table" scope="col">serial_number</th>
            <th className="title-head-table" scope="col">location_id</th>
            <th className="title-head-table" scope="col">DELETE</th>
            <th className="title-head-table" scope="col">EDIT</th>
            <th className="title-head-table" scope="col">VIEW</th>
          </tr>
        </thead>
        <tbody>
          {inventors.map((inv, index) => (
            <tr key={index}>
              {/* <th className="data-table-purchase-no" scope="row">{inv.id}</th> */}
              {/* <td className="data-table-purchase">{inv.product_id}</td>
              <td className="data-table-purchase">{inv.warehouse_id}</td> */}
              <td className="data-table-purchase">{inv.quantity}</td>
              <td className="data-table-purchase">{inv.serial_number}</td>
              <td className="data-table-purchase">{inv.location_id}</td>
              <td className="data-table-purchase">
                <button className="btn btn-danger">Delete</button>
              </td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button className="btn btn-primary">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
