import React, { Component } from 'react';
import {Home} from './components/home'
import {Galery} from './components/galery'
import {Contacts} from './components/contacts'
import {Our} from './components/our'
import {sendMailServices} from './services/sendmail.services'
import './App.css';

export class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        model: {
            name: '',
            telefono: '',
            empresa: '',
            email: '',
            mensaje: ''
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleChange(key, event) {
        const value = event.target.value;
        const path = key.split('.');
        const model = this.state.model;
        let item = model;
        for (let i = 0; i < path.length - 1; i++)	{
            item = item[path[i]];
        }
        item[path[path.length - 1]] = value;

        this.setState({model})
    }

  handleSubmit(event) {
      const {model} = this.state;
      const service = new sendMailServices();

      service.sendCotizacion(model)
     .then(response =>{
         console.log(model)
    console.log(response);
    return response;
  })
  .catch(error => {
    console.log(error);
  });
      console.log(model)
        event.preventDefault();
  }

  viewPhoto() {
      const img = document.querySelector("#dato1")
      console.log(img)
      alert(img)
  }

  render() {
    return (
      <div className="root">
        {/*<div id="preloader">
          <img src="images/Preloader.gif" alt="Preloader" />
        </div>*/}
       
        <header id="top" style={{backgroundColor: '#000'}}>
          <div className="container-fluid">
            <div className="row">
                  <div className="col-md-4 col-sm-12 col-xs-12 logo" style={{top: '13px'}}>
                        <a><img className="img-responsive" src="images/company.png" alt="logo"/></a>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12 rightnav" style={{float: 'right', padding: 0}}>
                        <nav className="navbar navbar-default">
                          <div className="container-fluid">
                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                            </div>
                        
                            <div className="collapse navbar-collapse" id="menu">
                              <ul className="nav navbar-nav"> 
                                  <li ><a href="#slides">Inicio</a></li>
                                  <li><a href="#nosotros">Nosotros</a></li>
                                  <li data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}}><a>Servicios</a></li>
                                  <li data-toggle="modal" data-target="#modalArticulos" style={{cursor: 'pointer'}}><a>Datos</a></li>
                                  <li><a href="#about">Galería</a></li>
                                  <li><a href="#contact">Contáctos</a></li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                    </div>
                </div>
          </div>

        </header>

        {/* MODAL ARTICULOS*/}
 <div className="modal fade right" id="modalArticulos" tabIndex="-1" role="dialog" aria-labelledby="modalArticulos" aria-hidden="true">
              <div className="modal-dialog modal-lg modal-cotizacion modal-side modal-bottom-right" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '100%'}}>Datos</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{top: '-15%', position: 'absolute'}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row" style={{margin: '15px 5px 30px'}}>
                            <div className="col-md-12">
                                <div className="row">
                                <div className="col-md-4">
                                        <div className="card card-cascade">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Cromatograma GC-FID</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card" style={{textAlign: 'center'}}>
                                                    <img className="img-responsive" style={{width: '100%'}} src="images/cromatograma.png" alt="Card image cap" />
                                                    
                                                        <p className="card-text" style={{marginBottom: 0}}>
                                                            Cromatograma GC-FID de creosota obtenido con el sistema Thermo Trace 1300.
                                                        </p>
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}><a href="http://fractalquimicos.pe/images/cromatograma.png" download="Cromatograma_GC-FID" style={{color: 'white'}}>Ver Imagen</a></button>
                                                        <h6>*La imagen será descargada con este botón</h6>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="card card-cascade">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Espectro UV del benceno</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card" style={{textAlign: 'center'}}>
                                                    <img className="img-responsive" style={{width: '100%'}} src="images/espectroBenceno.png" alt="Card image cap" />
                                                    
                                                        {/*<h6 className="card-title" style={{color: 'black', padding: 2}}>THYMOL</h6>*/}
                                                        <p className="card-text" style={{marginBottom: 0}}>
                                                            Espectro UV del benceno en fase vapor obtenido con el espectrofotómetro de doble haz UNICO-4802.
                                                        </p>
                                                        <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href="http://fractalquimicos.pe/images/espectroBenceno.png" download="benceno" style={{color: 'white'}}>Ver Imagen</a></button>
                                                        <h6>*La imagen será descargada con este botón</h6>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="card card-cascade">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Aminograma</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card" style={{textAlign: 'center'}}>
                                                    <img className="img-responsive" style={{width: '100%'}} src="images/dato3.png" alt="Card image cap" />
                                                    
                                                        <p className="card-text" style={{marginBottom: 0}}>
                                                            Aminograma de 20 amino ácidos (AAs): patrón y muestra de extracto de hojas de moringa (2015)obtenido con el sistema cromatográfico HPLC-DAD
                                                        </p>
                                                        <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href="http://fractalquimicos.pe/images/dato3.png" download="Aminograma" style={{color: 'white'}}>Ver Imagen</a></button>
                                                        <h6>*La imagen será descargada con este botón</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card card-cascade">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Análisis PDA 3D de rotenona</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card" style={{textAlign: 'center'}}>
                                                    <img className="img-responsive" style={{width: '100%'}} src="images/dato4.png" alt="Card image cap" />
                                                    
                                                        <p className="card-text" style={{marginBottom: 0}}>
                                                        Análisis PDA rotenona - HPLC - DAD
                                                        </p>
                                                        <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href="http://fractalquimicos.pe/images/dato4.png" download="analisis_rotenona" style={{color: 'white'}}>Ver Imagen</a></button>
                                                        <h6>*La imagen será descargada con este botón</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-cascade">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Estereoquímica de la Cipermetrina</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card" style={{textAlign: 'center'}}>
                                                    <img className="img-responsive" style={{width: '100%'}} src="images/estereoquimica.png" alt="Card image cap" />
                                                    
                                                        <p className="card-text" style={{marginBottom: 0}}>
                                                        Obtenido por química computacional.
                                                        </p>
                                                        <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href="http://fractalquimicos.pe/images/estereoquimica.png" download="estereoquimica" style={{color: 'white'}}>Ver Imagen</a></button>
                                                        <h6>*La imagen será descargada con este botón</h6>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-cascade">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Poliestireno-PS</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card" style={{textAlign: 'center'}}>
                                                    <img className="img-responsive" style={{width: '100%'}} src="images/espectroIR.png" alt="Card image cap" />
                                                    
                                                        <p className="card-text" style={{marginBottom: 0}}>
                                                            Espectro IR de una película de poliestireno-PS con el espectrómetro IR Perkin Elmer 710B
                                                        </p>
                                                        <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href="http://fractalquimicos.pe/images/espectroIR.png" download="Poliestireno" style={{color: 'white'}}>Ver Imagen</a></button>
                                                        <h6>*La imagen será descargada con este botón</h6>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{marginBottom: '10px'}}>
                                        <div className="card card-cascade">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Perfil Cromatográfico - HPLC</h5>
                                            </div>
                                                <div className="card-body">
                                                <div className="card" style={{textAlign: 'center'}}>
                                                    <img className="img-responsive" style={{width: '100%'}} src="images/dato2.png" alt="Card image cap" />
                                                    
                                                        <p className="card-text" style={{marginBottom: 0}}>
                                                            Perfil Cromatográfico - HPLC de rotenona - rotenoides
                                                        </p>
                                                        <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href="http://fractalquimicos.pe/images/dato2.png" download="perfil_cromatografico" style={{color: 'white'}}>Ver Imagen</a></button>
                                                        <h6>*La imagen será descargada con este botón</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="card card-cascade">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Espectro ultravioleta</h5>
                                            </div>
                                            <div className="card-body">
                                                <div className="card" style={{textAlign: 'center'}}>
                                                    <img className="img-responsive" style={{width: '100%'}} id="dato1" src="images/dato1.png" alt="Card image cap" />
                                                    
                                                        <p className="card-text" style={{marginBottom: 0}}>
                                                            Espectro ultravioleta de rotenona
                                                        </p>
                                                        <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href="http://fractalquimicos.pe/images/dato1.png" download="espectro_ultravioleta" style={{color: 'white'}}>Ver Imagen</a></button>
                                                        <h6>*La imagen será descargada con este botón</h6>        
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                            <div className="card card-cascade tesis">
                                                <div className="view gradient-card-header peach-gradient">
                                                    <h5 className="h2-responsive" style={{textAlign: 'center'}}>Actividad Enzimática Tirosinasa</h5>
                                                </div>
                                                <div className="card-body text-center">

                                                    <p className="card-text"><strong>Aquí puedes descargarlos:</strong>
                                                        <div className="text-center">
                                                            <button className="btn btn-unique"  type="submit" style={{backgroundColor: '#333', margin: '10px 10px -6px'}} ><a href="http://fractalquimicos.pe/images/actividad_enzimatica.pdf" download="actividad_enzimatica" style={{color: 'white'}}>DESCARGAR</a></button>
                                                        <h6 style={{margin: '13px'}}>"Actividad enzimática de Tirosinasa</h6>
                                                        </div>
                                                        <div className="text-center">
                                                            <button className="btn btn-unique"  type="submit" style={{backgroundColor: '#333', margin: '10px 10px -6px'}} ><a href="http://fractalquimicos.pe/images/diseño_conductimetro.pdf" download="diseño_conductimetro" style={{color: 'white'}}>DESCARGAR</a></button>
                                                            <h6 style={{margin: '13px'}}>"Diseño y construcción conductímetro de baja frecuencia"</h6>
                                                        </div>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    
                                    <div className="col-md-4">
                                        <div className="card card-cascade tesis">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Revista</h5>
                                            </div>
                                            <div className="card-body text-center">

                                                <p className="card-text"><strong>Aquí puedes descargar la revista acerca de:</strong> <br/>"Preconcentración de Zn(II) con el intercambiador Catiónico PS-DVB-SO3H con monitoreo de pH y análisis de recuperación de los eluidos por absorción atómica (Eaaf)".
                                                    <div className="text-center">
                                                        <button className="btn btn-unique"  type="submit" style={{backgroundColor: '#333', margin: '10px 10px -6px'}} ><a href="http://fractalquimicos.pe/images/ARTIC_REV_Zn_2012_julio.doc" download="ARTIC_REV_Zn_2012_julio" style={{color: 'white'}}>DESCARGAR</a></button>
                                                    </div>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card card-cascade tesis">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Síntesis de un intercambiador Catiónico</h5>
                                            </div>
                                            <div className="card-body text-center">

                                                <p className="card-text"><strong>Aquí puedes descargar la revista acerca de:</strong> <br/>"SÍNTESIS DE UN INTERCAMBIADOR CATIÓNICO A PARTIR DE POLIESTIRENO COMERCIAL / RESIDUAL".
                                                    <div className="text-center">
                                                        <button className="btn btn-unique"  type="submit" style={{backgroundColor: '#333', margin: '10px 10px -6px'}} ><a href="http://fractalquimicos.pe/images/sintesis_intercambiador.pdf" download="sintesis_intercambiador" style={{color: 'white'}}>DESCARGAR</a></button>
                                                    </div>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                        
                                    <div className="col-md-4">
                                        <div className="card card-cascade tesis">
                                            <div className="view gradient-card-header peach-gradient">
                                                <h5 className="h2-responsive" style={{textAlign: 'center'}}>Tésis doctoral</h5>
                                            </div>
                                            <div className="card-body text-center">

                                                <p className="card-text"><strong>Aquí puedes descargar la tésis doctoral acerca de:</strong> <br/>"COMPORTAMIENTO Y LIMITACIONES EN LA APLICACIÓN DE LOS NUEVOS FUNCIONALES DE ENERGÍA DE CORRELACIÓN (TBDF) A MOLÉCULAS DE COMPLEJIDAD MEDIANA".
                                                    <div className="text-center">
                                                        <button className="btn btn-unique"  type="submit" style={{backgroundColor: '#333', margin: '10px 10px -6px'}} ><a href="http://fractalquimicos.pe/images/tesis-doctoral-CJUNO.pdf" download="tesis-doctoral" style={{color: 'white'}}>DESCARGAR</a></button>
                                                    </div>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>

        {/*FIN NODAL ARTICULOS*/}

        <button type="button" id="cotizar" className="btn btn-primary" data-toggle="modal" data-target="#myModalLabel" style={{position: 'fixed', zIndex: '999', bottom: '4%', border: '2px solid white'}}>
          Cotizar
      </button>
      <div className="modal fade right" id="myModalLabel" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-cotizacion modal-side modal-bottom-right" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '80%'}}>Cotización</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{top: '-63px'}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>

                          <div className="md-form">
                              <input type="text" id="form3" name="model-name" value={this.state.model.name} className="form-control" onChange={this.handleChange.bind(this, 'name')} placeholder="A nombre de quién"/>
                          </div>

                          <div className="md-form">
                              <input type="tel" id="form2" name="model-telefono" value={this.state.model.telefono} className="form-control" onChange={this.handleChange.bind(this, 'telefono')} placeholder="Teléfonos"/>
                          </div>
                            <div className="form-row">
                              <input type="text" className="form-control" id="phone" value={this.state.model.empresa} name="model-empresa" onChange={this.handleChange.bind(this, 'empresa')} placeholder="Empresa o institución" />
                            </div>
                           <div className="md-form">
                              <input type="text" id="form2" name="model-email" value={this.state.model.email} className="form-control" onChange={this.handleChange.bind(this, 'email')} placeholder="Correo electrónico"/>
                          </div>

                          <div className="md-form">
                              <textarea type="text" id="form8" name="model-mensaje" value={this.state.model.mensaje} className="md-textarea" onChange={this.handleChange.bind(this, 'mensaje')} placeholder="Cuéntanos tu proyecto" style={{height: 60, width: '100%'}}></textarea>
                          </div>

                          <div className="text-center">
                              <button className="btn btn-unique"  type="button" style={{backgroundColor: '#333'}} onClick={this.handleSubmit} data-dismiss="modal" aria-label="Close">Cotizar <i className="fa fa-paper-plane-o ml-1"></i></button>
                          </div>

                      </form>
                    </div>
                </div>
              </div>
      </div>

      <button type="button" id="nuevo" className="btn btn-primary" data-toggle="modal" data-target="#myModalNuevo" style={{position: 'fixed', zIndex: '999', bottom: '4%', border: '2px solid white', right: 0}}>
          Entérate lo nuevo
      </button>
      <div className="modal fade right" id="myModalNuevo" tabIndex="-1" role="dialog" aria-labelledby="myModalNuevo" aria-hidden="true">
              <div className="modal-dialog modal-cotizacion modal-side modal-bottom-right" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '100%'}}>Lo nuevo en fractal</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{top: '-35px', position : 'absolute'}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                      <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/thymol.png" alt="Card image cap" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2}}>THYMOL</h6>
                            <p className="card-text" style={{marginBottom: 0}}>T.ebullición: 232°C<br/>
                                                    T.fusión:	48 – 51°C<br/>
                                                    D25 =  0,965 g/ml<br/>
                                                    Solubilidad (20°C): agua - 900 mg/L,  Etanol – soluble.
                            </p>
                        </div>

                    </div>
                </div>
                    </div>
                </div>
              </div>
      </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-notify modal-info" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{bottom: 0, height: 40, zIndex: 999}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                           <ul className="nav nav-tabs nav-justified indigo" role="tablist">
                  <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#panel5" role="tab"><i className="fa fa-user"></i>ANÁLISIS Y CERTIFICACIÓN DE PRODUCTOS NATURALES E INDUSTRIALES</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#panel6" role="tab"><i className="fa fa-heart"></i><br/>QUÍMICA MEDIOAMBIENTAL<br/><br/></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#panel4" role="tab"><i className="fa fa-envelope"></i><br/>I + D<br/><br/></a>
                  </li>
              </ul>

                    <div className="tab-content">
                        <div className="tab-pane fade in active" id="panel5" role="tabpanel">
                            <br/>
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-info">Plaguicidas y productos agrícolas. <div className="info" id="info" data-toggle="modal" data-target="#viewDetail" onClick={this.openModal}><span><i className="material-icons" style={{margin: '3px'}}>new_releases</i></span></div></li>
                            <li className="list-group-item list-group-item-warning">Estudios y analítica de productos naturales. </li>
                            <li className="list-group-item list-group-item-warning">Certificación en análisis químico de productos industriales y naturales.</li>
                            <li className="list-group-item list-group-item-success">Determinación de propiedades fisicoquímicas y análisis químicos de productos agroindustriales.</li>
                            <li className="list-group-item list-group-item-info">Análisis químico de alimentos.</li>
                            <li className="list-group-item list-group-item-success">Estudio y analítica de productos de uso veterinario.</li>
                            <li className="list-group-item list-group-item-danger">Analítica de productos veterinarios.</li>
                            <li className="list-group-item list-group-item-danger">Producción y comercialización de información científica.</li>

                            </ul>
                        </div>
                        <div className="tab-pane fade" id="panel6" role="tabpanel">
                            <br/>
                            <ul className="list-group">
                            <li className="list-group-item list-group-item-info">Análisis químico y estudios químico-ambientales de agua,  suelos y aire.</li>
                            </ul>
                            </div>
                        <div className="tab-pane fade" id="panel4" role="tabpanel">
                            <br/>
                            <ul className="list-group">
                            <li className="list-group-item list-group-item-success">Diseño, construcción y ensamblaje de aparatos científicos.</li>
                            <li className="list-group-item list-group-item-warning">Microsíntesis de estándares analíticos y  reactivos.</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer"> 
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
            </div>
             <div className="modal fade right" id="viewDetail" tabIndex="-1" role="dialog" aria-labelledby="viewDetail" aria-hidden="true">
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
                            <img className="img-fluid" src="images/descripcion_servicios.png" alt="Card image cap"/>
                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <Home></Home>


        <Our></Our>


        <section id="subscribe" className="page-block-small wow fadeInUp BGprime opaque" data-wow-offset="75" data-wow-delay="1s">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </section>
          <Galery></Galery>
       <Contacts></Contacts>


        <a id="gotop" href="#slides" className="top" style={{backgroundColor: 'white'}}><i className="material-icons" style={{margin: 'auto',fontSize: '2em',color: 'black', fontWeight: 900}}>keyboard_arrow_up</i></a>
      </div>
    );
  }
}

export default App;
