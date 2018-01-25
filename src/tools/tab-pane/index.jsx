import * as React from 'react';
import './index.css';
import ModalComponent from './../../tools/modal';
import {ID_MODAL_SERVICIO_01} from './../../tools/consts/consts';

export default class TabPanelComponent extends React.Component {
    validateTabId(listServices, panel15) {
        console.log(listServices)

           return (
            <ul className="list-group">
                {(listServices.content1) && <li className="list-group-item list-group-item-warning">{listServices.content2}{(panel15 === 'panel5') ? <div className="info" id="info" data-toggle="modal" data-target={`#${ID_MODAL_SERVICIO_01}`} onClick={this.openModal}><span><i className="material-icons" style={{margin: '3px', top: 0}}>new_releases</i></span></div> : null}</li>}
                {(listServices.content2) && <li className="list-group-item list-group-item-danger">{listServices.content1}</li>}
                {(listServices.content3) && <li className="list-group-item list-group-item-success">{listServices.content3}</li>}
                {(listServices.content4) && <li className="list-group-item list-group-item-info">{listServices.content4}</li>}
                {(listServices.content5) && <li className="list-group-item list-group-item-danger">{listServices.content5}</li>}
                {(listServices.content6) && <li className="list-group-item list-group-item-warning">{listServices.content6}</li>}
                {(listServices.content7) && <li className="list-group-item list-group-item-success">{listServices.content7}</li>}
                {(listServices.content8) && <li className="list-group-item list-group-item-info">{listServices.content8}</li>}
            </ul>
               )
    }
    renderItem(services, tabId) {
        console.log(services)
        console.log(tabId)
        switch(tabId) {
            case 'panel5': return this.validateTabId(services[0], tabId);
            case 'panel6': return this.validateTabId(services[1]);
            case 'panel4': return this.validateTabId(services[2]);
            default : return null;
        }
        
        
    }
    render() {
        const services = this.props.services || [];
        const tabId = this.props.id || {};
        console.log(tabId)
        return (
            <div className="tab-pane fade in active" id={this.props.id} role={this.props.role}>
                    <br/>
                    
                        {(this.props.id) ? this.renderItem(services, tabId) : 
                        <div> <h3> Selecciona algun tipo de servicio</h3></div>}
            <ModalComponent id={ID_MODAL_SERVICIO_01} title="Plaguicidas" size="">
                        <div className="row" style={{margin: '15px 5px 30px'}}>
                            <div className="col-md-12">
                                <img src="images/descripcion_servicios.png" alt=""/>
                            </div>
                        </div>
            </ModalComponent>
                </div>
        )
    }
}