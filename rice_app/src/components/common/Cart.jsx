import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, placeOrder } = useContext(CartContext);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "gold" }}>
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center fs-5">Your cart is empty.</p>
      ) : (
        <>
          <div className="row g-3 justify-content-center">
            {cart.map((item, index) => (
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
                    <p className="text-success fw-bold mb-2">₹{item.price}/kg</p>

                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => placeOrder(item)}
                      >
                        Order
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-secondary px-4 py-2 fw-semibold"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
