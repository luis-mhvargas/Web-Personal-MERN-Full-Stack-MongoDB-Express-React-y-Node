import React  from "react";
import "./MainBanner.scss";
import { Row , Col } from "antd";

export default function MainBanner(){
    return  (
        <div className="main-banner">
            <div className="main-banner__dark"/>

            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <h2> 
                    Especialistas en  <br/> DESARROLLO DE SOFTWARE
                    </h2>
                    <h3>
                         Totalmente adecuado a las necesidades de tu empresa
                        <br/>
                        profecionales con años de experiencia 
                    </h3>
                </Col>
                <Col lg={4}/>
            </Row>
        </div>
    );
}



