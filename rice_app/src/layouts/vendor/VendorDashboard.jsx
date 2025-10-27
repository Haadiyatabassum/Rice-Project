import React, { useContext } from "react";
import { VendorContext } from "../../context/VendorContext";
import basmati from "../../assets/b1.jpg";
import sona from "../../assets/b2.jpg";
import brown from "../../assets/b3.jpg";

const VendorDashboard = () => {
  const { addVendorOrder } = useContext(VendorContext);

  const products = [
    { id: 1, name: "Basmati Rice", price: 110, image: basmati },
    { id: 2, name: "Sona Masoori Rice", price: 85, image: sona },
    { id: 3, name: "Brown Rice", price: 95, image: brown },
  ];

  const handleBulkOrder = (product) => {
    const bulkOrder = {
      ...product,
      quantity: "50kg",
      date: new Date().toLocaleString(),
    };
    addVendorOrder(bulkOrder);
    alert(`${product.name} (50kg) ordered successfully!`);
  };

  return (
    <div className="container py-4">
      <h3 className="text-center mb-4 fw-bold" style={{ color: "goldenrod" }}>
        Vendor Dashboard
      </h3>

      <div className="row g-3 justify-content-center">
        {products.map((product) => (
          <div className="col-10 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div
              className="card shadow-sm border-0 text-center h-100"
              style={{
                borderRadius: "12px",
                backgroundColor: "#fffef5",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fcf5e5",
                  borderTopLeftRadius: "12px",
                  borderTopRightRadius: "12px",
                  padding: "8px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>

              {/* Product Information */}
              <div className="card-body p-2">
                <h6 className="fw-semibold mb-1">{product.name}</h6>
                <p className="text-success fw-bold mb-2">
                  ₹{product.price}/kg
                </p>
                <button
                  className="btn btn-success btn-sm px-3"
                  style={{ fontSize: "0.8rem" }}
                  onClick={() => handleBulkOrder(product)}
                >
                  Order 50kg
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDashboard;
