import React, { Component } from 'react';
import logo from './logo.svg';
import {Footer} from './components/footer'
import {Home} from './components/home'
import {Galery} from './components/galery'
import {Contacts} from './components/contacts'
import {Our} from './components/our'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="root">
        <div id="preloader">
          <img src="images/Preloader.gif" alt="Preloader" />
        </div>

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

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModalLabel" style={{position: 'fixed', zIndex: '999', bottom: '4%', border: '2px solid white'}}>
          Cotizar
      </button>
      <div className="modal fade right" id="myModalLabel" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-cotizacion modal-side modal-bottom-right" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white'}}>cotización</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{top: '-63px'}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>

                          <div className="md-form">
                              <input type="text" id="form3" className="form-control" placeholder="A nombre de quién..."/>
                          </div>

                          <div className="md-form">
                              <input type="text" id="form2" className="form-control" placeholder="Teléfonos..."/>
                          </div>

                           <div className="md-form">
                              <input type="text" id="form2" className="form-control" placeholder="Correo electrónico..."/>
                          </div>

                          <div className="md-form">
                              <textarea type="text" id="form8" className="md-textarea" placeholder="Cuéntanos tu proyecto..." style={{height: 60, width: '100%'}}></textarea>
                          </div>

                          <div className="text-center">
                              <button className="btn btn-unique">Cotizar! <i className="fa fa-paper-plane-o ml-1"></i></button>
                          </div>

                      </form>
                    </div>
                </div>
              </div>
      </div>




        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">servicios</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Listado de servicios que ofrece fractal
                    </div>
                    <div className="modal-footer"> 
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
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

        <Footer></Footer>

        <a href="#slides" className="top" style={{backgroundColor: 'white'}}><i className="material-icons" style={{margin: 'auto',fontSize: '2em',color: 'black', fontWeight: 900}}>keyboard_arrow_up</i></a>
      </div>
    );
  }
}

export default App;
