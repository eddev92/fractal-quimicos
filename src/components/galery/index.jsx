import * as React from 'react';
import './index.css';
import {GaleryServices} from './../../services/galery.services';
import ModalGaleryComponent from './../../tools/modal-galery'

export class Galery extends React.Component {

    state = {
        galeryItems : [],
        open: false
    };

    componentDidMount(){
        this.loadGaleryItems();
        // this.loadModals();
    }

  loadGaleryItems = () => {
      const service = new GaleryServices();

      service.getGalery()
        .then(res  => {
            console.log(res)
            this.setState({ galeryItems: res })
        },
        error => {
            console.log(error)
        })
  }

  renderGaleryItems(items = []) {
    const result = items.map(item => {
        return (
            <div className="galleryImg col-md-3 col-sm-6">
                <img className="img-responsive" src={item.url || 'Cargando...'} alt="1"/>
                <a data-toggle="modal" data-target={`#${item.targetId}`} title="" onClick={this.loadModals}><span><i className="material-icons">{item.font}</i></span></a>
        </div>
        )
    })
    return result;
  }

  loadModals = () => {
      const {open} = this.state;
      this.setState({ open: !open} , () => {
        this.renderGaleryItems(this.state.galeryItems);
      })

  }

  renderModalGalery(items) {
      items.map(item => {
        return (
            <ModalGaleryComponent id={item.targetId} url={item.url} title={item.title} subtitle={item.subtitle} >
                    <div className="card">
                        <img className="img-fluid" src={item.url || 'Cargando...'} alt="Estereoquimica"/>

                        <div className="card-body">
                            <h4 className="card-title">{item.title}<br/> <span>{`[ ${item.subtitle} ]`}</span></h4>
                        </div>
                    </div>
                </ModalGaleryComponent>
        )  
    }) 
  }

  render() {
      const {galeryItems} = this.state;

    return (
     <section id="about" className="BGlight">
            <div className="row">
                <div className="col-md-12 aboutGallery wow fadeIn no-padding" data-wow-offset="75" data-wow-delay="1.75s" style={{overflow: 'hidden', backgroundColor: '#0099cc'}}>
                
                {galeryItems && this.renderGaleryItems(galeryItems)}
               
                </div>
            </div>
             {galeryItems.map(item => {
                        return(
                        <ModalGaleryComponent id={item.targetId} url={item.url} title={item.title} subtitle={item.subtitle} >
                            <div className="card">
                                <img className="img-fluid" src={item.url} alt="Equipo Fractal Químicos"/>

                                <div className="card-body">
                                    <h4 className="card-title">{item.title}<br/> <span>{`[ ${item.subtitle} ]`}</span></h4>
                                </div>
                            </div>
                        </ModalGaleryComponent>
                )})}
        </section>
    )
  }
}
