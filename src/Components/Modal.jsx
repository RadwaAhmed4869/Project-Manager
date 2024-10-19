import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-5 rounded-md shadow-md"
    >
      {children}
      <form className="mt-4 text-right" method="dialog">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
