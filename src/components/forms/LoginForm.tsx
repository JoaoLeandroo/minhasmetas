"use client";
import { LoginUser } from "@/lib/action";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Link from "next/link";
import { useActionState, useState } from "react";

const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(LoginUser, null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  return (
    <Card className="max-w-xl w-full">
      <CardHeader>
        <CardTitle>Meta treinos - Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-y-3" action={formAction}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
              className="h-11"
              value={formData.email}
              onChange={handleChange}
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
              className="h-11"
              value={formData.password}
              onChange={handleChange}
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
            Entrar
          </Button>
        </form>
        <div className="mt-4 w-full text-center">
          <p>
            Não possui conta?{" "}
            <Link
              className="text-blue-500 hover:opacity-75 transition duration-200"
              href={"/register"}
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
