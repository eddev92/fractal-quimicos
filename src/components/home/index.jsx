import * as React from 'react';
import './index.css';
import {HomeServices} from './../../services/home.services';
import ModalComponent from './../../tools/modal';
import {
    ID_MODAL_RECIENTE_HOME,
    ID_MODAL_RECIENTE_HOME_2,
    ID_MODAL_RECIENTE_HOME_3
} from './../../tools/consts/consts'
const button = true;

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
          <ModalComponent  id={ID_MODAL_RECIENTE_HOME} title="Lo nuevo en fractal" size="large" button={button}>
               <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/identificacion-caracterizacion.png" alt="PQUA" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2}}>
                            Identificación, caracterización y método analítico desarrollado en Fractal Quìmicos E.I.R.L.</h6><br />
                                Cyproconazole. Mezcla aprox. 1:1 de diastómeros A y B; cada diastómero es una mezcla exacta 1:1 de dos enantlómeros (2S,3S + 2SS,3R y 2R,3R + 2R, 3S). Los estereoisómeros están cantidades similares.<br />
                                <strong>Dr. A. Cjuno H. </strong> <br />
                                <strong>2018</strong>
                            <p className="card-text" style={{marginBottom: 0}}>
                            </p>
                        </div>

                    </div>
                </div>
        </ModalComponent>
        <ModalComponent  id={ID_MODAL_RECIENTE_HOME_2} title="Lo nuevo en fractal" size="large" button={button}>
               <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/plaguicidas.png" alt="sistemas-dispersos" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2}}>
                            Plaguicidas y selectividad</h6><br />
                                <strong>Dr. A. Cjuno H.</strong> <br />
                                <strong>2018</strong>
                            <p className="card-text" style={{marginBottom: 0}}>
                            </p>
                        </div>

                    </div>
                </div>
        </ModalComponent>
        <ModalComponent  id={ID_MODAL_RECIENTE_HOME_3} title="Lo nuevo en fractal" size="large" button={button}>
               <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/pqua.png" alt="PQUA" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2}}>
                                DETERMINACIÓN DE PROPIEDADES FISICOQUIMICAS DE PLAGUICIDAS QUIMICOS DE USO AGRÍCOLA (PQUA).</h6><br />
                                Según Manual Técnico Andino para el registro y control de PQUA resolución 630, decisiones posteriores 767, 785...
                                CIPAC, ASTM, AOAC, EPA, OPPTS, UE-methods, OECD-guideline. <br />
                                <strong>Dr. A. Cjuno H.</strong> <br />
                                <strong>2017 - 2018</strong>
                            <p className="card-text" style={{marginBottom: 0}}>
                            </p>
                        </div>

                    </div>
                </div>
        </ModalComponent>
          <img className="adorno3" src="images/adorno2.png" alt=""/>
          <img className="adorno2" src="images/adorno2.png" alt=""/>
          <img className="adorno4" src="images/adorno2.png" alt=""/>
          <img className="adorno5" src="images/adorno2.png" alt=""/>
          <img className="adorno" src="images/navidad.png" alt=""/>
          <img className="adorno" src="images/navidad.png" alt="" style={{left: '42%'}}/>
          <div id="saludo">
              <h3><strong>Feliz Navidad</strong><strong style={{color: '#edc54b', fontSize: 24}}> & </strong> Próspero año nuevo</h3>
          </div>
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
                        Lo nuevo en fractal...<i class="fa fa-angle-down rotate-icon"></i>
                    </h5>
                </a>
            </div>
            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/identificacion-caracterizacion.png" alt="identificacion-caracterizacion" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2, fontSize: '1em'}}>
                            Cyproconazole. Mezcla aprox. 1:1 de diastómeros A y B; cada diastómero es una mezcla exacta 1:1 de dos enantlómeros (2S,3S + 2SS,3R y 2R,3R + 2R, 3S). Los estereoisómeros están cantidades similares.</h6>
                            Desarrollado en Fractal Químicos <br/>
                                 <strong>2018</strong>    <br />    <br />
                                <button type="button" id="cotizar" className="btn btn-primary" style={{ background:'#bbb' }} data-toggle="modal" data-target={`#${ID_MODAL_RECIENTE_HOME}`}>Ver más</button>
                            
                               
                            <p className="card-text" style={{marginBottom: 0}}>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="card-header second-time" role="tab" id="headingThree">
                <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h5 class="mb-0">
                        Sistemas dispersos utilizados en las formulaciones de pesticidas<i class="fa fa-angle-down rotate-icon"></i>
                    </h5>
                </a>
            </div>
            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/sistemas-dispersos.png" alt="plaguicidas" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2, fontSize: '1em'}}>
                            Sistemas dispersos utilizados en las formulaciones de pesticidas<br />Dr. J. A. Cjuno H.</h6>
                                 <strong>2018</strong>    <br />    <br />
                                <button type="button" id="cotizar" className="btn btn-primary" style={{ background:'#bbb' }} data-toggle="modal" data-target={`#${ID_MODAL_RECIENTE_HOME_2}`}>Ver más</button>
                            
                               
                            <p className="card-text" style={{marginBottom: 0}}>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="card-header second-time2" role="tab" id="headingfour">
                <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <h5 class="mb-0">
                    DETERMINACIÓN DE PROPIEDADES FISICOQUIMICAS DE PLAGUICIDAS QUIMICOS DE USO AGRÍCOLA (PQUA)<i class="fa fa-angle-down rotate-icon"></i>
                    </h5>
                </a>
            </div>
            <div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingfour">
                <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/pqua.png" alt="PQUA" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2, fontSize: '1em'}}>
                            DETERMINACIÓN DE PROPIEDADES FISICOQUIMICAS DE PLAGUICIDAS QUIMICOS DE USO AGRÍCOLA (PQUA).</h6>
                                 <strong>2018</strong>    <br />    <br />
                                <button type="button" id="cotizar" className="btn btn-primary" style={{ background:'#bbb' }} data-toggle="modal" data-target={`#${ID_MODAL_RECIENTE_HOME_3}`}>Ver más</button>
                            
                               
                            <p className="card-text" style={{marginBottom: 0}}>
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