export interface ShopProps {
  template?: string;
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
