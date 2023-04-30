import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Container,} from "react-bootstrap";
import moment from "moment";
import Marquee from "react-fast-marquee";


const Header = () => {

  return (
    <Container>
      <div className="text-center">
        <img className="mt-5" src={logo} alt="logo" />
        <p className="text-secondary fs-4 mt-2">
          Journalism Without Fear or Favour
        </p>
        <p className="text-secondary fs-4 mt-2">
          {moment().format("dddd, MMMM D YYYY")}
        </p>
      </div>
      <div className="bg-light py-3 mt-5 mb-4">
        <div className="d-flex align-items-center">
          <button className="header-btn ms-4">Latest</button>
          <div>
            <Marquee className="fs-3 text-danger" speed={80}>
              I can be a React component, multiple React components, or just
              some text....
            </Marquee>
          </div>
        </div>
      </div>
    
    </Container>
  );
};

export default Header;
