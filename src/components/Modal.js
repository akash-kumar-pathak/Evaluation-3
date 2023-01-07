import React, { useState } from "react";
import { Modal, Spin } from "antd";

const ModalComponent = (props) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        footer={null}
        closable={false}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Spin size="large" />
          <p>Please wait, logging in</p>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;
