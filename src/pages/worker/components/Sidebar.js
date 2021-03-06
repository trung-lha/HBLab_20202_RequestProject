import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  Nav,
  Tabs,
  ButtonGroup,
  FloatingLabel,
  Modal,
  Spinner,
  InputGroup,
  Table,
} from "@themesberg/react-bootstrap";
import React from "react";
import "./styles/sidebar.css";
import Countdown, { zeroPad } from "react-countdown";
import { Tab } from "bootstrap";
import { useForm } from "react-hook-form";

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Col xs={4} className="countdown-time">
        {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}
      </Col>
    );
  }
};

const IOT = () => {
  return (
    <>
      <Row>
        <Col xs={6}>
          <Row>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={12}>
                  Sensor Options Product Success
                </Form.Label>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Sensor 1"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    checked
                  />
                  <Form.Check
                    type="radio"
                    label="Sensor 2"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Row>
          <br />
          {/* <Row>
            <Col sm={8}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" disabled defaultValue={0} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Target</Form.Label>
                <Form.Control type="text" disabled defaultValue={1000} />
              </Form.Group>
            </Col>
          </Row> */}
        </Col>
        <Col xs={6}>
          <Row>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={12}>
                  Sensor Options Product Error
                </Form.Label>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Sensor 1"
                    name="sensor"
                    id="sensor"
                    checked
                    disabled
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Row>
          <br />
          <br />
          {/* <Row>
            <Col sm={8}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Error Product</Form.Label>
                <Form.Control type="text" disabled defaultValue={0} />
              </Form.Group>
            </Col>
          </Row> */}
        </Col>
      </Row>
      <Row>
        <h5>S???n xu???t s???n ph???m theo b?? (20 s???n ph???m / b??)</h5>
      </Row>
      {/* <Row>
        <Col>
          <Card>
            <Card.Header></Card.Header>
          </Card>
        </Col>
      </Row> */}
    </>
  );
};

const ThuCong = () => {
  return (
    <>
      {/* <Form.FloatingLabel
        controlId="floatingSelect"
        label="S??? l?????ng s???n ph???m m???c ?????nh m???i l???n nh???p"> */}
      {/* <div>
        <h4>Ch???n s??? l?????ng s???n ph???m nh???p v??o m???i l???n</h4>
        <Form.Select aria-label="S??? l?????ng s???n ph???m m???c ?????nh m???i l???n nh???p">
          <option value="1">1 (M???c ?????nh)</option>
          <option value="2">5</option>
          <option value="3">10</option>
        </Form.Select>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h4>S??? l?????ng s???n ph???m l???i nh???p v??o m???i l???n</h4>
        <Form.Select aria-label="S??? l?????ng s???n ph???m l???i m???c ?????nh m???i l???n nh???p">
          <option value="1">1 (M???c ?????nh)</option>
        </Form.Select>
      </div> */}
      <Row>
        <h5>S???n xu???t s???n ph???m theo b?? (20 s???n ph???m / b??)</h5>
      </Row>
    </>
  );
};

const HuongDan = () => {
  return (
    <>
      <Row>
        <h4>H??? th???ng ?????m s???n ph???m t??? ?????ng</h4>
        <div>
          <p>
            M???i v??? tr?? l??m vi???c g???m c?? 2 b???ng truy???n (s???n ph???m t???t, s???n ph???m
            l???i). Tr??n m???i b??ng chuy???n ???? ???????c g???n c??c thi???t b??? gi??p nh???n bi???t
            s??? l?????ng c??ng nh??n ???? l??m. S??? l?????n s???n ph???m c??ng nh??n ???? l??m ???????c
            c???p nh???p li??n t???c tr??n m??n h??nh, c??ng nh??n h??y quan s??t ????? qu???n l??
            ti???n ????? c???a m??nh.
          </p>
        </div>
      </Row>
      <hr />
      <Row>
        <h4>H??? th???ng ?????m s???n ph???m th??? c??ng</h4>
        <div>
          <p>
            C??ng nh??n c??ng c?? th??? nh???p s??? l?????ng s???n ph???m b???ng c??ch th??? c??ng,
            c??ng nh??n s??? l??m vi???c theo b?? s???n ph???m, m???i b?? s???n ph???m bao g???m m???t
            s??? l?????ng s???n ph???m nh???t ?????nh m?? c??ng nh??n ???? nh???p v??o t??? tr?????c. ?????i
            v???i tr?????ng h???p s??? l?????ng s???n ph???m c??n l???i kh??ng ????? b??, c??ng nh??n h??y
            nh???p s??? l?????ng s???n ph???m v??o ?? s??? l?????ng s???n ph???m d??
          </p>
        </div>
      </Row>
    </>
  );
};

const data = [
  {
    id: 1,
    checked: false,
    text: " Ki???m tra k???t n???t",
  },
  {
    id: 2,
    checked: false,
    text: " Ki???m tra b??? ph???n ph??t t??n hi???u",
  },
  {
    id: 3,
    checked: false,
    text: " Ki???m tra b??? ph???n thu t??n hi???u",
  },
  {
    id: 4,
    checked: false,
    text: " Ki???m tra ????? nh???y nh???n bi???t s???n ph???m",
  },
];
function MyVerticallyCenteredModal(props) {
  const [listCheckStatus, setListCheckStatus] = React.useState(data);
  const [done, setDone] = React.useState(false);
  const updateCheck = (id) => {
    const newList = listCheckStatus.map((item) => {
      if (item.id <= id) {
        return {
          ...item,
          checked: true,
        };
      } else return item;
    });
    console.log(newList, listCheckStatus);
    setListCheckStatus(newList);
  };
  const fakeCheck = () => {
    for (let i = 1; i <= 4; i++) {
      setTimeout(() => {
        updateCheck(i);
        if (i === 4) {
          setDone(true);
        }
      }, i * 2000);
    }
  };
  React.useEffect(() => {
    fakeCheck();
  }, []);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ki???m tra thi???t b??? 1
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>H?????ng d???n</h4>
        <p>????a s???n ph???m m???u qua tr?????c thi???t b???.</p>
        {listCheckStatus.map((item, index) => {
          return (
            <div key={index} className="mb-3">
              <Form.Check type={"checkbox"} id={`check-api-checkbox`}>
                <Form.Check.Input
                  type={"checkbox"}
                  isValid={item.checked}
                  checked={item.checked}
                />
                <Form.Check.Label>{item.text}</Form.Check.Label>
                <Form.Control.Feedback type="valid">
                  {item.checked ? "T???t" : <Spinner animation="border" />}
                </Form.Control.Feedback>
              </Form.Check>
            </div>
          );
        })}
        <br />
        <hr />
        {done ? (
          <span>Thi???t b??? t???t</span>
        ) : (
          <Spinner animation="border" variant="secondary" />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>????ng</Button>
      </Modal.Footer>
    </Modal>
  );
}

const CongViecInfo = (props = {}) => {
  return (
    <Card>
      <Card.Header>Chi Ti???t C??ng Vi???c</Card.Header>
      <Card.Body>
        <div>
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span>T??n C??ng vi???c</span>
            <span>May c??? ??o</span>
          </div>
          <hr />
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span>Th???i gian th???c hi???n 1 s???n ph???m</span>
            <span>2 (s)</span>
          </div>
          <hr />
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span>Tr???ng s??? c??ng vi???c</span>
            <span>0.8</span>
          </div>
          <hr />
          <div className="d-flex" style={{ justifyContent: "space-between" }}>
            <span>S??? l?????ng s???n ph???m y??u c???u</span>
            <span>1000 (sp)</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const TestDevise = (props = {}) => {
  const { showModal } = props;
  return (
    <Card>
      <Card.Header>Ki???m tra k???t n???i b??? ?????m t??? ?????ng</Card.Header>
      <Card.Body>
        <div>
          <h5>Thi???t b??? ?????m s???n ph???m t???t</h5>
          <ul>
            <li className="mb-1">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Thi???t b??? 1</span>
                <Button variant="outline-dark" size="sm" onClick={showModal}>
                  Ki???m tra
                </Button>
              </div>
            </li>
            <li>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Thi???t b??? 2</span>
                <Button variant="outline-dark" size="sm" onClick={showModal}>
                  Ki???m tra
                </Button>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h5>Thi???t b??? ?????m s???n ph???m l???i</h5>
          <ul>
            <li>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Thi???t b??? 1</span>
                <Button variant="outline-dark" size="sm" onClick={showModal}>
                  Ki???m tra
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

const DateConvert = (date) => {
  return date.toLocaleString();
};
const WorkingContentIOT = (props = {}) => {
  const [statusSuccess, setStatusSuccess] = React.useState(false);
  const [statusError, setStatusError] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  const [listBo, setListBo] = React.useState([]);
  const {
    successP,
    setSuccessP,
    errorP,
    setErrorP,
    showTongKet,
    startTime,
    onHide,
  } = props;
  const handleProduct = (product) => {
    if (!pause) {
      if (product.status) {
        setStatusSuccess(true);
        setSuccess((success) => success + 1);
        setTimeout(() => {
          setStatusSuccess(false);
        }, 1000);
      } else {
        setStatusError(true);
        setError((error) => error + 1);
        setTimeout(() => {
          setStatusError(false);
        }, 1000);
      }
    }
  };
  React.useEffect(() => {
    const success = setInterval(() => {
      const fakeProduct = {
        status: Number.parseInt(Math.random() * 10) % 2 ? true : false,
      };
      handleProduct(fakeProduct);
    }, 4000);
    return () => {
      clearInterval(success);
    };
  }, []);
  const [success, setSuccess] = React.useState(0);
  const [error, setError] = React.useState(0);
  const handleBaoCao = () => {
    const bo = {
      id: listBo.length + 1,
      sp: success,
      epi: error,
      epo: 0,
    };
    setSuccess(0);
    setError(0);
    setListBo((listBo) => [...listBo, bo]);
  };
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <Card>
            <Card.Header>Ti???n ?????</Card.Header>
            <Card.Body>
              <Row>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#ID b??</th>
                      <th>S??? s???n ph???m t???t</th>
                      <th>S??? s???n ph???m l???i ?????u v??o</th>
                      <th>S??? s???n ph???m l??m l???i</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listBo.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.sp}</td>
                        <td>{item.epi}</td>
                        <td>{item.epo}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
              <br />
              <Row>
                <Col xs={4}>
                  <Card>
                    <Card.Header>
                      <strong>S???n ph???m t???t</strong>
                    </Card.Header>
                    <Card.Body>{success}</Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <Card.Header>
                      <strong>S???n ph???m l???i</strong>
                    </Card.Header>
                    <Card.Body>{error}</Card.Body>
                  </Card>
                </Col>
                <Col xs={4}>
                  <Card>
                    <Card.Header>S??? l?????ng y??u c???u</Card.Header>
                    <Card.Body>1000</Card.Body>
                  </Card>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <Card.Header>
                      <strong>
                        Th???i gian trung b??nh ho??n th??nh 1 b?? s???n ph???m
                      </strong>
                    </Card.Header>
                    <Card.Body>10 (ph??t/b?? s???n ph???m)</Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup
                className="d-flex"
                style={{ justifyContent: "center" }}
              >
                <div className="mb-2">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => handleBaoCao()}
                  >
                    {"B??o C??o"}
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => {
                      showTongKet(true);
                      onHide();
                    }}
                  >
                    K???t Th??c
                  </Button>
                </div>
              </ButtonGroup>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Header>Ki???u: T??? ?????ng</Card.Header>
            <Card.Body>
              <h6>Thi???t b??? ?????m s???n ph???m t???t</h6>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>
                  Thi???t b??? 1
                  <strong style={{ color: "green" }}>
                    (Tr???ng th??i: ho???t ?????ng)
                  </strong>
                </span>
                <div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "black 1px solid",
                      background: statusSuccess ? "green" : "none",
                    }}
                  ></div>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <h6>Thi???t b??? ?????m s???n ph???m l???i</h6>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>
                  Thi???t b??? 3{" "}
                  <strong style={{ color: "green" }}>
                    (Tr???ng th??i: ho???t ?????ng)
                  </strong>
                </span>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "black 1px solid",
                    background: statusError ? "red" : "none",
                  }}
                ></div>
              </div>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Th???i gian l??m vi???c</Card.Header>
            <Card.Body>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <span>Th???i gian b???t ?????u</span>
                <span>{DateConvert(startTime)}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const WorkingContentTC = (props = {}) => {
  const [statusSuccess, setStatusSuccess] = React.useState(false);
  const [statusError, setStatusError] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const handleSubmit = () => {
    // setSuccessP(Number.parseInt(successP) + Number.parseInt(sl));
    handleBaoCao();
    setShow(false);
  };
  const [sl, setSl] = React.useState("");
  const [listBo, setListBo] = React.useState([]);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const handleBaoCao = () => {
    const bo = {
      id: listBo.length + 1,
      sp: success,
      epi: error,
      epo: 0,
    };
    setSuccess(0);
    setError(0);
    setListBo((listBo) => [...listBo, bo]);
  };
  const {
    successP,
    setSuccessP,
    errorP,
    setErrorP,
    showTongKet,
    startTime,
    onHide,
  } = props;
  return (
    <>
      <Container>
        <Row>
          <Col xs={8}>
            <Card>
              <Card.Header>Ti???n ?????</Card.Header>
              <Card.Body>
                {/* <Row>
                  <Col xs={4}>
                    <Card>
                      <Card.Header>
                        <strong>S???n ph???m t???t</strong>
                      </Card.Header>
                      <Card.Body>{successP}</Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <Card.Header>
                        <strong>S???n ph???m l???i</strong>
                      </Card.Header>
                      <Card.Body>{errorP}</Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4}>
                    <Card>
                      <Card.Header>S??? l?????ng y??u c???u</Card.Header>
                      <Card.Body>1000</Card.Body>
                    </Card>
                  </Col>
                </Row> */}
                <Row>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>#ID b??</th>
                        <th>S??? s???n ph???m t???t</th>
                        <th>S??? s???n ph???m l???i ?????u v??o</th>
                        <th>S??? s???n ph???m l??m l???i</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listBo.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.sp}</td>
                          <td>{item.epi}</td>
                          <td>{item.epo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Card>
                      <Card.Header>
                        <strong>
                          Th???i gian trung b??nh ho??n th??nh 1 b?? s???n ph???m
                        </strong>
                      </Card.Header>
                      <Card.Body>10 (ph??t/b?? s???n ph???m)</Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br />
                {/* <Row>
                  <ButtonGroup
                    className="d-flex"
                    style={{ justifyContent: "center" }}
                  >
                    <div className="mb-2">
                      <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => setSuccessP(successP + 5)}
                      >
                        1 b?? s???n ph???m t???t
                      </Button>{" "}
                      <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => setErrorP(errorP + 1)}
                      >
                        1 b?? s???n ph???m l???i
                      </Button>{" "}
                      <Button
                        variant="outline-primary"
                        size="lg"
                        onClick={() => setShow(true)}
                      >
                        S??? l?????ng d??
                      </Button>
                    </div>
                  </ButtonGroup>
                </Row> */}
              </Card.Body>
              <Card.Footer>
                <ButtonGroup
                  className="d-flex"
                  style={{ justifyContent: "center" }}
                >
                  <div className="mb-2">
                    <Button
                      variant="outline-primary"
                      size="lg"
                      onClick={() => setShow(true)}
                    >
                      {"B??o C??o"}
                    </Button>{" "}
                    <Button
                      variant="outline-primary"
                      size="lg"
                      onClick={() => {
                        showTongKet(true);
                        onHide();
                      }}
                    >
                      K???t Th??c
                    </Button>
                  </div>
                </ButtonGroup>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <Card.Header>Ki???u: Th??? C??ng</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>S??? l?????ng s???n ph???m t???t trong m???i b??</span>
                  <div>
                    <div
                      style={{
                        color: "green",
                      }}
                    >
                      20
                    </div>
                  </div>
                </div>
                <br />
                <hr />
                <br />
                {/* <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>
                    <h6>S??? l?????ng s???n ph???m l???i trong m???i b??</h6>
                  </span>
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    1
                  </div>
                </div> */}
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Header>Th???i gian l??m vi???c</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Th???i gian b???t ?????u</span>
                  <span>{DateConvert(startTime)}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>S???n ph???m d??</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id="email" className="mb-4">
            <Form.Label>S??? l?????ng s???n t???t</Form.Label>
            <InputGroup>
              <Form.Control
                autoFocus
                required
                value={success}
                onChange={(event) => setSuccess(event.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group id="email" className="mb-4">
            <Form.Label>S??? l?????ng s???n ph???m l???i ?????u v??o</Form.Label>
            <InputGroup>
              <Form.Control
                autoFocus
                required
                value={error}
                onChange={(event) => setError(event.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            ????ng
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => handleSubmit()}
          >
            X??c nh???n
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const convetTime = (mili) => {
  const h = Number.parseInt(mili / 3600000);
  const p = Number.parseInt((mili % 3600000) / 60000);
  const s = Number.parseInt(((mili % 3600000) % 60000) / 1000);
  return `${h}h:${p}p:${s}s`;
};
const TongKet = (props = {}) => {
  const { show, setShow, successP, errorP, startTime } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>Ti???n ????? th???c hi???n c??ng vi???c</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={3}>
            <Card>
              <Card.Header>
                <strong>S??? b?? s???n ph???m</strong>
              </Card.Header>
              <Card.Body>{10}</Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Header>
                <strong>S???n ph???m t???t</strong>
              </Card.Header>
              <Card.Body>{200}</Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Header>
                <strong>S???n ph???m l???i ?????u v??o</strong>
              </Card.Header>
              <Card.Body>{10}</Card.Body>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <Card.Header>S??? l?????ng y??u c???u</Card.Header>
              <Card.Body>1000</Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>Th???i gian th???c hi???n</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Th???i gian b???t ?????u</span>
                  <span>{DateConvert(startTime)}</span>
                </div>
              </Card.Body>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Th???i gian k???t th??c</span>
                  <span>{DateConvert(new Date())}</span>
                </div>
              </Card.Body>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Th???i gian l??m vi???c</span>
                  <span>{convetTime(new Date() - startTime)}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>????nh gi??</Card.Header>
              <Card.Body>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>Th???i gian l??m 1 b?? s???n ph???m</span>
                  <span>10 (ph??t/b?? s???n ph???m)</span>
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>
                    Th???i gian trung b??nh 1 b?? s???n ph???m <strong>y??u c???u</strong>
                  </span>
                  <span>10(ph??t/b?? s???n ph???m)</span>
                </div>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>????nh gi?? trung b??nh</span>
                  <span style={{ color: "green" }}>?????t</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default function SideBar(props = {}) {
  const [startState, setStartState] = React.useState(false);
  const [sensorListSuccess, setSensorListSuccess] = React.useState([]);
  const [sensorListErrors, setSensorListErrors] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [successP, setSuccessP] = React.useState(0);
  const [errorP, setErrorP] = React.useState(0);
  const [startTime, setStartTime] = React.useState(new Date());
  const [type, setType] = React.useState("1");
  return (
    <>
      <Container>
        {/* <Container className="d-flex justify-content-center align-items-center"> */}
        <Row>
          <Col xs={8} className="mb-4">
            <Card>
              <Card.Header as="h2">Thi???t l???p thi???t b???</Card.Header>
              <Card.Body>
                <Tabs
                  defaultActiveKey="1"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                  onSelect={(key) => setType(key)}
                >
                  <Tab eventKey="1" title="T??? ?????ng ( m???c ?????nh ) ">
                    <IOT />
                  </Tab>
                  <Tab eventKey="2" title="Th??? c??ng">
                    <ThuCong />
                  </Tab>
                  <Tab eventKey="3" title="H?????ng d???n s???  d???ng">
                    <HuongDan />
                  </Tab>
                </Tabs>
                <Row className="d-flex justify-content-center align-items-center mt-2">
                  <Button
                    onClick={() => {
                      setShow(true);
                    }}
                    style={{ maxWidth: "50%" }}
                    disabled={startState}
                  >
                    {"B???t ?????u c??ng vi???c"}
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={4}>
            <CongViecInfo />
            <br />
            <TestDevise showModal={() => setModalShow(true)} />
          </Col>
        </Row>
      </Container>
      {modalShow ? (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        ""
      )}
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ti???n ????? th???c hi???n c??ng vi???c</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {type === "1" ? (
            <WorkingContentIOT
              successP={successP}
              setSuccessP={setSuccessP}
              errorP={errorP}
              setErrorP={setErrorP}
              showTongKet={setShow1}
              startTime={startTime}
              onHide={() => setShow(false)}
            />
          ) : (
            <WorkingContentTC
              successP={successP}
              setSuccessP={setSuccessP}
              errorP={errorP}
              setErrorP={setErrorP}
              showTongKet={setShow1}
              startTime={startTime}
              onHide={() => setShow(false)}
            />
          )}
        </Modal.Body>
      </Modal>
      <TongKet
        show={show1}
        setShow={setShow1}
        successP={successP}
        errorP={errorP}
        startTime={startTime}
      />
    </>
  );
}
