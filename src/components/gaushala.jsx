import "./gaushala.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Gaushala() {
  const data = [
    {
      // title: "Academic Shiksha",
      title: "शैक्षणिक शिक्षा",
      color: "#4F7D39",
      bg: "#dfe8de",
      // items: ["Hindi/English", "Maths", "Sanskrit", "Science"],
      items: ["हिंदी / अंग्रेज़ी", "गणित", "संस्कृत", "विज्ञान"],
    },
    {
      // title: "Sharirik Khel",
      title: "शारीरिक खेल",
      color: "#D67816",
      bg: "#f4e7d7",
      // items: ["Cricket", "Kabaddi", "Athletics", "Kho - Kho"],
      items: ["क्रिकेट", "कबद्दी", "एथलेटिक्स", "खो - खो"],
    },
    {
      // title: "Kaushal Vikas",
      title: "कौशल विकास",
      color: "#D67816",
      bg: "#f1dfe5",
      // items: ["Tier Bhala", "Yoga", "Computer", "Farming"],
      items: ["टियर भला", "योग", "कंप्यूटर", "फार्मिंग"],
    },
  ];

  return (
    <section className="gaushala-section">
      <Container>
        <div className="gaushala-header">
          {/* <h2>Hamari Gaushala - Atmanirbhar Model</h2> */}
          <h2>हमारी गौशाला - आत्मनिर्भर मॉडल</h2>
          {/* <p>Hamari gaushala gurukulam ka ek mahatvapurn hissa hai.</p>
          <p>
            Yahan bachche gaay ki seva karna, prakriti se judna aur
            swavalambi jeevan jeena seekhte hain
          </p> */}
          <p>हमारी गौशाला गुरुकुलम् का एक महत्वपूर्ण हिस्सा है।</p>
          <p>
            यहाँ बच्चे गाय की सेवा करना, प्रकृति से जुड़ना और स्वावलंबी जीवन
            जीना सीखते हैं।
          </p>
        </div>

        <Row className="justify-content-center g-4">
          {data.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="gaushala-card">
                <div
                  className="gaushala-title"
                  style={{ backgroundColor: item.color }}
                >
                  {item.title}
                </div>

                <Card.Body
                  className="gaushala-body"
                  style={{ backgroundColor: item.bg }}
                >
                  <ul>
                    {item.items.map((point, i) => (
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

export default Gaushala;
