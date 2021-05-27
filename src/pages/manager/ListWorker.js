import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Modal } from '@themesberg/react-bootstrap';
import {ListWorkerTable} from "../../components/Tables";
import { AddWorker } from "../../components/AddWorker";

const ListKPI = () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  const showModelAddTask = () => {
    setShowDefault(true);
  }
  return (
    <>
      <Row>
        <Col xs={12} md={3}></Col>
        <Col xs={12} md={9}>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="d-block mb-4 mb-md-0">
              <h3>Danh sách công nhân</h3>
            </div>
          </div>
          <div className="table-settings mb-4">
            <Row className="justify-content-between align-items-center">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Tìm kiếm" />
                </InputGroup>
              </Col>
              <Col md={3}></Col>
              <Col md={2} className="ps-md-0 text-end">
                <div className="btn-toolbar mb-2 mb-md-0">
                  <Dropdown as={ButtonGroup}>
                  </Dropdown>
                  <ButtonGroup style={{ marginLeft: 10 }}>
                    <Button variant="outline-primary" size="sm" onClick={showModelAddTask}>Thêm Mới</Button>
                  </ButtonGroup>
                </div>
              </Col>
            </Row>
          </div>
          <ListWorkerTable/>
        </Col>
      </Row>
      <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose} size="xl">
        <Modal.Header>
          <Modal.Title className="h4">Thêm mới</Modal.Title>
          <Button variant="close" aria-label="Close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <AddWorker/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lưu
      </Button>
          <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
            Hủy
      </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
export default ListKPI;