import * as React from 'react';
import './index.css'

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
                          
              <button className="btn aqua-gradient btn-rounded waves-effect waves-light" data-toggle="modal" data-target="#areasModal" style={{borderRadius: 15}}>Áreas y lineas de trabajo</button>
                    </div>
                    
                </div>
            </div>

             <div className="modal fade right" id="areasModal" tabIndex="-1" role="dialog" aria-labelledby="areasModal" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                            <ul class="nav nav-tabs nav-justified indigo" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#quimica" role="tab"><i className="fa fa-user"></i>Química<br/> (Fisicoquímica, orgánica, inorgánica, analítica y computacional)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#bioquimica" role="tab"><i className="fa fa-heart"></i>Bioquímica (microbiología, química clínica y productos naturales)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#informatica" role="tab"><i className="fa fa-envelope"></i>Informática, Estadística, Investigación y desarrollo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#instrumentacion" role="tab"><i className="fa fa-envelope"></i><br/>Instrumentación <br/>científica <br/>avanzada</a>
                            </li>
                        </ul>

                    <div className="tab-content">
                        <div className="tab-pane fade in active" id="quimica" role="tabpanel">
                            <br/>
                            <ul className="list-group">
                            <li className="list-group-item list-group-item-warning">Plaguicidas (Manual Andino, NTP, CIPAC, EPA, ASTM, AOAC, Guías: FAO, OECD, UE,)</li>
                            <li className="list-group-item list-group-item-success">Fármacos y toxones (R.Farmacopea E -1992, Man. Clark’s)</li>
                            <li className="list-group-item list-group-item-info">Ambiental (Agua, suelo y aire: Ley 29338 - ECAs, NTP, Mét. Normaliz, EPA, FAO)</li>
                            <li className="list-group-item list-group-item-warning">Alimentos y produtos naturales (NTP, DIGESA, AOAC, Guías FAO, CODEX)</li>
                            <li className="list-group-item list-group-item-success">Métálicos (ASTM)</li>
                            <li className="list-group-item list-group-item-danger">Polímeros (ASTM)</li>
                            <li className="list-group-item list-group-item-info">No-metálicos (ASTM)</li>

                            </ul>
                        </div>
                        <div className="tab-pane fade" id="bioquimica" role="tabpanel">
                            <br/>
                            <ul className="list-group">
                            <li className="list-group-item list-group-item-success">Enzimología (actividad enzimática) y proteínas</li>
                            <li className="list-group-item list-group-item-info">Aminoácidos</li>
                            <li className="list-group-item list-group-item-warning">Salud ocupacional (Guías UE)</li>
                            <li className="list-group-item list-group-item-danger">Valoración química clínica</li>
                            <li className="list-group-item list-group-item-success">Microbiología y endotoxinas</li>
                            </ul>
                            </div>
                        <div className="tab-pane fade" id="informatica" role="tabpanel" style={{marginBottom: 18}}>
                            <br/>
                            <li className="list-group-item list-group-item-success">Proyectos, diseño, validación, estudios, información  y producción de artículos  científicos</li>
                        </div>
                        <div className="tab-pane fade" id="instrumentacion" role="tabpanel">
                            <br/>
                            <ul className="list-group">
                            <li className="list-group-item list-group-item-success">Cromatografía HPLC-DAD; HPTLC</li>
                            <li className="list-group-item list-group-item-info">Cromatografía GC-FID</li>
                            <li className="list-group-item list-group-item-warning">ICP-OES-CCD</li>
                            <li className="list-group-item list-group-item-danger">Instrumentación completa para propiedades fisicoquímicas</li>
                            <li className="list-group-item list-group-item-success">Cromatografía HPLC-DAD; HPTLC</li>
                            </ul>
                        </div>
                </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
      
        </section>
    )
  }
}