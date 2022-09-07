interface PizzaBlockType {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  children?: JSX.Element | JSX.Element[];
}

export default PizzaBlockType;
