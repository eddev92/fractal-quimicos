import React, { Component } from 'react';
import {Home} from './components/home';
import {Galery} from './components/galery';
import {Contacts} from './components/contacts';
import {Our} from './components/our';
import {sendMailServices} from './services/sendmail.services';
import {ArticlesServices} from './services/articles.services';
import {ServicesHomeServices} from './services/services.services';
import ModalComponent from './tools/modal';
import TabPanelComponent from './tools/tab-pane';
import {ID_MODAL_COTIZAR, ID_MODAL_LO_NUEVO, ID_MODAL_NUESTROS_SERVICIOS, ID_MODAL_ARTICULOS, ID_TAB_PANEL_15, ID_TAB_PANEL_16, ID_TAB_PANEL_14} from './tools/consts/consts'
import './App.css';

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
        tabSelected: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadArticles();
    this.loadServices();
  }
  loadServices() {
      const service = new ServicesHomeServices();

      service.getServices()
        .then(response => {
            console.log(response)
            this.setState({services: response})
            return response
        })
        .catch(error => {
            console.log(error)
        })
  }
  loadArticles() {
      const service = new ArticlesServices();

      service.getArticles()
        .then(response => {
            console.log(response)
            this.setState({datos: response})
            return response
        })
        .catch(error => {
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
         console.log(model)
    console.log(response);
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

  renderArticle() {
      const {datos} = this.state;
      console.log(datos)
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

                                            {(dato.buttom) ? <button type="button" className="btn btn-secondary" style={{backgroundColor: '#333'}}><a href={dato.url} download="Cromatograma_GC-FID" style={{color: 'white'}}>{dato.buttom}</a></button> : null}
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
      const {tabSelected} = this.state;
    console.log(tabId)
    this.setState({tabSelected: tabId})
  }

  render() {
      const {datos, tabSelected, services} = this.state;

    return (
      <div className="root">
        {/*<div id="preloader">
          <img src="images/Preloader.gif" alt="Preloader" />
        </div>*/}
       
        <header id="top" style={{backgroundColor: '#000'}}>
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
                                  <li data-toggle="modal" data-target={`#${ID_MODAL_ARTICULOS}`} style={{cursor: 'pointer'}}><a>Datos</a></li>
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
        
        {/* MODAL DATOS*/}
        <ModalComponent id={ID_MODAL_ARTICULOS} title="Datos" size="large">
                        <div className="row" style={{margin: '15px 5px 30px'}}>
                            <div className="col-md-12">
                                <div className="row" style={{'display':'table-cell'}}>
                                    {(datos) ? this.renderArticle() : null}
                                    
                                </div>
                            </div>
                        </div>
            </ModalComponent>


        {/*FIN NODAL ARTICULOS*/}
{/*MODAL COTIZAR*/}
        <button type="button" id="cotizar" className="btn btn-primary" data-toggle="modal" data-target={`#${ID_MODAL_COTIZAR}`} style={{position: 'fixed', zIndex: '999', bottom: '4%', border: '2px solid white'}}>
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
      <button type="button" id="nuevo" className="btn btn-primary" data-toggle="modal" data-target={`#${ID_MODAL_LO_NUEVO}`} style={{position: 'fixed', zIndex: '999', bottom: '4%', border: '2px solid white', right: 0}}>
          Entérate lo nuevo
      </button>
      <ModalComponent id={ID_MODAL_LO_NUEVO} title="Lo nuevo en Fractal">
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
      </ModalComponent>
      {/*FIN MODAL DE ENTERATE LO NUEVO*/}
{/*MODAL SERVICIOS*/}
    <ModalComponent id={ID_MODAL_NUESTROS_SERVICIOS} title="" size="large">
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
                <TabPanelComponent id={tabSelected} role="tabpanel" services={services}></TabPanelComponent>
            </div>   
        </div>
    </ModalComponent>

{/*FIN MODAL SERVICIOS*/}
        <Home></Home>
        <Our></Our>
        <section id="subscribe" className="page-block-small wow fadeInUp BGprime opaque" data-wow-offset="75" data-wow-delay="1s">
          <div className="container">
            <div className="row">
            </div>
          </div>
        </section>
          <Galery></Galery>
       <Contacts></Contacts>
        <a id="gotop" href="#slides" className="top" style={{backgroundColor: 'white'}}><i className="material-icons" style={{margin: 'auto',fontSize: '2em',color: 'black', fontWeight: 900}}>keyboard_arrow_up</i></a>
      </div>
    );
  }
}

export default App;
