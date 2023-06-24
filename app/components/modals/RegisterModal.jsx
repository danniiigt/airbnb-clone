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

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseModal = () => {
    registerModal.onClose();
    reset();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then((res) => {
        console.log(res);
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((err) => {
        toast.error("Error al crear la cuenta, prueba de nuevo más tarde.");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleToggleAuth = () => {
    loginModal.onToggle();
    registerModal.onToggle();
  };

  const bodyContent = (
    <div>
      <Heading
        title="¡Bienvenido a Airbnb!"
        subtitle={
          <h1>
            Crear una cuenta o{" "}
            <button className="text-rose-500" onClick={handleToggleAuth}>
              Iniciar sesión
            </button>
          </h1>
        }
      />
      <div className="flex flex-col gap-3 mt-4">
        <Input
          id="name"
          label="Nombre"
          placeholder="Tu nombre completo"
          disabled={isLoading}
          errors={errors}
          required
          register={register}
          rules={{
            required: {
              value: true,
              message: "El nombre es requerido",
            },
          }}
        />
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
          Iniciar con Google
        </Button>
        <Button outline disabled={isLoading} icon={<AiFillGithub />}>
          Iniciar con GitHub
        </Button>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      loading={isLoading}
      actionLabel={"Crear cuenta"}
      isOpen={registerModal.isOpen}
      title={"Registro"}
      body={bodyContent}
      footer={footerContent}
      onClose={handleCloseModal}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};
