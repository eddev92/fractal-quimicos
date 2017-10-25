import React, { Component } from 'react';
import logo from './logo.svg';
import {Footer} from './components/footer'
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
                        <a href="index.html"><img className="img-responsive" src="images/company.png" alt="logo" /></a>
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
                                  <li ><a href="#slides">Descubre</a></li>
                                  <li><a href="#about">Conócenos</a></li>
                                  <li><a href="#contact">Suscríbete</a></li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                    </div>
                </div>
          </div>

        </header>

        <section id="slides">
          <div className="slides-container">

              <div className="slide active">
                <img src="images/slider/slide1.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                      <h3><i className="fa fa-search"></i><span></span> Encuentra</h3>
                      <h2 className="frases">¡La Marinera  ya tiene su portal! </h2>
                    </div>
                  </div>
              </div>
              
              <div className="slide active">
                <img src="images/slider/slide2.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                    <h3><i className="fa fa-paper-plane"></i><span></span> Conoce</h3>
                      <h2 className="frases">¿Quieres conocerla?  muy pronto… </h2>
                    </div>
                  </div>
              </div>
              
              <div className="slide active">
                <img src="images/slider/slide3.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                    <h3><i className="fa fa-music"></i><span></span> Disfruta</h3>
                      <h2  className="frases">Encuentra tu pasión  en un solo lugar </h2>
                    </div>
                  </div>
              </div>
              
          </div>
        
          <div className="slides-navigation">
          <a className="prev" href="#"> <i className="fa fa-chevron-left"></i></a>
          <a className="next" href="#"> <i className="fa fa-chevron-right"></i></a>
          </div>
          
          <div className="holder"><i className="fa fa-chevron-down moreArrow moving"></i></div>
          
        </section>


        <section className="page-block features">
          <div className="container-fluid wideBG">
            <div className="col-lg-6 col-sm-12 BGprime"></div>
                <div className="col-lg-6 col-sm-12 BGsecondary"></div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-md-4 col-sm-12 col-xs-12 wow bounceInUp" data-wow-duration="1s" data-wow-offset="75">
                        <h4><small>Conoce las</small>Historias</h4>
                        <p>Nuestra Marinera Norteña, está llena de 
                        tradiciones y sentimientos, cada   
                        implemento nos cuenta una historia.   
                        ¿Quieres escucharlas?   
                        Mi Marinera tiene mucho que contarte.
                        </p>
                    </div>
                    
                  <div className="col-md-4 col-sm-12 col-xs-12 middleBox wow bounceInUp" data-wow-duration="1s" data-wow-offset="75">
                        <h4><small>Descubre la</small>Jarana</h4>
                        <p>Déjate conquistar por la alegría y la   
                        coquetería del romanticismo de la  
                        marinera norteña.   
                        ¿Buscas divertirte con una marinera?     
                        Mi Marinera te dice donde hacerlo.

                        </p>
                    </div>
                    
                  <div className="col-md-4 col-sm-12 col-xs-12 wow bounceInUp" data-wow-duration="1s" data-wow-offset="75">
                        <h4><small>Comparte tus</small>Emociones</h4>
                        <p>Comparte  emociones y tu pasión
                        al ritmo de guitarra y cajón, porque 
                        para bailar una marinera no hay nada mejor.   
                        ¿No te enteraste de ese evento?   
                        Mi Marinera te mantiene actualizado.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>


        <section id="subscribe" className="page-block-small wow fadeInUp BGprime opaque" data-wow-offset="75" data-wow-delay="1s">
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h4 className="subscribeHeading">Tu pasión en un solo lugar</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="BGlight">
          <div className="container-wide">
            <div className="row">
                
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeIn BGprime page-block-full" data-wow-offset="75" data-wow-delay="1.5s"style={{overflow: 'hidden'}}>
                    
                        <h5 className="white">¡La Marinera  ya tiene su portal!  ¿Quieres conocerla?</h5>
                        <p className="white">"Mi Marinera.com" es un medio digital que busca concentrar toda información sobre la Marinera Norteña, con la  finalidad dar a conocer, difundir y promocionar nuestro baile bandera.  
                        Estamos preparando algo nuevo para ti y tu pasión, descubre un mundo lleno de color, festejo y coquetería. Envíanos tus comentarios y se parte de esta nueva aventura. 
                       ¿Y tú? ¿Eres un Marinerístico de corazón?
                      </p>
                        <h5 className="white">¡Busca, conoce y disfruta! <i className="fa fa-long-arrow-right"></i></h5>
                    </div>
                    
                  <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 aboutGallery wow fadeIn no-padding" data-wow-offset="75" data-wow-delay="1.75s" style={{overflow: 'hidden'}}>
                    
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
                          <img className="img-responsive" src="images/gallery/small/02.png" alt="1"/>
                          <a href="images/gallery/large/02.png" rel="prettyPhoto[gallery2]" title="Asfuérzate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>

                        <div className="galleryImg">
                          <img className="img-responsive" src="images/gallery/small/08.png" alt="1"/>
                          <a href="images/gallery/large/08.png" rel="prettyPhoto[gallery2]" title="Asfuérzate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                                  </div>
                    
                </div>
            </div>
        </section>

        <section className="page-block-small BGsecondary">
          <div className="social">
              <ul className="list-inline text-center">
                <li className="wow bounceInDown" data-wow-offset="75" data-wow-delay="0.25s"><a href="https://www.facebook.com/mimarinera/" data-toggle="tooltip" title="Síguenos en Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
          
                <li className="wow bounceInDown" data-wow-offset="75" data-wow-delay="0.75s"><a href="https://www.youtube.com/channel/UCdZT-K8RQYtEQpcmDb-bKGw" data-toggle="tooltip" title="Mira nuestros Videos" target="_blank"><i className="fa fa-youtube-play"></i></a></li>

                <li className="wow bounceInDown" data-wow-offset="75" data-wow-delay="1.75s"><a href="https://plus.google.com/112961766709927449468/posts" data-toggle="tooltip" title="Síguenos en Google Plus" target="_blank"><i className="fa fa-google-plus"></i></a></li>

              </ul>
            </div>
        </section>

        <section id="contact" className="">
          <div className="highlightBox">
            <div className="boxBg page-block-big">
              <div className="container wow fadeIn" data-wow-offset="50" data-wow-delay="1s">
                  <div className="row">
                    <div className="col-md-10 col-md-offset-2 col-sm-12 contact">
                        
                        <div className="contactInfo BGlight">
                            <h1>¡Tu Pasión!</h1>
                            <div className="upper">
                              <p className="no-border"><i className="fa fa-clock-o"></i> <strong>Encuéntranos</strong>  Lunes – Viernes:  9:00am - 6:00pm</p>
                              <p><i className="fa fa-phone"></i> <strong>Llámanos: </strong> (+51) 982 078 059
                              </p>
                            </div>
                            <div className="lower">
                              <p><i className="fa fa-envelope-o"></i><strong>Escríbenos: </strong>yoamo@mimarinera.com</p>
                            </div>
                        </div>
                        
                        <div className="contactForm">
                          <h5 className="unique">¡Subscríbete y Entérate de Todo!</h5>
                          <form id="contact_form" method="post" action="form/contact.php">
                            <div className="form-row">
                              <input type="text" className="form-control" id="name" name="name" placeholder="Nombres Completos" />
                            </div>
                            <div className="form-row">
                              <input type="tel" className="form-control" id="phone" name="phone" placeholder="Teléfono" />
                            </div>
                            <div className="form-row">
                              <input type="email" className="form-control" id="email" name="email" placeholder="Correo" />
                            </div>
                            <div className="form-row">
                              <input type="sugerencia" className="form-control" id="sugerencia" name="sugerencia" placeholder="Distrito y/o Ciudad" />
                            </div>
                            <div className="form-row">
                              <textarea cols="60" rows="3" id="comment" name="comment" className="form-control" placeholder="¿Qué te gustaría encontrar en nuestro nuevo Portal?"></textarea>
                            </div>
                            <div className="form-row">
                              <input type="text" id="security" name="security" className="form-control hide" value="" />
                              <input type="submit" value="Enviar" className="btn btn-dark btn-lg" id="submit" name="submit" />
                            </div>
                          </form>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>

        <Footer></Footer>

        <a href="#slides" className="top"><i className="fa fa-arrow-up fa-lg"></i></a>
      </div>
    );
  }
}

export default App;
