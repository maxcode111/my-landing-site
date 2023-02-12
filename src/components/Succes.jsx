import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Footer.css'

function Succes() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
  return (
    <>
<button className="SecConsultButton" onClick={handleShow}>Бесплатная консультация</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заявка отправлена!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ожидайте звонка в течении дня</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Succes;
