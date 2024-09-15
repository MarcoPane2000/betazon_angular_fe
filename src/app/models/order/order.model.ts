interface Order {
  id: number;
  cardID: number;
  date: string;
  totalItems: number;
  totalCosts: number;
  products: ProductResponse[];
}
