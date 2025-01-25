import { useState } from "react";
import { MdLockReset } from "react-icons/md";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

export default function ModalResetPass({ mail }) {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState(mail);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = () => {
    ResetPass();
    handleClose();
  };

  const ResetPass = async () => {
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/mail`,
      data: { email },
    });
  };

  return (
    <>
      <MdLockReset className="action-icon fs-5 ms-2" onClick={handleShow} />
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reset password</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} />
          <Form.Group controlId="emailr">
            <Form.Label className="mb-3">
              Write your email in the field below, and we will send you a
              notification to your email.
            </Form.Label>
            <Form.Control
              type="text"
              name="emailr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email..."
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button className="main-btn" onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
