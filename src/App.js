import React, { Component } from 'react';
import {Home} from './components/home';
import {Galery} from './components/galery';
import {Contacts} from './components/contacts';
import {Our} from './components/our';
import {sendMailServices} from './services/sendmail.services';
import {ArticlesServices} from './services/articles.services';
import {ServicesHomeServices} from './services/services.services';
import {GaleryServices} from './services/galery.services';
import ModalComponent from './tools/modal';
import TabPanelComponent from './tools/tab-pane';
import {ID_MODAL_COTIZAR, ID_MODAL_LO_NUEVO, ID_MODAL_SERVICIO_01, ID_MODAL_NUESTROS_SERVICIOS, ID_MODAL_ARTICULOS, ID_TAB_PANEL_15, ID_TAB_PANEL_16, ID_TAB_PANEL_14, ID_MODAL_RECIENTE} from './tools/consts/consts';
import './App.css';
import CardComponent from './tools/card';

export class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        model: {
            name: '',
            telefono: '',
            empresa: '',
            email: '',
            mensaje: ''
        },
        datos: [],
        services: [],
        tabSelected: '',
        galeryItems : [],
        showPreloader: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderItemRecientes = this.renderItemRecientes.bind(this);

  }

  componentDidMount() {
    this.loadDatos();
    this.loadGaleryItems();
    this.loadServices();
    this.hidePreloader();
  }
  loadServices() {
      const service = new ServicesHomeServices();

      service.getServices()
        .then(response => {
            this.setState({services: response})
            return response;
        })
        .catch(error => {
            console.log(error)
        })
  }
  loadDatos() {
      const service = new ArticlesServices();

      service.getArticles()
        .then(response => {
            console.log(response)
            this.setState({datos: response.reverse() });
            return response;
        })
        .catch(error => {
            console.log(error)
        })
  }

  loadGaleryItems() {
      const service = new GaleryServices();

      service.getGaleryModal()
        .then(response  => {
            this.setState({ galeryItems: response.reverse() });
            return response;
        },
        error => {
            console.log(error)
        })
  }
   handleChange(key, event) {
        const value = event.target.value;
        const path = key.split('.');
        const model = this.state.model;
        let item = model;
        for (let i = 0; i < path.length - 1; i++)	{
            item = item[path[i]];
        }
        item[path[path.length - 1]] = value;

        this.setState({model})
    }

  handleSubmit(event) {
      const {model} = this.state;
      const service = new sendMailServices();

      service.sendCotizacion(model)
     .then(response =>{
    return response;
  })
  .catch(error => {
    console.log(error);
  });
      console.log(model)
        event.preventDefault();
  }

  viewPhoto() {
      const img = document.querySelector("#dato1")
      console.log(img)
      alert(img)
  }

  renderDownloads(descargas) {
      const downloads = descargas.map(dwnload => {
        return (
            <div>
                   <p className="card-text"><strong>Aquí puedes descargarlos:</strong>
                         <div className="text-center">
                            <button className="btn btn-unique"  type="submit" style={{backgroundColor: '#333', margin: '10px 10px -6px'}} ><a href={dwnload.url} download="actividad_enzimatica" style={{color: 'white'}}>{dwnload.buttom}</a></button>
                        <h6 style={{margin: '13px'}}>{dwnload.title}</h6>
                        </div>
                   </p>
            </div>
        );
      })
      return downloads;
  }

  renderDatos() {
      const {datos} = this.state;
    if(datos) {
       const result = datos.map((dato, index) => {
            console.log(dato)
                return (
                        <div className="col-md-4" key={index}>
                            <div className="card card-cascade">
                                <div className="view gradient-card-header peach-gradient">
                                    <h5 className="h2-responsive" style={{textAlign: 'center'}}>{(dato.title) || ''}</h5>
                                </div>
                                <div className="card-body">
                                    <div className="card" style={{textAlign: 'center'}}>
                                        {(dato.descargas) && this.renderDownloads(dato.descargas)}
                                        {(dato.img) ? <img className="img-responsive" style={{width: '100%'}} src={dato.img} alt="Card image cap" /> : null}
                                            {(dato.titleDownload && dato.parrafoDescarga) ? <p className="card-text"><strong>{dato.titleDownload}</strong> <br/>{dato.parrafoDescarga}</p> : null}

                                            {(dato.desc) ? 
                                                <p className="card-text" style={{marginBottom: 0}}>
                                                {dato.desc}
                                            </p> : null}
                                            {(dato.autor) && <h6 style={{color: 'black'}}>Autor: {dato.autor}</h6>}
                                            {(dato.asesor) && <h6 style={{color: 'black'}}>Asesor: {dato.asesor}</h6>}

                                            {(dato.buttom) ? <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href={dato.url} download={dato.title} target="_blank" style={{color: 'white'}}>{dato.buttom}</a></button> : null}
                                            {(dato.infoMessage) ? <h6>*La imagen será descargada con este botón</h6> : null}
                                    </div>
                            </div>
                        </div>
                    </div>
                )
                
      })
      return result;
    }
  }

  selectTabPanel = (tabId) => {
    this.setState({tabSelected: tabId})
  }

  renderItemRecientes(items = []) {
      const result = items.map(item => {
        return (
            <CardComponent item={item}/>    
        )
      })
      return result;
  }
  hidePreloader = () => {
      const {showPreloader} = this.state;

      setTimeout(() => {
          this.setState({ showPreloader: !showPreloader})
      }, 3000);
  }
  preloaderShow = () => (
    <div className="preloader">
      <img src="images/Preloader.gif" alt="Preloader" />
    </div>
  )
  render() {
      const {datos, tabSelected, services, galeryItems, showPreloader} = this.state;
      const button = true;

    return (
      <div className="root">
      {!showPreloader && this.preloaderShow()}
        <header id="top" style={{backgroundColor: '#000'}}>
            <img src="images/bandera-peru.png" className="bandera-peru" alt=""/>
          <div className="container-fluid">
            <div className="row">
                  <div className="col-md-4 col-sm-12 col-xs-12 logo" style={{top: '13px'}}>
                        <a><img className="img-responsive" src="images/company.png" alt="logo"/></a>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12 rightnav" style={{float: 'right', padding: 0}}>
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
                                  <li data-toggle="modal" data-target={`#${ID_MODAL_NUESTROS_SERVICIOS}`} style={{cursor: 'pointer'}}><a>Servicios</a></li>
                                  <li><a href="#about">Reciente</a></li>
                                  <li data-toggle="modal" data-target={`#${ID_MODAL_RECIENTE}`} style={{cursor: 'pointer'}}><a>Galería</a></li>
                                  <li data-toggle="modal" data-target={`#${ID_MODAL_ARTICULOS}`} style={{cursor: 'pointer'}}><a>Datos</a></li>
                                  <li><a href="#contact">Contáctos</a></li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                    </div>
                </div>
          </div>

        </header>
        {/*MODAL RECIENTE*/}
      <ModalComponent id={ID_MODAL_RECIENTE} title="Galería" size="large" button={button}>
                        <div className="row" style={{margin: '15px 5px 30px'}}>
                            <div className="col-md-12">
                                <div className="row" style={{'display':'table-cell'}}>
                                    {this.renderItemRecientes(galeryItems)}
                                </div>
                            </div>
                        </div>
            </ModalComponent>
            
        {/*FIN*/}
   
        {/* MODAL DATOS*/}
        <ModalComponent id={ID_MODAL_ARTICULOS} title="Datos" size="large" button={button}>
                        <div className="row" style={{margin: '15px 5px 30px'}}>
                            <div className="col-md-12">
                                <div className="row" style={{'display':'table-cell'}}>
                                    {(datos) ? this.renderDatos() : null}
                                    
                                </div>
                            </div>
                        </div>
            </ModalComponent>
        {/*FIN NODAL ARTICULOS*/}
{/*MODAL COTIZAR*/}
        <button type="button" id="cotizar" className="btn btn-primary" data-toggle="modal" data-target={`#${ID_MODAL_COTIZAR}`} style={{position: 'fixed', zIndex: '999', bottom: '9%', border: '2px solid white'}}>
          Cotizar
      </button>
      <ModalComponent id={ID_MODAL_COTIZAR} title="Cotización">
           <form>
                          <div className="md-form">
                              <input type="text" id="form3" name="model-name" value={this.props.value} className="form-control" onChange={this.handleChange.bind(this, 'name')} placeholder="A nombre de quién"/>
                          </div>

                          <div className="md-form">
                              <input type="tel" id="form2" name="model-telefono" value={this.state.model.telefono} className="form-control" onChange={this.handleChange.bind(this, 'telefono')} placeholder="Teléfonos"/>
                          </div>
                            <div className="form-row">
                              <input type="text" className="form-control" id="phone" value={this.state.model.empresa} name="model-empresa" onChange={this.handleChange.bind(this, 'empresa')} placeholder="Empresa o institución" />
                            </div>
                           <div className="md-form">
                              <input type="text" id="form2" name="model-email" value={this.state.model.email} className="form-control" onChange={this.handleChange.bind(this, 'email')} placeholder="Correo electrónico"/>
                          </div>

                          <div className="md-form">
                              <textarea type="text" id="form8" name="model-mensaje" value={this.state.model.mensaje} className="md-textarea" onChange={this.handleChange.bind(this, 'mensaje')} placeholder="Cuéntanos tu proyecto" style={{height: 60, width: '100%'}}></textarea>
                          </div>

                          <div className="text-center">
                              <button className="btn btn-unique"  type="button" style={{backgroundColor: '#333'}} onClick={this.handleSubmit} data-dismiss="modal" aria-label="Close">Cotizar <i className="fa fa-paper-plane-o ml-1"></i></button>
                          </div>

                      </form>
      </ModalComponent>
     
      {/*MODAL COTIZAR*/}
{/*MODAL ENTERATE LO NUEVO*/}
      <button type="button" id="nuevo" className="btn btn-primary" data-toggle="modal" data-target={`#${ID_MODAL_LO_NUEVO}`} style={{position: 'fixed', zIndex: '999', bottom: '9%', border: '2px solid white', right: 0}}>
          Entérate lo nuevo
      </button>
      <ModalComponent id={ID_MODAL_LO_NUEVO} title="Lo nuevo en Fractal" button={button}>
          <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/identificacion-caracterizacion.png" alt="PQUA" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2, fontSize: '1em'}}>
                            Identificación, caracterización y método analítico desarrollado en Fractal Quìmicos E.I.R.L.</h6><br />
                            Cyproconazole. Mezcla aprox. 1:1 de diastómeros A y B; cada diastómero es una mezcla exacta 1:1 de dos enantlómeros (2S,3S + 2SS,3R y 2R,3R + 2R, 3S). Los estereoisómeros están cantidades similares.<br />
                                <strong>[ Dr. A. Cjuno H. ]</strong>
                                <br /><strong>[ 2018 - 2019 ]</strong>
                            <p className="card-text" style={{marginBottom: 0}}>
                            </p>
                        </div>

                    </div>
                </div>
      </ModalComponent>

         {/* <button type="button" id="nuevo" className="btn btn-primary" data-toggle="modal" data-target={`#${ID_MODAL_LO_NUEVO}`} style={{position: 'fixed', zIndex: '999', bottom: '9%', border: '2px solid white', right: 0}}>
          Entérate lo nuevo
      </button>
      <ModalComponent id={ID_MODAL_LO_NUEVO} title="Lo nuevo en Fractal" button={button}>
          <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/pqua.png" alt="PQUA" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2, fontSize: '1em'}}>
                                DETERMINACIÓN DE PROPIEDADES FISICOQUIMICAS DE PLAGUICIDAS QUIMICOS DE USO AGRÍCOLA (PQUA).</h6><br />
                                Según Manual Técnico Andino para el registro y control de PQUA resolución 630, decisiones posteriores 767, 785...<br />
                                CIPAC, ASTM, AOAC, EPA, OPPTS, UE-methods, OECD-guideline.<br />
                                <strong>[ Dr. A. Cjuno H. ]</strong>
                                <br /><strong>[ 2017 ]</strong>
                            <p className="card-text" style={{marginBottom: 0}}>
                            </p>
                        </div>

                    </div>
                </div>
      </ModalComponent>

         <button type="button" id="nuevo" className="btn btn-primary" data-toggle="modal" data-target={`#${ID_MODAL_LO_NUEVO}`} style={{position: 'fixed', zIndex: '999', bottom: '9%', border: '2px solid white', right: 0}}>
          Entérate lo nuevo
      </button>
      <ModalComponent id={ID_MODAL_LO_NUEVO} title="Lo nuevo en Fractal" button={button}>
          <div className="card-body nuevo">
                    <div className="card" style={{textAlign: 'center'}}>
                        <img className="img-responsive" style={{width: '100%'}} src="images/pqua.png" alt="PQUA" />
                        <div className="card-body">
                            <h6 className="card-title" style={{color: 'black', padding: 2, fontSize: '1em'}}>
                                DETERMINACIÓN DE PROPIEDADES FISICOQUIMICAS DE PLAGUICIDAS QUIMICOS DE USO AGRÍCOLA (PQUA).</h6><br />
                                Según Manual Técnico Andino para el registro y control de PQUA resolución 630, decisiones posteriores 767, 785...<br />
                                CIPAC, ASTM, AOAC, EPA, OPPTS, UE-methods, OECD-guideline.<br />
                                <strong>[ Dr. A. Cjuno H. ]</strong>
                                <br /><strong>[ 2017 ]</strong>
                            <p className="card-text" style={{marginBottom: 0}}>
                            </p>
                        </div>

                    </div>
                </div>
      </ModalComponent> */}
    <ModalComponent id={ID_MODAL_NUESTROS_SERVICIOS} title="" size="large" button={button}>
         <div>
            <ul className="nav nav-tabs nav-justified indigo" role="tablist">
                <li className="nav-item" onClick={this.selectTabPanel.bind(this, ID_TAB_PANEL_15)}>
                    <a className="nav-link active" data-toggle="tab" href={`#${tabSelected}`} role="tab"><i className="fa fa-user"></i>ANÁLISIS Y CERTIFICACIÓN DE PRODUCTOS NATURALES E INDUSTRIALES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href={`#${tabSelected}`} role="tab" onClick={this.selectTabPanel.bind(this, ID_TAB_PANEL_16)}><i className="fa fa-heart"></i><br/>QUÍMICA MEDIOAMBIENTAL<br/><br/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href={`#${tabSelected}`} role="tab" onClick={this.selectTabPanel.bind(this, ID_TAB_PANEL_14)}><i className="fa fa-envelope"></i><br/>I + D<br/><br/></a>
                </li>
            </ul>  
            <div className="tab-content">
                <TabPanelComponent id={tabSelected} role="tabpanel" services={services} />
            </div>   
        </div>
    </ModalComponent>

{/*FIN MODAL SERVICIOS*/}
        <Home></Home>

    {showPreloader &&
    <div> 
        <Our></Our>
        <section id="subscribe" className="page-block-small wow fadeInUp BGprime opaque" data-wow-offset="75" data-wow-delay="1s">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </section>
          <Galery></Galery>
       <Contacts></Contacts>
       </div>
        }
        <a id="gotop" href="#slides" className="top" style={{backgroundColor: 'white'}}><i className="material-icons" style={{margin: 'auto',fontSize: '2em',color: 'black', fontWeight: 900}}>keyboard_arrow_up</i></a>
      </div>
    );
  }
}

export default App;
