import * as React from 'react';
import './index.css'
export class Home extends React.Component {
  render() {
    return (
      <section id="slides">
          <div className="slides-container">

              <div className="slide active">
                <img src="images/slider/slide1.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                      <h3><i className="fa fa-search"></i><span></span>Actividades</h3>
                       <h2  className="frases">PROFESIONALES, CIENTÍFICAS Y TECNOLÓGICAS</h2>
                    </div>
                  </div>
              </div>
              
              <div className="slide active">
                <img src="images/slider/slide2.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                    <h3><i className="fa fa-paper-plane"></i><span></span>Educación + investigación</h3>
                      <h2 className="frases">ENSAYOS, ANALITICA, ASESORÍA Y CAPACITACIÓN</h2>
                    </div>
                  </div>
              </div>
              
              <div className="slide active">
                <img src="images/slider/slide3.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                    <h3><i className="fa fa-music"></i><span></span>Instrumentación</h3>
                      <h2 className="frases">CIENTÍFICA, AVANZADA, APARATOS Y REACTIVOS</h2>                     
                    </div>
                  </div>
              </div>
              
          </div>
        
          <div className="slides-navigation">
          <a className="prev"><i className="material-icons">keyboard_arrow_left</i></a>
          <a className="next"><i className="material-icons">keyboard_arrow_right</i></a>
          </div>
          
          <div className="holder"><a href="#nosotros" className="aHome"><i className="material-icons moreArrow moving" style={{margin: '-23px 2px',position: 'absolute', fontWeight: 900, fontSize: '2em'}}>keyboard_arrow_down</i></a></div>
          
          
        </section>
    )
  }
}