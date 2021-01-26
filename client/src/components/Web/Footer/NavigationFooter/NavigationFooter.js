import React from "react";
import { Row, Col } from "antd";
import {
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  CaretRightOutlined,
  HddOutlined,
  AppstoreOutlined,
  UserOutlined,
  RightOutlined,
} from "@ant-design/icons";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col></Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <BookOutlined />
          Cursos Online
        </a>
      </li>
      <li>
        <a href="#">
          <CodeOutlined />
          Desarrollo Web
        </a>
      </li>
      <li>
        <a href="#">
          <DatabaseOutlined />
          Base de Datos
        </a>
      </li>
      <li>
        <a href="#">
          <CaretRightOutlined />
          Politica de Privacidad
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <HddOutlined />
          Sistemas / Servidores
        </a>
      </li>
      <li>
        <a href="#">
          <AppstoreOutlined />
          CMS
        </a>
      </li>
      <li>
        <a href="#">
          <UserOutlined />
          Portafolio
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined />
          Politica de Cookies
        </a>
      </li>
    </ul>
  );
}
