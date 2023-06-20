"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "./Avatar";
import { useCallback, useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { BiPaperPlane } from "react-icons/bi";
import {
  MdFavoriteBorder,
  MdInbox,
  MdLogout,
  MdLogin,
  MdHelpOutline,
} from "react-icons/md";
import {
  AiOutlineUserAdd,
  AiOutlineAppstoreAdd,
  AiOutlineHome,
} from "react-icons/ai";
import { useRentModal } from "@/app/hooks/useRentModal";

export const UserMenu = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [registerModal.isOpen, loginModal.isOpen]);

  const handleRegister = () => {
    registerModal.onOpen();
  };

  const handleSignIn = () => {
    loginModal.onOpen();
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {}
  };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div
        className="
        flex 
        flex-row
        items-center
        gap-3
      "
      >
        <div
          onClick={onRent}
          className="
              hidden
              md:block
              text-sm
              font-semibold
              py-3
              px-4
              rounded-full
              hover:bg-neutral-100
              transition
              cursor-pointer
            "
        >
          Pon tu casa en Airbnb
        </div>
        <div
          onClick={toggleOpen}
          className={`
            p-4
            md:py-1 md:pl-3 md:pr-1
            border
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            ${isOpen ? "shadow" : ""}
        `}
        >
          <AiOutlineMenu />
          <div
            className="
            hidden
            md:block
          "
          >
            <Avatar user={currentUser} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-lg
            w-[40vw]
            md:w-5/6
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            border
          "
        >
          <div className="flex flex-col cursor-pointer py-2 rounded">
            {currentUser ? (
              <>
                <MenuItem
                  label="Mis viajes"
                  icon={<BiPaperPlane size={18} />}
                />
                <MenuItem
                  label="Mis favoritos"
                  icon={<MdFavoriteBorder size={18} />}
                />
                <MenuItem label="Mis reservas" icon={<MdInbox size={18} />} />
                <MenuItem
                  label="Mis propiedades"
                  icon={<AiOutlineHome size={18} />}
                />
                <hr className="my-2" />
                <MenuItem
                  label="Pon tu casa en Airbnb"
                  onClick={rentModal.onOpen}
                />
                <hr className="my-2" />
                <MenuItem
                  label="Cerrar Sesión"
                  onClick={handleSignOut}
                  icon={<MdLogout size={18} />}
                />
              </>
            ) : (
              <>
                <MenuItem
                  label="Regístrate"
                  onClick={handleRegister}
                  bold
                  icon={<AiOutlineUserAdd size={18} />}
                />
                <MenuItem
                  label="Iniciar sesión"
                  onClick={handleSignIn}
                  icon={<MdLogin size={18} />}
                />
                <hr className="my-2" />
                <MenuItem
                  label="Pon tu casa en Airbnb"
                  icon={<AiOutlineAppstoreAdd size={18} />}
                />
                <MenuItem label="Ayuda" icon={<MdHelpOutline size={18} />} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
