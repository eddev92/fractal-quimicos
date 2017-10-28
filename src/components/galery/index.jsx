import * as React from 'react';

export class Galery extends React.Component {
  render() {
    return (
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
    )
  }
}