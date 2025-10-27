import React, { useContext } from "react";
import { VendorContext } from "../../context/VendorContext";

const VendorOrders = () => {
  const { vendorOrders, clearVendorOrders } = useContext(VendorContext);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "goldenrod" }}>
        Vendor Orders
      </h2>

      {vendorOrders.length === 0 ? (
        <p className="text-center">No bulk orders yet.</p>
      ) : (
        <>
          <div className="row g-3">
            {vendorOrders.map((order, index) => (
              <div className="col-md-3" key={index}>
                <div
                  className="card shadow-sm h-100 border-0"
                  style={{ backgroundColor: "#fff8e1" }}
                >
                  <img
                    src={order.image}
                    className="card-img-top"
                    alt={order.name}
                    style={{ height: "130px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h6>{order.name}</h6>
                    <p className="text-success fw-bold">₹{order.price}/kg</p>
                    <p className="text-muted small">Qty: {order.quantity}</p>
                    <p className="text-muted small">Ordered on: {order.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={clearVendorOrders}>
              Clear All Orders
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default VendorOrders;
