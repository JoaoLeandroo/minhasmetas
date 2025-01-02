"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import registerUser from "@/lib/action";
import Form from "next/form";
import { useActionState } from "react";
import { IoAlertCircleSharp } from "react-icons/io5";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  return (
    <>
    {
      state?.success === false && (
        <div role="alert" className="w-full p-3 rounded shadow-md bg-red-500 border border-red-950 flex items-center justify-center gap-x-2">
          <IoAlertCircleSharp size={30} color="white"/>
          <p className="text-white font-semibold">{state?.message}</p>
        </div>
      ) 
    }
    {
      state?.success === true && (
        <div role="alert" className="w-full p-3 rounded shadow-md bg-green-500 border border-green-950 flex items-center justify-center gap-x-2">
        <IoAlertCircleSharp size={30} color="white"/>
        <p className="text-white font-semibold">{state?.message}</p>
      </div>
      )
    }
      <Form className="flex flex-col gap-y-3" action={formAction}>
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            className="h-11"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            className="h-11"
          />
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
            className="h-11"
          />
        </div>

        <Button disabled={isPending} type="submit" className="w-full mt-4 h-11">
          Cadastrar
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
