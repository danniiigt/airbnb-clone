"use client";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { Modal } from "./Modal";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { toast } from "react-hot-toast";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";

export const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = () => {
    loginModal.onClose();
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((res) => {
        setIsLoading(false);

        if (res?.ok) {
          toast.success("¡Bienvenido de vuelta!");
          loginModal.onClose();
          router.refresh();
        } else {
          toast.error("¡Ups! Algo salió mal, intenta de nuevo");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("¡Ups! Algo salió mal, intenta de nuevo");
      });
  };

  const handleToggleAuth = () => {
    loginModal.onToggle();
    registerModal.onToggle();
  };

  const bodyContent = (
    <div>
      <Heading
        title="¡Bienvenido de vuelta!"
        subtitle={
          <h1>
            Iniciar sesión o{" "}
            <button className="text-rose-500" onClick={handleToggleAuth}>
              Crear una cuenta
            </button>
          </h1>
        }
      />
      <div className="flex flex-col gap-3 mt-4">
        <Input
          id="email"
          type="email"
          label="Correo electrónico"
          placeholder="Tu correo electrónico"
          disabled={isLoading}
          errors={errors}
          required
          register={register}
          rules={{
            required: {
              value: true,
              message: "El correo electrónico es requerido",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "El correo electrónico no es válido",
            },
          }}
        />
        <Input
          id="password"
          type="password"
          label="Contraseña"
          placeholder="Contraseña segura mín. 6 caracteres"
          disabled={isLoading}
          errors={errors}
          required
          register={register}
          rules={{
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          }}
        />
      </div>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <div className="flex gap-3 items-center">
        <hr className="w-full" />
        <h1 className="text-sm text-neutral-400 font-light">o</h1>
        <hr className="w-full" />
      </div>

      <div className="flex gap-4 items-center">
        <Button
          outline
          disabled={isLoading}
          icon={<FcGoogle />}
          onClick={() => signIn("google")}
        >
          Acceder con Google
        </Button>
        <Button
          outline
          disabled={isLoading}
          icon={<AiFillGithub />}
          onClick={() => signIn("github")}
        >
          Acceder con GitHub
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      loading={isLoading}
      actionLabel={"Acceder"}
      isOpen={loginModal.isOpen}
      title={"Iniciar Sesión"}
      body={bodyContent}
      footer={footerContent}
      onClose={handleCloseModal}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};
