import { TypePage } from '@Slice/interfaces';

export interface PageLoadProps {
  type: TypePage;
  limit: number;
  page: number;
  sort?: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export interface ProductItem {
  id: number;
  title: string;
  oldPrice?: string;
  price: string;
  image1: string;
  image2: string;
  categories: string[];
  description: string[];
  color: string[];
  vendor: string[];
  brand: string;
}
