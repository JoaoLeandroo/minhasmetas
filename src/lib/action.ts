"use server";
import db from "./db";

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
