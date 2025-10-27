
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import { Collapse } from "antd";

const { Panel } = Collapse;
const Contact= () => {

  const faqs = [
    {
      q: "What types of rice do you sell?",
      a: "We offer Basmati, Sona Masoori, Jasmine, Brown, and Organic rice varieties."
    },
    {
      q: "Is your rice organic?",
      a: "Yes, we have a dedicated organic rice category sourced from certified organic farms."
    },
    {
      q: "Do you deliver across India?",
      a: "Yes, we deliver to all major cities and towns in India."
    },
    {
      q: "What is the shelf life of your rice?",
      a: "Our rice typically has a shelf life of 12-18 months when stored properly."
    },
    {
      q: "How should I store rice at home?",
      a: "Store rice in a cool, dry place in an airtight container to avoid pests and moisture."
    },
    {
      q: "Do you offer bulk discounts?",
      a: "Yes, bulk orders above 25 kg are eligible for special discounts."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept credit/debit cards, UPI, net banking, and cash on delivery."
    },
    {
      q: "How can I track my order?",
      a: "After shipping, we email you a tracking link so you can follow your delivery in real time."
    },
    {
      q: "Can I return or exchange rice?",
      a: "Yes, returns are accepted within 7 days if the package is unopened and in good condition."
    },
    {
      q: "Do you export rice outside India?",
      a: "Yes, Rice Basket exports premium rice varieties worldwide, ensuring timely delivery and high-quality packaging for international customers."
    }
  ];

  return (
    <>
      {/* Inline CSS inside style tag */}
      <style>{`
        body {
          font-family: Arial;
          margin: 0;
          padding: 0;
        }
        .contact-section {
          padding: 50px;
          background: #fdfaf3;
        }
        .contact-container {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        }
        .contact-info {
          flex: 1;
          min-width: 250px;
          background: #f7ffe9ff;
          padding: 20px;
          border-radius: 10px;
        }
        .contact-info .icon {
          color: #8acc55ff;
          margin-right: 8px;
        }
        .contact-info p {
          margin: 10px 0;
        }
        .contact-info a {
          text-decoration: none;
          color: #444;
        }
        .contact-form {
          flex: 2;
          min-width: 300px;
        }
        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
        }
        .contact-form button {
          padding: 10px;
          border: none;
          background:green;
          color: white;
          cursor: pointer;
          border-radius: 6px;
        }
        .contact-form button:hover {
          background: #d8d572ff;
        }
        .map-container {
          margin-top: 20px;
        }
        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
          }
        }
      `}</style>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h2 style={{color:"gold",fontWeight:"bold"}}>Contact Us</h2>
            <p>
              <FaMapMarkerAlt className="icon" /> 
              <strong>Address:</strong> Shop No.6,Malakpet,Hyderabad- 500036
            </p>
            <p>
              <FaPhoneAlt className="icon" /> 
              <strong>Phone:</strong> <a href="tel:+125325325">+91 7655342344</a>
            </p>
            <p>
              <FaEnvelope className="icon" /> 
              <strong>Email:</strong> <a href="mailto:info@yoursite.com"> ricemart@gmail.com</a>
            </p>
          </div>

          {/* Right Side - Form + Map */}
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Enter your Full Name" required />
              <input type="email" placeholder="Enter your Email Address" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            <div className="map-container">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7615.645270176605!2d78.48605463911!3d17.372265620245553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99cd6a78afa7%3A0x5314ed6dc66a3c93!2sMasqati%20supermarket!5e0!3m2!1sen!2sin!4v1754832358971!5m2!1sen!2sin" 
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>


{/* Faqs section*/}
<div className="container my-5">
      <h2 className="text-center mb-4" style={{color:"gold",fontWeight:"bold"}}>Frequently Asked Questions</h2>
      <Collapse accordion>
        {faqs.map((item, index) => (
          <Panel header={item.q} key={index}>
            <p>{item.a}</p>
          </Panel>
        ))}
      </Collapse>
    </div>



      
    </>
  );
};
export default Contact