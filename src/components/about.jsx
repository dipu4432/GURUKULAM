import "./about.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "../assets/images/ab1.png";
import img2 from "../assets/images/ab2.png";
import img3 from "../assets/images/ab3.png";
import img4 from "../assets/images/ab4.png";

function About() {
  const features = [
    {
      // title: "Residential Gurukulam",
      title: "आवासीय गुरुकुलम्",
      image: img1,
      points: [
        // "Sampoorna swasiya vyavastha.",
        // "Anushasit jeevan shaili.",
        // "Guru margdarshan.",
        "संपूर्ण स्वासिय व्यवस्था।",
        "अनुशासित जीवन शैली।",
        "गुरु मार्गदर्शन।",
      ],
    },
    {
      // title: "Free / Low Cost Shiksha",
      title: "मुफ्त / कम लागत वाली शिक्षा",
      image: img2,
      points: [
        // "Arthik roop se kamzor bachchon ke liye.",
        // "Samajik sahyog se chalne wala model.",
        // "Gunvatta purna shiksha.",
        "आर्थिक रूप से कमजोर बच्चों के लिए।",
        "सामाजिक सहयोग से चलने वाला मॉडल।",
        "गुणवत्तापूर्ण शिक्षा।",
      ],
    },
    {
      // title: "Gaushala Se Kharcha Manage",
      title: "गौशाला से खरचा प्रबंधन",
      image: img3,
      points: [
        // "Gaushala se aarthik sahyog.",
        // "Dugdh utpadan.",
        // "Swayamnirbhar pranali.",
        "गौशाला से आर्थिक सहयोग।",
        "दुग्ध उत्पादन।",
        "स्वावलंबी प्रणाली।",
      ],
    },
    {
      // title: "Bhagwat Katha & Sanskar Shiksha",
      title: "भागवत कथा & संस्कार शिक्षा",
      image: img4,
      points: [
        // "Gita path.",
        // "Dharmik shiksha.",
        // "Sanskar nirman."
        "गीता पाठ।",
        "धार्मिक शिक्षा।",
        "संस्कार निर्माण।",
      ],
    },
  ];

  return (
    <section className="about-section">
      <Container>
        {/* Heading */}
        <div className="about-header">
          {/* <h2>Hamare Gurukulam ke Baare Mein</h2> */}
          <h2>हमारे गुरुकुलम् के बारे में</h2>
          {/* <p>
            Hamare gurukulam ka uddeshya bachchon ko uchch sanskar, vedic gyan
            aur jeevan ka satya marg sikhana hai.
          </p>
          <p>
            Yahan shiksha ke sath anushasan aur seva bhav par zor diya jata hai.
          </p> */}
          <p>
            हमारे गुरुकुलम् का उद्देश्य बच्चों को उच्च संस्कार, वैदिक ज्ञान और
            जीवन का सत्य मार्ग दिखाना है।
          </p>
          <p>
            यहाँ शिक्षा के साथ अनुशासन और सेवा भाव पर विशेष जोर दिया जाता है।
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {features.map((item, index) => (
            <Col lg={3} md={6} sm={12} key={index}>
              <Card className="about-card h-100">
                <div className="about-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="about-image"
                  />
                </div>

                <Card.Body>
                  <h5>{item.title}</h5>

                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default About;
