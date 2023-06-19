"use client";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  loading,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled || loading) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, loading, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled || loading) return;

    onSubmit();
  }, [disabled, loading, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || loading || !secondaryAction) return;

    secondaryAction();
  }, [disabled, loading, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800/70
      "
      >
        <div
          className="
            relative
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-1/3
            my-6
            mx-auto
            h-full
            md:h-auto
          "
        >
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          `}
          >
            <div
              className="
              translate
              h-full
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-none
              focus:outline-none
            "
            >
              {/* {HEADER} */}
              <div
                className="
                flex
                items-center
                px-4
                py-5
                rounded-t
                justify-center
                relative
                border-b
              "
              >
                <button
                  onClick={handleClose}
                  className="
                  p-2
                  border-0
                  transition
                  absolute
                  left-3
                  hover:bg-neutral-300/25
                  rounded-full
                "
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-bold">{title}</div>
              </div>
              {/* {BODY} */}
              <div className="relative p-5 flex-auto">{body}</div>
              {/* {FOOTER} */}
              <div className="flex flex-col gap-2 p-5 pt-0">
                <div
                  className="
                  flex 
                  flex-row 
                  items-center 
                  gap-4 
                  w-full"
                >
                  {secondaryAction && secondaryLabel && (
                    <Button
                      disabled={disabled}
                      loading={loading}
                      onClick={handleSecondaryAction}
                      outline
                    >
                      {secondaryLabel}
                    </Button>
                  )}
                  <Button
                    disabled={disabled}
                    loading={loading}
                    onClick={handleSubmit}
                  >
                    {actionLabel}
                  </Button>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
