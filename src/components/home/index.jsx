import * as React from 'react';
import './index.css';
import {HomeServices} from './../../services/home.services';

export class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        sliders: []
    };
    this.renderSlider = this.renderSlider.bind(this);
}
    componentDidMount() {
        this.getSlider();
    }

    getSlider() {
        const {sliders} = this.state;
        const service = new HomeServices();

       service.getSliders()
            .then(response => {
                console.log(response)
                this.setState({sliders: response})
                return response
            })
            .catch(error => {
                console.log(error)
            })
            
    }

    renderSlider() {
        const Sliders = this.state.sliders;
        console.log(Sliders)
         const result = Sliders.map((sld, index) => {
              console.log(sld)
                return (
                        <div className="slide active" key={index}>
                            <img src={sld.imgSrc} alt="Fractales" className="img-responsive"/>
                            <div className="slide-caption">
                                <div className="container">
                                <h3><i className="fa fa-search"></i><span></span>{sld.title}</h3>
                                <h2  className="frases">{sld.subTitle}</h2>
                                </div>
                            </div>
                            {/*<div className="info" data-toggle="modal" data-target="#infoModal1" onClick={this.openModal}><span><i className="material-icons">new_releases</i></span></div>*/}
                        </div>
                    )
            })
            return result;
        
    }

  render() {
      const {sliders} = this.state;
      console.log(sliders)
    return(
      <section id="slides">
          {/*<img src="images/navidad.png" alt=""/>*/}
      <div class="accordion" id="accordionEx" style={{position: 'absolute', zIndex: 99}} role="tablist" aria-multiselectable="true">

    <div class="card aux">

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
        <div class="card card2 col-xs-5 col-sm-4 col-md-4">

            <div class="card-header" role="tab" id="headingTwo">
                <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5 class="mb-0">
                        Lo nuevo en Fractal Químicos...<i class="fa fa-angle-down rotate-icon"></i>
                    </h5>
                </a>
            </div>
            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
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
          <div className="slides-container">
              <div className="slide active">
                <img src="images/slider/slide1.png" alt="Fractales" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                      <h3><i className="fa fa-search"></i><span></span>Servicios</h3>
                       <h2  className="frases">PROFESIONALES, CIENTÍFICAS Y TECNOLÓGICAS-LABORATORIO</h2>
                    </div>
                  </div>
                  <div className="info" data-toggle="modal" data-target="#infoModal1" onClick={this.openModal}><span><i className="material-icons">new_releases</i></span></div>
              </div>
              
              <div className="slide active">
                <img src="images/estereoquimica.png" alt="Estereoquímica" className="img-responsive"/>
                  <div className="slide-caption id">
                    <div className="container">
                    <h3><i className="fa fa-paper-plane"></i><span></span>I + D<br/><h6>*Investigación + Desarrollo</h6></h3>
                      <h2 className="frases">ENSAYOS, ANALITICA, FISICOQUÍMICA, ASESORÍA Y CAPACITACIÓN</h2>
                    </div>
                  </div>
                  <div className="info" data-toggle="modal" data-target="#infoModal2"><span><i className="material-icons">new_releases</i></span></div>
              </div>
              
              <div className="slide active">
                <img src="images/rotenona.png" alt="Rotenona" className="img-responsive"/>
                  <div className="slide-caption">
                    <div className="container">
                    <h3><i className="fa fa-music"></i><span></span>Instrumentación</h3>
                      <h2 className="frases">CIENTÍFICA AVANZADA, APARATOS Y REACTIVOS</h2>                     
                    </div>
                  </div>
                  <div className="info" data-toggle="modal" data-target="#infoModal3"><span><i className="material-icons">new_releases</i></span></div>
              </div>
          </div>
        
          <div className="slides-navigation">
          <a className="prev"><i className="material-icons">keyboard_arrow_left</i></a>
          <a className="next"><i className="material-icons">keyboard_arrow_right</i></a>
          </div>
          
          <div className="holder"><a href="#nosotros" className="aHome">{(<i className="material-icons moreArrow moving" style={{margin: '-23px 2px',position: 'absolute', fontWeight: 900, fontSize: '2em'}}>keyboard_arrow_down</i>) ? <i className="material-icons moreArrow moving" style={{margin: '-23px 2px',position: 'absolute', fontWeight: 900, fontSize: '2em'}}>keyboard_arrow_down</i> : null }</a></div>
          
             <div className="modal fade right" id="infoModal1" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
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
                            <img className="img-fluid" src="images/slider/slide1.png" alt="Card image cap"/>

                            <div className="card-body">
                                <h4 className="card-title">Fractales</h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
            <div className="modal fade right" id="infoModal2" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
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
                            <img className="img-fluid" src="images/estereoquimica.png" alt="Estereoquimica"/>

                            <div className="card-body">
                                <h4 className="card-title">Estereoquímica de la cipermetrina </h4>
                                </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>

            <div className="modal fade right" id="infoModal3" tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
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
                            <img className="img-fluid" src="images/rotenona.png" alt="Rotenona"/>

                            <div className="card-body">
                                <h4 className="card-title">Análisis PDA 3D de la rotenona</h4>
                            </div>

                        </div>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                    </div>
                </div>
              </div>
            </div>
        </section>
    )
  }
}