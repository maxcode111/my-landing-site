import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function Consult() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>



      <button onClick={handleShow} className = "consultButton">
        Бесплатная консультация
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заполните заявку для консультации</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                type="email"
                placeholder="+7(ххх)-ххх-хх-хх"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ваше имя и комментарий (по желанию)</Form.Label>
              <Form.Control as="textarea" rows={3}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Consult;