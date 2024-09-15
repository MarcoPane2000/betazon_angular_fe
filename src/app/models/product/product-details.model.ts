interface ProductDetails {
  id: number;
  type: string;
  name: string;
  description: string;
  fullPrice: number;
  discountedPrice: number;
  stock: number;
  brand: number;
  promo: number;
  reviewsNumber: number;
  reviewsAverageStars: number;
  reviews: Review[];
}
