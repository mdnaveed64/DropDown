import React, { useState } from "react";
import {
  Form,
  Button,
  Dropdown,
  DropdownButton,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const ServicesPage = () => {
  const [isShowSensor, setISShowSensor] = useState(false);
  const [isShowMoter, setISShowMoter] = useState(false);
  const [isShowRelay, setISShowRelay] = useState(false);

  return (
    <div>
      <Container>
        
        <DropdownButton
          id="dropdown-basic-button"
          title="Choose Device"
          style={{ paddingLeft: "500px", paddingTop: "60px" }}
        >
          <Dropdown.Item onClick={() => setISShowSensor(!isShowSensor)}>
            Sensor
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setISShowMoter(!isShowMoter)}>
            Moter
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setISShowRelay(!isShowRelay)}>
            Relay
          </Dropdown.Item>
        </DropdownButton>

        {isShowSensor && !isShowMoter && !isShowRelay && (
          <Form>
            <Form.Control
              type="text"
              placeholder="Sensor Id"
              style={{ marginTop: "10px" }}
            />

            <Form.Control
              type="text"
              placeholder="Sensor Name"
              style={{ marginTop: "10px" }}
            />
          </Form>
        )}
        {isShowMoter && !isShowRelay && (
          <Form>
            <Form.Control
              type="text"
              placeholder="Moter Id"
              style={{ marginTop: "10px" }}
            />

            <Form.Control
              type="text"
              placeholder="Moter Name"
              style={{ marginTop: "10px" }}
            />
          </Form>
        )}
        {isShowRelay && (
          <Form>
            <Form.Control
              type="text"
              placeholder="Relay Id"
              style={{ marginTop: "10px" }}
            />

            <Form.Control
              type="text"
              placeholder="Relay Name"
              style={{ marginTop: "10px" }}
            />
            <Form.Control
              as="select"
              placeholder="Modules"
              style={{ marginTop: "10px" }}
            >
              <option value="Modules" disabled selected>
                Modules
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4"></option>
              <option value="5"></option>
              <option value="6"></option>
              <option value="7"></option>
              <option value="8"></option>
              <option value="9"></option>
              <option value="10"></option>
              <option value="11"></option>
              <option value="12"></option>
              <option value="13"></option>
              <option value="14"></option>
              <option value="15"></option>
              <option value="16"></option>
              <option value="17"></option>
              <option value="18"></option>
              <option value="19"></option>
              <option value="20"></option>
              <option value="21"></option>
              <option value="22"></option>
              <option value="23"></option>
              <option value="24"></option>
              <option value="25"></option>
              <option value="26"></option>
              <option value="27"></option>
              <option value="28"></option>
              <option value="29"></option>
              <option value="30"></option>
              <option value="31"></option>
              <option value="32"></option>
            </Form.Control>
          </Form>
        )}
      </Container>
    </div>
  );
};
