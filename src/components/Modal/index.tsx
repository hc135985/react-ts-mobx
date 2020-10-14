import React, { Component } from 'react'
import Modals from './Modal'
import ReactDOM from 'react-dom'
import './index.css'
interface IProps {
  visible: boolean
  cancel?: Function
  onOK?: Function
}
class Modal extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }
  cancel() {
    this.props.cancel && this.props.cancel()
  }
  onOK() {}
  render() {
    console.log(this.props)
    return (
      <>
        {this.props.visible &&
          ReactDOM.createPortal(
            <div className="layer" onClick={() => this.cancel()}>
              <Modals cancel={() => this.cancel()} onOk={() => this.onOK()}>
                {this.props.children}
              </Modals>
            </div>,
            document.querySelector('body') as HTMLBodyElement
          )}
      </>
    )
  }
}

export default Modal
