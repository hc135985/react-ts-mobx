import React, { Component } from 'react'
interface IProps {
  cancel: Function
  onOk: Function
}
class Modal extends Component<IProps> {
  render() {
    return (
      <div className="modal">
        <div className="modal-header">Modal</div>
        <div className="modal-main">
          {this.props.children || <h3>hello Modal!</h3>}
        </div>
        <div className="modal-footer">
          <button onClick={() => this.props.cancel()}>取消</button>
          <button>确认</button>
        </div>
      </div>
    )
  }
}

export default Modal
