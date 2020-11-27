import React from "react";

import { Row, Col, Card, Button} from "antd";
import { Link} from "react-router-dom";

import anibv from "../../../assets/img/jpg/ANIBV.jpg";
import aws from "../../../assets/img/jpg/AWS.jpg";
import bert from "../../../assets/img/jpg/BERT.jpg";
import dsn from "../../../assets/img/jpg/DSN.jpg";
import iane from "../../../assets/img/jpg/IANE.jpg";
import mern from "../../../assets/img/jpg/MERN.jpg";
import plnm from "../../../assets/img/jpg/PLNM.jpg";

import "./HomeCourses.scss";


export default function HomeCourses(){
return (
    <Row className="home-courses">
        <Col lg={24} className="home-courses__title">
            <h2> Aprende y mejora tus habilidades</h2>
        </Col>
        <Col lg={4} />
        <Col lg={16}>
            <Row className="row-courses">
                <Col md={6}>
                    <CarCourse
                    image={anibv}
                    title="ANIBV"
                    subtitle="Aprende el Negocio de Inversion en Valores"
                    link=""/>
                </Col>
                <Col md={6}>
                    <CarCourse
                    image={aws}
                    title="AWS"
                    subtitle="Crea un Instagram con React, GraphQL, Apollo, MongoDB y AWS"
                    link=""/>
                </Col>
                <Col md={6}>
                    <CarCourse
                    image={bert}
                    title="BERT"
                    subtitle="Aprende BERT, el algoritmo de NLP más avanzado de Google"
                    link=""/>
                </Col>
                <Col md={6}>
                    <CarCourse
                    image={dsn}
                    title="DSN"
                    subtitle="Data Science aplicado a Negocios | 6 Casos de Estudio Reales"
                    link=""/>
                </Col>
                <Row className="row-courses">
                <Col md={6}>
                    <CarCourse
                    image={iane}
                    title="IANE"
                    subtitle="Inteligencia Artificial aplicada a Negocios y Empresas"
                    link=""/>
                </Col>
                <Col md={6}>
                    <CarCourse
                    image={mern}
                    title="MERN"
                    subtitle="Web Personal MERN Full Stack: MongoDB, Express, React y Node"
                    link=""/>
                </Col>
                <Col md={6}>
                    <CarCourse
                    image={plnm}
                    title="PLNM"
                    subtitle="Procesamiento del Lenguaje Natural Moderno en Python"
                    link=""/>
                </Col>

                </Row>
                
            </Row>
        </Col>
        <Col lg={4}/>
        <Col lg={24} className="home-courses__more">
            <Link to="/courses">
                <Button>Ver mas </Button>
            </Link>
        </Col>
    </Row>
);
}
function CarCourse(props){
    const {image, title,subtitle,link} = props;
    const { Meta }= Card;

    return (
        <a href={link} target="_black" rel="nooper noreferrer">
            <Card 
            className="home-courses__card"
            cover={<img src={image} alt={title}/>}
            actions={[<Button>Ingresar</Button>]}
            >
                <Meta title={title} description={subtitle}/>
            </Card>
        </a>
    )
}