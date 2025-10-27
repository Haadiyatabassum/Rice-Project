
import {  Card } from 'antd';
import { Row, Col } from "antd";
import 'antd/dist/reset.css'
import {UserOutlined,BellOutlined,ShareAltOutlined,  ShoppingCartOutlined, CloudDownloadOutlined,EnvironmentOutlined} from "@ant-design/icons";
import { FaTrophy, FaUsers, FaStar } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";


{/*Download app styles */}
const styles = {
  section: {
    padding: "60px 20px",
    background: "#fff"
  },
  image: {
    width: "100%",
    maxWidth: "700px",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color:"gold",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "25px"
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px"
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px"
  },
  featureIcon: {
    fontSize: "22px",
    color: "#52c41a",
    flexShrink: 0
  },
  featureTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600
  },
  featureDesc: {
    margin: 0,
    fontSize: "14px",
    color: "#666"
  }
};

const About = () => {

   const timeline = [
    { year: '2010', text: 'Founded Rice Mart to deliver premium rice globally.', icon: '🌾' },
    { year: '2013', text: 'Entered Retail market with branded rice packs.', icon: '🛍️' },
    { year: '2016', text: 'Received National Agriculture  Export Award.', icon: '🏆' },
    { year: '2019', text: 'Expanded our products to 20+ countries worldwide.', icon: '🌍' },
    { year: '2020', text: 'Introduced organic rice product line globally', icon: '🌱' },
    { year: '2024', text: 'Launched sustainable rice farming program and achieved success', icon: '♻️' }, 
  ];
 
const investors = [
  {
    name: "Alpha Ventures",
    logo: "src/assets/Investor1.png",
    tagline: "Early-Stage Innovation Partner",
  },
  {
    name: "Global Capital",
    logo: "src/assets/Investor2.jpg",
    tagline: "Scaling Global Potential",
  },
  {
    name: "Future Fund",
    logo: "src/assets/Investor3.jpg",
    tagline: "Investing in Tomorrow",
  },
  {
    name: "Skyline Equity",
    logo: "src/assets/Investor4.jpg",
    tagline: "Backing Bold Visions",
  },
  {
    name: "NextWave Partners",
    logo: "src/assets/logo2.jpg",
    tagline: "Empowering Tech Leaders",
  },
  {
    name: "CoreFund",
    logo: "src/assets/logo1.jpg",
    tagline: "Focused on Growth",
  },
];
  

const features = [
  {
    icon: <UserOutlined />,
    title: "User Authentication",
    description:
      "Create accounts, log in securely, and manage profiles with password, social media login, or multi-factor authentication."
  },
  {
    icon: <BellOutlined />,
    title: "Push Notifications",
    description:
      "Stay informed with timely updates, special offers, and important app announcements."
  },
  {
    icon: <ShareAltOutlined />,
    title: "Social Sharing",
    description:
      "Share recipes, rice facts, and promotions directly to social media platforms."
  },
  {
    icon: <ShoppingCartOutlined />,
    title: "In-App Purchases",
    description:
      "Order premium rice varieties and accessories right from the app."
  },
  {
    icon: <CloudDownloadOutlined />,
    title: "Offline Mode",
    description:
      "Browse saved products and recipes even without an internet connection."
  },
  {
    icon: <EnvironmentOutlined />,
    title: "Geolocation Services",
    description:
      "Find nearby rice stores and receive location-specific offers."
  }
];

 const stats = [
    { icon: <FaTrophy size={30} />, number: "950+", label: "SUCCESSFUL SALES" },
    { icon: <FaUsers size={30} />, number: "700+", label: "HAPPY CLIENTS" },
    { icon: <FaRegCalendarCheck size={30} />, number: "10", label: "YEARS IN BUSINESS" },
    { icon: <FaStar size={30} />, number: "4.3", label: "AVERAGE RATING" },
  ];

  return (
    
  <div style={{margin:0,padding:0}}>
    <div className='row align-items-center' style={{position:'relative',width:'100vw',overflow:'hidden'}}>
    <div className="col-md-6 mb-4 mb-md-0">  
    <img src="src/assets/Indus.webp" alt="Industry" /> 
    <div style={{position:'absolute',bottom:'40px',left:'50%',transform:'translate(-50%)',color:'white',fontSize:'2rem',fontWeight:'bold',textShadow:'2px 2px 10px rgba(0,0,0,0.7)',textAlign:'center'}}>"Best Quality Rice is Our Pride Passions and Tradition" </div>
    <div style={{position:'absolute',top:'40px',left:'50%',transform:'translate(-50%)',color:'gold',fontSize:'3rem',fontWeight:'bold',textShadow:'2px 2px 10px rgba(0,0,0,0.7)',textAlign:'center'}}>Explore Our World</div>
    </div> 
   </div>


{/* About Us*/}
<div className="container my-2"> 
  <div className="row align-items-center">
    <div className="col-md-6 order-2 order-md-1">
    <h2 className="mb-1" style={{fontWeight:'bold',color:'green',}}>About Us</h2> 
     <h2 style={{fontWeight:'bold',color:'gold'}}>Overview</h2>
 <p>
 Established in 2010, Founded with a vision to deliver premium-quality rice to households 
   and businesses across the globe,Rice Mart stands as a symbol of excellence, tradition, 
   and innovation in rice processing.Our state-of-the-art milling facility combines traditional
   know-how with cutting-edge technology to ensure the highest quality standards in every grain.
    From the moment paddy enters our plant to the final sealed pack, our commitment to hygiene, 
    consistency, and sustainability drives every step of the process.With a presence in both domestic
   and international markets, we specialize in a wide variety of rice types including Basmati,
    Sona Masoori, and Parboiled rice. Our team of experts ensures that only the best reaches your plate. </p>
 <h4 style={{fontWeight:'bold',color:'gold'}}>Purpose & Value</h4>
   <p>To nourish communities with high-quality, responsibly processed rice, while advancing food security,
      sustainability, and innovation in every grain we deliver. </p>
 </div>
 <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
  <img src="src/assets/A1.jpg" alt="Worker at facility" className="img-fluid rounded shadow"/>
  </div>
</div>
</div>

<div className=" col-md-6 order-1 mb-4 mb-md-0" > 
     <div style={{ padding: '40px 20px', fontFamily: 'Arial,sans-serif' }}> 
    <div style={{
      minHeight: '50vh',
      width:'100vw',
      background: 'linear-gradient(to bottom right, #f5fff8, #e2f0e9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>


 {/*TimeLine */}
  <h2 style={{textAlign: 'center',fontSize: '2.5rem',fontWeight: 'bold',marginBottom: '30px', color:'gold'}}>Our Journey</h2>
  <div style={{display: 'flex',justifyContent: 'space-evenly',alignItems: 'flex-start', flexWrap: 'wrap',gap: '20px',position: 'relative', padding: '20px 0'}}>    
   <div style={{ position: 'absolute',top: '60px',left: 0,right: 0,height: '4px',zIndex: 0,display: 'none',}} className="timeline-line" />
    {timeline.map((event, index) => (
   <div key={index} style={{width: '180px', zIndex: 1, textAlign: 'center', position: 'relative', backgroundColor: 'white', borderRadius: '12px',padding: '20px 15px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',transition: 'transform 0.3s ease', cursor: 'pointer'}}
   onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
   onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
   <div style={{ width: '15px', height: '15px',backgroundColor: '#4caf61ff', borderRadius: '50%',position: 'absolute',left: 'calc(50% - 9px)',border: '3px solid white',boxShadow: '0 0 0 2px #4CAF50'
   }} />
   <h4 style={{ margin: '15px 0', color: '#222' }}>{event.year}</h4>
  <p style={{ fontSize: '0.9rem', color: '#555' }}>{event.text}</p>
  </div>
  ))}
  </div>
  </div>
</div> 
</div>

    {/* Investors*/}
    <div className="p-6 max-w-6xl mx-auto ">
    <h2 className="text-3xl font-semibold text-center mb-8" style={{color:'gold', fontSize: '2.5rem', fontWeight: 'bold' ,textAlign:'center'}}>Our Investors</h2>
   <Row gutter={[24, 24]} justify="center">
    {investors.map((inv, idx) => (
   <Col xs={16} sm={12} md={8} key={idx}>
   <Card bordered={false} hoverable className="text-center shadow-md" style={{backgroundColor:'lavenderblush'}} cover={
   <div className="flex items-center justify-center h-10">
   <img src={inv.logo} alt={inv.name} className="max-h-10 object-contain"
 />
 </div>
 }
 >
<h3 className="text-lg font-medium">{inv.name}</h3>
 <p className="text-sm text-gray-500">{inv.tagline}</p>
 </Card>
 </Col>
))}
 </Row>
  </div>


{/* Stats*/}
<div style={{background: "#fff", padding: "40px 0",display: "flex",justifyContent: "center",}}
    >
<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
   gap: "20px",
   background: "#dad774ff",
   borderRadius: "15px",
   padding: "20px 40px",
   color: "#fff",
   width: "90%",
   maxWidth: "1000px",
        }}
      >
        {stats.map((stat, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "10px" }}>{stat.icon}</div>
            <h2 style={{ fontSize: "20px", margin: 0 }}>{stat.number}</h2>
            <p style={{ fontSize: "14px", letterSpacing: "1px" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>


   {/*Download Rice Mart App  */}
  <div style={styles.section}>
   <Row gutter={[32, 32]} align="middle">
 {/* Left Side Image*/}
  <Col xs={24} md={10}>
<img
  src="src/assets/s4.jpg" 
 alt="Rice Mart App"
 style={styles.image}
 />
</Col>

 {/* Right Side content */}
  <Col xs={24} md={14}>
  <h2 style={styles.title}>Download the Rice Mart App</h2>
 <p style={styles.subtitle}>
 Enjoy fresh rice varieties, exclusive deals, and doorstep delivery.
 </p>
<div
 style={{
 ...styles.featuresGrid,
 ...(window.innerWidth >= 768
? { gridTemplateColumns: "1fr 1fr" }
  : {})
 }}
   >
 {features.map((feature, index) => (
   <div style={styles.featureItem} key={index}>
      <span style={styles.featureIcon}>{feature.icon}</span>
      <div>
    <h4 style={styles.featureTitle}>{feature.title}</h4>
   <p style={styles.featureDesc}>{feature.description}</p>
     </div>
  </div>
     ))}
          </div>
        </Col>
      </Row>
    </div>
      
  </div>
  )
}

export default About