import React from "react";
import "./MyInfo.scss";
import LogoWhite from "../../../../assets/img/png/logo-white.png"
import SocialLink from "../../SocialLinks"

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={LogoWhite} alt="Huskcode"/>
            <h4>
                Entra en el mundo del desarrollo web , disfruta creando proyectos desde 0 y capacitandote con los mejores profesores profesionales.
            </h4>
            <SocialLink/>
        </div>
    )
}