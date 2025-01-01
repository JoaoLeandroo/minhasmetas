import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FormAddMetas = () => {
  return (
    <form className="flex flex-col gap-y-3">
      {/* Tipo de treino */}
      <Label htmlFor="treino" className="flex flex-col gap-y-1">
        <p className="text-xs">Qual o tipo de Treino?</p>
        <Input
          type="text"
          name="treino"
          id="treino"
          className=""
          placeholder="ex: musculação..."
        />
      </Label>

      {/* Local */}
      <Label htmlFor="local" className="flex flex-col gap-y-1">
        <p className="text-xs">Onde foi realizado o treino?</p>
        <Input
          type="text"
          name="local"
          id="local"
          className=""
          placeholder="ex: academia..."
        />
      </Label>

      {/* energia gasta */}
      <div className="flex flex-col">
        <p className="text-xs">Quanto você considera que gastou de energia?</p>
        <div className="flex gap-x-3">
          {[50, 60, 70, 80, 90, 100].map((value) => (
            <Label key={value} className="flex items-center justify-center">
              <Input
                type="radio"
                name="energia"
                defaultChecked
                value={value}
                className="cursor-pointer"
              />
              <span className="text-base flex items-center justify-center">
                {value}%
              </span>
            </Label>
          ))}
        </div>
      </div>

      {/* descrição do treino */}
      <Label htmlFor="desc" className="flex flex-col gap-y-1">
        <p className="text-xs">Faça uma breve descrição do treino!</p>
        <Input
          type="text"
          name="desc"
          id="desc"
          className=""
          placeholder="ex: Hoje treinei pernas..."
        />
      </Label>

      <Button type="submit" className="mt-2">Enviar</Button>
    </form>
  );
};

export default FormAddMetas;
