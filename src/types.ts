export interface Product {
  id: string;
  name: string;
  description: string;
  benefits?: string[];
  price: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string | string[];
  date: string;
}
