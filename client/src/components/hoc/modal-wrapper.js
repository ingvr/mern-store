import React, { Component } from "react";

const ModalWrapper = WrappedModal => {
  return class extends Component {
    state = { visible: false };

    showModal = () => {
      this.setState({
        visible: true
      });
    };

    hideModal = () => {
      this.setState({
        visible: false
      });
    };

    render() {
      const { visible } = this.state;
      return (
        <WrappedModal
          visible={visible}
          showModal={this.showModal}
          hideModal={this.hideModal}
          {...this.props}
        />
      );
    }
  };
};

export default ModalWrapper;
