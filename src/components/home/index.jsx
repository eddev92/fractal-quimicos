import * as React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <section id="slides">
          <div className="slides-container">

              <div className="slide active">
                <img src="images/slider/slide1.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                      <h3><i className="fa fa-search"></i><span></span> Ciencia</h3>
                      <h2 className="frases">ENSAYOS Y CERTIFICACIÓN EN FISICOQUÍMICA Y ANALITICA</h2>
                    </div>
                  </div>
              </div>
              
              <div className="slide active">
                <img src="images/slider/slide2.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                    <h3><i className="fa fa-paper-plane"></i><span></span> Educación</h3>
                      <h2 className="frases">ASESORÍA Y CAPACITACIÓN</h2>
                    </div>
                  </div>
              </div>
              
              <div className="slide active">
                <img src="images/slider/slide3.png" alt="slide" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                    <h3><i className="fa fa-music"></i><span></span>Química</h3>
                      <h2  className="frases">APARATOS Y REACTIVOS</h2>
                    </div>
                  </div>
              </div>
              
          </div>
        
          <div className="slides-navigation">
          <a className="prev"> <i className="fa fa-chevron-left"></i></a>
          <a className="next"> <i className="fa fa-chevron-right"></i></a>
          </div>
          
          <div className="holder"><i className="fa fa-chevron-down moreArrow moving"></i></div>
          
        </section>
    )
  }
}