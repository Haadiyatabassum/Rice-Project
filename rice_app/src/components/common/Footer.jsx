function Footer() {
  return (
  <footer className="bg-dark text-white pt-5 pb-4">
   <div className="container text-md-left">
     <div className="row">

 {/* Brand Section */}
   <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
    <h5 className="text-uppercase mb-4 fw-bold text-warning ">RICE Mart</h5>
      <p>
   Getting the best quality rice which tastes good isn’t so easy to find.
   This is where Rice Mart comes in. Everyone has a different taste of rice
  and are very specific when it comes to rice.
    </p>

  <div className="mt-3">
   <a href="#" className="text-white "><i className="bi bi-facebook me-3 fs-5"></i></a>
    <a href="#" className="text-white"><i className="bi bi-instagram me-3 fs-5 "></i></a>
    <a href="#" className="text-white"><i className="bi bi-whatsapp me-3 fs-5"></i></a>
     <a href="#" className="text-white"><i className="bi bi-twitter me-3 fs-5"></i></a>
    </div>
  </div>

 {/* Links */}
<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
   <h6 className="text-uppercase mb-4 fw-bold  text-warning">Links</h6>
      <p><a href="/home" className="text-white text-decoration-none"> Home</a></p>
      <p><a href="/shop" className="text-white text-decoration-none">Shop</a></p>
       <p><a href="/about" className="text-white text-decoration-none">About</a></p>
       <p><a href="/contact" className="text-white text-decoration-none">Contact</a></p>
       <p><a href="/blog" className="text-white text-decoration-none">Blog</a></p>
  </div>



{/*Terms and Conditions */}
<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
  <h6 className="text-uppercase  fw-bold text-warning">Legal</h6>
  <ul className="list-unstyled">
    <li >
      <a href="/terms" className="text-white text-decoration-none ">Terms & Conditions</a></li>
      <li> <a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a>
    </li>
  </ul>
</div>

 {/* Contact Info */}
  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
   <h6 className="text-uppercase mb-4 fw-bold  text-warning">Contact Us</h6>
    <p><i className="bi bi-house-fill me-2"></i> Shop No.6,Malakpet,Hyderabad- 500036</p>
     <p><i className="bi bi-telephone-fill me-2"></i> +91 7655342344</p>
     <p><i className="bi bi-clock-fill me-2"></i> 10A.M to 8P.M</p>
    <p><i className="bi bi-envelope-fill me-2"></i> ricemart@gmail.com</p>
  </div>
  </div>

  {/* Footer Bottom */}
  <hr className="my-3" />
<div className="d-flex justify-content-center  align-items-center">
<p className="mb-0">© 2025 <strong>Rice Mart</strong>. All Rights Reserved.</p> 
</div>
 </div>
    </footer>
  );
}

export default Footer;