import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import facebook from './img/facebook.png'
import github from './img/github.png'


function ContactsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p onClick={handleShow}>
        КОНТАКТЫ
      </p>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Мои контакты и страницы в соц-сетях</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display : "flex" ,gap : "20px"}}>
            <a href="http://instagram.com"><img src={instagram} alt="inst" className='inst'/></a>
            <a href="http://twitter.com"><img src={twitter} alt="inst" className='twit'/></a>
            <a href="http://facebook.com"><img src={facebook} alt="inst" className='face'/></a>
            <a href="https://github.com/maxcode111"><img src={github} alt="inst" className='git'/></a>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactsModal;