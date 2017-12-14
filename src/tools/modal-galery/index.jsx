import * as React from 'react';
import './index.css';

export default class ModalGaleryComponent extends React.Component {
    render() {
        const { id, url, title, subtitle } = this.props;

        return (
                <div className="modal fade right" id={id} tabIndex="-1" role="dialog" aria-labelledby="infoModal" aria-hidden="true">
                        <div className="modal-dialog modal-notify modal-info" role="document">
                            <div className="modal-content">
                            <div className="modal-header" style={{padding: '0 1.5em 0'}}>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize: '2em', height: 20, marginRight: 14}}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {(this.props.children ? this.props.children : null)}
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{backgroundColor: '#333'}}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}