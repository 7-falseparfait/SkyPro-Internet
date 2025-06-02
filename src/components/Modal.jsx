import { useRef, useEffect, useState } from "react";
import modalImg from "/src/assets/InnerBG.webp";
import cancel from "/src/assets/cancel.png";

export function Modal({ open, onClose, children, className = "" }) {
  const modalRef = useRef();
  const contentRef = useRef();
  const [show, setShow] = useState(open);
  const [exiting, setExiting] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
      setExiting(false);
      setScrolled(false);
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
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
    if (show) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [show]);

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.focus();
    }
  }, [show]);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const handleScroll = () => {
      setScrolled(contentElement.scrollTop > 5);
    };

    contentElement.addEventListener("scroll", handleScroll);
    return () => contentElement.removeEventListener("scroll", handleScroll);
  }, [show]);

  return (
    <>
      {open && (
        <section
          className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start ${className}`}
          onClick={onClose}
        />
      )}
      {show && (
        <div
          ref={modalRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex justify-center items-start pointer-events-none"
          onClick={onClose}
        >
          <div
            ref={contentRef}
            className={`
              pointer-events-auto pb-50
              bg-white w-full sm:max-w-md shadow-lg relative
              transition-all duration-300 ease-out
              flex flex-col
              overflow-y-auto
              ${exiting ? "animate-modal-out" : "animate-modal-in"}
              ${scrolled ? "mt-0 rounded-none" : "mt-[5vh]"}
            `}
            style={{
              height: "100vh", // Always full height
              transform: scrolled ? "translateY(0)" : "translateY(10vh)",
              transition: "transform 0.3s ease-out, 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 z-10 bg-white flex justify-end p-4`}>
              <button
                className="
                  flex items-center justify-center
                  w-7 h-7
                  rounded-full
                  bg-gray-100
                  hover:bg-gray-200
                  hover:cursor-pointer
                "
                onClick={onClose}
                aria-label="Close"
              >
                <img src={cancel} alt="Close" className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full flex justify-center items-center min-h-[17rem]">
              <img
                src={modalImg}
                alt="modal background"
                className="py-3 h-full"
                loading="lazy"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
