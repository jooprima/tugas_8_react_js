import React, {Component} from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Figure,
  Breadcrumb,
  Carousel,
  ListGroup,
  Jumbotron,
  Button,
  Form,
  Modal
} from "react-bootstrap";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {show: false};

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({show: true});
  }

  handleClose() {
    this.setState({show: false});
  }

  render() {
    return (
      <div style={{backgroundColor: "black", height: "120px"}}>
        <Dropdown>
          <Dropdown.Toggle variant="primary">Pilih Bahasa</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/">Indonesia</Dropdown.Item>
            <Dropdown.Item href="/">Inggris</Dropdown.Item>
            <Dropdown.Item href="/">Cina</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Container>
          <Row>
            <Col />
            <Col />
            <Col />
            <Col />
            <Col />
            <Col />
            <Col />
            <Col />
            <Col>
              <Figure align="center">
                <Figure.Image
                  width={40}
                  height={40}
                  src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
                  alt="logo"
                />
                <Figure.Caption style={{color: "white"}}>
                  Yohanes Prima
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>

          <Row>
            <Col />
            <Col>
              <Breadcrumb
                style={{float: "absolute", right: "0", width: "700px"}}
              >
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>

          <br />

          <Row>
            <center>
              <Col>
                <Carousel style={{width: "70%"}}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                      alt="psg"
                      height="400vh"
                    />
                    <Carousel.Caption>
                      <h3 style={{color: "grey"}}>
                        Neymar Bahas Kontrak Baru di Paris Saint Germain
                      </h3>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                      alt="inggris"
                      height="400vh"
                    />
                    <Carousel.Caption>
                      <h3>Inggris Ingin Menjadi Tim Terabik Dunia</h3>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                      alt="timnas"
                      height="400vh"
                    />
                    <Carousel.Caption>
                      <h3>
                        Sani Rizki Fauzi Tegaskan Mental Pemain U-23 Tetap Bagus
                      </h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </center>
          </Row>

          <br />

          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
                <ListGroup.Item>Divisi Primera</ListGroup.Item>
                <ListGroup.Item>Serie A</ListGroup.Item>
                <ListGroup.Item>Ligue 1</ListGroup.Item>
                <ListGroup.Item>Bundes Liga</ListGroup.Item>
              </ListGroup>
            </Col>

            <Col xs={6}>
              <Jumbotron>
                <h1>DIVISI PRIMERA</h1>
                <p>Main untuk Catalunya, Gerard Pique minta dihormati</p>
                <Button variant="primary">Read More</Button>
              </Jumbotron>
            </Col>

            <Col>
              <Figure
                align="center"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <Figure.Image
                  width={70}
                  height={70}
                  src="///png.icons8.com/registration/win8/50/1E90FF"
                  alt="logo"
                />
                <Figure.Caption>
                  <h4>Silahkan Login</h4>
                </Figure.Caption>
              </Figure>

              <Form>
                <Form.Group>
                  <Form.Control type="email" placeholder="Masukan email" />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Masukan password"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Check type="checkbox" label="Terms & Condition" />
                </Form.Group>

                <Button variant="primary" onClick={this.handleShow}>
                  Login
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>Anda Berhasil Login!</Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>

                    <Button variant="primary" onClick={this.handleClose}>
                      Save Username & Password
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Form>
            </Col>
          </Row>

          <br />
          <br />
        </Container>
      </div>
    );
  }
}

export default App;
