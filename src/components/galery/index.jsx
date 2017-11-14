import * as React from 'react';
import './index.css'

export class Galery extends React.Component {
  render() {
    return (
     <section id="about" className="BGlight">
            <div className="row">
                    
                  <div className="col-md-12 aboutGallery wow fadeIn no-padding" data-wow-offset="75" data-wow-delay="1.75s" style={{overflow: 'hidden', backgroundColor: '#0099cc'}}>
                    
                      <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/termometro.png" alt="1"/>
                          <a data-toggle="modal" data-target="#infoGalery1" title=""><span><i className="material-icons">new_releases</i></span></a>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                        </div>
                        
                        <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/2.png" alt="1"/>
                          <a data-toggle="modal" data-target="#infoGalery2" title=""><span><i className="material-icons">new_releases</i></span></a>
                      {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                      </div>
                    
                      <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/3.png" alt="1"/>
                          <a data-toggle="modal" data-target="#infoGalery3" title=""><span><i className="material-icons">new_releases</i></span></a>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                        </div>

                  <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/4.png" alt="1"/>
                          <a data-toggle="modal" data-target="#infoGalery4" title=""><span><i className="material-icons">new_releases</i></span></a>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                    </div>
                    
                    <div className="galleryImg col-md-3 col-sm-6">
                        <img className="img-responsive" src="images/gallery/small/5.png" alt="1"/>
                        <a data-toggle="modal" data-target="#infoGalery5" title=""><span><i className="material-icons">new_releases</i></span></a>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                      </div>
                        
                      <div className="galleryImg col-md-3 col-sm-6">
                        <img className="img-responsive" src="images/gallery/small/HPLC-DAD.png" alt="1"/>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                        <a data-toggle="modal" data-target="#infoGalery6" title=""><span><i className="material-icons">new_releases</i></span></a>
                      </div>
                      <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/infrarojoIR.png" alt="1"/>
                          <a data-toggle="modal" data-target="#infoGalery7" title=""><span><i className="material-icons">new_releases</i></span></a>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                    </div>
                    
                    <div className="galleryImg col-md-3 col-sm-6">
                        <img className="img-responsive" src="images/gallery/small/cromatografico.png" alt="1"/>
                        <a data-toggle="modal" data-target="#infoGalery8" title=""><span><i className="material-icons">new_releases</i></span></a>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                      </div>
                        
                      <div className="galleryImg col-md-3 col-sm-6">
                        <img className="img-responsive" src="images/gallery/small/UV-VIS.png" alt="1"/>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                        <a data-toggle="modal" data-target="#infoGalery9" title=""><span><i className="material-icons">new_releases</i></span></a>
                      </div>
                        <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/PFUS-400FQ.png" alt="1"/>
                          <a data-toggle="modal" data-target="#infoGalery10" title=""><span><i className="material-icons">new_releases</i></span></a>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                    </div>
                    
                    <div className="galleryImg col-md-3 col-sm-6">
                        <img className="img-responsive" src="images/gallery/small/determinacion_nitrogeno.png" alt="1"/>
                        <a data-toggle="modal" data-target="#infoGalery11" title=""><span><i className="material-icons">new_releases</i></span></a>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                      </div>
                        
                      <div className="galleryImg col-md-3 col-sm-6">
                        <img className="img-responsive" src="images/gallery/small/gavimetrica.png" alt="1"/>
                        {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                        <a data-toggle="modal" data-target="#infoGalery12" title=""><span><i className="material-icons">new_releases</i></span></a>
                      </div>
                      </div>
                    
                </div>
                
            <div className="modal fade right" id="infoGalery1" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                          <div className="card">
                            <img className="img-fluid" src="images/gallery/small/termometro.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Termómetro digital con registrador  USB y display  -200 a 1000°C (± 0,1)<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery2" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                         <div className="card">
                            <img className="img-fluid" src="images/gallery/small/2.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Bioreactor CSTR - airlift<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery3" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                      <div className="card">
                            <img className="img-fluid" src="images/gallery/small/3.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Aparato para la determinación del punto de fusión – PFUS-400FQ<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery4" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card">
                            <img className="img-fluid" src="images/gallery/small/4.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Plasma de acoplamiento inductivo ICP-OES para análisis multielemental  (en partes por billón -  ppb)<br/> <span>[ Instrumentación de Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery5" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                            <div className="card">
                            <img className="img-fluid" src="images/gallery/small/5.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Aparato para determinación de propiedades explosivas<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery6" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                          <div className="card">
                            <img className="img-fluid" src="images/gallery/small/HPLC-DAD.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Sistema de análisis cromatográfico HPLC-DAD, UHPLC-DAD optimo KONIK560-Konikron Plus Chromatography Station<br/> <span>[ Instrumentación de Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery7" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                          <div className="card">
                            <img className="img-fluid" src="images/gallery/small/infrarojoIR.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Espectrómetro Infra Rojo- IR de transmisión Perkin Elmer710B<br/> <span>[ Instrumentación de Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
           <div className="modal fade right" id="infoGalery8" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                          <div className="card">
                            <img className="img-fluid" src="images/gallery/small/cromatografico.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Sistema cromatográfico GC-FID Thermo Trace 1300 con arreglo para HS<br/> <span>[ Instrumentación de Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
             <div className="modal fade right" id="infoGalery9" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                          <div className="card">
                            <img className="img-fluid" src="images/gallery/small/UV-VIS.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Espectrófotometro de doble haz UV-VIS – Espectro UV del benceno en fase vapor<br/> <span>[ Instrumentación de Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery10" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                          <div className="card">
                            <img className="img-fluid" src="images/gallery/small/PFUS-400FQ.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Aparato para la determinación del punto de fusión – PFUS-400FQ (hasta 450°C)<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery11" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                          <div className="card">
                            <img className="img-fluid" src="images/gallery/small/determinacion_nitrogeno.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Equipo integrado para determinación de nitrógeno Kjeldahl KjN2<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoGalery12" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
              <div className="modal-dialog modal-notify modal-info" role="document">
                  <div className="modal-content">
                    <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '65%'}}>Áreas y lineas de trabajo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                          <div className="card">
                            <img className="img-fluid" src="images/gallery/small/gavimetrica.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Exactitud y precisión gravimétrica - analógica y digital<br/> <span>[ Instrumentación de Fractal Químicos ]</span></h4>
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