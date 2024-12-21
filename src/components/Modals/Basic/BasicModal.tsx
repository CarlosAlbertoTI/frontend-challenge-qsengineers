import React from "react";
import Modal from "react-modal";

interface BasicModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
}

const BasicModal: React.FC<BasicModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
}) => {
  return (
    <Modal
      className="h-32 bg-amber-200 w-full h-full sm:w-[50vw] sm:h-auto sm:mt-[50vh] m-auto"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      ariaHideApp={false}
    >
      <button onClick={onRequestClose}>Close</button>
      <div>{children}</div>
    </Modal>
  );
};

export default BasicModal;
