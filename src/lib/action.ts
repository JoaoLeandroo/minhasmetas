"use server";
import db from "./db";
import { z } from "zod";
import { redirect } from "next/navigation";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

const RegisterSchema = z.object({
  name: z.string().min(3, { message: "Informe um nome válido." }),
  email: z
    .string()
    .email({ message: "Informe um email valido." })
    .transform((email) => email.toLowerCase()),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no minimo 6 caracters." }),
});

type RegisterUserError = {
  name?: string[];
  email?: string[];
  password?: string[];
};

export default async function registerUser(
  _prev: any,
  formData: FormData
): Promise<{ Error?: RegisterUserError }> {
  const validateFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      Error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateFields.data;

  const emailLowerCase = email.toLowerCase();

  const verifyUser = await db.usuario.findUnique({
    where: {
      email: emailLowerCase,
    },
  });
  // verificar se o usuario já está cadastrado
  if (verifyUser) {
    return {
      Error: {
        email: ["Email já cadastrado."],
      },
    };
  }

  // cadastrar usuario
  await db.usuario.create({
    data: {
      name: name,
      email: emailLowerCase,
      password: password,
    },
  });

  return {};
}

// LOGAR USUARIO
const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Informe um email valido." })
    .transform((email) => email.toLowerCase()),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no minimo 6 caracters." }),
});

type LoginUserError = {
  email?: string[];
  password?: string[];
};

export const LoginUser = async (
  _prevState: any,
  formData: FormData
): Promise<{ Error?: LoginUserError }> => {
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
    where: { email },
  });

  if (!verifyUser) {
    return {
      Error: {
        email: ["Email ou senha incorretos."],
        password: ["Email ou senha incorretos."],
      },
    };
  }

  if (verifyUser.password != password) {
    return {
      Error: {
        email: ["Email ou senha incorretos."],
        password: ["email ou senha incorretos."],
      },
    };
  }

  const token = sign(
    {
      id: verifyUser.id,
      name: verifyUser.name,
      email: verifyUser.email,
    },
    process.env.JWT_SECRET as string,
    {
      subject: verifyUser.id,
      expiresIn: "30d",
    }
  );

  const cookieToken = await cookies();
  cookieToken.set("metas_token", token);

  redirect("/dashboard");
};

// ADICIONAR TREINOS

export const trainingUser = async (formData: FormData) => {

  const idUser = formData.get("id")?.toString()
  const idTreino = formData.get("treino")?.toString()
  const idLocal = formData.get("local")?.toString()
  const idEnergia = Number(formData.get("energia")?.toString())
  const idDesc = formData.get("description")?.toString()

  if(!idUser || !idTreino || !idLocal || !idEnergia || !idDesc) {
    throw new Error("Todos os campos precisam ser enviados!")
  }

  const verifyUser = db.usuario.findFirst({
    where: {
      id: idUser
    }
  })

  if(!verifyUser) {
    throw new Error("USUARIO NAO EXISTE")
  }

  await db.meta.create({
    data: {
      usuarioId: idUser,
      treino: idTreino,
      local: idLocal,
      energia: idEnergia,
      desc: idDesc,
    }
  })

  redirect("/dashboard/metas")
}

// exibir treinos
export const loadResults = async (id: string) => {

  const infos = await db.meta.findMany({
      where: {
          usuarioId: id
      },
      orderBy: {
        createAt: "desc"
      }
  })

  return infos
}