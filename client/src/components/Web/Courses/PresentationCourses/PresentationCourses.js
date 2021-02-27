import React from 'react'
import AcademyLogo from '../../../../assets/img/png/AcademyLogo.png'
import "./PresentationCourses.scss"

export default function PresentationCourses() {
    return (
        <div className="presentation_courses">
            <img src={AcademyLogo} alt="Cursos de Huskcode" />
            <p>
                En la empresa Huskcode vas a encontrar los mejores cursos y capacitaciones online de
                desarrollo web. Unete a nosotros y empieza tu camino como Desarrollador web o desarrollador OMS. Sinceramente ,
                estos cursos es el tipo de contenido que a cualquiere profesional le  hubiera gustado encontrar cuando se inicio en el 
                mundo del desarrollo web profesional .
            </p>
            <p>¡¡ Echale un vistazo y aprovecha las ofertas!!</p>
        </div>
    )
}
