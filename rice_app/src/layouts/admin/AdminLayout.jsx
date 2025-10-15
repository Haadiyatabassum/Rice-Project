
import Sidebar from '/src/components/admin/Sidebar'
import Header from '/src/components/admin/Header'
import UserTable from '/src/components/tables/UserTable'
import ProductCard from '/src/components/products/ProductCard'
import ProductList from '/src/components/products/ProductList'
const AdminLayout = () => {
  return (

   <div className="d-flex" style={{ minHeight: "100vh" }}>
 {/* Sidebar */}
   <div style={{ width: "150px", position: "fixed", height: "100vh", background: "#f8f9fa", borderRight: "1px solid #dee2e6", zIndex: 100 }}>
 <Sidebar />
 </div>

 {/* Main Content */}
 <div style={{ marginLeft: "220px", width: "100%" }}>
 <Header />
<main className="p-3">
<ProductCard />
<ProductList/>
<UserTable/>
 </main>
</div>
   </div>
    
  )
}

export default AdminLayout