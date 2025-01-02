"use server";
import db from "./db";
import { z } from "zod"
import { redirect } from "next/navigation"

export default async function registerUser(_prev: any, formDate: FormData) {
  const entries = Array.from(formDate.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };
  console.log(data);

  if (!data.email || !data.name || !data.password) {
    return {
      message: "Preencha todos os campos.",
      success: false,
    };
  }

  const emailLowerCase = data.email.toLowerCase();

  const verifyUser = await db.usuario.findUnique({
    where: {
      email: emailLowerCase,
    },
  });
  // verificar se o usuario já está cadastrado
  if (verifyUser) {
    return {
      message: "Usuário já cadastrado.",
      success: false,
    };
  }

  // cadastrar usuario
  await db.usuario.create({
    data: {
      name: data.name,
      email: emailLowerCase,
      password: data.password,
    },
  });

  return {
    message: "Usuário cadastrado com sucesso!",
    success: true,
  };
}


const LoginSchema = z.object({
    email: z.string().email({message: "Informe um email valido."}).transform(email => email.toLowerCase()),
    password: z.string().min(6, {message: "A senha deve ter no minimo 6 caracters."}),
})

type LoginUserError = {
    email?: string[];
    password?: string[];
};

export const LoginUser = async (_prevState: any, formData: FormData): Promise<{ Error?: LoginUserError }> => {
    const validateFields = LoginSchema.safeParse(
        Object.fromEntries(formData.entries())
      );

      if (!validateFields.success) {
        return {
          Error: validateFields.error.flatten().fieldErrors,
        };
      }

      const { email, password } = validateFields.data;

      const verifyUser = await db.usuario.findUnique({
        where: {email}
      })

      if(!verifyUser) {
        return {
            Error: {
                email: ["Email ou senha incorretos."],
                password: ["Email ou senha incorretos."]
            }
        }
      }

      if(verifyUser.password != password) {
        return {
            Error: {
                email: ["Email ou senha incorretos."],
                password: ["email ou senha incorretos."]
            }
        }
      }

      redirect("/dashboard")

}