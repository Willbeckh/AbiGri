import React from "react";
import BookingForm from "@/app/events/tours/BookingForm";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="modal-box bg-white p-4 rounded h-2/5">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2 "
          id="container"
          onClick={handleOnClose}
        >
          ✕
        </button>

        <BookingForm />
      </div>
    </div>
  );
};

export default Modal;
