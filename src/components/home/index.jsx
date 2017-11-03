import * as React from 'react';
import './index.css'
export class Home extends React.Component {
  render() {
    return (
      <section id="slides">
      <div class="accordion" id="accordionEx" style={{position: 'absolute', zIndex: 99}} role="tablist" aria-multiselectable="true">

    <div class="card">

        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
            <div class="card-body">
                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch
                3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
                </p>
            </div>
        </div>
    </div>
    <div class="card card2">

        <div class="card-header" role="tab" id="headingTwo">
            <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h5 class="mb-0">
                    Lo nuevo en fractal...<i class="fa fa-angle-down rotate-icon"></i>
                </h5>
            </a>
        </div>
        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="card-body nuevo">
                <div className="card" style={{textAlign: 'center'}}>
                    <img className="img-responsive" style={{width: '100%'}} src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h6 className="card-title" style={{color: 'black', padding: 2}}>Título</h6>
                        <p className="card-text">Párrafo sobre noticia</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
          <div className="slides-container">

              <div className="slide active">
                <img src="images/slider/slide1.png" alt="Fractales" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                      <h3><i className="fa fa-search"></i><span></span>Actividades</h3>
                       <h2  className="frases">PROFESIONALES, CIENTÍFICAS Y TECNOLÓGICAS</h2>
                    </div>
                  </div>
              </div>
              
              <div className="slide active">
                <img src="images/estereoquimica.png" alt="Estereoquímica" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                    <h3><i className="fa fa-paper-plane"></i><span></span>I + D</h3>
                      <h2 className="frases">ENSAYOS, ANALITICA, FISICOQUÍMICA, ASESORÍA Y CAPACITACIÓN</h2>
                    </div>
                  </div>
              </div>
              
              <div className="slide active">
                <img src="images/rotenona.png" alt="Rotenona" className="img-responsive"/>
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