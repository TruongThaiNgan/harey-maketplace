interface productList {
  id: number;
  name: string;
}
export interface ProductListProps {
  amountItemPerRow?: number;
  list: productList[];
}
