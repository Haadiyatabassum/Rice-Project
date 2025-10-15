import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div>
     
      {/* Main Content */}
      <main className="flex-grow-1 d-flex justify-content-start align-items-start py-5" style={{backgroundColor:"lavender"}}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h1 className="text-center mb-4">Privacy Policy</h1>
          

          <ol style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            <li><strong>Introduction:</strong> We respect your privacy and are committed to protecting your information.</li>
            <li><strong>Information Collected:</strong> We may collect your name, email, usage data, and device information.</li>
            <li><strong>Usage of Information:</strong> Your data is used to provide and improve our services.</li>
            <li><strong>Personalization:</strong> We use information to customize your experience in the app.</li>
            <li><strong>Data Sharing:</strong> We do not sell your data. Trusted partners may assist us under confidentiality agreements.</li>
            <li><strong>Cookies & Tracking:</strong> We use cookies to enhance your experience; you can manage preferences in your device settings.</li>
            <li><strong>Security:</strong> We take measures to protect your data, but no method is 100% secure.</li>
            <li><strong>Your Rights:</strong> You can access, update, or delete your data, and opt-out of marketing messages.</li>
            <li><strong>Policy Updates:</strong> We may update this policy; changes will be posted with a new effective date.</li>
            <li><strong>Contact Us:</strong> For questions, email us at <strong> ricemart@gmail.com</strong>.</li>
          </ol>
          
        </div>
      </main>
  
    </div>
  )
}

export default PrivacyPolicy