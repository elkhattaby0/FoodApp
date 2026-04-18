export type ProductItem = {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  price: string;
  rating: string;
};

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: { item: ProductItem };
  Payment: { item: ProductItem } | undefined;
};

