import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Form from "next/form";
import { trainingUser } from "@/lib/action";
interface Props {
  id: string;
}

const FormAddMetas = ({ id }: Props) => {
  return (
    <Form action={trainingUser} className="flex flex-col gap-y-3">
      <Input type="hidden" name="id" id="id" value={id} />
      {/* Tipo de treino */}
      <Label htmlFor="treino" className="flex flex-col gap-y-1">
        <p className="text-xs">Qual o tipo de Treino?</p>
        <Input
          type="text"
          name="treino"
          id="treino"
          placeholder="ex: musculação..."
          required
        />
      </Label>

      {/* Local */}
      <Label htmlFor="local" className="flex flex-col gap-y-1">
        <p className="text-xs">Onde foi realizado o treino?</p>
        <Input
          type="text"
          name="local"
          id="local"
          placeholder="ex: academia..."
          required
        />
      </Label>

      {/* energia gasta */}
      <div className="flex flex-col">
        <p className="text-xs">Quanto você considera que gastou de energia?</p>
        <div className="flex gap-x-3">
          <Label className="flex items-center justify-center w-full flex-col">
            <Input
              type="number"
              name="energia"
              defaultChecked
              className="cursor-pointer w-full"
              min={1}
              max={100}
              required
            />
          </Label>
        </div>
      </div>

      {/* descrição do treino */}
      <Label htmlFor="description" className="flex flex-col gap-y-1">
        <p className="text-xs">Faça uma breve descrição do treino!</p>
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="ex: Hoje treinei pernas..."
          required
        />
      </Label>

      <Button type="submit" className="mt-2">
        Enviar
      </Button>
    </Form>
  );
};

export default FormAddMetas;
