import React from 'react'
import Footer from '../../components/Footer'
import NavBrowserBst from '../../components/NavBrowserBst'
import asamblea from '../../assets/Asamblea.jpeg';
import "./Asamblea.css";


const Asamblea = () => {
    return (
        <div className="container-div-seccionGenerica">
            <NavBrowserBst />

            <div className="container-rutaseccionInfo">

                <h1>Asamblea General Ordinaria</h1>
                <img className="pic-rutaseccionInfo" src={asamblea} alt="asamblea" />

                <div className="container-text-rutaseccionInfo">
                    <label>El domingo 14 de julio a partir de las 11:00 horas en la Sede Social del CSDMA, se llevó a cabo la asamblea general ordinaria a los fines de tratar y votar los puntos propuestos para el orden del día.</label>
                    <label>La asamblea contó con la participación y presencia de las autoridades de la Subsecretaría de Entidades Intermedias de la Municipalidad de Merlo, Rubén Arias y Juan Manuel Ortíz, y la veedora municipal, Sabrina Parra.</label>
                    <label>Luego de la lectura del acta correspondiente al año 2022 y la elección de los socios Darío Denin y Elías Antúnez para refrendar el acto asambleario, se leyeron y pusieron a disposición de los socios la memoria y balance del año 2022 y año 2023 debidamente certificados y legalizados, con su respectiva aprobación por unanimidad.</label>
                    <label>Acto seguido fue electa la nueva Comisión Directiva encabezada por Miguel A. Marchese y la nueva Comisión Revisora de Cuentas encabezada por Juan Carlos Iglesias.</label>
                    <label>La asamblea continuó con la autorización al secretario para realizar los trámites administrativos y/o judiciales para regularizar la titularidad del CSDMA sobre sus inmuebles; y se estableció el valor de la cuota social en la suma de $1.000 a partir del 1° de agosto de 2024 y en la suma de $1.500 a partir del 1° de enero de 2025.</label>
                    <label>Finalmente, la asamblea concluyó estableciendo la reunión de Comisión Directiva en todos los días jueves a las 21:30 horas en la Sede Social del CSDMA.</label>
                    <h4>Las nuevas autoridades de la Comisión Directiva del CSDMA son:</h4>
                    <ul>
                        <li>Presidente, Miguel A. Marchese</li>
                        <li>Vicepresidente, Luis Arata</li>
                        <li>Secretario, Rodrigo G. Villalba</li>
                        <li>Prosecretario, Carlos J. Polero</li>
                        <li>Tesorero, Horacio N. Buzetti</li>
                        <li>Protesorero, Estela S. Padula</li>
                        <li>Vocales titulares: Vicente Galati, Elba Rosa Curti, Alejandra N. Sosa, José Galati y Susana Morel.</li>
                        <li>Vocales suplentes: Stella Maris Pusitanelle, Inés Lucía Caballero, Jorge Barra y Manuel B. Rodríguez.</li>
                        <li>Comisión Revisora de Cuentas titulares: Juan Carlos Iglesias, Natalia P. Molina y Martín A. Calderón.</li>
                        <li>Comisión Revisora de Cuentas suplentes: Oscar Gallardo y Jorge D. De Sousa.</li>
                    </ul>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Asamblea