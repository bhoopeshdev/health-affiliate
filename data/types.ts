export interface Review {
    id: number;
    user: string;
    rating: number;
    comment: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    images: string[];
    price: number;
    striked_price?: number;
    category: string;
    subcategory: string;
    short_description: string;
    full_description: string[];
    affiliate_link: string;
    rating: number;
    reviews: Review[];
    trending: boolean;
    tags: string[];
    variants?: { [key: string]: {
        link?: string;
        current?: boolean;
      } | undefined }; 
  }
  
  export interface ProductGridProps {
    title: string;
    products: Product[];
    onProductClick?: (productId: string) => void; // Marking it optional with `?`
  }
  
  