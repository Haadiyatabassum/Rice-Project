import { Carousel, Card, Button, Row, Col, Avatar, Rate } from "antd";
import {SafetyCertificateOutlined,EnvironmentOutlined,GlobalOutlined,SmileOutlined,} from "@ant-design/icons";

{/* Hero Section Carousel Data */}
const carouselImages = [
  "/src/assets/rice7.jpg",
  "src/assets/rice-field.jpg",
  "/src/assets/rice2.jpg",
  "/src/assets/rice3.jpg",
  "/src/assets/rice4.jpeg",
  "/src/assets/rice5.webp",
  "/src/assets/rice6.avif",
  "/src/assets/rice.jpg",
];
const { Meta } = Card;

{/*Top Brands Data */}
const riceBrands = [
  {
    title: "Daawat",
    image: "src/assets/dawat.jpg",
  },
  {
    title: "IndiaGate",
    image: "src/assets/India.avif",
  },
  {
    title: "Kohinoor",
    image: "src/assets/kohh.jpg",
  },
  {
    title: "SonaMasoori",
    image: "src/assets/sona.png",
  },
];

{/* Why Choose Us Data*/}
const Data = [
  {
    icon: (
      <SafetyCertificateOutlined
        style={{ fontSize: "24px", color: "#52c41a" }}
      />
    ),
    title: "Premium Quality",
    description:
      "Only the finest grains, carefully selected and quality-checked.",
  },
  {
    icon: (
      <EnvironmentOutlined style={{ fontSize: "24px", color: "#389e0d" }} />
    ),
    title: "100% Organic",
    description: "Grown naturally without harmful chemicals or pesticides.",
  },
  {
    icon: <GlobalOutlined style={{ fontSize: "24px", color: "#096dd9" }} />,
    title: "Worldwide Shipping",
    description: "Delivering freshness to your doorstep across the globe.",
  },
  {
    icon: <SmileOutlined style={{ fontSize: "24px", color: "#faad14" }} />,
    title: "Trusted by Thousands",
    description: "Loved by customers, chefs, and nutritionists alike.",
  },
];

{  /*Customer Reviews data */}
const testimonials = [
  {
    name: "Umaima",
    review: "The quality of rice is exceptional. Truly fresh and aromatic!",
    rating: 5,
    image: "src/assets/umaim.jpeg",
  },
  {
    name: "Sarah Khan",
    review: "I love how they care about sustainable farming.",
    rating: 4,
    image: "src/assets/sarah.jpeg",
  },
  {
    name: "Firdous",
    review: "Fast delivery and amazing packaging. Highly recommended!",
    rating: 5,
    image: "src/assets/firdous.jpeg",
  },
  {
    name: "Abdul Malik",
    review: "Best basmati I’ve ever used. My family loved the aroma.",
    rating: 4,
    image: "src/assets/p5.jpg",
  },
  {
    name: "Kabir khan",
    review: "Excellent quality and very professional service.",
    rating: 4,
    image: "src/assets/kabir.avif",
  },
  {
    name: "Fatima Ali",
    review: "Organic and tasty. Feels like home-cooked rice.",
    rating: 5,
    image: "src/assets/p4.jpg",
  },
];

// Keyframes inside JS
const globalStyles = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;

const fadeInUp = {
  animation: "fadeInUp 0.8s  ease forwards ",
};
const Home = () => {
  
  {
    /* Carousel styles*/
  }
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "400px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "400px",
      objectFit: "cover",
    },
    overlay: {
      position: "relative",
      top: "100%",
      left: "100%",
      transform: "translate(-100%, -100%)",
      textAlign: "center",
      justifyContent:"center",
      color: "white",
      zIndex: 10,
    },
    headline: {
      fontSize: "2.3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    subtext: {
      fontSize: "1.3rem",
    },
    button: {
      backgroundColor: "green",
      color: "white",
      marginBottom:"20px",
    },
  };

  {
    /*Card styles */
  }
  const styles1 = {
    brandsSection: {
      padding: "40px 20px",
      textAlign: "center",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "20px",
    },
    card: {
      width: 300,
      textAlign: "center",
      backgroundColor: "#ebebd9ff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px",
      overflow: "hidden",
    },
    image: {
      height: "260px",
      objectFit: "cover",
    },
  };

  return (
    <>
      {/*Hero Section */}
      <div style={styles.container}>
        <Carousel autoplay arrows>
          {carouselImages.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Rice ${index + 1}`} style={styles.image} />
              <div style={styles.overlay}>
                <h1 style={styles.headline}>
                  Premium Rice Delivered to Your Doorstep
                </h1>
                <p style={styles.subtext}>
                  Explore organic, traditional, and aromatic rice varieties
                </p>
                <Button size="large" style={styles.button}>
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/*Top Brands */}
      <div style={styles1.brandsSection}>
        <h2 style={{ color: "gold", fontWeight: "bold" }}>Top Brands</h2>
        <div style={styles1.cardContainer}>
          {riceBrands.map((brand, index) => (
            <Card key={index}  hoverable style={styles1.card} cover={
          <img alt={brand.title}  src={brand.image}  style={styles1.image} /> }>
          <Meta title={brand.title} />
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{ padding: "50px 20px", background: "#f3f1daff" }}>
        <h2 style={{textAlign: "center", marginBottom: "20px",color: "gold",fontWeight:"bold"}} >Why Choose Us </h2>
        <Row gutter={[24, 24]} justify="center">
          {Data.map((item, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card  hoverable >
                {item.icon}
                <h3 style={{ marginTop: "10px" }}>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/*Customer Reviews */}
      <div style={{ padding: "50px 20px", background: "#fff" }}>
        {/*  keyframes globally */}
        <style>{globalStyles}</style>
        <h2
          style={{ textAlign: "center",marginBottom: "20px",fontWeight: "bold", color: "gold", }} >
          What Our Customers Say
        </h2>
        <Row gutter={[24, 24]} justify="center">
          {testimonials.map((item, index) => (
            <Col xs={24} sm={12}md={8} key={index} style={{ ...fadeInUp, animationDelay: `${index * 0.15}+s` }} >
              <Card hoverable style={{ borderRadius: "8px", transition: "transform 0.3s ease",  backgroundColor: "whitesmoke"}} >
                <Avatar size={34} src={item.image}  />
                <p style={{ fontStyle: "italic" }}>"{item.review}"</p>
                <h4 style={{ marginTop: "10px", fontSize: "18px" }}>{item.name}</h4>
                <Rate disabled defaultValue={item.rating} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
