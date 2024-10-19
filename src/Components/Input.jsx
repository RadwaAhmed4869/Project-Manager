import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input(
  { label, isTextArea = false, type = "text", ...props },
  ref
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      getInput() {
        return inputRef.current.value.trim();
      },
    };
  });

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {!isTextArea ? (
        <input
          ref={inputRef}
          type={type}
          {...props}
          className={classes}
        ></input>
      ) : (
        <textarea ref={inputRef} {...props} className={classes}></textarea>
      )}
    </p>
  );
});

export default Input;
