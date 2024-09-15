interface ProductRequest {
  id: number;
  type: string;
  name: string;
  description: string;
  maxPrice: number;
  minPrice: number;
  stock: number;
  brand: string;
  promo: number;
  computer: boolean;
  laptop: boolean;
  smartphone: boolean;
  mouse: boolean;
  imagesLinks: string[];
}
