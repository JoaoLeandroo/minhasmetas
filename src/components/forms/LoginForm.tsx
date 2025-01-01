import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Link from "next/link";

const LoginForm = () => {
  return (
    <Card className="max-w-xl w-full">
      <CardHeader>
        <CardTitle>Meta treinos - Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-y-3">
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

          <Button type="submit" className="w-full mt-4 h-11">
            Entrar
          </Button>
        </form>
        <div className="mt-4 w-full text-center">
            <p>
                Não possui conta? <Link className="text-blue-500 hover:opacity-75 transition duration-200" href={"/register"}>Cadastre-se</Link>
            </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
