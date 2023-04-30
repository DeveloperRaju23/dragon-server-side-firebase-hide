import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Share/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/Share/LeftNav/LeftNav";
import RightNav from "../Pages/Share/RightNav/RightNav";
const NewsLayout = () => {
    return (
        <div>
              <Header></Header>    
      <Container>
        <Row>
          <Col lg={9}> 
          <Outlet></Outlet>
          </Col>
          <Col lg={3}>
              <RightNav></RightNav>
            </Col>
        </Row>
      </Container>
        </div>
    );
};

export default NewsLayout;