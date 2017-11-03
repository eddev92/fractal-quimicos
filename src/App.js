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
            email: '',
            mensaje: ''
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    cotizar(values) {
        console.log(values, 'modal cotizar')
    }
     handleChange(event) {
       console.log(event)
       console.log(event.target.value)
    // this.setState({modelVal: .target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="root">
        {/*<div id="preloader">
          <img src="images/Preloader.gif" alt="Preloader" />
        </div>*/}

        <header id="top">
          <div className="container">
            <div className="row">
                  <div className="col-md-3 col-sm-12 col-xs-12 logo">
                        <a><img className="img-responsive" src="images/company.png" alt="logo" style={{maxWidth: '38%', backgroundColor: 'white', borderRadius: '100%'}}/></a>
                    </div>
                    <div className="col-md-9 col-sm-12 col-xs-12 rightnav">
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
                                  <li><a data-toggle="modal" data-target="#exampleModal" style={{cursor: 'pointer'}}>Servicios</a></li>
                                  <li><a data-toggle="modal" data-target="#modalArticulos" style={{cursor: 'pointer'}}>Artículos</a></li>
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
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white'}}>Artículos</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{top: '-63px'}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row" style={{margin: '15px 5px 30px'}}>
                            <div className="col-md-12">
                                <div className="col-md-4">
                                    <div className="card card-cascade">
                                        <div className="view gradient-card-header peach-gradient">
                                            <h5 className="h2-responsive" style={{textAlign: 'center'}}>Titulo noticia</h5>
                                        </div>
                                        <div className="card-body text-center">

                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi
                                                sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium
                                                veritatis sequi.Ut enim ad minima veniam, quis nostrum.</p>
                                                <span>08/11/2017</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-cascade">
                                        <div className="view gradient-card-header peach-gradient">
                                            <h5 className="h2-responsive" style={{textAlign: 'center'}}>Titulo noticia</h5>
                                        </div>
                                        <div className="card-body text-center">

                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi
                                                sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium
                                                veritatis sequi.Ut enim ad minima veniam, quis nostrum.</p>
                                                <span>08/11/2017</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-cascade">
                                        <div className="view gradient-card-header peach-gradient">
                                            <h5 className="h2-responsive" style={{textAlign: 'center'}}>Titulo noticia</h5>
                                        </div>
                                        <div className="card-body text-center">

                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi
                                                sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium
                                                veritatis sequi.Ut enim ad minima veniam, quis nostrum.</p>
                                                <span>08/11/2017</span>
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

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModalLabel" style={{position: 'fixed', zIndex: '999', bottom: '4%', border: '2px solid white'}}>
          Cotiza
      </button>
      <div className="modal fade right" id="myModalLabel" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-cotizacion modal-side modal-bottom-right" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white'}}>Cotización</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{top: '-63px'}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.handleSubmit}>

                          <div className="md-form">
                              <input type="text" id="form3" value={this.state.model.name} className="form-control" onChange={this.handleChange} placeholder="A nombre de quién..."/>
                          </div>

                          <div className="md-form">
                              <input type="text" id="form2" value={this.state.model.telefono} className="form-control" onChange={this.handleChange} placeholder="Teléfonos..."/>
                          </div>

                           <div className="md-form">
                              <input type="text" id="form2" value={this.state.model.email} className="form-control" onChange={this.handleChange} placeholder="Correo electrónico..."/>
                          </div>

                          <div className="md-form">
                              <textarea type="text" id="form8" value={this.state.model.mensaje} className="md-textarea" onChange={this.handleChange} placeholder="Cuéntanos tu proyecto..." style={{height: 60, width: '100%'}}></textarea>
                          </div>

                          <div className="text-center">
                              <button className="btn btn-unique" type="submit" value="submit" style={{backgroundColor: '#333'}}>Cotizar! <i className="fa fa-paper-plane-o ml-1"></i></button>
                          </div>

                      </form>
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
                            <li className="list-group-item list-group-item-danger">Producción y comercialización de información científica.</li>
                            <li className="list-group-item list-group-item-warning">Certificación en análisis químico de productos industriales y nautrales.</li>
                            <li className="list-group-item list-group-item-success">Determinación de propiedades fisicoquímicas y análisis químicos de productos agroindustriales.</li>
                            <li className="list-group-item list-group-item-info">Análisis químico de alimentos.</li>
                            <li className="list-group-item list-group-item-warning">Estudios y analítica de productos naturales. </li>
                            <li className="list-group-item list-group-item-success">Estudio y analítica de productos de uso veterinario.</li>
                            <li className="list-group-item list-group-item-danger">Analítica de alimentos para animales.</li>

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


        <a href="#slides" className="top" style={{backgroundColor: 'white'}}><i className="material-icons" style={{margin: 'auto',fontSize: '2em',color: 'black', fontWeight: 900}}>keyboard_arrow_up</i></a>
      </div>
    );
  }
}

export default App;
