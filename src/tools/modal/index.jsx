import * as React from 'react';
import './index.css';

export default class ModalComponent extends React.Component {
    render() {
        const {id} = this.props;
        console.log(this.props.id)

        return (
            <div className="modal fade right" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby={this.props.id} aria-hidden="true">
              <div className="modal-dialog modal-cotizacion modal-side modal-bottom-right" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel" style={{color: 'white', width: '80%'}}>{this.props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{top: '-63px'}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       {(this.props.children) || ''}
                    </div>
                </div>
              </div>
      </div>
        )
    }
}