import { ProductCard } from "./product-card"

interface Product {
  title: string
  description: string
  instructor?: string
  category?: string
  href: string
  featured?: boolean
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  )
}
