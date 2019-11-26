import React, {Component} from 'react'
import {Modal} from 'antd'
import {connect} from 'react-redux'
import {closeModal} from '../../actions/modal'

class ModalComponent extends Component {
  render() {
    const {
      modal: {title, visible},
      close,
      children,
    } = this.props
    return (
      <Modal
        title={title}
        visible={visible}
        onOk={close}
        onCancel={close}
        {...this.props}
      >
        {children}
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
})

const mapDispatchToProps = {
  close: closeModal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent)
