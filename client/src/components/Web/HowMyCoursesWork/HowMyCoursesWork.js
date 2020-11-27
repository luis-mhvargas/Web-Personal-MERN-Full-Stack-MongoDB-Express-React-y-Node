import React from 'react';
import {Row, Col,Card } from "antd";
import { ClockCircleOutlined ,MessageOutlined,KeyOutlined,UserOutlined,DollarOutlined,SafetyCertificateOutlined} from "@ant-design/icons";
import "./HowMyCoursesWork.scss";


export default function HowMyCoursesWork(){
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>¿Como funciona la capacitacion</h2>
                <h3>
                En HuskCode entendemos las necesidades de las empresas para lograr un mejor desarrollo y éxito profesional.
                </h3>
            </Col>
            <Col lg={4}/>
            <Col lg={16}>
                <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                        icon={<ClockCircleOutlined />}
                        title="Cursos y Clases"
                        description="Capacitacion de entre 10 y 30 horas y cada clase de la capacitacion con duracion maxima de 3 horas"/>
                    </Col>
                    <Col md={8}>
                        <CardInfo
                        icon={<KeyOutlined />}
                        title="Acceso 24/7"
                        description="Acceso a los cursos de capacitacion en cualquier momento y desde cualquier lugar"/>
                    </Col>
                    <Col md={8}>
                        <CardInfo
                        icon={<MessageOutlined />}
                        title="Aprendizaje Colaborativo"
                        description="Aprende de los demas dejando tus dudas a los profesores y compañeros te ayuden"/>
                    </Col>
                    </Row>
                    <Row className="row-cards">
                    <Col md={8}>
                        <CardInfo
                        icon={<UserOutlined />}
                        title="Mejora tu Perfil"
                        description="Aprende y mejora tu perfil para mantenerte actualizado."/>
                    </Col>
                    <Col md={8}>
                        <CardInfo
                        icon={<DollarOutlined />}
                        title="Precios Bajos"
                        description="Obten la capacitacion que necesites al precio indicado y ten acceso a el por tiempo ilimitado y soporte ilimitado"/>
                    </Col>
                    <Col md={8}>
                        <CardInfo
                        icon={<SafetyCertificateOutlined />}
                        title="Certificados de Finalizacion "
                        description="Al completar tu capacitacion recibiras una certificacion que te expedira Huskcode"/>
                    </Col>
                </Row>
            </Col>
            <Col lg={4}/>
        </Row>
    );
}

function CardInfo(props){
    const { icon , title,description} = props;
    const { Meta} = Card;

    return (
        <Card className="how-my-courses-work__card">
      {icon}
      <Meta title={title} description={description} />
        </Card>
    )

}