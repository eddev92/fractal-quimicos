import * as React from 'react';

export class Our extends React.Component {
  render() {
    return (
     <section id="nosotros" className="page-block features">
          <div className="container-fluid wideBG">
            <div className="col-lg-6 col-sm-12 BGprime"></div>
                <div className="col-lg-6 col-sm-12 BGsecondary"></div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-md-4 col-sm-12 col-xs-12 wow bounceInUp" data-wow-duration="1s" data-wow-offset="75">
                        <h4><small>Nuestra</small>Misión</h4>
                        <p>
                          Impulsar el desarrollo de la ciencia y la tecnología en la
                          industria nacional,  realizando investigaciones, ensayos  y 
                          análisis con el máximo control de calidad de sus productos con 
                          rigor científico y normativo, brindando asistencia permanente para 
                          su innovación e  incorporando nuevas tecnologías.
                        </p>
                  </div>

                  <div className="col-md-4 col-sm-12 col-xs-12 middleBox wow bounceInUp" data-wow-duration="1s" data-wow-offset="75">
                        <h4><small>Nuestra</small>Historia</h4>
                        <p>Fractal Químicos E.I.R.L, es una Empresa de servicios 
                          en Química y afines, especializado en áreas de   Investigación 
                          y Desarrollo. Inició sus actividades en octubre de 1995 en la 
                          ciudad del Cusco y desde el 2004 a la fecha en Lima (Perú) retoma sus actividades
                          con el objetivo de impulsar la empresa y tecnología nacional a través de la Investigación
                          y desarrollo en el ámbito de la Química, análisis químico, ensayos fisicoquímicos 
                          y control de calidad de productos industriales y el asesoramiento científico y técnico.
                          </p>
                    </div>
                    
                  <div className="col-md-4 col-sm-12 col-xs-12 wow bounceInUp" data-wow-duration="1s" data-wow-offset="75">
                        <h4><small>Nuestra</small>Visión</h4>
                        <p>Fractal Químicos E.I.R.L debe ser la empresa referente y
                          portadora de las herramientas teórico-experimentales para 
                          la solución de problemas científicos y  tecnológicos basados 
                          en tres pilares: calidad humana,  verdad científica y  compromiso 
                          con el medio ambiente.
                          </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
  }
}