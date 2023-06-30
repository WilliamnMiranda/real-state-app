import { ReactElement } from "react";
import Stage1 from "../../assets/intro/Rectangle6.png";
import Stage2 from "../../assets/intro/Rectangle2.png";
import Stage3 from "../../assets/intro/Rectangle3.png";
interface IData {
  title: string;
  description: string;
  flag: string;
  image: ReactElement<any, any>;
}

const props = {
  width: "100%",
  height: "100%",
};

const data: IData[] = [
  {
    title: "Encontre o melhor lugar para ficar",
    flag: "com bom preço",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    image: Stage1,
  },
  {
    title: "Venda rápido seu imóvel ",
    flag: "com apenas um clique",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    image: Stage2,
  },
  {
    title: "Faça a escolha perfeita para",
    flag: "sua futura casa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    image: Stage3,
  },
];

export default data;
