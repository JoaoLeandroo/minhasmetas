"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import registerUser from "@/lib/action";
import Form from "next/form";
import { useActionState, useState } from "react";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Form className="flex flex-col gap-y-3" action={formAction}>
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
            className="h-11"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error && state?.Error?.name
                ? state?.Error?.name?.[0]
                : null}
            </p>
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            className="h-11"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error && state?.Error?.email
                ? state?.Error?.email?.[0]
                : null}
            </p>
          </div>
        </div>

        <div>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
            value={formData.password}
            onChange={handleChange}
            className="h-11"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state?.Error && state?.Error?.password
                ? state?.Error?.password?.[0]
                : null}
            </p>
          </div>
        </div>

        <Button disabled={isPending} type="submit" className="w-full mt-4 h-11">
          Cadastrar
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
