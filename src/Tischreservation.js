import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Like from "./Like";

function Tischreservation() {
  return (
    <div className="App">
      <header className="App-header">
        <Like like={true}></Like>
        <Container fluid>
          <Form>
            <Row>
              <Col xs={6} md={6}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
              </Col>

              <Col xs={6} md={6}>
                <Form.Group controlId="formBasicFirstname">
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control type="text" placeholder="Enter Firstname" />
                </Form.Group>
              </Col>
            </Row>

            <br />

            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="E-mail" placeholder="Enter email" />
                </Form.Group>
              </Col>
            </Row>

            <br />

            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="Tel" placeholder="Enter phone number" />
                </Form.Group>
              </Col>
            </Row>

            <br />

            <Row>
              <Col>
                <Form.Group controlId="formBasicPersons">
                  <Form.Label>Persons</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Number of Persons"
                    rows={2}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="Date" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicTime">
                  <Form.Label>Time</Form.Label>
                  <Form.Control type="Time" />
                </Form.Group>
              </Col>
            </Row>

            <br />

            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Other Wishes</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>

            <br />

            <Row>
              <Col xs={8} md={11}></Col>
              <Col xs={4} md={1}>
                <Form.Group controlId="formBasicSend">
                  <Form.Control type="submit" value="Send" />
                </Form.Group>
              </Col>
            </Row>

            <br />
          </Form>
        </Container>
      </header>
    </div>
  );
}

export default Tischreservation;
