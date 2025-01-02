import RegisterForm from "@/components/forms/RegisterForm";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PageRegister = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="max-w-xl w-full">
        <CardHeader>
          <CardTitle>Meta treinos - Registro</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />

          <div className="mt-4 w-full text-center">
            <p>
              Já possui conta?{" "}
              <Link
                className="text-blue-500 hover:opacity-75 transition duration-200"
                href={"/"}
              >
                Faça Login
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageRegister;
