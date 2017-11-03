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
                          <a href="images/gallery/large/01.png" rel="prettyPhoto[gallery2]" title="Coquetea"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                        
                        <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/2.png" alt="1"/>
                          <a href="images/gallery/large/06.png" rel="prettyPhoto[gallery2]" title="Alégrate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                    
                      <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/3.png" alt="1"/>
                          <a href="images/gallery/large/03.png" rel="prettyPhoto[gallery2]" title="Enamórate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>

                  <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/4.png" alt="1"/>
                          <a href="images/gallery/large/04.png" rel="prettyPhoto[gallery2]" title="Disfruta"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                    
                      <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" style={{height: '322px'}} src="images/gallery/small/5.png" alt="1"/>
                          <a href="images/gallery/large/05.png" rel="prettyPhoto[gallery2]" title="Siente"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                        
                        <div className="galleryImg col-md-3 col-sm-6">
                          <img className="img-responsive" src="images/gallery/small/1.png" alt="1"/>
                          <a href="images/gallery/large/07.png" rel="prettyPhoto[gallery2]" title="Asfuérzate"><span><i className="fa fa-search-plus"></i></span></a>
                        </div>
                      </div>
                    
                </div>
        </section>
    )
  }
}