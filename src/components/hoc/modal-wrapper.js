import React, { Component } from "react";

const ModalWrapper = WrappedModal => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { visible: false };
    }

    render() {
      const showModal = () => {
        this.setState({
          visible: true
        });
      };

      const hideModal = () => {
        this.setState({
          visible: false
        });
      };

      return (
        <WrappedModal
          visible={this.state.visible}
          showModal={showModal}
          hideModal={hideModal}
          {...this.props}
        />
      );
    }
  };
};

export default ModalWrapper;
