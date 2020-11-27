import React from "react";
import { Layout,Row,Col } from "antd";
import { Route, Switch } from "react-router-dom";
import MenuTop from "../components/Web/MenuTop";
import "./LayoutBasic.scss";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Footer } = Layout;
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
     <Footer>HuskCode</Footer>
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
