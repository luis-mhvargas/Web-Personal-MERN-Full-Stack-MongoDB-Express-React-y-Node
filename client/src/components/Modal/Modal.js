import React from "react";
import { Modal as ModalAntd } from "antd";

export default function Modal(props) {
  const {
    children,
    title,
    isVisibleModal,
    setIsVisibleModal,
    ...other
  } = props;

  return (
    <ModalAntd
      title={title}
      centered
      visible={isVisibleModal}
      onCancel={() => setIsVisibleModal(false)}
      footer={false}
      {...other}
    >
      {children}
    </ModalAntd>
  );
}
