import React from "react";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  if (!visible) return null;

  const handleOnClose = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30  backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-4 rounded relative">
        <button
          className="btn btn-sm btn-circle text-red-500 absolute top-1 right-2"
          id="container"
          onClick={handleOnClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
