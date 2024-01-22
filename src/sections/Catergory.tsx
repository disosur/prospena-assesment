import CategoryCard from "../components/CategoryCard";

import ProductImage from "../assets/product-3.jpg";

export default function Catergory() {
  return (
    <section className="bg-stone-200">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center  py-8">
        <CategoryCard image={ProductImage} text="Sweatshirts" />
        <CategoryCard image={ProductImage} text="Hoodies" />
        <CategoryCard image={ProductImage} text="Pair" />
      </div>
      <div className="hidden md:flex h-60 py-8 justify-center items-center font-bold text-xl text-center ">
        <p className="max-w-[820px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
