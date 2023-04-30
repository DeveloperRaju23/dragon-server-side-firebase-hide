import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import QZone from "../QZone/QZone";
const RightNav = () => {
  return (
    <div>
      <h4 className="">Login With</h4>
      <div className="w-full mt-3">
        <Button className="mb-2 py-3 fs-5 px-5" variant="outline-primary">
          {" "}
          <FaGoogle />
          Login With Google
        </Button>{" "}
        <Button className="mb-2 py-3 fs-5 px-5" variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login With GitHub
        </Button>
      </div>
      <div className="mt-4">
        <h4 className="mb-3">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="py-3 fs-4 text-secondary"> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className="py-3 fs-4 text-secondary"> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className="py-3 fs-4 text-secondary"> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default RightNav;
