import ProductCard from "../components/ProductCard";

import productimage from "../assets/product-3.jpg";
import Button from "../components/Button";

export default function Product() {
  return (
    <section className="flex items-center py-4 flex-col">
      <div className="flex flex-wrap justify-center gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard
            key={index}
            image={productimage}
            title="LOREM IPSUM"
            text="Lorem ipsum"
          />
        ))}
      </div>

      <Button>More</Button>
    </section>
  );
}
