import React, { createContext, useState, useEffect } from "react";

export const VendorContext = createContext();

export const VendorProvider = ({ children }) => {
  const [vendorOrders, setVendorOrders] = useState(() => {
    const saved = localStorage.getItem("vendorOrders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("vendorOrders", JSON.stringify(vendorOrders));
  }, [vendorOrders]);

  const addVendorOrder = (order) => {
    setVendorOrders((prev) => [...prev, order]);
  };

  return (
    <VendorContext.Provider value={{ vendorOrders, addVendorOrder }}>
      {children}
    </VendorContext.Provider>
  );
};
