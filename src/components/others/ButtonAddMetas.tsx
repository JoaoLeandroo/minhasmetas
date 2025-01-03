import { Button } from "@/components/ui/button";
import { FaPlusCircle } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormAddMetas from "../forms/FormAddMetas";

interface Props {
  id: string;
}

const ButtonAddMetas = ({id}: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <FaPlusCircle />
            Adicionar nova meta
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Registre o seu novo treino!</DialogTitle>
            <DialogDescription className="text-xs">
              Preencha todos os campos, com sua nova conquista!
            </DialogDescription>
          </DialogHeader>

          <div>
            <FormAddMetas id={id}/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ButtonAddMetas;
