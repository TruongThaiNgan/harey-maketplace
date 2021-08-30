import { ProductProps } from '@Component/Product';

interface ProductItem extends ProductProps {
  id: number;
}
export interface ProductListProps {
  amountItemPerRow?: number;
  list: ProductItem[];
}
