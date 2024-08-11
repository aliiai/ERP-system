import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Purchase from "./pages/purchase/Purchase"
// import Edit from "./pages/edit/Edit";
import PurchaseDetails from "./components/purchaseDetails/PurchaseDetails";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Dashboard/>
      {/* <Routes> */}
        {/* <Route path="/" element={<Dashboard/>} /> */}
        {/* <Route path="/purchase" element={<Purchase/>} />
        <Route path="/purchase/:id" element={<PurchaseDetails/>} /> */}
      {/* </Routes> */}
      
    </div>
  );
}

export default App;
