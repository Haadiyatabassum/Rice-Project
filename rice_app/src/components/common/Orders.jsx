import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Orders = () => {
  const { orders, clearOrders } = useContext(CartContext);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "gold" }}>
        Your Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center fs-5">No orders yet.</p>
      ) : (
        <>
          <div className="row g-3 justify-content-center">
            {orders.map((item, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                <div
                  className="card shadow-sm border-0 h-100"
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "rgba(243, 242, 201, 0.81)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      height: "130px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        height: "120px",
                        width: "100%",
                        objectFit: "contain",
                        padding: "4px",
                      }}
                    />
                  </div>

                  <div className="card-body text-center p-2">
                    <h6 className="card-title mb-1">{item.name}</h6>
                    <p className="text-success fw-bold mb-1">
                      ₹{item.price}/kg
                    </p>
                    <p className="text-muted small mb-0">
                      Order Confirmed 
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-secondary px-4 py-2 fw-semibold"
              onClick={clearOrders}
            >
              Clear Orders
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
