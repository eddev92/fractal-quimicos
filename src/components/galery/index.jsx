import * as React from 'react';
import './index.css'

export class Galery extends React.Component {
  render() {
    return (
     <section id="about" className="BGlight">
            <div className="row">
                    
                  <div className="col-md-12 aboutGallery wow fadeIn no-padding" data-wow-offset="75" data-wow-delay="1.75s" style={{overflow: 'hidden', backgroundColor: '#0099cc'}}>
                    
                      <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/1.png" alt="1"/>
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
                          <img className="img-responsive" src="images/gallery/small/1.png" alt="1"/>
                          {/*<a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title=""><span><i className="material-icons">new_releases</i></span></a>*/}
                          <a data-toggle="modal" data-target="#infoGalery6" title=""><span><i className="material-icons">new_releases</i></span></a>
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
                            <img className="img-fluid" src="images/gallery/small/1.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Contenido pendiente<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
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
                                <h4 className="card-title">Aparato para determinar la temperatura de explosividad<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
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
                                <h4 className="card-title">Plasma de acoplamiento inductivo - ICP - OES<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
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
                            <img className="img-fluid" src="images/gallery/small/1.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Contenido pendiente<br/> <span>[ Desarrollado por Fractal Químicos ]</span></h4>
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