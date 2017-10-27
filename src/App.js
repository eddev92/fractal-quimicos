import React, { Component } from 'react';
import logo from './logo.svg';
import {Footer} from './components/footer'
import {Home} from './components/home'
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
                        <a><img className="img-responsive" src="images/company.png" alt="logo" style={{maxWidth: '40%', backgroundColor: 'white', borderRadius: '100%'}}/></a>
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

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
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

        <section id="about" className="BGlight">
          <div className="container-wide">
            <div className="row">
                
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn BGprime page-block-full" data-wow-offset="75" data-wow-delay="1.5s"style={{overflow: 'hidden'}}>
                    
                        <h5 className="white">Título</h5>
                        <p className="white">PARRAFO DESCRIPTIVO SECCIÓN GALERÍA</p>
                        </div>
                    
                  <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 aboutGallery wow fadeIn no-padding" data-wow-offset="75" data-wow-delay="1.75s" style={{overflow: 'hidden', backgroundColor: '#0099cc'}}>
                    
                      <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/01.png" alt="1"/>
                          <a href="images/gallery/large/01.png" rel="prettyPhoto[gallery2]" title="Coquetea"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                        
                        <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/06.png" alt="1"/>
                          <a href="images/gallery/large/06.png" rel="prettyPhoto[gallery2]" title="Alégrate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                    
                      <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/03.png" alt="1"/>
                          <a href="images/gallery/large/03.png" rel="prettyPhoto[gallery2]" title="Enamórate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                        
                        <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/04.png" alt="1"/>
                          <a href="images/gallery/large/04.png" rel="prettyPhoto[gallery2]" title="Disfruta"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                    
                      <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/05.png" alt="1"/>
                          <a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title="Siente"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                        
                        <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/07.png" alt="1"/>
                          <a href="images/gallery/large/07.png" rel="prettyPhoto[gallery2]" title="Asfuérzate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                         <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/07.png" alt="1"/>
                          <a href="images/gallery/large/07.png" rel="prettyPhoto[gallery2]" title="Asfuérzate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                         <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/07.png" alt="1"/>
                          <a href="images/gallery/large/07.png" rel="prettyPhoto[gallery2]" title="Asfuérzate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                         <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/07.png" alt="1"/>
                          <a href="images/gallery/large/07.png" rel="prettyPhoto[gallery2]" title="Asfuérzate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

       <Contacts></Contacts>

        <Footer></Footer>

        <a href="#slides" className="top"><i className="material-icons" style={{margin: 'auto',fontSize: '2em',color: 'black', fontWeight: 900}}>keyboard_arrow_up</i></a>
      </div>
    );
  }
}

export default App;
