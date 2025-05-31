import { useRef, useEffect, useState } from "react";
import modalImg from "/src/assets/InnerBG.webp";
import cancel from "/src/assets/cancel.png";

export function Modal({ open, onClose, children, className = "" }) {
  const modalRef = useRef();
  const [show, setShow] = useState(open);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
      setExiting(false);
    } else if (show) {
      setExiting(true);
      const timeout = setTimeout(() => {
        setShow(false);
        setExiting(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [open, show]);

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.focus();
    }
  }, [show]);

  return (
    <>
      {open && (
        <section
          className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start ${className} `}
          onClick={onClose}
        />
      )}
      {show && (
        <div
          ref={modalRef}
          tabIndex={-1}
          className={`
      fixed inset-0 z-50 flex justify-center items-start pointer-events-none
      overflow-y-auto max-h-screen
    `}
        >
          <div
            className={`
        pointer-events-auto
        bg-white w-full sm:max-w-md mt-10 shadow-lg relative
        transition-all duration-300 ease-out
        ${exiting ? "animate-modal-out" : "animate-modal-in"}
      `}
          >
            <button
              className="
    absolute top-4 right-4
    flex items-center justify-center
    w-7 h-7
    rounded-full
    bg-gray-100
    hover:bg-gray-200
    hover:cursor-pointer
    border
    border-gray-300
    transition
  "
              onClick={onClose}
              aria-label="Close"
            >
              <img src={cancel} alt="Close" className="w-4 h-4" />
            </button>
            <div>
              <img
                src={modalImg}
                alt="modal background"
                className="w-full py-5 mt-8"
              />
            </div>
            <div className="p-6">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
