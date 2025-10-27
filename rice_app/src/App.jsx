import React from 'react'

import Approutes from './routes/Approutes'
import { CartProvider } from "./context/CartContext";
import { VendorProvider } from "./context/VendorContext";
const App = () => {
  return (
    <>
    
  <VendorProvider>
  <CartProvider>
 <Approutes/>
</CartProvider>
</VendorProvider>
    </>
  )
}

export default App