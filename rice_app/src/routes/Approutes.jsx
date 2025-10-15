import React from 'react';
import {Routes,Route,Navigate,useLocation} from "react-router-dom"  //to apply routing functionalities
import { Suspense } from "react"  //fallback ui loading spinners ...
import { useAuth } from "../store/context/AuthContext";
import PrivateRoutes from "./PrivateRoutes";  //route Guard
import Navbar from "../components/common/Navbar";
import Footer from '../components/common/Footer';
import PrivacyPolicy from '../components/common/PrivacyPolicy';
import TermsandConditions from '../components/common/TermsandConditions';

const AuthPage =React.lazy(()=>import("../pages/auth/Login"));
const Home=React.lazy(()=>import("../pages/users/Home"));
const About=React.lazy(()=>import("../pages/users/About"));
const Contact=React.lazy(()=>import("../pages/users/Contact"));
const Shop=React.lazy(()=>import("../pages/users/Shop"));
const Blog=React.lazy(()=>import("../pages/users/Blog"));
const Cart=React.lazy(()=>import("../components/common/Cart"));
const Unauthorized=React.lazy(()=>import("../components/common/Unauthorized"))
const PageNotFound=React.lazy(()=>import("../components/common/PageNotFound"))
const Orders=React.lazy(()=>import("../components/common/Orders"))
const VendorDashboard=React.lazy(()=>import("../layouts/vendor/VendorDashboard"))
const AdminDashboard=React.lazy(()=>import("../layouts/admin/AdminLayout"))

const Approutes = () => {
 //access the context of user like authenticated and role
  let {isAuthenticated,role}=useAuth()

  //useLocation hook to access current url path
  let location=useLocation()
  //console.log(url)

  let hideNavbar=['/auth']
  let shouldHideNav=hideNavbar.includes(location.pathname)   //true or false values

  return (
<>
 {!shouldHideNav && <Navbar/>} 
  <Suspense  fallback={<div className="spinner-border">
  <span className="visually-hidden">Loading...</span></div>}>
<Routes>
 {/*public Routes */}
  <Route path="/" element={<Navigate to={'/shop'} replace/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/blog" element={<Blog/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/privacy" element={<PrivacyPolicy/>}/>
  <Route path="/terms" element={<TermsandConditions/>}/>

 {/*auth Routes  (Role based access)*/}
 {/*after authentication path will be like localhost:5174/admin localhost:5174/vendor localhost:5173/shop*/}
<Route path="/auth"
 element={isAuthenticated?(`/${role=="vendor"?"vendor":role=="admin"?"admin":"shop"}`)
 :(<AuthPage/>)}>
</Route>


{/* protected Route (denied access to pages for all user before login)*/}
<Route element={<PrivateRoutes allowedUser={["public","admin","vendor"]}/>}>
 <Route path="/cart" element={<Cart/>}/>
</Route>


{/* Admin Routes*/}
<Route element={<PrivateRoutes allowedUser={["admin"]}/>}>
  <Route path="/admin" element={<AdminDashboard/>}/>
</Route>
   

 {/*Vendor Routes */}
  <Route element={<PrivateRoutes allowedUser={["vendor"]}/>}>
  <Route path="/vendor" element={<VendorDashboard/>}/>
 </Route>
    

 {/*fallback Routes */}
  <Route path='/unauthorized' element={<Unauthorized/>}/>
  <Route path='*' element={<PageNotFound/>}/>
</Routes>
</Suspense>
  <Footer/>
    </>
   
  )
}

export default Approutes