import React, { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import basmati from "../../assets/b1.jpg";
import sonaMasoori from "../../assets/b2.jpg";
import brown from "../../assets/b3.jpg";
import idly from "../../assets/b4.jpg";
import jeeraSamba from "../../assets/basmati.webp";
import matta from "../../assets/b6.jpg";
import jasmine from "../../assets/b2.jpg";

const Shop = () => {
  const products = [
    { id: 1, name: "Basmati Rice", price: 120, image: basmati, description: "Premium long-grain basmati rice with rich aroma and fluffy texture." },
    { id: 2, name: "Sona Masoori Rice", price: 90, image: sonaMasoori, description: "Lightweight, aromatic rice perfect for daily meals." },
    { id: 3, name: "Brown Rice", price: 100, image: brown, description: "Healthy whole-grain rice rich in fiber and nutrients." },
    { id: 4, name: "Idly Rice", price: 85, image: idly, description: "Soft and fluffy rice perfect for making idly and dosa batter." },
    { id: 5, name: "Jeera Samba Rice", price: 110, image: jeeraSamba, description: "Small-grain aromatic rice perfect for biryani." },
    { id: 6, name: "Matta Rice", price: 95, image: matta, description: "Kerala red rice known for its coarse texture and earthy flavor." },
    { id: 7, name: "Jasmine Rice", price: 170, image: jasmine, description: "Fragrant Thai rice with soft texture and mild sweetness." },
    { id: 8, name: "Ponni Rice", price: 125, image: basmati, description: "Premium long-grain basmati rice with rich aroma and fluffy texture." },
    { id: 9, name: "Kolam Rice", price: 200, image: sonaMasoori, description: "Lightweight, aromatic rice perfect for daily meals." },
    { id: 10, name: "Red Rice", price: 100, image: brown, description: "Healthy whole-grain rice rich in fiber and nutrients." },
    { id: 11, name: "Black Rice", price: 85, image: idly, description: "Soft and fluffy rice perfect for making idly and dosa batter." },
    { id: 12, name: "Gobindobhog Rice", price: 210, image: jeeraSamba, description: "Small-grain aromatic rice perfect for biryani." },
    { id: 13, name: "Ambemohar Rice", price: 95, image: matta, description: "Kerala red rice known for its coarse texture and earthy flavor." },
    { id: 14, name: "Kalanamak Rice", price: 180, image: jasmine, description: "Fragrant Thai rice with soft texture and mild sweetness." },
    { id: 15, name: "Joha Rice", price: 170, image: basmati, description: "Premium long-grain basmati rice with rich aroma and fluffy texture." },
    { id: 16, name: "Patna Rice", price: 90, image: sonaMasoori, description: "Lightweight, aromatic rice perfect for daily meals." },
    { id: 17, name: "Parboiled Rice", price: 100, image: brown, description: "Healthy whole-grain rice rich in fiber and nutrients." },
    { id: 18, name: "Steamed Rice", price: 85, image: idly, description: "Soft and fluffy rice perfect for making idly and dosa batter." },
    { id: 19, name: "Wild Rice", price: 110, image: jeeraSamba, description: "Small-grain aromatic rice perfect for biryani." },
    { id: 20, name: "Arborio Rice", price: 95, image: matta, description: "Kerala red rice known for its coarse texture and earthy flavor." },
    { id: 21, name: "Kalajeera Rice", price: 140, image: jasmine, description: "Fragrant Thai rice with soft texture and mild sweetness." },
    { id: 22, name: "Mappillai Samba Rice", price: 120, image: basmati, description: "Premium long-grain basmati rice with rich aroma and fluffy texture." },
    { id: 23, name: "Navara Rice", price: 90, image: sonaMasoori, description: "Lightweight, aromatic rice perfect for daily meals." },
    { id: 24, name: "Thanjavur Ponni Rice", price: 160, image: brown, description: "Healthy whole-grain rice rich in fiber and nutrients." },
    { id: 25, name: "Gobindobhog Rice", price: 85, image: idly, description: "Soft and fluffy rice perfect for making idly and dosa batter." },
    { id: 26, name: "Indrayani Rice", price: 110, image: jeeraSamba, description: "Small-grain aromatic rice perfect for biryani." },
    { id: 27, name: "Sharbati Rice", price: 195, image: matta, description: "Kerala red rice known for its coarse texture and earthy flavor." },
    { id: 28, name: "Katarni Rice", price: 170, image: jasmine, description: "Fragrant Thai rice with soft texture and mild sweetness." },
    { id: 29, name: "Chakhao Rice", price: 320, image: basmati, description: "Premium long-grain basmati rice with rich aroma and fluffy texture." },
    { id: 30, name: "Rajamudi Rice", price: 90, image: sonaMasoori, description: "Lightweight, aromatic rice perfect for daily meals." },
    { id: 31, name: "Kavuni Rice", price: 100, image: brown, description: "Healthy whole-grain rice rich in fiber and nutrients." },
    { id: 32, name: "Cheruvirippu Rice", price: 185, image: idly, description: "Soft and fluffy rice perfect for making idly and dosa batter." },
    { id: 33, name: "Pusa Basmati Rice", price: 110, image: jeeraSamba, description: "Small-grain aromatic rice perfect for biryani." },
    { id: 34, name: "Broken Rice", price: 195, image: matta, description: "Kerala red rice known for its coarse texture and earthy flavor." },
    { id: 35, name: "Red Rice", price: 270, image: jasmine, description: "Fragrant Thai rice with soft texture and mild sweetness." },
  ];

  const { addToCart } = useContext(CartContext);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => setSelectedProduct(product);
const handleAddToCart = (product) => {
  addToCart(product);

  //  Create a Bootstrap popup (toast) instead of alert
  const toast = document.createElement("div");
  toast.className =
    "toast align-items-center text-white bg-warning border-0 position-fixed bottom-0 end-0 m-3 show";
  toast.style.zIndex = "1055";
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        ${product.name} added to cart successfully!
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
};


  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold" style={{color:"gold"}}> Rice Collection</h2>

      <div className="row g-3">
        {products.map((product) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 " key={product.id}>
            <div
              className="card shadow-sm border-0 h-100"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                 backgroundColor: "rgba(243, 242, 201, 0.81)",
              }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{
                  height: "160px", 
                  objectFit: "cover",
                }}
              />
              <div className="card-body text-center p-2">
                <h6 className="card-title mb-1">{product.name}</h6>
                <p className="text-success fw-bold mb-1">₹{product.price}/kg</p>
                <div className="d-flex justify-content-center gap-1">
                  <button
                    className="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal"
                    onClick={() => handleViewDetails(product)}
                  >
                    View
                  </button>
                  <button
                    className="btn text-white btn-sm"
                    style={{ backgroundColor: "green" }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      <div
        className="modal fade"
        id="productModal"
        tabIndex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {selectedProduct && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="productModalLabel">
                    {selectedProduct.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "250px", objectFit: "cover" }}
                  />
                  <p>{selectedProduct.description}</p>
                  <h5 className="text-success fw-bold">
                    ₹{selectedProduct.price}/kg
                  </h5>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn text-white"
                    style={{ backgroundColor: "green" }}
                    onClick={() => handleAddToCart(selectedProduct)}
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
