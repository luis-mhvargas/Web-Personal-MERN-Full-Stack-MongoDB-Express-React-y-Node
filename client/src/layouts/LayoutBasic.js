import React from "react";
import { Row,Col } from "antd";
import { Route, Switch } from "react-router-dom";
import MenuTop from "../components/Web/MenuTop";
import "./LayoutBasic.scss";
import Footer from "../components/Web/Footer"

export default function LayoutBasic(props) {
  const { routes } = props;
   return (
    <>
    <Row>
      <Col md={4} />
      <Col md={16} >
      <MenuTop/>
    
      </Col>
      <Col lg={4} />
    </Row>
     <LoadRoutes routes ={routes} />
     <Footer/>
     </>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
